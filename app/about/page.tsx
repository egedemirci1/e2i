import type { Metadata } from "next";
import AboutTabs from "@/components/AboutTabs";
import PageHeader from "@/components/PageHeader";
import PageShell, { PageContent } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Hakkımızda — E2I",
  description:
    "E2I vizyonu, misyonu, çalışma yaklaşımı ve teknoloji altyapısı hakkında bilgi edinin.",
};

export default function AboutPage() {
  return (
    <PageShell>
      <PageContent noScroll>
        <PageHeader
          label="Hakkımızda"
          title="Engineering to Intelligence"
          description="Mühendislik disiplini ile dijital inovasyonu birleştiren teknoloji stüdyosu."
          compact
        />
        <AboutTabs />
      </PageContent>
    </PageShell>
  );
}
