import Link from "next/link";
import PageShell from "@/components/PageShell";

export default function Home() {
  return (
    <PageShell centered>
      <div className="relative mx-auto max-w-7xl text-center">
        <h1 className="text-6xl font-bold leading-[1.02] tracking-tighter sm:text-7xl md:text-7xl lg:text-8xl xl:text-9xl">
          <span className="flex flex-col sm:hidden">
            <span className="hero-line text-white">Mühendislikten</span>
            <span className="hero-accent gradient-text">Zekaya</span>
          </span>
          <span className="hidden flex-col sm:flex lg:hidden">
            <span className="hero-line text-white">Mühendislikten</span>
            <span className="hero-accent gradient-text">Zekaya</span>
          </span>
          <span className="hidden lg:inline">
            <span className="hero-line text-white">Mühendislikten</span>{" "}
            <span className="hero-accent gradient-text">Zekaya</span>
          </span>
        </h1>
        <p className="fade-in-up-delay-4 mx-auto mt-8 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg md:text-xl">
          Fikirden sisteme, sistemden zekaya — işletmenizin dijital dönüşümünü
          mühendislik disiplini ve yapay zekâ ile birlikte inşa ediyoruz.
        </p>
        <div className="fade-in-up-delay-5 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 rounded-xl border border-e2i-accent/30 bg-e2i-accent/10 px-8 py-3.5 text-sm font-semibold text-e2i-accent transition-all duration-200 hover:scale-105 hover:border-e2i-accent hover:bg-e2i-accent/20 hover:shadow-[0_0_30px_rgba(0,245,212,0.2)]"
          >
            Çözümlerimizi Keşfedin
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-8 py-3.5 text-sm font-semibold text-slate-300 transition-all duration-200 hover:border-e2i-accent/30 hover:text-white"
          >
            İletişime Geçin
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
