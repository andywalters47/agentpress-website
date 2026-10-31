import { pageMetadata } from '@/lib/site-metadata';
import type { Metadata } from 'next';
import { NativeDesignerPage } from '@/components/NativeDesignerPage';

export const metadata: Metadata = pageMetadata("/our-story", {
  title: 'The AgentPress Story | AgentPress',
  description: 'What customer work taught us about building useful AI around real business workflows.',
});

export default function OurStoryPage() {
  return <NativeDesignerPage page="our-story" />;
}
