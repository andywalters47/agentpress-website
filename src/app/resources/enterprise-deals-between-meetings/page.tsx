import type { Metadata } from 'next';
import { NativeDesignerPage } from '@/components/NativeDesignerPage';

export const metadata: Metadata = {
  title: 'Enterprise deals stall between meetings | AgentPress',
  description: 'A look at where the nine-month enterprise cycle actually goes, and what changes when the work between calls happens on its own.',
};

export default function ArticlePage() {
  return <NativeDesignerPage page="article" />;
}
