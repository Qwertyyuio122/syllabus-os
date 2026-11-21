'use client';

import * as React from 'react';
import type { ProfileRow } from '@/types/database';
import {
  CommandPalette,
  type CommandPaletteItem,
} from '@/components/layout/CommandPalette';
import {
  Sidebar,
  type SidebarSubjectSummary,
} from '@/components/layout/Sidebar';

interface DashboardChromeProps {
  profile: ProfileRow | null;
  userEmail: string;
  subjects: SidebarSubjectSummary[];
  commandItems: CommandPaletteItem[];
}

export function DashboardChrome({
  profile,
  userEmail,
  subjects,
  commandItems,
}: DashboardChromeProps) {
  const [paletteOpen, setPaletteOpen] = React.useState(false);

  return (
    <>
      <Sidebar
        profile={profile}
        userEmail={userEmail}
        subjects={subjects}
        onOpenCommandPalette={() => setPaletteOpen(true)}
      />
      <CommandPalette
        open={paletteOpen}
        onOpenChange={setPaletteOpen}
        items={commandItems}
      />
    </>
  );
}
