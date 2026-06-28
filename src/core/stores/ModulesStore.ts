import { EventBus } from "../event-bus/EventBus";
import { Events } from "../event-bus/events";

/**
 * Whether the module-manager overlay is open. State only — mirrors SettingsStore.
 * The overlay is core UI (a dedicated panel for installing/enabling/disabling
 * modules), opened directly by React (e.g. from the Settings panel) via setOpen.
 * App renders the panel from the `modules-ui:changed` event.
 */
class ModulesStoreClass {
  private _open = false;
  /** A module source awaiting the install-review dialog (set by requestInstall). */
  private _pendingInstall: string | null = null;

  /** Whether the module-manager overlay is currently shown. */
  get open(): boolean {
    return this._open;
  }

  setOpen(value: boolean): void {
    if (this._open === value) return;
    this._open = value;
    EventBus.emit(Events.ModulesUi.changed, { open: value });
  }

  toggle(): void {
    this.setOpen(!this._open);
  }

  /**
   * Ask the overlay to review + install a raw module source (e.g. a local index.js
   * a module read from disk). Opens the overlay and signals ModulesPanel, which
   * probes the source and shows the permission-review dialog. Consumed once via
   * takePendingInstall().
   */
  requestInstall(source: string): void {
    this._pendingInstall = source;
    this.setOpen(true); // emit is a no-op if already open; the event below drives it
    EventBus.emit(Events.ModulesUi.installRequested);
  }

  /** Consume the pending install source (returns it once, then clears it). */
  takePendingInstall(): string | null {
    const source = this._pendingInstall;
    this._pendingInstall = null;
    return source;
  }
}

export const ModulesStore = new ModulesStoreClass();
