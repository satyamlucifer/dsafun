'use client'
import { useState } from 'react'
import Link from 'next/link'
import { SESSION_MODES } from '@/lib/content'
import { HintIcon } from '@/components/ui/Hint'
import { StartButton } from '@/components/session/StartButton'

type CoachStance = 'socratic' | 'pair' | 'reviewer' | 'silent'

const STANCES: { id: CoachStance; name: string; note: string; hint: string }[] = [
  { id: 'socratic',  name: 'Socratic',  note: 'questions only · no answers',  hint: 'Coach only asks questions. Never reveals the answer. You figure it out.' },
  { id: 'pair',      name: 'Pair',      note: 'thinks alongside you',          hint: 'Coach thinks alongside you — shares partial reasoning but waits for you to complete it.' },
  { id: 'reviewer',  name: 'Reviewer',  note: 'silent until submit',           hint: 'Silent during solving. Comprehensive code review on submit.' },
  { id: 'silent',    name: 'Silent',    note: 'no coach · pure focus',         hint: 'No coach at all. Pure focus mode. For when you want zero interruption.' },
]

export default function NewSessionPage() {
  const [stance, setStance] = useState<CoachStance>('socratic')

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      <p className="text-[11px] font-body text-[var(--fg-3)] uppercase tracking-[0.3em]">// choose your session</p>
      <h1 className="font-display text-6xl sm:text-7xl text-[var(--fg)] mt-2">how long do you have?</h1>
      <p className="font-body text-sm text-[var(--fg-3)] mt-2">session length controls problem size, coach verbosity, and spaced-repeat aggression.</p>

      <div className="grid lg:grid-cols-3 gap-5 mt-8">
        {SESSION_MODES.map((mode, index) => (
          <div key={mode.slug} className={`border ${index === 1 ? 'border-[var(--border-accent)]' : 'border-[var(--border)]'} p-6 min-h-64`}>
            <div className="flex items-baseline justify-between">
              <div className="flex items-center gap-2">
                <h2 className="font-display text-5xl text-[var(--fg)]">{mode.name.toUpperCase()}</h2>
                <HintIcon
                  content={
                    index === 0
                      ? 'Perfect when you have 10-15 min. One problem, light coach. Great for spaced repeats.'
                      : index === 1
                        ? 'The sweet spot. Full Socratic dialogue, auto-scheduled debrief and next-session plan.'
                        : 'Same pattern, 3 escalating problems. For when you want to truly own a character.'
                  }
                  side="top"
                />
              </div>
              <p className="text-sm font-body text-[var(--fg-3)]">{mode.minutes} min</p>
            </div>
            <p className="font-body text-sm text-[var(--fg-2)] mt-4">{mode.subtitle}</p>
            <div className="border-t border-dashed border-[var(--border)] my-5" />
            <div className="grid gap-2">
              {mode.notes.map((note) => (
                <p key={note} className="text-xs font-body text-[var(--fg-3)]">· {note}</p>
              ))}
            </div>
            <StartButton
              mode={mode.slug}
              coachStance={stance}
              className={`inline-block mt-8 px-4 py-2 ${index === 1 ? 'bg-[var(--accent)] text-[var(--bg)]' : 'border border-[var(--border)] text-[var(--fg)]'} text-xs font-body uppercase tracking-widest`}
            >
              start {mode.name}
            </StartButton>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-5 mt-8">
        <section className="border border-[var(--border)] p-5">
          <p className="text-[10px] font-body uppercase tracking-[0.3em] text-[var(--fg-3)] mb-3">● which problem?</p>
          <div className="border border-[var(--border-accent)] bg-[var(--accent-dim)] p-4">
            <p className="font-body text-sm text-[var(--fg)]">● pick for me (recommended)</p>
            <p className="text-xs font-body text-[var(--fg-3)] mt-1">tuned to your weakest pattern · fresh · difficulty matched to mode</p>
          </div>
          <Link href="/library" className="block border border-dashed border-[var(--border)] p-4 mt-3 hover:border-[var(--border-accent)] transition-colors">
            <p className="font-body text-sm text-[var(--fg-2)]">○ browse library → pick one</p>
            <p className="text-xs font-body text-[var(--fg-3)] mt-0.5">737 problems across 14 patterns</p>
          </Link>
        </section>

        <section className="border border-[var(--border)] p-5">
          <p className="text-[10px] font-body uppercase tracking-[0.3em] text-[var(--fg-3)] mb-3">● coach stance</p>
          {STANCES.map(({ id, name, note, hint }) => (
            <button
              key={id}
              onClick={() => setStance(id)}
              className={`w-full border ${stance === id ? 'border-[var(--border-accent)]' : 'border-dashed border-[var(--border)]'} p-4 mb-3 flex items-center justify-between hover:border-[var(--border-accent)] transition-colors text-left`}
            >
              <div className="flex items-center gap-1.5">
                <p className="font-body text-sm text-[var(--fg)]">{stance === id ? '●' : '○'} {name}</p>
                <HintIcon content={hint} side="right" />
              </div>
              <p className="text-xs font-body text-[var(--fg-3)]">{note}</p>
            </button>
          ))}
        </section>
      </div>
    </div>
  )
}
