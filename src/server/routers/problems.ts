import { z } from 'zod'
import { eq, and, inArray } from 'drizzle-orm'
import { createTRPCRouter, publicProcedure } from '../trpc'
import { db } from '@/lib/db'
import { problems, patterns } from '@/lib/db/schema'
import { PROBLEMS_SEED, PATTERNS_SEED } from '@/lib/db/seed-data'

export const problemsRouter = createTRPCRouter({
  list: publicProcedure
    .input(
      z.object({
        patternSlug: z.string().optional(),
        difficulty: z.enum(['easy', 'medium', 'hard']).optional(),
        limit: z.number().min(1).max(100).default(50),
      }),
    )
    .query(async ({ input }) => {
      if (db) {
        const query = db
          .select({
            problem: problems,
            patternSlug: patterns.slug,
            patternName: patterns.name,
            patternHue: patterns.hue,
          })
          .from(problems)
          .innerJoin(patterns, eq(problems.patternId, patterns.id))
          .limit(input.limit)

        return query
      }

      // Fallback to seed data
      let results = PROBLEMS_SEED.map((p, i) => ({
        problem: {
          id: `seed-${i}`,
          title: p.title,
          difficulty: p.difficulty,
          estMin: p.estMin,
          tags: p.tags,
          prompt: p.prompt,
          constraints: p.constraints,
          examples: p.examples,
          hints: p.hints,
          patternId: `seed-${p.patternSlug}`,
          source: 'classic' as const,
          canonicalSolutionId: null,
          seedHash: null,
          generatedByModel: null,
          generatedAt: null,
          narrative: null,
          createdBy: null,
          createdAt: new Date(),
        },
        patternSlug: p.patternSlug,
        patternName: PATTERNS_SEED.find((pat) => pat.slug === p.patternSlug)?.name ?? '',
        patternHue: PATTERNS_SEED.find((pat) => pat.slug === p.patternSlug)?.hue ?? '#fff',
      }))

      if (input.patternSlug) {
        results = results.filter((r) => r.patternSlug === input.patternSlug)
      }
      if (input.difficulty) {
        results = results.filter((r) => r.problem.difficulty === input.difficulty)
      }

      return results.slice(0, input.limit)
    }),

  byId: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      if (db) {
        const [row] = await db
          .select({
            problem: problems,
            patternSlug: patterns.slug,
            patternName: patterns.name,
            patternHue: patterns.hue,
            patternGlyph: patterns.glyph,
            patternLore: patterns.lore,
          })
          .from(problems)
          .innerJoin(patterns, eq(problems.patternId, patterns.id))
          .where(eq(problems.id, input.id))
          .limit(1)
        return row ?? null
      }

      const idx = parseInt(input.id.replace('seed-', ''))
      const seed = PROBLEMS_SEED[idx]
      if (!seed) return null
      const pat = PATTERNS_SEED.find((p) => p.slug === seed.patternSlug)
      return {
        problem: { ...seed, id: input.id, patternId: `seed-${seed.patternSlug}`, source: 'classic' as const, canonicalSolutionId: null, seedHash: null, generatedByModel: null, generatedAt: null, narrative: null, createdBy: null, createdAt: new Date() },
        patternSlug: seed.patternSlug,
        patternName: pat?.name ?? '',
        patternHue: pat?.hue ?? '',
        patternGlyph: pat?.glyph ?? '',
        patternLore: pat?.lore ?? '',
      }
    }),
})
