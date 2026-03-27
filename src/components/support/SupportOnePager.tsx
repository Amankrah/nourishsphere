import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import SupportPrintButton from "./SupportPrintButton";

function Rule() {
  return <div className="my-8 h-px bg-deep-forest/15 print:my-6" aria-hidden />;
}

export default async function SupportOnePager() {
  const t = await getTranslations("support");

  const uses = [t("use1"), t("use2"), t("use3"), t("use4")];
  const fits = [t("fit1"), t("fit2"), t("fit3"), t("fit4")];

  return (
    <div className="bg-parchment/60 py-10 print:bg-white print:py-0 md:py-14">
      <div className="mx-auto max-w-[52rem] px-6 print:p-0 md:px-8">
        <div className="rounded-sm border border-deep-forest/20 bg-white px-8 py-10 shadow-[0_1px_0_rgba(27,67,50,0.06),0_12px_40px_rgba(26,26,46,0.08)] print:rounded-none print:border-0 print:shadow-none md:px-12 md:py-12">
          <header className="text-center">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-living-green">
              {t("doc_label")}
            </p>
            <h1 className="mt-3 font-serif text-3xl text-deep-forest md:text-4xl">{t("doc_title")}</h1>
            <p className="mt-2 font-serif text-lg text-deep-ink/85 md:text-xl">{t("doc_subtitle")}</p>
            <p className="mt-4 text-xs uppercase tracking-widest text-mid-gray">{t("org_line")}</p>
            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center print:mt-4">
              <SupportPrintButton />
              <p className="max-w-md text-center text-xs text-mid-gray print:hidden">{t("print_hint")}</p>
            </div>
          </header>

          <Rule />

          <section className="print:break-inside-avoid">
            <h2 className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-harvest-gold">
              {t("summary_heading")}
            </h2>
            <div className="space-y-3 text-sm leading-relaxed text-deep-ink/90">
              <p>{t("summary_p1")}</p>
              <p>{t("summary_p2")}</p>
            </div>
          </section>

          <Rule />

          <section className="print:break-inside-avoid">
            <h2 className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-harvest-gold">
              {t("opportunity_heading")}
            </h2>
            <p className="text-sm leading-relaxed text-deep-ink/90">{t("opportunity_p")}</p>
          </section>

          <Rule />

          <section>
            <h2 className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-harvest-gold">
              {t("data_heading")}
            </h2>
            <p className="mb-4 text-sm leading-relaxed text-deep-ink/90">{t("data_intro")}</p>
            <ul className="space-y-3 text-sm leading-relaxed text-deep-ink/90">
              <li>
                <span className="font-semibold text-deep-forest">{t("data_canada_label")}</span> {t("data_canada")}
              </li>
              <li>
                <span className="font-semibold text-deep-forest">{t("data_ghana_label")}</span> {t("data_ghana")}
              </li>
              <li>
                <span className="font-semibold text-deep-forest">{t("data_rwanda_label")}</span> {t("data_rwanda")}
              </li>
            </ul>
          </section>

          <Rule />

          <section className="print:break-inside-avoid">
            <h2 className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-harvest-gold">
              {t("uses_heading")}
            </h2>
            <ol className="list-decimal space-y-2 pl-5 text-sm leading-relaxed text-deep-ink/90">
              {uses.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </section>

          <Rule />

          <section>
            <h2 className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-harvest-gold">
              {t("fit_heading")}
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-deep-ink/90">{t("fit_intro")}</p>
            <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-deep-ink/90">
              {fits.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <Rule />

          <section className="print:break-inside-avoid">
            <h2 className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-harvest-gold">
              {t("due_heading")}
            </h2>
            <p className="text-sm leading-relaxed text-deep-ink/90">{t("due_p")}</p>
          </section>

          <Rule />

          <section className="rounded-lg bg-deep-forest/5 px-6 py-6 print:break-inside-avoid print:bg-transparent print:p-0">
            <h2 className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-living-green">
              {t("cta_heading")}
            </h2>
            <p className="text-sm leading-relaxed text-deep-ink/90">{t("cta_body")}</p>
            <div className="mt-5 print:hidden">
              <Link
                href="/contact"
                className="inline-flex rounded-full bg-deep-forest px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-deep-forest/90"
              >
                {t("cta_button")}
              </Link>
            </div>
            <p className="mt-4 text-center text-xs text-mid-gray print:mt-2">{t("footer_note")}</p>
          </section>
        </div>
      </div>
    </div>
  );
}
