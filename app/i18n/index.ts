import { en } from "./en";
import { es } from "./es";
import { ptBR } from "./pt-BR";
import { publicPath } from "../public-path";
import { workshop } from "../content";

export const locales = ["pt-BR", "en", "es"] as const;
export type Locale = (typeof locales)[number];
export type { Dictionary } from "./pt-BR";

export const dictionaries = { "pt-BR": ptBR, en, es };
export const localeNames = { "pt-BR": "Português (Brasil)", en: "English", es: "Español" };

export function localeHref(locale: Locale): string {
  return publicPath(locale === "pt-BR" ? "/" : `/${locale}/`);
}

export function eventDate(locale: Locale) {
  const date = new Date(workshop.dateTime);
  const timeZone = "America/Sao_Paulo";
  const format = (options: Intl.DateTimeFormatOptions) =>
    new Intl.DateTimeFormat(locale, { ...options, timeZone }).format(date);

  return {
    date: format({ day: "2-digit", month: "long" }),
    weekday: format({ weekday: "long" }),
    year: format({ year: "numeric" }),
    time: format({ hour: "2-digit", minute: "2-digit", hourCycle: "h23" }),
    shortDate: format({ day: "2-digit", month: "short", year: "numeric" }).toLocaleUpperCase(locale),
  };
}
