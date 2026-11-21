import { createServer, type IncomingMessage, type ServerResponse } from 'node:http';
import { randomUUID } from 'node:crypto';

export const MOCK_USER = {
  id: '00000000-0000-4000-8000-000000000e2e',
  aud: 'authenticated',
  role: 'authenticated',
  email: 'ib2028-e2e@syllabusos.local',
  email_confirmed_at: '2026-09-01T00:00:00.000Z',
  phone: '',
  confirmed_at: '2026-09-01T00:00:00.000Z',
  last_sign_in_at: '2026-11-20T00:00:00.000Z',
  app_metadata: { provider: 'google', providers: ['google'] },
  user_metadata: {
    full_name: 'IB 2028 Student',
    name: 'IB 2028 Student',
  },
  identities: [],
  created_at: '2026-09-01T00:00:00.000Z',
  updated_at: '2026-11-20T00:00:00.000Z',
};

type Row = Record<string, unknown>;

const tables = new Map<string, Row[]>();
const storageObjects = new Map<string, { contentType: string; data: Buffer }>();

function getTable(name: string): Row[] {
  let rows = tables.get(name);
  if (!rows) {
    rows = [];
    tables.set(name, rows);
  }
  return rows;
}

function applyTableDefaults(table: string, row: Row): Row {
  const now = new Date().toISOString();
  const base: Row = {
    id: typeof row.id === 'string' && row.id ? row.id : randomUUID(),
    ...row,
  };

  if (table === 'syllabus_topics') {
    if (base.is_completed === undefined) base.is_completed = false;
    if (base.confidence_level === undefined) base.confidence_level = 'unstarted';
    if (base.sort_order === undefined) base.sort_order = 0;
    if (base.updated_at === undefined) base.updated_at = now;
  } else if (table === 'core_projects') {
    if (base.milestones === undefined) base.milestones = [];
    if (base.word_count_target === undefined) base.word_count_target = 0;
    if (base.current_word_count === undefined) base.current_word_count = 0;
    if (base.latest_ai_review === undefined) base.latest_ai_review = null;
    if (base.updated_at === undefined) base.updated_at = now;
  } else {
    if (base.created_at === undefined) base.created_at = now;
    if (table === 'course_materials') {
      if (base.generation_status === undefined) base.generation_status = 'uploaded';
      if (base.external_url === undefined) base.external_url = null;
      if (base.storage_path === undefined) base.storage_path = null;
      if (base.last_generated_at === undefined) base.last_generated_at = null;
    } else if (table === 'study_notes') {
      if (base.version === undefined) base.version = 1;
      if (base.source_material_ids === undefined) base.source_material_ids = [];
      if (base.blocks === undefined) base.blocks = [];
      if (base.updated_at === undefined) base.updated_at = now;
    } else if (table === 'questions') {
      if (base.difficulty === undefined) base.difficulty = 'Standard IB';
      if (base.source_material_ids === undefined) base.source_material_ids = [];
      if (base.mcq_options === undefined) base.mcq_options = null;
      if (base.correct_mcq_option === undefined) base.correct_mcq_option = null;
      if (base.stimulus_markdown === undefined) base.stimulus_markdown = null;
    } else if (table === 'question_attempts') {
      if (base.tutor_messages === undefined) base.tutor_messages = [];
    } else if (table === 'flashcards') {
      if (base.mastered === undefined) base.mastered = false;
    }
  }

  return base;
}

function coerceComparable(val: unknown): string {
  if (val === null || val === undefined) return '';
  return String(val);
}

function parseInValues(raw: string): string[] {
  const trimmed = raw.trim();
  const inner =
    trimmed.startsWith('(') && trimmed.endsWith(')')
      ? trimmed.slice(1, -1)
      : trimmed;
  if (!inner) return [];
  return inner.split(',').map((item) => {
    const s = item.trim();
    if (
      (s.startsWith('"') && s.endsWith('"')) ||
      (s.startsWith("'") && s.endsWith("'"))
    ) {
      return s.slice(1, -1);
    }
    return s;
  });
}

