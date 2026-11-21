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
    <div className="w-full max-w-[400px] rounded-lg border border-[#E6E6E4] bg-[#FBFBFA] p-8 dark:border-[#2E2E2E] dark:bg-[#202020]">
      <div className="flex items-center gap-2.5">
        <BrandMonogram
          size={24}
          className="text-[#37352F] dark:text-[#EBEBEB]"
        />
        <span className="text-lg font-semibold tracking-tight text-[#37352F] dark:text-[#EBEBEB]">
          {APP_NAME}
        </span>
      </div>

      <h1 className="mt-6 text-xl font-semibold tracking-tight text-[#37352F] dark:text-[#EBEBEB]">
        Sign in to your workspace
      </h1>
      <p className="mt-1.5 text-sm leading-relaxed text-[#787774] dark:text-[#9B9A97]">
        {APP_TAGLINE}
      </p>

      {children}

      <div className="mt-6 border-t border-[#E6E6E4] pt-4 text-xs text-[#787774] dark:border-[#2E2E2E] dark:text-[#9B9A97]">
        {APP_COHORT}
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
          className="mt-5 rounded-md border border-[#E6E6E4] bg-white px-3.5 py-2.5 text-xs leading-relaxed text-[#37352F] dark:border-[#2E2E2E] dark:bg-[#191919] dark:text-[#EBEBEB]"
        >
          {errorMessage}
        </div>
      ) : null}

      <button
        type="button"
        onClick={handleGoogleSignIn}
        disabled={isLoading}
        aria-busy={isLoading}
        className="mt-6 flex h-10 w-full cursor-pointer items-center justify-center gap-2.5 rounded-md border border-[#E6E6E4] bg-white px-4 text-sm font-medium text-[#37352F] transition-colors duration-150 hover:bg-[#F1F1EF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#37352F] disabled:cursor-not-allowed disabled:opacity-60 dark:border-[#2E2E2E] dark:bg-[#191919] dark:text-[#EBEBEB] dark:hover:bg-[#2A2A2A] dark:focus-visible:ring-[#EBEBEB]"
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
      <div className="mt-6 h-10 w-full rounded-md border border-[#E6E6E4] bg-white dark:border-[#2E2E2E] dark:bg-[#191919]" />
    </LoginCardShell>
  );
}

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-4 py-12 dark:bg-[#191919]">
      <Suspense fallback={<LoginCardFallback />}>
        <LoginCardContent />
      </Suspense>
    </main>
  );
}
