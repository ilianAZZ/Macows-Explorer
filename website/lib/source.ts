import { docs } from "@/.source";
import { loader } from "fumadocs-core/source";

// fumadocs-mdx returns a "dynamic" source ({ files: () => [...] }), but the
// fumadocs-core loader's storage builder only iterates a static source
// ({ files: [...] }). Resolve the function to an array so both line up. The
// static types describe `files` as the array form, so we go through `unknown`.
const fumaSource = docs.toFumadocsSource();
const rawFiles: unknown = (fumaSource as { files: unknown }).files;
const files =
  typeof rawFiles === "function"
    ? (rawFiles as () => unknown[])()
    : rawFiles;

/** The docs content source, served under /docs. */
export const source = loader({
  baseUrl: "/docs",
  source: { ...fumaSource, files } as typeof fumaSource,
});
