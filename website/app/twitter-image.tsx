export { default, alt, size, contentType } from "./opengraph-image";

// `runtime` must be statically analyzable per-file, so it can't be re-exported.
export const runtime = "nodejs";
