'use client'

import { SignIn, useClerk } from '@clerk/nextjs'
import { useEffect, useState } from 'react'
import type { Metadata } from 'next'

// ── Debug probe — logs Clerk init state to browser console ──────────────────
function ClerkDebug() {
  const clerk = useClerk()
  const [status, setStatus] = useState<string>('checking…')

  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
    console.group('[DSAFun] Clerk Debug')
    console.log('publishable key prefix:', key ? key.slice(0, 20) + '…' : '❌ MISSING')
    console.log('clerk.loaded:', clerk.loaded)
    console.log('proxyUrl in use: /__clerk')
    console.groupEnd()

    if (!key) {
      setStatus('❌ NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY is missing')
      return
    }
    if (clerk.loaded) {
      setStatus('✅ Clerk loaded')
    } else {
      const t = setTimeout(() => {
        console.warn('[DSAFun] Clerk did not load within 5 s — check network tab for /__clerk requests')
        setStatus('⚠️ Clerk not loaded after 5 s — check console')
      }, 5000)
      return () => clearTimeout(t)
    }
  }, [clerk.loaded])

  // Visible only in dev; hidden via opacity in production so UI stays clean
  return (
    <p
      className="font-body text-[10px] text-[var(--fg-3)] mt-2 opacity-0 select-none"
      aria-hidden="true"
      data-clerk-status={status}
    />
  )
}

// ── Sign-in page ─────────────────────────────────────────────────────────────
export default function SignInPage() {
  return (
    <div className="min-h-[calc(100dvh-3rem)] grid lg:grid-cols-2">
      {/* Left: Brand panel */}
      <div className="hidden lg:flex flex-col justify-between p-12 border-r border-[var(--border)] bg-[var(--bg-2)]">
        <div>
          <p className="font-display text-4xl text-[var(--accent)]">{'>'}_</p>
          <p className="font-display text-6xl text-[var(--fg)] mt-4 leading-none">
            DSA<span className="text-[var(--accent)]">FUN</span>
          </p>
        </div>
        <div>
          <blockquote className="font-zine text-2xl text-[var(--fg-2)] leading-relaxed max-w-sm">
            "DSA is not a grind. It is a zine you read in 25 minutes before bed."
          </blockquote>
          <p className="text-[10px] font-body text-[var(--fg-3)] uppercase tracking-[0.3em] mt-6">
            14 patterns · socratic coach · time-travel debrief
          </p>
        </div>
      </div>

      {/* Right: Sign-in form */}
      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <p className="text-[11px] font-body text-[var(--fg-3)] uppercase tracking-[0.3em] mb-4">
            // authenticate
          </p>
          <ClerkDebug />
          <SignIn
            appearance={{
              elements: {
                rootBox: 'w-full',
                card: 'bg-transparent shadow-none border border-[var(--border)] p-0',
                headerTitle: 'font-display text-3xl text-[var(--fg)]',
                headerSubtitle: 'font-body text-xs text-[var(--fg-3)]',
                socialButtonsBlockButton: 'border border-[var(--border)] bg-transparent text-[var(--fg)] font-body text-sm hover:bg-[var(--bg-2)]',
                formFieldInput: 'bg-[var(--bg)] border border-[var(--border)] text-[var(--fg)] font-body text-sm',
                formButtonPrimary: 'bg-[var(--accent)] text-[var(--bg)] font-body text-xs uppercase tracking-widest',
                footerActionLink: 'text-[var(--accent)]',
              },
            }}
          />
        </div>
      </div>
    </div>
  )
}
