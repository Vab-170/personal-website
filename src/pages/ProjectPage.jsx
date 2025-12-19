import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import { PageLayout } from "../Components/BackgroundEffects";
import { projects, personalInfo } from "../data/portfolioData";

const ProjectCard = ({ project, index }) => {
    const renderProjectButton = () => {
        if (!project.link || project.linkType === "unavailable") {
            return (
                <span className="inline-flex items-center gap-2 bg-zinc-700 text-gray-400 font-semibold px-5 py-2 rounded-full cursor-not-allowed">
                    Code Unavailable
                </span>
            );
        }

        const isLive = project.linkType === "live";
        
        return (
            <motion.a
                href={project.link}
                className="inline-flex items-center gap-2 min-h-11 min-w-11 bg-linear-to-r from-yellow-400 to-amber-500 text-zinc-900 font-bold px-5 py-2 rounded-full shadow-lg shadow-yellow-500/30"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={isLive ? `View live site for ${project.title}` : `View source code for ${project.title}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                {isLive ? <ExternalLink className="w-4 h-4" aria-hidden="true" /> : <Github className="w-4 h-4" aria-hidden="true" />}
                {isLive ? "View Live Site" : "View Code"}
            </motion.a>
        );
    };

    return (
        <motion.div
            className="bg-zinc-900/60 backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/30 shadow-lg shadow-yellow-500/10 flex flex-col"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{
                scale: 1.02,
                borderColor: "rgba(250, 204, 21, 0.6)",
                boxShadow: "0 0 30px rgba(250, 204, 21, 0.2)",
            }}
        >
            <h3 className="text-xl font-bold text-yellow-400 mb-3">
                {project.title}
            </h3>
            <p className="text-gray-300 mb-4 grow text-sm leading-relaxed">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, idx) => (
                    <span
                        key={idx}
                        className="bg-yellow-500/10 text-yellow-400 px-3 py-1 rounded-full text-xs border border-yellow-500/30"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            {renderProjectButton()}
        </motion.div>
    );
};

ProjectCard.propTypes = {
    project: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        tech: PropTypes.arrayOf(PropTypes.string).isRequired,
        link: PropTypes.string,
        linkType: PropTypes.oneOf(["live", "github", "unavailable"]).isRequired,
    }).isRequired,
    index: PropTypes.number.isRequired,
};

// Projects Page Component
const ProjectsPage = () => {
    return (
        <PageLayout showParticles={false}>
            <div className="py-20 px-6">
                {/* Back Button */}
                <motion.div
                    className="max-w-7xl mx-auto mb-8"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 min-h-11 text-yellow-400 hover:text-yellow-300 transition-colors font-medium"
                        aria-label="Go back to home page"
                    >
                        <ArrowLeft className="w-5 h-5" aria-hidden="true" />
                        Back to Home
                    </Link>
                </motion.div>

                <motion.h2
                    className="text-5xl font-bold text-center mb-16 bg-linear-to-r from-yellow-300 to-amber-500 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Projects
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>

            {/* Footer */}
            <footer className="relative py-8 px-6 border-t border-yellow-500/50 backdrop-blur-sm">
                <p className="text-center text-gray-400">© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.<br />
                </p>
            </footer>
        </PageLayout>
    );
};

export default ProjectsPage;
