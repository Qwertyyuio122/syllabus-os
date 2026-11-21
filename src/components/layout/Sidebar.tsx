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

  const initials = displayName
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('') || 'IB';

  const navContent = (
    <div className="flex h-full flex-col justify-between bg-[#FBFBFA] text-[#37352F] dark:bg-[#202020] dark:text-[#EBEBEB]">
      <div className="flex flex-col overflow-y-auto px-3 py-4">
        {/* Workspace Brand Header */}
        <div className="mb-4 flex items-center justify-between px-2">
          <Link
            href="/dashboard"
            className="flex items-center gap-2.5 rounded-md py-1 text-[#37352F] transition-colors hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#37352F]/30 dark:text-[#EBEBEB]"
          >
            <BrandMonogram size={20} className="shrink-0" />
            <div className="min-w-0">
              <div className="truncate text-sm font-semibold tracking-tight leading-none">
                {APP_NAME}
              </div>
              <div className="mt-1 truncate text-[11px] text-[#787774] dark:text-[#9B9A97] leading-none">
                {APP_COHORT}
              </div>
            </div>
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            aria-label="Close navigation menu"
            className="inline-flex h-7 w-7 items-center justify-center rounded-md text-[#787774] hover:bg-[#F1F1EF] hover:text-[#37352F] lg:hidden dark:text-[#9B9A97] dark:hover:bg-[#2A2A2A] dark:hover:text-[#EBEBEB]"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Workspace Overview */}
        <div className="space-y-0.5">
          <div className="px-2 pb-1 text-[11px] font-medium uppercase tracking-wider text-[#787774] dark:text-[#9B9A97]">
            Workspace
          </div>
          <Link
            href="/dashboard"
            className={`flex items-center gap-2.5 rounded-md px-2.5 py-1.5 text-sm transition-colors ${
              pathname === '/dashboard'
                ? 'bg-[#F1F1EF] font-medium text-[#37352F] dark:bg-[#2A2A2A] dark:text-[#EBEBEB]'
                : 'text-[#787774] hover:bg-[#F1F1EF] hover:text-[#37352F] dark:text-[#9B9A97] dark:hover:bg-[#2A2A2A] dark:hover:text-[#EBEBEB]'
            }`}
          >
            <LayoutGrid className="h-4 w-4 shrink-0" />
            <span className="truncate">Overview</span>
          </Link>
          <Link
            href="/dashboard/core"
            className={`flex items-center gap-2.5 rounded-md px-2.5 py-1.5 text-sm transition-colors ${
              pathname.startsWith('/dashboard/core')
                ? 'bg-[#F1F1EF] font-medium text-[#37352F] dark:bg-[#2A2A2A] dark:text-[#EBEBEB]'
                : 'text-[#787774] hover:bg-[#F1F1EF] hover:text-[#37352F] dark:text-[#9B9A97] dark:hover:bg-[#2A2A2A] dark:hover:text-[#EBEBEB]'
            }`}
          >
            <FolderKanban className="h-4 w-4 shrink-0" />
            <span className="truncate">EE · TOK · CAS · IAs</span>
          </Link>
        </div>

        {/* Diploma Subjects */}
        <div className="mt-5 space-y-0.5">
          <div className="px-2 pb-1 text-[11px] font-medium uppercase tracking-wider text-[#787774] dark:text-[#9B9A97]">
            IB Subjects
          </div>
          {subjects.map((subject) => {
            const href = `/dashboard/subjects/${subject.slug}`;
            const isActive = pathname === href || pathname.startsWith(`${href}/`);
            const Icon = getSubjectIcon(subject.slug);
            const pct =
              subject.totalCount > 0
                ? Math.round((subject.completedCount / subject.totalCount) * 100)
                : 0;

            return (
              <Link
                key={subject.id}
                href={href}
                className={`group flex items-center justify-between gap-2 rounded-md px-2.5 py-1.5 text-sm transition-colors ${
                  isActive
                    ? 'bg-[#F1F1EF] font-medium text-[#37352F] dark:bg-[#2A2A2A] dark:text-[#EBEBEB]'
                    : 'text-[#787774] hover:bg-[#F1F1EF] hover:text-[#37352F] dark:text-[#9B9A97] dark:hover:bg-[#2A2A2A] dark:hover:text-[#EBEBEB]'
                }`}
              >
                <span className="flex min-w-0 items-center gap-2.5">
                  <Icon className="h-4 w-4 shrink-0" />
                  <span className="truncate">{subject.name}</span>
                </span>
                <span className="shrink-0 font-mono text-[11px] text-[#787774] dark:text-[#9B9A97]">
                  {subject.level}
                  {subject.totalCount > 0 ? ` · ${pct}%` : ''}
                </span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Footer: Theme & Account */}
      <div className="border-t border-[#E6E6E4] p-3 dark:border-[#2E2E2E]">
        <div className="mb-2 flex items-center justify-between">
          <ThemeToggle />
          <button
            type="button"
            onClick={handleSignOut}
            disabled={signingOut}
            className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-xs text-[#787774] transition-colors hover:bg-[#F1F1EF] hover:text-[#37352F] cursor-pointer disabled:opacity-50 dark:text-[#9B9A97] dark:hover:bg-[#2A2A2A] dark:hover:text-[#EBEBEB]"
          >
            <LogOut className="h-3.5 w-3.5" />
            <span>{signingOut ? 'Signing out…' : 'Sign out'}</span>
          </button>
        </div>
        <div className="flex items-center gap-2.5 rounded-md px-1.5 py-1">
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-[#E6E6E4] bg-white font-mono text-xs font-medium text-[#37352F] dark:border-[#2E2E2E] dark:bg-[#191919] dark:text-[#EBEBEB]">
            {initials}
          </div>
          <div className="min-w-0">
            <div className="truncate text-xs font-medium text-[#37352F] dark:text-[#EBEBEB]">
              {displayName}
            </div>
            <div className="truncate text-[11px] text-[#787774] dark:text-[#9B9A97]">
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
      <header className="sticky top-0 z-30 flex h-12 items-center justify-between border-b border-[#E6E6E4] bg-white px-4 lg:hidden dark:border-[#2E2E2E] dark:bg-[#191919]">
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation menu"
            className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-[#E6E6E4] text-[#37352F] hover:bg-[#F1F1EF] cursor-pointer dark:border-[#2E2E2E] dark:text-[#EBEBEB] dark:hover:bg-[#2A2A2A]"
          >
            <Menu className="h-4 w-4" />
          </button>
          <Link
            href="/dashboard"
            className="flex items-center gap-2 text-sm font-semibold tracking-tight text-[#37352F] dark:text-[#EBEBEB]"
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
            className="fixed inset-0 bg-black/35 dark:bg-black/60"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          <aside className="relative z-10 h-full w-[260px] max-w-[85vw] border-r border-[#E6E6E4] bg-[#FBFBFA] dark:border-[#2E2E2E] dark:bg-[#202020]">
            {navContent}
          </aside>
        </div>
      )}

      {/* Desktop Fixed-Width Rail */}
      <aside className="hidden lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[240px] lg:shrink-0 lg:flex-col lg:border-r lg:border-[#E6E6E4] dark:lg:border-[#2E2E2E]">
        {navContent}
      </aside>
    </>
  );
}
