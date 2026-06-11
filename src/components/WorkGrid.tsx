import { projects } from "@/content";

export default function WorkGrid() {
  return (
    <section id="work" className="wrap py-12">
      <hr className="divider mb-8" />
      <p className="label mb-6">Work</p>

      <ul className="space-y-0">
        {projects.map((project) => (
          <li key={project.id} className="border-b border-[#e5e5e5] py-5 first:border-t">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                {/* Title + link */}
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-semibold text-[#111]">{project.title}</h3>
                  {project.status && (
                    <span className="rounded-full border border-[#e5e5e5] px-2 py-0.5 text-[11px] font-medium text-[#555]">
                      {project.status}
                    </span>
                  )}
                </div>
                {/* Description */}
                <p className="mt-1 text-sm leading-relaxed text-[#555]">
                  {project.description}
                </p>
                {/* Tags */}
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs text-[#999]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Arrow link */}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 text-sm text-[#555] hover:text-[#111] transition-colors"
                  aria-label={`Open ${project.title}`}
                >
                  ↗
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
