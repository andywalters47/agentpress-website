import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | AgentPress',
};

export default function TermsOfService() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold tracking-tight text-ap-dark-blue mb-2">Terms of Service</h1>
      <p className="text-sm text-muted-foreground mb-12">Last updated: February 16, 2026</p>

      <div className="prose prose-slate max-w-none [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-ap-dark-blue [&_h2]:mt-10 [&_h2]:mb-4 [&_p]:text-muted-foreground [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:text-muted-foreground [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mb-1">
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using the services provided by AgentPress Labs, Inc. (&ldquo;AgentPress,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), including our website, AI agents, and related tools (collectively, the &ldquo;Services&rdquo;), you agree to be bound by these Terms of Service. If you do not agree, do not use our Services.
        </p>

        <h2>2. Description of Services</h2>
        <p>
          AgentPress provides AI-powered agents and tools designed to help revenue teams generate business value cases, automate value engineering workflows, and integrate with CRM and revenue intelligence platforms. Our Services include but are not limited to the Business Value Agent, AI SDR, Team Copilot, Deployment Planner, and Support Agent.
        </p>

        <h2>3. Eligibility</h2>
        <p>
          You must be at least 18 years old and have the legal authority to enter into these Terms on behalf of yourself or the organization you represent. By using our Services, you represent and warrant that you meet these requirements.
        </p>

        <h2>4. Account Registration</h2>
        <p>
          To access certain features, you may need to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use.
        </p>

        <h2>5. Acceptable Use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Use the Services for any unlawful purpose or in violation of any applicable laws.</li>
          <li>Attempt to reverse engineer, decompile, or disassemble any part of the Services.</li>
          <li>Interfere with or disrupt the integrity or performance of the Services.</li>
          <li>Use the Services to transmit any malicious code or harmful content.</li>
          <li>Resell, sublicense, or redistribute access to the Services without written consent.</li>
          <li>Use the Services to generate misleading, fraudulent, or deceptive content.</li>
        </ul>

        <h2>6. Your Data</h2>
        <p>
          You retain all ownership rights to the data you provide to AgentPress (&ldquo;Your Data&rdquo;). By using our Services, you grant us a limited, non-exclusive license to process Your Data solely to provide and improve the Services. We will handle Your Data in accordance with our <a href="/privacy" className="text-ap-blue hover:underline">Privacy Policy</a>.
        </p>

        <h2>7. AI-Generated Content</h2>
        <p>
          Our Services use artificial intelligence to generate business value cases, reports, and other outputs (&ldquo;Generated Content&rdquo;). While we strive for accuracy, Generated Content is provided for informational purposes and should be reviewed by qualified professionals before being used in business decisions. You are responsible for verifying the accuracy of any Generated Content.
        </p>

        <h2>8. Intellectual Property</h2>
        <p>
          All rights, title, and interest in and to the Services, including all software, algorithms, designs, and documentation, are and remain the exclusive property of AgentPress. These Terms do not grant you any rights to our trademarks, logos, or branding.
        </p>

        <h2>9. Third-Party Integrations</h2>
        <p>
          Our Services may integrate with third-party platforms such as Salesforce, HubSpot, and Gong. Your use of these integrations is subject to the respective third-party terms and policies. AgentPress is not responsible for the availability, accuracy, or practices of third-party services.
        </p>

        <h2>10. Payment and Billing</h2>
        <p>
          If you subscribe to a paid plan, you agree to pay all fees associated with your selected plan. Fees are non-refundable except as required by law or as otherwise stated in your subscription agreement. We reserve the right to change pricing with reasonable notice.
        </p>

        <h2>11. Termination</h2>
        <p>
          Either party may terminate this agreement at any time. We may suspend or terminate your access if you breach these Terms. Upon termination, your right to use the Services ceases immediately. We will make Your Data available for export for a reasonable period following termination.
        </p>

        <h2>12. Disclaimer of Warranties</h2>
        <p>
          The Services are provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties of any kind, whether express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
        </p>

        <h2>13. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, AgentPress shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly. Our total liability shall not exceed the amount you paid to AgentPress in the twelve months preceding the claim.
        </p>

        <h2>14. Indemnification</h2>
        <p>
          You agree to indemnify and hold harmless AgentPress and its officers, directors, employees, and agents from any claims, damages, or expenses arising from your use of the Services or violation of these Terms.
        </p>

        <h2>15. Governing Law</h2>
        <p>
          These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, without regard to its conflict of law provisions.
        </p>

        <h2>16. Changes to These Terms</h2>
        <p>
          We may update these Terms from time to time. We will notify you of material changes by posting the updated Terms on this page. Your continued use of the Services after changes take effect constitutes acceptance of the revised Terms.
        </p>

        <h2>17. Contact Us</h2>
        <p>
          If you have questions about these Terms, please contact us at <a href="mailto:legal@agentpress.ai" className="text-ap-blue hover:underline">legal@agentpress.ai</a>.
        </p>
      </div>
    </div>
  );
}
