import type { NextConfig } from "next";

const crmUrl = "https://yorra-crm.vercel.app";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.yorra.in",
          },
        ],
        destination: "https://yorra.in/:path*",
        permanent: true,
      },
    ];
  },

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