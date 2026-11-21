'use client';

import * as React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface TabsContextValue {
  baseId: string;
  value: string;
  onValueChange: (nextValue: string) => void;
}

const TabsContext = React.createContext<TabsContextValue | null>(null);

function useTabsContext(componentName: string): TabsContextValue {
  const ctx = React.useContext(TabsContext);
  if (!ctx) {
    throw new Error(`${componentName} must be used within a <Tabs> root.`);
  }
  return ctx;
}

export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  idPrefix?: string;
}

export function Tabs({
  value: controlledValue,
  defaultValue = '',
  onValueChange,
  idPrefix,
  className,
  children,
  ...props
}: TabsProps) {
  const reactId = React.useId();
  const [uncontrolledValue, setUncontrolledValue] = React.useState(defaultValue);
  const isControlled = controlledValue !== undefined;
  const activeValue = isControlled ? controlledValue : uncontrolledValue;

  const handleValueChange = React.useCallback(
    (nextValue: string) => {
      if (!isControlled) {
        setUncontrolledValue(nextValue);
      }
      onValueChange?.(nextValue);
    },
    [isControlled, onValueChange],
  );

  const baseId = idPrefix ?? `tabs-${reactId}`;

  const contextValue = React.useMemo<TabsContextValue>(
    () => ({
      baseId,
      value: activeValue,
      onValueChange: handleValueChange,
    }),
    [baseId, activeValue, handleValueChange],
  );

  return (
    <TabsContext.Provider value={contextValue}>
      <div data-orientation="horizontal" className={className} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  );
}

export const TabsList = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, onKeyDown, ...props }, ref) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    onKeyDown?.(e);
    if (e.defaultPrevented) return;
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(e.key)) return;

    const listEl = e.currentTarget;
    const tabs = Array.from(
      listEl.querySelectorAll<HTMLButtonElement>('[role="tab"]:not([disabled])'),
    );
    if (tabs.length === 0) return;

    const currentIdx = tabs.indexOf(document.activeElement as HTMLButtonElement);
    if (currentIdx === -1) return;

    let nextIdx = currentIdx;
    if (e.key === 'ArrowRight') {
      nextIdx = (currentIdx + 1) % tabs.length;
    } else if (e.key === 'ArrowLeft') {
      nextIdx = (currentIdx - 1 + tabs.length) % tabs.length;
    } else if (e.key === 'Home') {
      nextIdx = 0;
    } else if (e.key === 'End') {
      nextIdx = tabs.length - 1;
    }

    e.preventDefault();
    const nextTab = tabs[nextIdx];
    nextTab?.focus();
    nextTab?.click();
  };

  return (
    <div
      ref={ref}
      role="tablist"
      aria-orientation="horizontal"
      onKeyDown={handleKeyDown}
      className={cn(
        'glass-surface inline-flex max-w-full items-center gap-1 overflow-x-auto rounded-2xl p-1',
        className,
      )}
      {...props}
    />
  );
});
TabsList.displayName = 'TabsList';

export interface TabsTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
}

export const TabsTrigger = React.forwardRef<HTMLButtonElement, TabsTriggerProps>(
  ({ className, value, disabled = false, onClick, ...props }, ref) => {
    const ctx = useTabsContext('TabsTrigger');
    const isActive = ctx.value === value;
    const triggerId = `${ctx.baseId}-trigger-${value}`;
    const contentId = `${ctx.baseId}-content-${value}`;

    return (
      <button
        ref={ref}
        type="button"
        role="tab"
        id={triggerId}
        aria-selected={isActive}
        aria-controls={contentId}
        data-state={isActive ? 'active' : 'inactive'}
        data-disabled={disabled ? '' : undefined}
        disabled={disabled}
        tabIndex={isActive ? 0 : -1}
        onClick={(e) => {
          onClick?.(e);
          if (!e.defaultPrevented && !disabled) {
            ctx.onValueChange(value);
          }
        }}
        className={cn(
          'relative inline-flex shrink-0 items-center gap-2 rounded-xl px-3.5 py-2 text-[13px] font-medium whitespace-nowrap text-[#6E6E73] transition-all duration-200 cursor-pointer hover:bg-black/[0.04] hover:text-[#1D1D1F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D1D1F]/25 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white/95 data-[state=active]:text-[#1D1D1F] data-[state=active]:shadow-[0_2px_8px_-2px_rgba(0,0,0,0.09),inset_0_1px_0_rgba(255,255,255,0.95)] dark:text-[#98989D] dark:hover:bg-white/[0.06] dark:hover:text-[#F5F5F7] dark:focus-visible:ring-[#F5F5F7]/25 dark:data-[state=active]:bg-white/[0.14] dark:data-[state=active]:text-[#F5F5F7] dark:data-[state=active]:shadow-[0_2px_10px_-2px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.14)]',
          className,
        )}
        {...props}
      />
    );
  },
);
TabsTrigger.displayName = 'TabsTrigger';

export interface TabsContentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}

export const TabsContent = React.forwardRef<HTMLDivElement, TabsContentProps>(
  ({ className, value, children, ...props }, ref) => {
    const ctx = useTabsContext('TabsContent');
    const isActive = ctx.value === value;
    const triggerId = `${ctx.baseId}-trigger-${value}`;
    const contentId = `${ctx.baseId}-content-${value}`;

    return (
      <div
        ref={ref}
        role="tabpanel"
        id={contentId}
        aria-labelledby={triggerId}
        data-state={isActive ? 'active' : 'inactive'}
        hidden={!isActive}
        tabIndex={0}
        className={cn('pt-5 focus-visible:outline-none', className)}
        {...props}
      >
        {isActive ? children : null}
      </div>
    );
  },
);
TabsContent.displayName = 'TabsContent';
