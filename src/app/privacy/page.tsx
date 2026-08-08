import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AgentPress Privacy Policy | AgentPress',
};

export default function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold tracking-tight text-ap-dark-blue mb-2">AgentPress Privacy Policy</h1>
      <p className="text-sm text-muted-foreground mb-12">Last updated: August 8, 2026</p>

      <div className="prose prose-slate max-w-none [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-ap-dark-blue [&_h2]:mt-10 [&_h2]:mb-4 [&_p]:text-muted-foreground [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:text-muted-foreground [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mb-1">
        <h2>1. Introduction</h2>
        <p>
          AgentPress, Inc. (&ldquo;AgentPress,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
        </p>

        <h2>2. Information We Collect</h2>
        <p>We may collect the following types of information:</p>
        <ul>
          <li><strong>Account Information:</strong> Name, email address, company name, and job title when you create an account or request a demo.</li>
          <li><strong>Usage Data:</strong> Information about how you interact with our services, including pages visited, features used, and session duration.</li>
          <li><strong>CRM Data:</strong> When you connect third-party integrations (e.g., Salesforce, HubSpot, Gong), we access data as authorized by you to provide our services.</li>
          <li><strong>Google User Data:</strong> When you connect Gmail or Google Calendar, we access the Google user data authorized by the exact OAuth scopes described in Section 3.</li>
          <li><strong>Device Information:</strong> Browser type, operating system, IP address, and device identifiers.</li>
          <li><strong>Communications:</strong> Information you provide when contacting our support or sales teams.</li>
        </ul>

        <h2>3. Google Workspace API Data</h2>
        <p>
          This section applies to Google user data that AgentPress receives through Google Workspace APIs, including raw data and data aggregated, anonymized, or derived from it.
        </p>
        <p className="rounded-xl border border-ap-blue/20 bg-ap-blue/5 px-5 py-4 font-semibold text-ap-dark-blue">
          AgentPress&apos;s use and transfer of information received from Google APIs to any other app will adhere to the <a href="https://developers.google.com/terms/api-services-user-data-policy" className="text-ap-blue hover:underline">Google API Services User Data Policy</a>, including the Limited Use requirements.
        </p>

        <p><strong>Google OAuth scopes and user-facing features</strong></p>
        <div className="mb-6 overflow-x-auto rounded-xl border border-border">
          <table className="w-full min-w-[680px] border-collapse text-left text-sm">
            <thead className="bg-slate-50 text-ap-dark-blue">
              <tr>
                <th className="border-b border-border px-4 py-3 font-semibold">Exact scope</th>
                <th className="border-b border-border px-4 py-3 font-semibold">Access granted</th>
                <th className="border-b border-border px-4 py-3 font-semibold">AgentPress feature enabled</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="align-top">
                <td className="border-b border-border px-4 py-3 font-mono text-xs text-foreground">https://www.googleapis.com/auth/gmail.readonly</td>
                <td className="border-b border-border px-4 py-3">Read-only access to Gmail messages, threads, labels, metadata, and configured send-as identities and signatures. Does not permit sending, modifying, or deleting anything in the mailbox.</td>
                <td className="border-b border-border px-4 py-3">Import opportunity-related email threads so each opportunity has a complete activity record, provide the agent with conversation context for drafting, and append the user&apos;s configured Gmail signature to AgentPress-created drafts.</td>
              </tr>
              <tr className="align-top">
                <td className="border-b border-border px-4 py-3 font-mono text-xs text-foreground">https://www.googleapis.com/auth/gmail.compose</td>
                <td className="border-b border-border px-4 py-3">Create, read, update, and delete drafts; send messages and drafts. Does not permit reading, modifying, or deleting existing mailbox contents.</td>
                <td className="border-b border-border px-4 py-3">Create and manage Gmail drafts for review, send a draft only after explicit human approval, and remove an AgentPress-created draft when rolling back a failed draft creation.</td>
              </tr>
              <tr className="align-top">
                <td className="px-4 py-3 font-mono text-xs text-foreground">https://www.googleapis.com/auth/calendar.events</td>
                <td className="px-4 py-3">View and manage events on the user&apos;s calendars. Does not permit creating or deleting calendars, or changing calendar sharing settings.</td>
                <td className="px-4 py-3">Import recent and upcoming events, match sales meetings to opportunities, and create or edit events when requested, subject to approval settings. An approved undo may delete an event AgentPress created.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p><strong>Limited Use commitments</strong></p>
        <ul>
          <li>These requirements apply to the raw data obtained from the scopes listed above and to data aggregated, anonymized, or derived from them.</li>
          <li>We limit our use of this data to providing or improving user-facing features that are visible and prominent in the AgentPress interface.</li>
          <li>We do not transfer this data, except: to provide or improve those user-facing features, and only with your consent; for security purposes, such as investigating abuse; to comply with applicable laws; or as part of a merger, acquisition, or sale of assets after obtaining your explicit prior consent.</li>
          <li>We do not allow humans to read this data, unless: we have obtained and documented your explicit consent to view specific messages, files, or other data; it is necessary for security purposes; it is necessary to comply with applicable laws; or the data has been aggregated and anonymized and is used for internal operations in accordance with applicable privacy and other jurisdictional legal requirements.</li>
          <li>We do not transfer or sell this data to advertising platforms or data brokers, and we do not use it for serving advertisements, including retargeting, personalized, or interest-based advertising.</li>
          <li>We do not transfer, sell, or use this data to determine credit-worthiness or for lending purposes.</li>
          <li>We do not use this data to create, train, or improve any machine learning or artificial intelligence model, beyond a model personalized to you for the specific features described above.</li>
        </ul>

        <h2>4. How We Use Your Information</h2>
        <p>We use your information to:</p>
        <ul>
          <li>Provide, operate, and maintain our AI agent services.</li>
          <li>Generate business value cases and reports on your behalf.</li>
          <li>Improve and personalize your experience.</li>
          <li>Communicate with you about updates, support, and promotional offers. Google user data is not used for promotional communications.</li>
          <li>Analyze usage patterns to improve our products. Google user data is excluded from this usage analysis.</li>
          <li>Comply with legal obligations.</li>
        </ul>
        <p>
          Google user data is never used for advertising, retargeting, marketing measurement, or any other marketing purpose.
        </p>

        <h2>5. Data Sharing and Disclosure</h2>
        <p>We do not sell your personal data. We may share information with:</p>
        <ul>
          <li><strong>Service Providers:</strong> Third-party vendors who assist us in operating our services (e.g., hosting, analytics, payment processing). Google user data is transferred only as permitted in Section 3.</li>
          <li><strong>Integration Partners:</strong> Only the data necessary to provide connected integrations you have authorized.</li>
          <li><strong>Legal Requirements:</strong> When required by law, regulation, or legal process.</li>
          <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets. Google user data is transferred as part of such a transaction only after we obtain your explicit prior consent.</li>
        </ul>

        <h2>6. Data Security</h2>
        <p>
          We implement industry-standard security measures to protect your data, including encryption in transit and at rest, access controls, and regular security audits. However, no method of transmission over the Internet is 100% secure.
        </p>

        <h2>7. Data Retention</h2>
        <p>
          We retain your personal data for as long as your account is active or as needed to provide services. You may request deletion of your data at any time by contacting us.
        </p>
        <p>
          You may disconnect Gmail or Google Calendar from the AgentPress integrations page at any time. Disconnecting stops new access to that Google account. To request deletion of Google user data and data derived from it, contact us using the address in Section 13.
        </p>

        <h2>8. Your Rights</h2>
        <p>Depending on your jurisdiction, you may have the right to:</p>
        <ul>
          <li>Access the personal data we hold about you.</li>
          <li>Request correction of inaccurate data.</li>
          <li>Request deletion of your data.</li>
          <li>Opt out of marketing communications.</li>
          <li>Data portability.</li>
        </ul>

        <h2>9. Cookies and Tracking</h2>
        <p>
          We use cookies and similar technologies to enhance your experience, analyze traffic, and serve relevant content. You can manage cookie preferences through your browser settings.
        </p>
        <p>
          These technologies are not applied to Google user data, and Google user data is never used for advertising, retargeting, or marketing measurement.
        </p>

        <h2>10. Third-Party Links</h2>
        <p>
          Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites.
        </p>

        <h2>11. Children&apos;s Privacy</h2>
        <p>
          Our services are not directed to individuals under the age of 18. We do not knowingly collect personal data from children.
        </p>

        <h2>12. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of material changes by posting the updated policy on this page with a revised &ldquo;Last updated&rdquo; date.
        </p>

        <h2>13. Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy, including requests to delete Google user data, please contact us at <a href="mailto:privacy@agent.press" className="text-ap-blue hover:underline">privacy@agent.press</a>.
        </p>
      </div>
    </div>
  );
}
