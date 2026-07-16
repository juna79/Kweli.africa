import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PagePlaceholder } from "@/components/layout/PagePlaceholder";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PagePlaceholder
          title="Privacy Policy"
          description="How Kweli handles data, in plain language."
        />
      </main>
      <Footer />
    </>
  );
}
