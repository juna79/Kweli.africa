import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/seo";
import { ArticlePage } from "@/components/insights/ArticlePage";
import { getArticleBySlug, getPublishedArticles } from "@/lib/insights";

export function generateStaticParams() {
  return getPublishedArticles().map((article) => ({ slug: article.slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  const title = article?.title ?? "Insights";
  const description = article?.excerpt;
  return {
    title,
    description,
    alternates: article ? { canonical: `/insights/${slug}` } : undefined,
    openGraph: {
      title: `${title} — Kweli`,
      description,
      siteName: "Kweli",
      type: "article",
      ...(article && {
        url: `/insights/${slug}`,
        publishedTime: article.published_at,
        modifiedTime: article.updated_at,
        authors: [article.author_name],
      }),
    },
    twitter: { title: `${title} — Kweli`, description },
  };
}

export default async function InsightArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  return (
    <>
      <JsonLd
        data={articleSchema({
          title: article.title,
          description: article.excerpt,
          slug: article.slug,
          publishedAt: article.published_at,
          updatedAt: article.updated_at,
          authorName: article.author_name,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Insights", path: "/insights" },
          { name: article.title, path: `/insights/${slug}` },
        ])}
      />
      <Header />
      <main className="flex-1">
        <ArticlePage article={article} />
      </main>
      <Footer />
    </>
  );
}
