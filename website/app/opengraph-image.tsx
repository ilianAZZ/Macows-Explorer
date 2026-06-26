import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";

// Dynamic 1200×630 social card — rendered once at build/request time.
export const runtime = "nodejs";
export const alt = "Mutka — a modular, community-driven file explorer for macOS";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const logo = readFileSync(join(process.cwd(), "public", "icon.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 90px",
          background:
            "linear-gradient(135deg, #14141b 0%, #1b1b27 45%, #0b1a30 100%)",
          color: "#fff",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} width={140} height={140} alt="Mutka" />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 78, fontWeight: 700, letterSpacing: -2 }}>
              Mutka
            </div>
            <div style={{ fontSize: 30, color: "#5AC8FA", fontWeight: 600 }}>
              the file explorer made of modules
            </div>
          </div>
        </div>
        <div
          style={{
            marginTop: 44,
            fontSize: 34,
            lineHeight: 1.3,
            color: "rgba(255,255,255,0.82)",
            maxWidth: 920,
          }}
        >
          A tiny, rock-solid core. Everything else — even copy-paste — snaps on
          as a community module. Built with Tauri 2 + React.
        </div>
        <div
          style={{
            marginTop: 50,
            display: "flex",
            gap: 14,
            fontSize: 24,
            color: "rgba(255,255,255,0.6)",
          }}
        >
          <span
            style={{
              padding: "8px 20px",
              borderRadius: 999,
              background: "rgba(10,132,255,0.18)",
              color: "#5AC8FA",
            }}
          >
            Open source
          </span>
          <span
            style={{
              padding: "8px 20px",
              borderRadius: 999,
              background: "rgba(48,209,88,0.16)",
              color: "#5be58a",
            }}
          >
            macOS native
          </span>
          <span
            style={{
              padding: "8px 20px",
              borderRadius: 999,
              background: "rgba(191,90,242,0.16)",
              color: "#d79cff",
            }}
          >
            AI-buildable modules
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
