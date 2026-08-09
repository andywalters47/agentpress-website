import Image from 'next/image';
import Link from 'next/link';
import { CtaBand } from '@/components/CtaBand';
import { DealTimeline } from '@/components/DealTimeline';
import { ScrollPrelude } from '@/components/ScrollPrelude';

const featurePanels = [
  {
    number: '01',
    title: 'Shorter sales cycles',
    body: 'Enterprise deals do not stall during meetings. They stall in the days between them, waiting on a follow-up, a deck, or a business case nobody has had time to build. AgentPress closes those gaps while you are working other deals.',
    background: '/v3/assets/grad1.jpg',
    image: '/v3/assets/feature-1-art.svg',
    alt: 'Meeting prep view for an enterprise opportunity',
  },
  {
    number: '02',
    title: 'Excellence, every deal',
    body: 'Your strongest outcomes come from consistent preparation, sharp discovery, credible value, and disciplined follow-through. AgentPress turns those winning behaviors into a repeatable operating standard.',
    background: '/v3/assets/grad2.jpg',
    image: '/v3/assets/feature-2-screenshot.png',
    alt: 'Opportunity dashboard with foundations and recent documents',
  },
  {
    number: '03',
    title: 'More deals per rep',
    body: 'Selling into enterprise means a handful of accounts, each demanding real attention. When the work between meetings takes care of itself, the same team carries more of it.',
    background: '/v3/assets/grad3.jpg',
    image: '/v3/assets/feature-3-screenshot.png',
    alt: 'Pipeline overview with opportunity assessment',
  },
];

const integrationLogos = [
  ['salesforce', 'Salesforce'],
  ['hubspot', 'HubSpot'],
  ['gmail', 'Gmail'],
  ['calendar', 'Google Calendar'],
  ['outlook', 'Outlook'],
  ['slack', 'Slack'],
  ['fireflies-mark', 'Fireflies.ai'],
  ['confluence', 'Confluence'],
  ['gong', 'Gong'],
  ['granola', 'Granola'],
];

const enterpriseColumns = [
  {
    icon: '/v3/assets/icon-layers.svg',
    title: 'Buyer Collaboration & Value',
    color: '#814ade',
    items: ['Live Value Model', 'Value Hypothesis', 'Interactive Business Case', 'Meeting Deck Creation', 'Interactive Deal Room & Agent'],
  },
  {
    icon: '/v3/assets/icon-pyramid.svg',
    title: 'Rep Enablement & Execution',
    color: '#6c89ff',
    items: ['Pre-Call Roleplay', 'Post-Call Coaching & Scorecard', 'Full Email Management', 'Mutual Action Plans', 'Proactive Briefs & Alerts'],
  },
  {
    icon: '/v3/assets/icon-venn.svg',
    title: 'Deal Intelligence & Governance',
    color: '#2dc4a8',
    items: ['Meeting Prep', 'Discovery Questions', 'Stakeholder Mapping', 'Deal Health & Next-Best Action', 'Pipeline Command Center'],
  },
];

const certifications = [
  ['/v3/assets/badge-soc2.png', 'SOC 2', 'Certified'],
  ['/v3/assets/badge-iso.png', 'ISO 27001', 'In progress'],
  ['/v3/assets/badge-hipaa.png', 'HIPAA', 'In progress'],
  ['/v3/assets/badge-gdpr.png', 'GDPR', 'Compliant'],
];

const faqs = [
  ['What does AgentPress replace?', 'AgentPress sits across the tools you already use. It turns CRM, email, call, and calendar context into coordinated deal execution instead of asking sellers to maintain another system by hand.'],
  ['How quickly can a team get started?', 'Teams can connect their core systems and begin with live opportunities. The rollout is designed around the workflows and value language your sellers already use.'],
  ['Does AgentPress train on our data?', 'No. Customer data is isolated and is never used to train a model. AgentPress is SOC 2 Type II certified and designed for enterprise procurement.'],
  ['What results can we expect?', 'Teams typically see faster cycle times, higher win rates on qualified deals, and business cases buyers actually circulate.'],
];

