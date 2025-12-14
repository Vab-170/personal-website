import React from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { TypeWriter, GlowButton, HomeSocialIcon, StatCard, TechCard } from "../Components/UIComponents";
import { PageLayout } from "../Components/BackgroundEffects";
import { techStack, stats, personalInfo, socialLinks, techCategories } from "../data/portfolioData";
import ProfileImage from "../assets/Profile.jpeg";

const EnhancedPortfolio = () => {
  const { scrollYProgress } = useScroll();
  const [showScrollIndicator, setShowScrollIndicator] = React.useState(true);

  // Hide scroll indicator after user scrolls
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.05) {
      setShowScrollIndicator(false);
    } else {
      setShowScrollIndicator(true);
    }
  });
    // Parallax effect
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -400]);

    return (
        <PageLayout showParticles={false}>
            {/* Hero Section */}
            <motion.section
                className="relative min-h-screen flex flex-col items-center justify-center px-6"
                style={{ y: y1 }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center z-10"
                >
                    {/* Profile Image with bold yellow glow */}
                    <motion.div
                        className="relative mx-auto w-40 h-40 mb-8"
                        animate={{
                            boxShadow: [
                                "0 0 20px rgba(250, 204, 21, 0.6)",
                                "0 0 60px rgba(251, 191, 36, 0.9)",
                                "0 0 20px rgba(250, 204, 21, 0.6)",
                            ],
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                        style={{ borderRadius: "50%" }}
                    >
                        <div className="w-full h-full rounded-full bg-linear-to-br from-yellow-400 to-amber-500 p-1">
                            <img
                                src={ProfileImage}
                                alt="Vaibhav Gupta"
                                className="w-full h-full rounded-full object-cover"
                            />
                        </div>
                    </motion.div>

                    <motion.h1
                        className="text-6xl md:text-8xl font-bold mb-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        <span className="bg-linear-to-r from-yellow-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                            {personalInfo.name}
                        </span>
                    </motion.h1>

                    <motion.div
                        className="text-2xl md:text-4xl font-semibold mb-4 h-16"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <TypeWriter texts={personalInfo.roles} />
                    </motion.div>

                    <motion.p
                        className="text-xl text-gray-300 mb-8 max-w-2xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                    >
                        {personalInfo.tagline}
                        <br />
                        <span className="text-yellow-400">{personalInfo.location}</span>
                    </motion.p>

                    <motion.div
                        className="flex gap-4 justify-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                    >
                        <Link to="/projects">
                            <GlowButton>View Projects</GlowButton>
                        </Link>
                        <a
                            href={personalInfo.cvPath}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <GlowButton variant="secondary">Download CV</GlowButton>
                        </a>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        className="flex gap-6 justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.1 }}
                    >
                        {socialLinks.map((social, idx) => (
                            <HomeSocialIcon key={idx} icon={social.icon} href={social.href} />
                        ))}
                    </motion.div>
                </motion.div>

                {/* Scroll indicator - fades out after scrolling */}
                <motion.div
                    className="absolute bottom-10"
                    animate={{ 
                        y: [0, 10, 0],
                        opacity: showScrollIndicator ? 1 : 0,
                    }}
                    transition={{ 
                        y: { duration: 1.5, repeat: Infinity },
                        opacity: { duration: 0.3 }
                    }}
                >
                    <ChevronDown className="w-8 h-8 text-yellow-400" />
                </motion.div>
            </motion.section>

            {/* Stats Section */}
            <motion.section className="relative py-20 px-6" style={{ y: y2 }}>
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-4 gap-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            visible: { transition: { staggerChildren: 0.1 } },
                        }}
                    >
                        {stats.map((stat, idx) => (
                            <StatCard key={idx} {...stat} />
                        ))}
                    </motion.div>
                </div>
            </motion.section>

            {/* About Section */}
            <motion.section
                className="relative py-20 px-6 bg-zinc-900/40 backdrop-blur-sm border-y border-yellow-500/20"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        className="text-5xl font-bold mb-12 text-center bg-linear-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent"
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        About Me
                    </motion.h2>
                    <motion.p
                        className="text-xl text-gray-300 leading-relaxed text-center"
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0, transition: { delay: 0.2 } },
                        }}
                    >
                        {personalInfo.about}
                    </motion.p>
                </div>
            </motion.section>

            {/* Tech Stack Section */}
            <motion.section className="relative py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.h2
                        className="text-5xl font-bold mb-16 text-center bg-linear-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Tech Stack
                    </motion.h2>

                    {/* Display tech by category */}
                    {techCategories.map((category) => (
                        <div key={category} className="mb-12">
                            <motion.h3
                                className="text-2xl font-semibold text-yellow-400 mb-6 text-center"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                            >
                                {category}
                            </motion.h3>
                            <div className="flex flex-wrap justify-center gap-4">
                                {techStack
                                    .filter((tech) => tech.category === category)
                                    .map((tech, idx) => (
                                        <TechCard key={tech.name} {...tech} index={idx} />
                                    ))}
                            </div>
                        </div>
                    ))}
                </div>
            </motion.section>

            {/* CTA Section */}
            <motion.section className="relative py-32 px-6">
                <motion.div
                    className="max-w-4xl mx-auto text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.h2
                        className="text-5xl font-bold mb-6 bg-linear-to-r from-lime-400 to-emerald-500 bg-clip-text text-transparent pb-2"
                        variants={{
                            hidden: { opacity: 0, scale: 0.8 },
                            visible: { opacity: 1, scale: 1 },
                        }}
                    >
                        Let&apos;s Build Something Amazing
                    </motion.h2>
                    <motion.p
                        className="text-xl text-gray-300 mb-12"
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { delay: 0.2 } },
                        }}
                    >
                        {personalInfo.seekingText}
                    </motion.p>
                    <motion.div
                        className="flex items-center justify-center gap-3 mb-8"
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { delay: 0.4 } },
                        }}
                    >
                        <motion.div
                            className="w-3 h-3 bg-lime-400 rounded-full"
                            animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                        <span className="text-lime-400 font-semibold">
                            {personalInfo.availabilityStatus}
                        </span>
                    </motion.div>
                    <a href={socialLinks.find((s) => s.label === "Email")?.href || "#"}>
                        <GlowButton>Get In Touch</GlowButton>
                    </a>
                </motion.div>
            </motion.section>

            {/* Footer */}
            <footer className="relative py-8 px-6 border-t border-yellow-500/50 backdrop-blur-sm">
                <p className="text-center text-gray-400">
                    © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
                </p>
            </footer>
        </PageLayout>
    );
};

export default EnhancedPortfolio;
