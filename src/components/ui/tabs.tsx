'use client';

import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const Tabs = TabsPrimitive.Root;

export const TabsList = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      'flex items-center gap-1 overflow-x-auto border-b border-[#E6E6E4] dark:border-[#2E2E2E]',
      className,
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

export const TabsTrigger = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      'relative inline-flex items-center gap-2 whitespace-nowrap px-3 py-2.5 text-sm font-medium text-[#787774] transition-colors duration-150 cursor-pointer hover:bg-[#F1F1EF] hover:text-[#37352F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#37352F]/30 data-[state=active]:text-[#37352F] data-[state=active]:after:absolute data-[state=active]:after:right-2 data-[state=active]:after:bottom-0 data-[state=active]:after:left-2 data-[state=active]:after:h-[2px] data-[state=active]:after:bg-[#37352F] dark:text-[#9B9A97] dark:hover:bg-[#2A2A2A] dark:hover:text-[#EBEBEB] dark:focus-visible:ring-[#EBEBEB]/30 dark:data-[state=active]:text-[#EBEBEB] dark:data-[state=active]:after:bg-[#EBEBEB]',
      className,
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

export const TabsContent = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn('pt-5 focus-visible:outline-none', className)}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;
