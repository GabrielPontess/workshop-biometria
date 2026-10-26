import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { workshop } from "./content";
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

export const metadata: Metadata = {
  title: workshop.title,
  description:
    "Explore conceitos, modalidades, padrões e aplicações da biometria. Workshop online em 04 de novembro de 2026, às 15h, pelo Microsoft Teams, com Gabriel Pontes.",
  icons: { icon: publicPath("/icon.svg") },
  openGraph: {
    title: workshop.title,
    description: workshop.subtitle,
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
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
