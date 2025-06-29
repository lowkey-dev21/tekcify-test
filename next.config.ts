import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  distDir: "dist",
  webpack(config) {
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      type: "asset/resource",
      generator: {
        filename: "static/chunks/[name].[hash][ext]",
      },
    });
    return config;
  },
};

export default nextConfig;