function matchesCondition(rowValue: unknown, expr: string): boolean {
  if (expr.startsWith('eq.')) {
    const expected = expr.slice(3);
    if (typeof rowValue === 'boolean') {
      return String(rowValue) === expected;
    }
    return coerceComparable(rowValue) === expected;
  }
  if (expr.startsWith('neq.')) {
    const expected = expr.slice(4);
    if (typeof rowValue === 'boolean') {
      return String(rowValue) !== expected;
    }
    return coerceComparable(rowValue) !== expected;
  }
  if (expr.startsWith('in.')) {
    const allowed = parseInValues(expr.slice(3));
    return allowed.includes(coerceComparable(rowValue));
  }
  if (expr === 'is.null') {
    return rowValue === null || rowValue === undefined;
  }
  if (expr === 'not.is.null') {
    return rowValue !== null && rowValue !== undefined;
  }
  if (expr === 'is.true') {
    return rowValue === true;
  }
  if (expr === 'is.false') {
    return rowValue === false;
  }
  if (expr.startsWith('ilike.')) {
    const pattern = expr.slice(6).replace(/%/g, '.*');
    return new RegExp(`^${pattern}$`, 'i').test(coerceComparable(rowValue));
  }
  return true;
}

const RESERVED_QUERY_PARAMS = new Set([
  'select',
  'order',
  'limit',
  'offset',
  'on_conflict',
  'columns',
]);

function filterRows(rows: Row[], searchParams: URLSearchParams): Row[] {
  return rows.filter((row) => {
    for (const [key, value] of searchParams.entries()) {
      if (RESERVED_QUERY_PARAMS.has(key)) continue;
      if (!matchesCondition(row[key], value)) {
        return false;
      }
    }
    return true;
  });
}

function sortRows(rows: Row[], orderParam: string | null): Row[] {
  if (!orderParam) return [...rows];
  const clauses = orderParam.split(',').map((part) => {
    const [col, dirRaw] = part.trim().split('.');
    return {
      col: col ?? 'created_at',
      desc: dirRaw === 'desc',
    };
  });

  return [...rows].sort((a, b) => {
    for (const { col, desc } of clauses) {
      const av = a[col];
      const bv = b[col];
      if (av === bv) continue;
      if (av === null || av === undefined) return desc ? 1 : -1;
      if (bv === null || bv === undefined) return desc ? -1 : 1;
      if (typeof av === 'number' && typeof bv === 'number') {
        return desc ? bv - av : av - bv;
      }
      const cmp = String(av).localeCompare(String(bv));
      if (cmp !== 0) return desc ? -cmp : cmp;
    }
    return 0;
  });
}

function projectRow(row: Row, selectParam: string | null): Row {
  if (!selectParam || selectParam.trim() === '*') {
    return { ...row };
  }
  // If complex embedded select, return full row cleanly
  if (selectParam.includes('(')) {
    return { ...row };
  }
  const cols = selectParam
    .split(',')
    .map((c) => c.trim())
    .filter(Boolean);
  if (cols.length === 0 || cols.includes('*')) {
    return { ...row };
  }
  const projected: Row = {};
  for (const col of cols) {
    if (col in row) {
      projected[col] = row[col];
    }
  }
  return projected;
}

async function readBodyBuffer(req: IncomingMessage): Promise<Buffer> {
  const chunks: Buffer[] = [];
  for await (const chunk of req) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
  }
  return Buffer.concat(chunks);
}

function sendJson(
  res: ServerResponse,
  status: number,
  body: unknown,
  extraHeaders: Record<string, string> = {},
) {
  const payload = body === undefined ? '' : JSON.stringify(body);
  res.writeHead(status, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS, HEAD',
    'Access-Control-Expose-Headers': 'content-range, preference-applied',
    ...extraHeaders,
  });
  res.end(payload);
}

function sendEmpty(
  res: ServerResponse,
  status: number,
  extraHeaders: Record<string, string> = {},
) {
  res.writeHead(status, {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS, HEAD',
    'Access-Control-Expose-Headers': 'content-range, preference-applied',
    ...extraHeaders,
  });
  res.end();
}

