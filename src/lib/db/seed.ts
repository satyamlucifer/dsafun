import 'dotenv/config'
import { eq } from 'drizzle-orm'
import { db } from '@/lib/db'
import { patterns, problems } from '@/lib/db/schema'
import { PATTERNS_SEED, PROBLEMS_SEED } from '@/lib/db/seed-data'

async function main() {
  if (!db) {
    throw new Error('DATABASE_URL is required to seed the database')
  }

  for (const pattern of PATTERNS_SEED) {
    await db
      .insert(patterns)
      .values(pattern)
      .onConflictDoUpdate({
        target: patterns.slug,
        set: {
          name: pattern.name,
          topic: pattern.topic,
          glyph: pattern.glyph,
          hue: pattern.hue,
          lore: pattern.lore,
          voiceNote: pattern.voiceNote,
          prereqs: pattern.prereqs,
          canonicalProblems: pattern.canonicalProblems,
          atlasX: pattern.atlasX,
          atlasY: pattern.atlasY,
        },
      })
  }

  for (const seed of PROBLEMS_SEED) {
    const [pattern] = await db
      .select({ id: patterns.id })
      .from(patterns)
      .where(eq(patterns.slug, seed.patternSlug))
      .limit(1)

    if (!pattern) {
      throw new Error(`Pattern not found for problem seed: ${seed.patternSlug}`)
    }

    await db
      .insert(problems)
      .values({
        patternId: pattern.id,
        source: 'classic',
        title: seed.title,
        prompt: seed.prompt,
        constraints: seed.constraints,
        examples: seed.examples,
        difficulty: seed.difficulty,
        estMin: seed.estMin,
        tags: seed.tags,
        hints: seed.hints,
      })
      .onConflictDoNothing()
  }

  console.log(`Seeded ${PATTERNS_SEED.length} patterns and ${PROBLEMS_SEED.length} problems`)
}

main().catch((error: unknown) => {
  console.error(error)
  process.exit(1)
})
