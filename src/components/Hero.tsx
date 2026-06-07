export default function Hero() {
  return (
    <section className="hero-noise relative overflow-hidden pb-16 pt-32 md:pb-24 md:pt-40">
      <div className="hero-orb" aria-hidden="true" />
      <div className="shell relative">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.35fr)_minmax(300px,.65fr)] lg:items-end">
          <div>
            <h1 className="max-w-4xl font-display font-semibold text-[var(--ink)]">
              <span className="mb-4 block text-[clamp(2.2rem,4.5vw,4rem)] leading-none tracking-[-0.04em]">
                Hey, I&apos;m
              </span>
              <span className="block text-[clamp(4.5rem,10.5vw,9.5rem)] leading-[0.84] tracking-[-0.07em]">
                Matsvei
                <br />
                <span className="text-[var(--accent)]">Yakubovich</span>
              </span>
            </h1>
          </div>

          <div className="lg:pb-2">
            <p className="max-w-md text-lg leading-relaxed text-[var(--ink)] md:text-xl">
              I&apos;m interested in a lot of things, especially when
              &ldquo;AI&rdquo; is somewhere in the name.
            </p>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-[var(--muted)]">
              Click below to talk to me.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="button-primary">
                Schedule a convo
                <span aria-hidden="true">↗</span>
              </a>
              <a href="#work" className="button-secondary">
                See the stuff
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
