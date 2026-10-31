import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  async redirects() {
    return [
      {
        source: "/consultation",
        destination: "https://calendar.app.google/AwUNqYVrSpUf1XeK8",
        permanent: false,
      },
    ];
  },
  async headers() {
    const cacheHeaders = [
      { key: "Cache-Control", value: "public, max-age=604800, stale-while-revalidate=2592000" },
    ];
    return [
      { source: "/llms.txt", headers: [{ key: "Content-Type", value: "text/plain; charset=utf-8" }, { key: "Cache-Control", value: "public, max-age=3600, stale-while-revalidate=86400" }] },
      ...["index", "assessment", "platform", "implementation"].map(document => ({
        source: `/${document}.md`,
        headers: [{ key: "Content-Type", value: "text/markdown; charset=utf-8" }, { key: "Link", value: '</llms.txt>; rel="describedby"' }],
      })),
      { source: "/assets/:path*", headers: cacheHeaders },
      { source: "/v3/assets/:path*", headers: cacheHeaders },
      { source: "/fonts/:path*", headers: cacheHeaders },
    ];
  },
};

export default nextConfig;
