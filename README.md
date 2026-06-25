# Macows Explorer

> A community-driven, modular file explorer for macOS — built with Tauri 2, React 18 and the macOS 26 Liquid Glass design language.

![Version](https://img.shields.io/badge/version-0.1.0-blue)
![Platform](https://img.shields.io/badge/platform-macOS-lightgrey)
![License](https://img.shields.io/badge/license-MIT-green)
![Tauri](https://img.shields.io/badge/Tauri-2-orange)

---

## What is Macows Explorer?

Macows Explorer ships a minimal, rock-solid core and lets the **community build everything else as modules**. Even built-in features (copy/paste, file creation, navigation) are modules themselves. The core provides infrastructure only — registry, event bus, shortcut manager, and a permission-checked capability gateway — so anyone outside this repo can extend the app without touching core code.

Every module — built-in or community — is the same shape: `export default defineModule({ ... })`. It imports nothing from the core and reaches the system **only** through a `host` object, where every call is checked against the permissions the module declared. Built-in modules run in-process; untrusted community modules run isolated in a Web Worker.

---

## Documentation

| File                                           | What it covers                                                             |
| ---------------------------------------------- | -------------------------------------------------------------------------- |
| [`docs/architecture.md`](docs/architecture.md) | Layer diagram, core piece responsibilities, module auto-discovery          |
| [`docs/flows.md`](docs/flows.md)               | Sequence diagrams: keyboard shortcut, mouse buttons, EventBus side effects |
| [`docs/events.md`](docs/events.md)             | Full event reference table, how to add events, community module events     |
| [`COMMUNITY_MODULES.md`](COMMUNITY_MODULES.md) | How to write, bundle, and distribute a community module                    |

---

## Features

- **Modular architecture** — drop a file under `src/sandbox-builtins/` (built-in) or install a module at `~/.macows/modules/` (community); both are auto-discovered. No `App.tsx` changes needed.
- **Sandboxed by permission** — every module declares the capabilities it uses; the gateway denies any call whose permission wasn't declared. Community modules run isolated in a Web Worker.
- **Liquid Glass UI** — native macOS 26 vibrancy (`NSVisualEffectView`) with CSS-variable-based theming and automatic dark/light mode.
- **Keyboard-first** — conflict-detecting shortcut registry; every command is addressable by ID.
- **Mouse navigation** — back/forward mouse buttons handled at the Rust layer before WebView intercepts them.
- **Async dialog API** — `host.dialog.prompt()` / `host.dialog.confirm()` return Promises; any module with the `dialog` permission can show a native-style modal.
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
│   ├── core/               Infrastructure only (registry, event bus, shortcuts, sandbox)
│   │   ├── types.ts        Foundation types shared across subsystems
│   │   └── sandbox/        defineModule, host proxy, capability gateway, runtimes
│   ├── sandbox-builtins/   Built-in modules, one file each (defineModule format)
│   │   ├── navigation.ts
│   │   ├── clipboard.ts
│   │   ├── file-ops.ts
│   │   └── mouse-navigation.ts
│   ├── components/         Reusable UI components (no business logic)
│   └── moduleLoader.ts     Auto-discovers built-in + community modules
├── dev-modules/            Repo-local community modules for testing the worker path
└── src-tauri/              Rust backend (thin system-API layer only)
    ├── src/lib.rs          All Tauri commands
    └── tauri.conf.json     Window config, bundle settings, icon paths
```

Community modules are NOT in this repo — they live on the user's disk at
`~/.macows/modules/<id>/index.js`. See [`COMMUNITY_MODULES.md`](COMMUNITY_MODULES.md).

---

## Writing a module

Create `src/sandbox-builtins/my-module.ts` (built-in) and `export default defineModule({ ... })`.
A community module is byte-identical but drops the import and lives on disk.

```typescript
import { defineModule } from "../core/sandbox/defineModule";

export default defineModule({
  id: "author.my-module",
  name: "My Module",
  version: "1.0.0",
  permissions: ["dialog"],                // declare every capability host.* uses
  commands: [
    {
      id: "author.my-module.hello",       // must start with the module ID
      label: "Say Hello",
      shortcut: "meta+shift+h",
      contextMenu: true,
      when: { selection: "any" },         // serializable visibility
    },
  ],
  setup(host) {
    host.onCommand("author.my-module.hello", async (snapshot) => {
      await host.dialog.confirm({ message: `Hello from ${snapshot.currentDirectory}!` });
    });
  },
});
```

That's it — built-in modules are auto-discovered by Vite's glob import. No registration step required.

### The `host` API (all async)

| Group                | What it gives you                                                                                         | Permission                           |
| -------------------- | --------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| `host.fs.*`          | `readDir`, `openItem`, `copyFiles`, `moveFiles`, `deleteItem`, `renameItem`, `createFile`, `createFolder` | `fs:read` / `fs:write`               |
| `host.board.*`       | `readFiles`, `writeFiles(paths, "copy" \| "cut")`                                                         | `clipboard:read` / `clipboard:write` |
| `host.nav.*`         | `navigate`, `goBack`, `goForward`, `goUp`                                                                 | `navigation`                         |
| `host.tabs.*`        | `openTab`, `openTabInBackground`, `isActive`                                                              | `navigation`                         |
| `host.dialog.*`      | `prompt(opts)` → `Promise<string \| null>`, `confirm(opts)` → `Promise<boolean>`                          | `dialog`                             |
| `host.sys.homeDir()` | The user's home directory                                                                                 | `fs:read`                            |
| `host.refresh()`     | Re-read the current directory after a mutation                                                            | `fs:read`                            |

A command's handler receives a serializable `snapshot` of `{ selectedItems, currentDirectory, clipboard }`.

### Open handlers

To intercept double-clicks (e.g. open files in a custom viewer), declare a serializable
`match` and register the runner in `setup`:

```typescript
openHandlers: [
  { id: "author.my-module.open-pdf", priority: 10, match: { extensions: ["pdf"] }, handler: "open-pdf" },
],
setup(host) {
  host.onOpen("open-pdf", (item) => { host.tabs.openTab(item.path); });
},
```

Higher priority wins; the core navigation defaults sit at priority 0.

---

## Architecture overview

```text
User keypress
  → ShortcutManager normalises → "meta+c"
  → EventBus.emit("action:dispatch", { actionId })
  → ModuleRegistry.executeAction(actionId)
  → command handler runs → host.board.writeFiles(...)
  → gateway checks "clipboard:write" permission → capabilities.ts → invoke("clipboard_write_files", ...)
  → EventBus.emit("clipboard:changed")
  → React re-render

Double-click on folder
  → ModuleRegistry.resolveOpen(item)
  → host evaluates each handler's `match`, picks the highest priority
  → runs the function registered via host.onOpen(...)
  → default: core.navigation → host.nav.navigate(path)
```

For full Mermaid diagrams of the architecture and each runtime flow, see [`docs/`](docs/).

> **Diagram maintenance:** the diagrams in `docs/` are part of the codebase. Update them in the same PR as any code change that alters how input events flow, how actions are dispatched, how modules communicate, or how the EventBus is used. Stale diagrams are treated as bugs.

---

## Roadmap / known limitations

- **Large file uploads stream nothing yet.** Files dragged from Finder are read
  fully into memory (base64) and passed through the IPC to a temp file before
  upload — fine for normal files, but a multi-GB drop will spike memory. TODO:
  stream the bytes (chunked / a native drag-drop path that yields a real local
  path) instead of base64-in-one-shot.
- **WebDAV** is read/write (browse, open, create, rename, delete, upload) but has
  **no local cache** — opening a remote file re-downloads it each time. TODO: a
  small mtime-keyed cache with a "clear cache" action.
- Keychain credentials need a **signed build** to persist reliably; in `tauri dev`
  macOS may re-prompt per access.

See `TODO.md` for the full list.

---

## Contributing

1. Fork → branch → PR against `main`
2. Keep files under ~150 lines (one concern per file)
3. No `any`. All public shapes go in `src/core/types.ts`
4. Feature logic lives in modules (`src/sandbox-builtins/`) — never in `src/core/`
5. Run `npm run build` before opening a PR (TypeScript must pass clean)

---

## License

MIT — see [LICENSE](LICENSE) for details.
