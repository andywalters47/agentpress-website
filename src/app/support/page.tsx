import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CtaBand } from '@/components/CtaBand';

export const metadata: Metadata = {
  title: 'Support | AgentPress',
  description: 'Get help with your AgentPress workspace, integrations, and deal workflows.',
};

const supportOptions = [
  {
    icon: '/v3/assets/icon-layers.svg',
    eyebrow: 'Product support',
    title: 'Get help from our team',
    body: 'Questions about your workspace, an integration, or an active deal workflow? Send us the details and we will help you get unstuck.',
    label: 'Email support',
    href: 'mailto:support@agent.press',
  },
  {
    icon: '/v3/assets/icon-pyramid.svg',
    eyebrow: 'Documentation',
    title: 'Find the answer in our docs',
    body: 'Browse setup guides, product walkthroughs, integration references, and practical instructions for working with AgentPress.',
    label: 'Visit documentation',
    href: 'https://docs.agent.press/',
  },
  {
    icon: '/v3/assets/icon-venn.svg',
    eyebrow: 'Sales & onboarding',
    title: 'Plan your rollout',
    body: 'Talk with us about bringing AgentPress to your team, connecting your systems, or expanding an existing deployment.',
    label: 'Schedule Demo',
    href: 'https://calendar.app.google/AwUNqYVrSpUf1XeK8',
  },
];

const faqs = [
  {
    question: 'What should I include in a support request?',
    answer: 'Include your workspace name, the part of AgentPress you were using, what you expected to happen, and what happened instead. Screenshots are helpful, but please remove passwords, access tokens, and other sensitive information.',
  },
  {
    question: 'Can you help with integrations?',
    answer: 'Yes. We can help troubleshoot CRM, email, calendar, call-recording, and collaboration integrations, including connection and data-sync questions.',
  },
  {
    question: 'How do I request deletion of my data?',
    answer: 'Email privacy@agent.press with the workspace and account details needed to locate your data. Our privacy policy explains the available deletion and access rights in more detail.',
  },
  {
    question: 'Where should I report a security concern?',
    answer: 'Email support@agent.press with “Security” in the subject line. Do not include credentials or sensitive customer data in the initial message; our team will provide a secure follow-up channel.',
  },
];

export default function SupportPage() {
  return (
    <div className="marketing-page support-page">
      <header className="page-hero site-container support-hero">
        <span className="eyebrow">Support</span>
        <h1>How can we help?</h1>
        <p>Get product help, find implementation guidance, or talk with the team about your AgentPress rollout.</p>
      </header>

      <section className="support-options site-container" aria-label="Support options">
        {supportOptions.map((option) => {
          const external = option.href.startsWith('http');
          return (
            <article className="support-card" key={option.title}>
              <Image src={option.icon} alt="" width={180} height={180} />
              <span className="eyebrow">{option.eyebrow}</span>
              <h2>{option.title}</h2>
              <p>{option.body}</p>
              <Link href={option.href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}>
                {option.label} →
              </Link>
            </article>
          );
        })}
      </section>

      <section className="support-details">
        <div className="site-container support-details-grid">
          <div>
            <span className="eyebrow">Before you write</span>
            <h2>Help us get you to the answer faster</h2>
            <p>Share the workspace, affected opportunity, relevant integration, and the last action you took. We will use that context to route your request to the right person.</p>
          </div>
          <div className="support-checklist">
            <div><span>01</span><strong>Describe the goal</strong><p>Tell us what you were trying to accomplish.</p></div>
            <div><span>02</span><strong>Share what happened</strong><p>Include the error or unexpected behavior you saw.</p></div>
            <div><span>03</span><strong>Add useful context</strong><p>Workspace, browser, integration, and approximate time all help.</p></div>
          </div>
        </div>
      </section>

      <section className="faq-section support-faq">
        <div className="site-container faq-grid">
          <div>
            <h2>Support<br />Questions</h2>
            <p>Quick answers before you contact the team.</p>
            <strong>Need a person?</strong>
            <Link href="mailto:support@agent.press">Email support →</Link>
          </div>
          <div>
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}<span>+</span></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBand heading="Need help with something else?" buttonLabel="Email support" href="mailto:support@agent.press" />
    </div>
  );
}
