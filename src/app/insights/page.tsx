import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { InsightsHub } from "@/components/insights/InsightsHub";

const description =
  "Practical writing on trust, verification and document integrity across industries.";

export const metadata: Metadata = {
  title: "Insights",
  description,
  openGraph: {
    title: "Insights — Kweli",
    description,
    siteName: "Kweli",
    type: "website",
  },
  twitter: { title: "Insights — Kweli", description },
};

export default function InsightsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <InsightsHub />
      </main>
      <Footer />
    </>
  );
}
