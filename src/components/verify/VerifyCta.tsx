import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

const EYEBROW = "text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-gold-bright)]";

export function VerifyCta() {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-[var(--color-surface-navy)]/25 px-6 py-24 text-center lg:px-8 lg:py-32">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(201,162,39,0.1),transparent_70%)]"
      />
      <div className="relative mx-auto max-w-lg">
        <Reveal>
          <p className={EYEBROW}>Get Started</p>
          <h2 className="mx-auto mt-6 text-[var(--text-h3)] leading-[var(--text-h3--line-height)] font-bold text-[var(--color-warm-paper)]">
            Ready to verify trust at scale?
          </h2>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/book-a-demo" variant="primary" withArrow>
              Book a Demo
            </Button>
            <Button href="#demo" variant="secondary">
              Try Verification
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
