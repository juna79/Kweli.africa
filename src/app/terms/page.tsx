import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PagePlaceholder } from "@/components/layout/PagePlaceholder";

export const metadata: Metadata = { title: "Terms of Service" };

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PagePlaceholder
          title="Terms of Service"
          description="The terms that govern use of Kweli's verification services."
        />
      </main>
      <Footer />
    </>
  );
}
