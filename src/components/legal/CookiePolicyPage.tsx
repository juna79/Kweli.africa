import { Lock, BarChart3, Sliders, Settings2 } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { LegalHero } from "@/components/legal/LegalHero";
import { LegalToc } from "@/components/legal/LegalToc";
import { LegalCallout } from "@/components/legal/LegalCallout";
import { LegalContactCard } from "@/components/legal/LegalContactCard";

const toc = [
  { id: "essential", label: "Essential cookies" },
  { id: "analytics", label: "Analytics cookies" },
  { id: "preferences", label: "Preference cookies" },
  { id: "managing", label: "Managing cookies" },
];

const cookieTypes = [
  {
    id: "essential",
    icon: Lock,
    label: "Essential",
    required: true,
    copy: "Necessary for the Site to function — for example, remembering your preferences during a single visit, or keeping the Site secure. The Site can't work properly without them, and they can't be switched off.",
  },
  {
    id: "analytics",
    icon: BarChart3,
    label: "Analytics",
    required: false,
    copy: "Where enabled, these help us understand, in aggregate, how visitors use the Site — which pages get viewed, how people arrive. It tells us what's working, not who you are.",
  },
  {
    id: "preferences",
    icon: Sliders,
    label: "Preferences",
    required: false,
    copy: "If used, these remember choices you've made on the Site, such as display settings, so you don't have to set them again on a later visit.",
  },
] as const;

function CookieCards() {
  return (
    <section className="relative px-6 py-4 lg:px-8 lg:py-8">
      <div className="mx-auto max-w-4xl">
        <Reveal className="grid gap-5 sm:grid-cols-3">
          {cookieTypes.map((type) => (
            <div
              key={type.id}
              id={type.id}
              className="scroll-mt-28 rounded-[var(--radius-lg)] border border-white/10 bg-white/[0.02] p-7 transition-all duration-[350ms] ease-[var(--ease-trust)] hover:-translate-y-1 hover:border-[var(--color-gold)]/30 hover:bg-white/[0.04]"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-[var(--color-gold-bright)]">
                  <type.icon size={18} strokeWidth={1.75} aria-hidden />
                </span>
                {type.required && (
                  <span className="rounded-[var(--radius-sm)] border border-[var(--color-gold)]/40 bg-[var(--color-gold)]/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-[var(--color-gold-bright)]">
                    Always on
                  </span>
                )}
              </div>
              <p className="mt-5 text-base font-semibold text-[var(--color-warm-paper)]">{type.label}</p>
              <p className="mt-2 text-[length:var(--text-body)] leading-relaxed text-[var(--color-slate)]">{type.copy}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export function CookiePolicyPage() {
  return (
    <>
      <LegalHero
        eyebrow="Cookie Policy"
        title="A short policy, because it should be."
        subtitle="This page explains the handful of cookies this Site uses, and how to control them. Read it alongside our Privacy Policy."
        lastUpdated="18 July 2026"
      />

      <section className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-sm">
          <LegalToc items={toc} />
        </div>
      </section>

      <CookieCards />

      <section className="relative px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-2xl space-y-6">
          <div id="managing" className="scroll-mt-28">
            <Reveal>
              <h2 className="text-[length:var(--text-h4)] leading-[var(--text-h4--line-height)] font-bold text-[var(--color-warm-paper)]">
                Managing cookies
              </h2>
              <div className="mt-5 space-y-4">
                <LegalCallout icon={Settings2} tone="neutral">
                  Most browsers let you view, delete, and block cookies
                  through their settings — usually under Settings → Privacy.
                  Blocking essential cookies may affect how parts of the Site
                  behave; blocking analytics or preference cookies has no
                  effect on core functionality.
                </LegalCallout>
                <p className="text-[length:var(--text-body)] leading-[var(--text-body--line-height)] text-[var(--color-warm-paper)]/90">
                  We may update this Cookie Policy from time to time.
                  We&rsquo;ll post the updated version on this page with a
                  revised &ldquo;Last updated&rdquo; date.
                </p>
              </div>
            </Reveal>
          </div>

          <LegalContactCard copy="Questions about this Cookie Policy can be directed to our team." />
        </div>
      </section>
    </>
  );
}
