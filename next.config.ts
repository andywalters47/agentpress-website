import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        { source: "/", destination: "/index.html" },
        { source: "/pricing", destination: "/Pricing.dc.html" },
        { source: "/resources", destination: "/Resources.dc.html" },
        {
          source: "/resources/enterprise-deals-between-meetings",
          destination: "/BlogPost.dc.html",
        },
        { source: "/our-story", destination: "/OurStory.dc.html" },
        { source: "/careers", destination: "/Careers.dc.html" },
        {
          source: "/careers/founding-ai-gtm-engineer",
          destination: "/FoundingAiGtmEngineer.dc.html",
        },
        {
          source: "/careers/full-stack-ai-engineer",
          destination: "/FullStackAiEngineer.dc.html",
        },
        { source: "/privacy", destination: "/PrivacyPolicy.dc.html" },
        { source: "/terms", destination: "/TermsOfService.dc.html" },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;
