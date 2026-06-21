import type { Metadata } from "next";
import CaseStudiesView from "@/components/CaseStudiesView";
import PageHeader from "@/components/PageHeader";
import PageShell, { PageContent } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Başarı Hikayeleri — E2I",
  description:
    "AI otomasyon, web, oyun, tasarım ve sosyal medya alanlarında örnek başarı senaryoları.",
};

export default function CaseStudiesPage() {
  return (
    <PageShell>
      <PageContent>
        <PageHeader
          label="Başarı Hikayeleri"
          title="Engineering'den Intelligence'a"
          description="Çözüm alanlarımıza paralel örnek vaka senaryoları — sorundan ölçülebilir sonuca."
        />
        <CaseStudiesView />
      </PageContent>
    </PageShell>
  );
}
