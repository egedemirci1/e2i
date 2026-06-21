"use client";

import { useState } from "react";
import CaseStudyCard from "@/components/CaseStudyCard";

const caseStudies = [
  {
    id: "route",
    tab: "Rota Optimizasyonu",
    title: "Saha Satış Operasyonları İçin Yürüyüş Rotası Optimizasyon Tool'u",
    industry: "Saha Operasyonları",
    steps: [
      {
        label: "Sorun",
        title: "Manuel Rota Planlama",
        description:
          "Saha satış ekipleri günlük ziyaret rotalarını manuel planlıyordu. Optimal olmayan rotalar zaman kaybına yol açıyordu.",
      },
      {
        label: "Mühendislik Çözümü",
        title: "Greedy Nearest-Neighbor",
        description:
          "Mesafe matrisi tabanlı Greedy Nearest-Neighbor algoritması ile rota optimizasyonu geliştirildi.",
      },
      {
        label: "Yapay Zekâ Entegrasyonu",
        title: "Tahminsel Ziyaret Sıralaması",
        description:
          "Geçmiş ziyaret verileri ile müşteri önceliklendirme ve dinamik rota güncelleme entegre edildi.",
      },
      {
        label: "Sonuç",
        title: "Operasyonel Verimlilik",
        description:
          "Saha ekipleri %40 zaman tasarrufu elde etti. Ziyaret kapasitesi ortalama %25 arttı.",
      },
    ],
    highlight: "%40 zaman tasarrufu, %25 artan ziyaret kapasitesi",
  },
  {
    id: "content",
    tab: "İçerik Platformu",
    title: "AI Destekli İçerik Otomasyonu ve Pazarlama Platformu",
    industry: "Dijital Pazarlama",
    steps: [
      {
        label: "Sorun",
        title: "Manuel İçerik Üretimi",
        description:
          "Pazarlama ekibi içerik üretimini manuel yürütüyor, performans metriklerini ayrı araçlarda takip ediyordu.",
      },
      {
        label: "Mühendislik Çözümü",
        title: "API Pipeline & Meta",
        description:
          "Meta Graph API entegrasyonu ile otomatik içerik yayınlama pipeline'ı kuruldu.",
      },
      {
        label: "Yapay Zekâ Entegrasyonu",
        title: "Otomatik İçerik Üretimi",
        description:
          "LLM modelleri ile marka tonuna uygun içerik üretimi ve performans bazlı optimizasyon sağlandı.",
      },
      {
        label: "Sonuç",
        title: "Üretim Hızında Artış",
        description:
          "İçerik üretim hızı 5 kat arttı. Performans analitiği tek platformda birleştirildi.",
      },
    ],
    highlight: "5x üretim hızı artışı, birleşik performans analitiği",
  },
];

export default function CaseStudiesView() {
  const [active, setActive] = useState(caseStudies[0].id);
  const current = caseStudies.find((c) => c.id === active)!;

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="mb-4 flex shrink-0 flex-wrap gap-2 sm:gap-3">
        {caseStudies.map((study) => (
          <button
            key={study.id}
            type="button"
            onClick={() => setActive(study.id)}
            className={`rounded-full border px-3 py-1.5 text-xs transition-all duration-200 sm:px-4 sm:py-2 sm:text-sm ${
              active === study.id
                ? "border-e2i-accent bg-e2i-accent/10 text-e2i-accent shadow-[0_0_15px_rgba(0,245,212,0.1)]"
                : "border-white/10 text-slate-400 hover:border-e2i-accent/30 hover:text-white"
            }`}
          >
            {study.tab}
          </button>
        ))}
      </div>
      <div className="min-h-0 flex-1 overflow-y-auto lg:overflow-hidden">
        <CaseStudyCard {...current} compact />
      </div>
    </div>
  );
}
