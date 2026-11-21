'use client';

import React, { useEffect, useMemo, useState } from 'react';
import {
  AlertTriangle,
  BookOpen,
  Compass,
  FileText,
  List,
  Maximize2,
  Minimize2,
  Sigma,
} from 'lucide-react';
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

const CALLOUT_CONFIG: Record<
  Extract<StudyNoteBlock, { type: 'callout' }>['variant'],
  {
    label: string;
    Icon: React.ComponentType<{ className?: string }>;
    borderClass: string;
  }
> = {
  definition: {
    label: 'Definition',
    Icon: BookOpen,
    borderClass: 'border-l-[#6E6E73] dark:border-l-[#98989D]',
  },
  examiner_warning: {
    label: 'Examiner Warning',
    Icon: AlertTriangle,
    borderClass: 'border-l-[#1D1D1F] dark:border-l-[#F5F5F7]',
  },
  key_formula: {
    label: 'Key Formula',
    Icon: Sigma,
    borderClass: 'border-l-[#1D1D1F] dark:border-l-[#F5F5F7]',
  },
  syllabus_link: {
    label: 'Syllabus Link',
    Icon: Compass,
    borderClass: 'border-l-[#98989D] dark:border-l-[#6E6E73]',
  },
};

export function NotionNoteViewer({ note, topicLabel }: NotionNoteViewerProps) {
  const [fontMode, setFontMode] = useState<'sans' | 'serif'>('sans');
  const [widthMode, setWidthMode] = useState<'focused' | 'full'>('focused');
  const [outlineOpen, setOutlineOpen] = useState(false);

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
  }, [note.id, tocItems]);

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
      <article className="glass-panel min-w-0 flex-1 rounded-3xl px-5 py-6 sm:px-9 sm:py-8 lg:px-12 lg:py-10">
        {/* Top Header Bar */}
        <header className="border-b border-black/[0.06] pb-6 dark:border-white/[0.08]">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              {topicLabel && (
                <span className="glass-pill inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium text-[#6E6E73] dark:text-[#98989D]">
                  <FileText className="h-3 w-3" aria-hidden="true" />
                  {topicLabel}
                </span>
              )}
              <span className="glass-pill rounded-full px-2.5 py-0.5 font-mono text-[11px] font-medium text-[#6E6E73] dark:text-[#98989D]">
                v{note.version}
              </span>
              {formattedUpdatedAt && (
                <span className="text-xs text-[#6E6E73] dark:text-[#98989D]">
                  Updated {formattedUpdatedAt}
                </span>
              )}
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
                      ? 'bg-white/95 text-[#1D1D1F] shadow-sm dark:bg-white/[0.14] dark:text-[#F5F5F7]'
                      : 'text-[#6E6E73] hover:text-[#1D1D1F] dark:text-[#98989D] dark:hover:text-[#F5F5F7]'
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
                      ? 'bg-white/95 text-[#1D1D1F] shadow-sm dark:bg-white/[0.14] dark:text-[#F5F5F7]'
                      : 'text-[#6E6E73] hover:text-[#1D1D1F] dark:text-[#98989D] dark:hover:text-[#F5F5F7]'
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
                      ? 'bg-[#1D1D1F] text-white shadow-sm dark:bg-[#F5F5F7] dark:text-[#111113]'
                      : 'glass-pill text-[#6E6E73] hover:text-[#1D1D1F] dark:text-[#98989D] dark:hover:text-[#F5F5F7]'
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
                  className={`cursor-pointer rounded-full px-2.5 py-1 text-xs font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D1D1F]/25 dark:focus-visible:ring-[#F5F5F7]/25 ${
                    fontMode === 'sans'
                      ? 'bg-white/95 text-[#1D1D1F] shadow-sm dark:bg-white/[0.14] dark:text-[#F5F5F7]'
                      : 'text-[#6E6E73] hover:text-[#1D1D1F] dark:text-[#98989D] dark:hover:text-[#F5F5F7]'
                  }`}
                >
                  Sans
                </button>
                <button
                  type="button"
                  aria-pressed={fontMode === 'serif'}
                  onClick={() => setFontMode('serif')}
                  className={`cursor-pointer rounded-full px-2.5 py-1 font-serif text-xs font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D1D1F]/25 dark:focus-visible:ring-[#F5F5F7]/25 ${
                    fontMode === 'serif'
                      ? 'bg-white/95 text-[#1D1D1F] shadow-sm dark:bg-white/[0.14] dark:text-[#F5F5F7]'
                      : 'text-[#6E6E73] hover:text-[#1D1D1F] dark:text-[#98989D] dark:hover:text-[#F5F5F7]'
                  }`}
                >
                  Serif
                </button>
              </div>
            </div>
          </div>

          <h1
            className={`mt-5 ${proseMeasureClass} text-2xl font-semibold tracking-tight text-[#1D1D1F] sm:text-[30px] sm:leading-[1.2] dark:text-[#F5F5F7] ${
              fontMode === 'serif' ? 'font-serif' : 'font-sans'
            }`}
          >
            {note.title}
          </h1>

          {note.summary && (
            <p
              className={`mt-3 ${proseMeasureClass} text-[15.5px] leading-relaxed text-[#6E6E73] dark:text-[#98989D] ${
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
              <div className="mb-2 flex items-center gap-1.5 font-mono text-[10.5px] font-semibold tracking-wider text-[#6E6E73] uppercase dark:text-[#98989D]">
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
                            ? 'bg-white/95 text-[#1D1D1F] dark:bg-white/[0.12] dark:text-[#F5F5F7]'
                            : 'text-[#6E6E73] hover:text-[#1D1D1F] dark:text-[#98989D] dark:hover:text-[#F5F5F7]'
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
            <p className="py-8 text-center text-sm text-[#6E6E73] dark:text-[#98989D]">
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
                        className={`${proseMeasureClass} mt-9 mb-2 scroll-mt-20 border-t border-black/[0.06] pt-5 text-xl font-semibold tracking-tight text-[#1D1D1F] first:mt-0 first:border-t-0 first:pt-0 dark:border-white/[0.08] dark:text-[#F5F5F7]`}
                      >
                        {block.text}
                      </h2>
                    );
                  }
                  return (
                    <h3
                      key={`block-${index}`}
                      id={anchorId}
                      className={`${proseMeasureClass} mt-6 mb-1.5 scroll-mt-20 text-[17px] font-semibold tracking-tight text-[#1D1D1F] first:mt-0 dark:text-[#F5F5F7]`}
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
                      className={`${proseMeasureClass} text-[15.5px] leading-[1.74] text-[#1D1D1F] dark:text-[#F5F5F7]`}
                    />
                  );

                case 'callout': {
                  const cfg = CALLOUT_CONFIG[block.variant];
                  const CalloutIcon = cfg.Icon;
                  return (
                    <aside
                      key={`block-${index}`}
                      className={`${proseMeasureClass} glass-surface my-5 rounded-2xl border-l-[3px] px-5 py-4 ${cfg.borderClass}`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="glass-pill flex h-6 w-6 items-center justify-center rounded-full">
                          <CalloutIcon
                            className="h-3.5 w-3.5 shrink-0 text-[#1D1D1F] dark:text-[#F5F5F7]"
                            aria-hidden="true"
                          />
                        </span>
                        <span className="font-mono text-[10.5px] font-semibold tracking-wider text-[#6E6E73] uppercase dark:text-[#98989D]">
                          {cfg.label}
                        </span>
                      </div>
                      <div className="mt-2 text-sm font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">
                        {block.title}
                      </div>
                      <MarkdownMath
                        content={block.markdown}
                        className="mt-1.5 text-[14px] leading-relaxed text-[#1D1D1F]/90 dark:text-[#F5F5F7]/90"
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
                            <dt className="text-sm font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">
                              {item.term}
                            </dt>
                            {item.markschemeKeyword && (
                              <span className="glass-pill rounded-full px-2 py-0.5 font-mono text-[10px] font-medium text-[#6E6E73] dark:text-[#98989D]">
                                {item.markschemeKeyword}
                              </span>
                            )}
                          </div>
                          <dd className="mt-2">
                            <MarkdownMath
                              content={item.definitionMarkdown}
                              className="text-[13.5px] leading-relaxed text-[#1D1D1F]/90 dark:text-[#F5F5F7]/90"
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
                        <p className="mt-2 text-center text-xs text-[#6E6E73] dark:text-[#98989D]">
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
                                <span className="shrink-0 font-mono font-medium text-[#1D1D1F] dark:text-[#F5F5F7]">
                                  <InlineKaTeX latex={entry.symbol} />
                                </span>
                                <span className="text-[#6E6E73] dark:text-[#98989D]">
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
                    <div key={`${note.id}-block-${index}-${block.spec.id}`} className="w-full">
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
          className="sticky top-6 hidden w-60 shrink-0 flex-col xl:flex"
        >
          <div className="glass-panel rounded-2xl p-4">
            <div className="mb-2.5 flex items-center justify-between gap-2">
              <div className="flex items-center gap-1.5 font-mono text-[10.5px] font-semibold tracking-wider text-[#6E6E73] uppercase dark:text-[#98989D]">
                <List className="h-3.5 w-3.5" aria-hidden="true" />
                On this page
              </div>
              <button
                type="button"
                onClick={() => setOutlineOpen(false)}
                aria-label="Collapse outline"
                className="text-[11px] text-[#6E6E73] hover:text-[#1D1D1F] cursor-pointer dark:text-[#98989D] dark:hover:text-[#F5F5F7]"
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
                            ? 'border-[#1D1D1F] text-[#1D1D1F] dark:border-[#F5F5F7] dark:text-[#F5F5F7]'
                            : 'border-transparent text-[#6E6E73] hover:border-[#6E6E73]/40 hover:text-[#1D1D1F] dark:text-[#98989D] dark:hover:border-[#98989D]/40 dark:hover:text-[#F5F5F7]'
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
