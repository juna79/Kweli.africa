import { Upload, Fingerprint, Search, FileCheck2, BadgeCheck } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const EYEBROW = "text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-gold-bright)]";

const steps = [
  { icon: Upload, label: "Upload" },
  { icon: Fingerprint, label: "Fingerprint generated locally" },
  { icon: Search, label: "Compared against the registry" },
  { icon: FileCheck2, label: "Metadata validated" },
  { icon: BadgeCheck, label: "Result returned" },
] as const;

export function VerifyArchitecture() {
  return (
    <section className="relative px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-4xl">
        <Reveal className="text-center">
          <p className={EYEBROW}>Behind the Scenes</p>
          <h2 className="mx-auto mt-6 max-w-lg text-[var(--text-h3)] leading-[var(--text-h3--line-height)] font-bold text-[var(--color-warm-paper)]">
            What happens in the moment you upload.
          </h2>
        </Reveal>

        <Reveal delayMs={100} className="mt-16">
          <div className="relative mx-auto flex max-w-xl flex-col items-center">
            <div
              aria-hidden
              className="absolute left-1/2 top-0 bottom-0 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/10 to-transparent sm:block"
            />
            {steps.map((step, i) => (
              <div key={step.label} className={`relative flex items-center gap-4 ${i > 0 ? "mt-8" : ""}`}>
                <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-[var(--color-background)] text-[var(--color-gold-bright)]">
                  <step.icon size={18} strokeWidth={1.75} aria-hidden />
                </span>
                <span className="text-sm font-medium text-[var(--color-warm-paper)]">{step.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
