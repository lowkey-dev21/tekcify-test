/** @type {import('next').NextConfig} */
const nextConfig = {
  // ...existing config...
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

module.exports = nextConfig;
