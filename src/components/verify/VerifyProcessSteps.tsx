import { Building2, Share2, ShieldCheck, Mail, MessageCircle, Cloud, FileText, Usb, ScanLine, ChevronRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const EYEBROW = "text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-gold-bright)]";
const MUTED = "text-[var(--color-slate)]";

const channels = [
  { icon: Mail, label: "Email" },
  { icon: MessageCircle, label: "WhatsApp" },
  { icon: Cloud, label: "Cloud" },
  { icon: FileText, label: "PDF" },
  { icon: Usb, label: "USB" },
  { icon: ScanLine, label: "Paper scan" },
] as const;

function StepCard({
  index,
  icon: Icon,
  title,
  children,
}: {
  index: number;
  icon: typeof Building2;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex-1 rounded-[var(--radius-xl)] border border-white/10 bg-white/[0.02] p-7">
      <span className="pointer-events-none absolute -bottom-4 -right-2 text-[5rem] font-bold leading-none text-white/[0.03]">
        {String(index).padStart(2, "0")}
      </span>
      <span className="relative flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-gold)]/40 text-[var(--color-gold-bright)]">
        <Icon size={20} strokeWidth={1.75} aria-hidden />
      </span>
      <p className="relative mt-5 text-[var(--text-h4)] font-bold text-[var(--color-warm-paper)]">
        {title}
      </p>
      <div className="relative mt-4">{children}</div>
    </div>
  );
}

export function VerifyProcessSteps() {
  return (
    <section className="relative px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <p className={EYEBROW}>How Verification Works</p>
          <h2 className="mx-auto mt-6 max-w-xl text-[var(--text-h3)] leading-[var(--text-h3--line-height)] font-bold text-[var(--color-warm-paper)]">
            Three steps. No new workflow to learn.
          </h2>
        </Reveal>

        <div className="mt-16 flex flex-col items-stretch gap-6 lg:flex-row lg:items-center">
          <Reveal className="flex-1">
            <StepCard index={1} icon={Building2} title="Issuer registers document">
              <ul className="space-y-2 text-sm">
                {["Original document created", "SHA-256 fingerprint generated", "Minimal metadata registered"].map(
                  (line) => (
                    <li key={line} className={MUTED}>
                      {line}
                    </li>
                  ),
                )}
              </ul>
            </StepCard>
          </Reveal>

          <ChevronRight
            aria-hidden
            size={22}
            strokeWidth={1.75}
            className="mx-auto hidden shrink-0 text-white/15 lg:block"
          />

          <Reveal delayMs={100} className="flex-1">
            <StepCard index={2} icon={Share2} title="Document is shared">
              <div className="flex flex-wrap gap-2">
                {channels.map((c) => (
                  <span
                    key={c.label}
                    className="inline-flex items-center gap-1.5 rounded-[var(--radius-sm)] border border-white/10 px-2.5 py-1 text-xs text-[var(--color-slate)]"
                  >
                    <c.icon size={12} strokeWidth={1.75} aria-hidden />
                    {c.label}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-sm font-medium text-[var(--color-warm-paper)]">
                It doesn&rsquo;t matter.
              </p>
            </StepCard>
          </Reveal>

          <ChevronRight
            aria-hidden
            size={22}
            strokeWidth={1.75}
            className="mx-auto hidden shrink-0 text-white/15 lg:block"
          />

          <Reveal delayMs={200} className="flex-1">
            <StepCard index={3} icon={ShieldCheck} title="Recipient verifies">
              <ul className="space-y-2 text-sm">
                {[
                  "Upload document",
                  "Fingerprint calculated locally",
                  "Compared against registered fingerprint",
                  "Verification returned instantly",
                ].map((line) => (
                  <li key={line} className={MUTED}>
                    {line}
                  </li>
                ))}
              </ul>
            </StepCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
