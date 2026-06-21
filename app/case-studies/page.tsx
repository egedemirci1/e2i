import type { Metadata } from "next";
import CaseStudiesView from "@/components/CaseStudiesView";
import PageHeader from "@/components/PageHeader";
import PageShell, { PageContent } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Başarı Hikayeleri — E2I",
  description:
    "Engineering aşamasından Intelligence aşamasına geçişi kanıtlayan vaka analizleri.",
};

export default function CaseStudiesPage() {
  return (
    <PageShell>
      <PageContent>
        <PageHeader
          label="Başarı Hikayeleri"
          title="Engineering'den Intelligence'a"
          description="Gerçek projelerden gerçek sonuçlar — mühendislik ve yapay zekânın kesişimi."
        />
        <CaseStudiesView />
      </PageContent>
    </PageShell>
  );
}
