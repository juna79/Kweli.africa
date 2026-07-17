import type { MetadataRoute } from "next";
import { industries } from "@/lib/industries";
import { getPublishedArticles } from "@/lib/insights";

const siteUrl = "https://kweli.africa";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/why-kweli",
    "/industries",
    "/technology",
    "/insights",
    "/about",
    "/book-a-demo",
    "/verify",
    "/privacy",
    "/terms",
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));

  const industryRoutes = industries.map((industry) => ({
    url: `${siteUrl}/industries/${industry.slug}`,
    lastModified: new Date(),
  }));

  const articleRoutes = getPublishedArticles().map((article) => ({
    url: `${siteUrl}/insights/${article.slug}`,
    lastModified: new Date(article.updated_at),
  }));

  return [...staticRoutes, ...industryRoutes, ...articleRoutes];
}
