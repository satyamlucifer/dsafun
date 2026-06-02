'use client'
import ReactMarkdown from 'react-markdown'

type Props = {
  children: string
  className?: string
}

export function ProblemMarkdown({ children, className = '' }: Props) {
  return (
    <div className={className}>
      <ReactMarkdown
        components={{
          p: ({ children }) => (
            <p className="font-body text-sm text-[var(--fg-2)] leading-7 mb-3">{children}</p>
          ),
          strong: ({ children }) => (
            <strong className="text-[var(--fg)] font-semibold">{children}</strong>
          ),
          em: ({ children }) => (
            <em className="text-[var(--fg-2)] italic">{children}</em>
          ),
          // In react-markdown v10, block code is wrapped in <pre><code>
          // We override pre to strip default styling and code to style inline vs block
          pre: ({ children }) => (
            <pre className="bg-[var(--bg-2)] border border-[var(--border)] px-4 py-3 my-3 overflow-x-auto">
              {children}
            </pre>
          ),
          code: ({ children }) => (
            <code className="text-xs font-mono text-[#00ff95]">{children}</code>
          ),
          ul: ({ children }) => (
            <ul className="list-none ml-0 my-2 grid gap-1">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal ml-5 my-2 grid gap-1">{children}</ol>
          ),
          li: ({ children }) => (
            <li className="font-body text-sm text-[var(--fg-2)] leading-6 flex gap-2">
              <span className="text-[var(--fg-3)] shrink-0 mt-0.5">◆</span>
              <span>{children}</span>
            </li>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-2 border-[var(--border-accent)] pl-4 my-3 text-[var(--fg-3)] italic">
              {children}
            </blockquote>
          ),
          h3: ({ children }) => (
            <h3 className="font-display text-xl text-[var(--fg)] mt-5 mb-2">{children}</h3>
          ),
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  )
}
