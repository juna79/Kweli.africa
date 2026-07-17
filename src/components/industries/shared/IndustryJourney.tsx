import { Reveal } from "@/components/ui/Reveal";
import type { JourneyStep } from "@/lib/industryPageTypes";

const EYEBROW = "text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-gold-bright)]";
const MUTED = "text-[var(--color-slate)]";

function TravellingDocument({ delay }: { delay: string }) {
  return (
    <div
      aria-hidden
      className="absolute top-1/2 h-8 w-6 -translate-y-1/2 rounded-[2px] border border-[var(--color-gold)]/40 bg-[var(--color-warm-paper)]/95 shadow-[0_6px_16px_-4px_rgba(0,0,0,0.6)] [animation:travel-x_9s_linear_infinite]"
      style={{ animationDelay: delay }}
    >
      <div className="mx-auto mt-1.5 h-0.5 w-3.5 rounded-full bg-[var(--color-slate)]/40" />
      <div className="mx-auto mt-1 h-0.5 w-3 rounded-full bg-[var(--color-slate)]/25" />
    </div>
  );
}

export function IndustryJourney({
  eyebrow = "Document Journey",
  heading,
  steps,
  footnote,
}: {
  eyebrow?: string;
  heading: string;
  steps: JourneyStep[];
  footnote?: string;
}) {
  return (
    <section className="relative px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <p className={EYEBROW}>{eyebrow}</p>
          <h2 className="mx-auto mt-6 max-w-xl text-[var(--text-h3)] leading-[var(--text-h3--line-height)] font-bold text-[var(--color-warm-paper)]">
            {heading}
          </h2>
        </Reveal>

        <Reveal delayMs={100} className="relative mt-20">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 z-20 w-8 bg-gradient-to-r from-[var(--color-background)] to-transparent lg:hidden"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 z-20 w-8 bg-gradient-to-l from-[var(--color-background)] to-transparent lg:hidden"
          />
          <div className="overflow-x-auto pb-6">
            <div className="relative mx-auto min-w-[720px] lg:min-w-0">
              <div className="absolute left-0 right-0 top-7 h-px bg-white/10" />
              <div className="absolute left-0 right-0 top-7 h-8 overflow-visible">
                <TravellingDocument delay="0s" />
                <TravellingDocument delay="4.5s" />
              </div>
              <div className="relative flex items-start justify-between">
                {steps.map((step, i) => (
                  <div key={step.label} className="relative z-10 flex w-28 flex-col items-center text-center">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-[var(--color-background)] text-[var(--color-gold-bright)]">
                      <step.icon size={18} strokeWidth={1.75} aria-hidden />
                    </span>
                    <span className="mt-3 text-[11px] font-medium text-[var(--color-slate)]">
                      {i + 1}
                    </span>
                    <span className="mt-1 text-xs leading-snug text-[var(--color-slate)]">
                      {step.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {footnote && (
          <Reveal delayMs={250} className="mx-auto mt-16 max-w-lg text-center">
            <p className={`text-sm leading-relaxed ${MUTED}`}>{footnote}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
