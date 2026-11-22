import fs from 'node:fs';
import path from 'node:path';
import { expect, test, type Locator, type Page } from '@playwright/test';

const MOCK_SUPABASE_PORT = Number(process.env.MOCK_SUPABASE_PORT || 54321);
const MOCK_SUPABASE_URL = `http://127.0.0.1:${MOCK_SUPABASE_PORT}`;

const AUDIT_SHOTS_DIR =
  process.env.AUDIT_SHOTS === '1'
    ? process.env.AUDIT_SHOTS_DIR ||
      '/Users/harrismiao/.gemini/antigravity/brain/ca720c1b-a0ac-4244-96dd-d98932e187ee/scratch/audit-shots'
    : null;

const E2E_USER = {
  id: '00000000-0000-4000-8000-000000000e2e',
  aud: 'authenticated',
  role: 'authenticated',
  email: 'ib2028-e2e@syllabusos.local',
  user_metadata: {
    full_name: 'IB 2028 Student',
  },
};

const SIX_SUBJECT_KEYWORDS = [
  /Biology/i,
  /Chemistry/i,
  /Math/i,
  /History/i,
  /English/i,
  /French/i,
];

const ALL_SUBJECT_SLUGS = [
  'biology-hl',
  'chemistry-sl',
  'math-aa-sl',
  'history-hl',
  'english-lit-hl',
  'french-b-sl',
] as const;

function createMockJwt(): string {
  const header = Buffer.from(
    JSON.stringify({ alg: 'HS256', typ: 'JWT' }),
    'utf8',
  ).toString('base64url');
  const payload = Buffer.from(
    JSON.stringify({
      sub: E2E_USER.id,
      email: E2E_USER.email,
      role: 'authenticated',
      aud: 'authenticated',
      exp: Math.floor(Date.now() / 1000) + 86_400,
    }),
    'utf8',
  ).toString('base64url');
  const signature = Buffer.from('e2e-mock-signature', 'utf8').toString(
    'base64url',
  );
  return `${header}.${payload}.${signature}`;
}

function createSupabaseSsrSessionCookieValue(): string {
  const nowSec = Math.floor(Date.now() / 1000);
  const session = {
    access_token: createMockJwt(),
    token_type: 'bearer',
    expires_in: 86_400,
    expires_at: nowSec + 86_400,
    refresh_token: 'e2e-refresh-token',
    user: E2E_USER,
  };
  return `base64-${Buffer.from(JSON.stringify(session), 'utf8').toString('base64url')}`;
}

function attachErrorCollectors(page: Page) {
  const pageErrors: string[] = [];
  const consoleErrors: string[] = [];

  page.on('pageerror', (err) => {
    pageErrors.push(err.message);
  });

  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });

  return {
    assertNoErrors() {
      expect(pageErrors, `Uncaught pageerrors: ${pageErrors.join('\n')}`).toEqual(
        [],
      );
      expect(
        consoleErrors,
        `Console errors: ${consoleErrors.join('\n')}`,
      ).toEqual([]);
    },
  };
}

async function assertNoHorizontalOverflow(page: Page, contextLabel: string) {
  const overflow = await page.evaluate(() => {
    const doc = document.documentElement;
    return doc.scrollWidth - window.innerWidth;
  });
  expect(
    overflow,
    `Horizontal overflow (${overflow}px) detected on ${contextLabel}`,
  ).toBeLessThanOrEqual(1);
}

async function assertNoDiagramAlerts(page: Page, contextLabel: string) {
  const brokenAlerts = page
    .locator('[role="alert"]')
    .filter({ hasText: /Unable to render|schema validation/i });
  await expect(
    brokenAlerts,
    `Diagram ErrorBoundary/schema alert found on ${contextLabel}`,
  ).toHaveCount(0);
}

async function assertVisibleImagesLoaded(page: Page, contextLabel: string) {
  const visibleCount = await page.evaluate(() => {
    const imgs = Array.from(document.querySelectorAll('img'));
    let count = 0;
    for (const img of imgs) {
      const style = window.getComputedStyle(img);
      if (style.display !== 'none' && style.visibility !== 'hidden') {
        img.scrollIntoView({ block: 'nearest' });
        count += 1;
      }
    }
    return count;
  });

  if (visibleCount === 0) return;

  await expect
    .poll(
      async () => {
        const broken = await page.evaluate(() => {
          const imgs = Array.from(document.querySelectorAll('img'));
          return imgs
            .filter((img) => {
              const style = window.getComputedStyle(img);
              if (style.display === 'none' || style.visibility === 'hidden') {
                return false;
              }
              return !img.complete || img.naturalWidth <= 0;
            })
            .map((img) => img.getAttribute('src') || 'unknown');
        });
        return broken;
      },
      {
        message: `Broken <img> found on ${contextLabel}`,
        timeout: 8000,
      },
    )
    .toEqual([]);
}

async function setThemeMode(page: Page, mode: 'light' | 'dark') {
  const targetDark = mode === 'dark';
  const isDarkNow = await page.evaluate(() =>
    document.documentElement.classList.contains('dark'),
  );

  if (isDarkNow !== targetDark) {
    const toggleBtn = page
      .getByRole('button', {
        name: targetDark ? /Switch to dark mode/i : /Switch to light mode/i,
      })
      .first();

    if (await toggleBtn.isVisible().catch(() => false)) {
      await toggleBtn.click();
    } else {
      await page.evaluate((targetMode) => {
        try {
          window.localStorage.setItem('theme', targetMode);
        } catch {
          // ignore storage errors
        }
        if (targetMode === 'dark') {
          document.documentElement.classList.add('dark');
          document.documentElement.style.colorScheme = 'dark';
        } else {
          document.documentElement.classList.remove('dark');
          document.documentElement.style.colorScheme = 'light';
        }
      }, mode);
    }
  }

  await page.emulateMedia({ colorScheme: mode });

  await expect
    .poll(async () =>
      page.evaluate(() => document.documentElement.classList.contains('dark')),
    )
    .toBe(targetDark);
  await page.waitForTimeout(150);
}

