import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://www.agent.press"),
  title: "AgentPress | AI Chief of Staff for Every Deal",
  description: "AgentPress proactively delivers the deal intelligence, tailored assets, and executional support enterprise sellers need to win.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AgentPress | AI Chief of Staff for Every Deal",
    description: "AgentPress proactively delivers the deal intelligence, tailored assets, and executional support enterprise sellers need to win.",
    url: "https://www.agent.press/",
    siteName: "AgentPress",
    locale: "en_US",
    images: [{
      url: "https://www.agent.press/agentpress_og_ai_chief_of_staff_v4.png",
      secureUrl: "https://www.agent.press/agentpress_og_ai_chief_of_staff_v4.png",
      width: 1200,
      height: 630,
      type: "image/png",
      alt: "AgentPress — AI Chief of Staff for Every Deal",
    }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AgentPress | AI Chief of Staff for Every Deal",
    description: "AgentPress proactively delivers the deal intelligence, tailored assets, and executional support enterprise sellers need to win.",
    images: [{
      url: "https://www.agent.press/agentpress_og_ai_chief_of_staff_v4.png",
      alt: "AgentPress — AI Chief of Staff for Every Deal",
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
      <body>
        <SmoothScroll />
        {children}
        <Script id="reb2b" strategy="afterInteractive">
          {`!function(key) {if (window.reb2b) return;window.reb2b = {loaded: true};var s = document.createElement("script");s.async = true;s.src = "https://ddwl4m2hdecbv.cloudfront.net/b/" + key + "/" + key + ".js.gz";document.getElementsByTagName("script")[0].parentNode.insertBefore(s, document.getElementsByTagName("script")[0]);}("R6G5YHY2DE65");`}
        </Script>
      </body>
    </html>
  );
}
