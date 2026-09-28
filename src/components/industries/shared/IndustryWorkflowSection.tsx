"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ArtFrame } from "@/components/ui/ArtFrame";
import { ICONS } from "@/components/industries/shared/iconRegistry";
import { VerificationJourney } from "@/components/industries/shared/VerificationJourney";
import type { ExplorerLine } from "@/lib/industryPageTypes";

const EYEBROW = "text-[length:var(--text-eyebrow)] font-medium uppercase tracking-[0.2em] text-[var(--color-gold-bright)]";
const MUTED = "text-[var(--color-slate)]";

// Explorer (workflow pills + detail) and Journey (Document Journey steps)
// share one selected-workflow state here, so clicking a pill updates both
// together — previously the Journey section was static content on
// IndustryPageContent, always describing whichever workflow it was
// originally written for regardless of which Explorer tab was active.
// Every ExplorerLine now carries its own `journey`; there is no
// industry-level journey left to fall out of sync.
export function IndustryWorkflowSection({
  explorerEyebrow,
  explorerHeading,
  lines,
}: {
  explorerEyebrow: string;
  explorerHeading: string;
  lines: ExplorerLine[];
}) {
  const [active, setActive] = useState(lines[0]?.key);
  const current = lines.find((l) => l.key === active) ?? lines[0];

  if (!current) return null;

  const CurrentIcon = ICONS[current.icon];

  return (
    <>
      {/* ---------- Explorer: pills + selected workflow's detail ---------- */}
      <section className="relative px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-5xl">
          <Reveal className="text-center">
            <p className={EYEBROW}>{explorerEyebrow}</p>
            <h2 className="mx-auto mt-6 max-w-lg text-[length:var(--text-h3)] leading-[var(--text-h3--line-height)] font-bold text-[var(--color-warm-paper)]">
              {explorerHeading}
            </h2>
          </Reveal>

          <Reveal delayMs={100} className="mt-14">
            <div className="flex flex-wrap justify-center gap-2.5">
              {lines.map((line) => {
                const isActive = line.key === active;
                const LineIcon = ICONS[line.icon];
                return (
                  <button
                    key={line.key}
                    onClick={() => setActive(line.key)}
                    aria-pressed={isActive}
                    className={`inline-flex items-center gap-2 rounded-full border px-4.5 py-3 text-sm font-medium transition-all duration-200 ease-[var(--ease-trust)] ${
                      isActive
                        ? "border-[var(--color-gold)] bg-[var(--color-gold)]/10 text-[var(--color-gold-bright)] shadow-[0_4px_16px_-6px_rgba(201,162,39,0.5)]"
                        : "border-white/10 text-[var(--color-slate)] hover:-translate-y-0.5 hover:border-white/25 hover:text-[var(--color-warm-paper)]"
                    }`}
                  >
                    <LineIcon size={14} strokeWidth={1.75} aria-hidden />
                    {line.label}
                  </button>
                );
              })}
            </div>

            <div
              key={current.key}
              className="animate-fade-up mt-10 grid gap-8 lg:grid-cols-2 lg:items-center"
              style={{ animationDuration: "400ms" }}
            >
              <ArtFrame
                src={current.src}
                alt={`${current.label} — Kweli Art Book`}
                source={current.art ?? "Not yet sourced — see MANIFEST.md"}
                icon={CurrentIcon}
                aspect="aspect-[4/3]"
              />

              <div>
                <p className={EYEBROW}>{current.label}</p>
                <p className="mt-4 text-[length:var(--text-body-lg)] leading-relaxed text-[var(--color-warm-paper)]">
                  {current.explanation}
                </p>

                {current.documents.length > 0 ? (
                  <ul className="mt-6 divide-y divide-white/5 border-t border-white/5">
                    {current.documents.map((doc) => (
                      <li
                        key={doc.name}
                        className="flex items-center justify-between rounded-[var(--radius-sm)] px-2 py-3.5 transition-colors duration-150 hover:bg-white/[0.03]"
                      >
                        <span className="text-base text-[var(--color-warm-paper)]">{doc.name}</span>
                        <span className="text-sm text-[var(--color-slate)]">{doc.issuer}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-6 text-base text-[var(--color-slate)]">
                    Document types for this line are being finalised.
                  </p>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Document Journey: driven by the same selection ---------- */}
      <section className="relative px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <div key={`heading-${current.key}`} className="animate-fade-up text-center" style={{ animationDuration: "400ms" }}>
            <p className={EYEBROW}>Document Journey</p>
            <h2 className="mx-auto mt-6 max-w-xl text-[length:var(--text-h3)] leading-[var(--text-h3--line-height)] font-bold text-[var(--color-warm-paper)]">
              {current.journey.heading}
            </h2>
          </div>

          <div key={`steps-${current.key}`} className="animate-fade-up" style={{ animationDuration: "450ms" }}>
            <VerificationJourney />
          </div>

          {current.journey.footnote && (
            <div
              key={`footnote-${current.key}`}
              className="animate-fade-up mx-auto mt-16 max-w-lg text-center"
              style={{ animationDuration: "400ms" }}
            >
              <p className={`text-sm leading-relaxed ${MUTED}`}>{current.journey.footnote}</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
