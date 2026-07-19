import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { IndustriesHub } from "@/components/industries/IndustriesHub";

const description =
  "One trust platform, seven industries — insurance, banking, healthcare, government, education, trade and professional services. Find where Kweli fits into yours.";

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
