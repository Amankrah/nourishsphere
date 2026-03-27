import { setRequestLocale, getTranslations } from "next-intl/server";
import { FileText, BarChart3, DollarSign, BookOpen } from "lucide-react";
import Section from "@/components/shared/Section";
import SectionHeader from "@/components/shared/SectionHeader";
import StatCard from "@/components/shared/StatCard";
import Button from "@/components/shared/Button";

export default async function PolicymakersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("platform");

  const outputs = [
    { icon: <FileText className="h-5 w-5" />, title: t("policymakers_output1_title"), description: t("policymakers_output1_description") },
    { icon: <BarChart3 className="h-5 w-5" />, title: t("policymakers_output2_title"), description: t("policymakers_output2_description") },
    { icon: <DollarSign className="h-5 w-5" />, title: t("policymakers_output3_title"), description: t("policymakers_output3_description") },
    { icon: <BookOpen className="h-5 w-5" />, title: t("policymakers_output4_title"), description: t("policymakers_output4_description") },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-deep-ink via-[#16213e] to-deep-forest px-6 py-24 text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.25em] text-harvest-gold/80">{t("policymakers_hero_label")}</p>
        <h1 className="mx-auto max-w-3xl font-serif text-white">{t("policymakers_hero_heading")}</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/60">{t("policymakers_hero_description")}</p>
      </section>

      {/* Policy outputs */}
      <Section>
        <SectionHeader label={t("policymakers_outputs_label")} heading={t("policymakers_outputs_heading")} align="center" />
        <div className="grid gap-6 md:grid-cols-2">
          {outputs.map((output) => (
            <div key={output.title} className="rounded-2xl border border-soft-gray bg-white p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-parchment text-living-green">
                {output.icon}
              </div>
              <h3 className="mb-3 font-serif text-xl text-deep-ink">{output.title}</h3>
              <p className="text-sm leading-relaxed text-mid-gray">{output.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Meal-level framing */}
      <Section className="bg-parchment/50">
        <SectionHeader
          label={t("policymakers_section_case_label")}
          heading={t("policymakers_section_case_heading")}
          description={t("policymakers_section_case_description")}
          align="center"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard value={t("impact_dietary")} label={t("impact_dietary_label")} description={t("impact_dietary_desc")} />
          <StatCard value={t("impact_ghg")} label={t("impact_ghg_label")} description={t("impact_ghg_desc")} />
          <StatCard value={t("impact_waste")} label={t("impact_waste_label")} description={t("impact_waste_desc")} />
          <StatCard value={t("impact_productivity")} label={t("impact_productivity_label")} description={t("impact_productivity_desc")} />
        </div>
      </Section>

      {/* Honest scope disclaimer */}
      <Section>
        <div className="mx-auto max-w-3xl rounded-2xl border border-soft-gray bg-white p-10 text-center">
          <h2 className="font-serif text-2xl text-deep-ink">{t("policymakers_scope_heading")}</h2>
          <p className="mt-4 text-sm leading-relaxed text-mid-gray">{t("policymakers_scope_description")}</p>
        </div>
      </Section>

      {/* CTA */}
      <Section dark>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl text-white">{t("policymakers_cta_heading")}</h2>
          <p className="mt-4 text-white/60">{t("policymakers_cta_description")}</p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://ecodish365.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-living-green px-8 py-4 text-base font-medium text-white transition-all duration-200 hover:bg-living-green/90"
            >
              {t("cta_button_live")}
            </a>
            <Button href="/contact" variant="secondary" size="lg" className="border-white/30 text-white hover:bg-white/5">
              {t("cta_button_contact")}
            </Button>
            <Button href="/platform#methodology" variant="secondary" size="lg" className="border-white/30 text-white hover:bg-white/5">
              {t("cta_button_methodology")}
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
