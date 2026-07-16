"use client";

import { useEffect, useRef, useState } from "react";
import {
  Upload,
  Fingerprint,
  Search,
  ShieldCheck,
  FileCheck2,
  RotateCcw,
  Check,
  X,
  FileQuestion,
} from "lucide-react";
import { Badge, type BadgeStatus } from "@/components/ui/Badge";

type Outcome = "verified" | "failed" | "not-found";

// Fictional demonstration documents only (per Kweli_V3_Master_Kickoff.md section 11 / 13).
const demoDocuments: {
  id: string;
  label: string;
  issuer: string;
  documentType: string;
  outcome: Outcome;
}[] = [
  {
    id: "degree",
    label: "Degree Certificate",
    issuer: "Kweli University",
    documentType: "Degree Certificate",
    outcome: "verified",
  },
  {
    id: "estimate",
    label: "Repair Estimate",
    issuer: "Northline Motors (fictional)",
    documentType: "Repair Estimate",
    outcome: "failed",
  },
  {
    id: "permit",
    label: "Building Permit",
    issuer: "Unregistered Authority (fictional)",
    documentType: "Building Permit",
    outcome: "not-found",
  },
];

const steps = [
  { key: "upload", label: "Upload", sub: "Document selected for demonstration.", icon: Upload },
  { key: "hashing", label: "Hashing", sub: "Generating a unique cryptographic fingerprint.", icon: Fingerprint },
  { key: "searching", label: "Searching", sub: "Searching the Kweli network for a matching record.", icon: Search },
  { key: "verifying", label: "Verifying", sub: "Comparing the fingerprint against the registered record.", icon: ShieldCheck },
  { key: "result", label: "Result", sub: "The result is returned instantly.", icon: FileCheck2 },
] as const;

const outcomeToBadge: Record<Outcome, BadgeStatus> = {
  verified: "verified",
  failed: "failed",
  "not-found": "not-found",
};

const outcomeCopy: Record<
  Outcome,
  { title: string; body: string; icon: typeof Check; ring: string; glow: string; text: string }
> = {
  verified: {
    title: "VERIFIED",
    body: "This document is authentic and unchanged since issuance.",
    icon: Check,
    ring: "border-[var(--color-verified)]/50",
    glow: "shadow-[0_0_60px_-8px_rgba(46,158,107,0.45)]",
    text: "text-[var(--color-verified)]",
  },
  failed: {
    title: "VERIFICATION FAILED",
    body: "We could not verify this document. It may have been altered or is not authentic.",
    icon: X,
    ring: "border-[var(--color-failed)]/40",
    glow: "shadow-[0_0_50px_-10px_rgba(255,77,79,0.3)]",
    text: "text-[var(--color-failed)]",
  },
  "not-found": {
    title: "DOCUMENT NOT FOUND",
    body: "No record exists for this document. Please check the details and try again.",
    icon: FileQuestion,
    ring: "border-[var(--color-slate)]/40",
    glow: "",
    text: "text-[var(--color-slate)]",
  },
};

const STEP_DURATION_MS = 950;
const HEX_CHARS = "0123456789abcdef";

function randomHex(length: number) {
  let out = "";
  for (let i = 0; i < length; i++) out += HEX_CHARS[Math.floor(Math.random() * 16)];
  return out;
}

