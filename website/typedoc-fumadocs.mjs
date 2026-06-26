// Tiny TypeDoc plugin: give every generated Markdown page the YAML frontmatter
// Fumadocs needs (a `title`, and a `description` for SEO). Runs after
// typedoc-plugin-markdown and typedoc-plugin-frontmatter in the plugin chain.
import { MarkdownPageEvent } from "typedoc-plugin-markdown";

export function load(app) {
  app.renderer.on(MarkdownPageEvent.BEGIN, (page) => {
    const name = page.model?.name ?? "API Reference";
    const kind = page.model?.kindString ?? "Reference";
    page.frontmatter = {
      title: name,
      description: `${kind} — ${name} in the Mutka module API.`,
      ...page.frontmatter,
    };
  });
}
