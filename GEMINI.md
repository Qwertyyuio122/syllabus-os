# SyllabusOS — Project Instructions (`GEMINI.md`)

**SyllabusOS** is an **Apple Liquid Glass + Subtle Academic Tints** **IB Diploma Class of 2028 (May 2028)** study and revision workspace built with Next.js 15 (App Router), React 19, TypeScript (strict), Tailwind CSS v4, Supabase (Auth, Postgres with RLS, private Storage), KaTeX, and Google Gemini (`gemini-3.8-flash`).

---

## 1. Core Product Scope & Hard Constraints

- **Locked Subjects (Class of 2028):**
  - `Biology HL`, `Chemistry SL`, `Mathematics AA SL`, `History HL`, `English A: Literature HL`, `French B SL`
- **Core & IA Workspace:**
  - `Extended Essay FA2027`, `TOK Essay & Exhibition`, `CAS 2028`, and all six Subject Internal Assessments (`core_projects`).
- **Hard Exclusions (Do NOT add):**
  - No mascot, no XP points, no daily streaks, no leaderboards, no badges/achievements, and no timed mock-exam builder.
- **Visual & Brand System (Apple Liquid Glass + Subtle Academic Tints):**
  - Translucent frosted glass architecture defined in `src/app/globals.css` (`#E9EFF7` light ambient canvas with `rgba(255, 255, 255, 0.62)` glass panels; `#0B0D12` dark obsidian-sapphire canvas with `rgba(22, 26, 34, 0.70)` glass panels; `blur(26px) saturate(190%) brightness(1.03)`, `1.5px` specular top rims, and layered soft shadows).
  - WCAG AA >= 4.5:1 ink tokens (`#111318` / `#525866` light; `#F5F7FA` / `#9AA3B2` dark).
  - Subject-specific academic accent tints (`emerald`, `cobalt`, `indigo`, `amber`, `plum`, `sapphire`, `slate`) and bespoke studio glass artwork (`public/images/hero-glass.png`, `public/images/subjects/*.png`) live in `src/config/subject-themes.ts` and power `LiquidBackdrop` (`src/components/layout/LiquidBackdrop.tsx`).
  - Zero neon clutter, zero gamified badges; full `prefers-reduced-motion` and `prefers-reduced-transparency` fallbacks.
  - Typography: `Inter` for UI/prose, `Newsreader` for editorial headings & optional serif reader mode, `JetBrains Mono` for IB syllabus codes, command terms, LaTeX, and markscheme codes (`M1`, `A1`, `R1`).
  - Centralized branding lives in `src/config/brand.ts` (`APP_NAME`, `APP_TAGLINE`, `APP_COHORT`, `BrandMonogram`).
  - Complete design token and Figma MCP governance rules live in `docs/DESIGN_SYSTEM_RULES.md`.

---

## 2. Architecture & Key Directories

- `src/app/` — Next.js App Router pages and API routes:
  - `login/page.tsx` — Google OAuth sign-in
  - `auth/callback/route.ts` — Exchanges OAuth code for session and runs `ensureUserSeeded()`
  - `dashboard/page.tsx`, `dashboard/subjects/[slug]/page.tsx`, `dashboard/core/page.tsx`
  - `api/generate/suite/route.ts` — Generates notes, diagrams, questions, and flashcards from uploaded/synced materials
  - `api/grade/question/route.ts`, `api/grade/core-project/route.ts` — IB markscheme & rubric grading
  - `api/tutor/chat/route.ts` — Embedded Socratic IB tutor
  - `api/materials/upload/route.ts`, `api/materials/signed-upload/route.ts`, `api/materials/[id]/route.ts` — Private storage & text extraction
