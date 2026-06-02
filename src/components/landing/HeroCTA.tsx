'use client'
import Link from 'next/link'
import { useUser, SignUpButton, SignInButton } from '@clerk/nextjs'

export function HeroCTA() {
  const { isLoaded, isSignedIn } = useUser()

  if (!isLoaded) return (
    <div className="flex flex-wrap gap-3 mt-8">
      <div className="h-10 w-40 bg-[var(--bg-2)] border border-[var(--border)] animate-pulse" />
      <div className="h-10 w-32 bg-[var(--bg-2)] border border-[var(--border)] animate-pulse" />
    </div>
  )

  if (isSignedIn) return (
    <div className="flex flex-wrap gap-3 mt-8">
      <Link
        href="/s/new"
        className="px-5 py-3 bg-[var(--accent)] text-[var(--bg)] font-body text-xs uppercase tracking-widest no-underline"
      >
        ▶ start session
      </Link>
      <Link
        href="/dashboard"
        className="px-5 py-3 border border-[var(--border)] font-body text-xs uppercase tracking-widest no-underline hover:bg-[var(--bg-2)]"
      >
        dashboard →
      </Link>
    </div>
  )

  return (
    <div className="flex flex-wrap gap-3 mt-8">
      <SignUpButton mode="modal" fallbackRedirectUrl="/onboarding">
        <button className="px-5 py-3 bg-[var(--accent)] text-[var(--bg)] font-body text-xs uppercase tracking-widest cursor-pointer">
          ▶ get started free
        </button>
      </SignUpButton>
      <SignInButton mode="modal" fallbackRedirectUrl="/dashboard">
        <button className="px-5 py-3 border border-[var(--border)] font-body text-xs uppercase tracking-widest hover:bg-[var(--bg-2)] cursor-pointer">
          sign in →
        </button>
      </SignInButton>
    </div>
  )
}
