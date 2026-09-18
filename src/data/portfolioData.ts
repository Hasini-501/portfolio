import { Project, Internship, EducationItem, JourneyStage, Certification, FunFact } from '../types';

export const PERSONAL_INFO = {
  name: "DODDIGARLA HASINI",
  displayName: "Hasini Doddigarla",
  shortName: "Hasini",
  headline: "Aspiring Systems/Software Engineer",
  subHeadline: "Java, Python, DSA & DBMS Fundamentals • B.Tech in Artificial Intelligence & Data Science (CGPA: 8.0/10, Graduating 2027)",
  welcomeMessage: "“Welcome to my little corner of the internet — a collection of my learning journey, projects, experiences, and the things I enjoy creating.”",
  professionalSummary: "B.Tech student in Artificial Intelligence and Data Science (CGPA 8.0/10, graduating 2027) with strong fundamentals in Data Structures & Algorithms, OOP, and DBMS, backed by five independently built end-to-end applications in Java and Python. Completed Infosys Springboard's Virtual Internship and Pragati training programs, with hands-on exposure to industry-designed technical modules. Seeking a Systems/Software Engineer internship to apply core CS fundamentals to production-quality code.",
  aboutParagraphs: [
    "I am a Computer Science student specializing in Artificial Intelligence & Data Science at Sri C R Reddy College of Engineering with an 8.0 CGPA. I have strong fundamentals in Data Structures & Algorithms, Object-Oriented Programming, and Database Management Systems.",
    "Backed by five independently built end-to-end applications in Java and Python, I have completed Infosys Springboard's Virtual Internship and the Pragati readiness program. I focus on building software that is structured, explainable, and performant.",
    "Beyond software engineering, I am deeply creative — immersing myself in classical Bharatanatyam dance, crochet, painting, reading novels, theatre/drama, arts & crafts, and content creation."
  ],
  interests: [
    "Systems & Software Engineering",
    "Data Structures & Algorithms",
    "Object-Oriented Programming (Java & Python)",
    "DBMS & Relational Modeling",
    "Streamlit & Rapid Prototyping",
    "Computer Vision (OpenCV & MediaPipe)",
    "Generative AI & LLM Integrations",
    "Frontend & React UI"
  ],
  currentlyExploring: [
    { title: "Advanced DSA & Problem Solving", desc: "Algorithmic patterns, graph traversals, and system optimization in Java/Python" },
    { title: "Explainable LLM Architectures", desc: "Rule-based audit layers combined with generative model reasoning" },
    { title: "Operating Systems & Networking", desc: "Process scheduling, thread synchronization, and network protocols" },
    { title: "Modern Web Engineering", desc: "Building component-driven interactive interfaces with React and Tailwind" }
  ],
  email: "honeyhasini336@gmail.com",
  secondaryEmail: "hasinidoddigarla336@gmail.com",
  phone: "+91 9515390100",
  github: "https://github.com/Hasini-501",
  linkedin: "https://linkedin.com/in/hasini-doddigarla",
  location: "Krishna, Andhra Pradesh, India",
  graduationYear: "2027 (Expected)",
  college: "Sri C R Reddy College of Engineering",
  cgpa: "8.0 / 10",
  diplomaScore: "89.8%",
  photoUrl: "/hasini.jpg",
  resumePdfUrl: "/hasini-resume.pdf"
};

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: "btech-cse",
    degree: "B.Tech, Artificial Intelligence and Data Science",
    institution: "Sri C R Reddy College of Engineering",
    duration: "2024 - 2027 (Expected)",
    scoreLabel: "Current CGPA",
    scoreValue: "8.0 / 10",
    description: "Specializing in core computer science, intelligent systems, data structures, algorithms, and applied machine learning.",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (Java & Python)",
      "Database Management Systems (DBMS)",
      "Operating Systems & Computer Networks",
      "Machine Learning & Neural Networks",
      "Software Engineering Principles"
    ],
    highlights: [
      "Current CGPA of 8.0 / 10",
      "Built 5 independent end-to-end applications in Java and Python",
      "Completed Infosys Springboard Virtual Internship and Pragati training programs"
    ]
  },
  {
    id: "polytechnic-diploma",
    degree: "Diploma, Computer Science and Engineering",
    institution: "A.A.N.M & V.V.R.S.R Polytechnic College",
    duration: "2021 - 2024",
    scoreLabel: "Aggregate Score",
    scoreValue: "89.8%",
    description: "Foundational computer science and engineering curriculum covering core programming, hardware architectures, and relational databases.",
    coursework: [
      "C & C++ Programming",
      "Data Structures Foundations",
      "Relational Database Design & SQL",
      "Computer Hardware & Peripherals",
      "Web Technologies (HTML, CSS, JS)"
    ],
    highlights: [
      "Graduated with 89.8% Distinction",
      "Strong conceptual foundations in programming logic, hardware, and OS internals",
      "Consistently achieved top academic standing"
    ]
  }
];

