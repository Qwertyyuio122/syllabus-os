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
      'peer flex h-4 w-4 shrink-0 items-center justify-center rounded-[4px] border border-[#C8C7C3] bg-white transition-colors cursor-pointer hover:border-[#37352F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#37352F]/30 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-[#37352F] data-[state=checked]:bg-[#37352F] data-[state=checked]:text-white dark:border-[#454542] dark:bg-[#191919] dark:hover:border-[#EBEBEB] dark:data-[state=checked]:border-[#EBEBEB] dark:data-[state=checked]:bg-[#EBEBEB] dark:data-[state=checked]:text-[#191919]',
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
