'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import {
  BookOpen,
  CheckSquare,
  CornerDownLeft,
  FileText,
  FolderKanban,
  LayoutGrid,
  Search,
  X,
} from 'lucide-react';
import {
  isSubjectThemeKey,
  SUBJECT_THEMES,
} from '@/config/subject-themes';

export interface CommandPaletteItem {
  id: string;
  kind: 'subject' | 'note' | 'topic' | 'core' | 'action';
  title: string;
  subtitle: string;
  badge?: string;
  href: string;
  keywords: string;
}

interface CommandPaletteProps {
  open: boolean;
  onOpenChange: (nextOpen: boolean) => void;
  items: CommandPaletteItem[];
}

const KIND_LABELS: Record<CommandPaletteItem['kind'], string> = {
  action: 'Workspace',
  subject: 'Subject',
  note: 'Study Guide',
  topic: 'Syllabus Topic',
  core: 'Core & IA',
};

function renderKindIcon(kind: CommandPaletteItem['kind']) {
  switch (kind) {
    case 'subject':
      return <BookOpen className="h-4 w-4 shrink-0" aria-hidden="true" />;
    case 'note':
      return <FileText className="h-4 w-4 shrink-0" aria-hidden="true" />;
    case 'topic':
      return <CheckSquare className="h-4 w-4 shrink-0" aria-hidden="true" />;
    case 'core':
      return <FolderKanban className="h-4 w-4 shrink-0" aria-hidden="true" />;
    case 'action':
    default:
      return <LayoutGrid className="h-4 w-4 shrink-0" aria-hidden="true" />;
  }
}

