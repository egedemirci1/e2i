import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="card-glow group rounded-2xl bg-[#13233c]/60 p-8 backdrop-blur-sm">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-white/5 bg-[#0a1220]/50 text-e2i-accent transition-all duration-300 group-hover:border-e2i-accent/30 group-hover:shadow-[0_0_20px_rgba(0,245,212,0.1)]">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-400">{description}</p>
    </div>
  );
}
