"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "@/components/Logo";

const navLinks = [
  { href: "/solutions", label: "Çözümler" },
  { href: "/case-studies", label: "Başarı Hikayeleri" },
  { href: "/about", label: "Hakkımızda" },
  { href: "/contact", label: "İletişim" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0a1220]/70 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Logo onClick={() => setMenuOpen(false)} showTagline />

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm transition-all duration-200 ${
                  pathname === link.href
                    ? "text-e2i-accent"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-300 transition-all duration-200 hover:border-e2i-accent/30 hover:text-white md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-white/5 bg-[#0a1220]/95 px-4 py-4 md:hidden">
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block py-2 text-sm transition-all duration-200 ${
                    pathname === link.href
                      ? "text-e2i-accent"
                      : "text-slate-300 hover:text-white"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
