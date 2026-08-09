import type { Metadata } from "next";
import Script from "next/script";

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
        <base href="/" />
      </head>
      <body suppressHydrationWarning>
        <Script src="/support.js" strategy="beforeInteractive" />
        {children}
      </body>
    </html>
  );
}
