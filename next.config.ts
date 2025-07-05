import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["tsx", "ts", "jsx", "js"],
  output: "export",
  basePath: process.env.PAGES_BASE_PATH || "",
};

export default nextConfig;
