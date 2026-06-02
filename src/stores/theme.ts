'use client'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type Theme = 'terminal' | 'amber' | 'paper'
export type AccentColor = 'default' | 'cyan' | 'green' | 'red' | 'amber' | 'purple'

type ThemeStore = {
  theme: Theme
  accentColor: AccentColor
  scanlines: boolean
  vignette: boolean
  setTheme: (theme: Theme) => void
  setAccentColor: (color: AccentColor) => void
  setScanlines: (enabled: boolean) => void
  setVignette: (enabled: boolean) => void
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      theme: 'terminal',
      accentColor: 'default',
      scanlines: true,
      vignette: true,
      setTheme: (theme) => set({ theme }),
      setAccentColor: (accentColor) => set({ accentColor }),
      setScanlines: (scanlines) => set({ scanlines }),
      setVignette: (vignette) => set({ vignette }),
    }),
    { name: 'dsafun-theme' },
  ),
)
