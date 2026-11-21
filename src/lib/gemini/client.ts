import { GoogleGenAI, ThinkingLevel, type Part } from '@google/genai';
import type { z } from 'zod';

export const GEMINI_MODEL = 'gemini-3.8-flash' as const;

export { ThinkingLevel };

export class GeminiConfigError extends Error {
  readonly status = 503;

  constructor(message = 'GEMINI_API_KEY is not configured on the server.') {
    super(message);
    this.name = 'GeminiConfigError';
  }
}

export class GeminiGenerationError extends Error {
  readonly status: number;

  constructor(message: string, status = 502) {
    super(message);
    this.name = 'GeminiGenerationError';
    this.status = status;
  }
}

export function getGeminiApiKey(): string {
  const apiKey = process.env.GEMINI_API_KEY?.trim();
  if (!apiKey || apiKey === 'your-gemini-api-key') {
    throw new GeminiConfigError();
  }
  return apiKey;
}

export function getGeminiClient(): GoogleGenAI {
  return new GoogleGenAI({ apiKey: getGeminiApiKey() });
}

export function getGeminiErrorStatus(error: unknown): number {
  if (error instanceof GeminiConfigError) return error.status;
  if (error instanceof GeminiGenerationError) return error.status;
  return 500;
}

function stripJsonCodeFences(raw: string): string {
  const trimmed = raw.trim();
  if (!trimmed.startsWith('```')) {
    return trimmed;
  }
  return trimmed
    .replace(/^```(?:json)?\s*\n?/i, '')
    .replace(/\n?```\s*$/i, '')
    .trim();
}

function formatZodIssues(error: z.ZodError): string {
  return error.issues
    .slice(0, 6)
    .map((issue) => {
      const path = issue.path.length > 0 ? issue.path.join('.') : 'root';
      return `${path}: ${issue.message}`;
    })
    .join('; ');
}

export interface GenerateStructuredJsonOptions<T> {
  systemInstruction: string;
  contents: string | Part[];
  thinkingLevel: ThinkingLevel;
  responseJsonSchema: Record<string, unknown>;
  zodSchema: z.ZodType<T>;
  temperature?: number;
  maxOutputTokens?: number;
}

export async function generateStructuredJson<T>(
  options: GenerateStructuredJsonOptions<T>,
): Promise<T> {
  const ai = getGeminiClient();

  let responseText: string | undefined;
  try {
    const response = await ai.models.generateContent({
      model: GEMINI_MODEL,
      contents: options.contents,
      config: {
        systemInstruction: options.systemInstruction,
        responseMimeType: 'application/json',
        responseJsonSchema: options.responseJsonSchema,
        thinkingConfig: {
          thinkingLevel: options.thinkingLevel,
        },
        ...(options.temperature !== undefined
          ? { temperature: options.temperature }
          : {}),
        ...(options.maxOutputTokens !== undefined
          ? { maxOutputTokens: options.maxOutputTokens }
          : {}),
      },
    });
    responseText = response.text;
  } catch (err) {
    if (err instanceof GeminiConfigError || err instanceof GeminiGenerationError) {
      throw err;
    }
    const message =
      err instanceof Error ? err.message : 'Unknown Gemini API request failure.';
    throw new GeminiGenerationError(`Gemini API request failed: ${message}`, 502);
  }

  if (!responseText || !responseText.trim()) {
    throw new GeminiGenerationError('Gemini returned an empty response.', 502);
  }

  const cleaned = stripJsonCodeFences(responseText);
  let parsed: unknown;
  try {
    parsed = JSON.parse(cleaned);
  } catch {
    throw new GeminiGenerationError(
      'Gemini returned invalid JSON that could not be parsed.',
      502,
    );
  }

  const validated = options.zodSchema.safeParse(parsed);
  if (!validated.success) {
    throw new GeminiGenerationError(
      `Gemini output failed schema validation: ${formatZodIssues(validated.error)}`,
      502,
    );
  }

  return validated.data;
}

export interface ExtractImageTextOptions {
  buffer: Buffer;
  mimeType: string;
  fileName?: string;
}

export async function extractImageTextWithGemini(
  options: ExtractImageTextOptions,
): Promise<string> {
  const ai = getGeminiClient();
  const base64Data = options.buffer.toString('base64');
  const label = options.fileName ? ` (${options.fileName})` : '';

  const response = await ai.models.generateContent({
    model: GEMINI_MODEL,
    contents: [
      {
        inlineData: {
          data: base64Data,
          mimeType: options.mimeType,
        },
      },
      {
        text: [
          `Transcribe and structure all academic content visible in this image${label}.`,
          'Requirements:',
          '1. Transcribe all printed and handwritten text verbatim in logical reading order.',
          '2. Format mathematical equations, formulas, symbols, and chemical reactions using KaTeX ($...$ inline, $$...$$ display, and \\ce{...} for chemistry where helpful).',
          '3. Reconstruct any tables as clean Markdown tables.',
          '4. Describe diagrams, graphs, axes, curves, and all diagram labels/annotations clearly under a [Diagram Labels] section.',
          '5. Output clean Markdown text only without extra conversational commentary.',
        ].join('\n'),
      },
    ],
    config: {
      systemInstruction:
        'You are a precision academic OCR engine for IB Diploma classroom materials. Never invent text that is not visible in the image.',
      thinkingConfig: {
        thinkingLevel: ThinkingLevel.LOW,
      },
    },
  });

  const text = (response.text ?? '').trim();
  if (!text) {
    throw new GeminiGenerationError(
      'Gemini OCR returned no extracted text for the uploaded image.',
      502,
    );
  }

  return text;
}
