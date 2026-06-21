import { ReactNode } from "react";

interface SolutionCardProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
  paragraphs: string[];
  tags: string[];
  compact?: boolean;
}

export default function SolutionCard({
  icon,
  title,
  subtitle,
  paragraphs,
  tags,
  compact = false,
}: SolutionCardProps) {
  return (
    <article
      className={`card-glow group rounded-2xl bg-[#13233c]/60 backdrop-blur-sm ${
        compact ? "h-full p-5 sm:p-6" : "p-8 lg:p-10"
      }`}
    >
      <div className={`flex flex-col sm:flex-row sm:items-start ${compact ? "gap-4" : "gap-6"}`}>
        <div
          className={`flex shrink-0 items-center justify-center rounded-2xl border border-white/5 bg-[#0a1220]/50 text-e2i-accent transition-all duration-300 group-hover:border-e2i-accent/30 group-hover:shadow-[0_0_20px_rgba(0,245,212,0.1)] ${
            compact ? "h-12 w-12" : "h-16 w-16"
          }`}
        >
          {icon}
        </div>
        <div className="min-h-0 flex-1">
          <p className="text-xs font-medium uppercase tracking-widest text-e2i-accent">
            {subtitle}
          </p>
          <h2
            className={`mt-1 font-bold text-white ${compact ? "text-lg sm:text-xl" : "mt-2 text-2xl"}`}
          >
            {title}
          </h2>
          <div className={`space-y-2 ${compact ? "mt-3" : "mt-4 space-y-3"}`}>
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="text-sm leading-relaxed text-slate-400">
                {paragraph}
              </p>
            ))}
          </div>
          <div className={`flex flex-wrap gap-2 ${compact ? "mt-4" : "mt-6"}`}>
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/5 bg-[#0a1220]/50 px-3 py-1 text-xs text-slate-300 transition-all duration-200 hover:border-e2i-accent/30 hover:text-e2i-accent"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
