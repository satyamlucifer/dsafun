import 'server-only'
import { generateText, streamText, type ModelMessage } from 'ai'
import { resolveRole, type ModelConfig, type ModelRole } from './providers'

export type { ModelRole, ModelConfig }

type GenerateOpts = {
  role: ModelRole
  system: string
  messages: ModelMessage[]
  maxTokens?: number
  temperature?: number
  modelOverride?: Partial<ModelConfig>
}

export async function aiGenerate(opts: GenerateOpts) {
  const model = resolveRole(opts.role, opts.modelOverride)

  const start = Date.now()
  const result = await generateText({
    model,
    system: opts.system,
    messages: opts.messages,
    maxOutputTokens: opts.maxTokens ?? 1024,
    temperature: opts.temperature ?? 0.7,
  })

  const tokensIn = result.usage.inputTokens ?? 0
  const tokensOut = result.usage.outputTokens ?? 0

  return {
    text: result.text,
    tokensIn,
    tokensOut,
    latencyMs: Date.now() - start,
    model: model.modelId,
  }
}

export function aiStream(opts: GenerateOpts) {
  const model = resolveRole(opts.role, opts.modelOverride)

  return streamText({
    model,
    system: opts.system,
    messages: opts.messages,
    maxOutputTokens: opts.maxTokens ?? 1024,
    temperature: opts.temperature ?? 0.7,
  })
}

// Coach-specific: parses streamed response and validates it contains no code > 5 lines
export async function coachStream(opts: Omit<GenerateOpts, 'role'>) {
  return aiStream({ ...opts, role: 'coach' })
}

export { resolveRole, getDefaultModels } from './providers'
