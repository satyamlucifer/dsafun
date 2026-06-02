import { z } from 'zod'
import { eq, ne, and } from 'drizzle-orm'
import { createTRPCRouter, publicProcedure, protectedProcedure } from '../trpc'
import { runJudge0Submission } from '@/lib/judge0'
import { aiGenerate } from '@/lib/ai'
import { db } from '@/lib/db'
import {
  sessions, problems, patterns, coachTurns, testRuns, debriefs,
  users, userPatterns,
} from '@/lib/db/schema'
import { PROBLEMS_SEED, PATTERNS_SEED } from '@/lib/db/seed-data'
import type { SupportedLanguage, TestRunResult } from '@/lib/db/schema'

const SUPPORTED_LANGUAGES = ['python', 'javascript', 'typescript', 'java', 'go', 'cpp', 'rust'] as const

// Convert "key1 = val1, key2 = val2" → "val1\nval2"
// Commas inside brackets don't count as separators.
function toJudgeStdin(input: string): string {
  // If already multi-line (e.g. Trie ops), pass through as-is
  if (input.includes('\n')) return input
  const values: string[] = []
  let depth = 0
  let current = ''
  for (const ch of input) {
    if ('[({'.includes(ch)) { depth++; current += ch }
    else if ('])}' .includes(ch)) { depth--; current += ch }
    else if (ch === ',' && depth === 0) {
      const part = current.trim()
      const eq = part.indexOf(' = ')
      values.push(eq !== -1 ? part.slice(eq + 3).trim() : part)
      current = ''
    } else {
      current += ch
    }
  }
  if (current.trim()) {
    const part = current.trim()
    const eq = part.indexOf(' = ')
    values.push(eq !== -1 ? part.slice(eq + 3).trim() : part)
  }
  return values.map(unquote).join('\n')
}

function unquote(val: string): string {
  if (val.length >= 2 &&
      ((val[0] === '"' && val[val.length - 1] === '"') ||
       (val[0] === "'" && val[val.length - 1] === "'"))) {
    return val.slice(1, -1)
  }
  return val
}

const XP_BASE = { easy: 10, medium: 25, hard: 50 } as const
const RANK_THRESHOLDS = [0, 500, 1200, 2500, 5000, 10000, 18000, 25000]

function calcRankIdx(xp: number) {
  let idx = 0
  for (let i = RANK_THRESHOLDS.length - 1; i >= 0; i--) {
    if (xp >= RANK_THRESHOLDS[i]) { idx = i; break }
  }
  return idx
}