function getItemAccentClass(href: string): string | null {
  const match = href.match(/\/dashboard\/subjects\/([^/?#]+)/);
  if (match?.[1] && isSubjectThemeKey(match[1])) {
    return SUBJECT_THEMES[match[1]].textAccent;
  }
  return null;
}

export function CommandPalette({
  open,
  onOpenChange,
  items,
}: CommandPaletteProps) {
  const router = useRouter();
  const [query, setQuery] = React.useState('');
  const [activeIndex, setActiveIndex] = React.useState(0);
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const listRef = React.useRef<HTMLDivElement | null>(null);
  const previousFocusRef = React.useRef<HTMLElement | null>(null);
  const navigatingRef = React.useRef(false);

  // Global Cmd+K / Ctrl+K shortcut listener
  React.useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        onOpenChange(!open);
      } else if (e.key === 'Escape' && open) {
        e.preventDefault();
        onOpenChange(false);
      }
    };
    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, [open, onOpenChange]);

  // Focus input on open and restore focus when dismissed without navigation
  React.useEffect(() => {
    if (open) {
      navigatingRef.current = false;
      previousFocusRef.current = document.activeElement as HTMLElement | null;
      setQuery('');
      setActiveIndex(0);
      const raf = window.requestAnimationFrame(() => {
        inputRef.current?.focus();
      });
      return () => window.cancelAnimationFrame(raf);
    } else if (!navigatingRef.current && previousFocusRef.current) {
      previousFocusRef.current.focus();
      previousFocusRef.current = null;
    }
  }, [open]);

  const filteredItems = React.useMemo(() => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) {
      const defaults = items.filter(
        (item) => item.kind === 'action' || item.kind === 'subject',
      );
      const featuredNotes = items
        .filter((item) => item.kind === 'note')
        .slice(0, 4);
      const featuredCore = items
        .filter((item) => item.kind === 'core')
        .slice(0, 2);
      return [...defaults, ...featuredNotes, ...featuredCore].slice(0, 14);
    }

    const tokens = trimmed.split(/\s+/).filter(Boolean);
    const matches: CommandPaletteItem[] = [];
    for (const item of items) {
      const haystack =
        `${item.title} ${item.subtitle} ${item.badge ?? ''} ${item.keywords}`.toLowerCase();
      if (tokens.every((token) => haystack.includes(token))) {
        matches.push(item);
        if (matches.length >= 24) break;
      }
    }
    return matches;
  }, [items, query]);

  React.useEffect(() => {
    if (activeIndex >= filteredItems.length) {
      setActiveIndex(0);
    }
  }, [activeIndex, filteredItems.length]);

  React.useEffect(() => {
    if (!open || !listRef.current) return;
    const activeEl = listRef.current.querySelector<HTMLElement>(
      `[data-palette-index="${activeIndex}"]`,
    );
    activeEl?.scrollIntoView({ block: 'nearest' });
  }, [activeIndex, open]);

  const handleSelectItem = (item: CommandPaletteItem) => {
    navigatingRef.current = true;
    onOpenChange(false);
    router.push(item.href);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (filteredItems.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((idx) => (idx + 1) % filteredItems.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex(
        (idx) => (idx - 1 + filteredItems.length) % filteredItems.length,
      );
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const target = filteredItems[activeIndex];
      if (target) {
        handleSelectItem(target);
      }
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center px-4 pt-[10vh] sm:pt-[14vh]"
      role="dialog"
      aria-modal="true"
      aria-label="Quick navigation search"
      data-testid="command-palette"
    >
      {/* Dimmed Frosted Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/25 backdrop-blur-md transition-opacity dark:bg-black/65"
        onClick={() => onOpenChange(false)}
        aria-hidden="true"
      />

      {/* Tahoe Spotlight Glass Dialog */}
      <div className="glass-panel animate-glass-reveal relative z-10 flex w-full max-w-xl flex-col overflow-hidden rounded-3xl">
        {/* Search Header */}
        <div className="flex items-center gap-3 border-b border-black/[0.06] px-4 py-3.5 dark:border-white/[0.08]">
          <Search
            className="h-4 w-4 shrink-0 text-[#525866] dark:text-[#9AA3B2]"
            aria-hidden="true"
          />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActiveIndex(0);
            }}
            onKeyDown={handleInputKeyDown}
            placeholder="Jump to subjects, syllabus codes (A1.1, S1.3), study guides, or Core…"
            aria-label="Search SyllabusOS"
            aria-controls="command-palette-listbox"
            aria-activedescendant={
              filteredItems[activeIndex]
                ? `command-item-${filteredItems[activeIndex].id}`
                : undefined
            }
            className="w-full bg-transparent text-sm text-[#111318] placeholder:text-[#525866] focus:outline-none dark:text-[#F5F7FA] dark:placeholder:text-[#9AA3B2]"
          />
          {query && (
            <button
              type="button"
              onClick={() => {
                setQuery('');
                inputRef.current?.focus();
              }}
              aria-label="Clear search query"
              className="glass-pill inline-flex h-6 shrink-0 cursor-pointer items-center rounded-full px-2 text-[11px] text-[#525866] hover:text-[#111318] dark:text-[#9AA3B2] dark:hover:text-[#F5F7FA]"
            >
              Clear
            </button>
          )}
          <button
            type="button"
            onClick={() => onOpenChange(false)}
            aria-label="Close command palette"
            className="glass-pill inline-flex h-7 w-7 shrink-0 cursor-pointer items-center justify-center rounded-full text-[#525866] hover:text-[#111318] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111318]/25 dark:text-[#9AA3B2] dark:hover:text-[#F5F7FA] dark:focus-visible:ring-[#F5F7FA]/25"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* Results Listbox */}
        <div
          ref={listRef}
          id="command-palette-listbox"
          role="listbox"
          aria-label="Matching workspace items"
          className="max-h-[55vh] overflow-y-auto p-2"
        >
          {filteredItems.length === 0 ? (
            <div className="px-4 py-10 text-center text-xs text-[#525866] dark:text-[#9AA3B2]">
              No matching subjects, syllabus sub-topics, or study guides for
              &ldquo;{query}&rdquo;.
            </div>
          ) : (
            <div className="space-y-1">
              {filteredItems.map((item, idx) => {
                const isSelected = idx === activeIndex;
                const subjectAccent = getItemAccentClass(item.href);

                return (
                  <button
                    key={item.id}
                    id={`command-item-${item.id}`}
                    data-palette-index={idx}
                    type="button"
                    role="option"
                    aria-selected={isSelected}
                    onMouseEnter={() => setActiveIndex(idx)}
                    onClick={() => handleSelectItem(item)}
                    className={`flex w-full cursor-pointer items-center justify-between gap-3 rounded-2xl px-3.5 py-2.5 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111318]/25 dark:focus-visible:ring-[#F5F7FA]/25 ${
                      isSelected
                        ? 'bg-black/[0.06] text-[#111318] dark:bg-white/[0.11] dark:text-[#F5F7FA]'
                        : 'text-[#111318] hover:bg-black/[0.035] dark:text-[#F5F7FA] dark:hover:bg-white/[0.06]'
                    }`}
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl ${
                          isSelected
                            ? 'bg-[#111318] text-white dark:bg-[#F5F7FA] dark:text-[#0B0D12]'
                            : `glass-pill ${subjectAccent ?? 'text-[#525866] dark:text-[#9AA3B2]'}`
                        }`}
                      >
                        {renderKindIcon(item.kind)}
                      </span>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          {item.badge && (
                            <span className="glass-pill shrink-0 rounded-full px-2 py-0.5 font-mono text-[10px] font-semibold text-[#111318] dark:text-[#F5F7FA]">
                              {item.badge}
                            </span>
                          )}
                          <span className="truncate text-sm font-medium">
                            {item.title}
                          </span>
                        </div>
                        <div className="mt-0.5 truncate text-xs text-[#525866] dark:text-[#9AA3B2]">
                          {item.subtitle}
                        </div>
                      </div>
                    </div>

                    <span className="shrink-0 font-mono text-[10.5px] text-[#525866] dark:text-[#9AA3B2]">
                      {KIND_LABELS[item.kind]}
                    </span>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer Shortcuts Strip */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-t border-black/[0.06] bg-white/40 px-4 py-2 text-[11px] text-[#525866] dark:border-white/[0.08] dark:bg-white/[0.03] dark:text-[#9AA3B2]">
          <div className="flex items-center gap-3 font-mono">
            <span>↑↓ navigate</span>
            <span className="inline-flex items-center gap-1">
              <CornerDownLeft className="h-3 w-3" aria-hidden="true" /> open
            </span>
            <span>esc close</span>
          </div>
          <span className="font-mono tabular-nums">
            {filteredItems.length} result{filteredItems.length === 1 ? '' : 's'}
          </span>
        </div>
      </div>
    </div>
  );
}
