"use client";

import { useState } from "react";

const focusAreas = [
  "Mekanik-Yazılım Kesişim Projeleri",
  "Algoritma Optimizasyonu & Tasarımı",
  "Sensör Füzyonu & IoT Sistemleri",
  "Süreç Analizi & Anlatı Tasarımı",
  "Patentli Donanım İnovasyonları",
];

const techStack = [
  {
    category: "Frontend",
    items: [
      { name: "Next.js 15", desc: "App Router" },
      { name: "React 19", desc: "Server Components" },
      { name: "TypeScript", desc: "Type-safe" },
      { name: "Tailwind CSS", desc: "Styling" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", desc: "Runtime" },
      { name: "Supabase", desc: "BaaS" },
      { name: "Prisma", desc: "ORM" },
      { name: "Drizzle", desc: "ORM" },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "PostgreSQL", desc: "Relational" },
      { name: "Redis", desc: "Cache" },
      { name: "Supabase DB", desc: "Managed" },
    ],
  },
  {
    category: "DevOps",
    items: [
      { name: "Docker", desc: "Containers" },
      { name: "Sentry", desc: "Monitoring" },
      { name: "Vercel", desc: "Deploy" },
    ],
  },
  {
    category: "AI / ML",
    items: [
      { name: "OpenAI API", desc: "LLM" },
      { name: "Custom Models", desc: "Fine-tuned" },
      { name: "Python", desc: "ML" },
    ],
  },
];

const tabs = [
  { id: "philosophy", label: "Felsefe" },
  { id: "stack", label: "Tech Stack" },
] as const;

type TabId = (typeof tabs)[number]["id"];

export default function AboutTabs() {
  const [active, setActive] = useState<TabId>("philosophy");

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="mb-4 flex shrink-0 gap-2 sm:gap-3">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActive(tab.id)}
            className={`rounded-full border px-4 py-2 text-sm transition-all duration-200 ${
              active === tab.id
                ? "border-e2i-accent bg-e2i-accent/10 text-e2i-accent shadow-[0_0_15px_rgba(0,245,212,0.1)]"
                : "border-white/10 text-slate-400 hover:border-e2i-accent/30 hover:text-white"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto">
        {active === "philosophy" ? (
          <div className="grid h-full gap-4 lg:grid-cols-2 lg:gap-6">
            <div className="card-glow rounded-2xl bg-[#13233c]/60 p-5 backdrop-blur-sm sm:p-6">
              <h2 className="text-base font-bold text-white sm:text-lg">
                Akademik ve Teorik Altyapı
              </h2>
              <div className="mt-3 space-y-3 text-xs leading-relaxed text-slate-400 sm:text-sm">
                <p>
                  E2I&apos;nin temelinde güçlü bir AR-GE kültürü yatmaktadır.
                  Ekibimiz; algoritma tasarımı, sistem mimarisi ve yapay zekâ
                  alanlarında derin teorik bilgiye sahip mühendislerden oluşur.
                </p>
                <p>
                  Patentli geri dönüşüm otomatı projelerimiz, mekanik mühendislik
                  ile yazılım mühendisliğinin kesişim noktasında inovasyon
                  üretme yeteneğimizi gösterir.
                </p>
                <p>
                  Her proje, akademik titizlikle planlanır ve mühendislik
                  disipliniyle uygulanır.
                </p>
              </div>
            </div>
            <div className="card-glow rounded-2xl bg-[#13233c]/60 p-5 backdrop-blur-sm sm:p-6">
              <h3 className="text-base font-semibold text-white sm:text-lg">
                AR-GE Odak Alanları
              </h3>
              <ul className="mt-3 space-y-2.5">
                {focusAreas.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-xs text-slate-400 sm:text-sm"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-e2i-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
            {techStack.map((group) => (
              <div
                key={group.category}
                className="card-glow rounded-2xl bg-[#13233c]/60 p-4 backdrop-blur-sm sm:p-5"
              >
                <h3 className="text-xs font-semibold uppercase tracking-wider text-e2i-accent">
                  {group.category}
                </h3>
                <ul className="mt-2.5 space-y-1.5">
                  {group.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-center justify-between rounded-lg border border-white/5 bg-[#0a1220]/40 px-2.5 py-1.5"
                    >
                      <span className="text-xs font-medium text-white sm:text-sm">
                        {item.name}
                      </span>
                      <span className="text-[10px] text-slate-500 sm:text-xs">
                        {item.desc}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
