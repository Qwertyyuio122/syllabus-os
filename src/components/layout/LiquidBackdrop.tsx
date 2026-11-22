'use client';

import * as React from 'react';
import { usePathname } from 'next/navigation';
import {
  resolveThemeKeyFromPathname,
  SUBJECT_THEMES,
} from '@/config/subject-themes';

/**
 * Fixed luminous ambient refraction backdrop rendered behind Liquid Glass panels.
 * Reacts gently to the active subject route so frosted surfaces refract authentic
 * academic color caustics in both Light (#E9EFF7) and Dark (#0B0D12) modes.
 */
export function LiquidBackdrop() {
  const pathname = usePathname() || '/dashboard';
  const themeKey = resolveThemeKeyFromPathname(pathname);
  const theme = SUBJECT_THEMES[themeKey];

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#E9EFF7] transition-colors duration-500 dark:bg-[#0B0D12]"
    >
      {/* Light mode luminous studio horizon + diffused subject refraction orbs */}
      <div className="absolute inset-0 opacity-100 transition-opacity duration-500 dark:opacity-0">
        <div
          className="absolute -top-28 -left-24 h-[540px] w-[580px] rounded-full blur-[78px] transition-colors duration-700 motion-reduce:transition-none"
          style={{
            background: `radial-gradient(circle, rgba(255,255,255,0.96) 0%, ${theme.glowOrbLight} 46%, rgba(233,239,247,0) 76%)`,
          }}
        />
        <div
          className="absolute top-[8%] -right-20 h-[520px] w-[540px] rounded-full blur-[82px] transition-colors duration-700 motion-reduce:transition-none"
          style={{
            background: `radial-gradient(circle, ${theme.glowOrbLight} 0%, ${theme.glowOrbSecondaryLight} 48%, rgba(233,239,247,0) 76%)`,
          }}
        />
        <div
          className="absolute top-[42%] left-[18%] h-[460px] w-[620px] rounded-full blur-[86px] transition-colors duration-700 motion-reduce:transition-none"
          style={{
            background: `radial-gradient(circle, ${theme.glowOrbSecondaryLight} 0%, rgba(255,255,255,0.72) 50%, rgba(233,239,247,0) 78%)`,
          }}
        />
        <div
          className="absolute -bottom-32 right-[16%] h-[440px] w-[560px] rounded-full blur-[88px] transition-colors duration-700 motion-reduce:transition-none"
          style={{
            background: `radial-gradient(circle, ${theme.glowOrbLight} 0%, ${theme.glowOrbSecondaryLight} 46%, rgba(233,239,247,0) 76%)`,
          }}
        />
      </div>

      {/* Dark mode obsidian-sapphire studio wells + diffused subject refraction */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 dark:opacity-100">
        <div
          className="absolute -top-36 -left-24 h-[520px] w-[520px] rounded-full blur-[110px] transition-colors duration-700 motion-reduce:transition-none"
          style={{
            background: `radial-gradient(circle, ${theme.glowOrbDark} 0%, rgba(11,13,18,0) 72%)`,
          }}
        />
        <div
          className="absolute top-[14%] -right-24 h-[480px] w-[480px] rounded-full blur-[115px] transition-colors duration-700 motion-reduce:transition-none"
          style={{
            background: `radial-gradient(circle, ${theme.glowOrbSecondaryDark} 0%, rgba(11,13,18,0) 74%)`,
          }}
        />
        <div
          className="absolute -bottom-40 left-[32%] h-[440px] w-[580px] rounded-full blur-[120px] transition-colors duration-700 motion-reduce:transition-none"
          style={{
            background: `radial-gradient(circle, rgba(255,255,255,0.04) 0%, ${theme.glowOrbDark} 42%, rgba(11,13,18,0) 74%)`,
          }}
        />
      </div>

      {/* Subtle architectural optical lattice masked softly toward viewport edges */}
      <div
        className="glass-optical-grid absolute inset-0 opacity-65 dark:opacity-50"
        style={{
          maskImage:
            'radial-gradient(ellipse 80% 70% at 50% 35%, black 15%, transparent 80%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 70% at 50% 35%, black 15%, transparent 80%)',
        }}
      />
    </div>
  );
}
