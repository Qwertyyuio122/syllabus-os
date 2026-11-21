import { redirect } from 'next/navigation';
import { CORE_CLASSROOM_RESOURCES } from '@/data/classroom-seed';
import { ensureUserSeeded } from '@/lib/seed-user';
import { createClient } from '@/lib/supabase/server';
import { CoreWorkspaceClient } from '@/components/core-ee-tok/CoreWorkspaceClient';
import type { CoreProjectRow } from '@/types/database';

export const dynamic = 'force-dynamic';

export default async function CoreWorkspacePage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  await ensureUserSeeded(supabase, user.id);

  const { data: coreProjectsData } = await supabase
    .from('core_projects')
    .select('*')
    .eq('user_id', user.id)
    .order('updated_at', { ascending: false });

  const coreProjects = (coreProjectsData as CoreProjectRow[] | null) ?? [];

  return (
    <CoreWorkspaceClient
      userId={user.id}
      initialProjects={coreProjects}
      coreResources={CORE_CLASSROOM_RESOURCES}
    />
  );
}
