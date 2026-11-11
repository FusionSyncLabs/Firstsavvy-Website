import React from 'react';
import Link from 'next/link';
import { Logo } from '@/components/brand/Logo';
import { APP_CHILD_LOGIN_URL, APP_LOGIN_URL, APP_SIGNUP_URL } from '@/lib/config/authUrls';
import { ArrowRight, Home, LogIn, Star } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[100dvh] bg-[#F9F7F8] dark:bg-[#1A232E] flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md mx-auto text-center space-y-6">
        <Logo size="lg" href="/" />

        <div className="space-y-2">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-sky">
            404 • Page Not Found
          </p>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-brand-navy dark:text-white leading-tight">
            Looking for your account?
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            This page doesn&apos;t exist on the marketing site. Jump back home or head straight to the First Savvy web app.
          </p>
        </div>

        <div className="flex flex-col gap-3 pt-2">
          <a
            href={APP_SIGNUP_URL}
            className="min-h-[44px] w-full px-6 py-3 rounded-xl bg-brand-navy hover:bg-brand-navyDark text-white text-sm font-semibold inline-flex items-center justify-center gap-2 shadow-sm transition-colors"
          >
            <span>Get Started for Free</span>
            <ArrowRight className="w-4 h-4 text-brand-sky" />
          </a>

          <a
            href={APP_LOGIN_URL}
            className="min-h-[44px] w-full px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-brand-navy dark:text-white hover:bg-slate-50 dark:hover:bg-slate-700 text-sm font-semibold inline-flex items-center justify-center gap-2 transition-colors"
          >
            <LogIn className="w-4 h-4 text-brand-sky" />
            <span>Log In to Web App</span>
          </a>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a
              href={APP_CHILD_LOGIN_URL}
              className="min-h-[44px] px-4 py-2.5 rounded-xl border border-amber-200 dark:border-amber-800/60 bg-amber-50/70 dark:bg-amber-950/30 text-amber-800 dark:text-amber-300 text-xs font-semibold inline-flex items-center justify-center gap-1.5 transition-colors"
            >
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
              <span>Child Login</span>
            </a>

            <Link
              href="/"
              className="min-h-[44px] px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-brand-sky text-xs font-semibold inline-flex items-center justify-center gap-1.5 transition-colors"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

