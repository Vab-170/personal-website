import { 
  SiPython, SiReact, SiDjango, SiJavascript, SiTailwindcss, SiDocker, SiGit, SiC,
  SiNodedotjs, SiSpringboot, SiPostgresql, SiHtml5, SiCss3,
  SiPostman, SiJira, SiConfluence, SiLinux, SiGithub, SiSalesforce, SiOpenai
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { Code2, Zap, Award, Github, Linkedin, Mail, Monitor, Code, FileCode, Bed } from "lucide-react";

// ============================================
// PERSONAL INFO - Edit your details here
// ============================================
export const personalInfo = {
  name: "Vaibhav Gupta",
  location: "Toronto, ON 🇨🇦",
  roles: ["Cyber Security Enthusiast", "AI Tinkerer", "Full-Stack Developer"],
  tagline: "Building impactful solutions with cutting-edge technology",
  about: `I am a Computer Science student at the University of Toronto Scarborough 
    specializing in Software Engineering. I enjoy solving real world problems using 
    AI, full stack development, and scalable systems. I focus on building tools that 
    are practical, clean, and future facing, and I am always improving them once I 
    learn a better way.`,
  cvPath: "/personal-website/Vab_s_CV.pdf",
  availabilityStatus: "Available for opportunities",
  seekingText: "Currently seeking 2026 summer internships and co-op positions.",
};

// ============================================
// SOCIAL LINKS - Edit your social profiles
// ============================================
export const socialLinks = [
  { icon: Github, href: "https://github.com/Vab-170", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/vab-gupta17/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:vab.gupta@mail.utoronto.ca", label: "Email" },
];

// ============================================
// STATS - Edit your statistics
// ============================================
export const stats = [
  { icon: Code2, label: "Projects Built", value: 10, suffix: "+" },
  { icon: Zap, label: "Technologies", value: 20, suffix: "+" },
  { icon: Award, label: "Years Experience", value: 3, suffix: "+" },
  { icon: Bed, label: "Hours Slept", value: 0 },
];

// ============================================
// TECH STACK - Organized by category
// ============================================
export const techStack = [
  // === Languages (by popularity) ===
  { name: "JavaScript", category: "Languages", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Python", category: "Languages", icon: SiPython, color: "#3776AB" },
  { name: "Java", category: "Languages", icon: FaJava, color: "#ED8B00" },
  { name: "C", category: "Languages", icon: SiC, color: "#A8B9CC" },
  { name: "HTML", category: "Languages", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", category: "Languages", icon: SiCss3, color: "#1572B6" },
  
  // === Frontend ===
  { name: "React", category: "Frontend", icon: SiReact, color: "#61DAFB" },
  { name: "TailwindCSS", category: "Frontend", icon: SiTailwindcss, color: "#06B6D4" },
  
  // === Backend ===
  { name: "Node.js", category: "Backend", icon: SiNodedotjs, color: "#339933" },
  { name: "Django", category: "Backend", icon: SiDjango, color: "#092E20" },
  { name: "Spring Boot", category: "Backend", icon: SiSpringboot, color: "#6DB33F" },
  { name: "PostgreSQL", category: "Backend", icon: SiPostgresql, color: "#4169E1" },
  
  // === DevOps & Tools ===
  { name: "Git", category: "DevOps", icon: SiGit, color: "#F05032" },
  { name: "Docker", category: "DevOps", icon: SiDocker, color: "#2496ED" },
  { name: "Linux", category: "DevOps", icon: SiLinux, color: "#FCC624" },
  { name: "GitHub", category: "DevOps", icon: SiGithub, color: "#FFFFFF" },
  
  // === IDEs ===
  { name: "VS Code", category: "IDEs", icon: Monitor, color: "#007ACC" },
  { name: "IntelliJ", category: "IDEs", icon: Code, color: "#000000" },
  { name: "Eclipse", category: "IDEs", icon: FileCode, color: "#2C2255" },
  
  // === Project Management & Tools ===
  { name: "JIRA", category: "Project Mgmt", icon: SiJira, color: "#0052CC" },
  { name: "Confluence", category: "Project Mgmt", icon: SiConfluence, color: "#172B4D" },
  { name: "Postman", category: "Tools", icon: SiPostman, color: "#FF6C37" },
  
  // === Platforms & APIs ===
  { name: "Salesforce", category: "Platforms", icon: SiSalesforce, color: "#00A1E0" },
];

// Get unique categories for filtering/grouping
export const techCategories = [...new Set(techStack.map(t => t.category))];

// ============================================
// PROJECTS - Edit your project portfolio
// ============================================
export const projects = [
  {
    title: "C.R.E.A.T.E. Club Website",
    description: "Designed and developed comprehensive club website serving as central hub for 100+ members and university community. Implemented modular component architecture for easy content management and future scalability.",
    tech: ["React", "TailwindCSS", "Responsive Design"],
    link: "http://www.create.utsc.utoronto.ca/",
    linkType: "live"
  },
  {
    title: "Code Clash Prediction Platform",
    description: "Designed and architected a sophisticated full-stack prediction platform for live hackathon events, enabling real-time user engagement and competition tracking. Successfully managed platform during live event with 25 participants.",
    tech: ["Django", "React/JSX", "WebSocket", "PostgreSQL", "RESTful APIs"],
    link: "https://create.utsc.utoronto.ca/high-risk-probability/",
    linkType: "live"
  },
  {
    title: "Stock Market Prediction Platform",
    description: "Developed a comprehensive full-stack platform featuring real-time market data visualization and ML-powered stock predictions. Implemented sophisticated multi-tier caching system that reduced API response times by 100x (from 5s to 50ms). Built responsive frontend with interactive dashboards and deployed using modern DevOps practices.",
    tech: ["Next.js 14", "TypeScript", "FastAPI", "Python", "Machine Learning", "Scikit-learn", "Chart.js", "Vercel"],
    link: "https://github.com/Vab-170/StockAdvisor",
    linkType: "github"
  },
  {
    title: "QualiD App and Website",
    description: "Built a comprehensive web platform for QualiD, a startup focused on simplifying ESG (Environmental, Social, and Governance) reporting through centralized data management and AI integration. Collaborated with a cross-functional team following Agile methodologies.",
    tech: ["Django", "TailwindCSS", "JavaScript", "PostgreSQL", "WebRTC", "OpenAI API"],
    link: "https://github.com/UTSC-CSCC01-Software-Engineering-I/term-group-project-syntax-squad",
    linkType: "github"
  },
  {
    title: "HikeOn Event Planning Application",
    description: "Designed and developed a comprehensive event planning and safety guide application to assist users in organizing and navigating outdoor recreational activities. Applied object-oriented design principles and implemented real-time weather integration.",
    tech: ["Java", "Java Swing", "WebRTC", "OpenAI API", "Google Maps API"],
    link: "https://github.com/X-arshiya-X/HikeOn",
    linkType: "github"
  },
  {
    title: "SafeOStroll - AI Safety Application",
    description: "Developed an innovative AI-powered safety application in 36 hours designed to monitor user emotional states in real-time. Implemented emotion recognition algorithms and integrated HERE Maps API for emergency routing.",
    tech: ["Python", "Django", "React", "PostgreSQL", "WebRTC", "HERE Maps API", "NLP libraries"],
    link: "https://github.com/ssadras/SafeOStroll",
    linkType: "github"
  },
  {
    title: "Chess Game Visualization System",
    description: "Developed interactive chess game simulator with JSON-based game replay functionality and clean GUI interface. Implemented dynamic piece rendering and move log display system.",
    tech: ["Python", "Tkinter", "JSON", "Object-Oriented Design"],
    link: "https://github.com/CREATE-UofT/CodeClash",
    linkType: "github"
  },
  {
    title: "Tic-Tac-Toe Game System",
    description: "Created extensible Tic-Tac-Toe game supporting multiple game modes and customizable board sizes beyond traditional 3x3. Designed modular architecture supporting various gameplay modes.",
    tech: ["Python", "Tkinter", "Game AI Algorithms"],
    link: "https://github.com/CREATE-UofT/CodeClash",
    linkType: "github"
  },
  {
    title: "Dr. Mario Game Implementation",
    description: "Developed a fully functional Dr. Mario game in MIPS Assembly language with complex game mechanics including gravity simulation, collision detection, and match-three puzzle logic using memory-mapped display.",
    tech: ["MIPS Assembly", "Staurn coding environment"],
    link: "https://github.com/Vab-170/Dr-Mario-Game",
    linkType: "github"
  },
  {
    title: "RAID Storage Simulator",
    description: "Implemented a sophisticated RAID 4-like distributed storage system in C, demonstrating fault-tolerant storage architectures with low-level block operations and comprehensive fault tolerance mechanisms.",
    tech: ["C", "Unix/Linux system calls", "Inter-process communication"],
    link: null,
    linkType: "unavailable"
  },
  {
    title: "Turtle Graphics Engine",
    description: "Built a comprehensive turtle graphics engine in C inspired by Logo programming language, implementing custom linked list data structures and modular command parsing system with comprehensive testing.",
    tech: ["C", "Custom data structures", "Graphics libraries"],
    link: null,
    linkType: "unavailable"
  },
];
