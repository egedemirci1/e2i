interface PageHeaderProps {
  label: string;
  title: string;
  description?: string;
}

export default function PageHeader({
  label,
  title,
  description,
}: PageHeaderProps) {
  return (
    <div className="mb-4 shrink-0 sm:mb-5">
      <p className="text-xs font-medium uppercase tracking-widest text-e2i-accent">
        {label}
      </p>
      <h1 className="mt-2 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
        {title}
      </h1>
      {description && (
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}
