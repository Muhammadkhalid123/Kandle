"use client";

import { ThreeDCarousel } from "@/components/basecamp/ThreeDCarousel";
import { WhyChooseUs } from "@/components/basecamp/WhyChooseUs";
import { ProcessRoadmap } from "@/components/basecamp/ProcessRoadmap";
import { TestimonialCarousel } from "@/components/basecamp/TestimonialCarousel";
import { MagicHandsPreview } from "@/components/basecamp/MagicHandsPreview";
import { FAQSection } from "@/components/basecamp/FAQSection";
import { FloatingElements } from "@/components/ui/FloatingElements";

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <FloatingElements />
      <ThreeDCarousel />
      <WhyChooseUs />
      <ProcessRoadmap />
      <TestimonialCarousel />
      <MagicHandsPreview />
      <FAQSection />
    </main>
  );
}
