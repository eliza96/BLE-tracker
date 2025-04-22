import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/, // Match all SVG files
      use: ["@svgr/webpack"], // Use SVGR for SVGs
    });
    return config;
  },
  // سایر تنظیمات مورد نیاز پروژه را اینجا اضافه کن
};

export default nextConfig;
