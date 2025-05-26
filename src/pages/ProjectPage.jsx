import React from "react";
import "../App.css";

const projects = [
    {
        title: "CREATE Club Website",
        description: "Website for the CREATE club.",
        tech: ["JavaScript", "TailwindCSS"],
        link: "http://www.create.utsc.utoronto.ca/",
    },
    {
        title: "Custom Chess Simulator GUI",
        description: "Interactive chessboard with custom piece placement and rule-following visualization takes a .json file as input and helps user visualize the moves.",
        tech: ["Python", "Tkinter"],
        link: "https://github.com/CREATE-UofT/CodeClash",
    },
    {
        title: "Tic Tac Toe Bot Arena",
        description: "A GUI-based bot vs bot competition with move logging, test mode, and visualization of moves with interactive GUI.",
        tech: ["Python", "Tkinter"],
        link: "https://github.com/CREATE-UofT/CodeClash",
    },
    {
        title: "HikeOn",
        description: "HikeOn is a powerful tool for organizing outdoor activities with ease and confidence. Perfect for planning hikes, and other group outings, this software combines convenience and safety.",
        tech: ["Java", "Java Swing"],
        link: "https://github.com/X-arshiya-X/HikeOn",
    },
    {
        title: "SafeOStroll",
        description: `SafeOStroll is an app designed to keep you safe in unfamiliar or risky situations. Whether you're walking alone at night or feeling uneasy, it provides real-time AI guidance, suggests safe routes, 
                      and lets you alert trusted contacts in an emergency with a tap.`,
        tech: ["Django", "JavaScript, OpenAI API"],
        link: "https://github.com/ssadras/SafeOStroll",
    },
    {
        title: "QualiD Website and App",
        description: "Designed and developed the official QualiD website and app to reflect its mission of simplifying ESG reporting with AI-driven insights.",
        tech: ["Django", "React", "TailwindCSS, OpenAI API"],
        link: "https://github.com/UTSC-CSCC01-Software-Engineering-I/term-group-project-syntax-squad",
    },

];

const ProjectsPage = () => {
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

                        <a
                            href={project.link}
                            className="inline-block bg-yellow-400 text-blue-900 font-semibold px-5 py-2 rounded-full hover:bg-blue-300 transition-all duration-300 shadow-lg"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View Project
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectsPage;
