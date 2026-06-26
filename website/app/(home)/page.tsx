import Link from "next/link";
import { GITHUB_URL } from "../layout.config";
import { ModularBench } from "@/components/demo/ModularBench";

const WHY = [
  {
    kicker: "no fork",
    color: "#0a84ff",
    title: "Community-first",
    body: "Anyone can extend the app without forking it or touching core code. A module is a single file that imports nothing from Mutka.",
    proof: [
      { t: 'import { } from "mutka"', cls: "tok-str" },
      { t: "  // nothing", cls: "tok-com" },
    ],
  },
  {
    kicker: "deny by default",
    color: "#30d158",
    title: "Safe by design",
    body: "A module only gets the capabilities it declares. Anything it didn't ask for is denied at the gateway.",
    proof: [
      { t: "host.fs.write()", cls: "tok-fn" },
      { t: "  → ✗ blocked", cls: "tok-com" },
    ],
  },
  {
    kicker: "no special API",
    color: "#bf5af2",
    title: "Built-in = community",
    body: "There is no privileged “official” API. The features Mutka ships with use the exact same defineModule shape you would.",
    proof: [
      { t: "core.clipboard", cls: "tok-fn" },
      { t: " === ", cls: "tok-punc" },
      { t: "defineModule()", cls: "tok-key" },
    ],
  },
];

const HOW = [
  {
    n: "01",
    color: "#0a84ff",
    title: "One format",
    body: "export default defineModule({ id, permissions, commands, openHandlers, setup }). Built-ins and community add-ons are byte-identical.",
  },
  {
    n: "02",
    color: "#ff9f0a",
    title: "Two runtimes",
    body: "Trusted built-ins run in-process; untrusted community modules run isolated in a Web Worker. Same source, swapped in one line.",
  },
  {
    n: "03",
    color: "#ff375f",
    title: "One gateway",
    body: "Every host.* call is checked against the module's declared permissions before it can reach the system.",
  },
];

