import type { Metadata } from 'next';
import { DesignerDocument } from '@/components/DesignerDocument';

export const metadata: Metadata = {
  title: 'Careers | AgentPress',
  description: 'Join AgentPress and help build the value-aware agentic operating system for B2B revenue teams.',
};

export default function CareersPage() {
  return <DesignerDocument source="Careers.dc.html" />;
}
