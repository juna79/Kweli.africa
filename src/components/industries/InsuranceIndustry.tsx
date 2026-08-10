import { Check, X } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { IndustryHero } from "@/components/industries/shared/IndustryHero";
import { IndustryEcosystem } from "@/components/industries/shared/IndustryEcosystem";
import { IndustryWorkflowSection } from "@/components/industries/shared/IndustryWorkflowSection";
import { IndustryBusinessImpact } from "@/components/industries/shared/IndustryBusinessImpact";
import { IndustryPilot } from "@/components/industries/shared/IndustryPilot";
import { IndustryCta } from "@/components/industries/shared/IndustryCta";
import { insurance } from "@/lib/industryContent/insurance";

const EYEBROW = "text-[length:var(--text-eyebrow)] font-medium uppercase tracking-[0.2em] text-[var(--color-gold-bright)]";

// Insurance composes the same locked section components as every other
// industry (see IndustryPage), with one insurance-specific section added:
// the distinction between a deterministic issuer-registered check and
// probabilistic fraud detection. It sits between Business Impact and the
// pilot, and reuses the existing "An important distinction" pattern rather
// than introducing any new design.
function DeterministicDistinction() {
  return (
    <section className="relative px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-3xl">
        <Reveal className="text-center">
          <p className={EYEBROW}>Deterministic, not probabilistic</p>
          <h2 className="mx-auto mt-6 max-w-lg text-[length:var(--text-h3)] leading-[var(--text-h3--line-height)] font-bold text-[var(--color-warm-paper)]">
            A proof, not a probability.
          </h2>
        </Reveal>

        <Reveal delayMs={100} className="mt-14 grid gap-5 sm:grid-cols-2">
          <div className="rounded-[var(--radius-xl)] border border-white/10 bg-white/[0.02] p-8">
            <p className="text-sm font-medium uppercase tracking-wide text-[var(--color-slate)]">
              Fraud-detection tools
            </p>
            <p className="mt-5 text-[length:var(--text-body)] leading-relaxed text-[var(--color-slate)]">
              Estimate whether a document looks suspicious. They score an
              unregistered document against patterns of known manipulation and
              return a likelihood — useful, but a probability, not a proof.
            </p>
          </div>
          <div className="rounded-[var(--radius-xl)] border border-[var(--color-gold)]/30 bg-[radial-gradient(ellipse_100%_60%_at_50%_0%,rgba(201,162,39,0.07),transparent_70%)] p-8">
            <p className="text-sm font-medium uppercase tracking-wide text-[var(--color-gold-bright)]">
              Kweli
            </p>
            <p className="mt-5 text-[length:var(--text-body)] leading-relaxed text-[var(--color-warm-paper)]">
              Checks a presented document against the exact reference an
              authorised issuer registered at source, and returns a
              deterministic result: it matches, it doesn&rsquo;t, or no record
              exists.
            </p>
          </div>
        </Reveal>

        <Reveal delayMs={180} className="mt-8 space-y-4">
          <div className="flex items-start gap-4 rounded-[var(--radius-lg)] border border-[var(--color-gold)]/30 bg-[var(--color-gold)]/[0.03] p-6">
            <Check size={20} strokeWidth={2} className="mt-0.5 shrink-0 text-[var(--color-gold-bright)]" aria-hidden />
            <p className="text-[length:var(--text-body)] text-[var(--color-warm-paper)]">
              The two approaches are complementary. Detection helps where
              nothing was registered; Kweli gives certainty where it was.
            </p>
          </div>
          <div className="flex items-start gap-4 rounded-[var(--radius-lg)] border border-white/10 bg-white/[0.02] p-6">
            <X size={20} strokeWidth={2} className="mt-0.5 shrink-0 text-[var(--color-slate)]" aria-hidden />
            <p className="text-[length:var(--text-body)] text-[var(--color-slate)]">
              Kweli does not claim to catch every form of insurance fraud. A
              document can be genuine and unaltered while the event it describes
              never happened.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function InsuranceIndustry() {
  return (
    <>
      <IndustryHero
        industryName={insurance.name}
        headline={insurance.hero.headline}
        supportingCopy={insurance.hero.supportingCopy}
        art={insurance.hero.art}
        src={insurance.hero.src}
      />
      <IndustryEcosystem
        eyebrow={`The ${insurance.name} Ecosystem`}
        heading={insurance.ecosystem.heading}
        tiles={insurance.ecosystem.tiles}
      />
      <IndustryWorkflowSection
        explorerEyebrow={`Explore ${insurance.name} Workflows`}
        explorerHeading={insurance.explorer.heading}
        lines={insurance.explorer.lines}
      />
      <IndustryBusinessImpact
        heading={insurance.businessImpact.heading}
        today={insurance.businessImpact.today}
        withKweli={insurance.businessImpact.withKweli}
      />
      <DeterministicDistinction />
      <IndustryPilot heading={insurance.pilot.heading} steps={insurance.pilot.steps} />
      <IndustryCta heading={insurance.cta.heading} supportingCopy={insurance.cta.supportingCopy} />
    </>
  );
}
