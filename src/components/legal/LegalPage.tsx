import { HeroReveal } from "@/components/ui/HeroReveal";
import { Reveal } from "@/components/ui/Reveal";
import type { LegalPageContent } from "@/lib/legal/types";

const MUTED = "text-[var(--color-slate)]";

export function LegalPage({ content }: { content: LegalPageContent }) {
  return (
    <article className="relative px-6 py-28 lg:px-8 lg:py-36">
      <div className="mx-auto max-w-2xl">
        <HeroReveal>
          <h1 className="text-[2.75rem] leading-[1.1] font-bold text-[var(--color-warm-paper)] sm:text-[3.5rem] md:text-[4.75rem] md:leading-[1.08]">
            {content.title}
          </h1>
          <p className={`mt-4 text-sm ${MUTED}`}>
            Last updated: {content.lastUpdated}
          </p>
          <div className="mt-8 space-y-4">
            {content.intro.map((paragraph, i) => (
              <p
                key={i}
                className={`text-[length:var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] ${MUTED}`}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </HeroReveal>

        <Reveal delayMs={100} className="mt-16 space-y-14">
          {content.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-[length:var(--text-h4)] leading-[var(--text-h4--line-height)] font-bold text-[var(--color-warm-paper)]">
                {section.heading}
              </h2>
              <div className="mt-4 space-y-4">
                {section.paragraphs.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-[length:var(--text-body)] leading-[var(--text-body--line-height)] text-[var(--color-warm-paper)]/90"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
              {section.list && (
                <ul className="mt-4 space-y-2.5">
                  {section.list.map((item, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-[length:var(--text-body)] leading-[var(--text-body--line-height)] text-[var(--color-warm-paper)]/90"
                    >
                      <span aria-hidden className="mt-3 h-1 w-1 shrink-0 rounded-full bg-[var(--color-gold-bright)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </Reveal>
      </div>
    </article>
  );
}
