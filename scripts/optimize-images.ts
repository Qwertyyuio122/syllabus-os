import { promises as fs } from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

/**
 * Optimizes the Liquid Glass artwork in `public/images`.
 *
 * - `hero-glass.png`  -> 1280x720 WebP
 * - `subjects/*.png`  -> 512x512 WebP
 *
 * Usage:
 *   npm run images:optimize   # generate WebP files from PNG sources
 *   npm run images:check      # CI guard: enforce per-file and total budgets
 */

const ROOT = process.cwd();
const IMAGES_DIR = path.join(ROOT, 'public', 'images');
const SUBJECTS_DIR = path.join(IMAGES_DIR, 'subjects');

const HERO = {
  source: path.join(IMAGES_DIR, 'hero-glass.png'),
  output: path.join(IMAGES_DIR, 'hero-glass.webp'),
  width: 1280,
  height: 720,
  quality: 82,
  maxBytes: 150 * 1024,
};

const SUBJECT_SLUGS = [
  'biology-hl',
  'chemistry-sl',
  'math-aa-sl',
  'history-hl',
  'english-lit-hl',
  'french-b-sl',
] as const;

const SUBJECT = {
  width: 512,
  height: 512,
  quality: 82,
  maxBytes: 60 * 1024,
};

const TOTAL_BUDGET = 600 * 1024;

const checkMode = process.argv.includes('--check');

function formatBytes(bytes: number): string {
  if (bytes >= 1024 * 1024) return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
  return `${(bytes / 1024).toFixed(1)} KB`;
}

async function exists(filePath: string): Promise<boolean> {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function fileSize(filePath: string): Promise<number> {
  const stat = await fs.stat(filePath);
  return stat.size;
}

async function optimize(
  source: string,
  output: string,
  options: { width: number; height: number; quality: number },
): Promise<{ before: number; after: number } | null> {
  if (!(await exists(source))) return null;

  await sharp(source)
    .resize(options.width, options.height, {
      fit: 'inside',
      withoutEnlargement: true,
    })
    .webp({ quality: options.quality, effort: 6 })
    .toFile(output);

  return { before: await fileSize(source), after: await fileSize(output) };
}

async function runCheck(): Promise<void> {
  const targets = [
    { file: HERO.output, maxBytes: HERO.maxBytes },
    ...SUBJECT_SLUGS.map((slug) => ({
      file: path.join(SUBJECTS_DIR, `${slug}.webp`),
      maxBytes: SUBJECT.maxBytes,
    })),
  ];

  const missing: string[] = [];
  const oversized: string[] = [];
  let total = 0;

  for (const target of targets) {
    const relative = path.relative(ROOT, target.file);
    if (!(await exists(target.file))) {
      missing.push(relative);
      continue;
    }
    const size = await fileSize(target.file);
    total += size;
    if (size > target.maxBytes) {
      oversized.push(
        `${relative} (${formatBytes(size)} > ${formatBytes(target.maxBytes)})`,
      );
    }
  }

  console.log(
    `Artwork budget: ${formatBytes(total)} / ${formatBytes(TOTAL_BUDGET)}`,
  );

  if (missing.length > 0) {
    console.error('Missing WebP assets (run `npm run images:optimize`):');
    for (const file of missing) console.error(`  - ${file}`);
  }
  if (oversized.length > 0) {
    console.error('Over per-file budget:');
    for (const file of oversized) console.error(`  - ${file}`);
  }
  if (total > TOTAL_BUDGET) {
    console.error(
      `Total artwork exceeds budget: ${formatBytes(total)} > ${formatBytes(TOTAL_BUDGET)}`,
    );
  }

  if (missing.length > 0 || oversized.length > 0 || total > TOTAL_BUDGET) {
    process.exit(1);
  }

  console.log('Artwork budget OK.');
}

async function runOptimize(): Promise<void> {
  const rows: Array<{ file: string; before: number; after: number }> = [];

  const hero = await optimize(HERO.source, HERO.output, HERO);
  if (hero) rows.push({ file: 'hero-glass.webp', ...hero });

  for (const slug of SUBJECT_SLUGS) {
    const result = await optimize(
      path.join(SUBJECTS_DIR, `${slug}.png`),
      path.join(SUBJECTS_DIR, `${slug}.webp`),
      SUBJECT,
    );
    if (result) rows.push({ file: `subjects/${slug}.webp`, ...result });
  }

  if (rows.length === 0) {
    console.log('No source PNGs found; nothing to optimize.');
    return;
  }

  const pad = (value: string, width: number) => value.padEnd(width);
  console.log(
    pad('File', 34),
    pad('Before', 10),
    pad('After', 10),
    'Saved',
  );

  for (const row of rows) {
    const saved = ((1 - row.after / row.before) * 100).toFixed(1);
    console.log(
      pad(row.file, 34),
      pad(formatBytes(row.before), 10),
      pad(formatBytes(row.after), 10),
      `${saved}%`,
    );
  }

  const totalBefore = rows.reduce((sum, row) => sum + row.before, 0);
  const totalAfter = rows.reduce((sum, row) => sum + row.after, 0);
  console.log(
    pad('TOTAL', 34),
    pad(formatBytes(totalBefore), 10),
    pad(formatBytes(totalAfter), 10),
    `${((1 - totalAfter / totalBefore) * 100).toFixed(1)}%`,
  );
}

async function main(): Promise<void> {
  if (checkMode) {
    await runCheck();
    return;
  }
  await runOptimize();
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
