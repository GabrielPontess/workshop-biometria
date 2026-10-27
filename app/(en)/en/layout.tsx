import type { ReactNode } from "react";
import { localizedMetadata, SiteDocument } from "../../site-document";

export const metadata = localizedMetadata("en");

export default function EnglishLayout({ children }: { children: ReactNode }) {
  return <SiteDocument locale="en">{children}</SiteDocument>;
}