function DocumentStage({
  stepKey,
  outcome,
}: {
  stepKey: (typeof steps)[number]["key"] | null;
  outcome: Outcome | null;
}) {
  const [hash, setHash] = useState("");

  useEffect(() => {
    if (stepKey !== "hashing") return;
    const id = setInterval(() => setHash(randomHex(16)), 70);
    return () => clearInterval(id);
  }, [stepKey]);

  const resultTone = stepKey === "result" && outcome ? outcomeCopy[outcome] : null;

  return (
    <div className="relative mx-auto flex h-64 w-48 items-center justify-center">
      <div
        className={`relative h-56 w-40 rounded-[var(--radius-lg)] border bg-gradient-to-b from-white/[0.06] to-white/[0.02] backdrop-blur-sm transition-all duration-500 ${
          resultTone ? `${resultTone.ring} ${resultTone.glow}` : "border-white/10"
        }`}
      >
        {/* mock document lines */}
        <div className="space-y-2 p-4">
          <div className="h-2 w-3/4 rounded-full bg-white/15" />
          <div className="h-1.5 w-full rounded-full bg-white/10" />
          <div className="h-1.5 w-full rounded-full bg-white/10" />
          <div className="h-1.5 w-2/3 rounded-full bg-white/10" />
          <div className="mt-4 h-10 w-10 rounded-full border border-[var(--color-gold)]/40" />
          <div className="h-1.5 w-full rounded-full bg-white/10" />
          <div className="h-1.5 w-1/2 rounded-full bg-white/10" />
        </div>

        {/* scanning sweep during hashing */}
        {stepKey === "hashing" && (
          <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[var(--radius-lg)]">
            <div className="absolute inset-x-0 h-10 bg-gradient-to-b from-transparent via-[var(--color-gold-bright)]/25 to-transparent animate-[scan-sweep_1.1s_linear_infinite]" />
          </div>
        )}

        {/* radar ping during searching */}
        {stepKey === "searching" && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <span className="absolute h-16 w-16 rounded-full border border-[var(--color-gold-bright)]/50 animate-[radar-ping_1.4s_ease-out_infinite]" />
            <span
              className="absolute h-16 w-16 rounded-full border border-[var(--color-gold-bright)]/50 animate-[radar-ping_1.4s_ease-out_infinite]"
              style={{ animationDelay: "0.5s" }}
            />
          </div>
        )}

        {/* rotating verifying ring */}
        {stepKey === "verifying" && (
          <div className="pointer-events-none absolute -right-3 -top-3 flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-background)]">
            <span className="absolute h-9 w-9 rounded-full border-2 border-transparent border-t-[var(--color-gold-bright)] border-r-[var(--color-gold-bright)]/40 animate-[spin-slow_0.9s_linear_infinite]" />
            <ShieldCheck size={16} strokeWidth={2} className="text-[var(--color-gold-bright)]" aria-hidden />
          </div>
        )}

        {/* result overlay */}
        {resultTone && (
          <div className="absolute inset-0 flex items-center justify-center rounded-[var(--radius-lg)] bg-[var(--color-background)]/55">
            <span
              className={`animate-[result-reveal_450ms_var(--ease-trust)_both] flex h-14 w-14 items-center justify-center rounded-full border ${resultTone.ring} bg-[var(--color-background)]`}
            >
              <resultTone.icon size={26} strokeWidth={2.25} className={resultTone.text} aria-hidden />
            </span>
          </div>
        )}
      </div>

      {stepKey === "hashing" && (
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[11px] tracking-wider text-[var(--color-gold-bright)]/80">
          SHA-256 {hash}
        </div>
      )}
    </div>
  );
}