export const TECHNICAL_SKILLS = {
  coreCS: ["Data Structures & Algorithms", "Object-Oriented Programming", "DBMS", "Operating Systems", "Computer Networks"],
  languages: ["Java", "Python", "SQL", "JavaScript"],
  webDevelopment: ["React", "HTML", "CSS"],
  frameworksLibraries: ["Streamlit", "Pandas", "Plotly", "OpenCV", "MediaPipe"],
  aiMl: ["LLM Integration (Llama 3.2, Gemini API)", "Prompt Engineering"],
  tools: ["Git", "GitHub", "VS Code"]
};

export const JOURNEY_STAGES: JourneyStage[] = [
  {
    step: 1,
    title: "Programming Foundations",
    subtitle: "The sparks of computational thinking & logic",
    skills: ["Java", "Python", "OOP Concepts", "Data Structures Basics"],
    description: "Started with core programming discipline: writing robust Java and Python scripts, object-oriented design patterns, and algorithmic problem solving.",
    iconName: "Terminal"
  },
  {
    step: 2,
    title: "Core Computer Science",
    subtitle: "Solidifying systems, networks & relational storage",
    skills: ["DBMS", "Operating Systems", "Computer Networks", "SQL Query Optimization"],
    description: "Mastered fundamental computer systems principles: database schema normalization, query optimization, process scheduling, and network protocols.",
    iconName: "Cpu"
  },
  {
    step: 3,
    title: "Data Analysis & Visualization",
    subtitle: "Structuring large datasets for clear insights",
    skills: ["Pandas", "Plotly", "Data Wrangling", "Exploratory Data Analysis"],
    description: "Structured 100+ resume and job description records using Pandas and developed interactive visualization layers with Plotly for interpretable data evaluation.",
    iconName: "Database"
  },
  {
    step: 4,
    title: "AI, Vision & Generative LLMs",
    subtitle: "Intelligent matching copilots and spatial tracking",
    skills: ["Llama 3.2", "Gemini API", "OpenCV", "MediaPipe", "Prompt Engineering"],
    description: "Built end-to-end intelligent tools: rule-based ATS evaluation engines, Ollama/Llama candidate matchers, and real-time hand landmark tracking with OpenCV.",
    iconName: "Sparkles"
  },
  {
    step: 5,
    title: "End-to-End Application Delivery",
    subtitle: "Deploying interactive full-stack and Streamlit software",
    skills: ["Streamlit", "React", "RESTful Architecture", "Tailwind CSS"],
    description: "Crafted 5 independently built end-to-end applications in Java and Python with clean interactive user interfaces.",
    iconName: "Layout"
  },
  {
    step: 6,
    title: "Current Focus: Systems / SDE Internship",
    subtitle: "Applying core CS to production-quality code",
    skills: ["DSA Speed & Rigor", "OOP Clean Code", "Production Engineering", "Pragati Training"],
    description: "Actively training with Infosys Springboard Pragati, sharpening LeetCode DSA problem-solving, and preparing for software engineering roles.",
    iconName: "Compass"
  }
];

