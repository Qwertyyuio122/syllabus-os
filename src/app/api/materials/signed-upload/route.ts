import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { SignedUploadRequestSchema } from '@/lib/gemini/schemas';
import {
  detectMaterialFileType,
  MaterialExtractionError,
} from '@/lib/parsers/extract-text';

function sanitizeStorageFileName(fileName: string): string {
  const base = fileName
    .trim()
    .split(/[\\/]/)
    .pop()
    ?.replace(/[^a-zA-Z0-9._-]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^[.-]+/, '');

  const safe = base && base.length > 0 ? base : 'material';
  return safe.slice(0, 140);
}

export async function POST(request: Request) {
  try {
    const supabase = await createClient();
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    let rawBody: unknown;
    try {
      rawBody = await request.json();
    } catch {
      return NextResponse.json(
        { error: 'Invalid JSON request body.' },
        { status: 400 },
      );
    }

    const parsed = SignedUploadRequestSchema.safeParse(rawBody);
    if (!parsed.success) {
      return NextResponse.json(
        {
          error:
            parsed.error.issues[0]?.message ?? 'Invalid signed upload request.',
        },
        { status: 400 },
      );
    }

    const { fileName, subjectId, mimeType } = parsed.data;

    // Fail fast before creating a signed upload URL for unsupported file types
    detectMaterialFileType(fileName, mimeType);

    const { data: subject, error: subjectError } = await supabase
      .from('subjects')
      .select('id, slug')
      .eq('id', subjectId)
      .eq('user_id', user.id)
      .maybeSingle();

    if (subjectError) {
      return NextResponse.json(
        { error: `Failed to verify subject: ${subjectError.message}` },
        { status: 500 },
      );
    }
    if (!subject) {
      return NextResponse.json(
        { error: 'Subject not found.' },
        { status: 404 },
      );
    }

    const safeName = sanitizeStorageFileName(fileName);
    const storagePath = `${user.id}/${subject.slug}/${Date.now()}-${safeName}`;

    const { data, error: signError } = await supabase.storage
      .from('course-materials')
      .createSignedUploadUrl(storagePath);

    if (signError || !data) {
      return NextResponse.json(
        {
          error:
            signError?.message ?? 'Failed to create signed upload URL.',
        },
        { status: 500 },
      );
    }

    return NextResponse.json({
      signedUrl: data.signedUrl,
      token: data.token,
      storagePath: data.path ?? storagePath,
    });
  } catch (error) {
    if (error instanceof MaterialExtractionError) {
      return NextResponse.json(
        { error: error.message },
        { status: error.status },
      );
    }
    const message =
      error instanceof Error ? error.message : 'Unexpected server error.';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
