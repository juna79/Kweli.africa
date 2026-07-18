import { LegalToc, type TocItem } from "@/components/legal/LegalToc";

export function LegalLayout({
  toc,
  children,
}: {
  toc: TocItem[];
  children: React.ReactNode;
}) {
  return (
    <section className="relative px-6 pb-28 lg:px-8 lg:pb-36">
      <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[220px_1fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <LegalToc items={toc} />
        </div>
        <div className="max-w-2xl space-y-20">{children}</div>
      </div>
    </section>
  );
}
