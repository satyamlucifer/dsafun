import { z } from 'zod'
import { eq, and, gte, desc, count, sql, lte } from 'drizzle-orm'
import { createTRPCRouter, protectedProcedure, publicProcedure } from '../trpc'
import {
  users, userPatterns, patterns, sessions, problems,
  badges, userBadges, spacedRepeats,
} from '@/lib/db/schema'

export const userRouter = createTRPCRouter({
  me: protectedProcedure.query(async ({ ctx }) => {
    return ctx.dbUser
  }),

  myStats: protectedProcedure.query(async ({ ctx }) => {
    const { db, dbUser } = ctx

    // Pattern fluency joined with pattern metadata
    const myPatterns = await db
      .select({
        fluency: userPatterns.fluency,
        level: userPatterns.level,
        problemsSolved: userPatterns.problemsSolved,
        lastSeenAt: userPatterns.lastSeenAt,
        slug: patterns.slug,
        name: patterns.name,
        hue: patterns.hue,
        glyph: patterns.glyph,
        topic: patterns.topic,
      })
      .from(userPatterns)
      .innerJoin(patterns, eq(userPatterns.patternId, patterns.id))
      .where(eq(userPatterns.userId, dbUser.id))

    // Recent 4 submitted sessions with problem + pattern info
    const recentSessions = await db
      .select({
        sessionId: sessions.id,
        startedAt: sessions.startedAt,
        endedAt: sessions.endedAt,
        xpEarned: sessions.xpEarned,
        problemTitle: problems.title,
        patternSlug: patterns.slug,
        patternName: patterns.name,
        patternHue: patterns.hue,
      })
      .from(sessions)
      .innerJoin(problems, eq(sessions.problemId, problems.id))
      .innerJoin(patterns, eq(problems.patternId, patterns.id))
      .where(and(eq(sessions.userId, dbUser.id), eq(sessions.status, 'submitted')))
      .orderBy(desc(sessions.endedAt))
      .limit(4)

    // Activity heatmap: last 112 days → one integer per day (0–5)
    const cutoff = new Date(Date.now() - 112 * 24 * 60 * 60 * 1000)
    const activityRows = await db
      .select({
        day: sql<string>`DATE(${sessions.startedAt})`.as('day'),
        cnt: count(sessions.id).as('cnt'),
      })
      .from(sessions)
      .where(and(eq(sessions.userId, dbUser.id), gte(sessions.startedAt, cutoff)))
      .groupBy(sql`DATE(${sessions.startedAt})`)

    const activityMap = new Map<string, number>()
    for (const row of activityRows) activityMap.set(row.day, Math.min(Number(row.cnt), 5))

    const activity = Array.from({ length: 112 }, (_, i) => {
      const d = new Date(cutoff.getTime() + i * 24 * 60 * 60 * 1000)
      return activityMap.get(d.toISOString().slice(0, 10)) ?? 0
    })

    // Total submitted sessions + avg duration
    const allSubmitted = await db
      .select({ startedAt: sessions.startedAt, endedAt: sessions.endedAt })
      .from(sessions)
      .where(and(eq(sessions.userId, dbUser.id), eq(sessions.status, 'submitted')))

    const totalSessions = allSubmitted.length
    const avgSessionMin = totalSessions > 0
      ? Math.round(
          allSubmitted.reduce((sum, s) => {
            if (!s.endedAt) return sum
            return sum + (s.endedAt.getTime() - s.startedAt.getTime())
          }, 0) / totalSessions / 60000,
        )
      : 0

    return { myPatterns, recentSessions, activity, totalSessions, avgSessionMin }
  }),

  myBadges: protectedProcedure.query(async ({ ctx }) => {
    const { db, dbUser } = ctx
    return db
      .select({
        slug: badges.slug,
        name: badges.name,
        description: badges.description,
        glyph: badges.glyph,
        awardedAt: userBadges.awardedAt,
      })
      .from(userBadges)
      .innerJoin(badges, eq(userBadges.badgeId, badges.id))
      .where(eq(userBadges.userId, dbUser.id))
  }),

  spacedRepeats: protectedProcedure.query(async ({ ctx }) => {
    const { db, dbUser } = ctx
    const now = new Date()
    return db
      .select({
        id: spacedRepeats.id,
        lastSolvedAt: spacedRepeats.lastSolvedAt,
        nextDueAt: spacedRepeats.nextDueAt,
        problemId: spacedRepeats.problemId,
        problemTitle: problems.title,
        patternSlug: patterns.slug,
        patternName: patterns.name,
      })
      .from(spacedRepeats)
      .innerJoin(problems, eq(spacedRepeats.problemId, problems.id))
      .innerJoin(patterns, eq(problems.patternId, patterns.id))
      .where(and(eq(spacedRepeats.userId, dbUser.id), lte(spacedRepeats.nextDueAt, now)))
      .orderBy(spacedRepeats.nextDueAt)
      .limit(5)
  }),

  // Public profile: basic stats for any handle
  byHandle: publicProcedure
    .input(z.object({ handle: z.string() }))
    .query(async ({ input, ctx }) => {
      const { clerkId } = ctx
      // Resolve db from module (db may be null outside protected procedures)
      const { db } = await import('@/lib/db')
      if (!db) return null

      const [target] = await db
        .select()
        .from(users)
        .where(eq(users.handle, input.handle))
        .limit(1)
      if (!target) return null

      const isSelf = !!(clerkId && (
        await db.select({ id: users.id }).from(users)
          .where(eq(users.clerkId, clerkId)).limit(1)
      )[0]?.id === target.id)

      const [{ total }] = await db
        .select({ total: count(sessions.id) })
        .from(sessions)
        .where(and(eq(sessions.userId, target.id), eq(sessions.status, 'submitted')))

      return { user: target, totalSessions: total, isSelf }
    }),

  updateSettings: protectedProcedure
    .input(z.object({
      theme: z.enum(['terminal', 'amber', 'paper']).optional(),
      language: z.enum(['python', 'javascript', 'typescript', 'java', 'go', 'cpp', 'rust']).optional(),
      coachModel: z.enum(['fast', 'smart']).optional(),
      scanlines: z.boolean().optional(),
      vignette: z.boolean().optional(),
    }))
    .mutation(async ({ input, ctx }) => {
      const { db, dbUser } = ctx
      const current = (dbUser.settingsJson ?? {}) as Record<string, unknown>
      const merged = { ...current, ...Object.fromEntries(Object.entries(input).filter(([, v]) => v !== undefined)) }
      await db.update(users).set({ settingsJson: merged }).where(eq(users.id, dbUser.id))
      return { ok: true }
    }),
})
