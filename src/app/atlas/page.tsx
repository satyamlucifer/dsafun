import type { Metadata } from 'next'
import { auth } from '@clerk/nextjs/server'
import { eq } from 'drizzle-orm'
import { db } from '@/lib/db'
import { users, userPatterns, patterns } from '@/lib/db/schema'
import { AtlasCanvas } from '@/components/atlas/AtlasCanvas'
import { PATTERNS_SEED } from '@/lib/db/seed-data'

export const metadata: Metadata = { title: 'Atlas' }

export default async function AtlasPage() {
  const { userId: clerkId } = await auth()

  // Build fluency map { slug → fluency (0–1) } for the logged-in user
  let fluencyMap: Record<string, number> = {}
  let problemsMap: Record<string, number> = {}

  if (db && clerkId) {
    const [dbUser] = await db.select({ id: users.id }).from(users).where(eq(users.clerkId, clerkId)).limit(1)
    if (dbUser) {
      const rows = await db
        .select({ slug: patterns.slug, fluency: userPatterns.fluency, problemsSolved: userPatterns.problemsSolved })
        .from(userPatterns)
        .innerJoin(patterns, eq(userPatterns.patternId, patterns.id))
        .where(eq(userPatterns.userId, dbUser.id))
      for (const r of rows) {
        fluencyMap[r.slug] = r.fluency
        problemsMap[r.slug] = r.problemsSolved
      }
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <div className="mb-8">
        <div className="flex items-baseline gap-4 mb-2">
          <h1 className="font-display text-5xl text-[var(--fg)]">
            PATTERN <span className="text-[var(--accent)]">ATLAS</span>
          </h1>
          <span className="stamp rotate-neg-2">{PATTERNS_SEED.length} OPERATIVES</span>
        </div>
        <p className="font-body text-sm text-[var(--fg-3)] max-w-lg">
          Each star is a pattern. Size indicates your mastery. Edges show shared intuition.
          Hover to read the dossier. Click to enter the territory.
        </p>
      </div>

      <div className="zine-card p-0 overflow-hidden" style={{ boxShadow: '6px 6px 0 var(--shadow)' }}>
        <AtlasCanvas fluency={fluencyMap} problemsSolved={problemsMap} />
      </div>

      <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="border border-[var(--border)] p-3">
          <p className="text-[10px] font-body text-[var(--fg-3)] uppercase tracking-widest mb-1">Star size</p>
          <p className="text-xs font-body text-[var(--fg-2)]">Your encounter count with this pattern</p>
        </div>
        <div className="border border-[var(--border)] p-3">
          <p className="text-[10px] font-body text-[var(--fg-3)] uppercase tracking-widest mb-1">Glow</p>
          <p className="text-xs font-body text-[var(--fg-2)]">Fluency level — how deeply you know it</p>
        </div>
        <div className="border border-[var(--border)] p-3">
          <p className="text-[10px] font-body text-[var(--fg-3)] uppercase tracking-widest mb-1">Edges</p>
          <p className="text-xs font-body text-[var(--fg-2)]">Shared intuition — patterns that compose</p>
        </div>
        <div className="border border-[var(--border)] p-3">
          <p className="text-[10px] font-body text-[var(--fg-3)] uppercase tracking-widest mb-1">Dim stars</p>
          <p className="text-xs font-body text-[var(--fg-2)]">Uncharted — no expedition yet</p>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="font-display text-2xl text-[var(--fg)] mb-4">
          ALL <span className="text-[var(--accent)]">OPERATIVES</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-2">
          {PATTERNS_SEED.map((pattern) => {
            const f = fluencyMap[pattern.slug] ?? 0
            const solved = problemsMap[pattern.slug] ?? 0
            return (
              <a
                key={pattern.slug}
                href={`/p/${pattern.slug}`}
                className="border border-[var(--border)] p-3 flex flex-col gap-1 hover:border-[var(--border-accent)] hover:bg-[var(--bg-2)] transition-all no-underline group"
                style={{ '--hue': pattern.hue } as React.CSSProperties}
              >
                <div className="flex items-center justify-between">
                  <div className="w-2 h-2 rounded-full" style={{ background: pattern.hue, boxShadow: f > 0 ? `0 0 ${4 + f * 6}px ${pattern.hue}80` : undefined }} />
                  {solved > 0 && <span className="text-[9px] font-body text-[var(--fg-3)]">{solved}×</span>}
                </div>
                <p className="font-display text-base leading-tight group-hover:text-glow-accent" style={{ color: pattern.hue }}>{pattern.name}</p>
                <p className="text-[9px] font-body text-[var(--fg-3)] uppercase tracking-wider leading-tight">{pattern.topic}</p>
                {f > 0 && (
                  <div className="fluency-bar mt-1">
                    <div className="fluency-bar-fill" style={{ width: `${f * 100}%`, background: pattern.hue }} />
                  </div>
                )}
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}
