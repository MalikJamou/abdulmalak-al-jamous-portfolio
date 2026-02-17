export type Lang = "en" | "de" | "ar";

export interface PortfolioContent {
  bio: string;
  skills: {
    programming: string[];
    backend: string[];
    frontend: string[];
    cloudDevOps: string[];
    aiAutomation: string[];
    infrastructure: string[];
  };
  services: string[];
  projects: Array<{
    title: string;
    description: string;
    tech: string[];
    problem: string;
    solution: string;
    result: string;
  }>;
  about: string;
  cta: {
    headline: string;
    text: string;
    button: string;
  };
  nav: {
    home: string;
    projects: string;
    about: string;
    contact: string;
  };
  labels: {
    servicesTitle: string;
    projectsTitle: string;
    aboutTitle: string;
    skillsTitle: string;
    contactTitle: string;
    email: string;
    linkedin: string;
    github: string;
    replyTime: string;
    chooseLanguage: string;
    programming: string;
    backend: string;
    frontend: string;
    cloudDevOps: string;
    aiAutomation: string;
    infrastructure: string;
    pageTitles: {
      home: string;
      projects: string;
      about: string;
      contact: string;
    };
  };
}
