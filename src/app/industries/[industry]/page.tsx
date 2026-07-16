import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PagePlaceholder } from "@/components/layout/PagePlaceholder";
import { industries } from "@/lib/industries";

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

  return (
    <>
      <Header />
      <main className="flex-1">
        <PagePlaceholder title={industry.name} description={industry.tagline} />
      </main>
      <Footer />
    </>
  );
}
