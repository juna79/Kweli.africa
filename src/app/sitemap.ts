import type { MetadataRoute } from "next";
import { industries } from "@/lib/industries";
import { getPublishedArticles } from "@/lib/insights";
import { siteUrl } from "@/lib/seo";

type Priority = MetadataRoute.Sitemap[number]["priority"];
type ChangeFrequency = MetadataRoute.Sitemap[number]["changeFrequency"];

const staticRouteMeta: Record<string, { priority: Priority; changeFrequency: ChangeFrequency }> = {
  "": { priority: 1, changeFrequency: "weekly" },
  "/why-kweli": { priority: 0.9, changeFrequency: "monthly" },
  "/industries": { priority: 0.9, changeFrequency: "monthly" },
  "/technology": { priority: 0.9, changeFrequency: "monthly" },
  "/verify": { priority: 0.9, changeFrequency: "monthly" },
  "/insights": { priority: 0.7, changeFrequency: "weekly" },
  "/about": { priority: 0.6, changeFrequency: "monthly" },
  "/book-a-demo": { priority: 0.8, changeFrequency: "monthly" },
  "/privacy": { priority: 0.2, changeFrequency: "yearly" },
  "/terms": { priority: 0.2, changeFrequency: "yearly" },
  "/cookies": { priority: 0.2, changeFrequency: "yearly" },
};

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = Object.entries(staticRouteMeta).map(([route, meta]) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    ...meta,
  }));

  const industryRoutes = industries.map((industry) => ({
    url: `${siteUrl}/industries/${industry.slug}`,
    lastModified: new Date(),
    priority: 0.8 as Priority,
    changeFrequency: "monthly" as ChangeFrequency,
  }));

  const articleRoutes = getPublishedArticles().map((article) => ({
    url: `${siteUrl}/insights/${article.slug}`,
    lastModified: new Date(article.updated_at),
    priority: 0.6 as Priority,
    changeFrequency: "monthly" as ChangeFrequency,
  }));

  return [...staticRoutes, ...industryRoutes, ...articleRoutes];
}
