import { setRequestLocale, getTranslations } from "next-intl/server";
import Section from "@/components/shared/Section";
import SectionHeader from "@/components/shared/SectionHeader";
import { Building2, Smartphone, BookOpen, Globe, FlaskConical, ShieldCheck } from "lucide-react";

export default async function MissionPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about.mission");

  const values = [
    { icon: <BookOpen className="h-5 w-5" />, title: t("value1_title"), description: t("value1_description") },
    { icon: <Globe className="h-5 w-5" />, title: t("value2_title"), description: t("value2_description") },
    { icon: <FlaskConical className="h-5 w-5" />, title: t("value3_title"), description: t("value3_description") },
    { icon: <ShieldCheck className="h-5 w-5" />, title: t("value4_title"), description: t("value4_description") },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-deep-ink via-[#16213e] to-deep-forest px-6 py-24 text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.25em] text-harvest-gold/80">
          {t("label")}
        </p>
        <h1 className="mx-auto max-w-3xl font-serif text-white">
          {t("heading")}
        </h1>
      </section>

      {/* Mission Statement */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <p className="quote-text text-center text-xl leading-relaxed text-deep-ink/80">
            &ldquo;{t("mission_statement")}&rdquo;
          </p>
        </div>
      </Section>

      {/* Vision */}
      <Section className="bg-parchment/50">
        <SectionHeader
          label={t("vision_label")}
          heading={t("vision_statement")}
          align="center"
        />
      </Section>

      {/* Two-Brand Architecture */}
      <Section>
        <SectionHeader
          label={t("architecture_label")}
          heading={t("architecture_heading")}
          description={t("architecture_description")}
          align="center"
        />
        <div className="mx-auto grid max-w-3xl gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-soft-gray bg-white p-8 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-deep-forest/5 text-deep-forest">
              <Building2 className="h-6 w-6" />
            </div>
            <h3 className="mb-2 font-serif text-xl text-deep-forest">
              {t("org_name")}
            </h3>
            <p className="text-sm leading-relaxed text-mid-gray">
              {t("org_role")}
            </p>
          </div>
          <div className="rounded-2xl border border-soft-gray bg-white p-8 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-living-green/5 text-living-green">
              <Smartphone className="h-6 w-6" />
            </div>
            <h3 className="mb-2 font-serif text-xl text-living-green">
              {t("product_name")}
            </h3>
            <p className="text-sm leading-relaxed text-mid-gray">
              {t("product_role")}
            </p>
          </div>
        </div>
      </Section>

      {/* History */}
      <Section className="bg-parchment/50">
        <SectionHeader
          label={t("history_label")}
          heading={t("history_heading")}
        />
        <p className="max-w-3xl text-base leading-relaxed text-mid-gray">
          {t("history_description")}
        </p>
      </Section>

      {/* Values */}
      <Section>
        <SectionHeader
          label={t("values_label")}
          heading={t("values_heading")}
          align="center"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-2xl border border-soft-gray bg-white p-6 text-center"
            >
              <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-parchment text-living-green">
                {value.icon}
              </div>
              <h3 className="mb-2 font-serif text-lg text-deep-ink">
                {value.title}
              </h3>
              <p className="text-sm leading-relaxed text-mid-gray">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
