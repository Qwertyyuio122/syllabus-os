import React from 'react';

export const APP_NAME = 'SyllabusOS';
export const APP_TAGLINE = 'IB Diploma Revision & Markscheme Workspace';
export const APP_COHORT = 'IB Diploma Programme · Open Workspace';

export interface BrandMonogramProps {
  className?: string;
  size?: number;
}

/**
 * Minimal architectural grid & page-index monogram representing structured IB notes.
 * Strictly monochrome via currentColor; zero mascot or gamified elements.
 */
export function BrandMonogram({
  className = 'text-foreground',
  size = 22,
}: BrandMonogramProps): React.ReactElement {
  return React.createElement(
    'svg',
    {
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
      className,
      'aria-hidden': 'true',
    },
    React.createElement('rect', {
      x: 3,
      y: 3,
      width: 18,
      height: 18,
      rx: 4,
      stroke: 'currentColor',
      strokeWidth: 1.75,
    }),
    React.createElement('line', {
      x1: 9,
      y1: 3,
      x2: 9,
      y2: 21,
      stroke: 'currentColor',
      strokeWidth: 1.5,
    }),
    React.createElement('line', {
      x1: 12.5,
      y1: 8.5,
      x2: 17.5,
      y2: 8.5,
      stroke: 'currentColor',
      strokeWidth: 1.5,
      strokeLinecap: 'round',
    }),
    React.createElement('line', {
      x1: 12.5,
      y1: 12.5,
      x2: 17.5,
      y2: 12.5,
      stroke: 'currentColor',
      strokeWidth: 1.5,
      strokeLinecap: 'round',
    }),
    React.createElement('line', {
      x1: 12.5,
      y1: 16.5,
      x2: 15.5,
      y2: 16.5,
      stroke: 'currentColor',
      strokeWidth: 1.5,
      strokeLinecap: 'round',
    }),
  );
}
