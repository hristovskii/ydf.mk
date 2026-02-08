"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useLocale } from "@/lib/locale-context";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  description?: string;
  image?: string;
  breadcrumbs?: Breadcrumb[];
}

export function PageHeader({
  title,
  description,
  image,
  breadcrumbs,
}: PageHeaderProps) {
  const { t } = useLocale();

  const defaultBreadcrumbs: Breadcrumb[] = [
    { label: t("nav_home"), href: "/" },
    { label: title },
  ];

  const crumbs = breadcrumbs || defaultBreadcrumbs;

  return (
    <div className="relative overflow-hidden bg-foreground text-background">
      {image && (
        <div className="absolute inset-0 z-0">
          <img
            src={image || "/placeholder.svg"}
            alt=""
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
      )}
      {!image && (
        <div className="absolute inset-0 z-0 opacity-[0.04]">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-primary" />
          <div className="absolute -bottom-10 left-1/4 h-40 w-40 rounded-full bg-primary" />
        </div>
      )}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-1 text-sm opacity-60">
            {crumbs.map((crumb, i) => (
              <li key={i} className="flex items-center gap-1">
                {i > 0 && (
                  <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                )}
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="transition-opacity hover:opacity-100"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="opacity-100 font-medium">{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <h1 className="text-balance text-3xl font-bold lg:text-5xl">{title}</h1>
        {description && (
          <p className="mt-4 max-w-2xl text-lg leading-relaxed opacity-80">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
