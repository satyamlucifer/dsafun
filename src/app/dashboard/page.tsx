import Link from 'next/link'
import type { Route } from 'next'
import { auth, currentUser } from '@clerk/nextjs/server'
import { eq, and, lte, desc } from 'drizzle-orm'
import { db } from '@/lib/db'
import { users, userPatterns, patterns, sessions, problems, spacedRepeats } from '@/lib/db/schema'
import { PatternGlyph } from '@/components/ui/PatternGlyph'
import { getFeaturedPattern, getFeaturedProblem, SESSION_MODES } from '@/lib/content'
import { RANKS } from '@/lib/content'
import { PATTERNS_SEED } from '@/lib/db/seed-data'

const RANK_THRESHOLDS = [0, 500, 1200, 2500, 5000, 10000, 18000, 25000]

export default async function DashboardPage() {
  const { userId: clerkId } = await auth()
  const clerkUser = await currentUser()
  const handle = clerkUser?.username ?? clerkUser?.firstName?.toLowerCase() ?? 'operator'

  const hour = new Date().getHours()
  const greeting = hour < 12 ? 'good morning' : hour < 17 ? 'good afternoon' : 'good evening'

  const today = new Date()
  const dateStr = today.toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short', year: '2-digit' }).replace(',', ' ·')

  // ── Fetch real user data ───────────────────────────────────
  let dbUser = null
  let weakPatterns: { slug: string; name: string; hue: string; glyph: string; topic: string; fluency: number; level: number }[] = []
  let dueRepeats: { id: string; problemTitle: string; patternSlug: string; lastSolvedAt: Date; problemId: string }[] = []

  if (db && clerkId) {
    dbUser = (await db.select().from(users).where(eq(users.clerkId, clerkId)).limit(1))[0] ?? null

    if (dbUser) {
      // Weak patterns: lowest fluency from userPatterns
      const patternRows = await db
        .select({
          slug: patterns.slug,
          name: patterns.name,
          hue: patterns.hue,
          glyph: patterns.glyph,
          topic: patterns.topic,
          fluency: userPatterns.fluency,
          level: userPatterns.level,
        })
        .from(userPatterns)
        .innerJoin(patterns, eq(userPatterns.patternId, patterns.id))
        .where(eq(userPatterns.userId, dbUser.id))
        .orderBy(userPatterns.fluency)
        .limit(3)
      weakPatterns = patternRows

      // Spaced repeats due today
      const now = new Date()
      const dueRows = await db
        .select({
          id: spacedRepeats.id,
          problemTitle: problems.title,
          patternSlug: patterns.slug,
          lastSolvedAt: spacedRepeats.lastSolvedAt,
          problemId: spacedRepeats.problemId,
        })
        .from(spacedRepeats)
        .innerJoin(problems, eq(spacedRepeats.problemId, problems.id))
        .innerJoin(patterns, eq(problems.patternId, patterns.id))
        .where(and(eq(spacedRepeats.userId, dbUser.id), lte(spacedRepeats.nextDueAt, now)))
        .orderBy(spacedRepeats.nextDueAt)
        .limit(3)
      dueRepeats = dueRows
    }
  }

  // Fall back to mock patterns for users with no data yet
  if (weakPatterns.length === 0) {
    weakPatterns = PATTERNS_SEED.slice(0, 3).map((p) => ({
      slug: p.slug, name: p.name, hue: p.hue, glyph: p.glyph, topic: p.topic, fluency: 0, level: 0,
    }))
  }

  const rankIdx = dbUser?.rankIdx ?? 0
  const xp = dbUser?.xp ?? 0
  const streakDays = dbUser?.streakDays ?? 0
  const currentRank = RANKS[rankIdx] ?? 'Script Kid'
  const nextRank = RANKS[rankIdx + 1]
  const nextThreshold = RANK_THRESHOLDS[rankIdx + 1] ?? RANK_THRESHOLDS[rankIdx] ?? 1
  const xpPct = nextRank ? Math.min(100, Math.round(((xp - (RANK_THRESHOLDS[rankIdx] ?? 0)) / (nextThreshold - (RANK_THRESHOLDS[rankIdx] ?? 0))) * 100)) : 100

  const featured = getFeaturedProblem()
  const pattern = getFeaturedPattern()

  // Days since last session for streak bars
  const lastAt = dbUser?.lastSessionAt
  const streakBars = Array.from({ length: 8 }, (_, i) => {
    if (!lastAt) return false
    const daysAgo = Math.floor((Date.now() - lastAt.getTime()) / (24 * 60 * 60 * 1000))
    return i < streakDays && i >= daysAgo
  })

  return (
    <div className="min-h-[calc(100dvh-3rem)] grid xl:grid-cols-[240px_1fr_300px]">
      {/* Left nav */}
      <aside className="hidden xl:block border-r border-[var(--border)] px-5 py-8">
        <p className="text-[11px] font-body text-[var(--fg-3)] uppercase tracking-[0.3em] mb-5">// nav</p>
        {([
          ['today', '/dashboard'],
          ['atlas', '/atlas'],
          ['library', '/library'],
          ['duels', '/d/new'],
          ['profile', `/profile/${handle}`],
          ['settings', '/settings'],
        ] as [string, string][]).map(([label, href], i) => (
          <Link
            key={href}
            href={href as Route}
            className={`block border ${i === 0 ? 'border-[var(--border-accent)] bg-[var(--accent-dim)]' : 'border-[var(--border)]'} px-3 py-2 mb-2 text-sm font-body text-[var(--fg-2)] no-underline hover:bg-[var(--bg-2)]`}
          >
            {i === 0 ? '◆' : '◇'} {label}
          </Link>
        ))}
        <div className="zine-divider" />
        <p className="text-[11px] font-body text-[var(--fg-3)] uppercase tracking-[0.3em] mb-3">// chapters</p>
        {weakPatterns.map((item) => (
          <Link key={item.slug} href={`/p/${item.slug}`} className="block border border-[var(--border)] px-3 py-2 mb-2 text-xs font-body text-[var(--fg-2)] no-underline hover:bg-[var(--bg-2)]">
            {item.name.replace('The ', '')} · {item.topic}
          </Link>
        ))}
      </aside>

      {/* Main content */}
      <section className="px-4 sm:px-8 py-8">
        <p className="text-[11px] font-body text-[var(--fg-3)] uppercase tracking-[0.3em]">{dateStr}</p>
        <h1 className="font-display text-6xl sm:text-7xl leading-none mt-2 text-[var(--fg)]">
          {greeting},<br />@{handle}.
        </h1>

        {/* Today's expedition */}
        <div className="mt-8 border border-[var(--border)]">
          <div className="flex items-center gap-2 border-b border-[var(--border)] px-4 py-2 bg-[var(--bg-2)]">
            <span className="text-[var(--accent)]">●</span>
            <p className="text-[10px] font-body uppercase tracking-[0.3em] text-[var(--fg-3)]">today's expedition · fresh</p>
          </div>
          <div className="p-5 grid lg:grid-cols-[1fr_240px] gap-6">
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="border border-[var(--border)] px-3 py-1 text-[10px] font-body uppercase tracking-wider" style={{ color: pattern.hue }}>{pattern.topic}</span>
                <span className="border border-[var(--border)] px-3 py-1 text-[10px] font-body uppercase tracking-wider">{featured.difficulty}</span>
                <span className="border border-[var(--border)] px-3 py-1 text-[10px] font-body uppercase tracking-wider">~{featured.estMin} min</span>
              </div>
              <h2 className="font-display text-4xl text-[var(--fg)]">{featured.title}</h2>
              <p className="font-body text-sm text-[var(--fg-2)] leading-7 max-w-2xl mt-3">{featured.prompt.split('\n')[0]}</p>
              <div className="flex flex-wrap gap-3 mt-6">
                <Link href="/s/new" className="px-4 py-2 bg-[var(--accent)] text-[var(--bg)] text-xs font-body uppercase tracking-widest no-underline">▶ enter · {featured.estMin} min</Link>
                <Link href={`/p/${pattern.slug}`} className="px-4 py-2 border border-[var(--border)] text-xs font-body uppercase tracking-widest no-underline hover:bg-[var(--bg-2)]">read character</Link>
                <Link href="/library" className="px-4 py-2 border border-dashed border-[var(--border)] text-xs font-body uppercase tracking-widest no-underline hover:bg-[var(--bg-2)]">give me an easier one</Link>
              </div>
            </div>
            <div>
              <p className="text-[11px] font-body text-[var(--fg-3)] uppercase tracking-[0.25em] mb-3">session mode</p>
              <div className="grid gap-3">
                {SESSION_MODES.map((mode, i) => (
                  <Link key={mode.slug} href="/s/new" className={`border ${i === 1 ? 'border-[var(--border-accent)]' : 'border-[var(--border)]'} p-3 no-underline hover:bg-[var(--bg-2)]`}>
                    <div className="flex items-baseline justify-between">
                      <p className="font-body text-sm text-[var(--fg)]">{mode.name}</p>
                      <p className="text-xs text-[var(--fg-3)]">{mode.minutes} min</p>
                    </div>
                    <p className="text-[10px] font-body text-[var(--fg-3)] mt-1">{mode.subtitle}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Spaced repeats + challenges */}
        <div className="grid lg:grid-cols-2 gap-5 mt-6">
          <div className="border border-[var(--border)]">
            <div className="border-b border-[var(--border)] bg-[var(--bg-2)] px-4 py-2">
              <p className="text-[10px] font-body text-[var(--fg-3)] uppercase tracking-[0.3em]">spaced repeat · today</p>
            </div>
            <div className="p-4 grid gap-3">
              {dueRepeats.length === 0 ? (
                <p className="text-xs font-body text-[var(--fg-3)]">nothing due today · keep solving to build your queue</p>
              ) : (
                dueRepeats.map((item) => {
                  const daysAgo = Math.floor((Date.now() - item.lastSolvedAt.getTime()) / (24 * 60 * 60 * 1000))
                  return (
                    <Link key={item.id} href={`/s/new?problemId=${item.problemId}`} className="flex items-center justify-between text-sm font-body text-[var(--fg-2)] no-underline border-b border-[var(--border)] pb-2">
                      <span>● {item.problemTitle} · {daysAgo}d ago</span>
                      <span>▶</span>
                    </Link>
                  )
                })
              )}
              <p className="text-[10px] font-body text-[var(--fg-3)]">same pattern · new costume</p>
            </div>
          </div>

          <div className="border border-[var(--border)]">
            <div className="border-b border-[var(--border)] bg-[var(--bg-2)] px-4 py-2">
              <p className="text-[10px] font-body text-[var(--fg-3)] uppercase tracking-[0.3em]">challenges · inbox</p>
            </div>
            <div className="p-4 grid gap-3">
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm font-body text-[var(--fg-3)]">○ no pending challenges</p>
                <Link href="/d/new" className="px-3 py-1 border border-[var(--border)] text-[10px] uppercase tracking-widest no-underline">start one</Link>
              </div>
              <p className="text-[10px] font-body text-[var(--fg-3)]">challenge a friend at <Link href="/d/new" className="text-[var(--accent)] no-underline">/d/new</Link></p>
            </div>
          </div>
        </div>
      </section>

      {/* Right sidebar */}
      <aside className="hidden xl:block border-l border-[var(--border)] px-5 py-8 bg-[var(--bg-2)]">
        {clerkUser?.imageUrl && (
          <div className="mb-5 flex items-center gap-3">
            <img src={clerkUser.imageUrl} alt={handle} width={40} height={40} className="w-10 h-10 border border-[var(--border)]" />
            <div>
              <p className="font-display text-lg text-[var(--fg)] leading-none">@{handle}</p>
              <p className="text-[10px] font-body text-[var(--fg-3)] mt-1 uppercase tracking-widest">{currentRank.toLowerCase()}</p>
            </div>
          </div>
        )}

        <p className="text-[11px] font-body text-[var(--fg-3)] uppercase tracking-[0.3em] mb-2">streak</p>
        <p className="font-display text-6xl text-[var(--fg)] leading-none">{streakDays}</p>
        <div className="flex gap-1 my-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="w-4 h-6 border border-[var(--border)]" style={{ background: i < Math.min(streakDays, 8) ? 'var(--accent)' : 'transparent' }} />
          ))}
        </div>

        <div className="zine-divider" />
        <p className="text-[11px] font-body text-[var(--fg-3)] uppercase tracking-[0.3em] mb-4">your weakest · top 3</p>
        <div className="grid gap-3">
          {weakPatterns.map((item) => (
            <Link key={item.slug} href={`/p/${item.slug}`} className="border border-[var(--border)] p-3 flex gap-3 no-underline hover:bg-[var(--bg)]">
              <PatternGlyph glyph={item.glyph} hue={item.hue} size={34} />
              <div className="flex-1">
                <p className="font-display text-lg leading-none" style={{ color: item.hue }}>{item.name}</p>
                <p className="text-[10px] font-body text-[var(--fg-3)] mt-1">{item.topic} · lvl {item.level}/5</p>
                <div className="fluency-bar mt-2">
                  <div className="fluency-bar-fill" style={{ width: `${item.fluency * 100}%`, background: item.hue }} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="zine-divider" />
        <p className="text-[11px] font-body text-[var(--fg-3)] uppercase tracking-[0.3em] mb-3">rank</p>
        <div className="border border-[var(--border)] p-4">
          <p className="font-display text-2xl text-[var(--fg)] uppercase">{currentRank}</p>
          <div className="fluency-bar mt-3">
            <div className="fluency-bar-fill" style={{ width: `${xpPct}%` }} />
          </div>
          <p className="text-[10px] font-body text-[var(--fg-3)] mt-2">{xp.toLocaleString()} / {nextThreshold.toLocaleString()} xp</p>
        </div>
      </aside>
    </div>
  )
}
