import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.agent.press"),
  title: "AgentPress | AI Generated Business Value Cases",
  description: "Win bigger deals without manually building business cases. Our business value agent instantly generates cases that win 35% more deal value.",
  openGraph: {
    title: "AgentPress | AI Generated Business Value Cases",
    description: "Win bigger deals without manually building business cases. Our business value agent instantly generates cases that win 35% more deal value.",
    images: [{ url: "/agentpress_og_image.png", width: 1200, height: 630, alt: "AgentPress - Win Bigger Deals Without Manually Building Business Cases" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AgentPress | AI Generated Business Value Cases",
    description: "Win bigger deals without manually building business cases. Our business value agent instantly generates cases that win 35% more deal value.",
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
      <body className={`${inter.variable} antialiased`}>
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
