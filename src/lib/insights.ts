import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import type { Industry } from "@/lib/industries";

// Articles live as Markdown files in /content/insights — see that folder's
// README for how to add, edit, or remove one. Nothing in this file needs
// to change to publish a new article; it only needs to change if the
// frontmatter schema itself changes.
export type ArticleStatus = "draft" | "published";

export type Article = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  /** Rendered HTML, ready to inject into the article body. */
  bodyHtml: string;
  cover_image_url: string | null;
  industry: Industry["slug"] | null;
  status: ArticleStatus;
  is_featured: boolean;
  author_name: string;
  published_at: string;
  updated_at: string;
};

const CONTENT_DIR = path.join(process.cwd(), "content", "insights");

function loadArticles(): Article[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  const files = fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".md") && f.toLowerCase() !== "readme.md");

  return files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(CONTENT_DIR, filename), "utf8");
    const { data, content } = matter(raw);

    const publishedAt = data.published_at ? new Date(data.published_at).toISOString() : new Date().toISOString();
    const updatedAt = data.updated_at ? new Date(data.updated_at).toISOString() : publishedAt;

    return {
      id: slug,
      title: String(data.title ?? slug),
      slug,
      excerpt: String(data.excerpt ?? ""),
      bodyHtml: marked.parse(content, { async: false }) as string,
      cover_image_url: data.cover_image_url ?? null,
      industry: (data.industry as Industry["slug"] | undefined) ?? null,
      status: (data.status as ArticleStatus | undefined) ?? "published",
      is_featured: Boolean(data.featured),
      author_name: String(data.author_name ?? "Kweli Team"),
      published_at: publishedAt,
      updated_at: updatedAt,
    };
  });
}

// Read once per server process / build — content is static Markdown, not
// user data, so there's no need to re-read the directory on every call.
let cachedArticles: Article[] | null = null;
function getArticles(): Article[] {
  if (!cachedArticles) cachedArticles = loadArticles();
  return cachedArticles;
}

export function getPublishedArticles(): Article[] {
  return getArticles()
    .filter((a) => a.status === "published")
    .sort((a, b) => (a.published_at < b.published_at ? 1 : -1));
}

export function getFeaturedArticle(): Article | undefined {
  const published = getPublishedArticles();
  return published.find((a) => a.is_featured) ?? published[0];
}

export function getArticleBySlug(slug: string): Article | undefined {
  return getArticles().find((a) => a.slug === slug && a.status === "published");
}
