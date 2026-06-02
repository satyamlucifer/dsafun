CREATE TYPE "public"."coach_stance" AS ENUM('socratic', 'pair', 'reviewer', 'silent');--> statement-breakpoint
CREATE TYPE "public"."difficulty" AS ENUM('easy', 'medium', 'hard');--> statement-breakpoint
CREATE TYPE "public"."event_type" AS ENUM('prompt_read', 'scratch_edit', 'code_edit', 'code_delete', 'pause', 'run_tests', 'coach_ask', 'coach_reply', 'hint_unlock', 'submit', 'abandon', 'edge_case_thought');--> statement-breakpoint
CREATE TYPE "public"."problem_source" AS ENUM('classic', 'generated', 'shared');--> statement-breakpoint
CREATE TYPE "public"."session_mode" AS ENUM('quick', 'deep', 'marathon');--> statement-breakpoint
CREATE TYPE "public"."session_status" AS ENUM('active', 'submitted', 'abandoned');--> statement-breakpoint
CREATE TABLE "badges" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"slug" text NOT NULL,
	"name" text NOT NULL,
	"glyph" text NOT NULL,
	"description" text NOT NULL,
	"predicate_ref" text NOT NULL,
	CONSTRAINT "badges_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "coach_turns" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"session_id" uuid NOT NULL,
	"role" text NOT NULL,
	"content" text NOT NULL,
	"model" text,
	"tokens_in" integer,
	"tokens_out" integer,
	"latency_ms" integer,
	"cost_usd" real,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "debriefs" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"session_id" uuid NOT NULL,
	"summary_json" jsonb,
	"what_worked" text[] DEFAULT '{}' NOT NULL,
	"wobbles" text[] DEFAULT '{}' NOT NULL,
	"next_moves" text[] DEFAULT '{}' NOT NULL,
	"timeline_json" jsonb,
	"generated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "debriefs_session_id_unique" UNIQUE("session_id")
);
--> statement-breakpoint
CREATE TABLE "duel_participants" (
	"duel_id" uuid NOT NULL,
	"user_id" uuid NOT NULL,
	"progress" real DEFAULT 0 NOT NULL,
	"submitted_at" timestamp,
	"final_code" text,
	"won" boolean,
	CONSTRAINT "duel_participants_duel_id_user_id_pk" PRIMARY KEY("duel_id","user_id")
);
--> statement-breakpoint
CREATE TABLE "duels" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"problem_id" uuid NOT NULL,
	"started_at" timestamp DEFAULT now() NOT NULL,
	"ended_at" timestamp,
	"status_json" jsonb
);
--> statement-breakpoint
CREATE TABLE "patterns" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"slug" text NOT NULL,
	"name" text NOT NULL,
	"topic" text NOT NULL,
	"glyph" text NOT NULL,
	"hue" text NOT NULL,
	"lore" text NOT NULL,
	"voice_note" text,
	"prereqs" text[] DEFAULT '{}' NOT NULL,
	"canonical_problems" text[] DEFAULT '{}' NOT NULL,
	"atlas_x" real DEFAULT 0 NOT NULL,
	"atlas_y" real DEFAULT 0 NOT NULL,
	CONSTRAINT "patterns_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "problems" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"pattern_id" uuid NOT NULL,
	"source" "problem_source" DEFAULT 'classic' NOT NULL,
	"title" text NOT NULL,
	"prompt" text NOT NULL,
	"constraints" text NOT NULL,
	"examples" jsonb NOT NULL,
	"difficulty" "difficulty" NOT NULL,
	"est_min" integer NOT NULL,
	"tags" text[] DEFAULT '{}' NOT NULL,
	"hints" text[] DEFAULT '{}' NOT NULL,
	"canonical_solution_id" uuid,
	"seed_hash" text,
	"generated_by_model" text,
	"generated_at" timestamp,
	"narrative" text,
	"created_by" uuid,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "session_events" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"session_id" uuid NOT NULL,
	"t_ms" integer NOT NULL,
	"type" "event_type" NOT NULL,
	"payload" jsonb
);
--> statement-breakpoint
CREATE TABLE "sessions" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" uuid NOT NULL,
	"problem_id" uuid NOT NULL,
	"mode" "session_mode" NOT NULL,
	"started_at" timestamp DEFAULT now() NOT NULL,
	"ended_at" timestamp,
	"status" "session_status" DEFAULT 'active' NOT NULL,
	"coach_stance" "coach_stance" DEFAULT 'socratic' NOT NULL,
	"xp_earned" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE "solutions" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"problem_id" uuid NOT NULL,
	"language" text NOT NULL,
	"code" text NOT NULL,
	"complexity_time" text,
	"complexity_space" text,
	"tests" jsonb,
	"is_canonical" boolean DEFAULT false NOT NULL
);
--> statement-breakpoint
CREATE TABLE "spaced_repeats" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" uuid NOT NULL,
	"problem_id" uuid NOT NULL,
	"last_solved_at" timestamp NOT NULL,
	"next_due_at" timestamp NOT NULL,
	"ease" real DEFAULT 2.5 NOT NULL,
	"interval_days" real DEFAULT 1 NOT NULL
);
--> statement-breakpoint
CREATE TABLE "test_runs" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"session_id" uuid NOT NULL,
	"code" text NOT NULL,
	"language" text NOT NULL,
	"results" jsonb NOT NULL,
	"run_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "user_badges" (
	"user_id" uuid NOT NULL,
	"badge_id" uuid NOT NULL,
	"awarded_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "user_badges_user_id_badge_id_pk" PRIMARY KEY("user_id","badge_id")
);
--> statement-breakpoint
CREATE TABLE "user_patterns" (
	"user_id" uuid NOT NULL,
	"pattern_id" uuid NOT NULL,
	"fluency" real DEFAULT 0 NOT NULL,
	"level" integer DEFAULT 0 NOT NULL,
	"problems_solved" integer DEFAULT 0 NOT NULL,
	"last_seen_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "user_patterns_user_id_pattern_id_pk" PRIMARY KEY("user_id","pattern_id")
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"handle" text NOT NULL,
	"email" text NOT NULL,
	"clerk_id" text,
	"joined_at" timestamp DEFAULT now() NOT NULL,
	"rank_idx" integer DEFAULT 0 NOT NULL,
	"xp" integer DEFAULT 0 NOT NULL,
	"streak_days" integer DEFAULT 0 NOT NULL,
	"last_session_at" timestamp,
	"settings_json" jsonb DEFAULT '{}'::jsonb,
	CONSTRAINT "users_handle_unique" UNIQUE("handle"),
	CONSTRAINT "users_email_unique" UNIQUE("email"),
	CONSTRAINT "users_clerk_id_unique" UNIQUE("clerk_id")
);
--> statement-breakpoint
ALTER TABLE "coach_turns" ADD CONSTRAINT "coach_turns_session_id_sessions_id_fk" FOREIGN KEY ("session_id") REFERENCES "public"."sessions"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "debriefs" ADD CONSTRAINT "debriefs_session_id_sessions_id_fk" FOREIGN KEY ("session_id") REFERENCES "public"."sessions"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "duel_participants" ADD CONSTRAINT "duel_participants_duel_id_duels_id_fk" FOREIGN KEY ("duel_id") REFERENCES "public"."duels"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "duel_participants" ADD CONSTRAINT "duel_participants_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "duels" ADD CONSTRAINT "duels_problem_id_problems_id_fk" FOREIGN KEY ("problem_id") REFERENCES "public"."problems"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "problems" ADD CONSTRAINT "problems_pattern_id_patterns_id_fk" FOREIGN KEY ("pattern_id") REFERENCES "public"."patterns"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "problems" ADD CONSTRAINT "problems_created_by_users_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "session_events" ADD CONSTRAINT "session_events_session_id_sessions_id_fk" FOREIGN KEY ("session_id") REFERENCES "public"."sessions"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_problem_id_problems_id_fk" FOREIGN KEY ("problem_id") REFERENCES "public"."problems"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "solutions" ADD CONSTRAINT "solutions_problem_id_problems_id_fk" FOREIGN KEY ("problem_id") REFERENCES "public"."problems"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "spaced_repeats" ADD CONSTRAINT "spaced_repeats_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "spaced_repeats" ADD CONSTRAINT "spaced_repeats_problem_id_problems_id_fk" FOREIGN KEY ("problem_id") REFERENCES "public"."problems"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "test_runs" ADD CONSTRAINT "test_runs_session_id_sessions_id_fk" FOREIGN KEY ("session_id") REFERENCES "public"."sessions"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_badges" ADD CONSTRAINT "user_badges_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_badges" ADD CONSTRAINT "user_badges_badge_id_badges_id_fk" FOREIGN KEY ("badge_id") REFERENCES "public"."badges"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_patterns" ADD CONSTRAINT "user_patterns_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_patterns" ADD CONSTRAINT "user_patterns_pattern_id_patterns_id_fk" FOREIGN KEY ("pattern_id") REFERENCES "public"."patterns"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "session_events_session_idx" ON "session_events" USING btree ("session_id");