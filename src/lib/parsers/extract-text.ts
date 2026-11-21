import path from 'node:path';
import JSZip from 'jszip';
import { extractImageTextWithGemini } from '@/lib/gemini/client';

export type SupportedMaterialFileType =
  | 'pdf'
  | 'pptx'
  | 'docx'
  | 'txt'
  | 'md'
  | 'png'
  | 'jpg'
  | 'webp';

export const MAX_EXTRACTED_TEXT_CHARS = 120_000;

export class MaterialExtractionError extends Error {
  readonly status: number;

  constructor(message: string, status = 400) {
    super(message);
    this.name = 'MaterialExtractionError';
    this.status = status;
  }
}

export function sanitizeExtractedText(raw: string): string {
  const cleaned = raw
    .replace(/\u0000/g, '')
    .replace(/^\uFEFF/, '')
    .replace(/\r\n?/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();

  if (cleaned.length <= MAX_EXTRACTED_TEXT_CHARS) {
    return cleaned;
  }

  return `${cleaned.slice(0, MAX_EXTRACTED_TEXT_CHARS)}\n\n[Truncated after ${MAX_EXTRACTED_TEXT_CHARS.toLocaleString()} characters for processing]`;
}

export function detectMaterialFileType(
  fileName: string,
  mimeType?: string | null,
): SupportedMaterialFileType {
  const ext = path.extname(fileName).toLowerCase().replace(/^\./, '');
  const normalizedMime = (mimeType ?? '').split(';')[0].trim().toLowerCase();

  if (ext === 'pdf' || normalizedMime === 'application/pdf') return 'pdf';
  if (
    ext === 'pptx' ||
    normalizedMime ===
      'application/vnd.openxmlformats-officedocument.presentationml.presentation'
  ) {
    return 'pptx';
  }
  if (
    ext === 'docx' ||
    normalizedMime ===
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  ) {
    return 'docx';
  }
  if (ext === 'md' || ext === 'markdown' || normalizedMime === 'text/markdown') {
    return 'md';
  }
  if (ext === 'txt' || normalizedMime === 'text/plain') {
    return 'txt';
  }
  if (ext === 'png' || normalizedMime === 'image/png') return 'png';
  if (
    ext === 'jpg' ||
    ext === 'jpeg' ||
    normalizedMime === 'image/jpeg' ||
    normalizedMime === 'image/jpg'
  ) {
    return 'jpg';
  }
  if (ext === 'webp' || normalizedMime === 'image/webp') return 'webp';

  const label = ext ? `.${ext}` : normalizedMime || 'unknown';
  throw new MaterialExtractionError(
    `Unsupported file format (${label}). Supported formats: .pdf, .pptx, .docx, .txt, .md, .png, .jpg, .jpeg, .webp.`,
    400,
  );
}

function getImageMimeType(
  fileType: SupportedMaterialFileType,
  providedMime?: string | null,
): string {
  if (fileType === 'png') return 'image/png';
  if (fileType === 'webp') return 'image/webp';
  if (fileType === 'jpg') return 'image/jpeg';
  return providedMime || 'image/jpeg';
}

function decodeXmlEntities(text: string): string {
  return text
    .replace(/&#x([0-9a-fA-F]+);/g, (_, hex: string) => {
      const code = Number.parseInt(hex, 16);
      return Number.isFinite(code) ? String.fromCodePoint(code) : '';
    })
    .replace(/&#(\d+);/g, (_, dec: string) => {
      const code = Number.parseInt(dec, 10);
      return Number.isFinite(code) ? String.fromCodePoint(code) : '';
    })
    .replace(/&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&gt;/g, '>')
    .replace(/&lt;/g, '<')
    .replace(/&amp;/g, '&');
}

