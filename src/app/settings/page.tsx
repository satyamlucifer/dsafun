'use client'
import { useThemeStore, type Theme } from '@/stores/theme'
import { HintIcon } from '@/components/ui/Hint'

const THEMES: { value: Theme; name: string; note: string }[] = [
  { value: 'terminal', name: 'Terminal', note: 'dark · green phosphor' },
  { value: 'amber', name: 'Amber CRT', note: 'dark · amber phosphor' },
  { value: 'paper', name: 'Zine Paper', note: 'light · cream paper' },
]

export default function SettingsPage() {
  const { theme, setTheme, scanlines, setScanlines, vignette, setVignette } = useThemeStore()
  const toggles: { label: string; value: boolean; setter: (next: boolean) => void }[] = [
    { label: 'scanline overlay', value: scanlines, setter: setScanlines },
    { label: 'CRT vignette', value: vignette, setter: setVignette },
  ]

  return (
    <div className="min-h-[calc(100dvh-3rem)] grid lg:grid-cols-[240px_1fr]">
      <aside className="hidden lg:block border-r border-[var(--border)] px-6 py-8 bg-[var(--bg-2)]">
        {['Account', 'Appearance', 'Coach', 'Keyboard', 'Editor', 'Billing', 'Notifications', 'Danger'].map((item, index) => (
          <p key={item} className={`border ${index === 1 ? 'border-[var(--border-accent)]' : 'border-dashed border-[var(--border)]'} px-3 py-2 mb-2 text-sm font-body text-[var(--fg-2)]`}>
            {item}
          </p>
        ))}
      </aside>

      <section className="px-4 sm:px-8 py-8">
        <p className="text-[11px] font-body text-[var(--fg-3)] uppercase tracking-[0.3em]">// appearance</p>
        <h1 className="font-display text-6xl sm:text-7xl text-[var(--fg)] mt-2">how you want it to feel.</h1>

        <div className="max-w-5xl mt-8 grid gap-6">
          <section className="border border-[var(--border)] p-5">
            <div className="flex items-center gap-2 mb-4">
              <p className="text-[10px] font-body uppercase tracking-[0.3em] text-[var(--fg-3)]">● theme</p>
              <HintIcon content="Your terminal skin. Terminal = classic green phosphor. Amber = 1970s CRT orange. Zine = off-white paper zine." side="right" />
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {THEMES.map((item) => (
                <button
                  key={item.value}
                  onClick={() => setTheme(item.value)}
                  className={`border ${theme === item.value ? 'border-[var(--border-accent)] bg-[var(--accent-dim)]' : 'border-[var(--border)]'} p-4 text-left`}
                >
                  <div className="h-20 border border-[var(--border)] mb-4 bg-[var(--bg)]" />
                  <p className="font-body text-sm text-[var(--fg)] uppercase">{item.name}</p>
                  <p className="text-xs font-body text-[var(--fg-3)] mt-1">{item.note}</p>
                </button>
              ))}
            </div>
          </section>

          <section className="border border-[var(--border)] p-5">
            <div className="flex items-center gap-2 mb-4">
              <p className="text-[10px] font-body uppercase tracking-[0.3em] text-[var(--fg-3)]">● effects</p>
              <HintIcon content="Scanline overlay simulates CRT monitor horizontal scan lines. Vignette darkens screen edges for that old-monitor feel." side="right" />
            </div>
            <div className="grid gap-4 max-w-sm">
              {toggles.map(({ label, value, setter }) => (
                <button
                  key={label}
                  onClick={() => setter(!value)}
                  className="flex items-center justify-between text-left"
                >
                  <span className="text-sm font-body text-[var(--fg-2)]">{label}</span>
                  <span className={`w-11 h-6 border border-[var(--border)] p-0.5 flex ${value ? 'justify-end bg-[var(--accent-dim)]' : 'justify-start'}`}>
                    <span className="w-4 h-4 bg-[var(--fg)]" />
                  </span>
                </button>
              ))}
            </div>
          </section>

          <section className="border border-[var(--border)] p-5">
            <div className="flex items-center gap-2 mb-4">
              <p className="text-[10px] font-body uppercase tracking-[0.3em] text-[var(--fg-3)]">● coach · tone</p>
              <HintIcon content="Warm: patient, encouraging. Neutral: direct, no fluff. Drill sergeant: brutally honest — demands precision." side="right" />
            </div>
            <div className="grid md:grid-cols-3 gap-3">
              {['warm', 'neutral', 'drill sergeant'].map((tone, index) => (
                <button key={tone} className={`border ${index === 0 ? 'border-[var(--border-accent)] bg-[var(--accent-dim)]' : 'border-dashed border-[var(--border)]'} px-4 py-3 text-sm font-body text-[var(--fg-2)]`}>
                  {tone}
                </button>
              ))}
            </div>
          </section>

          <section className="border border-[var(--border)] p-5">
            <div className="flex items-center gap-2 mb-4">
              <p className="text-[10px] font-body uppercase tracking-[0.3em] text-[var(--fg-3)]">● AI routing</p>
              <HintIcon content="All providers use the same prompts. Google Gemini is the default. Configure API keys in your .env file." side="right" />
            </div>
            <div className="grid md:grid-cols-3 gap-3">
              {['Google Gemini', 'OpenAI', 'Anthropic'].map((provider, index) => (
                <div key={provider} className={`border ${index === 0 ? 'border-[var(--border-accent)]' : 'border-[var(--border)]'} p-4`}>
                  <p className="font-body text-sm text-[var(--fg)]">{provider}</p>
                  <p className="text-xs font-body text-[var(--fg-3)] mt-1">{index === 0 ? 'default · env configured' : 'plug-in ready'}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </div>
  )
}
