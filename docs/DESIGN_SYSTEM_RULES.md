# SyllabusOS Design System Rules (`docs/DESIGN_SYSTEM_RULES.md`)

> **Visual Direction:** Apple Liquid Glass (iOS 26 / macOS Tahoe) + Subtle Academic Tints  
> **Scope:** Figma MCP code-to-design and design-to-code governance, CSS tokens, typography, surface hierarchy, motion primitives, asset blending, and verification rules.

---

## 1. Design Philosophy & Hard Boundaries

SyllabusOS pairs **Apple iOS 26 / macOS Tahoe Liquid Glass** translucent surfaces with **subtle subject-coded academic tints** and **Notion-grade long-form editorial legibility**.

- **Optical Depth over Flat Chrome:** Elevated controls, cards, and navigation rails use multi-layered backdrop blur, crisp `1px` hairline borders, top-rim specular highlights, and soft ambient shadows that refract the active subject's diffused light field (`LiquidBackdrop`).
- **Editorial Calm:** Study guides, markscheme breakdowns, and rubric views prioritize calm, distraction-free academic clarity (`>= 4.5:1` WCAG AA text contrast in both Light and Dark themes).
- **Hard Product Exclusions (Non-Negotiable):**
  - Never add mascots, XP points, daily streaks, leaderboards, achievement badges, or timed mock-exam builders.
  - Never allow inline editing in `NotionNoteViewer`; study guides are strictly read-only.
  - Never use neon glow washes, saturated full-card gradients, or heavy drop-shadow clutter.

---

## 2. Color Tokens & Subject Accent Palette

### 2.1 Core Semantic Tokens (`src/app/globals.css`)

| Token | Light Mode Value | Dark Mode Value | Usage |
| :--- | :--- | :--- | :--- |
| `--bg-canvas` | `#e9eff7` | `#0b0d12` | Viewport base behind ambient orbs |
| `--bg-surface` | `rgba(255, 255, 255, 0.62)` | `rgba(22, 26, 34, 0.70)` | Primary `.glass-panel` fill |
| `--bg-surface-strong` | `rgba(255, 255, 255, 0.84)` | `rgba(30, 35, 46, 0.88)` | Hover state for `.glass-interactive` |
| `--bg-surface-elevated` | `rgba(255, 255, 255, 0.78)` | `rgba(25, 29, 39, 0.82)` | Sticky `.glass-floating-bar` |
| `--bg-hover` | `rgba(17, 19, 24, 0.055)` | `rgba(255, 255, 255, 0.08)` | Subtle list row & menu hover |
| `--border-hairline` | `rgba(17, 19, 24, 0.085)` | `rgba(255, 255, 255, 0.11)` | Outer `1px` container border |
| `--border-specular` | `rgba(255, 255, 255, 0.98)` | `rgba(255, 255, 255, 0.16)` | Top inner edge highlight (`inset 0 1.5px 0`) |
| `--border-specular-edge` | `rgba(255, 255, 255, 0.76)` | `rgba(255, 255, 255, 0.08)` | Sub-pixel inner perimeter sheen |
| `--ink` | `#111318` | `#f5f7fa` | Primary text & active solid icons |
| `--ink-muted` | `#525866` | `#9aa3b2` | Secondary labels, captions, metadata |
| `--accent-solid` | `#111318` | `#f5f7fa` | Primary CTA fill |
| `--accent-solid-fg` | `#ffffff` | `#0b0d12` | Primary CTA foreground text |

### 2.2 Academic Subject Accent Map (`src/config/subject-themes.ts`)

Every IB Diploma subject and Core workspace maps deterministically via `SUBJECT_THEMES` and `getSubjectTheme(slug)`:

