import type { ReactNode } from "react";
import { localizedMetadata, SiteDocument } from "../site-document";

export const metadata = localizedMetadata("pt-BR");

export default function PortugueseLayout({ children }: { children: ReactNode }) {
  return <SiteDocument locale="pt-BR">{children}</SiteDocument>;
}
