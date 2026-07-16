"use client";

import { useRef, useState } from "react";
import { UploadCloud } from "lucide-react";

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
      className={`flex flex-col items-center justify-center gap-3 rounded-[var(--radius-lg)] border-2 border-dashed px-6 py-12 text-center transition-colors duration-150 ${
        dragOver
          ? "border-[var(--color-gold-bright)] bg-white/[0.04]"
          : "border-white/15 bg-white/[0.02]"
      }`}
    >
      <UploadCloud
        size={28}
        strokeWidth={2}
        className="text-[var(--color-gold-bright)]"
        aria-hidden
      />
      <div>
        <p className="text-sm font-medium text-[var(--color-warm-paper)]">
          {hashing ? "Reading file…" : "Drag and drop your file here"}
        </p>
        <p className="mt-1 text-xs text-[var(--color-slate)]">
          or browse to select it from your computer
        </p>
      </div>
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        disabled={hashing}
        className="mt-1 rounded-[var(--radius-md)] border border-[var(--color-gold)]/50 px-5 py-2 text-sm font-medium text-[var(--color-warm-paper)] transition-colors duration-150 hover:border-[var(--color-gold-bright)] hover:bg-white/5 disabled:opacity-50"
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
  );
}
