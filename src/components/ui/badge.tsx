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
    'bg-[#F1F1EF] text-[#37352F] border border-[#E6E6E4] dark:bg-[#2A2A2A] dark:text-[#EBEBEB] dark:border-[#2E2E2E]',
  subtle:
    'bg-[#FBFBFA] text-[#787774] border border-[#E6E6E4] dark:bg-[#202020] dark:text-[#9B9A97] dark:border-[#2E2E2E]',
  outline:
    'bg-transparent text-[#787774] border border-[#E6E6E4] dark:text-[#9B9A97] dark:border-[#2E2E2E]',
  solid:
    'bg-[#37352F] text-white border border-[#37352F] dark:bg-[#EBEBEB] dark:text-[#191919] dark:border-[#EBEBEB]',
  success:
    'bg-[#F3F6F4] text-[#2F5E44] border border-[#DCE5DF] dark:bg-[#1E2621] dark:text-[#9FC3AD] dark:border-[#2D3B32]',
  warning:
    'bg-[#FAF7F0] text-[#785E2B] border border-[#EAE2CE] dark:bg-[#26221A] dark:text-[#D5BD88] dark:border-[#3A3325]',
};

export function Badge({
  className,
  variant = 'default',
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded px-1.5 py-0.5 text-[11px] font-medium leading-tight tracking-tight',
        badgeVariants[variant],
        className,
      )}
      {...props}
    />
  );
}
