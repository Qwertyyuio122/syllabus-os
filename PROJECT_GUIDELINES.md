# SyllabusOS Project Guidelines

This document defines the engineering, design, domain, and operational standards for **SyllabusOS**, an IB Diploma Class of 2028 revision platform.

---

## 1. Product & Domain Standards

### IB Diploma Scope
- **Subjects:** Biology HL, Chemistry SL, Mathematics AA SL, History HL, English A: Literature HL, French B SL (`src/data/ib-syllabi/`).
- **Core & IAs:** Extended Essay (FA2027), Theory of Knowledge (Essay & Exhibition), CAS 2028, and all 6 Subject Internal Assessments (`src/data/ib-rubrics/`, `src/components/core-ee-tok/`).
- **Markscheme Rigor:** Questions and AI grading must align with official IB command terms and markscheme codes (`M1`, `A1`, `R1`, etc.).

### Design & UX Principles
- **Notion-Minimalist Aesthetic:** Use the CSS design tokens in `src/app/globals.css` (`--bg-canvas`, `--bg-surface`, `--bg-hover`, `--border-hairline`, `--ink`, `--ink-muted`, `--accent-solid`).
- **No Gamification:** Never introduce mascots, XP, streaks, leaderboards, badges, or timed mock-exam builders.
- **Readable Study Notes:** Notes are read-only, structured with clear headings, callouts, KaTeX math (`$...$` / `$$...$$`), and interactive diagram blocks (`src/components/diagrams/InteractiveDiagramPlayer.tsx`).
- **Centralized Branding:** Update app name, tagline, cohort label, or monogram only in `src/config/brand.ts`.

---

## 2. Backend, Auth & Database Guidelines

### Supabase Authentication
- **Google OAuth only:** Initiated via `supabase.auth.signInWithOAuth({ provider: 'google', options: { redirectTo: `${window.location.origin}/auth/callback` } })`.
- **Server Verification:** Always verify the user on the server with `await supabase.auth.getUser()` (via `src/lib/supabase/server.ts` or `src/lib/supabase/middleware.ts`). Never rely on `getSession()` alone for authorization.
- **First-Login Hydration:** `src/app/auth/callback/route.ts` calls `ensureUserSeeded()` (`src/lib/seed-user.ts`) idempotently to populate the user's subjects, syllabus topics, Classroom materials, notes, questions, flashcards, and core projects.

### Postgres & Storage
- **Schema & Migrations:** Keep schema changes in numbered SQL files under `supabase/migrations/` (`001_initial_schema.sql`, `002_fk_indexes.sql`, ...).
- **RLS & Indexes:** Every user-owned table must have `TO authenticated` Row-Level Security policies checking `auth.uid() = user_id` and single-column indexes on foreign keys.
- **Private Storage:** Uploaded course files belong in the private `course-materials` bucket. Never make this bucket public.

---

## 3. AI & Content Pipelines

### Gemini (`gemini-3.8-flash`)
- All LLM calls must go through `src/lib/gemini/client.ts` (`GEMINI_MODEL = 'gemini-3.8-flash'`).
- Use `generateStructuredJson()` with:
  1. Explicit `ThinkingLevel`
  2. `responseJsonSchema` (for Gemini structured output)
  3. A matching `zodSchema` from `src/lib/gemini/schemas.ts` for runtime validation
- Keep prompt templates isolated in `src/lib/gemini/prompts.ts`.

### Interactive Diagrams & Safe Math
- Supported diagram types (`src/types/diagrams.ts`):
  - `step_mechanism` (`StepMechanismPlayer.tsx`)
  - `labeled_anatomy` (`LabeledAnatomyExplorer.tsx`)
  - `function_graph` (`InteractiveFunctionGraph.tsx`)
  - `timeline_causality` (`TimelineCausalityExplorer.tsx`)
  - `comparison_matrix` (`ConceptComparisonMatrix.tsx`)
- All mathematical expressions plotted on the client must be parsed and evaluated via `src/lib/math/safe-eval.ts`. Never use `eval()`, `Function()`, or unsanitized expression execution.

### File Parsing & Classroom Ingestion
- `pdf-parse` requires `serverExternalPackages: ['pdf-parse']` in `next.config.ts`.
- Offline Google Drive / Classroom seed ingestion is handled by `scripts/ingest-classroom-drive.ts` into `src/data/classroom-seed/`. Temporary downloaded assets in `.tmp-classroom/` are gitignored and excluded from TypeScript and ESLint.

---

## 4. Testing, CI & Deployment

### Local Verification
Run all checks before pushing:
```bash
npm run typecheck
npm run lint
npm run build
npm run test:e2e
```
- Playwright E2E tests (`tests/e2e/smoke.spec.ts`) run against `tests/e2e/mock-supabase.ts` on port `54321` and Next.js on port `3100` (configured in `playwright.config.ts`), so they do not require live Supabase or Gemini credentials.

### Environment Variables
Required in `.env.local` and Vercel Project Settings:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY` (server-only)
- `GEMINI_API_KEY`

### Google OAuth & Vercel Deployment Checklist
1. **Google Cloud Console → Credentials (OAuth 2.0 Client ID):**
   - Authorized redirect URI **must** include `/v1`:
     `https://<your-project-ref>.supabase.co/auth/v1/callback`
   - Authorized JavaScript origins should include your Vercel domain and Supabase URL.
   - If the OAuth consent screen is in **Testing** mode, add allowed Gmail addresses under **Test users**.
2. **Supabase Dashboard → Authentication → URL Configuration:**
   - Set **Site URL** to your production Vercel URL (`https://<your-vercel-domain>`).
   - Add both `http://localhost:3000/auth/callback` and `https://<your-vercel-domain>/auth/callback` to **Redirect URLs**.
