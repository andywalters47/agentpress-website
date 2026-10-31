import { pageMetadata } from '@/lib/site-metadata';
import type { Metadata } from 'next';
import { NativeDesignerPage } from '@/components/NativeDesignerPage';

export const metadata: Metadata = pageMetadata("/terms", {
  title: 'Terms of Service | AgentPress',
});

export default function TermsOfServicePage() {
  return <NativeDesignerPage page="terms" />;
}