- `src/lib/` — Shared server/client utilities:
  - `supabase/client.ts`, `supabase/server.ts`, `supabase/middleware.ts`
  - `gemini/client.ts` (`GEMINI_MODEL = 'gemini-3.8-flash'`, `generateStructuredJson`), `gemini/prompts.ts`, `gemini/schemas.ts`
  - `math/safe-eval.ts` — AST-based math expression evaluator (never use `eval` or `new Function`)
  - `parsers/extract-text.ts` — PDF/DOCX/text extraction (`pdf-parse` is listed in `next.config.ts` `serverExternalPackages`)
  - `seed-user.ts` — First-login hydration of subjects, syllabus topics, Classroom materials, notes, questions, flashcards, and core projects
- `src/data/` — Static IB syllabi (`ib-syllabi/`), IB Core/IA rubrics (`ib-rubrics/`), and Google Classroom seed packs (`classroom-seed/`).
- `src/components/` — Feature UI (`layout/`, `syllabus/`, `notes/`, `diagrams/`, `qbank/`, `flashcards/`, `materials/`, `core-ee-tok/`, `subjects/`, `ui/`).
- `docs/` — Design system specifications (`DESIGN_SYSTEM_RULES.md`).
- `public/images/` — Bespoke Apple Liquid Glass studio artwork (`hero-glass.png`, `subjects/*.png`).
- `supabase/migrations/` — `001_initial_schema.sql` and `002_fk_indexes.sql`.
- `tests/e2e/` — Playwright E2E suite (`smoke.spec.ts`) backed by `mock-supabase.ts`.

---

## 3. Non-Negotiable Engineering Rules

1. **Auth & Middleware:**
   - All `/dashboard/**` and `/api/**` routes are protected by `src/middleware.ts` → `updateSession()` (`src/lib/supabase/middleware.ts`) using `@supabase/ssr` `getAll`/`setAll` and `await supabase.auth.getUser()`. Never trust `getSession()` alone on the server.
   - Keep `SUPABASE_SERVICE_ROLE_KEY` strictly server-side; never import or expose it in client components.
2. **Database & RLS:**
   - All 9 tables (`profiles`, `subjects`, `syllabus_topics`, `course_materials`, `study_notes`, `questions`, `question_attempts`, `flashcards`, `core_projects`) enforce per-user Row-Level Security (`TO authenticated`). Always scope queries/mutations with `user_id` and respect the private `course-materials` bucket.
3. **Gemini AI Calls:**
   - Use `generateStructuredJson` in `src/lib/gemini/client.ts` with `GEMINI_MODEL` (`gemini-3.8-flash`), `ThinkingLevel`, JSON Schema, and Zod validation (`src/lib/gemini/schemas.ts`).
   - Do not bypass Zod validation or hardcode different model names outside `src/lib/gemini/client.ts`.
4. **Math & Diagrams:**
   - Study notes are **read-only** Notion-style documents rendered via `NotionNoteViewer` and `MarkdownMath` (KaTeX + `remark-math` + `rehype-katex`), supporting callouts (`definition`, `examiner_warning`, `key_formula`, `syllabus_link`, `guiding_questions`, `textbook_excerpt`, `tok_nos`).
   - Interactive diagrams (`src/components/diagrams/InteractiveDiagramPlayer.tsx`) use crisp full-color scientific rendering by default (with optional Monochrome Ink print toggle where applicable).
   - Math graphing (`InteractiveFunctionGraph`) must evaluate expressions solely through `src/lib/math/safe-eval.ts`.
5. **TypeScript & Code Hygiene:**
   - `tsconfig.json` has `"strict": true`. Keep `allowJs: false` and `@/*` path aliases.
   - Never commit `.env.local` or `.tmp-classroom/` artifacts.

---

## 4. Verification Commands

Run these before considering any change complete:

```bash
npm run typecheck   # tsc --noEmit --pretty false
npm run lint        # eslint .
npm run build       # next build
npm run test:e2e    # playwright test (uses tests/e2e/mock-supabase.ts)
```

CI (`.github/workflows/ci.yml`) runs `typecheck`, `lint`, and `build` on every push and PR to `main`.
