import { setRequestLocale, getTranslations } from "next-intl/server";
import { Users, FlaskConical, Landmark } from "lucide-react";
import Section from "@/components/shared/Section";
import SectionHeader from "@/components/shared/SectionHeader";
import Button from "@/components/shared/Button";
import MethodologyDeepDive from "@/components/platform/MethodologyDeepDive";
import { Link } from "@/i18n/navigation";

export default async function PlatformPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("platform");

  const audiences = [
    { icon: <Users className="h-5 w-5" />, title: t("audience1_title"), description: t("audience1_description") },
    { icon: <FlaskConical className="h-5 w-5" />, title: t("audience2_title"), description: t("audience2_description") },
    { icon: <Landmark className="h-5 w-5" />, title: t("audience3_title"), description: t("audience3_description") },
  ];

  const deployments = [
    {
      title: t("deploy1_title"), location: t("deploy1_location"), description: t("deploy1_description"),
      metrics: [t("deploy1_metric1"), t("deploy1_metric2"), t("deploy1_metric3"), t("deploy1_metric4")],
    },
    {
      title: t("deploy2_title"), location: t("deploy2_location"), description: t("deploy2_description"),
      metrics: [t("deploy2_metric1"), t("deploy2_metric2"), t("deploy2_metric3"), t("deploy2_metric4")],
    },
    {
      title: t("deploy3_title"), location: t("deploy3_location"), description: t("deploy3_description"),
      metrics: [t("deploy3_metric1"), t("deploy3_metric2"), t("deploy3_metric3"), t("deploy3_metric4")],
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-deep-ink via-[#16213e] to-deep-forest px-6 py-24 md:py-32">
        <div className="absolute left-1/4 top-1/3 h-72 w-72 rounded-full bg-living-green/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 h-56 w-56 rounded-full bg-harvest-gold/10 blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-harvest-gold/80">{t("hero_label")}</p>
          <h1 className="font-serif text-white">{t("hero_heading")}</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/60">{t("hero_description")}</p>
        </div>
      </section>

      {/* Bridge: product story without repeating full methodology */}
      <Section>
        <SectionHeader label={t("bridge_label")} heading={t("bridge_heading")} align="center" />
        <div className="mx-auto max-w-2xl text-center">
          <Link
            href="/platform#methodology"
            className="text-sm font-semibold text-living-green underline decoration-living-green/40 underline-offset-4 transition-colors hover:text-deep-forest"
          >
            {t("bridge_jump")}
          </Link>
        </div>
      </Section>

      {/* Who it is for */}
      <Section className="bg-parchment/50">
        <SectionHeader label={t("audiences_label")} heading={t("audiences_heading")} description={t("audiences_description")} align="center" />
        <div className="grid gap-8 md:grid-cols-3">
          {audiences.map((item) => (
            <div key={item.title} className="rounded-2xl border border-soft-gray bg-white p-8 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-deep-forest/5 text-deep-forest">
                {item.icon}
              </div>
              <h3 className="mb-3 font-serif text-xl text-deep-ink">{item.title}</h3>
              <p className="text-sm leading-relaxed text-mid-gray">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Integrated toolkit */}
      <Section>
        <SectionHeader label={t("meal_integration_label")} heading={t("meal_integration_heading")} description={t("meal_integration_description")} align="center" />
        <div className="grid gap-6 lg:grid-cols-3">
          {deployments.map((deploy) => (
            <div key={deploy.title} className="rounded-2xl border border-soft-gray bg-white p-7">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-living-green">{deploy.location}</p>
              <h3 className="mb-3 font-serif text-lg text-deep-ink">{deploy.title}</h3>
              <p className="mb-4 text-sm leading-relaxed text-mid-gray">{deploy.description}</p>
              <div className="grid grid-cols-2 gap-2">
                {deploy.metrics.map((metric) => (
                  <span key={metric} className="rounded-lg bg-parchment px-3 py-1.5 text-center text-xs font-medium text-deep-forest">
                    {metric}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <MethodologyDeepDive />

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-deep-forest to-deep-ink px-6 py-20">
        <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-harvest-gold/10 blur-3xl" />
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl text-white md:text-4xl">{t("cta_heading")}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/60">{t("cta_description")}</p>
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
            <Link
              href="/platform#methodology"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-4 text-base font-medium text-white transition-all duration-200 hover:bg-white/5"
            >
              {t("cta_button_methodology")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
