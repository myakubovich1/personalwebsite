import { siteConfig } from "@/content";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[var(--accent)] py-24 text-white md:py-36"
    >
      <div className="contact-orb" aria-hidden="true" />
      <div className="shell relative">
        <Reveal>
          <p className="mb-8 text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
            04 / Contact
          </p>
          <h2 className="max-w-5xl font-display text-[clamp(3.8rem,9vw,8rem)] font-semibold leading-[0.88] tracking-[-0.065em]">
            Insert your closing call to action.
          </h2>
          <div className="mt-12 flex flex-col gap-8 border-t border-white/25 pt-8 md:flex-row md:items-end md:justify-between">
            <p className="max-w-xl text-lg leading-relaxed text-white/75">
              Tell visitors what they should contact you about, what
              opportunities you are open to, or what they should send.
            </p>
            <div className="inline-flex items-center gap-4 break-all font-display text-2xl font-medium md:text-3xl">
              {siteConfig.email}
              <span className="grid h-12 w-12 flex-none place-items-center rounded-full bg-white text-[var(--accent)]">
                +
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
