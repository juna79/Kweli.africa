"use client";

import { useEffect, useRef, useState } from "react";
import {
  Upload,
  Fingerprint,
  Search,
  ShieldCheck,
  FileCheck2,
  RotateCcw,
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

const outcomeCopy: Record<Outcome, { title: string; body: string }> = {
  verified: {
    title: "VERIFIED",
    body: "This document is authentic and unchanged since issuance.",
  },
  failed: {
    title: "VERIFICATION FAILED",
    body: "We could not verify this document. It may have been altered or is not authentic.",
  },
  "not-found": {
    title: "DOCUMENT NOT FOUND",
    body: "No record exists for this document. Please check the details and try again.",
  },
};

const STEP_DURATION_MS = 900;

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

  return (
    <section className="relative px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <span className="inline-block rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-medium tracking-wide text-[var(--color-slate)] uppercase">
            Product demonstration — simulated, not a live lookup
          </span>
          <h2 className="mt-6 text-[var(--text-h2)] leading-[var(--text-h2--line-height)] font-bold text-[var(--color-warm-paper)]">
            See verification happen.
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
                className="rounded-[var(--radius-lg)] border border-white/10 bg-white/[0.02] p-6 text-left transition-all duration-150 hover:-translate-y-0.5 hover:border-[var(--color-gold)]/40 hover:bg-white/[0.04]"
              >
                <FileCheck2 size={22} strokeWidth={2} className="text-[var(--color-gold-bright)]" aria-hidden />
                <p className="mt-4 text-sm font-medium text-[var(--color-warm-paper)]">
                  {doc.label}
                </p>
                <p className="mt-1 text-xs text-[var(--color-slate)]">{doc.issuer}</p>
              </button>
            ))}
          </div>
        )}

        {activeDoc && (
          <div className="mt-12">
            <ol className="grid grid-cols-5 gap-2">
              {steps.map((step, i) => {
                const Icon = step.icon;
                const active = i === stepIndex;
                const done = i < stepIndex || (showResult && i <= stepIndex);
                return (
                  <li key={step.key} className="flex flex-col items-center text-center">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                        active
                          ? "border-[var(--color-gold-bright)] text-[var(--color-gold-bright)] animate-trust-pulse"
                          : done
                            ? "border-[var(--color-gold)]/60 text-[var(--color-gold)]/80"
                            : "border-white/10 text-[var(--color-slate)]"
                      }`}
                    >
                      <Icon size={18} strokeWidth={2} aria-hidden />
                    </div>
                    <span
                      className={`mt-2 text-xs font-medium ${
                        active || done ? "text-[var(--color-warm-paper)]" : "text-[var(--color-slate)]"
                      }`}
                    >
                      {step.label}
                    </span>
                  </li>
                );
              })}
            </ol>

            <div aria-live="polite" className="mt-6 text-center text-sm text-[var(--color-slate)]">
              {isRunning && steps[stepIndex].sub}
            </div>

            {showResult && (
              <div className="animate-fade-up mx-auto mt-8 max-w-md rounded-[var(--radius-lg)] border border-white/10 bg-white/[0.02] p-6">
                <Badge status={outcomeToBadge[activeDoc.outcome]} />
                <p className="mt-4 text-lg font-bold text-[var(--color-warm-paper)]">
                  {outcomeCopy[activeDoc.outcome].title}
                </p>
                <p className="mt-1 text-sm text-[var(--color-slate)]">
                  {outcomeCopy[activeDoc.outcome].body}
                </p>
                <dl className="mt-5 space-y-2 border-t border-white/10 pt-4 text-xs">
                  <div className="flex justify-between">
                    <dt className="text-[var(--color-slate)]">Issuer</dt>
                    <dd className="text-[var(--color-warm-paper)]">{activeDoc.issuer}</dd>
                  </div>
                  <div className="flex justify-between">
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
        )}
      </div>
    </section>
  );
}
