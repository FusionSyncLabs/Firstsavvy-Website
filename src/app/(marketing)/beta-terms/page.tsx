import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Beta Testing Terms | First Savvy',
  description: 'First Savvy Beta Testing Terms. Review the conditions and policies governing participation in our free beta program.',
};

export default function BetaTermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 pb-16 space-y-12">
      <div className="space-y-3 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-brand-sky">Legal Information</span>
        <h1 className="text-4xl font-serif font-bold text-brand-navy dark:text-white">Beta Testing Terms</h1>
        <div className="text-xs text-slate-500">Last updated: November 12, 2026</div>
      </div>

      <div className="prose prose-slate dark:prose-invert max-w-none text-sm leading-relaxed space-y-8">
        <p className="text-base text-slate-700 dark:text-slate-200">
          FirstSavvy is currently offered as a <strong>free beta service</strong>. These Beta Testing Terms supplement the <Link href="/terms" className="text-brand-sky underline font-semibold">Terms of Use</Link>, <Link href="/privacy" className="text-brand-sky underline font-semibold">Privacy Policy</Link>, and <Link href="/children-privacy" className="text-brand-sky underline font-semibold">Children&apos;s Privacy Notice</Link> where applicable.
        </p>

        <section className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-brand-navy dark:text-white">1. About beta participation</h2>
          <p>
            The beta allows users to try selected FirstSavvy features while the product continues to be tested and improved. A beta feature may not include every capability planned for its final release.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-brand-navy dark:text-white">2. Changes and interruptions</h2>
          <p>
            Features, screens, account connections, and calculations may change during beta. Parts of the Services may be interrupted, updated, or temporarily unavailable. We will provide additional notice about material changes where required by law.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-brand-navy dark:text-white">3. Accuracy of financial information</h2>
          <p>
            Financial balances, imported transactions, categories, and reports may be incomplete or inaccurate. Please verify important information against your bank or financial institution statements. FirstSavvy should not be your sole source of information for payments, taxes, credit, investments, or other consequential decisions. For more details, see our <Link href="/financial-disclosure" className="text-brand-sky underline font-semibold">Financial Data &amp; Connected Accounts Disclosure</Link>.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-brand-navy dark:text-white">4. Household and child accounts</h2>
          <p>
            Parents and guardians remain responsible for the permissions and child activities they authorize. Applicable privacy, security, and parental-consent protections continue to apply during beta.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-brand-navy dark:text-white">5. Feedback</h2>
          <p>
            You may provide suggestions, bug reports, and other feedback. We may use product suggestions to improve FirstSavvy without an obligation to adopt them or provide payment, subject to rights protected by law. Any personal information included in feedback is handled under our <Link href="/privacy" className="text-brand-sky underline">Privacy Policy</Link>. Please do not send passwords or unnecessary financial or children&apos;s information in support messages.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-brand-navy dark:text-white">6. Fees and future plans</h2>
          <p>
            Beta access is currently free. We may introduce paid subscriptions in the future after providing applicable pricing and subscription terms. We will not enroll you in a paid subscription solely because you participated in the free beta.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-brand-navy dark:text-white">7. Questions or leaving the beta</h2>
          <p>
            For questions, account requests, or help leaving the beta, contact <a href="mailto:support@firstsavvy.com" className="text-brand-sky underline font-semibold">support@firstsavvy.com</a>. Your rights concerning personal information are described in the <Link href="/privacy" className="text-brand-sky underline">Privacy Policy</Link> and <Link href="/deletion-policy" className="text-brand-sky underline font-semibold">Account &amp; Data Deletion Policy</Link>.
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
