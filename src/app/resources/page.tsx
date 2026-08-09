import type { Metadata } from 'next';
import { CtaBand } from '@/components/CtaBand';
import { ResourcesGrid } from '@/components/ResourcesGrid';

export const metadata: Metadata = {
  title: 'Resources | AgentPress',
  description: 'Practical playbooks, product releases, and lessons from enterprise revenue teams running AgentPress.',
};

export default function ResourcesPage() {
  return (
    <div className="marketing-page resources-page">
      <header className="page-hero site-container">
        <span className="eyebrow">AI News</span>
        <h1>Resources</h1>
        <p>What we are learning from enterprise revenue teams running AgentPress, plus product releases and practical playbooks.</p>
      </header>
      <section className="resources-content site-container">
        <ResourcesGrid />
      </section>
      <CtaBand heading="Ready to sell on value?" buttonLabel="Schedule Demo" />
    </div>
  );
}
