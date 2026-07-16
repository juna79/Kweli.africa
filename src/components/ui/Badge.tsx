import { Check, X, FileQuestion, Clock } from "lucide-react";

export type BadgeStatus = "verified" | "failed" | "pending" | "not-found";

const config: Record<
  BadgeStatus,
  { label: string; icon: typeof Check; className: string }
> = {
  verified: {
    label: "VERIFIED",
    icon: Check,
    className: "bg-[var(--color-verified)]/10 text-[var(--color-verified)] border-[var(--color-verified)]/40",
  },
  failed: {
    label: "VERIFICATION FAILED",
    icon: X,
    className: "bg-[var(--color-failed)]/10 text-[var(--color-failed)] border-[var(--color-failed)]/40",
  },
  pending: {
    label: "PENDING",
    icon: Clock,
    className: "bg-[var(--color-gold)]/10 text-[var(--color-gold-bright)] border-[var(--color-gold)]/40",
  },
  "not-found": {
    label: "NOT FOUND",
    icon: FileQuestion,
    className: "bg-[var(--color-slate)]/15 text-[var(--color-slate)] border-[var(--color-slate)]/40",
  },
};

export function Badge({ status }: { status: BadgeStatus }) {
  const { label, icon: Icon, className } = config[status];
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-[var(--radius-sm)] border px-2.5 py-1 text-xs font-medium tracking-wide ${className}`}
    >
      <Icon size={12} strokeWidth={2.5} aria-hidden />
      {label}
    </span>
  );
}
