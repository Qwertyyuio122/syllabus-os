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
  PanelLeftClose,
  PanelLeftOpen,
  Search,
  Sigma,
  X,
} from 'lucide-react';
import { APP_COHORT, APP_NAME, BrandMonogram } from '@/config/brand';
import { getSubjectTheme } from '@/config/subject-themes';
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
  onOpenCommandPalette?: () => void;
}

const SIDEBAR_COLLAPSE_STORAGE_KEY = 'syllabusos-sidebar-collapsed';

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

export function Sidebar({
  profile,
  userEmail,
  subjects,
  onOpenCommandPalette,
}: SidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [collapsed, setCollapsed] = React.useState(false);
  const [signingOut, setSigningOut] = React.useState(false);

  // Sync persisted desktop collapse state post-hydration (prevents SSR mismatch)
  React.useEffect(() => {
    try {
      if (window.localStorage.getItem(SIDEBAR_COLLAPSE_STORAGE_KEY) === 'true') {
        setCollapsed(true);
      }
    } catch {
      // Ignore storage access restrictions
    }
  }, []);

  const toggleCollapsed = () => {
    setCollapsed((prev) => {
      const next = !prev;
      try {
        window.localStorage.setItem(
          SIDEBAR_COLLAPSE_STORAGE_KEY,
          next ? 'true' : 'false',
        );
      } catch {
        // Ignore storage access restrictions
      }
      return next;
    });
  };

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
    'bg-white/95 font-medium text-[#111318] border border-black/[0.08] shadow-[0_3px_12px_-3px_rgba(15,23,42,0.12),inset_0_1px_0_rgba(255,255,255,0.96)] dark:bg-white/[0.14] dark:text-[#F5F7FA] dark:border-white/[0.16] dark:shadow-[0_4px_14px_-3px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.18)]';
  const inactiveNavClass =
    'border border-transparent text-[#525866] hover:bg-black/[0.045] hover:text-[#111318] dark:text-[#9AA3B2] dark:hover:bg-white/[0.07] dark:hover:text-[#F5F7FA]';

  const renderNavContent = (isCompactDesktop: boolean) => (
    <div className="flex h-full flex-col justify-between text-[#111318] dark:text-[#F5F7FA]">
      <div
        className={`flex flex-col overflow-y-auto py-4 ${
          isCompactDesktop ? 'items-center px-2' : 'px-3.5'
        }`}
      >
        {/* Workspace Brand Header + Collapse Control */}
        <div
          className={`mb-4 flex w-full items-center gap-2 ${
            isCompactDesktop ? 'flex-col justify-center' : 'justify-between px-1.5'
          }`}
        >
          <Link
            href="/dashboard"
            title={isCompactDesktop ? `${APP_NAME} — Overview` : undefined}
            className={`flex min-w-0 items-center gap-2.5 rounded-xl py-1 text-[#111318] transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111318]/25 dark:text-[#F5F7FA] ${
              isCompactDesktop ? 'justify-center px-1' : ''
            }`}
          >
            <span className="glass-pill flex h-8 w-8 shrink-0 items-center justify-center rounded-xl">
              <BrandMonogram size={18} className="shrink-0" />
            </span>
            {!isCompactDesktop && (
              <div className="min-w-0">
                <div className="truncate text-sm font-semibold leading-none tracking-tight">
                  {APP_NAME}
                </div>
                <div className="mt-1 truncate text-[10.5px] leading-none text-[#525866] dark:text-[#9AA3B2]">
                  {APP_COHORT}
                </div>
              </div>
            )}
          </Link>

          {/* Mobile Drawer Close */}
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            aria-label="Close navigation menu"
            className="inline-flex h-7 w-7 shrink-0 cursor-pointer items-center justify-center rounded-xl text-[#525866] hover:bg-black/[0.06] hover:text-[#111318] lg:hidden dark:text-[#9AA3B2] dark:hover:bg-white/[0.08] dark:hover:text-[#F5F7FA]"
          >
            <X className="h-4 w-4" />
          </button>

          {/* Desktop Sidebar Collapse/Expand Toggle */}
          <button
            type="button"
            onClick={toggleCollapsed}
            aria-label={isCompactDesktop ? 'Expand sidebar' : 'Collapse sidebar'}
            title={isCompactDesktop ? 'Expand sidebar' : 'Collapse sidebar'}
            className="hidden h-7 w-7 shrink-0 cursor-pointer items-center justify-center rounded-xl text-[#525866] transition-colors hover:bg-black/[0.06] hover:text-[#111318] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111318]/25 lg:inline-flex dark:text-[#9AA3B2] dark:hover:bg-white/[0.08] dark:hover:text-[#F5F7FA] dark:focus-visible:ring-[#F5F7FA]/25"
          >
            {isCompactDesktop ? (
              <PanelLeftOpen className="h-4 w-4" />
            ) : (
              <PanelLeftClose className="h-4 w-4" />
            )}
          </button>
        </div>

        {/* Spotlight Quick Search Pill (⌘K) */}
        {onOpenCommandPalette && (
          <button
            type="button"
            onClick={() => {
              setMobileOpen(false);
              onOpenCommandPalette();
            }}
            aria-label="Open command palette"
            title={
              isCompactDesktop
                ? 'Quick search (⌘K)'
                : 'Quick search across subjects and notes'
            }
            className={`glass-pill glass-interactive mb-4 flex cursor-pointer items-center text-xs text-[#525866] hover:text-[#111318] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111318]/25 dark:text-[#9AA3B2] dark:hover:text-[#F5F7FA] dark:focus-visible:ring-[#F5F7FA]/25 ${
              isCompactDesktop
                ? 'h-9 w-9 justify-center rounded-xl'
                : 'w-full justify-between rounded-xl px-2.5 py-2'
            }`}
          >
            <span className="flex items-center gap-2">
              <Search className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              {!isCompactDesktop && <span>Quick jump…</span>}
            </span>
            {!isCompactDesktop && (
              <kbd className="rounded-md border border-black/[0.08] bg-white/75 px-1.5 py-0.5 font-mono text-[10px] font-medium text-[#525866] dark:border-white/[0.12] dark:bg-white/[0.07] dark:text-[#9AA3B2]">
                ⌘K
              </kbd>
            )}
          </button>
        )}

        {/* Workspace Overview */}
        <div
          className={`w-full space-y-1 ${isCompactDesktop ? 'flex flex-col items-center' : ''}`}
        >
          {!isCompactDesktop && (
            <div className="px-2.5 pb-1 text-[10.5px] font-semibold uppercase tracking-wider text-[#525866] dark:text-[#9AA3B2]">
              Workspace
            </div>
          )}
          <Link
            href="/dashboard"
            title={isCompactDesktop ? 'Overview' : undefined}
            aria-label={isCompactDesktop ? 'Overview' : undefined}
            className={`flex items-center rounded-xl text-[13px] transition-all duration-150 ${
              isCompactDesktop
                ? 'h-9 w-9 justify-center'
                : 'gap-2.5 px-2.5 py-2'
            } ${pathname === '/dashboard' ? activeNavClass : inactiveNavClass}`}
          >
            <LayoutGrid className="h-4 w-4 shrink-0" />
            {!isCompactDesktop && <span className="truncate">Overview</span>}
          </Link>
          <Link
            href="/dashboard/core"
            title={isCompactDesktop ? 'EE · TOK · CAS · IAs' : undefined}
            aria-label={isCompactDesktop ? 'EE · TOK · CAS · IAs' : undefined}
            className={`flex items-center rounded-xl text-[13px] transition-all duration-150 ${
              isCompactDesktop
                ? 'h-9 w-9 justify-center'
                : 'gap-2.5 px-2.5 py-2'
            } ${
              pathname.startsWith('/dashboard/core')
                ? activeNavClass
                : inactiveNavClass
            }`}
          >
            <FolderKanban className="h-4 w-4 shrink-0" />
            {!isCompactDesktop && (
              <span className="truncate">EE · TOK · CAS · IAs</span>
            )}
          </Link>
        </div>

        {/* Diploma Subjects */}
        <div
          className={`mt-5 w-full space-y-1 ${
            isCompactDesktop ? 'flex flex-col items-center' : ''
          }`}
        >
          {!isCompactDesktop && (
            <div className="px-2.5 pb-1 text-[10.5px] font-semibold uppercase tracking-wider text-[#525866] dark:text-[#9AA3B2]">
              IB Subjects
            </div>
          )}
          {subjects.map((subject) => {
            const href = `/dashboard/subjects/${subject.slug}`;
            const isActive =
              pathname === href || pathname.startsWith(`${href}/`);
            const Icon = getSubjectIcon(subject.slug);
            const theme = getSubjectTheme(subject.slug);
            const pct =
              subject.totalCount > 0
                ? Math.round((subject.completedCount / subject.totalCount) * 100)
                : 0;

            return (
              <Link
                key={subject.id}
                href={href}
                title={
                  isCompactDesktop
                    ? `${subject.name} (${subject.level}${subject.totalCount > 0 ? ` · ${pct}%` : ''})`
                    : undefined
                }
                aria-label={isCompactDesktop ? subject.name : undefined}
                className={`group flex flex-col rounded-xl text-[13px] transition-all duration-150 ${
                  isCompactDesktop
                    ? 'h-9 w-9 items-center justify-center'
                    : 'gap-1.5 px-2.5 py-2'
                } ${
                  isActive
                    ? `${activeNavClass} ${theme.tintBg} ${theme.borderTint}`
                    : inactiveNavClass
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="flex min-w-0 items-center gap-2.5">
                    <Icon
                      className={`h-4 w-4 shrink-0 transition-colors ${
                        isActive
                          ? theme.textAccent
                          : 'group-hover:text-[#111318] dark:group-hover:text-[#F5F7FA]'
                      }`}
                    />
                    {!isCompactDesktop && (
                      <span className="truncate">{subject.name}</span>
                    )}
                  </span>
                  {!isCompactDesktop && (
                    <span className="shrink-0 font-mono text-[10.5px] tabular-nums text-[#525866] dark:text-[#9AA3B2]">
                      {subject.level}
                      {subject.totalCount > 0 ? ` · ${pct}%` : ''}
                    </span>
                  )}
                </div>
                {!isCompactDesktop && subject.totalCount > 0 && (
                  <div className="h-0.5 w-full overflow-hidden rounded-full bg-black/[0.07] dark:bg-white/[0.09]">
                    <div
                      className={`h-full rounded-full transition-all duration-300 ${theme.progressBarClass}`}
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
      <div
        className={`border-t border-black/[0.06] dark:border-white/[0.08] ${
          isCompactDesktop
            ? 'flex flex-col items-center gap-2 p-2.5'
            : 'p-3.5'
        }`}
      >
        <div
          className={
            isCompactDesktop
              ? 'flex flex-col items-center gap-1.5'
              : 'mb-2.5 flex items-center justify-between'
          }
        >
          <ThemeToggle compact={isCompactDesktop} />
          <button
            type="button"
            onClick={handleSignOut}
            disabled={signingOut}
            aria-label={isCompactDesktop ? 'Sign out' : undefined}
            title={isCompactDesktop ? 'Sign out' : undefined}
            className={`inline-flex cursor-pointer items-center gap-1.5 rounded-xl text-xs text-[#525866] transition-colors hover:bg-black/[0.05] hover:text-[#111318] disabled:opacity-50 dark:text-[#9AA3B2] dark:hover:bg-white/[0.08] dark:hover:text-[#F5F7FA] ${
              isCompactDesktop ? 'h-8 w-8 justify-center' : 'px-2.5 py-1.5'
            }`}
          >
            <LogOut className="h-3.5 w-3.5" />
            {!isCompactDesktop && (
              <span>{signingOut ? 'Signing out…' : 'Sign out'}</span>
            )}
          </button>
        </div>

        <div
          title={isCompactDesktop ? `${displayName} (${userEmail})` : undefined}
          className={`glass-pill flex items-center rounded-2xl ${
            isCompactDesktop ? 'h-9 w-9 justify-center' : 'gap-2.5 px-2.5 py-2'
          }`}
        >
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#111318] font-mono text-[11px] font-semibold text-white dark:bg-[#F5F7FA] dark:text-[#0B0D12]">
            {initials}
          </div>
          {!isCompactDesktop && (
            <div className="min-w-0">
              <div className="truncate text-xs font-medium text-[#111318] dark:text-[#F5F7FA]">
                {displayName}
              </div>
              <div className="truncate text-[11px] text-[#525866] dark:text-[#9AA3B2]">
                {userEmail}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Header Bar */}
      <header className="glass-floating-bar sticky top-0 z-30 flex h-13 items-center justify-between border-x-0 border-t-0 px-4 lg:hidden">
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation menu"
            className="glass-pill inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-xl text-[#111318] hover:bg-white/95 dark:text-[#F5F7FA] dark:hover:bg-white/[0.12]"
          >
            <Menu className="h-4 w-4" />
          </button>
          <Link
            href="/dashboard"
            className="flex items-center gap-2 text-sm font-semibold tracking-tight text-[#111318] dark:text-[#F5F7FA]"
          >
            <BrandMonogram size={18} />
            <span>{APP_NAME}</span>
          </Link>
        </div>
        <div className="flex items-center gap-1.5">
          {onOpenCommandPalette && (
            <button
              type="button"
              onClick={onOpenCommandPalette}
              aria-label="Open command palette"
              className="glass-pill inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-xl text-[#525866] hover:text-[#111318] dark:text-[#9AA3B2] dark:hover:text-[#F5F7FA]"
            >
              <Search className="h-4 w-4" />
            </button>
          )}
          <ThemeToggle compact />
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div
            className="fixed inset-0 bg-slate-950/30 backdrop-blur-sm dark:bg-black/65"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          <aside className="glass-panel relative z-10 m-2 h-[calc(100%-1rem)] w-[264px] max-w-[85vw] overflow-hidden rounded-2xl">
            {renderNavContent(false)}
          </aside>
        </div>
      )}

      {/* Desktop Floating Collapsible Glass Rail / Icon Dock */}
      <aside
        className={`hidden transition-[width] duration-250 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none lg:sticky lg:top-0 lg:flex lg:h-screen lg:shrink-0 lg:flex-col lg:p-3 lg:pr-0 ${
          collapsed ? 'lg:w-[74px]' : 'lg:w-[252px]'
        }`}
      >
        <div className="glass-panel h-full overflow-hidden rounded-2xl">
          {renderNavContent(collapsed)}
        </div>
      </aside>
    </>
  );
}
