/**
 * Google Drive Classroom Ingestion Script for SyllabusOS
 *
 * Downloads all 8 IB Class of 2028 Google Drive folders into `.tmp-classroom/` (gitignored),
 * deduplicates duplicate entries (e.g. IB Chemistry SL copies), skips oversized textbooks
 * (emitting external Drive references instead), and extracts structured text from
 * PDF, PPTX (slides + speaker notes in numeric order), DOCX, and TXT files.
 *
 * Usage:
 *   npx tsx scripts/ingest-classroom-drive.ts
 *   npx tsx scripts/ingest-classroom-drive.ts --include-textbooks
 *   npx tsx scripts/ingest-classroom-drive.ts --textbooks-only
 *   npx tsx scripts/ingest-classroom-drive.ts --validate-seeds
 */

import { execFile } from 'node:child_process';
import { promises as fs } from 'node:fs';
import { createRequire } from 'node:module';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { promisify } from 'node:util';
import JSZip from 'jszip';

const execFileAsync = promisify(execFile);
const require = createRequire(import.meta.url);

export interface DriveFolderConfig {
  folderSlug: string;
  folderId: string;
  label: string;
}

export const CLASSROOM_DRIVE_ROOT_ID = '19W5GsjJ54Duk73CgzYyevHXMdbNqiine';

export const CLASSROOM_FOLDERS: DriveFolderConfig[] = [
  {
    folderSlug: 'biology-hl',
    folderId: '1OOxGWOHM8LkF77x01XLnwRCy__xrRxIk',
    label: 'IB Biology HL',
  },
  {
    folderSlug: 'chemistry-sl',
    folderId: '1bU-Noe5M8HZGUJkDRfVGIIXpLPuV_EUk',
    label: 'IB Chemistry SL',
  },
  {
    folderSlug: 'math-aa-sl',
    folderId: '1DC9hLt03WFWRnykYbP0oV5Pe55LcqIMq',
    label: 'Math AA SL',
  },
  {
    folderSlug: 'history-hl',
    folderId: '1bI1WAiU7mfHMEZBFcRZ6MzPcLPiuh891',
    label: 'History HL',
  },
  {
    folderSlug: 'english-lit-hl',
    folderId: '11TqI5XfCrbzJ3zyUZ-TaHk2-IhugGLhg',
    label: 'English Literature HL',
  },
  {
    folderSlug: 'french-b-sl',
    folderId: '19F9ZS4iQd_EYS0VwwBmPvj1pBDJU6hIJ',
    label: 'French B SL',
  },
  {
    folderSlug: 'ee-2028',
    folderId: '1SlqtFjGn3F5kTcQeBHvMmHToZqm11iKd',
    label: 'EE 2028 Cohort',
  },
  {
    folderSlug: 'cas-2028',
    folderId: '1GbukRqESNKOGdfGNsvvIy4yLi-q4LxUi',
    label: 'CAS 2028 Cohort',
  },
];

/**
 * Large textbooks that must NOT be downloaded into seed blobs;
 * emitted as lightweight Drive external references instead.
 * When `--include-textbooks` or `--textbooks-only` is passed, they are downloaded
 * strictly into `.tmp-classroom/textbooks/` (gitignored) for offline extraction.
 */
export const EXTERNAL_ONLY_FILE_IDS = new Set<string>([
  '179MNOnslzari-BDpSUiYrP9uD2FJsM4-', // Biology - Course Companion - Allott & Mindorff (Oxford 2023)
  '1bjwyimkOj1_khD9htn43Kjm5tg31B4jz', // Chemistry - Course Companion - Bylikin (Oxford 2023)
  '1ZF9VwK8OICUV3pKisEMgdEVbMfc2uSZI', // Mathematics AA SL - Oxford 2019
  '1H2GiNQEkD4aHAx3iKNGOwqEqUZbwBekR', // Old IB Textbook.pdf (Haese Math SL 3rd ed)
  '1Skn6VKdwC5J6BDEINabIdOXfr_8zHPnR', // History Paper 3 Europe - Pearson 2026
  '1cVUxZ1lmFZhmDdbRKRmrUE8jf-y3n5-D', // French B - Le Monde en Français (Cambridge 2018)
]);

