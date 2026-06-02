import { initTRPC, TRPCError } from '@trpc/server'
import superjson from 'superjson'
import { ZodError } from 'zod'
import { auth, currentUser } from '@clerk/nextjs/server'
import { eq } from 'drizzle-orm'
import { db, type Db } from '@/lib/db'
import { users } from '@/lib/db/schema'
import type { User } from '@/lib/db/schema'

export const createTRPCContext = async () => {
  const { userId: clerkId } = await auth()
  return { clerkId }
}

type Context = Awaited<ReturnType<typeof createTRPCContext>>

const t = initTRPC.context<Context>().create({
  transformer: superjson,
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError:
          error.cause instanceof ZodError ? error.cause.flatten() : null,
      },
    }
  },
})

const enforceAuth = t.middleware(async ({ ctx, next }) => {
  if (!ctx.clerkId) throw new TRPCError({ code: 'UNAUTHORIZED' })
  if (!db) throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: 'No database' })

  let dbUser = (await db.select().from(users).where(eq(users.clerkId, ctx.clerkId)).limit(1))[0]
  if (!dbUser) {
    const clerkUser = await currentUser()
    if (!clerkUser) throw new TRPCError({ code: 'UNAUTHORIZED' })
    const handle = clerkUser.username ?? clerkUser.firstName?.toLowerCase() ?? ctx.clerkId.slice(0, 16)
    const email = clerkUser.emailAddresses[0]?.emailAddress ?? `${ctx.clerkId}@dsafun`
    const [inserted] = await db.insert(users).values({ clerkId: ctx.clerkId, handle, email }).returning()
    dbUser = inserted
  }

  return next({ ctx: { ...ctx, db: db as Db, dbUser: dbUser as User } })
})

export const createCallerFactory = t.createCallerFactory
export const createTRPCRouter = t.router
export const publicProcedure = t.procedure
export const protectedProcedure = t.procedure.use(enforceAuth)
