/**
 * IB Textbook Text Extraction & Chapter Chunking Script for SyllabusOS
 *
 * Extracts page-delimited text from all downloaded IB textbooks in
 * `.tmp-classroom/textbooks/` into `.tmp-classroom/textbooks-extracted/<slug>/`:
 *   - `full.txt`  (complete book with `=== PAGE N ===` delimiters)
 *   - `toc.txt`   (book metadata, PDF bookmarks, printed TOC, & chunk index)
 *   - `chunk-XX_pXXXX-YYYY_<topic>.txt` (chapter-aligned 40-80 page chunks)
 *
 * Extractor chain:
 *   1. `pdftotext` (Poppler CLI, if installed)
 *   2. Python `fitz` (PyMuPDF) or `pypdf` (if installed; never globally pip installed)
 *   3. Node `pdf-parse` (pdf.js) coordinate-aware line reconstruction (fallback)
 *
 * Usage:
 *   npx tsx scripts/extract-textbooks.ts
 *   npx tsx scripts/extract-textbooks.ts --only biology-hl
 */

import { execFile } from 'node:child_process';
import { promises as fs } from 'node:fs';
import { createRequire } from 'node:module';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { promisify } from 'node:util';
import { TEXTBOOK_SOURCES, type TextbookSourceConfig } from './ingest-classroom-drive';

const execFileAsync = promisify(execFile);
const require = createRequire(import.meta.url);

export interface SectionBoundary {
  title: string;
  startPdfPage: number;
}

export interface TextbookMetadataConfig {
  bookPageOffsetNote: string;
  sections: SectionBoundary[];
  verifiedContents?: string[];
}

