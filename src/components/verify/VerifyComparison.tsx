import { Check, X } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const EYEBROW = "text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-gold-bright)]";

const does = ["Document integrity", "Document authenticity", "Issuer registration", "Tampering"];
const doesNot = [
  "Whether information inside the document is true",
  "Business decisions",
  "Creditworthiness",
  "Medical accuracy",
  "Legal validity",
];

export function VerifyComparison() {
  return (
    <section className="relative px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-4xl">
        <Reveal className="text-center">
          <p className={EYEBROW}>An Important Distinction</p>
          <h2 className="mx-auto mt-6 max-w-lg text-[var(--text-h3)] leading-[var(--text-h3--line-height)] font-bold text-[var(--color-warm-paper)]">
            What Kweli verifies — and what it doesn&rsquo;t.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          <Reveal className="rounded-[var(--radius-xl)] border border-[var(--color-gold)]/30 bg-white/[0.02] p-8">
            <p className="text-sm font-medium uppercase tracking-wide text-[var(--color-gold-bright)]">
              Kweli verifies
            </p>
            <ul className="mt-6 space-y-4">
              {does.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check size={16} strokeWidth={2.5} className="mt-0.5 shrink-0 text-[var(--color-gold-bright)]" aria-hidden />
                  <span className="text-sm leading-relaxed text-[var(--color-warm-paper)]">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delayMs={120} className="rounded-[var(--radius-xl)] border border-white/10 bg-white/[0.02] p-8">
            <p className="text-sm font-medium uppercase tracking-wide text-[var(--color-slate)]">
              Kweli does not verify
            </p>
            <ul className="mt-6 space-y-4">
              {doesNot.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <X size={16} strokeWidth={2.5} className="mt-0.5 shrink-0 text-[var(--color-slate)]" aria-hidden />
                  <span className={`text-sm leading-relaxed text-[var(--color-slate)]`}>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
