export const profile = {
  name: "Anas Abushaikha",
  initials: "AA",
  roles: [
    "AI/ML Engineer",
    "Data Scientist",
    "Software Developer",
    "Deep Learning Researcher",
  ],
  location: "Ottawa, Ontario, Canada",
  citizenship: "Canadian Citizen",
  phone: "+1 (613) 897-0248",
  email: "anas.abushaikha@outlook.com",
  linkedin: "https://linkedin.com/in/anasabushaikha",
  github: "https://github.com/anasabushaikha",
  tagline:
    "Applying deep learning to real problems — from predicting radio network faults to recognizing surgical workflow phases in the operating room.",
  bio: [
    "I'm a Computer Science student at Carleton University (AI/ML stream, Statistics minor), currently working as a Solutions Engineer at CENGN and previously a Data Scientist at Ericsson, where I helped build AI-powered tools and reduced critical network downtime by 17%.",
    "My research focuses on applying deep learning — TCNs, LSTMs, and Transformers — to workflow recognition in ophthalmological surgery, aiming to give surgeons and residents better feedback through automated phase classification.",
    "Outside of research, I build full-stack products end-to-end: from serverless healthcare scheduling platforms to AI-powered mock interview tools, usually shipping with React, TypeScript, and Python.",
  ],
  languages: [
    { name: "French", level: "Native" },
    { name: "English", level: "Native" },
    { name: "Arabic", level: "Native" },
  ],
  interests: [
    "Deep Learning",
    "Computer Vision",
    "Medical AI",
    "Natural Language Processing",
    "Time-Series Analysis",
    "Surgical Workflow Analysis",
    "Applied ML in Healthcare",
  ],
};

export const stats = [
  { label: "CGPA", value: "11.6/12", sub: "A+ · 4.0/4.0" },
  { label: "Downtime Reduced", value: "17%", sub: "Ericsson escalation task force" },
  { label: "Manual Effort Cut", value: "40%", sub: "Automated analytics pipelines" },
  { label: "Hackathon Placement", value: "Top 3", sub: "of 36+ teams, Hack the Hills 2024" },
];

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    role: "Solutions Engineer Intern (Full-Time)",
    company: "CENGN",
    location: "Kanata, ON",
    period: "May 2026 -- Present",
    current: true,
    bullets: [
      "Deploying and configuring bare-metal, virtualized, and containerized test-bed environments within CENGN's hybrid cloud Living Lab to support client validation and commercialization projects",
      "Translating client technical requirements into infrastructure specifications and automation workflows, collaborating with the Solutions Engineering team to accelerate testing, demonstration, and adoption of emerging networking and cloud technologies",
    ],
  },
  {
    role: "Data Scientist (Contract Part-Time)",
    company: "Ericsson",
    location: "Kanata, ON",
    period: "Sep 2025 -- Apr 2026",
    bullets: [
      "Worked as part of a team to develop an AI-powered chatbot for analytical queries, integrating multiple data sources and testing with AWS-hosted LLM models, improving query resolution efficiency for internal technical teams",
      "Conducted data analysis on system-level issues impacting radio performance, enabling proactive fault prediction and reducing incident recurrence; collaborated with escalation task forces to decrease critical downtime by 17%",
    ],
  },
  {
    role: "Network and Product Data Analyst (CO-OP Full-Time)",
    company: "Ericsson",
    location: "Kanata, ON",
    period: "May 2024 -- Aug 2025",
    bullets: [
      "Queried large internal databases using SQL and generated weekly analytical reports with Python (Pandas, NumPy), improving stakeholder decision-making speed and eliminating repetitive manual tasks",
      "Translated complex data from varying sources into actionable recommendations for stakeholders by developing interactive dashboards and automating data analysis pipelines (Matplotlib, Seaborn), cutting manual effort by 40%",
    ],
  },
];

export type Teaching = {
  role: string;
  org: string;
  period: string;
  location: string;
  bullets: string[];
};

export const teaching: Teaching[] = [
  {
    role: "Teaching Assistant — Database Management Systems (3rd Year)",
    org: "Carleton University, School of Computer Science",
    period: "Sep 2025 -- Apr 2026",
    location: "Ottawa, ON",
    bullets: [
      "Guiding students in advanced database concepts including SQL optimization, transaction management, normalization theory, and NoSQL systems; providing comprehensive feedback on database design projects",
    ],
  },
  {
    role: "Teaching Assistant — Software Engineering in C++ (2nd Year)",
    org: "Carleton University, School of Computer Science",
    period: "Jan 2024 -- Apr 2024",
    location: "Ottawa, ON",
    bullets: [
      "Guided students in object-oriented programming principles (classes, inheritance, polymorphism, design patterns); conducted weekly office hours offering support on C++ assignments and helping students build robust, modular software systems",
    ],
  },
  {
    role: "Teaching Assistant — Systems-Level Programming in C (2nd Year)",
    org: "Carleton University, School of Computer Science",
    period: "Sep 2023 -- Dec 2023",
    location: "Ottawa, ON",
    bullets: [
      "Assisted students with systems programming concepts including multi-threading, multi-processing, dynamic memory allocation, and inter-process communication; hosted office hours for debugging support and conceptual clarification",
    ],
  },
];

