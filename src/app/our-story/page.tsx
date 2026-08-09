import type { Metadata } from 'next';
import { DesignerDocument } from '@/components/DesignerDocument';

export const metadata: Metadata = {
  title: 'The AgentPress Story | AgentPress',
  description: 'How a standing ovation changed everything.',
};

export default function OurStoryPage() {
  return <DesignerDocument source="OurStory.dc.html" />;
}
