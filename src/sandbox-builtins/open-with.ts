import { defineModule } from "../core/sandbox/defineModule";

// BUILT-IN MODULE — "Open With…", the way Finder lets you pick which app opens a
// file. The whole decision (list apps → show picker → launch choice) lives here;
// the core only provides the Launch Services bridge (sys.appsForFile/openWith)
// and the generic choose-dialog. Written in the same format as a community module.

/** Shape of each entry returned by host.sys.appsForFile (mirrors core AppInfo). */
interface AppEntry {
  name: string;
  path: string;
  icon: string;
  isDefault: boolean;
}

export default defineModule({
  id: "core.open-with",
  name: "Open With",
  version: "1.0.0",
  description: "Open the selected file with a chosen application, like Finder's \"Open With\".",
  permissions: ["fs:read", "dialog"], // appsForFile/openWith need fs:read, the picker needs dialog
  commands: [
    {
      id: "core.open-with.choose",
      label: "Open With…",
      icon: "external-link",
      contextMenu: true,
      contextMenuCategory: "View",
      when: { selection: "single" },
    },
  ],
  setup(host) {
    // Show the "Open With" picker for one file: list apps, let the user choose,
    // then launch. Used both by the menu command and by the no-app open fallback.
    async function pickAndOpen(path: string, name: string): Promise<void> {
      const apps = (await host.sys.appsForFile(path)) as AppEntry[];
      if (!apps || apps.length === 0) {
        await host.dialog.confirm({
          message: `No application can open “${name}”.`,
          detail: "macOS has no app associated with this file type.",
        });
        return;
      }

      const choice = (await host.dialog.choose({
        message: `Open “${name}” with:`,
        options: apps.map((app) => ({
          label: app.isDefault ? `${app.name} (default)` : app.name,
          value: app.path,
          detail: app.path,
          icon: app.icon || undefined,
        })),
      })) as string | null;

      if (choice) await host.sys.openWith(path, choice);
    }

    // Right-click → "Open With…".
    host.onCommand("core.open-with.choose", async (snap) => {
      const target = snap.selectedItems[0];
      if (target) await pickAndOpen(target.path, target.name);
    });

    // Double-clicking a file no app claims (the default open failed) → picker,
    // just like Finder's "There is no application set to open the document".
    host.events.on("file:open-no-app", (payload) => {
      const { path, name } = payload as { path: string; name: string };
      void pickAndOpen(path, name);
    });
  },
});