function handleRestRequest(
  req: IncomingMessage,
  res: ServerResponse,
  url: URL,
  bodyBuffer: Buffer,
) {
  const tableName = url.pathname.replace(/^\/rest\/v1\//, '').replace(/\/$/, '');
  const tableRows = getTable(tableName);
  const method = (req.method || 'GET').toUpperCase();
  const accept = String(req.headers.accept ?? '');
  const prefer = String(req.headers.prefer ?? '');
  const wantsSingle = accept.includes('application/vnd.pgrst.object+json');
  const wantsCount = /count=(exact|planned|estimated)/.test(prefer);
  const wantsReturnRep = prefer.includes('return=representation');
  const wantsMerge = prefer.includes('resolution=merge-duplicates');
  const selectParam = url.searchParams.get('select');

  if (method === 'GET' || method === 'HEAD') {
    const filtered = filterRows(tableRows, url.searchParams);
    const sorted = sortRows(filtered, url.searchParams.get('order'));
    const offset = Number(url.searchParams.get('offset') ?? 0) || 0;
    const limitRaw = url.searchParams.get('limit');
    const limit = limitRaw ? Number(limitRaw) : undefined;
    const sliced =
      limit !== undefined
        ? sorted.slice(offset, offset + limit)
        : sorted.slice(offset);

    const total = filtered.length;
    const contentRange =
      total === 0 ? '*/0' : `0-${Math.max(0, sliced.length - 1)}/${total}`;
    const headers: Record<string, string> = {};
    if (wantsCount || method === 'HEAD') {
      headers['Content-Range'] = contentRange;
    }

    if (method === 'HEAD') {
      sendEmpty(res, 200, headers);
      return;
    }

    if (wantsSingle) {
      if (sliced.length !== 1) {
        sendJson(res, 406, {
          code: 'PGRST116',
          details: `Results contain ${sliced.length} rows, application/vnd.pgrst.object+json requires 1 row`,
          hint: null,
          message: 'JSON object requested, multiple (or no) rows returned',
        });
        return;
      }
      sendJson(res, 200, projectRow(sliced[0], selectParam), headers);
      return;
    }

    sendJson(
      res,
      200,
      sliced.map((r) => projectRow(r, selectParam)),
      headers,
    );
    return;
  }

  if (method === 'POST') {
    const parsed = bodyBuffer.length
      ? (JSON.parse(bodyBuffer.toString('utf8')) as Row | Row[])
      : [];
    const incoming = Array.isArray(parsed) ? parsed : [parsed];
    const conflictCols = (url.searchParams.get('on_conflict') ?? 'id')
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);

    const affected: Row[] = [];

    for (const rawItem of incoming) {
      if (wantsMerge && conflictCols.length > 0) {
        const matchIdx = tableRows.findIndex((existing) =>
          conflictCols.every(
            (col) =>
              rawItem[col] !== undefined &&
              coerceComparable(existing[col]) === coerceComparable(rawItem[col]),
          ),
        );
        if (matchIdx >= 0) {
          const updated = {
            ...tableRows[matchIdx],
            ...rawItem,
            updated_at: new Date().toISOString(),
          };
          tableRows[matchIdx] = updated;
          affected.push(updated);
          continue;
        }
      }

      if (tableName === 'subjects') {
        const duplicate = tableRows.some(
          (existing) =>
            coerceComparable(existing.user_id) ===
              coerceComparable(rawItem.user_id) &&
            coerceComparable(existing.slug) === coerceComparable(rawItem.slug),
        );
        if (duplicate) {
          sendJson(res, 409, {
            code: '23505',
            details: `Key (user_id, slug)=(${String(rawItem.user_id)}, ${String(rawItem.slug)}) already exists.`,
            hint: null,
            message:
              'duplicate key value violates unique constraint "subjects_user_id_slug_key"',
          });
          return;
        }
      }

      const inserted = applyTableDefaults(tableName, rawItem);
      tableRows.push(inserted);
      affected.push(inserted);
    }

    if (!wantsReturnRep) {
      sendEmpty(res, 201);
      return;
    }

    if (wantsSingle) {
      if (affected.length !== 1) {
        sendJson(res, 406, {
          code: 'PGRST116',
          details: `Results contain ${affected.length} rows`,
          hint: null,
          message: 'JSON object requested, multiple (or no) rows returned',
        });
        return;
      }
      sendJson(res, 201, projectRow(affected[0], selectParam));
      return;
    }

    sendJson(
      res,
      201,
      affected.map((r) => projectRow(r, selectParam)),
    );
    return;
  }

  if (method === 'PATCH') {
    const patch = bodyBuffer.length
      ? (JSON.parse(bodyBuffer.toString('utf8')) as Row)
      : {};
    const matched = filterRows(tableRows, url.searchParams);
    const updatedRows: Row[] = [];

    for (const row of matched) {
      Object.assign(row, patch);
      if ('updated_at' in row && patch.updated_at === undefined) {
        row.updated_at = new Date().toISOString();
      }
      updatedRows.push(row);
    }

    if (!wantsReturnRep) {
      sendEmpty(res, 204);
      return;
    }

    if (wantsSingle) {
      if (updatedRows.length !== 1) {
        sendJson(res, 406, {
          code: 'PGRST116',
          details: `Results contain ${updatedRows.length} rows`,
          hint: null,
          message: 'JSON object requested, multiple (or no) rows returned',
        });
        return;
      }
      sendJson(res, 200, projectRow(updatedRows[0], selectParam));
      return;
    }

    sendJson(
      res,
      200,
      updatedRows.map((r) => projectRow(r, selectParam)),
    );
    return;
  }

  if (method === 'DELETE') {
    const matched = new Set(filterRows(tableRows, url.searchParams));
    const remaining = tableRows.filter((r) => !matched.has(r));
    tables.set(tableName, remaining);
    if (!wantsReturnRep) {
      sendEmpty(res, 204);
      return;
    }
    sendJson(
      res,
      200,
      [...matched].map((r) => projectRow(r, selectParam)),
    );
    return;
  }

  sendJson(res, 405, { message: `Unsupported method ${method}` });
}