const TEXTBOOK_STRUCTURE: Record<string, TextbookMetadataConfig> = {
  'biology-hl': {
    bookPageOffsetNote: 'Book page = PDF page - 10 (e.g., A1.1 p.3 = PDF p.13; A1.2 p.16 = PDF p.26).',
    verifiedContents: [
      'Theme A Unity and diversity:',
      '  - A1 Molecules (book p.2 / PDF p.12): A1.1 Water (p.3 / PDF p.13), A1.2 Nucleic acids (p.16 / PDF p.26), TOK (p.32), End of chapter Qs (p.34)',
      '  - A2 Cells (book p.36 / PDF p.46): A2.1 Origins of cells (p.37 / PDF p.47), A2.2 Cell structure (p.49 / PDF p.59), A2.3 Viruses (p.80 / PDF p.90), TOK (p.92), Qs (p.94)',
      '  - A3 Organisms (book p.96 / PDF p.106): A3.1 Diversity of organisms (p.97 / PDF p.107), A3.2 Classification and cladistics (p.116 / PDF p.126), TOK (p.132), Qs (p.134)',
      '  - A4 Ecosystems (book p.136 / PDF p.146): A4.1 Evolution and speciation (p.137 / PDF p.147), A4.2 Conservation of biodiversity (p.156 / PDF p.166), TOK (p.173), Qs (p.175)',
      'Theme B Form and function:',
      '  - B1 Molecules (book p.178 / PDF p.188): B1.1 Carbohydrates and lipids (p.179 / PDF p.189), B1.2 Proteins (p.195 / PDF p.205), TOK (p.208), Qs (p.209)',
      '  - B2 Cells (book p.210 / PDF p.220): B2.1 Membranes and membrane transport (p.211 / PDF p.221), B2.2 Organelles and compartmentalization (p.229 / PDF p.239), B2.3 Cell specialization (p.240 / PDF p.250), TOK (p.252), Qs (p.253)',
      '  - B3 Organisms (book p.254 / PDF p.264): B3.1 Gas exchange (p.255 / PDF p.265), B3.2 Transport (p.270 / PDF p.280), B3.3 Muscle and motility (p.293 / PDF p.303), TOK (p.305), Qs (p.306)',
      '  - B4 Ecosystems (book p.308 / PDF p.318): B4.1 Adaptation to environment (p.309 / PDF p.319), B4.2 Ecological niches (p.321 / PDF p.331), TOK (p.336), Qs (p.337)',
      'Theme C Interaction and interdependence:',
      '  - C1 Molecules (book p.338 / PDF p.348): C1.1 Enzymes and metabolism (p.339 / PDF p.349), C1.2 Cell respiration (p.361 / PDF p.371), C1.3 Photosynthesis (p.384 / PDF p.394), TOK (p.410), Qs (p.411)',
      '  - C2 Cells (book p.412 / PDF p.422): C2.1 Chemical signalling (p.413 / PDF p.423), C2.2 Neural signalling (p.428 / PDF p.438), TOK (p.447), Qs (p.448)',
      '  - C3 Organisms (book p.450 / PDF p.460): C3.1 Integration of body systems (p.451 / PDF p.461), C3.2 Defence against disease (p.481 / PDF p.491), TOK (p.497), Qs (p.498)',
      '  - C4 Ecosystems (book p.500 / PDF p.510): C4.1 Populations and communities (p.501 / PDF p.511), C4.2 Transfers of energy and matter (p.529 / PDF p.539), TOK (p.554), Qs (p.555)',
      'Theme D Continuity and change:',
      '  - D1 Molecules (book p.556 / PDF p.566): D1.1 DNA replication (p.557 / PDF p.567), D1.2 Protein synthesis (p.572 / PDF p.582), D1.3 Mutation and gene editing (p.592 / PDF p.602), TOK (p.606), Qs (p.607)',
      '  - D2 Cells (book p.608 / PDF p.618): D2.1 Cell and nuclear division (p.609 / PDF p.619), D2.2 Gene expression (p.636 / PDF p.646), D2.3 Water potential (p.648 / PDF p.658), TOK (p.662), Qs (p.663)',
      '  - D3 Organisms (book p.664 / PDF p.674): D3.1 Reproduction (p.665 / PDF p.675), D3.2 Inheritance (p.692 / PDF p.702), D3.3 Homeostasis (p.721 / PDF p.731), TOK (p.738), Qs (p.739)',
      '  - D4 Ecosystems (book p.740 / PDF p.750): D4.1 Natural selection (p.741 / PDF p.751), D4.2 Stability and change (p.757 / PDF p.767), D4.3 Climate change (p.777 / PDF p.787), TOK (p.792), Qs (p.794)',
      'Internal assessment: The scientific investigation (book p.796 / PDF p.806)',
      'Index (book p.802 / PDF p.812)',
    ],
    sections: [
      { title: 'front-and-a1-molecules', startPdfPage: 1 },
      { title: 'a2-cells-and-viruses', startPdfPage: 46 },
      { title: 'a3-organisms-a4-ecosystems', startPdfPage: 106 },
      { title: 'b1-molecules-b2-cells', startPdfPage: 188 },
      { title: 'b3-organisms-b4-ecosystems', startPdfPage: 264 },
      { title: 'c1-enzymes-respiration-photosynthesis', startPdfPage: 348 },
      { title: 'c2-signalling-c3-integration-immunity', startPdfPage: 422 },
      { title: 'c4-populations-transfers', startPdfPage: 510 },
      { title: 'd1-dna-protein-synthesis-mutation', startPdfPage: 566 },
      { title: 'd2-division-gene-expression-water-potential', startPdfPage: 618 },
      { title: 'd3-reproduction-inheritance-homeostasis', startPdfPage: 674 },
      { title: 'd4-selection-climate-ia-index', startPdfPage: 750 },
    ],
  },
  'chemistry-sl': {
    bookPageOffsetNote: 'Book page = PDF page - 12 (e.g., Structure 1 p.2 = PDF p.14; Index p.686 = PDF p.698).',
    verifiedContents: [
      'Structure 1. Models of the particulate nature of matter (book p.2 / PDF p.14):',
      '  - S1.1 Introduction to particulate nature of matter (p.3 / PDF p.15)',
      '  - S1.2 The nuclear atom (p.20 / PDF p.32)',
      '  - S1.3 Electron configurations (p.34 / PDF p.46)',
      '  - S1.4 Counting particles by mass: The mole (p.63 / PDF p.75)',
      '  - S1.5 Ideal gases (p.80 / PDF p.92)',
      'Structure 2. Models of bonding and structure (book p.94 / PDF p.106):',
      '  - S2.1 The ionic model (p.95 / PDF p.107)',
      '  - S2.2 The covalent model (p.117 / PDF p.129)',
      '  - S2.3 The metallic model (p.187 / PDF p.198)',
      '  - S2.4 From models to materials (p.197 / PDF p.209)',
      'Structure 3. Classification of matter (book p.228 / PDF p.240):',
      '  - S3.1 The periodic table: Classification of elements (p.229 / PDF p.241)',
      '  - S3.2 Functional groups (p.256 / PDF p.268)',
      'Tools for chemistry (book p.308 / PDF p.320): Tool 1 Experimental (p.309), Tool 2 Tech (p.342), Tool 3 Math (p.350)',
      'Reactivity 1. What drives chemical reactions? (book p.386 / PDF p.398): R1.1 Measuring enthalpy (p.387), R1.2 Energy cycles (p.404), R1.3 Energy from fuels (p.424), R1.4 Entropy & spontaneity AHL (p.442)',
      'Reactivity 2. How much, how fast and how far? (book p.460 / PDF p.472): R2.1 Yield/amount (p.461), R2.2 Rate (p.480), R2.3 Extent/equilibrium (p.512)',
      'Reactivity 3. What are the mechanisms of chemical change? (book p.536 / PDF p.548): R3.1 Proton transfer (p.537), R3.2 Electron transfer (p.580), R3.3 Electron sharing (p.622), R3.4 Electron-pair sharing (p.628)',
      'Cross-topic exam-style questions (p.652 / PDF p.664), Inquiry process (p.655 / PDF p.667), IA (p.668 / PDF p.680), Index (p.686 / PDF p.698), Periodic Table (p.708 / PDF p.720)',
    ],
    sections: [
      { title: 'front-and-s1-particulate-atom-econfig', startPdfPage: 1 },
      { title: 's1-mole-gases-and-s2-1-ionic', startPdfPage: 75 },
      { title: 's2-2-covalent-model', startPdfPage: 129 },
      { title: 's2-3-metallic-s2-4-materials', startPdfPage: 198 },
      { title: 's3-periodicity-and-functional-groups', startPdfPage: 240 },
      { title: 'tools-for-chemistry', startPdfPage: 320 },
      { title: 'r1-enthalpy-cycles-fuels-entropy', startPdfPage: 398 },
      { title: 'r2-yield-kinetics-equilibrium', startPdfPage: 472 },
      { title: 'r3-1-proton-transfer-acids-bases', startPdfPage: 548 },
      { title: 'r3-2-to-3-4-redox-organic-mechanisms', startPdfPage: 592 },
      { title: 'inquiry-ia-index-periodic-table', startPdfPage: 667 },
    ],
  },
  'math-aa-sl': {
    bookPageOffsetNote: 'Book page = PDF page - 11 (e.g., Ch 1 p.2 = PDF p.13; Ch 2 p.62 = PDF p.73).',
    verifiedContents: [
      '1 From patterns to generalizations: sequences and series (book p.2 / PDF p.13): 1.1 Number patterns & sigma (4), 1.2 Arithmetic & geometric sequences (13), 1.3 Series (22), 1.4 Applications (36), 1.5 Binomial theorem (44), 1.6 Proofs (55)',
      '2 Representing relationships: introducing functions (book p.62 / PDF p.73): 2.1 What is a function? (65), 2.2 Functional notation (69), 2.3 Drawing graphs (75), 2.4 Domain & range (77), 2.5 Composite functions (85), 2.6 Inverse functions (92)',
      '3 Modelling relationships: linear and quadratic functions (book p.108 / PDF p.119): 3.1 Gradient (110), 3.2 Linear functions (115), 3.3 Transformations (131), 3.4 Graphing quadratics (142), 3.5 Factorization & completing the square (155), 3.6 Quadratic formula & discriminant (164), 3.7 Applications (173)',
      '4 Equivalent representations: rational functions (book p.184 / PDF p.195): 4.1 Reciprocal function (186), 4.2 Transforming reciprocal (196), 4.3 Rational functions (ax+b)/(cx+d) (201)',
      '5 Measuring change: differentiation (book p.214 / PDF p.225): 5.1 Limits & convergence (216), 5.2 Derivative function (222), 5.3 Differentiation rules (234), 5.4 First & second derivatives (240), 5.5 Optimization & kinematics (260)',
      '6 Representing data: statistics for univariate data (book p.276 / PDF p.287): 6.1 Sampling (278), 6.2 Presentation (283), 6.3 Central tendency (287), 6.4 Dispersion (296)',
      '7 Modelling relationships: statistics for bivariate data (book p.318 / PDF p.329): 7.1 Scatter diagrams (320), 7.2 Correlation (326), 7.3 Line of best fit (329), 7.4 Least squares regression (332)',
      '8 Quantifying randomness: probability (book p.352 / PDF p.363): 8.1 Theoretical & experimental (354), 8.2 Venn diagrams & sample spaces (363), 8.3 Independent/dependent & conditional (375), 8.4 Tree diagrams (381)',
      '9 Exponentials and logarithms (book p.394 / PDF p.405): 9.1 Exponents (396), 9.2 Logarithms (407), 9.3 Derivatives of e^x & ln x (422)',
      '10 Integration (book p.432 / PDF p.443): 10.1 Antiderivatives (434), 10.2 More indefinite integrals (439), 10.3 Area & definite integrals (444), 10.4 FTC (450), 10.5 Area between curves (455)',
      '11 Geometry and trigonometry in 2D and 3D (book p.466 / PDF p.477): 11.1 3D geometry (468), 11.2 Right-angled trig (475), 11.3 Sine rule (484), 11.4 Cosine rule (489), 11.5 Applications (492)',
      '12 Periodic relationships: trigonometric functions (book p.506 / PDF p.517): 12.1 Radians, arcs, sectors (508), 12.2 Unit circle (513), 12.3 Identities & equations (517), 12.4 Trigonometric functions (523)',
      '13 Modelling change: more calculus (book p.542 / PDF p.553): 13.1 Derivatives with sin & cos (544), 13.2 Applications (552), 13.3 Integration with sin, cos & substitution (559), 13.4 Kinematics (567)',
      '14 Probability distributions (book p.582 / PDF p.593): 14.1 Discrete random variables, 14.2 Binomial distribution, 14.3 Normal distribution',
      'Internal assessment exploration (book p.629 / PDF p.640), Answers (PDF p.657), Index (book p.717 / PDF p.728)',
    ],
    sections: [
      { title: 'front-and-ch1-sequences-series-binomial', startPdfPage: 1 },
      { title: 'ch2-functions', startPdfPage: 73 },
      { title: 'ch3-linear-quadratic-transformations', startPdfPage: 119 },
      { title: 'ch4-rational-functions', startPdfPage: 195 },
      { title: 'ch5-differentiation', startPdfPage: 225 },
      { title: 'ch6-univariate-statistics', startPdfPage: 287 },
      { title: 'ch7-bivariate-statistics', startPdfPage: 329 },
      { title: 'ch8-probability', startPdfPage: 363 },
      { title: 'ch9-exponentials-logarithms', startPdfPage: 405 },
      { title: 'ch10-integration', startPdfPage: 443 },
      { title: 'ch11-geometry-trig-2d-3d', startPdfPage: 477 },
      { title: 'ch12-trigonometric-functions', startPdfPage: 517 },
      { title: 'ch13-more-calculus', startPdfPage: 553 },
      { title: 'ch14-probability-distributions', startPdfPage: 593 },
      { title: 'exploration-and-answers', startPdfPage: 640 },
      { title: 'answers-cont-and-index', startPdfPage: 690 },
    ],
  },
  'math-aa-sl-old': {
    bookPageOffsetNote: 'Book page = PDF page (offset 0; e.g., Ch 1 Quadratics = PDF p.17).',
    sections: [
      { title: 'front-ch1-quadratics', startPdfPage: 1 },
      { title: 'ch2-functions-ch3-exponentials', startPdfPage: 53 },
      { title: 'ch4-logs-ch5-transformations', startPdfPage: 109 },
      { title: 'ch6-sequences-ch7-binomial-ch8-unit-circle', startPdfPage: 151 },
      { title: 'ch9-trig-ch10-trig-fn-ch11-identities', startPdfPage: 213 },
      { title: 'ch12-vectors-ch13-vector-apps', startPdfPage: 275 },
      { title: 'ch14-diff-intro-ch15-diff-rules', startPdfPage: 343 },
      { title: 'ch16-curves-ch17-diff-apps', startPdfPage: 385 },
      { title: 'ch18-integration-ch19-integration-apps', startPdfPage: 441 },
      { title: 'ch20-descriptive-stats-ch21-linear-modelling', startPdfPage: 499 },
      { title: 'ch22-probability-ch23-drv', startPdfPage: 567 },
      { title: 'ch24-normal-ch25-misc', startPdfPage: 629 },
      { title: 'answers-and-index', startPdfPage: 679 },
    ],
  },
  'history-hl': {
    bookPageOffsetNote: 'Book page = PDF page - 13 (e.g., Ch 1 p.1 = PDF p.14; Ch 2 p.139 = PDF p.152). Note: this copy ends at Glossary p.288 (IA/EE/TOK/Index omitted).',
    verifiedContents: [
      'Chapter 1: European totalitarianism (1918-41) (book p.1 / PDF p.14):',
      '  - Benito Mussolini\'s rise and consolidation of power (1918-26) (p.2 / PDF p.15)',
      '  - Domestic impact of Mussolini\'s Italy (to 1940) (p.20 / PDF p.33)',
      '  - Failure of Weimar Germany, and Adolf Hitler\'s rise and consolidation of power (1918-34) (p.43 / PDF p.56)',
      '  - Domestic impact of Hitler\'s Germany (to 1939) (p.73 / PDF p.86)',
      '  - Joseph Stalin\'s rise and consolidation of power (to 1941) (p.92 / PDF p.105)',
      '  - Domestic impact of Stalin\'s USSR (to 1941) (p.113 / PDF p.126)',
      'Chapter 2: Europe and the Second World War (1918-49) (book p.139 / PDF p.152):',
      '  - Successes and challenges of the League of Nations in Europe (p.140 / PDF p.153)',
      '  - Reasons for the Second World War in Europe (p.165 / PDF p.178)',
      '  - Reasons for Axis defeat and Allied victory (to 1945) (p.185 / PDF p.198)',
      '  - Impact of the Second World War on Germany (to 1949) (p.204 / PDF p.217)',
      '  - Reasons for the persecution and mass murder of marginalized groups in Nazi-occupied Europe during WWII (p.227 / PDF p.240)',
      '  - Responses to the persecution and mass murder of marginalized groups in Nazi-occupied Europe (to 1949) (p.247 / PDF p.260)',
      'Glossary (PDF pp.284-288)',
    ],
    sections: [
      { title: 'front-ch1-mussolini-italy', startPdfPage: 1 },
      { title: 'ch1-weimar-and-hitler-germany', startPdfPage: 56 },
      { title: 'ch1-stalin-ussr', startPdfPage: 105 },
      { title: 'ch2-league-origins-wwii-axis-defeat', startPdfPage: 152 },
      { title: 'ch2-germany-impact-persecution-glossary', startPdfPage: 217 },
    ],
  },
  'french-b-sl': {
    bookPageOffsetNote: 'Book page = PDF page - 1 (e.g., Ch 1 Identités p.10 = PDF p.11; Ch 6 p.330 = PDF p.331).',
    verifiedContents: [
      'Avant-propos (book p.5 / PDF p.6)',
      '1 Identités (book p.10 / PDF p.11): 1.1 Je suis, tu es, nous sommes (p.11), 1.2 Vivre autrement (p.31), 1.3 En pleine forme ! (p.47), 1.4 Langues et langages (p.64)',
      '2 Expériences (book p.80 / PDF p.81): 2.1 Les voyages forment la jeunesse (p.81), 2.2 Je me souviens (p.96), 2.3 Je veux être adulte ! (p.114), 2.4 À la recherche d\'une vie meilleure (p.128)',
      '3 Ingéniosité humaine (book p.140 / PDF p.141): 3.1 Science, technologie et société (p.141), 3.2 Les arts et nous (p.157), 3.3 Les arts, miroir des sociétés francophones (p.175), 3.4 Le monde vu par les médias (p.188)',
      '4 Organisation sociale (book p.204 / PDF p.205): 4.1 Moi et mes proches (p.205), 4.2 Moi et les autres (p.218), 4.3 Études et emploi (p.232), 4.4 L\'ordre public (p.245)',
      '5 Partage de la planète (book p.260 / PDF p.261): 5.1 Planète bleue, planète verte (p.261), 5.2 Nos droits à tous (p.278), 5.3 Conflits et paix (p.295), 5.4 Quel dilemme ! (p.311)',
      '6 Types de textes (book p.330 / PDF p.331): 1A Article (334), 2A Blog (336), 3A Brochure/Dépliant (338), 4A Courriel (340), 5A Critique de film (342), 6A Discours (344), 7A Dissertation (346), 8A Éditorial (348), 9A Guide de recommandations/Instructions (350), 10A Interview/Entretien (352), 11A Journal intime (354), 12A Lettre au courrier des lecteurs (356), 13A Lettre officielle (358), 14A Proposition (360), 15A Rapport (362), 16A Tract (364)',
    ],
    sections: [
      { title: 'front-and-ch1-identites', startPdfPage: 1 },
      { title: 'ch2-experiences', startPdfPage: 81 },
      { title: 'ch3-ingeniosite-humaine', startPdfPage: 141 },
      { title: 'ch4-organisation-sociale', startPdfPage: 205 },
      { title: 'ch5-partage-planete', startPdfPage: 261 },
      { title: 'ch6-types-de-textes', startPdfPage: 331 },
    ],
  },
};