const IDEAS = [
  {
    badge: "SQL",
    color: "#0a84ff",
    id: "com.sqlite-browser",
    body: "Claims every .sqlite file and renders its tables & rows right in the pane.",
    tag: "database",
  },
  {
    badge: "MCP",
    color: "#bf5af2",
    id: "com.mcp-bridge",
    body: "Exposes the current folder as tools an AI agent can call — let Claude act on your files.",
    tag: "network",
  },
  {
    badge: "DAV",
    color: "#5ac8fa",
    id: "com.webdav",
    body: "Mounts WebDAV, S3 or Nextcloud as a Place in the sidebar — a virtual filesystem.",
    tag: "filesystem",
  },
  {
    badge: "IMG",
    color: "#ff375f",
    id: "com.thumbs",
    body: "Swaps native icons for live thumbnails, waveform strips or EXIF badges.",
    tag: "ui",
  },
  {
    badge: "∑",
    color: "#ff9f0a",
    id: "com.dir-stats",
    body: "Computes folder sizes, duplicates or git status into the status bar.",
    tag: "statusbar",
  },
  {
    badge: "+",
    color: "#30d158",
    id: "your.next-idea",
    body: "Encrypted vaults, batch renamers, terminal launchers… if the core exposes it, a module can do it.",
    tag: "anything",
    ghost: true,
  },
];

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col">
      {/* Hero — kept light: a title, one line, then the live demo */}
      <section className="bench-stage">
        <div className="mx-auto mb-9 max-w-2xl text-center">
          <h1 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-[2.7rem] sm:leading-[1.08]">
            A file explorer built out of{" "}
            <span
              style={{
                background: "linear-gradient(110deg, #0a84ff, #bf5af2 55%, #ff375f)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              modules
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-fd-muted-foreground">
            Mutka keeps a tiny core and lets everything else — even copy-paste and
            navigation — snap on as modules. Plug one in and watch the window
            rebuild itself.
          </p>
          <div className="hero-badges">
            <span className="hero-badge" style={{ ["--ac" as string]: "#0a84ff" }}>
              One-file modules
            </span>
            <span className="hero-badge" style={{ ["--ac" as string]: "#30d158" }}>
              Permission-sandboxed
            </span>
            <span className="hero-badge" style={{ ["--ac" as string]: "#ff9f0a" }}>
              AI-buildable
            </span>
          </div>
        </div>
        <ModularBench />
      </section>

      {/* What */}
      <section className="mx-auto w-full max-w-3xl px-6 py-14">
        <h2 className="text-2xl font-semibold tracking-tight">What is Mutka?</h2>
        <p className="mt-4 text-[15px] leading-relaxed text-fd-muted-foreground">
          Mutka is a community-driven, modular file explorer for macOS, built with
          Tauri&nbsp;2 and React. The core ships only infrastructure — a module
          registry, an event bus, a shortcut manager and a permission-checked
          gateway. Every real feature is a module: copy and paste, file creation,
          navigation, list columns, cloud mounts. The features that ship in the box
          and the ones you install from the community are written the same way.
        </p>
      </section>

      {/* Why — an engineering "spec sheet": each guarantee backed by a
          one-line code proof of the mechanism, not a generic emoji card. */}
      <section className="mx-auto w-full max-w-5xl px-6 py-6">
        <h2 className="mb-2 text-2xl font-semibold tracking-tight">
          Why build it this way?
        </h2>
        <p className="mb-8 text-sm text-fd-muted-foreground">
          Three guarantees fall out of the architecture for free — each one true
          because of a single line of code.
        </p>
        <div className="spec">
          {WHY.map((w, i) => (
            <div
              key={w.title}
              className="spec-col"
              style={{ ["--ac" as string]: w.color }}
            >
              <span className="spec-kick">
                <em>{String(i + 1).padStart(2, "0")}</em> {w.kicker}
              </span>
              <h3 className="spec-title">{w.title}</h3>
              <p className="spec-body">{w.body}</p>
              <code className="spec-proof">
                {w.proof.map((p, j) => (
                  <span key={j} className={p.cls}>
                    {p.t}
                  </span>
                ))}
              </code>
            </div>
          ))}
        </div>
      </section>

      {/* How — colourful numbered steps + syntax-highlighted code */}
      <section className="mx-auto grid w-full max-w-5xl items-start gap-10 px-6 py-14 lg:grid-cols-[1fr_0.95fr]">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">How a module works</h2>
          <p className="mt-3 text-sm text-fd-muted-foreground">
            One format, two runtimes, one gateway — the whole architecture in three
            ideas.
          </p>
          <div className="mt-7 flex flex-col gap-6">
            {HOW.map((h) => (
              <div key={h.n} className="flex gap-4">
                <span className="step-num" style={{ ["--ac" as string]: h.color }}>
                  {h.n}
                </span>
                <div>
                  <h3 className="text-[15px] font-semibold">{h.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-fd-muted-foreground">
                    {h.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <Link
            href="/docs"
            className="mt-7 inline-block text-sm font-medium text-[var(--mutka-accent)] underline-offset-4 hover:underline"
          >
            Read the documentation →
          </Link>
        </div>

        <pre className="code-card overflow-x-auto rounded-xl border border-fd-border p-5 text-[12.5px] leading-relaxed lg:sticky lg:top-24">
          <code>
            <span className="tok-key">export default</span>{" "}
            <span className="tok-fn">defineModule</span>
            <span className="tok-punc">({"{"}</span>
            {"\n  "}
            <span className="tok-prop">id</span>
            <span className="tok-punc">:</span>{" "}
            <span className="tok-str">&quot;com.nextcloud&quot;</span>
            <span className="tok-punc">,</span>
            {"\n  "}
            <span className="tok-prop">permissions</span>
            <span className="tok-punc">:</span> [
            <span className="tok-str">&quot;network&quot;</span>]
            <span className="tok-punc">,</span>
            {"\n  "}
            <span className="tok-prop">sidebarItems</span>
            <span className="tok-punc">:</span> [
            {"\n    "}
            <span className="tok-punc">{"{"}</span>{" "}
            <span className="tok-prop">category</span>
            <span className="tok-punc">:</span>{" "}
            <span className="tok-str">&quot;Cloud&quot;</span>
            <span className="tok-punc">,</span>
            {"\n      "}
            <span className="tok-prop">label</span>
            <span className="tok-punc">:</span>{" "}
            <span className="tok-str">&quot;Nextcloud&quot;</span>
            <span className="tok-punc">,</span>
            {"\n      "}
            <span className="tok-prop">path</span>
            <span className="tok-punc">:</span>{" "}
            <span className="tok-str">&quot;nextcloud://&quot;</span>{" "}
            <span className="tok-punc">{"},"}</span>
            {"\n  ],"}
            {"\n  "}
            <span className="tok-fn">setup</span>
            <span className="tok-punc">(host) {"{"}</span>
            {"\n    host."}
            <span className="tok-fn">onList</span>
            <span className="tok-punc">(</span>
            <span className="tok-str">&quot;nextcloud&quot;</span>
            <span className="tok-punc">, (path) ={">"}</span>
            {"\n      host.net.dav."}
            <span className="tok-fn">list</span>
            <span className="tok-punc">(path));</span>{" "}
            <span className="tok-com">// gated by &quot;network&quot;</span>
            {"\n  "}
            <span className="tok-punc">{"}"}</span>
            <span className="tok-punc">,</span>
            {"\n"}
            <span className="tok-punc">{"});"}</span>
          </code>
        </pre>
      </section>

      {/* Built by AI */}
      <section className="mx-auto w-full max-w-5xl px-6 py-14">
        <div
          className="accent-card overflow-hidden p-8 sm:p-10"
          style={{ ["--ac" as string]: "#bf5af2" }}
        >
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <span
                className="hero-badge"
                style={{ ["--ac" as string]: "#bf5af2" }}
              >
                Built for the AI era
              </span>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight">
                Modules are designed to be built by AI
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-fd-muted-foreground">
                Because a module is one self-contained file with a tiny, declared
                surface — no imports, no build step, no hidden globals — it&apos;s the
                perfect shape for a language model to generate. Describe what you
                want, get a working module, drop it in{" "}
                <code className="rounded bg-fd-muted px-1.5 py-0.5 text-[12px]">
                  ~/.mutka/modules/
                </code>
                . No glue. Just plug it in.
              </p>
              <ul className="mt-5 flex flex-col gap-2 text-sm text-fd-muted-foreground">
                <li>✅ One file, zero core imports — nothing to wire up</li>
                <li>✅ Permissions are explicit, so the AI can&apos;t overreach</li>
                <li>✅ The same shape powers every built-in feature</li>
              </ul>
            </div>

            <div className="code-card rounded-xl border border-fd-border p-5 text-[12.5px] leading-relaxed">
              <div className="mb-3 flex items-center gap-2 text-fd-muted-foreground">
                <span className="accent-chip" style={{ ["--ac" as string]: "#bf5af2", width: 26, height: 26, fontSize: 13 }}>
                  ✦
                </span>
                <span className="text-[12px]">prompt to your AI</span>
              </div>
              <p className="rounded-lg bg-fd-muted/60 p-3 text-[13px] leading-relaxed">
                “Write a Mutka module that adds a{" "}
                <strong>Word count</strong> column for{" "}
                <code className="text-[12px]">.txt</code> files.”
              </p>
              <div className="mt-3 font-mono text-[11.5px] text-fd-muted-foreground">
                <span className="tok-key">export default</span><br />
                <span className="tok-fn">defineModule</span>(
                {"{"} <span className="tok-prop">id</span>:{" "}
                <span className="tok-str">&quot;ai.wordcount&quot;</span>, … {"})"}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Crazy ideas */}
      <section className="mx-auto w-full max-w-5xl px-6 py-6">
        <h2 className="text-2xl font-semibold tracking-tight">
          Go a little crazy
        </h2>
        <p className="mt-2 mb-7 text-sm text-fd-muted-foreground">
          The core is small on purpose — so the wild ideas live in modules. Here&apos;s
          what a folder of them looks like:
        </p>

        {/* The ideas, shown the way Mutka would show them: a directory listing. */}
        <div className="mod-browser">
          <div className="mod-bar">
            <div className="mod-lights">
              <i style={{ background: "#ff5f57" }} />
              <i style={{ background: "#febc2e" }} />
              <i style={{ background: "#28c840" }} />
            </div>
            <span className="mod-path">
              ~/.mutka/<b>modules</b>
            </span>
            <span className="mod-count">{IDEAS.length} items</span>
          </div>
          <div className="mod-head">
            <span>Name</span>
            <span className="mod-desc-h">What it does</span>
            <span>Permission</span>
          </div>
          {IDEAS.map((idea) => (
            <div
              key={idea.id}
              className={`mod-row${idea.ghost ? " mod-row--ghost" : ""}`}
              style={{ ["--ac" as string]: idea.color }}
            >
              <div className="mod-name-cell">
                <span className="mod-ico" style={{ ["--ac" as string]: idea.color }}>
                  {idea.badge}
                </span>
                <span className="mod-name">
                  <b>{idea.id}</b>
                  <span>index.js</span>
                </span>
              </div>
              <span className="mod-desc">{idea.body}</span>
              <span className="mod-tag" style={{ ["--ac" as string]: idea.color }}>
                {idea.tag}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/docs/modules/writing-a-module"
            className="rounded-lg bg-[var(--mutka-accent)] px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
          >
            Write your first module →
          </Link>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-fd-border px-4 py-2 text-sm font-medium transition hover:bg-fd-muted"
          >
            Star on GitHub
          </a>
        </div>
      </section>

      <footer className="mt-10 border-t border-fd-border px-6 py-7 text-center text-xs text-fd-muted-foreground">
        Mutka · MIT licensed ·{" "}
        <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="underline underline-offset-4">
          GitHub
        </a>
      </footer>
    </main>
  );
}
