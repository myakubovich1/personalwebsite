export default function Hero() {
  return (
    <section className="hero-noise relative overflow-hidden pb-16 pt-32 md:pb-24 md:pt-40">
      <div className="hero-orb" aria-hidden="true" />
      <div className="shell relative">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.35fr)_minmax(300px,.65fr)] lg:items-end">
          <div>
            <p className="mb-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
              <span className="status-dot" />
              Insert your role or one-line introduction
            </p>
            <h1 className="max-w-4xl font-display text-[clamp(4.2rem,10vw,9rem)] font-semibold leading-[0.82] tracking-[-0.07em] text-[var(--ink)]">
              Matsvei
              <br />
              <span className="text-[var(--accent)]">Yakubovich.</span>
            </h1>
          </div>

          <div className="lg:pb-2">
            <p className="max-w-md text-lg leading-relaxed text-[var(--ink)] md:text-xl">
              Write your main headline here. Explain what you do and the kind
              of work you want to be known for.
            </p>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-[var(--muted)]">
              Add a short supporting sentence with your current focus,
              location, availability, or another useful detail.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="button-primary">
                Start a conversation
                <span aria-hidden="true">↗</span>
              </a>
              <a href="#work" className="button-secondary">
                See selected work
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 grid border-y border-black/10 py-5 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)] sm:grid-cols-3 md:mt-24">
          <p>01 / Insert specialty</p>
          <p className="hidden text-center sm:block">02 / Insert specialty</p>
          <p className="hidden text-right sm:block">03 / Insert specialty</p>
        </div>
      </div>
    </section>
  );
}
