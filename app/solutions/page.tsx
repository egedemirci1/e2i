import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import PageShell, { PageContent } from "@/components/PageShell";
import SolutionsTabs from "@/components/SolutionsTabs";

export const metadata: Metadata = {
  title: "Çözümlerimiz — E2I",
  description:
    "AI otomasyon, web geliştirme, oyun geliştirme, tasarım ve sosyal medya yönetimi. E2I çözümlerini keşfedin.",
};

export default function SolutionsPage() {
  return (
    <PageShell>
      <PageContent>
        <PageHeader
          label="Çözümlerimiz"
          title="Mühendislik Kaslarımız"
          description="AI otomasyon, web geliştirme, oyun, tasarım ve sosyal medya — uçtan uca dijital çözümler."
        />
        <SolutionsTabs />
      </PageContent>
    </PageShell>
  );
}
