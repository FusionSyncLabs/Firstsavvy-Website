'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShieldCheck, Check, Save } from 'lucide-react';

export default function CookiePreferencesPage() {
  const [essential] = useState(true); // Always true and locked
  const [preferences, setPreferences] = useState(true);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('firstsavvy_cookie_consent');
      if (stored) {
        const parsed = JSON.parse(stored);
        setPreferences(parsed.preferences ?? true);
      }
    } catch (e) {}
  }, []);

  const handleSave = () => {
    try {
      localStorage.setItem(
        'firstsavvy_cookie_consent',
        JSON.stringify({
          essential: true,
          preferences,
          updatedAt: new Date().toISOString(),
        })
      );
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } catch (e) {}
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 pb-16 space-y-12">
      <div className="space-y-3 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-brand-sky">Legal Information</span>
        <h1 className="text-4xl font-serif font-bold text-brand-navy dark:text-white">Cookie Policy &amp; Preferences</h1>
        <div className="text-xs text-slate-500">Last updated: November 12, 2026</div>
        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed max-w-2xl mx-auto">
          FirstSavvy uses or may use cookies and similar browser storage to operate the website and application, protect sign-in sessions, and remember basic settings. This policy explains the purposes of these technologies and the choices available to you.
        </p>
      </div>

      {/* Interactive Controls */}
      <div className="space-y-6">
        {/* Essential Cookies */}
        <div className="p-6 rounded-2xl bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-slate-800 shadow-sm flex items-start justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-serif font-bold text-lg text-brand-navy dark:text-white">Essential Cookies &amp; Storage</span>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
                Always Active
              </span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg">
              Used for authentication, session continuity, account security, fraud prevention, and core site functions. Restricting them may prevent parts of the Services from working correctly.
            </p>
          </div>
          <label className="inline-flex min-h-[44px] min-w-[44px] shrink-0 items-center justify-center self-center">
            <span className="sr-only">Strictly necessary cookies (always on)</span>
            <input
              type="checkbox"
              checked={essential}
              disabled
              className="w-5 h-5 shrink-0 rounded text-brand-sky opacity-75 cursor-not-allowed"
            />
          </label>
        </div>

        {/* Preferences and Settings */}
        <div className="p-6 rounded-2xl bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-slate-800 shadow-sm flex items-start justify-between gap-4">
          <div className="space-y-1">
            <div className="font-serif font-bold text-lg text-brand-navy dark:text-white">Preferences &amp; Settings</div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg">
              Where implemented, browser storage may remember user preferences such as display settings or selected household context.
            </p>
          </div>
          <label className="inline-flex min-h-[44px] min-w-[44px] shrink-0 items-center justify-center self-center cursor-pointer">
            <span className="sr-only">Preference storage cookies</span>
            <input
              type="checkbox"
              checked={preferences}
              onChange={(e) => setPreferences(e.target.checked)}
              className="w-5 h-5 shrink-0 rounded text-brand-sky focus:ring-brand-sky cursor-pointer"
            />
          </label>
        </div>

        <div className="flex items-center justify-between pt-2">
          <button
            type="button"
            onClick={handleSave}
            className="inline-flex min-h-[44px] cursor-pointer items-center gap-2 rounded-xl bg-brand-sky px-6 py-2.5 text-xs font-bold text-white shadow-sm transition hover:bg-brand-sky/90"
          >
            {saved ? (
              <>
                <Check className="w-4 h-4 text-white" />
                <span>Preferences Saved!</span>
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                <span>Save Preferences</span>
              </>
            )}
          </button>
          <span className="text-xs text-slate-500">Preferences are stored locally in your browser.</span>
        </div>
      </div>

      {/* Authoritative Policy Text */}
      <div className="prose prose-slate dark:prose-invert max-w-none text-sm leading-relaxed space-y-8 pt-6 border-t border-slate-200 dark:border-slate-800">
        <section className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-brand-navy dark:text-white">1. Essential cookies and storage</h2>
          <p>
            Essential cookies or similar storage may be used for authentication, session continuity, account security, fraud prevention, and core site functions. Restricting them may prevent parts of the Services from working correctly.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-brand-navy dark:text-white">2. Preferences and settings</h2>
          <p>
            Where implemented, browser storage may remember user preferences such as display settings or selected household context. You may need to select preferences again if this storage is removed.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-brand-navy dark:text-white">3. Analytics</h2>
          <p>
            FirstSavvy does not currently operate a dedicated website analytics platform. Limited device, security, and diagnostic records may still be generated to maintain and protect the Services. These records are different from optional behavioral analytics.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-brand-navy dark:text-white">4. Advertising and future tracking</h2>
          <p>
            We do not currently use optional behavioral advertising tools in the Services. If we introduce optional analytics, advertising, or similar tracking technologies, we will update this notice and provide any consent or opt-out controls required by applicable law before activating them.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-brand-navy dark:text-white">5. Your choices</h2>
          <p>
            You can manage cookies using your browser settings. Blocking essential cookies may interfere with sign-in or other functions. If optional cookie technologies and preference controls become available, their purposes and controls will be explained where they are offered. For questions, email <a href="mailto:support@firstsavvy.com" className="text-brand-sky underline font-semibold">support@firstsavvy.com</a>.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-brand-navy dark:text-white">6. Changes</h2>
          <p>
            We may update this Cookie Policy when our technologies or legal requirements change. The current version will be published with an updated date.
          </p>
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
            <div className="font-bold text-slate-900 dark:text-white">First Savvy LLC</div>
            <div className="text-slate-600 dark:text-slate-300">Eagle, Idaho, United States</div>
            <div>
              <a href="mailto:support@firstsavvy.com" className="text-brand-sky underline font-medium">support@firstsavvy.com</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
