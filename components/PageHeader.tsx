interface PageHeaderProps {
  label: string;
  title: string;
  description?: string;
  compact?: boolean;
}

export default function PageHeader({
  label,
  title,
  description,
  compact = false,
}: PageHeaderProps) {
  return (
    <div className={`shrink-0 ${compact ? "mb-3 sm:mb-4" : "mb-4 sm:mb-5"}`}>
      <p className="text-xs font-medium uppercase tracking-widest text-e2i-accent">
        {label}
      </p>
      <h1
        className={`mt-1.5 font-bold text-white ${
          compact
            ? "text-lg sm:text-2xl lg:text-3xl"
            : "mt-2 text-2xl sm:text-3xl lg:text-4xl"
        }`}
      >
        {title}
      </h1>
      {description && (
        <p
          className={`max-w-2xl leading-relaxed text-slate-400 ${
            compact
              ? "mt-1.5 text-xs sm:text-sm"
              : "mt-2 text-sm sm:text-base"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
