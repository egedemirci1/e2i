import Link from "next/link";

const footerLinks = [
  { href: "/solutions", label: "Çözümler" },
  { href: "/case-studies", label: "Başarı Hikayeleri" },
  { href: "/about", label: "Hakkımızda" },
  { href: "/contact", label: "İletişim" },
];

const copyright = "© 2026 E2I — Tüm hakları saklıdır.";

interface FooterProps {
  embedded?: boolean;
}

export default function Footer({ embedded = false }: FooterProps) {
  if (embedded) {
    return (
      <footer className="shrink-0 px-4 pb-6 pt-2 sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 sm:flex-row sm:justify-between">
          <nav>
            <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-slate-500 transition-all duration-200 hover:text-e2i-accent sm:text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <p className="text-center text-xs text-slate-600 sm:text-right">
            {copyright}
          </p>
        </div>
      </footer>
    );
  }

  return (
    <footer className="mt-auto border-t border-white/5 bg-[#0a1220]/50">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-8 sm:px-6 lg:px-8">
        <nav>
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-slate-400 transition-all duration-200 hover:text-e2i-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <p className="text-center text-xs text-slate-500">
          {copyright}
        </p>
      </div>
    </footer>
  );
}
