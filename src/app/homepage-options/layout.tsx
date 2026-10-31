import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
export const dynamic = 'force-dynamic';
export const metadata: Metadata = { title: 'AgentPress | Local homepage preview', robots: { index: false, follow: false }, alternates: { canonical: null } };
export default function PreviewLayout({ children }: { children: React.ReactNode }) {
  if (process.env.ENABLE_AI_ACCELERATE_PREVIEWS !== '1') notFound();
  return <>{children}</>;
}