function extractDrawingMlParagraphs(xml: string): string {
  const withoutSlideNumFields = xml.replace(
    /<a:fld\b[^>]*\btype=["']slidenum["'][^>]*>[\s\S]*?<\/a:fld>/gi,
    '',
  );

  const paragraphs: string[] = [];
  const paragraphRegex = /<a:p(?:\s[^>]*)?>([\s\S]*?)<\/a:p>/g;
  let pMatch: RegExpExecArray | null;

  while ((pMatch = paragraphRegex.exec(withoutSlideNumFields)) !== null) {
    const body = pMatch[1];
    const tokenRegex =
      /(<a:t(?:\s[^>]*)?>([\s\S]*?)<\/a:t>|<a:br(?:\s[^>]*)?\/>|<a:tab(?:\s[^>]*)?\/>)/g;
    let line = '';
    let tMatch: RegExpExecArray | null;

    while ((tMatch = tokenRegex.exec(body)) !== null) {
      const token = tMatch[1];
      if (token.startsWith('<a:br')) {
        line += '\n';
      } else if (token.startsWith('<a:tab')) {
        line += ' ';
      } else {
        line += decodeXmlEntities(tMatch[2] ?? '');
      }
    }

    const normalized = line
      .split('\n')
      .map((part) => part.trimEnd())
      .join('\n')
      .trim();

    if (normalized) {
      paragraphs.push(normalized);
    }
  }

  if (paragraphs.length > 0) {
    return paragraphs.join('\n');
  }

  // Fallback in case XML contains <a:t> runs outside standard <a:p> blocks
  const fallbackRuns: string[] = [];
  const runRegex = /<a:t(?:\s[^>]*)?>([\s\S]*?)<\/a:t>/g;
  let rMatch: RegExpExecArray | null;
  while ((rMatch = runRegex.exec(withoutSlideNumFields)) !== null) {
    const val = decodeXmlEntities(rMatch[1] ?? '').trim();
    if (val) fallbackRuns.push(val);
  }
  return fallbackRuns.join(' ');
}

function resolvePptxTargetPath(baseDir: string, target: string): string {
  const cleaned = target.trim();
  if (cleaned.startsWith('/')) {
    return cleaned.slice(1);
  }
  return path.posix.normalize(path.posix.join(baseDir, cleaned));
}

function findNotesSlideFromRels(relsXml: string): string | null {
  const relTagRegex = /<Relationship\b[^>]*>/gi;
  let match: RegExpExecArray | null;
  while ((match = relTagRegex.exec(relsXml)) !== null) {
    const tag = match[0];
    const typeMatch = /\bType=["']([^"']+)["']/i.exec(tag);
    const targetMatch = /\bTarget=["']([^"']+)["']/i.exec(tag);
    if (!typeMatch || !targetMatch) continue;
    if (/notesslide/i.test(typeMatch[1])) {
      return resolvePptxTargetPath('ppt/slides', targetMatch[1]);
    }
  }
  return null;
}

async function extractTextFromPdf(buffer: Buffer): Promise<string> {
  type PdfParseFn = (
    dataBuffer: Buffer,
  ) => Promise<{ text?: string; numpages?: number }>;

  // @ts-expect-error -- pdf-parse/lib/pdf-parse.js bypasses index.js test-file quirk and has no subpath .d.ts
  const pdfParseMod: unknown = await import('pdf-parse/lib/pdf-parse.js');
  const pdfParse = (
    typeof pdfParseMod === 'function'
      ? pdfParseMod
      : (pdfParseMod as { default?: unknown }).default
  ) as PdfParseFn | undefined;

  if (typeof pdfParse !== 'function') {
    throw new MaterialExtractionError('PDF parser failed to load cleanly.', 500);
  }

  let parsed: { text?: string };
  try {
    parsed = await pdfParse(buffer);
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'Unable to read PDF file.';
    throw new MaterialExtractionError(`Failed to parse PDF: ${msg}`, 400);
  }

  const text = sanitizeExtractedText(parsed.text ?? '');
  if (!text) {
    return '(No selectable text detected in this PDF. If it contains scanned pages, upload page screenshots as PNG/JPG or paste key notes.)';
  }
  return text;
}

async function extractTextFromPptx(buffer: Buffer): Promise<string> {
  let zip: JSZip;
  try {
    zip = await JSZip.loadAsync(buffer);
  } catch {
    throw new MaterialExtractionError(
      'Invalid PPTX file: unable to open presentation archive.',
      400,
    );
  }

  const slideEntries = Object.keys(zip.files)
    .map((name) => {
      const match = /^ppt\/slides\/slide(\d+)\.xml$/i.exec(name);
      return match ? { name, slideNumber: Number(match[1]) } : null;
    })
    .filter((entry): entry is { name: string; slideNumber: number } => entry !== null)
    .sort((a, b) => a.slideNumber - b.slideNumber);

  if (slideEntries.length === 0) {
    throw new MaterialExtractionError(
      'Invalid PPTX file: no slides found in ppt/slides/.',
      400,
    );
  }

  // First resolve explicit slide -> notesSlide relationships
  const relNotesBySlide = new Map<number, string>();
  const claimedNotesPaths = new Set<string>();

  await Promise.all(
    slideEntries.map(async ({ slideNumber }) => {
      const relPath = `ppt/slides/_rels/slide${slideNumber}.xml.rels`;
      const relFile = zip.file(relPath);
      if (!relFile) return;
      const relXml = await relFile.async('string');
      const notesPath = findNotesSlideFromRels(relXml);
      if (notesPath && zip.file(notesPath)) {
        relNotesBySlide.set(slideNumber, notesPath);
        claimedNotesPaths.add(notesPath.toLowerCase());
      }
    }),
  );

  const slideBlocks: string[] = [];

  for (const { name, slideNumber } of slideEntries) {
    const slideFile = zip.file(name);
    if (!slideFile) continue;
    const slideXml = await slideFile.async('string');
    const slideText = extractDrawingMlParagraphs(slideXml);

    let notesPath = relNotesBySlide.get(slideNumber) ?? null;
    if (!notesPath) {
      const fallbackNotesPath = `ppt/notesSlides/notesSlide${slideNumber}.xml`;
      if (
        !claimedNotesPaths.has(fallbackNotesPath.toLowerCase()) &&
        zip.file(fallbackNotesPath)
      ) {
        notesPath = fallbackNotesPath;
      }
    }

    let notesText = '';
    if (notesPath) {
      const notesFile = zip.file(notesPath);
      if (notesFile) {
        const notesXml = await notesFile.async('string');
        notesText = extractDrawingMlParagraphs(notesXml);
      }
    }

    const section = [
      `=== SLIDE ${slideNumber} ===`,
      slideText || '(No slide text)',
      ...(notesText ? [`[Speaker Notes]\n${notesText}`] : []),
    ].join('\n');

    slideBlocks.push(section);
  }

  const combined = sanitizeExtractedText(slideBlocks.join('\n\n'));
  return combined || '(Empty presentation)';
}

async function extractTextFromDocx(buffer: Buffer): Promise<string> {
  let zip: JSZip;
  try {
    zip = await JSZip.loadAsync(buffer);
  } catch {
    throw new MaterialExtractionError(
      'Invalid DOCX file: unable to open document archive.',
      400,
    );
  }

  const docFile = zip.file('word/document.xml');
  if (!docFile) {
    throw new MaterialExtractionError(
      'Invalid DOCX file: missing word/document.xml.',
      400,
    );
  }

  const xml = await docFile.async('string');
  const paragraphs: string[] = [];
  const paragraphRegex = /<w:p(?:\s[^>]*)?>([\s\S]*?)<\/w:p>/g;
  let pMatch: RegExpExecArray | null;

  while ((pMatch = paragraphRegex.exec(xml)) !== null) {
    const body = pMatch[1];
    const tokenRegex =
      /(<w:t(?:\s[^>]*)?>([\s\S]*?)<\/w:t>|<w:tab(?:\s[^>]*)?\/>|<w:br(?:\s[^>]*)?\/>)/g;
    let line = '';
    let tMatch: RegExpExecArray | null;

    while ((tMatch = tokenRegex.exec(body)) !== null) {
      const token = tMatch[1];
      if (token.startsWith('<w:br')) {
        line += '\n';
      } else if (token.startsWith('<w:tab')) {
        line += '\t';
      } else {
        line += decodeXmlEntities(tMatch[2] ?? '');
      }
    }

    const trimmed = line.trim();
    if (trimmed) {
      paragraphs.push(trimmed);
    }
  }

  const result = sanitizeExtractedText(paragraphs.join('\n'));
  return result || '(Empty Word document)';
}

export interface ExtractTextInput {
  buffer: Buffer;
  fileName: string;
  mimeType?: string | null;
}

export interface ExtractTextResult {
  fileType: SupportedMaterialFileType;
  extractedText: string;
}

export async function extractTextFromBuffer(
  input: ExtractTextInput,
): Promise<ExtractTextResult> {
  if (!input.buffer || input.buffer.byteLength === 0) {
    throw new MaterialExtractionError('Uploaded file is empty.', 400);
  }

  const fileType = detectMaterialFileType(input.fileName, input.mimeType);

  switch (fileType) {
    case 'pdf': {
      const extractedText = await extractTextFromPdf(input.buffer);
      return { fileType, extractedText };
    }
    case 'pptx': {
      const extractedText = await extractTextFromPptx(input.buffer);
      return { fileType, extractedText };
    }
    case 'docx': {
      const extractedText = await extractTextFromDocx(input.buffer);
      return { fileType, extractedText };
    }
    case 'txt':
    case 'md': {
      const extractedText = sanitizeExtractedText(input.buffer.toString('utf8'));
      if (!extractedText) {
        throw new MaterialExtractionError('Text file contains no readable text.', 400);
      }
      return { fileType, extractedText };
    }
    case 'png':
    case 'jpg':
    case 'webp': {
      const ocrText = await extractImageTextWithGemini({
        buffer: input.buffer,
        mimeType: getImageMimeType(fileType, input.mimeType),
        fileName: input.fileName,
      });
      return {
        fileType,
        extractedText: sanitizeExtractedText(ocrText),
      };
    }
  }
}
