'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import type { Route } from 'next'
import * as Dialog from '@radix-ui/react-dialog'
import { PATTERNS_SEED, PROBLEMS_SEED } from '@/lib/db/seed-data'
import { slugifyTitle } from '@/lib/content'
import { cn } from '@/lib/utils'

type CommandItem = {
  label: string
  description: string
  href: Route
  shortcut?: string
  hue?: string
}

const ROUTES: CommandItem[] = [
  { label: 'Atlas', description: 'Constellation of all 14 patterns', href: '/atlas', shortcut: 'A' },
  { label: 'Library', description: 'Browse all problems', href: '/library', shortcut: 'L' },
  { label: 'Settings', description: 'Theme, language, shortcuts', href: '/settings', shortcut: 'S' },
]

export function CmdK() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(0)
  const router = useRouter()

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setOpen((o) => !o)
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  const q = query.toLowerCase()

  const patternItems = PATTERNS_SEED.filter(
    (p) => !q || p.name.toLowerCase().includes(q) || p.topic.toLowerCase().includes(q),
  ).map((p) => ({
    label: p.name,
    description: p.topic,
    href: `/p/${p.slug}` as Route,
    hue: p.hue,
    group: 'Patterns',
  }))

  const problemItems = q.length >= 2
    ? PROBLEMS_SEED.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.patternSlug.toLowerCase().includes(q) ||
          p.difficulty.toLowerCase().includes(q),
      ).slice(0, 6).map((p) => ({
        label: p.title,
        description: `${p.patternSlug} · ${p.difficulty}`,
        href: `/library/${slugifyTitle(p.title)}` as Route,
        hue: undefined,
        group: 'Problems',
      }))
    : []

  const routeItems = ROUTES.filter(
    (r) => !q || r.label.toLowerCase().includes(q) || r.description.toLowerCase().includes(q),
  ).map((r) => ({ ...r, group: 'Navigation' }))

  const allItems = [...routeItems, ...patternItems, ...problemItems]

  useEffect(() => { setSelected(0) }, [query])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setSelected((s) => Math.min(s + 1, allItems.length - 1)) }
    if (e.key === 'ArrowUp')   { e.preventDefault(); setSelected((s) => Math.max(s - 1, 0)) }
    if (e.key === 'Enter' && allItems[selected]) {
      router.push(allItems[selected].href)
      setOpen(false)
      setQuery('')
    }
  }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm" />
        <Dialog.Content
          className="fixed top-[20vh] left-1/2 -translate-x-1/2 z-50 w-full max-w-lg"
          onKeyDown={handleKeyDown}
        >
          <Dialog.Title className="sr-only">Command Palette</Dialog.Title>
          <div className="zine-card border border-[var(--border-accent)] bg-[var(--bg)]">
            {/* Input */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--border)]">
              <span className="text-[var(--accent)] font-display text-xl">{'>'}</span>
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="jump to pattern, library, atlas..."
                className="flex-1 bg-transparent text-[var(--fg)] text-sm font-body placeholder:text-[var(--fg-3)] outline-none"
              />
              <kbd className="text-[var(--fg-3)] text-xs font-body border border-[var(--border)] px-1.5 py-0.5">ESC</kbd>
            </div>

            {/* Results */}
            <div className="max-h-[360px] overflow-y-auto">
              {allItems.length === 0 && (
                <p className="text-[var(--fg-3)] text-sm font-body px-4 py-6 text-center">no results for "{query}"</p>
              )}

              {routeItems.length > 0 && (
                <div>
                  <p className="px-4 pt-3 pb-1 text-[10px] text-[var(--fg-3)] font-body uppercase tracking-[0.25em]">// navigate</p>
                  {routeItems.map((item, i) => (
                    <button
                      key={item.href}
                      onClick={() => { router.push(item.href); setOpen(false); setQuery('') }}
                      className={cn(
                        'w-full flex items-center gap-3 px-4 py-2 text-left transition-colors',
                        selected === i ? 'bg-[var(--accent-dim)] border-l-2 border-[var(--accent)]' : 'hover:bg-[var(--bg-2)] border-l-2 border-transparent',
                      )}
                    >
                      <kbd className="w-5 text-center font-display text-base text-[var(--accent)]">{item.shortcut}</kbd>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-body text-[var(--fg)]">{item.label}</p>
                        <p className="text-[10px] font-body text-[var(--fg-3)] truncate">{item.description}</p>
                      </div>
                      <span className="text-[10px] font-body text-[var(--fg-3)]">page</span>
                    </button>
                  ))}
                </div>
              )}

              {patternItems.length > 0 && (
                <div>
                  <p className="px-4 pt-3 pb-1 text-[10px] text-[var(--fg-3)] font-body uppercase tracking-[0.25em]">// patterns</p>
                  {patternItems.map((item, i) => (
                    <button
                      key={item.href}
                      onClick={() => { router.push(item.href); setOpen(false); setQuery('') }}
                      className={cn(
                        'w-full flex items-center gap-3 px-4 py-2 text-left transition-colors',
                        selected === routeItems.length + i ? 'bg-[var(--accent-dim)] border-l-2 border-[var(--accent)]' : 'hover:bg-[var(--bg-2)] border-l-2 border-transparent',
                      )}
                    >
                      <span style={{ color: item.hue }} className="w-5 text-center font-display text-base">◆</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-body text-[var(--fg)]">{item.label}</p>
                        <p className="text-[10px] font-body text-[var(--fg-3)] truncate">{item.description}</p>
                      </div>
                      <span className="text-[10px] font-body text-[var(--fg-3)]">character</span>
                    </button>
                  ))}
                </div>
              )}

              {problemItems.length > 0 && (
                <div>
                  <p className="px-4 pt-3 pb-1 text-[10px] text-[var(--fg-3)] font-body uppercase tracking-[0.25em]">// problems</p>
                  {problemItems.map((item, i) => (
                    <button
                      key={item.href}
                      onClick={() => { router.push(item.href); setOpen(false); setQuery('') }}
                      className={cn(
                        'w-full flex items-center gap-3 px-4 py-2 text-left transition-colors',
                        selected === routeItems.length + patternItems.length + i ? 'bg-[var(--accent-dim)] border-l-2 border-[var(--accent)]' : 'hover:bg-[var(--bg-2)] border-l-2 border-transparent',
                      )}
                    >
                      <span className="w-5 text-center font-display text-base text-[var(--fg-3)]">○</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-body text-[var(--fg)]">{item.label}</p>
                        <p className="text-[10px] font-body text-[var(--fg-3)] truncate">{item.description}</p>
                      </div>
                      <span className="text-[10px] font-body text-[var(--fg-3)]">problem</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="flex items-center gap-4 px-4 py-2 border-t border-[var(--border)]">
              <span className="text-[10px] text-[var(--fg-3)] font-body">↑↓ navigate</span>
              <span className="text-[10px] text-[var(--fg-3)] font-body">↵ open</span>
              <span className="text-[10px] text-[var(--fg-3)] font-body ml-auto">⌘K to close</span>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
