import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { eq } from 'drizzle-orm'
import { db } from '@/lib/db'
import { sessions, problems, patterns } from '@/lib/db/schema'
import { SessionWorkbench } from '@/components/session/SessionWorkbench'

export const metadata: Metadata = { title: 'Session' }

export default async function SessionPage({ params }: { params: Promise<{ sessionId: string }> }) {
  const { sessionId } = await params

  if (!db) return <div className="p-8 font-body text-[var(--fg-3)]">Database unavailable.</div>

  const rows = await db
    .select({ session: sessions, problem: problems, pattern: patterns })
    .from(sessions)
    .innerJoin(problems, eq(sessions.problemId, problems.id))
    .innerJoin(patterns, eq(problems.patternId, patterns.id))
    .where(eq(sessions.id, sessionId))
    .limit(1)

  if (!rows.length) notFound()

  const { session, problem, pattern } = rows[0]
  return <SessionWorkbench session={session} problem={problem} pattern={pattern} />
}
