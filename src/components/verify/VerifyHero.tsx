import { HeroReveal } from "@/components/ui/HeroReveal";

export function VerifyHero() {
  return (
    <section className="relative overflow-hidden px-6 pt-14 pb-8 text-center lg:px-8 lg:pt-20">
      <div
        aria-hidden
        className="absolute inset-0 -z-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_10%,rgba(201,162,39,0.16),transparent_65%)]"
      />
      <div className="relative z-10 mx-auto max-w-2xl">
        <HeroReveal>
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-[var(--color-gold-bright)]">
            How verification works
          </p>
          <h1 className="mx-auto mt-4 text-[2.5rem] leading-[1.12] font-bold text-[var(--color-warm-paper)] sm:text-[3.5rem]">
            From registration to verification.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-[var(--color-warm-paper)]/80">
            Follow the document through the Kweli portal: the issuer registers it,
            adds its QR and downloads the final version. The recipient then checks
            the QR record and the exact file.
          </p>
        </HeroReveal>
      </div>
    </section>
  );
}