function handleStorageRequest(
  req: IncomingMessage,
  res: ServerResponse,
  url: URL,
  bodyBuffer: Buffer,
) {
  const method = (req.method || 'GET').toUpperCase();
  const path = url.pathname;

  if (method === 'POST' && path.startsWith('/storage/v1/object/upload/sign/')) {
    const objectKey = path.replace('/storage/v1/object/upload/sign/', '');
    sendJson(res, 200, {
      url: `/object/upload/sign/${objectKey}?token=e2e-upload-token`,
      token: 'e2e-upload-token',
    });
    return;
  }

  if (
    (method === 'PUT' || method === 'POST') &&
    path.startsWith('/storage/v1/object/')
  ) {
    const key = path
      .replace('/storage/v1/object/upload/sign/', '')
      .replace('/storage/v1/object/', '');
    storageObjects.set(key, {
      contentType: String(req.headers['content-type'] ?? 'application/octet-stream'),
      data: bodyBuffer,
    });
    sendJson(res, 200, { Key: key, Id: randomUUID() });
    return;
  }

  if (method === 'GET' && path.startsWith('/storage/v1/object/')) {
    const key = path.replace('/storage/v1/object/', '');
    const obj = storageObjects.get(key);
    if (!obj) {
      sendJson(res, 404, { error: 'Not found', message: 'Object not found' });
      return;
    }
    res.writeHead(200, {
      'Content-Type': obj.contentType,
      'Access-Control-Allow-Origin': '*',
    });
    res.end(obj.data);
    return;
  }

  if (method === 'DELETE' && path.startsWith('/storage/v1/object/')) {
    const bucket = path.replace('/storage/v1/object/', '');
    if (bodyBuffer.length) {
      try {
        const parsed = JSON.parse(bodyBuffer.toString('utf8')) as {
          prefixes?: string[];
        };
        for (const p of parsed.prefixes ?? []) {
          storageObjects.delete(`${bucket}/${p}`);
        }
      } catch {
        // ignore
      }
    }
    sendJson(res, 200, []);
    return;
  }

  sendJson(res, 404, { message: 'Unknown storage endpoint' });
}

const port = Number(process.env.MOCK_SUPABASE_PORT || 54321);

const server = createServer(async (req, res) => {
  try {
    if ((req.method || '').toUpperCase() === 'OPTIONS') {
      sendEmpty(res, 204);
      return;
    }

    const url = new URL(req.url || '/', `http://127.0.0.1:${port}`);
    const bodyBuffer = await readBodyBuffer(req);

    if (url.pathname === '/health') {
      sendJson(res, 200, { ok: true });
      return;
    }

    if (url.pathname === '/__reset' && req.method === 'POST') {
      tables.clear();
      storageObjects.clear();
      sendJson(res, 200, { reset: true });
      return;
    }

    if (url.pathname === '/auth/v1/user') {
      const authHeader = String(req.headers.authorization ?? '');
      if (!authHeader.startsWith('Bearer ') || authHeader.length < 12) {
        sendJson(res, 401, {
          code: 'bad_jwt',
          message: 'Missing or invalid authorization token',
        });
        return;
      }
      sendJson(res, 200, MOCK_USER);
      return;
    }

    if (url.pathname === '/auth/v1/token') {
      sendJson(res, 200, {
        access_token: 'e2e-access-token',
        token_type: 'bearer',
        expires_in: 3600,
        expires_at: Math.floor(Date.now() / 1000) + 3600,
        refresh_token: 'e2e-refresh-token',
        user: MOCK_USER,
      });
      return;
    }

    if (url.pathname === '/auth/v1/logout') {
      sendEmpty(res, 204);
      return;
    }

    if (url.pathname.startsWith('/rest/v1/')) {
      handleRestRequest(req, res, url, bodyBuffer);
      return;
    }

    if (url.pathname.startsWith('/storage/v1/')) {
      handleStorageRequest(req, res, url, bodyBuffer);
      return;
    }

    sendJson(res, 404, { error: 'Not found', path: url.pathname });
  } catch (error) {
    sendJson(res, 500, {
      message: error instanceof Error ? error.message : 'Mock server error',
    });
  }
});

server.listen(port, '127.0.0.1', () => {
  console.log(`[mock-supabase] listening on http://127.0.0.1:${port}`);
});
