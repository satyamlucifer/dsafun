'use server'
import { generateText } from 'ai'
import { resolveRole } from '@/lib/ai/providers'

export type CoachMessage = {
  role: 'user' | 'assistant'
  content: string
}

export async function coachAskAction(
  patternName: string,
  problemTitle: string,
  problemPrompt: string,
  messages: CoachMessage[],
): Promise<string> {
  try {
    const model = resolveRole('coach')

    const system = `You are a Socratic DSA coach for the pattern "${patternName}".
Problem: "${problemTitle}".
${problemPrompt}

Rules:
- Ask one focused question at a time. Never give the answer directly.
- When the user is stuck, offer an analogy or a smaller sub-problem.
- Praise honest admissions ("I don't know") more than clever answers.
- Keep responses under 80 words.
- Respond in plain text, no markdown, no code blocks.`

    const result = await generateText({
      model,
      system,
      messages,
      maxOutputTokens: 200,
      temperature: 0.7,
    })

    return result.text
  } catch {
    return "What do you know for certain about the smallest subproblem here?"
  }
}
