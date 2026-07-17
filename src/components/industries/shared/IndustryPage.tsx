import { IndustryHero } from "@/components/industries/shared/IndustryHero";
import { IndustryEcosystem } from "@/components/industries/shared/IndustryEcosystem";
import { IndustryExplorer } from "@/components/industries/shared/IndustryExplorer";
import { IndustryJourney } from "@/components/industries/shared/IndustryJourney";
import { IndustryBusinessImpact } from "@/components/industries/shared/IndustryBusinessImpact";
import { IndustryPilot } from "@/components/industries/shared/IndustryPilot";
import { IndustryCta } from "@/components/industries/shared/IndustryCta";
import type { IndustryPageContent } from "@/lib/industryPageTypes";

// The locked seven-section industry page template: Hero, Ecosystem,
// Explorer, Journey, Business Impact, Pilot, CTA. One component hierarchy,
// shared spacing/typography/animation, reused for every industry — only
// the content passed in changes.
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
      <IndustryExplorer
        eyebrow={`Explore ${content.name} Workflows`}
        heading={content.explorer.heading}
        lines={content.explorer.lines}
      />
      <IndustryJourney heading={content.journey.heading} steps={content.journey.steps} footnote={content.journey.footnote} />
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