export interface TextbookSourceConfig {
  slug: string;
  subjectSlug: string;
  driveId: string;
  fileName: string;
  title: string;
  approxSize: string;
}

export const TEXTBOOK_SOURCES: TextbookSourceConfig[] = [
  {
    slug: 'biology-hl',
    subjectSlug: 'biology-hl',
    driveId: '179MNOnslzari-BDpSUiYrP9uD2FJsM4-',
    fileName: 'bio-allott-2023.pdf',
    title: 'IB Biology Course Companion (Allott & Mindorff, Oxford 2023)',
    approxSize: '102.0 MB',
  },
  {
    slug: 'chemistry-sl',
    subjectSlug: 'chemistry-sl',
    driveId: '1bjwyimkOj1_khD9htn43Kjm5tg31B4jz',
    fileName: 'chem-bylikin-2023.pdf',
    title: 'IB Chemistry Course Companion (Bylikin et al., Oxford 2023)',
    approxSize: '134.2 MB',
  },
  {
    slug: 'math-aa-sl',
    subjectSlug: 'math-aa-sl',
    driveId: '1ZF9VwK8OICUV3pKisEMgdEVbMfc2uSZI',
    fileName: 'math-oxford-2019.pdf',
    title: 'IB Mathematics: Analysis and Approaches SL (Oxford 2019)',
    approxSize: '313.6 MB',
  },
  {
    slug: 'math-aa-sl-old',
    subjectSlug: 'math-aa-sl',
    driveId: '1H2GiNQEkD4aHAx3iKNGOwqEqUZbwBekR',
    fileName: 'math-old-textbook.pdf',
    title: 'Mathematics for the International Student: Mathematics SL (Haese 3rd ed.)',
    approxSize: '17.8 MB',
  },
  {
    slug: 'history-hl',
    subjectSlug: 'history-hl',
    driveId: '1Skn6VKdwC5J6BDEINabIdOXfr_8zHPnR',
    fileName: 'history-pearson-p3-europe-2026.pdf',
    title: 'IB DP History Paper 3 Europe in the 20th Century (Pearson 2026)',
    approxSize: '109.5 MB',
  },
  {
    slug: 'french-b-sl',
    subjectSlug: 'french-b-sl',
    driveId: '1cVUxZ1lmFZhmDdbRKRmrUE8jf-y3n5-D',
    fileName: 'french-le-monde-2018.pdf',
    title: 'Le Monde en Français (Cambridge 2018)',
    approxSize: '143.7 MB',
  },
];

interface DriveFileEntry {
  id: string;
  name: string;
  mimeType: string;
  modifiedTime?: string;
  size?: string;
}

export interface IngestedManifestItem {
  folderSlug: string;
  folderLabel: string;
  driveId: string;
  fileName: string;
  mimeType: string;
  sizeBytes: number;
  isExternalOnly: boolean;
  externalUrl: string;
  localFilePath: string | null;
  extractedTxtPath: string | null;
  pageCount: number | null;
  charCount: number;
  extractionWarning: string | null;
}

export interface IngestedManifest {
  generatedAt: string;
  rootFolderId: string;
  duplicatesRemoved: {
    folderSlug: string;
    fileName: string;
    driveId: string;
    sizeBytes: number;
    reason: string;
  }[];
  items: IngestedManifestItem[];
}

