"use client";

import { useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { HeroReveal } from "@/components/ui/HeroReveal";
import { Select, type SelectOption } from "@/components/ui/Select";
import { industries } from "@/lib/industries";

const industryOptions: SelectOption[] = [
  ...industries.map((industry) => ({
    value: industry.slug,
    label: industry.name,
    icon: industry.icon,
  })),
  { value: "other", label: "Other" },
];

const MUTED = "text-[var(--color-slate)]";

const FORM_NAME = "book-a-demo";

type Status = "idle" | "submitting" | "success" | "error";

function fieldClasses(hasError: boolean) {
  return `w-full rounded-[var(--radius-md)] border ${
    hasError ? "border-[var(--color-failed)]/60" : "border-white/15"
  } bg-white/[0.02] px-4 py-3 text-sm text-[var(--color-warm-paper)] placeholder:text-[var(--color-slate)]/70 transition-colors duration-150 focus:border-[var(--color-gold-bright)] focus:outline-none`;
}

function validate(data: FormData) {
  const errors: Record<string, string> = {};
  const name = String(data.get("name") ?? "").trim();
  const email = String(data.get("email") ?? "").trim();
  const company = String(data.get("company") ?? "").trim();
  const industry = String(data.get("industry") ?? "").trim();

  if (!name) errors.name = "Enter your full name.";
  if (!email) errors.email = "Enter your work email.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!company) errors.company = "Enter your organisation.";
  if (!industry) errors.industry = "Select your industry.";

  return errors;
}

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
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const formRef = useRef<HTMLFormElement>(null);

  function clearError(field: string) {
    setErrors((prev) => {
      if (!(field in prev)) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;

    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: real visitors never fill this in. Bots that do get silently dropped.
    if (String(data.get("bot-field") ?? "").length > 0) return;

    const fieldErrors = validate(data);
    setErrors(fieldErrors);
    if (Object.keys(fieldErrors).length > 0) return;

    setStatus("submitting");

    try {
      const body = new URLSearchParams();
      data.forEach((value, key) => body.append(key, String(value)));

      // Posts to the static form-definition file, not this page. The Next.js
      // Runtime serves /book-a-demo from its own prerendered-page cache even
      // for POST requests, which never reaches Netlify's forms processing —
      // confirmed by inspecting response headers (cache-status: "Next.js"; hit)
      // versus the real Netlify Forms "Thank you" response from /__forms.html.
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });

      if (!res.ok) throw new Error(`Submission failed with status ${res.status}`);

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <section className="relative px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-xl">
          <Reveal>
            <div className="rounded-[var(--radius-xl)] border border-white/10 bg-white/[0.02] p-8 text-center lg:p-10">
              <CheckCircle2
                size={40}
                strokeWidth={1.75}
                className="mx-auto text-[var(--color-verified)]"
                aria-hidden
              />
              <h2 className="mt-6 text-[length:var(--text-h3)] leading-[var(--text-h3--line-height)] font-semibold text-[var(--color-warm-paper)]">
                Request received.
              </h2>
              <p className={`mx-auto mt-3 max-w-sm text-sm ${MUTED}`}>
                Thanks for reaching out. Someone from our team will follow up
                by email shortly to schedule a time.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-8 inline-flex items-center justify-center rounded-[var(--radius-md)] border border-white/15 px-6 py-3 text-sm font-medium text-[var(--color-warm-paper)] transition-colors duration-150 hover:border-[var(--color-gold-bright)]"
              >
                Submit another request
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

  return (
    <section className="relative px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-xl">
        <Reveal>
          <form
            ref={formRef}
            name={FORM_NAME}
            method="POST"
            data-netlify="true"
            noValidate
            onSubmit={handleSubmit}
            className="rounded-[var(--radius-xl)] border border-white/10 bg-white/[0.02] p-8 lg:p-10"
            {...{ "netlify-honeypot": "bot-field" }}
          >
            <input type="hidden" name="form-name" value={FORM_NAME} />
            <p className="hidden" aria-hidden="true">
              <label>
                Leave this field blank
                <input tabIndex={-1} autoComplete="off" name="bot-field" />
              </label>
            </p>

            {status === "error" && (
              <div
                role="alert"
                className="mb-8 flex items-start gap-3 rounded-[var(--radius-md)] border border-[var(--color-failed)]/40 bg-[var(--color-failed)]/10 px-4 py-3 text-sm text-[var(--color-warm-paper)]"
              >
                <AlertCircle
                  size={16}
                  strokeWidth={2}
                  className="mt-0.5 shrink-0 text-[var(--color-failed)]"
                  aria-hidden
                />
                <span>
                  Something went wrong sending your request. Please try
                  again, or email us directly if the problem continues.
                </span>
              </div>
            )}

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-[var(--color-warm-paper)]">
                  Full name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => e.target.value.trim() && clearError("name")}
                  className={`mt-2 ${fieldClasses(Boolean(errors.name))}`}
                />
                {errors.name && (
                  <p id="name-error" role="alert" className="mt-1.5 text-xs text-[var(--color-failed)]">
                    {errors.name}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium text-[var(--color-warm-paper)]">
                  Work email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => e.target.value.trim() && clearError("email")}
                  className={`mt-2 ${fieldClasses(Boolean(errors.email))}`}
                />
                {errors.email && (
                  <p id="email-error" role="alert" className="mt-1.5 text-xs text-[var(--color-failed)]">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-6">
              <label htmlFor="company" className="text-sm font-medium text-[var(--color-warm-paper)]">
                Organisation
              </label>
              <input
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                aria-invalid={Boolean(errors.company)}
                aria-describedby={errors.company ? "company-error" : undefined}
                onChange={(e: ChangeEvent<HTMLInputElement>) => e.target.value.trim() && clearError("company")}
                className={`mt-2 ${fieldClasses(Boolean(errors.company))}`}
              />
              {errors.company && (
                <p id="company-error" role="alert" className="mt-1.5 text-xs text-[var(--color-failed)]">
                  {errors.company}
                </p>
              )}
            </div>

            <div className="mt-6">
              <label htmlFor="industry" className="text-sm font-medium text-[var(--color-warm-paper)]">
                Industry
              </label>
              <div className="mt-2">
                <Select
                  triggerId="industry"
                  name="industry"
                  options={industryOptions}
                  placeholder="Select your industry"
                  required
                  invalid={Boolean(errors.industry)}
                  describedBy={errors.industry ? "industry-error" : undefined}
                  onValueChange={(value) => value && clearError("industry")}
                />
              </div>
              {errors.industry && (
                <p id="industry-error" role="alert" className="mt-1.5 text-xs text-[var(--color-failed)]">
                  {errors.industry}
                </p>
              )}
            </div>

            <div className="mt-6">
              <label htmlFor="message" className="text-sm font-medium text-[var(--color-warm-paper)]">
                What document workflow are you looking to verify?
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                maxLength={2000}
                className={`mt-2 resize-none ${fieldClasses(false)}`}
              />
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-[var(--radius-md)] bg-[var(--color-gold)] px-6 py-3 text-sm font-medium text-[#0b080f] transition-all duration-150 ease-[var(--ease-trust)] hover:bg-[var(--color-gold-bright)] hover:-translate-y-0.5 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
            >
              {status === "submitting" && (
                <Loader2 size={16} strokeWidth={2} className="animate-spin" aria-hidden />
              )}
              {status === "submitting" ? "Sending..." : "Request a Demo"}
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
