import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

import "../App.css";
import profileImage from "../assets/profile.jpeg";

const HomePage = () => {
    const navigate = useNavigate();
    const [, setIsTypingDone] = useState(false);
    const [showScrollUp, setShowScrollUp] = useState(true);

    const buttonVariants = {
        hover: { scale: 1.05, rotate: -1, transition: { type: "spring", stiffness: 300 } },
        tap: { scale: 0.95, rotate: 1 },
    };

    React.useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setShowScrollUp(false);
            } else {
                setShowScrollUp(true);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="bg-gradient-home min-h-screen text-white">
            {/* Hero Section */}
            <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 sm:px-12 md:px-24 lg:px-32">
                <h1 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">
                    Hi, I&#39;m <span className="text-yellow-300">Vaibhav Gupta</span>
                </h1>

                <motion.div
                    className="typing-container mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <TypeAnimation
                        sequence={["Software Engineer", 1500, "AI Enthusiast", 1500]}
                        wrapper="div"
                        speed={50}
                        repeat={Infinity}
                        className="text-xl sm:text-2xl md:text-4xl font-extrabold tracking-wider text-blue-200 drop-shadow-lg"
                        onFinished={() => setIsTypingDone(true)}
                    />
                </motion.div>

                <p className="text-white text-base sm:text-lg mb-6 max-w-md sm:max-w-lg">
                    Full-Stack Developer passionate about impactful tech.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-xs sm:max-w-md">
                    <motion.button
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                        className="bg-yellow-400 hover:bg-blue-300 text-blue-900 py-3 px-8 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg w-full sm:w-auto"
                        onClick={() => navigate("/projects")}
                    >
                        View Projects
                    </motion.button>
                    <motion.button
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                        className="bg-yellow-400 hover:bg-blue-300 text-blue-900 py-3 px-8 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg w-full sm:w-auto"
                        onClick={() => window.open(`${import.meta.env.BASE_URL}Resume.pdf`, "_blank")}
                    >
                        View Resume
                    </motion.button>
                </div>
            </div>

            {/* Scroll Up Indicator */}
            {showScrollUp && (
                <div
                    className="fixed bottom-6 left-1/2 transform -translate-x-1/2 text-white flex flex-col items-center animate-bounce z-50 cursor-pointer"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                    <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center relative">
                        <div className="w-1 h-2 bg-white mt-2 rounded-full" />
                    </div>
                    <span className="mt-2 text-xs sm:text-sm text-gray-300">Scroll Up</span>
                </div>
            )}

            {/* About Section */}
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-blue-950 py-16 sm:py-20 px-4 sm:px-8 text-center"
            >
                <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-yellow-300">About Me</h2>
                <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 max-w-4xl mx-auto text-center md:text-left px-4">
                    <motion.img
                        src={profileImage}
                        alt="Vaibhav Gupta"
                        className="w-36 h-36 sm:w-48 sm:h-48 rounded-full object-cover border-4 border-yellow-300 shadow-lg"
                        animate={{ y: [0, -8, 0] }}
                        transition={{ repeat: Infinity, duration: 3 }}
                    />
                    <p className="text-base sm:text-lg text-gray-200 max-w-md sm:max-w-xl">
                        I&#39;m a Computer Science student at the University of Toronto Scarborough specializing in Software Engineering.
                        I love solving real-world problems with AI, Full-Stack Development, and scalable systems.
                        I&#39;m actively building tools that are practical, clean, and future-facing.
                    </p>
                </div>
            </motion.section>

            {/* Tech Stack Section */}
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-blue-900 py-12 sm:py-16 px-4 text-center"
            >
                <h2 className="text-2xl sm:text-3xl font-bold text-yellow-300 mb-6">Tech Stack</h2>
                <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-base sm:text-lg text-blue-100 max-w-lg mx-auto px-2">
                    {[
                        "React",
                        "Django",
                        "Python",
                        "C",
                        "Java",
                        "JavaScript",
                        "TailwindCSS",
                        "Git",
                    ].map((tech, idx) => (
                        <span
                            key={idx}
                            className="bg-blue-700 px-3 sm:px-4 py-1.5 rounded-full shadow-md hover:shadow-yellow-300 hover:scale-105 transition-all duration-300 cursor-default"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </motion.section>

            {/* Footer */}
            <footer className="bg-blue-950 py-6 text-center text-sm sm:text-base text-gray-400">
                <p>© 2025 Vaibhav Gupta. All rights reserved.</p>
                <div className="flex justify-center space-x-4 sm:space-x-6 mt-3">
                    <a
                        href="https://github.com/Vab-170"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-800 hover:bg-blue-700 p-2 sm:p-3 rounded-full transition-colors"
                        aria-label="GitHub"
                        title="GitHub"
                    >
                        <FaGithub className="text-white" size={20} />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/vab-gupta17/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-800 hover:bg-blue-700 p-2 sm:p-3 rounded-full transition-colors"
                        aria-label="LinkedIn"
                        title="LinkedIn"
                    >
                        <FaLinkedinIn className="text-white" size={20} />
                    </a>

                    <a
                        href="mailto:vab.gupta@mail.utoronto.ca"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-800 hover:bg-blue-700 p-2 sm:p-3 rounded-full transition-colors"
                        aria-label="Email"
                        title="Email"
                    >
                        <FaEnvelope className="text-white" size={20} />
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;
