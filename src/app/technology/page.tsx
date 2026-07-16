import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PagePlaceholder } from "@/components/layout/PagePlaceholder";

export const metadata: Metadata = { title: "Technology" };

export default function TechnologyPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PagePlaceholder
          title="Technology"
          description="How Kweli generates a fingerprint at issuance and lets anyone verify it independently — the one deep explanation of how it works."
        />
      </main>
      <Footer />
    </>
  );
}
