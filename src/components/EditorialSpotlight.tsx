const journalEntries = [
  {
    title: "The scent ritual behind Nur Al-Amira",
    description:
      "Discover how saffron resin, oud, and desert rose are layered into each travel case for a lingering signature.",
    readingTime: "5 min read",
    date: "March 2024",
  },
  {
    title: "Desert light studies: mastering ombré movement",
    description:
      "A visual study on how plant-dyed textiles shift under golden hour, curated with the atelier photography team.",
    readingTime: "7 min read",
    date: "February 2024",
  },
  {
    title: "Soft armour: structuring hoods for moonlit ceremonies",
    description:
      "Architectural hood engineering offers privacy without weight. Explore the silhouettes Amira is rendering now.",
    readingTime: "4 min read",
    date: "January 2024",
  },
];

export function EditorialSpotlight() {
  return (
    <section
      id="journal"
      className="mt-24 rounded-[48px] border border-white/50 bg-white/70 px-6 py-14 backdrop-blur sm:px-10 md:px-16"
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.35em] text-muted">
            Journal
          </p>
          <h2 className="font-display text-3xl text-foreground sm:text-4xl">
            Notes from the atelier &amp; the women who wear us.
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            A curated lens into materials, rituals, and the unseen stories
            woven through every abaya. Subscribe to receive quarterly capsules
            and digital fittings before they open to the collective.
          </p>
        </div>
        <button
          type="button"
          className="inline-flex h-fit items-center justify-center rounded-full border border-black/10 bg-white/80 px-6 py-3 text-sm font-semibold text-foreground transition hover:-translate-y-0.5 hover:border-[var(--color-accent)]/40"
        >
          Receive the Atelier Dispatch
        </button>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {journalEntries.map((entry) => (
          <article
            key={entry.title}
            className="rounded-[32px] border border-white/60 bg-white/80 p-6 shadow-[0_12px_32px_rgba(31,27,22,0.08)] transition hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(31,27,22,0.12)]"
          >
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-muted">
              <span>{entry.date}</span>
              <span>{entry.readingTime}</span>
            </div>
            <h3 className="mt-4 font-display text-xl text-foreground">
              {entry.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {entry.description}
            </p>
            <button
              type="button"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-accent)] transition hover:translate-x-1"
            >
              Read journal →
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

export default EditorialSpotlight;
