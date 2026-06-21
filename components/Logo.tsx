import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  showTagline?: boolean;
  className?: string;
  onClick?: () => void;
}

export default function Logo({ showTagline = true, className = "", onClick }: LogoProps) {
  return (
    <Link
      href="/"
      className={`group flex items-center gap-3 ${className}`}
      onClick={onClick}
    >
      <Image
        src="/logo-tight.png"
        alt="E2I — Engineering to Intelligence"
        width={44}
        height={42}
        className="h-10 w-auto object-contain brightness-0 invert transition-all duration-200 group-hover:drop-shadow-[0_0_12px_rgba(0,245,212,0.4)]"
        priority
      />
      {showTagline && (
        <div className="flex flex-col">
          <span className="text-xl font-bold tracking-wider text-white transition-colors duration-200 group-hover:text-e2i-accent">
            E2I
          </span>
          <span
            className="text-[10px] uppercase tracking-[0.2em] text-slate-400"
            lang="en"
          >
            Engineering to Intelligence
          </span>
        </div>
      )}
    </Link>
  );
}
