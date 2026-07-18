import { Button } from "@/components/ui/Button";

/*
  Placeholder hero visual. Production asset needed:
  subject: Africa / Earth at night, continent traced with a fine gold
  trust-network of connected points, cinematic lighting, premium enterprise
  feel, no embedded text (ref: Art Book Vol.1, frames 02/05/19).
  crop: full-bleed, 21:9 on desktop, 4:5 on mobile. 4K source.
  Until that asset is supplied, everything below is layered CSS/SVG
  standing in for it — treat it as a placeholder, not final art.
*/
function HeroVisual() {
  const nodeCount = 15;
  const nodes = Array.from({ length: nodeCount }).map((_, i) => {
    const angle = (i / nodeCount) * Math.PI * 2;
    const r = 330 + ((i * 61) % 110);
    return {
      x: 600 + Math.cos(angle) * r,
      y: 420 + Math.sin(angle) * r * 0.55,
      delay: (i % 7) * 0.5,
    };
  });

  return (
    <div aria-hidden className="animate-fade-up absolute inset-0 z-0 isolate overflow-hidden [animation-duration:1200ms]">
      {/* base atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_60%_at_50%_22%,rgba(201,162,39,0.32),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_45%_at_85%_5%,rgba(230,189,74,0.22),transparent_58%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_50%_at_10%_90%,rgba(17,35,63,0.7),transparent_65%)]" />

      {/* slow-drifting trust network / horizon arc */}
      <div className="absolute inset-0 animate-[drift_26s_ease-in-out_infinite_alternate] mix-blend-screen">
        <svg
          className="absolute left-1/2 top-1/2 h-[140%] w-[140%] -translate-x-1/2 -translate-y-1/2"
          viewBox="0 0 1200 900"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <radialGradient id="node-glow" r="1">
              <stop offset="0%" stopColor="#f2d27a" stopOpacity="1" />
              <stop offset="100%" stopColor="#e6bd4a" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="horizon-glow" cx="50%" cy="30%" r="65%">
              <stop offset="0%" stopColor="#c9a227" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#c9a227" stopOpacity="0" />
            </radialGradient>
          </defs>

          <circle cx="600" cy="900" r="520" fill="url(#horizon-glow)" />
          <circle
            cx="600"
            cy="900"
            r="520"
            fill="none"
            stroke="#e6bd4a"
            strokeOpacity="0.6"
            strokeWidth="1.25"
          />
          <circle
            cx="600"
            cy="900"
            r="470"
            fill="none"
            stroke="#e6bd4a"
            strokeOpacity="0.35"
            strokeWidth="1"
          />

          {nodes.map((n, i) => (
            <line
              key={`l-${i}`}
              x1={n.x}
              y1={n.y}
              x2={nodes[(i + 5) % nodes.length].x}
              y2={nodes[(i + 5) % nodes.length].y}
              stroke="#e6bd4a"
              strokeWidth="0.9"
              strokeOpacity="0.45"
            />
          ))}
          {nodes.map((n, i) => (
            <circle
              key={`c-${i}`}
              cx={n.x}
              cy={n.y}
              r="4"
              fill="url(#node-glow)"
              className="animate-[node-pulse_3.2s_ease-in-out_infinite]"
              style={{ animationDelay: `${n.delay}s` }}
            />
          ))}
        </svg>
      </div>

      {/* readability vignette behind copy */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_50%_at_50%_48%,rgba(11,8,15,0.6),transparent_72%)]" />

      {/* filmic grain */}
      <div
        className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--color-background)]" />
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative flex min-h-[96vh] items-center overflow-hidden px-6 pt-16 pb-24 lg:px-8">
      <HeroVisual />
      <div className="relative z-10 mx-auto w-full max-w-4xl text-center">
        <div
          className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 backdrop-blur-sm"
          style={{ animationDelay: "150ms" }}
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-gold-bright)] opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--color-gold-bright)]" />
          </span>
          <span className="text-xs font-medium tracking-wide text-[var(--color-slate)]">
            Independently verifiable, anywhere
          </span>
        </div>

        <h1
          className="animate-fade-up mt-8 text-[2.75rem] leading-[1.08] font-bold tracking-tight sm:text-[length:var(--text-h1)] sm:leading-[var(--text-h1--line-height)]"
          style={{ animationDelay: "350ms" }}
        >
          <span className="block bg-gradient-to-b from-[var(--color-warm-paper)] to-[var(--color-warm-paper)]/85 bg-clip-text text-transparent">
            Trust Infrastructure
          </span>
          <span className="block bg-gradient-to-r from-[var(--color-gold)] via-[var(--color-gold-bright)] to-[var(--color-gold)] bg-clip-text text-transparent [text-shadow:0_0_60px_rgba(230,189,74,0.25)]">
            for the World.
          </span>
        </h1>

        <p
          className="animate-fade-up mx-auto mt-7 max-w-2xl text-[length:var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-[var(--color-slate)]"
          style={{ animationDelay: "600ms" }}
        >
          Verify that the document in your hands is the genuine, unaltered one
          issued by a named organisation.
        </p>

        <div
          className="animate-fade-up mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          style={{ animationDelay: "850ms" }}
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
