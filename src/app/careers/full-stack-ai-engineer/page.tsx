import type { Metadata } from 'next';
import { NativeDesignerPage } from '@/components/NativeDesignerPage';

const title = 'Full-Stack AI Engineer | AgentPress';
const description = 'AgentPress is hiring a full-time Full-Stack AI Engineer to build full-stack product, AI agent orchestration systems, and enterprise integrations.';

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    images: [{
      url: '/agentpress_full_stack_ai_engineer_og_image.png',
      width: 1200,
      height: 630,
      alt: title,
    }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/agentpress_full_stack_ai_engineer_og_image.png'],
  },
};

export default function FullStackAiEngineerPage() {
  return <NativeDesignerPage page="full-stack-ai-engineer" />;
}
