---
bump: patch
---

Two fixes:

- **`http_request` no longer freezes the UI.** ureq is a blocking client and a
  synchronous Tauri command runs on the main thread, so a network call (e.g. loading
  the GitHub catalog) blocked the whole window — you couldn't click anything until it
  finished. The command is now `async` and runs the request on the blocking pool
  (`spawn_blocking`), keeping the UI responsive.
- **Extracted a shared `<FileBrowser>` shell** (the Places sidebar + the floating
  main-column card + content row) used by BOTH the main window and the file picker, so
  there's one layout instead of a hand-rolled copy. The file picker now renders it
  (with a Breadcrumb header) inside an opaque glass modal — so it has the same gap/card
  as Mutka, and its Places sidebar lets you jump to a `webdav:`/provider mount and pick
  a file there, not just walk the local disk. (`#main-col`/`#content-row` CSS moved to
  `FileBrowser.css`.)