type ExtractorKind = 'pdftotext' | 'pymupdf' | 'pypdf' | 'pdf-parse';

interface PdfTextItem {
  str: string;
  transform: number[];
  width?: number;
}

interface PdfPageData {
  getTextContent: (opts?: {
    normalizeWhitespace?: boolean;
    disableCombineTextItems?: boolean;
  }) => Promise<{ items: PdfTextItem[] }>;
}

interface PdfParseOptions {
  max?: number;
  pagerender?: (pageData: PdfPageData) => Promise<string>;
}

interface PdfParseResult {
  numpages: number;
  text: string;
}

interface ChunkPlan {
  chunkIndex: number;
  startPage: number;
  endPage: number;
  label: string;
  fileName: string;
}

export interface ExtractedTextbookSummary {
  slug: string;
  subjectSlug: string;
  title: string;
  sourcePdf: string;
  outputDir: string;
  extractorUsed: ExtractorKind;
  totalPages: number;
  nonEmptyPages: number;
  emptyPageNumbers: number[];
  totalChars: number;
  tocPath: string;
  fullTextPath: string;
  chunks: Array<{
    fileName: string;
    path: string;
    startPage: number;
    endPage: number;
    pageCount: number;
    charCount: number;
  }>;
  warnings: string[];
}

function normalizeExtractedText(raw: string): string {
  return raw
    .replace(/\r\n/g, '\n')
    .replace(/\uFB00/g, 'ff')
    .replace(/\uFB01/g, 'fi')
    .replace(/\uFB02/g, 'fl')
    .replace(/\uFB03/g, 'ffi')
    .replace(/\uFB04/g, 'ffl')
    .replace(/\uF070/g, '▸')
    .replace(/\u00A0/g, ' ')
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function renderPdfJsPage(pageData: PdfPageData): Promise<string> {
  return pageData
    .getTextContent({ normalizeWhitespace: false, disableCombineTextItems: false })
    .then((tc) => {
      let lastY: number | null = null;
      let lastEndX: number | null = null;
      const lines: string[] = [];
      let currentLine = '';

      for (const item of tc.items) {
        const str = item.str;
        if (!str) continue;
        const x = item.transform[4] ?? 0;
        const y = item.transform[5] ?? 0;
        const w = item.width ?? 0;

        if (lastY === null || Math.abs(y - lastY) > 2.5) {
          if (currentLine.trim().length > 0) {
            lines.push(currentLine.trimEnd());
          }
          currentLine = str;
        } else {
          if (
            lastEndX !== null &&
            x - lastEndX > 1.5 &&
            !currentLine.endsWith(' ') &&
            !str.startsWith(' ')
          ) {
            currentLine += ' ';
          }
          currentLine += str;
        }
        lastY = y;
        lastEndX = x + w;
      }

      if (currentLine.trim().length > 0) {
        lines.push(currentLine.trimEnd());
      }
      return normalizeExtractedText(lines.join('\n'));
    });
}

async function detectAvailableExtractor(): Promise<ExtractorKind> {
  try {
    await execFileAsync('pdftotext', ['-v']);
    return 'pdftotext';
  } catch {
    // Not available
  }

  try {
    await execFileAsync('python3', ['-c', 'import fitz']);
    return 'pymupdf';
  } catch {
    // Not available
  }

  try {
    await execFileAsync('python3', ['-c', 'import pypdf']);
    return 'pypdf';
  } catch {
    // Not available
  }

  return 'pdf-parse';
}

async function extractOutlineWithSwift(pdfPath: string): Promise<string[]> {
  if (process.platform !== 'darwin') {
    return [];
  }
  const swiftCode = [
    'import Foundation',
    'import PDFKit',
    'let path = CommandLine.arguments[1]',
    'guard let doc = PDFDocument(url: URL(fileURLWithPath: path)), let root = doc.outlineRoot else { exit(0) }',
    'func walk(_ item: PDFOutline, depth: Int) {',
    '  if depth > 2 { return }',
    '  for i in 0..<item.numberOfChildren {',
    '    if let child = item.child(at: i) {',
    '      let p = child.destination?.page.map { doc.index(for: $0) + 1 } ?? -1',
    '      let pad = String(repeating: "  ", count: depth)',
    '      let label = (child.label ?? "").trimmingCharacters(in: .whitespacesAndNewlines)',
    '      if !label.isEmpty && !label.hasSuffix(".pdf") {',
    '        print("\\(pad)- [PDF p.\\(p)] \\(label)")',
    '      }',
    '      walk(child, depth: depth + 1)',
    '    }',
    '  }',
    '}',
    'walk(root, depth: 0)',
  ].join('\n');

  try {
    const { stdout } = await execFileAsync('swift', ['-e', swiftCode, pdfPath], {
      maxBuffer: 10 * 1024 * 1024,
    });
    return stdout
      .split(/\r?\n/)
      .map((line) => line.trimEnd())
      .filter((line) => line.length > 0);
  } catch {
    return [];
  }
}

async function extractPagesViaPdftotext(pdfPath: string): Promise<string[]> {
  const { stdout } = await execFileAsync('pdftotext', ['-layout', '-enc', 'UTF-8', pdfPath, '-'], {
    maxBuffer: 120 * 1024 * 1024,
  });
  const rawPages = stdout.split('\f');
  if (rawPages.length > 1 && rawPages[rawPages.length - 1]?.trim() === '') {
    rawPages.pop();
  }
  return rawPages.map((page) => normalizeExtractedText(page));
}

async function extractPagesViaPython(pdfPath: string, kind: 'pymupdf' | 'pypdf'): Promise<string[]> {
  const pyCode =
    kind === 'pymupdf'
      ? [
          'import json, sys, fitz',
          'doc = fitz.open(sys.argv[1])',
          'print(json.dumps([page.get_text("text") for page in doc]))',
        ].join('\n')
      : [
          'import json, sys, pypdf',
          'reader = pypdf.PdfReader(sys.argv[1])',
          'print(json.dumps([(page.extract_text() or "") for page in reader.pages]))',
        ].join('\n');

  const { stdout } = await execFileAsync('python3', ['-c', pyCode, pdfPath], {
    maxBuffer: 150 * 1024 * 1024,
  });
  const parsed = JSON.parse(stdout) as string[];
  return parsed.map((page) => normalizeExtractedText(page));
}

async function extractPagesViaPdfParse(pdfPath: string): Promise<string[]> {
  const pdfParse = require('pdf-parse/lib/pdf-parse.js') as (
    buf: Buffer,
    opts?: PdfParseOptions,
  ) => Promise<PdfParseResult>;

  const buffer = await fs.readFile(pdfPath);
  const pages: string[] = [];

  const originalLog = console.log;
  console.log = (...args: unknown[]) => {
    if (
      typeof args[0] === 'string' &&
      args[0].startsWith('Warning: Ran out of space in font private use area')
    ) {
      return;
    }
    originalLog(...args);
  };

  try {
    await pdfParse(buffer, {
      max: 0,
      pagerender: async (pageData) => {
        const text = await renderPdfJsPage(pageData);
        pages.push(text);
        return '';
      },
    });
  } finally {
    console.log = originalLog;
  }

  return pages;
}

async function extractPdfPages(
  pdfPath: string,
  preferred: ExtractorKind,
): Promise<{ pages: string[]; extractorUsed: ExtractorKind }> {
  if (preferred === 'pdftotext') {
    try {
      return { pages: await extractPagesViaPdftotext(pdfPath), extractorUsed: 'pdftotext' };
    } catch {
      // Fall back cleanly
    }
  }
  if (preferred === 'pymupdf' || preferred === 'pypdf') {
    try {
      return { pages: await extractPagesViaPython(pdfPath, preferred), extractorUsed: preferred };
    } catch {
      // Fall back cleanly
    }
  }
  return { pages: await extractPagesViaPdfParse(pdfPath), extractorUsed: 'pdf-parse' };
}

function buildChunkPlans(sections: SectionBoundary[], totalPages: number): ChunkPlan[] {
  const minPages = 40;
  const maxPages = 80;
  const targetPages = 60;

  const rawRanges: Array<{ startPage: number; endPage: number; labels: string[] }> = [];
  for (let i = 0; i < sections.length; i++) {
    const start = sections[i].startPdfPage;
    if (start > totalPages) continue;
    const nextStart = i + 1 < sections.length ? sections[i + 1].startPdfPage : totalPages + 1;
    const end = Math.min(totalPages, nextStart - 1);
    if (end >= start) {
      rawRanges.push({ startPage: start, endPage: end, labels: [sections[i].title] });
    }
  }

  if (rawRanges.length === 0) {
    rawRanges.push({ startPage: 1, endPage: totalPages, labels: ['full'] });
  }

  // First split any individual section exceeding maxPages into ~55-page parts
  const splitRanges: Array<{ startPage: number; endPage: number; labels: string[] }> = [];
  for (const r of rawRanges) {
    const len = r.endPage - r.startPage + 1;
    if (len <= maxPages) {
      splitRanges.push(r);
    } else {
      const parts = Math.ceil(len / targetPages);
      const step = Math.ceil(len / parts);
      for (let p = 0; p < parts; p++) {
        const s = r.startPage + p * step;
        const e = Math.min(r.endPage, s + step - 1);
        if (e >= s) {
          splitRanges.push({
            startPage: s,
            endPage: e,
            labels: [`${r.labels[0]}-part${p + 1}`],
          });
        }
      }
    }
  }

  // Merge small adjacent chunks (< minPages) when combined size stays <= maxPages
  const merged: Array<{ startPage: number; endPage: number; labels: string[] }> = [];
  for (const r of splitRanges) {
    const prev = merged[merged.length - 1];
    if (prev) {
      const prevLen = prev.endPage - prev.startPage + 1;
      const curLen = r.endPage - r.startPage + 1;
      if ((prevLen < minPages || curLen < minPages) && prevLen + curLen <= maxPages) {
        prev.endPage = r.endPage;
        prev.labels.push(...r.labels);
        continue;
      }
    }
    merged.push({ ...r, labels: [...r.labels] });
  }

  return merged.map((m, idx) => {
    const chunkIndex = idx + 1;
    const padIdx = String(chunkIndex).padStart(2, '0');
    const padStart = String(m.startPage).padStart(4, '0');
    const padEnd = String(m.endPage).padStart(4, '0');
    const combinedLabel =
      m.labels.length <= 2 ? m.labels.join('_') : `${m.labels[0]}_to_${m.labels[m.labels.length - 1]}`;
    const safeLabel = combinedLabel.replace(/[^a-zA-Z0-9_-]+/g, '-').slice(0, 56);
    return {
      chunkIndex,
      startPage: m.startPage,
      endPage: m.endPage,
      label: combinedLabel,
      fileName: `chunk-${padIdx}_p${padStart}-${padEnd}_${safeLabel}.txt`,
    };
  });
}

function formatPagesBlock(pages: string[], startPageOneBased: number, endPageOneBased: number): string {
  const parts: string[] = [];
  for (let p = startPageOneBased; p <= endPageOneBased; p++) {
    const content = pages[p - 1] ?? '';
    parts.push(`=== PAGE ${p} ===\n${content || '[Page has no selectable text]'}`);
  }
  return parts.join('\n\n') + '\n';
}

async function assertTmpClassroomGitignored(projectRoot: string): Promise<void> {
  const gitignorePath = path.join(projectRoot, '.gitignore');
  const contents = await fs.readFile(gitignorePath, 'utf8');
  const hasIgnoreRule = contents
    .split(/\r?\n/)
    .some((line) => line.trim() === '.tmp-classroom/' || line.trim() === '.tmp-classroom');
  if (!hasIgnoreRule) {
    throw new Error('Safety abort: .tmp-classroom/ must be listed in .gitignore.');
  }
}

async function extractOneTextbook(
  projectRoot: string,
  book: TextbookSourceConfig,
  extractor: ExtractorKind,
): Promise<ExtractedTextbookSummary> {
  const pdfPath = path.join(projectRoot, '.tmp-classroom', 'textbooks', book.fileName);
  const outDir = path.join(projectRoot, '.tmp-classroom', 'textbooks-extracted', book.slug);
  await fs.mkdir(outDir, { recursive: true });

  // Clean stale chunk-*.txt files before regenerating
  const existingFiles = await fs.readdir(outDir);
  for (const f of existingFiles) {
    if (f.startsWith('chunk-') && f.endsWith('.txt')) {
      await fs.unlink(path.join(outDir, f));
    }
  }

  console.log(`\nExtracting [${book.slug}] ${book.fileName} (preferred extractor: ${extractor})...`);
  const t0 = Date.now();
  const [{ pages, extractorUsed }, outlineLines] = await Promise.all([
    extractPdfPages(pdfPath, extractor),
    extractOutlineWithSwift(pdfPath),
  ]);

  const totalPages = pages.length;
  const emptyPageNumbers: number[] = [];
  let nonEmptyPages = 0;
  let totalChars = 0;

  for (let i = 0; i < pages.length; i++) {
    const len = pages[i].length;
    totalChars += len;
    if (len >= 10) {
      nonEmptyPages += 1;
    } else {
      emptyPageNumbers.push(i + 1);
    }
  }

  const fullTextPath = path.join(outDir, 'full.txt');
  const fullContent = formatPagesBlock(pages, 1, totalPages);
  await fs.writeFile(fullTextPath, fullContent, 'utf8');

  const structure = TEXTBOOK_STRUCTURE[book.slug] ?? {
    bookPageOffsetNote: 'Offset unknown.',
    sections: [{ title: 'book', startPdfPage: 1 }],
  };
  const chunkPlans = buildChunkPlans(structure.sections, totalPages);
  const chunkSummaries: ExtractedTextbookSummary['chunks'] = [];

  for (const plan of chunkPlans) {
    const chunkPath = path.join(outDir, plan.fileName);
    const chunkText = formatPagesBlock(pages, plan.startPage, plan.endPage);
    await fs.writeFile(chunkPath, chunkText, 'utf8');
    chunkSummaries.push({
      fileName: plan.fileName,
      path: path.relative(projectRoot, chunkPath),
      startPage: plan.startPage,
      endPage: plan.endPage,
      pageCount: plan.endPage - plan.startPage + 1,
      charCount: chunkText.length,
    });
  }

  // Build comprehensive toc.txt
  const frontMatterPages = pages
    .slice(0, Math.min(12, totalPages))
    .map((txt, idx) => `--- PDF PAGE ${idx + 1} ---\n${txt || '[Empty]'}`)
    .join('\n\n');

  const tocLines: string[] = [
    `# ${book.title}`,
    `Slug: ${book.slug}`,
    `Subject: ${book.subjectSlug}`,
    `Source PDF: .tmp-classroom/textbooks/${book.fileName}`,
    `Drive ID: ${book.driveId}`,
    `Extractor Used: ${extractorUsed}`,
    `Total PDF Pages: ${totalPages}`,
    `Non-Empty Text Pages: ${nonEmptyPages}/${totalPages}`,
    `Total Extracted Characters: ${totalChars.toLocaleString('en-US')}`,
    `Page Numbering Note: ${structure.bookPageOffsetNote}`,
    '',
    '## Section Boundaries (PDF Page Starts)',
    ...structure.sections.map((s) => `- [PDF p.${s.startPdfPage}] ${s.title}`),
    '',
    '## Chunked Chapter/Page-Range Files',
    ...chunkSummaries.map(
      (c) =>
        `- ${c.fileName} | PDF pp.${c.startPage}-${c.endPage} (${c.pageCount} pages, ${c.charCount.toLocaleString('en-US')} chars)`,
    ),
    '',
  ];

  if (structure.verifiedContents && structure.verifiedContents.length > 0) {
    tocLines.push('## Verified Printed Table of Contents (Vision-Checked)', ...structure.verifiedContents, '');
  }

  if (outlineLines.length > 0) {
    tocLines.push('## Embedded PDF Bookmarks / Outline', ...outlineLines, '');
  }

  tocLines.push('## Front Matter & Printed Contents (PDF pp. 1-12)', frontMatterPages, '');

  const tocPath = path.join(outDir, 'toc.txt');
  await fs.writeFile(tocPath, tocLines.join('\n'), 'utf8');

  const warnings: string[] = [];
  if (nonEmptyPages < totalPages * 0.5) {
    warnings.push(
      `Low selectable text coverage: only ${nonEmptyPages}/${totalPages} pages had >=10 chars.`,
    );
  }

  console.log(
    `  Done in ${((Date.now() - t0) / 1000).toFixed(1)}s: ${totalPages} pages (${nonEmptyPages} non-empty), ${totalChars.toLocaleString('en-US')} chars, ${chunkSummaries.length} chunks`,
  );

  return {
    slug: book.slug,
    subjectSlug: book.subjectSlug,
    title: book.title,
    sourcePdf: path.relative(projectRoot, pdfPath),
    outputDir: path.relative(projectRoot, outDir),
    extractorUsed,
    totalPages,
    nonEmptyPages,
    emptyPageNumbers,
    totalChars,
    tocPath: path.relative(projectRoot, tocPath),
    fullTextPath: path.relative(projectRoot, fullTextPath),
    chunks: chunkSummaries,
    warnings,
  };
}

async function main(): Promise<void> {
  const projectRoot = process.cwd();
  await assertTmpClassroomGitignored(projectRoot);

  const onlyIdx = process.argv.indexOf('--only');
  const onlySlug = onlyIdx !== -1 ? process.argv[onlyIdx + 1] : null;
  const targets = onlySlug
    ? TEXTBOOK_SOURCES.filter((b) => b.slug === onlySlug)
    : TEXTBOOK_SOURCES;

  if (targets.length === 0) {
    throw new Error(`No textbook matched --only ${onlySlug}`);
  }

  const extractor = await detectAvailableExtractor();
  console.log(`Detected PDF extractor: ${extractor}`);

  const summaries: ExtractedTextbookSummary[] = [];
  for (const book of targets) {
    const summary = await extractOneTextbook(projectRoot, book, extractor);
    summaries.push(summary);
  }

  const extractedRoot = path.join(projectRoot, '.tmp-classroom', 'textbooks-extracted');
  await fs.mkdir(extractedRoot, { recursive: true });
  const manifestPath = path.join(extractedRoot, 'manifest.json');
  await fs.writeFile(
    manifestPath,
    JSON.stringify({ generatedAt: new Date().toISOString(), textbooks: summaries }, null, 2),
    'utf8',
  );
  console.log(`\nWrote extraction manifest to ${manifestPath}`);
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
