import * as React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type BadgeVariant =
  | 'default'
  | 'subtle'
  | 'outline'
  | 'solid'
  | 'success'
  | 'warning';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const badgeVariants: Record<BadgeVariant, string> = {
  default: 'glass-pill text-[#111318] dark:text-[#F5F7FA]',
  subtle:
    'bg-black/[0.045] text-[#525866] border border-black/[0.07] dark:bg-white/[0.07] dark:text-[#9AA3B2] dark:border-white/[0.1]',
  outline:
    'bg-transparent text-[#525866] border border-black/[0.11] dark:text-[#9AA3B2] dark:border-white/[0.14]',
  solid:
    'bg-[#111318] text-white border border-[#111318] dark:bg-[#F5F7FA] dark:text-[#0B0D12] dark:border-[#F5F7FA]',
  success:
    'bg-emerald-50/90 text-[#065F46] border border-emerald-700/20 backdrop-blur-sm dark:bg-emerald-950/70 dark:text-[#6EE7B7] dark:border-emerald-400/25',
  warning:
    'bg-amber-50/90 text-[#78350F] border border-amber-700/20 backdrop-blur-sm dark:bg-amber-950/70 dark:text-[#FCD34D] dark:border-amber-400/25',
};

export function Badge({
  className,
  variant = 'default',
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-medium leading-tight tracking-tight',
        badgeVariants[variant],
        className,
      )}
      {...props}
    />
  );
}
