import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ArtFrame } from "@/components/ui/ArtFrame";

const EYEBROW = "text-[length:var(--text-eyebrow)] font-medium uppercase tracking-[0.2em] text-[var(--color-gold-bright)]";

export function IndustryHero({
  industryName,
  headline,
  supportingCopy,
  art,
  src,
}: {
  industryName: string;
  headline: string;
  supportingCopy: string;
  art: string;
  src?: string;
}) {
  return (
    <section className="relative overflow-hidden px-6 py-16 lg:px-8 lg:py-20">
      <div
        aria-hidden
        className="absolute inset-0 -z-0 bg-[radial-gradient(ellipse_60%_50%_at_20%_15%,rgba(201,162,39,0.14),transparent_65%)]"
      />
      <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[3fr_2fr] lg:items-start lg:gap-12">
        <Reveal className="text-center lg:text-left">
          <p className={EYEBROW}>{industryName}</p>
          {/* Sized at the h2 tier, not h1: this is a two-column composition
             sharing the fold with an image, not a full-width page hero.
             Still the dominant element on the page — just proportionate
             to the space it actually has. */}
          <h1 className="mx-auto mt-5 text-[2.75rem] leading-[1.12] font-bold text-[var(--color-warm-paper)] sm:text-[3.25rem] lg:mx-0 lg:text-[length:var(--text-h2)]">
            {headline}
          </h1>
          <p className="mx-auto mt-5 max-w-md text-[length:var(--text-body-lg)] leading-relaxed text-[var(--color-slate)] lg:mx-0">
            {supportingCopy}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
            <Button href="/book-a-demo" variant="primary" withArrow>
              Book a Demo
            </Button>
            <Button href="/verify" variant="secondary">
              Try Verification
            </Button>
          </div>
        </Reveal>

        <Reveal delayMs={150} className="lg:pt-2">
          <ArtFrame
            src={src}
            alt={`${industryName} documents in context — Kweli Art Book`}
            source={art}
            aspect="aspect-[4/5] lg:aspect-square"
          />
        </Reveal>
      </div>
    </section>
  );
}
