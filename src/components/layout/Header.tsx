'use client'
import Link from 'next/link'
import type { Route } from 'next'
import { SignInButton, UserButton, useUser } from '@clerk/nextjs'
import { useThemeStore, type Theme } from '@/stores/theme'
import { cn } from '@/lib/utils'

const NAV_LINKS: { href: Route; label: string }[] = [
  { href: '/atlas', label: 'Atlas' },
  { href: '/library', label: 'Library' },
  { href: '/dashboard', label: 'Dashboard' },
]

const THEMES: { value: Theme; label: string }[] = [
  { value: 'terminal', label: 'Term' },
  { value: 'amber', label: 'Amber' },
  { value: 'paper', label: 'Zine' },
]

export function Header() {
  const { theme, setTheme } = useThemeStore()
  const { isLoaded, isSignedIn } = useUser()

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--bg)] bg-opacity-95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-12">
        {/* Wordmark */}
        <Link href="/" className="flex items-center gap-2 no-underline hover:no-underline group">
          <span className="text-[var(--accent)] font-display text-2xl leading-none select-none group-hover:text-glow-accent transition-all">
            {'>'}_
          </span>
          <span className="font-display text-2xl text-[var(--fg)] leading-none tracking-wider">
            DSA<span className="text-[var(--accent)]">FUN</span>
          </span>
        </Link>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-1 text-sm font-body text-[var(--fg-2)] hover:text-[var(--fg)] hover:bg-[var(--bg-2)] border border-transparent hover:border-[var(--border)] transition-all no-underline"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Controls */}
        <div className="flex items-center gap-2">
          {/* Theme switcher */}
          <div className="hidden sm:flex items-center border border-[var(--border)] overflow-hidden">
            {THEMES.map((t) => (
              <button
                key={t.value}
                onClick={() => setTheme(t.value)}
                className={cn(
                  'px-2 py-1 text-[10px] font-body uppercase tracking-wider transition-colors',
                  theme === t.value
                    ? 'bg-[var(--accent)] text-[var(--bg)]'
                    : 'text-[var(--fg-3)] hover:text-[var(--fg)] hover:bg-[var(--bg-2)]',
                )}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Search bar — opens command palette */}
          <button
            onClick={() => window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true, bubbles: true }))}
            className="hidden sm:flex items-center gap-2 w-44 px-3 py-1.5 border border-[var(--border)] bg-[var(--bg-2)] text-[var(--fg-3)] hover:border-[var(--border-accent)] hover:text-[var(--fg)] transition-all group"
            aria-label="Open search"
          >
            <span className="text-[11px] font-body select-none">⌕</span>
            <span className="flex-1 text-left text-[11px] font-body truncate">search patterns, problems...</span>
            <kbd className="text-[9px] font-body border border-[var(--border)] px-1 py-0.5 leading-none group-hover:border-[var(--border-accent)] shrink-0">⌘K</kbd>
          </button>
          {/* Mobile: icon-only */}
          <button
            onClick={() => window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true, bubbles: true }))}
            className="sm:hidden flex items-center justify-center w-8 h-8 border border-[var(--border)] text-[var(--fg-3)] hover:border-[var(--border-accent)] hover:text-[var(--fg)] transition-all"
            aria-label="Search"
          >
            <span className="text-sm font-body">⌕</span>
          </button>

          {isLoaded ? (
            isSignedIn ? (
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: 'w-7 h-7 ring-1 ring-[var(--border)] hover:ring-[var(--accent)] transition-all',
                  },
                }}
              />
            ) : (
              <SignInButton mode="modal">
                <button className="flex items-center gap-1 px-2 py-1 border border-[var(--border)] text-[var(--fg-3)] hover:text-[var(--fg)] hover:border-[var(--accent)] transition-all">
                  <span className="text-[10px] font-body">sign in</span>
                </button>
              </SignInButton>
            )
          ) : (
            <Link href="/sign-in" className="flex items-center gap-1 px-2 py-1 border border-[var(--border)] text-[var(--fg-3)] hover:text-[var(--fg)] hover:border-[var(--accent)] transition-all no-underline">
              <span className="text-[10px] font-body">sign in</span>
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}
