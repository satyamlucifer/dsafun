'use client'
import { useEffect, useRef, useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import Editor from '@monaco-editor/react'
import { PatternGlyph } from '@/components/ui/PatternGlyph'
import { ProblemMarkdown } from '@/components/ui/ProblemMarkdown'
import { trpc } from '@/lib/trpc/client'
import type { Session, Problem, Pattern } from '@/lib/db/schema'

type Props = {
  session: Session
  problem: Problem
  pattern: Pattern
}

type CoachMessage = { role: 'user' | 'assistant'; content: string }
type TestResult = { status: 'PASS' | 'FAIL' | 'ERROR'; input: string; expected: string; actual: string; time: string; caseIndex: number }
type Lang = 'python' | 'javascript' | 'typescript' | 'java' | 'go' | 'cpp' | 'rust'

const HINT_COSTS = [3, 6, 10]
const SESSION_MINUTES: Record<string, number> = { quick: 12, deep: 22, marathon: 60 }

const LANG_META: Record<Lang, { label: string; monacoLang: string; starter: string }> = {
  python:     { label: 'Python',     monacoLang: 'python',     starter: `import sys\n\ndef solve(data: str) -> str:\n    # name the smallest sub-problem first\n    return ""\n\nprint(solve(sys.stdin.read().strip()))\n` },
  javascript: { label: 'JavaScript', monacoLang: 'javascript', starter: `const lines = require('fs').readFileSync('/dev/stdin','utf8').trim();\n\nfunction solve(data) {\n  // name the smallest sub-problem first\n  return "";\n}\n\nconsole.log(solve(lines));\n` },
  typescript: { label: 'TypeScript', monacoLang: 'typescript', starter: `import * as fs from 'fs';\nconst data = fs.readFileSync('/dev/stdin','utf8').trim();\n\nfunction solve(input: string): string {\n  // name the smallest sub-problem first\n  return "";\n}\n\nconsole.log(solve(data));\n` },
  java:       { label: 'Java',       monacoLang: 'java',       starter: `import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String data = sc.hasNext() ? sc.nextLine() : "";\n        // name the smallest sub-problem first\n        System.out.println(data);\n    }\n}\n` },
  go:         { label: 'Go',         monacoLang: 'go',         starter: `package main\n\nimport (\n\t"bufio"\n\t"fmt"\n\t"os"\n)\n\nfunc solve(data string) string {\n\t// name the smallest sub-problem first\n\treturn ""\n}\n\nfunc main() {\n\treader := bufio.NewReader(os.Stdin)\n\tdata, _ := reader.ReadString(0)\n\tfmt.Println(solve(data))\n}\n` },
  cpp:        { label: 'C++',        monacoLang: 'cpp',        starter: `#include <iostream>\n#include <string>\nusing namespace std;\n\nstring solve(string data) {\n    // name the smallest sub-problem first\n    return "";\n}\n\nint main() {\n    string data, line;\n    while (getline(cin, line)) data += line + "\\n";\n    cout << solve(data) << endl;\n}\n` },
  rust:       { label: 'Rust',       monacoLang: 'rust',       starter: `use std::io::{self, Read};\n\nfn solve(data: &str) -> String {\n    // name the smallest sub-problem first\n    String::new()\n}\n\nfn main() {\n    let mut data = String::new();\n    io::stdin().read_to_string(&mut data).unwrap();\n    println!("{}", solve(data.trim()));\n}\n` },
}

export function SessionWorkbench({ session, problem, pattern }: Props) {
  const router = useRouter()
  const sessionMinutes = SESSION_MINUTES[session.mode] ?? 22

  const [lang, setLang] = useState<Lang>('python')
  const [code, setCode] = useState(LANG_META.python.starter)
  const [scratch, setScratch] = useState('')
  const [unlockedHints, setUnlockedHints] = useState<Set<number>>(new Set())

  function switchLang(next: Lang) {
    setLang(next)
    setCode(LANG_META[next].starter)
    setTestResults(null)
  }

  // Timer
  const [secondsLeft, setSecondsLeft] = useState(sessionMinutes * 60)
  const [elapsed, setElapsed] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSecondsLeft((s) => Math.max(0, s - 1))
      setElapsed((e) => e + 1)
    }, 1000)
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [])

  function formatTime(secs: number) {
    return `${String(Math.floor(secs / 60)).padStart(2, '0')}:${String(secs % 60).padStart(2, '0')}`
  }

  // Tests
  const [testResults, setTestResults] = useState<TestResult[] | null>(null)
  const [runningTests, setRunningTests] = useState(false)

  async function runTests() {
    setRunningTests(true)
    try {
      const res = await trpc.session.runTests.mutate({
        problemTitle: problem.title,
        code,
        language: lang,
      })
      setTestResults(res.results as TestResult[])
    } finally {
      setRunningTests(false)
    }
  }

  // Coach
  const [coachMessages, setCoachMessages] = useState<CoachMessage[]>([
    { role: 'assistant', content: "what's the smallest sub-problem? name it in one sentence." },
  ])
  const [coachInput, setCoachInput] = useState('')
  const [coachLoading, setCoachLoading] = useState(false)
  const coachBottomRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => { coachBottomRef.current?.scrollIntoView({ behavior: 'smooth' }) }, [coachMessages])

  async function sendCoachMessage(text: string) {
    if (!text.trim() || coachLoading) return
    const userMsg: CoachMessage = { role: 'user', content: text.trim() }
    const next = [...coachMessages, userMsg]
    setCoachMessages(next)
    setCoachInput('')
    setCoachLoading(true)
    try {
      const res = await trpc.session.coachAsk.mutate({
        sessionId: session.id,
        patternSlug: pattern.slug,
        problemTitle: problem.title,
        problemPrompt: problem.prompt,
        messages: next,
      })
      setCoachMessages((prev) => [...prev, { role: 'assistant', content: res.reply }])
    } finally {
      setCoachLoading(false)
    }
  }

  // Submit
  const [submitting, startSubmit] = useTransition()

  function handleSubmit() {
    startSubmit(async () => {
      try {
        await trpc.session.submit.mutate({
          sessionId: session.id,
          finalCode: code,
          hintsUsed: unlockedHints.size,
          timeMs: elapsed * 1000,
        })
        router.push(`/s/${session.id}/debrief`)
      } catch {
        router.push(`/s/${session.id}/debrief`)
      }
    })
  }

  const timerColor = secondsLeft < 120 ? '#ef4444' : secondsLeft < 300 ? '#f59e0b' : 'var(--fg-3)'

  return (
    <div className="min-h-[calc(100dvh-3rem)] grid xl:grid-cols-[330px_1fr_340px]">
      {/* LEFT: Problem + Hints */}
      <aside className="border-r border-[var(--border)] px-4 py-5 bg-[var(--bg-2)] overflow-y-auto">
        <p className="text-[11px] font-body text-[var(--fg-3)] uppercase tracking-[0.3em]">// problem · fresh</p>
        <h1 className="font-display text-4xl text-[var(--fg)] mt-3">{problem.title}</h1>
        <div className="flex flex-wrap gap-2 mt-4">
          <span className="border border-[var(--border)] px-3 py-1 text-[10px] font-body uppercase" style={{ color: pattern.hue }}>
            {pattern.topic}
          </span>
          <span className="border border-[var(--border)] px-3 py-1 text-[10px] font-body uppercase">{problem.difficulty}</span>
          <span className="border border-[var(--border)] px-3 py-1 text-[10px] font-body uppercase text-[var(--fg-3)]">{problem.estMin} min</span>
        </div>
        <div className="mt-5 text-xs">
          <ProblemMarkdown>{problem.prompt}</ProblemMarkdown>
        </div>

        <div className="border border-[var(--border)] p-3 mt-5 bg-[var(--bg)]">
          <p className="text-[10px] font-body uppercase tracking-[0.3em] text-[var(--fg-3)] mb-3">// examples</p>
          {problem.examples.slice(0, 2).map((ex, i) => (
            <div key={i} className="mb-3">
              <p className="text-[10px] font-body text-[var(--fg-3)]">input</p>
              <p className="text-xs font-body text-[var(--fg-2)]">{ex.input}</p>
              <p className="text-[10px] font-body text-[var(--fg-3)] mt-1">output</p>
              <p className="text-xs font-body text-[var(--fg-2)]">{ex.output}</p>
            </div>
          ))}
        </div>

        <div className="mt-5">
          <p className="text-[11px] font-body text-[var(--fg-3)] uppercase tracking-[0.3em] mb-3">// hints</p>
          {problem.hints.map((hint, index) => (
            <div key={index} className="mb-2">
              {unlockedHints.has(index) ? (
                <div className="border px-3 py-2 text-xs font-body" style={{ borderColor: pattern.hue, color: pattern.hue }}>
                  <span className="text-[var(--fg-3)] mr-2">H{index + 1}</span>{hint}
                </div>
              ) : (
                <button
                  onClick={() => setUnlockedHints((prev) => new Set([...prev, index]))}
                  className="w-full border border-dashed border-[var(--border)] px-3 py-2 text-left text-xs font-body text-[var(--fg-3)] hover:border-[var(--border-accent)] hover:text-[var(--fg)]"
                >
                  H{index + 1} · click to unlock <span className="float-right">-{HINT_COSTS[index] ?? 10}xp</span>
                </button>
              )}
            </div>
          ))}
        </div>
      </aside>

      {/* CENTER: Scratchpad + Editor */}
      <section className="px-4 py-5 overflow-y-auto">
        <div className="flex items-center justify-between mb-3">
          <p className="text-[10px] font-body uppercase tracking-[0.3em] text-[var(--fg-3)]">●● rec · {session.mode} session · {session.coachStance}</p>
          <p className="text-xs font-body" style={{ color: timerColor }}>
            elapsed <span className="text-[var(--fg)]">{formatTime(elapsed)}</span>
            {' '}/ {formatTime(sessionMinutes * 60)}
            {secondsLeft < 120 && <span className="ml-2 text-[#ef4444]">⚠ {formatTime(secondsLeft)} left</span>}
          </p>
        </div>

        <div className="mb-5">
          <label className="flex justify-between text-[11px] font-body text-[var(--fg-3)] uppercase tracking-[0.25em] mb-2">
            <span>// scratchpad · pre-code thoughts</span>
            <span className="text-[var(--fg-3)]">autosaved</span>
          </label>
          <textarea
            value={scratch}
            onChange={(e) => setScratch(e.target.value)}
            placeholder="name the invariant before you code..."
            className="w-full min-h-28 bg-[var(--bg)] border border-dashed border-[var(--border)] p-4 text-sm font-body text-[var(--fg)] outline-none resize-y placeholder:text-[var(--fg-3)]"
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-[11px] font-body text-[var(--fg-3)] uppercase tracking-[0.25em]">// code · monaco</label>
            <div className="flex gap-1">
              {(Object.keys(LANG_META) as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => switchLang(l)}
                  className={`px-2 py-0.5 text-[10px] font-body uppercase tracking-wider border ${lang === l ? 'border-[var(--border-accent)] text-[var(--accent)]' : 'border-[var(--border)] text-[var(--fg-3)] hover:border-[var(--border-accent)]'}`}
                >
                  {LANG_META[l].label}
                </button>
              ))}
            </div>
          </div>
          <div className="border border-[var(--border)] bg-black">
            <Editor
              height="340px"
              language={LANG_META[lang].monacoLang}
              theme="vs-dark"
              value={code}
              onChange={(value) => setCode(value ?? '')}
              options={{
                minimap: { enabled: false },
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: 13,
                lineNumbersMinChars: 3,
                scrollBeyondLastLine: false,
                wordWrap: 'on',
                padding: { top: 16, bottom: 16 },
              }}
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mt-4">
          <button
            onClick={runTests}
            disabled={runningTests}
            className="px-5 py-3 bg-[var(--accent)] text-[var(--bg)] text-xs font-body uppercase tracking-widest disabled:opacity-50"
          >
            {runningTests ? '▶ running...' : '▶ run tests'}
          </button>
          <button
            onClick={() => sendCoachMessage("I'm stuck. Can you help?")}
            className="px-5 py-3 border border-[var(--border)] text-xs font-body uppercase tracking-widest hover:bg-[var(--bg-2)]"
          >
            ask coach
          </button>
          <button
            onClick={handleSubmit}
            disabled={submitting}
            className="ml-auto px-5 py-3 border border-dashed border-[var(--border)] text-xs font-body uppercase tracking-widest hover:bg-[var(--bg-2)] disabled:opacity-50"
          >
            {submitting ? 'submitting...' : 'submit for review'}
          </button>
        </div>

        <div className="border border-[var(--border)] mt-5 p-4 min-h-28">
          <p className="text-[11px] font-body text-[var(--fg-3)] uppercase tracking-[0.25em] mb-3">
            // test results · {testResults ? `${testResults.length} cases` : 'not run yet'}
          </p>
          {!testResults ? (
            <p className="text-sm font-body text-[var(--fg-3)]">Run tests when your invariant has a shape.</p>
          ) : (
            <div className="grid gap-2">
              {testResults.map((r, i) => {
                const color = r.status === 'PASS' ? '#10b981' : r.status === 'FAIL' ? '#ef4444' : '#f59e0b'
                return (
                  <div key={i} className="text-xs font-body">
                    <span className="px-2 py-0.5 mr-3 text-[var(--bg)]" style={{ backgroundColor: color }}>{r.status}</span>
                    <span className="text-[var(--fg-2)]">{r.input} → </span>
                    <span className={r.status === 'PASS' ? 'text-[#10b981]' : 'text-[#ef4444]'}>{r.actual}</span>
                    {r.status !== 'PASS' && <span className="text-[var(--fg-3)] ml-2">(expected {r.expected})</span>}
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* RIGHT: Coach panel */}
      <aside className="border-l border-[var(--border)] bg-[var(--bg-2)] flex flex-col">
        <div className="border-b border-[var(--border)] px-4 py-3 flex items-center gap-3">
          <PatternGlyph glyph={pattern.glyph} hue={pattern.hue} size={28} />
          <div>
            <p className="text-[10px] font-body uppercase tracking-[0.3em] text-[var(--fg-3)]">coach · {session.coachStance}</p>
            <p className="font-display text-xl leading-none" style={{ color: pattern.hue }}>{pattern.name}</p>
          </div>
        </div>

        <div className="flex-1 p-4 grid gap-4 content-start overflow-y-auto max-h-[calc(100dvh-14rem)]">
          {coachMessages.map((msg, i) => (
            <div key={i}>
              <p className="text-[10px] font-body uppercase tracking-[0.25em] text-[var(--fg-3)]">
                {msg.role === 'assistant' ? '◆ coach' : '◆ you'}
              </p>
              <p className="font-body text-sm text-[var(--fg-2)] leading-6 mt-1">"{msg.content}"</p>
            </div>
          ))}
          {coachLoading && (
            <div>
              <p className="text-[10px] font-body uppercase tracking-[0.25em] text-[var(--fg-3)]">◆ coach · thinking</p>
              <p className="font-body text-sm text-[var(--fg-3)] mt-1 animate-pulse">●●●</p>
            </div>
          )}
          <div ref={coachBottomRef} />
        </div>

        <div className="border-t border-[var(--border)] p-4">
          <div className="flex gap-2">
            <input
              value={coachInput}
              onChange={(e) => setCoachInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') sendCoachMessage(coachInput) }}
              className="flex-1 border border-dashed border-[var(--border)] bg-transparent px-3 py-2 text-sm font-body text-[var(--fg)] outline-none placeholder:text-[var(--fg-3)]"
              placeholder="> ask the coach..."
              disabled={coachLoading}
            />
            <button
              onClick={() => sendCoachMessage(coachInput)}
              disabled={coachLoading || !coachInput.trim()}
              className="px-3 py-2 bg-[var(--accent)] text-[var(--bg)] text-xs font-body disabled:opacity-40"
            >
              →
            </button>
          </div>
          <div className="flex flex-wrap gap-2 mt-3">
            {["why O(1) space?", "show brute force", "I'm stuck", "harder variant"].map((chip) => (
              <button
                key={chip}
                onClick={() => setCoachInput(chip)}
                className="border border-[var(--border)] px-2 py-1 text-[10px] font-body uppercase tracking-wider text-[var(--fg-2)] hover:bg-[var(--bg)]"
              >
                {chip}
              </button>
            ))}
          </div>
        </div>
      </aside>
    </div>
  )
}
