import type { NextConfig } from "next";

/* Two build targets:
 * - Dev (this sandbox): normal Next.js mode, output "standalone".
 * - GitHub Pages (CI): the deploy workflow sets NEXT_OUTPUT=export, which
 *   switches next build to a fully static export in ./out — required because
 *   GitHub Pages serves static files only. */
const isExport = process.env.NEXT_OUTPUT === "export";

const nextConfig: NextConfig = {
  output: isExport ? "export" : "standalone",
  // Static export can't run the image optimization server.
  ...(isExport ? { images: { unoptimized: true } } : {}),
  reactStrictMode: false,
  allowedDevOrigins: ["*.space-z.ai", "*.z.ai"],
};

export default nextConfig;
