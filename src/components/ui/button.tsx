import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'ghost'
  | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg' | 'icon';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-[#111318] text-white border border-[#111318] shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_3px_10px_-3px_rgba(15,23,42,0.28)] hover:bg-[#1E222B] active:scale-[0.985] dark:bg-[#F5F7FA] dark:text-[#0B0D12] dark:border-[#F5F7FA] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.85),0_4px_12px_-3px_rgba(0,0,0,0.5)] dark:hover:bg-[#E5E9F0]',
  secondary:
    'glass-surface text-[#111318] hover:bg-white/90 active:scale-[0.985] dark:text-[#F5F7FA] dark:hover:bg-white/[0.13]',
  outline:
    'glass-pill text-[#111318] hover:bg-white/95 active:scale-[0.985] dark:text-[#F5F7FA] dark:hover:bg-white/[0.13]',
  ghost:
    'bg-transparent text-[#111318] border border-transparent hover:bg-black/[0.055] active:scale-[0.985] dark:text-[#F5F7FA] dark:hover:bg-white/[0.08]',
  danger:
    'bg-white/80 text-[#991B1B] border border-red-700/20 backdrop-blur-md hover:bg-red-50/90 active:scale-[0.985] dark:bg-red-950/60 dark:text-[#FCA5A5] dark:border-red-400/25 dark:hover:bg-red-950/80',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'h-8 px-3 text-xs rounded-xl gap-1.5',
  md: 'h-9 px-3.5 text-sm rounded-xl gap-2',
  lg: 'h-10 px-4 text-sm rounded-xl gap-2',
  icon: 'h-8 w-8 p-0 rounded-xl',
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'outline',
      size = 'md',
      asChild = false,
      type = 'button',
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        ref={ref}
        type={asChild ? undefined : type}
        className={cn(
          'inline-flex cursor-pointer items-center justify-center font-medium whitespace-nowrap transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111318]/25 dark:focus-visible:ring-[#F5F7FA]/25',
          variantClasses[variant],
          sizeClasses[size],
          className,
        )}
        {...props}
      />
    );
  },
);

Button.displayName = 'Button';