export const INTERNSHIPS_DATA: Internship[] = [
  {
    id: "infosys-springboard-7",
    organization: "Infosys Springboard",
    program: "Virtual Internship",
    role: "Virtual Intern",
    duration: "Jul 29, 2026 - Sep 17, 2026",
    location: "Virtual / Remote",
    projectFocus: "Data Structures & Algorithms, AI, Machine Learning, DBMS, and OOP",
    projectName: "Technical Modules & Capstone",
    technologies: ["Data Structures & Algorithms", "AI", "Machine Learning", "DBMS", "OOP", "Python", "Java"],
    contributions: [
      "Completed structured, industry-designed technical modules on Data Structures & Algorithms, AI, Machine Learning, DBMS, and OOP."
    ],
    certificateUrl: "/certificates/infosys-springboard-7.jpg",
    projectUrl: "#projects"
  },
  {
    id: "infosys-pragati",
    organization: "Infosys Springboard",
    program: "Pragati: Path to Future",
    role: "Technical Trainee",
    duration: "Aug 2026 - Ongoing",
    location: "Virtual Program",
    projectFocus: "Professional and Technical Workplace Readiness",
    projectName: "Applied Coursework & Readiness",
    technologies: ["Professional Workplace Readiness", "Applied Coursework", "Technical Problem Solving"],
    contributions: [
      "Completing applied coursework and assessments focused on professional and technical workplace readiness."
    ],
    certificateUrl: "#",
    projectUrl: "#resume"
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "smart-hiring-copilot",
    name: "AI-Driven Smart Hiring and Candidate Matching Copilot",
    tagline: "Intelligent recruitment screening, semantic matching & interpretable scoring",
    category: "AI / LLM",
    description: "Designed the data flow for resume screening, JD matching, and candidate scoring end-to-end, structuring 100+ resume-JD records with Pandas. Built the scoring and visualization layer with Plotly so results are interpretable, not just raw model output.",
    problemSolved: "Manual resume evaluation is time-intensive and prone to bias; traditional keyword searches fail to detect contextually relevant candidate experience.",
    keyFeatures: [
      "Designed the data flow for resume screening, JD matching, and candidate scoring end-to-end, structuring 100+ resume-JD records with Pandas.",
      "Built the scoring and visualization layer with Plotly so results are interpretable, not just raw model output.",
      "Integrated Llama 3.2 local LLM pipeline for privacy-preserving semantic candidate matching.",
      "Interactive Streamlit interface with dynamic side-by-side match breakdowns."
    ],
    technologies: ["Python", "Streamlit", "Llama 3.2", "Pandas", "Plotly"],
    githubUrl: "https://github.com/Hasini-501",
    liveDemoUrl: "#",
    image: "/projects/smart-hiring.png",
    highlights: ["Structured 100+ Records with Pandas", "Interpretable Plotly Scoring", "Python & Streamlit"]
  },
  {
    id: "ai-resume-tailor",
    name: "AI Resume Tailor",
    tagline: "Rule-based & LLM scoring engine for explainable resume-to-JD alignment",
    category: "AI / LLM",
    description: "Designed a rule-based scoring engine (not pure LLM output) so resume-to-JD match scores are explainable and auditable. Built the logic to flag specific skill gaps and map them to course recommendations.",
    problemSolved: "Pure LLM output can be non-deterministic and hard to audit; job applicants need transparent, verifiable scoring and targeted skill gap analysis.",
    keyFeatures: [
      "Designed a rule-based scoring engine (not pure LLM output) so resume-to-JD match scores are explainable and auditable.",
      "Built the logic to flag specific skill gaps and map them to course recommendations.",
      "Actionable section-by-section ATS evaluation and formatting checks.",
      "Streamlit UI delivering immediate, interactive suggestions for resume improvement."
    ],
    technologies: ["Python", "Streamlit", "Rule-Based + LLM Scoring"],
    githubUrl: "https://github.com/Hasini-501",
    liveDemoUrl: "#",
    image: "/projects/resume-tailor.png",
    highlights: ["Rule-Based Explainable Engine", "Skill Gap Mapping", "Course Recommendations"]
  },
  {
    id: "aurax-gesture-tracking",
    name: "AuraX - Hand Gesture Tracking",
    tagline: "Real-time hand landmark detection and kinematic gesture state machine",
    category: "Computer Vision",
    description: "Built real-time hand landmark detection with OpenCV and MediaPipe, mapping distinct gestures to distinct visual outputs. Handled the logic layer translating raw landmark coordinates into gesture states (open palm, index point, two-finger, fist).",
    problemSolved: "Creating touchless human-computer interaction requires high-precision, low-latency joint recognition with stable state transitions.",
    keyFeatures: [
      "Built real-time hand landmark detection with OpenCV and MediaPipe, mapping distinct gestures to distinct visual outputs.",
      "Handled the logic layer translating raw landmark coordinates into gesture states (open palm, index point, two-finger, fist).",
      "Dynamic visual rendering corresponding to detected hand states.",
      "High framerate optimization with real-time video stream processing."
    ],
    technologies: ["Python", "OpenCV", "MediaPipe"],
    githubUrl: "https://github.com/Hasini-501",
    liveDemoUrl: "#",
    image: "/projects/aurax.png",
    highlights: ["OpenCV + MediaPipe", "Gesture State Translation", "Real-Time Tracking"]
  },
  {
    id: "ai-learning-buddy",
    name: "AI Learning Buddy",
    tagline: "On-demand explanations and quizzes across 5 subject areas",
    category: "AI / LLM",
    description: "On-demand conceptual explanations and interactive quizzes across 5 core subject areas powered by Gemini API.",
    problemSolved: "Students need dynamic query-response loops and adaptive quiz generation to master complex engineering topics.",
    keyFeatures: [
      "On-demand explanations and quizzes across 5 subject areas (DSA, OOP, DBMS, OS, Networks).",
      "Powered by Gemini API for adaptive conceptual clarification.",
      "Interactive Streamlit application with customized student feedback."
    ],
    technologies: ["Python", "Streamlit", "Gemini API"],
    githubUrl: "https://github.com/Hasini-501",
    liveDemoUrl: "#",
    image: "/projects/ai-learning.png",
    highlights: ["5 Subject Areas", "Gemini API Integration", "Interactive Quizzes"]
  },
  {
    id: "personal-portfolio",
    name: "Personal Portfolio - Creative Vault",
    tagline: "Component-based site with downloadable resume and interactive credentials",
    category: "Full-Stack & Web",
    description: "A component-based personal portfolio site built with React, JavaScript, HTML, and CSS featuring a downloadable resume and interactive showcase.",
    problemSolved: "Showcases engineering projects, verified certifications, academic milestones, and personal hobbies in a single responsive web interface.",
    keyFeatures: [
      "Component-based architecture built with React, JavaScript, HTML, and CSS.",
      "Downloadable and printable resume matching industry standards.",
      "Interactive photo studio, project modals, and verified training records."
    ],
    technologies: ["React", "JavaScript", "HTML", "CSS"],
    githubUrl: "https://github.com/Hasini-501",
    liveDemoUrl: "#",
    image: "/projects/portfolio.png",
    highlights: ["React & JavaScript", "Downloadable Resume", "Interactive UI"]
  }
];

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    id: "quizoff-2026",
    title: "QuizOff 2026: India's Biggest AI Quiz - Participation Certificate",
    issuer: "CampusCrew x Unstop",
    issueDate: "2026",
    credentialId: "QUIZOFF-2026-UNSTOP",
    skills: ["AI Knowledge", "Competitive AI Quiz", "Among 5,25,000+ Participants from 48,500+ Institutions"],
    verificationUrl: "https://unstop.com",
    previewImage: "/certificates/unstop.png"
  },
  {
    id: "deloitte-simulation",
    title: "Deloitte Australia Technology Job Simulation",
    issuer: "Forage",
    issueDate: "2026",
    credentialId: "DELOITTE-FORAGE-TECH",
    skills: ["Technology Consulting", "Software Engineering", "Systems Architecture"],
    verificationUrl: "https://theforage.com",
    previewImage: "/certificates/deloitte.png"
  },
  {
    id: "walmart-simulation",
    title: "Walmart USA Job Simulation",
    issuer: "Forage",
    issueDate: "2026",
    credentialId: "WALMART-FORAGE-TECH",
    skills: ["Data Structures & Algorithms", "System Scalability", "Software Engineering"],
    verificationUrl: "https://theforage.com",
    previewImage: "/certificates/walmart.png"
  }
];

