'use client'
import { useMemo, useState } from 'react'
import Link from 'next/link'
import { PatternGlyph } from '@/components/ui/PatternGlyph'
import { getPattern } from '@/lib/content'

const QUESTIONS = [
  {
    title: "given a sorted array and a target sum, what's the first idea that comes to mind?",
    meta: 'scenario · sorted array · O(n) hunt',
    choices: [
      ['two-pointers', 'two indices walking inward', 'O(n), O(1) space'],
      ['hash-map', 'hash every value as I scan', 'O(n), O(n) space'],
      ['binary-search', 'sort it, then binary search', 'O(n log n)'],
      ['brute-force', 'two nested loops, the honest brute force', 'O(n^2)'],
    ],
  },
  {
    title: 'you need the shortest path in an unweighted graph. what moves first?',
    meta: 'scenario · graph · shortest distance',
    choices: [
      ['bfs', 'expand level by level with a queue', 'shortest by construction'],
      ['dfs', 'go deep until no edge remains', 'complete, not shortest'],
      ['heap', 'prioritize the nearest known node', 'weighted graph instinct'],
      ['greedy', 'always walk toward the target', 'needs proof'],
    ],
  },
  {
    title: 'a problem asks for the best value over many overlapping prefixes.',
    meta: 'scenario · recurrence · memory',
    choices: [
      ['dynamic-programming', 'name the subproblem and cache it', 'overlap + optimal substructure'],
      ['backtracking', 'try all choices and undo', 'great when constraints prune'],
      ['sliding-window', 'maintain a moving interval', 'subarray invariant'],
      ['hash-map', 'store seen states only', 'lookup instinct'],
    ],
  },
  {
    title: 'you have a list of events, each with start and end time. you need the schedule that maximizes events attended without overlap. what is your move?',
    meta: 'scenario · intervals · scheduling',
    choices: [
      ['greedy', 'sort by end time, greedily take earliest-finishing events', 'interval scheduling maximization'],
      ['dynamic-programming', 'dp[i] = max events ending at or before event i', 'O(n^2) recurrence'],
      ['heap', 'min-heap of end times, pop when next event conflicts', 'greedy with priority'],
      ['backtracking', 'try every subset of compatible events', 'exponential, but honest'],
    ],
  },
  {
    title: "you need to find if two strings are scrambled versions of each other (recursive character splitting). your first instinct?",
    meta: 'scenario · string · recursion',
    choices: [
      ['dynamic-programming', 'cache (s1, s2) pairs already solved', '3D dp with memoization'],
      ['backtracking', 'try all split points and both scramble orderings', 'exponential without memo'],
      ['hash-map', 'if sorted chars differ, immediately false', 'pruning first'],
      ['trie', 'build trie of all scramble prefixes', 'wrong abstraction, gut instinct'],
    ],
  },
  {
    title: 'a stream of integers arrives one by one. after each, you need the median. what structure do you reach for?',
    meta: 'scenario · streaming · order statistics',
    choices: [
      ['heap', 'two heaps: max-heap for lower half, min-heap for upper half', 'O(log n) insert, O(1) median'],
      ['binary-search', 'sorted insertion, binary search for position', 'O(n) insert, wastes the sort'],
      ['monotonic-stack', 'maintain sorted stack', 'wrong tool, but feels right'],
      ['dynamic-programming', 'running stats updated incrementally', 'mean yes, median no'],
    ],
  },
  {
    title: 'a robot on a grid must reach the bottom-right, avoiding obstacles. count the paths. your first move?',
    meta: 'scenario · grid · counting',
    choices: [
      ['dynamic-programming', 'dp[i][j] = paths from top-left to (i,j)', 'classic grid DP'],
      ['dfs', 'DFS + memoization = same thing, top-down', 'equivalent, less obvious'],
      ['bfs', 'BFS counts paths level by level', 'BFS finds shortest, not count'],
      ['backtracking', 'enumerate all paths recursively', 'correct, exponential without memo'],
    ],
  },
] as const

