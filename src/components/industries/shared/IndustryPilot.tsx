import { Reveal } from "@/components/ui/Reveal";
import type { PilotStep } from "@/lib/industryPageTypes";

const EYEBROW = "text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-gold-bright)]";

export function IndustryPilot({
  heading,
  steps,
}: {
  heading: string;
  steps: PilotStep[];
}) {
  return (
    <section className="relative px-6 py-24 text-center lg:px-8 lg:py-32">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <p className={EYEBROW}>Start With One Workflow</p>
          <h2 className="mx-auto mt-6 text-[var(--text-h3)] leading-[var(--text-h3--line-height)] font-bold text-[var(--color-warm-paper)]">
            {heading}
          </h2>
        </Reveal>

        <div className="relative mt-16">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-5 hidden h-px bg-gradient-to-r from-[var(--color-gold)]/60 via-[var(--color-gold-bright)]/60 to-[var(--color-gold)]/60 sm:block"
          />
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4 sm:gap-x-4">
            {steps.map((step, i) => (
              <Reveal key={step.label} delayMs={i * 150}>
                <span className="relative z-10 mx-auto flex h-10 w-10 items-center justify-center rounded-full border-2 border-[var(--color-gold)] bg-[var(--color-background)] text-sm font-bold text-[var(--color-gold-bright)]">
                  {i + 1}
                </span>
                <p className="mx-auto mt-4 max-w-[10rem] text-sm font-medium text-[var(--color-warm-paper)]">
                  {step.label}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
