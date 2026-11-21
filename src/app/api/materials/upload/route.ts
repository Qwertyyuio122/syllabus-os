import { NextResponse } from 'next/server';
import { z } from 'zod';
import { createClient } from '@/lib/supabase/server';
import {
  GeminiConfigError,
  GeminiGenerationError,
  getGeminiErrorStatus,
} from '@/lib/gemini/client';
import {
  PastedMaterialJsonSchema,
  StorageUploadJsonSchema,
} from '@/lib/gemini/schemas';
import {
  extractTextFromBuffer,
  MaterialExtractionError,
  sanitizeExtractedText,
} from '@/lib/parsers/extract-text';

export const maxDuration = 60;

const UuidSchema = z.string().uuid();

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

async function verifySubjectAndTopic(
  supabase: Awaited<ReturnType<typeof createClient>>,
  userId: string,
  subjectId: string,
  topicId: string | null | undefined,
): Promise<
  | { ok: true; subject: { id: string; slug: string }; validTopicId: string | null }
  | { ok: false; response: NextResponse }
> {
  const { data: subject, error: subjectError } = await supabase
    .from('subjects')
    .select('id, slug')
    .eq('id', subjectId)
    .eq('user_id', userId)
    .maybeSingle();

  if (subjectError) {
    return {
      ok: false,
      response: NextResponse.json(
        { error: `Failed to verify subject: ${subjectError.message}` },
        { status: 500 },
      ),
    };
  }
  if (!subject) {
    return {
      ok: false,
      response: NextResponse.json({ error: 'Subject not found.' }, { status: 404 }),
    };
  }

  const normalizedTopicId = topicId && topicId.trim() ? topicId.trim() : null;
  if (normalizedTopicId) {
    const topicUuidCheck = UuidSchema.safeParse(normalizedTopicId);
    if (!topicUuidCheck.success) {
      return {
        ok: false,
        response: NextResponse.json(
          { error: 'topicId must be a valid UUID.' },
          { status: 400 },
        ),
      };
    }

    const { data: topic, error: topicError } = await supabase
      .from('syllabus_topics')
      .select('id')
      .eq('id', normalizedTopicId)
      .eq('subject_id', subject.id)
      .eq('user_id', userId)
      .maybeSingle();

    if (topicError) {
      return {
        ok: false,
        response: NextResponse.json(
          { error: `Failed to verify syllabus topic: ${topicError.message}` },
          { status: 500 },
        ),
      };
    }
    if (!topic) {
      return {
        ok: false,
        response: NextResponse.json(
          { error: 'Selected syllabus topic was not found for this subject.' },
          { status: 404 },
        ),
      };
    }
  }

  return { ok: true, subject, validTopicId: normalizedTopicId };
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

    const contentType = request.headers.get('content-type') ?? '';

    // (a) Multipart FormData upload (direct upload <= 4 MB)
    if (contentType.includes('multipart/form-data')) {
      const formData = await request.formData();
      const fileEntry = formData.get('file');
      const subjectIdEntry = formData.get('subjectId');
      const topicIdEntry = formData.get('topicId');

      if (!(fileEntry instanceof File)) {
        return NextResponse.json(
          { error: 'A valid file field is required in multipart upload.' },
          { status: 400 },
        );
      }
      if (typeof subjectIdEntry !== 'string' || !UuidSchema.safeParse(subjectIdEntry).success) {
        return NextResponse.json(
          { error: 'A valid subjectId UUID is required.' },
          { status: 400 },
        );
      }

      const topicId =
        typeof topicIdEntry === 'string' && topicIdEntry.trim()
          ? topicIdEntry.trim()
          : null;

      const ownership = await verifySubjectAndTopic(
        supabase,
        user.id,
        subjectIdEntry,
        topicId,
      );
      if (!ownership.ok) return ownership.response;

      const buffer = Buffer.from(await fileEntry.arrayBuffer());
      const { fileType, extractedText } = await extractTextFromBuffer({
        buffer,
        fileName: fileEntry.name,
        mimeType: fileEntry.type,
      });

      const safeName = sanitizeStorageFileName(fileEntry.name);
      const storagePath = `${user.id}/${ownership.subject.slug}/${Date.now()}-${safeName}`;

      const { data: uploaded, error: storageError } = await supabase.storage
        .from('course-materials')
        .upload(storagePath, buffer, {
          contentType: fileEntry.type || undefined,
          upsert: false,
        });

      if (storageError) {
        return NextResponse.json(
          { error: `Failed to store file in Supabase Storage: ${storageError.message}` },
          { status: 500 },
        );
      }

      const finalStoragePath = uploaded?.path ?? storagePath;
      const { data: material, error: insertError } = await supabase
        .from('course_materials')
        .insert({
          user_id: user.id,
          subject_id: ownership.subject.id,
          topic_id: ownership.validTopicId,
          file_name: fileEntry.name,
          file_type: fileType,
          storage_path: finalStoragePath,
          external_url: null,
          extracted_text: extractedText,
          generation_status: 'uploaded',
        })
        .select('*')
        .single();

      if (insertError || !material) {
        await supabase.storage
          .from('course-materials')
          .remove([finalStoragePath])
          .catch(() => undefined);

        return NextResponse.json(
          { error: insertError?.message ?? 'Failed to save material record.' },
          { status: 500 },
        );
      }

      return NextResponse.json({ material }, { status: 201 });
    }

    // (b) & (c) JSON upload (signed Storage object OR pasted lecture notes)
    let rawBody: unknown;
    try {
      rawBody = await request.json();
    } catch {
      return NextResponse.json(
        { error: 'Expected multipart/form-data or valid JSON body.' },
        { status: 400 },
      );
    }

    if (
      typeof rawBody === 'object' &&
      rawBody !== null &&
      'storagePath' in rawBody
    ) {
      const parsed = StorageUploadJsonSchema.safeParse(rawBody);
      if (!parsed.success) {
        return NextResponse.json(
          { error: parsed.error.issues[0]?.message ?? 'Invalid upload payload.' },
          { status: 400 },
        );
      }

      const { storagePath, fileName, mimeType, subjectId, topicId } = parsed.data;
      if (!storagePath.startsWith(`${user.id}/`) || storagePath.includes('..')) {
        return NextResponse.json(
          { error: 'Forbidden storage path.' },
          { status: 403 },
        );
      }

      const ownership = await verifySubjectAndTopic(
        supabase,
        user.id,
        subjectId,
        topicId,
      );
      if (!ownership.ok) return ownership.response;

      const { data: downloadedBlob, error: downloadError } =
        await supabase.storage.from('course-materials').download(storagePath);

      if (downloadError || !downloadedBlob) {
        return NextResponse.json(
          {
            error:
              downloadError?.message ??
              'Could not download uploaded file from Storage.',
          },
          { status: 404 },
        );
      }

      const buffer = Buffer.from(await downloadedBlob.arrayBuffer());
      const { fileType, extractedText } = await extractTextFromBuffer({
        buffer,
        fileName,
        mimeType: mimeType ?? downloadedBlob.type,
      });

      const { data: material, error: insertError } = await supabase
        .from('course_materials')
        .insert({
          user_id: user.id,
          subject_id: ownership.subject.id,
          topic_id: ownership.validTopicId,
          file_name: fileName,
          file_type: fileType,
          storage_path: storagePath,
          external_url: null,
          extracted_text: extractedText,
          generation_status: 'uploaded',
        })
        .select('*')
        .single();

      if (insertError || !material) {
        return NextResponse.json(
          { error: insertError?.message ?? 'Failed to save material record.' },
          { status: 500 },
        );
      }

      return NextResponse.json({ material }, { status: 201 });
    }

    // (c) Pasted lecture / Drive notes
    const pastedParsed = PastedMaterialJsonSchema.safeParse(rawBody);
    if (!pastedParsed.success) {
      return NextResponse.json(
        {
          error:
            pastedParsed.error.issues[0]?.message ??
            'Invalid pasted notes payload.',
        },
        { status: 400 },
      );
    }

    const { pastedTitle, pastedText, subjectId, topicId } = pastedParsed.data;
    const ownership = await verifySubjectAndTopic(
      supabase,
      user.id,
      subjectId,
      topicId,
    );
    if (!ownership.ok) return ownership.response;

    const cleanText = sanitizeExtractedText(pastedText);
    if (!cleanText) {
      return NextResponse.json(
        { error: 'Pasted text cannot be empty.' },
        { status: 400 },
      );
    }

    const { data: material, error: insertError } = await supabase
      .from('course_materials')
      .insert({
        user_id: user.id,
        subject_id: ownership.subject.id,
        topic_id: ownership.validTopicId,
        file_name: pastedTitle,
        file_type: 'md',
        storage_path: null,
        external_url: null,
        extracted_text: cleanText,
        generation_status: 'uploaded',
      })
      .select('*')
      .single();

    if (insertError || !material) {
      return NextResponse.json(
        { error: insertError?.message ?? 'Failed to save pasted notes.' },
        { status: 500 },
      );
    }

    return NextResponse.json({ material }, { status: 201 });
  } catch (error) {
    if (error instanceof MaterialExtractionError) {
      return NextResponse.json(
        { error: error.message },
        { status: error.status },
      );
    }
    if (
      error instanceof GeminiConfigError ||
      error instanceof GeminiGenerationError
    ) {
      return NextResponse.json(
        { error: error.message },
        { status: getGeminiErrorStatus(error) },
      );
    }
    const message =
      error instanceof Error ? error.message : 'Unexpected server error.';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
