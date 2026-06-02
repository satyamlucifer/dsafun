import { z } from 'zod'
import { eq } from 'drizzle-orm'
import { createTRPCRouter, publicProcedure } from '../trpc'
import { db } from '@/lib/db'
import { patterns, userPatterns } from '@/lib/db/schema'
import { PATTERNS_SEED } from '@/lib/db/seed-data'

export const patternsRouter = createTRPCRouter({
  list: publicProcedure.query(async () => {
    if (db) {
      return db.select().from(patterns)
    }
    return PATTERNS_SEED.map((p, i) => ({ ...p, id: `seed-${i}` }))
  }),

  bySlug: publicProcedure
    .input(z.object({ slug: z.string() }))
    .query(async ({ input }) => {
      if (db) {
        const [pattern] = await db
          .select()
          .from(patterns)
          .where(eq(patterns.slug, input.slug))
          .limit(1)
        return pattern ?? null
      }
      const found = PATTERNS_SEED.find((p) => p.slug === input.slug)
      return found ? { ...found, id: `seed-${found.slug}` } : null
    }),
})
