"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
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
  FileText,
  ArrowRight,
} from "lucide-react";
import { Badge, type BadgeStatus } from "@/components/ui/Badge";
import { findDocumentByHash, type DemoDocument, type Outcome } from "@/lib/demoDocuments";
import { UploadDropzone } from "@/components/verify/UploadDropzone";

// Loaded only when the sample-document library is actually opened —
// its own ~90 lines plus the full demo-document list never need to be
// in the initial /verify bundle for the (common) case where a visitor
// never opens it.
const SampleDocumentModal = dynamic(
  () => import("@/components/verify/SampleDocumentModal").then((m) => m.SampleDocumentModal),
);

const steps = [
  { key: "upload", label: "Uploading", sub: "Document received for demonstration.", icon: Upload },
  { key: "hashing", label: "Hashing", sub: "Generating a unique cryptographic fingerprint.", icon: Fingerprint },
  { key: "searching", label: "Searching Registry", sub: "Searching the Kweli registry for a matching record.", icon: Search },
  { key: "verifying", label: "Comparing Fingerprint", sub: "Comparing the fingerprint against the registered record.", icon: ShieldCheck },
  { key: "result", label: "Verification", sub: "Finalising verification.", icon: FileCheck2 },
] as const;

const outcomeToBadge: Record<Outcome, BadgeStatus> = {
  verified: "verified",
  failed: "failed",
  "not-found": "not-found",
};

const outcomeMeta: Record<
  Outcome,
  { title: string; icon: typeof Check; ring: string; glow: string; text: string }
