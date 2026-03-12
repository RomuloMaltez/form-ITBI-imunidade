import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/_next/:path*",
        destination: "https://form-itbi-imunidade.vercel.app/_next/:path*",
      },
      {
        source: "/:path*",
        destination: "https://form-itbi-imunidade.vercel.app/:path*",
      },
    ];
  },
};

export default nextConfig;
