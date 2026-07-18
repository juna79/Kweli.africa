import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { HeroReveal } from "@/components/ui/HeroReveal";
import { getPublishedArticles, getFeaturedArticle, type Article } from "@/lib/insights";
import { industries } from "@/lib/industries";

const MUTED = "text-[var(--color-slate)]";

function industryLabel(slug: Article["industry"]) {
  if (!slug) return null;
  return industries.find((i) => i.slug === slug)?.name ?? null;
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-28 text-center lg:px-8 lg:py-36">
      <div
        aria-hidden
        className="absolute inset-0 -z-0 bg-[radial-gradient(ellipse_55%_50%_at_50%_20%,rgba(201,162,39,0.14),transparent_70%)]"
      />
      <div className="relative z-10 mx-auto max-w-2xl">
        <HeroReveal>
          <p className="text-[length:var(--text-eyebrow)] font-medium uppercase tracking-[0.2em] text-[var(--color-gold-bright)]">
            Insights
          </p>
          <h1 className="mx-auto mt-6 text-[length:var(--text-h1)] leading-[var(--text-h1--line-height)] font-bold text-[var(--color-warm-paper)]">
            Practical writing on trust.
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-[length:var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-[var(--color-slate)]">
            Notes on verification, document integrity, and where trust breaks
            down across industries.
          </p>
        </HeroReveal>
      </div>
    </section>
  );
}

function FeaturedArticle({ article }: { article: Article }) {
  const industry = industryLabel(article.industry);

  return (
    <section className="relative px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <Link
            href={`/insights/${article.slug}`}
            className="group block overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-gold)]/20 bg-white/[0.02] p-8 transition-all duration-[350ms] ease-[var(--ease-trust)] hover:border-[var(--color-gold)]/40 hover:bg-white/[0.04] lg:p-14"
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-[var(--radius-sm)] border border-[var(--color-gold)]/40 bg-[var(--color-gold)]/10 px-2.5 py-1 text-xs font-medium tracking-wide text-[var(--color-gold-bright)]">
                Featured
              </span>
              {industry && (
                <span className={`text-xs ${MUTED}`}>{industry}</span>
              )}
              <span className={`text-xs ${MUTED}`}>
                {formatDate(article.published_at)}
              </span>
            </div>
            <h2 className="mt-6 max-w-2xl text-[length:var(--text-h2)] leading-[var(--text-h2--line-height)] font-bold text-[var(--color-warm-paper)]">
              {article.title}
            </h2>
            <p className={`mt-4 max-w-2xl text-[length:var(--text-body-lg)] leading-relaxed ${MUTED}`}>
              {article.excerpt}
            </p>
            <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-gold-bright)]">
              Read the article
              <ArrowRight
                size={14}
                strokeWidth={2}
                aria-hidden
                className="transition-transform duration-150 group-hover:translate-x-0.5"
              />
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function ArticleCard({ article, delayMs }: { article: Article; delayMs: number }) {
  const industry = industryLabel(article.industry);

  return (
    <Reveal delayMs={delayMs}>
      <Link
        href={`/insights/${article.slug}`}
        className="group block h-full rounded-[var(--radius-lg)] border border-white/10 bg-white/[0.02] p-7 transition-all duration-[350ms] ease-[var(--ease-trust)] hover:-translate-y-1 hover:border-[var(--color-gold)]/40 hover:bg-white/[0.04]"
      >
        <div className="flex flex-wrap items-center gap-3">
          {industry && (
            <span className="rounded-[var(--radius-sm)] border border-white/10 px-2 py-1 text-[11px] text-[var(--color-slate)]">
              {industry}
            </span>
          )}
          <span className="text-[11px] text-[var(--color-slate)]/80">
            {formatDate(article.published_at)}
          </span>
        </div>
        <h3 className="mt-4 text-[length:var(--text-h4)] leading-[var(--text-h4--line-height)] font-bold text-[var(--color-warm-paper)]">
          {article.title}
        </h3>
        <p className={`mt-3 text-sm leading-relaxed ${MUTED}`}>{article.excerpt}</p>
        <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-gold-bright)]">
          Read more
          <ArrowRight
            size={14}
            strokeWidth={2}
            aria-hidden
            className="transition-transform duration-150 group-hover:translate-x-0.5"
          />
        </span>
      </Link>
    </Reveal>
  );
}

export function InsightsHub() {
  const published = getPublishedArticles();
  const featured = getFeaturedArticle();
  const rest = published.filter((a) => a.id !== featured?.id);

  return (
    <>
      <Hero />
      {featured && <FeaturedArticle article={featured} />}
      <section className="relative px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((article, i) => (
              <ArticleCard key={article.id} article={article} delayMs={i * 60} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
