import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/seo";
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

// SEO topic per industry — the primary search term each page targets,
// distinct from the display name used in the UI (e.g. the page reads
// "Education" in the nav, but targets "Certificate Verification" in
// search). Metadata only; none of this touches visible copy.
const seoTopic: Record<string, string> = {
  insurance: "Insurance Document Verification",
  banking: "Banking Document Verification",
  healthcare: "Medical Document Verification",
  government: "Government Document Verification",
  education: "Certificate Verification",
  trade: "Trade Document Verification",
  "professional-services": "Professional Services Document Verification",
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
  if (!industry) return { title: "Industries" };

  const title = seoTopic[slug] ?? industry.name;
  const description = `Kweli for ${industry.name}: ${industry.tagline}`;

  return {
    title,
    description,
    alternates: {
      canonical: `/industries/${slug}`,
    },
    openGraph: {
      title: `${title} — Kweli`,
      description,
      siteName: "Kweli",
      type: "website",
    },
    twitter: { title: `${title} — Kweli`, description },
  };
}

export default async function IndustryPage({ params }: Props) {
  const { industry: slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) notFound();

  const BuiltPage = builtIndustries[slug];

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" },
          { name: industry.name, path: `/industries/${slug}` },
        ])}
      />
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
