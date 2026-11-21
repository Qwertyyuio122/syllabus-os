# SyllabusOS

**SyllabusOS** is a Notion-minimalist **IB Diploma Class of 2028** study workspace built with Next.js 15, Supabase (Auth, Postgres with Row-Level Security, and private Storage), KaTeX, interactive SVG/canvas study diagrams, and Google Gemini (`gemini-3.8-flash`).

It covers the six locked Diploma subjects (**Biology HL**, **Chemistry SL**, **Mathematics AA SL**, **History HL**, **English A: Literature HL**, **French B SL**) alongside the **Core & IA Workspace** (**Extended Essay FA2027**, **TOK Essay & Exhibition**, **CAS 2028**, and all six **Subject Internal Assessments**), pre-hydrated on first Google sign-in with official IB syllabi, Classroom materials, read-only Notion study notes, interactive diagrams, markscheme-calibrated questions, and flashcards.

---

## 1. Set Up Supabase Schema & Google OAuth

1. Create a new project in [Supabase](https://supabase.com/dashboard).
2. Open **SQL Editor → New query**, paste and run [`supabase/migrations/001_initial_schema.sql`](./supabase/migrations/001_initial_schema.sql), then run [`supabase/migrations/002_fk_indexes.sql`](./supabase/migrations/002_fk_indexes.sql).
   - This creates all 9 tables (`profiles`, `subjects`, `syllabus_topics`, `course_materials`, `study_notes`, `questions`, `question_attempts`, `flashcards`, `core_projects`) with per-user Row-Level Security (`TO authenticated`), single-column FK indexes, and the private `course-materials` storage bucket.
3. In the Supabase Dashboard, go to **Authentication → Providers → Google**:
   - Enable **Google** and enter your Google Cloud OAuth **Client ID** and **Client Secret**.
   - In Google Cloud Console (**APIs & Services → Credentials**), add Supabase's callback URL (`https://<your-project-ref>.supabase.co/auth/v1/callback`) to **Authorized redirect URIs**.
4. In Supabase **Authentication → URL Configuration**:
   - Set **Site URL** to `http://localhost:3000` for local development (update to your production Vercel URL after deploying).
   - Add both of the following to **Redirect URLs**:
     - `http://localhost:3000/auth/callback`
     - `https://<your-vercel-domain>/auth/callback`

---

## 2. Configure Environment Variables (`.env.local` / Vercel)

Copy `.env.example` to `.env.local` for local development:

```bash
cp .env.example .env.local
```

Set all four required variables in `.env.local` (and in **Vercel → Project Settings → Environment Variables**):

| Variable | Where to find it | Required |
| :--- | :--- | :--- |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase **Project Settings → API → Project URL** | Yes |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase **Project Settings → API → anon / publishable key** | Yes |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase **Project Settings → API → service_role key** (server-only) | Yes |
| `GEMINI_API_KEY` | [Google AI Studio](https://aistudio.google.com/apikey) (`gemini-3.8-flash`) | Yes |

Install dependencies and start the local development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to sign in with Google.

---

## 3. Push to GitHub & Deploy to Vercel

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial SyllabusOS setup"
   git push -u origin main
   ```
   Every push and pull request targeting `main` runs the CI workflow in [`.github/workflows/ci.yml`](./.github/workflows/ci.yml) (`npm ci`, `npm run typecheck`, `npm run lint`, and `npm run build`).

2. **Deploy to Vercel:**
   - Go to [Vercel](https://vercel.com/new) and import your GitHub repository.
   - Keep the default Next.js framework preset (`npm run build`).
   - Add `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`, and `GEMINI_API_KEY` in Vercel's Environment Variables before triggering the deployment.
   - Once deployed, update **Site URL** and **Redirect URLs** in Supabase Authentication with your `https://<your-vercel-domain>/auth/callback` URL so Google OAuth redirects succeed in production.

---

## Verification & Testing

```bash
npm run typecheck   # TypeScript strict check
npm run lint        # ESLint (Next.js core-web-vitals + TypeScript)
npm run build       # Production Next.js build
npm run test:e2e    # Playwright E2E smoke suite (playwright.config.ts)
```
