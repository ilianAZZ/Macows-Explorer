import "./global.css";
import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { RootProvider } from "fumadocs-ui/provider/next";
import { Inter } from "next/font/google";
import { GITHUB_URL } from "./layout.config";

const inter = Inter({ subsets: ["latin"] });

const SITE_URL = "https://mutka.dev";
const TITLE = "Mutka — A modular, community-driven file explorer for macOS";
const DESCRIPTION =
  "Mutka ships a minimal, rock-solid core and lets the community build everything else as modules — even copy-paste and navigation. Modules are a single file designed to be plugged in (and built by AI). Built with Tauri 2, React and the macOS Liquid Glass design language.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s · Mutka",
  },
  description: DESCRIPTION,
  applicationName: "Mutka",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  authors: [{ name: "Ilian", url: GITHUB_URL }],
  creator: "Ilian",
  publisher: "Mutka",
  category: "technology",
  keywords: [
    "macos",
    "file explorer",
    "finder alternative",
    "tauri",
    "tauri 2",
    "react",
    "modular",
    "module system",
    "plugin system",
    "liquid glass",
    "open source",
    "rust",
    "ai-built modules",
    "mcp",
    "sqlite viewer",
    "webdav",
    "macos app",
  ],
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Mutka",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description:
      "A minimal, rock-solid core. Everything else is a community module — designed to be plugged in and built by AI.",
    creator: "@mutka",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/icon.png", type: "image/png", sizes: "512x512" }],
    apple: [{ url: "/apple-icon.png", sizes: "512x512" }],
    shortcut: ["/icon.png"],
  },
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: "Mutka",
    statusBarStyle: "black-translucent",
  },
  formatDetection: { telephone: false, email: false, address: false },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#14141b" },
  ],
  colorScheme: "light dark",
  width: "device-width",
  initialScale: 1,
};

// Structured data (schema.org JSON-LD) — helps search engines and AI crawlers
// understand the project as a piece of software with documentation.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Mutka",
      description: DESCRIPTION,
      inLanguage: "en-US",
      publisher: { "@id": `${SITE_URL}/#org` },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE_URL}/docs?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#org`,
      name: "Mutka",
      url: SITE_URL,
      logo: `${SITE_URL}/icon.png`,
      sameAs: [GITHUB_URL],
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${SITE_URL}/#app`,
      name: "Mutka",
      description: DESCRIPTION,
      url: SITE_URL,
      applicationCategory: "UtilitiesApplication",
      applicationSubCategory: "File Manager",
      operatingSystem: "macOS 10.14+",
      softwareVersion: "0.1",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      license: "https://opensource.org/licenses/MIT",
      isAccessibleForFree: true,
      author: { "@id": `${SITE_URL}/#org` },
      image: `${SITE_URL}/icon.png`,
      keywords:
        "macOS, file explorer, modular, Tauri, React, open source, AI modules",
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Mutka?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Mutka is a community-driven, modular file explorer for macOS built with Tauri 2 and React. The core ships only infrastructure; every real feature — copy, paste, navigation, columns, cloud mounts — is a module.",
          },
        },
        {
          "@type": "Question",
          name: "How do you build a module for Mutka?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A module is a single file that exports defineModule({ id, permissions, commands, openHandlers, setup }). It imports nothing from the core and only touches the system through a permission-checked host object — which makes modules small, safe, and easy for an AI to generate.",
          },
        },
        {
          "@type": "Question",
          name: "Is Mutka free and open source?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Mutka is MIT licensed and free to use.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
