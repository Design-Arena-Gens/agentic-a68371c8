import { signaturePieces } from "@/data/signaturePieces";

export function SignaturePieces() {
  return (
    <section
      id="signature"
      className="relative mt-12 scroll-mt-24 rounded-[48px] bg-white/70 px-6 py-16 shadow-[0_20px_60px_rgba(31,27,22,0.08)] backdrop-blur sm:px-10 md:px-16"
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl space-y-3">
          <p className="text-xs uppercase tracking-[0.35em] text-muted">
            Signature Capsule
          </p>
          <h2 className="font-display text-3xl text-foreground sm:text-4xl">
            Couture abayas hand-scripted for luminous gatherings.
          </h2>
          <p className="text-base leading-relaxed text-muted sm:text-lg">
            Each silhouette is meticulously sketched by our atelier, then
            refined with Amira’s understanding of your rituals, settings, and
            palette preferences. Limited releases ensure your narrative remains
            yours alone.
          </p>
        </div>
        <div className="flex items-center gap-4 text-sm text-muted">
          <span className="inline-flex h-2 w-2 rounded-full bg-[var(--color-accent)]" />
          Virtual fitting available in 3 time zones.
        </div>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {signaturePieces.map((piece) => (
          <article
            key={piece.id}
            className="group relative overflow-hidden rounded-[40px] border border-white/60 bg-white/80 p-6 pb-8 shadow-[0_18px_48px_rgba(31,27,22,0.1)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(31,27,22,0.16)]"
          >
            <div
              className="absolute -top-40 right-[-30%] h-80 w-80 rounded-full blur-3xl transition duration-700 group-hover:scale-110"
              style={{
                background: `radial-gradient(circle at center, ${piece.palette[0]}, transparent 70%)`,
              }}
            />
            <div
              className="absolute -bottom-32 left-[-20%] h-64 w-64 rounded-full blur-3xl opacity-70"
              style={{
                background: `radial-gradient(circle at center, ${piece.palette[1]}, transparent 65%)`,
              }}
            />
            <div className="relative flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-black/5 bg-white/60 px-4 py-1 text-xs uppercase tracking-[0.28em] text-muted">
                  {piece.fabric}
                </span>
                <div className="flex gap-2">
                  {piece.palette.map((swatch) => (
                    <span
                      key={swatch}
                      className="h-7 w-7 rounded-full border border-white/70 shadow-inner"
                      style={{ background: swatch }}
                    />
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-display text-2xl text-foreground">
                  {piece.name}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {piece.blurb}
                </p>
              </div>

              <ul className="space-y-3 text-sm text-muted">
                {piece.details.map((detail) => (
                  <li key={detail} className="flex gap-3">
                    <span className="mt-1 h-1.5 w-8 rounded-full bg-[var(--color-accent)]" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              <footer className="flex flex-col gap-3 rounded-3xl border border-black/5 bg-white/70 p-4 text-sm text-muted">
                <div className="flex items-center justify-between text-foreground">
                  <span className="font-semibold tracking-wide">
                    Investment
                  </span>
                  <span className="text-base font-semibold">
                    {piece.investment}
                  </span>
                </div>
                <span>{piece.highlight}</span>
              </footer>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default SignaturePieces;