| Key (`SubjectThemeKey`) | Accent Name | Light Accent | Dark Accent | Textbook / Scope Badge | Artwork Path |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `biology-hl` | Emerald | `#065F46` | `#34D399` | `Oxford Biology 2023 · Allott & Mindorff` | `/images/subjects/biology-hl.png` |
| `chemistry-sl` | Cobalt | `#0369A1` | `#38BDF8` | `Oxford Chemistry 2023 · Bylikin` | `/images/subjects/chemistry-sl.png` |
| `math-aa-sl` | Indigo | `#3730A3` | `#818CF8` | `Oxford Math AA SL 2019 · Topics 1–5` | `/images/subjects/math-aa-sl.png` |
| `history-hl` | Amber | `#92400E` | `#FBBF24` | `Pearson 2026 Europe · May 2028 Guide` | `/images/subjects/history-hl.png` |
| `english-lit-hl` | Plum | `#6B21A8` | `#C084FC` | `IB Lit HL · 3 AoEs & 7 Key Concepts` | `/images/subjects/english-lit-hl.png` |
| `french-b-sl` | Sapphire | `#1E40AF` | `#60A5FA` | `Cambridge Le Monde en Français 2018` | `/images/subjects/french-b-sl.png` |
| `core` | Slate | `#1E3A5F` | `#93C5FD` | `FA2027 EE (30m) · TOK · CAS · 6 IAs` | `/images/hero-glass.png` |

> **Rule:** Never apply subject accents as opaque neon blocks. Use `theme.tintBg`, `theme.borderTint`, `theme.textAccent`, and `theme.progressBarClass` for delicate rims, micro-badges, active sidebar icons, SVG progress rings, and ambient refraction orbs (`glowOrbLight`, `glowOrbDark`).

---

## 3. Typography & Reading Measure

Configured via `next/font/google` in `src/app/layout.tsx` and mapped via Tailwind `@theme inline` in `src/app/globals.css`:

- **UI & Default Prose (`--font-sans` → `Inter`):** Navigation, filters, cards, buttons, question stems, and default study guide body (`15.5px`, `leading-[1.74]`).
- **Editorial Headings & Serif Reader Mode (`--font-serif` → `Newsreader`):** Hero headings (`30px–36px`, `tracking-[-0.02em]`, `font-medium`) and optional `Serif` font mode inside `NotionNoteViewer`.
- **Technical & Markscheme Mono (`--font-mono` → `JetBrains Mono`):** Syllabus codes (`A1.1`, `S2.2`), markscheme point codes (`[M1]`, `[A1]`, `[R1]`), word counts, tabular counts (`tabular-nums`), and keyboard shortcuts (`⌘K`).
- **Reading Width:** `NotionNoteViewer` defaults to `Focused` (`max-w-[74ch]`) for prose while letting interactive diagrams span full article width, with a `Full Width` toggle for wide-screen review.
- **Mathematics:** Rendered exclusively via `MarkdownMath` and `InlineKaTeX` (`src/components/notes/MarkdownMath.tsx`) with KaTeX stylesheet imported in `src/app/layout.tsx`.

---

## 4. Liquid Glass Surfaces, Elevation & Motion

### 4.1 Optical Glass Primitives (`src/app/globals.css`)

1. **`.glass-panel`** — Primary cards, hero containers, sidebar rail, command palette dialog, study note article container. Uses `backdrop-filter: blur(26px) saturate(190%) brightness(1.03)` (dark `brightness(1.05)`), `1px solid var(--border-hairline)`, top inner specular rim, and `--glass-shadow`.
2. **`.glass-floating-bar`** — Sticky workspace tab bar and mobile header (`blur(28px) saturate(200%) brightness(1.04)`).
3. **`.glass-surface`** — Nested sub-cards, callouts, filter bars, form inputs, and equation frames (`blur(18px) saturate(175%) brightness(1.02)`).
4. **`.glass-pill`** — Compact pills, secondary buttons, topic badges, and inline action chips (`blur(16px) saturate(175%)`).
5. **`.glass-specular` + `GlassSpotlight`** — Pointer-tracked specular highlight (`--mx`, `--my`) updating directly via DOM custom properties with zero React re-renders.
6. **`.glass-interactive`** — Spring-eased hover elevation and rim brightening (`--spring-ease: cubic-bezier(0.22, 1, 0.36, 1)`).

