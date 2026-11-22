'use client';

import * as React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface ProgressRingProps {
  /** Completion percentage from 0 to 100 */
  value: number;
  /** Diameter in pixels */
  size?: number;
  /** Ring stroke thickness in pixels */
  strokeWidth?: number;
  /** Tailwind text color class used by SVG currentColor (supports light/dark) */
  accentClassName?: string;
  /** Optional center caption (e.g. "75%") */
  centerLabel?: React.ReactNode;
  /** Accessible label */
  ariaLabel?: string;
  className?: string;
}

/**
 * Animated Apple-style SVG circular progress ring respecting prefers-reduced-motion.
 */
export function ProgressRing({
  value,
  size = 44,
  strokeWidth = 3.5,
  accentClassName = 'text-[#111318] dark:text-[#F5F7FA]',
  centerLabel,
  ariaLabel,
  className,
}: ProgressRingProps) {
  const clamped = Math.max(0, Math.min(100, Number.isFinite(value) ? value : 0));
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference - (clamped / 100) * circumference;

  return (
    <div
      className={cn(
        'relative inline-flex shrink-0 items-center justify-center',
        className,
      )}
      style={{ width: size, height: size }}
      role={ariaLabel ? 'img' : undefined}
      aria-label={ariaLabel}
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="-rotate-90"
        aria-hidden="true"
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className="text-black/[0.08] dark:text-white/[0.11]"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          className={cn(
            accentClassName,
            'transition-[stroke-dashoffset] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none',
          )}
        />
      </svg>
      {centerLabel !== undefined && (
        <span className="absolute inset-0 flex items-center justify-center font-mono text-[10px] font-semibold tabular-nums text-[#111318] dark:text-[#F5F7FA]">
          {centerLabel}
        </span>
      )}
    </div>
  );
}

export interface GlassRevealProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  delayMs?: number;
}

/**
 * Subtle spring entrance wrapper for Liquid Glass panels.
 * Uses CSS keyframes so SSR & initial visibility assertions remain instant and flicker-free.
 */
export function GlassReveal({
  children,
  delayMs = 0,
  className,
  style,
  ...props
}: GlassRevealProps) {
  return (
    <div
      className={cn('animate-glass-reveal', className)}
      style={
        delayMs > 0
          ? { ...style, animationDelay: `${delayMs}ms` }
          : style
      }
      {...props}
    >
      {children}
    </div>
  );
}

export interface AnimatedCounterProps {
  value: number;
  durationMs?: number;
  className?: string;
  formatter?: (val: number) => string;
}

/**
 * Smooth numeric counter that renders exact value immediately on mount (SSR/E2E safe)
 * and smoothly interpolates whenever `value` updates, respecting prefers-reduced-motion.
 */
export function AnimatedCounter({
  value,
  durationMs = 360,
  className,
  formatter,
}: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = React.useState(value);
  const currentRef = React.useRef(value);

  React.useEffect(() => {
    const startVal = currentRef.current;
    if (startVal === value) return;

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced || durationMs <= 0) {
      currentRef.current = value;
      setDisplayValue(value);
      return;
    }

    let rafId = 0;
    const startTime = performance.now();

    const step = (now: number) => {
      const elapsed = now - startTime;
      const t = Math.min(1, elapsed / durationMs);
      // Cubic ease-out matching spring curve
      const eased = 1 - Math.pow(1 - t, 3);
      const next = Math.round(startVal + (value - startVal) * eased);
      currentRef.current = next;
      setDisplayValue(next);
      if (t < 1) {
        rafId = window.requestAnimationFrame(step);
      } else {
        currentRef.current = value;
        setDisplayValue(value);
      }
    };

    rafId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(rafId);
  }, [value, durationMs]);

  return (
    <span className={cn('tabular-nums', className)}>
      {formatter ? formatter(displayValue) : displayValue}
    </span>
  );
}
