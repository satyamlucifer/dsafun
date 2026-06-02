import { createTRPCRouter } from '../trpc'
import { patternsRouter } from './patterns'
import { problemsRouter } from './problems'
import { sessionRouter } from './session'
import { userRouter } from './user'
import { duelRouter } from './duel'

export const appRouter = createTRPCRouter({
  patterns: patternsRouter,
  problems: problemsRouter,
  session: sessionRouter,
  user: userRouter,
  duel: duelRouter,
})

export type AppRouter = typeof appRouter
