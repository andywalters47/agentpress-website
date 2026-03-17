import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Story | AgentPress',
  description:
    'How a standing ovation at a corporate kickoff led to AgentPress — the value-aware agentic platform for B2B revenue teams. From $2.8M services firm to $552K ARR in six months.',
  openGraph: {
    title: 'Our Story | AgentPress',
    description:
      'How a standing ovation at a corporate kickoff led to AgentPress — the value-aware agentic platform for B2B revenue teams.',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Story | AgentPress',
    description:
      'How a standing ovation at a corporate kickoff led to AgentPress — the value-aware agentic platform for B2B revenue teams.',
  },
};

export default function OurStoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
