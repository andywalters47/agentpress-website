import type { Metadata } from 'next';
import { NativeDesignerPage } from '@/components/NativeDesignerPage';

export const metadata: Metadata = {
  title: 'Pricing | AgentPress',
  description: 'Simple pricing for enterprise sales teams.',
};

export default function PricingPage() {
  return <NativeDesignerPage page="pricing" />;
}
