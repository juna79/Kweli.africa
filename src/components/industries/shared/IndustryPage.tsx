import { IndustryHero } from "@/components/industries/shared/IndustryHero";
import { IndustryEcosystem } from "@/components/industries/shared/IndustryEcosystem";
import { IndustryWorkflowSection } from "@/components/industries/shared/IndustryWorkflowSection";
import { IndustryBusinessImpact } from "@/components/industries/shared/IndustryBusinessImpact";
import { IndustryPilot } from "@/components/industries/shared/IndustryPilot";
import { IndustryCta } from "@/components/industries/shared/IndustryCta";
import type { IndustryPageContent } from "@/lib/industryPageTypes";

// The locked seven-section industry page template: Hero, Ecosystem,
// Explorer+Journey (one client island, shared selection state — see
// IndustryWorkflowSection), Business Impact, Pilot, CTA. One component
// hierarchy, shared spacing/typography/animation, reused for every
// industry — only the content passed in changes.
export function IndustryPage({ content }: { content: IndustryPageContent }) {
  return (
    <>
      <IndustryHero
        industryName={content.name}
        headline={content.hero.headline}
        supportingCopy={content.hero.supportingCopy}
        art={content.hero.art}
        src={content.hero.src}
      />
      <IndustryEcosystem
        eyebrow={`The ${content.name} Ecosystem`}
        heading={content.ecosystem.heading}
        tiles={content.ecosystem.tiles}
      />
      <IndustryWorkflowSection
        explorerEyebrow={`Explore ${content.name} Workflows`}
        explorerHeading={content.explorer.heading}
        lines={content.explorer.lines}
      />
      <IndustryBusinessImpact
        heading={content.businessImpact.heading}
        today={content.businessImpact.today}
        withKweli={content.businessImpact.withKweli}
      />
      <IndustryPilot heading={content.pilot.heading} steps={content.pilot.steps} />
      <IndustryCta heading={content.cta.heading} supportingCopy={content.cta.supportingCopy} />
    </>
  );
}
