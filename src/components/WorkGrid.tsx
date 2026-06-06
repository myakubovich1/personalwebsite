import { projects } from "@/content";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

export default function WorkGrid() {
  return (
    <section id="work" className="section-space bg-[var(--paper)]">
      <div className="shell">
        <Reveal>
          <div className="section-heading">
            <div className="section-number">01</div>
            <div className="max-w-2xl">
              <p className="eyebrow">Selected work</p>
              <h2 className="section-title">Built to be used.</h2>
              <p className="section-copy">
                A mix of software, AI, and media ventures. Each started with a
                real problem and moved quickly toward a working product.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={(index % 2) * 0.08}>
              <ProjectCard project={project} index={index} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
