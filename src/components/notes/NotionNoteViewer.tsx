'use client';

import React, { useEffect, useMemo, useState } from 'react';
import {
  AlertTriangle,
  BookMarked,
  BookOpen,
  Clock,
  Compass,
  FileText,
  HelpCircle,
  Layers,
  List,
  Maximize2,
  Minimize2,
  Sigma,
  Sparkles,
} from 'lucide-react';
import { getSubjectTheme } from '@/config/subject-themes';
import type { StudyNoteRow } from '@/types/database';
import {
  StudyNoteBlockSchema,
  type StudyNoteBlock,
} from '@/types/diagrams';
import { InlineKaTeX, MarkdownMath } from './MarkdownMath';
import { InteractiveDiagramPlayer } from '@/components/diagrams/InteractiveDiagramPlayer';

export interface NotionNoteViewerProps {
  note: StudyNoteRow;
  topicLabel?: string;
  subjectSlug?: string;
}

interface TocItem {
  id: string;
  level: 2 | 3;
  text: string;
  blockIndex: number;
}

function slugifyHeading(text: string): string {
  const slug = text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
  return slug || 'section';
}

function countTextWords(text: string | null | undefined): number {
  if (!text) return 0;
  const trimmed = text.trim();
  if (!trimmed) return 0;
  return trimmed.split(/\s+/).length;
}

type CalloutVariant = Extract<StudyNoteBlock, { type: 'callout' }>['variant'];

const CALLOUT_CONFIG: Record<
  CalloutVariant,
  {
    label: string;
    Icon: React.ComponentType<{ className?: string }>;
    borderClass: string;
    tintClass: string;
    iconAccentClass: string;
  }
> = {
  definition: {
    label: 'Definition',
    Icon: BookOpen,
    borderClass: 'border-l-slate-500 dark:border-l-slate-400',
    tintClass: '',
    iconAccentClass: 'text-[#111318] dark:text-[#F5F7FA]',
  },
  examiner_warning: {
    label: 'Examiner Warning',
    Icon: AlertTriangle,
    borderClass: 'border-l-amber-700 dark:border-l-amber-400',
    tintClass: 'bg-amber-500/[0.045] dark:bg-amber-400/[0.06]',
    iconAccentClass: 'text-[#92400E] dark:text-[#FCD34D]',
  },
  key_formula: {
    label: 'Key Formula',
    Icon: Sigma,
    borderClass: 'border-l-indigo-700 dark:border-l-indigo-400',
    tintClass: 'bg-indigo-500/[0.04] dark:bg-indigo-400/[0.06]',
    iconAccentClass: 'text-[#3730A3] dark:text-[#A5B4FC]',
  },
  syllabus_link: {
    label: 'Syllabus Link',
    Icon: Compass,
    borderClass: 'border-l-sky-700 dark:border-l-sky-400',
    tintClass: 'bg-sky-500/[0.04] dark:bg-sky-400/[0.06]',
    iconAccentClass: 'text-[#0369A1] dark:text-[#7DD3FC]',
  },
  guiding_questions: {
    label: 'IB Guiding Questions',
    Icon: HelpCircle,
    borderClass: 'border-l-blue-700 dark:border-l-blue-400',
    tintClass: 'bg-blue-500/[0.045] dark:bg-blue-400/[0.06]',
    iconAccentClass: 'text-[#1E40AF] dark:text-[#93C5FD]',
  },
  textbook_excerpt: {
    label: 'Textbook Reference',
    Icon: BookMarked,
    borderClass: 'border-l-emerald-700 dark:border-l-emerald-400',
    tintClass: 'bg-emerald-500/[0.045] dark:bg-emerald-400/[0.06]',
    iconAccentClass: 'text-[#065F46] dark:text-[#6EE7B7]',
  },
  tok_nos: {
    label: 'TOK & Nature of Science',
    Icon: Sparkles,
    borderClass: 'border-l-purple-700 dark:border-l-purple-400',
    tintClass: 'bg-purple-500/[0.045] dark:bg-purple-400/[0.06]',
    iconAccentClass: 'text-[#6B21A8] dark:text-[#D8B4FE]',
  },
};

