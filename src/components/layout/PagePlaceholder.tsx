import { Button } from "@/components/ui/Button";

export function PagePlaceholder({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <section className="relative px-6 py-40 text-center lg:px-8">
      <div className="mx-auto max-w-xl">
        <h1 className="text-[length:var(--text-h1)] leading-[var(--text-h1--line-height)] font-bold text-[var(--color-warm-paper)]">
          {title}
        </h1>
        <p className="mx-auto mt-6 max-w-md text-[length:var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-[var(--color-slate)]">
          {description}
        </p>
        <p className="mt-10 text-[length:var(--text-eyebrow)] font-medium uppercase tracking-[0.15em] text-[var(--color-gold-bright)]">
          Part of the Website V3 build — coming soon
        </p>
        <div className="mt-10">
          <Button href="/" variant="secondary">
            Back to home
          </Button>
        </div>
      </div>
    </section>
  );
}
