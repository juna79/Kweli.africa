import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
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
    openGraph: {
      title: `${title} — Kweli`,
      description,
      siteName: "Kweli",
      type: "article",
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
      <Header />
      <main className="flex-1">
        <ArticlePage article={article} />
      </main>
      <Footer />
    </>
  );
}