function decodeXmlEntities(input: string): string {
  return input
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&#(\d+);/g, (_, dec) => String.fromCharCode(Number(dec)))
    .replace(/&#x([0-9a-fA-F]+);/g, (_, hex) => String.fromCharCode(parseInt(hex, 16)));
}

function normalizeDedupeKey(name: string, sizeBytes: number): string {
  const cleanedName = name
    .trim()
    .replace(/\s+\(\d+\)(\.[^.]+)$/, '$1')
    .replace(/\s+/g, ' ')
    .toLowerCase();
  return `${cleanedName}::${sizeBytes}`;
}

function sanitizeLocalFileName(name: string): string {
  return name.replace(/[\u202f\u00a0]/g, ' ').replace(/[\/\\:*?"<>|]/g, '_');
}

function extractXmlParagraphText(xml: string, paragraphTag: string, textTag: string): string {
  const pRegex = new RegExp(`<${paragraphTag}\\b[^>]*>[\\s\\S]*?<\\/${paragraphTag}>`, 'g');
  const tRegex = new RegExp(`<${textTag}\\b[^>]*>([\\s\\S]*?)<\\/${textTag}>`, 'g');
  const paragraphs: string[] = [];

  let pMatch: RegExpExecArray | null;
  while ((pMatch = pRegex.exec(xml)) !== null) {
    const pXml = pMatch[0];
    const runs: string[] = [];
    let tMatch: RegExpExecArray | null;
    while ((tMatch = tRegex.exec(pXml)) !== null) {
      const decoded = decodeXmlEntities(tMatch[1]);
      if (decoded.length > 0) {
        runs.push(decoded);
      }
    }
    const line = runs.join('').replace(/\s+/g, ' ').trim();
    if (line.length > 0) {
      paragraphs.push(line);
    }
  }

  return paragraphs.join('\n');
}

async function extractPdfText(filePath: string): Promise<{ text: string; pageCount: number | null }> {
  const pdfParse = require('pdf-parse/lib/pdf-parse.js') as (
    buf: Buffer,
  ) => Promise<{ text: string; numpages?: number }>;
  const buffer = await fs.readFile(filePath);
  const parsed = await pdfParse(buffer);
  const cleaned = (parsed.text ?? '')
    .replace(/\r\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
  return {
    text: cleaned,
    pageCount: typeof parsed.numpages === 'number' ? parsed.numpages : null,
  };
}

async function extractDocxText(filePath: string): Promise<string> {
  const buffer = await fs.readFile(filePath);
  const zip = await JSZip.loadAsync(buffer);
  const docFile = zip.file('word/document.xml');
  if (!docFile) {
    throw new Error('Missing word/document.xml inside DOCX archive');
  }
  const xml = await docFile.async('string');
  return extractXmlParagraphText(xml, 'w:p', 'w:t');
}

async function extractPptxText(filePath: string): Promise<{ text: string; pageCount: number }> {
  const buffer = await fs.readFile(filePath);
  const zip = await JSZip.loadAsync(buffer);

  const slideEntries = Object.keys(zip.files)
    .map((key) => {
      const match = /^ppt\/slides\/slide(\d+)\.xml$/.exec(key);
      return match ? { key, slideNum: Number(match[1]) } : null;
    })
    .filter((entry): entry is { key: string; slideNum: number } => entry !== null)
    .sort((a, b) => a.slideNum - b.slideNum);

  const sections: string[] = [];

  for (const { key, slideNum } of slideEntries) {
    const slideXml = await zip.file(key)!.async('string');
    const slideBody = extractXmlParagraphText(slideXml, 'a:p', 'a:t');

    let notesText = '';
    const relsPath = `ppt/slides/_rels/slide${slideNum}.xml.rels`;
    const relsFile = zip.file(relsPath);
    if (relsFile) {
      const relsXml = await relsFile.async('string');
      const targetMatch = /Target="([^"]*notesSlide\d+\.xml)"/.exec(relsXml);
      if (targetMatch) {
        const normalizedTarget = path.posix.normalize(
          path.posix.join('ppt/slides', targetMatch[1]),
        );
        const notesFile = zip.file(normalizedTarget);
        if (notesFile) {
          const notesXml = await notesFile.async('string');
          notesText = extractXmlParagraphText(notesXml, 'a:p', 'a:t');
        }
      }
    }

    if (!notesText) {
      const fallbackNotes = zip.file(`ppt/notesSlides/notesSlide${slideNum}.xml`);
      if (fallbackNotes) {
        const notesXml = await fallbackNotes.async('string');
        notesText = extractXmlParagraphText(notesXml, 'a:p', 'a:t');
      }
    }

    const cleanedNotes = notesText
      .split('\n')
      .filter((line) => !/^\d+$/.test(line.trim()))
      .join('\n')
      .trim();

    let block = `=== SLIDE ${slideNum} ===\n${slideBody || '(No slide text)'}`;
    if (cleanedNotes) {
      block += `\n[Speaker Notes]\n${cleanedNotes}`;
    }
    sections.push(block);
  }

  return {
    text: sections.join('\n\n'),
    pageCount: slideEntries.length,
  };
}

async function listDriveFolder(folderId: string): Promise<DriveFileEntry[]> {
  const { stdout } = await execFileAsync(
    'gdrive',
    ['readonly', 'ls', folderId, '--max', '200', '--json'],
    { maxBuffer: 10 * 1024 * 1024 },
  );
  const parsed = JSON.parse(stdout) as DriveFileEntry[];
  return parsed;
}

async function downloadDriveFile(driveId: string, outPath: string, expectedSize: number): Promise<void> {
  try {
    const stat = await fs.stat(outPath);
    if (expectedSize > 0 && stat.size === expectedSize) {
      return;
    }
  } catch {
    // Not downloaded yet
  }

  await fs.mkdir(path.dirname(outPath), { recursive: true });
  await execFileAsync(
    'gdrive',
    ['readonly', 'download', driveId, '--out', outPath],
    { maxBuffer: 10 * 1024 * 1024 },
  );
}

async function runWithConcurrency<T>(
  items: T[],
  concurrency: number,
  worker: (item: T) => Promise<void>,
): Promise<void> {
  const queue = [...items];
  const workers = Array.from({ length: Math.min(concurrency, items.length) }, async () => {
    while (queue.length > 0) {
      const next = queue.shift();
      if (next !== undefined) {
        await worker(next);
      }
    }
  });
  await Promise.all(workers);
}

function countWordsText(text: string | null | undefined): number {
  if (!text) return 0;
  const trimmed = text.trim();
  if (!trimmed) return 0;
  return trimmed.split(/\s+/).length;
}

async function validateSeeds(): Promise<void> {
  const { PlayableDiagramSpecSchema, StudyNoteBlocksSchema } = await import(
    '../src/types/diagrams'
  );
  const { IB_SUBJECTS_CONFIG } = await import('../src/data/ib-syllabi/index');
  const {
    CLASSROOM_SEED_BY_SUBJECT,
    CORE_CLASSROOM_RESOURCES,
    CORE_STARTER_OVERRIDES,
  } = await import('../src/data/classroom-seed/index');

  const validTopicCodesBySlug = new Map<string, Set<string>>();
  for (const cfg of IB_SUBJECTS_CONFIG) {
    const codes = new Set<string>();
    const addCode = (raw: string) => {
      const upper = raw.trim().toUpperCase();
      codes.add(upper);
      const stripped = upper.replace(/^(SL|HL)\s+/i, '').trim();
      if (stripped) codes.add(stripped);
    };
    for (const unit of cfg.units) {
      addCode(unit.code);
      for (const sub of unit.subtopics) {
        addCode(sub.code);
      }
    }
    validTopicCodesBySlug.set(cfg.slug, codes);
  }

  let totalNotes = 0;
  let totalQuestions = 0;
  let totalFlashcards = 0;
  let totalMaterials = 0;
  let totalWordsAll = 0;
  let globalMinWords = Infinity;
  const globalDiagramLocations = new Map<string, string[]>();
  const globalDiagramTypes = new Map<string, number>();
  const validationErrors: string[] = [];

  for (const [slug, seed] of Object.entries(CLASSROOM_SEED_BY_SUBJECT)) {
    totalMaterials += seed.materials.length;
    totalQuestions += seed.questions.length;
    totalFlashcards += seed.flashcards.length;

    const validCodes = validTopicCodesBySlug.get(slug);
    const checkTopicCode = (kind: string, code: string | null | undefined, label: string) => {
      if (!code || !validCodes) {
        if (!validCodes) {
          validationErrors.push(`[${slug}] Missing IB_SUBJECTS_CONFIG entry`);
        } else {
          validationErrors.push(`[${slug}] Empty topicCode on ${kind} "${label}"`);
        }
        return;
      }
      const upper = code.trim().toUpperCase();
      const stripped = upper.replace(/^(SL|HL)\s+/i, '').trim();
      if (!validCodes.has(upper) && !validCodes.has(stripped)) {
        validationErrors.push(`[${slug}] Missing topicCode "${code}" on ${kind} "${label}"`);
      }
    };

    const noteTitles = new Set<string>();
    const subjectDiagramIds = new Set<string>();
    const subjectDiagramTypes = new Map<string, number>();
    const noteWordCounts: number[] = [];

    for (const mat of seed.materials) {
      if (mat.topicCode) {
        checkTopicCode('material', mat.topicCode, mat.fileName);
      }
    }

    if (seed.topicGuidanceNotes) {
      for (const code of Object.keys(seed.topicGuidanceNotes)) {
        checkTopicCode('topicGuidanceNotes', code, code);
      }
    }

    for (const note of seed.notes) {
      totalNotes += 1;
      if (noteTitles.has(note.title)) {
        validationErrors.push(`[${slug}] Duplicate note title "${note.title}"`);
      }
      noteTitles.add(note.title);
      checkTopicCode('note', note.topicCode, note.title);

      const res = StudyNoteBlocksSchema.safeParse(note.blocks);
      if (!res.success) {
        console.error(`Validation failed for ${slug} / ${note.title}:`, res.error.format());
        validationErrors.push(`[${slug}] Schema failure in note "${note.title}"`);
        continue;
      }

      let words = countWordsText(note.title) + countWordsText(note.summary);
      for (const block of res.data) {
        switch (block.type) {
          case 'heading':
            words += countWordsText(block.text);
            break;
          case 'paragraph':
            words += countWordsText(block.markdown);
            break;
          case 'callout':
            words += countWordsText(block.title) + countWordsText(block.markdown);
            break;
          case 'key_terms':
            for (const item of block.items) {
              words += countWordsText(item.term) + countWordsText(item.definitionMarkdown);
            }
            break;
          case 'equation':
            words += countWordsText(block.caption);
            for (const v of block.variableLegend ?? []) {
              words += countWordsText(v.meaning);
            }
            break;
          case 'playable_diagram': {
            words += countWordsText(block.spec.title) + countWordsText(block.spec.caption);
            const diagRes = PlayableDiagramSpecSchema.safeParse(block.spec);
            if (!diagRes.success) {
              validationErrors.push(
                `[${slug}] Invalid playable_diagram "${block.spec.id}" in "${note.title}"`,
              );
              break;
            }
            const diagId = diagRes.data.id;
            const diagType = diagRes.data.type;
            subjectDiagramIds.add(diagId);
            subjectDiagramTypes.set(diagType, (subjectDiagramTypes.get(diagType) ?? 0) + 1);
            globalDiagramTypes.set(diagType, (globalDiagramTypes.get(diagType) ?? 0) + 1);
            const locs = globalDiagramLocations.get(diagId) ?? [];
            locs.push(`${slug}::${note.title}`);
            globalDiagramLocations.set(diagId, locs);
            break;
          }
        }
      }
      noteWordCounts.push(words);
      totalWordsAll += words;
      if (words < globalMinWords) {
        globalMinWords = words;
      }
    }

    for (const q of seed.questions) {
      checkTopicCode('question', q.topicCode, q.questionMarkdown.slice(0, 60));
      const pointsSum = q.markscheme.marking_points.reduce((acc, p) => acc + p.marks, 0);
      if (pointsSum !== q.maxMarks) {
        validationErrors.push(
          `[${slug}] Markscheme sum (${pointsSum}) !== maxMarks (${q.maxMarks}) on "${q.questionMarkdown.slice(0, 60)}"`,
        );
      }
    }

    for (const card of seed.flashcards) {
      checkTopicCode('flashcard', card.topicCode, card.frontMarkdown.slice(0, 60));
    }

    const avgWords =
      noteWordCounts.length > 0
        ? Math.round(noteWordCounts.reduce((a, b) => a + b, 0) / noteWordCounts.length)
        : 0;
    const minWords = noteWordCounts.length > 0 ? Math.min(...noteWordCounts) : 0;
    const maxWords = noteWordCounts.length > 0 ? Math.max(...noteWordCounts) : 0;
    const typeSummary = Array.from(subjectDiagramTypes.entries())
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([type, count]) => `${type}:${count}`)
      .join(', ');

    console.log(
      `[OK] ${slug}: ${seed.materials.length} materials, ${seed.notes.length} notes (avg ${avgWords} / min ${minWords} / max ${maxWords} words), ${subjectDiagramIds.size} unique diagrams [${typeSummary}], ${seed.questions.length} questions, ${seed.flashcards.length} flashcards`,
    );
  }

  const duplicateDiagrams = Array.from(globalDiagramLocations.entries()).filter(
    ([, locs]) => locs.length > 1,
  );
  for (const [diagId, locs] of duplicateDiagrams) {
    validationErrors.push(`Duplicate diagram ID "${diagId}" found in: ${locs.join(', ')}`);
  }

  if (validationErrors.length > 0) {
    console.error(`\nSeed validation failed with ${validationErrors.length} error(s):`);
    for (const err of validationErrors) {
      console.error(`  - ${err}`);
    }
    process.exit(1);
  }

  const globalAvgWords = totalNotes > 0 ? Math.round(totalWordsAll / totalNotes) : 0;
  const minWordsDisplay = Number.isFinite(globalMinWords) ? globalMinWords : 0;
  const globalTypeSummary = Array.from(globalDiagramTypes.entries())
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([type, count]) => `${type}=${count}`)
    .join(', ');

  console.log(
    `[OK] Core: ${CORE_CLASSROOM_RESOURCES.length} resources, ${CORE_STARTER_OVERRIDES.length} starter overrides`,
  );
  console.log(`Diagram types (${globalDiagramLocations.size} unique): ${globalTypeSummary}`);
  console.log(
    `Totals: ${totalMaterials} materials, ${totalNotes} schema-valid notes (avg ${globalAvgWords} / min ${minWordsDisplay} words), ${globalDiagramLocations.size} unique diagrams (0 duplicate IDs), ${totalQuestions} questions, ${totalFlashcards} flashcards, 0 missing topic codes.`,
  );
}

