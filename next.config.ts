import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["tsx", "ts", "jsx", "js", "mdx", "md"],
  output: "export",
  basePath: process.env.PAGES_BASE_PATH || "",
};

const withMDX = createMDX({
  extension: /\(md|mdx\)$/,
});

export default withMDX(nextConfig);
