import {
  pgTable,
  text,
  integer,
  real,
  jsonb,
  timestamp,
  boolean,
  uuid,
  index,
  primaryKey,
  pgEnum,
} from 'drizzle-orm/pg-core'
import { relations } from 'drizzle-orm'

// ── Enums ──────────────────────────────────────────────────────
export const sessionModeEnum = pgEnum('session_mode', ['quick', 'deep', 'marathon'])
export const sessionStatusEnum = pgEnum('session_status', ['active', 'submitted', 'abandoned'])
export const problemSourceEnum = pgEnum('problem_source', ['classic', 'generated', 'shared'])
export const coachStanceEnum = pgEnum('coach_stance', ['socratic', 'pair', 'reviewer', 'silent'])
export const difficultyEnum = pgEnum('difficulty', ['easy', 'medium', 'hard'])
export const eventTypeEnum = pgEnum('event_type', [
  'prompt_read',
  'scratch_edit',
  'code_edit',
  'code_delete',
  'pause',
  'run_tests',
  'coach_ask',
  'coach_reply',
  'hint_unlock',
  'submit',
  'abandon',
  'edge_case_thought',
])

// ── Users ──────────────────────────────────────────────────────
export const users = pgTable('users', {
  id: uuid('id').primaryKey().defaultRandom(),
  handle: text('handle').notNull().unique(),
  email: text('email').notNull().unique(),
  clerkId: text('clerk_id').unique(),
  joinedAt: timestamp('joined_at').notNull().defaultNow(),
  rankIdx: integer('rank_idx').notNull().default(0),
  xp: integer('xp').notNull().default(0),
  streakDays: integer('streak_days').notNull().default(0),
  lastSessionAt: timestamp('last_session_at'),
  settingsJson: jsonb('settings_json').$type<UserSettings>().default({}),
})

// ── Patterns ───────────────────────────────────────────────────
export const patterns = pgTable('patterns', {
  id: uuid('id').primaryKey().defaultRandom(),
  slug: text('slug').notNull().unique(),
  name: text('name').notNull(),
  topic: text('topic').notNull(),
  glyph: text('glyph').notNull(),
  hue: text('hue').notNull(),
  lore: text('lore').notNull(),
  voiceNote: text('voice_note'),
  prereqs: text('prereqs').array().notNull().default([]),
  canonicalProblems: text('canonical_problems').array().notNull().default([]),
  atlasX: real('atlas_x').notNull().default(0),
  atlasY: real('atlas_y').notNull().default(0),
})

// ── User-Pattern (fluency) ─────────────────────────────────────
export const userPatterns = pgTable(
  'user_patterns',
  {
    userId: uuid('user_id')
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    patternId: uuid('pattern_id')
      .notNull()
      .references(() => patterns.id, { onDelete: 'cascade' }),
    fluency: real('fluency').notNull().default(0),
    level: integer('level').notNull().default(0),
    problemsSolved: integer('problems_solved').notNull().default(0),
    lastSeenAt: timestamp('last_seen_at').notNull().defaultNow(),
  },
  (t) => [primaryKey({ columns: [t.userId, t.patternId] })],
)

// ── Problems ───────────────────────────────────────────────────
export const problems = pgTable('problems', {
  id: uuid('id').primaryKey().defaultRandom(),
  patternId: uuid('pattern_id')
    .notNull()
    .references(() => patterns.id),
  source: problemSourceEnum('source').notNull().default('classic'),
  title: text('title').notNull(),
  prompt: text('prompt').notNull(),
  constraints: text('constraints').notNull(),
  examples: jsonb('examples').notNull().$type<ProblemExample[]>(),
  difficulty: difficultyEnum('difficulty').notNull(),
  estMin: integer('est_min').notNull(),
  tags: text('tags').array().notNull().default([]),
  hints: text('hints').array().notNull().default([]),
  canonicalSolutionId: uuid('canonical_solution_id'),
  seedHash: text('seed_hash'),
  generatedByModel: text('generated_by_model'),
  generatedAt: timestamp('generated_at'),
  narrative: text('narrative'),
  createdBy: uuid('created_by').references(() => users.id),
  createdAt: timestamp('created_at').notNull().defaultNow(),
})

