'use client'
import { useEffect } from 'react'
import { useThemeStore } from '@/stores/theme'

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { theme, scanlines, vignette } = useThemeStore()

  useEffect(() => {
    const root = document.documentElement
    root.setAttribute('data-theme', theme)
    root.style.setProperty('--scanline-opacity', scanlines ? (theme === 'amber' ? '0.06' : theme === 'terminal' ? '0.04' : '0') : '0')
    if (!vignette) {
      document.body.style.setProperty('--vignette-opacity', '0')
    }
  }, [theme, scanlines, vignette])

  return <>{children}</>
}
