import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function LegalSection({
  id,
  icon: Icon,
  title,
  children,
}: {
  id: string;
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal>
      <section id={id} className="scroll-mt-28">
        <div className="flex items-center gap-3.5">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 text-[var(--color-gold-bright)]">
            <Icon size={17} strokeWidth={1.75} aria-hidden />
          </span>
          <h2 className="text-[length:var(--text-h4)] leading-[var(--text-h4--line-height)] font-bold text-[var(--color-warm-paper)]">
            {title}
          </h2>
        </div>
        <div className="mt-5 space-y-4 pl-[calc(2.5rem+0.875rem)] text-[length:var(--text-body)] leading-[var(--text-body--line-height)] text-[var(--color-warm-paper)]/90">
          {children}
        </div>
      </section>
    </Reveal>
  );
}

export function LegalList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span aria-hidden className="mt-3 h-1 w-1 shrink-0 rounded-full bg-[var(--color-gold-bright)]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