> = {
  verified: {
    title: "VERIFIED",
    icon: Check,
    ring: "border-[var(--color-verified)]/50",
    glow: "shadow-[0_0_60px_-8px_rgba(46,158,107,0.45)]",
    text: "text-[var(--color-verified)]",
  },
  failed: {
    title: "VERIFICATION FAILED",
    icon: X,
    ring: "border-[var(--color-failed)]/40",
    glow: "shadow-[0_0_50px_-10px_rgba(255,77,79,0.3)]",
    text: "text-[var(--color-failed)]",
  },
  "not-found": {
    title: "DOCUMENT NOT FOUND",
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

  const resultTone = stepKey === "result" && outcome ? outcomeMeta[outcome] : null;

  return (
    <div className="relative mx-auto flex h-64 w-48 items-center justify-center">
      <div
        className={`relative h-56 w-40 rounded-[var(--radius-lg)] border bg-gradient-to-b from-white/[0.06] to-white/[0.02] backdrop-blur-sm transition-all duration-500 ${
          resultTone ? `${resultTone.ring} ${resultTone.glow}` : "border-white/10"
        }`}
      >
        <div className="space-y-2 p-4">
          <div className="h-2 w-3/4 rounded-full bg-white/15" />
          <div className="h-1.5 w-full rounded-full bg-white/10" />
          <div className="h-1.5 w-full rounded-full bg-white/10" />
          <div className="h-1.5 w-2/3 rounded-full bg-white/10" />
          <div className="mt-4 h-10 w-10 rounded-full border border-[var(--color-gold)]/40" />
          <div className="h-1.5 w-full rounded-full bg-white/10" />
          <div className="h-1.5 w-1/2 rounded-full bg-white/10" />
        </div>

        {stepKey === "hashing" && (
          <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[var(--radius-lg)]">
            <div className="absolute inset-x-0 h-10 bg-gradient-to-b from-transparent via-[var(--color-gold-bright)]/25 to-transparent animate-[scan-sweep_1.1s_linear_infinite]" />
          </div>
        )}

        {stepKey === "searching" && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <span className="absolute h-16 w-16 rounded-full border border-[var(--color-gold-bright)]/50 animate-[radar-ping_1.4s_ease-out_infinite]" />
            <span
              className="absolute h-16 w-16 rounded-full border border-[var(--color-gold-bright)]/50 animate-[radar-ping_1.4s_ease-out_infinite]"
              style={{ animationDelay: "0.5s" }}
            />
          </div>
        )}

        {stepKey === "verifying" && (
          <div className="pointer-events-none absolute -right-3 -top-3 flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-background)]">
            <span className="absolute h-9 w-9 rounded-full border-2 border-transparent border-t-[var(--color-gold-bright)] border-r-[var(--color-gold-bright)]/40 animate-[spin-slow_0.9s_linear_infinite]" />
            <ShieldCheck size={16} strokeWidth={2} className="text-[var(--color-gold-bright)]" aria-hidden />
          </div>
        )}

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

function ResultDetails({ doc }: { doc: DemoDocument }) {
  if (doc.outcome === "verified" && doc.verified) {
    const v = doc.verified;
    return (
      <div className="mt-4">
        <p className="text-sm text-[var(--color-slate)]">
          This document is authentic and unchanged since issuance.
        </p>
        <dl className="mt-4 space-y-2 text-xs">
          {[
            ["Issuer", v.issuer],
            ["Document Type", v.documentType],
            ["Issued", v.issuedDate],
            ["Registered", v.registeredDate],
            ["Registered By", v.registeredBy],
            ["Status", "Authentic"],
          ].map(([label, value]) => (
            <div key={label} className="flex justify-between gap-4 border-b border-white/5 pb-2">
              <dt className="text-[var(--color-slate)]">{label}</dt>
              <dd className="text-right text-[var(--color-warm-paper)]">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    );
  }

  if (doc.outcome === "failed" && doc.failed) {
    const f = doc.failed;
    return (
      <div className="mt-4">
        <p className="text-sm text-[var(--color-slate)]">
          The uploaded document does not match the version originally registered.
        </p>
        <p className="mt-4 text-xs font-medium text-[var(--color-warm-paper)]">Possible reasons</p>
        <ul className="mt-1 space-y-1">
          {f.reasons.map((r) => (
            <li key={r} className="text-xs text-[var(--color-slate)]">
              • {r}
            </li>
          ))}
        </ul>
        <dl className="mt-4 space-y-2 text-xs">
          <div className="flex justify-between gap-4 border-t border-white/5 pt-2">
            <dt className="text-[var(--color-slate)]">Issuer</dt>
            <dd className="text-right text-[var(--color-warm-paper)]">{f.issuer}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-[var(--color-slate)]">Document</dt>
            <dd className="text-right text-[var(--color-warm-paper)]">{f.documentType}</dd>
          </div>
        </dl>
      </div>
    );
  }

  if (doc.outcome === "not-found" && doc.notFound) {
    const n = doc.notFound;
    return (
      <div className="mt-4">
        <p className="text-sm text-[var(--color-slate)]">No registered record exists.</p>
        <p className="mt-4 text-xs font-medium text-[var(--color-warm-paper)]">Possible reasons</p>
        <ul className="mt-1 space-y-1">
          {n.reasons.map((r) => (
            <li key={r} className="text-xs text-[var(--color-slate)]">
              • {r}
            </li>
          ))}
        </ul>
        <dl className="mt-4 space-y-2 text-xs">
          <div className="flex justify-between gap-4 border-t border-white/5 pt-2">
            <dt className="text-[var(--color-slate)]">Issuer</dt>
            <dd className="text-right text-[var(--color-warm-paper)]">{n.issuer}</dd>
          </div>
        </dl>
      </div>
    );
  }

  return null;
}

export function VerificationDemo() {
  const [libraryOpen, setLibraryOpen] = useState(false);
  const [awaitingUpload, setAwaitingUpload] = useState(false);
  const [pendingDownload, setPendingDownload] = useState<DemoDocument | null>(null);
  const [activeDoc, setActiveDoc] = useState<DemoDocument | null>(null);
  const [stepIndex, setStepIndex] = useState(-1);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    return () => {
      timers.current.forEach(clearTimeout);
    };
  }, []);

  function handleDownload(doc: DemoDocument) {
    // The anchor's own `download` attribute triggers the real browser
    // download; this just moves the demo into the upload step.
    setLibraryOpen(false);
    setPendingDownload(doc);
    setAwaitingUpload(true);
  }

  function handleFileUploaded(file: File, sha256: string) {
    const matched = findDocumentByHash(sha256);
    const resolved: DemoDocument =
      matched ??
      {
        id: "unregistered-upload",
        filename: file.name,
        fileSize: "",
        assetPath: "",
        sha256,
        outcome: "not-found",
        notFound: {
          issuer: "Unknown",
          reasons: ["Never registered", "Unknown issuer"],
        },
      };

    timers.current.forEach(clearTimeout);
    timers.current = [];
    setAwaitingUpload(false);
    setPendingDownload(null);
    setActiveDoc(resolved);
    setStepIndex(0);

    for (let i = 1; i < steps.length; i++) {
      const t = setTimeout(() => setStepIndex(i), i * STEP_DURATION_MS);
      timers.current.push(t);
    }
  }

  function tryAnother() {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    setActiveDoc(null);
    setStepIndex(-1);
    setAwaitingUpload(false);
    setPendingDownload(null);
    setLibraryOpen(true);
  }

  const isRunning = stepIndex >= 0 && stepIndex < steps.length - 1;
  const showResult = activeDoc && stepIndex === steps.length - 1;
  const progressPct = activeDoc
    ? (Math.max(stepIndex, 0) / (steps.length - 1)) * 100
    : 0;

  return (
    <section id="demo" className="relative scroll-mt-24 px-6 pb-28 lg:px-8">
      <div
        aria-hidden
        className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_0%,rgba(201,162,39,0.08),transparent_65%)]"
      />
      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="text-center">
          <span className="inline-block rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-medium tracking-wide text-[var(--color-slate)] uppercase">
            Product demonstration — simulated, not a live lookup
          </span>
        </div>

        {!activeDoc && !awaitingUpload && (
          <div className="mx-auto mt-8 max-w-md">
            <UploadDropzone onFile={handleFileUploaded} />

            <button
              type="button"
              onClick={() => setLibraryOpen(true)}
              className="group mt-10 flex w-full items-center gap-4 rounded-[var(--radius-xl)] border border-[var(--color-gold)]/25 bg-white/[0.02] px-6 py-5 text-left backdrop-blur-sm transition-all duration-[var(--duration-card)] ease-[var(--ease-trust)] hover:-translate-y-0.5 hover:border-[var(--color-gold)]/50 hover:bg-white/[0.05] hover:shadow-[0_12px_36px_-16px_rgba(230,189,74,0.35)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-gold-bright)]"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[var(--color-gold)]/40 text-[var(--color-gold-bright)] transition-transform duration-200 group-hover:scale-105">
                <FileText size={20} strokeWidth={1.75} aria-hidden />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-xs text-[var(--color-slate)]">
                  Don&apos;t have a document handy?
                </span>
                <span className="mt-0.5 block text-base font-bold text-[var(--color-warm-paper)] sm:text-lg">
                  Browse Sample Documents
                </span>
              </span>
              <ArrowRight
                size={20}
                strokeWidth={2}
                className="shrink-0 text-[var(--color-gold-bright)] transition-transform duration-150 group-hover:translate-x-1"
                aria-hidden
              />
            </button>
          </div>
        )}

        {awaitingUpload && (
          <div className="mt-14 rounded-[var(--radius-xl)] border border-white/10 bg-white/[0.015] p-8 sm:p-12">
            <div className="mx-auto max-w-md text-center">
              <p className="text-sm font-medium text-[var(--color-warm-paper)]">
                Now upload the document you just downloaded to verify it.
              </p>
              {pendingDownload && (
                <p className="mt-1 truncate text-xs text-[var(--color-slate)]">
                  Downloaded: {pendingDownload.filename}
                </p>
              )}
              <div className="mt-6">
                <UploadDropzone onFile={handleFileUploaded} />
              </div>
              <button
                onClick={() => {
                  setAwaitingUpload(false);
                  setPendingDownload(null);
                  setLibraryOpen(true);
                }}
                className="mt-6 text-xs font-medium text-[var(--color-gold-bright)] hover:underline"
              >
                Choose a different document
              </button>
            </div>
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
                <p className="mb-4 truncate text-xs font-medium text-[var(--color-slate)] lg:text-left">
                  {activeDoc.filename}
                </p>
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
                      {outcomeMeta[activeDoc.outcome].title}
                    </p>
                    <ResultDetails doc={activeDoc} />
                    <button
                      onClick={tryAnother}
                      className="mt-6 inline-flex items-center gap-2 text-xs font-medium text-[var(--color-gold-bright)] hover:underline"
                    >
                      <RotateCcw size={14} strokeWidth={2} aria-hidden />
                      Try Another Document
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {libraryOpen && (
        <SampleDocumentModal
          onDownload={handleDownload}
          onClose={() => setLibraryOpen(false)}
        />
      )}
    </section>
  );
}