export const research = {
  title: "Honours Thesis: Workflow Recognition in Ophthalmological Surgeries with Deep Learning",
  org: "Carleton University School of Computer Science & Department of Data Science",
  period: "Sep 2025 -- Apr 2026",
  location: "Ottawa, ON",
  bullets: [
    "Conducting literature review on surgical workflow analysis using deep learning, focusing on time-series architectures (TCNs, LSTMs, Transformers) for automated phase classification in ophthalmological surgeries",
    "Implementing and evaluating deep learning models for per-frame phase recognition and segmentation of cataract surgery videos to enable phase-specific workflow analysis and performance feedback for ophthalmology residents",
  ],
  tags: ["Deep Learning", "Computer Vision", "TCN", "LSTM", "Transformers", "Medical AI"],
};

export type Project = {
  name: string;
  description: string;
  bullets: string[];
  tags: string[];
  period?: string;
  link?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "AI Mock Interview Practice Platform",
    description: "Full-stack AI platform for resume-driven, personalized mock interviews.",
    period: "Jul 2025",
    link: "https://github.com/jjudyyang/my-toolbox-ht6",
    featured: true,
    bullets: [
      "Developed full-stack AI-powered platform featuring resume-specific personalized mock interviews, real-time feedback generation, and progress tracking; implemented Gmail OAuth authentication, file upload for resume parsing, and dynamic form handling",
      "Built scalable frontend architecture using Vite, Tailwind CSS, React Router, and Radix UI, delivering an intuitive dashboard with real-time session creation and progress visualization",
    ],
    tags: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Gemini AI", "OAuth"],
  },
  {
    name: "Voice-Activated AI Calendar Assistant",
    description: "Chrome extension for natural-language calendar management — Top 3 of 36+ teams at Hack the Hills.",
    period: "Sep 2024",
    link: "https://github.com/anasabushaikha",
    featured: true,
    bullets: [
      "Collaborated in a team of 4 to build a voice-activated Chrome extension that tracks cloud-based calendars using natural language commands; integrated OpenAI API for voice recognition with a React frontend and Node.js/PostgreSQL backend",
      "Secured a Top 3 finish at Major League Hacking's Hack the Hills by delivering a fully functional prototype within 36 hours",
    ],
    tags: ["OpenAI GPT-4o", "React", "Node.js", "Express", "PostgreSQL", "Chrome Extension API"],
  },
  {
    name: "Local Pharmacy Website",
    description: "Serverless healthcare scheduling platform with edge networking and row-level security.",
    featured: false,
    bullets: [
      "Architected and deployed a highly scalable, secure web application using a modern serverless stack to support specialized healthcare scheduling; engineered an edge-network layer with Cloudflare for authoritative DNS routing, custom WAF policies, and global asset caching for low-latency performance and robust DDoS mitigation",
      "Built the core appointment booking engine on Supabase, leveraging managed PostgreSQL and row-level security (RLS) to handle concurrent scheduling states with strict data isolation; orchestrated event-driven transactional communications via the Resend and Brevo APIs for a resilient, high-availability architecture",
    ],
    tags: ["Cloudflare", "Supabase", "PostgreSQL", "Resend", "Brevo"],
  },
];

export type EducationItem = {
  degree: string;
  school: string;
  location: string;
  period: string;
  details: string;
};

export const education: EducationItem[] = [
  {
    degree: "Hon. B.Sc., Computer Science, AI/ML Stream, Minor in Statistics (Co-Op)",
    school: "Carleton University",
    location: "Ottawa, ON",
    period: "Sep 2022 -- Apr 2026",
    details: "CGPA: 11.6/12 (A+, 4.0/4.0) · Dean's Honour List (2022-2025) · Entrance Scholarship: $16,000",
  },
  {
    degree: "B.Sc., Biomedical Science, French Stream",
    school: "University of Ottawa",
    location: "Ottawa, ON",
    period: "Sep 2021 -- Apr 2022",
    details: "Dean's Honour List (2021-2022) · GPA: 9.2/10 · Entrance Scholarship: $5,000",
  },
];

export type Award = {
  name: string;
  org: string;
  bullets: string[];
};

export const awards: Award[] = [
  {
    name: "Top 3 Finish — Hack the Hills 2024",
    org: "Major League Hacking (MLH), University of Ottawa",
    bullets: [
      "Secured top 3 placement out of 36+ teams in a 36-hour hackathon developing a voice-activated AI calendar assistant as a Chrome web extension",
    ],
  },
  {
    name: "DeepLearning.AI Certifications (11 courses completed)",
    org: "Coursera",
    bullets: [
      "Neural Networks & Deep Learning, CNNs in TensorFlow, AI for Medicine (Treatment/Diagnosis/Prognosis), Machine Learning Specialization, Advanced Learning Algorithms, Supervised/Unsupervised Learning",
    ],
  },
];

export type SkillGroup = {
  category: string;
  skills: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "Programming Languages",
    skills: ["Python", "Java", "C", "C++", "C#", "JavaScript", "SQL", "R", "SAS", "HTML", "CSS"],
  },
  {
    category: "Machine Learning & AI",
    skills: ["TensorFlow", "PyTorch", "scikit-learn", "NumPy", "Pandas"],
  },
  {
    category: "Web Development",
    skills: ["React", "TypeScript", "Node.js", "Express.js", "Vite", "Tailwind CSS"],
  },
  {
    category: "Data & Databases",
    skills: ["PostgreSQL", "Matplotlib", "Seaborn", "Plotly", "SQL Server", "Database Design"],
  },
  {
    category: "Tools",
    skills: ["Git", "Linux", "Docker", "Kubernetes", "Statistical Analysis", "Time Series Analysis"],
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Research", href: "#research" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
