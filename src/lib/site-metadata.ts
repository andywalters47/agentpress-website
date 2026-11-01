import type { Metadata } from 'next';

export const siteUrl = 'https://www.agent.press';
export const siteTitle = 'AgentPress | AI Automation for Mid-Market Companies';
export const siteDescription = 'Grow revenue and reduce costs with AI. AgentPress finds high-value workflows, validates the business case, and builds and supports your automation.';
export const socialImage = `${siteUrl}/agentpress_og_ai_automation_v3.png`;
export const socialImageAlt = 'We help mid-market companies grow revenue and reduce costs with AI';

const routeDescriptions: Record<string, string> = {
  '/privacy': 'How AgentPress collects, uses and protects personal information.',
  '/terms': 'Terms and conditions for using AgentPress services and website.',
};

export function pageMetadata(path: string, metadata: Metadata = {}): Metadata {
  const title = typeof metadata.title === 'string' ? metadata.title : siteTitle;
  const description = metadata.description ?? routeDescriptions[path] ?? siteDescription;
  return {
    ...metadata,
    title, description,
    alternates: { ...metadata.alternates, canonical: path },
    openGraph: {
      title, description, siteName: 'AgentPress', locale: 'en_US', type: 'website',
      images: [{ url: socialImage, secureUrl: socialImage, width: 1200, height: 630, type: 'image/png', alt: socialImageAlt }],
      ...metadata.openGraph,
      url: new URL(path, siteUrl).href,
    },
    twitter: {
      card: 'summary_large_image', title, description,
      images: [{ url: socialImage, alt: socialImageAlt }],
      ...metadata.twitter,
    },
  };
}
