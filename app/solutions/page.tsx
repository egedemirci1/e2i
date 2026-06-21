import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import PageShell, { PageContent } from "@/components/PageShell";
import SolutionsTabs from "@/components/SolutionsTabs";

export const metadata: Metadata = {
  title: "Çözümlerimiz — E2I",
  description:
    "AI otomasyon, sistem optimizasyonu ve özel yazılım çözümleri. E2I mühendislik kaslarını keşfedin.",
};

export default function SolutionsPage() {
  return (
    <PageShell>
      <PageContent>
        <PageHeader
          label="Çözümlerimiz"
          title="Mühendislik Kaslarımız"
          description="Derin mühendislik bilgisi ve yapay zekâ entegrasyonu ile tasarlanmış çözümler."
        />
        <SolutionsTabs />
      </PageContent>
    </PageShell>
  );
}
