"use client";

import { useEffect, useRef } from "react";
import { FileText, Download, X } from "lucide-react";
import { demoDocuments, type DemoDocument } from "@/lib/demoDocuments";

export function SampleDocumentModal({
  onDownload,
  onClose,
}: {
  onDownload: (doc: DemoDocument) => void;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Sample document library"
      className="fixed inset-0 z-50 flex items-end justify-center sm:items-center"
    >
      <div
        className="absolute inset-0 bg-[var(--color-background)]/80 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />
      <div className="animate-fade-up relative w-full max-w-lg rounded-t-[var(--radius-xl)] border border-white/10 bg-[var(--color-dark-slate)] shadow-2xl sm:rounded-[var(--radius-xl)] [animation-duration:300ms]">
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
          <div>
            <p className="text-sm font-medium text-[var(--color-warm-paper)]">
              Sample document library
            </p>
            <p className="mt-0.5 text-xs text-[var(--color-slate)]">
              Download any file — nothing here indicates which ones verify.
            </p>
          </div>
          <button
            ref={closeRef}
            onClick={onClose}
            aria-label="Close"
            className="rounded-full p-1.5 text-[var(--color-slate)] transition-colors duration-150 hover:bg-white/5 hover:text-[var(--color-warm-paper)]"
          >
            <X size={18} strokeWidth={2} aria-hidden />
          </button>
        </div>

        <ul className="max-h-[60vh] overflow-y-auto p-2">
          {demoDocuments.map((doc) => (
            <li
              key={doc.id}
              className="flex items-center gap-3 rounded-[var(--radius-md)] px-4 py-3 transition-colors duration-150 hover:bg-white/5"
            >
              <FileText
                size={18}
                strokeWidth={2}
                className="shrink-0 text-[var(--color-gold-bright)]"
                aria-hidden
              />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm text-[var(--color-warm-paper)]">
                  {doc.filename}
                </p>
                <p className="text-xs text-[var(--color-slate)]">{doc.fileSize}</p>
              </div>
              <a
                href={doc.assetPath}
                download={doc.filename}
                onClick={() => onDownload(doc)}
                className="inline-flex shrink-0 items-center gap-1.5 rounded-[var(--radius-sm)] border border-[var(--color-gold)]/40 px-3 py-1.5 text-xs font-medium text-[var(--color-warm-paper)] transition-colors duration-150 hover:border-[var(--color-gold-bright)] hover:bg-white/5"
              >
                <Download size={14} strokeWidth={2} aria-hidden />
                Download
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
