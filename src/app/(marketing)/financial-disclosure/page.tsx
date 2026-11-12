import React from 'react';
import Link from 'next/link';
import { Landmark, ShieldCheck, AlertCircle } from 'lucide-react';

export const metadata = {
  title: 'Financial Data & Connected Accounts Disclosure | First Savvy',
  description: 'First Savvy Financial Data & Connected Accounts Disclosure. Review important limitations of connected financial data, Plaid integration, and transaction handling.',
};

export default function FinancialDisclosurePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 pb-16 space-y-12">
      <div className="space-y-3 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-brand-sky">Legal Information</span>
        <h1 className="text-4xl font-serif font-bold text-brand-navy dark:text-white">Financial Data &amp; Connected Accounts Disclosure</h1>
        <div className="text-xs text-slate-500">Last updated: November 12, 2026</div>
      </div>

      <div className="p-5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 text-xs sm:text-sm text-amber-900 dark:text-amber-200 flex items-start gap-3">
        <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <div className="font-serif font-bold text-base text-amber-950 dark:text-amber-100">Important Financial Notice</div>
          <div className="leading-relaxed">
            FirstSavvy is financial-management and educational software, not a bank. We do not hold customer deposits or transfer funds through current services. Always consult official financial institution statements when making important financial decisions.
          </div>
        </div>
      </div>

      <div className="prose prose-slate dark:prose-invert max-w-none text-sm leading-relaxed space-y-8">
        <p className="text-base text-slate-700 dark:text-slate-200">
          FirstSavvy helps users organize financial information from accounts they connect and records they enter themselves. This disclosure explains important limitations of connected financial data, calculations, and transaction handling.
        </p>

        <section className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-brand-navy dark:text-white">1. Connecting financial accounts</h2>
          <p>
            When you connect a supported bank, credit card, or investment account, FirstSavvy uses <strong>Plaid</strong> to facilitate an authorized connection. Financial institutions may vary in available accounts, transaction history, data quality, connection coverage, and update frequency. Review the consent information shown during the connection process.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-brand-navy dark:text-white">2. Data is not always real-time</h2>
          <p>
            Balances, transactions, investment values, and related records may be delayed, incomplete, duplicated, or different from official account records. A FirstSavvy-calculated or ledger balance may differ from a bank-reported balance. Information that is unavailable from a connected account may require manual entry or review.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-brand-navy dark:text-white">3. Categories, budgets, and reports</h2>
          <p>
            FirstSavvy may use rules, account mappings, and user-entered information to organize transactions and calculate budgets, spending, and net worth. Results depend on available data and can be inaccurate where transactions are missing or misclassified. Review transactions requiring attention, including those marked <strong>Needs Review</strong>.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-brand-navy dark:text-white">4. Transfers and credit-card payments</h2>
          <p>
            Transfers between accounts you own and payments toward credit-card balances generally do not represent additional income or spending when correctly recorded. Transactions may post on different dates, including across monthly boundaries, and counterpart transactions may be missing when an account is not connected or falls outside the selected history period. FirstSavvy may ask you to identify an account or review an unmatched payment so its financial treatment can be determined appropriately.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-brand-navy dark:text-white">5. Not a bank or financial adviser</h2>
          <p>
            FirstSavvy&apos;s current Services are financial-management software. FirstSavvy does not hold customer deposits or itself provide banking services by displaying your account data. Its reports and suggestions are not individualized legal, investment, tax, or other professional advice. If payment or money-movement features are introduced later, they will be subject to separate disclosures and terms as applicable.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-brand-navy dark:text-white">6. Verify important information</h2>
          <p>
            Use official financial institution statements and qualified professional advice when making important financial, tax, or investment decisions. If your account information appears incorrect, contact <a href="mailto:support@firstsavvy.com" className="text-brand-sky underline font-semibold">support@firstsavvy.com</a> for assistance.
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

