import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CookiePolicyPage } from "@/components/legal/CookiePolicyPage";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How Kweli, by EAX Global, uses cookies on this website.",
  alternates: {
    canonical: "/cookies",
  },
};

export default function CookiesPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <CookiePolicyPage />
      </main>
      <Footer />
    </>
  );
}
