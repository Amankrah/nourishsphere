import { setRequestLocale } from "next-intl/server";
import ProblemHero from "@/components/problem/ProblemHero";
import KeyStats from "@/components/problem/KeyStats";
import PainPoints from "@/components/problem/PainPoints";
import GapAnalysis from "@/components/problem/GapAnalysis";
import Synthesis from "@/components/problem/Synthesis";

export default async function ProblemPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <ProblemHero />
      <KeyStats />
      <PainPoints />
      <GapAnalysis />
      <Synthesis />
    </>
  );
}
