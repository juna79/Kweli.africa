import { Minus, Check } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

const EYEBROW = "text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-gold-bright)]";
const MUTED = "text-[var(--color-slate)]";

export function IndustryBusinessImpact({
  heading,
  today,
  withKweli,
}: {
  heading: string;
  today: string[];
  withKweli: string[];
}) {
  return (
    <section className="relative px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-4xl">
        <Reveal className="text-center">
          <p className={EYEBROW}>Business Impact</p>
          <h2 className="mx-auto mt-6 max-w-lg text-[var(--text-h3)] leading-[var(--text-h3--line-height)] font-bold text-[var(--color-warm-paper)]">
            {heading}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          <Reveal className="rounded-[var(--radius-xl)] border border-white/10 bg-white/[0.015] p-8 opacity-80">
            <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-slate)]">
              Today
            </p>
            <ul className="mt-6 space-y-4">
              {today.map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <Minus size={16} strokeWidth={2.5} className="mt-0.5 shrink-0 text-[var(--color-slate)]/60" aria-hidden />
                  <span className={`text-base leading-relaxed ${MUTED}`}>{line}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal
            delayMs={120}
            className="rounded-[var(--radius-xl)] border border-[var(--color-gold)]/35 bg-[radial-gradient(ellipse_100%_60%_at_50%_0%,rgba(201,162,39,0.07),transparent_70%)] p-8 shadow-[0_20px_50px_-24px_rgba(201,162,39,0.35)]"
          >
            <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-gold-bright)]">
              With Kweli
            </p>
            <ul className="mt-6 space-y-4">
              {withKweli.map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <Check size={16} strokeWidth={2.5} className="mt-0.5 shrink-0 text-[var(--color-gold-bright)]" aria-hidden />
                  <span className="text-base leading-relaxed text-[var(--color-warm-paper)]">{line}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delayMs={220} className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          <Button href="/technology" variant="tertiary">
            See how verification works →
          </Button>
          <Button href="/verify" variant="tertiary">
            Try the verification demo →
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
