import React from "react";
import "../App.css";

const projects = [
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
        // link: "https://stockadvisor-q05sb8wd2-vab-170s-projects.vercel.app/",
        link: "https://github.com/Vab-170/RAID-Storage-Simulator",
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

const ProjectsPage = () => {
    const renderProjectButton = (project) => {
        if (!project.link || project.linkType === "unavailable") {
            return (
                <span className="inline-block bg-gray-500 text-gray-300 font-semibold px-5 py-2 rounded-full cursor-not-allowed shadow-lg">
                    Code Unavailable
                </span>
            );
        }

        const buttonText = project.linkType === "live" ? "View Live Site" : "View Code";
        
        return (
            <a
                href={project.link}
                className="inline-block bg-yellow-400 text-blue-900 font-semibold px-5 py-2 rounded-full hover:bg-blue-300 transition-all duration-300 shadow-lg"
                target="_blank"
                rel="noopener noreferrer"
            >
                {buttonText}
            </a>
        );
    };

    return (
        <div className="bg-gradient-home min-h-screen py-16 px-4 text-white">
            <h2 className="text-4xl font-bold text-yellow-300 text-center mb-12">
                Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-blue-800 rounded-3xl p-6 shadow-2xl hover:scale-105 transition-transform duration-300"
                    >
                        <h3 className="text-2xl font-bold text-yellow-300 mb-3">
                            {project.title}
                        </h3>
                        <p className="text-blue-100 mb-4">{project.description}</p>

                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.tech.map((tech, idx) => (
                                <span
                                    key={idx}
                                    className="bg-blue-600 text-blue-100 px-3 py-1 rounded-full text-sm hover:bg-yellow-400 hover:text-blue-900 transition-colors"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {renderProjectButton(project)}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectsPage;
