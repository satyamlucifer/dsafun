import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { eq } from 'drizzle-orm'
import { db } from '@/lib/db'
import { sessions, problems, patterns, debriefs } from '@/lib/db/schema'

export const metadata: Metadata = { title: 'Debrief' }

export default async function DebriefPage({ params }: { params: Promise<{ sessionId: string }> }) {
  const { sessionId } = await params

  if (!db) return <div className="p-8 font-body text-[var(--fg-3)]">Database unavailable.</div>

  const rows = await db
    .select({ session: sessions, problem: problems, pattern: patterns, debrief: debriefs })
    .from(sessions)
    .innerJoin(problems, eq(sessions.problemId, problems.id))
    .innerJoin(patterns, eq(problems.patternId, patterns.id))
    .leftJoin(debriefs, eq(debriefs.sessionId, sessions.id))
    .where(eq(sessions.id, sessionId))
    .limit(1)

  if (!rows.length) notFound()

  const { session, problem, pattern, debrief } = rows[0]

  const timeMs = session.endedAt && session.startedAt
    ? session.endedAt.getTime() - session.startedAt.getTime()
    : 0
  const timeSecs = Math.floor(timeMs / 1000)
  const timeStr = `${String(Math.floor(timeSecs / 60)).padStart(2, '0')}:${String(timeSecs % 60).padStart(2, '0')}`

  const whatWorked = debrief?.whatWorked ?? [`Solved "${problem.title}"`]
  const wobbles = debrief?.wobbles ?? []
  const nextMoves = debrief?.nextMoves ?? []

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <div className="flex flex-wrap items-start justify-between gap-5">
        <div>
          <p className="text-[11px] font-body uppercase tracking-[0.3em] text-[var(--fg-3)]">// debrief</p>
          <h1 className="font-display text-6xl sm:text-7xl text-[var(--fg)] mt-2">
            you solved {problem.title}.
          </h1>
          <p className="font-zine text-xl text-[var(--fg-2)] mt-2">here is what you actually did.</p>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {[
            ['time', timeMs > 0 ? timeStr : '—'],
            ['xp', session.xpEarned > 0 ? `+${session.xpEarned}` : '—'],
            ['mode', session.mode],
          ].map(([label, value]) => (
            <div key={label}>
              <p className="text-[10px] font-body uppercase tracking-[0.3em] text-[var(--fg-3)]">{label}</p>
              <p className="font-display text-4xl text-[var(--fg)]">{value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-5 mt-8">
        <section className="border border-[var(--border)] p-5">
          <p className="text-[10px] font-body uppercase tracking-[0.3em] text-[var(--fg-3)] mb-4">● what worked</p>
          {whatWorked.length > 0 ? whatWorked.map((item) => (
            <p key={item} className="font-body text-sm text-[var(--fg-2)] mb-3">✓ {item}</p>
          )) : (
            <p className="font-body text-sm text-[var(--fg-3)]">Session data pending.</p>
          )}
        </section>

        <section className="border border-[var(--border)] p-5">
          <p className="text-[10px] font-body uppercase tracking-[0.3em] text-[var(--fg-3)] mb-4">● where you wobbled</p>
          {wobbles.length > 0 ? wobbles.map((item) => (
            <p key={item} className="font-body text-sm text-[var(--fg-2)] mb-3">◆ {item}</p>
          )) : (
            <p className="font-body text-sm text-[var(--fg-3)]">Clean run — no wobbles recorded.</p>
          )}
        </section>
      </div>

      {nextMoves.length > 0 && (
        <section className="border border-[var(--border)] mt-6 p-5">
          <p className="text-[10px] font-body uppercase tracking-[0.3em] text-[var(--fg-3)] mb-4">● your next moves · same pattern</p>
          <div className="grid md:grid-cols-3 gap-4">
            {nextMoves.map((title, index) => (
              <div key={title} className="border border-[var(--border)] p-4">
                <p className="text-[10px] font-body uppercase tracking-widest text-[var(--fg-3)]">
                  {index === 0 ? 'next up' : index === 1 ? 'after that' : 'then'}
                </p>
                <p className="font-body text-sm text-[var(--fg)] mt-2">{title}</p>
                <p className="text-[10px] font-body mt-3" style={{ color: pattern.hue }}>{pattern.name}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <div className="flex flex-wrap gap-3 mt-6">
        <Link href="/s/new" className="px-5 py-3 bg-[var(--accent)] text-[var(--bg)] text-xs font-body uppercase tracking-widest no-underline">
          ▶ one more
        </Link>
        <Link href="/dashboard" className="px-5 py-3 border border-[var(--border)] text-xs font-body uppercase tracking-widest no-underline">
          return dashboard
        </Link>
      </div>
    </div>
  )
}
