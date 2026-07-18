"use client";

import { useState, type FormEvent } from "react";
import { Info } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { HeroReveal } from "@/components/ui/HeroReveal";
import { industries } from "@/lib/industries";

const MUTED = "text-[var(--color-slate)]";

const inputClasses =
  "w-full rounded-[var(--radius-md)] border border-white/15 bg-white/[0.02] px-4 py-3 text-sm text-[var(--color-warm-paper)] placeholder:text-[var(--color-slate)]/70 transition-colors duration-150 focus:border-[var(--color-gold-bright)] focus:outline-none";

function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-28 pb-10 text-center lg:px-8 lg:pt-36">
      <div
        aria-hidden
        className="absolute inset-0 -z-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_10%,rgba(201,162,39,0.16),transparent_65%)]"
      />
      <div className="relative z-10 mx-auto max-w-2xl">
        <HeroReveal>
          <p className="text-[length:var(--text-eyebrow)] font-medium uppercase tracking-[0.2em] text-[var(--color-gold-bright)]">
            Book a Demo
          </p>
          <h1 className="mx-auto mt-6 text-[length:var(--text-h1)] leading-[var(--text-h1--line-height)] font-bold text-[var(--color-warm-paper)]">
            See it fit into your workflow.
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-[length:var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-[var(--color-slate)]">
            Tell us where documents are slowing you down. We&rsquo;ll show you
            how Kweli fits into the workflow you already have, without
            changing the way your team works.
          </p>
        </HeroReveal>
      </div>
    </section>
  );
}

function DemoForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="relative px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-xl">
        <Reveal>
          <form
            onSubmit={handleSubmit}
            className="rounded-[var(--radius-xl)] border border-white/10 bg-white/[0.02] p-8 lg:p-10"
          >
            {submitted && (
              <div
                role="status"
                className="mb-8 flex items-start gap-3 rounded-[var(--radius-md)] border border-[var(--color-gold)]/40 bg-[var(--color-gold)]/10 px-4 py-3 text-sm text-[var(--color-warm-paper)]"
              >
                <Info
                  size={16}
                  strokeWidth={2}
                  className="mt-0.5 shrink-0 text-[var(--color-gold-bright)]"
                  aria-hidden
                />
                <span>
                  This form isn&rsquo;t connected to a booking system yet, so
                  nothing was sent. We&rsquo;re showing you this instead of
                  pretending it went through.
                </span>
              </div>
            )}

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-[var(--color-warm-paper)]">
                  Full name
                </label>
                <input id="name" name="name" type="text" required className={`mt-2 ${inputClasses}`} />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium text-[var(--color-warm-paper)]">
                  Work email
                </label>
                <input id="email" name="email" type="email" required className={`mt-2 ${inputClasses}`} />
              </div>
            </div>

            <div className="mt-6">
              <label htmlFor="company" className="text-sm font-medium text-[var(--color-warm-paper)]">
                Organisation
              </label>
              <input id="company" name="company" type="text" required className={`mt-2 ${inputClasses}`} />
            </div>

            <div className="mt-6">
              <label htmlFor="industry" className="text-sm font-medium text-[var(--color-warm-paper)]">
                Industry
              </label>
              <select id="industry" name="industry" required defaultValue="" className={`mt-2 ${inputClasses}`}>
                <option value="" disabled>
                  Select your industry
                </option>
                {industries.map((industry) => (
                  <option key={industry.slug} value={industry.slug}>
                    {industry.name}
                  </option>
                ))}
                <option value="other">Other</option>
              </select>
            </div>

            <div className="mt-6">
              <label htmlFor="message" className="text-sm font-medium text-[var(--color-warm-paper)]">
                What document workflow are you looking to verify?
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className={`mt-2 resize-none ${inputClasses}`}
              />
            </div>

            <button
              type="submit"
              className="mt-8 inline-flex w-full items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-gold)] px-6 py-3 text-sm font-medium text-[#0b080f] transition-all duration-150 ease-[var(--ease-trust)] hover:bg-[var(--color-gold-bright)] hover:-translate-y-0.5 active:translate-y-0"
            >
              Request a Demo
            </button>
            <p className={`mt-4 text-center text-xs ${MUTED}`}>
              No spam. We only use this to schedule a conversation about your
              workflow.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

export function BookADemo() {
  return (
    <>
      <Hero />
      <DemoForm />
    </>
  );
}
