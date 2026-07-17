import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PagePlaceholder } from "@/components/layout/PagePlaceholder";
import { InsuranceIndustry } from "@/components/industries/InsuranceIndustry";
import { BankingIndustry } from "@/components/industries/BankingIndustry";
import { HealthcareIndustry } from "@/components/industries/HealthcareIndustry";
import { GovernmentIndustry } from "@/components/industries/GovernmentIndustry";
import { TradeIndustry } from "@/components/industries/TradeIndustry";
import { ProfessionalServicesIndustry } from "@/components/industries/ProfessionalServicesIndustry";
import { EducationIndustry } from "@/components/industries/EducationIndustry";
import { industries } from "@/lib/industries";

// All seven industries now share the locked IndustryPage template — see
// src/components/industries/shared/.
const builtIndustries: Partial<Record<string, () => React.JSX.Element>> = {
  insurance: InsuranceIndustry,
  banking: BankingIndustry,
  healthcare: HealthcareIndustry,
  government: GovernmentIndustry,
  trade: TradeIndustry,
  "professional-services": ProfessionalServicesIndustry,
  education: EducationIndustry,
};

export function generateStaticParams() {
  return industries.map((industry) => ({ industry: industry.slug }));
}

type Props = {
  params: Promise<{ industry: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { industry: slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  return { title: industry?.name ?? "Industries" };
}

export default async function IndustryPage({ params }: Props) {
  const { industry: slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) notFound();

  const BuiltPage = builtIndustries[slug];

  return (
    <>
      <Header />
      <main className="flex-1">
        {BuiltPage ? (
          <BuiltPage />
        ) : (
          <PagePlaceholder title={industry.name} description={industry.tagline} />
        )}
      </main>
      <Footer />
    </>
  );
}
