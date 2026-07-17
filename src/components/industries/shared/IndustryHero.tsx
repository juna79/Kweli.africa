import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ArtFrame } from "@/components/ui/ArtFrame";

const EYEBROW = "text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-gold-bright)]";

export function IndustryHero({
  industryName,
  headline,
  supportingCopy,
  art,
}: {
  industryName: string;
  headline: string;
  supportingCopy: string;
  art: string;
}) {
  return (
    <section className="relative overflow-hidden px-6 py-24 lg:px-8 lg:py-32">
      <div
        aria-hidden
        className="absolute inset-0 -z-0 bg-[radial-gradient(ellipse_60%_50%_at_20%_15%,rgba(201,162,39,0.14),transparent_65%)]"
      />
      <div className="relative mx-auto grid max-w-6xl gap-14 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal className="text-center lg:text-left">
          <p className={EYEBROW}>{industryName}</p>
          <h1 className="mx-auto mt-6 max-w-xl text-[var(--text-h1)] leading-[1.1] font-bold text-[var(--color-warm-paper)] lg:mx-0">
            {headline}
          </h1>
          <p className="mx-auto mt-7 max-w-md text-[var(--text-body-lg)] leading-relaxed text-[var(--color-slate)] lg:mx-0">
            {supportingCopy}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
            <Button href="/book-a-demo" variant="primary" withArrow>
              Book a Demo
            </Button>
            <Button href="/verify" variant="secondary">
              Try Verification
            </Button>
          </div>
        </Reveal>

        <Reveal delayMs={150}>
          <ArtFrame
            alt={`${industryName} documents in context — Kweli Art Book`}
            source={art}
            aspect="aspect-[4/5] lg:aspect-square"
          />
        </Reveal>
      </div>
    </section>
  );
}
