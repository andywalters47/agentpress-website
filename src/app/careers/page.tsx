import { pageMetadata } from '@/lib/site-metadata';
import type { Metadata } from 'next';
import { NativeDesignerPage } from '@/components/NativeDesignerPage';

export const metadata: Metadata = pageMetadata("/careers", {
  title: 'Careers | AgentPress',
  description: 'Join AgentPress and help build the value-aware agentic operating system for B2B revenue teams.',
});

export default function CareersPage() {
  return <NativeDesignerPage page="careers" />;
}
