import type { ActiveMap, ModuleId } from "./modules";

export interface Flash {
  id: ModuleId | null;
  key: number;
  color: string;
}

interface Row {
  name: string;
  kind: string;
  date: string;
  size: string;
  count?: string;
  type: "folder" | "pdf" | "image" | "md" | "zip";
}

const ROWS: Row[] = [
  { name: "Projects", kind: "Folder", date: "Today 09:14", size: "—", count: "24 items", type: "folder" },
  { name: "cover.png", kind: "PNG image", date: "Mon 18:20", size: "5.1 MB", type: "image" },
  { name: "report.pdf", kind: "PDF document", date: "Yesterday", size: "2.4 MB", type: "pdf" },
  { name: "notes.md", kind: "Markdown", date: "Mon 11:02", size: "12 KB", type: "md" },
  { name: "archive.zip", kind: "Archive", date: "12 Jun", size: "1.1 GB", type: "zip" },
];

const EXT: Record<Exclude<Row["type"], "folder">, { label: string; color: string }> = {
  pdf: { label: "PDF", color: "#ff453a" },
  image: { label: "PNG", color: "#ff375f" },
  md: { label: "MD", color: "#0a84ff" },
  zip: { label: "ZIP", color: "#ff9f0a" },
};

export function MockWindow({ active, flash }: { active: ActiveMap; flash: Flash }) {
  const { nextcloud, columns, dirstats, media, tabs, midnight } = active;

  const on = (id: ModuleId) => flash.id === id;
  const hotCls = (id: ModuleId) => (on(id) ? " mw-hot" : "");
  const hotStyle = (id: ModuleId) =>
    on(id) ? ({ ["--hot" as string]: flash.color } as React.CSSProperties) : undefined;
  const hotKey = (id: ModuleId) => (on(id) ? flash.key : 0);

  return (
    <div className={`mw${midnight ? " mw--dark" : ""}`} role="img" aria-label="Mutka preview">
      {tabs && (
        <div
          key={`tabs-${hotKey("tabs")}`}
          className={`mw-tabs mw-mount${hotCls("tabs")}`}
          style={hotStyle("tabs")}
        >
          <span className="mw-tab mw-tab--on">Projects</span>
          <span className="mw-tab">Downloads</span>
        </div>
      )}

      <div className="mw-toolbar">
        <span className="mw-lights">
          <i style={{ background: "#ff5f57" }} />
          <i style={{ background: "#febc2e" }} />
          <i style={{ background: "#28c840" }} />
        </span>
        <span className="mw-crumb">Home <b>›</b> Projects</span>
      </div>

      <div className="mw-body">
        <aside className="mw-side">
          <p className="mw-side-h">Favourites</p>
          <ul>
            <li className="mw-side-i mw-side-i--on"><i className="d-home" />Home</li>
            <li className="mw-side-i"><i className="d-docs" />Documents</li>
            <li className="mw-side-i"><i className="d-down" />Downloads</li>
          </ul>
          {nextcloud && (
            <div
              key={`nc-${hotKey("nextcloud")}`}
              className={`mw-mount${hotCls("nextcloud")}`}
              style={hotStyle("nextcloud")}
            >
              <p className="mw-side-h">Cloud</p>
              <ul>
                <li className="mw-side-i mw-side-i--cloud"><i className="d-cloud" />Nextcloud</li>
              </ul>
            </div>
          )}
        </aside>

        <div
          key={`list-${hotKey("media")}`}
          className={`mw-list${hotCls("media")}`}
          style={hotStyle("media")}
        >
          <div
            key={`head-${hotKey("columns")}`}
            className={`mw-row mw-head cols-${columns ? "x" : "0"}${hotCls("columns")}`}
            style={hotStyle("columns")}
          >
            <span className="c-name">Name</span>
            {columns && <span className="c-kind">Kind</span>}
            {columns && <span className="c-date">Date</span>}
            <span className="c-size">Size</span>
          </div>
          {ROWS.map((r, i) => (
            <div key={r.name} className={`mw-row cols-${columns ? "x" : "0"}${i === 0 ? " mw-row--sel" : ""}`}>
              <span className="c-name">
                {r.type === "folder" ? (
                  <span className="mw-folder" aria-hidden />
                ) : !media ? (
                  <span className="mw-blank" aria-hidden />
                ) : r.type === "image" ? (
                  <span className="mw-thumb" aria-hidden />
                ) : (
                  <span className="mw-doc" style={{ ["--doc" as string]: EXT[r.type].color }} aria-hidden>
                    <b>{EXT[r.type].label}</b>
                  </span>
                )}
                <span className="mw-fname">{r.name}</span>
              </span>
              {columns && <span className="c-kind">{r.kind}</span>}
              {columns && <span className="c-date">{r.date}</span>}
              <span className="c-size">{dirstats && r.type === "folder" ? r.count : r.size}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mw-status">
        {dirstats && (
          <span
            key={`ds-${hotKey("dirstats")}`}
            className={`mw-status-group${hotCls("dirstats")}`}
            style={hotStyle("dirstats")}
          >
            <span>5 items</span>
            <span className="mw-status-dot">·</span>
            <span>1 selected</span>
            <span className="mw-status-dot">·</span>
            <span className="mw-status-acc">1.21 GB on disk</span>
          </span>
        )}
      </div>
    </div>
  );
}
