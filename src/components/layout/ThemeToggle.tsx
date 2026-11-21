'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ThemeToggle({ compact = false }: { compact?: boolean }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size={compact ? 'icon' : 'sm'}
        aria-label="Toggle color theme"
        disabled
        className="text-[#787774] dark:text-[#9B9A97]"
      >
        <Sun className="h-4 w-4" />
        {!compact && <span className="text-xs">Theme</span>}
      </Button>
    );
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <Button
      variant="ghost"
      size={compact ? 'icon' : 'sm'}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="text-[#787774] hover:text-[#37352F] dark:text-[#9B9A97] dark:hover:text-[#EBEBEB]"
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      {!compact && (
        <span className="text-xs">{isDark ? 'Light mode' : 'Dark mode'}</span>
      )}
    </Button>
  );
}
