"use client";

import Image from "next/image";
import { useState } from "react";
import { Play } from "lucide-react";
import type { KweliVideo } from "@/lib/videos";

// Click-to-play: shows a self-hosted poster; the YouTube iframe (privacy-
// enhanced domain) is only mounted after the visitor presses play.
export function VideoPlayer({
  video,
  priority = false,
}: {
  video: KweliVideo;
  priority?: boolean;
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-[var(--radius-lg)] border border-white/10 bg-black shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)]">
      {playing ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1`}
          title={video.title}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play video: ${video.title}`}
          className="group absolute inset-0 block h-full w-full cursor-pointer"
        >
          <Image
            src={`/videos/${video.id}.jpg`}
            alt=""
            fill
            sizes="(min-width: 1024px) 768px, 100vw"
            priority={priority}
            className="object-cover transition-transform duration-500 ease-[var(--ease-trust)] group-hover:scale-[1.03]"
          />
          <span aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/20" />
          <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--color-gold-bright)] text-[var(--color-background)] shadow-[0_10px_40px_rgba(0,0,0,0.5)] transition-transform duration-200 group-hover:scale-110 sm:h-20 sm:w-20">
            <Play size={28} fill="currentColor" strokeWidth={0} className="ml-1" aria-hidden />
          </span>
          <span className="absolute bottom-3 right-3 rounded bg-black/70 px-2 py-0.5 text-xs font-medium text-white">
            {video.duration}
          </span>
        </button>
      )}
    </div>
  );
}
