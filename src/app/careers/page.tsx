import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CtaBand } from '@/components/CtaBand';

export const metadata: Metadata = {
  title: 'Careers | AgentPress',
  description: 'Join AgentPress and help build the value-aware agentic operating system for B2B revenue teams.',
};

const openRoles = [
  {
    title: 'Founding AI GTM Engineer',
    href: '/careers/founding-ai-gtm-engineer',
    team: 'GTM',
    location: 'Remote, anywhere',
    summary: 'Build, run, and improve the AI-native system that gets the right buyers onto the sales calendar.',
  },
  {
    title: 'Full-Stack AI Engineer',
    href: '/careers/full-stack-ai-engineer',
    team: 'Engineering',
    location: 'Remote (US & Canada only)',
    summary: 'Build full-stack product, AI agent orchestration systems, embeddable widgets, and enterprise integrations.',
  },
];

const principles = [
  {
    icon: '/v3/assets/icon-layers.svg',
    title: 'Value-first',
    description: 'Every agent is grounded in business impact. We are building around quantified value, not generic automation. Every workflow should help revenue teams prove, deliver, or expand business impact.',
  },
  {
    icon: '/v3/assets/icon-pyramid.svg',
    title: 'AI-native',
    description: 'We use the tools we believe in. We expect the team to build with modern AI systems, automate repetitive work, and use agents to move faster without lowering the bar.',
  },
  {
    icon: '/v3/assets/icon-venn.svg',
    title: 'Small team',
    description: 'Ownership matters here. AgentPress is still early. The right people can own meaningful systems end to end and shape how the company operates.',
  },
];

export default function CareersOverviewPage() {
  return (
    <div className="marketing-page careers-page">
      <header className="page-hero site-container">
        <span className="eyebrow">Careers</span>
        <h1>Build the company that helps revenue teams sell on value</h1>
        <p>AgentPress is building a platform to help B2B revenue teams autonomously win deals and drive expansion revenue with agents grounded in a unified value model.</p>
      </header>

      <section className="page-section careers-roles">
        <div className="site-container">
          <span className="eyebrow">Open Roles</span>
          <div className="career-role-list">
            {openRoles.map((role) => (
              <Link className="career-role-card" href={role.href} key={role.href}>
                <div>
                  <div className="career-role-meta"><span>{role.team}</span><span>·</span><span>{role.location}</span></div>
                  <h2>{role.title}</h2>
                  <p>{role.summary}</p>
                </div>
                <strong>View role →</strong>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section alt careers-principles">
        <div className="site-container">
          <span className="eyebrow">How we work</span>
          <h2 className="page-section-title">We are looking for people who want to build systems, own outcomes, and use AI as a daily operating advantage.</h2>
          <div className="enterprise-grid">
            {principles.map((principle) => (
              <article key={principle.title}>
                <Image src={principle.icon} alt="" width={200} height={200} />
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section careers-about">
        <div className="site-container careers-about-grid">
          <div><span className="eyebrow">About AgentPress</span></div>
          <div>
            <h2>What AgentPress is about</h2>
            <p>We believe B2B revenue is broken because every touchpoint tells a different value story. Marketing says one thing, sales says another, business cases live in spreadsheets, and post-sales rarely proves what was promised.</p>
            <p>AgentPress is building the value-aware agentic operating system for revenue teams. Our agents help teams identify the right opportunities, engage buyers, build business cases, uncover expansion potential, support sales conversations, and move revenue forward with less manual work.</p>
            <Link href="/our-story">See our story →</Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </div>
  );
}
