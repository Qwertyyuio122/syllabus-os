'use client';

import * as React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface GlassSpotlightProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

/**
 * Tracks pointer coordinates into `--mx` and `--my` CSS custom properties
 * for a translucent Liquid Glass specular highlight across surfaces without re-renders.
 */
export function GlassSpotlight({
  children,
  className,
  onPointerMove,
  ...props
}: GlassSpotlightProps) {
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`);
    onPointerMove?.(e);
  };

  return (
    <div
      onPointerMove={handlePointerMove}
      className={cn('glass-specular relative overflow-hidden', className)}
      {...props}
    >
      {children}
    </div>
  );
}
