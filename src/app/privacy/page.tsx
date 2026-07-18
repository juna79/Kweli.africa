import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LegalPage } from "@/components/legal/LegalPage";
import { privacyPolicy } from "@/lib/legal/privacyPolicy";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Kweli, by EAX Global, collects, uses, and protects information.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <LegalPage content={privacyPolicy} />
      </main>
      <Footer />
    </>
  );
}
