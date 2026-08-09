import type { Metadata } from 'next';
import { DesignerDocument } from '@/components/DesignerDocument';

export const metadata: Metadata = {
  title: 'Resources | AgentPress',
  description: 'Practical playbooks, product releases, and lessons from enterprise revenue teams running AgentPress.',
};

export default function ResourcesPage() {
  return <DesignerDocument source="Resources.dc.html" />;
}