function CheckList({ items, color = '#212121' }: { items: string[]; color?: string }) {
  return (
    <ul className="check-list">
      {items.map((item) => (
        <li key={item}><span style={{ background: color }}>✓</span>{item}</li>
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <div className="home-page">
      <ScrollPrelude />

      <DealTimeline />

      <section className="logo-wall">
        <div className="site-container">
          <p>SaaS teams selling into enterprise</p>
          <div className="logo-wall-lockup">
            <Image src="/v3/assets/logos.svg" alt="Anaconda, HiveMQ, LocalFalcon, and Advanse" width={780} height={110} />
            <Image className="quivly-logo" src="/v3/assets/quivly-logo.png" alt="Quivly" width={124} height={45} />
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="site-container feature-list">
          {featurePanels.map((feature, index) => (
            <article className={`feature-row${index % 2 ? ' reverse' : ''}`} key={feature.number}>
              <div className="feature-visual" style={{ backgroundImage: `url(${feature.background})` }}>
                <Image src={feature.image} alt={feature.alt} width={650} height={590} />
              </div>
              <div className="feature-copy">
                <span className="eyebrow">{feature.number}</span>
                <h2>{feature.title}</h2>
                <p>{feature.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="integrations-section">
        <div className="site-container centered-heading">
          <span className="eyebrow">Integrations</span>
          <h2>Connect what you already use</h2>
          <div className="integration-grid">
            {integrationLogos.map(([file, label]) => (
              <div className="integration-logo" key={file}>
                <Image src={`/v3/assets/logos/${file}.svg`} alt={label} width={98} height={52} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="enterprise-section">
        <div className="site-container">
          <span className="eyebrow">Built for enterprise</span>
          <h2 className="section-title enterprise-title">AgentPress was built around the way enterprise deals move, by people who&apos;ve run them.</h2>
          <div className="enterprise-grid">
            {enterpriseColumns.map((column) => (
              <article key={column.title}>
                <Image src={column.icon} alt="" width={200} height={200} />
                <h3>{column.title}</h3>
                <CheckList items={column.items} color={column.color} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="security-section">
        <div className="site-container security-row">
          <div>
            <span className="eyebrow">Security</span>
            <h2>AgentPress is built to pass procurement</h2>
            <p>SOC 2 Type II certified. Your data never trains a model.</p>
          </div>
          <div className="certifications">
            {certifications.map(([src, alt, label]) => (
              <div key={alt}>
                <Image src={src} alt={alt} width={64} height={64} />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="roles-section">
        <div className="site-container centered-heading">
          <span className="eyebrow">Roles</span>
          <h2>One system for the whole revenue team</h2>
          <p>Whether you&apos;re closing in three weeks or nine months</p>
          <div className="role-grid">
            <article>
              <h3>Sellers</h3>
              <p>The work between meetings takes care of itself. Prep before every call, follow-up drafted before you would have gotten to it, and materials your buyer can actually use.</p>
              <CheckList items={['Higher meeting conversion rates', 'Instant account research', 'Personalized outreach at scale']} />
            </article>
            <article>
              <h3>Sales managers</h3>
              <p>See which deals are moving and which have gone quiet, without chasing anyone for an update. Every rep executes at the same standard.</p>
              <CheckList items={['Accelerate procurement cycles', 'Empower champions with ROI data', 'Standardize business case quality']} />
            </article>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="site-container faq-grid">
          <div>
            <h2>Frequently<br />Asked Questions</h2>
            <p>Here are answers to common questions about us.</p>
            <strong>Still have questions?</strong>
            <Link href="https://calendar.app.google/AwUNqYVrSpUf1XeK8" target="_blank" rel="noreferrer">Schedule a call →</Link>
          </div>
          <div>
            {faqs.map(([question, answer]) => (
              <details key={question}>
                <summary>{question}<span>+</span></summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </div>
  );
}
