'use client'
import { useState, useEffect, useRef, use } from 'react'
import { useRouter } from 'next/navigation'
import { useUser } from '@clerk/nextjs'
import { trpc } from '@/lib/trpc/client'
import type { DuelStatus } from '@/lib/db/schema'
import { RANKS } from '@/lib/content'

type PageProps = { params: Promise<{ duelId: string }> }

export default function DuelPage({ params }: PageProps) {
  const { duelId } = use(params)
  const router = useRouter()
  const { user: clerkUser } = useUser()

  const [duelData, setDuelData] = useState<Awaited<ReturnType<typeof trpc.duel.poll.query>> | null>(null)
  const [joined, setJoined] = useState(false)
  const [joining, setJoining] = useState(false)
  const [joinError, setJoinError] = useState<string | null>(null)
  const [code, setCode] = useState('')
  const [secondsLeft, setSecondsLeft] = useState<number | null>(null)
  const [submitDone, setSubmitDone] = useState(false)
  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null)

  // Fetch duel state immediately and then every 3s
  async function fetchState() {
    try {
      const data = await trpc.duel.poll.query({ duelId })
      setDuelData(data)
    } catch { /* ignore */ }
  }

  useEffect(() => {
    fetchState()
    pollRef.current = setInterval(fetchState, 3000)
    return () => { if (pollRef.current) clearInterval(pollRef.current) }
  }, [duelId])

  // Countdown timer once active
  useEffect(() => {
    if (!duelData) return
    const status = duelData.duel.statusJson as DuelStatus
    if (status.phase !== 'active' || !status.activeAt) return

    const activeAt = new Date(status.activeAt).getTime()
    const durationMs = (status.durationMin ?? 15) * 60 * 1000
    const endsAt = activeAt + durationMs

    const tick = () => {
      const remaining = Math.max(0, Math.floor((endsAt - Date.now()) / 1000))
      setSecondsLeft(remaining)
    }
    tick()
    const t = setInterval(tick, 1000)
    return () => clearInterval(t)
  }, [duelData?.duel.statusJson])

  async function handleJoin() {
    setJoining(true)
    setJoinError(null)
    try {
      await trpc.duel.join.mutate({ duelId })
      setJoined(true)
      await fetchState()
    } catch (e) {
      setJoinError(e instanceof Error ? e.message : 'failed to join')
    } finally {
      setJoining(false)
    }
  }

  async function handleSubmit() {
    try {
      const { ended, winnerId } = await trpc.duel.submit.mutate({ duelId, finalCode: code })
      setSubmitDone(true)
      if (ended) {
        await fetchState()
      }
    } catch { /* ignore */ }
  }

  async function handleForfeit() {
    if (!confirm('Forfeit this duel?')) return
    await trpc.duel.forfeit.mutate({ duelId })
    router.push('/dashboard')
  }

  if (!duelData) {
    return (
      <div className="min-h-[calc(100dvh-3rem)] flex items-center justify-center">
        <p className="font-body text-sm text-[var(--fg-3)] animate-pulse">loading duel...</p>
      </div>
    )
  }

  const { duel, problem, participants } = duelData
  const status = duel.statusJson as DuelStatus

  // Identify self vs opponent by clerkUser handle matching participant handle
  const myParticipant = participants.find((p) => p.handle === (clerkUser?.username ?? clerkUser?.firstName?.toLowerCase()))
  const opponent = participants.find((p) => p.userId !== myParticipant?.userId)

  const isChallenger = status.challengerId === myParticipant?.userId
  const alreadyParticipant = !!myParticipant
  const needsToJoin = !alreadyParticipant && !joined && status.phase === 'waiting'

  const formatTime = (s: number) => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`

  // ── Waiting room (phase === 'waiting') ─────────────────────
  if (status.phase === 'waiting' && !joined) {
    const inviteUrl = typeof window !== 'undefined' ? window.location.href : ''
    return (
      <div className="min-h-[calc(100dvh-3rem)] flex flex-col items-center justify-center gap-6 px-4">
        <p className="text-[11px] font-body uppercase tracking-[0.3em] text-[var(--fg-3)]">// waiting room</p>
        <h1 className="font-display text-5xl text-[var(--fg)] text-center">waiting for opponent</h1>

        {problem && (
          <div className="border border-[var(--border)] p-5 max-w-md w-full">
            <p className="text-[10px] font-body uppercase tracking-widest text-[var(--fg-3)] mb-2">problem</p>
            <p className="font-display text-2xl text-[var(--fg)]">{problem.title}</p>
            <p className="text-xs font-body text-[var(--fg-3)] mt-1">{problem.difficulty} · ~{problem.estMin} min</p>
          </div>
        )}

        {isChallenger ? (
          <div className="border border-dashed border-[var(--border)] p-5 max-w-md w-full">
            <p className="text-[10px] font-body uppercase tracking-widest text-[var(--fg-3)] mb-2">invite link</p>
            <p className="font-body text-xs text-[var(--fg-2)] break-all">{inviteUrl}</p>
            <button
              onClick={() => navigator.clipboard.writeText(inviteUrl)}
              className="mt-3 border border-[var(--border)] px-4 py-2 text-[10px] font-body uppercase tracking-widest"
            >
              copy link
            </button>
          </div>
        ) : (
          <div className="max-w-md w-full grid gap-3">
            <p className="text-sm font-body text-[var(--fg-2)] text-center">
              You've been challenged by <strong>@{participants[0]?.handle}</strong>
            </p>
            {joinError && <p className="text-xs font-body text-red-400">{joinError}</p>}
            <button
              onClick={handleJoin}
              disabled={joining}
              className="px-6 py-3 bg-[var(--accent)] text-[var(--bg)] text-xs font-body uppercase tracking-widest disabled:opacity-50"
            >
              {joining ? 'joining...' : 'accept & join →'}
            </button>
          </div>
        )}

        <p className="text-[10px] font-body text-[var(--fg-3)] animate-pulse">polling for opponent...</p>
      </div>
    )
  }

  // ── Ended ──────────────────────────────────────────────────
  if (status.phase === 'ended') {
    const winner = participants.find((p) => p.won)
    const iWon = winner?.userId === myParticipant?.userId
    return (
      <div className="min-h-[calc(100dvh-3rem)] flex flex-col items-center justify-center gap-6 px-4">
        <p className="font-display text-7xl text-[var(--fg)]">{iWon ? 'victory' : 'defeat'}</p>
        {winner && (
          <p className="font-body text-sm text-[var(--fg-2)]">
            @{winner.handle} submitted first
          </p>
        )}
        <div className="flex gap-3">
          <button onClick={() => router.push('/dashboard')} className="px-5 py-2 border border-[var(--border)] text-xs font-body uppercase tracking-widest">dashboard</button>
          <button onClick={() => router.push('/d/new')} className="px-5 py-2 bg-[var(--accent)] text-[var(--bg)] text-xs font-body uppercase tracking-widest">rematch</button>
        </div>
      </div>
    )
  }

  // ── Active duel ────────────────────────────────────────────
  return (
    <div className="min-h-[calc(100dvh-3rem)] grid grid-rows-[88px_1fr_44px]">
      {/* Header */}
      <header className="border-b border-[var(--border)] px-4 sm:px-6 py-4 grid grid-cols-[1fr_auto_1fr] items-center">
        <div>
          <p className="font-body text-sm text-[var(--fg)]">@{myParticipant?.handle ?? 'you'}</p>
          <p className="text-[10px] text-[var(--fg-3)] font-body uppercase tracking-wider">
            {RANKS[myParticipant?.rankIdx ?? 0]?.toLowerCase() ?? 'operator'}
          </p>
          <div className="fluency-bar w-36 mt-2">
            <div className="fluency-bar-fill" style={{ width: `${(myParticipant?.progress ?? 0) * 100}%` }} />
          </div>
        </div>

        <div className="text-center">
          <p className="font-display text-5xl text-[var(--fg)] leading-none">
            {secondsLeft != null ? formatTime(secondsLeft) : '--:--'}
          </p>
          <p className="text-[10px] font-body text-[var(--fg-3)] uppercase tracking-wider">
            remaining · {problem?.title ?? '...'}
          </p>
        </div>

        <div className="text-right">
          <p className="font-body text-sm text-[var(--fg)]">@{opponent?.handle ?? 'waiting...'}</p>
          <p className="text-[10px] text-[var(--fg-3)] font-body uppercase tracking-wider">
            {RANKS[opponent?.rankIdx ?? 0]?.toLowerCase() ?? '—'}
          </p>
          <div className="fluency-bar w-36 ml-auto mt-2">
            <div className="fluency-bar-fill" style={{ width: `${(opponent?.progress ?? 0) * 100}%`, background: 'var(--fg-3)' }} />
          </div>
        </div>
      </header>

      {/* Main arena */}
      <main className="grid lg:grid-cols-2 overflow-hidden">
        {/* Your side */}
        <section className="border-r border-[var(--border)] px-4 py-5 overflow-y-auto">
          <p className="text-[10px] font-body uppercase tracking-[0.3em] text-[var(--fg-3)]">●● your arena</p>

          {problem && (
            <div className="mt-4">
              <p className="text-[11px] font-body uppercase tracking-[0.25em] text-[var(--fg-3)] mb-2">// problem</p>
              <p className="font-display text-2xl text-[var(--fg)]">{problem.title}</p>
              <p className="font-body text-xs text-[var(--fg-2)] leading-6 mt-2 max-h-24 overflow-y-auto">{problem.prompt.split('\n')[0]}</p>
              {problem.examples.slice(0, 1).map((ex, i) => (
                <div key={i} className="mt-2 border border-dashed border-[var(--border)] p-2 text-[10px] font-body text-[var(--fg-3)]">
                  <span className="text-[var(--fg-2)]">in:</span> {ex.input} <span className="text-[var(--fg-2)] ml-2">out:</span> {ex.output}
                </div>
              ))}
            </div>
          )}

          <p className="text-[11px] font-body uppercase tracking-[0.25em] text-[var(--fg-3)] mt-5 mb-2">// code</p>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full h-48 bg-black border border-[var(--border)] p-3 font-mono text-xs text-[#00ff95] resize-none outline-none"
            placeholder="// write your solution here"
            spellCheck={false}
          />

          <div className="flex gap-3 mt-3">
            {!submitDone ? (
              <button
                onClick={handleSubmit}
                className="px-5 py-3 bg-[var(--accent)] text-[var(--bg)] text-xs font-body uppercase tracking-widest"
              >
                ▶ submit
              </button>
            ) : (
              <p className="px-5 py-3 text-xs font-body text-[var(--fg-3)] uppercase tracking-widest">✓ submitted · waiting for opponent</p>
            )}
            <button onClick={handleForfeit} className="ml-auto px-5 py-3 border border-dashed border-[var(--border)] text-xs font-body uppercase tracking-widest text-[var(--fg-3)]">
              forfeit
            </button>
          </div>
        </section>

        {/* Opponent side */}
        <section className="px-4 py-5 bg-[var(--bg-2)] overflow-y-auto">
          <p className="text-[10px] font-body uppercase tracking-[0.3em] text-[var(--fg-3)]">
            ●● @{opponent?.handle ?? '...'} · spectator view
          </p>

          {!opponent ? (
            <p className="mt-6 font-body text-sm text-[var(--fg-3)] animate-pulse">waiting for opponent to join...</p>
          ) : (
            <>
              <div className="mt-6 border border-[var(--border)] p-4 bg-[var(--bg)]">
                <p className="text-[10px] font-body uppercase tracking-widest text-[var(--fg-3)] mb-2">progress</p>
                <div className="fluency-bar">
                  <div className="fluency-bar-fill" style={{ width: `${(opponent.progress ?? 0) * 100}%`, background: 'var(--fg-3)' }} />
                </div>
                <p className="text-[10px] font-body text-[var(--fg-3)] mt-1">{Math.round((opponent.progress ?? 0) * 100)}%</p>
              </div>

              {opponent.submittedAt && (
                <div className="mt-4 border border-[var(--accent)] p-3">
                  <p className="text-xs font-body text-[var(--accent)] uppercase tracking-widest">● submitted</p>
                  <p className="text-[10px] font-body text-[var(--fg-3)] mt-1">
                    at {new Date(opponent.submittedAt).toLocaleTimeString()}
                  </p>
                </div>
              )}

              {status.coachMode === 'whisper' && (
                <div className="border border-dashed border-[var(--border)] p-4 mt-6">
                  <p className="text-[10px] font-body uppercase tracking-[0.25em] text-[var(--fg-3)]">◆ coach · whisper (to you only)</p>
                  <p className="font-body text-sm text-[var(--fg-2)] mt-2">
                    Focus on naming the invariant first. Don't match their tempo — match the problem.
                  </p>
                </div>
              )}
            </>
          )}
        </section>
      </main>

      {/* Footer chat (if enabled) */}
      {status.chatEnabled && (
        <footer className="border-t border-[var(--border)] px-4 sm:px-6 flex items-center justify-between bg-[var(--bg-2)]">
          <p className="text-xs font-body text-[var(--fg-3)]">chat coming soon</p>
          <p className="text-xs font-body text-[var(--fg-3)]">T to type</p>
        </footer>
      )}
    </div>
  )
}
