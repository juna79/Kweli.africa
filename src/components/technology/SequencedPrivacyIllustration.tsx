"use client";

import { useEffect, useRef, useState } from "react";
import { FileText, Fingerprint, Database } from "lucide-react";

const STEP = "transition-all duration-700 ease-[var(--ease-trust)]";
const HIDDEN = "opacity-0 translate-y-3";
const SHOWN = "opacity-100 translate-y-0";

// Sequences the same illustration used elsewhere on the site (browser
// chrome, dashed "your browser" boundary, fingerprint hash, registry) into
// four visible beats once the section scrolls into view: document appears
// → fingerprint generated → only the fingerprint leaves → registry
// receives it. Mirrors Reveal's IntersectionObserver pattern rather than
// reusing it directly, since each internal piece needs its own delay.
export function SequencedPrivacyIllustration() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="relative mx-auto w-full max-w-md rounded-[var(--radius-xl)] border border-white/10 bg-white/[0.02] p-6"
    >
      <div className="flex items-center gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-failed)]/50" />
        <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-gold)]/50" />
        <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-verified)]/50" />
        <span className="ml-3 h-4 flex-1 rounded-full bg-white/5" />
      </div>

      {/* Beat 1 — document appears */}
      <div
        className={`relative mt-6 rounded-[var(--radius-md)] border border-dashed border-white/15 p-5 ${STEP} ${visible ? SHOWN : HIDDEN}`}
        style={{ transitionDelay: visible ? "150ms" : "0ms" }}
      >
        <span className="absolute -top-2.5 left-4 bg-[var(--color-dark-slate)] px-2 text-[10px] font-medium uppercase tracking-wide text-[var(--color-slate)]">
          Your browser
        </span>
        <div className="flex items-center gap-3">
          <FileText size={20} strokeWidth={1.75} className="text-[var(--color-warm-paper)]" aria-hidden />
          <div className="flex-1 space-y-1.5">
            <div className="h-1.5 w-3/4 rounded-full bg-white/10" />
            <div className="h-1.5 w-1/2 rounded-full bg-white/10" />
          </div>
        </div>

        {/* Beat 2 — fingerprint generated */}
        <div
          className={`mt-4 flex items-center gap-2 text-[10px] font-mono tracking-tight text-[var(--color-gold-bright)]/80 ${STEP} ${visible ? SHOWN : HIDDEN}`}
          style={{ transitionDelay: visible ? "900ms" : "0ms" }}
        >
          <Fingerprint size={14} strokeWidth={1.75} className={visible ? "animate-trust-pulse" : ""} aria-hidden />
          a3f5e2…9c7b2d
        </div>
      </div>

      {/* Beat 3 — only the fingerprint leaves */}
      <div
        className={`mt-4 flex items-center justify-center ${STEP} ${visible ? SHOWN : HIDDEN}`}
        style={{ transitionDelay: visible ? "1650ms" : "0ms" }}
      >
        <div className="h-6 w-px bg-gradient-to-b from-[var(--color-gold)]/50 to-transparent" />
      </div>
      <p
        className={`text-center text-[10px] text-[var(--color-slate)] ${STEP} ${visible ? SHOWN : HIDDEN}`}
        style={{ transitionDelay: visible ? "1650ms" : "0ms" }}
      >
        only the fingerprint leaves
      </p>

      {/* Beat 4 — registry receives it */}
      <div
        className={`mt-2 flex items-center justify-center gap-2 text-xs text-[var(--color-slate)] ${STEP} ${visible ? SHOWN : HIDDEN}`}
        style={{ transitionDelay: visible ? "2300ms" : "0ms" }}
      >
        <Database size={14} strokeWidth={1.75} aria-hidden />
        Kweli registry
      </div>
    </div>
  );
}
