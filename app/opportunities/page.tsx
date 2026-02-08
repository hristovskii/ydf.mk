"use client";

import Link from "next/link";
import { useLocale } from "@/lib/locale-context";
import { PageHeader } from "@/components/page-header";
import { FadeIn } from "@/components/animate";
import {
  Megaphone,
  FileText,
  Link2,
  ArrowRight,
  Clock,
  ExternalLink,
  Users,
  Briefcase,
} from "lucide-react";

const openCalls = [
  {
    titleKey: "opportunities_open_1_title",
    descKey: "opportunities_open_1_desc",
    deadlineKey: "opportunities_open_1_deadline",
    icon: Users,
    color: "border-primary/30 bg-primary/5",
  },
  {
    titleKey: "opportunities_open_2_title",
    descKey: "opportunities_open_2_desc",
    deadlineKey: "opportunities_open_2_deadline",
    icon: Briefcase,
    color: "border-teal/30 bg-teal/5",
  },
];

const usefulLinks = [
  { labelKey: "opportunities_link_1", href: "#", color: "bg-primary/10 text-primary" },
  { labelKey: "opportunities_link_2", href: "#", color: "bg-teal/10 text-teal" },
  { labelKey: "opportunities_link_3", href: "#", color: "bg-warm/10 text-warm" },
];

export default function OpportunitiesPage() {
  const { t } = useLocale();

  return (
    <>
      <PageHeader
        title={t("opportunities_page_title")}
        description={t("opportunities_page_desc")}
        image="/images/volunteer.jpg"
      />
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
        {/* Open Calls */}
        <FadeIn>
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
              <Megaphone className="h-5 w-5 text-primary" aria-hidden="true" />
            </div>
            <h2 className="text-2xl font-bold text-foreground">
              {t("opportunities_open_calls")}
            </h2>
          </div>
        </FadeIn>
        <div className="grid gap-6 lg:grid-cols-2">
          {openCalls.map((call, i) => (
            <FadeIn key={call.titleKey} delay={i * 150} direction="up">
              <article className={`flex flex-col gap-4 rounded-2xl border p-8 transition-all hover:shadow-md ${call.color}`}>
                <div className="flex items-start justify-between">
                  <call.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  <span className="flex items-center gap-1 rounded-full bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
                    <Clock className="h-3 w-3" aria-hidden="true" />
                    {t(call.deadlineKey)}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {t(call.titleKey)}
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  {t(call.descKey)}
                </p>
                <Link
                  href="/contact"
                  className="mt-auto inline-flex w-fit items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:scale-[1.02]"
                >
                  {t("apply_now")}
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </article>
            </FadeIn>
          ))}
        </div>

        {/* Documents & Links */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Documents */}
          <FadeIn direction="left">
            <section className="rounded-2xl border bg-card p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal/10">
                  <FileText className="h-5 w-5 text-teal" aria-hidden="true" />
                </div>
                <h2 className="text-xl font-bold text-card-foreground">
                  {t("opportunities_docs")}
                </h2>
              </div>
              <p className="leading-relaxed text-muted-foreground">
                {t("opportunities_docs_desc")}
              </p>
            </section>
          </FadeIn>

          {/* Useful Links */}
          <FadeIn direction="right">
            <section className="rounded-2xl border bg-card p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-warm/10">
                  <Link2 className="h-5 w-5 text-warm" aria-hidden="true" />
                </div>
                <h2 className="text-xl font-bold text-card-foreground">
                  {t("opportunities_useful_links")}
                </h2>
              </div>
              <ul className="flex flex-col gap-3">
                {usefulLinks.map((link) => (
                  <li key={link.labelKey}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 rounded-lg p-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                    >
                      <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${link.color}`}>
                        <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                      </div>
                      {t(link.labelKey)}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </FadeIn>
        </div>

        {/* CTA */}
        <FadeIn>
          <section className="mt-16 rounded-2xl bg-primary/5 p-8 text-center lg:p-12">
            <p className="mb-6 text-lg font-medium text-foreground">
              {t("opportunities_page_cta")}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:scale-[1.02]"
            >
              {t("nav_contact")}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </section>
        </FadeIn>
      </div>
    </>
  );
}
