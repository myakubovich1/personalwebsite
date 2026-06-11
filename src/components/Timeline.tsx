import { experience } from "@/content";

export default function Timeline() {
  return (
    <section id="experience" className="wrap py-12">
      <hr className="divider mb-8" />
      <p className="label mb-6">Experience</p>

      <ul className="space-y-0">
        {experience.map((item, i) => (
          <li
            key={i}
            className="grid grid-cols-[120px_1fr] gap-6 border-b border-[#e5e5e5] py-5 first:border-t sm:grid-cols-[160px_1fr]"
          >
            {/* Date */}
            <p className="text-xs text-[#999] pt-0.5">{item.dateRange}</p>

            {/* Content */}
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-semibold text-sm text-[#111]">{item.org}</h3>
                {item.current && (
                  <span className="rounded-full border border-[#e5e5e5] px-2 py-0.5 text-[11px] font-medium text-[#555]">
                    Now
                  </span>
                )}
              </div>
              <p className="text-xs text-[#555] mt-0.5">{item.role}</p>
              <p className="mt-2 text-sm leading-relaxed text-[#666]">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
