import type { NextConfig } from "next";

const crmUrl = "https://yorra-crm.vercel.app";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/crm",
        destination: `${crmUrl}/crm`,
      },
      {
        source: "/crm/:path*",
        destination: `${crmUrl}/crm/:path*`,
      },
    ];
  },
};

export default nextConfig;