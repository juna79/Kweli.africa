import { HeroReveal } from "@/components/ui/HeroReveal";

export function LegalHero({
  eyebrow,
  title,
  subtitle,
  lastUpdated,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle: string;
  lastUpdated: string;
}) {
  return (
    <section className="relative overflow-hidden px-6 pt-28 pb-16 text-center lg:px-8 lg:pt-36 lg:pb-20">
      <div
        aria-hidden
        className="absolute inset-0 -z-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_10%,rgba(201,162,39,0.16),transparent_65%)]"
      />
      <div className="relative z-10 mx-auto max-w-2xl">
        <HeroReveal>
          <p className="text-[length:var(--text-eyebrow)] font-medium uppercase tracking-[0.2em] text-[var(--color-gold-bright)]">
            {eyebrow}
          </p>
          <h1 className="mx-auto mt-6 text-[2.75rem] leading-[1.1] font-bold text-[var(--color-warm-paper)] sm:text-[3.5rem] md:text-[4.5rem] md:leading-[1.08]">
            {title}
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-[length:var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-[var(--color-slate)]">
            {subtitle}
          </p>
          <p className="mt-6 text-sm text-[var(--color-slate)]/70">
            Last updated: {lastUpdated}
          </p>
        </HeroReveal>
      </div>
    </section>
  );
}
