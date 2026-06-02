import { cn } from '@/lib/utils'

type GlyphProps = {
  glyph: string
  hue: string
  size?: number
  className?: string
}

const GLYPHS: Record<string, (props: { hue: string; size: number }) => React.ReactNode> = {
  twins: ({ hue, size }) => (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="20" r="7" stroke={hue} strokeWidth="2"/>
      <circle cx="30" cy="20" r="7" stroke={hue} strokeWidth="2"/>
      <line x1="17" y1="20" x2="23" y2="20" stroke={hue} strokeWidth="2" strokeDasharray="2 1"/>
      <path d="M 4 20 L 1 17 M 4 20 L 1 23" stroke={hue} strokeWidth="1.5"/>
      <path d="M 36 20 L 39 17 M 36 20 L 39 23" stroke={hue} strokeWidth="1.5"/>
    </svg>
  ),
  glazier: ({ hue, size }) => (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="12" width="16" height="16" stroke={hue} strokeWidth="2"/>
      <rect x="14" y="12" width="16" height="16" stroke={hue} strokeWidth="2" opacity="0.5"/>
      <path d="M 28 12 L 32 12 L 32 28 L 28 28" stroke={hue} strokeWidth="1.5"/>
    </svg>
  ),
  cartographer: ({ hue, size }) => (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M 8 32 L 8 8 L 20 14 L 32 8 L 32 32 L 20 26 Z" stroke={hue} strokeWidth="2" strokeLinejoin="round"/>
      <line x1="20" y1="14" x2="20" y2="26" stroke={hue} strokeWidth="1.5" strokeDasharray="2 2"/>
      <circle cx="20" cy="20" r="2" fill={hue}/>
    </svg>
  ),
  bisector: ({ hue, size }) => (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="10" width="32" height="20" rx="1" stroke={hue} strokeWidth="2"/>
      <line x1="20" y1="10" x2="20" y2="30" stroke={hue} strokeWidth="2"/>
      <path d="M 16 10 L 20 7 L 24 10" stroke={hue} strokeWidth="1.5"/>
      <path d="M 4 20 L 20 20" stroke={hue} strokeWidth="1" strokeDasharray="2 2" opacity="0.5"/>
    </svg>
  ),
  ripple: ({ hue, size }) => (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="4" fill={hue} opacity="0.9"/>
      <circle cx="20" cy="20" r="9" stroke={hue} strokeWidth="1.5" opacity="0.7"/>
      <circle cx="20" cy="20" r="15" stroke={hue} strokeWidth="1" opacity="0.4"/>
      <circle cx="20" cy="20" r="19" stroke={hue} strokeWidth="0.75" opacity="0.2"/>
    </svg>
  ),
  spelunker: ({ hue, size }) => (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M 20 6 L 20 20 L 12 28" stroke={hue} strokeWidth="2" strokeLinecap="round"/>
      <path d="M 20 20 L 28 28" stroke={hue} strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
      <circle cx="20" cy="6" r="3" stroke={hue} strokeWidth="1.5"/>
      <circle cx="12" cy="30" r="2.5" stroke={hue} strokeWidth="1.5"/>
      <circle cx="28" cy="30" r="2.5" stroke={hue} strokeWidth="1.5" opacity="0.5"/>
    </svg>
  ),
  ghost: ({ hue, size }) => (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M 12 30 L 12 16 Q 12 8 20 8 Q 28 8 28 16 L 28 30 L 24 27 L 20 30 L 16 27 Z" stroke={hue} strokeWidth="2" strokeLinejoin="round"/>
      <circle cx="16" cy="18" r="2" fill={hue}/>
      <circle cx="24" cy="18" r="2" fill={hue}/>
      <path d="M 8 34 L 8 28" stroke={hue} strokeWidth="1" strokeDasharray="2 2" opacity="0.5"/>
    </svg>
  ),
  opportunist: ({ hue, size }) => (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M 6 28 L 14 20 L 20 24 L 28 14 L 34 18" stroke={hue} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M 28 10 L 34 10 L 34 16" stroke={hue} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="20" cy="24" r="2" fill={hue}/>
    </svg>
  ),
  arbiter: ({ hue, size }) => (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="12" r="5" stroke={hue} strokeWidth="2"/>
      <circle cx="10" cy="28" r="4" stroke={hue} strokeWidth="1.5" opacity="0.6"/>
      <circle cx="30" cy="28" r="4" stroke={hue} strokeWidth="1.5" opacity="0.6"/>
      <line x1="16" y1="16" x2="13" y2="24" stroke={hue} strokeWidth="1.5"/>
      <line x1="24" y1="16" x2="27" y2="24" stroke={hue} strokeWidth="1.5"/>
      <path d="M 20 8 L 20 5" stroke={hue} strokeWidth="1.5"/>
    </svg>
  ),
  archivist: ({ hue, size }) => (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="8" width="28" height="6" rx="1" stroke={hue} strokeWidth="1.5"/>
      <rect x="6" y="17" width="28" height="6" rx="1" stroke={hue} strokeWidth="1.5"/>
      <rect x="6" y="26" width="28" height="6" rx="1" stroke={hue} strokeWidth="1.5"/>
      <line x1="12" y1="11" x2="16" y2="11" stroke={hue} strokeWidth="2" strokeLinecap="round"/>
      <line x1="12" y1="20" x2="20" y2="20" stroke={hue} strokeWidth="2" strokeLinecap="round"/>
      <line x1="12" y1="29" x2="14" y2="29" stroke={hue} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  warden: ({ hue, size }) => (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="6" width="10" height="10" stroke={hue} strokeWidth="1.5"/>
      <rect x="8" y="19" width="10" height="10" stroke={hue} strokeWidth="1.5"/>
      <rect x="22" y="6" width="10" height="23" stroke={hue} strokeWidth="2"/>
      <path d="M 35 6 L 38 6 L 38 29" stroke={hue} strokeWidth="1.5" opacity="0.5"/>
    </svg>
  ),
  kinship: ({ hue, size }) => (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="12" r="4" stroke={hue} strokeWidth="1.5"/>
      <circle cx="20" cy="8" r="4" stroke={hue} strokeWidth="1.5"/>
      <circle cx="32" cy="12" r="4" stroke={hue} strokeWidth="1.5"/>
      <circle cx="14" cy="28" r="4" stroke={hue} strokeWidth="1.5"/>
      <circle cx="26" cy="28" r="4" stroke={hue} strokeWidth="1.5"/>
      <line x1="12" y1="12" x2="16" y2="12" stroke={hue} strokeWidth="1.5"/>
      <line x1="24" y1="12" x2="28" y2="12" stroke={hue} strokeWidth="1.5"/>
      <line x1="10" y1="15" x2="14" y2="25" stroke={hue} strokeWidth="1.5"/>
      <line x1="30" y1="15" x2="26" y2="25" stroke={hue} strokeWidth="1.5"/>
    </svg>
  ),
  lexicographer: ({ hue, size }) => (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="20" y1="6" x2="20" y2="18" stroke={hue} strokeWidth="2"/>
      <line x1="20" y1="10" x2="10" y2="18" stroke={hue} strokeWidth="1.5"/>
      <line x1="20" y1="10" x2="30" y2="18" stroke={hue} strokeWidth="1.5"/>
      <line x1="10" y1="18" x2="4" y2="28" stroke={hue} strokeWidth="1.5" opacity="0.7"/>
      <line x1="10" y1="18" x2="16" y2="28" stroke={hue} strokeWidth="1.5" opacity="0.7"/>
      <line x1="30" y1="18" x2="24" y2="28" stroke={hue} strokeWidth="1.5" opacity="0.7"/>
      <line x1="30" y1="18" x2="36" y2="28" stroke={hue} strokeWidth="1.5" opacity="0.7"/>
      <circle cx="20" cy="6" r="2.5" fill={hue}/>
    </svg>
  ),
  pacer: ({ hue, size }) => (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="14" stroke={hue} strokeWidth="1.5" opacity="0.4"/>
      <circle cx="20" cy="6" r="3" fill={hue}/>
      <circle cx="20" cy="14" r="3" stroke={hue} strokeWidth="1.5"/>
      <path d="M 20 6 A 14 14 0 1 1 19.99 6" stroke={hue} strokeWidth="1.5" strokeDasharray="4 3" opacity="0.6"/>
      <circle cx="20" cy="6" r="1.5" fill={hue}/>
    </svg>
  ),
}

export function PatternGlyph({ glyph, hue, size = 40, className }: GlyphProps) {
  const render = GLYPHS[glyph]
  if (!render) return (
    <div style={{ width: size, height: size, borderColor: hue }} className={cn('border flex items-center justify-center text-xs font-mono', className)}>
      {glyph[0]?.toUpperCase()}
    </div>
  )
  return (
    <div className={cn('flex items-center justify-center', className)}>
      {render({ hue, size })}
    </div>
  )
}
