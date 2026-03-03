import { setRequestLocale, getTranslations } from "next-intl/server";
import { ShoppingCart, Refrigerator, Sprout, ShieldCheck, Leaf, Trash2, Heart, Clock } from "lucide-react";
import Section from "@/components/shared/Section";
import SectionHeader from "@/components/shared/SectionHeader";
import StatCard from "@/components/shared/StatCard";
import Button from "@/components/shared/Button";

export default async function IndividualsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("platform");

  const tools = [
    { icon: <ShoppingCart className="h-6 w-6" />, title: t("tool1_title"), description: t("tool1_description") },
    { icon: <Refrigerator className="h-6 w-6" />, title: t("tool2_title"), description: t("tool2_description") },
    { icon: <Sprout className="h-6 w-6" />, title: t("tool3_title"), description: t("tool3_description") },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-deep-ink via-[#16213e] to-deep-forest px-6 py-24 text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.25em] text-harvest-gold/80">{t("individuals_hero_label")}</p>
        <h1 className="mx-auto max-w-3xl font-serif text-white">{t("individuals_hero_heading")}</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/60">{t("individuals_hero_description")}</p>
      </section>

      {/* AI Tools */}
      <Section>
        <SectionHeader label={t("tools_label")} heading={t("tools_heading")} align="center" />
        <div className="grid gap-8 md:grid-cols-3">
          {tools.map((tool) => (
            <div key={tool.title} className="rounded-2xl border border-soft-gray bg-white p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-parchment text-living-green">
                {tool.icon}
              </div>
              <h3 className="mb-3 font-serif text-xl text-deep-ink">{tool.title}</h3>
              <p className="text-sm leading-relaxed text-mid-gray">{tool.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Use Case: Household Planner */}
      <Section className="bg-parchment/50">
        <SectionHeader label={t("individuals_hero_label")} heading={t("deploy1_title")} description={t("deploy1_description")} align="center" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard value={t("deploy1_metric1")} label="Food Waste" description="Reduction in household food waste through smart planning" />
          <StatCard value={t("deploy1_metric2")} label="GHG per Meal" description="Lower greenhouse gas emissions per meal served" />
          <StatCard value={t("deploy1_metric3")} label="Diet Quality" description="Improvement in overall dietary quality scores" />
          <StatCard value={t("deploy1_metric4")} label="Time Saved" description="Less time spent on meal planning and shopping" />
        </div>
      </Section>

      {/* Privacy */}
      <Section dark>
        <div className="mx-auto max-w-3xl text-center">
          <ShieldCheck className="mx-auto mb-6 h-10 w-10 text-harvest-gold" />
          <SectionHeader label={t("individuals_privacy_label")} heading={t("individuals_privacy_heading")} description={t("individuals_privacy_description")} align="center" dark />
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl text-deep-ink">Start Making Smarter Food Choices</h2>
          <p className="mt-4 text-mid-gray">Join thousands of individuals using EcoDish365 to eat better for themselves and the planet.</p>
          <div className="mt-8">
            <Button href="/contact" size="lg">Get Early Access</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
