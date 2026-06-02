'use server'
import { redirect } from 'next/navigation'
import { auth, currentUser } from '@clerk/nextjs/server'
import { eq, asc } from 'drizzle-orm'
import { db } from '@/lib/db'
import { users, sessions, userPatterns, problems, patterns } from '@/lib/db/schema'

export async function startSession(
  mode: 'quick' | 'deep' | 'marathon',
  coachStance: 'socratic' | 'pair' | 'reviewer' | 'silent' = 'socratic',
) {
  console.log('[startSession] called with', { mode, coachStance })

  // ── Auth check ──
  const { userId: clerkId } = await auth()
  console.log('[startSession] clerkId:', clerkId ? clerkId.slice(0, 12) + '…' : '❌ null')

  if (!clerkId) {
    console.log('[startSession] ❌ no clerkId → redirect /sign-in')
    redirect('/sign-in')
  }

  // ── DB check ──
  console.log('[startSession] DATABASE_URL set:', !!process.env.DATABASE_URL)
  console.log('[startSession] db initialized:', !!db)

  if (!db) {
    console.error('[startSession] ❌ db is null — DATABASE_URL missing on Vercel?')
    redirect('/sign-in')
  }

  try {
    // ── Upsert user ──
    console.log('[startSession] querying user by clerkId…')
    let dbUser = (await db.select().from(users).where(eq(users.clerkId, clerkId)).limit(1))[0]
    console.log('[startSession] existing user:', dbUser ? `id=${dbUser.id} handle=${dbUser.handle}` : 'not found')

    if (!dbUser) {
      const clerkUser = await currentUser()
      if (!clerkUser) {
        console.error('[startSession] ❌ currentUser() returned null')
        redirect('/sign-in')
      }
      const handle = clerkUser.username ?? clerkUser.firstName?.toLowerCase() ?? clerkId.slice(0, 16)
      const email = clerkUser.emailAddresses[0]?.emailAddress ?? `${clerkId}@dsafun`

      // Check if a user with this email already exists (dev→prod Clerk migration)
      const existingByEmail = (await db.select().from(users).where(eq(users.email, email)).limit(1))[0]
      if (existingByEmail) {
        console.log('[startSession] found existing user by email, updating clerkId:', existingByEmail.id)
        const [updated] = await db
          .update(users)
          .set({ clerkId })
          .where(eq(users.id, existingByEmail.id))
          .returning()
        dbUser = updated
        console.log('[startSession] ✅ user clerkId updated:', dbUser.id)
      } else {
        // Truly new user — insert with handle collision handling
        let finalHandle = handle
        for (let attempt = 0; attempt < 3; attempt++) {
          try {
            console.log('[startSession] inserting new user:', { handle: finalHandle, email: email.slice(0, 8) + '…', attempt })
            const [inserted] = await db.insert(users).values({ clerkId, handle: finalHandle, email }).returning()
            dbUser = inserted
            console.log('[startSession] ✅ user created:', dbUser.id)
            break
          } catch (insertErr: unknown) {
            const constraint = (insertErr as { cause?: { constraint?: string } })?.cause?.constraint
            if (constraint === 'users_handle_unique') {
              finalHandle = `${handle}-${Math.random().toString(36).slice(2, 6)}`
              console.log('[startSession] ⚠️ handle taken, retrying with:', finalHandle)
              continue
            }
            throw insertErr
          }
        }
        if (!dbUser) {
          console.error('[startSession] ❌ failed to create user after retries')
          throw new Error('Failed to create user')
        }
      }
    }

    const difficulty = mode === 'quick' ? 'easy' : mode === 'deep' ? 'medium' : 'hard'
    console.log('[startSession] difficulty:', difficulty)

    // ── Find weakest pattern ──
    const weakPatterns = await db
      .select()
      .from(userPatterns)
      .where(eq(userPatterns.userId, dbUser.id))
      .orderBy(asc(userPatterns.fluency))
      .limit(1)
    console.log('[startSession] weakest pattern:', weakPatterns.length > 0 ? `patternId=${weakPatterns[0].patternId} fluency=${weakPatterns[0].fluency}` : 'none (new user)')

    let problem
    if (weakPatterns.length > 0) {
      const rows = await db
        .select({ p: problems })
        .from(problems)
        .where(eq(problems.patternId, weakPatterns[0].patternId))
        .limit(30)
      console.log('[startSession] problems for weak pattern:', rows.length)
      const byDifficulty = rows.filter((r) => r.p.difficulty === difficulty)
      const pool = byDifficulty.length > 0 ? byDifficulty : rows
      problem = pool[Math.floor(Math.random() * pool.length)]?.p
    }

    if (!problem) {
      // Fallback: random problem of matching difficulty from any pattern
      console.log('[startSession] fallback: random problem with difficulty =', difficulty)
      const rows = await db.select().from(problems).where(eq(problems.difficulty, difficulty)).limit(20)
      console.log('[startSession] fallback pool size:', rows.length)
      problem = rows[Math.floor(Math.random() * rows.length)]
    }

    if (!problem) {
      console.error('[startSession] ❌ no problems found at all — DB empty or no matching difficulty')
      redirect('/s/new?error=no-problems')
    }

    console.log('[startSession] selected problem:', { id: problem.id, title: problem.title, difficulty: problem.difficulty })

    // ── Create session ──
    const [session] = await db
      .insert(sessions)
      .values({ userId: dbUser.id, problemId: problem.id, mode, status: 'active', coachStance })
      .returning()
    console.log('[startSession] ✅ session created:', session.id)

    redirect(`/s/${session.id}`)
  } catch (error: unknown) {
    // Re-throw Next.js redirect errors (they use throw internally)
    if (error && typeof error === 'object' && 'digest' in error) {
      throw error
    }
    console.error('[startSession] ❌ unhandled error:', error)
    throw error
  }
}
