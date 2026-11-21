import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { ensureUserSeeded } from '@/lib/seed-user';

function sanitizeNextPath(rawNext: string | null): string {
  if (!rawNext || !rawNext.startsWith('/') || rawNext.startsWith('//')) {
    return '/dashboard';
  }
  return rawNext;
}

function pickMetadataString(
  metadata: Record<string, unknown> | undefined,
  keys: string[],
): string | null {
  if (!metadata) {
    return null;
  }
  for (const key of keys) {
    const val = metadata[key];
    if (typeof val === 'string' && val.trim().length > 0) {
      return val.trim();
    }
  }
  return null;
}

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get('code');
  const nextPath = sanitizeNextPath(requestUrl.searchParams.get('next'));

  if (!code) {
    return NextResponse.redirect(new URL('/login?error=auth', request.url));
  }

  let supabase;
  try {
    supabase = await createClient();
  } catch (err) {
    console.error('Supabase server client init error in auth callback:', err);
    return NextResponse.redirect(new URL('/login?error=auth', request.url));
  }

  const { data, error } = await supabase.auth.exchangeCodeForSession(code);

  if (error || !data.user) {
    return NextResponse.redirect(new URL('/login?error=auth', request.url));
  }

  try {
    const user = data.user;
    const fullName = pickMetadataString(user.user_metadata, ['full_name', 'name']);
    const avatarUrl = pickMetadataString(user.user_metadata, ['avatar_url', 'picture']);

    const { error: profileError } = await supabase.from('profiles').upsert(
      {
        id: user.id,
        email: user.email ?? '',
        full_name: fullName,
        avatar_url: avatarUrl,
      },
      { onConflict: 'id' },
    );

    if (profileError) {
      console.error('Failed to upsert profile during auth callback:', profileError);
      await supabase.auth.signOut().catch(() => {});
      return NextResponse.redirect(new URL('/login?error=auth', request.url));
    }

    await ensureUserSeeded(supabase, user.id);

    return NextResponse.redirect(new URL(nextPath, request.url));
  } catch (err) {
    console.error('Post-login setup error:', err);
    await supabase.auth.signOut().catch(() => {});
    return NextResponse.redirect(new URL('/login?error=auth', request.url));
  }
}