### 4.2 Ambient Backdrop (`src/components/layout/LiquidBackdrop.tsx`)

- Mounted once in `src/app/layout.tsx` at `z-0` beneath `<div className="relative z-10 min-h-screen">{children}</div>`.
- Reads `usePathname()` via `resolveThemeKeyFromPathname()` to tint the soft ambient orbs behind frosted glass surfaces, overlaid with a radial-masked `.glass-optical-grid` (`48px × 48px` hairline lattice).

### 4.3 Motion Primitives & Accessibility Fallbacks (`src/components/ui/MotionPrimitives.tsx`)

- **`ProgressRing`:** Animated SVG gauge (`stroke-dashoffset` transition over `700ms` `--spring-ease`) using `currentColor` for automatic Light/Dark theme adaptation.
- **`GlassReveal`:** Keyframe entrance (`animate-glass-reveal`) that settles smoothly without hiding elements behind IntersectionObservers.
- **`AnimatedCounter`:** Renders exact SSR/mount values immediately (hydration & E2E safe) and smoothly eases updates when state changes.
- **Reduced Motion & Transparency:**
  - `@media (prefers-reduced-motion: reduce)` disables animations and transitions across `.animate-glass-reveal`, `.animate-diagram-flow`, `.animate-pin-ripple`, `.flashcard-rotator`, `ProgressRing`, and `AnimatedCounter`.
  - `@media (prefers-reduced-transparency: reduce)` disables `backdrop-filter` and replaces translucent surfaces with solid `#ffffff` (light) / `#161a22` (dark).

---

## 5. Component Architecture & File Ownership

| Layer | File Paths | Responsibilities |
| :--- | :--- | :--- |
| **Theme & Brand Config** | `src/config/brand.ts`, `src/config/subject-themes.ts` | App identity (`APP_NAME`, `BrandMonogram`) and subject accent/artwork map (`SUBJECT_THEMES`). |
| **App Shell** | `src/app/layout.tsx`, `src/app/login/page.tsx`, `src/app/dashboard/layout.tsx`, `src/app/dashboard/page.tsx` | Root font/theme setup, `LiquidBackdrop`, Google OAuth login, authenticated shell, overview telemetry & subject grid. |
| **Navigation Chrome** | `src/components/layout/LiquidBackdrop.tsx`, `Sidebar.tsx`, `CommandPalette.tsx`, `ThemeToggle.tsx`, `DashboardChrome.tsx` | Collapsible frosted sidebar rail, `⌘K` Spotlight command palette, system/light/dark toggle. |
| **UI Primitives** | `src/components/ui/{card,badge,button,tabs,select,accordion,checkbox,dialog,GlassSpotlight,MotionPrimitives}.tsx` | Accessible Radix/HTML primitives styled with Liquid Glass tokens. |
| **Subject Workspace** | `src/components/subjects/{SubjectWorkspaceClient,SubjectMotif}.tsx` | Subject hero header, sticky 5-tab bar, guide switcher, `LiquidArtwork`. |
| **Study Notes** | `src/components/notes/{NotionNoteViewer,MarkdownMath}.tsx` | Strictly read-only document renderer with 7 callout variants (`definition`, `examiner_warning`, `key_formula`, `syllabus_link`, `guiding_questions`, `textbook_excerpt`, `tok_nos`), word count + reading time badge, diagram count badge, and collapsible outline. |
| **Interactive Labs** | `src/components/diagrams/InteractiveDiagramPlayer.tsx` + 12 engines | Full-color interactive labs by default (`LabeledAnatomyExplorer`, `StepMechanismPlayer`, `InteractiveFunctionGraph`, `ConceptComparisonMatrix`, `TimelineCausalityExplorer`, `VseprPolarityLab`, `BondingContinuumLab`, `ScientificSimulationLab`, `PrimarySourceAnalyzer`, `LiteraryExtractAnnotator`, `FrenchTextTypeStudio`, `InteractiveWorkedExample`), with optional `Monochrome Ink` print toggle where supported. |
| **Question Bank** | `src/components/qbank/{QuestionBankTab,QuestionCard,EmbeddedTutorChat}.tsx` | Keyword search + multi-filter bar, client-side pagination (`20` per page + `Show All`), LaTeX symbol palette, markscheme breakdown, Socratic tutor. |
| **Flashcards & Core** | `src/components/flashcards/FlashcardsTab.tsx`, `src/components/core-ee-tok/CoreWorkspaceClient.tsx` | 3D glass flip cards (`data-testid="flashcard-surface"`) and EE/TOK/CAS/IA rubric workspace. |

