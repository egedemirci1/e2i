interface CaseStudyStep {
  label: string;
  title: string;
  description: string;
}

interface CaseStudyCardProps {
  title: string;
  industry: string;
  steps: CaseStudyStep[];
  highlight: string;
  compact?: boolean;
}

export default function CaseStudyCard({
  title,
  industry,
  steps,
  highlight,
  compact = false,
}: CaseStudyCardProps) {
  return (
    <article
      className={`card-glow group rounded-2xl bg-[#13233c]/60 backdrop-blur-sm ${
        compact ? "h-full p-5 sm:p-6" : "p-8 lg:p-10"
      }`}
    >
      <div className={compact ? "mb-4" : "mb-8"}>
        <span className="text-xs font-medium uppercase tracking-widest text-e2i-accent">
          {industry}
        </span>
        <h2 className={`mt-1 font-bold text-white ${compact ? "text-base sm:text-lg" : "mt-2 text-2xl"}`}>
          {title}
        </h2>
      </div>

      <div className="relative space-y-0">
        {steps.map((step, index) => (
          <div
            key={step.label}
            className={`relative flex gap-4 ${compact ? "pb-4 last:pb-0" : "gap-6 pb-8 last:pb-0"}`}
          >
            {index < steps.length - 1 && (
              <div className="absolute left-[15px] top-8 h-[calc(100%-16px)] w-px bg-gradient-to-b from-e2i-accent/50 to-e2i-accent/10" />
            )}
            <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-e2i-accent/30 bg-[#0a1220] text-xs font-bold text-e2i-accent">
              {index + 1}
            </div>
            <div className="flex-1 pt-0.5">
              <p className="text-xs font-semibold uppercase tracking-wider text-e2i-accent">
                {step.label}
              </p>
              <h3 className="mt-0.5 text-sm font-semibold text-white sm:text-base">
                {step.title}
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-slate-400 sm:text-sm">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div
        className={`rounded-xl border border-e2i-accent/20 bg-e2i-accent/5 px-4 py-3 ${
          compact ? "mt-4" : "mt-8 px-6 py-4"
        }`}
      >
        <p className="text-xs font-medium text-e2i-accent sm:text-sm">Sonuç</p>
        <p className="mt-0.5 text-sm font-semibold text-white sm:text-base">
          {highlight}
        </p>
      </div>
    </article>
  );
}
