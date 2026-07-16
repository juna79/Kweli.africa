import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { VerificationDemo } from "@/components/home/VerificationDemo";

// Phase 2 checkpoint: Hero + Verification Demonstration only.
// Remaining homepage sections (Problem, Trust Infrastructure, Industries,
// Why Kweli, Insights, FAQs, Book a Demo) land in Phase 3, after review.
export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <VerificationDemo />
      </main>
      <Footer />
    </>
  );
}
