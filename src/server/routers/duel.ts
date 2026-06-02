import { z } from 'zod'
import { eq, and, sql } from 'drizzle-orm'
import { TRPCError } from '@trpc/server'
import { createTRPCRouter, protectedProcedure, publicProcedure } from '../trpc'
import { duels, duelParticipants, users, problems, patterns } from '@/lib/db/schema'
import type { DuelStatus } from '@/lib/db/schema'
import { db as globalDb } from '@/lib/db'

export const duelRouter = createTRPCRouter({
  // Create a new duel challenge — returns the duelId (invite link is /d/{id})
  create: protectedProcedure
    .input(z.object({
      durationMin: z.number().int().min(5).max(60).default(15),
      spectators: z.enum(['friends', 'private']).default('friends'),
      coachMode: z.enum(['whisper', 'off']).default('whisper'),
      chatEnabled: z.boolean().default(true),
      problemId: z.string().uuid().optional(),
    }))
    .mutation(async ({ input, ctx }) => {
      const { db, dbUser } = ctx

      let problemId = input.problemId
      if (!problemId) {
        const row = await db
          .select({ id: problems.id })
          .from(problems)
          .where(eq(problems.difficulty, 'medium'))
          .orderBy(sql`RANDOM()`)
          .limit(1)
        if (!row[0]) throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: 'No problems available' })
        problemId = row[0].id
      }

      const status: DuelStatus = {
        phase: 'waiting',
        challengerId: dbUser.id,
        durationMin: input.durationMin,
        spectators: input.spectators,
        coachMode: input.coachMode,
        chatEnabled: input.chatEnabled,
      }

      const [duel] = await db.insert(duels).values({ problemId, statusJson: status }).returning()
      await db.insert(duelParticipants).values({ duelId: duel.id, userId: dbUser.id })

      return { duelId: duel.id }
    }),

  // Accept / join a waiting duel
  join: protectedProcedure
    .input(z.object({ duelId: z.string().uuid() }))
    .mutation(async ({ input, ctx }) => {
      const { db, dbUser } = ctx

      const [duel] = await db.select().from(duels).where(eq(duels.id, input.duelId)).limit(1)
      if (!duel) throw new TRPCError({ code: 'NOT_FOUND', message: 'Duel not found' })

      const status = duel.statusJson as DuelStatus
      if (status.phase !== 'waiting') throw new TRPCError({ code: 'BAD_REQUEST', message: 'Duel is not open' })
      if (status.challengerId === dbUser.id) throw new TRPCError({ code: 'BAD_REQUEST', message: 'Cannot join your own duel' })

      const already = await db
        .select()
        .from(duelParticipants)
        .where(and(eq(duelParticipants.duelId, input.duelId), eq(duelParticipants.userId, dbUser.id)))
        .limit(1)
      if (already.length) throw new TRPCError({ code: 'BAD_REQUEST', message: 'Already in this duel' })

      await db.insert(duelParticipants).values({ duelId: input.duelId, userId: dbUser.id })
      await db.update(duels)
        .set({ statusJson: { ...status, phase: 'active', activeAt: new Date().toISOString() } })
        .where(eq(duels.id, input.duelId))

      return { ok: true }
    }),

  // Poll for current duel state (called every ~3s from the active duel page)
  poll: publicProcedure
    .input(z.object({ duelId: z.string().uuid() }))
    .query(async ({ input }) => {
      const db = globalDb
      if (!db) return null

      const [duel] = await db.select().from(duels).where(eq(duels.id, input.duelId)).limit(1)
      if (!duel) return null

      const problem = await db
        .select({
          id: problems.id,
          title: problems.title,
          prompt: problems.prompt,
          constraints: problems.constraints,
          examples: problems.examples,
          difficulty: problems.difficulty,
          estMin: problems.estMin,
          hints: problems.hints,
          patternSlug: patterns.slug,
          patternName: patterns.name,
          patternHue: patterns.hue,
          patternTopic: patterns.topic,
        })
        .from(problems)
        .innerJoin(patterns, eq(problems.patternId, patterns.id))
        .where(eq(problems.id, duel.problemId))
        .limit(1)

      const participants = await db
        .select({
          userId: duelParticipants.userId,
          progress: duelParticipants.progress,
          submittedAt: duelParticipants.submittedAt,
          won: duelParticipants.won,
          handle: users.handle,
          rankIdx: users.rankIdx,
          xp: users.xp,
        })
        .from(duelParticipants)
        .innerJoin(users, eq(duelParticipants.userId, users.id))
        .where(eq(duelParticipants.duelId, input.duelId))

      return {
        duel: { ...duel, statusJson: duel.statusJson as DuelStatus },
        problem: problem[0] ?? null,
        participants,
      }
    }),

  // Update own progress bar (0–1) after each test run
  updateProgress: protectedProcedure
    .input(z.object({ duelId: z.string().uuid(), progress: z.number().min(0).max(1) }))
    .mutation(async ({ input, ctx }) => {
      const { db, dbUser } = ctx
      await db
        .update(duelParticipants)
        .set({ progress: input.progress })
        .where(and(eq(duelParticipants.duelId, input.duelId), eq(duelParticipants.userId, dbUser.id)))
      return { ok: true }
    }),

  // Final code submit — determines winner when both done
  submit: protectedProcedure
    .input(z.object({ duelId: z.string().uuid(), finalCode: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const { db, dbUser } = ctx
      const now = new Date()

      await db
        .update(duelParticipants)
        .set({ submittedAt: now, finalCode: input.finalCode, progress: 1 })
        .where(and(eq(duelParticipants.duelId, input.duelId), eq(duelParticipants.userId, dbUser.id)))

      const all = await db
        .select()
        .from(duelParticipants)
        .where(eq(duelParticipants.duelId, input.duelId))

      if (all.length >= 2 && all.every((p) => p.submittedAt !== null)) {
        const winner = [...all].sort(
          (a, b) => (a.submittedAt?.getTime() ?? Infinity) - (b.submittedAt?.getTime() ?? Infinity),
        )[0]

        await db
          .update(duelParticipants)
          .set({ won: true })
          .where(and(eq(duelParticipants.duelId, input.duelId), eq(duelParticipants.userId, winner.userId)))

        const [duel] = await db.select().from(duels).where(eq(duels.id, input.duelId)).limit(1)
        const status = duel?.statusJson as DuelStatus
        await db
          .update(duels)
          .set({ statusJson: { ...status, phase: 'ended', winnerId: winner.userId }, endedAt: now })
          .where(eq(duels.id, input.duelId))

        return { ok: true, ended: true, winnerId: winner.userId }
      }

      return { ok: true, ended: false, winnerId: null }
    }),

  forfeit: protectedProcedure
    .input(z.object({ duelId: z.string().uuid() }))
    .mutation(async ({ input, ctx }) => {
      const { db, dbUser } = ctx
      const now = new Date()

      // Mark opponent as winner
      const all = await db
        .select()
        .from(duelParticipants)
        .where(eq(duelParticipants.duelId, input.duelId))

      const opponent = all.find((p) => p.userId !== dbUser.id)
      if (opponent) {
        await db
          .update(duelParticipants)
          .set({ won: true })
          .where(and(eq(duelParticipants.duelId, input.duelId), eq(duelParticipants.userId, opponent.userId)))
      }

      const [duel] = await db.select().from(duels).where(eq(duels.id, input.duelId)).limit(1)
      const status = duel?.statusJson as DuelStatus
      await db
        .update(duels)
        .set({ statusJson: { ...status, phase: 'ended', winnerId: opponent?.userId }, endedAt: now })
        .where(eq(duels.id, input.duelId))

      return { ok: true }
    }),

  // Get pending challenges waiting for me to join
  pending: protectedProcedure.query(async ({ ctx }) => {
    const { db, dbUser } = ctx

    // Get all waiting duels not created by me and not already joined
    const waiting = await db
      .select({
        duelId: duels.id,
        startedAt: duels.startedAt,
        statusJson: duels.statusJson,
        challengerHandle: users.handle,
        challengerRank: users.rankIdx,
        problemTitle: problems.title,
        difficulty: problems.difficulty,
      })
      .from(duels)
      .innerJoin(duelParticipants, eq(duelParticipants.duelId, duels.id))
      .innerJoin(users, eq(duelParticipants.userId, users.id))
      .innerJoin(problems, eq(duels.problemId, problems.id))
      .where(eq(users.id, dbUser.id))

    // Also get duels where I am challenger (my sent challenges)
    return waiting
  }),
})
