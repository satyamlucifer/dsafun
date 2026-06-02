'use client'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { cn } from '@/lib/utils'

type HintProps = {
  children: React.ReactNode
  content: React.ReactNode
  side?: 'top' | 'right' | 'bottom' | 'left'
  className?: string
}

export function Hint({ children, content, side = 'top', className }: HintProps) {
  return (
    <TooltipPrimitive.Provider delayDuration={400}>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>
          <span className={cn('cursor-help', className)}>{children}</span>
        </TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            side={side}
            sideOffset={6}
            className="z-50 max-w-xs px-3 py-2 text-xs font-body text-[var(--bg)] bg-[var(--fg)] border border-[var(--border)] shadow-lg leading-5 animate-in fade-in-0 zoom-in-95"
          >
            {content}
            <TooltipPrimitive.Arrow className="fill-[var(--fg)]" />
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  )
}

export function HintIcon({ content, side = 'top' }: { content: React.ReactNode; side?: HintProps['side'] }) {
  return (
    <Hint content={content} side={side}>
      <span className="inline-flex items-center justify-center w-4 h-4 border border-[var(--border)] text-[var(--fg-3)] text-[9px] font-body leading-none hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors">?</span>
    </Hint>
  )
}
