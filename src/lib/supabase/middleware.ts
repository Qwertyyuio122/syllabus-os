import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

function isAllowedPublicAssetOrCallback(pathname: string): boolean {
  return (
    pathname.startsWith('/_next/static') ||
    pathname.startsWith('/_next/image') ||
    pathname === '/favicon.ico' ||
    pathname === '/auth/callback' ||
    pathname.startsWith('/auth/callback/')
  );
}

function redirectWithCookies(
  request: NextRequest,
  targetPath: string,
  sourceResponse?: NextResponse,
): NextResponse {
  const url = request.nextUrl.clone();
  url.pathname = targetPath;
  url.search = '';

  const redirectResponse = NextResponse.redirect(url);
  if (sourceResponse) {
    sourceResponse.cookies.getAll().forEach((cookie) => {
      redirectResponse.cookies.set(cookie);
    });
  }
  return redirectResponse;
}

export async function updateSession(request: NextRequest): Promise<NextResponse> {
  const { pathname } = request.nextUrl;

  if (isAllowedPublicAssetOrCallback(pathname)) {
    return NextResponse.next({ request });
  }

  let supabaseResponse = NextResponse.next({ request });
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  let user: { id: string } | null = null;

  if (supabaseUrl && supabaseAnonKey) {
    const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => {
            request.cookies.set(name, value);
          });
          supabaseResponse = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) => {
            supabaseResponse.cookies.set(name, value, options);
          });
        },
      },
    });

    try {
      const {
        data: { user: verifiedUser },
      } = await supabase.auth.getUser();
      user = verifiedUser;
    } catch {
      user = null;
    }
  }

  if (!user && pathname.startsWith('/api/')) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  if (
    !user &&
    (pathname === '/dashboard' || pathname.startsWith('/dashboard/'))
  ) {
    return redirectWithCookies(request, '/login', supabaseResponse);
  }

  if (user && (pathname === '/' || pathname === '/login')) {
    return redirectWithCookies(request, '/dashboard', supabaseResponse);
  }

  return supabaseResponse;
}
