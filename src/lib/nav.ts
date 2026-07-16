// Locked navigation — Kweli_V3_Master_Kickoff.md, section 5.
// Deliberately no top-level "Solutions" item; Solutions/workflows live inside Industry Hubs.
// Brain login lives in the footer, not here.
export const primaryNav = [
  { label: "Why Kweli", href: "/why-kweli" },
  { label: "Industries", href: "/industries" },
  { label: "Technology", href: "/technology" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
] as const;

export const verifyNavItem = { label: "Verify", href: "/verify" } as const;
export const demoNavItem = { label: "Book a Demo", href: "/book-a-demo" } as const;
