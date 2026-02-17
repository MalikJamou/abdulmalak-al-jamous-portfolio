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
}

export const portfolioContent: PortfolioContent = {
  bio: "Full Stack Software Engineer with 5+ years of experience building scalable backend systems and modern web applications. Experienced in Java, Node.js, React, and Python with strong exposure to cloud systems and enterprise IT environments in Germany. Focused on clean architecture, performance, and long-term maintainability.",
  
  skills: {
    programming: ["Java", "Python", "JavaScript", "TypeScript", "SQL"],
    backend: ["Node.js", "RESTful APIs", "Authentication & Access Control", "System Integration"],
    frontend: ["React", "HTML5", "CSS3", "Responsive UI Design"],
    cloudDevOps: ["Linux Systems", "CI/CD Pipelines", "Git", "GitHub", "Basic AWS & Azure"],
    aiAutomation: ["Python Automation", "OpenAI API Integration", "ML Fundamentals"],
    infrastructure: ["System Administration", "Networking", "Security Hardening"]
  },
  
  services: [
    "Full Stack web application development",
    "Scalable backend systems & REST APIs",
    "Professional admin dashboards",
    "Automation with Python and AI",
    "Performance & infrastructure optimization",
    "Technical consulting and system analysis"
  ],
  
  projects: [
    {
      title: "AI Student Assistant Chatbot",
      description: "AI-powered assistant built with OpenAI API to support students academically and administratively.",
      tech: ["Python", "OpenAI API", "REST", "Linux Deployment"],
      problem: "Students needed fast support outside office hours.",
      solution: "Built an intelligent chatbot delivering instant responses and reducing administrative workload.",
      result: "Improved response time and reduced support pressure significantly."
    },
    {
      title: "Financial Calculation Platform",
      description: "Advanced financial calculation system for finance sector clients.",
      tech: ["Node.js", "React", "SQL", "REST APIs"],
      problem: "Manual financial calculations were time-consuming and error-prone.",
      solution: "Developed automated calculation engine with modern UI.",
      result: "Increased speed and reduced human errors."
    },
    {
      title: "Enterprise Network Optimization Initiative",
      description: "Infrastructure optimization project for academic institution.",
      tech: ["Linux", "Networking", "System Hardening"],
      problem: "Performance bottlenecks and inefficient resource distribution.",
      solution: "Re-architected network setup and optimized load distribution.",
      result: "Improved system efficiency by approximately 30%."
    }
  ],
  
  about: "I combine strong software engineering fundamentals with real production experience through Germany's dual education system. I focus on building scalable, secure systems with clean architecture and measurable business impact.",
  
  cta: {
    headline: "Let's Build Something Scalable",
    text: "Looking for a software engineer who builds reliable and scalable systems? Let's discuss your next project.",
    button: "Contact Me"
  }
};
