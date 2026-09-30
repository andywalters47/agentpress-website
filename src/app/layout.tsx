import type { Metadata } from "next";
import localFont from "next/font/local";
import "lenis/dist/lenis.css";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";

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

const siteTitle = "AgentPress | Automate Revenue Generating Work";
const siteDescription = "AgentPress combines AI consulting, custom engineering, and an auditable agent platform to automate your workflows, connect your existing systems, and grow revenue.";
const socialImage = "https://www.agent.press/agentpress_og_revenue_automation_v2.png";
const socialImageAlt = "AgentPress: Automate revenue generating work with AI agents.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.agent.press"),
  title: siteTitle,
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "https://www.agent.press/",
    siteName: "AgentPress",
    locale: "en_US",
    images: [{
      url: socialImage,
      secureUrl: socialImage,
      width: 1200,
      height: 630,
      type: "image/png",
      alt: socialImageAlt,
    }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [{
      url: socialImage,
      alt: socialImageAlt,
    }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${archivo.variable} ${neuSans.variable} agentpress-fonts`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(key) {if (window.reb2b) return;window.reb2b = {loaded: true};var s = document.createElement("script");s.async = true;s.src = "https://ddwl4m2hdecbv.cloudfront.net/b/" + key + "/" + key + ".js.gz";document.getElementsByTagName("script")[0].parentNode.insertBefore(s, document.getElementsByTagName("script")[0]);}("R6G5YHY2DE65");`,
          }}
        />
      </head>
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
