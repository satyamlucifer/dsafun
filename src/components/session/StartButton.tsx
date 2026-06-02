'use client'
import { useTransition } from 'react'
import { startSession } from '@/app/actions/session'

type Props = {
  mode: 'quick' | 'deep' | 'marathon'
  coachStance?: 'socratic' | 'pair' | 'reviewer' | 'silent'
  children: React.ReactNode
  className?: string
}

export function StartButton({ mode, coachStance = 'socratic', children, className }: Props) {
  const [pending, startTransition] = useTransition()
  return (
    <button
      disabled={pending}
      onClick={() => startTransition(() => startSession(mode, coachStance))}
      className={`${className} disabled:opacity-50 cursor-pointer`}
    >
      {pending ? 'starting...' : children}
    </button>
  )
}
