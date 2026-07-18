import type { LucideIcon } from "lucide-react";

type Tone = "gold" | "verified" | "neutral";

const toneClasses: Record<Tone, { border: string; bg: string; icon: string }> = {
  gold: {
    border: "border-[var(--color-gold)]/30",
    bg: "bg-[var(--color-gold)]/[0.04]",
    icon: "text-[var(--color-gold-bright)]",
  },
  verified: {
    border: "border-[var(--color-verified)]/30",
    bg: "bg-[var(--color-verified)]/[0.04]",
    icon: "text-[var(--color-verified)]",
  },
  neutral: {
    border: "border-white/10",
    bg: "bg-white/[0.02]",
    icon: "text-[var(--color-slate)]",
  },
};

export function LegalCallout({
  icon: Icon,
  tone = "gold",
  children,
}: {
  icon: LucideIcon;
  tone?: Tone;
  children: React.ReactNode;
}) {
  const t = toneClasses[tone];
  return (
    <div className={`flex items-start gap-4 rounded-[var(--radius-lg)] border ${t.border} ${t.bg} p-6`}>
      <Icon size={20} strokeWidth={2} className={`mt-0.5 shrink-0 ${t.icon}`} aria-hidden />
      <div className="text-[length:var(--text-body)] leading-[var(--text-body--line-height)] text-[var(--color-warm-paper)]">
        {children}
      </div>
    </div>
  );
}
