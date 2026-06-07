import Image from "next/image";

import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const palettes = [
  "from-[#3147ff] to-[#7785ff]",
  "from-[#ff5b35] to-[#ff9c66]",
  "from-[#16231c] to-[#506b5b]",
  "from-[#8b54ff] to-[#c19cff]",
  "from-[#f0bf2e] to-[#ffe38a]",
  "from-[#e84f83] to-[#f6a1bf]",
];

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const content = (
    <>
      <div
        className={`project-visual bg-gradient-to-br ${
          palettes[index % palettes.length]
        }`}
      >
        {project.imageUrl ? (
          <Image
            src={project.imageUrl}
            alt={`${project.title} preview`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <>
            <div className="project-grid" />
            <span className="project-mark">
              {project.title
                .split(/[\s.]+/)
                .map((word) => word[0])
                .join("")
                .slice(0, 3)}
            </span>
          </>
        )}
        <span className="project-index">0{index + 1}</span>
        {project.status && (
          <span className="project-status">{project.status}</span>
        )}
      </div>
      <div className="p-6 md:p-7">
        <div className="mb-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span className="project-tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-start justify-between gap-5">
          <div>
            <h3 className="font-display text-2xl font-semibold tracking-[-0.03em] text-[var(--ink)] md:text-3xl">
              {project.title}
            </h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-[var(--muted)]">
              {project.description}
            </p>
          </div>
          <span className="card-arrow" aria-hidden="true">
            ↗
          </span>
        </div>
      </div>
    </>
  );

  if (project.link) {
    return (
      <a
        href={project.link}
        target="_blank"
        rel="noreferrer"
        className="project-card block"
      >
        {content}
      </a>
    );
  }

  return <article className="project-card">{content}</article>;
}
