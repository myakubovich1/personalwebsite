export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  status?: string;
}

export interface ExperienceItem {
  role: string;
  org: string;
  dateRange: string;
  description: string;
  current?: boolean;
}

export interface Service {
  title: string;
  description: string;
}