async function saveShot(
  target: Page | Locator,
  fileName: string,
  options: { fullPage?: boolean } = {},
) {
  if (!AUDIT_SHOTS_DIR) return;
  fs.mkdirSync(AUDIT_SHOTS_DIR, { recursive: true });
  const dest = path.join(AUDIT_SHOTS_DIR, fileName);
  if ('goto' in target) {
    await target.evaluate(async () => {
      const imgs = Array.from(document.querySelectorAll('img'));
      await Promise.all(
        imgs.map((img) => {
          const style = window.getComputedStyle(img);
          // Hidden artwork (e.g. mobile-hidden heroes) may never load, so decoding it
          // would hang forever. Only promote and await images that are actually shown.
          if (style.display === 'none' || style.visibility === 'hidden') {
            return null;
          }
          img.loading = 'eager';
          if (typeof img.decode !== 'function') return null;
          return Promise.race([
            img.decode().catch(() => {}),
            new Promise<void>((resolve) => window.setTimeout(resolve, 2000)),
          ]);
        }),
      );
    });
    if (options.fullPage ?? true) {
      await target.evaluate(() => window.scrollTo(0, 0));
      await target.waitForTimeout(100);
    }
    await target.screenshot({
      path: dest,
      fullPage: options.fullPage ?? true,
    });
  } else {
    await target.evaluate((el) => {
      const rect = el.getBoundingClientRect();
      const targetTop = Math.max(0, window.scrollY + rect.top - 120);
      window.scrollTo(0, targetTop);
    });
    await target.page().waitForTimeout(100);
    await target.screenshot({ path: dest });
  }
}

async function selectStudyGuide(page: Page, titlePattern: RegExp) {
  const guideBar = page
    .locator('.glass-surface')
    .filter({ hasText: 'Study Guides' })
    .first();
  await expect(guideBar).toBeVisible();
  const btn = guideBar.getByRole('button', { name: titlePattern }).first();
  await expect(btn).toBeVisible();
  await btn.click();
  await page.waitForTimeout(120);
}

function getDiagramFigure(page: Page, titlePattern: RegExp): Locator {
  return page.locator('figure').filter({ hasText: titlePattern }).first();
}

async function installAiRouteFixtures(page: Page) {
  let latestAttempt: Record<string, unknown> = {
    id: '00000000-0000-4000-8000-000000000a01',
    user_id: E2E_USER.id,
    question_id: '00000000-0000-4000-8000-000000000q01',
    user_answer: 'Sample IB candidate response.',
    awarded_marks: 2,
    max_marks: 2,
    grading_breakdown: {
      point_results: [
        {
          code: 'M1',
          criterion:
            'Identifies the primary syllabus mechanism accurately.',
          awarded: 1,
          max_marks: 1,
          feedback: 'Clear syllabus terminology included.',
        },
        {
          code: 'A1',
          criterion:
            'Links the observation to the IB command term requirement.',
          awarded: 1,
          max_marks: 1,
          feedback: 'Explicit cause-and-effect justification provided.',
        },
      ],
      command_term_feedback:
        'Response satisfies the IB command term completely.',
      missing_keywords: [],
      model_answer:
        'Full-mark IB examiner reference response grounded in markscheme criteria.',
    },
    tutor_messages: [],
    created_at: new Date().toISOString(),
  };

  await page.route('**/api/grade/question', async (route) => {
    const body = route.request().postDataJSON() as {
      questionId?: string;
      userAnswer?: string;
    };

    latestAttempt = {
      ...latestAttempt,
      question_id: body?.questionId ?? latestAttempt.question_id,
      user_answer: body?.userAnswer ?? latestAttempt.user_answer,
      created_at: new Date().toISOString(),
    };

    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({
        attempt: latestAttempt,
      }),
    });
  });

  await page.route('**/api/tutor/chat', async (route) => {
    const body = route.request().postDataJSON() as {
      attemptId?: string;
      message?: string;
    };
    const now = new Date().toISOString();
    const replyText =
      'To secure every markscheme point on Paper 2, state the exact syllabus keyword first and link it directly to the mechanism.';
    const assistantMsg = {
      role: 'assistant' as const,
      content: replyText,
      created_at: now,
    };
    const messages = [
      {
        role: 'user' as const,
        content: body?.message ?? 'How can I make this full marks?',
        created_at: now,
      },
      assistantMsg,
    ];

    latestAttempt = {
      ...latestAttempt,
      id: body?.attemptId ?? latestAttempt.id,
      tutor_messages: messages,
    };

    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({
        reply: replyText,
        message: assistantMsg,
        tutor_messages: messages,
        attempt: latestAttempt,
      }),
    });
  });

  await page.route('**/api/grade/core-project', async (route) => {
    const review = {
      total_awarded: 25,
      total_max: 30,
      overall_summary:
        'Strong research question alignment and methodological clarity against FA2027 IB Extended Essay criteria.',
      criterion_results: [
        {
          criterion: 'Criterion A: Framework for the essay',
          awarded: 5,
          max_marks: 6,
          justification:
            'Research question is sharply focused with clear primary sources.',
          improvements: ['Explicitly define operational scope boundaries.'],
        },
        {
          criterion: 'Criterion B: Knowledge and understanding',
          awarded: 5,
          max_marks: 6,
          justification: 'Demonstrates accurate IB disciplinary terminology.',
          improvements: ['Deepen quantitative comparative references.'],
        },
      ],
      priority_actions: [
        'Anchor every section conclusion directly back to the research question.',
      ],
      reviewed_at: new Date().toISOString(),
    };

    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ review }),
    });
  });
}