---

## 6. Bespoke Imagery & Dual-Theme Blending

- **Asset Location:** `public/images/hero-glass.png` and `public/images/subjects/{biology-hl,chemistry-sl,math-aa-sl,history-hl,english-lit-hl,french-b-sl}.png`.
- **Visual Constraints:** Generated on bright pearl-white studio backdrops with translucent crystal refraction and **zero embedded text, letters, or watermarks**.
- **Seamless Blending (`LiquidArtwork` in `src/components/subjects/SubjectMotif.tsx`):**
  - **Non-Isolated Compositing:** Keep the positioning wrapper free of `opacity`, `mask-image`, or `z-index` so `<img>` blend modes composite directly against the parent `.glass-panel` surface.
  - **Light Mode:** `brightness-[1.04] contrast-[1.08] mix-blend-multiply` dissolves the bright studio backdrop cleanly into `.glass-panel` surfaces.
  - **Dark Mode:** `dark:invert dark:hue-rotate-180 dark:brightness-[0.9] dark:contrast-[1.35] dark:mix-blend-screen` clamps off-white studio background to transparent while preserving exact subject hue caustics.
  - **Edge Feathering & Loading:** Apply a `radial-gradient(closest-side at 50% 50%, ...)` CSS `mask-image` directly on `<img loading="eager" />` so alpha reaches `0` cleanly inside every aspect ratio without rectangular clipping or lazy-load blanks.

---

## 7. Figma MCP Code-to-Design & Verification Rules

When syncing frames or tokens between Figma (via Figma MCP) and the SyllabusOS repository:

1. **Map Figma Variables to Semantic Tokens First:**
   - Bind background fills to `--bg-canvas`, `--bg-surface`, `--bg-surface-strong`, or `--bg-surface-elevated` rather than raw hex literals.
   - Bind text layers strictly to `--ink` (`#111318` / `#F5F7FA`) and `--ink-muted` (`#525866` / `#9AA3B2`), or subject `textAccent` classes verified at `>= 4.5:1` contrast.
2. **Preserve Border & Specular Stack:**
   - Every glass frame in Figma must include a `1px` hairline stroke (`--border-hairline`) and a `1px` top inner highlight (`--border-specular`) paired with matching background blur (`16px`–`28px`).
3. **Respect Responsive Breakpoints & Overflow:**
   - Desktop shell renders a collapsible rail (`252px` expanded / `74px` collapsed) at `lg` (`1024px+`) and a sticky top bar + slide-over drawer below `lg`.
   - Zero horizontal overflow (`document.documentElement.scrollWidth - window.innerWidth <= 1`) at both `1280×800` and `375×812`.
4. **Preserve Automation Hooks & Accessibility:**
   - Keep `data-testid="flashcard-surface"`, `data-testid="command-palette"`, `Quick jump…`, `Open command palette`, `Collapse sidebar`, `Expand sidebar`, `Open navigation menu`, `Close navigation menu`, and `invisible` on flipped/hidden flashcard faces.
5. **Pre-Commit Verification Gate:**
   - Always run `npm run typecheck`, `npm run lint`, `npm run build`, and `npm run test:e2e` after visual or component changes.
