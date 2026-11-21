'use client';

import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const Checkbox = React.forwardRef<
  React.ComponentRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      'peer flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-md border border-black/20 bg-white/85 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] transition-all cursor-pointer hover:border-[#1D1D1F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D1D1F]/25 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-[#1D1D1F] data-[state=checked]:bg-[#1D1D1F] data-[state=checked]:text-white dark:border-white/20 dark:bg-white/[0.06] dark:shadow-none dark:hover:border-[#F5F5F7] dark:data-[state=checked]:border-[#F5F5F7] dark:data-[state=checked]:bg-[#F5F5F7] dark:data-[state=checked]:text-[#111113]',
      className,
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator className="flex items-center justify-center text-current">
      <Check className="h-3 w-3 stroke-[2.5]" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;
