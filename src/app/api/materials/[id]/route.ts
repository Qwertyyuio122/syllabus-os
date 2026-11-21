import { NextResponse } from 'next/server';
import { z } from 'zod';
import { createClient } from '@/lib/supabase/server';
import { UpdateMaterialRequestSchema } from '@/lib/gemini/schemas';

const UuidSchema = z.string().uuid();

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const supabase = await createClient();
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;
    if (!UuidSchema.safeParse(id).success) {
      return NextResponse.json(
        { error: 'Material id must be a valid UUID.' },
        { status: 400 },
      );
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

    const parsed = UpdateMaterialRequestSchema.safeParse(rawBody);
    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message ?? 'Invalid update payload.' },
        { status: 400 },
      );
    }

    const nextTopicId =
      parsed.data.topicId !== undefined
        ? parsed.data.topicId
        : (parsed.data.topic_id ?? null);

    const { data: existing, error: fetchError } = await supabase
      .from('course_materials')
      .select('id, subject_id')
      .eq('id', id)
      .eq('user_id', user.id)
      .maybeSingle();

    if (fetchError) {
      return NextResponse.json(
        { error: `Failed to fetch material: ${fetchError.message}` },
        { status: 500 },
      );
    }
    if (!existing) {
      return NextResponse.json(
        { error: 'Material not found.' },
        { status: 404 },
      );
    }

    if (nextTopicId !== null) {
      const { data: topic, error: topicError } = await supabase
        .from('syllabus_topics')
        .select('id')
        .eq('id', nextTopicId)
        .eq('subject_id', existing.subject_id)
        .eq('user_id', user.id)
        .maybeSingle();

      if (topicError) {
        return NextResponse.json(
          { error: `Failed to verify syllabus topic: ${topicError.message}` },
          { status: 500 },
        );
      }
      if (!topic) {
        return NextResponse.json(
          { error: 'Syllabus topic not found for this subject.' },
          { status: 404 },
        );
      }
    }

    const { data: material, error: updateError } = await supabase
      .from('course_materials')
      .update({ topic_id: nextTopicId })
      .eq('id', id)
      .eq('user_id', user.id)
      .select('*')
      .single();

    if (updateError || !material) {
      return NextResponse.json(
        { error: updateError?.message ?? 'Failed to update material.' },
        { status: 500 },
      );
    }

    return NextResponse.json({ material });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : 'Unexpected server error.';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const supabase = await createClient();
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;
    if (!UuidSchema.safeParse(id).success) {
      return NextResponse.json(
        { error: 'Material id must be a valid UUID.' },
        { status: 400 },
      );
    }

    const { data: existing, error: fetchError } = await supabase
      .from('course_materials')
      .select('id, storage_path')
      .eq('id', id)
      .eq('user_id', user.id)
      .maybeSingle();

    if (fetchError) {
      return NextResponse.json(
        { error: `Failed to fetch material: ${fetchError.message}` },
        { status: 500 },
      );
    }
    if (!existing) {
      return NextResponse.json(
        { error: 'Material not found.' },
        { status: 404 },
      );
    }

    if (existing.storage_path) {
      await supabase.storage
        .from('course-materials')
        .remove([existing.storage_path])
        .catch(() => undefined);
    }

    const { error: deleteError } = await supabase
      .from('course_materials')
      .delete()
      .eq('id', id)
      .eq('user_id', user.id);

    if (deleteError) {
      return NextResponse.json(
        { error: `Failed to delete material: ${deleteError.message}` },
        { status: 500 },
      );
    }

    return NextResponse.json({ deletedId: id, success: true });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : 'Unexpected server error.';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
