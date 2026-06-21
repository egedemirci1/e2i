"use client";

import { useState } from "react";

const principles = [
  {
    step: "01",
    title: "Anlama",
    description:
      "İş hedeflerinizi, kullanıcı ihtiyaçlarınızı ve teknik kısıtlarınızı birlikte haritalandırırız.",
  },
  {
    step: "02",
    title: "Mühendislik",
    description:
      "Ölçeklenebilir mimari, temiz kod ve ölçülebilir KPI'larla çözümü tasarlarız.",
  },
  {
    step: "03",
    title: "Uygulama",
    description:
      "Agile sprint'lerle şeffaf teslimat yapar, her aşamada sizi sürece dahil ederiz.",
  },
  {
    step: "04",
    title: "Evrim",
    description:
      "Canlıya aldıktan sonra izleme, optimizasyon ve sürekli iyileştirme sunarız.",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: [
      { name: "Next.js 16", desc: "App Router" },
      { name: "React 19", desc: "UI" },
      { name: "TypeScript", desc: "Type-safe" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", desc: "Runtime" },
      { name: "PostgreSQL", desc: "Database" },
      { name: "Prisma", desc: "ORM" },
    ],
  },
  {
    category: "AI & Otomasyon",
    items: [
      { name: "OpenAI API", desc: "LLM" },
      { name: "LangChain", desc: "Orchestration" },
      { name: "Python", desc: "ML / NLP" },
    ],
  },
  {
    category: "Oyun & Etkileşim",
    items: [
      { name: "Unity", desc: "Mobile" },
      { name: "Godot", desc: "2D / 3D" },
      { name: "WebGL", desc: "Browser" },
    ],
  },
  {
    category: "Tasarım & Medya",
    items: [
      { name: "Figma", desc: "UI/UX" },
      { name: "Blender", desc: "3D" },
      { name: "After Effects", desc: "Motion" },
    ],
  },
  {
    category: "DevOps & Cloud",
    items: [
      { name: "Docker", desc: "Containers" },
      { name: "Coolify", desc: "Self-host" },
      { name: "Sentry", desc: "Monitoring" },
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
    <div className="flex flex-col lg:min-h-0 lg:flex-1">
      <div className="mb-3 flex shrink-0 flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActive(tab.id)}
            className={`rounded-full border px-3.5 py-1.5 text-xs transition-all duration-200 sm:text-sm ${
              active === tab.id
                ? "border-e2i-accent bg-e2i-accent/10 text-e2i-accent shadow-[0_0_15px_rgba(0,245,212,0.1)]"
                : "border-white/10 text-slate-400 hover:border-e2i-accent/30 hover:text-white"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {active === "philosophy" ? (
        <div className="flex flex-col gap-3 lg:min-h-0 lg:flex-1">
          <div className="grid gap-3 sm:grid-cols-2 lg:min-h-0 lg:flex-1">
            <div className="card-glow rounded-2xl bg-[#13233c]/60 p-4 backdrop-blur-sm sm:p-5">
              <h2 className="text-base font-bold text-white">
                Vizyonumuz
              </h2>
              <div className="mt-2.5 space-y-2.5 text-sm leading-relaxed text-slate-400">
                <p>
                  E2I — Engineering to Intelligence; mühendislik disiplinini yapay
                  zekâ ve dijital inovasyonla buluşturan bir teknoloji stüdyosudur.
                  Bizim için teknoloji bir araç değil, stratejik bir dönüşüm gücüdür.
                </p>
                <p>
                  Fikirden ürüne, sistemden zekaya uzanan yolculukta işletmelerin
                  yalnızca dijitalleşmesini değil, akıllanmasını hedefliyoruz.
                  Geleceği tahmin etmek yerine, onu mühendislik kaslarımızla inşa
                  ediyoruz.
                </p>
                <p>
                  Her projede ölçülebilir sonuç, sürdürülebilir mimari ve uzun
                  vadeli iş ortaklığı standartlarımızdır.
                </p>
              </div>
            </div>

            <div className="card-glow rounded-2xl bg-[#13233c]/60 p-4 backdrop-blur-sm sm:p-5">
              <h2 className="text-base font-bold text-white">
                Misyonumuz
              </h2>
              <div className="mt-2.5 space-y-2.5 text-sm leading-relaxed text-slate-400">
                <p>
                  AI otomasyon, web geliştirme, oyun, tasarım ve sosyal medya
                  alanlarında uçtan uca dijital çözümler sunarak markaların büyüme
                  hedeflerine ulaşmasını sağlıyoruz.
                </p>
                <p>
                  Teknik karmaşıklığı sadeleştirir, ekiplerinize hız kazandırır
                  ve dijital varlığınızı tutarlı bir marka deneyimine dönüştürürüz.
                  Start-up&apos;lardan kurumsal ölçeğe kadar her yapıya özel,
                  ölçeklenebilir çözümler üretiriz.
                </p>
                <p>
                  Müşterilerimizin yanında sadece yazılım geliştiren bir ekip
                  değil; stratejik düşünen, sonuç odaklı bir teknoloji ortağı olmayı
                  hedefliyoruz.
                </p>
              </div>
            </div>
          </div>

          <div className="card-glow rounded-2xl bg-[#13233c]/60 p-4 backdrop-blur-sm sm:p-5 lg:shrink-0">
            <h2 className="text-base font-bold text-white">
              Çalışma Yaklaşımımız
            </h2>
            <p className="mt-1.5 text-xs leading-relaxed text-slate-400 sm:text-sm">
              Her projeyi dört aşamalı bir mühendislik döngüsüyle yönetiyoruz —
              şeffaflık, iterasyon ve ölçülebilirlik temel taşlarımızdır.
            </p>
            <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4 lg:gap-2.5">
              {principles.map((item) => (
                <div
                  key={item.step}
                  className="rounded-xl border border-white/5 bg-[#0a1220]/40 p-3 sm:p-2.5 lg:p-3"
                >
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-e2i-accent/30 bg-[#0a1220] text-[10px] font-bold text-e2i-accent sm:text-xs">
                      {item.step}
                    </span>
                    <p className="text-sm font-semibold text-white">
                      {item.title}
                    </p>
                  </div>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
          {techStack.map((group) => (
            <div
              key={group.category}
              className="card-glow flex flex-col rounded-2xl bg-[#13233c]/60 p-4 backdrop-blur-sm sm:p-5"
            >
              <h3 className="text-xs font-semibold uppercase tracking-wider text-e2i-accent sm:text-sm">
                {group.category}
              </h3>
              <ul className="mt-3 space-y-2">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-center justify-between rounded-xl border border-white/5 bg-[#0a1220]/40 px-3 py-2"
                  >
                    <span className="text-sm font-medium text-white">
                      {item.name}
                    </span>
                    <span className="text-xs text-slate-500">{item.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
