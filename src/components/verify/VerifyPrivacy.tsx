import { EyeOff, Fingerprint, ShieldCheck, Lock, Server } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const EYEBROW = "text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-gold-bright)]";

const points = [
  { icon: EyeOff, label: "Original documents are never stored." },
  { icon: Fingerprint, label: "Only cryptographic fingerprints are registered." },
  { icon: ShieldCheck, label: "Verification protects document integrity." },
  { icon: Lock, label: "Minimal metadata — nothing more than needed." },
  { icon: Server, label: "Enterprise-ready architecture." },
] as const;

export function VerifyPrivacy() {
  return (
    <section className="relative px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-4xl">
        <Reveal className="text-center">
          <p className={EYEBROW}>Privacy &amp; Security</p>
          <h2 className="mx-auto mt-6 max-w-lg text-[var(--text-h3)] leading-[var(--text-h3--line-height)] font-bold text-[var(--color-warm-paper)]">
            Built to protect, not to collect.
          </h2>
        </Reveal>

        <Reveal delayMs={100} className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {points.map((point) => (
            <div
              key={point.label}
              className="rounded-[var(--radius-lg)] border border-white/10 bg-white/[0.02] p-5"
            >
              <point.icon size={18} strokeWidth={1.75} className="text-[var(--color-gold-bright)]" aria-hidden />
              <p className="mt-4 text-sm leading-snug text-[var(--color-warm-paper)]">{point.label}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
