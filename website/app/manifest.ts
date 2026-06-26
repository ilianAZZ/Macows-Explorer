import type { MetadataRoute } from "next";

// PWA web app manifest — also feeds richer install/share metadata.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mutka — modular file explorer for macOS",
    short_name: "Mutka",
    description:
      "A community-driven, modular file explorer for macOS. Tiny core, everything else is a module.",
    start_url: "/",
    display: "standalone",
    background_color: "#14141b",
    theme_color: "#0a84ff",
    categories: ["utilities", "productivity", "developer"],
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
