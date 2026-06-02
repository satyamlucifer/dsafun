import type { Metadata } from 'next'
import { STATE_CARDS } from '@/lib/content'

export const metadata: Metadata = { title: 'States' }

export default function StatesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      <p className="text-[11px] font-body uppercase tracking-[0.3em] text-[var(--fg-3)]">// edge states · empty · loading · error · stuck</p>
      <h1 className="font-display text-6xl sm:text-7xl text-[var(--fg)] mt-2">when things aren't going great.</h1>
      <p className="font-body text-sm text-[var(--fg-3)] mt-2">every screen has these. tone stays warm. zero clinical error energy.</p>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5 mt-8">
        {STATE_CARDS.map(([title, copy, action], index) => (
          <section key={title} className="border border-[var(--border)] min-h-52 p-4 flex flex-col">
            <div className="flex justify-between border-b border-[var(--border)] pb-2">
              <p className="text-[10px] font-body uppercase tracking-[0.25em] text-[var(--fg-3)]">{title}</p>
              <p className="text-[10px] font-body text-[var(--fg-3)]">{String.fromCharCode(65 + Math.floor(index / 4))}{(index % 4) + 1}</p>
            </div>
            <div className="flex-1 flex flex-col justify-center items-center text-center gap-4">
              <span className="w-6 h-6 border-2 border-[var(--fg)] rounded-full" />
              <p className="font-body text-sm text-[var(--fg)]">{copy}</p>
              <button className={`${index % 3 === 0 ? 'bg-[var(--fg)] text-[var(--bg)]' : 'border border-[var(--border)] text-[var(--fg-2)]'} px-4 py-2 text-xs font-body uppercase tracking-widest`}>
                {action}
              </button>
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
