import { defineModule } from "../core/sandbox/defineModule";

// Install a Mutka module straight from a local file: right-click an `index.js` in
// the explorer → "Install as Mutka module". The action is visible ONLY on files
// named index.js (a module's entry point) via the when-clause. The handler reads
// the file (fs:read) and hands the source to the install flow (discovery), which
// opens the permission-review dialog before anything is written — same consent path
// as a GitHub install. Stage 2 adds a Browse-tab "Import local file" button + picker.

interface SelectedFile {
  path: string;
  name: string;
  isDir: boolean;
}

export default defineModule({
  id: "core.local-installer",
  name: "Local Installer",
  version: "1.0.0",
  description: "Install a module from a local index.js (right-click → Install as Mutka module).",
  permissions: ["fs:read", "discovery"],
  commands: [
    {
      id: "core.local-installer.install",
      label: "Install as Mutka module",
      icon: "download",
      contextMenu: true,
      contextMenuCategory: "Modules",
      // Only on a single file named index.js — i.e. a module entry point.
      when: { selection: "singleFile", fileNames: ["index.js"] },
    },
  ],
  setup(host) {
    host.onCommand("core.local-installer.install", async (snapshot) => {
      const item = (snapshot as { selectedItems: SelectedFile[] }).selectedItems[0];
      if (!item || item.isDir) return;
      const bytes = (await host.fs.readBytes(item.path)) as Uint8Array;
      const source = new TextDecoder().decode(bytes);
      await host.modules.install(source); // → permission-review dialog → install
    });
  },
});
