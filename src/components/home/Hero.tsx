import { Button } from "@/components/ui/Button";

/*
  Placeholder hero visual. Production asset needed:
  subject: Africa/Earth from orbit at night, continent traced with a fine gold
  trust-network of connected points (ref: Art Book Vol.1, frames 02/05/19).
  crop: full-bleed, 21:9 on desktop, 4:5 on mobile. 4K source.
  Until that asset is supplied, this is a CSS gradient + generated network
  standing in for it — do not treat it as final.
*/
function HeroVisual() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,rgba(201,162,39,0.16),transparent_65%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_35%_at_80%_10%,rgba(230,189,74,0.10),transparent_60%)]" />
      <svg
        className="absolute inset-0 h-full w-full opacity-40"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="dot" r="1">
            <stop offset="0%" stopColor="#e6bd4a" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#e6bd4a" stopOpacity="0" />
          </radialGradient>
        </defs>
        {Array.from({ length: 34 }).map((_, i) => {
          const x = (i * 137) % 1200;
          const y = (i * 251) % 800;
          const x2 = ((i + 7) * 173) % 1200;
          const y2 = ((i + 3) * 197) % 800;
          return (
            <line
              key={`l-${i}`}
              x1={x}
              y1={y}
              x2={x2}
              y2={y2}
              stroke="#c9a227"
              strokeWidth="0.5"
              strokeOpacity="0.25"
            />
          );
        })}
        {Array.from({ length: 34 }).map((_, i) => {
          const x = (i * 137) % 1200;
          const y = (i * 251) % 800;
          return <circle key={`c-${i}`} cx={x} cy={y} r="2.5" fill="url(#dot)" />;
        })}
      </svg>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--color-background)]" />
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden px-6 pt-16 pb-24 lg:px-8">
      <HeroVisual />
      <div className="mx-auto w-full max-w-4xl text-center">
        <p
          className="animate-fade-up text-sm font-medium tracking-[0.2em] text-[var(--color-gold-bright)] uppercase"
          style={{ animationDelay: "100ms" }}
        >
          Trust Infrastructure
        </p>
        <h1
          className="animate-fade-up mt-6 text-[var(--text-h1)] leading-[var(--text-h1--line-height)] font-bold text-[var(--color-warm-paper)]"
          style={{ animationDelay: "250ms" }}
        >
          Trust Infrastructure for the World.
        </h1>
        <p
          className="animate-fade-up mx-auto mt-6 max-w-2xl text-[var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-[var(--color-slate)]"
          style={{ animationDelay: "450ms" }}
        >
          Verify that the document in your hands is the genuine, unaltered one
          issued by a named organisation.
        </p>
        <div
          className="animate-fade-up mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          style={{ animationDelay: "650ms" }}
        >
          <Button href="/book-a-demo" variant="primary" withArrow>
            Book a Demo
          </Button>
          <Button href="/verify" variant="secondary">
            Verify a Document
          </Button>
        </div>
      </div>
    </section>
  );
}
