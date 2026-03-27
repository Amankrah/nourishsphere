"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Menu, X } from "lucide-react";
import LanguageToggle from "./LanguageToggle";
import LogoMark from "@/components/brand/LogoMark";

export default function Navbar() {
  const t = useTranslations("nav");
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { href: "/about/mission", label: t("about") },
    { href: "/problem", label: t("problem") },
    { href: "/platform", label: t("platform") },
    { href: "/platform#methodology", label: t("methodology") },
    { href: "/about/team", label: t("team") },
    { href: "/contact", label: t("contact") },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-soft-gray/50 bg-warm-white/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5"
          aria-label={t("logo_aria")}
        >
          <LogoMark className="h-8 w-8 shrink-0" />
          <span className="font-serif text-xl text-deep-forest">
            NourishSphere
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-deep-ink/70 transition-colors hover:text-living-green"
            >
              {link.label}
            </Link>
          ))}
          <LanguageToggle />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="h-6 w-6 text-deep-ink" />
          ) : (
            <Menu className="h-6 w-6 text-deep-ink" />
          )}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="border-t border-soft-gray bg-warm-white px-6 pb-6 md:hidden">
          <div className="flex flex-col gap-4 pt-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-deep-ink/70 transition-colors hover:text-living-green"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <LanguageToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
