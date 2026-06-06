"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/content";

const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Timeline", href: "#experience" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-black/10 bg-[rgba(244,241,233,0.88)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="shell flex h-20 items-center justify-between">
        <a
          href="#"
          className="group flex items-center gap-3 font-display text-sm font-semibold tracking-tight text-[var(--ink)]"
          onClick={(event) => {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <span className="grid h-9 w-9 place-items-center rounded-full bg-[var(--ink)] text-xs text-[var(--paper)] transition-transform duration-300 group-hover:rotate-6">
            {siteConfig.initials}
          </span>
          <span className="hidden sm:block">{siteConfig.name}</span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className="text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--ink)]"
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              Let&apos;s talk
            </a>
          </li>
        </ul>

        <button
          className="flex flex-col gap-[5px] p-2 md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`block h-px w-5 bg-[var(--ink)] transition-all duration-300 ${
              menuOpen ? "translate-y-[6px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-5 bg-[var(--ink)] transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-px w-5 bg-[var(--ink)] transition-all duration-300 ${
              menuOpen ? "-translate-y-[6px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      <div
        className={`overflow-hidden border-b border-black/10 bg-[var(--paper)] transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="shell flex flex-col gap-4 pb-7 pt-3">
          {links.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className="text-base font-medium text-[var(--muted)]"
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="inline-block rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-white"
            >
              Let&apos;s talk
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
