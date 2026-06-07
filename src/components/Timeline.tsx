import { experience } from "@/content";
import Reveal from "./Reveal";

export default function Timeline() {
  return (
    <section id="experience" className="section-space bg-[var(--paper)]">
      <div className="shell">
        <Reveal>
          <div className="section-heading section-heading-simple">
            <div className="max-w-2xl">
              <h2 className="section-title">Story.</h2>
              <p className="section-copy">
                Sketch the moments, projects, and pivots that explain how you
                got here.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="ml-auto max-w-4xl">
          <ul className="border-t border-black/15">
            {experience.map((item, index) => (
              <Reveal key={`${item.org}-${index}`} delay={index * 0.07}>
                <li className="timeline-row">
                  <p className="font-mono text-xs text-[var(--muted)]">
                    {item.dateRange}
                  </p>
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-display text-xl font-semibold tracking-[-0.02em] text-[var(--ink)]">
                        {item.org}
                      </h3>
                      {item.current && (
                        <span className="rounded-full bg-[var(--accent)] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                          Now
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-sm font-medium text-[var(--accent)]">
                      {item.role}
                    </p>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--muted)]">
                      {item.description}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
