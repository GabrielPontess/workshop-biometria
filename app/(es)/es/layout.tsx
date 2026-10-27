import type { ReactNode } from "react";
import { localizedMetadata, SiteDocument } from "../../site-document";

export const metadata = localizedMetadata("es");

export default function SpanishLayout({ children }: { children: ReactNode }) {
  return <SiteDocument locale="es">{children}</SiteDocument>;
}
