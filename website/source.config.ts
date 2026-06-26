import { defineDocs, defineConfig } from "fumadocs-mdx/config";

// `content/docs` holds the hand-written guides AND the TypeDoc-generated API
// reference (content/docs/api/*, produced by `pnpm docs:api`).
export const docs = defineDocs({
  dir: "content/docs",
});

export default defineConfig();