test.describe('SyllabusOS Comprehensive Verification & Visual QA', () => {
  test('1. unauthenticated gate redirects /dashboard to /login, checks Light/Dark login UI, and blocks APIs with 401', async ({
    page,
    request,
  }) => {
    const errors = attachErrorCollectors(page);
    await page.setViewportSize({ width: 1440, height: 900 });

    await page.emulateMedia({ colorScheme: 'light' });
    await page.goto('/dashboard');
    await expect(page).toHaveURL(/\/login/);
    await setThemeMode(page, 'light');
    await expect(page.getByText('SyllabusOS')).toBeVisible();
    await expect(
      page.getByRole('button', { name: /continue with google/i }),
    ).toBeVisible();
    await assertVisibleImagesLoaded(page, '/login light');
    await assertNoHorizontalOverflow(page, '/login light (1440x900)');
    await saveShot(page, '01-login-light.png');

    await setThemeMode(page, 'dark');
    await assertVisibleImagesLoaded(page, '/login dark');
    await assertNoHorizontalOverflow(page, '/login dark (1440x900)');
    await saveShot(page, '02-login-dark.png');

    const apiResponse = await request.post('/api/generate/suite', {
      data: {
        subjectId: '00000000-0000-4000-8000-000000000001',
        materialIds: [],
        mode: 'append',
      },
    });
    expect(apiResponse.status()).toBe(401);

    const syncResponse = await request.post('/api/seed/sync');
    expect(syncResponse.status()).toBe(401);

    errors.assertNoErrors();
  });

  test('2. authenticated workspace flows across dashboard, core, all 6 subjects, card-scoped qbank, flashcards, sync, and mobile viewport', async ({
    page,
    context,
    request,
    baseURL,
  }) => {
    test.setTimeout(180_000);
    const errors = attachErrorCollectors(page);
    const origin = baseURL ?? 'http://localhost:3100';

    if (!process.env.PLAYWRIGHT_BASE_URL) {
      await request.post(`${MOCK_SUPABASE_URL}/__reset`);
    }

    await context.addCookies([
      {
        name: 'sb-127-auth-token',
        value: createSupabaseSsrSessionCookieValue(),
        url: origin,
      },
    ]);
    await installAiRouteFixtures(page);

    // Desktop viewport (1440x900) Light Mode
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.emulateMedia({ colorScheme: 'light' });
    await page.goto('/dashboard');
    await expect(page).toHaveURL(/\/dashboard$/);
    await setThemeMode(page, 'light');

    for (const subjectPattern of SIX_SUBJECT_KEYWORDS) {
      await expect(
        page.locator('main').getByText(subjectPattern).first(),
      ).toBeVisible();
    }
    await expect(page.getByText('6 subjects')).toBeVisible();
    // Telemetry: 107 materials, >= 60 study notes (64), >= 450 questions (462)
    await expect(
      page.locator('main').getByText('107', { exact: true }),
    ).toBeVisible();
    await expect(
      page.locator('main').getByText('64', { exact: true }),
    ).toBeVisible();
    await expect(
      page.locator('main').getByText('462', { exact: true }),
    ).toBeVisible();
    await expect(
      page.getByText('CRHS Class of 2028 — Upcoming IB Milestones'),
    ).toBeVisible();
    await expect(
      page.getByText('Active Focus · IA & Paper 3'),
    ).toBeVisible();
    await assertVisibleImagesLoaded(page, 'dashboard light');
    await assertNoHorizontalOverflow(page, 'dashboard light (1440x900)');
    await saveShot(page, '03-dashboard-light.png');

    // Dark mode check on dashboard
    await setThemeMode(page, 'dark');
    await assertVisibleImagesLoaded(page, 'dashboard dark');
    await assertNoHorizontalOverflow(page, 'dashboard dark (1440x900)');
    await saveShot(page, '04-dashboard-dark.png');
    await setThemeMode(page, 'light');

    // Desktop Sidebar collapse/expand toggle + ⌘K Command Palette
    await page.getByRole('button', { name: 'Collapse sidebar' }).click();
    await expect(
      page.getByRole('button', { name: 'Expand sidebar' }),
    ).toBeVisible();
    await assertNoHorizontalOverflow(
      page,
      'dashboard collapsed sidebar (1440x900)',
    );
    await page.getByRole('button', { name: 'Expand sidebar' }).click();
    await expect(
      page.getByRole('button', { name: 'Collapse sidebar' }),
    ).toBeVisible();

    await page.keyboard.press('Control+k');
    const commandPalette = page.getByTestId('command-palette');
    await expect(commandPalette).toBeVisible();
    await commandPalette.getByRole('textbox').fill('Hydrogen');
    await expect(
      commandPalette.getByRole('option', { name: /Hydrogen/i }).first(),
    ).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(commandPalette).toBeHidden();

    // Core & IA Workspace (/dashboard/core) — EE, TOK Essay/Exhibition, CAS, all 6 IAs + Rubric Review
    await page.goto('/dashboard/core');
    await expect(page).toHaveURL(/\/dashboard\/core/);
    for (const coreLabel of [
      /Extended Essay/i,
      /TOK Essay/i,
      /TOK Exhibition/i,
      /CAS Portfolio/i,
      /Biology HL IA/i,
      /Chemistry SL IA/i,
      /History HL IA/i,
      /Math AA SL IA/i,
      /English Lit HL Essay/i,
      /French B SL IO/i,
    ]) {
      await expect(page.getByRole('button', { name: coreLabel })).toBeVisible();
    }

    await page
      .getByRole('button', { name: /Evaluate Against Official IB Rubric/i })
      .click();
    await expect(
      page.getByText('IB Examiner Rubric Evaluation'),
    ).toBeVisible();
    await expect(page.getByText('Priority Next Revisions')).toBeVisible();
    await assertVisibleImagesLoaded(page, 'core light');
    await assertNoHorizontalOverflow(page, 'core workspace light (1440x900)');
    await saveShot(page, '05-core-light.png');

    await setThemeMode(page, 'dark');
    await assertVisibleImagesLoaded(page, 'core dark');
    await assertNoHorizontalOverflow(page, 'core workspace dark (1440x900)');
    await saveShot(page, '06-core-dark.png');
    await setThemeMode(page, 'light');

    await page.getByRole('tab', { name: /Official IB Rubric/i }).click();
    await expect(page.getByText(/Criterion/i).first()).toBeVisible();
    await page
      .getByRole('tab', { name: /Classroom Reference Toolkit/i })
      .click();
    await expect(
      page.getByText(/EE Timeline: May 2028 Cohort/i).first(),
    ).toBeVisible();

    // Open Biology HL workspace: Checklist, Notes, Card-Scoped Q-Bank (MCQ + Open + Search + Pagination), Materials (16 + Bio 5HL docx + Sync), Flashcards
    await page.goto('/dashboard/subjects/biology-hl');
    await expect(page).toHaveURL(/\/dashboard\/subjects\/biology-hl/);
    await assertVisibleImagesLoaded(page, 'biology-hl checklist');
    await assertNoHorizontalOverflow(page, 'biology-hl (1440x900)');

    // 1) Syllabus Checklist tab: toggle a checklist item
    const firstCheckbox = page.getByRole('checkbox').first();
    await expect(firstCheckbox).toBeVisible();
    const initialChecked = await firstCheckbox.getAttribute('aria-checked');
    await firstCheckbox.click();
    const updatedChecked = await firstCheckbox.getAttribute('aria-checked');
    expect(updatedChecked).not.toBe(initialChecked);

    // Ensure first checkbox is checked so sync preservation check below is deterministic
    if (updatedChecked !== 'true') {
      await firstCheckbox.click();
    }
    await expect(firstCheckbox).toHaveAttribute('aria-checked', 'true');

    // 2) Study Notes tab: zero ErrorBoundary alerts
    await page.getByRole('tab', { name: /Study Notes/i }).click();
    await assertNoDiagramAlerts(page, 'biology-hl study notes');

    // 3) Question Bank tab: card-scoped Open Response + MCQ + Search + Pagination
    await page.getByRole('tab', { name: /Question Bank/i }).click();
    const qbankPanel = page.getByRole('tabpanel');
    const qCards = qbankPanel
      .locator('.glass-panel')
      .filter({ has: page.getByRole('button', { name: /Submit to IB Examiner/i }) });

    // First verify an open-response textarea question card scoped to its own card
    const openCard = qCards.filter({ has: page.locator('textarea') }).first();
    await expect(openCard).toBeVisible();
    await openCard
      .locator('textarea')
      .fill(
        'Hydrogen bonding between water molecules gives cohesive tension along xylem vessels.',
      );
    const openSubmitBtn = openCard.getByRole('button', {
      name: /Submit to IB Examiner/i,
    });
    await expect(openSubmitBtn).toBeEnabled();
    await openSubmitBtn.click();
    await expect(openCard.getByText('IB Markscheme Breakdown')).toBeVisible();

    // Filter to Paper 1A (MCQ) and verify MCQ selection + submission scoped to the SAME MCQ card
    await page.getByLabel('Filter by paper type').click();
    await page.getByRole('option', { name: 'Paper 1A (MCQ)' }).click();

    const mcqCard = qCards.filter({ has: page.getByRole('radio') }).first();
    await expect(mcqCard).toBeVisible();
    await mcqCard.getByRole('radio').first().click();
    const mcqSubmitBtn = mcqCard.getByRole('button', {
      name: /Submit to IB Examiner/i,
    });
    await expect(mcqSubmitBtn).toBeEnabled();
    await mcqSubmitBtn.click();
    await expect(mcqCard.getByText('IB Markscheme Breakdown')).toBeVisible();
    await expect(mcqCard.getByText('[M1]')).toBeVisible();

    const tutorInput = mcqCard.getByLabel('Ask IB Tutor a follow-up question');
    await expect(tutorInput).toBeVisible();
    await tutorInput.fill('What command term detail was evaluated?');
    await tutorInput.press('Enter');
    await expect(
      mcqCard.getByText(/state the exact syllabus keyword/i),
    ).toBeVisible();

    await mcqCard.getByRole('button', { name: 'Model Answer' }).click();
    await expect(mcqCard.getByText('Full-Mark Model Answer')).toBeVisible();

    await saveShot(page, '13-bio-qbank-light.png', { fullPage: false });
    await setThemeMode(page, 'dark');
    await saveShot(page, '14-bio-qbank-dark.png', { fullPage: false });
    await setThemeMode(page, 'light');

    // Reset filters, then verify keyword search & pagination
    await page.getByRole('button', { name: 'Reset' }).click();
    await expect(page.getByText('102 of 102 questions · showing 1–20')).toBeVisible();

    // Keyword search & pagination check
    const searchInput = page.getByLabel('Search questions');
    await searchInput.fill('chemiosmosis');
    await expect(page.getByText(/\d+ of 102 questions/)).toBeVisible();
    await page.getByRole('button', { name: 'Clear question search' }).click();
    await expect(page.getByText('102 of 102 questions · showing 1–20')).toBeVisible();

    const paginationNav = page.getByRole('navigation', {
      name: 'Question bank pagination',
    });
    await expect(paginationNav.getByText(/Page 1 of 6/)).toBeVisible();
    await paginationNav.getByRole('button', { name: 'Next' }).click();
    await expect(paginationNav.getByText(/Page 2 of 6/)).toBeVisible();
    await paginationNav.getByRole('button', { name: 'Show All' }).click();
    await expect(
      page.getByRole('button', { name: /Paginate \(20\/page\)/i }),
    ).toBeVisible();

    // 4) Classroom Materials tab: verify 16 materials + Course Outline.docx + non-destructive sync
    await page.getByRole('tab', { name: /Classroom Materials/i }).click();
    await expect(page.locator('table tbody tr')).toHaveCount(16);
    await expect(
      page.getByText('2026 Bio 5HL Course Outline.docx'),
    ).toBeVisible();
    await expect(
      page.getByRole('button', { name: /Choose Files/i }),
    ).toBeVisible();
    await expect(
      page.getByRole('button', { name: /Paste Lecture \/ Drive Notes/i }),
    ).toBeVisible();
    await expect(
      page.getByRole('button', { name: /Generate \/ Update Study Suite/i }),
    ).toBeVisible();

    const syncButton = page.getByRole('button', {
      name: /Sync Classroom Pack/i,
    });
    await expect(syncButton).toBeVisible();
    await syncButton.click();
    await expect(page.getByText(/Classroom Pack v3 synced/i)).toBeVisible();

    await page.reload();
    await page.getByRole('tab', { name: /Syllabus Checklist/i }).click();
    await expect(page.getByRole('checkbox').first()).toHaveAttribute(
      'aria-checked',
      'true',
    );

    // 5) Flashcards tab + remaining 5 subjects: verify Notes, Q-Bank (search + pagination), Materials, Flashcards (3D flip)
    for (const slug of ALL_SUBJECT_SLUGS) {
      if (slug !== 'biology-hl') {
        await page.goto(`/dashboard/subjects/${slug}`);
        await expect(page).toHaveURL(new RegExp(`/dashboard/subjects/${slug}$`));
      }

      // Notes tab
      await page.getByRole('tab', { name: /Study Notes/i }).click();
      await assertNoDiagramAlerts(page, `${slug} notes`);
      await assertVisibleImagesLoaded(page, `${slug} notes`);
      await assertNoHorizontalOverflow(page, `${slug} notes (1440x900)`);

      // Q-Bank tab
      await page.getByRole('tab', { name: /Question Bank/i }).click();
      await expect(page.getByLabel('Search questions')).toBeVisible();
      const totalQuestionsText = await page
        .getByText(/\d+ of \d+ questions/)
        .first()
        .textContent();
      expect(totalQuestionsText).toBeTruthy();

      const pagNav = page.getByRole('navigation', {
        name: 'Question bank pagination',
      });
      await expect(pagNav).toBeVisible();
      await pagNav.getByRole('button', { name: 'Next' }).click();
      await expect(pagNav.getByText(/Page 2 of/)).toBeVisible();

      // Materials tab
      await page.getByRole('tab', { name: /Classroom Materials/i }).click();
      const rowCount = await page.locator('table tbody tr').count();
      expect(rowCount, `Expected materials on ${slug}`).toBeGreaterThan(0);

      // Flashcards tab 3D flip
      await page.getByRole('tab', { name: /Flashcards/i }).click();
      const flashcardSurface = page.getByTestId('flashcard-surface');
      await expect(flashcardSurface).toBeVisible();
      await expect(flashcardSurface.getByText('Prompt')).toBeVisible();
      await page.keyboard.press('Space');
      await expect(flashcardSurface.getByText('Answer')).toBeVisible();
      await expect(flashcardSurface.getByText('Prompt')).toBeHidden();
    }

    // Mobile responsive check (390x844 Light Mode)
    await page.setViewportSize({ width: 390, height: 844 });
    await setThemeMode(page, 'light');
    await page.goto('/dashboard');
    await expect(
      page.locator('main').getByText(/Biology/i).first(),
    ).toBeVisible();
    await assertVisibleImagesLoaded(page, 'mobile dashboard (390x844)');
    await assertNoHorizontalOverflow(page, 'mobile dashboard (390x844)');
    await saveShot(page, '35-mobile-dashboard-light.png');

    await page.getByRole('button', { name: 'Open navigation menu' }).click();
    await expect(
      page.getByRole('button', { name: 'Close navigation menu' }),
    ).toBeVisible();
    await page.getByRole('button', { name: 'Close navigation menu' }).click();

    await page.goto('/dashboard/subjects/biology-hl?tab=notes');
    await expect(
      page.locator('main').getByRole('heading', { name: /Biology/i }),
    ).toBeVisible();
    await assertNoDiagramAlerts(page, 'mobile biology-hl notes');
    await assertNoHorizontalOverflow(page, 'mobile biology-hl notes (390x844)');
    await saveShot(page, '36-mobile-biology-notes-light.png', {
      fullPage: false,
    });

    await page.goto('/dashboard/core');
    await expect(
      page.locator('main').getByRole('heading', { name: /DP Core/i }),
    ).toBeVisible();
    await assertNoHorizontalOverflow(page, 'mobile core workspace (390x844)');
    await saveShot(page, '37-mobile-core-light.png', { fullPage: false });

    errors.assertNoErrors();
  });

  test('3. all 12 interactive diagram engines (interactive state, zero alerts, Light + Dark Mode screenshots)', async ({
    page,
    context,
    request,
    baseURL,
  }) => {
    test.setTimeout(180_000);
    const errors = attachErrorCollectors(page);
    const origin = baseURL ?? 'http://localhost:3100';

    if (!process.env.PLAYWRIGHT_BASE_URL) {
      await request.post(`${MOCK_SUPABASE_URL}/__reset`);
    }

    await context.addCookies([
      {
        name: 'sb-127-auth-token',
        value: createSupabaseSsrSessionCookieValue(),
        url: origin,
      },
    ]);
    await installAiRouteFixtures(page);
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.emulateMedia({ colorScheme: 'light' });

    // -----------------------------------------------------------------------
    // 1. BIOLOGY HL: comparison_matrix, step_mechanism, labeled_explorer,
    //    scientific_simulation (enzyme_kinetics & water_potential_osmosis)
    // -----------------------------------------------------------------------
    await page.goto('/dashboard/subjects/biology-hl?tab=notes');
    await setThemeMode(page, 'light');
    await assertNoDiagramAlerts(page, 'biology-hl default note');

    // comparison_matrix search + blur self-test & step_mechanism step advance
    await selectStudyGuide(page, /IB Biology HL Command Terms/i);
    await assertNoDiagramAlerts(page, 'biology-hl command terms');

    const matrixFig = getDiagramFigure(
      page,
      /IB Biology Command Terms \(AO1–AO3\) & Markscheme Architecture/i,
    );
    await expect(matrixFig).toBeVisible();
    await matrixFig.getByLabel('Filter comparison matrix').fill('Evaluate');
    await expect(matrixFig.getByText(/\/ \d+ rows/)).toBeVisible();
    await matrixFig.getByRole('button', { name: 'Clear search' }).click();
    const blurBtn = matrixFig.getByRole('button', {
      name: /Blur Cells to Self-Test/i,
    });
    await blurBtn.click();
    await expect(blurBtn).toHaveAttribute('aria-pressed', 'true');
    await expect(matrixFig.getByText(/0 \/ \d+ revealed/)).toBeVisible();
    await blurBtn.click();

    const stepFig = getDiagramFigure(
      page,
      /May 2028 IB Biology IA Pipeline/i,
    );
    await expect(stepFig).toBeVisible();
    await stepFig.getByRole('button', { name: 'Next step' }).click();
    await expect(stepFig.getByText(/Step 2/i).first()).toBeVisible();

    // labeled_explorer (5-View Cell Ultrastructure Lab) + full-page Light/Dark shots
    await selectStudyGuide(page, /Interactive Cell Ultrastructure Lab/i);
    await assertNoDiagramAlerts(page, 'biology-hl cell lab');
    const cellFig = getDiagramFigure(
      page,
      /Interactive Cell Ultrastructure Lab: Animal, Plant & Prokaryote/i,
    );
    await expect(cellFig).toBeVisible();
    await cellFig.getByRole('tab', { name: 'Plant Cell' }).click();
    await cellFig.getByRole('tab', { name: 'Prokaryote' }).click();
    await cellFig.getByRole('tab', { name: 'Animal Cell' }).click();
    const monoToggle = cellFig.getByRole('button', { name: /Monochrome Ink/i });
    await monoToggle.click();
    await expect(monoToggle).toHaveAttribute('aria-pressed', 'true');
    await monoToggle.click();
    await expect(monoToggle).toHaveAttribute('aria-pressed', 'false');

    await assertNoHorizontalOverflow(page, 'biology cell lab light');
    await saveShot(cellFig, '07-bio-notes-cell-light.png');
    await saveShot(page, '38-bio-notes-fullpage-light.png');

    await setThemeMode(page, 'dark');
    await assertNoHorizontalOverflow(page, 'biology cell lab dark');
    await saveShot(cellFig, '08-bio-notes-cell-dark.png');
    await saveShot(page, '39-bio-notes-fullpage-dark.png');
    await setThemeMode(page, 'light');

    // scientific_simulation: enzyme_kinetics
    await selectStudyGuide(page, /Enzymes, Activation Energy, Kinetics/i);
    await assertNoDiagramAlerts(page, 'biology-hl enzyme kinetics');
    const enzymeFig = getDiagramFigure(
      page,
      /Interactive Enzyme Kinetics, Denaturation & Inhibition Lab/i,
    );
    await expect(enzymeFig).toBeVisible();
    const compBtn = enzymeFig.getByRole('button', {
      name: 'Competitive',
      exact: true,
    });
    await compBtn.click();
    await expect(compBtn).toHaveAttribute('aria-pressed', 'true');
    await enzymeFig.getByLabel('Inhibitor [I]').fill('8');
    await expect(
      enzymeFig.getByText(/Competitive Inhibitor/i),
    ).toBeVisible();
    await expect(
      enzymeFig.getByText(/Blocks active site cleft/i),
    ).toBeVisible();
    await enzymeFig.getByLabel('Temperature').fill('72');
    await expect(
      enzymeFig.getByText(/Tertiary Bonds Disrupted \(Denatured\)/i),
    ).toBeVisible();
    await enzymeFig.getByLabel('Temperature').fill('37');
    await saveShot(enzymeFig, '09-bio-enzyme-lab-light.png');
    await setThemeMode(page, 'dark');
    await saveShot(enzymeFig, '10-bio-enzyme-lab-dark.png');
    await setThemeMode(page, 'light');

    // scientific_simulation: water_potential_osmosis
    await selectStudyGuide(page, /Water Potential/i);
    await assertNoDiagramAlerts(page, 'biology-hl water potential');
    const waterFig = getDiagramFigure(
      page,
      /Interactive Water Potential .* Osmosis Lab/i,
    );
    await expect(waterFig).toBeVisible();
    const animalBtn = waterFig.getByRole('button', {
      name: /Animal Cell \(No Wall\)/i,
    });
    await animalBtn.click();
    await expect(animalBtn).toHaveAttribute('aria-pressed', 'true');
    await waterFig
      .getByRole('button', { name: /Plant Cell \(Cellulose Wall\)/i })
      .click();
    await saveShot(waterFig, '11-bio-water-potential-light.png');
    await setThemeMode(page, 'dark');
    await saveShot(waterFig, '12-bio-water-potential-dark.png');
    await setThemeMode(page, 'light');

    // -----------------------------------------------------------------------
    // 2. CHEMISTRY SL: vsepr_polarity_lab, scientific_simulation (bohr + titration),
    //    bonding_continuum_lab
    // -----------------------------------------------------------------------
    await page.goto('/dashboard/subjects/chemistry-sl?tab=notes');
    await assertNoDiagramAlerts(page, 'chemistry-sl default');

    // vsepr_polarity_lab
    await selectStudyGuide(page, /Interactive 3D VSEPR Polarity Lab/i);
    await assertNoDiagramAlerts(page, 'chemistry-sl vsepr');
    const vseprFig = getDiagramFigure(
      page,
      /Interactive 3D VSEPR Geometry & Dipole Polarity Lab/i,
    );
    await expect(vseprFig).toBeVisible();
    const nh3Btn = vseprFig.getByRole('button', { name: /NH₃/i });
    await nh3Btn.click();
    await expect(nh3Btn).toHaveAttribute('aria-pressed', 'true');
    await expect(vseprFig.getByText(/Trigonal pyramidal/i)).toBeVisible();
    await vseprFig.getByRole('button', { name: /3D VSEPR View/i }).click();
    await vseprFig.getByRole('button', { name: /2D Lewis View/i }).click();
    await assertNoHorizontalOverflow(page, 'chemistry vsepr light');
    await saveShot(vseprFig, '15-chem-notes-vsepr-light.png');
    await setThemeMode(page, 'dark');
    await saveShot(vseprFig, '16-chem-notes-vsepr-dark.png');
    await setThemeMode(page, 'light');

    // scientific_simulation: bohr_emission_spectra
    await selectStudyGuide(page, /Emission Spectra, Orbital Boxes/i);
    await assertNoDiagramAlerts(page, 'chemistry-sl bohr');
    const bohrFig = getDiagramFigure(
      page,
      /Interactive Bohr Hydrogen Emission Spectrum/i,
    );
    await expect(bohrFig).toBeVisible();
    const lymanBtn = bohrFig.getByRole('button', { name: 'Lyman (n→1, UV)' });
    await lymanBtn.click();
    await expect(lymanBtn).toHaveAttribute('aria-pressed', 'true');
    await expect(bohrFig.getByText(/Lyman Series \(UV\)/i)).toBeVisible();
    await bohrFig.getByRole('button', { name: 'Balmer (n→2, Vis)' }).click();
    await saveShot(bohrFig, '17-chem-bohr-spectra-light.png');
    await setThemeMode(page, 'dark');
    await saveShot(bohrFig, '18-chem-bohr-spectra-dark.png');
    await setThemeMode(page, 'light');

    // scientific_simulation: titration_ph_curve
    await selectStudyGuide(page, /Brønsted–Lowry Acids & Bases/i);
    await assertNoDiagramAlerts(page, 'chemistry-sl titration');
    const titrFig = getDiagramFigure(
      page,
      /Interactive Acid–Base Neutralization pH Curve Simulator/i,
    );
    await expect(titrFig).toBeVisible();
    await titrFig.getByRole('button', { name: /HCl \+ NaOH/i }).click();
    await titrFig.getByLabel('Titrant Volume Added').fill('25');
    await expect(titrFig.getByText('pH 7.00').first()).toBeVisible();
    await titrFig.getByRole('button', { name: /Weak Acid \+ NaOH/i }).click();
    await saveShot(titrFig, '19-chem-titration-light.png');
    await setThemeMode(page, 'dark');
    await saveShot(titrFig, '20-chem-titration-dark.png');
    await setThemeMode(page, 'light');

    // bonding_continuum_lab
    await selectStudyGuide(page, /Bonding Continuum \(van Arkel–Ketelaar\)/i);
    await assertNoDiagramAlerts(page, 'chemistry-sl bonding');
    const bondFig = getDiagramFigure(
      page,
      /van Arkel–Ketelaar Bonding Triangle & Structure Models Lab/i,
    );
    await expect(bondFig).toBeVisible();
    await bondFig.getByLabel('Select Element A').selectOption('Cs');
    await bondFig.getByLabel('Select Element B').selectOption('F');
    await expect(bondFig.getByText(/Predominantly Ionic/i)).toBeVisible();
    await saveShot(bondFig, '21-chem-bonding-light.png');
    await setThemeMode(page, 'dark');
    await saveShot(bondFig, '22-chem-bonding-dark.png');
    await setThemeMode(page, 'light');

    await bondFig
      .getByRole('tab', { name: /Lattices & Allotropes Simulator/i })
      .click();
    const hammerBtn = bondFig.getByRole('button', {
      name: /Apply Hammer Stress/i,
    });
    await hammerBtn.click();
    await expect(hammerBtn).toHaveAttribute('aria-pressed', 'true');
    await expect(bondFig.getByText(/Brittle Shatter!/i)).toBeVisible();

    // -----------------------------------------------------------------------
    // 3. MATH AA SL: function_graph (inverse + derivative + integral) & worked_example
    // -----------------------------------------------------------------------
    await page.goto('/dashboard/subjects/math-aa-sl?tab=notes');
    await assertNoDiagramAlerts(page, 'math-aa-sl default');

    await selectStudyGuide(page, /Functions, Domain Restrictions/i);
    const reflectBtn = page.getByRole('button', { name: /Reflect y = x/i });
    await expect(reflectBtn).toBeVisible();
    const initialReflect = await reflectBtn.getAttribute('aria-pressed');
    await reflectBtn.click();
    await expect(reflectBtn).toHaveAttribute(
      'aria-pressed',
      initialReflect === 'true' ? 'false' : 'true',
    );
    if (initialReflect === 'true') {
      await reflectBtn.click();
      await expect(reflectBtn).toHaveAttribute('aria-pressed', 'true');
    }

    await selectStudyGuide(page, /Differential & Integral Calculus Foundations/i);
    await assertNoDiagramAlerts(page, 'math-aa-sl calculus');
    const graphFig = getDiagramFigure(
      page,
      /Cubic Curve f\(x\) vs Live Derivative f'\(x\)/i,
    );
    await expect(graphFig).toBeVisible();
    const derivBtn = graphFig.getByRole('button', { name: "f'(x) Curve" });
    const intBtn = graphFig.getByRole('button', { name: /∫ₐᵇ Area/i });
    const tangBtn = graphFig.getByRole('button', { name: /Tangent & f'\(x\)/i });

    if ((await derivBtn.getAttribute('aria-pressed')) !== 'true') {
      await derivBtn.click();
    }
    await expect(derivBtn).toHaveAttribute('aria-pressed', 'true');
    if ((await intBtn.getAttribute('aria-pressed')) !== 'true') {
      await intBtn.click();
    }
    await expect(intBtn).toHaveAttribute('aria-pressed', 'true');
    if ((await tangBtn.getAttribute('aria-pressed')) !== 'true') {
      await tangBtn.click();
    }
    await expect(tangBtn).toHaveAttribute('aria-pressed', 'true');

    await assertNoHorizontalOverflow(page, 'math calculus graph light');
    await saveShot(graphFig, '23-math-notes-graph-light.png');
    await setThemeMode(page, 'dark');
    await saveShot(graphFig, '24-math-notes-graph-dark.png');
    await setThemeMode(page, 'light');

    const workedFig = getDiagramFigure(
      page,
      /Worked Example: Minimum-Time Optimization & Exact Substitution Integral/i,
    );
    await expect(workedFig).toBeVisible();
    await workedFig.getByRole('button', { name: /Reveal Next Step/i }).click();
    await expect(
      workedFig.getByText(/Markscheme Solution Steps \(2 \//i),
    ).toBeVisible();
    await workedFig.getByRole('button', { name: /Show All Steps/i }).click();
    await expect(
      workedFig.getByText('Final IB Markscheme Answer'),
    ).toBeVisible();
    await workedFig.getByRole('button', { name: /Inspect Trap/i }).click();
    await saveShot(workedFig, '25-math-worked-example-light.png');
    await setThemeMode(page, 'dark');
    await saveShot(workedFig, '26-math-worked-example-dark.png');
    await setThemeMode(page, 'light');

    // -----------------------------------------------------------------------
    // 4. HISTORY HL: primary_source_analyzer & timeline_causality
    // -----------------------------------------------------------------------
    await page.goto('/dashboard/subjects/history-hl?tab=notes');
    await expect(
      page.getByText('Active Focus: May 2028 IA & Paper 3'),
    ).toBeVisible();
    await assertNoDiagramAlerts(page, 'history-hl default');

    await selectStudyGuide(page, /IA Spotlight — May 2028/i);
    await expect(page.getByText(/MAX 7 sources/i).first()).toBeVisible();

    await selectStudyGuide(page, /Paper 3 Spotlight — Liberal Italy/i);
    await assertNoDiagramAlerts(page, 'history-hl italy');

    const timelineFig = getDiagramFigure(
      page,
      /From Liberal Fragility to Fascist Dictatorship: Italy/i,
    );
    await expect(timelineFig).toBeVisible();
    await timelineFig
      .getByRole('button', { name: 'Next timeline event' })
      .click();
    await expect(timelineFig.getByText(/^2 \/ \d+$/)).toBeVisible();
    await saveShot(timelineFig, '29-history-timeline-light.png');
    await setThemeMode(page, 'dark');
    await saveShot(timelineFig, '30-history-timeline-dark.png');
    await setThemeMode(page, 'light');

    const sourceFig = getDiagramFigure(
      page,
      /Source & Perspective Lab: Fascist Dictatorship/i,
    );
    await expect(sourceFig).toBeVisible();
    await sourceFig.getByRole('button', { name: /Next Note/i }).click();
    await expect(sourceFig.getByText(/^2 \/ \d+$/)).toBeVisible();
    const compareBtn = sourceFig.getByRole('button', {
      name: /Compare Perspectives/i,
    });
    await compareBtn.click();
    await expect(compareBtn).toHaveAttribute('aria-pressed', 'true');
    await expect(
      sourceFig.getByText(/Comparing \d+ Perspectives Side-by-Side/i),
    ).toBeVisible();
    await saveShot(sourceFig, '27-history-primary-source-light.png');
    await setThemeMode(page, 'dark');
    await saveShot(sourceFig, '28-history-primary-source-dark.png');
    await setThemeMode(page, 'light');

    // -----------------------------------------------------------------------
    // 5. ENGLISH LIT HL: literary_extract_annotator
    // -----------------------------------------------------------------------
    await page.goto('/dashboard/subjects/english-lit-hl?tab=notes');
    await assertNoDiagramAlerts(page, 'english-lit-hl default');
    await selectStudyGuide(page, /Things Fall Apart/i);
    await assertNoDiagramAlerts(page, 'english-lit-hl tfa');
    const litFig = getDiagramFigure(
      page,
      /Intertextual Source Study: W\.B\. Yeats/i,
    );
    await expect(litFig).toBeVisible();
    await litFig.getByRole('button', { name: /Next Choice/i }).click();
    await expect(litFig.getByText(/^2 \/ \d+$/)).toBeVisible();
    await saveShot(litFig, '31-english-literary-annotator-light.png');
    await setThemeMode(page, 'dark');
    await saveShot(litFig, '32-english-literary-annotator-dark.png');
    await setThemeMode(page, 'light');

    // -----------------------------------------------------------------------
    // 6. FRENCH B SL: french_text_type_studio
    // -----------------------------------------------------------------------
    await page.goto('/dashboard/subjects/french-b-sl?tab=notes');
    await assertNoDiagramAlerts(page, 'french-b-sl default');
    await selectStudyGuide(page, /Épreuve 1 : Maîtriser les 16 Types de textes/i);
    await assertNoDiagramAlerts(page, 'french-b-sl text types');

    const frenchFig = getDiagramFigure(
      page,
      /Atelier Paper 1 : Formats institutionnels & publics/i,
    );
    await expect(frenchFig).toBeVisible();
    const frenchTabs = frenchFig
      .getByRole('tablist', { name: 'Types de texte' })
      .getByRole('tab');
    await frenchTabs.nth(1).click();
    await expect(frenchTabs.nth(1)).toHaveAttribute('aria-selected', 'true');
    const courantBtn = frenchFig.getByRole('button', {
      name: 'Courant',
      exact: true,
    });
    await courantBtn.click();
    await expect(courantBtn).toHaveAttribute('aria-pressed', 'true');
    await saveShot(frenchFig, '33-french-text-studio-light.png');
    await setThemeMode(page, 'dark');
    await saveShot(frenchFig, '34-french-text-studio-dark.png');
    await setThemeMode(page, 'light');

    await assertNoHorizontalOverflow(page, 'french-b-sl diagrams');

    errors.assertNoErrors();
  });
});
