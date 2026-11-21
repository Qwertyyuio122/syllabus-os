'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  Atom,
  BookOpen,
  Compass,
  Dna,
  FolderKanban,
  Languages,
  Landmark,
  LayoutGrid,
  LogOut,
  Menu,
  Sigma,
  X,
} from 'lucide-react';
import { APP_COHORT, APP_NAME, BrandMonogram } from '@/config/brand';
import { createClient } from '@/lib/supabase/client';
import type { ProfileRow, SubjectRow } from '@/types/database';
import { ThemeToggle } from './ThemeToggle';

export interface SidebarSubjectSummary extends SubjectRow {
  completedCount: number;
  totalCount: number;
}

interface SidebarProps {
  profile: ProfileRow | null;
  userEmail: string;
  subjects: SidebarSubjectSummary[];
}

function getSubjectIcon(slug: string) {
  switch (slug) {
    case 'biology-hl':
      return Dna;
    case 'chemistry-sl':
      return Atom;
    case 'math-aa-sl':
      return Sigma;
    case 'history-hl':
      return Landmark;
    case 'english-lit-hl':
      return BookOpen;
    case 'french-b-sl':
      return Languages;
    default:
      return Compass;
  }
}

export function Sidebar({ profile, userEmail, subjects }: SidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [signingOut, setSigningOut] = React.useState(false);

  React.useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  React.useEffect(() => {
    if (!mobileOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen]);

  const handleSignOut = async () => {
    if (signingOut) return;
    setSigningOut(true);
    try {
      const supabase = createClient();
      await supabase.auth.signOut();
      router.push('/login');
      router.refresh();
    } catch {
      setSigningOut(false);
    }
  };

  const displayName =
    profile?.full_name?.trim() ||
    userEmail.split('@')[0] ||
    'IB Diploma Student';

  const initials =
    displayName
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase() ?? '')
      .join('') || 'IB';

  const activeNavClass =
    'bg-white/95 font-medium text-[#1D1D1F] shadow-[0_2px_10px_-3px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.95)] dark:bg-white/[0.13] dark:text-[#F5F5F7] dark:shadow-[0_2px_10px_-3px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.14)]';
  const inactiveNavClass =
    'text-[#6E6E73] hover:bg-black/[0.045] hover:text-[#1D1D1F] dark:text-[#98989D] dark:hover:bg-white/[0.06] dark:hover:text-[#F5F5F7]';

  const navContent = (
    <div className="flex h-full flex-col justify-between text-[#1D1D1F] dark:text-[#F5F5F7]">
      <div className="flex flex-col overflow-y-auto px-3.5 py-4">
        {/* Workspace Brand Header */}
        <div className="mb-5 flex items-center justify-between gap-2 px-1.5">
          <Link
            href="/dashboard"
            className="flex min-w-0 items-center gap-2.5 rounded-xl py-1 text-[#1D1D1F] transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D1D1F]/25 dark:text-[#F5F5F7]"
          >
            <span className="glass-pill flex h-8 w-8 shrink-0 items-center justify-center rounded-xl">
              <BrandMonogram size={18} className="shrink-0" />
            </span>
            <div className="min-w-0">
              <div className="truncate text-sm font-semibold tracking-tight leading-none">
                {APP_NAME}
              </div>
              <div className="mt-1 truncate text-[10.5px] text-[#6E6E73] dark:text-[#98989D] leading-none">
                {APP_COHORT}
              </div>
            </div>
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            aria-label="Close navigation menu"
            className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-xl text-[#6E6E73] hover:bg-black/[0.06] hover:text-[#1D1D1F] lg:hidden dark:text-[#98989D] dark:hover:bg-white/[0.08] dark:hover:text-[#F5F5F7]"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Workspace Overview */}
        <div className="space-y-1">
          <div className="px-2.5 pb-1 text-[10.5px] font-semibold uppercase tracking-wider text-[#6E6E73] dark:text-[#98989D]">
            Workspace
          </div>
          <Link
            href="/dashboard"
            className={`flex items-center gap-2.5 rounded-xl px-2.5 py-2 text-[13px] transition-all duration-150 ${
              pathname === '/dashboard' ? activeNavClass : inactiveNavClass
            }`}
          >
            <LayoutGrid className="h-4 w-4 shrink-0" />
            <span className="truncate">Overview</span>
          </Link>
          <Link
            href="/dashboard/core"
            className={`flex items-center gap-2.5 rounded-xl px-2.5 py-2 text-[13px] transition-all duration-150 ${
              pathname.startsWith('/dashboard/core')
                ? activeNavClass
                : inactiveNavClass
            }`}
          >
            <FolderKanban className="h-4 w-4 shrink-0" />
            <span className="truncate">EE · TOK · CAS · IAs</span>
          </Link>
        </div>

        {/* Diploma Subjects */}
        <div className="mt-6 space-y-1">
          <div className="px-2.5 pb-1 text-[10.5px] font-semibold uppercase tracking-wider text-[#6E6E73] dark:text-[#98989D]">
            IB Subjects
          </div>
          {subjects.map((subject) => {
            const href = `/dashboard/subjects/${subject.slug}`;
            const isActive =
              pathname === href || pathname.startsWith(`${href}/`);
            const Icon = getSubjectIcon(subject.slug);
            const pct =
              subject.totalCount > 0
                ? Math.round((subject.completedCount / subject.totalCount) * 100)
                : 0;

            return (
              <Link
                key={subject.id}
                href={href}
                className={`group flex flex-col gap-1.5 rounded-xl px-2.5 py-2 text-[13px] transition-all duration-150 ${
                  isActive ? activeNavClass : inactiveNavClass
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="flex min-w-0 items-center gap-2.5">
                    <Icon className="h-4 w-4 shrink-0" />
                    <span className="truncate">{subject.name}</span>
                  </span>
                  <span className="shrink-0 font-mono text-[10.5px] text-[#6E6E73] dark:text-[#98989D]">
                    {subject.level}
                    {subject.totalCount > 0 ? ` · ${pct}%` : ''}
                  </span>
                </div>
                {subject.totalCount > 0 && (
                  <div className="h-0.5 w-full overflow-hidden rounded-full bg-black/[0.06] dark:bg-white/[0.08]">
                    <div
                      className="h-full rounded-full bg-[#1D1D1F]/65 transition-all duration-300 dark:bg-[#F5F5F7]/70"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                )}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Footer: Theme & Account */}
      <div className="border-t border-black/[0.06] p-3.5 dark:border-white/[0.08]">
        <div className="mb-2.5 flex items-center justify-between">
          <ThemeToggle />
          <button
            type="button"
            onClick={handleSignOut}
            disabled={signingOut}
            className="inline-flex items-center gap-1.5 rounded-xl px-2.5 py-1.5 text-xs text-[#6E6E73] transition-colors hover:bg-black/[0.05] hover:text-[#1D1D1F] cursor-pointer disabled:opacity-50 dark:text-[#98989D] dark:hover:bg-white/[0.08] dark:hover:text-[#F5F5F7]"
          >
            <LogOut className="h-3.5 w-3.5" />
            <span>{signingOut ? 'Signing out…' : 'Sign out'}</span>
          </button>
        </div>
        <div className="glass-pill flex items-center gap-2.5 rounded-2xl px-2.5 py-2">
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#1D1D1F] font-mono text-[11px] font-semibold text-white dark:bg-[#F5F5F7] dark:text-[#111113]">
            {initials}
          </div>
          <div className="min-w-0">
            <div className="truncate text-xs font-medium text-[#1D1D1F] dark:text-[#F5F5F7]">
              {displayName}
            </div>
            <div className="truncate text-[11px] text-[#6E6E73] dark:text-[#98989D]">
              {userEmail}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Header Bar */}
      <header className="glass-surface sticky top-0 z-30 flex h-13 items-center justify-between border-x-0 border-t-0 px-4 lg:hidden">
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation menu"
            className="glass-pill inline-flex h-8 w-8 items-center justify-center rounded-xl text-[#1D1D1F] hover:bg-white/95 cursor-pointer dark:text-[#F5F5F7] dark:hover:bg-white/[0.12]"
          >
            <Menu className="h-4 w-4" />
          </button>
          <Link
            href="/dashboard"
            className="flex items-center gap-2 text-sm font-semibold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7]"
          >
            <BrandMonogram size={18} />
            <span>{APP_NAME}</span>
          </Link>
        </div>
        <ThemeToggle compact />
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div
            className="fixed inset-0 bg-black/25 backdrop-blur-sm dark:bg-black/60"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          <aside className="glass-panel relative z-10 m-2 h-[calc(100%-1rem)] w-[264px] max-w-[85vw] overflow-hidden rounded-2xl">
            {navContent}
          </aside>
        </div>
      )}

      {/* Desktop Floating Glass Rail */}
      <aside className="hidden lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[252px] lg:shrink-0 lg:flex-col lg:p-3 lg:pr-0">
        <div className="glass-panel h-full overflow-hidden rounded-2xl">
          {navContent}
        </div>
      </aside>
    </>
  );
}
