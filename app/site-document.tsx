import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";
import { dictionaries, localeHref, locales, type Locale } from "./i18n";
import { themeInitializationScript } from "./theme";
import { publicPath } from "./public-path";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export function localizedMetadata(locale: Locale): Metadata {
  const { meta } = dictionaries[locale];
  return {
    metadataBase: new URL("https://gabrielpontess.github.io"),
    title: meta.title,
    description: meta.description,
    icons: { icon: publicPath("/icon.svg") },
    alternates: {
      canonical: localeHref(locale),
      languages: {
        "pt-BR": localeHref("pt-BR"),
        en: localeHref("en"),
        es: localeHref("es"),
        "x-default": localeHref("pt-BR"),
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: localeHref(locale),
      locale: meta.ogLocale,
      alternateLocale: locales.filter((language) => language !== locale).map((language) => dictionaries[language].meta.ogLocale),
      type: "website",
    },
  };
}

export function SiteDocument({ children, locale }: { children: ReactNode; locale: Locale }) {
  return (
    <html
      lang={locale}
      data-theme="dark"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script id="theme-initialization" dangerouslySetInnerHTML={{ __html: themeInitializationScript }} />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
