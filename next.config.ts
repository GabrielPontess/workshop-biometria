import type { NextConfig } from "next";
import { basePath } from "./app/public-path";

const isStaticExport = process.env.STATIC_EXPORT === "true";

const nextConfig: NextConfig = {
  basePath,
  experimental: {
    agentFeedback: true,
  },
  ...(isStaticExport
    ? {
        output: "export",
        trailingSlash: true,
        images: { unoptimized: true },
      }
    : {
        cacheComponents: true,
        partialPrefetching: true,
      }),
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
