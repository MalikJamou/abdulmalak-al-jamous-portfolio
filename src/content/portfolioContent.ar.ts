import { PortfolioContent } from './portfolioTypes';

export const portfolioContentAR: PortfolioContent = {
  bio: "مهندس برمجيات متخصص في Full Stack بخبرة أكثر من 5 سنوات في بناء الأنظمة الخلفية القابلة للتوسع والتطبيقات الويب الحديثة. خبرة واسعة مع Java و Node.js و React و Python ونظم السحابة والبيئات الصناعية في ألمانيا. أركز على العمارة النظيفة والأداء المثلية والصيانة طويلة الأجل.",
  
  skills: {
    programming: ["Java", "Python", "JavaScript", "TypeScript", "SQL"],
    backend: ["Node.js", "RESTful APIs", "Authentication & Access Control", "System Integration"],
    frontend: ["React", "HTML5", "CSS3", "Responsive UI Design"],
    cloudDevOps: ["نظم Linux", "CI/CD Pipelines", "Git", "GitHub", "الأساسيات AWS و Azure"],
    aiAutomation: ["أتمتة Python", "OpenAI API Integration", "أساسيات ML"],
    infrastructure: ["إدارة الأنظمة", "الشبكات", "Security Hardening"]
  },
  
  services: [
    "تطوير تطبيقات ويب Full Stack",
    "أنظمة خلفية قابلة للتوسع و REST APIs",
    "لوحات تحكم احترافية",
    "الأتمتة باستخدام Python والذكاء الاصطناعي",
    "تحسين الأداء والموارد الأساسية",
    "الاستشارات التقنية وتحليل الأنظمة"
  ],
  
  projects: [
    {
      title: "مساعد الطلاب بالذكاء الاصطناعي",
      description: "مساعد مدعوم بالذكاء الاصطناعي مبني باستخدام OpenAI API لدعم الطلاب أكاديمياً وإدارياً.",
      tech: ["Python", "OpenAI API", "REST", "Linux Deployment"],
      problem: "كان الطلاب بحاجة إلى دعم سريع خارج ساعات المكتب.",
      solution: "بنيت روبوت محادثة ذكي يقدم ردود فورية وتقليل العمل الإداري.",
      result: "تحسين وقت الاستجابة وتقليل الضغط على الدعم بشكل كبير."
    },
    {
      title: "منصة حسابات مالية",
      description: "نظام حسابات مالية متقدم لعملاء في القطاع المالي.",
      tech: ["Node.js", "React", "SQL", "REST APIs"],
      problem: "كانت الحسابات المالية اليدوية مستهلكة للوقت وعرضة للأخطاء.",
      solution: "طورت محرك حسابات آلي مع واجهة مستخدم حديثة.",
      result: "زيادة السرعة وتقليل الأخطاء البشرية."
    },
    {
      title: "مبادرة تحسين شبكة المؤسسة",
      description: "مشروع تحسين البنية الأساسية لمؤسسة أكاديمية.",
      tech: ["Linux", "Networking", "System Hardening"],
      problem: "اختناقات الأداء وتوزيع الموارد غير الفعال.",
      solution: "أعدت بناء نظام الشبكة وحسنت توزيع الحمل.",
      result: "تحسين كفاءة النظام بحوالي 30%."
    }
  ],
  
  about: "أجمع بين أساسيات هندسة البرمجيات القوية والخبرة الفعلية في الإنتاج من خلال النظام التعليمي الثنائي الألماني. أركز على بناء أنظمة قابلة للتوسع وآمنة مع عمارة نظيفة وتأثير تجاري قابل للقياس.",
  
  cta: {
    headline: "لنبني معاً شيئا قابلاً للتوسع",
    text: "هل تبحث عن مهندس برمجيات يبني أنظمة موثوقة وقابلة للتوسع؟ دعنا نناقش مشروعك القادم.",
    button: "اتصل بي"
  },

  nav: {
    home: "الرئيسية",
    projects: "المشاريع",
    about: "عني",
    contact: "الاتصال"
  },

  labels: {
    servicesTitle: "الخدمات",
    projectsTitle: "المشاريع",
    aboutTitle: "عني",
    skillsTitle: "المهارات والخبرات",
    contactTitle: "تواصل معي",
    email: "البريد الإلكتروني",
    linkedin: "LinkedIn",
    github: "GitHub",
    replyTime: "لا تتردد في التواصل معي — عادةً ما أرد خلال 24–48 ساعة.",
    chooseLanguage: "اختر اللغة",
    programming: "لغات البرمجة",
    backend: "تطوير Backend",
    frontend: "تطوير Frontend",
    cloudDevOps: "السحابة و DevOps",
    aiAutomation: "الذكاء الاصطناعي والأتمتة",
    infrastructure: "البنية الأساسية",
    pageTitles: {
      home: "عبدالملك الجاموس | مهندس برمجيات فل ستاك",
      projects: "المشاريع | عبدالملك الجاموس",
      about: "عني | عبدالملك الجاموس",
      contact: "التواصل | عبدالملك الجاموس"
    }
  }
};
