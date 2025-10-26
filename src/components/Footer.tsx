export function Footer() {
  return (
    <footer className="mt-24 rounded-[48px] border border-white/50 bg-white/70 px-6 py-12 backdrop-blur sm:px-10 md:px-16">
      <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <div className="text-xs uppercase tracking-[0.35em] text-muted">
            Nur Al-Amira
          </div>
          <p className="font-display text-2xl text-foreground">
            Crafted in Dubai · Shipping globally
          </p>
          <p className="text-sm text-muted">
            Visit our atelier by appointment only. Virtual fittings available in Abu Dhabi,
            Riyadh, and Doha time zones.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-muted">
          <span className="rounded-full border border-black/10 bg-white/80 px-4 py-2">
            contact@nuralamira.com
          </span>
          <span className="rounded-full border border-black/10 bg-white/80 px-4 py-2">
            +971 · 4 · 512 · 09
          </span>
          <span className="rounded-full border border-black/10 bg-white/80 px-4 py-2">
            @nur.alamira
          </span>
        </div>
      </div>
      <div className="mt-10 flex flex-col gap-4 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Nur Al-Amira Atelier. All rights reserved.</p>
        <div className="flex gap-4">
          <button type="button" className="transition hover:text-foreground">
            Privacy
          </button>
          <button type="button" className="transition hover:text-foreground">
            Terms
          </button>
          <button type="button" className="transition hover:text-foreground">
            Sustainability
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
