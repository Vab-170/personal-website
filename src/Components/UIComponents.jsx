import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

// TypeWriter Component
export const TypeWriter = ({ texts }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === texts[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (reverse ? -1 : 1));
      },
      reverse ? 50 : 150
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, texts]);

  return (
    <span className="text-yellow-400">
      {texts[index].substring(0, subIndex)}
      <span className="animate-pulse">|</span>
    </span>
  );
};

TypeWriter.propTypes = {
  texts: PropTypes.arrayOf(PropTypes.string).isRequired,
};

// GlowButton Component
export const GlowButton = ({ children, variant = "primary", as = "button", ariaLabel }) => {
  const Component = as === "span" ? motion.span : motion.button;
  return (
    <Component
      className={`px-8 py-4 min-h-11 min-w-11 rounded-full font-semibold text-lg relative overflow-hidden inline-flex items-center justify-center ${
        variant === "primary"
          ? "bg-linear-to-r from-yellow-400 to-amber-500 text-black shadow-lg shadow-yellow-500/50"
          : "bg-zinc-900 border-2 border-yellow-400 text-yellow-400"
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={ariaLabel}
      role={as === "span" ? "presentation" : undefined}
    >
      <motion.div
        className="absolute inset-0 bg-white"
        initial={{ scale: 0, opacity: 0.5 }}
        whileHover={{ scale: 2, opacity: 0 }}
        transition={{ duration: 0.6 }}
        style={{ borderRadius: "50%" }}
      />
      <span className="relative z-10">{children}</span>
    </Component>
  );
};

GlowButton.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary"]),
  as: PropTypes.oneOf(["button", "span"]),
  ariaLabel: PropTypes.string,
};

// SocialIcon Component for HomePage
export const HomeSocialIcon = ({ icon: Icon, href, label }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-12 h-12 min-w-[44px] min-h-[44px] rounded-full bg-zinc-900 border-2 border-yellow-400/50 flex items-center justify-center"
      whileHover={{
        scale: 1.2,
        borderColor: "#facc15",
        boxShadow: "0 0 20px rgba(250, 204, 21, 0.8)",
      }}
      whileTap={{ scale: 0.9 }}
    >
      <Icon className="w-6 h-6 text-yellow-400" aria-hidden="true" />
    </motion.a>
  );
};

HomeSocialIcon.propTypes = {
  icon: PropTypes.elementType.isRequired,
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

// StatCard Component
export const StatCard = ({ icon: Icon, label, value, suffix }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <motion.div
      className="bg-zinc-900/60 backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/30 shadow-lg shadow-yellow-500/10"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      whileHover={{
        scale: 1.05,
        borderColor: "rgba(250, 204, 21, 0.6)",
        boxShadow: "0 0 30px rgba(250, 204, 21, 0.3)",
      }}
    >
      <Icon className="w-12 h-12 text-yellow-400 mb-4 mx-auto" />
      <div className="text-4xl font-bold text-white mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-gray-400 text-sm font-medium">{label}</div>
    </motion.div>
  );
};

StatCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  suffix: PropTypes.string,
};

// TechCard Component
export const TechCard = ({ name, icon: Icon, color, index }) => {
  return (
    <motion.div
      className="bg-zinc-900/60 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/30 shadow-lg shadow-yellow-500/10 flex flex-col items-center w-40"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{
        scale: 1.08,
        borderColor: "rgba(250, 204, 21, 0.6)",
        boxShadow: "0 0 30px rgba(250, 204, 21, 0.3)",
      }}
    >
      {/* Icon */}
      <motion.div
        className="mb-4"
        whileHover={{ rotate: 360, scale: 1.2 }}
        transition={{ duration: 0.6 }}
      >
        <Icon className="w-16 h-16" style={{ color: color || "#fbbf24" }} />
      </motion.div>

      {/* Tech Name */}
      <span className="text-xl font-semibold text-white">{name}</span>
    </motion.div>
  );
};

TechCard.propTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  color: PropTypes.string,
  index: PropTypes.number.isRequired,
};
