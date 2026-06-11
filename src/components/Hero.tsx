import { siteConfig } from "@/content";

export default function Hero() {
  return (
    <section className="wrap py-16 md:py-20">
      {/* Name */}
      <h1 className="font-display text-4xl font-bold tracking-tight text-[#111] md:text-5xl">
        {siteConfig.name}
      </h1>

      {/* Bio */}
      <p className="mt-4 max-w-lg text-base leading-relaxed text-[#444]">
        {siteConfig.bio}
      </p>

      {/* Links */}
      <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
        <a
          href={`mailto:${siteConfig.email}`}
          className="text-[#111] underline underline-offset-4 hover:text-[#555] transition-colors"
        >
          {siteConfig.email}
        </a>
        <a
          href="https://linkedin.com/in/matsvei-yakubovich"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#555] hover:text-[#111] transition-colors"
        >
          LinkedIn ↗
        </a>
        <a
          href="https://github.com/myakubovich1"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#555] hover:text-[#111] transition-colors"
        >
          GitHub ↗
        </a>
      </div>
    </section>
  );
}
