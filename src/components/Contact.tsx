import { siteConfig } from "@/content";

export default function Contact() {
  return (
    <section id="contact" className="wrap py-12">
      <hr className="divider mb-8" />
      <p className="label mb-6">Contact</p>

      <p className="text-sm leading-relaxed text-[#444] max-w-sm">
        Reach out if you&apos;re building around AI, product, media, or anything that turns a frustrating system into something people can actually use.
      </p>

      <a
        href={`mailto:${siteConfig.email}`}
        className="mt-4 inline-block text-sm font-medium text-[#111] underline underline-offset-4 hover:text-[#555] transition-colors"
      >
        {siteConfig.email}
      </a>
    </section>
  );
}
