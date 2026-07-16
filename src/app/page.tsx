import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { VerificationDemo } from "@/components/home/VerificationDemo";
import { WhyKweli } from "@/components/home/WhyKweli";

// Remaining homepage sections (Industries, Insights, FAQs, Book a Demo,
// How It Works) land after this review.
export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <VerificationDemo />
        <WhyKweli />
      </main>
      <Footer />
    </>
  );
}
