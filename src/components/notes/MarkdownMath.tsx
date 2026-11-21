'use client';

import React, { useMemo } from 'react';
import ReactMarkdown, { type Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import katex from 'katex';
import 'katex/contrib/mhchem';
import 'katex/dist/katex.min.css';

export interface InlineKaTeXProps {
  latex: string;
  displayMode?: boolean;
  className?: string;
}

function stripOuterMathDelimiters(raw: string): string {
  const trimmed = raw.trim();
  if (trimmed.startsWith('$$') && trimmed.endsWith('$$') && trimmed.length > 4) {
    return trimmed.slice(2, -2).trim();
  }
  if (trimmed.startsWith('$') && trimmed.endsWith('$') && trimmed.length > 2) {
    return trimmed.slice(1, -1).trim();
  }
  return trimmed;
}

/**
 * Memoized KaTeX renderer for equation blocks, formulas, and variable symbols.
 * Uses throwOnError: false + try/catch fallback so malformed LaTeX never crashes.
 */
export const InlineKaTeX = React.memo(function InlineKaTeX({
  latex,
  displayMode = false,
  className = '',
}: InlineKaTeXProps) {
  const cleanLatex = useMemo(
    () => (typeof latex === 'string' ? stripOuterMathDelimiters(latex) : ''),
    [latex],
  );

  const renderedHtml = useMemo(() => {
    if (!cleanLatex) return null;
    try {
      return katex.renderToString(cleanLatex, {
        displayMode,
        throwOnError: false,
        strict: 'ignore',
        output: 'htmlAndMathml',
      });
    } catch {
      return null;
    }
  }, [cleanLatex, displayMode]);

  if (!cleanLatex) {
    return null;
  }

  if (!renderedHtml) {
    return (
      <code
        className={`font-mono text-xs text-[#787774] dark:text-[#9B9A97] ${className}`.trim()}
      >
        {cleanLatex}
      </code>
    );
  }

  if (displayMode) {
    return (
      <div
        className={`overflow-x-auto py-1 text-[#37352F] dark:text-[#EBEBEB] ${className}`.trim()}
        dangerouslySetInnerHTML={{ __html: renderedHtml }}
      />
    );
  }

  return (
    <span
      className={`inline-block align-baseline text-[#37352F] dark:text-[#EBEBEB] ${className}`.trim()}
      dangerouslySetInnerHTML={{ __html: renderedHtml }}
    />
  );
});

/**
 * Converts \[ ... \] and \( ... \) LaTeX delimiters to $$ ... $$ and $ ... $
 * outside fenced and inline code spans so remark-math renders them consistently.
 */
function normalizeMathDelimiters(input: string): string {
  if (!input.includes('\\[') && !input.includes('\\(')) {
    return input;
  }

  const segments = input.split(/(```[\s\S]*?```|`[^`\n]+`)/g);
  return segments
    .map((segment, index) => {
      // Odd indices match code blocks / inline code spans
      if (index % 2 === 1) return segment;
      return segment
        .replace(/\\\[([\s\S]*?)\\\]/g, (_, inner: string) => {
          return `\n$$\n${inner.trim()}\n$$\n`;
        })
        .replace(/\\\(([\s\S]*?)\\\)/g, (_, inner: string) => {
          return `$${inner.trim()}$`;
        });
    })
    .join('');
}

const markdownComponents: Components = {
  h1: ({ children }) => (
    <h1 className="mt-6 mb-2.5 text-xl font-semibold tracking-tight text-[#37352F] dark:text-[#EBEBEB] first:mt-0">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="mt-5 mb-2 text-lg font-semibold tracking-tight text-[#37352F] dark:text-[#EBEBEB] first:mt-0">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-4 mb-1.5 text-[15px] font-semibold tracking-tight text-[#37352F] dark:text-[#EBEBEB] first:mt-0">
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="mt-3 mb-1 text-sm font-semibold text-[#37352F] dark:text-[#EBEBEB] first:mt-0">
      {children}
    </h4>
  ),
  p: ({ children }) => (
    <p className="my-2 leading-[1.68] text-inherit first:mt-0 last:mb-0">
      {children}
    </p>
  ),
  ul: ({ children }) => (
    <ul className="my-2 list-disc space-y-1 pl-5 text-inherit first:mt-0 last:mb-0">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="my-2 list-decimal space-y-1 pl-5 text-inherit first:mt-0 last:mb-0">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="leading-[1.65]">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="my-3 border-l-2 border-[#37352F] pl-3.5 text-[#787774] italic dark:border-[#EBEBEB] dark:text-[#9B9A97]">
      {children}
    </blockquote>
  ),
  code: ({ className, children, ...props }) => {
    const isMath =
      typeof className === 'string' &&
      (className.includes('language-math') ||
        className.includes('math-inline') ||
        className.includes('math-display'));
    if (isMath) {
      return (
        <code className={className} {...props}>
          {children}
        </code>
      );
    }
    return (
      <code
        className={`rounded bg-[#F1F1EF] px-1.5 py-0.5 font-mono text-[0.86em] text-[#37352F] dark:bg-[#2A2A2A] dark:text-[#EBEBEB] ${className ?? ''}`.trim()}
        {...props}
      >
        {children}
      </code>
    );
  },
  pre: ({ children }) => (
    <pre className="my-3 overflow-x-auto rounded-md border border-[#E6E6E4] bg-[#FBFBFA] p-3 font-mono text-[13px] leading-relaxed text-[#37352F] dark:border-[#2E2E2E] dark:bg-[#202020] dark:text-[#EBEBEB] [&_code]:rounded-none [&_code]:bg-transparent [&_code]:p-0">
      {children}
    </pre>
  ),
  table: ({ children }) => (
    <div className="my-3 overflow-x-auto rounded-md border border-[#E6E6E4] dark:border-[#2E2E2E]">
      <table className="w-full border-collapse text-left text-[13px]">
        {children}
      </table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="bg-[#FBFBFA] text-[#37352F] dark:bg-[#202020] dark:text-[#EBEBEB]">
      {children}
    </thead>
  ),
  th: ({ children }) => (
    <th className="border-b border-[#E6E6E4] px-3 py-2 font-semibold dark:border-[#2E2E2E]">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="border-b border-[#E6E6E4] px-3 py-2 align-top dark:border-[#2E2E2E]">
      {children}
    </td>
  ),
  tr: ({ children }) => (
    <tr className="last:[&_td]:border-b-0 hover:bg-[#FBFBFA] dark:hover:bg-[#202020]/60">
      {children}
    </tr>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="underline decoration-[#787774]/60 underline-offset-2 transition-colors hover:decoration-[#37352F] dark:hover:decoration-[#EBEBEB]"
    >
      {children}
    </a>
  ),
  hr: () => (
    <hr className="my-5 border-0 border-t border-[#E6E6E4] dark:border-[#2E2E2E]" />
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-[#37352F] dark:text-[#EBEBEB]">
      {children}
    </strong>
  ),
};

const REMARK_PLUGINS = [remarkGfm, remarkMath];
const REHYPE_PLUGINS: [typeof rehypeKatex, { strict: string }][] = [
  [rehypeKatex, { strict: 'ignore' }],
];

export interface MarkdownMathProps {
  content?: string | null;
  markdown?: string | null;
  children?: string | null;
  className?: string;
}

/**
 * Client & SSR-safe Markdown + GFM + KaTeX renderer styled in Notion monochrome.
 */
export const MarkdownMath = React.memo(function MarkdownMath({
  content,
  markdown,
  children,
  className = '',
}: MarkdownMathProps) {
  const raw = content ?? markdown ?? children ?? '';
  const normalized = useMemo(
    () => (typeof raw === 'string' ? normalizeMathDelimiters(raw) : ''),
    [raw],
  );

  if (!normalized.trim()) {
    return null;
  }

  return (
    <div
      className={`text-[#37352F] dark:text-[#EBEBEB] break-words ${className}`.trim()}
    >
      <ReactMarkdown
        remarkPlugins={REMARK_PLUGINS}
        rehypePlugins={REHYPE_PLUGINS}
        components={markdownComponents}
      >
        {normalized}
      </ReactMarkdown>
    </div>
  );
});

export default MarkdownMath;