export const HOBBIES_DATA = [
  {
    id: "dance",
    title: "Classical Dance (Bharatanatyam)",
    subtitle: "Rhythm, Discipline & Expression",
    icon: "Footprints",
    badge: "8+ Years of Practice",
    description: "Bharatanatyam has shaped my mindset deeply. The geometric discipline of Adavus, intricate rhythmic calculations (talam), and storytelling through abhinaya require unwavering focus and patience — the exact qualities needed to design and debug complex software architectures.",
    takeaway: "Rhythmic precision on the dance floor translates to architectural clarity in code."
  },
  {
    id: "crochet",
    title: "Crochet & Yarn Art",
    subtitle: "Patience, Geometry & Crafting by Hand",
    icon: "Sparkles",
    badge: "Mindful Craft",
    description: "Crocheting intricate patterns with yarn is my favorite form of mindfulness. Each stitch builds upon the previous one with mathematical precision. Turning raw threads into beautiful tangible pieces teaches patience, attention to minute details, and iterative perseverance.",
    takeaway: "Building a complex project stitch-by-stitch is just like writing modular code line-by-line."
  },
  {
    id: "painting-arts",
    title: "Arts & Canvas Painting",
    subtitle: "Watercolors, Acrylics & Visual Harmony",
    icon: "Palette",
    badge: "Visual Expression",
    description: "Exploring colors, textures, and compositions on canvas gives me a space for unconstrained creativity. Understanding color harmony, depth, and contrast not only enriches my paintings but also sharpens my eye for thoughtful, aesthetic UI design.",
    takeaway: "Creativity isn't the opposite of logic; it's what makes technical work human and memorable."
  },
  {
    id: "novels",
    title: "Reading Novels",
    subtitle: "Fiction, Mysteries & Story Worlds",
    icon: "BookOpen",
    badge: "Curious Reader",
    description: "There's nothing quite like getting lost in a brilliant novel. Reading fiction, psychological thrillers, and rich narratives broadens empathy, exercises imaginative thinking, and reminds me of the power of storytelling.",
    takeaway: "Great stories explore how humans think; great software serves how humans live."
  },
  {
    id: "drama",
    title: "Drama & Theatre",
    subtitle: "Stage Presence, Dialogue & Character Expression",
    icon: "Theater",
    badge: "Expression & Energy",
    description: "Performing in drama and theatrical plays has helped me cultivate confident public speaking, spontaneous adaptation, dialogue timing, and emotional empathy. Stepping into different characters teaches perspective-taking like nothing else.",
    takeaway: "Stage confidence builds fearless presentation and team communication skills."
  },
  {
    id: "content-creation",
    title: "Content Creation",
    subtitle: "Sharing Tech Insights, Creative Work & Student Journey",
    icon: "Video",
    badge: "Creative Storyteller",
    description: "Creating engaging content around developer learnings, creative art projects, and student life. Transforming technical concepts into concise, relatable visual snippets helps reinforce my own learning while inspiring peers.",
    takeaway: "If you can explain something creatively and simply, you truly understand it."
  }
];

