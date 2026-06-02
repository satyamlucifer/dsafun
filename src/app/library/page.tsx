'use client'
import { useState, useMemo } from 'react'
import Link from 'next/link'
import type { Route } from 'next'
import { PROBLEMS_SEED, PATTERNS_SEED } from '@/lib/db/seed-data'
import { PatternGlyph } from '@/components/ui/PatternGlyph'
import { cn } from '@/lib/utils'
import { HintIcon } from '@/components/ui/Hint'

type Difficulty = 'all' | 'easy' | 'medium' | 'hard'
type SortKey = 'title' | 'difficulty' | 'estMin' | 'pattern'

const DIFFICULTY_ORDER = { easy: 0, medium: 1, hard: 2 }
const DIFFICULTY_COLOR: Record<string, string> = {
  easy: '#10b981',
  medium: '#f59e0b',
  hard: '#ef4444',
}

export default function LibraryPage() {
  const [search, setSearch] = useState('')
  const [patternFilter, setPatternFilter] = useState<string>('all')
  const [difficultyFilter, setDifficultyFilter] = useState<Difficulty>('all')
  const [sortKey, setSortKey] = useState<SortKey>('pattern')

  const patternBySlug = useMemo(
    () => Object.fromEntries(PATTERNS_SEED.map((p) => [p.slug, p])),
    [],
  )

  // Problem count per pattern
  const problemCountByPattern = useMemo(() => {
    const map: Record<string, number> = {}
    for (const p of PROBLEMS_SEED) {
      map[p.patternSlug] = (map[p.patternSlug] ?? 0) + 1
    }
    return map
  }, [])

  const filtered = useMemo(() => {
    let result = PROBLEMS_SEED

    if (search.trim()) {
      const q = search.toLowerCase()
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.tags.some((t) => t.includes(q)) ||
          p.patternSlug.includes(q),
      )
    }

    if (patternFilter !== 'all') {
      result = result.filter((p) => p.patternSlug === patternFilter)
    }

    if (difficultyFilter !== 'all') {
      result = result.filter((p) => p.difficulty === difficultyFilter)
    }

    return [...result].sort((a, b) => {
      if (sortKey === 'title') return a.title.localeCompare(b.title)
      if (sortKey === 'difficulty') return DIFFICULTY_ORDER[a.difficulty] - DIFFICULTY_ORDER[b.difficulty]
      if (sortKey === 'estMin') return a.estMin - b.estMin
      // default: pattern
      return a.patternSlug.localeCompare(b.patternSlug)
    })
  }, [search, patternFilter, difficultyFilter, sortKey])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-baseline gap-4 mb-2">
          <h1 className="font-display text-5xl text-[var(--fg)]">
            PROBLEM <span className="text-[var(--accent)]">LIBRARY</span>
          </h1>
          <span className="stamp rotate-1">{PROBLEMS_SEED.length} CANONICAL</span>
        </div>
        <p className="font-body text-sm text-[var(--fg-3)] max-w-lg">
          Classic problems, organized by pattern. Each is a costume for a recurring invariant.
          Start a session to summon the Socratic coach.
        </p>
      </div>

      {/* Filter bar */}
      <div className="flex flex-wrap gap-2 mb-6">
        {/* Search */}
        <div className="flex items-center gap-2 border border-[var(--border)] px-3 py-2 flex-1 min-w-48 max-w-xs">
          <span className="text-[var(--accent)] font-display text-lg">/</span>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="search problems..."
            className="bg-transparent text-sm font-body text-[var(--fg)] placeholder:text-[var(--fg-3)] outline-none w-full"
          />
        </div>

        {/* Pattern filter */}
        <select
          value={patternFilter}
          onChange={(e) => setPatternFilter(e.target.value)}
          className="border border-[var(--border)] px-3 py-2 bg-[var(--bg)] text-sm font-body text-[var(--fg)] outline-none cursor-pointer"
        >
          <option value="all">All patterns</option>
          {PATTERNS_SEED.map((p) => (
            <option key={p.slug} value={p.slug}>
              {p.name} — {p.topic}
            </option>
          ))}
        </select>

        {/* Difficulty filter */}
        <div className="flex items-center gap-1.5">
          <div className="flex items-center border border-[var(--border)] overflow-hidden">
            {(['all', 'easy', 'medium', 'hard'] as const).map((d) => (
              <button
                key={d}
                onClick={() => setDifficultyFilter(d)}
                className={cn(
                  'px-3 py-2 text-xs font-body uppercase tracking-wider transition-colors',
                  difficultyFilter === d
                    ? 'bg-[var(--accent)] text-[var(--bg)]'
                    : 'text-[var(--fg-3)] hover:text-[var(--fg)] hover:bg-[var(--bg-2)]',
                )}
              >
                {d}
              </button>
            ))}
          </div>
          <HintIcon content="Easy = 8-12 min, builds intuition. Medium = 15-25 min, core pattern work. Hard = 25+ min, edge cases and optimizations." side="top" />
        </div>

        {/* Sort */}
        <div className="flex items-center gap-1.5 ml-auto">
          <HintIcon content="Pattern sort groups problems by their invariant — best for systematic learning. Difficulty sort is for targeted practice." side="left" />
          <select
            value={sortKey}
            onChange={(e) => setSortKey(e.target.value as SortKey)}
            className="border border-[var(--border)] px-3 py-2 bg-[var(--bg)] text-sm font-body text-[var(--fg)] outline-none cursor-pointer"
          >
            <option value="pattern">Sort: Pattern</option>
            <option value="difficulty">Sort: Difficulty</option>
            <option value="estMin">Sort: Time</option>
            <option value="title">Sort: A-Z</option>
          </select>
        </div>
      </div>

      {/* Results count */}
      <p className="text-xs font-body text-[var(--fg-3)] mb-4">
        {filtered.length} problem{filtered.length !== 1 ? 's' : ''} found
        {patternFilter !== 'all' && ` in ${patternBySlug[patternFilter]?.name}`}
      </p>

      {/* Problem table */}
      <div className="border border-[var(--border)]">
        {/* Table header */}
        <div className="grid grid-cols-[1fr_auto_auto_auto] gap-4 px-4 py-2 border-b border-[var(--border)] bg-[var(--bg-2)]">
          <span className="text-[10px] font-body text-[var(--fg-3)] uppercase tracking-widest">Problem</span>
          <span className="text-[10px] font-body text-[var(--fg-3)] uppercase tracking-widest text-right">Pattern</span>
          <span className="text-[10px] font-body text-[var(--fg-3)] uppercase tracking-widest text-right">Difficulty</span>
          <div className="flex items-center justify-end gap-1.5">
            <span className="text-[10px] font-body text-[var(--fg-3)] uppercase tracking-widest">Est.</span>
            <HintIcon content="Estimated time for a developer who knows the pattern. Add 50% if it's new to you." side="left" />
          </div>
        </div>

        {filtered.length === 0 && (
          <div className="px-4 py-12 text-center">
            <p className="font-display text-2xl text-[var(--fg-3)]">NO PROBLEMS FOUND</p>
            <p className="text-xs font-body text-[var(--fg-3)] mt-1">adjust your filters or search differently</p>
          </div>
        )}

        {filtered.map((problem, i) => {
          const pat = patternBySlug[problem.patternSlug]
          return (
            <div
              key={i}
              className="grid grid-cols-[1fr_auto_auto_auto] gap-4 px-4 py-3 border-b border-[var(--border)] last:border-0 hover:bg-[var(--bg-2)] group transition-colors"
            >
              {/* Title */}
              <div className="min-w-0">
                <Link
                  href={`/library/${encodeURIComponent(problem.title.toLowerCase().replace(/\s+/g, '-'))}` as Route}
                  className="text-sm font-body text-[var(--fg)] group-hover:text-[var(--accent)] no-underline transition-colors line-clamp-1"
                >
                  {problem.title}
                </Link>
                <div className="flex gap-1 mt-1 flex-wrap">
                  {problem.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-[9px] font-body text-[var(--fg-3)] border border-[var(--border)] px-1.5 py-0.5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Pattern */}
              {pat && (
                <div className="flex items-center gap-1.5 whitespace-nowrap">
                  <PatternGlyph glyph={pat.glyph} hue={pat.hue} size={16} />
                  <span className="text-[11px] font-body" style={{ color: pat.hue }}>
                    {pat.name}
                  </span>
                </div>
              )}

              {/* Difficulty */}
              <div className="flex items-center justify-end">
                <span
                  className="text-[11px] font-body uppercase tracking-wider"
                  style={{ color: DIFFICULTY_COLOR[problem.difficulty] }}
                >
                  {problem.difficulty}
                </span>
              </div>

              {/* Time estimate */}
              <div className="flex items-center justify-end">
                <span className="text-[11px] font-body text-[var(--fg-3)]">
                  {problem.estMin}m
                </span>
              </div>
            </div>
          )
        })}
      </div>

      {/* Pattern sidebar cards */}
      <div className="mt-12">
        <h2 className="font-display text-2xl text-[var(--fg)] mb-4">
          BY <span className="text-[var(--accent)]">PATTERN</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {PATTERNS_SEED.map((pattern) => {
            const count = problemCountByPattern[pattern.slug] ?? 0
            return (
              <button
                key={pattern.slug}
                onClick={() => {
                  setPatternFilter(patternFilter === pattern.slug ? 'all' : pattern.slug)
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
                className={cn(
                  'border p-3 text-left transition-all',
                  patternFilter === pattern.slug
                    ? 'bg-[var(--accent-dim)]'
                    : 'border-[var(--border)] hover:bg-[var(--bg-2)]',
                )}
                style={patternFilter === pattern.slug ? { borderColor: pattern.hue } : {}}
              >
                <div className="flex items-center gap-2 mb-1">
                  <PatternGlyph glyph={pattern.glyph} hue={pattern.hue} size={20} />
                  <span className="font-display text-base leading-tight" style={{ color: pattern.hue }}>
                    {pattern.name}
                  </span>
                </div>
                <p className="text-[9px] font-body text-[var(--fg-3)] uppercase tracking-wider">
                  {pattern.topic} · {count} problem{count !== 1 ? 's' : ''}
                </p>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