// ── Solutions ──────────────────────────────────────────────────
export const solutions = pgTable('solutions', {
  id: uuid('id').primaryKey().defaultRandom(),
  problemId: uuid('problem_id')
    .notNull()
    .references(() => problems.id, { onDelete: 'cascade' }),
  language: text('language').notNull().$type<SupportedLanguage>(),
  code: text('code').notNull(),
  complexityTime: text('complexity_time'),
  complexitySpace: text('complexity_space'),
  tests: jsonb('tests').$type<TestCase[]>(),
  isCanonical: boolean('is_canonical').notNull().default(false),
})

// ── Sessions ───────────────────────────────────────────────────
export const sessions = pgTable('sessions', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id')
    .notNull()
    .references(() => users.id),
  problemId: uuid('problem_id')
    .notNull()
    .references(() => problems.id),
  mode: sessionModeEnum('mode').notNull(),
  startedAt: timestamp('started_at').notNull().defaultNow(),
  endedAt: timestamp('ended_at'),
  status: sessionStatusEnum('status').notNull().default('active'),
  coachStance: coachStanceEnum('coach_stance').notNull().default('socratic'),
  xpEarned: integer('xp_earned').notNull().default(0),
})

// ── Session Events (time-travel log) ──────────────────────────
export const sessionEvents = pgTable(
  'session_events',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    sessionId: uuid('session_id')
      .notNull()
      .references(() => sessions.id, { onDelete: 'cascade' }),
    tMs: integer('t_ms').notNull(),
    type: eventTypeEnum('type').notNull(),
    payload: jsonb('payload').$type<Record<string, unknown>>(),
  },
  (t) => [index('session_events_session_idx').on(t.sessionId)],
)

// ── Test Runs ──────────────────────────────────────────────────
export const testRuns = pgTable('test_runs', {
  id: uuid('id').primaryKey().defaultRandom(),
  sessionId: uuid('session_id')
    .notNull()
    .references(() => sessions.id, { onDelete: 'cascade' }),
  code: text('code').notNull(),
  language: text('language').notNull().$type<SupportedLanguage>(),
  results: jsonb('results').notNull().$type<TestRunResult[]>(),
  runAt: timestamp('run_at').notNull().defaultNow(),
})

// ── Coach Turns ────────────────────────────────────────────────
export const coachTurns = pgTable('coach_turns', {
  id: uuid('id').primaryKey().defaultRandom(),
  sessionId: uuid('session_id')
    .notNull()
    .references(() => sessions.id, { onDelete: 'cascade' }),
  role: text('role').notNull().$type<'user' | 'assistant'>(),
  content: text('content').notNull(),
  model: text('model'),
  tokensIn: integer('tokens_in'),
  tokensOut: integer('tokens_out'),
  latencyMs: integer('latency_ms'),
  costUsd: real('cost_usd'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
})

// ── Debriefs ───────────────────────────────────────────────────
export const debriefs = pgTable('debriefs', {
  id: uuid('id').primaryKey().defaultRandom(),
  sessionId: uuid('session_id')
    .notNull()
    .references(() => sessions.id)
    .unique(),
  summaryJson: jsonb('summary_json').$type<DebriefSummary>(),
  whatWorked: text('what_worked').array().notNull().default([]),
  wobbles: text('wobbles').array().notNull().default([]),
  nextMoves: text('next_moves').array().notNull().default([]),
  timelineJson: jsonb('timeline_json').$type<TimelineFrame[]>(),
  generatedAt: timestamp('generated_at').notNull().defaultNow(),
})

// ── Duels ──────────────────────────────────────────────────────
export const duels = pgTable('duels', {
  id: uuid('id').primaryKey().defaultRandom(),
  problemId: uuid('problem_id')
    .notNull()
    .references(() => problems.id),
  startedAt: timestamp('started_at').notNull().defaultNow(),
  endedAt: timestamp('ended_at'),
  statusJson: jsonb('status_json').$type<DuelStatus>(),
})

export const duelParticipants = pgTable(
  'duel_participants',
  {
    duelId: uuid('duel_id')
      .notNull()
      .references(() => duels.id, { onDelete: 'cascade' }),
    userId: uuid('user_id')
      .notNull()
      .references(() => users.id),
    progress: real('progress').notNull().default(0),
    submittedAt: timestamp('submitted_at'),
    finalCode: text('final_code'),
    won: boolean('won'),
  },
  (t) => [primaryKey({ columns: [t.duelId, t.userId] })],
)

// ── Spaced Repeats (SM-2) ─────────────────────────────────────
export const spacedRepeats = pgTable('spaced_repeats', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id')
    .notNull()
    .references(() => users.id),
  problemId: uuid('problem_id')
    .notNull()
    .references(() => problems.id),
  lastSolvedAt: timestamp('last_solved_at').notNull(),
  nextDueAt: timestamp('next_due_at').notNull(),
  ease: real('ease').notNull().default(2.5),
  intervalDays: real('interval_days').notNull().default(1),
})

