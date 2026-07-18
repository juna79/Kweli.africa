import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PrivacyPolicyPage } from "@/components/legal/PrivacyPolicyPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Kweli, by EAX Global, collects, uses, and protects information.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PrivacyPolicyPage />
      </main>
      <Footer />
    </>
  );
}
