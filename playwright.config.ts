import { defineConfig, devices } from '@playwright/test';

const port = Number(process.env.PLAYWRIGHT_PORT || 3100);
const mockSupabasePort = Number(process.env.MOCK_SUPABASE_PORT || 54321);
const baseURL = process.env.PLAYWRIGHT_BASE_URL || `http://localhost:${port}`;
const mockSupabaseUrl = `http://127.0.0.1:${mockSupabasePort}`;

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: 1,
  timeout: 60_000,
  expect: {
    timeout: 15_000,
  },
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    baseURL,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'off',
  },
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1280, height: 800 },
      },
    },
  ],
  webServer: process.env.PLAYWRIGHT_BASE_URL
    ? undefined
    : [
        {
          command: 'npx tsx tests/e2e/mock-supabase.ts',
          url: `${mockSupabaseUrl}/health`,
          reuseExistingServer: false,
          timeout: 30_000,
          env: {
            ...process.env,
            MOCK_SUPABASE_PORT: String(mockSupabasePort),
          },
        },
        {
          command: `npm run dev -- --port ${port}`,
          url: `${baseURL}/login`,
          reuseExistingServer: false,
          timeout: 120_000,
          env: {
            ...process.env,
            NEXT_PUBLIC_SUPABASE_URL: mockSupabaseUrl,
            NEXT_PUBLIC_SUPABASE_ANON_KEY: 'e2e-mock-anon-key',
          },
        },
      ],
});
