import type { Project, ExperienceItem, Service } from "@/types";

export const siteConfig = {
  name: "Matsvei Yakubovich",
  initials: "MY",
  email: "Insert your email here",
  bio: "Write a short introduction here. Keep it personal, specific, and focused on what you care about.",
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
  },
  {
    id: "project-two",
    title: "kapitalist.finance",
    description:
      "Scaled Instagram to 12,000 followers, turning Kapitalist into the largest Russian-speaking American financial news portal.",
    tags: ["Category", "Tool", "Role"],
    link: "https://kapitalist.finance",
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
    role: "Insert current role or program",
    org: "Insert organization",
    dateRange: "Year — Present",
    description:
      "Add one or two sentences describing what you do, what you are learning, or what you are responsible for.",
    current: true,
  },
  {
    role: "Insert role or milestone",
    org: "Insert organization",
    dateRange: "Year — Year",
    description:
      "Replace this placeholder with a concise description of the experience.",
  },
  {
    role: "Insert role or milestone",
    org: "Insert organization",
    dateRange: "Year — Year",
    description:
      "Focus on the work, contribution, or lesson that is most relevant to your story.",
  },
  {
    role: "Insert role or milestone",
    org: "Insert organization",
    dateRange: "Year",
    description:
      "Add another position, educational experience, award, or meaningful project here.",
  },
];

export const services: Service[] = [
  {
    title: "Insert Focus Area",
    description:
      "Describe one kind of work, topic, or discipline you want to be known for.",
  },
  {
    title: "Insert Focus Area",
    description:
      "Add another capability or area of interest, using one clear sentence.",
  },
  {
    title: "Insert Focus Area",
    description:
      "Explain the type of problems you enjoy solving or the work you want next.",
  },
  {
    title: "Insert Focus Area",
    description:
      "Use this final row for a complementary skill, perspective, or specialty.",
  },
];
