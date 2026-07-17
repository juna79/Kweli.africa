"use client";

import { useRef, useState } from "react";
import { UploadCloud, Lock } from "lucide-react";

function toHex(buffer: ArrayBuffer) {
  return Array.from(new Uint8Array(buffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

// Real client-side SHA-256 via SubtleCrypto — the file's bytes never leave
// the browser; only the resulting fingerprint is used to look up a result.
async function hashFile(file: File): Promise<string> {
  const buffer = await file.arrayBuffer();
  const digest = await crypto.subtle.digest("SHA-256", buffer);
  return toHex(digest);
}

export function UploadDropzone({
  onFile,
}: {
  onFile: (file: File, sha256: string) => void;
}) {
  const [dragOver, setDragOver] = useState(false);
  const [hashing, setHashing] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  async function processFile(file: File | undefined) {
    if (!file) return;
    setHashing(true);
    const sha256 = await hashFile(file);
    setHashing(false);
    onFile(file, sha256);
  }

  return (
    <div>
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragOver(false);
          void processFile(e.dataTransfer.files[0]);
        }}
        className={`group relative flex flex-col items-center justify-center gap-4 overflow-hidden rounded-[var(--radius-xl)] border-2 border-dashed px-6 py-14 text-center transition-all duration-200 ${
          dragOver
            ? "scale-[1.01] border-[var(--color-gold-bright)] bg-white/[0.05] shadow-[0_0_60px_-12px_rgba(230,189,74,0.4)]"
            : "border-white/15 bg-white/[0.02] hover:border-white/25 hover:bg-white/[0.03]"
        }`}
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        />
        <div
          aria-hidden
          className={`absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,rgba(201,162,39,0.14),transparent_70%)] transition-opacity duration-300 ${
            dragOver ? "opacity-100" : "opacity-0 group-hover:opacity-60"
          }`}
        />

        <span className="relative flex h-16 w-16 items-center justify-center rounded-full border border-[var(--color-gold)]/40 bg-[var(--color-background)]/60 transition-transform duration-200 group-hover:scale-105">
          {!hashing && (
            <span className="absolute inset-0 rounded-full border border-[var(--color-gold)]/30 animate-[soft-pulse_3s_ease-in-out_infinite]" />
          )}
          {hashing ? (
            <span className="absolute h-16 w-16 rounded-full border-2 border-transparent border-t-[var(--color-gold-bright)] border-r-[var(--color-gold-bright)]/40 animate-[spin-slow_0.9s_linear_infinite]" />
          ) : null}
          <UploadCloud size={26} strokeWidth={1.75} className="relative text-[var(--color-gold-bright)]" aria-hidden />
        </span>

        <div className="relative">
          <p className="text-sm font-medium text-[var(--color-warm-paper)]">
            {hashing ? "Reading file locally…" : "Drag and drop your document here"}
          </p>
          <p className="mt-1 text-xs text-[var(--color-slate)]">
            or browse to select it from your computer
          </p>
        </div>

        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={hashing}
          className="relative mt-1 rounded-[var(--radius-md)] border border-[var(--color-gold)]/50 px-5 py-2 text-sm font-medium text-[var(--color-warm-paper)] transition-all duration-150 hover:-translate-y-0.5 hover:border-[var(--color-gold-bright)] hover:bg-white/5 disabled:pointer-events-none disabled:opacity-50"
        >
          Browse files
        </button>
        <input
          ref={inputRef}
          type="file"
          accept=".pdf"
          className="hidden"
          onChange={(e) => void processFile(e.target.files?.[0])}
        />
      </div>

      <p className="mt-4 flex items-center justify-center gap-1.5 text-xs text-[var(--color-slate)]">
        <Lock size={12} strokeWidth={1.75} aria-hidden />
        Your file is fingerprinted in your browser and never uploaded.
      </p>
    </div>
  );
}
