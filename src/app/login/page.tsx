'use client';

import React, { Suspense, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  APP_COHORT,
  APP_NAME,
  APP_TAGLINE,
  BrandMonogram,
} from '@/config/brand';
import { createClient } from '@/lib/supabase/client';

function GoogleMarkIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        d="M21.35 11.1H12v3.2h5.35c-.23 1.47-1.65 4.3-5.35 4.3-3.22 0-5.85-2.67-5.85-5.95s2.63-5.95 5.85-5.95c1.83 0 3.06.78 3.76 1.45l2.56-2.47C16.68 4.15 14.54 3.2 12 3.2 6.92 3.2 2.8 7.32 2.8 12.4S6.92 21.6 12 21.6c6.92 0 9.6-4.85 9.6-7.37 0-.5-.05-.88-.12-1.25-.03-.16-.08-.88-.13-.88Z"
        fill="currentColor"
      />
    </svg>
  );
}

function LoginCardShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="glass-panel w-full max-w-[420px] rounded-3xl p-8 sm:p-9">
      <div className="flex items-center gap-3">
        <span className="glass-pill flex h-10 w-10 items-center justify-center rounded-2xl">
          <BrandMonogram
            size={22}
            className="text-[#1D1D1F] dark:text-[#F5F5F7]"
          />
        </span>
        <div>
          <span className="text-lg font-semibold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7]">
            {APP_NAME}
          </span>
          <p className="text-[11px] font-medium text-[#6E6E73] dark:text-[#98989D]">
            {APP_COHORT}
          </p>
        </div>
      </div>

      <h1 className="mt-7 text-2xl font-semibold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7]">
        Sign in to your workspace
      </h1>
      <p className="mt-1.5 text-sm leading-relaxed text-[#6E6E73] dark:text-[#98989D]">
        {APP_TAGLINE}
      </p>

      {children}

      <div className="mt-7 border-t border-black/[0.06] pt-4 text-xs text-[#6E6E73] dark:border-white/[0.08] dark:text-[#98989D]">
        Open access for all IB Diploma students · Official syllabi, interactive
        notes, and markscheme-calibrated grading.
      </div>
    </div>
  );
}

function LoginCardContent() {
  const searchParams = useSearchParams();
  const hasAuthCallbackError = searchParams.get('error') === 'auth';

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(
    hasAuthCallbackError
      ? 'Google sign-in could not be completed. Please try again.'
      : null,
  );

  async function handleGoogleSignIn() {
    setIsLoading(true);
    setErrorMessage(null);

    try {
      const supabase = createClient();
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      });

      if (error) {
        setErrorMessage(error.message || 'Unable to start Google sign-in.');
        setIsLoading(false);
      }
    } catch (err) {
      setErrorMessage(
        err instanceof Error
          ? err.message
          : 'Unable to initialize authentication client.',
      );
      setIsLoading(false);
    }
  }

  return (
    <LoginCardShell>
      {errorMessage ? (
        <div
          role="alert"
          className="glass-surface mt-5 rounded-xl px-3.5 py-2.5 text-xs leading-relaxed text-[#1D1D1F] dark:text-[#F5F5F7]"
        >
          {errorMessage}
        </div>
      ) : null}

      <button
        type="button"
        onClick={handleGoogleSignIn}
        disabled={isLoading}
        aria-busy={isLoading}
        className="glass-pill glass-interactive mt-6 flex h-11 w-full cursor-pointer items-center justify-center gap-2.5 rounded-2xl px-4 text-sm font-medium text-[#1D1D1F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D1D1F]/25 disabled:cursor-not-allowed disabled:opacity-60 dark:text-[#F5F5F7] dark:focus-visible:ring-[#F5F5F7]/25"
      >
        <GoogleMarkIcon />
        <span>
          {isLoading ? 'Redirecting to Google...' : 'Continue with Google'}
        </span>
      </button>
    </LoginCardShell>
  );
}

function LoginCardFallback() {
  return (
    <LoginCardShell>
      <div className="glass-pill mt-6 h-11 w-full rounded-2xl" />
    </LoginCardShell>
  );
}

export default function LoginPage() {
  return (
    <main className="liquid-canvas flex min-h-screen items-center justify-center px-4 py-12">
      <Suspense fallback={<LoginCardFallback />}>
        <LoginCardContent />
      </Suspense>
    </main>
  );
}
