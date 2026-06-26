"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { MockWindow, type Flash } from "./MockWindow";
import {
  LEFT_RAIL,
  RIGHT_RAIL,
  MODULES,
  INITIAL_ACTIVE,
  TIMELINE,
  type ActiveMap,
  type DemoModule,
  type ModuleId,
} from "./modules";

const BY_ID: Record<string, DemoModule> = Object.fromEntries(MODULES.map((m) => [m.id, m]));

export function ModularBench() {
  const [active, setActive] = useState<ActiveMap>(INITIAL_ACTIVE);
  const [auto, setAuto] = useState(true);
  const [flash, setFlash] = useState<Flash>({ id: null, key: 0, color: "#0a84ff" });
  const fkey = useRef(0);
  const step = useRef(0);

  const fire = useCallback((id: ModuleId, on: boolean) => {
    const m = BY_ID[id];
    fkey.current += 1;
    setFlash({ id: on ? id : null, key: fkey.current, color: m.color });
  }, []);

  const set = useCallback(
    (id: ModuleId, on: boolean) => {
      setActive((prev) => {
        if (prev[id] === on) return prev;
        fire(id, on);
        return { ...prev, [id]: on };
      });
    },
    [fire],
  );

  useEffect(() => {
    if (!auto) return;
    const t = setInterval(() => {
      const a = TIMELINE[step.current % TIMELINE.length];
      step.current += 1;
      set(a.id, a.on);
    }, 2100);
    return () => clearInterval(t);
  }, [auto, set]);

  const toggle = useCallback(
    (id: ModuleId) => {
      setAuto(false);
      setActive((prev) => {
        const on = !prev[id];
        fire(id, on);
        return { ...prev, [id]: on };
      });
    },
    [fire],
  );

  return (
    <div className="bench">
      <div className="bench-grid">
        <div className="bench-rail">
          {LEFT_RAIL.map((m) => (
            <Tile key={m.id} m={m} on={active[m.id]} onToggle={toggle} />
          ))}
        </div>

        <div className="bench-core">
          <MockWindow active={active} flash={flash} />
        </div>

        <div className="bench-rail">
          {RIGHT_RAIL.map((m) => (
            <Tile key={m.id} m={m} on={active[m.id]} onToggle={toggle} />
          ))}
        </div>
      </div>

      <button type="button" className="bench-auto" onClick={() => setAuto((a) => !a)}>
        {auto ? "❙❙" : "▶"} {auto ? "auto" : "paused"}
      </button>
    </div>
  );
}

function Tile({ m, on, onToggle }: { m: DemoModule; on: boolean; onToggle: (id: ModuleId) => void }) {
  return (
    <button
      type="button"
      className={`tile${on ? " tile--on" : ""}`}
      style={{ ["--c" as string]: m.color }}
      onClick={() => onToggle(m.id)}
      aria-pressed={on}
      title={m.blurb}
    >
      <span className="tile-ico" aria-hidden>{m.glyph}</span>
      <span className="tile-name">{m.name}</span>
    </button>
  );
}