export const FUN_FACTS: FunFact[] = [
  {
    id: "arts",
    icon: "Palette",
    title: "Arts & Crafts Enthusiast",
    detail: "My study space is always filled with handmade art pieces, sketchbooks, and colorful stationery."
  },
  {
    id: "crochet",
    icon: "Sparkles",
    title: "Crochet Creations",
    detail: "Give me a crochet hook and a skein of yarn, and I'll lose track of time creating coasters, flowers, and plushies."
  },
  {
    id: "painting",
    icon: "Brush",
    title: "Canvas & Watercolors",
    detail: "Painting is my reset button. Blending hues and textures brings instant peace after long coding marathons."
  },
  {
    id: "novels",
    icon: "BookOpen",
    title: "Avid Novel Reader",
    detail: "Book nerd at heart! Can easily read late into the night when a gripping plot twist is around the corner."
  },
  {
    id: "drama",
    icon: "Theater",
    title: "Theatre & Drama",
    detail: "Love the energy of stage performances and bringing lively characters to life through voice and expression."
  },
  {
    id: "dance",
    icon: "Music",
    title: "Classical Bharatanatyam",
    detail: "Trained in classical Indian dance for 8+ years. The complex mathematical beat cycles (Jathis) feel just like nested loops!"
  },
  {
    id: "content",
    icon: "Video",
    title: "Content Creation",
    detail: "Enjoy drafting visual posts, sharing project milestones, and documenting the everyday student developer experience."
  }
];

