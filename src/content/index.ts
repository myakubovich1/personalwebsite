import type { Project, ExperienceItem, Service } from "@/types";

export const siteConfig = {
  name: "Matsvei Yakubovich",
  initials: "MY",
  email: "matsvei.yakubovich@gmail.com",
  bio: "Write a short point of view here. Keep it personal, specific, and rooted in what you keep thinking about.",
};

export const projects: Project[] = [
  {
    id: "project-one",
    title: "legalalien.app",
    description:
      "Fully founded and built for myself, this tool is useful for any legal alien, who wants to avoid headaches with documents and deadlines.",
    tags: ["Category", "Tool", "Role"],
    status: "Add status",
    link: "https://legalalien.app",
    imageUrl: "/projects/legalalien-app.png",
  },
  {
    id: "project-two",
    title: "kapitalist.finance",
    description:
      "Scaled Instagram to 12,000 followers, turning Kapitalist into the largest Russian-speaking American financial news portal.",
    tags: ["Category", "Tool", "Role"],
    link: "https://kapitalist.finance",
    imageUrl: "/projects/kapitalist-finance.png",
  },
  {
    id: "project-three",
    title: "Insert Project Three",
    description:
      "Use this space for another case study, experiment, company, or piece of work you want to feature.",
    tags: ["Category", "Tool", "Role"],
  },
  {
    id: "project-four",
    title: "Insert Project Four",
    description:
      "Add what you made, what you contributed, and the result you want people to remember.",
    tags: ["Category", "Tool", "Role"],
  },
];

export const experience: ExperienceItem[] = [
  {
    role: "Insert current chapter",
    org: "Insert place or project",
    dateRange: "Year — Present",
    description:
      "Add one or two sentences about what you are building, learning, or testing right now.",
    current: true,
  },
  {
    role: "Insert turning point",
    org: "Insert place or project",
    dateRange: "Year — Year",
    description:
      "Replace this with the moment, project, or bet that changed your direction.",
  },
  {
    role: "Insert turning point",
    org: "Insert place or project",
    dateRange: "Year — Year",
    description:
      "Focus on the work, contribution, or lesson that matters most to your story.",
  },
  {
    role: "Insert earlier chapter",
    org: "Insert place or project",
    dateRange: "Year",
    description:
      "Add another chapter, experiment, education milestone, or project that still matters.",
  },
];

export const services: Service[] = [
  {
    title: "Insert Thought Thread",
    description:
      "Describe one idea, theme, or question you keep returning to.",
  },
  {
    title: "Insert Thought Thread",
    description:
      "Add another area of curiosity or conviction in one clear sentence.",
  },
  {
    title: "Insert Thought Thread",
    description:
      "Explain the kind of problems, systems, or trends you like thinking through.",
  },
  {
    title: "Insert Thought Thread",
    description:
      "Use this final row for a perspective, tension, or idea that rounds out the section.",
  },
];
