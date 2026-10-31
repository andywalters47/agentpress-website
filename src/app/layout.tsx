import { pageMetadata, siteUrl } from '@/lib/site-metadata';
import type { Metadata } from "next";
import localFont from "next/font/local";
import "lenis/dist/lenis.css";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";

const archivo = localFont({
  src: "../../public/fonts/ArchivoVariable.woff2",
  variable: "--font-archivo",
  display: "swap",
  preload: true,
  fallback: ["Arial", "sans-serif"],
});

const neuSans = localFont({
  src: "../../public/fonts/NeuSans-Book.woff2",
  variable: "--font-neu-sans",
  display: "swap",
  preload: true,
  fallback: ["Arial", "sans-serif"],
});

const siteIdentity = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Organization', '@id': `${siteUrl}/#organization`, name: 'AgentPress', url: siteUrl, logo: `${siteUrl}/assets/AP_landscape_for_light_bg.svg` },
    { '@type': 'WebSite', '@id': `${siteUrl}/#website`, name: 'AgentPress', url: siteUrl, inLanguage: 'en-US', publisher: { '@id': `${siteUrl}/#organization` } },
  ],
};

export const metadata: Metadata = {
  ...pageMetadata('/'),
  metadataBase: new URL(siteUrl),
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${archivo.variable} ${neuSans.variable} agentpress-fonts`}>
      <head>
        <link rel="describedby" href="/llms.txt" type="text/plain" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteIdentity).replace(/</g, '\\u003c') }} />
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(key) {if (!["www.agent.press", "agent.press"].includes(window.location.hostname)) return;if (window.reb2b) return;window.reb2b = {loaded: true};var s = document.createElement("script");s.async = true;s.src = "https://ddwl4m2hdecbv.cloudfront.net/b/" + key + "/" + key + ".js.gz";document.getElementsByTagName("script")[0].parentNode.insertBefore(s, document.getElementsByTagName("script")[0]);}("R6G5YHY2DE65");`,
          }}
        />
      </head>
      <body>
        <GoogleAnalytics />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
