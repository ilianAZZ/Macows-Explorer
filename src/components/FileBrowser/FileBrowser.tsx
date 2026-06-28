import type { ComponentProps, ReactNode } from "react";
import { Places } from "../Places/Places";
import { FileList } from "../FileList/FileList";
import "./FileBrowser.css";

interface FileBrowserProps {
  /** Left Places sidebar (Home + module-contributed locations). */
  places: ComponentProps<typeof Places>;
  /** The file list (all FileList props). */
  fileList: ComponentProps<typeof FileList>;
  /** Top of the main column — e.g. Toolbar + TabBar (main window) or a Breadcrumb (picker). */
  header?: ReactNode;
  /** Right pane (e.g. module sidebar panels). */
  right?: ReactNode;
  /** Bottom of the main column — e.g. the status bar. */
  footer?: ReactNode;
}

/**
 * The two-pane file-browser shell shared by the main window and the file picker:
 * the Places sidebar beside a floating "main column" card (header over the file
 * content, optional right pane + footer). The layout — the 8px gap and the rounded
 * card — lives in FileBrowser.css, so every caller looks identical.
 */
export function FileBrowser({ places, fileList, header, right, footer }: FileBrowserProps) {
  return (
    <div className="file-browser">
      <Places {...places} />
      <div className="file-browser-col">
        {header}
        <div className="file-browser-content">
          <FileList {...fileList} />
          {right}
        </div>
        {footer}
      </div>
    </div>
  );
}
