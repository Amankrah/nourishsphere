import { setRequestLocale } from "next-intl/server";
import Hero from "@/components/home/Hero";
import ProblemPreview from "@/components/home/ProblemPreview";
import WhatWeDo from "@/components/home/WhatWeDo";
import GapSection from "@/components/home/GapSection";
import CredibilityStrip from "@/components/home/CredibilityStrip";
import LatestNews from "@/components/home/LatestNews";
import CTASection from "@/components/home/CTASection";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <ProblemPreview />
      <WhatWeDo />
      <GapSection />
      <CredibilityStrip />
      <LatestNews />
      <CTASection />
    </>
  );
}