// ── Badges ─────────────────────────────────────────────────────
export const badges = pgTable('badges', {
  id: uuid('id').primaryKey().defaultRandom(),
  slug: text('slug').notNull().unique(),
  name: text('name').notNull(),
  glyph: text('glyph').notNull(),
  description: text('description').notNull(),
  predicateRef: text('predicate_ref').notNull(),
})

export const userBadges = pgTable(
  'user_badges',
  {
    userId: uuid('user_id')
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    badgeId: uuid('badge_id')
      .notNull()
      .references(() => badges.id, { onDelete: 'cascade' }),
    awardedAt: timestamp('awarded_at').notNull().defaultNow(),
  },
  (t) => [primaryKey({ columns: [t.userId, t.badgeId] })],
)

// ── Relations ──────────────────────────────────────────────────
export const patternsRelations = relations(patterns, ({ many }) => ({
  problems: many(problems),
  userPatterns: many(userPatterns),
}))

export const problemsRelations = relations(problems, ({ one, many }) => ({
  pattern: one(patterns, { fields: [problems.patternId], references: [patterns.id] }),
  solutions: many(solutions),
  sessions: many(sessions),
}))

export const usersRelations = relations(users, ({ many }) => ({
  sessions: many(sessions),
  userPatterns: many(userPatterns),
  userBadges: many(userBadges),
  spacedRepeats: many(spacedRepeats),
}))

export const sessionsRelations = relations(sessions, ({ one, many }) => ({
  user: one(users, { fields: [sessions.userId], references: [users.id] }),
  problem: one(problems, { fields: [sessions.problemId], references: [problems.id] }),
  events: many(sessionEvents),
  testRuns: many(testRuns),
  coachTurns: many(coachTurns),
  debrief: one(debriefs),
}))

// ── Domain Types ───────────────────────────────────────────────
export type SupportedLanguage = 'python' | 'javascript' | 'typescript' | 'java' | 'go' | 'cpp' | 'rust'

export type UserSettings = {
  theme?: 'terminal' | 'amber' | 'paper'
  accentColor?: string
  scanlines?: boolean
  vignette?: boolean
  language?: SupportedLanguage
  coachModel?: 'fast' | 'smart'
}

export type ProblemExample = {
  input: string
  output: string
  explanation?: string
}

export type TestCase = {
  input: string
  expected: string
  hidden?: boolean
}

export type TestRunResult = {
  passed: boolean
  actual: string
  error?: string
  wallTimeMs: number
  hidden?: boolean
}

export type DebriefSummary = {
  totalTimeMs: number
  codeEdits: number
  pauses: number
  longPauses: number
  coachAsks: number
  testsRun: number
  patternAnnotation: string
}

export type TimelineFrame = {
  tMs: number
  codeDiff: string
  scratchDiff: string
  eventTypes: string[]
}

export type DuelStatus = {
  phase: 'waiting' | 'active' | 'ended'
  winnerId?: string
  challengerId?: string
  durationMin?: number
  spectators?: 'friends' | 'private'
  coachMode?: 'whisper' | 'off'
  chatEnabled?: boolean
  activeAt?: string
}

// ── Inferred Types ─────────────────────────────────────────────
export type User = typeof users.$inferSelect
export type Pattern = typeof patterns.$inferSelect
export type Problem = typeof problems.$inferSelect
export type Solution = typeof solutions.$inferSelect
export type Session = typeof sessions.$inferSelect
export type SessionEvent = typeof sessionEvents.$inferSelect
export type CoachTurn = typeof coachTurns.$inferSelect
export type Debrief = typeof debriefs.$inferSelect
export type Badge = typeof badges.$inferSelect
