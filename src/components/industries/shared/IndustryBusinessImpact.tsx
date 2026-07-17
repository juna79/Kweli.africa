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
          <Reveal className="rounded-[var(--radius-xl)] border border-white/10 bg-white/[0.02] p-8">
            <p className="text-sm font-medium uppercase tracking-wide text-[var(--color-slate)]">
              Today
            </p>
            <ul className="mt-6 space-y-3">
              {today.map((line) => (
                <li key={line} className={`text-sm leading-relaxed ${MUTED}`}>
                  {line}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delayMs={120} className="rounded-[var(--radius-xl)] border border-[var(--color-gold)]/30 bg-white/[0.02] p-8">
            <p className="text-sm font-medium uppercase tracking-wide text-[var(--color-gold-bright)]">
              With Kweli
            </p>
            <ul className="mt-6 space-y-3">
              {withKweli.map((line) => (
                <li key={line} className="text-sm leading-relaxed text-[var(--color-warm-paper)]">
                  {line}
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
