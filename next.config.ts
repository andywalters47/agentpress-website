import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    const cacheHeaders = [
      { key: "Cache-Control", value: "public, max-age=604800, stale-while-revalidate=2592000" },
    ];
    return [
      { source: "/assets/:path*", headers: cacheHeaders },
      { source: "/v3/assets/:path*", headers: cacheHeaders },
      { source: "/fonts/:path*", headers: cacheHeaders },
    ];
  },
};

export default nextConfig;