export function NotionNoteViewer({
  note,
  topicLabel,
  subjectSlug,
}: NotionNoteViewerProps) {
  const theme = getSubjectTheme(subjectSlug);
  const [fontMode, setFontMode] = useState<'sans' | 'serif'>('sans');
  const [widthMode, setWidthMode] = useState<'focused' | 'full'>('focused');
  const [outlineOpen, setOutlineOpen] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);
  const articleRef = React.useRef<HTMLElement | null>(null);

  const safeBlocks = useMemo(() => {
    if (!Array.isArray(note.blocks)) return [];
    const valid: StudyNoteBlock[] = [];
    for (const rawBlock of note.blocks) {
      const parsed = StudyNoteBlockSchema.safeParse(rawBlock);
      if (parsed.success) {
        valid.push(parsed.data);
      }
    }
    return valid;
  }, [note.blocks]);

  const { wordCount, readingMinutes, diagramCount } = useMemo(() => {
    let words = countTextWords(note.title) + countTextWords(note.summary);
    let diagrams = 0;

    for (const block of safeBlocks) {
      switch (block.type) {
        case 'heading':
          words += countTextWords(block.text);
          break;
        case 'paragraph':
          words += countTextWords(block.markdown);
          break;
        case 'callout':
          words +=
            countTextWords(block.title) + countTextWords(block.markdown);
          break;
        case 'key_terms':
          for (const item of block.items) {
            words +=
              countTextWords(item.term) +
              countTextWords(item.definitionMarkdown);
          }
          break;
        case 'equation':
          words += countTextWords(block.caption);
          if (block.variableLegend) {
            for (const v of block.variableLegend) {
              words += countTextWords(v.meaning);
            }
          }
          break;
        case 'playable_diagram':
          diagrams += 1;
          words +=
            countTextWords(block.spec.title) +
            countTextWords(block.spec.caption);
          break;
      }
    }

    const minutes = Math.max(1, Math.ceil(words / 210));
    return { wordCount: words, readingMinutes: minutes, diagramCount: diagrams };
  }, [note.title, note.summary, safeBlocks]);

  const { tocItems, headingIdByBlockIndex } = useMemo(() => {
    const items: TocItem[] = [];
    const idMap = new Map<number, string>();
    const counts = new Map<string, number>();

    safeBlocks.forEach((block, blockIndex) => {
      if (block.type === 'heading') {
        const base = slugifyHeading(block.text);
        const seen = (counts.get(base) ?? 0) + 1;
        counts.set(base, seen);
        const id = seen === 1 ? base : `${base}-${seen}`;
        items.push({
          id,
          level: block.level,
          text: block.text,
          blockIndex,
        });
        idMap.set(blockIndex, id);
      }
    });

    return { tocItems: items, headingIdByBlockIndex: idMap };
  }, [safeBlocks]);

  const [activeHeadingId, setActiveHeadingId] = useState<string>(
    tocItems[0]?.id ?? '',
  );

  useEffect(() => {
    setActiveHeadingId(tocItems[0]?.id ?? '');
    setReadingProgress(0);
  }, [note.id, tocItems]);

  // Smooth scroll-linked reading progress across the active study guide
  useEffect(() => {
    let rafId: number | null = null;
    const computeProgress = () => {
      rafId = null;
      const el = articleRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const totalScrollable = el.offsetHeight - window.innerHeight * 0.65;
      if (totalScrollable <= 40) {
        setReadingProgress(100);
        return;
      }
      const scrolledPastTop = Math.max(0, 120 - rect.top);
      const pct = Math.max(
        0,
        Math.min(100, Math.round((scrolledPastTop / totalScrollable) * 100)),
      );
      setReadingProgress(pct);
    };

    const onScrollOrResize = () => {
      if (rafId === null) {
        rafId = window.requestAnimationFrame(computeProgress);
      }
    };

    computeProgress();
    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize, { passive: true });
    return () => {
      if (rafId !== null) window.cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
    };
  }, [note.id, widthMode, safeBlocks.length]);

  useEffect(() => {
    if (tocItems.length === 0 || typeof IntersectionObserver === 'undefined') {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && entry.target.id) {
            setActiveHeadingId(entry.target.id);
            break;
          }
        }
      },
      {
        rootMargin: '-80px 0px -65% 0px',
        threshold: 0,
      },
    );

    for (const item of tocItems) {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [tocItems]);

  const handleTocClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    e.preventDefault();
    setActiveHeadingId(targetId);
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const formattedUpdatedAt = useMemo(() => {
    if (!note.updated_at) return null;
    const d = new Date(note.updated_at);
    if (Number.isNaN(d.getTime())) return null;
    return d.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  }, [note.updated_at]);

  const proseMeasureClass =
    widthMode === 'focused' ? 'max-w-[74ch]' : 'max-w-none';

  return (
    <div className="flex w-full items-start gap-6">
      {/* Main Read-Only Liquid Glass Study Document */}
      <article
        ref={articleRef}
        className="glass-panel min-w-0 flex-1 rounded-3xl px-5 pb-8 sm:px-9 sm:pb-10 lg:px-12 lg:pb-12"
      >
        {/* Sticky Frosted Reader Bar + Hairline Reading Progress */}
        <div className="glass-floating-bar sticky top-[108px] z-10 -mx-5 mb-6 rounded-t-3xl border-x-0 border-t-0 px-5 pt-2.5 pb-0 sm:-mx-9 sm:px-9 lg:top-[62px] lg:-mx-12 lg:px-12">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5">
            <div className="flex min-w-0 items-center gap-2.5">
              <span className="max-w-[200px] truncate text-xs font-medium text-[#111318] sm:max-w-[280px] dark:text-[#F5F7FA]">
                {note.title}
              </span>
              <span className="glass-pill shrink-0 rounded-full px-2 py-0.5 font-mono text-[10.5px] font-semibold tabular-nums text-[#525866] dark:text-[#9AA3B2]">
                {readingProgress}% read
              </span>
            </div>

            {/* Reader Controls: Width Mode + Outline Toggle + Sans/Serif */}
            <div className="flex flex-wrap items-center gap-2">
              {/* Width Toggle */}
              <div
                role="group"
                aria-label="Reading width"
                className="glass-surface inline-flex items-center rounded-full p-0.5"
              >
                <button
                  type="button"
                  aria-pressed={widthMode === 'focused'}
                  onClick={() => setWidthMode('focused')}
                  title="Editorial measure for prose with full-width diagrams"
                  className={`inline-flex cursor-pointer items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium transition-all ${
                    widthMode === 'focused'
                      ? 'bg-white/95 text-[#111318] shadow-sm dark:bg-white/[0.15] dark:text-[#F5F7FA]'
                      : 'text-[#525866] hover:text-[#111318] dark:text-[#9AA3B2] dark:hover:text-[#F5F7FA]'
                  }`}
                >
                  <Minimize2 className="h-3 w-3" aria-hidden="true" />
                  <span>Focused</span>
                </button>
                <button
                  type="button"
                  aria-pressed={widthMode === 'full'}
                  onClick={() => setWidthMode('full')}
                  title="Expand prose to fill entire container width"
                  className={`inline-flex cursor-pointer items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium transition-all ${
                    widthMode === 'full'
                      ? 'bg-white/95 text-[#111318] shadow-sm dark:bg-white/[0.15] dark:text-[#F5F7FA]'
                      : 'text-[#525866] hover:text-[#111318] dark:text-[#9AA3B2] dark:hover:text-[#F5F7FA]'
                  }`}
                >
                  <Maximize2 className="h-3 w-3" aria-hidden="true" />
                  <span>Full Width</span>
                </button>
              </div>

              {/* Collapsible Outline Toggle */}
              {tocItems.length > 0 && (
                <button
                  type="button"
                  aria-expanded={outlineOpen}
                  onClick={() => setOutlineOpen((v) => !v)}
                  className={`inline-flex cursor-pointer items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-all ${
                    outlineOpen
                      ? 'bg-[#111318] text-white shadow-sm dark:bg-[#F5F7FA] dark:text-[#0B0D12]'
                      : 'glass-pill text-[#525866] hover:text-[#111318] dark:text-[#9AA3B2] dark:hover:text-[#F5F7FA]'
                  }`}
                >
                  <List className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Outline</span>
                </button>
              )}

              {/* Sans / Serif Reader Font Toggle */}
              <div
                role="group"
                aria-label="Reader font family"
                className="glass-surface inline-flex items-center rounded-full p-0.5"
              >
                <button
                  type="button"
                  aria-pressed={fontMode === 'sans'}
                  onClick={() => setFontMode('sans')}
                  className={`cursor-pointer rounded-full px-2.5 py-1 text-xs font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111318]/25 dark:focus-visible:ring-[#F5F7FA]/25 ${
                    fontMode === 'sans'
                      ? 'bg-white/95 text-[#111318] shadow-sm dark:bg-white/[0.15] dark:text-[#F5F7FA]'
                      : 'text-[#525866] hover:text-[#111318] dark:text-[#9AA3B2] dark:hover:text-[#F5F7FA]'
                  }`}
                >
                  Sans
                </button>
                <button
                  type="button"
                  aria-pressed={fontMode === 'serif'}
                  onClick={() => setFontMode('serif')}
                  className={`cursor-pointer rounded-full px-2.5 py-1 font-serif text-xs font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111318]/25 dark:focus-visible:ring-[#F5F7FA]/25 ${
                    fontMode === 'serif'
                      ? 'bg-white/95 text-[#111318] shadow-sm dark:bg-white/[0.15] dark:text-[#F5F7FA]'
                      : 'text-[#525866] hover:text-[#111318] dark:text-[#9AA3B2] dark:hover:text-[#F5F7FA]'
                  }`}
                >
                  Serif
                </button>
              </div>
            </div>
          </div>

          {/* Hairline Reading Progress Track */}
          <div className="h-[2px] w-full overflow-hidden rounded-full bg-black/[0.06] dark:bg-white/[0.08]">
            <div
              className={`h-full transition-[width] duration-150 ease-out motion-reduce:transition-none ${theme.progressBarClass}`}
              style={{ width: `${readingProgress}%` }}
            />
          </div>
        </div>

        {/* Top Document Masthead */}
        <header className="border-b border-black/[0.06] pb-6 dark:border-white/[0.08]">
          <div className="flex flex-wrap items-center gap-2">
            {topicLabel && (
              <span
                className={`glass-pill inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ${theme.tintBg} ${theme.borderTint} ${theme.textAccent}`}
              >
                <FileText className="h-3 w-3" aria-hidden="true" />
                {topicLabel}
              </span>
            )}
            <span className="glass-pill rounded-full px-2.5 py-0.5 font-mono text-[11px] font-medium text-[#525866] dark:text-[#9AA3B2]">
              v{note.version}
            </span>
            <span className="glass-pill inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 font-mono text-[11px] font-medium tabular-nums text-[#525866] dark:text-[#9AA3B2]">
              <Clock className="h-3 w-3" aria-hidden="true" />
              {wordCount.toLocaleString()} words · ~{readingMinutes} min read
            </span>
            {diagramCount > 0 && (
              <span
                className={`glass-pill inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 font-mono text-[11px] font-medium tabular-nums ${theme.tintBg} ${theme.borderTint} ${theme.textAccent}`}
              >
                <Layers className="h-3 w-3" aria-hidden="true" />
                {diagramCount} interactive{' '}
                {diagramCount === 1 ? 'lab' : 'labs'}
              </span>
            )}
            {formattedUpdatedAt && (
              <span className="text-xs text-[#525866] dark:text-[#9AA3B2]">
                Updated {formattedUpdatedAt}
              </span>
            )}
          </div>

          <h1
            className={`mt-4 ${proseMeasureClass} font-serif text-3xl font-medium tracking-[-0.02em] text-balance text-[#111318] sm:text-[34px] sm:leading-[1.16] dark:text-[#F5F7FA]`}
          >
            {note.title}
          </h1>

          {note.summary && (
            <p
              className={`mt-3 ${proseMeasureClass} text-[15.5px] leading-relaxed text-[#525866] dark:text-[#9AA3B2] ${
                fontMode === 'serif' ? 'font-serif' : 'font-sans'
              }`}
            >
              {note.summary}
            </p>
          )}

          {/* Inline Mobile / Tablet Collapsible Outline Drawer */}
          {outlineOpen && tocItems.length > 0 && (
            <nav
              aria-label="Inline table of contents"
              className="glass-surface mt-5 rounded-2xl p-4 xl:hidden"
            >
              <div className="mb-2 flex items-center gap-1.5 font-mono text-[10.5px] font-semibold tracking-wider text-[#525866] uppercase dark:text-[#9AA3B2]">
                <List className="h-3.5 w-3.5" aria-hidden="true" />
                On this page
              </div>
              <ul className="grid grid-cols-1 gap-1 sm:grid-cols-2">
                {tocItems.map((item) => {
                  const isActive = item.id === activeHeadingId;
                  return (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        onClick={(e) => handleTocClick(e, item.id)}
                        className={`block rounded-lg px-2.5 py-1.5 text-xs transition-colors ${
                          item.level === 3 ? 'pl-5' : 'font-medium'
                        } ${
                          isActive
                            ? 'bg-white/95 text-[#111318] dark:bg-white/[0.12] dark:text-[#F5F7FA]'
                            : 'text-[#525866] hover:text-[#111318] dark:text-[#9AA3B2] dark:hover:text-[#F5F7FA]'
                        }`}
                      >
                        {item.text}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          )}
        </header>

        {/* Note Blocks Body (100% Read-Only) */}
        <div
          className={`mt-7 space-y-5 ${
            fontMode === 'serif' ? 'font-serif' : 'font-sans'
          }`}
        >
          {safeBlocks.length === 0 ? (
            <p className="py-8 text-center text-sm text-[#525866] dark:text-[#9AA3B2]">
              This study note has no readable content blocks yet.
            </p>
          ) : (
            safeBlocks.map((block, index) => {
              switch (block.type) {
                case 'heading': {
                  const anchorId = headingIdByBlockIndex.get(index);
                  if (block.level === 2) {
                    return (
                      <h2
                        key={`block-${index}`}
                        id={anchorId}
                        className={`${proseMeasureClass} mt-9 mb-2 scroll-mt-36 border-t border-black/[0.06] pt-5 text-xl font-semibold tracking-tight text-[#111318] first:mt-0 first:border-t-0 first:pt-0 dark:border-white/[0.08] dark:text-[#F5F7FA]`}
                      >
                        {block.text}
                      </h2>
                    );
                  }
                  return (
                    <h3
                      key={`block-${index}`}
                      id={anchorId}
                      className={`${proseMeasureClass} mt-6 mb-1.5 scroll-mt-36 text-[17px] font-semibold tracking-tight text-[#111318] first:mt-0 dark:text-[#F5F7FA]`}
                    >
                      {block.text}
                    </h3>
                  );
                }

                case 'paragraph':
                  return (
                    <MarkdownMath
                      key={`block-${index}`}
                      content={block.markdown}
                      className={`${proseMeasureClass} text-[15.5px] leading-[1.74] text-[#111318] dark:text-[#F5F7FA]`}
                    />
                  );

                case 'callout': {
                  const cfg = CALLOUT_CONFIG[block.variant];
                  const CalloutIcon = cfg.Icon;
                  return (
                    <aside
                      key={`block-${index}`}
                      className={`${proseMeasureClass} glass-surface my-5 rounded-2xl border-l-[3px] px-5 py-4 ${cfg.borderClass} ${cfg.tintClass}`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="glass-pill flex h-6 w-6 items-center justify-center rounded-full">
                          <CalloutIcon
                            className={`h-3.5 w-3.5 shrink-0 ${cfg.iconAccentClass}`}
                            aria-hidden="true"
                          />
                        </span>
                        <span className="font-mono text-[10.5px] font-semibold tracking-wider text-[#525866] uppercase dark:text-[#9AA3B2]">
                          {cfg.label}
                        </span>
                      </div>
                      <div className="mt-2 text-sm font-semibold text-[#111318] dark:text-[#F5F7FA]">
                        {block.title}
                      </div>
                      <MarkdownMath
                        content={block.markdown}
                        className="mt-1.5 text-[14px] leading-relaxed text-[#111318]/90 dark:text-[#F5F7FA]/90"
                      />
                    </aside>
                  );
                }

                case 'key_terms':
                  return (
                    <div
                      key={`block-${index}`}
                      className="my-5 grid w-full grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3"
                    >
                      {block.items.map((item, itemIdx) => (
                        <div
                          key={`${item.term}-${itemIdx}`}
                          className="glass-surface glass-interactive rounded-2xl p-4"
                        >
                          <div className="flex flex-wrap items-start justify-between gap-2">
                            <dt className="text-sm font-semibold text-[#111318] dark:text-[#F5F7FA]">
                              {item.term}
                            </dt>
                            {item.markschemeKeyword && (
                              <span className="glass-pill rounded-full px-2 py-0.5 font-mono text-[10px] font-medium text-[#525866] dark:text-[#9AA3B2]">
                                {item.markschemeKeyword}
                              </span>
                            )}
                          </div>
                          <dd className="mt-2">
                            <MarkdownMath
                              content={item.definitionMarkdown}
                              className="text-[13.5px] leading-relaxed text-[#111318]/90 dark:text-[#F5F7FA]/90"
                            />
                          </dd>
                        </div>
                      ))}
                    </div>
                  );

                case 'equation':
                  return (
                    <div
                      key={`block-${index}`}
                      className="glass-surface my-5 w-full rounded-2xl px-6 py-5"
                    >
                      <div className="text-center">
                        <InlineKaTeX latex={block.latex} displayMode />
                      </div>
                      {block.caption && (
                        <p className="mt-2 text-center text-xs text-[#525866] dark:text-[#9AA3B2]">
                          {block.caption}
                        </p>
                      )}
                      {block.variableLegend &&
                        block.variableLegend.length > 0 && (
                          <div className="mt-3.5 grid grid-cols-1 gap-x-6 gap-y-1.5 border-t border-black/[0.06] pt-3 sm:grid-cols-2 dark:border-white/[0.08]">
                            {block.variableLegend.map((entry, vIdx) => (
                              <div
                                key={`${entry.symbol}-${vIdx}`}
                                className="flex items-baseline gap-2 text-xs"
                              >
                                <span className="shrink-0 font-mono font-medium text-[#111318] dark:text-[#F5F7FA]">
                                  <InlineKaTeX latex={entry.symbol} />
                                </span>
                                <span className="text-[#525866] dark:text-[#9AA3B2]">
                                  — {entry.meaning}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}
                    </div>
                  );

                case 'playable_diagram':
                  return (
                    <div
                      key={`${note.id}-block-${index}-${block.spec.id}`}
                      className="w-full"
                    >
                      <InteractiveDiagramPlayer spec={block.spec} />
                    </div>
                  );
              }
            })
          )}
        </div>
      </article>

      {/* Collapsible Sticky Right-Hand Floating Glass Outline (Desktop xl+) */}
      {outlineOpen && tocItems.length > 0 && (
        <aside
          aria-label="Table of contents"
          className="sticky top-20 hidden w-60 shrink-0 flex-col xl:flex"
        >
          <div className="glass-panel rounded-2xl p-4">
            <div className="mb-2.5 flex items-center justify-between gap-2">
              <div className="flex items-center gap-1.5 font-mono text-[10.5px] font-semibold tracking-wider text-[#525866] uppercase dark:text-[#9AA3B2]">
                <List className="h-3.5 w-3.5" aria-hidden="true" />
                On this page
              </div>
              <button
                type="button"
                onClick={() => setOutlineOpen(false)}
                aria-label="Collapse outline"
                className="cursor-pointer text-[11px] text-[#525866] hover:text-[#111318] dark:text-[#9AA3B2] dark:hover:text-[#F5F7FA]"
              >
                Hide
              </button>
            </div>
            <nav>
              <ul className="space-y-1 border-l border-black/[0.08] dark:border-white/[0.1]">
                {tocItems.map((item) => {
                  const isActive = item.id === activeHeadingId;
                  return (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        onClick={(e) => handleTocClick(e, item.id)}
                        className={`-ml-px block border-l-2 py-1 pr-2 text-xs leading-snug transition-colors ${
                          item.level === 3 ? 'pl-5' : 'pl-3 font-medium'
                        } ${
                          isActive
                            ? 'border-[#111318] text-[#111318] dark:border-[#F5F7FA] dark:text-[#F5F7FA]'
                            : 'border-transparent text-[#525866] hover:border-[#525866]/40 hover:text-[#111318] dark:text-[#9AA3B2] dark:hover:border-[#9AA3B2]/40 dark:hover:text-[#F5F7FA]'
                        }`}
                      >
                        {item.text}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </aside>
      )}
    </div>
  );
}

export default NotionNoteViewer;
