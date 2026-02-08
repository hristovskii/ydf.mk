"use client";

import Link from "next/link";
import { useLocale } from "@/lib/locale-context";
import { Facebook, Linkedin, Instagram, Mail } from "lucide-react";

const socialLinks = [
  {
    labelKey: "social_facebook",
    href: "https://www.facebook.com/profile.php?id=100090537676744",
    icon: Facebook,
  },
  {
    labelKey: "social_linkedin",
    href: "https://www.linkedin.com/company/ngo-youth-of-diverse-families/",
    icon: Linkedin,
  },
  {
    labelKey: "social_instagram",
    href: "https://www.instagram.com/ydf.mk",
    icon: Instagram,
  },
];

export function Footer() {
  const { t } = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2.5">
              <img
                src="/images/ydf-white.png"
                alt=""
                className="h-10 w-10 rounded-full"
              />
              <span className="text-lg font-bold">{t("site_name_short")}</span>
            </Link>
            <p className="text-sm leading-relaxed opacity-80">
              {t("hero_subtitle")}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider opacity-60">
              {t("nav_organization")}
            </h2>
            <nav aria-label="Footer navigation">
              <ul className="flex flex-col gap-2">
                <li>
                  <Link
                    href="/about"
                    className="text-sm opacity-80 transition-opacity hover:opacity-100"
                  >
                    {t("nav_about")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/opportunities"
                    className="text-sm opacity-80 transition-opacity hover:opacity-100"
                  >
                    {t("nav_opportunities")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pay-a-semester"
                    className="text-sm opacity-80 transition-opacity hover:opacity-100"
                  >
                    {t("nav_pay_semester")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-sm opacity-80 transition-opacity hover:opacity-100"
                  >
                    {t("nav_contact")}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Contact & Social */}
          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider opacity-60">
              {t("contact_follow_us")}
            </h2>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:ngo.ydf@gmail.com"
                className="flex items-center gap-2 text-sm opacity-80 transition-opacity hover:opacity-100"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                ngo.ydf@gmail.com
              </a>
              <div className="flex gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.labelKey}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t(link.labelKey)}
                    className="rounded-lg p-2 opacity-80 transition-opacity hover:opacity-100"
                  >
                    <link.icon className="h-5 w-5" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-background/20 pt-6 md:flex-row">
          <p className="text-xs opacity-60">
            &copy; {year} {t("site_name")}. {t("footer_rights")}
          </p>
          <div className="flex gap-4">
            <Link
              href="/accessibility"
              className="text-xs opacity-60 transition-opacity hover:opacity-100"
            >
              {t("footer_accessibility")}
            </Link>
            <Link
              href="/privacy"
              className="text-xs opacity-60 transition-opacity hover:opacity-100"
            >
              {t("footer_privacy")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
