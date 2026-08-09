import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pricing | AgentPress',
  description: 'Simple pricing for enterprise sales teams.',
};

const proFeatures = [
  'Access for everyone at your company',
  'Proactive deal monitoring and next-action execution',
  'Meeting prep, roleplays, and post-call capture',
  'Deal rooms, business cases, and value models',
  'White-glove CRM migration',
];

const comparisonGroups = [
  {
    title: 'Workspace',
    rows: [['Seats', 'Up to 3', 'Unlimited'], ['Access seats', '✓', '✓'], ['Records', 'Up to 30,000', 'Custom']],
  },
  {
    title: 'Core CRM',
    rows: [['Automatic record creation', '✓', '✓'], ['Continuous record updates', '✓', '✓'], ['Custom properties', '✓', '✓'], ['Pipeline management', '✓', '✓'], ['Custom objects and relationships', '—', '✓']],
  },
  {
    title: 'Deal execution',
    rows: [['Proactive briefs and alerts', '—', '✓'], ['Meeting prep', '—', '✓'], ['Post-call capture', '—', '✓'], ['Pre-call roleplay', '—', '✓'], ['Mutual action plans', '—', '✓'], ['Stakeholder mapping', '—', '✓']],
  },
  {
    title: 'Buyer-facing assets',
    rows: [['Meeting deck creation', '—', '✓'], ['Value model', '—', '✓'], ['Value hypothesis', '—', '✓'], ['Interactive business case', '—', '✓'], ['Interactive deal room', '—', '✓']],
  },
  {
    title: 'Platform and security',
    rows: [['API access', '—', '✓'], ['SSO', '—', '✓'], ['Advanced permissions', '—', '✓'], ['SOC 2 Type II', '✓', '✓'], ['Migration services', '—', '✓']],
  },
];

const badges = [
  ['/v3/assets/badge-soc2.png', 'SOC 2', 'Certified'],
  ['/v3/assets/badge-iso.png', 'ISO 27001', 'In progress'],
  ['/v3/assets/badge-hipaa.png', 'HIPAA', 'In progress'],
  ['/v3/assets/badge-gdpr.png', 'GDPR', 'Compliant'],
];

export default function PricingPage() {
  return (
    <div className="marketing-page pricing-page">
      <header className="page-hero site-container">
        <span className="eyebrow">Pricing</span>
        <h1>Simple pricing for enterprise sales teams</h1>
        <p>Every plan is tailored to your team and includes access to AgentPress agents, deal rooms, and CRM integrations.</p>
      </header>

      <section className="pricing-plans site-container">
        <article className="pricing-card pricing-card-pro">
          <span className="pricing-label">Pro</span>
          <h2>Our full platform, with hands-on support from our team</h2>
          <div className="pricing-value">Custom</div>
          <p className="pricing-note">Annual plan · includes onboarding support and a dedicated team</p>
          <ul>{proFeatures.map((feature) => <li key={feature}><span>✓</span>{feature}</li>)}</ul>
          <Link className="button button-dark" href="https://calendar.app.google/AwUNqYVrSpUf1XeK8" target="_blank" rel="noreferrer">Book a demo</Link>
        </article>
        <article className="pricing-card">
          <span className="pricing-label starter">Starter</span>
          <h2>A preview of the platform for teams just getting started</h2>
          <div className="pricing-value">Let&apos;s talk</div>
          <p className="pricing-note">Flexible terms for smaller deployments</p>
          <div className="pricing-spacer" />
          <Link className="button button-mint" href="https://calendar.app.google/AwUNqYVrSpUf1XeK8" target="_blank" rel="noreferrer">Start now</Link>
        </article>
      </section>

      <section className="page-section seats-section">
        <div className="site-container seats-grid">
          <div>
            <span className="eyebrow">Seats and usage</span>
            <h2 className="page-section-title">Pay for seats, not seats you don&apos;t use</h2>
            <p>Usage is metered through a monthly pool of credits covering agent actions, queries, and automations.</p>
          </div>
          <div className="seat-types">
            <div><strong>Full seat</strong><span>Works deals, runs agents</span></div>
            <div><strong>Capture seat</strong><span>Records, syncs, and edits</span></div>
            <div><strong>Access</strong><span>Read-only visibility</span></div>
          </div>
        </div>
      </section>

      <section className="page-section alt comparison-section">
        <div className="site-container">
          <span className="eyebrow">Compare plans</span>
          <h2 className="page-section-title">What&apos;s included</h2>
          <div className="comparison-groups">
            {comparisonGroups.map((group) => (
              <div className="comparison-group" key={group.title}>
                <h3>{group.title}</h3>
                <div className="comparison-table" role="table" aria-label={`${group.title} plan comparison`}>
                  <div className="comparison-row comparison-head" role="row"><span>Features</span><span>Starter</span><span>Pro</span></div>
                  {group.rows.map(([feature, starter, pro]) => (
                    <div className="comparison-row" role="row" key={feature}><span>{feature}</span><span>{starter}</span><span>{pro}</span></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section pricing-security">
        <div className="site-container security-row">
          <div><span className="eyebrow">Security</span><h2>AgentPress is built to pass procurement</h2><p>SOC 2 Type II certified. Your data never trains a model.</p></div>
          <div className="certifications">{badges.map(([src, alt, label]) => <div key={alt}><Image src={src} alt={alt} width={64} height={64} /><span>{label}</span></div>)}</div>
        </div>
      </section>

      <section className="cta-band pricing-cta">
        <h2>See it run on your own pipeline</h2>
        <div><Link className="button button-mint" href="https://calendar.app.google/AwUNqYVrSpUf1XeK8" target="_blank" rel="noreferrer">Start now</Link><Link className="button cta-outline" href="https://calendar.app.google/AwUNqYVrSpUf1XeK8" target="_blank" rel="noreferrer">Book a demo</Link></div>
      </section>
    </div>
  );
}
