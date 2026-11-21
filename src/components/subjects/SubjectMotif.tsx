import * as React from 'react';

interface SubjectMotifProps {
  slug: string;
}

/**
 * Low-opacity monochrome hairline SVG architectural watermark per subject slug.
 * Strictly decorative (`aria-hidden="true"`).
 */
export function SubjectMotif({ slug }: SubjectMotifProps) {
  const baseClass =
    'pointer-events-none absolute -top-3 -right-3 h-28 w-28 text-[#1D1D1F] opacity-[0.055] transition-opacity duration-300 group-hover:opacity-[0.11] dark:text-[#F5F5F7] dark:opacity-[0.065] dark:group-hover:opacity-[0.12]';

  switch (slug) {
    case 'biology-hl':
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 120 120"
          fill="none"
          className={baseClass}
        >
          <path
            d="M34 12 C78 32, 42 56, 86 76 C96 81, 96 98, 72 110"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
          />
          <path
            d="M86 12 C42 32, 78 56, 34 76 C24 81, 24 98, 48 110"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
          />
          <line x1="46" y1="24" x2="74" y2="24" stroke="currentColor" strokeWidth="1" />
          <line x1="50" y1="42" x2="70" y2="42" stroke="currentColor" strokeWidth="1" />
          <line x1="46" y1="62" x2="74" y2="62" stroke="currentColor" strokeWidth="1" />
          <line x1="36" y1="86" x2="84" y2="86" stroke="currentColor" strokeWidth="1" />
          <line x1="46" y1="100" x2="74" y2="100" stroke="currentColor" strokeWidth="1" />
        </svg>
      );

    case 'chemistry-sl':
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 120 120"
          fill="none"
          className={baseClass}
        >
          <circle cx="62" cy="58" r="7" stroke="currentColor" strokeWidth="1.3" />
          <ellipse
            cx="62"
            cy="58"
            rx="44"
            ry="17"
            transform="rotate(28 62 58)"
            stroke="currentColor"
            strokeWidth="1.15"
          />
          <ellipse
            cx="62"
            cy="58"
            rx="44"
            ry="17"
            transform="rotate(-32 62 58)"
            stroke="currentColor"
            strokeWidth="1.15"
          />
          <ellipse
            cx="62"
            cy="58"
            rx="44"
            ry="17"
            transform="rotate(90 62 58)"
            stroke="currentColor"
            strokeWidth="1.1"
            strokeDasharray="3 3"
          />
          <circle cx="96" cy="76" r="2.5" fill="currentColor" />
          <circle cx="32" cy="34" r="2.5" fill="currentColor" />
        </svg>
      );

    case 'math-aa-sl':
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 120 120"
          fill="none"
          className={baseClass}
        >
          <line x1="18" y1="78" x2="106" y2="78" stroke="currentColor" strokeWidth="1.1" />
          <line x1="42" y1="18" x2="42" y2="104" stroke="currentColor" strokeWidth="1.1" />
          <path
            d="M18 96 C34 86, 46 38, 66 56 C82 70, 92 40, 104 20"
            stroke="currentColor"
            strokeWidth="1.35"
            strokeLinecap="round"
          />
          <line
            x1="28"
            y1="88"
            x2="96"
            y2="34"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="3 3"
          />
          <circle cx="62" cy="61" r="2.5" fill="currentColor" />
        </svg>
      );

    case 'history-hl':
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 120 120"
          fill="none"
          className={baseClass}
        >
          <line x1="20" y1="60" x2="104" y2="60" stroke="currentColor" strokeWidth="1.2" />
          <line x1="30" y1="42" x2="30" y2="78" stroke="currentColor" strokeWidth="1.1" />
          <line x1="46" y1="50" x2="46" y2="70" stroke="currentColor" strokeWidth="1" />
          <line x1="62" y1="36" x2="62" y2="84" stroke="currentColor" strokeWidth="1.25" />
          <line x1="78" y1="50" x2="78" y2="70" stroke="currentColor" strokeWidth="1" />
          <line x1="94" y1="42" x2="94" y2="78" stroke="currentColor" strokeWidth="1.1" />
          <circle cx="30" cy="60" r="3" fill="currentColor" />
          <circle cx="62" cy="60" r="3.5" fill="currentColor" />
          <circle cx="94" cy="60" r="3" fill="currentColor" />
        </svg>
      );

    case 'english-lit-hl':
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 120 120"
          fill="none"
          className={baseClass}
        >
          <path
            d="M24 28 C44 26, 56 32, 60 38 C64 32, 76 26, 96 28 L96 90 C76 88, 64 94, 60 100 C56 94, 44 88, 24 90 Z"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinejoin="round"
          />
          <line x1="60" y1="38" x2="60" y2="100" stroke="currentColor" strokeWidth="1.1" />
          <line x1="32" y1="46" x2="52" y2="48" stroke="currentColor" strokeWidth="1" />
          <line x1="32" y1="58" x2="52" y2="60" stroke="currentColor" strokeWidth="1" />
          <line x1="32" y1="70" x2="50" y2="72" stroke="currentColor" strokeWidth="1" />
          <line x1="68" y1="48" x2="88" y2="46" stroke="currentColor" strokeWidth="1" />
          <line x1="68" y1="60" x2="88" y2="58" stroke="currentColor" strokeWidth="1" />
        </svg>
      );

    case 'french-b-sl':
    default:
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 120 120"
          fill="none"
          className={baseClass}
        >
          <circle cx="62" cy="60" r="36" stroke="currentColor" strokeWidth="1.1" />
          <circle
            cx="62"
            cy="60"
            r="24"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="3 3"
          />
          <line x1="62" y1="18" x2="62" y2="102" stroke="currentColor" strokeWidth="1" />
          <line x1="20" y1="60" x2="104" y2="60" stroke="currentColor" strokeWidth="1" />
          <polygon
            points="62,38 68,60 62,82 56,60"
            stroke="currentColor"
            strokeWidth="1.1"
          />
        </svg>
      );
  }
}
