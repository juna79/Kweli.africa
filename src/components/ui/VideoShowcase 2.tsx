"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { VideoPlayer } from "@/components/ui/VideoPlayer";
import { Button } from "@/components/ui/Button";
import type { KweliVideo } from "@/lib/videos";

const EYEBROW =
  "text-[length:var(--text-eyebrow)] font-medium uppercase tracking-[0.2em] text-[var(--color-gold-bright)]";

// Featured player with an optional picker when there is more than one video.
export function VideoShowcase({
  eyebrow,
  heading,
  videos,
  showCta = true,
}: {
  eyebrow: string;
  heading: string;
  videos: KweliVideo[];
  showCta?: boolean;
}) {
  const [index, setIndex] = useState(0);
  const current = videos[index];

  return (
    <section className="relative px-6 py-14 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className={EYEBROW}>{eyebrow}</p>
          <h2 className="mx-auto mt-4 max-w-2xl text-[length:var(--text-h3)] leading-[var(--text-h3--line-height)] font-bold text-[var(--color-warm-paper)]">
            {heading}
          </h2>
        </div>

        <div className="mt-10">
          {/* key resets the player (back to poster) when another video is picked */}
          <VideoPlayer key={current.id} video={current} />
          <div className="mt-5 text-center">
            <h3 className="text-[length:var(--text-h4)] font-bold text-[var(--color-warm-paper)]">
              {current.title}
            </h3>
            <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-[var(--color-slate)]">
              {current.caption}
            </p>
          </div>
        </div>

        {videos.length > 1 && (
          <ul className="mt-8 grid gap-3 sm:grid-cols-3">
            {videos.map((v, i) => (
              <li key={v.id}>
                <button
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-current={i === index}
                  className={`group flex w-full items-center gap-3 rounded-[var(--radius-md)] border p-2 text-left transition-colors ${
                    i === index
                      ? "border-[var(--color-gold)]/60 bg-white/[0.05]"
                      : "border-white/10 bg-white/[0.02] hover:border-white/25"
                  }`}
                >
                  <span className="relative block aspect-video w-24 shrink-0 overflow-hidden rounded-[var(--radius-sm)]">
                    <Image src={`/videos/${v.id}.jpg`} alt="" fill sizes="96px" className="object-cover" />
                    <span className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <Play size={16} fill="white" strokeWidth={0} aria-hidden />
                    </span>
                  </span>
                  <span className="min-w-0 text-xs font-medium leading-snug text-[var(--color-warm-paper)]">
                    {v.title}
                    <span className="mt-0.5 block text-[11px] font-normal text-[var(--color-slate)]">
                      {v.duration}
                    </span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        )}

        {showCta && (
          <div className="mt-8 flex justify-center">
            <Button href="/book-a-demo" variant="secondary">
              Book a Demo
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
