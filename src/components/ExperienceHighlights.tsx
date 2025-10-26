const experiences = [
  {
    title: "Savoir-faire discovery",
    description:
      "Amira listens to your calendar, venue, and sensibilities before sketching silhouettes that honor your rituals.",
    badge: "Step 01",
  },
  {
    title: "Immersive virtual drape",
    description:
      "Preview movement with 360° renders, fabric simulations, and live atelier annotations inside the Studio portal.",
    badge: "Step 02",
  },
  {
    title: "Atelier finishing",
    description:
      "Select embellishments, lining, and scent rituals. Each abaya is hand-finished, documented, and archived for future styling.",
    badge: "Step 03",
  },
];

export function ExperienceHighlights() {
  return (
    <section
      id="experience"
      className="mt-24 grid gap-10 rounded-[48px] border border-white/50 bg-white/70 p-10 backdrop-blur md:grid-cols-[1.2fr_1fr]"
    >
      <div className="space-y-5">
        <p className="text-xs uppercase tracking-[0.35em] text-muted">
          Experience
        </p>
        <h2 className="font-display text-3xl text-foreground sm:text-4xl">
          A couture ritual guided by intuition and data.
        </h2>
        <p className="text-base leading-relaxed text-muted">
          Our atelier blends heritage craftsmanship with Amira’s adaptive
          intelligence. Each abaya is recorded as a living archive so your next
          commission begins with deeper insight—from the cadence of your stride
          to the venues you frequent.
        </p>
        <div className="rounded-3xl border border-dashed border-black/10 bg-white/70 p-6 text-sm text-muted">
          Amira harmonizes thousands of touchpoints: desert climate forecasts,
          light temperature of your venues, and your archival palette to deliver
          a capsule that arrives perfectly timed and scented.
        </div>
      </div>

      <div className="space-y-6">
        {experiences.map((experience, index) => (
          <article
            key={experience.title}
            className="glass-panel relative overflow-hidden rounded-[32px] p-6"
          >
            <div className="absolute -top-0 -right-6 h-32 w-32 rounded-full bg-[var(--color-accent)]/10 blur-2xl" />
            <div className="flex gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-black/5 bg-white/60 text-xs font-semibold uppercase tracking-[0.3em] text-muted">
                {experience.badge.split(" ")[1]}
              </span>
              <div className="space-y-2">
                <h3 className="font-display text-xl text-foreground">
                  {experience.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {experience.description}
                </p>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted">
              <span className="h-1 w-20 rounded-full bg-[var(--color-accent)]" />
              {index === 0
                ? "Calibrated Preferences"
                : index === 1
                  ? "Immersion Suite"
                  : "Archival Atelier"}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ExperienceHighlights;
