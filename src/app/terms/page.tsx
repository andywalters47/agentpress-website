import type { Metadata } from 'next';
import { NativeDesignerPage } from '@/components/NativeDesignerPage';

export const metadata: Metadata = {
  title: 'Terms of Service | AgentPress',
};

export default function TermsOfServicePage() {
  return <NativeDesignerPage page="terms" />;
}
