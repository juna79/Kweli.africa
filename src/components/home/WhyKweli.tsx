import {
  Shield,
  Wrench,
  ClipboardCheck,
  Scale,
  User,
  Landmark,
  Building2,
  HeartPulse,
  Fingerprint,
  ChevronDown,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const chain = [
  { label: "Insurance Company", icon: Shield },
  { label: "Garage", icon: Wrench },
  { label: "Assessor", icon: ClipboardCheck },
  { label: "Lawyer", icon: Scale },
  { label: "Customer", icon: User },
  { label: "Bank", icon: Landmark },
  { label: "Government", icon: Building2 },
  { label: "Hospital", icon: HeartPulse },
] as const;

function DocumentChain() {
  return (
    <div className="relative">
      <div className="relative hidden items-start justify-between lg:flex">
        <div className="absolute left-0 right-0 top-6 h-px bg-white/10" />
        <div className="absolute left-0 right-0 top-6 h-px overflow-hidden">
          <div
            className="absolute h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[var(--color-gold-bright)] shadow-[0_0_10px_2px_rgba(230,189,74,0.7)] [animation:travel-x_11s_linear_infinite]"
            style={{ top: "1px" }}
            aria-hidden
          />
        </div>
        {chain.map((node) => (
          <div key={node.label} className="relative z-10 flex w-24 flex-col items-center text-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-[var(--color-background)] text-[var(--color-slate)]">
              <node.icon size={18} strokeWidth={1.75} aria-hidden />
            </span>
            <span className="mt-3 text-xs leading-snug text-[var(--color-slate)]">{node.label}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4 lg:hidden">
        {chain.map((node) => (
          <div key={node.label} className="flex flex-col items-center text-center">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-[var(--color-slate)]">
              <node.icon size={16} strokeWidth={1.75} aria-hidden />
            </span>
            <span className="mt-2 text-xs leading-snug text-[var(--color-slate)]">{node.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function WhyKweli() {
  return (
    <section className="relative overflow-hidden px-6 py-32 lg:px-8 lg:py-40">
      <div className="mx-auto max-w-4xl">
        <Reveal className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-gold-bright)]">
            Why Kweli
          </p>
          <h2 className="mx-auto mt-6 max-w-2xl text-[var(--text-h2)] leading-[var(--text-h2--line-height)] font-bold text-[var(--color-warm-paper)]">
            Every important decision starts with a document.
          </h2>
        </Reveal>

        <Reveal delayMs={100} className="mt-24 lg:mt-32">
          <DocumentChain />
        </Reveal>

        <Reveal className="mx-auto mt-14 max-w-md text-center">
          <p className="text-[var(--text-body)] text-[var(--color-slate)]">
            Each transfer introduces uncertainty.
          </p>
          <p className="mt-3 text-[var(--text-body)] text-[var(--color-slate)]">
            Not because people are dishonest.
          </p>
          <p className="mt-3 text-[var(--text-body)] text-[var(--color-slate)]">
            Because documents naturally move through many hands.
          </p>
        </Reveal>

        <Reveal className="relative mt-32 text-center lg:mt-40">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[var(--color-gold)]/40 text-[var(--color-gold-bright)] animate-trust-pulse">
            <Fingerprint size={28} strokeWidth={1.75} aria-hidden />
          </div>
          <h3 className="mx-auto mt-10 max-w-xl text-[var(--text-h2)] leading-[var(--text-h2--line-height)] font-bold">
            <span className="block text-[var(--color-warm-paper)]">The document travels.</span>
            <span className="mt-2 block text-[var(--color-gold-bright)]">The trust should not.</span>
          </h3>
        </Reveal>

        <Reveal className="mx-auto mt-32 max-w-xl text-center lg:mt-40">
          <p className="text-sm font-medium uppercase tracking-[0.15em] text-[var(--color-gold-bright)]">
            Kweli makes one promise.
          </p>
          <p className="mt-6 text-[var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-[var(--color-warm-paper)]">
            The document you are looking at is the same document that was issued.
          </p>
          <p className="mt-4 text-[var(--text-body)] text-[var(--color-slate)]">Nothing more. Nothing less.</p>
        </Reveal>

        <Reveal className="mt-28 flex flex-col items-center gap-3 text-center lg:mt-32">
          <p className="text-sm text-[var(--color-slate)] [animation:soft-pulse_3s_ease-in-out_infinite]">
            So how does Kweli make that promise possible?
          </p>
          <ChevronDown size={18} strokeWidth={1.75} className="text-[var(--color-slate)]" aria-hidden />
        </Reveal>
      </div>
    </section>
  );
}
