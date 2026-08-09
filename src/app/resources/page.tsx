import type { Metadata } from 'next';
import { NativeDesignerPage } from '@/components/NativeDesignerPage';

export const metadata: Metadata = {
  title: 'Resources | AgentPress',
  description: 'Practical playbooks, product releases, and lessons from enterprise revenue teams running AgentPress.',
};

export default function ResourcesPage() {
  return <NativeDesignerPage page="resources" />;
}
