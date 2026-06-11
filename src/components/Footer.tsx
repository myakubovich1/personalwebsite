import { siteConfig } from "@/content";

export default function Footer() {
  return (
    <footer className="wrap border-t border-[#e5e5e5] py-8">
      <p className="text-xs text-[#999]">
        © {new Date().getFullYear()} {siteConfig.name}
      </p>
    </footer>
  );
}
