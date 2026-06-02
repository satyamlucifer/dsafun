import type { Metadata } from 'next'
import Link from 'next/link'
import { auth, currentUser } from '@clerk/nextjs/server'
import { eq, and, count } from 'drizzle-orm'
import { db } from '@/lib/db'
import { users, userPatterns, patterns, sessions, userBadges, badges } from '@/lib/db/schema'
import { RANKS } from '@/lib/content'
import { HintIcon } from '@/components/ui/Hint'

type PageProps = { params: Promise<{ handle: string }> }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { handle } = await params
  return { title: `@${handle}` }
}

// ── Static badge catalog shown to everyone (earned ones glow) ─
const ALL_BADGES = [
  { slug: 'honest-skip',    name: 'Honest Skip',      desc: 'declined a wrong hint'        },
  { slug: 'no-hints-solve', name: 'No-Hints Solve',   desc: 'hard problem, zero hints'     },
  { slug: 'pattern-sleuth', name: 'Pattern Sleuth',   desc: 'identified pattern in <30s'   },
  { slug: 'repeat-master',  name: 'Repeat Master',    desc: '10 spaced-repeat solves'      },
  { slug: 'streak-week',    name: 'Week Streak',      desc: '7-day streak maintained'      },
  { slug: 'duel-winner',    name: 'Duelist',          desc: 'first duel win'               },
  { slug: 'speed-demon',    name: 'Speed Demon',      desc: 'solved in under half est. time'},
  { slug: 'no-coach',       name: 'Solo Flight',      desc: 'solved without coach'         },
]

