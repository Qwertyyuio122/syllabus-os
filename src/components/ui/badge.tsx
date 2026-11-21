import * as React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type BadgeVariant = 'default' | 'subtle' | 'outline' | 'solid' | 'success' | 'warning';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const badgeVariants: Record<BadgeVariant, string> = {
  default:
    'glass-pill text-[#1D1D1F] dark:text-[#F5F5F7]',
  subtle:
    'bg-black/[0.045] text-[#6E6E73] border border-black/[0.06] dark:bg-white/[0.06] dark:text-[#98989D] dark:border-white/[0.09]',
  outline:
    'bg-transparent text-[#6E6E73] border border-black/[0.1] dark:text-[#98989D] dark:border-white/[0.12]',
  solid:
    'bg-[#1D1D1F] text-white border border-[#1D1D1F] dark:bg-[#F5F5F7] dark:text-[#111113] dark:border-[#F5F5F7]',
  success:
    'bg-[#EEF5F0]/85 text-[#27533B] border border-[#CFE0D5] backdrop-blur-sm dark:bg-[#1C2A22]/85 dark:text-[#9FC3AD] dark:border-[#2E4336]',
  warning:
    'bg-[#FAF5EB]/85 text-[#755A25] border border-[#E6DBC2] backdrop-blur-sm dark:bg-[#2A2419]/85 dark:text-[#D5BD88] dark:border-[#423826]',
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
