import type { Metadata } from 'next'
import { VT323, JetBrains_Mono, Special_Elite } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { ThemeProvider } from '@/components/ui/ThemeProvider'
import { Header } from '@/components/layout/Header'
import { CmdK } from '@/components/ui/CmdK'

const vt323 = VT323({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-vt323',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

const specialElite = Special_Elite({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-special-elite',
  display: 'swap',
})

export const metadata: Metadata = {
  title: { default: 'DSAFun', template: '%s — DSAFun' },
  description: 'DSA pattern mastery for working developers. No grinding. No leaderboards. 14 characters, infinite expeditions.',
  keywords: ['DSA', 'algorithms', 'data structures', 'patterns', 'interview prep'],
  openGraph: {
    title: 'DSAFun',
    description: 'Algorithm patterns as characters. Socratic coach. Time-travel debrief.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="terminal" suppressHydrationWarning>
      <head>
        <style>{`
          :root {
            --font-display: var(--font-vt323), ui-monospace, monospace;
            --font-body: var(--font-jetbrains), ui-monospace, monospace;
            --font-zine: var(--font-special-elite), serif;
          }
          body { font-family: var(--font-body); }
        `}</style>
      </head>
      <body className={`${vt323.variable} ${jetbrainsMono.variable} ${specialElite.variable}`}>
        <ClerkProvider>
          <ThemeProvider>
            <Header />
            <main className="min-h-[calc(100dvh-3rem)]">
              {children}
            </main>
            <CmdK />
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  )
}
