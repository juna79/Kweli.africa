import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PagePlaceholder } from "@/components/layout/PagePlaceholder";

export const metadata: Metadata = { title: "Industries" };

export default function IndustriesPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PagePlaceholder
          title="Industries"
          description="One trust platform, seven industry hubs — insurance, banking, healthcare, government, education, trade and professional services."
        />
      </main>
      <Footer />
    </>
  );
}
