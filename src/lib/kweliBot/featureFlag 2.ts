/**
 * Kweli Bot feature flag.
 *
 * Disabled by default. The bot only mounts when NEXT_PUBLIC_KWELI_BOT_ENABLED
 * is exactly "true" at build time. Because the flag gates whether the bot's
 * dynamically-imported chunk is ever rendered, a disabled build never requests
 * that chunk in the browser (verify via the production build's network output).
 *
 * To enable locally:   NEXT_PUBLIC_KWELI_BOT_ENABLED=true npm run dev
 * To enable a preview: set the same variable in the Netlify deploy-preview
 *                      context only — never in production for now.
 */
export const KWELI_BOT_ENABLED =
  process.env.NEXT_PUBLIC_KWELI_BOT_ENABLED === "true";
