'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'motion/react'
import { PATTERNS_SEED, ATLAS_EDGES } from '@/lib/db/seed-data'
import { PatternGlyph } from '@/components/ui/PatternGlyph'

const W = 920
const H = 580

type FluencyMap = Record<string, number>

type Props = {
  fluency?: FluencyMap
  problemsSolved?: FluencyMap
}

export function AtlasCanvas({ fluency = {}, problemsSolved = {} }: Props) {
  const router = useRouter()
  const [hovered, setHovered] = useState<string | null>(null)

  const getStarRadius = (slug: string) => {
    const f = fluency[slug] ?? 0
    return 10 + f * 8
  }

  const getPatternBySlug = (slug: string) => PATTERNS_SEED.find((p) => p.slug === slug)

  const hoveredPattern = hovered ? getPatternBySlug(hovered) : null

  return (
    <div className="relative w-full" style={{ aspectRatio: `${W}/${H}` }}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full h-full"
        style={{ background: 'transparent' }}
      >
        {/* Grid dots — hacker-zine texture */}
        {Array.from({ length: 18 }).map((_, row) =>
          Array.from({ length: 28 }).map((_, col) => (
            <circle
              key={`${row}-${col}`}
              cx={col * 34 + 12}
              cy={row * 34 + 12}
              r="0.8"
              fill="var(--border)"
              opacity="0.4"
            />
          )),
        )}

        {/* Constellation edges */}
        {ATLAS_EDGES.map(([a, b]) => {
          const patA = getPatternBySlug(a)
          const patB = getPatternBySlug(b)
          if (!patA || !patB) return null
          const isActive = hovered === a || hovered === b
          return (
            <line
              key={`${a}-${b}`}
              x1={patA.atlasX}
              y1={patA.atlasY}
              x2={patB.atlasX}
              y2={patB.atlasY}
              className={isActive ? 'atlas-edge active' : 'atlas-edge'}
              style={{
                stroke: isActive ? (patA.slug === hovered ? patA.hue : patB.hue) : undefined,
                opacity: isActive ? 0.7 : 0.25,
                transition: 'opacity 200ms ease, stroke 200ms ease',
              }}
            />
          )
        })}

        {/* Stars */}
        {PATTERNS_SEED.map((pattern) => {
          const r = getStarRadius(pattern.slug)
          const f = fluency[pattern.slug] ?? 0
          const isHov = hovered === pattern.slug

          return (
            <g key={pattern.slug}>
              {/* Glow ring on hover */}
              {isHov && (
                <circle
                  cx={pattern.atlasX}
                  cy={pattern.atlasY}
                  r={r + 12}
                  fill={pattern.hue}
                  opacity="0.08"
                />
              )}

              {/* Fluency ring */}
              {f > 0 && (
                <circle
                  cx={pattern.atlasX}
                  cy={pattern.atlasY}
                  r={r + 5}
                  fill="none"
                  stroke={pattern.hue}
                  strokeWidth="1"
                  opacity={f * 0.6}
                  strokeDasharray={`${f * 20} ${20 - f * 20}`}
                />
              )}

              {/* Main star */}
              <circle
                cx={pattern.atlasX}
                cy={pattern.atlasY}
                r={r}
                fill={pattern.hue}
                opacity={isHov ? 1 : f > 0 ? 0.85 : 0.45}
                className="atlas-star cursor-crosshair"
                style={{
                  filter: isHov ? `drop-shadow(0 0 8px ${pattern.hue})` : f > 0.5 ? `drop-shadow(0 0 4px ${pattern.hue})` : undefined,
                  transition: 'opacity 150ms ease, r 150ms ease',
                }}
                onMouseEnter={() => setHovered(pattern.slug)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => router.push(`/p/${pattern.slug}`)}
              />

              {/* Star crosshair */}
              <line x1={pattern.atlasX - r - 4} y1={pattern.atlasY} x2={pattern.atlasX - r - 1} y2={pattern.atlasY} stroke={pattern.hue} strokeWidth="1" opacity="0.5"/>
              <line x1={pattern.atlasX + r + 1} y1={pattern.atlasY} x2={pattern.atlasX + r + 4} y2={pattern.atlasY} stroke={pattern.hue} strokeWidth="1" opacity="0.5"/>
              <line x1={pattern.atlasX} y1={pattern.atlasY - r - 4} x2={pattern.atlasX} y2={pattern.atlasY - r - 1} stroke={pattern.hue} strokeWidth="1" opacity="0.5"/>
              <line x1={pattern.atlasX} y1={pattern.atlasY + r + 1} x2={pattern.atlasX} y2={pattern.atlasY + r + 4} stroke={pattern.hue} strokeWidth="1" opacity="0.5"/>

              {/* Label */}
              <text
                x={pattern.atlasX}
                y={pattern.atlasY + r + 14}
                textAnchor="middle"
                fontSize="9"
                fill={isHov ? pattern.hue : 'var(--fg-2)'}
                fontFamily="VT323, ui-monospace, monospace"
                letterSpacing="0.05em"
                style={{ transition: 'fill 150ms ease', pointerEvents: 'none' }}
              >
                {pattern.name.toUpperCase()}
              </text>

              {/* Fluency % label */}
              {(fluency[pattern.slug] ?? 0) > 0 && (
                <text
                  x={pattern.atlasX}
                  y={pattern.atlasY + r + 25}
                  textAnchor="middle"
                  fontSize="8"
                  fill={pattern.hue}
                  fontFamily="VT323, ui-monospace, monospace"
                  opacity="0.75"
                  style={{ pointerEvents: 'none' }}
                >
                  {Math.round((fluency[pattern.slug] ?? 0) * 100)}%
                </text>
              )}
            </g>
          )
        })}
      </svg>

      {/* Hover tooltip card */}
      <AnimatePresence>
        {hoveredPattern && (
          <motion.div
            key={hoveredPattern.slug}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.12 }}
            className="absolute bottom-4 left-4 w-72 zine-card p-4 pointer-events-none"
            style={{ borderColor: hoveredPattern.hue, boxShadow: `4px 4px 0 ${hoveredPattern.hue}40` }}
          >
            <div className="flex items-start gap-3">
              <PatternGlyph glyph={hoveredPattern.glyph} hue={hoveredPattern.hue} size={36} />
              <div className="flex-1 min-w-0">
                <p className="font-display text-xl leading-none" style={{ color: hoveredPattern.hue }}>
                  {hoveredPattern.name}
                </p>
                <p className="text-[11px] text-[var(--fg-3)] font-body mt-0.5 uppercase tracking-widest">
                  {hoveredPattern.topic}
                </p>
              </div>
            </div>
            <p className="mt-2 text-xs font-body text-[var(--fg-2)] leading-relaxed line-clamp-2">
              {hoveredPattern.lore}
            </p>
            <div className="mt-3 flex items-center justify-between">
              {(fluency[hoveredPattern.slug] ?? 0) > 0 ? (
                <div className="flex-1 mr-4">
                  <p className="text-[9px] font-body text-[var(--fg-3)] uppercase tracking-widest mb-1">fluency</p>
                  <div className="fluency-bar">
                    <div className="fluency-bar-fill" style={{ width: `${(fluency[hoveredPattern.slug] ?? 0) * 100}%`, background: hoveredPattern.hue }} />
                  </div>
                </div>
              ) : null}
              {(problemsSolved[hoveredPattern.slug] ?? 0) > 0 ? (
                <p className="text-[10px] font-body text-[var(--fg-3)] whitespace-nowrap">
                  {problemsSolved[hoveredPattern.slug]}× solved
                </p>
              ) : (
                <p className="text-[10px] text-[var(--fg-3)] font-body">click to open character file</p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
