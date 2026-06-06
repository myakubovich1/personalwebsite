import { siteConfig } from "@/content";

export default function Hero() {
  return (
    <section className="hero-noise relative overflow-hidden pb-16 pt-32 md:pb-24 md:pt-40">
      <div className="hero-orb" aria-hidden="true" />
      <div className="shell relative">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.35fr)_minmax(300px,.65fr)] lg:items-end">
          <div>
            <p className="mb-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
              <span className="status-dot" />
              Founder, product builder, and student
            </p>
            <h1 className="max-w-4xl font-display text-[clamp(4.2rem,10vw,9rem)] font-semibold leading-[0.82] tracking-[-0.07em] text-[var(--ink)]">
              Matsvei
              <br />
              <span className="text-[var(--accent)]">Yakubovich.</span>
            </h1>
          </div>

          <div className="lg:pb-2">
            <p className="max-w-md text-lg leading-relaxed text-[var(--ink)] md:text-xl">
              I turn ambitious ideas into useful software, sharp brands, and
              products people choose to use.
            </p>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-[var(--muted)]">
              Currently studying Information Systems at the University of
              Florida while building across AI and finance media.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`mailto:${siteConfig.email}`} className="button-primary">
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
          <p>01 / Software products</p>
          <p className="hidden text-center sm:block">02 / AI systems</p>
          <p className="hidden text-right sm:block">03 / Finance media</p>
        </div>
      </div>
    </section>
  );
}
