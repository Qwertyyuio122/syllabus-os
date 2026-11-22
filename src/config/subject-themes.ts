import type { SubjectSlug } from '@/types/database';

export type SubjectThemeKey = SubjectSlug | 'core';

export interface SubjectTheme {
  slug: SubjectThemeKey;
  accentName:
    | 'emerald'
    | 'cobalt'
    | 'indigo'
    | 'amber'
    | 'plum'
    | 'sapphire'
    | 'slate';
  /** High-contrast light mode accent (WCAG AA >= 4.5:1 on #FFFFFF / #EEF2F7) */
  accent: string;
  /** High-contrast dark mode luminous accent (WCAG AA >= 4.5:1 on #0B0D12 / #161A22) */
  accentDark: string;
  /** Subtle translucent fill class for tinted glass chips & badges */
  tintBg: string;
  /** Subtle specular rim border tint class */
  borderTint: string;
  /** Accessible foreground accent class (light + dark) */
  textAccent: string;
  /** Progress bar fill class */
  progressBarClass: string;
  /** Bespoke translucent Apple Liquid Glass artwork path */
  heroImage: string;
  /** Official IB textbook / curriculum edition badge */
  textbookBadge: string;
  /** Primary ambient refraction orb color in light mode */
  glowOrbLight: string;
  /** Primary ambient refraction orb color in dark mode */
  glowOrbDark: string;
  /** Secondary refraction orb color in light mode */
  glowOrbSecondaryLight: string;
  /** Secondary refraction orb color in dark mode */
  glowOrbSecondaryDark: string;
}

