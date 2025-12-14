import React, { useState, useEffect, useMemo } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import PropTypes from "prop-types";

// Generate particles data
const generateParticles = (count = 30) =>
  Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 20 + 10,
  }));

// Generate geometric shapes data
const generateGeometricShapes = (count = 15) =>
  Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 100 + 50,
    rotation: Math.random() * 360,
    duration: Math.random() * 30 + 20,
    shape: ["square", "circle", "triangle"][Math.floor(Math.random() * 3)],
  }));

// Generate grid dots data
const generateGridDots = (count = 100) =>
  Array.from({ length: count }, (_, i) => ({
    id: i,
    x: (i % 10) * 10,
    y: Math.floor(i / 10) * 10,
  }));

// Progress Bar Component
export const ProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-linear-to-r from-yellow-400 via-yellow-500 to-amber-400 origin-left z-50"
      style={{ scaleX }}
    />
  );
};

// Grid Dots Background
export const GridDotsBackground = ({ dotCount = 100, opacity = 0.6 }) => {
  const gridDots = useMemo(() => generateGridDots(dotCount), [dotCount]);

  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none"
      style={{ opacity }}
    >
      <svg className="w-full h-full">
        {gridDots.map((dot) => (
          <motion.circle
            key={dot.id}
            cx={`${dot.x}%`}
            cy={`${dot.y}%`}
            r="3"
            fill="#fbbf24"
            style={{ filter: "drop-shadow(0 0 4px #fbbf24)" }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 2, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: dot.id * 0.03,
            }}
          />
        ))}
      </svg>
    </div>
  );
};

GridDotsBackground.propTypes = {
  dotCount: PropTypes.number,
  opacity: PropTypes.number,
};

// Geometric Shapes Background
export const GeometricShapesBackground = ({ shapeCount = 15 }) => {
  const geometricShapes = useMemo(
    () => generateGeometricShapes(shapeCount),
    [shapeCount]
  );

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {geometricShapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            width: shape.size,
            height: shape.size,
            filter: "drop-shadow(0 0 10px rgba(251, 191, 36, 0.5))",
          }}
          animate={{
            rotate: [shape.rotation, shape.rotation + 360],
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.4, 0.15],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {shape.shape === "square" && (
            <div className="w-full h-full border-2 border-yellow-400/60 rounded-lg shadow-lg shadow-yellow-500/20" />
          )}
          {shape.shape === "circle" && (
            <div className="w-full h-full border-2 border-yellow-300/60 rounded-full shadow-lg shadow-yellow-400/20" />
          )}
          {shape.shape === "triangle" && (
            <div className="w-0 h-0 border-l-50 border-r-50 border-b-86 border-l-transparent border-r-transparent border-b-amber-400/60" />
          )}
        </motion.div>
      ))}
    </div>
  );
};

GeometricShapesBackground.propTypes = {
  shapeCount: PropTypes.number,
};

// Particles Background
export const ParticlesBackground = ({ particleCount = 30 }) => {
  const particles = useMemo(
    () => generateParticles(particleCount),
    [particleCount]
  );

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-yellow-400"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size * 1.5,
            height: particle.size * 1.5,
            boxShadow: "0 0 15px 5px rgba(251, 191, 36, 0.6)",
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, 10, -10, 0],
            opacity: [0.4, 0.9, 0.4],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: particle.duration * 0.7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

ParticlesBackground.propTypes = {
  particleCount: PropTypes.number,
};

// Mouse Follower Gradient
export const MouseFollower = ({ size = 600, intensity = 50 }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-0 transition-transform duration-300 ease-out"
      style={{
        left: mousePosition.x,
        top: mousePosition.y,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div
        className="bg-gradient-radial from-yellow-500/50 via-amber-500/30 to-transparent rounded-full blur-3xl"
        style={{
          width: size,
          height: size,
          opacity: intensity / 100,
        }}
      />
    </div>
  );
};

MouseFollower.propTypes = {
  size: PropTypes.number,
  intensity: PropTypes.number,
};

// Combined Background Effects Component
export const BackgroundEffects = ({
  showProgressBar = true,
  showGridDots = true,
  showGeometricShapes = true,
  showParticles = true,
  showMouseFollower = true,
  gridDotCount = 100,
  shapeCount = 15,
  particleCount = 30,
  mouseFollowerSize = 600,
}) => {
  return (
    <>
      {showProgressBar && <ProgressBar />}
      {showGridDots && <GridDotsBackground dotCount={gridDotCount} />}
      {showGeometricShapes && <GeometricShapesBackground shapeCount={shapeCount} />}
      {showParticles && <ParticlesBackground particleCount={particleCount} />}
      {showMouseFollower && <MouseFollower size={mouseFollowerSize} />}
    </>
  );
};

BackgroundEffects.propTypes = {
  showProgressBar: PropTypes.bool,
  showGridDots: PropTypes.bool,
  showGeometricShapes: PropTypes.bool,
  showParticles: PropTypes.bool,
  showMouseFollower: PropTypes.bool,
  gridDotCount: PropTypes.number,
  shapeCount: PropTypes.number,
  particleCount: PropTypes.number,
  mouseFollowerSize: PropTypes.number,
};

// Page Layout Wrapper with Background
export const PageLayout = ({ children, className = "", ...backgroundProps }) => {
  return (
    <div className={`bg-black min-h-screen text-white overflow-hidden relative ${className}`}>
      <BackgroundEffects {...backgroundProps} />
      {children}
    </div>
  );
};

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  showProgressBar: PropTypes.bool,
  showGridDots: PropTypes.bool,
  showGeometricShapes: PropTypes.bool,
  showParticles: PropTypes.bool,
  showMouseFollower: PropTypes.bool,
  gridDotCount: PropTypes.number,
  shapeCount: PropTypes.number,
  particleCount: PropTypes.number,
  mouseFollowerSize: PropTypes.number,
};
