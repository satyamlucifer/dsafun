import 'server-only'
import { z } from 'zod'
import type { SupportedLanguage } from '@/lib/db/schema'

const PistonRunSchema = z.object({
  stdout: z.string(),
  stderr: z.string(),
  code: z.number().nullable(),
  signal: z.string().nullable(),
})

const PistonResponseSchema = z.object({
  language: z.string(),
  version: z.string(),
  run: PistonRunSchema,
  compile: PistonRunSchema.optional(),
})

export type JudgeResult = {
  stdout: string | null
  stderr: string | null
  compile_output: string | null
  message: string | null
  time: string | null
  memory: number | null
  status: { id: number; description: string }
}

// Piston language slug + filename for each supported language
// Language names match Piston's package registry (node=JS, gcc=C++)
const LANG_MAP: Record<SupportedLanguage, { language: string; version: string; filename: string }> = {
  python:     { language: 'python',     version: '3.10.0',  filename: 'solution.py'  },
  javascript: { language: 'javascript', version: '18.15.0', filename: 'solution.js'  },
  typescript: { language: 'typescript', version: '5.0.3',   filename: 'solution.ts'  },
  java:       { language: 'java',       version: '15.0.2',  filename: 'Main.java'    },
  go:         { language: 'go',         version: '1.16.2',  filename: 'main.go'      },
  cpp:        { language: 'c++',        version: '10.2.0',  filename: 'solution.cpp' },
  rust:       { language: 'rust',       version: '1.50.0',  filename: 'main.rs'      },
}

// Judge0 status IDs kept for compatibility with session.ts
const STATUS = {
  ACCEPTED:           { id: 3,  description: 'Accepted' },
  TLE:                { id: 5,  description: 'Time Limit Exceeded' },
  COMPILATION_ERROR:  { id: 6,  description: 'Compilation Error' },
  RUNTIME_ERROR:      { id: 11, description: 'Runtime Error (NZEC)' },
}

export async function runJudge0Submission(input: {
  language: SupportedLanguage
  sourceCode: string
  stdin?: string
}): Promise<JudgeResult> {
  const baseUrl = process.env.JUDGE0_BASE_URL
  if (!baseUrl) throw new Error('JUDGE0_BASE_URL is not configured')

  const lang = LANG_MAP[input.language]

  const headers: Record<string, string> = { 'Content-Type': 'application/json' }
  if (process.env.JUDGE0_AUTH_TOKEN) {
    headers['Authorization'] = `Token ${process.env.JUDGE0_AUTH_TOKEN}`
  }

  const response = await fetch(`${baseUrl}/api/v2/execute`, {
    method: 'POST',
    headers,
    signal: AbortSignal.timeout(10000),
    body: JSON.stringify({
      language: lang.language,
      version:  lang.version,
      files:    [{ name: lang.filename, content: input.sourceCode }],
      stdin:    input.stdin ?? '',
      run_timeout:     3000,
      compile_timeout: 10000,
      run_memory_limit: 268435456, // 256 MB
    }),
  })

  if (!response.ok) {
    throw new Error(`Piston execution failed: ${response.status}`)
  }

  const data = PistonResponseSchema.parse(await response.json())
  const { run, compile } = data

  const compileError = compile && compile.code !== 0
    ? (compile.stderr || compile.stdout || null)
    : null
  const timedOut = run.signal === 'SIGKILL' || run.signal === 'SIGXCPU'
  const accepted  = run.code === 0 && !timedOut && !compileError

  const status = compileError ? STATUS.COMPILATION_ERROR
    : timedOut               ? STATUS.TLE
    : accepted               ? STATUS.ACCEPTED
    :                          STATUS.RUNTIME_ERROR

  return {
    stdout:         run.stdout  || null,
    stderr:         run.stderr  || null,
    compile_output: compileError,
    message:        null,
    time:           null,
    memory:         null,
    status,
  }
}
