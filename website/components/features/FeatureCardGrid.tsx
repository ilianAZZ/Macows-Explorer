import Link from "next/link";
import { FEATURE_ARTICLES } from "@/lib/features/articles";
import type { FeatureArticle } from "@/lib/features/types";

// A polished, reusable grid of feature-article cards. Shared by the homepage
// showcase and the /features hub so they can never drift. Every article is an
// equal card so the rows stay symmetric whatever the article count.

function Card({ a }: { a: FeatureArticle }) {
  return (
    <Link
      href={`/features/${a.slug}`}
      className="feat-card accent-card"
      style={{ ["--ac" as string]: a.accent }}
    >
      <span className="feat-badge">{a.badge}</span>
      <div className="feat-card-main">
        <span className="feat-label">{a.label}</span>
        <h3 className="feat-title">{a.hook}</h3>
        {a.topics && (
          <ul className="feat-topics">
            {a.topics.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        )}
      </div>
      <span className="feat-go">Read article →</span>
    </Link>
  );
}

export function FeatureCardGrid() {
  return (
    <div className="feat-grid">
      {FEATURE_ARTICLES.map((a) => (
        <Card key={a.slug} a={a} />
      ))}
    </div>
  );
}
