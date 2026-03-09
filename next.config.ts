import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true, // required for static export (no Next.js image server)
  },
};

export default nextConfig;
