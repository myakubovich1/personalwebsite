import { services, siteConfig } from "@/content";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="section-space">
      <div className="shell">
        <Reveal>
          <div className="section-heading border-white/10">
            <div className="section-number text-white/40">02</div>
            <div className="max-w-3xl">
              <p className="eyebrow text-white/50">About placeholder</p>
              <h2 className="section-title text-white">
                Insert your perspective.
                <br />
                Make it sound like you.
              </h2>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <div>
            <Reveal delay={0.05}>
              <p className="text-2xl font-light leading-relaxed text-white md:text-3xl">
                {siteConfig.bio}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 leading-relaxed text-white/60">
                Add a second paragraph with more context about your background,
                working style, interests, or the problems you want to solve.
              </p>
            </Reveal>
          </div>

          <div>
            <Reveal delay={0.1}>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                Focus area placeholders
              </p>
            </Reveal>
            <ul>
              {services.map((service, index) => (
                <Reveal key={service.title} delay={0.1 + index * 0.07}>
                  <li className="group grid grid-cols-[48px_1fr] gap-4 border-t border-white/10 py-6 last:border-b">
                    <span className="font-mono text-xs text-[var(--electric)]">
                      0{index + 1}
                    </span>
                    <div>
                      <div className="mb-2 flex items-center justify-between gap-4">
                        <h3 className="font-display text-xl font-medium text-white transition-colors group-hover:text-[var(--electric)]">
                          {service.title}
                        </h3>
                        <span className="text-white/30 transition-transform group-hover:translate-x-1">
                          →
                        </span>
                      </div>
                      <p className="max-w-lg text-sm leading-relaxed text-white/50">
                        {service.description}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
