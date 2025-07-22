// Framer Motion variants for fade in animations
export const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

export const staggerContainer = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

// Button animation variants
export const buttonVariants = {
    hover: {
        scale: 1.05,
        rotate: -1,
        transition: { type: "spring", stiffness: 300 }
    },
    tap: {
        scale: 0.95,
        rotate: 1
    },
};

// Section animation variants
export const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8 }
    }
};

// Floating animation for profile image
export const floatingAnimation = {
    y: [0, -8, 0],
    transition: {
        repeat: Infinity,
        duration: 3,
        ease: "easeInOut"
    }
};

// Gradient text animation
export const gradientTextVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.6 }
    }
};

// Typing container animation
export const typingContainerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1 }
    }
};

// Social links animation
export const socialLinksVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { delay: 0.4, duration: 0.6 }
    }
};

// Contact info animation
export const contactInfoVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { delay: 0.2, duration: 0.6 }
    }
};