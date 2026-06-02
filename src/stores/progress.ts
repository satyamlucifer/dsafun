'use client'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type SolveRecord = {
  problemTitle: string
  patternSlug: string
  solvedAt: number
  timeMs: number
  hintsUsed: number
  xpEarned: number
}

type ProgressStore = {
  solves: SolveRecord[]
  xp: number
  streakDays: number
  lastSessionDate: string | null
  patternFluency: Record<string, number>

  recordSolve: (record: SolveRecord) => void
  updateFluency: (patternSlug: string, delta: number) => void
  getRank: () => string
  getXpToNextRank: () => { current: number; required: number; rankName: string }
}

export const RANKS = [
  { name: 'Script Kid', xpRequired: 0 },
  { name: 'Compiler', xpRequired: 500 },
  { name: 'Interpreter', xpRequired: 1200 },
  { name: 'Cipher', xpRequired: 2500 },
  { name: 'Oracle', xpRequired: 5000 },
  { name: 'Cartographer', xpRequired: 9000 },
  { name: 'Architect', xpRequired: 15000 },
  { name: 'Algorithmist', xpRequired: 25000 },
] as const

function calcXp(hintsUsed: number, difficulty: 'easy' | 'medium' | 'hard', timeMs: number) {
  const base = difficulty === 'easy' ? 10 : difficulty === 'medium' ? 25 : 50
  const hintPenalty = hintsUsed * 5
  const speedBonus = timeMs < 10 * 60 * 1000 ? 10 : timeMs < 20 * 60 * 1000 ? 5 : 0
  return Math.max(5, base - hintPenalty + speedBonus)
}

export function computeXp(solves: SolveRecord[]) {
  return solves.reduce((sum, s) => sum + s.xpEarned, 0)
}

export const useProgressStore = create<ProgressStore>()(
  persist(
    (set, get) => ({
      solves: [],
      xp: 0,
      streakDays: 0,
      lastSessionDate: null,
      patternFluency: {},

      recordSolve: (record) => {
        const today = new Date().toDateString()
        set((state) => {
          const newSolves = [...state.solves, record]
          const newXp = state.xp + record.xpEarned
          const newFluency = { ...state.patternFluency }
          const current = newFluency[record.patternSlug] ?? 0
          newFluency[record.patternSlug] = Math.min(1, current + (record.hintsUsed === 0 ? 0.12 : 0.06))

          const streakDays = state.lastSessionDate === today
            ? state.streakDays
            : state.lastSessionDate === new Date(Date.now() - 86400000).toDateString()
            ? state.streakDays + 1
            : 1

          return {
            solves: newSolves,
            xp: newXp,
            streakDays,
            lastSessionDate: today,
            patternFluency: newFluency,
          }
        })
      },

      updateFluency: (patternSlug, delta) => {
        set((state) => ({
          patternFluency: {
            ...state.patternFluency,
            [patternSlug]: Math.max(0, Math.min(1, (state.patternFluency[patternSlug] ?? 0) + delta)),
          },
        }))
      },

      getRank: () => {
        const xp = get().xp
        let rank: string = RANKS[0].name
        for (const r of RANKS) {
          if (xp >= r.xpRequired) rank = r.name
        }
        return rank
      },

      getXpToNextRank: () => {
        const xp = get().xp
        for (let i = 0; i < RANKS.length - 1; i++) {
          if (xp < RANKS[i + 1].xpRequired) {
            return {
              current: xp - RANKS[i].xpRequired,
              required: RANKS[i + 1].xpRequired - RANKS[i].xpRequired,
              rankName: RANKS[i + 1].name,
            }
          }
        }
        return { current: xp, required: xp, rankName: 'Algorithmist' }
      },
    }),
    { name: 'dsafun-progress' },
  ),
)
