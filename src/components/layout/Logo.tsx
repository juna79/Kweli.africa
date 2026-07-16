import Image from "next/image";
import Link from "next/link";

/*
  The supplied logo pack only exports the circular "K" icon mark (square
  files, no combined wordmark asset) — see Brand Guidelines for the
  approved icon + "KWELI" wordmark lockup this reconstructs. The icon
  image itself is used exactly as supplied, unscaled/unstretched.
*/
export function Logo({ size = "default" }: { size?: "default" | "large" }) {
  const iconPx = size === "large" ? 44 : 36;
  const wordmarkClass = size === "large" ? "text-xl" : "text-lg";

  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label="Kweli home">
      <Image
        src="/brand/Kweli_Logo_Transparent.png"
        alt=""
        width={iconPx}
        height={iconPx}
        priority
        className="shrink-0"
        style={{ width: iconPx, height: iconPx }}
      />
      <span
        className={`${wordmarkClass} font-bold tracking-wide text-[var(--color-warm-paper)]`}
      >
        KWELI
      </span>
    </Link>
  );
}
