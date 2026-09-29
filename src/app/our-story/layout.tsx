import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Story | AgentPress',
  description:
    'What customer work taught us about building useful AI around real business workflows.',
  openGraph: {
    title: 'Our Story | AgentPress',
    description:
      'What customer work taught us about building useful AI around real business workflows.',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Story | AgentPress',
    description:
      'What customer work taught us about building useful AI around real business workflows.',
  },
};

export default function OurStoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
