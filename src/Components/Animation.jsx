import React from 'react';
import { motion, useSpring, useTransform } from "framer-motion";
import PropTypes from 'prop-types';
import { buttonVariants, sectionVariants } from './AnimationConstants';

// 3D Card Component with enhanced animations
export const Card3D = ({ children, className = "", intensity = 1 }) => {
    const springX = useSpring(0, { stiffness: 300, damping: 30 });
    const springY = useSpring(0, { stiffness: 300, damping: 30 });
    const x = useTransform(springX, [-1, 1], [-5 * intensity, 5 * intensity]);
    const y = useTransform(springY, [-1, 1], [-5 * intensity, 5 * intensity]);

    return (
        <motion.div
            className={`relative transform-gpu ${className}`}
            whileHover={{
                scale: 1.02,
                rotateY: 5 * intensity,
                rotateX: 5 * intensity,
                z: 50 * intensity,
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
    intensity: PropTypes.number,
};

// Animated Button Component
export const AnimatedButton = ({
    children,
    onClick,
    className = "",
    variants = buttonVariants,
    ...props
}) => {
    return (
        <motion.button
            variants={variants}
            whileHover="hover"
            whileTap="tap"
            className={className}
            onClick={onClick}
            {...props}
        >
            {children}
        </motion.button>
    );
};

AnimatedButton.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    className: PropTypes.string,
    variants: PropTypes.object,
};

// Animated Section Component
export const AnimatedSection = ({
    children,
    className = "",
    variants = sectionVariants,
    viewport = { once: true },
    ...props
}) => {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={variants}
            className={className}
            {...props}
        >
            {children}
        </motion.section>
    );
};

AnimatedSection.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    variants: PropTypes.object,
    viewport: PropTypes.object,
};

// Tech Stack Item Animation
export const TechStackItem = ({ children, index = 0 }) => {
    return (
        <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{
                duration: 0.3,
                delay: index * 0.1
            }}
            className="bg-blue-700 px-3 sm:px-4 py-1.5 rounded-full shadow-md hover:shadow-yellow-300 transition-all duration-300 cursor-default"
        >
            {children}
        </motion.span>
    );
};

TechStackItem.propTypes = {
    children: PropTypes.node.isRequired,
    index: PropTypes.number,
};

// Social Icon Component
export const SocialIcon = ({
    icon: Icon,
    href,
    label,
    className = ""
}) => {
    return (
        <Card3D>
            <motion.a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotateY: 15 }}
                whileTap={{ scale: 0.9 }}
                className={`bg-gradient-to-br from-blue-700 to-purple-700 hover:from-blue-600 hover:to-purple-600 p-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl block ${className}`}
                aria-label={label}
            >
                <Icon className="text-white w-6 h-6" />
            </motion.a>
        </Card3D>
    );
};

SocialIcon.propTypes = {
    icon: PropTypes.elementType.isRequired,
    href: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    className: PropTypes.string,
};