export default function OnboardingPage() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const current = QUESTIONS[step]

  const resultPattern = useMemo(() => {
    const picked = answers.find((answer) => answer !== 'brute-force') ?? 'dynamic-programming'
    return getPattern(picked) ?? getPattern('dynamic-programming')
  }, [answers])

  if (step >= QUESTIONS.length) {
    return (
      <div className="min-h-[calc(100dvh-3rem)] px-4 sm:px-8 py-8">
        <p className="text-[11px] font-body text-[var(--fg-3)] uppercase tracking-[0.3em]">// first read complete</p>
        <h1 className="font-display text-6xl sm:text-7xl text-[var(--fg)] mt-2">here is what we noticed.</h1>

        <div className="grid lg:grid-cols-2 gap-5 mt-8">
          <div className="border border-[var(--border)] p-5">
            <p className="text-[10px] font-body uppercase tracking-[0.3em] text-[var(--fg-3)] mb-5">● your fluency vector</p>
            {[
              ['hash map', 78, 'strong'],
              ['two pointers', 66, 'solid'],
              ['binary search', 58, 'solid'],
              ['sliding window', 41, 'okay'],
              ['DFS', 36, 'rough'],
              ['DP', 22, 'gap'],
              ['union-find', 8, 'unmapped'],
            ].map(([label, value, note]) => (
              <div key={label.toString()} className="grid grid-cols-[120px_1fr_80px] gap-4 items-center mb-4">
                <p className="text-sm font-body text-[var(--fg-2)]">{label}</p>
                <div className="fluency-bar">
                  <div className="fluency-bar-fill" style={{ width: `${value}%` }} />
                </div>
                <p className="text-xs font-body text-[var(--fg-3)] text-right">{note}</p>
              </div>
            ))}
          </div>

          <div className="border border-[var(--border)] p-5">
            <p className="text-[10px] font-body uppercase tracking-[0.3em] text-[var(--fg-3)] mb-5">● your first 7 days · auto-planned</p>
            {['House Robber (in disguise)', 'Climbing Stairs', 'Decode Ways', 'Course Schedule of the Doomed', 'Bridges of Konigsberg', 'rest day · spaced repeat', 'pattern dive · DP marathon'].map((item, index) => (
              <div key={item} className="flex items-center justify-between border-b border-[var(--border)] py-2">
                <p className="text-[10px] text-[var(--fg-3)] font-body uppercase">{['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'][index]}</p>
                <p className="text-sm font-body text-[var(--fg)]">{item}</p>
                <span className="text-[10px] font-body text-[var(--fg-3)] border border-[var(--border)] px-2 py-1">{index === 0 ? 'today' : 'queued'}</span>
              </div>
            ))}
            <Link href="/dashboard" className="inline-block mt-5 px-4 py-2 bg-[var(--accent)] text-[var(--bg)] text-xs font-body uppercase tracking-widest no-underline">
              start day 1
            </Link>
          </div>
        </div>

        {resultPattern && (
          <div className="border border-[var(--border)] mt-6 p-5 flex flex-col sm:flex-row gap-5 items-start">
            <PatternGlyph glyph={resultPattern.glyph} hue={resultPattern.hue} size={72} />
            <div>
              <p className="text-[10px] font-body uppercase tracking-[0.3em] text-[var(--fg-3)]">coach · introducing your character</p>
              <h2 className="font-display text-4xl mt-2" style={{ color: resultPattern.hue }}>{resultPattern.name} · {resultPattern.topic}</h2>
              <p className="font-body text-sm text-[var(--fg-2)] leading-7 mt-2 max-w-3xl">{resultPattern.lore}</p>
            </div>
            <Link href={`/p/${resultPattern.slug}`} className="sm:ml-auto px-4 py-2 border border-[var(--border)] text-xs font-body uppercase tracking-widest no-underline">
              read chapter
            </Link>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="min-h-[calc(100dvh-3rem)] grid lg:grid-cols-[280px_1fr]">
      <aside className="hidden lg:block border-r border-[var(--border)] bg-[var(--bg-2)] px-8 py-8">
        <p className="text-[11px] font-body text-[var(--fg-3)] uppercase tracking-[0.3em] mb-5">// progress</p>
        {QUESTIONS.map((_, index) => (
          <p key={index} className={`font-body text-sm mb-3 ${index <= step ? 'text-[var(--fg)]' : 'text-[var(--fg-3)]'}`}>
            {index < step ? '●' : index === step ? '◉' : '○'} Q{index + 1}
          </p>
        ))}
        <p className="text-xs font-body text-[var(--fg-3)] mt-16 border-t border-dashed border-[var(--border)] pt-4">
          {QUESTIONS.length - step} left · no scores · no shame
        </p>
      </aside>

      <section className="px-4 sm:px-8 py-10">
        <div className="max-w-5xl">
          <p className="text-[11px] font-body text-[var(--fg-3)] uppercase tracking-[0.3em]">Q{step + 1}. {current.meta}</p>
          <h1 className="font-display text-5xl sm:text-6xl text-[var(--fg)] leading-none mt-4 max-w-4xl">{current.title}</h1>
          <p className="text-sm font-body text-[var(--fg-3)] mt-4">gut answer. no code. no penalty.</p>

          <div className="grid gap-3 mt-8">
            {current.choices.map(([patternSlug, label, note], index) => {
              const pattern = getPattern(patternSlug)
              return (
                <button
                  key={label}
                  onClick={() => {
                    setAnswers((prev) => [...prev, patternSlug])
                    setStep((prev) => prev + 1)
                  }}
                  className="group border border-[var(--border)] hover:border-[var(--border-accent)] bg-transparent hover:bg-[var(--bg-2)] p-4 text-left grid grid-cols-[32px_1fr_auto] gap-4 items-center"
                >
                  <span className="font-display text-xl text-[var(--accent)]">{['A', 'B', 'C', 'D'][index]}</span>
                  <span>
                    <span className="block text-sm font-body text-[var(--fg)]">{label}</span>
                    <span className="block text-[10px] font-body text-[var(--fg-3)] mt-1">{pattern?.name ?? 'honest brute force'}</span>
                  </span>
                  <span className="text-xs font-body text-[var(--fg-3)]">{note}</span>
                </button>
              )
            })}
          </div>

          <div className="mt-8 border border-dashed border-[var(--border)] p-4">
            <p className="text-[10px] font-body uppercase tracking-[0.3em] text-[var(--fg-3)]">◆ coach · live read</p>
            <p className="font-body text-sm text-[var(--fg-2)] mt-3">
              The coach watches your first instinct and adjusts your first week. Fast answers are not better answers; honest answers make the map useful.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
