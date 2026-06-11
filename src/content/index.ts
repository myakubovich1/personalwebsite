import type { Project, ExperienceItem, Service } from "@/types";

export const siteConfig = {
  name: "Matsvei Yakubovich",
  initials: "MY",
  email: "matsvei.yakubovich@gmail.com",
  bio: "I like building things where software, incentives, and real-life friction collide, especially when AI can make a messy system easier to understand.",
};

export const projects: Project[] = [
  {
    id: "project-one",
    title: "legalalien.app",
    description:
      "Fully founded and built for myself, this tool is useful for any legal alien, who wants to avoid headaches with documents and deadlines.",
    tags: ["Founder", "AI", "Immigration"],
    status: "Live",
    link: "https://legalalien.app",
    imageUrl: "/projects/legalalien-app.png",
  },
  {
    id: "project-two",
    title: "kapitalist.finance",
    description:
      "Scaled Instagram to 12,000 followers, turning Kapitalist into the largest Russian-speaking American financial news portal.",
    tags: ["Media", "Growth", "Finance"],
    link: "https://kapitalist.finance",
    imageUrl: "/projects/kapitalist-finance.png",
  },
  {
    id: "project-three",
    title: "List.am",
    description:
      "Worked in UX/UI design at Armenia's largest classifieds platform, thinking through cleaner flows and sharper product decisions for a mass-market product.",
    tags: ["UX/UI", "Marketplace", "Product"],
    link: "https://www.list.am/en/",
  },
  {
    id: "project-four",
    title: "FIRST Global Team Armenia",
    description:
      "Led fundraising for Armenia's FIRST Global robotics team, learning how to turn a technical mission into a story sponsors wanted to support.",
    tags: ["Fundraising", "Robotics", "Storytelling"],
    link: "https://first.global/",
  },
];

export const experience: ExperienceItem[] = [
  {
    role: "Honors student in Information Systems and Economics",
    org: "University of Florida",
    dateRange: "2025 — Present",
    description:
      "Studying how software, markets, and incentives shape the way people make decisions, with one foot in product and the other in economics.",
    current: true,
  },
  {
    role: "Administrative Intern",
    org: "Stealth startup",
    dateRange: "2025",
    description:
      "Spent a summer close to early-stage operations in Palo Alto, seeing how much real company building depends on clarity, follow-through, and fast learning.",
  },
  {
    role: "UX/UI Design Intern",
    org: "List.am",
    dateRange: "2024 — 2025",
    description:
      "Got pulled deeper into product thinking through interface work, learning how small design decisions affect trust, usability, and scale.",
  },
  {
    role: "Financial operations team member and fundraising manager",
    org: "UWC Dilijan / FIRST Global Team Armenia",
    dateRange: "2024 — 2025",
    description:
      "Worked across social entrepreneurship and robotics, which pushed me toward projects that mix mission, systems, and practical execution.",
  },
];

export const services: Service[] = [
  {
    title: "AI for real friction",
    description:
      "I keep coming back to tools that use AI to make bureaucratic, confusing, or repetitive processes easier to survive.",
  },
  {
    title: "Useful software beats flashy software",
    description:
      "I care more about products people genuinely return to than products that only look impressive in a demo.",
  },
  {
    title: "Media is distribution",
    description:
      "Kapitalist made me think about content as a system for trust, reach, and leverage rather than just publishing.",
  },
  {
    title: "Design changes behavior",
    description:
      "Good interfaces do more than look clean; they lower hesitation, reduce mistakes, and help people move through a system with confidence.",
  },
];
