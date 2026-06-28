---
bump: minor
---

Install a module from a local `index.js` via the file explorer. A new built-in
**Local Installer** module adds a right-click **"Install as Mutka module"** action
that is visible only on files named `index.js` (a module entry point), reads the
file (`fs:read`), and hands the source to the install flow, which opens the usual
permission-review dialog before anything is written.

Supporting changes:
- `WhenClause` gains `fileNames` / `extensions`, so a command can be shown only for
  specific files (the action uses `fileNames: ["index.js"]`).
- New `host.modules.install(source)` capability (gated by `discovery`) that proposes
  a source to the Modules overlay's review dialog via `ModulesStore.requestInstall` —
  modules propose, the user approves. (Stage 2 will add a Browse-tab "Import local
  file" button + a Mutka file picker via a module-contributed button extension point.)
