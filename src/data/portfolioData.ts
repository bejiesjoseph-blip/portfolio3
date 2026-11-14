export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  points: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  mode: string;
  description: string;
  points: string[];
  credentialId?: string;
}

export interface Education {
  degree: string;
  field: string;
  institution: string;
  period: string;
  location: string;
  grade?: string;
  details?: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  score?: string;
  credentialId?: string;
  verificationUrl?: string;
  fileUrl?: string;
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "Bejies Joseph",
    headline: "AI & Data Science Student & Backend Developer",
    location: "Chennai, Tamil Nadu, India",
    email: "bejiesjoseph@gmail.com",
    github: "https://github.com/bejiesjoseph-blip",
    linkedin: "https://linkedin.com/in/bejies-joseph-468a67320",
    resumeUrl: "/resume.pdf",
    about: [
      "I'm an Artificial Intelligence & Data Science student at KCG College of Technology, Chennai (graduating 2028).",
      "I spend most of my time working on backend services and practical AI workflows—building RESTful APIs with FastAPI and Flask, managing relational data in MySQL, and writing retrieval-augmented generation (RAG) pipelines.",
      "In mid-2026, I completed a four-week offline Python development internship at Numota Technology, collaborating directly with their engineering team."
    ]
  },

  skills: [
    {
      group: "Languages",
      items: ["Python", "JavaScript", "TypeScript", "SQL", "Java", "C++"]
    },
    {
      group: "Backend & Systems",
      items: ["FastAPI", "Flask", "MySQL", "SQLAlchemy", "Celery", "Redis", "JWT Auth", "REST APIs"]
    },
    {
      group: "AI & Data Science",
      items: ["RAG Pipelines", "FAISS", "sentence-transformers", "Gemini API", "PyMuPDF", "Pandas", "NumPy"]
    },
    {
      group: "Tools & DevOps",
      items: ["Docker", "Git", "GitHub", "pytest", "Linux / Bash"]
    }
  ],

  projects: [
    {
      id: "marginalia",
      title: "Marginalia — AI Academic Research Assistant",
      description: "A research assistant that ingests technical papers and answers questions with grounded, page-level citations.",
      techStack: ["Python", "FastAPI", "React", "TypeScript", "FAISS", "Celery", "Redis", "Docker", "PyMuPDF", "Gemini API"],
      githubUrl: "https://github.com/bejiesjoseph-blip",
      points: [
        "Built document ingestion with PyMuPDF to parse layout and attach physical page numbers to every text segment.",
        "Generated 384-dimensional dense vector embeddings with sentence-transformers and indexed them in per-paper FAISS vector stores.",
        "Prompts Gemini with retrieved context, constraining answers strictly to the paper to prevent hallucinations.",
        "Offloaded PDF parsing and embedding computation to background worker tasks using Celery and Redis.",
        "Implemented JWT authentication on FastAPI endpoints and containerized the system with Docker Compose."
      ]
    },
    {
      id: "interview-prep-backend",
      title: "Interview Prep Intelligence Backend",
      description: "REST backend that parses candidate resumes to generate tailored technical questions and evaluation rubrics.",
      techStack: ["Python", "Flask", "MySQL", "SQLAlchemy", "JWT", "Gemini API", "PyPDF"],
      githubUrl: "https://github.com/bejiesjoseph-blip",
      points: [
        "Extracts skills and project details from candidate resume PDFs.",
        "Prompts the Gemini API to generate structured technical interview questions aligned to the candidate's actual stack.",
        "Maintains user accounts, sessions, and question histories in MySQL via SQLAlchemy models.",
        "Secured with stateless JWT authentication and token verification."
      ]
    },
    {
      id: "portfolio",
      title: "Personal Portfolio",
      description: "Fast, minimal portfolio built with React, TypeScript, and Tailwind CSS. No external templates.",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      githubUrl: "https://github.com/bejiesjoseph-blip",
      points: [
        "Built with strict TypeScript and responsive Tailwind CSS.",
        "Includes modal viewer for verified certificate PDFs and direct resume downloads.",
        "Zero tracking, lightweight bundle, sub-second load times."
      ]
    }
  ] as Project[],

  experience: [
    {
      role: "Python Development Intern",
      company: "Numota Technology",
      period: "Jun 2026 – Jul 2026",
      location: "Nithiravilai, Kanyakumari, Tamil Nadu",
      mode: "Offline",
      description: "Completed a 4-week offline internship working on practical Python programming tasks with the engineering team.",
      points: [
        "Developed modular Python routines for data operations and utility tasks.",
        "Participated in internal code reviews and debugging sessions.",
        "Received Certificate of Completion (Reg. No. 9124243009)."
      ],
      credentialId: "Reg. No. 9124243009"
    }
  ] as Experience[],

  education: [
    {
      degree: "B.Tech in Artificial Intelligence & Data Science",
      field: "Artificial Intelligence & Data Science",
      institution: "KCG College of Technology, Chennai",
      period: "2024 – 2028",
      location: "Chennai, India",
      details: "Autonomous institution affiliated to Anna University (NAAC A+). Coursework includes Data Structures, DBMS, Object-Oriented Programming, and Machine Learning."
    },
    {
      degree: "Higher Secondary (Class XII)",
      field: "Science & Mathematics",
      institution: "St. Antony's Matric Higher Secondary School",
      period: "2024",
      location: "Tamil Nadu, India",
      grade: "81.16%"
    },
    {
      degree: "Secondary School (Class X)",
      field: "General Curriculum",
      institution: "St. Antony's Matric Higher Secondary School",
      period: "2022",
      location: "Tamil Nadu, India",
      grade: "80.8%"
    }
  ] as Education[],

  certificates: [
    {
      id: "nptel-dbms",
      title: "Database Management System",
      issuer: "SWAYAM / NPTEL (IIT / AMU)",
      date: "Jul – Oct 2025",
      score: "75% (Proctored Exam)",
      credentialId: "INI25CS03S253900247",
      verificationUrl: "https://swayam.gov.in",
      fileUrl: "/certificates/nptel-dbms.pdf"
    },
    {
      id: "numota-internship",
      title: "Python Development Internship",
      issuer: "Numota Technology",
      date: "Jul 2026",
      score: "Completed",
      credentialId: "Reg. No. 9124243009",
      verificationUrl: "https://numota.in",
      fileUrl: "/certificates/numota-python-internship-2026.pdf"
    },
    {
      id: "infosys-mern",
      title: "Advanced MERN Development",
      issuer: "Infosys Springboard",
      date: "Jul 2026",
      verificationUrl: "https://verify.onwingspan.com",
      fileUrl: "/certificates/infosys-mern.pdf"
    },
    {
      id: "nasscom-eda",
      title: "Exploratory Data Analysis",
      issuer: "FutureSkills Prime (NASSCOM & MeitY)",
      date: "Aug 2026",
      verificationUrl: "https://futureskillsprime.in",
      fileUrl: "/certificates/nasscom-eda.jpeg"
    },
    {
      id: "infosys-se",
      title: "Software Engineering",
      issuer: "Infosys Springboard",
      date: "Jul 2026",
      verificationUrl: "https://verify.onwingspan.com",
      fileUrl: "/certificates/infosys-software-engineering.pdf"
    },
    {
      id: "mathworks-ml",
      title: "Machine Learning Onramp",
      issuer: "MathWorks Training Services",
      date: "Oct 2025",
      score: "100%",
      fileUrl: "/certificates/mathworks-ml-onramp.pdf"
    }
  ] as Certificate[]
};
