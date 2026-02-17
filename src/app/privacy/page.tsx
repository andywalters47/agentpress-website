import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | AgentPress',
};

export default function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold tracking-tight text-ap-dark-blue mb-2">Privacy Policy</h1>
      <p className="text-sm text-muted-foreground mb-12">Last updated: February 16, 2026</p>

      <div className="prose prose-slate max-w-none [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-ap-dark-blue [&_h2]:mt-10 [&_h2]:mb-4 [&_p]:text-muted-foreground [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:text-muted-foreground [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mb-1">
        <h2>1. Introduction</h2>
        <p>
          AgentPress Labs, Inc. (&ldquo;AgentPress,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
        </p>

        <h2>2. Information We Collect</h2>
        <p>We may collect the following types of information:</p>
        <ul>
          <li><strong>Account Information:</strong> Name, email address, company name, and job title when you create an account or request a demo.</li>
          <li><strong>Usage Data:</strong> Information about how you interact with our services, including pages visited, features used, and session duration.</li>
          <li><strong>CRM Data:</strong> When you connect third-party integrations (e.g., Salesforce, HubSpot, Gong), we access data as authorized by you to provide our services.</li>
          <li><strong>Device Information:</strong> Browser type, operating system, IP address, and device identifiers.</li>
          <li><strong>Communications:</strong> Information you provide when contacting our support or sales teams.</li>
        </ul>

        <h2>3. How We Use Your Information</h2>
        <p>We use your information to:</p>
        <ul>
          <li>Provide, operate, and maintain our AI agent services.</li>
          <li>Generate business value cases and reports on your behalf.</li>
          <li>Improve and personalize your experience.</li>
          <li>Communicate with you about updates, support, and promotional offers.</li>
          <li>Analyze usage patterns to improve our products.</li>
          <li>Comply with legal obligations.</li>
        </ul>

        <h2>4. Data Sharing and Disclosure</h2>
        <p>We do not sell your personal data. We may share information with:</p>
        <ul>
          <li><strong>Service Providers:</strong> Third-party vendors who assist us in operating our services (e.g., hosting, analytics, payment processing).</li>
          <li><strong>Integration Partners:</strong> Only the data necessary to provide connected integrations you have authorized.</li>
          <li><strong>Legal Requirements:</strong> When required by law, regulation, or legal process.</li>
          <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets.</li>
        </ul>

        <h2>5. Data Security</h2>
        <p>
          We implement industry-standard security measures to protect your data, including encryption in transit and at rest, access controls, and regular security audits. However, no method of transmission over the Internet is 100% secure.
        </p>

        <h2>6. Data Retention</h2>
        <p>
          We retain your personal data for as long as your account is active or as needed to provide services. You may request deletion of your data at any time by contacting us.
        </p>

        <h2>7. Your Rights</h2>
        <p>Depending on your jurisdiction, you may have the right to:</p>
        <ul>
          <li>Access the personal data we hold about you.</li>
          <li>Request correction of inaccurate data.</li>
          <li>Request deletion of your data.</li>
          <li>Opt out of marketing communications.</li>
          <li>Data portability.</li>
        </ul>

        <h2>8. Cookies and Tracking</h2>
        <p>
          We use cookies and similar technologies to enhance your experience, analyze traffic, and serve relevant content. You can manage cookie preferences through your browser settings.
        </p>

        <h2>9. Third-Party Links</h2>
        <p>
          Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites.
        </p>

        <h2>10. Children&apos;s Privacy</h2>
        <p>
          Our services are not directed to individuals under the age of 18. We do not knowingly collect personal data from children.
        </p>

        <h2>11. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of material changes by posting the updated policy on this page with a revised &ldquo;Last updated&rdquo; date.
        </p>

        <h2>12. Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy, please contact us at <a href="mailto:privacy@agentpress.ai" className="text-ap-blue hover:underline">privacy@agentpress.ai</a>.
        </p>
      </div>
    </div>
  );
}
