import {
  ShieldCheck,
  Layers,
  Scale,
  EyeOff,
  Fingerprint,
} from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { HeroReveal } from "@/components/ui/HeroReveal";
import { Button } from "@/components/ui/Button";

const MUTED = "text-[var(--color-slate)]";
const INLINE_LINK = "text-[var(--color-gold-bright)] underline underline-offset-2";

// Content sourced from Kweli_Canonical_OS.md §1 (Mission) and §3 (Product
// Philosophy) — mission/vision and non-confidential principles only. No
// team names, fundraising, or pipeline detail: those are marked (Brain) /
// operational in the Canonical OS and are not cleared for the public site.

function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-14 text-center lg:px-8 lg:py-16">
      <div
        aria-hidden
        className="absolute inset-0 -z-0 bg-[radial-gradient(ellipse_55%_50%_at_50%_20%,rgba(201,162,39,0.14),transparent_70%)]"
      />
      <div className="relative z-10 mx-auto max-w-6xl">
        <HeroReveal>
          <p className="text-[length:var(--text-eyebrow)] font-medium uppercase tracking-[0.2em] text-[var(--color-gold-bright)]">
            About
          </p>
          <h1 className="mx-auto mt-4 max-w-4xl text-[2.75rem] leading-[1.1] font-bold text-[var(--color-warm-paper)] sm:text-[3.5rem] md:text-[4.5rem] md:leading-[1.08]">
            Independent trust has become a missing layer
            <br className="hidden sm:block" /> of modern infrastructure.
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-[length:var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-[var(--color-slate)]">
            Kweli exists to close that gap.
          </p>
        </HeroReveal>
      </div>
    </section>
  );
}

function Origin() {
  return (
    <section className="relative px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-3xl">
        <Reveal className="space-y-6">
          <p className="text-[length:var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-[var(--color-warm-paper)]">
            Every organisation makes decisions using information it did not
            create — an <Link href="/industries/insurance" className={INLINE_LINK}>insurer</Link> relies
            on a garage&rsquo;s repair estimate, a <Link href="/industries/banking" className={INLINE_LINK}>bank</Link> on
            an external valuation, an employer on a <Link href="/industries/education" className={INLINE_LINK}>university&rsquo;s
            certificate</Link>, an <Link href="/industries/trade" className={INLINE_LINK}>exporter</Link> on
            a laboratory&rsquo;s report.
          </p>
          <p className={`text-[length:var(--text-body)] leading-[var(--text-body--line-height)] ${MUTED}`}>
            For most of history, physical friction — paper, signatures,
            stamps, delivery — quietly protected the trustworthiness of those
            records. Digitisation removed that friction. What remained is
            disappearing too: a document can now be altered in minutes while
            looking identical to the original, yet the way organisations
            establish trust has barely changed.
          </p>
          <p className="text-[length:var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-[var(--color-warm-paper)]">
            Kweli gives organisations a simple, independent, provable way to
            establish whether a document they received is the exact document
            that was originally issued.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function MissionVision() {
  return (
    <section className="relative px-6 py-4 lg:px-8 lg:py-8">
      <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-[var(--radius-xl)] border border-white/10 bg-white/[0.02] p-8 lg:p-10">
            <p className="text-[length:var(--text-eyebrow)] font-medium uppercase tracking-[0.2em] text-[var(--color-gold-bright)]">
              Mission
            </p>
            <p className="mt-5 text-[length:var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-[var(--color-warm-paper)]">
              Establish Kweli as the trust infrastructure for enterprise
              records — giving organisations a simple, independent, provable
              way to know whether a document they received is genuine.
            </p>
          </div>
        </Reveal>
        <Reveal delayMs={100}>
          <div className="h-full rounded-[var(--radius-xl)] border border-white/10 bg-white/[0.02] p-8 lg:p-10">
            <p className="text-[length:var(--text-eyebrow)] font-medium uppercase tracking-[0.2em] text-[var(--color-gold-bright)]">
              Vision
            </p>
            <p className="mt-5 text-[length:var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-[var(--color-warm-paper)]">
              A world where receiving an unverifiable document feels as
              unusual as receiving a website with no encryption — where
              independent trust is simply expected in every important
              workflow.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const principles = [
  {
    icon: Scale,
    title: "Authenticity is never truth",
    body: "Kweli verifies that a record is the one genuinely issued and unchanged since issuance. It makes no judgement about whether the information inside is correct.",
  },
  {
    icon: ShieldCheck,
    title: "Independence creates confidence",
    body: "A system cannot meaningfully verify itself. The recipient of a document should be able to establish confidence independently of the issuer.",
  },
  {
    icon: Layers,
    title: "Strengthen existing systems, never replace them",
    body: "Kweli sits beneath the workflows organisations already use and integrates with them. The goal is interoperability, not substitution.",
  },
  {
    icon: EyeOff,
    title: "Privacy by design",
    body: "The original document is never uploaded or stored — only its fingerprint and minimal metadata. Confidence is provided while exposing as little as possible.",
  },
] as const;

function Principles() {
  return (
    <section className="relative px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal className="text-center">
          <p className="text-[length:var(--text-eyebrow)] font-medium uppercase tracking-[0.2em] text-[var(--color-gold-bright)]">
            What we believe
          </p>
          <h2 className="mx-auto mt-6 max-w-lg text-[length:var(--text-h2)] leading-[var(--text-h2--line-height)] font-bold text-[var(--color-warm-paper)]">
            Principles that don&rsquo;t bend for a deal.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {principles.map((p, i) => (
            <Reveal key={p.title} delayMs={i * 60}>
              <div className="h-full rounded-[var(--radius-lg)] border border-white/10 bg-white/[0.02] p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-[var(--color-gold-bright)]">
                  <p.icon size={18} strokeWidth={1.75} aria-hidden />
                </span>
                <h3 className="mt-5 text-[length:var(--text-h4)] leading-[var(--text-h4--line-height)] font-bold text-[var(--color-warm-paper)]">
                  {p.title}
                </h3>
                <p className={`mt-2 text-sm leading-relaxed ${MUTED}`}>{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClosingStatement() {
  return (
    <section className="relative px-6 py-24 text-center lg:px-8 lg:py-32">
      <div className="mx-auto max-w-lg">
        <Reveal>
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[var(--color-gold)]/40 text-[var(--color-gold-bright)] animate-trust-pulse">
            <Fingerprint size={28} strokeWidth={1.75} aria-hidden />
          </div>
          <p className="mx-auto mt-10 text-[length:var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-[var(--color-warm-paper)]">
            Kweli is built from Kenya, for a problem that has no border. Every
            organisation, everywhere, eventually has to decide whether to
            trust a document it did not create.
          </p>
          <div className="mt-10">
            <Button href="/book-a-demo" variant="primary" withArrow>
              Book a Demo
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function About() {
  return (
    <>
      <Hero />
      <Origin />
      <MissionVision />
      <Principles />
      <ClosingStatement />
    </>
  );
}
