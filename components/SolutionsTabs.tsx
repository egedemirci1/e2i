"use client";

import { useState } from "react";
import SolutionCard from "@/components/SolutionCard";

const categories = [
  {
    id: "automation",
    tab: "AI Otomasyon",
    cards: [
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3" />
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
          </svg>
        ),
        title: "AI-Powered Automation",
        subtitle: "Akıllı İş Süreçleri",
        paragraphs: [
          "Tekrarlayan operasyonları yapay zekâ ile otomatikleştiriyor, ekiplerin stratejik işlere odaklanmasını sağlıyoruz.",
          "Veri toplama, sınıflandırma, karar ve aksiyon adımlarını uçtan uca yöneten pipeline'lar kuruyoruz.",
        ],
        tags: ["OpenAI API", "LangChain", "Webhooks", "Python", "Node.js"],
      },
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            <path d="M8 10h.01M12 10h.01M16 10h.01" />
          </svg>
        ),
        title: "Intelligent Assistants & Chatbots",
        subtitle: "Yapay Zekâ Asistanları",
        paragraphs: [
          "Müşteri destek, satış ve iç operasyonlar için marka tonunuza uygun LLM tabanlı asistanlar geliştiriyoruz.",
          "Doküman tabanlı bilgi erişimi (RAG) ile doğru, bağlama duyarlı yanıtlar sunan sistemler tasarlıyoruz.",
        ],
        tags: ["RAG", "Vector DB", "Fine-tuning", "API Integration"],
      },
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
          </svg>
        ),
        title: "Document Intelligence",
        subtitle: "Doküman İşleme",
        paragraphs: [
          "Fatura, sözleşme ve form gibi dokümanları otomatik okuyup sınıflandıran AI sistemleri geliştiriyoruz.",
          "OCR ve NLP ile manuel veri girişini ortadan kaldırarak süreç hızını artırıyoruz.",
        ],
        tags: ["OCR", "NLP", "PDF Parsing", "Automation"],
      },
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
          </svg>
        ),
        title: "Predictive Analytics",
        subtitle: "Tahminsel Analitik",
        paragraphs: [
          "Geçmiş verilerden trend çıkararak talep, churn ve operasyonel risk tahmin modelleri oluşturuyoruz.",
          "Karar destek sistemleri ile yönetime aksiyon alınabilir içgörüler sunuyoruz.",
        ],
        tags: ["Machine Learning", "Forecasting", "Python", "Dashboards"],
      },
    ],
  },
  {
    id: "web",
    tab: "Web Geliştirme",
    cards: [
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="3" width="20" height="14" rx="2" />
            <line x1="8" y1="21" x2="16" y2="21" />
            <line x1="12" y1="17" x2="12" y2="21" />
          </svg>
        ),
        title: "Corporate Web Platforms",
        subtitle: "Kurumsal Web Siteleri",
        paragraphs: [
          "Next.js ve React tabanlı, hızlı, SEO uyumlu ve ölçeklenebilir kurumsal web platformları inşa ediyoruz.",
          "Tek ekran deneyimlerden çok sayfalı portal yapılarına kadar markanıza özel arayüzler tasarlıyoruz.",
        ],
        tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "SEO"],
      },
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          </svg>
        ),
        title: "Web Apps & Dashboards",
        subtitle: "Web Uygulamaları",
        paragraphs: [
          "Gerçek zamanlı analitik paneller, yönetim sistemleri ve müşteri portalları geliştiriyoruz.",
          "Prisma/Drizzle ORM ve Supabase/PostgreSQL ile type-safe, güvenli backend mimarileri kuruyoruz.",
        ],
        tags: ["Prisma", "Supabase", "PostgreSQL", "REST API", "Auth"],
      },
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
        ),
        title: "E-Commerce Solutions",
        subtitle: "E-Ticaret",
        paragraphs: [
          "Ürün kataloğu, sepet, ödeme entegrasyonu ve sipariş yönetimi içeren e-ticaret platformları kuruyoruz.",
          "Stok senkronizasyonu ve kargo API entegrasyonları ile uçtan uca satış deneyimi sağlıyoruz.",
        ],
        tags: ["Stripe", "iyzico", "Cart", "Inventory", "Checkout"],
      },
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
        ),
        title: "Performance & DevOps",
        subtitle: "Performans & DevOps",
        paragraphs: [
          "Core Web Vitals optimizasyonu, CDN yapılandırması ve lazy loading ile hızlı web deneyimleri sunuyoruz.",
          "Docker, CI/CD pipeline'ları ve Coolify/Vercel deploy süreçleri ile güvenilir yayın altyapısı kuruyoruz.",
        ],
        tags: ["Docker", "CI/CD", "CDN", "Lighthouse", "Coolify"],
      },
    ],
  },
  {
    id: "game",
    tab: "Oyun Geliştirme",
    cards: [
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="6" y1="12" x2="10" y2="12" />
            <line x1="8" y1="10" x2="8" y2="14" />
            <line x1="15" y1="13" x2="15.01" y2="13" />
            <line x1="18" y1="11" x2="18.01" y2="11" />
            <rect x="2" y="6" width="20" height="12" rx="2" />
          </svg>
        ),
        title: "Mobile & Casual Games",
        subtitle: "Mobil Oyun",
        paragraphs: [
          "Hyper-casual ve casual mobil oyunlar için oynanış döngüsü, seviye tasarımı ve performans optimizasyonu sunuyoruz.",
          "Unity ve Godot ile iOS/Android platformlarına yönelik hızlı prototipleme ve yayın süreçlerini yönetiyoruz.",
        ],
        tags: ["Unity", "Godot", "C#", "Mobile", "Game Design"],
      },
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
          </svg>
        ),
        title: "Interactive Experiences",
        subtitle: "Etkileşimli Deneyimler",
        paragraphs: [
          "Marka aktivasyonları, eğitim simülasyonları ve gamification odaklı interaktif deneyimler tasarlıyoruz.",
          "Oyun mekaniği, skor sistemleri ve kullanıcı motivasyonu ile dijital etkileşimi güçlendiriyoruz.",
        ],
        tags: ["Gamification", "WebGL", "Simulation", "UX", "Analytics"],
      },
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
        ),
        title: "Multiplayer & Backend",
        subtitle: "Çok Oyunculu Altyapı",
        paragraphs: [
          "Gerçek zamanlı çok oyunculu sistemler için WebSocket ve oyun sunucusu mimarileri tasarlıyoruz.",
          "Liderlik tabloları, eşleştirme ve oturum yönetimi ile ölçeklenebilir oyun backend'leri kuruyoruz.",
        ],
        tags: ["WebSocket", "Netcode", "Matchmaking", "Cloud"],
      },
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="7" height="7" />
            <rect x="14" y="3" width="7" height="7" />
            <rect x="14" y="14" width="7" height="7" />
            <rect x="3" y="14" width="7" height="7" />
          </svg>
        ),
        title: "Game UI/UX Design",
        subtitle: "Oyun Arayüzü",
        paragraphs: [
          "HUD, menü akışları ve tutorial deneyimleri ile oyuncu dostu arayüzler tasarlıyoruz.",
          "Görsel geri bildirim, animasyon ve ses tasarımı ile oynanış hissini güçlendiriyoruz.",
        ],
        tags: ["UI Design", "HUD", "Onboarding", "Figma", "Prototyping"],
      },
    ],
  },
  {
    id: "design",
    tab: "Tasarım",
    cards: [
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="13.5" cy="6.5" r="2.5" />
            <circle cx="17.5" cy="10.5" r="2.5" />
            <circle cx="8.5" cy="7.5" r="2.5" />
            <circle cx="6.5" cy="12.5" r="2.5" />
            <path d="M12 22c4-4 8-7.5 8-11a8 8 0 1 0-16 0c0 3.5 4 7 8 11z" />
          </svg>
        ),
        title: "Corporate Identity & Branding",
        subtitle: "Kurumsal Kimlik",
        paragraphs: [
          "Logo, renk paleti, tipografi ve görsel dil ile tutarlı kurumsal kimlik sistemleri oluşturuyoruz.",
          "Dijital ve basılı materyallerde markanızın profesyonel, akılda kalıcı bir yüzünü inşa ediyoruz.",
        ],
        tags: ["Logo", "Brand Guide", "Typography", "Visual Identity"],
      },
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
            <line x1="12" y1="22.08" x2="12" y2="12" />
          </svg>
        ),
        title: "Animation & 3D Modeling",
        subtitle: "Animasyon & 3D",
        paragraphs: [
          "Ürün tanıtım animasyonları, motion graphics ve 3D modelleme ile markanızı görsel olarak öne çıkarıyoruz.",
          "Web, sosyal medya ve sunumlar için optimize edilmiş 3D asset'ler ve kısa animasyonlar üretiyoruz.",
        ],
        tags: ["Blender", "Motion Graphics", "3D Modeling", "After Effects"],
      },
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <line x1="3" y1="9" x2="21" y2="9" />
            <line x1="9" y1="21" x2="9" y2="9" />
          </svg>
        ),
        title: "UI/UX Design",
        subtitle: "Arayüz Tasarımı",
        paragraphs: [
          "Web ve mobil uygulamalar için kullanıcı odaklı wireframe, prototip ve yüksek sadakatli tasarımlar üretiyoruz.",
          "Erişilebilirlik ve dönüşüm odaklı arayüzler ile dijital ürünlerinizi sezgisel hale getiriyoruz.",
        ],
        tags: ["Figma", "Wireframe", "Prototyping", "UX Research"],
      },
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="23 7 16 12 23 17 23 7" />
            <rect x="1" y="5" width="15" height="14" rx="2" />
          </svg>
        ),
        title: "Video & Motion Production",
        subtitle: "Video Prodüksiyon",
        paragraphs: [
          "Tanıtım videoları, reels ve reklam filmleri için senaryo, kurgu ve motion tasarım hizmeti sunuyoruz.",
          "Sosyal medya ve web için optimize edilmiş kısa format video içerikleri üretiyoruz.",
        ],
        tags: ["Video Editing", "Reels", "Premiere", "Motion Design"],
      },
    ],
  },
  {
    id: "social",
    tab: "Sosyal Medya Yönetimi",
    cards: [
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M3 9h18M9 21V9" />
          </svg>
        ),
        title: "Content Strategy & Publishing",
        subtitle: "İçerik Stratejisi",
        paragraphs: [
          "Marka tonunuza uygun içerik takvimi, metin ve görsel planlaması ile sosyal medya varlığınızı güçlendiriyoruz.",
          "Meta ve Instagram API entegrasyonları ile zamanlanmış yayın ve çoklu platform yönetimi sağlıyoruz.",
        ],
        tags: ["Meta API", "Instagram", "Content Calendar", "Copywriting"],
      },
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="20" x2="18" y2="10" />
            <line x1="12" y1="20" x2="12" y2="4" />
            <line x1="6" y1="20" x2="6" y2="14" />
          </svg>
        ),
        title: "Analytics & Growth",
        subtitle: "Analitik & Büyüme",
        paragraphs: [
          "Etkileşim, erişim ve dönüşüm metriklerini tek panelde toplayarak performansı ölçülebilir kılıyoruz.",
          "Veriye dayalı A/B testleri ve hedef kitle analizi ile organik büyüme stratejileri geliştiriyoruz.",
        ],
        tags: ["Analytics", "A/B Testing", "Reporting", "Growth", "KPI"],
      },
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        ),
        title: "Community Management",
        subtitle: "Topluluk Yönetimi",
        paragraphs: [
          "Yorum, mesaj ve DM yönetimi ile markanızın dijital topluluğunu aktif ve tutarlı tutuyoruz.",
          "Kriz iletişimi ve marka sesi rehberi ile itibar yönetimini profesyonelce yürütüyoruz.",
        ],
        tags: ["Community", "Engagement", "Moderation", "Brand Voice"],
      },
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="16" />
            <line x1="8" y1="12" x2="16" y2="12" />
          </svg>
        ),
        title: "Paid Ads & Campaigns",
        subtitle: "Reklam Yönetimi",
        paragraphs: [
          "Meta Ads ve Google Ads kampanyaları ile hedef kitleye ulaşan, dönüşüm odaklı reklam stratejileri kuruyoruz.",
          "Bütçe optimizasyonu, A/B testleri ve raporlama ile reklam ROI'sini maksimize ediyoruz.",
        ],
        tags: ["Meta Ads", "Google Ads", "Retargeting", "ROI", "Campaigns"],
      },
    ],
  },
];

export default function SolutionsTabs() {
  const [active, setActive] = useState(categories[0].id);
  const current = categories.find((c) => c.id === active)!;

  return (
    <div className="flex flex-col">
      <div className="mb-4 flex flex-wrap gap-2 sm:gap-3">
        {categories.map((category) => (
          <button
            key={category.id}
            type="button"
            onClick={() => setActive(category.id)}
            className={`rounded-full border px-3 py-1.5 text-xs transition-all duration-200 sm:px-4 sm:py-2 sm:text-sm ${
              active === category.id
                ? "border-e2i-accent bg-e2i-accent/10 text-e2i-accent shadow-[0_0_15px_rgba(0,245,212,0.1)]"
                : "border-white/10 text-slate-400 hover:border-e2i-accent/30 hover:text-white"
            }`}
          >
            {category.tab}
          </button>
        ))}
      </div>
      <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
        {current.cards.map((card) => (
          <SolutionCard key={card.title} {...card} compact />
        ))}
      </div>
    </div>
  );
}
