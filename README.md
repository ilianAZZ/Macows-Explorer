# Macows Explorer

> A community-driven, modular file explorer for macOS — built with Tauri 2, React 18 and the macOS 26 Liquid Glass design language.

![Version](https://img.shields.io/badge/version-0.1.0-blue)
![Platform](https://img.shields.io/badge/platform-macOS-lightgrey)
![License](https://img.shields.io/badge/license-MIT-green)
![Tauri](https://img.shields.io/badge/Tauri-2-orange)

---

## What is Macows Explorer?

Macows Explorer ships a minimal, rock-solid core and lets the **community build everything else as modules**. Even built-in features (copy/paste, file creation, navigation) are modules themselves. The core provides infrastructure only — registry, event bus, shortcut manager — so anyone outside this repo can extend the app without touching core code.

---

## Features

- **Modular architecture** — drop a folder under `src/modules/` and it's auto-discovered at build time. No `App.tsx` changes needed.
- **Liquid Glass UI** — native macOS 26 vibrancy (`NSVisualEffectView`) with CSS-variable-based theming and automatic dark/light mode.
- **Keyboard-first** — conflict-detecting shortcut registry; every action is addressable by ID.
- **Mouse navigation** — back/forward mouse buttons handled at the Rust layer before WebView intercepts them.
- **Async dialog API** — `ctx.dialog.prompt()` / `ctx.dialog.confirm()` return Promises; any module can show a native-style modal.
- **Tiny binary** — ~15 MB `.app` bundle (Tauri 2 + optimised release profile).

---

## Prerequisites

| Tool                          | Version          |
| ----------------------------- | ---------------- |
| [Rust](https://rustup.rs)     | stable (1.77.2+) |
| [Node.js](https://nodejs.org) | 18+              |
| Xcode Command Line Tools      | latest           |

```bash
xcode-select --install   # if not already installed
```

---

## Getting started

```bash
git clone https://github.com/ilianAZZ/Macows-Explorer.git
cd Macows-Explorer
npm install
npm run tauri dev        # opens app window with hot-reload
```

> First run takes 3–5 minutes (Cargo downloads and compiles Tauri).  
> Subsequent runs are fast — under 5 s for Rust changes, instant for TypeScript/CSS.

### Production build

```bash
npm run tauri build      # outputs a signed .app in src-tauri/target/release/bundle/
```

---

## Project structure

```text
Macows-Explorer/
├── src/                    React + TypeScript frontend
│   ├── core/               Infrastructure only (registry, event bus, shortcuts)
│   │   └── types.ts        Single source of truth for all public interfaces
│   ├── modules/            One folder per feature module
│   │   ├── navigation/
│   │   ├── clipboard/
│   │   ├── file-ops/
│   │   └── mouse-navigation/
│   └── components/         Reusable UI components (no business logic)
└── src-tauri/              Rust backend (thin system-API layer only)
    ├── src/lib.rs          All Tauri commands
    └── tauri.conf.json     Window config, bundle settings, icon paths
```

---

## Writing a module

Create `src/modules/my-module/index.ts` and export a `MacowsModule` object:

```typescript
import type { MacowsModule } from "../../core/types";

const myModule: MacowsModule = {
  id: "author.my-module",
  name: "My Module",
  version: "1.0.0",

  actions: [
    {
      id: "author.my-module.hello",
      label: "Say Hello",
      shortcut: "meta+shift+h",
      execute: async (ctx) => {
        await ctx.dialog.confirm({ message: "Hello from my module!" });
      },
    },
  ],

  onMount: () => console.log("my-module mounted"),
  onUnmount: () => {},
};

export default myModule;
```

That's it — the module is auto-discovered by Vite's glob import. No registration step required.

### Available context (`ctx`)

| Property                                  | What it gives you                                   |
| ----------------------------------------- | --------------------------------------------------- |
| `ctx.selectedItems`                       | Currently selected `FileItem[]`                     |
| `ctx.currentPath`                         | Active directory path                               |
| `ctx.navigation.navigate(path)`           | Navigate to a folder                                |
| `ctx.navigation.goBack()` / `goForward()` | History navigation                                  |
| `ctx.dialog.prompt(opts)`                 | Show a text-input modal → `Promise<string \| null>` |
| `ctx.dialog.confirm(opts)`                | Show a confirm modal → `Promise<boolean>`           |
| `ctx.refresh()`                           | Re-read the current directory                       |
| `ctx.clipboard`                           | Current clipboard state                             |

### Open handlers

To intercept double-clicks (e.g. open files in a custom viewer):

```typescript
openHandlers: [
  {
    id: "author.my-module.open-pdf",
    priority: 10,                         // higher priority wins
    matches: (item) => item.name.endsWith(".pdf"),
    handle: async (item, ctx) => { /* ... */ },
  },
],
```

---

## Architecture overview

```text
User keypress
  → ShortcutManager normalises → "meta+c"
  → CustomEvent("macows:action", { actionId })
  → ModuleRegistry.executeAction(actionId, ctx)
  → action.execute(ctx)
  → invoke("clipboard_write_files", ...) [Rust IPC]
  → EventBus.emit("clipboard:changed")
  → React re-render

Double-click on folder
  → ModuleRegistry.resolveOpen(item, ctx)
  → iterates openHandlers sorted by priority (desc)
  → first matching handler wins
  → default: navigation module → ctx.navigation.navigate(path)
```

---

## Contributing

1. Fork → branch → PR against `main`
2. Keep files under ~150 lines (one concern per file)
3. No `any`. All public shapes go in `src/core/types.ts`
4. Feature logic lives in `src/modules/` — never in `src/core/`
5. Run `npm run build` before opening a PR (TypeScript must pass clean)

---

## License

MIT — see [LICENSE](LICENSE) for details.
