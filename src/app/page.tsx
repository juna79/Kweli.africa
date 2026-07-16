import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ChapterDivider } from "@/components/layout/ChapterDivider";
import { Hero } from "@/components/home/Hero";
import { VerificationDemo } from "@/components/home/VerificationDemo";
import { WhyKweliTeaser } from "@/components/home/WhyKweliTeaser";

// Homepage is an overview + storytelling journey with previews and CTAs
// into deeper pages. The full Why Kweli narrative lives at /why-kweli;
// remaining sections (Industries, Insights, FAQs, Book a Demo previews)
// land after this review.
export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <VerificationDemo />
        <ChapterDivider />
        <WhyKweliTeaser />
      </main>
      <Footer />
    </>
  );
}
