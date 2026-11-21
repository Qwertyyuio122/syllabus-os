import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg' | 'icon';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-[#1D1D1F] text-white border border-[#1D1D1F] shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_2px_6px_-2px_rgba(0,0,0,0.22)] hover:bg-[#2C2C2E] active:scale-[0.985] dark:bg-[#F5F5F7] dark:text-[#111113] dark:border-[#F5F5F7] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.85),0_2px_8px_-2px_rgba(0,0,0,0.45)] dark:hover:bg-[#E5E5EA]',
  secondary:
    'glass-surface text-[#1D1D1F] hover:bg-white/90 active:scale-[0.985] dark:text-[#F5F5F7] dark:hover:bg-white/[0.12]',
  outline:
    'glass-pill text-[#1D1D1F] hover:bg-white/95 active:scale-[0.985] dark:text-[#F5F5F7] dark:hover:bg-white/[0.12]',
  ghost:
    'bg-transparent text-[#1D1D1F] border border-transparent hover:bg-black/[0.05] active:scale-[0.985] dark:text-[#F5F5F7] dark:hover:bg-white/[0.08]',
  danger:
    'bg-white/80 text-[#9B3B3B] border border-[#E6D0D0] backdrop-blur-md hover:bg-[#FAF2F2] active:scale-[0.985] dark:bg-[#291F1F]/80 dark:text-[#E59898] dark:border-[#4A2E2E] dark:hover:bg-[#332626]',
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
          'inline-flex items-center justify-center font-medium whitespace-nowrap transition-all duration-150 cursor-pointer disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D1D1F]/25 dark:focus-visible:ring-[#F5F5F7]/25',
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
