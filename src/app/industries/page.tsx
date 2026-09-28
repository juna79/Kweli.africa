import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { IndustriesHub } from "@/components/industries/IndustriesHub";

const description =
  "Explore how Kweli helps issuers and recipients verify documents across insurance, laboratories, education, trade and other workflows.";

export const metadata: Metadata = {
  title: "Industries",
  description,
  alternates: {
    canonical: "/industries",
  },
  openGraph: {
    title: "Industries — Kweli",
    description,
    siteName: "Kweli",
    type: "website",
  },
  twitter: { title: "Industries — Kweli", description },
};

export default function IndustriesPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <IndustriesHub />
      </main>
      <Footer />
    </>
  );
}
