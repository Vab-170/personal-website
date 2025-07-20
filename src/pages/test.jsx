import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useSpring, useTransform } from "framer-motion";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

import "../App.css";
import PropTypes from "prop-types";
// Import your profile image here. Adjust the path as needed.
import profileImage from "../assets/profile.jpeg";

const HomePage = () => {
    const navigate = useNavigate();
    const [, setIsTypingDone] = useState(false);
    const [showScrollUp, setShowScrollUp] = useState(true);

    const buttonVariants = {
        hover: { scale: 1.05, rotate: -1, transition: { type: "spring", stiffness: 300 } },
        tap: { scale: 0.95, rotate: 1 },
    };
    const Card3D = ({ children, className = "" }) => {
        // Add spring values for x and y (for 3D effect)
        const springX = useSpring(0, { stiffness: 300, damping: 30 });
        const springY = useSpring(0, { stiffness: 300, damping: 30 });
        const x = useTransform(springX, [-1, 1], [-5, 5]);
        const y = useTransform(springY, [-1, 1], [-5, 5]);

        return (
            <motion.div
                className={`relative transform-gpu ${className}`}
                whileHover={{ 
                    scale: 1.02,
                    rotateY: 5,
                    rotateX: 5,
                    z: 50,
                }}
                style={{
                    transformStyle: "preserve-3d",
                    x,
                    y,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl transform translate-z-[-10px]" />
                {children}
            </motion.div>
        );
    };

    Card3D.propTypes = {
        children: PropTypes.node.isRequired,
        className: PropTypes.string,
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
                    Full-Stack Developer passionate about impactful tech. <br />
                    Based in Toronto, ON
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
                        onClick={() => window.open(`${import.meta.env.BASE_URL}Vab_s_Resume.pdf`, "_blank")}
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

            {/* Contact Section */}
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="py-20 px-4 sm:px-8 relative"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-purple-900/30 "></div>
                
                <div className="relative z-10 max-w-6xl mx-auto">
                    <motion.h2 
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl sm:text-4xl font-bold mb-4 text-center bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"
                    >
                        Let's Connect
                    </motion.h2>
                    
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-center text-blue-100 text-lg mb-12 max-w-2xl mx-auto"
                    >
                        I'm always open to discussing new opportunities, collaborating on projects, or just having a chat about technology!
                    </motion.p>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Contact Form */}
                        <Card3D>
                            <div className="bg-gradient-to-br from-blue-900/60 to-purple-900/60 rounded-2xl p-8 border border-blue-400/20">
                                <h3 className="text-xl font-semibold text-yellow-300 mb-6">Send me a message</h3>
                                <form className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-blue-100 mb-2">
                                            Your Name
                                        </label>
                                        <Card3D>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                className="w-full px-4 py-3 bg-blue-800/50 border border-blue-600/30 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                                                placeholder="John Doe"
                                            />
                                        </Card3D>
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-blue-100 mb-2">
                                            Your Email
                                        </label>
                                        <Card3D>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                className="w-full px-4 py-3 bg-blue-800/50 border border-blue-600/30 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                                                placeholder="john@example.com"
                                            />
                                        </Card3D>
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-blue-100 mb-2">
                                            Subject
                                        </label>
                                        <Card3D>
                                            <input
                                                type="text"
                                                id="subject"
                                                name="subject"
                                                className="w-full px-4 py-3 bg-blue-800/50 border border-blue-600/30 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                                                placeholder="Let's collaborate!"
                                            />
                                        </Card3D>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-blue-100 mb-2">
                                            Message
                                        </label>
                                        <Card3D>
                                            <textarea
                                                id="message"
                                                name="message"
                                                rows={5}
                                                className="w-full px-4 py-3 bg-blue-800/50 border border-blue-600/30 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 resize-none"
                                                placeholder="Tell me about your project or just say hi!"
                                            />
                                        </Card3D>
                                    </div>

                                    <Card3D>
                                        <motion.button
                                            type="submit"
                                            whileHover={{ scale: 1.02, rotateY: 5 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-300 hover:to-orange-300 text-gray-900 py-4 px-8 rounded-lg text-lg font-semibold transition-all duration-300 shadow-xl transform-gpu"
                                        >
                                            Send Message
                                        </motion.button>
                                    </Card3D>
                                </form>
                            </div>
                        </Card3D>

                        {/* Contact Info */}
                        <div className="space-y-8">
                            <Card3D>
                                <div className="bg-gradient-to-br from-blue-900/60 to-purple-900/60 rounded-2xl p-8 border border-blue-400/20">
                                    <h3 className="text-xl font-semibold text-yellow-300 mb-6">Get in touch</h3>
                                    <div className="space-y-6">
                                        <div className="flex items-center space-x-4">
                                            <div className="bg-blue-600/30 p-3 rounded-full">
                                                <FaEnvelope className="w-6 h-6 text-yellow-400" />
                                            </div>
                                            <div>
                                                <p className="text-blue-100 font-medium">Email</p>
                                                <p className="text-blue-200">vab.gupta@mail.utoronto.ca</p>
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-center space-x-4">
                                            <div className="bg-blue-600/30 p-3 rounded-full">
                                                <FaLinkedinIn className="w-6 h-6 text-yellow-400" />
                                            </div>
                                            <div>
                                                <p className="text-blue-100 font-medium">LinkedIn</p>
                                                <p className="text-blue-200">linkedin.com/in/vab-gupta17</p>
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-center space-x-4">
                                            <div className="bg-blue-600/30 p-3 rounded-full">
                                                <FaGithub className="w-6 h-6 text-yellow-400" />
                                            </div>
                                            <div>
                                                <p className="text-blue-100 font-medium">GitHub</p>
                                                <p className="text-blue-200">github.com/Vab-170</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card3D>

                            <Card3D>
                                <div className="bg-gradient-to-br from-green-900/40 to-blue-900/40 rounded-2xl p-8 border border-green-400/20">
                                    <h3 className="text-xl font-semibold text-green-300 mb-4">Current Status</h3>
                                    <div className="flex items-center space-x-3 mb-4">
                                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                                        <span className="text-green-200 font-medium">Open to opportunities</span>
                                    </div>
                                    <p className="text-blue-100 text-sm">
                                        Currently seeking Summer 2025 internships and co-op positions. 
                                        Available for freelance projects and collaborations.
                                    </p>
                                </div>
                            </Card3D>

                            <Card3D>
                                <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-2xl p-8 border border-purple-400/20">
                                    <h3 className="text-xl font-semibold text-purple-300 mb-4">Response Time</h3>
                                    <p className="text-blue-100 text-sm">
                                        I typically respond within 24 hours. For urgent matters, 
                                        feel free to connect with me on LinkedIn for faster communication.
                                    </p>
                                </div>
                            </Card3D>
                        </div>
                    </div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="mt-12 text-center"
                    >
                        <p className="text-blue-200 mb-6">Or connect with me on social media</p>
                        <div className="flex justify-center space-x-6">
                            {[
                                { icon: FaGithub, href: "https://github.com/Vab-170", label: "GitHub" },
                                { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/vab-gupta17/", label: "LinkedIn" },
                                { icon: FaEnvelope, href: "mailto:vab.gupta@mail.utoronto.ca", label: "Email" }
                            ].map(({ icon: Icon, href, label }) => (
                                <Card3D key={label}>
                                    <motion.a
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.2, rotateY: 15 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="bg-gradient-to-br from-blue-700 to-purple-700 hover:from-blue-600 hover:to-purple-600 p-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl block"
                                        aria-label={label}
                                    >
                                        <Icon className="text-white w-6 h-6" />
                                    </motion.a>
                                </Card3D>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </motion.section>


            {/* Footer */}
            <footer className="bg-blue-950 py-6 text-center text-sm sm:text-base text-gray-400">
                <p>© 2025 Vaibhav Gupta. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default HomePage;
