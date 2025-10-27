import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

import "../App.css";
import profileImage from "../assets/profile.jpeg";

// Import animation variants from AnimationConstants
import { 
    typingContainerVariants,
    floatingAnimation,
    gradientTextVariants,
    contactInfoVariants,
    socialLinksVariants
} from '../Components/AnimationConstants';

// Import animation components from Animation
import { 
    AnimatedSection, 
    Card3D, 
    AnimatedButton,
    TechStackItem,
    SocialIcon
} from '../Components/Animation';

const HomePage = () => {
    const navigate = useNavigate();
    const [, setIsTypingDone] = useState(false);
    const [showScrollUp, setShowScrollUp] = useState(true);

    // Effect to handle scroll up visibility
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

    // Tech stack array
    const techStack = [
        "Python", "C", "Java", "React", "Django", 
        "JavaScript", "TailwindCSS", "Git", "Docker"
    ];

    // Social links array
    const socialLinks = [
        { icon: FaGithub, href: "https://github.com/Vab-170", label: "GitHub" },
        { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/vab-gupta17/", label: "LinkedIn" },
        { icon: FaEnvelope, href: "mailto:vab.gupta@mail.utoronto.ca", label: "Email" }
    ];

    return (
        <div className="bg-gradient-home min-h-screen text-white">
            {/* Hero Section */}
            <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 sm:px-12 md:px-24 lg:px-32">
                <h1 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">
                    Hi, I&#39;m <span className="text-yellow-300">Vaibhav Gupta</span>
                </h1>
                {/* Typing Animation */}
                <motion.div
                    className="typing-container mb-6"
                    variants={typingContainerVariants}
                    initial="hidden"
                    animate="visible"
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

                {/* Description for Hero Section */}
                <p className="text-white text-base sm:text-lg mb-6 max-w-md sm:max-w-lg">
                    Full-Stack Developer passionate about impactful tech. <br />
                    Based in Toronto, ON
                </p>

                {/* Action Buttons for Projects and Resume */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-xs sm:max-w-md">
                    <AnimatedButton
                        className="bg-yellow-400 hover:bg-blue-300 text-blue-900 py-3 px-8 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg w-full sm:w-auto"
                        onClick={() => navigate("/projects")}
                    >
                        View Projects
                    </AnimatedButton>
                    <AnimatedButton
                        className="bg-yellow-400 hover:bg-blue-300 text-blue-900 py-3 px-8 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg w-full sm:w-auto"
                        onClick={() => window.open(`${import.meta.env.BASE_URL}Vab_s_CV.pdf`, "_blank")}
                    >
                        View CV
                    </AnimatedButton>
                </div>
            </div>

            {/* Scroll Up Indicator (Jumping mouse animation) */}
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
            <AnimatedSection className="bg-blue-950 py-16 sm:py-15 px-4 sm:px-8 text-center">
                <motion.h2
                    variants={gradientTextVariants}
                    initial="hidden"
                    whileInView="visible"
                    className="text-3xl sm:text-4xl font-bold mb-4 text-center text-yellow-300 bg-clip-text"
                >
                    About Me
                </motion.h2>

                { /* Profile Image and Description */}
                <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 max-w-4xl mx-auto text-center md:text-left px-4">
                    <motion.img
                        initial="hidden"
                        whileInView="visible"
                        src={profileImage}
                        alt="Vaibhav Gupta"
                        className="w-36 h-36 sm:w-48 sm:h-48 rounded-full object-cover border-4 border-yellow-300 shadow-lg"
                        animate={floatingAnimation}
                    />

                    { /* About Me Description Text */}
                    <motion.p
                        variants={typingContainerVariants}
                        initial="hidden"
                        whileInView="visible"
                        className="text-base sm:text-lg text-gray-200 max-w-md sm:max-w-xl"
                    >
                        I&#39;m a Computer Science student at the University of Toronto Scarborough specializing in Software Engineering.
                        I love solving real-world problems with AI, Full-Stack Development, and scalable systems.
                        I&#39;m actively building tools that are practical, clean, and future-facing.
                    </motion.p>
                </div>
            </AnimatedSection>

            {/* Tech Stack Section */}
            <AnimatedSection className="py-15 px-4 sm:px-8 relative text-center">
                <motion.h2
                    variants={gradientTextVariants}
                    initial="hidden"
                    whileInView="visible"
                    className="text-3xl sm:text-4xl font-bold mb-4 text-center text-orange-400 bg-clip-text"
                >
                    Tech Stack
                </motion.h2>
                <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-base sm:text-lg text-blue-100 max-w-lg mx-auto px-2">
                    {techStack.map((tech, idx) => (
                        <TechStackItem key={idx} index={idx}>
                            {tech}
                        </TechStackItem>
                    ))}
                </div>
            </AnimatedSection>

            {/* Let's Connect Section */}
            <AnimatedSection className="py-15 px-4 sm:px-8 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-purple-900/30"></div>
                
                <div className="relative z-10 max-w-6xl mx-auto">
                    <motion.h2 
                        variants={gradientTextVariants}
                        initial="hidden"
                        whileInView="visible"
                        className="text-3xl sm:text-4xl font-bold mb-4 text-center text-green-400 bg-clip-text"
                    >
                        Let&#39;s Connect
                    </motion.h2>
                    
                    <motion.p
                        variants={contactInfoVariants}
                        initial="hidden"
                        whileInView="visible"
                        className="text-center text-blue-100 text-lg mb-12 max-w-2xl mx-auto"
                    >
                        I&#39;m always open to discussing new opportunities, collaborating on projects, or just having a chat about technology!
                    </motion.p>
                    <div className="flex justify-center">
                        {/* Contact Info */}
                        <div className="grid place-items-center">
                            <Card3D>
                                <div className="bg-gradient-to-br from-green-900/40 to-blue-900/40 rounded-2xl p-8 border border-green-400/20">
                                    <h3 className="text-xl font-semibold text-green-300 text-center mb-4">Current Status</h3>
                                    <div className="flex items-center space-x-3 mb-4">
                                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                                        <span className="text-green-200 font-medium">Open to opportunities</span>
                                    </div>
                                    <p className="text-blue-100 text-sm">
                                        Currently seeking 2026 internships and co-op positions.
                                    </p>
                                </div>
                            </Card3D>
                        </div>
                    </div>

                    {/* Social Links */}
                    <motion.div
                        variants={socialLinksVariants}
                        initial="hidden"
                        whileInView="visible"
                        className="mt-12 text-center"
                    >
                        <p className="text-blue-200 mb-6">Connect with me on social media</p>
                        <div className="flex justify-center space-x-6">
                            {socialLinks.map(({ icon, href, label }) => (
                                <SocialIcon 
                                    key={label}
                                    icon={icon}
                                    href={href}
                                    label={label}
                                />
                            ))}
                        </div>
                    </motion.div>
                </div>
            </AnimatedSection>

            {/* Footer */}
            <footer className="bg-blue-950 py-6 text-center text-sm sm:text-base text-gray-400">
                <p>© 2025 Vaibhav Gupta. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default HomePage;
