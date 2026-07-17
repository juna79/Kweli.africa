import Link from "next/link";
import { ArrowRight, FileCheck2 } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { industries } from "@/lib/industries";

const MUTED = "text-[var(--color-slate)]";

/* ---------- 1. Hero ---------- */

function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-28 text-center lg:px-8 lg:py-36">
      <div
        aria-hidden
        className="absolute inset-0 -z-0 bg-[radial-gradient(ellipse_55%_50%_at_50%_20%,rgba(201,162,39,0.14),transparent_70%)]"
      />
      <div className="relative z-10 mx-auto max-w-2xl">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-gold-bright)]">
            Industries
          </p>
          <h1 className="mx-auto mt-6 text-[var(--text-h1)] leading-[var(--text-h1--line-height)] font-bold text-[var(--color-warm-paper)]">
            Where trust breaks down.
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-[var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-[var(--color-slate)]">
            Every industry runs on documents that pass through many hands
            before a decision gets made. Find yours.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- 2. Insurance — the beachhead, featured with the most visual weight ---------- */

const insuranceRotations = ["-rotate-6", "rotate-2", "-rotate-1"];

function DocumentStack() {
  const insurance = industries[0];
  const topThree = insurance.documents.slice(0, 3);

  return (
    <div className="relative mx-auto flex h-72 w-full max-w-sm items-center justify-center sm:h-80">
      {topThree.map((doc, i) => (
        <div
          key={doc}
          className={`absolute h-52 w-40 rounded-[var(--radius-lg)] border border-white/10 bg-[var(--color-warm-paper)] p-4 shadow-[0_25px_70px_-20px_rgba(0,0,0,0.7)] transition-transform duration-500 ease-[var(--ease-trust)] sm:h-56 sm:w-44 ${insuranceRotations[i]}`}
          style={{ zIndex: i }}
        >
          <div className="h-1.5 w-3/4 rounded-full bg-[var(--color-slate)]/40" />
          <div className="mt-2.5 h-1 w-full rounded-full bg-[var(--color-slate)]/25" />
          <div className="mt-1.5 h-1 w-full rounded-full bg-[var(--color-slate)]/25" />
          <div className="mt-1.5 h-1 w-2/3 rounded-full bg-[var(--color-slate)]/25" />
          <p className="absolute bottom-4 left-4 right-4 text-[10px] font-medium uppercase tracking-wide text-[var(--color-slate)]/70">
            {doc}
          </p>
        </div>
      ))}
      <div
        className="absolute bottom-2 right-2 z-10 inline-flex items-center gap-1.5 rounded-[var(--radius-sm)] border border-[var(--color-verified)]/40 bg-[var(--color-verified)]/10 px-2.5 py-1 text-xs font-medium tracking-wide text-[var(--color-verified)] sm:bottom-4 sm:right-4"
        style={{ zIndex: topThree.length }}
      >
        <FileCheck2 size={12} strokeWidth={2.5} aria-hidden />
        VERIFIED
      </div>
    </div>
  );
}

function InsuranceFeature() {
  const insurance = industries[0];

  return (
    <section className="relative px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-gold-bright)]">
            The Beachhead
          </p>
        </Reveal>

        <div className="mt-10 grid gap-12 rounded-[var(--radius-xl)] border border-[var(--color-gold)]/20 bg-white/[0.02] p-8 lg:grid-cols-2 lg:items-center lg:gap-16 lg:p-14">
          <Reveal delayMs={100} className="order-2 lg:order-1">
            <DocumentStack />
          </Reveal>

          <Reveal className="order-1 lg:order-2">
            <div className="flex items-center gap-3">
              <insurance.icon
                size={28}
                strokeWidth={1.75}
                className="text-[var(--color-gold-bright)]"
                aria-hidden
              />
              <h2 className="text-[var(--text-h2)] leading-[var(--text-h2--line-height)] font-bold text-[var(--color-warm-paper)]">
                {insurance.name}
              </h2>
            </div>
            <p className="mt-6 text-[var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-[var(--color-warm-paper)]">
              {insurance.problem}
            </p>
            <p className={`mt-4 text-[var(--text-body)] ${MUTED}`}>{insurance.solution}</p>

            <ul className="mt-8 flex flex-wrap gap-2">
              {insurance.documents.map((doc) => (
                <li
                  key={doc}
                  className="rounded-[var(--radius-sm)] border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-[var(--color-slate)]"
                >
                  {doc}
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <Button href={`/industries/${insurance.slug}`} variant="primary" withArrow>
                Explore Insurance
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- 3. The other five industries — one world each ---------- */

function IndustryCard({
  industry,
  delayMs,
}: {
  industry: (typeof industries)[number];
  delayMs: number;
}) {
  return (
    <Reveal delayMs={delayMs}>
      <Link
        href={`/industries/${industry.slug}`}
        className="group relative block h-full overflow-hidden rounded-[var(--radius-lg)] border border-white/10 bg-white/[0.02] p-7 transition-all duration-[350ms] ease-[var(--ease-trust)] hover:-translate-y-1 hover:border-[var(--color-gold)]/40 hover:bg-white/[0.04]"
      >
        <industry.icon
          aria-hidden
          size={140}
          strokeWidth={1}
          className="pointer-events-none absolute -right-6 -top-6 text-white/[0.04] transition-transform duration-500 ease-[var(--ease-trust)] group-hover:scale-110 group-hover:text-[var(--color-gold)]/[0.08]"
        />

        <div className="relative">
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-[var(--color-gold-bright)]">
            <industry.icon size={18} strokeWidth={1.75} aria-hidden />
          </span>

          <h3 className="mt-5 text-[var(--text-h4)] leading-[var(--text-h4--line-height)] font-bold text-[var(--color-warm-paper)]">
            {industry.name}
          </h3>
          <p className={`mt-2 text-sm leading-relaxed ${MUTED}`}>{industry.tagline}</p>

          <ul className="mt-5 flex flex-wrap gap-1.5">
            {industry.documents.slice(0, 3).map((doc) => (
              <li
                key={doc}
                className="rounded-[var(--radius-sm)] border border-white/10 px-2 py-1 text-[11px] text-[var(--color-slate)]"
              >
                {doc}
              </li>
            ))}
            {industry.documents.length > 3 && (
              <li className="px-2 py-1 text-[11px] text-[var(--color-slate)]/70">
                +{industry.documents.length - 3} more
              </li>
            )}
          </ul>

          <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-gold-bright)]">
            Explore {industry.name}
            <ArrowRight
              size={14}
              strokeWidth={2}
              aria-hidden
              className="transition-transform duration-150 group-hover:translate-x-0.5"
            />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

function IndustryGrid() {
  const rest = industries.slice(1);

  return (
    <section className="relative px-6 py-4 lg:px-8 lg:py-8">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <h2 className="text-[var(--text-h3)] leading-[var(--text-h3--line-height)] font-bold text-[var(--color-warm-paper)]">
            Six more industries. One trust layer.
          </h2>
          <p className={`mx-auto mt-3 max-w-md text-[var(--text-body)] ${MUTED}`}>
            The technology stays the same. Only the documents change.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((industry, i) => (
            <IndustryCard key={industry.slug} industry={industry} delayMs={i * 60} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 4. Closing CTA ---------- */

function ClosingCta() {
  return (
    <section className="relative px-6 py-24 text-center lg:px-8 lg:py-32">
      <div className="mx-auto max-w-lg">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-gold-bright)]">
            One platform
          </p>
          <h2 className="mx-auto mt-6 text-[var(--text-h3)] leading-[var(--text-h3--line-height)] font-bold text-[var(--color-warm-paper)]">
            Don&rsquo;t see your industry? The problem is still the same.
          </h2>
          <p className={`mx-auto mt-4 max-w-md text-[var(--text-body)] ${MUTED}`}>
            Kweli is horizontal trust infrastructure — wherever a document
            changes hands, the same verification layer applies.
          </p>
          <div className="mt-8">
            <Button href="/book-a-demo" variant="primary" withArrow>
              Book a Demo
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function IndustriesHub() {
  return (
    <>
      <Hero />
      <InsuranceFeature />
      <IndustryGrid />
      <ClosingCta />
    </>
  );
}
