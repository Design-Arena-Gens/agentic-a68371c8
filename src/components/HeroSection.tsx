import Link from "next/link";

const navigation = [
  { name: "Collections", href: "#signature" },
  { name: "Experience", href: "#experience" },
  { name: "Concierge", href: "#concierge" },
  { name: "Journal", href: "#journal" },
];

export function HeroSection() {
  return (
    <header className="relative overflow-hidden">
      <div className="aurora" />
      <div className="aurora-secondary" />
      <nav className="flex items-center justify-between gap-8 py-8 sm:py-10">
        <div className="rounded-full border border-white/60 bg-white/60 px-6 py-2 text-sm uppercase tracking-[0.35em] text-muted backdrop-blur">
          Nur Al-Amira
        </div>
        <div className="hidden items-center gap-8 text-sm text-muted md:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="transition duration-200 hover:text-foreground"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <Link
          href="#concierge"
          className="hidden rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-foreground/20 transition hover:-translate-y-0.5 hover:shadow-foreground/30 md:inline-flex"
        >
          Meet Amira
        </Link>
      </nav>

      <div className="relative flex flex-col gap-12 pb-20 pt-10 sm:pb-28 sm:pt-16 md:pt-24">
        <p className="w-fit rounded-full border border-white/60 bg-white/60 px-5 py-2 text-xs uppercase tracking-[0.3em] text-muted backdrop-blur">
          Ramadan Capsule · Atelier Only
        </p>
        <div className="max-w-4xl space-y-6">
          <h1 className="font-display text-4xl leading-snug text-foreground sm:text-5xl md:text-6xl md:leading-[1.15]">
            Draped in reverence, designed for luminous evenings.
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            Nur Al-Amira celebrates the artistry of abaya couture with bespoke
            silhouettes, couture-grade fabrics, and a personal digital stylist
            who studies your rituals to compose the perfect ensemble.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <Link
            href="#signature"
            className="inline-flex items-center justify-center rounded-full bg-foreground px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-foreground/20 transition hover:-translate-y-0.5 hover:shadow-foreground/30"
          >
            Explore Signature Pieces
          </Link>
          <Link
            href="#concierge"
            className="inline-flex items-center justify-center rounded-full border border-foreground/30 bg-white/60 px-7 py-3 text-sm font-semibold text-foreground backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/80"
          >
            Ask Amira Anything
          </Link>
        </div>

        <dl className="grid gap-6 sm:grid-cols-3">
          <div className="glass-panel rounded-3xl p-6">
            <dt className="text-xs uppercase tracking-[0.35em] text-muted">
              Heritage Craft
            </dt>
            <dd className="mt-3 text-lg font-semibold text-foreground">
              Emirati beading ateliers with 120 hours of handwork per piece
            </dd>
          </div>
          <div className="glass-panel rounded-3xl p-6">
            <dt className="text-xs uppercase tracking-[0.35em] text-muted">
              Concierge
            </dt>
            <dd className="mt-3 text-lg font-semibold text-foreground">
              Adaptive styling powered by Amira, available 24·7
            </dd>
          </div>
          <div className="glass-panel rounded-3xl p-6">
            <dt className="text-xs uppercase tracking-[0.35em] text-muted">
              Sustainability
            </dt>
            <dd className="mt-3 text-lg font-semibold text-foreground">
              Regenerative silks &amp; plant dyes in bespoke dye houses
            </dd>
          </div>
        </dl>
      </div>
    </header>
  );
}

export default HeroSection;
