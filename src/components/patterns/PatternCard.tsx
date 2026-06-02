import Link from 'next/link'
import { PatternGlyph } from '@/components/ui/PatternGlyph'
import { cn } from '@/lib/utils'
import type { PatternSeed } from '@/lib/db/seed-data'

type Props = {
  pattern: PatternSeed & { id?: string }
  fluency?: number
  problemCount?: number
  rotation?: number
  className?: string
}

export function PatternCard({ pattern, fluency = 0, problemCount, rotation = 0, className }: Props) {
  const rotClass = rotation < -1 ? 'rotate-neg-2' : rotation < 0 ? 'rotate-neg-1' : rotation > 1 ? 'rotate-2' : rotation > 0 ? 'rotate-1' : ''

  return (
    <Link
      href={`/p/${pattern.slug}`}
      className={cn('block no-underline group zine-card', rotClass, className)}
      style={{
        borderColor: `${pattern.hue}40`,
        boxShadow: `4px 4px 0 ${pattern.hue}30`,
        transition: 'transform 80ms ease, box-shadow 80ms ease',
      }}
    >
      <div className="p-4">
        {/* Top row */}
        <div className="flex items-start justify-between mb-3">
          <PatternGlyph glyph={pattern.glyph} hue={pattern.hue} size={32} />
          {fluency > 0 && (
            <span
              className="stamp text-[9px] py-0.5"
              style={{ color: pattern.hue, borderColor: pattern.hue }}
            >
              {fluency >= 0.8 ? 'MASTERED' : fluency >= 0.4 ? 'LEARNING' : 'ENCOUNTERED'}
            </span>
          )}
        </div>

        {/* Name */}
        <p
          className="font-display text-2xl leading-tight mb-0.5 group-hover:text-glow-accent transition-all"
          style={{ color: pattern.hue }}
        >
          {pattern.name}
        </p>
        <p className="text-[10px] font-body text-[var(--fg-3)] uppercase tracking-widest mb-3">
          {pattern.topic}
        </p>

        {/* Lore */}
        <p className="text-xs font-body text-[var(--fg-2)] leading-relaxed line-clamp-3">
          {pattern.lore}
        </p>

        {/* Fluency bar */}
        <div className="mt-4 fluency-bar">
          <div
            className="fluency-bar-fill"
            style={{ width: `${fluency * 100}%`, background: pattern.hue }}
          />
        </div>

        {/* Footer */}
        <div className="mt-3 flex items-center justify-between">
          <span className="text-[10px] font-body text-[var(--fg-3)] uppercase tracking-wider">
            {fluency === 0 ? 'uncharted' : `${Math.round(fluency * 100)}% fluency`}
          </span>
          {problemCount !== undefined && (
            <span className="text-[10px] font-body text-[var(--fg-3)]">
              {problemCount} problem{problemCount !== 1 ? 's' : ''}
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}
