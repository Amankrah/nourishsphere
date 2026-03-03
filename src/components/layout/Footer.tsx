import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import LanguageToggle from "./LanguageToggle";

export default function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-soft-gray bg-deep-forest text-white/80">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* About Column */}
          <div className="md:col-span-1">
            <h3 className="mb-4 font-serif text-lg text-white">
              NourishSphere
            </h3>
            <p className="text-sm leading-relaxed text-white/60">
              {t("about_description")}
            </p>
          </div>

          {/* Explore Column */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-harvest-gold">
              {t("explore_heading")}
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/about/mission" className="text-sm transition-colors hover:text-white">
                  {nav("mission")}
                </Link>
              </li>
              <li>
                <Link href="/problem" className="text-sm transition-colors hover:text-white">
                  {nav("problem")}
                </Link>
              </li>
              <li>
                <Link href="/about/methodology" className="text-sm transition-colors hover:text-white">
                  {nav("methodology")}
                </Link>
              </li>
              <li>
                <Link href="/about/team" className="text-sm transition-colors hover:text-white">
                  {nav("team")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-harvest-gold">
              {t("connect_heading")}
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/contact" className="text-sm transition-colors hover:text-white">
                  {nav("contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-harvest-gold">
              {t("legal_heading")}
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <span className="text-sm text-white/40">{t("privacy")}</span>
              </li>
              <li>
                <span className="text-sm text-white/40">{t("terms")}</span>
              </li>
              <li>
                <span className="text-sm text-white/40">{t("accessibility")}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <p className="text-xs text-white/40">
              {t("copyright", { year: currentYear })}
            </p>
            <p className="text-xs text-white/30">{t("nonprofit_note")}</p>
          </div>
          <LanguageToggle />
        </div>
      </div>
    </footer>
  );
}
