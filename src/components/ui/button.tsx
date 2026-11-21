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
    'bg-[#37352F] text-white border border-[#37352F] hover:bg-[#2F2D28] active:bg-[#262420] dark:bg-[#EBEBEB] dark:text-[#191919] dark:border-[#EBEBEB] dark:hover:bg-[#DADAD8] dark:active:bg-[#CCCCCC]',
  secondary:
    'bg-[#F1F1EF] text-[#37352F] border border-[#E6E6E4] hover:bg-[#E8E8E5] active:bg-[#DFDFDC] dark:bg-[#2A2A2A] dark:text-[#EBEBEB] dark:border-[#2E2E2E] dark:hover:bg-[#323232] dark:active:bg-[#3A3A3A]',
  outline:
    'bg-white text-[#37352F] border border-[#E6E6E4] hover:bg-[#F1F1EF] active:bg-[#E8E8E5] dark:bg-[#191919] dark:text-[#EBEBEB] dark:border-[#2E2E2E] dark:hover:bg-[#2A2A2A] dark:active:bg-[#323232]',
  ghost:
    'bg-transparent text-[#37352F] border border-transparent hover:bg-[#F1F1EF] active:bg-[#E8E8E5] dark:text-[#EBEBEB] dark:hover:bg-[#2A2A2A] dark:active:bg-[#323232]',
  danger:
    'bg-white text-[#9B3B3B] border border-[#E6D0D0] hover:bg-[#FAF2F2] active:bg-[#F5E8E8] dark:bg-[#191919] dark:text-[#E59898] dark:border-[#4A2E2E] dark:hover:bg-[#291F1F]',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'h-8 px-2.5 text-xs rounded-md gap-1.5',
  md: 'h-9 px-3.5 text-sm rounded-md gap-2',
  lg: 'h-10 px-4 text-sm rounded-md gap-2',
  icon: 'h-8 w-8 p-0 rounded-md',
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
          'inline-flex items-center justify-center font-medium whitespace-nowrap transition-colors duration-150 cursor-pointer disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#37352F]/30 dark:focus-visible:ring-[#EBEBEB]/30',
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
