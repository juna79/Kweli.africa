import { Reveal } from "@/components/ui/Reveal";

export function VerifyHero() {
  return (
    <section className="relative overflow-hidden px-6 pt-28 pb-10 text-center lg:px-8 lg:pt-36">
      <div
        aria-hidden
        className="absolute inset-0 -z-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_10%,rgba(201,162,39,0.16),transparent_65%)]"
      />
      <div className="relative z-10 mx-auto max-w-2xl">
        <Reveal>
          <p className="text-[length:var(--text-eyebrow)] font-medium uppercase tracking-[0.2em] text-[var(--color-gold-bright)]">
            Verify a Document
          </p>
          <h1 className="mx-auto mt-6 text-[length:var(--text-h1)] leading-[1.1] font-bold text-[var(--color-warm-paper)]">
            Trust Every Document. Instantly.
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-[length:var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-[var(--color-slate)]">
            Upload an original document to verify whether it exactly matches
            the version registered by its issuer.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