export function VerificationDemo() {
  const [activeDoc, setActiveDoc] = useState<(typeof demoDocuments)[number] | null>(null);
  const [stepIndex, setStepIndex] = useState(-1);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    return () => {
      timers.current.forEach(clearTimeout);
    };
  }, []);

  function runDemo(doc: (typeof demoDocuments)[number]) {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    setActiveDoc(doc);
    setStepIndex(0);

    for (let i = 1; i < steps.length; i++) {
      const t = setTimeout(() => setStepIndex(i), i * STEP_DURATION_MS);
      timers.current.push(t);
    }
  }

  function reset() {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    setActiveDoc(null);
    setStepIndex(-1);
  }

  const isRunning = stepIndex >= 0 && stepIndex < steps.length - 1;
  const showResult = activeDoc && stepIndex === steps.length - 1;
  const progressPct = activeDoc
    ? (Math.max(stepIndex, 0) / (steps.length - 1)) * 100
    : 0;

  return (
    <section className="relative px-6 py-28 lg:px-8">
      <div
        aria-hidden
        className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_0%,rgba(201,162,39,0.08),transparent_65%)]"
      />
      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="text-center">
          <span className="inline-block rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-medium tracking-wide text-[var(--color-slate)] uppercase">
            Product demonstration — simulated, not a live lookup
          </span>
          <h2 className="mt-6 text-[var(--text-h2)] leading-[var(--text-h2--line-height)] font-bold text-[var(--color-warm-paper)]">
            Watch verification happen.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[var(--text-body)] leading-[var(--text-body--line-height)] text-[var(--color-slate)]">
            Choose a fictional demonstration document to see how Kweli checks a
            fingerprint against the registered record.
          </p>
        </div>

        {!activeDoc && (
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {demoDocuments.map((doc) => (
              <button
                key={doc.id}
                onClick={() => runDemo(doc)}
                className="group rounded-[var(--radius-lg)] border border-white/10 bg-white/[0.02] p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-gold)]/40 hover:bg-white/[0.04] hover:shadow-[0_20px_50px_-20px_rgba(201,162,39,0.35)]"
              >
                <FileCheck2
                  size={22}
                  strokeWidth={2}
                  className="text-[var(--color-gold-bright)] transition-transform duration-300 group-hover:scale-110"
                  aria-hidden
                />
                <p className="mt-4 text-sm font-medium text-[var(--color-warm-paper)]">
                  {doc.label}
                </p>
                <p className="mt-1 text-xs text-[var(--color-slate)]">{doc.issuer}</p>
              </button>
            ))}
          </div>
        )}

        {activeDoc && (
          <div className="mt-14 rounded-[var(--radius-xl)] border border-white/10 bg-white/[0.015] p-8 sm:p-12">
            <div className="grid gap-10 lg:grid-cols-[auto_1fr] lg:items-center">
              <DocumentStage
                stepKey={stepIndex >= 0 ? steps[stepIndex].key : null}
                outcome={activeDoc.outcome}
              />

              <div>
                <div className="relative">
                  <div className="absolute left-0 right-0 top-5 h-px bg-white/10" />
                  <div
                    className="absolute left-0 top-5 h-px bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-gold-bright)] transition-all ease-linear"
                    style={{
                      width: `${progressPct}%`,
                      transitionDuration: `${STEP_DURATION_MS}ms`,
                    }}
                  />
                  <ol className="relative grid grid-cols-5 gap-2">
                    {steps.map((step, i) => {
                      const Icon = step.icon;
                      const active = i === stepIndex;
                      const done = i < stepIndex || (showResult && i <= stepIndex);
                      return (
                        <li key={step.key} className="flex flex-col items-center text-center">
                          <div
                            className={`flex h-10 w-10 items-center justify-center rounded-full border-2 bg-[var(--color-background)] transition-all duration-300 ${
                              active
                                ? "border-[var(--color-gold-bright)] text-[var(--color-gold-bright)] animate-trust-pulse"
                                : done
                                  ? "border-[var(--color-gold)]/60 text-[var(--color-gold)]/80"
                                  : "border-white/10 text-[var(--color-slate)]"
                            }`}
                          >
                            <Icon size={16} strokeWidth={2} aria-hidden />
                          </div>
                          <span
                            className={`mt-2 text-[11px] font-medium sm:text-xs ${
                              active || done ? "text-[var(--color-warm-paper)]" : "text-[var(--color-slate)]"
                            }`}
                          >
                            {step.label}
                          </span>
                        </li>
                      );
                    })}
                  </ol>
                </div>

                <div aria-live="polite" className="mt-6 min-h-6 text-center text-sm text-[var(--color-slate)] lg:text-left">
                  {isRunning && steps[stepIndex].sub}
                </div>

                {showResult && (
                  <div className="animate-fade-up mt-6 border-t border-white/10 pt-6">
                    <Badge status={outcomeToBadge[activeDoc.outcome]} />
                    <p className="mt-4 text-lg font-bold text-[var(--color-warm-paper)]">
                      {outcomeCopy[activeDoc.outcome].title}
                    </p>
                    <p className="mt-1 text-sm text-[var(--color-slate)]">
                      {outcomeCopy[activeDoc.outcome].body}
                    </p>
                    <dl className="mt-5 space-y-2 text-xs">
                      <div className="flex justify-between border-b border-white/5 pb-2">
                        <dt className="text-[var(--color-slate)]">Issuer</dt>
                        <dd className="text-[var(--color-warm-paper)]">{activeDoc.issuer}</dd>
                      </div>
                      <div className="flex justify-between border-b border-white/5 pb-2">
                        <dt className="text-[var(--color-slate)]">Document Type</dt>
                        <dd className="text-[var(--color-warm-paper)]">{activeDoc.documentType}</dd>
                      </div>
                    </dl>
                    <button
                      onClick={reset}
                      className="mt-6 inline-flex items-center gap-2 text-xs font-medium text-[var(--color-gold-bright)] hover:underline"
                    >
                      <RotateCcw size={14} strokeWidth={2} aria-hidden />
                      Try another document
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
