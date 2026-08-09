import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.agent.press"),
  title: "AgentPress | An AI Chief of Staff for Every Deal",
  description: "AgentPress proactively delivers the deal intelligence, tailored assets, and executional support enterprise sellers need to win.",
  openGraph: {
    title: "AgentPress | An AI Chief of Staff for Every Deal",
    description: "Deal intelligence, tailored assets, and executional support for complex SaaS sales.",
    images: [{ url: "/agentpress_og_image.png", width: 1200, height: 630, alt: "AgentPress — An AI Chief of Staff for Every Deal" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AgentPress | An AI Chief of Staff for Every Deal",
    description: "Deal intelligence, tailored assets, and executional support for complex SaaS sales.",
    images: ["/agentpress_og_image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/_ds/agentpress-design-system-a7a079c6-bf40-4b95-80cd-57e0caa9d6ac/tokens/fonts.css" />
        <link rel="stylesheet" href="/_ds/agentpress-design-system-a7a079c6-bf40-4b95-80cd-57e0caa9d6ac/tokens/icons.css" />
        <link rel="stylesheet" href="/_ds/agentpress-design-system-a7a079c6-bf40-4b95-80cd-57e0caa9d6ac/tokens/tokens.css" />
        <link rel="stylesheet" href="/_ds/agentpress-design-system-a7a079c6-bf40-4b95-80cd-57e0caa9d6ac/tokens/app-color-semantics.css" />
        <link rel="stylesheet" href="/_ds/agentpress-design-system-a7a079c6-bf40-4b95-80cd-57e0caa9d6ac/components/marketing/fig-tokens.css" />
        <link rel="stylesheet" href="/_ds/agentpress-design-system-a7a079c6-bf40-4b95-80cd-57e0caa9d6ac/styles.css" />
        <link rel="stylesheet" href="/components/integrations/fig-assets.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