async function assertTmpClassroomGitignored(projectRoot: string): Promise<void> {
  const gitignorePath = path.join(projectRoot, '.gitignore');
  const contents = await fs.readFile(gitignorePath, 'utf8');
  const hasIgnoreRule = contents
    .split(/\r?\n/)
    .some((line) => line.trim() === '.tmp-classroom/' || line.trim() === '.tmp-classroom');
  if (!hasIgnoreRule) {
    throw new Error(
      'Safety abort: .tmp-classroom/ must be listed in .gitignore before downloading classroom or textbook binaries.',
    );
  }
}

async function downloadTextbooks(projectRoot: string, force = false): Promise<void> {
  await assertTmpClassroomGitignored(projectRoot);
  const textbooksDir = path.join(projectRoot, '.tmp-classroom', 'textbooks');
  await fs.mkdir(textbooksDir, { recursive: true });

  console.log(`\nDownloading ${TEXTBOOK_SOURCES.length} IB textbooks into ${textbooksDir}...`);

  const downloadedManifest: Array<{
    slug: string;
    subjectSlug: string;
    driveId: string;
    title: string;
    localFilePath: string;
    sizeBytes: number;
    externalUrl: string;
  }> = [];

  await runWithConcurrency(TEXTBOOK_SOURCES, 3, async (book) => {
    const outPath = path.join(textbooksDir, book.fileName);
    let alreadyPresent = false;
    if (!force) {
      try {
        const stat = await fs.stat(outPath);
        if (stat.size > 1_000_000) {
          alreadyPresent = true;
        }
      } catch {
        // File does not exist yet
      }
    }

    if (alreadyPresent) {
      console.log(`  [cached] ${book.fileName}`);
    } else {
      console.log(`  [downloading] ${book.fileName} (${book.approxSize}, driveId=${book.driveId})...`);
      await execFileAsync(
        'gdrive',
        ['readonly', 'download', book.driveId, '--out', outPath],
        { maxBuffer: 10 * 1024 * 1024 },
      );
      console.log(`  [done] ${book.fileName}`);
    }

    const stat = await fs.stat(outPath);
    downloadedManifest.push({
      slug: book.slug,
      subjectSlug: book.subjectSlug,
      driveId: book.driveId,
      title: book.title,
      localFilePath: path.relative(projectRoot, outPath),
      sizeBytes: stat.size,
      externalUrl: `https://drive.google.com/file/d/${book.driveId}/view?usp=drivesdk`,
    });
  });

  downloadedManifest.sort((a, b) => a.slug.localeCompare(b.slug));
  const manifestPath = path.join(textbooksDir, 'manifest.json');
  await fs.writeFile(
    manifestPath,
    JSON.stringify({ generatedAt: new Date().toISOString(), textbooks: downloadedManifest }, null, 2),
    'utf8',
  );
  console.log(`Textbook manifest written to ${manifestPath}`);
}

