import type { Metadata } from "next";
import AboutTabs from "@/components/AboutTabs";
import PageHeader from "@/components/PageHeader";
import PageShell, { PageContent } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Hakkımızda — E2I",
  description:
    "E2I vizyonu, AR-GE altyapısı ve teknoloji stack'imiz hakkında bilgi edinin.",
};

export default function AboutPage() {
  return (
    <PageShell>
      <PageContent>
        <PageHeader
          label="Hakkımızda"
          title="Felsefemiz & Vizyonumuz"
          description="Mühendislik disiplini ile yapay zekâ inovasyonunu bir araya getiren AR-GE odaklı teknoloji firması."
        />
        <AboutTabs />
      </PageContent>
    </PageShell>
  );
}
