import { Reveal } from "@/components/ui/Reveal";

export type TocItem = { id: string; label: string };

// Static anchor list, not a scrollspy — section count on these pages is
// small enough that highlighting the active one isn't worth the extra
// client state. Native `scroll-behavior: smooth` (set site-wide) handles
// the animated jump.
export function LegalToc({ items }: { items: TocItem[] }) {
  return (
    <Reveal delayMs={100}>
      <nav aria-label="Sections" className="rounded-[var(--radius-xl)] border border-white/10 bg-white/[0.02] p-5 lg:p-6">
        <p className="text-xs font-medium uppercase tracking-[0.15em] text-[var(--color-slate)]">
          On this page
        </p>
        <ul className="mt-4 space-y-0.5">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="block rounded-[var(--radius-sm)] py-1.5 text-sm text-[var(--color-slate)] transition-colors duration-150 hover:text-[var(--color-gold-bright)]"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </Reveal>
  );
}
