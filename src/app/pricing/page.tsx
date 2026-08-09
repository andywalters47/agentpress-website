import type { Metadata } from 'next';
import { DesignerDocument } from '@/components/DesignerDocument';

export const metadata: Metadata = {
  title: 'Pricing | AgentPress',
  description: 'Simple pricing for enterprise sales teams.',
};

export default function PricingPage() {
  return <DesignerDocument source="Pricing.dc.html" />;
}
