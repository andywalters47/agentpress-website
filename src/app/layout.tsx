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
  title: "AgentPress | AI Agents Fluent In Your Value Story",
  description: "Win bigger deals without manually building business cases. Our business value agent instantly generates cases that win 35% more deal value.",
  openGraph: {
    title: "AgentPress | AI Agents Fluent In Your Value Story",
    description: "Win bigger deals without manually building business cases. Our business value agent instantly generates cases that win 35% more deal value.",
    images: [{ url: "/AP_icon_circle.png", width: 500, height: 500, alt: "AgentPress Logo" }],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "AgentPress | AI Agents Fluent In Your Value Story",
    description: "Win bigger deals without manually building business cases. Our business value agent instantly generates cases that win 35% more deal value.",
    images: ["/AP_icon_circle.png"],
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
