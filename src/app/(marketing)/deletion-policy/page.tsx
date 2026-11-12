import React from 'react';
import Link from 'next/link';
import { Trash2, ShieldCheck, UserX, AlertTriangle } from 'lucide-react';

export const metadata = {
  title: 'Account & Data Deletion Policy | First Savvy',
  description: 'First Savvy Account & Data Deletion Policy. Learn how to request deletion of your account, financial profiles, child profiles, or household records.',
};

export default function DeletionPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 pb-16 space-y-12">
      <div className="space-y-3 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-brand-sky">Legal Information</span>
        <h1 className="text-4xl font-serif font-bold text-brand-navy dark:text-white">Account &amp; Data Deletion Policy</h1>
        <div className="text-xs text-slate-500">Last updated: November 12, 2026</div>
      </div>

      <div className="p-5 rounded-2xl bg-sky-50 dark:bg-sky-950/40 border border-brand-sky/20 flex items-start gap-3">
        <ShieldCheck className="w-6 h-6 text-brand-sky shrink-0 mt-0.5" />
        <div className="space-y-1">
          <div className="font-serif font-bold text-base text-brand-navy dark:text-white">Your Right to Delete</div>
          <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            FirstSavvy provides ways for users and authorized parents to request access to, correction of, or deletion of relevant account and profile information. This policy describes the available request process and how deletion is handled.
          </div>
        </div>
      </div>

      <div className="prose prose-slate dark:prose-invert max-w-none text-sm leading-relaxed space-y-8">
        <section className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-brand-navy dark:text-white">1. How to request deletion</h2>
          <p>
            You may request deletion by emailing <a href="mailto:support@firstsavvy.com" className="text-brand-sky underline font-semibold">support@firstsavvy.com</a> with the subject line <strong>Account Deletion Request</strong>. Include the email address linked to your FirstSavvy account and explain whether you want to delete your login account, a financial profile, a child profile, or a household. Do not send passwords, bank login details, or unnecessary sensitive documents by ordinary email.
          </p>
          <p>
            If the relevant deletion controls are available in your account settings, you may also use those controls to initiate deletion.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-brand-navy dark:text-white">2. Identity and authorization</h2>
          <p>
            We may ask you to verify ownership of an account or your authority as a parent or guardian before taking action. In a shared household, deletion may affect other users and access to shared information. We may clarify the scope of a request before completing it.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-brand-navy dark:text-white">3. Child profiles</h2>
          <p>
            An authorized parent can delete a child profile through the applicable controls. Deletion immediately removes the child profile, its Stars, Goals, and associated activity from the active application. This does not necessarily mean that information in separate backups, security records, or legally retained records is removed at the same instant.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-brand-navy dark:text-white">4. Financial profiles</h2>
          <p>
            Deleting a financial profile removes it from the active application immediately. Deleted financial-profile information remains in server records for <strong>30 days</strong>. Certain related records may have a different retention period if needed for security, disputes, or legal compliance. Disconnecting a financial account is separate from deleting previously imported records.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-brand-navy dark:text-white">5. Other account and data requests</h2>
          <p>
            You may also ask to access or correct information, obtain a copy where available, or withdraw relevant permission for a child&apos;s data collection. The precise response and any exceptions depend on the request and applicable law. We will respond as required by law after reasonable verification.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-brand-navy dark:text-white">6. Contact</h2>
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

