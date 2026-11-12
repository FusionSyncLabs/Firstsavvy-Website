import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Terms of Use | First Savvy',
  description: 'First Savvy Terms of Use. Read our terms and conditions for using our website and applications.',
};

export default function TermsOfUsePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 pb-16 space-y-12">
      <div className="space-y-3 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-brand-sky">Legal Information</span>
        <h1 className="text-4xl font-serif font-bold text-brand-navy dark:text-white">Terms of Use</h1>
        <div className="text-xs text-slate-500">Last updated: November 12, 2026</div>
      </div>

      <div className="prose prose-slate dark:prose-invert max-w-none text-sm leading-relaxed space-y-8">
        <p className="text-base text-slate-700 dark:text-slate-200">
          These Terms of Use (&quot;Terms&quot;) govern your use of the FirstSavvy website and applications operated by <strong>First Savvy LLC</strong>, based in Eagle, Idaho, United States (&quot;FirstSavvy,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By creating an account or using the Services, you agree to these Terms and acknowledge our <Link href="/privacy" className="text-brand-sky underline font-semibold">Privacy Policy</Link>. If you do not agree, do not use the Services.
        </p>

        <section className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-brand-navy dark:text-white">1. About the Services</h2>
          <p>
            FirstSavvy provides software to help users organize financial information, view supported financial accounts, manage budgets, spending and goals, and coordinate household activities such as calendars, tasks, Stars, and rewards. Some features are part of a free beta, may be introduced in stages, or may change as the product develops. Features described as planned or coming soon are not guaranteed to be released by a particular date.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-brand-navy dark:text-white">2. Accounts and eligibility</h2>
          <p>
            An adult must create and manage the principal account. You agree to provide accurate information, protect your credentials, and promptly report unauthorized use. You are responsible for activity performed through your account to the extent permitted by law.
          </p>
          <p>
            A parent or authorized guardian creates and supervises each child profile and controls permitted login access. Children under 13 cannot independently register or create additional profiles from their login. Child participation is governed by the applicable household permissions, <Link href="/privacy" className="text-brand-sky underline">Privacy Policy</Link>, and <Link href="/children-privacy" className="text-brand-sky underline font-semibold">Children&apos;s Privacy Notice</Link>.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-brand-navy dark:text-white">3. Household access and permissions</h2>
          <p>
            A household may include members with different access levels. The household owner and other authorized adults control invitations and permissions. Do not invite someone or share information unless you are authorized to do so. Access to a shared household does not necessarily include access to each user&apos;s private financial or Vault information.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-brand-navy dark:text-white">4. Financial information and connected accounts</h2>
          <p>
            FirstSavvy may display data you enter and information obtained through authorized connections such as Plaid. Account coverage, balances, transaction dates, categories, and calculations may be delayed, inaccurate, or incomplete. You remain responsible for reviewing information against official financial institution records, particularly before making financial decisions.
          </p>
          <p>
            <strong>FirstSavvy is not a bank and does not hold customer deposits through its current financial-management Services.</strong> Connecting an account for data access does not, by itself, allow FirstSavvy to move money. Additional regulated services, if introduced, will be governed by separate applicable terms. For complete details, see our <Link href="/financial-disclosure" className="text-brand-sky underline font-semibold">Financial Data &amp; Connected Accounts Disclosure</Link>.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-brand-navy dark:text-white">5. No professional financial advice</h2>
          <p>
            Information, calculations, budgets, goals, and investment displays provided through FirstSavvy are tools for personal organization and general information. They are not individualized legal, tax, accounting, credit, investment, or financial advice. Consult qualified professionals and official institution records where appropriate.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-brand-navy dark:text-white">6. Stars, rewards, and household features</h2>
          <p>
            Stars, rewards, chores, and related features help families manage their own activities and incentives. Any rewards established by household members are the responsibility of the adults offering them. Stars do not represent money owed by FirstSavvy, and FirstSavvy is not responsible for fulfilling privately arranged household rewards.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-brand-navy dark:text-white">7. Your information and our intellectual property</h2>
          <p>
            You retain rights to information and content you provide, subject to rights held by others. You authorize FirstSavvy to process that information as needed to provide and secure the Services, consistent with our Privacy Policy and your permissions. FirstSavvy and its licensors retain rights in the software, branding, interfaces, and related materials. You may not copy, resell, reverse engineer, or misuse the Services except as applicable law permits.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-brand-navy dark:text-white">8. Acceptable use</h2>
          <p>
            Do not use the Services to violate laws, access accounts without permission, interfere with security, attempt to obtain other users&apos; information, submit malicious code, or disrupt the platform. We may restrict access where reasonably necessary to protect users or the Services, consistent with applicable law.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-brand-navy dark:text-white">9. Beta availability and changes</h2>
          <p>
            FirstSavvy is currently offered as a <strong>free beta</strong>. During beta, features may be revised, unavailable, interrupted, or removed. The <Link href="/beta-terms" className="text-brand-sky underline font-semibold">Beta Testing Terms</Link> provide additional information. We may update features, policies, and service conditions, and will communicate material changes as required by law.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-brand-navy dark:text-white">10. Future subscriptions</h2>
          <p>
            No paid subscription is required for the current free beta. If paid plans are introduced, we will disclose applicable pricing, billing frequency, cancellation terms, and other material conditions before a user authorizes a purchase. Participation in the free beta will not itself authorize future recurring charges.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-brand-navy dark:text-white">11. Account closure and data requests</h2>
          <p>
            You may request account closure or deletion of information as described in our <Link href="/deletion-policy" className="text-brand-sky underline font-semibold">Account &amp; Data Deletion Policy</Link>. Closing a personal account or removing a financial profile may affect other connected features or shared household access. We may suspend or terminate access for material violations, security risks, or legal requirements, subject to applicable law.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-brand-navy dark:text-white">12. Service limitations</h2>
          <p>
            We aim to provide reliable Services, but cannot guarantee uninterrupted access, error-free data, or availability of external financial connections. To the extent permitted by applicable law, the Services are provided without warranties beyond those expressly required by law. Nothing in these Terms limits rights or remedies that cannot legally be waived.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-brand-navy dark:text-white">13. Governing law and resolving concerns</h2>
          <p>
            These Terms are governed by the laws of the State of Idaho, except where mandatory consumer protections require otherwise. If you have a concern, please contact us first at <a href="mailto:support@firstsavvy.com" className="text-brand-sky underline font-semibold">support@firstsavvy.com</a> so we can attempt to resolve it directly. Nothing in this section prevents you from exercising rights or bringing claims that applicable law protects.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-brand-navy dark:text-white">14. Updates and contact</h2>
          <p>
            We may revise these Terms when the Services or legal requirements change. We will publish revised Terms with an updated date and provide notice where legally required. Continued use after valid notice may constitute acceptance to the extent permitted by law.
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
