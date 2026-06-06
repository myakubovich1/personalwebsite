import type { Project, ExperienceItem, Service } from "@/types";

export const siteConfig = {
  name: "Matsvei Yakubovich",
  initials: "MY",
  role: "Founder & Software Builder",
  tagline: "Building software products and finance media.",
  bio: "I build software products and finance media — currently studying Information Systems while shipping things people actually pay for.",
  email: "m.yakubovich@ufl.edu",
  socials: {
    github: "https://github.com/", // TODO: replace with real GitHub URL
    linkedin: "https://linkedin.com/in/", // TODO: replace with real LinkedIn URL
    instagram: "https://instagram.com/", // TODO: replace with real Instagram URL
    telegram: "https://t.me/", // TODO: replace with real Telegram URL
    twitter: "https://x.com/", // TODO: replace with real X/Twitter URL
  },
};

export const projects: Project[] = [
  {
    id: "spaconcierge",
    title: "SpaConcierge",
    description: "AI missed-call booking assistant for med-spas.",
    tags: ["AI", "Twilio", "Serverless"],
    imageUrl: "https://picsum.photos/seed/spaconcierge/800/600",
    status: "Live · Paying Clients",
  },
  {
    id: "kapitalist",
    title: "Kapitalist.finance",
    description: "Russian-language finance & macro media brand.",
    tags: ["Media", "Content", "Growth"],
    imageUrl: "https://picsum.photos/seed/kapitalist/800/600",
  },
  {
    id: "lifemaxxing",
    title: "Lifemaxxing Game",
    description: "Gamified life-tracking app with retro 16-bit JRPG aesthetic, skill trees, and boss fights.",
    tags: ["Next.js", "TypeScript", "Game"],
    imageUrl: "https://picsum.photos/seed/lifemaxxing/800/600",
  },
  {
    id: "skillmaxx",
    title: "SkillMAXX",
    description: "Mobile skill-building platform with guided onboarding.",
    tags: ["React Native", "Mobile"],
    imageUrl: "https://picsum.photos/seed/skillmaxx/800/600",
  },
  {
    id: "maxximus",
    title: "MAXXIMUS",
    description: "Physique & nutrition scoring app.",
    tags: ["React Native", "Health"],
    imageUrl: "https://picsum.photos/seed/maxximus/800/600",
  },
  {
    id: "vumna",
    title: "Vumna",
    description: "Branded product venture.",
    tags: ["Product", "Branding"],
    imageUrl: "https://picsum.photos/seed/vumna/800/600",
  },
];

export const experience: ExperienceItem[] = [
  {
    role: "B.S.B.A. Information Systems (Honors)",
    org: "University of Florida",
    dateRange: "2025 — Present",
    description: "Warrington College of Business, studying Information Systems with honors.",
    current: true,
  },
  {
    role: "Analyst Intern",
    org: "Central Bank of Armenia",
    dateRange: "2023 — 2024",
    description: "Research and analytical work within the central banking environment.",
  },
  {
    role: "Product & Tech Role",
    org: "List.am",
    dateRange: "2022 — 2023",
    description: "Contributed to product and technology initiatives at Armenia's leading classifieds platform.",
  },
  {
    role: "AI Engineer",
    org: "AI9.am",
    dateRange: "2022",
    description: "AI product development and research.",
  },
  {
    role: "IB Diploma",
    org: "UWC Dilijan",
    dateRange: "2023 — 2025",
    description: "International Baccalaureate Diploma Programme, class of 2025.",
  },
];

export const services: Service[] = [
  {
    icon: "⬡",
    title: "Product Development",
    description: "Full-stack web and mobile products, from idea to paying customers.",
  },
  {
    icon: "⬡",
    title: "AI Integration",
    description: "LLM-powered features, voice agents, and workflow automation.",
  },
  {
    icon: "⬡",
    title: "Media & Content",
    description: "Finance media brands with real audience reach and monetization.",
  },
  {
    icon: "⬡",
    title: "Go-to-Market",
    description: "Launch strategy, early sales, and growth for B2B and B2C products.",
  },
];