export default async function ProfilePage({ params }: PageProps) {
  const { handle } = await params
  const { userId: clerkId } = await auth()
  const clerkUser = await currentUser()

  const isOwn = handle === 'me' || !!(clerkUser && (
    clerkUser.username === handle || clerkUser.firstName?.toLowerCase() === handle
  ))

  // Resolve DB user for the target handle
  let dbUser = null
  if (db) {
    const targetHandle = isOwn && handle === 'me'
      ? (clerkUser?.username ?? clerkUser?.firstName?.toLowerCase() ?? '')
      : handle

    dbUser = (await db.select().from(users).where(eq(users.handle, targetHandle)).limit(1))[0] ?? null

    // If viewing own profile and no DB user yet, try to look up by clerkId
    if (!dbUser && isOwn && clerkId) {
      dbUser = (await db.select().from(users).where(eq(users.clerkId, clerkId)).limit(1))[0] ?? null
    }
  }

  const displayName = dbUser?.handle ?? (isOwn ? (clerkUser?.username ?? clerkUser?.firstName ?? handle) : handle)
  const avatarUrl = isOwn ? clerkUser?.imageUrl : null

  // ── Fetch real data from DB ────────────────────────────────
  let myPatterns: { slug: string; name: string; hue: string; fluency: number; problemsSolved: number }[] = []
  let recentSessions: { problemTitle: string; patternName: string; patternHue: string; patternSlug: string; xpEarned: number; startedAt: Date; endedAt: Date | null }[] = []
  let activity = Array.from({ length: 112 }, () => 0)
  let totalSessions = 0
  let avgSessionMin = 0
  let earnedBadgeSlugs = new Set<string>()

  if (db && dbUser) {
    const userId = dbUser.id

    // Pattern fluency
    const patternRows = await db
      .select({ slug: patterns.slug, name: patterns.name, hue: patterns.hue, fluency: userPatterns.fluency, problemsSolved: userPatterns.problemsSolved })
      .from(userPatterns)
      .innerJoin(patterns, eq(userPatterns.patternId, patterns.id))
      .where(eq(userPatterns.userId, userId))
    myPatterns = patternRows

    // Recent sessions
    const { desc } = await import('drizzle-orm')
    const { problems } = await import('@/lib/db/schema')
    const sessionRows = await db
      .select({
        problemTitle: problems.title,
        patternName: patterns.name,
        patternHue: patterns.hue,
        patternSlug: patterns.slug,
        xpEarned: sessions.xpEarned,
        startedAt: sessions.startedAt,
        endedAt: sessions.endedAt,
      })
      .from(sessions)
      .innerJoin(problems, eq(sessions.problemId, problems.id))
      .innerJoin(patterns, eq(problems.patternId, patterns.id))
      .where(and(eq(sessions.userId, userId), eq(sessions.status, 'submitted')))
      .orderBy(desc(sessions.endedAt))
      .limit(4)
    recentSessions = sessionRows

    // Activity heatmap
    const { gte, sql } = await import('drizzle-orm')
    const cutoff = new Date(Date.now() - 112 * 24 * 60 * 60 * 1000)
    const actRows = await db
      .select({ day: sql<string>`DATE(${sessions.startedAt})`.as('day'), cnt: count(sessions.id) })
      .from(sessions)
      .where(and(eq(sessions.userId, userId), gte(sessions.startedAt, cutoff)))
      .groupBy(sql`DATE(${sessions.startedAt})`)
    const actMap = new Map(actRows.map((r) => [r.day, Math.min(Number(r.cnt), 5)]))
    activity = Array.from({ length: 112 }, (_, i) => {
      const d = new Date(cutoff.getTime() + i * 24 * 60 * 60 * 1000)
      return actMap.get(d.toISOString().slice(0, 10)) ?? 0
    })

    // Total sessions + avg time
    const allSubmitted = await db
      .select({ startedAt: sessions.startedAt, endedAt: sessions.endedAt })
      .from(sessions)
      .where(and(eq(sessions.userId, userId), eq(sessions.status, 'submitted')))
    totalSessions = allSubmitted.length
    if (totalSessions > 0) {
      const totalMs = allSubmitted.reduce((s, r) => s + (r.endedAt ? r.endedAt.getTime() - r.startedAt.getTime() : 0), 0)
      avgSessionMin = Math.round(totalMs / totalSessions / 60000)
    }

    // Earned badges
    const badgeRows = await db
      .select({ slug: badges.slug })
      .from(userBadges)
      .innerJoin(badges, eq(userBadges.badgeId, badges.id))
      .where(eq(userBadges.userId, userId))
    earnedBadgeSlugs = new Set(badgeRows.map((b) => b.slug))
  }

  // ── Rank data ──────────────────────────────────────────────
  const rankIdx = dbUser?.rankIdx ?? 0
  const xp = dbUser?.xp ?? 0
  const streakDays = dbUser?.streakDays ?? 0
  const RANK_THRESHOLDS = [0, 500, 1200, 2500, 5000, 10000, 18000, 25000]
  const currentRank = RANKS[rankIdx]
  const nextRank = RANKS[rankIdx + 1]
  const currentThreshold = RANK_THRESHOLDS[rankIdx] ?? 0
  const nextThreshold = RANK_THRESHOLDS[rankIdx + 1] ?? RANK_THRESHOLDS[rankIdx] ?? 1
  const xpIntoRank = xp - currentThreshold
  const xpNeeded = nextThreshold - currentThreshold
  const xpPct = nextRank ? Math.min(100, Math.round((xpIntoRank / xpNeeded) * 100)) : 100
  const xpToNext = nextRank ? nextThreshold - xp : 0

  // Joined how long ago
  const joinedAt = dbUser?.joinedAt ?? new Date()
  const monthsAgo = Math.floor((Date.now() - joinedAt.getTime()) / (30 * 24 * 60 * 60 * 1000))
  const joinedStr = monthsAgo === 0 ? 'this month' : `${monthsAgo} mo ago`

  const earnedCount = earnedBadgeSlugs.size
  const totalBadges = ALL_BADGES.length

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Header */}
      <section className="grid md:grid-cols-[160px_1fr_auto] gap-5 items-start">
        <div className="aspect-square border border-[var(--border)] bg-[var(--bg-2)] overflow-hidden flex items-center justify-center">
          {avatarUrl ? (
            <img src={avatarUrl} alt={displayName ?? ''} className="w-full h-full object-cover" />
          ) : (
            <span className="font-display text-5xl text-[var(--fg-3)]">
              {(displayName?.[0] ?? '?').toUpperCase()}
            </span>
          )}
        </div>
        <div>
          <p className="text-[11px] font-body uppercase tracking-[0.3em] text-[var(--fg-3)]">// operator · #{displayName?.slice(0, 4)}f3</p>
          <h1 className="font-display text-7xl text-[var(--fg)] leading-none">@{displayName}</h1>
          <div className="flex flex-wrap gap-2 mt-3">
            {[
              `${currentRank?.toLowerCase()} · ${['I', 'II', 'III', 'IV', 'V'][rankIdx % 5] ?? 'I'}`,
              `joined ${joinedStr}`,
              `${totalSessions} problems`,
              `${streakDays}-day streak`,
            ].map((item, i) => (
              <span key={item} className={`border border-[var(--border)] px-2 py-1 text-[10px] font-body uppercase tracking-wider ${i === 0 ? 'bg-[var(--fg)] text-[var(--bg)]' : 'text-[var(--fg-2)]'}`}>
                {item}
              </span>
            ))}
          </div>
          <p className="font-zine text-xl text-[var(--fg-2)] mt-5">"i ship for a living. i don't grind. i read dsafun like a comic before bed."</p>
        </div>
        {isOwn && (
          <div className="grid gap-3">
            <Link href="/settings" className="border border-[var(--border)] px-5 py-2 text-xs font-body uppercase tracking-widest text-center no-underline">edit profile</Link>
            <button className="border border-dashed border-[var(--border)] px-5 py-2 text-xs font-body uppercase tracking-widest text-[var(--fg-3)]">export replay reel</button>
          </div>
        )}
      </section>

      {/* Rank ladder */}
      <section className="border border-[var(--border)] mt-8 p-5">
        <div className="flex items-center gap-2 mb-1">
          <p className="text-[10px] font-body uppercase tracking-[0.3em] text-[var(--fg-3)]">● rank ladder</p>
          <HintIcon content="8 ranks from Script Kid to Algorithmist. Each rank requires XP earned from solved problems, hints avoided, and streak days." side="right" />
        </div>
        <p className="text-xs font-body text-[var(--fg-3)] mb-6">
          {isOwn
            ? `you're on ${currentRank}. ${nextRank ? `${xpToNext} xp to ${nextRank}.` : 'max rank achieved.'}`
            : `${currentRank} rank`}
        </p>
        <div className="relative h-24">
          <div className="absolute left-6 right-6 top-7 h-0.5 bg-[var(--fg-2)]" />
          <div className="grid grid-cols-8 gap-2 relative">
            {RANKS.map((rank, i) => (
              <div key={rank} className="text-center">
                <div className={`w-5 h-5 mx-auto rounded-full border border-[var(--fg)] ${i <= rankIdx ? 'bg-[var(--fg)]' : 'bg-[var(--bg)]'}`} />
                <p className="text-[9px] font-body text-[var(--fg-3)] uppercase tracking-wide mt-3 leading-tight">{rank}</p>
              </div>
            ))}
          </div>
        </div>
        {isOwn && (
          <div className="mt-4">
            <div className="fluency-bar max-w-sm">
              <div className="fluency-bar-fill" style={{ width: `${xpPct}%` }} />
            </div>
            <p className="text-[10px] font-body text-[var(--fg-3)] mt-1">
              {xp.toLocaleString()} / {nextThreshold.toLocaleString()} xp{nextRank ? ` to ${nextRank}` : ' · max rank'}
            </p>
          </div>
        )}
      </section>

      {/* Activity heatmap + badges */}
      <div className="grid lg:grid-cols-[1fr_420px] gap-5 mt-6">
        <section className="border border-[var(--border)] p-5">
          <div className="flex items-center gap-2 mb-5">
            <p className="text-[10px] font-body uppercase tracking-[0.3em] text-[var(--fg-3)]">● sessions · last 16 weeks</p>
            <HintIcon content="Each cell = one session. Darker = more sessions that week." side="right" />
          </div>
          <div className="grid grid-cols-16 gap-1 max-w-4xl">
            {activity.map((level, i) => (
              <span
                key={i}
                className="aspect-square border border-[var(--border)]"
                title={level === 0 ? 'no sessions' : `${level} session${level !== 1 ? 's' : ''}`}
                style={{ background: level === 0 ? 'transparent' : `color-mix(in srgb, var(--accent) ${level * 14}%, var(--bg-2))` }}
              />
            ))}
          </div>
          <p className="text-[10px] font-body text-[var(--fg-3)] mt-4">
            less □ □ ■ ■ ■ more
            <span className="float-right">
              {totalSessions} sessions{avgSessionMin > 0 ? ` · avg ${avgSessionMin}:00` : ''}
            </span>
          </p>
        </section>

        <section className="border border-[var(--border)] p-5">
          <div className="flex items-center gap-2 mb-5">
            <p className="text-[10px] font-body uppercase tracking-[0.3em] text-[var(--fg-3)]">● badges · {earnedCount} of {totalBadges}</p>
            <HintIcon content="Earn badges for specific achievements. Some are secret." side="right" />
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {ALL_BADGES.map(({ slug, name, desc }) => {
              const earned = earnedBadgeSlugs.has(slug)
              return (
                <div key={slug} className={`border border-[var(--border)] p-4 ${!earned ? 'opacity-40' : ''}`}>
                  <p className="font-body text-sm text-[var(--fg)]">{earned ? '◇' : '○'} {name}</p>
                  <p className="text-[10px] font-body text-[var(--fg-3)] mt-1">{desc}</p>
                </div>
              )
            })}
          </div>
          <p className="text-[10px] font-body text-[var(--fg-3)] mt-4">○ dimmed = locked · some badges are secret</p>
        </section>
      </div>

      {/* Recent expeditions */}
      <section className="border border-[var(--border)] mt-6 p-5">
        <p className="text-[10px] font-body uppercase tracking-[0.3em] text-[var(--fg-3)] mb-4">● recent expeditions</p>
        {recentSessions.length === 0 ? (
          <p className="text-sm font-body text-[var(--fg-3)]">no completed sessions yet · <Link href="/library" className="text-[var(--accent)]">start one →</Link></p>
        ) : (
          <div className="grid gap-3">
            {recentSessions.map((s, i) => {
              const durationMin = s.endedAt
                ? Math.round((s.endedAt.getTime() - s.startedAt.getTime()) / 60000)
                : null
              return (
                <Link
                  key={i}
                  href={`/p/${s.patternSlug}`}
                  className="grid sm:grid-cols-[1fr_1fr_120px_80px] gap-3 border-b border-[var(--border)] pb-3 no-underline hover:bg-[var(--bg-2)] px-2"
                >
                  <span className="font-body text-sm text-[var(--fg)]">{s.problemTitle}</span>
                  <span className="text-sm font-body" style={{ color: s.patternHue }}>{s.patternName}</span>
                  <span className="text-xs font-body text-[var(--fg-3)]">{durationMin != null ? `${durationMin} min` : '—'}</span>
                  <span className="text-xs font-body text-[var(--fg-3)]">+{s.xpEarned} xp</span>
                </Link>
              )
            })}
          </div>
        )}
      </section>
    </div>
  )
}
