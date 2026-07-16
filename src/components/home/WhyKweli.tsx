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
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

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
        <div className="absolute left-0 right-0 top-6 h-px overflow-visible">
          <div
            className="absolute h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-[var(--color-gold-bright)] shadow-[0_0_22px_6px_rgba(230,189,74,0.85)] [animation:travel-x_17s_linear_infinite]"
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

// Premium editorial visual: one document, radiating out to the many hands
// that touch it. Not a diagram — an atmospheric illustration.
function DocumentJourneyVisual() {
  const rays = [
    { x2: 60, y2: 40 },
    { x2: 540, y2: 30 },
    { x2: 40, y2: 210 },
    { x2: 560, y2: 220 },
    { x2: 130, y2: 260 },
    { x2: 470, y2: 260 },
  ];

  return (
    <div className="relative mx-auto aspect-[21/9] w-full overflow-hidden rounded-[var(--radius-xl)] border border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_50%_50%,rgba(201,162,39,0.16),transparent_70%)] bg-[var(--color-background)]" />

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 600 270"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        {rays.map((r, i) => (
          <line
            key={i}
            x1="300"
            y1="135"
            x2={r.x2}
            y2={r.y2}
            stroke="#e6bd4a"
            strokeWidth="0.75"
            strokeOpacity="0.28"
          />
        ))}
        {rays.map((r, i) => (
          <circle key={`d-${i}`} cx={r.x2} cy={r.y2} r="4" fill="#e6bd4a" fillOpacity="0.35" />
        ))}
      </svg>

      <div
        className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
        aria-hidden
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative h-28 w-20 -rotate-6 rounded-[var(--radius-md)] border border-[var(--color-gold)]/30 bg-[var(--color-warm-paper)] p-3 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)]">
          <div className="h-1.5 w-3/4 rounded-full bg-[var(--color-slate)]/30" />
          <div className="mt-2 h-1 w-full rounded-full bg-[var(--color-slate)]/20" />
          <div className="mt-1.5 h-1 w-full rounded-full bg-[var(--color-slate)]/20" />
          <div className="mt-1.5 h-1 w-2/3 rounded-full bg-[var(--color-slate)]/20" />
          <div className="absolute bottom-3 right-3 h-4 w-4 rounded-full border border-[var(--color-gold)]/50" />
        </div>
      </div>
    </div>
  );
}

export function WhyKweli() {
  return (
    <section className="relative overflow-hidden px-6 py-28 lg:px-8 lg:py-36">
      <div className="mx-auto max-w-4xl">
        <Reveal className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-gold-bright)]">
            Why Kweli
          </p>
          <h2 className="mx-auto mt-6 max-w-2xl text-[var(--text-h2)] leading-[var(--text-h2--line-height)] font-bold text-[var(--color-warm-paper)]">
            Every important decision starts with a document.
          </h2>
        </Reveal>

        <Reveal delayMs={100} className="mt-20 lg:mt-28">
          <DocumentChain />
        </Reveal>

        <Reveal className="mx-auto mt-12 max-w-md text-center">
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

        <Reveal className="mt-16 lg:mt-20">
          <DocumentJourneyVisual />
          <p className="mt-4 text-center text-xs italic text-[var(--color-slate)]/80">
            One document. Many hands.
          </p>
        </Reveal>

        <Reveal className="relative mt-28 text-center lg:mt-36">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[var(--color-gold)]/40 text-[var(--color-gold-bright)] animate-trust-pulse">
            <Fingerprint size={28} strokeWidth={1.75} aria-hidden />
          </div>
          <h3 className="mx-auto mt-10 max-w-xl text-[var(--text-h2)] leading-[var(--text-h2--line-height)] font-bold">
            <span className="block text-[var(--color-warm-paper)]">The document travels.</span>
            <span className="mt-2 block text-[var(--color-gold-bright)]">The trust should not.</span>
          </h3>
        </Reveal>

        <Reveal className="mx-auto mt-28 max-w-xl text-center lg:mt-36">
          <p className="text-sm font-medium uppercase tracking-[0.15em] text-[var(--color-gold-bright)]">
            Kweli makes one promise.
          </p>
          <p className="mt-6 text-[var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-[var(--color-warm-paper)]">
            The document you are looking at is the same document that was issued.
          </p>
          <p className="mt-4 text-[var(--text-body)] text-[var(--color-slate)]">Nothing more. Nothing less.</p>
        </Reveal>

        <Reveal className="mx-auto mt-24 max-w-lg text-center lg:mt-28">
          <p className="text-sm font-medium text-[var(--color-warm-paper)]">
            Curious how Kweli actually does this?
          </p>
          <p className="mt-3 text-[var(--text-body)] text-[var(--color-slate)]">
            Every verified document follows the same simple process. Discover how
            Kweli fingerprints, registers and verifies documents without storing
            the document itself.
          </p>
          <div className="mt-8">
            <Button href="/technology" variant="secondary" withArrow>
              Explore the Technology
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
