import { siteConfig } from "@/content";

export default function About() {
  return (
    <section id="about" className="wrap py-12">
      <hr className="divider mb-8" />
      <p className="label mb-6">About</p>

      <p className="max-w-lg text-sm leading-relaxed text-[#444]">
        {siteConfig.bio}
      </p>

      <p className="mt-4 max-w-lg text-sm leading-relaxed text-[#444]">
        Lately that has pulled me toward immigration tooling, financial media, and interface design — especially the question of how a product earns trust fast.
      </p>
    </section>
  );
}
