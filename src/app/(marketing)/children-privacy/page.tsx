import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Lock, Heart, CheckCircle2, AlertCircle } from 'lucide-react';

export const metadata = {
  title: "Children's Privacy Notice | First Savvy",
  description: "Children's Privacy Notice for First Savvy. Learn how we handle child profiles, parental consent, and data protection under COPPA.",
};

export default function ChildrenPrivacyNoticePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 pb-16 space-y-12">
      <div className="space-y-3 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-brand-sky">Legal Information</span>
        <h1 className="text-4xl font-serif font-bold text-brand-navy dark:text-white">Children&apos;s Privacy Notice</h1>
        <div className="text-xs text-slate-500">Last updated: November 12, 2026</div>
      </div>

      <div className="p-5 rounded-2xl bg-sky-50 dark:bg-sky-950/40 border border-brand-sky/20 flex items-start gap-3">
        <ShieldCheck className="w-6 h-6 text-brand-sky shrink-0 mt-0.5" />
        <div className="space-y-1">
          <div className="font-serif font-bold text-base text-brand-navy dark:text-white">Our Family Privacy Commitment</div>
          <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            This notice explains how First Savvy LLC (&quot;FirstSavvy&quot;) handles information associated with child profiles and child-facing features of the Services. It is intended for parents and legal guardians. We are based in Eagle, Idaho, United States. Parents may contact us at <a href="mailto:support@firstsavvy.com" className="text-brand-sky underline font-semibold">support@firstsavvy.com</a> regarding a child&apos;s information or access.
          </div>
        </div>
      </div>

      <div className="prose prose-slate dark:prose-invert max-w-none text-sm leading-relaxed space-y-8">
        <section className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-brand-navy dark:text-white">1. Parent-managed child profiles</h2>
          <p>
            A child profile may be created only by a parent or authorized legal guardian through an adult account. Children under age 13 cannot create an independent FirstSavvy account or create other profiles from their login. The adult account owner controls the child&apos;s access and permitted features.
          </p>
          <p>
            Where enabled by the parent, a child may use a restricted child interface to view or complete assigned tasks, check Stars or rewards, and see goals or age-appropriate household information. Child access does not provide automatic access to adults&apos; financial records or private household information.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-brand-navy dark:text-white">2. Information associated with children</h2>
          <p>Depending on the features used, we may process:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Profile information provided by an adult:</strong> A child&apos;s name or nickname, household association, age-related settings, login permissions, and similar profile details.
            </li>
            <li>
              <strong>Household activity information:</strong> Tasks, completion status, Stars, rewards, redemptions, savings goals, and activity records entered by parents or authorized family members.
            </li>
            <li>
              <strong>Child-submitted information:</strong> Information entered through approved child features, such as task completion responses or notes, where those features are enabled.
            </li>
            <li>
              <strong>Technical information:</strong> Limited login, device, session, and security information needed to support the service, protect accounts, and prevent misuse.
            </li>
          </ul>
          <p>
            Child profiles are not intended to be publicly searchable or publicly displayed. We do not currently use a dedicated analytics platform or behavioral advertising tools in the child experience.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-brand-navy dark:text-white">3. Why we use this information</h2>
          <p>
            We use child information to operate parent-authorized family features, maintain accurate Stars and reward activity, display goals and tasks, enforce household permissions, support account security, provide related service communications to authorized adults, and respond to parent requests. We do not require children to disclose more information than reasonably necessary to participate in an available activity.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-brand-navy dark:text-white">4. Parental notice and consent</h2>
          <p>
            The parent or authorized guardian initiates child-profile creation and controls login permissions. Where applicable law requires verifiable parental consent for collection of personal information directly from a child under 13, FirstSavvy will provide the necessary notice and obtain the required consent before enabling that collection, unless a legal exception applies. An ordinary account login or checkbox does not necessarily provide the verification required by law.
          </p>
          <p>
            Parents may withdraw permission for continued collection or use when applicable and request deletion of their child&apos;s information. Withdrawal may limit or disable related child features. Where the law requires a separate parental choice for disclosure of a child&apos;s personal information to certain third parties, we will provide that choice before the applicable disclosure.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-brand-navy dark:text-white">5. Information sharing</h2>
          <p>
            Information associated with a child profile may be available to parents and authorized household members according to the relevant permissions. Limited information may be processed by service providers that support secure application delivery, data storage, authentication, service communications, and security. Such information is used only as necessary to provide the relevant functions or meet applicable legal obligations. We do not use child-profile information for behavioral advertising.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-brand-navy dark:text-white">6. Parent rights and controls</h2>
          <p>A verified parent or legal guardian may request to:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Review information associated with their child profile;</li>
            <li>Correct or delete the child&apos;s information;</li>
            <li>Stop further collection or use of information directly from the child where applicable; and</li>
            <li>Manage or remove access to child-facing features.</li>
          </ul>
          <p>
            Requests can be submitted using available parent account controls or by emailing <a href="mailto:support@firstsavvy.com" className="text-brand-sky underline font-semibold">support@firstsavvy.com</a>. We may verify parental authority before releasing or deleting information.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-brand-navy dark:text-white">7. Security and retention</h2>
          <p>
            We apply access controls intended to restrict child information to authorized users and service functions. When a parent deletes a child&apos;s profile, the child&apos;s Stars, Goals, and associated activity are removed from the active application immediately. Records in backups, security logs, or legally required records may follow separate retention arrangements. Information is retained only as needed for legitimate service and legal purposes, subject to applicable law. See our <Link href="/deletion-policy" className="text-brand-sky underline font-semibold">Account &amp; Data Deletion Policy</Link> for details.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-brand-navy dark:text-white">8. Changes and contact</h2>
          <p>
            We may revise this notice as child features or applicable requirements change. We will provide additional parental notice or request consent where required.
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
