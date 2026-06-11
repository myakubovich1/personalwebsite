"use client";

import { siteConfig } from "@/content";

const links = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#e5e5e5]">
      <nav className="wrap flex h-14 items-center justify-between">
        <a
          href="#"
          className="text-sm font-semibold text-[#111] hover:text-[#555] transition-colors"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0 }); }}
        >
          {siteConfig.name}
        </a>
        <ul className="flex items-center gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-[#555] hover:text-[#111] transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
