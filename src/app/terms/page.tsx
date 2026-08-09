import type { Metadata } from 'next';
import { DesignerDocument } from '@/components/DesignerDocument';

export const metadata: Metadata = {
  title: 'Terms of Service | AgentPress',
};

export default function TermsOfServicePage() {
  return <DesignerDocument source="TermsOfService.dc.html" />;
}
