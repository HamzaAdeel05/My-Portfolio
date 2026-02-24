import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/My-Portfolio', 
  reactCompiler: true,
  images: {
    unoptimized: true,
    domains: ["res.cloudinary.com"],
  },
};


export default nextConfig;