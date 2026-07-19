import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { HeroReveal } from "@/components/ui/HeroReveal";
import { Button } from "@/components/ui/Button";
import { industries } from "@/lib/industries";
import type { Article } from "@/lib/insights";

const MUTED = "text-[var(--color-slate)]";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function ArticlePage({ article }: { article: Article }) {
  const industry = article.industry
    ? industries.find((i) => i.slug === article.industry)
    : null;

  return (
    <article className="relative px-6 py-28 lg:px-8 lg:py-36">
      <div className="mx-auto max-w-2xl">
        <HeroReveal>
          <Link
            href="/insights"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-slate)] transition-colors duration-150 hover:text-[var(--color-gold-bright)]"
          >
            <ArrowLeft size={14} strokeWidth={2} aria-hidden />
            Insights
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {industry && (
              <Link
                href={`/industries/${industry.slug}`}
                className="rounded-[var(--radius-sm)] border border-white/10 px-2.5 py-1 text-xs text-[var(--color-slate)] transition-colors duration-150 hover:border-[var(--color-gold)]/40 hover:text-[var(--color-gold-bright)]"
              >
                {industry.name}
              </Link>
            )}
            <span className={`text-xs ${MUTED}`}>
              {formatDate(article.published_at)}
            </span>
            <span className={`text-xs ${MUTED}`}>{article.author_name}</span>
          </div>

          <h1 className="mt-6 text-[length:var(--text-h1)] leading-[var(--text-h1--line-height)] font-bold text-[var(--color-warm-paper)]">
            {article.title}
          </h1>
          <p className={`mt-6 text-[length:var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] ${MUTED}`}>
            {article.excerpt}
          </p>
        </HeroReveal>

        <Reveal delayMs={100} className="mt-14">
          <div
            className="space-y-6 [&_a]:text-[var(--color-gold-bright)] [&_a]:underline [&_a]:underline-offset-2 [&_li]:ml-5 [&_li]:list-disc [&_ol]:space-y-2 [&_p]:text-[length:var(--text-body)] [&_p]:leading-[var(--text-body--line-height)] [&_p]:text-[var(--color-warm-paper)]/90 [&_strong]:font-semibold [&_strong]:text-[var(--color-warm-paper)] [&_ul]:space-y-2"
            dangerouslySetInnerHTML={{ __html: article.bodyHtml }}
          />
        </Reveal>

        <Reveal className="mt-20 border-t border-white/10 pt-10 text-center">
          <p className="text-sm font-medium text-[var(--color-warm-paper)]">
            See how Kweli verifies a document like this one.
          </p>
          <div className="mt-6">
            <Button href="/verify" variant="secondary" withArrow>
              Verify a Document
            </Button>
          </div>
        </Reveal>
      </div>
    </article>
  );
}
