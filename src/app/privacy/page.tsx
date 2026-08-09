import type { Metadata } from 'next';
import { DesignerDocument } from '@/components/DesignerDocument';

export const metadata: Metadata = {
  title: 'AgentPress Privacy Policy | AgentPress',
};

export default function PrivacyPolicyPage() {
  return <DesignerDocument source="PrivacyPolicy.dc.html" />;
}
