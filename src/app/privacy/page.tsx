import type { Metadata } from 'next';
import { NativeDesignerPage } from '@/components/NativeDesignerPage';

export const metadata: Metadata = {
  title: 'AgentPress Privacy Policy | AgentPress',
};

export default function PrivacyPolicyPage() {
  return <NativeDesignerPage page="privacy" />;
}
