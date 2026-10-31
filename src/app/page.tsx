import type { Metadata } from 'next';
import { NativeDesignerPage } from './homepage-options/revised/_native/NativeDesignerPage';
import { pageMetadata } from '@/lib/site-metadata';
import './homepage-options/revised/_native/current-site.css';
import './homepage-options/revised/refinements.css';

export const metadata: Metadata = pageMetadata('/', {
  alternates: { types: { 'text/markdown': 'https://www.agent.press/index.md' } },
});

export default function HomePage() {
  return <NativeDesignerPage page="home" preview />;
}
