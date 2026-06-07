import { projects } from "@/content";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

export default function WorkGrid() {
  return (
    <section id="work" className="section-space bg-[var(--paper)]">
      <div className="shell">
        <Reveal>
          <div className="section-heading section-heading-simple">
            <div className="max-w-2xl">
              <h2 className="section-title xl:whitespace-nowrap">
                Exploration experiences
              </h2>
              <p className="section-copy">
                Replace these mockups with your strongest projects. Keep each
                description short and link to more detail when available.
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
