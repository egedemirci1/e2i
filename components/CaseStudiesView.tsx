"use client";

import { useState } from "react";
import CaseStudyCard from "@/components/CaseStudyCard";

const caseStudies = [
  {
    id: "automation",
    tab: "AI Otomasyon",
    title: "Lojistik Firması İçin AI Destekli Fatura ve Operasyon Otomasyonu",
    industry: "Lojistik & Tedarik Zinciri",
    steps: [
      {
        label: "Sorun",
        title: "Dağınık Operasyon ve Manuel Süreçler",
        description:
          "Orta ölçekli bir lojistik operatörü, günlük 800+ fatura ve sevkiyat belgesini e-posta ve Excel üzerinden manuel işliyordu. Veri giriş hataları gecikmelere ve müşteri memnuniyetsizliğine yol açıyordu.",
      },
      {
        label: "Mühendislik Çözümü",
        title: "Uçtan Uca Otomasyon Pipeline'ı",
        description:
          "Belge alımı, OCR tabanlı metin çıkarımı ve doğrulama adımlarını kapsayan event-driven bir pipeline tasarlandı. ERP ile çift yönlü API entegrasyonu kurularak veri akışı otomatikleştirildi.",
      },
      {
        label: "Yapay Zekâ Entegrasyonu",
        title: "Sınıflandırma ve Anomali Tespiti",
        description:
          "LLM destekli sınıflandırma modeli belge türlerini otomatik ayırdı; anomali skorlaması şüpheli kayıtları operasyon ekibine öncelikli iletti. İnsan-onaylı (human-in-the-loop) akış kritik kararları güvence altına aldı.",
      },
      {
        label: "Sonuç",
        title: "Ölçülebilir Operasyonel Kazanım",
        description:
          "Fatura işleme süresi %70 kısaldı, manuel veri girişinden yıllık 480 saat tasarruf sağlandı. İşlem hata oranı %12'den %1,8'e düştü.",
      },
    ],
    highlight: "%70 daha hızlı fatura işleme, yıllık 480 saat tasarruf",
  },
  {
    id: "web",
    tab: "Web Geliştirme",
    title: "İmalat Firması İçin Kurumsal Portal ve Canlı Üretim Paneli",
    industry: "İmalat & Sanayi",
    steps: [
      {
        label: "Sorun",
        title: "Parçalanmış Dijital Varlık",
        description:
          "Ulusal ölçekte bir üretim firmasının web sitesi, bayi portalı ve iç raporlama araçları birbirinden kopuktu. Müşteriler stok ve üretim durumuna anlık erişemiyor, satış ekibi 6 farklı sisteme giriş yapmak zorundaydı.",
      },
      {
        label: "Mühendislik Çözümü",
        title: "Next.js Tabanlı Birleşik Platform",
        description:
          "Next.js ve TypeScript ile SEO uyumlu kurumsal site, bayi portalı ve yönetim paneli tek mimari altında birleştirildi. PostgreSQL ve Redis katmanı ile yüksek trafikte stabil yanıt süreleri hedeflendi.",
      },
      {
        label: "Platform Entegrasyonu",
        title: "Gerçek Zamanlı Üretim Verisi",
        description:
          "Mevcut MES ve ERP sistemlerinden WebSocket ve REST API ile canlı üretim, stok ve sevkiyat verisi çekildi. Role-based erişim ile bayi, satış ve yönetim ekranları kişiselleştirildi.",
      },
      {
        label: "Sonuç",
        title: "Tek Merkezden Yönetim",
        description:
          "Sayfa yükleme süreleri %45 iyileşti, 6 ayrı giriş noktası tek panele indirildi. Bayi sorgu yanıt süresi ortalama 4,2 saniyeden 0,9 saniyeye düştü.",
      },
    ],
    highlight: "%45 daha hızlı performans, 6 sistem tek panelde birleşti",
  },
  {
    id: "game",
    tab: "Oyun Geliştirme",
    title: "Perakende Markası İçin Marka Aktivasyon Mobil Oyunu",
    industry: "Perakende & Marka Deneyimi",
    steps: [
      {
        label: "Sorun",
        title: "Düşük Kampanya Etkileşimi",
        description:
          "Genç hedef kitlesine sahip bir perakende markası, sezonluk kampanyalarında mağaza trafiğini artıramıyordu. Klasik indirim iletişimi dijital kanallarda düşük etkileşim ve sınırlı tekrar ziyaret üretiyordu.",
      },
      {
        label: "Mühendislik Çözümü",
        title: "Unity ile Hyper-Casual Oyun",
        description:
          "Unity tabanlı, 90 saniyelik oyun döngüsüne sahip bir mobil oyun prototiplendi. Skor tablosu, günlük görevler ve mağaza QR kodu entegrasyonu ile fiziksel-dijital köprü kuruldu.",
      },
      {
        label: "Oyun Tasarımı",
        title: "Ödül Mekanizması ve Gamification",
        description:
          "Oyuncu ilerlemesi mağaza kuponları ve sadakat puanlarına dönüştürüldü. A/B testleri ile zorluk eğrisi optimize edilerek 7. gün retention %34'e çıkarıldı.",
      },
      {
        label: "Sonuç",
        title: "Kampanya Döneminde Güçlü Trafik",
        description:
          "Oyun 8 haftada 250.000+ indirme aldı. Kampanya süresince mağaza ziyaretlerinde %38 artış ve uygulama içi kupon kullanım oranı %22 olarak ölçüldü.",
      },
    ],
    highlight: "250K+ indirme, mağaza trafiğinde %38 artış",
  },
  {
    id: "design",
    tab: "Tasarım",
    title: "B2B SaaS Startup İçin Kurumsal Kimlik ve 3D Ürün Tanıtımı",
    industry: "B2B Teknoloji",
    steps: [
      {
        label: "Sorun",
        title: "Tutarsız Marka Algısı",
        description:
          "Seri A aşamasındaki bir B2B SaaS girişimi, yatırımcı sunumları ve satış toplantılarında tutarsız görsel dil nedeniyle premium algıyı yansıtamıyordu. Ürünün teknik gücü anlatılıyor ancak güven veren bir marka kimliği eksikti.",
      },
      {
        label: "Mühendislik Çözümü",
        title: "Kurumsal Kimlik Sistemi",
        description:
          "Logo, renk paleti, tipografi ve grid sistemi içeren kapsamlı bir brand guide oluşturuldu. Pitch deck, web arayüzü ve sosyal medya şablonları tek görsel dil altında standardize edildi.",
      },
      {
        label: "Tasarım & Prodüksiyon",
        title: "3D Ürün Animasyonu",
        description:
          "Blender ile ürün mimarisini anlatan 45 saniyelik 3D tanıtım animasyonu üretildi. Web sitesi hero alanı ve LinkedIn kampanyaları için optimize edilmiş kısa format versiyonlar hazırlandı.",
      },
      {
        label: "Sonuç",
        title: "Güçlenen Marka Konumlandırması",
        description:
          "Yenilenen kimlik sonrası yatırımcı sunumlarında slayt etkileşim süresi %60 arttı. Web sitesi bounce rate %41'den %26'ya düştü, demo talep formu dönüşümü 2,1 kat yükseldi.",
      },
    ],
    highlight: "Demo taleplerinde 2,1x artış, bounce rate %26'ya düştü",
  },
  {
    id: "social",
    tab: "Sosyal Medya Yönetimi",
    title: "Restoran Zinciri İçin Sosyal Medya ve İçerik Otomasyon Platformu",
    industry: "Yeme-İçme & Franchise",
    steps: [
      {
        label: "Sorun",
        title: "Franchise Bağımsız İçerik Kaosu",
        description:
          "12 şubeli bir restoran zinciri, her lokasyonun farklı ton ve görsel kalitede paylaşım yapması nedeniyle marka bütünlüğünü koruyamıyordu. İçerik üretimi yavaş, performans raporlaması dağınıktı.",
      },
      {
        label: "Mühendislik Çözümü",
        title: "Merkezi İçerik Yönetim Paneli",
        description:
          "Meta Graph API entegrasyonlu merkezi bir panel geliştirildi. Onay akışı, içerik takvimi ve şube bazlı yayın planlaması tek arayüzden yönetilebilir hale getirildi.",
      },
      {
        label: "Büyüme Stratejisi",
        title: "Veri Odaklı İçerik Optimizasyonu",
        description:
          "Etkileşim, erişim ve rezervasyon dönüşüm metrikleri dashboard'a taşındı. En yüksek performanslı formatlar tespit edilerek içerik stratejisi haftalık döngülerle güncellendi.",
      },
      {
        label: "Sonuç",
        title: "Organik Büyüme ve Maliyet Verimliliği",
        description:
          "4 ayda organik erişim 3,2 kat arttı, reklam başına tıklama maliyeti %28 düştü. Şubeler arası marka tutarlılık skoru iç denetimde %92'ye yükseldi.",
      },
    ],
    highlight: "4 ayda 3,2x organik erişim, reklam maliyetinde %28 düşüş",
  },
];

export default function CaseStudiesView() {
  const [active, setActive] = useState(caseStudies[0].id);
  const current = caseStudies.find((c) => c.id === active)!;

  return (
    <div className="flex flex-col">
      <div className="mb-4 flex flex-wrap gap-2 sm:gap-3">
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
      <CaseStudyCard {...current} compact />
    </div>
  );
}
