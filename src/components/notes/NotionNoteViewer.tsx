'use client';

import React, { useEffect, useMemo, useState } from 'react';
import {
  AlertTriangle,
  BookOpen,
  Compass,
  FileText,
  List,
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
    borderClass: 'border-l-[#787774] dark:border-l-[#9B9A97]',
  },
  examiner_warning: {
    label: 'Examiner Warning',
    Icon: AlertTriangle,
    borderClass: 'border-l-[#37352F] dark:border-l-[#EBEBEB]',
  },
  key_formula: {
    label: 'Key Formula',
    Icon: Sigma,
    borderClass: 'border-l-[#37352F] dark:border-l-[#EBEBEB]',
  },
  syllabus_link: {
    label: 'Syllabus Link',
    Icon: Compass,
    borderClass: 'border-l-[#9B9A97] dark:border-l-[#787774]',
  },
};

export function NotionNoteViewer({ note, topicLabel }: NotionNoteViewerProps) {
  const [fontMode, setFontMode] = useState<'sans' | 'serif'>('sans');

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

  return (
    <div className="flex w-full items-start gap-8">
      {/* Main Read-Only Notion Document Column */}
      <article className="min-w-0 flex-1 rounded-lg border border-[#E6E6E4] bg-white px-5 py-6 sm:px-9 sm:py-8 dark:border-[#2E2E2E] dark:bg-[#191919]">
        {/* Top Header Bar */}
        <header className="border-b border-[#E6E6E4] pb-6 dark:border-[#2E2E2E]">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              {topicLabel && (
                <span className="inline-flex items-center gap-1 rounded border border-[#E6E6E4] bg-[#FBFBFA] px-2 py-0.5 text-xs font-medium text-[#787774] dark:border-[#2E2E2E] dark:bg-[#202020] dark:text-[#9B9A97]">
                  <FileText className="h-3 w-3" aria-hidden="true" />
                  {topicLabel}
                </span>
              )}
              <span className="rounded border border-[#E6E6E4] bg-[#FBFBFA] px-2 py-0.5 font-mono text-[11px] font-medium text-[#787774] dark:border-[#2E2E2E] dark:bg-[#202020] dark:text-[#9B9A97]">
                v{note.version}
              </span>
              {formattedUpdatedAt && (
                <span className="text-xs text-[#787774] dark:text-[#9B9A97]">
                  Updated {formattedUpdatedAt}
                </span>
              )}
            </div>

            {/* Sans / Serif Reader Font Toggle */}
            <div
              role="group"
              aria-label="Reader font family"
              className="inline-flex items-center rounded-md border border-[#E6E6E4] bg-[#FBFBFA] p-0.5 dark:border-[#2E2E2E] dark:bg-[#202020]"
            >
              <button
                type="button"
                aria-pressed={fontMode === 'sans'}
                onClick={() => setFontMode('sans')}
                className={`cursor-pointer rounded px-2.5 py-1 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#37352F]/30 dark:focus-visible:ring-[#EBEBEB]/30 ${
                  fontMode === 'sans'
                    ? 'bg-white text-[#37352F] shadow-[0_1px_0_0_rgba(0,0,0,0.03)] dark:bg-[#2A2A2A] dark:text-[#EBEBEB]'
                    : 'text-[#787774] hover:text-[#37352F] dark:text-[#9B9A97] dark:hover:text-[#EBEBEB]'
                }`}
              >
                Sans
              </button>
              <button
                type="button"
                aria-pressed={fontMode === 'serif'}
                onClick={() => setFontMode('serif')}
                className={`cursor-pointer rounded px-2.5 py-1 font-serif text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#37352F]/30 dark:focus-visible:ring-[#EBEBEB]/30 ${
                  fontMode === 'serif'
                    ? 'bg-white text-[#37352F] shadow-[0_1px_0_0_rgba(0,0,0,0.03)] dark:bg-[#2A2A2A] dark:text-[#EBEBEB]'
                    : 'text-[#787774] hover:text-[#37352F] dark:text-[#9B9A97] dark:hover:text-[#EBEBEB]'
                }`}
              >
                Serif
              </button>
            </div>
          </div>

          <h1
            className={`mt-4 text-2xl font-semibold tracking-tight text-[#37352F] sm:text-[28px] dark:text-[#EBEBEB] ${
              fontMode === 'serif' ? 'font-serif' : 'font-sans'
            }`}
          >
            {note.title}
          </h1>

          {note.summary && (
            <p
              className={`mt-2.5 text-[15px] leading-relaxed text-[#787774] dark:text-[#9B9A97] ${
                fontMode === 'serif' ? 'font-serif' : 'font-sans'
              }`}
            >
              {note.summary}
            </p>
          )}
        </header>

        {/* Note Blocks Body (100% Read-Only) */}
        <div
          className={`mt-6 space-y-5 ${
            fontMode === 'serif' ? 'font-serif' : 'font-sans'
          }`}
        >
          {safeBlocks.length === 0 ? (
            <p className="py-8 text-center text-sm text-[#787774] dark:text-[#9B9A97]">
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
                        className="mt-8 mb-2 scroll-mt-20 border-t border-[#F1F1EF] pt-4 text-xl font-semibold tracking-tight text-[#37352F] first:mt-0 first:border-t-0 first:pt-0 dark:border-[#262626] dark:text-[#EBEBEB]"
                      >
                        {block.text}
                      </h2>
                    );
                  }
                  return (
                    <h3
                      key={`block-${index}`}
                      id={anchorId}
                      className="mt-6 mb-1.5 scroll-mt-20 text-[17px] font-semibold tracking-tight text-[#37352F] first:mt-0 dark:text-[#EBEBEB]"
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
                      className="text-[15.5px] leading-[1.72] text-[#37352F] dark:text-[#EBEBEB]"
                    />
                  );

                case 'callout': {
                  const cfg = CALLOUT_CONFIG[block.variant];
                  const CalloutIcon = cfg.Icon;
                  return (
                    <aside
                      key={`block-${index}`}
                      className={`my-4 rounded-r-lg border border-[#E6E6E4] border-l-[3px] bg-[#FBFBFA] px-4 py-3.5 dark:border-[#2E2E2E] dark:bg-[#202020] ${cfg.borderClass}`}
                    >
                      <div className="flex items-center gap-2">
                        <CalloutIcon
                          className="h-4 w-4 shrink-0 text-[#37352F] dark:text-[#EBEBEB]"
                          aria-hidden="true"
                        />
                        <span className="font-mono text-[10px] font-semibold tracking-wider text-[#787774] uppercase dark:text-[#9B9A97]">
                          {cfg.label}
                        </span>
                      </div>
                      <div className="mt-1 text-sm font-semibold text-[#37352F] dark:text-[#EBEBEB]">
                        {block.title}
                      </div>
                      <MarkdownMath
                        content={block.markdown}
                        className="mt-1.5 text-[14px] leading-relaxed text-[#37352F]/90 dark:text-[#EBEBEB]/90"
                      />
                    </aside>
                  );
                }

                case 'key_terms':
                  return (
                    <div
                      key={`block-${index}`}
                      className="my-4 grid grid-cols-1 gap-3 md:grid-cols-2"
                    >
                      {block.items.map((item, itemIdx) => (
                        <div
                          key={`${item.term}-${itemIdx}`}
                          className="rounded-lg border border-[#E6E6E4] bg-[#FBFBFA] p-3.5 dark:border-[#2E2E2E] dark:bg-[#202020]"
                        >
                          <div className="flex flex-wrap items-start justify-between gap-2">
                            <dt className="text-sm font-semibold text-[#37352F] dark:text-[#EBEBEB]">
                              {item.term}
                            </dt>
                            {item.markschemeKeyword && (
                              <span className="rounded border border-[#E6E6E4] bg-[#F1F1EF] px-1.5 py-0.5 font-mono text-[10.5px] font-medium text-[#787774] dark:border-[#2E2E2E] dark:bg-[#2A2A2A] dark:text-[#9B9A97]">
                                {item.markschemeKeyword}
                              </span>
                            )}
                          </div>
                          <dd className="mt-1.5">
                            <MarkdownMath
                              content={item.definitionMarkdown}
                              className="text-[13.5px] leading-relaxed text-[#37352F]/90 dark:text-[#EBEBEB]/90"
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
                      className="my-4 rounded-lg border border-[#E6E6E4] bg-[#FBFBFA] px-5 py-4 dark:border-[#2E2E2E] dark:bg-[#202020]"
                    >
                      <div className="text-center">
                        <InlineKaTeX latex={block.latex} displayMode />
                      </div>
                      {block.caption && (
                        <p className="mt-2 text-center text-xs text-[#787774] dark:text-[#9B9A97]">
                          {block.caption}
                        </p>
                      )}
                      {block.variableLegend &&
                        block.variableLegend.length > 0 && (
                          <div className="mt-3 grid grid-cols-1 gap-x-5 gap-y-1.5 border-t border-[#E6E6E4] pt-3 sm:grid-cols-2 dark:border-[#2E2E2E]">
                            {block.variableLegend.map((entry, vIdx) => (
                              <div
                                key={`${entry.symbol}-${vIdx}`}
                                className="flex items-baseline gap-2 text-xs"
                              >
                                <span className="shrink-0 font-mono font-medium text-[#37352F] dark:text-[#EBEBEB]">
                                  <InlineKaTeX latex={entry.symbol} />
                                </span>
                                <span className="text-[#787774] dark:text-[#9B9A97]">
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
                    <InteractiveDiagramPlayer
                      key={`${note.id}-block-${index}-${block.spec.id}`}
                      spec={block.spec}
                    />
                  );
              }
            })
          )}
        </div>
      </article>

      {/* Sticky Right-Hand Table of Contents (Desktop xl+) */}
      {tocItems.length > 0 && (
        <aside
          aria-label="Table of contents"
          className="sticky top-6 hidden w-56 shrink-0 flex-col xl:flex"
        >
          <div className="rounded-lg border border-[#E6E6E4] bg-[#FBFBFA] p-3.5 dark:border-[#2E2E2E] dark:bg-[#202020]">
            <div className="mb-2.5 flex items-center gap-1.5 font-mono text-[10.5px] font-semibold tracking-wider text-[#787774] uppercase dark:text-[#9B9A97]">
              <List className="h-3.5 w-3.5" aria-hidden="true" />
              On this page
            </div>
            <nav>
              <ul className="space-y-1 border-l border-[#E6E6E4] dark:border-[#2E2E2E]">
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
                            ? 'border-[#37352F] text-[#37352F] dark:border-[#EBEBEB] dark:text-[#EBEBEB]'
                            : 'border-transparent text-[#787774] hover:border-[#787774]/40 hover:text-[#37352F] dark:text-[#9B9A97] dark:hover:border-[#9B9A97]/40 dark:hover:text-[#EBEBEB]'
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
