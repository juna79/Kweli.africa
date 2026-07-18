import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LegalPage } from "@/components/legal/LegalPage";
import { termsOfService } from "@/lib/legal/termsOfService";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern use of Kweli, by EAX Global.",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <LegalPage content={termsOfService} />
      </main>
      <Footer />
    </>
  );
}
