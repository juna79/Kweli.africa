import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { TermsOfServicePage } from "@/components/legal/TermsOfServicePage";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern use of Kweli, by EAX Global.",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <TermsOfServicePage />
      </main>
      <Footer />
    </>
  );
}
