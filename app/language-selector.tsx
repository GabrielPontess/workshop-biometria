import { localeHref, localeNames, locales, type Locale } from "./i18n";

export function LanguageSelector({ locale, label }: { locale: Locale; label: string }) {
  return (
    <div className="language-selector" role="group" aria-label={label}>
      {locales.map((language) => (
        <a key={language} href={localeHref(language)} hrefLang={language} lang={language} aria-label={localeNames[language]} title={localeNames[language]} aria-current={language === locale ? "page" : undefined}>
          {language === "pt-BR" ? "PT-BR" : language.toUpperCase()}
        </a>
      ))}
    </div>
  );
}
