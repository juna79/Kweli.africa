import { Reveal } from "@/components/ui/Reveal";
import { Badge, type BadgeStatus } from "@/components/ui/Badge";

const EYEBROW = "text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-gold-bright)]";

const outcomes: { status: BadgeStatus; ring: string; copy: string }[] = [
  {
    status: "verified",
    ring: "border-[var(--color-verified)]/40 hover:border-[var(--color-verified)]/70",
    copy: "Fingerprint matches. This document is identical to the version originally registered by its issuer.",
  },
  {
    status: "failed",
    ring: "border-[var(--color-failed)]/40 hover:border-[var(--color-failed)]/70",
    copy: "The uploaded document does not match the registered fingerprint. It may have been modified, corrupted or replaced.",
  },
  {
    status: "not-found",
    ring: "border-[var(--color-slate)]/40 hover:border-[var(--color-slate)]/70",
    copy: "No matching fingerprint exists. The document has never been registered or cannot be verified.",
  },
];

export function VerifyResultsExplainer() {
  return (
    <section className="relative px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal className="text-center">
          <p className={EYEBROW}>Understanding the Results</p>
          <h2 className="mx-auto mt-6 max-w-lg text-[var(--text-h3)] leading-[var(--text-h3--line-height)] font-bold text-[var(--color-warm-paper)]">
            Every check ends in one of three states.
          </h2>
        </Reveal>

        <Reveal delayMs={100} className="mt-14 grid gap-5 sm:grid-cols-3">
          {outcomes.map((outcome) => (
            <div
              key={outcome.status}
              className={`rounded-[var(--radius-xl)] border bg-white/[0.02] p-7 text-center transition-colors duration-200 ${outcome.ring}`}
            >
              <div className="flex justify-center">
                <Badge status={outcome.status} />
              </div>
              <p className="mt-5 text-sm leading-relaxed text-[var(--color-slate)]">
                {outcome.copy}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
