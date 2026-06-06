import { siteConfig } from "@/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--ink)] py-8 text-white">
      <div className="shell flex flex-col gap-4 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {siteConfig.name}
        </p>
        <p>Replace this footer note with your own.</p>
      </div>
    </footer>
  );
}
