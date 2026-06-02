import Link from 'next/link'
import { AtlasCanvas } from '@/components/atlas/AtlasCanvas'
import { PatternCard } from '@/components/patterns/PatternCard'
import { PATTERNS_SEED } from '@/lib/db/seed-data'
import { MOCK_FLUENCY } from '@/lib/content'

const PILLARS = [
  ['01', 'Patterns as characters', '14 operatives. No leaderboard sludge. Learn the invariant by remembering the voice.'],
  ['02', 'Fresh problems', 'Same canonical shape, new costume. You learn transfer instead of memorizing prompts.'],
  ['03', 'Socratic coach', 'Questions first. Analogies when you wobble. No solution dumps unless you explicitly ask.'],
  ['04', 'Time-travel debrief', 'Scrub your thinking. See pauses, deletions, tests, and the moment the pattern clicked.'],
] as const

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <section className="relative min-h-[calc(100dvh-3rem)] px-4 sm:px-6 py-10 flex items-center">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="max-w-6xl mx-auto mt-10">
            <AtlasCanvas fluency={MOCK_FLUENCY} />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="max-w-3xl">
            <p className="text-[11px] font-body text-[var(--fg-3)] uppercase tracking-[0.35em] mb-4">
              manifesto · v0.4
            </p>
            <h1 className="font-display text-6xl sm:text-8xl leading-[0.9] text-[var(--fg)]">
              DSA is not a grind.
              <br />
              It is a zine you read in 25 minutes before bed.
            </h1>
            <p className="font-body text-sm sm:text-base text-[var(--fg-2)] max-w-xl mt-6 leading-7">
              DSAFun turns algorithm patterns into characters, fresh expeditions, and debriefs that show how you actually thought.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              <Link href="/onboarding" className="px-5 py-3 bg-[var(--accent)] text-[var(--bg)] font-body text-xs uppercase tracking-widest no-underline">
                ▶ start expedition
              </Link>
              <Link href="/atlas" className="px-5 py-3 border border-[var(--border)] font-body text-xs uppercase tracking-widest no-underline hover:bg-[var(--bg-2)]">
                see the atlas
              </Link>
            </div>
            <p className="text-[10px] text-[var(--fg-3)] font-body mt-4">
              no card required. one free session/day forever.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--border)] px-4 sm:px-6 py-10">
        <div className="max-w-7xl mx-auto">
          <p className="text-[11px] font-body text-[var(--fg-3)] uppercase tracking-[0.35em] mb-5">
            // the four pillars
          </p>
          <div className="grid md:grid-cols-4 gap-4">
            {PILLARS.map(([num, title, copy]) => (
              <div key={num} className="border border-[var(--border)] p-5 bg-[var(--bg-2)]">
                <p className="font-display text-2xl text-[var(--accent)]">{num}</p>
                <h2 className="font-body text-sm text-[var(--fg)] mt-2">{title}</h2>
                <p className="font-body text-xs text-[var(--fg-3)] mt-3 leading-6">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between gap-4 mb-5">
            <h2 className="font-display text-5xl text-[var(--fg)]">
              Meet the <span className="text-[var(--accent)]">14</span>.
            </h2>
            <Link href="/library" className="hidden sm:block text-xs font-body uppercase tracking-widest no-underline">
              open library →
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PATTERNS_SEED.slice(0, 8).map((pattern, index) => (
              <PatternCard
                key={pattern.slug}
                pattern={pattern}
                fluency={MOCK_FLUENCY[pattern.slug] ?? 0}
                problemCount={pattern.canonicalProblems.length}
                rotation={(index % 5) - 2}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 py-12 border-t border-[var(--border)]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_0.8fr] gap-8 items-start">
          <div>
            <p className="text-[11px] font-body text-[var(--fg-3)] uppercase tracking-[0.35em] mb-4">
              // who is this for
            </p>
            <h2 className="font-display text-5xl text-[var(--fg)] max-w-3xl">
              You ship code for a living. You stall at the whiteboard.
            </h2>
            <div className="grid gap-3 mt-6 max-w-2xl">
              {['You know how to debug production, but pattern recall feels foggy.', 'You want bounded practice that respects real life.', 'You learn better from characters, analogies, and visible progress than raw lists.'].map((line) => (
                <p key={line} className="font-body text-sm text-[var(--fg-2)] prompt">{line}</p>
              ))}
            </div>
          </div>
          <div className="border border-[var(--border)] p-6 bg-[var(--bg-2)]">
            <p className="stamp">slice 1 live</p>
            <p className="font-display text-4xl text-[var(--fg)] mt-5">read-only canon</p>
            <p className="text-sm text-[var(--fg-2)] font-body mt-3 leading-7">
              The first slice ships the design system, seeded characters, atlas, library, and navigable product shells while credentials are added.
            </p>
            <Link href="/dashboard" className="inline-block mt-6 px-4 py-2 bg-[var(--accent)] text-[var(--bg)] font-body text-xs uppercase tracking-widest no-underline">
              enter dashboard
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
