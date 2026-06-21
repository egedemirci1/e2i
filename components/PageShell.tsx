import Footer from "@/components/Footer";

interface PageShellProps {
  children: React.ReactNode;
  centered?: boolean;
}

export function PageContent({
  children,
  noScroll = false,
}: {
  children: React.ReactNode;
  noScroll?: boolean;
}) {
  return (
    <div
      className={`mx-auto flex h-full min-h-0 w-full max-w-7xl flex-col pt-4 pb-4 sm:pt-7 sm:pb-8 ${
        noScroll ? "overflow-y-auto lg:overflow-hidden" : "overflow-y-auto"
      }`}
    >
      {children}
    </div>
  );
}

export default function PageShell({ children, centered = false }: PageShellProps) {
  return (
    <div className="fixed inset-x-0 bottom-0 top-[4.75rem] flex flex-col overflow-hidden">
      <div
        className={
          centered
            ? "flex min-h-0 flex-1 items-center justify-center px-4 sm:px-6 lg:px-8"
            : "flex min-h-0 flex-1 flex-col px-4 sm:px-6 lg:px-8"
        }
      >
        {children}
      </div>
      <Footer embedded />
    </div>
  );
}
