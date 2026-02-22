import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Type checking runs separately; skip during build to avoid OneDrive filesystem timeouts
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
