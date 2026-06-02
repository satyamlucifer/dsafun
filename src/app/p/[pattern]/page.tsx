import type { Metadata } from 'next'
import type { Route } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { auth } from '@clerk/nextjs/server'
import { eq } from 'drizzle-orm'
import { db } from '@/lib/db'
import { users, userPatterns, patterns } from '@/lib/db/schema'
import { PatternGlyph } from '@/components/ui/PatternGlyph'
import { PATTERNS_SEED } from '@/lib/db/seed-data'
import { getPattern, problemsForPattern, relatedPatterns, PATTERN_TACTICS } from '@/lib/content'
import { HintIcon } from '@/components/ui/Hint'

type PageProps = {
  params: Promise<{ pattern: string }>
}

export function generateStaticParams() {
  return PATTERNS_SEED.map((pattern) => ({ pattern: pattern.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { pattern: slug } = await params
  const pattern = getPattern(slug)
  if (!pattern) return { title: 'Pattern' }
  return { title: pattern.name, description: pattern.lore }
}

export default async function PatternPage({ params }: PageProps) {
  const { pattern: slug } = await params
  const pattern = getPattern(slug)
  if (!pattern) notFound()

  const problems = problemsForPattern(pattern.slug)
  const related = relatedPatterns(pattern.slug)
  const tactics = PATTERN_TACTICS[pattern.slug]

  // Real fluency from DB
  let fluency = 0
  let level = 0
  const { userId: clerkId } = await auth()
  if (db && clerkId) {
    const [dbUser] = await db.select({ id: users.id }).from(users).where(eq(users.clerkId, clerkId)).limit(1)
    if (dbUser) {
      const [patternRow] = await db
        .select({ fluency: userPatterns.fluency, level: userPatterns.level })
        .from(userPatterns)
        .innerJoin(patterns, eq(userPatterns.patternId, patterns.id))
        .where(eq(userPatterns.userId, dbUser.id))
        .limit(1)
      if (patternRow) {
        fluency = patternRow.fluency
        level = patternRow.level
      }
    }
  }
  if (level === 0) level = Math.ceil(fluency * 5)

  return (
    <div className="min-h-[calc(100dvh-3rem)] grid lg:grid-cols-[1fr_320px]">
      <section className="px-4 sm:px-8 py-8 border-r border-[var(--border)]">
        <div className="max-w-5xl">
          <div className="grid md:grid-cols-[170px_1fr] gap-6 items-start">
            <div
              className="aspect-square border border-[var(--border)] flex items-center justify-center bg-[var(--bg-2)]"
              style={{ boxShadow: `5px 5px 0 ${pattern.hue}40` }}
            >
              <PatternGlyph glyph={pattern.glyph} hue={pattern.hue} size={90} />
            </div>

            <div>
              <p className="text-[11px] font-body text-[var(--fg-3)] uppercase tracking-[0.35em]">
                // character · territory {PATTERNS_SEED.findIndex((p) => p.slug === pattern.slug) + 1} / 14
              </p>
              <h1 className="font-display text-6xl sm:text-7xl leading-none mt-2" style={{ color: pattern.hue }}>
                {pattern.name.toUpperCase()}
              </h1>
              <p className="text-xs font-body text-[var(--fg-3)] uppercase tracking-[0.28em] mt-2">
                {pattern.topic}
              </p>
              <blockquote className="font-zine text-xl sm:text-2xl leading-relaxed text-[var(--fg)] mt-6 max-w-3xl">
                "{pattern.voiceNote ?? pattern.lore}"
              </blockquote>

              <div className="flex flex-wrap gap-2 mt-6">
                <Link href="/s/new" className="px-4 py-2 bg-[var(--accent)] text-[var(--bg)] text-xs font-body uppercase tracking-widest no-underline">
                  ▶ fresh problem
                </Link>
                <Link href="/library" className="px-4 py-2 border border-[var(--border)] text-xs font-body uppercase tracking-widest no-underline hover:bg-[var(--bg-2)]">
                  browse costumes
                </Link>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 border-y border-[var(--border)] mt-8">
            {[
              ['Fluency', `${Math.round(fluency * 100)}%`, fluency > 0 ? 'from your sessions' : 'uncharted'],
              ['Level', `${level}`, '/ 5'],
              ['Solved', `${problems.length}`, 'costumes seeded'],
              ['Last seen', fluency > 0 ? 'active' : 'new', fluency > 0 ? 'in your queue' : 'first expedition'],
            ].map(([label, value, note]) => (
              <div key={label} className="py-5 pr-6">
                <div className="flex items-center gap-1.5">
                  <p className="text-[10px] font-body text-[var(--fg-3)] uppercase tracking-[0.25em]">{label}</p>
                  {label === 'Fluency' && (
                    <HintIcon content="Fluency = weighted average of how cleanly you've solved this pattern's problems. Increases with each clean solve, decreases with hint usage." side="top" />
                  )}
                </div>
                <p className="font-display text-5xl text-[var(--fg)] leading-none mt-1">{value}</p>
                <p className="text-[10px] font-body text-[var(--fg-3)]">{note}</p>
              </div>
            ))}
          </div>

          {/* Upright / Reversed — when to use vs. when to avoid */}
          {tactics && (
            <section className="mt-8 grid md:grid-cols-2 gap-4">
              <div className="border border-[var(--border)] p-5" style={{ borderColor: `${pattern.hue}60` }}>
                <p className="text-[10px] font-body uppercase tracking-[0.3em] mb-3" style={{ color: pattern.hue }}>
                  ▲ upright · deploy me when
                </p>
                <ul className="grid gap-2">
                  {tactics.upright.map((item) => (
                    <li key={item} className="flex gap-2 text-xs font-body text-[var(--fg-2)] leading-relaxed">
                      <span style={{ color: pattern.hue }} className="mt-px shrink-0">◆</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border border-dashed border-[var(--border)] p-5">
                <p className="text-[10px] font-body uppercase tracking-[0.3em] text-[var(--fg-3)] mb-3">
                  ▽ reversed · not my territory
                </p>
                <ul className="grid gap-2">
                  {tactics.reversed.map((item) => (
                    <li key={item} className="flex gap-2 text-xs font-body text-[var(--fg-3)] leading-relaxed">
                      <span className="text-[var(--fg-3)] mt-px shrink-0">✕</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          <section className="mt-8">
            <p className="text-[11px] font-body text-[var(--fg-3)] uppercase tracking-[0.28em] mb-3">
              // her gift · invariant
            </p>
            <div className="border border-[var(--border)] p-5 bg-[var(--bg-2)]">
              <p className="font-body text-sm leading-7 text-[var(--fg-2)] max-w-4xl">{pattern.lore}</p>
              <div className="mt-5 grid gap-2">
                {pattern.canonicalProblems.slice(0, 5).map((problem, index) => (
                  <div key={problem} className="flex items-center gap-3 border border-[var(--border)] px-3 py-2">
                    <span className="font-display text-xl" style={{ color: pattern.hue }}>{String(index + 1).padStart(2, '0')}</span>
                    <span className="font-body text-sm text-[var(--fg)]">{problem}</span>
                    <span className="ml-auto text-[10px] font-body text-[var(--fg-3)] uppercase tracking-widest">
                      {index < problems.length ? 'seeded' : 'locked'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mt-8">
            <p className="text-[11px] font-body text-[var(--fg-3)] uppercase tracking-[0.28em] mb-3">
              // seeded costumes
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              {problems.map((problem, index) => (
                <Link
                  key={problem.title}
                  href={`/library/${problem.title.toLowerCase().replace(/—/g, '-').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}` as Route}
                  className="border border-[var(--border)] p-4 no-underline hover:bg-[var(--bg-2)]"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-body text-sm text-[var(--fg)]">{problem.title}</p>
                      <p className="text-[10px] text-[var(--fg-3)] mt-1">{problem.estMin} min · {problem.difficulty}</p>
                    </div>
                    <span className="stamp text-[9px]" style={{ color: pattern.hue, borderColor: pattern.hue }}>
                      {index === 0 ? 'NOW' : 'DONE'}
                    </span>
                  </div>
                  <div className="fluency-bar mt-3">
                    <div className="fluency-bar-fill" style={{ width: `${45 + index * 8}%`, background: pattern.hue }} />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </section>

      <aside className="px-4 sm:px-6 py-8 bg-[var(--bg-2)]">
        <div className="flex items-center gap-2 mb-4">
          <p className="text-[11px] font-body text-[var(--fg-3)] uppercase tracking-[0.28em]">
            // her voice · how to spot her
          </p>
          <HintIcon content="Ask yourself these questions before writing code. Three yes answers means this pattern is in the room." />
        </div>
        <div className="grid gap-3">
          {(tactics?.spotChecks ?? [
            'asked for max / min / count?',
            'is there a sequence you move through?',
            'at each step, do you choose?',
            'does the choice depend on previous few?',
          ]).map((check) => (
            <p key={check} className="font-body text-xs text-[var(--fg-2)] prompt">{check}</p>
          ))}
        </div>
        <p className="text-[10px] font-body text-[var(--fg-3)] mt-4">three yeses → she is in the room.</p>

        <div className="zine-divider" />

        <div className="flex items-center gap-2 mb-4">
          <p className="text-[11px] font-body text-[var(--fg-3)] uppercase tracking-[0.28em]">// enemies</p>
          <HintIcon content="These are the most common ways this pattern gets implemented wrong. Memorize them." />
        </div>
        <div className="grid gap-2">
          {(tactics?.enemies ?? ['off-by-one confidence', 'wrong invariant', 'reading tags first']).map((enemy) => (
            <p key={enemy} className="text-xs font-body text-[var(--fg-2)]">✕ {enemy}</p>
          ))}
        </div>

        <div className="zine-divider" />

        <p className="text-[11px] font-body text-[var(--fg-3)] uppercase tracking-[0.28em] mb-4">// related characters</p>
        <div className="grid gap-3">
          {related.map((item) => (
            <Link key={item.slug} href={`/p/${item.slug}`} className="border border-[var(--border)] p-3 flex items-center gap-3 no-underline hover:bg-[var(--bg)]">
              <PatternGlyph glyph={item.glyph} hue={item.hue} size={24} />
              <div>
                <p className="font-display text-lg leading-none" style={{ color: item.hue }}>{item.name}</p>
                <p className="text-[10px] font-body text-[var(--fg-3)]">{item.topic}</p>
              </div>
            </Link>
          ))}
        </div>
      </aside>
    </div>
  )
}
