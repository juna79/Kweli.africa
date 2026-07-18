# Insights articles

Every article on `/insights` comes from a Markdown file in this folder. Nothing
in the application code needs to change to add, edit, or remove one.

## Add a new article

1. Create a new file here named after the URL you want, e.g.
   `content/insights/why-verification-matters-for-banks.md`. The filename
   (without `.md`) becomes the article's URL: `/insights/why-verification-matters-for-banks`.
2. Add frontmatter at the top, then the article body in Markdown below it:

   ```md
   ---
   title: "Your Article Title"
   excerpt: "One or two sentences shown on the Insights list page."
   industry: insurance
   author_name: "Kweli Team"
   published_at: "2026-08-01"
   featured: false
   ---
   Your first paragraph.

   Your second paragraph, with **bold text**, a [link](https://example.com),
   and anything else standard Markdown supports.
   ```

3. Save the file. On the next build/deploy it appears automatically —
   nothing else to touch.

## Frontmatter fields

| Field | Required | Notes |
|---|---|---|
| `title` | Yes | Article headline. |
| `excerpt` | Yes | Shown on the Insights list page and in link previews. |
| `published_at` | Yes | `YYYY-MM-DD`. Controls sort order (newest first). |
| `industry` | No | One of the slugs in `src/lib/industries.ts` (e.g. `insurance`, `banking`, `healthcare`, `trade`, `education`, `government`, `professional-services`). Omit for a general article not tied to one industry. |
| `author_name` | No | Defaults to `Kweli Team`. |
| `featured` | No | `true` to feature this article at the top of `/insights`. Only one article should be featured at a time — if several are, the newest wins. |
| `status` | No | Set to `draft` to keep a file in this folder without publishing it. Defaults to `published`. |
| `updated_at` | No | `YYYY-MM-DD`. Defaults to `published_at`. Only affects the sitemap's last-modified date. |

## Edit or remove an article

Edit the Markdown file directly, or delete it — the site updates on the next
build. There is no separate step anywhere else in the codebase.

## Content policy

Every article must be genuine: real events, real industries, real
organisations, or a genuine opinion/educational piece written in Kweli's own
voice. Never write an article as if a specific event, statistic, quote, or
case study happened when it didn't. If real, published content isn't
available yet, write evergreen thought-leadership instead of inventing news.
