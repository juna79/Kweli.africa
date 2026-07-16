import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PagePlaceholder } from "@/components/layout/PagePlaceholder";

export const metadata: Metadata = { title: "Book a Demo" };

export default function BookADemoPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PagePlaceholder
          title="Book a Demo"
          description="See how Kweli can fit into your existing workflow without changing the way your teams already work."
        />
      </main>
      <Footer />
    </>
  );
}
