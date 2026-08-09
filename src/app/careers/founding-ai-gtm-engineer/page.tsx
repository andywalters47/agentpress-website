import type { Metadata } from 'next';
import { DesignerDocument } from '@/components/DesignerDocument';

const title = 'Founding AI GTM Engineer | AgentPress';
const description = 'AgentPress is hiring a Founding AI GTM Engineer to build, run, and improve the AI-native system that produces qualified sales meetings.';

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    images: [{
      url: '/agentpress_careers_og_image.png',
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
    images: ['/agentpress_careers_og_image.png'],
  },
};

export default function FoundingAiGtmEngineerPage() {
  return <DesignerDocument source="FoundingAiGtmEngineer.dc.html" />;
}
