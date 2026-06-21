import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import PageShell, { PageContent } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "İletişim — E2I",
  description:
    "E2I ile iletişime geçin. Yozgat Bozok Üniversitesi kampüsündeki Bozok Teknopark ofisimiz.",
};

const MAP_EMBED_URL =
  "https://maps.google.com/maps?q=Bozok+Teknopark,+Yozgat+Bozok+%C3%9Cniversitesi+Erdo%C4%9Fan+Akda%C4%9F+Kamp%C3%BCs%C3%BC,+Yozgat&t=&z=16&ie=UTF8&iwloc=&output=embed";

export default function ContactPage() {
  return (
    <PageShell>
      <PageContent>
        <PageHeader
          label="İletişim"
          title="Bize Ulaşın"
          description="Bozok Teknopark, Yozgat Bozok Üniversitesi kampüsü."
          compact
        />

        <div className="flex flex-col gap-3 lg:min-h-0 lg:h-[64%] lg:max-h-[64%] lg:flex-none lg:flex-row lg:items-stretch lg:justify-between lg:gap-6">
          <div className="card-glow shrink-0 rounded-2xl bg-[#13233c]/60 p-4 backdrop-blur-sm sm:p-6 lg:flex lg:min-h-0 lg:w-[30%] lg:max-w-sm lg:flex-none lg:flex-col lg:p-8">
            <h2 className="text-base font-semibold text-white sm:text-lg">
              Kurumsal İletişim
            </h2>
            <ul className="mt-3 flex flex-col gap-3 sm:mt-4 sm:gap-4 lg:min-h-0 lg:flex-1 lg:justify-center lg:gap-6">
              <li className="flex gap-3 sm:gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/5 bg-[#0a1220]/50 text-e2i-accent sm:h-10 sm:w-10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Adres</p>
                  <p className="mt-0.5 text-xs leading-relaxed text-slate-400 sm:mt-1 sm:text-sm">
                    <span className="sm:hidden">
                      Bozok Teknopark · YBU Erdoğan Akdağ Kampüsü
                      <br />
                      66100 Merkez / Yozgat
                    </span>
                    <span className="hidden sm:inline">
                      Yozgat Bozok Üniversitesi
                      <br />
                      Erdoğan Akdağ Kampüsü · Bozok Teknopark
                      <br />
                      66100 Merkez / Yozgat
                    </span>
                  </p>
                </div>
              </li>
              <li className="flex gap-3 sm:gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/5 bg-[#0a1220]/50 text-e2i-accent sm:h-10 sm:w-10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-white">E-posta</p>
                  <a
                    href="mailto:info@e2i.com.tr"
                    className="mt-1 text-sm text-slate-400 transition-all duration-200 hover:text-e2i-accent"
                  >
                    info@e2i.com.tr
                  </a>
                </div>
              </li>
              <li className="flex gap-3 sm:gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/5 bg-[#0a1220]/50 text-e2i-accent sm:h-10 sm:w-10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Telefon</p>
                  <a
                    href="tel:+905356281306"
                    className="mt-1 text-sm text-slate-400 transition-all duration-200 hover:text-e2i-accent"
                  >
                    +90 535 628 13 06
                  </a>
                </div>
              </li>
              <li className="flex gap-3 sm:gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/5 bg-[#0a1220]/50 text-e2i-accent sm:h-10 sm:w-10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Çalışma Saatleri</p>
                  <p className="mt-1 text-sm text-slate-400">
                    Pazartesi — Cuma: 09:00 — 18:00
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="card-glow h-48 shrink-0 overflow-hidden rounded-2xl border border-white/5 bg-[#13233c]/60 backdrop-blur-sm sm:h-56 lg:min-h-0 lg:h-auto lg:w-[46%] lg:flex-1 lg:flex-none">
            <iframe
              title="E2I Ofis Konumu — Bozok Teknopark, Yozgat"
              src={MAP_EMBED_URL}
              className="h-full min-h-0 w-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </PageContent>
    </PageShell>
  );
}
