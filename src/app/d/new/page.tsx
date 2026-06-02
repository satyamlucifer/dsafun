'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { trpc } from '@/lib/trpc/client'

type DurationMin = 10 | 15 | 25
type Spectators = 'friends' | 'private'
type CoachMode = 'whisper' | 'off'

export default function NewDuelPage() {
  const router = useRouter()
  const [duration, setDuration] = useState<DurationMin>(15)
  const [spectators, setSpectators] = useState<Spectators>('friends')
  const [coachMode, setCoachMode] = useState<CoachMode>('whisper')
  const [chatEnabled, setChatEnabled] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const create = trpc.duel.create.mutate

  async function handleSend() {
    setError(null)
    try {
      const { duelId } = await create({ durationMin: duration, spectators, coachMode, chatEnabled })
      router.push(`/d/${duelId}`)
    } catch (e) {
      setError(e instanceof Error ? e.message : 'failed to create duel')
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      <p className="text-[11px] font-body uppercase tracking-[0.3em] text-[var(--fg-3)]">// challenge a friend</p>
      <h1 className="font-display text-6xl sm:text-7xl text-[var(--fg)] mt-2">new duel</h1>

      <div className="grid lg:grid-cols-[1fr_420px] gap-5 mt-8">
        {/* Step 1 — pick a problem */}
        <section className="border border-[var(--border)] p-5">
          <p className="text-[10px] font-body uppercase tracking-[0.3em] text-[var(--fg-3)] mb-4">● step 1 · pick a problem</p>
          {[
            ['Random · tuned to both of you', 'llm picks · ~15 min · medium', true],
            ['From library', 'browse · seeded canon', false],
            ['From a past loss', 'revisit a problem you both stalled on', false],
            ['Paste a problem', 'interview question · we verify', false],
          ].map(([title, note, active]) => (
            <button
              key={String(title)}
              className={`w-full border ${active ? 'border-[var(--border-accent)] bg-[var(--accent-dim)]' : 'border-dashed border-[var(--border)] opacity-50 cursor-not-allowed'} text-left p-4 mb-3`}
              disabled={!active}
            >
              <p className="font-body text-sm text-[var(--fg)]">{active ? '◉' : '○'} {String(title)}</p>
              <p className="text-xs font-body text-[var(--fg-3)] mt-1">{String(note)}</p>
            </button>
          ))}
        </section>

        {/* Step 2 — opponent (invite link is shared after creation) */}
        <section className="border border-[var(--border)] p-5">
          <p className="text-[10px] font-body uppercase tracking-[0.3em] text-[var(--fg-3)] mb-4">● step 2 · opponent</p>
          <p className="text-xs font-body text-[var(--fg-3)] mb-4">
            After sending, share the duel link with your opponent. They join via the link.
          </p>
          <div className="border border-dashed border-[var(--border)] p-4 bg-[var(--bg-2)]">
            <p className="text-[10px] font-body text-[var(--fg-3)] uppercase tracking-widest mb-1">invite flow</p>
            <p className="text-xs font-body text-[var(--fg-2)]">
              1. Click "send challenge" → you get a duel URL<br />
              2. Send the URL to your opponent<br />
              3. They open it and click "join" → duel starts
            </p>
          </div>
        </section>
      </div>

      {/* Step 3 — rules */}
      <section className="border border-[var(--border)] p-5 mt-5">
        <p className="text-[10px] font-body uppercase tracking-[0.3em] text-[var(--fg-3)] mb-4">● step 3 · rules</p>

        <div className="grid grid-cols-[120px_1fr] gap-4 items-center mb-4">
          <p className="text-xs font-body uppercase text-[var(--fg-3)]">duration</p>
          <div className="flex flex-wrap gap-2">
            {([10, 15, 25] as DurationMin[]).map((d) => (
              <button
                key={d}
                onClick={() => setDuration(d)}
                className={`${duration === d ? 'bg-[var(--fg)] text-[var(--bg)]' : 'border border-[var(--border)] text-[var(--fg-2)]'} px-3 py-1 text-[10px] font-body uppercase tracking-widest`}
              >
                {d} min
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-[120px_1fr] gap-4 items-center mb-4">
          <p className="text-xs font-body uppercase text-[var(--fg-3)]">spectators</p>
          <div className="flex flex-wrap gap-2">
            {(['friends', 'private'] as Spectators[]).map((s) => (
              <button
                key={s}
                onClick={() => setSpectators(s)}
                className={`${spectators === s ? 'bg-[var(--fg)] text-[var(--bg)]' : 'border border-[var(--border)] text-[var(--fg-2)]'} px-3 py-1 text-[10px] font-body uppercase tracking-widest`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-[120px_1fr] gap-4 items-center mb-4">
          <p className="text-xs font-body uppercase text-[var(--fg-3)]">coach</p>
          <div className="flex flex-wrap gap-2">
            {(['whisper', 'off'] as CoachMode[]).map((c) => (
              <button
                key={c}
                onClick={() => setCoachMode(c)}
                className={`${coachMode === c ? 'bg-[var(--fg)] text-[var(--bg)]' : 'border border-[var(--border)] text-[var(--fg-2)]'} px-3 py-1 text-[10px] font-body uppercase tracking-widest`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-[120px_1fr] gap-4 items-center mb-4">
          <p className="text-xs font-body uppercase text-[var(--fg-3)]">chat</p>
          <div className="flex flex-wrap gap-2">
            {[true, false].map((val) => (
              <button
                key={String(val)}
                onClick={() => setChatEnabled(val)}
                className={`${chatEnabled === val ? 'bg-[var(--fg)] text-[var(--bg)]' : 'border border-[var(--border)] text-[var(--fg-2)]'} px-3 py-1 text-[10px] font-body uppercase tracking-widest`}
              >
                {val ? 'on' : 'off'}
              </button>
            ))}
          </div>
        </div>
      </section>

      {error && (
        <p className="mt-4 text-xs font-body text-red-400 border border-red-400/30 px-4 py-2">{error}</p>
      )}

      <div className="mt-5 flex justify-end">
        <button
          onClick={handleSend}
          className="px-6 py-3 bg-[var(--accent)] text-[var(--bg)] text-xs font-body uppercase tracking-widest"
        >
          send challenge →
        </button>
      </div>
    </div>
  )
}
