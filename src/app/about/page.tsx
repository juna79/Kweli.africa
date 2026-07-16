import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PagePlaceholder } from "@/components/layout/PagePlaceholder";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PagePlaceholder
          title="About"
          description="Why Kweli exists, and the team building trust infrastructure for the world."
        />
      </main>
      <Footer />
    </>
  );
}