export const sessionRouter = createTRPCRouter({
  byId: publicProcedure
    .input(z.object({ sessionId: z.string().uuid() }))
    .query(async ({ input }) => {
      if (!db) return null
      const rows = await db
        .select({ session: sessions, problem: problems, pattern: patterns })
        .from(sessions)
        .innerJoin(problems, eq(sessions.problemId, problems.id))
        .innerJoin(patterns, eq(problems.patternId, patterns.id))
        .where(eq(sessions.id, input.sessionId))
        .limit(1)
      return rows[0] ?? null
    }),

  runTests: publicProcedure
    .input(z.object({
      sessionId: z.string().uuid().optional(),
      problemTitle: z.string(),
      code: z.string(),
      language: z.enum(SUPPORTED_LANGUAGES).default('python'),
    }))
    .mutation(async ({ input }) => {
      console.log('[runTests] called:', { problemTitle: input.problemTitle, language: input.language, codeLen: input.code.length, sessionId: input.sessionId ?? 'none' })

      const examples = db
        ? (await db.select().from(problems).where(eq(problems.title, input.problemTitle)).limit(1))[0]?.examples ?? []
        : PROBLEMS_SEED.find((p) => p.title === input.problemTitle)?.examples ?? []

      console.log('[runTests] found', examples.length, 'test cases')
      if (examples.length === 0) {
        console.warn('[runTests] ⚠️ no examples found for problem:', input.problemTitle)
      }

      let results
      if (!process.env.JUDGE0_BASE_URL) {
        console.log('[runTests] JUDGE0_BASE_URL not set — returning mock passes')
        results = examples.map((ex, i) => ({
          status: 'PASS' as const,
          input: ex.input,
          expected: ex.output,
          actual: ex.output,
          time: '0.08s',
          caseIndex: i,
        }))
      } else {
        console.log('[runTests] JUDGE0_BASE_URL:', process.env.JUDGE0_BASE_URL)
        results = await Promise.all(
          examples.map(async (ex, i) => {
            const stdin = toJudgeStdin(ex.input)
            console.log(`[runTests] case ${i}: stdin="${stdin.slice(0, 80)}"`)
            try {
              const res = await runJudge0Submission({
                language: input.language as SupportedLanguage,
                sourceCode: input.code,
                stdin,
              })
              const actual = (res.stdout ?? '').trim()
              const expected = ex.output.trim()
              const passed = actual === expected
              console.log(`[runTests] case ${i}: status=${res.status.description} passed=${passed}`)
              if (!passed) {
                console.log(`[runTests] case ${i}: expected="${expected}" actual="${actual}"`)
              }
              if (res.stderr) console.log(`[runTests] case ${i}: stderr="${res.stderr.slice(0, 300)}"`)
              if (res.compile_output) console.log(`[runTests] case ${i}: compile_output="${res.compile_output.slice(0, 300)}"`)
              return {
                status: (passed ? 'PASS' : 'FAIL') as 'PASS' | 'FAIL' | 'ERROR',
                input: ex.input, expected,
                actual: actual || res.stderr || res.compile_output || 'no output',
                time: res.time ?? '—', caseIndex: i,
              }
            } catch (err) {
              console.error(`[runTests] case ${i}: ❌ exception:`, err instanceof Error ? err.message : err)
              if (err instanceof Error && err.stack) console.error(`[runTests] case ${i}: stack:`, err.stack)
              return { status: 'ERROR' as const, input: ex.input, expected: ex.output, actual: `execution error: ${err instanceof Error ? err.message : 'unknown'}`, time: '—', caseIndex: i }
            }
          }),
        )
      }

      if (input.sessionId && db) {
        await db.insert(testRuns).values({ sessionId: input.sessionId, code: input.code, language: input.language, results: results as unknown as TestRunResult[] })
      }

      const passed = results.filter((r) => r.status === 'PASS').length
      console.log('[runTests] done:', { passed, total: results.length })
      return { results, summary: { passed, total: results.length } }
    }),

  coachAsk: publicProcedure
    .input(z.object({
      sessionId: z.string().uuid().optional(),
      patternSlug: z.string(),
      problemTitle: z.string(),
      problemPrompt: z.string(),
      messages: z.array(z.object({ role: z.enum(['user', 'assistant']), content: z.string() })),
    }))
    .mutation(async ({ input }) => {
      const patternName = db
        ? (await db.select({ name: patterns.name }).from(patterns).where(eq(patterns.slug, input.patternSlug)).limit(1))[0]?.name ?? input.patternSlug
        : PATTERNS_SEED.find((p) => p.slug === input.patternSlug)?.name ?? input.patternSlug

      const system = `You are a Socratic DSA coach for the pattern "${patternName}".
Problem: "${input.problemTitle}".
${input.problemPrompt}

Rules:
- Ask one focused question at a time. Never give the answer directly.
- When the user is stuck, offer an analogy or a smaller sub-problem.
- Praise honest admissions ("I don't know") more than clever answers.
- Keep responses under 80 words.
- Respond in plain text, no markdown, no code blocks.`

      let reply = "What do you know for certain about the smallest subproblem here?"
      const startMs = Date.now()
      let tokensIn = 0, tokensOut = 0
      try {
        const result = await aiGenerate({
          role: 'coach',
          system,
          messages: input.messages.map((m) => ({ role: m.role, content: m.content })),
          maxTokens: 200,
          temperature: 0.7,
        })
        reply = result.text
        tokensIn = result.tokensIn ?? 0
        tokensOut = result.tokensOut ?? 0
      } catch { /* use fallback */ }

      if (input.sessionId && db) {
        const latencyMs = Date.now() - startMs
        const lastUser = input.messages.at(-1)
        if (lastUser?.role === 'user') {
          await db.insert(coachTurns).values({ sessionId: input.sessionId, role: 'user', content: lastUser.content })
        }
        await db.insert(coachTurns).values({ sessionId: input.sessionId, role: 'assistant', content: reply, tokensIn, tokensOut, latencyMs })
      }

      return { reply }
    }),

  submit: protectedProcedure
    .input(z.object({
      sessionId: z.string().uuid(),
      finalCode: z.string(),
      hintsUsed: z.number().min(0).max(3),
      timeMs: z.number().min(0),
    }))
    .mutation(async ({ input, ctx }) => {
      const { db: database, dbUser } = ctx

      const rows = await database
        .select({ session: sessions, problem: problems, pattern: patterns })
        .from(sessions)
        .innerJoin(problems, eq(sessions.problemId, problems.id))
        .innerJoin(patterns, eq(problems.patternId, patterns.id))
        .where(and(eq(sessions.id, input.sessionId), eq(sessions.userId, dbUser.id)))
        .limit(1)
      if (!rows.length) throw new Error('Session not found')
      const { problem } = rows[0]

      const base = XP_BASE[problem.difficulty] ?? 10
      const xpEarned = Math.max(5, base - input.hintsUsed * 5 + (input.timeMs < problem.estMin * 60 * 1000 * 0.8 ? 5 : 0))

      await database.update(sessions).set({ status: 'submitted', endedAt: new Date(), xpEarned }).where(eq(sessions.id, input.sessionId))

      const timeSecs = Math.floor(input.timeMs / 1000)
      const timeStr = `${String(Math.floor(timeSecs / 60)).padStart(2, '0')}:${String(timeSecs % 60).padStart(2, '0')}`

      const whatWorked = [
        `Solved "${problem.title}"`,
        ...(input.hintsUsed === 0 ? ['Clean solve — no hints needed'] : []),
        ...(input.timeMs < problem.estMin * 60 * 1000 ? [`Finished in ${timeStr}, under the ${problem.estMin}-min estimate`] : []),
      ]
      const wobbles = [
        ...(input.hintsUsed > 0 ? [`Used ${input.hintsUsed} hint${input.hintsUsed > 1 ? 's' : ''}`] : []),
        ...(input.timeMs > problem.estMin * 60 * 1000 * 1.5 ? [`Took ${timeStr} — longer than estimated ${problem.estMin} min`] : []),
      ]

      const nextProblems = await database
        .select({ title: problems.title })
        .from(problems)
        .where(and(eq(problems.patternId, problem.patternId), ne(problems.id, problem.id)))
        .limit(3)

      await database.insert(debriefs).values({
        sessionId: input.sessionId,
        whatWorked,
        wobbles,
        nextMoves: nextProblems.map((p) => p.title),
      }).onConflictDoNothing()

      const now = new Date()
      const todayStart = new Date(now); todayStart.setHours(0, 0, 0, 0)
      const yesterdayStart = new Date(todayStart); yesterdayStart.setDate(yesterdayStart.getDate() - 1)
      const last = dbUser.lastSessionAt
      const newStreak = !last ? 1 : last >= todayStart ? dbUser.streakDays : last >= yesterdayStart ? dbUser.streakDays + 1 : 1
      const newXp = dbUser.xp + xpEarned

      await database.update(users).set({ xp: newXp, streakDays: newStreak, lastSessionAt: now, rankIdx: calcRankIdx(newXp) }).where(eq(users.id, dbUser.id))

      const existing = (await database.select().from(userPatterns).where(and(eq(userPatterns.userId, dbUser.id), eq(userPatterns.patternId, problem.patternId))).limit(1))[0]
      const newFluency = Math.min(1, (existing?.fluency ?? 0) + 0.08 - input.hintsUsed * 0.02)
      if (existing) {
        await database.update(userPatterns).set({ fluency: newFluency, problemsSolved: (existing.problemsSolved ?? 0) + 1, lastSeenAt: now })
          .where(and(eq(userPatterns.userId, dbUser.id), eq(userPatterns.patternId, problem.patternId)))
      } else {
        await database.insert(userPatterns).values({ userId: dbUser.id, patternId: problem.patternId, fluency: newFluency, problemsSolved: 1 })
      }

      return { sessionId: input.sessionId, xpEarned, newXp, newStreak }
    }),

  debriefById: publicProcedure
    .input(z.object({ sessionId: z.string().uuid() }))
    .query(async ({ input }) => {
      if (!db) return null
      const rows = await db
        .select({ session: sessions, problem: problems, pattern: patterns, debrief: debriefs })
        .from(sessions)
        .innerJoin(problems, eq(sessions.problemId, problems.id))
        .innerJoin(patterns, eq(problems.patternId, patterns.id))
        .leftJoin(debriefs, eq(debriefs.sessionId, sessions.id))
        .where(eq(sessions.id, input.sessionId))
        .limit(1)
      return rows[0] ?? null
    }),
})