export const SUBJECT_THEMES: Record<SubjectThemeKey, SubjectTheme> = {
  'biology-hl': {
    slug: 'biology-hl',
    accentName: 'emerald',
    accent: '#065F46',
    accentDark: '#34D399',
    tintBg: 'bg-emerald-600/[0.08] dark:bg-emerald-400/[0.11]',
    borderTint: 'border-emerald-700/[0.18] dark:border-emerald-300/[0.22]',
    textAccent: 'text-[#065F46] dark:text-[#6EE7B7]',
    progressBarClass: 'bg-[#047857] dark:bg-[#34D399]',
    heroImage: '/images/subjects/biology-hl.webp',
    textbookBadge: 'Oxford Biology 2023 · Allott & Mindorff',
    glowOrbLight: 'rgba(16, 185, 129, 0.22)',
    glowOrbDark: 'rgba(52, 211, 153, 0.11)',
    glowOrbSecondaryLight: 'rgba(20, 184, 166, 0.16)',
    glowOrbSecondaryDark: 'rgba(45, 212, 191, 0.08)',
  },
  'chemistry-sl': {
    slug: 'chemistry-sl',
    accentName: 'cobalt',
    accent: '#0369A1',
    accentDark: '#38BDF8',
    tintBg: 'bg-sky-600/[0.08] dark:bg-sky-400/[0.11]',
    borderTint: 'border-sky-700/[0.18] dark:border-sky-300/[0.22]',
    textAccent: 'text-[#0369A1] dark:text-[#7DD3FC]',
    progressBarClass: 'bg-[#0284C7] dark:bg-[#38BDF8]',
    heroImage: '/images/subjects/chemistry-sl.webp',
    textbookBadge: 'Oxford Chemistry 2023 · Bylikin',
    glowOrbLight: 'rgba(14, 165, 233, 0.22)',
    glowOrbDark: 'rgba(56, 189, 248, 0.11)',
    glowOrbSecondaryLight: 'rgba(37, 99, 235, 0.15)',
    glowOrbSecondaryDark: 'rgba(59, 130, 246, 0.08)',
  },
  'math-aa-sl': {
    slug: 'math-aa-sl',
    accentName: 'indigo',
    accent: '#3730A3',
    accentDark: '#818CF8',
    tintBg: 'bg-indigo-600/[0.08] dark:bg-indigo-400/[0.12]',
    borderTint: 'border-indigo-700/[0.18] dark:border-indigo-300/[0.22]',
    textAccent: 'text-[#3730A3] dark:text-[#A5B4FC]',
    progressBarClass: 'bg-[#4338CA] dark:bg-[#818CF8]',
    heroImage: '/images/subjects/math-aa-sl.webp',
    textbookBadge: 'Oxford Math AA SL 2019 · Topics 1–5',
    glowOrbLight: 'rgba(99, 102, 241, 0.22)',
    glowOrbDark: 'rgba(129, 140, 248, 0.12)',
    glowOrbSecondaryLight: 'rgba(79, 70, 229, 0.15)',
    glowOrbSecondaryDark: 'rgba(99, 102, 241, 0.08)',
  },
  'history-hl': {
    slug: 'history-hl',
    accentName: 'amber',
    accent: '#92400E',
    accentDark: '#FBBF24',
    tintBg: 'bg-amber-600/[0.08] dark:bg-amber-400/[0.11]',
    borderTint: 'border-amber-700/[0.20] dark:border-amber-300/[0.22]',
    textAccent: 'text-[#92400E] dark:text-[#FCD34D]',
    progressBarClass: 'bg-[#B45309] dark:bg-[#FBBF24]',
    heroImage: '/images/subjects/history-hl.webp',
    textbookBadge: 'Pearson 2026 Europe · May 2028 Guide',
    glowOrbLight: 'rgba(217, 119, 6, 0.20)',
    glowOrbDark: 'rgba(251, 191, 36, 0.09)',
    glowOrbSecondaryLight: 'rgba(245, 158, 11, 0.14)',
    glowOrbSecondaryDark: 'rgba(245, 158, 11, 0.07)',
  },
  'english-lit-hl': {
    slug: 'english-lit-hl',
    accentName: 'plum',
    accent: '#6B21A8',
    accentDark: '#C084FC',
    tintBg: 'bg-purple-600/[0.08] dark:bg-purple-400/[0.11]',
    borderTint: 'border-purple-700/[0.18] dark:border-purple-300/[0.22]',
    textAccent: 'text-[#6B21A8] dark:text-[#D8B4FE]',
    progressBarClass: 'bg-[#7E22CE] dark:bg-[#C084FC]',
    heroImage: '/images/subjects/english-lit-hl.webp',
    textbookBadge: 'IB Lit HL · 3 AoEs & 7 Key Concepts',
    glowOrbLight: 'rgba(147, 51, 234, 0.20)',
    glowOrbDark: 'rgba(192, 132, 252, 0.10)',
    glowOrbSecondaryLight: 'rgba(168, 85, 247, 0.15)',
    glowOrbSecondaryDark: 'rgba(167, 139, 250, 0.08)',
  },
  'french-b-sl': {
    slug: 'french-b-sl',
    accentName: 'sapphire',
    accent: '#1E40AF',
    accentDark: '#60A5FA',
    tintBg: 'bg-blue-600/[0.08] dark:bg-blue-400/[0.11]',
    borderTint: 'border-blue-700/[0.18] dark:border-blue-300/[0.22]',
    textAccent: 'text-[#1E40AF] dark:text-[#93C5FD]',
    progressBarClass: 'bg-[#1D4ED8] dark:bg-[#60A5FA]',
    heroImage: '/images/subjects/french-b-sl.webp',
    textbookBadge: 'Cambridge Le Monde en Français 2018',
    glowOrbLight: 'rgba(37, 99, 235, 0.22)',
    glowOrbDark: 'rgba(96, 165, 250, 0.11)',
    glowOrbSecondaryLight: 'rgba(14, 165, 233, 0.16)',
    glowOrbSecondaryDark: 'rgba(56, 189, 248, 0.08)',
  },
  core: {
    slug: 'core',
    accentName: 'slate',
    accent: '#1E3A5F',
    accentDark: '#93C5FD',
    tintBg: 'bg-slate-600/[0.08] dark:bg-slate-300/[0.10]',
    borderTint: 'border-slate-700/[0.16] dark:border-slate-300/[0.20]',
    textAccent: 'text-[#1E3A5F] dark:text-[#BFDBFE]',
    progressBarClass: 'bg-[#111318] dark:bg-[#F5F7FA]',
    heroImage: '/images/hero-glass.webp',
    textbookBadge: 'FA2027 EE (30m) · TOK · CAS · 6 IAs',
    glowOrbLight: 'rgba(56, 189, 248, 0.20)',
    glowOrbDark: 'rgba(59, 130, 246, 0.10)',
    glowOrbSecondaryLight: 'rgba(129, 140, 248, 0.14)',
    glowOrbSecondaryDark: 'rgba(148, 163, 184, 0.07)',
  },
};

export function isSubjectThemeKey(value: string): value is SubjectThemeKey {
  return value in SUBJECT_THEMES;
}

export function getSubjectTheme(slug?: string | null): SubjectTheme {
  if (slug && isSubjectThemeKey(slug)) {
    return SUBJECT_THEMES[slug];
  }
  return SUBJECT_THEMES.core;
}

export function resolveThemeKeyFromPathname(pathname: string): SubjectThemeKey {
  const match = pathname.match(/\/dashboard\/subjects\/([^/?#]+)/);
  if (match?.[1] && isSubjectThemeKey(match[1])) {
    return match[1];
  }
  return 'core';
}
