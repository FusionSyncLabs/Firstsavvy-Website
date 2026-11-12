import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Lock, Eye, AlertCircle, FileText, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy | First Savvy',
  description: 'First Savvy Privacy Policy. Learn how we handle, protect, and respect your personal and financial information.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 pb-16 space-y-12">
      <div className="space-y-3 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-brand-sky">Legal Information</span>
        <h1 className="text-4xl font-serif font-bold text-brand-navy dark:text-white">Privacy Policy</h1>
        <div className="text-xs text-slate-500">
          Last updated: November 12, 2026
        </div>
      </div>

      <div className="p-5 rounded-2xl bg-sky-50 dark:bg-sky-950/40 border border-brand-sky/20 flex items-start gap-3">
        <ShieldCheck className="w-6 h-6 text-brand-sky shrink-0 mt-0.5" />
        <div className="space-y-1">
          <div className="font-serif font-bold text-base text-brand-navy dark:text-white">First Savvy Privacy Commitment</div>
          <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            First Savvy LLC, based in Eagle, Idaho, provides software for personal financial management, household coordination, and family activities. We take privacy seriously, isolate child accounts, and never sell personal or financial data.
          </div>
        </div>
      </div>

      <div className="prose prose-slate dark:prose-invert max-w-none text-sm leading-relaxed space-y-8">
        <p className="text-base text-slate-700 dark:text-slate-200">
          First Savvy LLC (&quot;FirstSavvy,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), based in Eagle, Idaho, United States, provides software for personal financial management, household coordination, and family activities. This Privacy Policy explains what information we handle when you use our websites, web application, and mobile applications (collectively, the &quot;Services&quot;). For questions or privacy requests, contact <a href="mailto:support@firstsavvy.com" className="text-brand-sky underline font-semibold">support@firstsavvy.com</a>.
        </p>

        <section className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-brand-navy dark:text-white">1. Services covered</h2>
          <p>
            This policy applies to FirstSavvy&apos;s public website at <a href="https://firstsavvy.com" className="text-brand-sky underline">https://firstsavvy.com</a>, its web application at <a href="https://app.firstsavvy.com" className="text-brand-sky underline">https://app.firstsavvy.com</a>, its mobile applications when available, and related support communications. Separate websites, financial institutions, and connected service providers may have their own privacy practices.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-brand-navy dark:text-white">2. Information we collect</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Account information:</strong> Your name, email address, authentication and verification records, account preferences, household memberships, invitations, and communications with us.
            </li>
            <li>
              <strong>Financial information:</strong> Information you enter or authorize us to retrieve, such as financial account names and types, balances, transaction records, categories, budgets, goals, liabilities, investment information, and other financial entries. The specific information available depends on your chosen features and financial institutions.
            </li>
            <li>
              <strong>Household and child information:</strong> Details provided by authorized adults and household members, including relationships, roles, tasks, calendars, meals, trips, Stars, rewards, and goals. Some information may also be generated when a child uses parent-authorized features. See our <Link href="/children-privacy" className="text-brand-sky underline font-semibold">Children&apos;s Privacy Notice</Link>.
            </li>
            <li>
              <strong>Information placed in My Secure Vault:</strong> Credentials, notes, documents, or other records you choose to save using available Vault features.
            </li>
            <li>
              <strong>Device and operational information:</strong> Browser or device details, IP address, sign-in activity, security events, diagnostic logs, session information, and essential cookie or similar storage data used to run the Services.
            </li>
            <li>
              <strong>Communications:</strong> Messages to support, service inquiries, and information you provide when reporting problems or giving feedback.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-brand-navy dark:text-white">3. How we use information</h2>
          <p>
            We use information to create and secure accounts; connect supported financial accounts; display and organize financial information; calculate budgets and goals; operate household features; administer roles and permissions; send account, verification, and service messages; address errors; prevent misuse; fulfill requests; and comply with applicable laws. We may use operational information to maintain and improve the reliability and usability of the Services.
          </p>
          <p>
            Household membership does not automatically grant access to every financial record. Visibility is determined by the permissions and profile settings associated with each account and household.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-brand-navy dark:text-white">4. Financial account connections</h2>
          <p>
            When you choose to connect a supported bank, credit card, or investment account, we use <strong>Plaid</strong> to facilitate authorized connectivity. Depending on the connection, FirstSavvy may receive balances, transactions, account details, or investment-related information you permit through the connection process. Plaid has its own privacy practices, available at <a href="https://plaid.com/legal/" target="_blank" rel="noopener noreferrer" className="text-brand-sky underline">https://plaid.com/legal/</a>.
          </p>
          <p>
            You may disconnect an account using available controls or request assistance from support. Disconnection generally stops supported future synchronization but does not necessarily delete financial records already imported into FirstSavvy. See our <Link href="/deletion-policy" className="text-brand-sky underline font-semibold">Account &amp; Data Deletion Policy</Link> for information about deletion requests.
          </p>
          <p>
            Connecting an account to FirstSavvy does not, by itself, authorize us to transfer or hold your funds.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-brand-navy dark:text-white">5. When information is shared</h2>
          <p>
            We share information as necessary to provide the Services, including with providers performing secure application operations, data storage, account verification, financial connectivity, delivery of email or text messages, technical support, and security functions. They receive information appropriate to the services they perform and are subject to applicable contractual and legal obligations. Plaid supports financial account connectivity as described above.
          </p>
          <p>
            We may also disclose information at your direction, with authorized household members according to your permissions, as required by applicable law, to respond to legitimate legal requests, to protect rights and safety, or in connection with a business transaction subject to applicable safeguards. Information you choose to share with another household member is available according to the permissions you assign.
          </p>
          <p>
            We do not currently operate a dedicated website analytics platform. If we introduce optional tracking or advertising technologies, we will update the relevant disclosures and provide legally required choices before using them.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-brand-navy dark:text-white">6. Children&apos;s information</h2>
          <p>
            Child profiles are created and managed by parents or authorized guardians. Children under 13 cannot register independently or create additional profiles from their logins. Parents control child login access and permissions. Child-facing use may involve task submissions, goals, rewards, activity records, and technical information necessary for the feature to operate. For details about parental rights and applicable consent requirements, read our <Link href="/children-privacy" className="text-brand-sky underline font-semibold">Children&apos;s Privacy Notice</Link>.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-brand-navy dark:text-white">7. Security</h2>
          <p>
            We use technical and organizational measures intended to protect information, including access permissions and account-verification controls. Two-factor authentication is currently offered as an optional account security feature. Security practices vary by feature, and no service can guarantee complete protection. Please safeguard your login credentials and contact us promptly if you suspect unauthorized access.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-brand-navy dark:text-white">8. Retention and deletion</h2>
          <p>
            When an authorized parent deletes a child profile, the child profile and its associated Stars, Goals, and related activity are removed from the active application immediately. Separate backups or records maintained for security or legal purposes may follow different retention rules.
          </p>
          <p>
            When a financial profile is deleted, it is removed from the active application immediately. Related deleted financial-profile records remain on FirstSavvy&apos;s servers for <strong>30 days</strong>. Certain security, support, or legally required records may be retained separately where permitted or required by law. Deletion of an account and disconnection of a bank connection are different actions. Our <Link href="/deletion-policy" className="text-brand-sky underline font-semibold">Account &amp; Data Deletion Policy</Link> explains how to request deletion.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-brand-navy dark:text-white">9. Your choices and privacy rights</h2>
          <p>
            Subject to applicable law, you may request access to, correction of, a copy of, or deletion of personal information. You may also request information about relevant data practices and exercise other rights available in your jurisdiction. Parents or guardians may request review or deletion of a child&apos;s information and withdraw permission for further collection where applicable.
          </p>
          <p>
            Send requests to <a href="mailto:support@firstsavvy.com" className="text-brand-sky underline font-semibold">support@firstsavvy.com</a>. We may verify your identity or legal authority before acting and will respond in accordance with applicable law. You may manage available household permissions and financial connections through the application.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-brand-navy dark:text-white">10. Cookies and similar technologies</h2>
          <p>
            The Services may use essential cookies or similar browser storage for sign-in, session security, and preferences. We do not currently use a dedicated website analytics platform. See our <Link href="/cookies" className="text-brand-sky underline font-semibold">Cookie Policy &amp; Preferences</Link> for current practices and ways to manage browser settings.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-brand-navy dark:text-white">11. Changes</h2>
          <p>
            We may update this Privacy Policy to reflect changes to the Services, our practices, or legal requirements. The current version will be posted with an updated date, and we will provide additional notice where required.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-brand-navy dark:text-white">12. Contact</h2>
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
