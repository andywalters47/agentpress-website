import type { Metadata } from 'next';
import { NativeDesignerPage } from '@/components/NativeDesignerPage';

export const metadata: Metadata = {
  title: 'The AgentPress Story | AgentPress',
  description: 'How a standing ovation changed everything.',
};

export default function OurStoryPage() {
  return <NativeDesignerPage page="our-story" />;
}
