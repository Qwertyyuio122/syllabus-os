import { NextResponse } from 'next/server';
import {
  ensureUserSeeded,
  syncClassroomPackUpgrades,
} from '@/lib/seed-user';
import { createClient } from '@/lib/supabase/server';

export async function POST() {
  try {
    const supabase = await createClient();
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await ensureUserSeeded(supabase, user.id);
    const summary = await syncClassroomPackUpgrades(supabase, user.id, {
      force: true,
    });

    return NextResponse.json({
      synced: true,
      ...summary,
    });
  } catch (err) {
    console.error('[api/seed/sync] Failed:', err);
    return NextResponse.json(
      {
        error:
          err instanceof Error
            ? err.message
            : 'Failed to sync Classroom Pack v3.',
      },
      { status: 500 },
    );
  }
}
