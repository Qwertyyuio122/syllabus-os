import { expect, test, type Page } from '@playwright/test';

const MOCK_SUPABASE_PORT = Number(process.env.MOCK_SUPABASE_PORT || 54321);
const MOCK_SUPABASE_URL = `http://127.0.0.1:${MOCK_SUPABASE_PORT}`;

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
}

test.describe('SyllabusOS Smoke & Gate Verification', () => {
  test('1. unauthenticated gate redirects /dashboard to /login and blocks /api/generate/suite with 401', async ({
    page,
    request,
  }) => {
    const errors = attachErrorCollectors(page);

    await page.goto('/dashboard');
    await expect(page).toHaveURL(/\/login/);
    await expect(page.getByText('SyllabusOS')).toBeVisible();
    await expect(
      page.getByRole('button', { name: /continue with google/i }),
    ).toBeVisible();

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

  test('2. authenticated workspace flows across dashboard, subject tabs, playable diagrams, core workspace, and mobile viewport', async ({
    page,
    context,
    request,
    baseURL,
  }) => {
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

    // Desktop viewport (1280x800)
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/dashboard');
    await expect(page).toHaveURL(/\/dashboard$/);

    for (const subjectPattern of SIX_SUBJECT_KEYWORDS) {
      await expect(
        page.locator('main').getByText(subjectPattern).first(),
      ).toBeVisible();
    }
    await expect(page.getByText('6 subjects')).toBeVisible();
    await expect(
      page.locator('main').getByText('107', { exact: true }),
    ).toBeVisible();
    await expect(
      page.locator('main').getByText('30', { exact: true }),
    ).toBeVisible();
    await expect(
      page.locator('main').getByText('94', { exact: true }),
    ).toBeVisible();
    await expect(
      page.getByText('CRHS Class of 2028 — Upcoming IB Milestones'),
    ).toBeVisible();
    await expect(
      page.getByText('Active Focus · IA & Paper 3'),
    ).toBeVisible();
    await assertNoHorizontalOverflow(page, 'dashboard (1280x800)');

    // Desktop Sidebar collapse/expand toggle + ⌘K Command Palette
    await page.getByRole('button', { name: 'Collapse sidebar' }).click();
    await expect(
      page.getByRole('button', { name: 'Expand sidebar' }),
    ).toBeVisible();
    await assertNoHorizontalOverflow(
      page,
      'dashboard collapsed sidebar (1280x800)',
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

    // Open Biology HL workspace
    await page.getByRole('link', { name: /Biology/i }).first().click();
    await expect(page).toHaveURL(/\/dashboard\/subjects\/biology-hl/);
    await assertNoHorizontalOverflow(page, 'subject workspace (1280x800)');

    // 1) Syllabus Checklist tab: toggle a checklist item
    const firstCheckbox = page.getByRole('checkbox').first();
    await expect(firstCheckbox).toBeVisible();
    const initialChecked = await firstCheckbox.getAttribute('aria-checked');
    await firstCheckbox.click();
    const updatedChecked = await firstCheckbox.getAttribute('aria-checked');
    expect(updatedChecked).not.toBe(initialChecked);

    // 2) Study Notes tab: verify read-only notes & interact with a Playable Diagram control
    await page.getByRole('tab', { name: /Study Notes/i }).click();
    const diagramControl = page
      .locator(
        'button:has-text("Self-Test"), button:has-text("Next"), button:has-text("Blur Cells"), input[type="range"]',
      )
      .first();
    await expect(diagramControl).toBeVisible();
    const tagName = await diagramControl.evaluate((el) =>
      el.tagName.toLowerCase(),
    );
    if (tagName === 'input') {
      await diagramControl.fill('2');
    } else {
      await diagramControl.click();
    }

    // 3) Question Bank tab: answer a question, verify markscheme breakdown & embedded AI tutor chat
    await page.getByRole('tab', { name: /Question Bank/i }).click();
    const radioOption = page.getByRole('radio').first();
    if (await radioOption.isVisible().catch(() => false)) {
      await radioOption.click();
    } else {
      const answerBox = page.locator('textarea').first();
      await expect(answerBox).toBeVisible();
      await answerBox.fill(
        'Membrane fluidity is maintained by cholesterol modulating phospholipid packing.',
      );
    }

    await page
      .getByRole('button', { name: /Submit to IB Examiner/i })
      .first()
      .click();
    await expect(
      page.getByText('IB Markscheme Breakdown').first(),
    ).toBeVisible();
    await expect(page.getByText('[M1]').first()).toBeVisible();

    const tutorInput = page
      .getByLabel('Ask IB Tutor a follow-up question')
      .first();
    await expect(tutorInput).toBeVisible();
    await tutorInput.fill('What command term detail was evaluated?');
    await tutorInput.press('Enter');
    await expect(
      page.getByText(/state the exact syllabus keyword/i),
    ).toBeVisible();

    await page.getByRole('button', { name: 'Model Answer' }).first().click();
    await expect(page.getByText('Full-Mark Model Answer').first()).toBeVisible();

    // 4) Classroom Materials tab: verify pre-seeded Google Classroom materials & paste/upload controls
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

    // 5) Flashcards tab: verify 3D flashcard flip (Prompt -> Answer)
    await page.getByRole('tab', { name: /Flashcards/i }).click();
    const flashcardSurface = page.getByTestId('flashcard-surface');
    await expect(flashcardSurface).toBeVisible();
    await expect(flashcardSurface.getByText('Prompt')).toBeVisible();
    await page.keyboard.press('Space');
    await expect(flashcardSurface.getByText('Answer')).toBeVisible();
    await expect(flashcardSurface.getByText('Prompt')).toBeHidden();

    // 6) Core & IA Workspace (/dashboard/core)
    await page.goto('/dashboard/core');
    await expect(page).toHaveURL(/\/dashboard\/core/);
    await expect(page.getByText(/Extended Essay/i).first()).toBeVisible();
    await expect(page.getByText(/TOK Essay/i).first()).toBeVisible();
    await expect(page.getByText(/CAS Portfolio/i).first()).toBeVisible();
    await page.getByRole('tab', { name: /Official IB Rubric/i }).click();
    await expect(page.getByText(/Criterion/i).first()).toBeVisible();
    await page
      .getByRole('tab', { name: /Classroom Reference Toolkit/i })
      .click();
    await expect(
      page.getByText(/EE Timeline: May 2028 Cohort/i).first(),
    ).toBeVisible();
    await assertNoHorizontalOverflow(page, 'core workspace (1280x800)');

    // Mobile responsive check (375x812)
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/dashboard');
    await expect(
      page.locator('main').getByText(/Biology/i).first(),
    ).toBeVisible();
    await assertNoHorizontalOverflow(page, 'dashboard (375x812)');

    await page.getByRole('button', { name: 'Open navigation menu' }).click();
    await expect(
      page.getByRole('button', { name: 'Close navigation menu' }),
    ).toBeVisible();
    await page.getByRole('button', { name: 'Close navigation menu' }).click();

    await page.goto('/dashboard/subjects/biology-hl');
    await expect(
      page.locator('main').getByRole('heading', { name: /Biology/i }),
    ).toBeVisible();
    await assertNoHorizontalOverflow(page, 'subject workspace (375x812)');

    await page.goto('/dashboard/core');
    await expect(
      page.locator('main').getByRole('heading', { name: /DP Core/i }),
    ).toBeVisible();
    await assertNoHorizontalOverflow(page, 'core workspace (375x812)');

    errors.assertNoErrors();
  });

  test('3. v2 realistic diagrams, History HL focus, and non-destructive /api/seed/sync preservation', async ({
    page,
    context,
    request,
    baseURL,
  }) => {
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
    await page.setViewportSize({ width: 1280, height: 800 });

    // Trigger seeding, mark a Biology checkbox, then sync via button & API while preserving progress
    await page.goto('/dashboard/subjects/biology-hl');
    const firstCheckbox = page.getByRole('checkbox').first();
    await expect(firstCheckbox).toBeVisible();
    if ((await firstCheckbox.getAttribute('aria-checked')) !== 'true') {
      await firstCheckbox.click();
    }
    await expect(firstCheckbox).toHaveAttribute('aria-checked', 'true');

    await page.getByRole('tab', { name: /Classroom Materials/i }).click();
    const syncButton = page.getByRole('button', {
      name: /Sync Classroom Pack v2/i,
    });
    await expect(syncButton).toBeVisible();
    await syncButton.click();
    await expect(page.getByText(/Classroom Pack v2 synced/i)).toBeVisible();

    await page.reload();
    await page.getByRole('tab', { name: /Syllabus Checklist/i }).click();
    await expect(page.getByRole('checkbox').first()).toHaveAttribute(
      'aria-checked',
      'true',
    );

    // Biology HL 5-View Cell Ultrastructure Lab
    await page.getByRole('tab', { name: /Study Notes/i }).click();
    await page
      .getByRole('button', { name: /Interactive Cell Ultrastructure Lab/i })
      .first()
      .click();
    await expect(
      page.getByRole('tab', { name: 'Plant Cell' }),
    ).toBeVisible();
    await page.getByRole('tab', { name: 'Plant Cell' }).click();
    await page.getByRole('tab', { name: 'Prokaryote' }).click();
    const monoToggle = page.getByRole('button', { name: /Monochrome Ink/i }).first();
    await monoToggle.click();
    await expect(monoToggle).toHaveAttribute('aria-pressed', 'true');
    await assertNoHorizontalOverflow(page, 'biology cell lab (1280x800)');

    // Chemistry SL VSEPR & Bonding Continuum Labs
    await page.goto('/dashboard/subjects/chemistry-sl?tab=notes');
    await page
      .getByRole('button', { name: /Interactive 3D VSEPR Polarity Lab/i })
      .first()
      .click();
    await expect(page.getByRole('button', { name: /NH₃/i })).toBeVisible();
    await page.getByRole('button', { name: /NH₃/i }).click();
    await page.getByRole('button', { name: /Monochrome Ink/i }).first().click();

    await page
      .getByRole('button', { name: /Bonding Continuum \(van Arkel–Ketelaar\)/i })
      .first()
      .click();
    await page
      .getByRole('tab', { name: /Lattices & Allotropes Simulator/i })
      .click();
    await assertNoHorizontalOverflow(page, 'chemistry bonding lab (1280x800)');

    // Math AA SL Inverse Reflection & Rational Asymptotes
    await page.goto('/dashboard/subjects/math-aa-sl?tab=notes');
    await page
      .getByRole('button', { name: /Functions, Domain Restrictions/i })
      .first()
      .click();
    await expect(
      page.getByRole('button', { name: /Reflect y = x/i }),
    ).toBeVisible();
    await page.getByRole('button', { name: /Reflect y = x/i }).click();
    await page
      .getByRole('button', { name: /Reciprocal & Linear-Rational/i })
      .first()
      .click();
    await expect(page.getByText(/Vertical Asymptote/i).first()).toBeVisible();
    await assertNoHorizontalOverflow(page, 'math rational graph (1280x800)');

    // History HL Active Focus & May 2028 IA / Paper 3
    await page.goto('/dashboard/subjects/history-hl?tab=notes');
    await expect(
      page.getByText('Active Focus: May 2028 IA & Paper 3'),
    ).toBeVisible();
    await expect(
      page.getByRole('button', { name: /Paper 3 Spotlight/i }).first(),
    ).toBeVisible();
    await page
      .getByRole('button', { name: /IA Spotlight — May 2028/i })
      .first()
      .click();
    await expect(page.getByText(/MAX 7 sources/i).first()).toBeVisible();
    await assertNoHorizontalOverflow(page, 'history hl focus (1280x800)');

    errors.assertNoErrors();
  });
});
