// The modules shown on the interactive bench. Each one, when "plugged in",
// mutates a different part of the mock Mutka window — so the modularity is
// something you watch happen, not a paragraph you read.

export type ModuleId =
  | "nextcloud"
  | "columns"
  | "dirstats"
  | "media"
  | "tabs"
  | "midnight";

export interface DemoModule {
  id: ModuleId;
  name: string;
  /** Short author-style id, shown in monospace. */
  handle: string;
  glyph: string;
  color: string;
  /** One-line description of what it contributes. */
  blurb: string;
  /** What scrolls into the live event log when it connects. */
  event: string;
}

export const MODULES: DemoModule[] = [
  {
    id: "nextcloud",
    name: "Nextcloud",
    handle: "com.nextcloud",
    glyph: "☁",
    color: "#0a84ff",
    blurb: "Mounts a remote account as a Place in the sidebar.",
    event: "sidebar → “Nextcloud” place mounted",
  },
  {
    id: "columns",
    name: "Columns",
    handle: "core.columns",
    glyph: "▦",
    color: "#30d158",
    blurb: "Adds Kind + Date Modified columns to the list view.",
    event: "list view → 2 columns added",
  },
  {
    id: "dirstats",
    name: "Dir Stats",
    handle: "com.dir-stats",
    glyph: "∑",
    color: "#ff9f0a",
    blurb: "Computes folder totals into the status bar.",
    event: "status bar → folder size computed",
  },
  {
    id: "media",
    name: "Media Icons",
    handle: "com.thumbs",
    glyph: "◧",
    color: "#ff375f",
    blurb: "Replaces native icons with live image thumbnails.",
    event: "icons → image previews rendered",
  },
  {
    id: "tabs",
    name: "Tabs",
    handle: "core.tabs",
    glyph: "⊟",
    color: "#bf5af2",
    blurb: "Contributes a tab strip above the toolbar.",
    event: "chrome → tab strip mounted",
  },
  {
    id: "midnight",
    name: "Midnight",
    handle: "com.midnight",
    glyph: "◐",
    color: "#64d2ff",
    blurb: "Swaps the whole window to dark Liquid Glass.",
    event: "theme → dark Liquid Glass applied",
  },
];

export const LEFT_RAIL = MODULES.slice(0, 3);
export const RIGHT_RAIL = MODULES.slice(3);

export type ActiveMap = Record<ModuleId, boolean>;

export const INITIAL_ACTIVE: ActiveMap = {
  nextcloud: true,
  columns: true,
  dirstats: false,
  media: true,
  tabs: false,
  midnight: false,
};

// Scripted autoplay timeline — explicit on/off so it's idempotent regardless of
// where the user left the state. Drives the "live" plug/unplug loop.
export const TIMELINE: Array<{ id: ModuleId; on: boolean }> = [
  { id: "media", on: true },
  { id: "tabs", on: true },
  { id: "dirstats", on: true },
  { id: "midnight", on: true },
  { id: "columns", on: false },
  { id: "nextcloud", on: false },
  { id: "media", on: false },
  { id: "midnight", on: false },
  { id: "columns", on: true },
  { id: "nextcloud", on: true },
  { id: "tabs", on: false },
  { id: "dirstats", on: false },
];
