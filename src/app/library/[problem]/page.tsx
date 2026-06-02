import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PatternGlyph } from '@/components/ui/PatternGlyph'
import { ProblemMarkdown } from '@/components/ui/ProblemMarkdown'
import { PATTERNS_SEED, PROBLEMS_SEED } from '@/lib/db/seed-data'
import { getDifficultyTone, getPattern, getProblemBySlug, slugifyTitle } from '@/lib/content'

type PageProps = {
  params: Promise<{ problem: string }>
}

export function generateStaticParams() {
  return PROBLEMS_SEED.map((problem) => ({ problem: slugifyTitle(problem.title) }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { problem: slug } = await params
  const found = getProblemBySlug(slug)
  return { title: found?.title ?? 'Problem' }
}

export default async function ProblemPage({ params }: PageProps) {
  const { problem: slug } = await params
  const problem = getProblemBySlug(slug)
  if (!problem) notFound()
  const pattern = getPattern(problem.patternSlug)
  if (!pattern) notFound()

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      <Link href="/library" className="text-xs font-body text-[var(--fg-3)] no-underline">← library</Link>
      <div className="grid lg:grid-cols-[1fr_300px] gap-6 mt-5">
        <section className="border border-[var(--border)] p-5">
          <div className="flex flex-wrap gap-2 mb-5">
            <span className="border border-[var(--border)] px-3 py-1 text-[10px] font-body uppercase tracking-wider" style={{ color: pattern.hue }}>
              {pattern.topic}
            </span>
            <span className="border border-[var(--border)] px-3 py-1 text-[10px] font-body uppercase tracking-wider" style={{ color: getDifficultyTone(problem.difficulty) }}>
              {problem.difficulty}
            </span>
            <span className="border border-[var(--border)] px-3 py-1 text-[10px] font-body uppercase tracking-wider">~{problem.estMin} min</span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl text-[var(--fg)]">{problem.title}</h1>
          <div className="mt-6">
            <ProblemMarkdown>{problem.prompt}</ProblemMarkdown>
          </div>

          <div className="zine-divider" />
          <h2 className="font-display text-3xl text-[var(--fg)]">examples</h2>
          <div className="grid gap-3 mt-3">
            {problem.examples.map((example, index) => (
              <div key={`${example.input}-${index}`} className="border border-[var(--border)] p-4 bg-[var(--bg-2)]">
                <p className="text-xs font-body text-[var(--fg-2)]"><span className="text-[var(--fg-3)]">input:</span> {example.input}</p>
                <p className="text-xs font-body text-[var(--fg-2)] mt-2"><span className="text-[var(--fg-3)]">output:</span> {example.output}</p>
                {example.explanation && <p className="text-xs font-body text-[var(--fg-3)] mt-2">{example.explanation}</p>}
              </div>
            ))}
          </div>

          <div className="zine-divider" />
          <h2 className="font-display text-3xl text-[var(--fg)]">constraints</h2>
          <pre className="mt-3 text-xs whitespace-pre-wrap">{problem.constraints}</pre>

          <div className="flex flex-wrap gap-3 mt-6">
            <Link href="/s/new" className="px-5 py-3 bg-[var(--accent)] text-[var(--bg)] text-xs font-body uppercase tracking-widest no-underline">
              ▶ start session
            </Link>
            <Link href={`/p/${pattern.slug}`} className="px-5 py-3 border border-[var(--border)] text-xs font-body uppercase tracking-widest no-underline hover:bg-[var(--bg-2)]">
              read {pattern.name}
            </Link>
          </div>
        </section>

        <aside className="border border-[var(--border)] p-5 bg-[var(--bg-2)] h-max">
          <div className="flex items-start gap-4">
            <PatternGlyph glyph={pattern.glyph} hue={pattern.hue} size={52} />
            <div>
              <p className="font-display text-3xl leading-none" style={{ color: pattern.hue }}>{pattern.name}</p>
              <p className="text-[10px] font-body uppercase tracking-widest text-[var(--fg-3)] mt-1">{pattern.topic}</p>
            </div>
          </div>
          <p className="font-body text-xs text-[var(--fg-2)] leading-6 mt-4">{pattern.voiceNote}</p>
          <div className="zine-divider" />
          <p className="text-[10px] font-body uppercase tracking-[0.3em] text-[var(--fg-3)] mb-3">hints · locked</p>
          {problem.hints.map((hint, index) => (
            <div key={hint} className="border border-dashed border-[var(--border)] p-3 mb-2">
              <p className="text-xs font-body text-[var(--fg-3)]">H{index + 1} · costs {index === 0 ? 3 : index === 1 ? 6 : 10} xp</p>
            </div>
          ))}
          <div className="zine-divider" />
          <p className="text-[10px] font-body uppercase tracking-[0.3em] text-[var(--fg-3)] mb-3">all 14</p>
          <div className="grid grid-cols-7 gap-1">
            {PATTERNS_SEED.map((item) => (
              <Link key={item.slug} href={`/p/${item.slug}`} title={item.name} className="border border-[var(--border)] aspect-square flex items-center justify-center no-underline">
                <span style={{ color: item.hue }}>◆</span>
              </Link>
            ))}
          </div>
        </aside>
      </div>
    </div>
  )
}
