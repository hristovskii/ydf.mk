import mk from "@/lib/translations/mk.json";
import en from "@/lib/translations/en.json";

export type Locale = "mk" | "en";

export const defaultLocale: Locale = "mk";

const translations: Record<Locale, Record<string, string>> = { mk, en };

export function t(key: string, locale: Locale): string {
  return translations[locale]?.[key] ?? translations[defaultLocale]?.[key] ?? key;
}

export const localeNames: Record<Locale, string> = {
  mk: "Македонски",
  en: "English",
};
