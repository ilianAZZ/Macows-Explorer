import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  // Emit a self-contained server (.next/standalone + server.js) so the Docker
  // image can run `node server.js` without node_modules. Required by Dockerfile.
  output: "standalone",
  // The repo root has its own lockfile (the Tauri app); pin tracing to this app
  // so Next doesn't infer the monorepo root.
  outputFileTracingRoot: import.meta.dirname,
};

export default withMDX(config);
