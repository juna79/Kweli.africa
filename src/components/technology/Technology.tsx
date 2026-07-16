import {
  FileText,
  Fingerprint,
  Database,
  Share2,
  ShieldCheck,
  Search,
  Upload,
  Lock,
  EyeOff,
  Check,
  X,
  Clock,
  Building2,
  FileCheck2,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

const MUTED = "text-[var(--color-slate)]";

/* ---------- 1. Hero ---------- */

function TechHeroVisual() {
  return (
    <div aria-hidden className="absolute inset-0 -z-0 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.35] [animation:drift_34s_ease-in-out_infinite_alternate]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(230,189,74,0.5) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_50%_at_50%_35%,rgba(201,162,39,0.14),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_100%,var(--color-background)_20%,transparent_70%)]" />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-28 text-center lg:px-8 lg:py-36">
      <TechHeroVisual />
      <div className="relative z-10 mx-auto max-w-2xl">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-gold-bright)]">
            Technology
          </p>
          <h1 className="mx-auto mt-6 text-[var(--text-h1)] leading-[var(--text-h1--line-height)] font-bold text-[var(--color-warm-paper)]">
            Technology you never have to think about.
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-[var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-[var(--color-slate)]">
            Kweli verifies authenticity and integrity without storing your
            documents. One simple process. Independent verification anywhere.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- 2. The Verification Journey (lifecycle) ---------- */

const journey = [
  { label: "Document Created", icon: FileText },
  { label: "Fingerprint Generated", icon: Fingerprint },
  { label: "Registered", icon: Database },
  { label: "Document Shared", icon: Share2 },
  { label: "Verified Anywhere", icon: ShieldCheck },
] as const;

function JourneyRow() {
  return (
    <div className="relative">
      <div className="relative hidden items-start justify-between md:flex">
        <div className="absolute left-0 right-0 top-6 h-px bg-white/10" />
        <div className="absolute left-0 right-0 top-6 h-px overflow-visible">
          <div
            className="absolute h-2 w-2 -translate-y-1/2 rounded-full bg-[var(--color-gold-bright)] shadow-[0_0_18px_5px_rgba(230,189,74,0.75)] [animation:travel-x_9s_linear_infinite]"
            style={{ top: "1px" }}
            aria-hidden
          />
        </div>
        {journey.map((step) => (
          <div key={step.label} className="relative z-10 flex w-32 flex-col items-center text-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-[var(--color-background)] text-[var(--color-gold-bright)]">
              <step.icon size={18} strokeWidth={1.75} aria-hidden />
            </span>
            <span className="mt-3 text-xs leading-snug text-[var(--color-slate)]">{step.label}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:hidden">
        {journey.map((step) => (
          <div key={step.label} className="flex flex-col items-center text-center">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-[var(--color-gold-bright)]">
              <step.icon size={16} strokeWidth={1.75} aria-hidden />
            </span>
            <span className="mt-2 text-xs leading-snug text-[var(--color-slate)]">{step.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function VerificationJourney() {
  return (
    <section className="relative px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-4xl">
        <Reveal className="text-center">
          <h2 className="text-[var(--text-h3)] leading-[var(--text-h3--line-height)] font-bold text-[var(--color-warm-paper)]">
            The verification journey.
          </h2>
          <p className={`mx-auto mt-3 max-w-md text-[var(--text-body)] ${MUTED}`}>
            One process, from the moment a document is issued to the moment
            anyone checks it.
          </p>
        </Reveal>
        <Reveal delayMs={100} className="mt-16 lg:mt-20">
          <JourneyRow />
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- 3. Client-side Privacy ---------- */

function PrivacyIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-md rounded-[var(--radius-xl)] border border-white/10 bg-white/[0.02] p-6">
      <div className="flex items-center gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-failed)]/50" />
        <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-gold)]/50" />
        <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-verified)]/50" />
        <span className="ml-3 h-4 flex-1 rounded-full bg-white/5" />
      </div>

      <div className="relative mt-6 rounded-[var(--radius-md)] border border-dashed border-white/15 p-5">
        <span className="absolute -top-2.5 left-4 bg-[var(--color-dark-slate)] px-2 text-[10px] font-medium uppercase tracking-wide text-[var(--color-slate)]">
          Your browser
        </span>
        <div className="flex items-center gap-3">
          <FileText size={20} strokeWidth={1.75} className="text-[var(--color-warm-paper)]" aria-hidden />
          <div className="flex-1 space-y-1.5">
            <div className="h-1.5 w-3/4 rounded-full bg-white/10" />
            <div className="h-1.5 w-1/2 rounded-full bg-white/10" />
          </div>
        </div>
        <div className="mt-4 flex items-center gap-2 text-[10px] font-mono tracking-tight text-[var(--color-gold-bright)]/80">
          <Fingerprint size={14} strokeWidth={1.75} aria-hidden />
          a3f5e2…9c7b2d
        </div>
      </div>

      <div className="mt-4 flex items-center justify-center">
        <div className="h-6 w-px bg-gradient-to-b from-[var(--color-gold)]/50 to-transparent" />
      </div>
      <p className="text-center text-[10px] text-[var(--color-slate)]">
        only the fingerprint leaves
      </p>
      <div className="mt-2 flex items-center justify-center gap-2 text-xs text-[var(--color-slate)]">
        <Database size={14} strokeWidth={1.75} aria-hidden />
        Kweli registry
      </div>
    </div>
  );
}

function ClientSidePrivacy() {
  const points = [
    { icon: Lock, label: "Generated locally, in your browser" },
    { icon: EyeOff, label: "The original document is never uploaded" },
    { icon: ShieldCheck, label: "Privacy by design, not as an afterthought" },
  ];

  return (
    <section className="relative px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto grid max-w-4xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-gold-bright)]">
            Client-side privacy
          </p>
          <h2 className="mt-6 text-[var(--text-h3)] leading-[var(--text-h3--line-height)] font-bold text-[var(--color-warm-paper)]">
            Your document never leaves your browser.
          </h2>
          <ul className="mt-8 space-y-5">
            {points.map((point) => (
              <li key={point.label} className="flex items-start gap-3">
                <point.icon
                  size={18}
                  strokeWidth={1.75}
                  className="mt-0.5 shrink-0 text-[var(--color-gold-bright)]"
                  aria-hidden
                />
                <span className="text-[var(--text-body)] text-[var(--color-slate)]">{point.label}</span>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delayMs={100}>
          <PrivacyIllustration />
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- 4. Registration ---------- */

function RegistrationInterface() {
  const fields: [string, string][] = [
    ["Issuer", "Kweli University"],
    ["Fingerprint", "a3f5e2…9c7b2d"],
    ["Timestamp", "17 Mar 2026 · 09:41 EAT"],
    ["Status", "Registered"],
  ];

  return (
    <div className="mx-auto w-full max-w-md rounded-[var(--radius-xl)] border border-white/10 bg-white/[0.02] overflow-hidden">
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.02] px-5 py-3">
        <Building2 size={16} strokeWidth={1.75} className="text-[var(--color-gold-bright)]" aria-hidden />
        <span className="text-xs font-medium text-[var(--color-warm-paper)]">Registration Record</span>
      </div>
      <dl className="divide-y divide-white/5 px-5">
        {fields.map(([label, value]) => (
          <div key={label} className="flex items-center justify-between py-3">
            <dt className={`text-xs ${MUTED}`}>{label}</dt>
            <dd className="text-sm text-[var(--color-warm-paper)]">{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function Registration() {
  const points = [
    { icon: Building2, label: "The issuer's identity is recorded" },
    { icon: Clock, label: "A timestamp fixes the moment of issuance" },
    { icon: Fingerprint, label: "Only the fingerprint and minimal metadata are stored" },
  ];

  return (
    <section className="relative px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto grid max-w-4xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal className="order-2 lg:order-1">
          <RegistrationInterface />
        </Reveal>
        <Reveal delayMs={100} className="order-1 lg:order-2">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-gold-bright)]">
            Registration
          </p>
          <h2 className="mt-6 text-[var(--text-h3)] leading-[var(--text-h3--line-height)] font-bold text-[var(--color-warm-paper)]">
            The issuer registers the fingerprint, not the document.
          </h2>
          <ul className="mt-8 space-y-5">
            {points.map((point) => (
              <li key={point.label} className="flex items-start gap-3">
                <point.icon
                  size={18}
                  strokeWidth={1.75}
                  className="mt-0.5 shrink-0 text-[var(--color-gold-bright)]"
                  aria-hidden
                />
                <span className="text-[var(--text-body)] text-[var(--color-slate)]">{point.label}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- 5. Verification ---------- */

const verifySteps = [
  { label: "Upload", icon: Upload },
  { label: "Fingerprint", icon: Fingerprint },
  { label: "Lookup", icon: Search },
  { label: "Match", icon: ShieldCheck },
  { label: "Verified", icon: FileCheck2 },
] as const;

function Verification() {
  const outcomes = [
    {
      status: "verified" as const,
      copy: "This document is authentic and unchanged since issuance.",
    },
    {
      status: "failed" as const,
      copy: "The uploaded document does not match the version originally registered.",
    },
    {
      status: "not-found" as const,
      copy: "No registered record exists.",
    },
  ];

  return (
    <section className="relative px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-4xl">
        <Reveal className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-gold-bright)]">
            Verification
          </p>
          <h2 className="mx-auto mt-6 text-[var(--text-h3)] leading-[var(--text-h3--line-height)] font-bold text-[var(--color-warm-paper)]">
            Anyone can verify, without contacting the issuer.
          </h2>
        </Reveal>

        <Reveal delayMs={100} className="mt-16 lg:mt-20">
          <div className="mx-auto flex max-w-2xl items-start justify-between">
            {verifySteps.map((step, i) => (
              <div key={step.label} className="flex flex-1 flex-col items-center text-center">
                <div className="flex w-full items-center">
                  {i > 0 && <span className="h-px flex-1 bg-white/10" />}
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 text-[var(--color-gold-bright)]">
                    <step.icon size={16} strokeWidth={1.75} aria-hidden />
                  </span>
                  {i < verifySteps.length - 1 && <span className="h-px flex-1 bg-white/10" />}
                </div>
                <span className="mt-2 text-xs text-[var(--color-slate)]">{step.label}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delayMs={150} className="mt-16 grid gap-4 sm:grid-cols-3 lg:mt-20">
          {outcomes.map((outcome) => (
            <div
              key={outcome.status}
              className="rounded-[var(--radius-lg)] border border-white/10 bg-white/[0.02] p-5 text-center"
            >
              <div className="flex justify-center">
                <Badge status={outcome.status} />
              </div>
              <p className="mt-4 text-xs leading-relaxed text-[var(--color-slate)]">{outcome.copy}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- 6. What Kweli does NOT do ---------- */

function Boundaries() {
  return (
    <section className="relative px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-2xl">
        <Reveal className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-gold-bright)]">
            An important distinction
          </p>
          <h2 className="mx-auto mt-6 max-w-lg text-[var(--text-h3)] leading-[var(--text-h3--line-height)] font-bold text-[var(--color-warm-paper)]">
            Authenticity is not the same as truth.
          </h2>
        </Reveal>

        <Reveal delayMs={100} className="mt-14 space-y-4">
          <div className="flex items-start gap-4 rounded-[var(--radius-lg)] border border-white/10 bg-white/[0.02] p-5">
            <X size={18} strokeWidth={2} className="mt-0.5 shrink-0 text-[var(--color-slate)]" aria-hidden />
            <p className="text-[var(--text-body)] text-[var(--color-warm-paper)]">
              Kweli does not determine whether the information in a document is true.
            </p>
          </div>
          <div className="flex items-start gap-4 rounded-[var(--radius-lg)] border border-[var(--color-gold)]/30 bg-white/[0.02] p-5">
            <Check size={18} strokeWidth={2} className="mt-0.5 shrink-0 text-[var(--color-gold-bright)]" aria-hidden />
            <p className="text-[var(--text-body)] text-[var(--color-warm-paper)]">
              Kweli proves that the document being viewed is the same document that was originally issued.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- 7. Security ---------- */

const security = [
  {
    icon: Fingerprint,
    label: "Cryptographic fingerprints",
    copy: "Every document produces a unique fingerprint. Change one character, and the fingerprint changes completely.",
  },
  {
    icon: Database,
    label: "Immutable registration",
    copy: "Once a fingerprint is registered at issuance, it cannot be altered.",
  },
  {
    icon: Search,
    label: "Tamper detection",
    copy: "Comparing fingerprints reveals whether a document has been changed since it was issued.",
  },
  {
    icon: ShieldCheck,
    label: "Independent verification",
    copy: "Anyone holding a document can verify it without contacting the issuer.",
  },
] as const;

function Security() {
  return (
    <section className="relative px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-3xl">
        <Reveal className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-gold-bright)]">
            Security
          </p>
          <h2 className="mx-auto mt-6 text-[var(--text-h3)] leading-[var(--text-h3--line-height)] font-bold text-[var(--color-warm-paper)]">
            Built on a simple guarantee.
          </h2>
        </Reveal>

        <Reveal delayMs={100} className="mt-14 divide-y divide-white/5">
          {security.map((item) => (
            <div key={item.label} className="flex items-start gap-5 py-6">
              <item.icon
                size={20}
                strokeWidth={1.75}
                className="mt-0.5 shrink-0 text-[var(--color-gold-bright)]"
                aria-hidden
              />
              <div>
                <p className="text-sm font-medium text-[var(--color-warm-paper)]">{item.label}</p>
                <p className="mt-1.5 text-[var(--text-body)] text-[var(--color-slate)]">{item.copy}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- 8. Closing CTA ---------- */

function ClosingCta() {
  return (
    <section className="relative px-6 py-24 text-center lg:px-8 lg:py-32">
      <div className="mx-auto max-w-lg">
        <Reveal>
          <h2 className="text-[var(--text-h3)] leading-[var(--text-h3--line-height)] font-bold text-[var(--color-warm-paper)]">
            See it for yourself.
          </h2>
          <p className={`mx-auto mt-4 max-w-md text-[var(--text-body)] ${MUTED}`}>
            Download a sample document, upload it back, and watch the process
            happen in real time.
          </p>
          <div className="mt-8">
            <Button href="/verify" variant="primary" withArrow>
              Try the Verification Experience
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Technology() {
  return (
    <>
      <Hero />
      <VerificationJourney />
      <ClientSidePrivacy />
      <Registration />
      <Verification />
      <Boundaries />
      <Security />
      <ClosingCta />
    </>
  );
}
