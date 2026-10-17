"use client";

import { Component, type ReactNode } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { KWELI_BOT_ENABLED } from "@/lib/kweliBot/featureFlag";

// Loaded only in the browser, and only when the flag is on. `ssr: false`
// requires a Client Component in Next 16, which is why this wrapper is a
// Client Component. When the flag is off the component below is never
// rendered, so this dynamic import's chunk is never requested by the browser.
const KweliBot = dynamic(() => import("./KweliBot"), { ssr: false });

/**
 * Error isolation: if anything in the bot throws while rendering, the bot
 * quietly disappears and the rest of the website is completely unaffected.
 */
class BotBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    if (this.state.failed) return null;
    return this.props.children;
  }
}

export function KweliBotMount() {
  const pathname = usePathname();
  if (!KWELI_BOT_ENABLED || pathname === "/verify") return null;
  return (
    <BotBoundary>
      <KweliBot />
    </BotBoundary>
  );
}
