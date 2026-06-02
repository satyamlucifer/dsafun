import { google } from '@ai-sdk/google'
import { openai } from '@ai-sdk/openai'
import { anthropic } from '@ai-sdk/anthropic'

export type AIProviderName = 'google' | 'openai' | 'anthropic'

export type ModelRole = 'coach' | 'generator' | 'reviewer' | 'analogy'

export type ModelConfig = {
  provider: AIProviderName
  model: string
}

// Resolved from env at startup — swap providers without code changes
export function getDefaultModels(): Record<ModelRole, ModelConfig> {
  const provider = (process.env.AI_PROVIDER ?? 'google') as AIProviderName
  const fast = process.env.AI_FAST_MODEL ?? 'gemini-2.0-flash'
  const smart = process.env.AI_SMART_MODEL ?? 'gemini-1.5-pro'

  return {
    coach:     { provider, model: fast  },
    analogy:   { provider, model: fast  },
    generator: { provider, model: smart },
    reviewer:  { provider, model: smart },
  }
}

export function resolveModel(config: ModelConfig) {
  switch (config.provider) {
    case 'google':
      return google(config.model)
    case 'openai':
      return openai(config.model)
    case 'anthropic':
      return anthropic(config.model)
    default: {
      const _exhaustive: never = config.provider
      throw new Error(`Unknown AI provider: ${_exhaustive}`)
    }
  }
}

export function resolveRole(role: ModelRole, override?: Partial<ModelConfig>) {
  const defaults = getDefaultModels()
  const cfg = { ...defaults[role], ...override }
  return resolveModel(cfg)
}