async function runIngest(): Promise<void> {
  const projectRoot = process.cwd();
  await assertTmpClassroomGitignored(projectRoot);
  const tmpRoot = path.join(projectRoot, '.tmp-classroom');
  const extractedRoot = path.join(tmpRoot, 'extracted');
  await fs.mkdir(extractedRoot, { recursive: true });

  const duplicatesRemoved: IngestedManifest['duplicatesRemoved'] = [];
  const manifestItems: IngestedManifestItem[] = [];

  interface DownloadTask {
    folder: DriveFolderConfig;
    entry: DriveFileEntry;
    safeName: string;
    sizeBytes: number;
    localFilePath: string;
  }

  const downloadTasks: DownloadTask[] = [];

  for (const folder of CLASSROOM_FOLDERS) {
    console.log(`Listing ${folder.label} (${folder.folderId})...`);
    const entries = await listDriveFolder(folder.folderId);
    const seenKeys = new Map<string, DriveFileEntry>();

    for (const entry of entries) {
      if (entry.mimeType === 'application/vnd.google-apps.folder') {
        continue;
      }

      const sizeBytes = Number(entry.size ?? '0');
      const dedupeKey = normalizeDedupeKey(entry.name, sizeBytes);
      const existing = seenKeys.get(dedupeKey);
      if (existing) {
        duplicatesRemoved.push({
          folderSlug: folder.folderSlug,
          fileName: entry.name,
          driveId: entry.id,
          sizeBytes,
          reason: `Duplicate of "${existing.name}" (${existing.id}, ${sizeBytes} bytes)`,
        });
        continue;
      }
      seenKeys.set(dedupeKey, entry);

      const externalUrl = `https://drive.google.com/file/d/${entry.id}/view?usp=drivesdk`;

      if (EXTERNAL_ONLY_FILE_IDS.has(entry.id)) {
        manifestItems.push({
          folderSlug: folder.folderSlug,
          folderLabel: folder.label,
          driveId: entry.id,
          fileName: entry.name,
          mimeType: entry.mimeType,
          sizeBytes,
          isExternalOnly: true,
          externalUrl,
          localFilePath: null,
          extractedTxtPath: null,
          pageCount: null,
          charCount: 0,
          extractionWarning: 'Skipped large textbook binary per requirement; external Drive reference emitted.',
        });
        continue;
      }

      const safeName = sanitizeLocalFileName(entry.name);
      const localFilePath = path.join(tmpRoot, folder.folderSlug, safeName);
      downloadTasks.push({
        folder,
        entry,
        safeName,
        sizeBytes,
        localFilePath,
      });
    }
  }

  console.log(
    `Downloading & extracting ${downloadTasks.length} unique files (${duplicatesRemoved.length} duplicates removed)...`,
  );

  await runWithConcurrency(downloadTasks, 6, async (task) => {
    const { folder, entry, safeName, sizeBytes, localFilePath } = task;
    await downloadDriveFile(entry.id, localFilePath, sizeBytes);

    const ext = path.extname(safeName).toLowerCase();
    const externalUrl = `https://drive.google.com/file/d/${entry.id}/view?usp=drivesdk`;
    let extractedTxtPath: string | null = null;
    let pageCount: number | null = null;
    let charCount = 0;
    let extractionWarning: string | null = null;

    if (ext === '.jpg' || ext === '.jpeg' || ext === '.png' || ext === '.webp') {
      extractionWarning = 'Image file — inspect directly via vision (read_file).';
    } else {
      let extractedText = '';
      try {
        if (ext === '.pdf') {
          const pdfRes = await extractPdfText(localFilePath);
          extractedText = pdfRes.text;
          pageCount = pdfRes.pageCount;
          if (extractedText.length < 40) {
            extractionWarning = 'PDF contains minimal selectable text (likely scanned slides/images).';
          }
        } else if (ext === '.docx') {
          extractedText = await extractDocxText(localFilePath);
        } else if (ext === '.pptx') {
          const pptxRes = await extractPptxText(localFilePath);
          extractedText = pptxRes.text;
          pageCount = pptxRes.pageCount;
        } else if (ext === '.txt' || ext === '.md') {
          extractedText = (await fs.readFile(localFilePath, 'utf8')).trim();
        } else {
          extractionWarning = `Unsupported extension: ${ext}`;
        }
      } catch (err) {
        extractionWarning = err instanceof Error ? err.message : String(err);
      }

      if (extractedText) {
        const outTxtDir = path.join(extractedRoot, folder.folderSlug);
        await fs.mkdir(outTxtDir, { recursive: true });
        extractedTxtPath = path.join(outTxtDir, `${safeName}.txt`);
        await fs.writeFile(extractedTxtPath, extractedText, 'utf8');
        charCount = extractedText.length;
      }
    }

    manifestItems.push({
      folderSlug: folder.folderSlug,
      folderLabel: folder.label,
      driveId: entry.id,
      fileName: entry.name,
      mimeType: entry.mimeType,
      sizeBytes,
      isExternalOnly: false,
      externalUrl,
      localFilePath: path.relative(projectRoot, localFilePath),
      extractedTxtPath: extractedTxtPath ? path.relative(projectRoot, extractedTxtPath) : null,
      pageCount,
      charCount,
      extractionWarning,
    });
  });

  manifestItems.sort((a, b) =>
    `${a.folderSlug}:${a.fileName}`.localeCompare(`${b.folderSlug}:${b.fileName}`),
  );

  const manifest: IngestedManifest = {
    generatedAt: new Date().toISOString(),
    rootFolderId: CLASSROOM_DRIVE_ROOT_ID,
    duplicatesRemoved,
    items: manifestItems,
  };

  const manifestPath = path.join(tmpRoot, 'manifest.json');
  await fs.writeFile(manifestPath, JSON.stringify(manifest, null, 2), 'utf8');

  console.log(`Ingestion complete. Wrote ${manifestPath}`);
  console.log(`Unique items: ${manifestItems.length}, duplicates skipped: ${duplicatesRemoved.length}`);

  const warnings = manifestItems.filter((item) => item.extractionWarning);
  if (warnings.length > 0) {
    console.log('\nItems with notes/warnings:');
    for (const w of warnings) {
      console.log(`- [${w.folderSlug}] ${w.fileName}: ${w.extractionWarning} (chars=${w.charCount})`);
    }
  }
}

async function main(): Promise<void> {
  const args = new Set(process.argv.slice(2));
  if (args.has('--validate-seeds')) {
    await validateSeeds();
    return;
  }

  const projectRoot = process.cwd();
  const includeTextbooks = args.has('--include-textbooks');
  const textbooksOnly = args.has('--textbooks-only');
  const forceTextbooks = args.has('--force-textbooks');

  if (textbooksOnly) {
    await downloadTextbooks(projectRoot, forceTextbooks);
    return;
  }

  await runIngest();
  if (includeTextbooks) {
    await downloadTextbooks(projectRoot, forceTextbooks);
  }
}

const isDirectEntry =
  typeof process.argv[1] === 'string' &&
  path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);

if (isDirectEntry) {
  main().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
