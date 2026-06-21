"use client";

import { useState } from "react";
import SolutionCard from "@/components/SolutionCard";

const solutions = [
  {
    id: "automation",
    tab: "AI Otomasyon",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
    ),
    title: "AI-Powered Automation",
    subtitle: "Akıllı Otomasyon",
    paragraphs: [
      "İşletmeler için yapay zekâ tabanlı akıllı otomasyon sistemleri geliştiriyoruz. Tekrarlayan iş süreçlerini otomatikleştirerek operasyonel maliyetleri düşürüyor, hata oranlarını minimize ediyoruz.",
      "Meta ve Instagram API entegrasyonları ile sosyal medya yönetimini, içerik dağıtımını ve performans takibini tek bir platformda birleştiriyoruz.",
      "Otomasyon pipeline'larımız; veri toplama, işleme, karar verme ve aksiyon alma adımlarını uçtan uca yönetir.",
    ],
    tags: ["OpenAI API", "Meta Graph API", "Webhooks", "Node.js", "Python"],
  },
  {
    id: "optimization",
    tab: "Sistem Mimarisi",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    ),
    title: "System Optimization & Architecture",
    subtitle: "Sistem Mimarisi",
    paragraphs: [
      "Yüksek performanslı, ölçeklenebilir sistem mimarileri tasarlıyor ve mevcut altyapılarınızı optimize ediyoruz.",
      "Veritabanı indeksleme stratejileri, sorgu optimizasyonları ve connection pooling ile milisaniye düzeyinde yanıt süreleri elde ediyoruz.",
      "Sentry entegrasyonu ve özel telemetri altyapıları ile sistemlerinizi 7/24 izliyor, anomalileri proaktif olarak tespit ediyoruz.",
    ],
    tags: ["PostgreSQL", "Redis", "Sentry", "Docker", "Supabase"],
  },
  {
    id: "software",
    tab: "Özel Yazılım",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "Data-Driven Custom Software",
    subtitle: "Özel Yazılım",
    paragraphs: [
      "Büyük veriyi işleyen, analiz eden ve akıllı karar mekanizmaları üreten özel yazılım çözümleri geliştiriyoruz.",
      "Gerçek zamanlı analitik dashboard'lar, ETL pipeline'ları ve makine öğrenmesi destekli tahmin modelleri ile verilerinizi stratejik avantaja dönüştürüyoruz.",
      "Next.js 15 ve React 19 tabanlı modern frontend'ler ile Prisma/Drizzle ORM destekli type-safe backend'ler inşa ediyoruz.",
    ],
    tags: ["Next.js 15", "React 19", "Prisma", "Drizzle", "TypeScript"],
  },
];

export default function SolutionsTabs() {
  const [active, setActive] = useState(solutions[0].id);
  const current = solutions.find((s) => s.id === active)!;

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="mb-4 flex shrink-0 flex-wrap gap-2 sm:gap-3">
        {solutions.map((solution) => (
          <button
            key={solution.id}
            type="button"
            onClick={() => setActive(solution.id)}
            className={`rounded-full border px-3 py-1.5 text-xs transition-all duration-200 sm:px-4 sm:py-2 sm:text-sm ${
              active === solution.id
                ? "border-e2i-accent bg-e2i-accent/10 text-e2i-accent shadow-[0_0_15px_rgba(0,245,212,0.1)]"
                : "border-white/10 text-slate-400 hover:border-e2i-accent/30 hover:text-white"
            }`}
          >
            {solution.tab}
          </button>
        ))}
      </div>
      <div className="min-h-0 flex-1 overflow-y-auto lg:overflow-hidden">
        <SolutionCard {...current} icon={current.icon} compact />
      </div>
    </div>
  );
}
