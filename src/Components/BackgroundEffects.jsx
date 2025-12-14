import React, { useState, useEffect, useMemo } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import PropTypes from "prop-types";

// Reduced counts for better performance
const generateParticles = (count = 20) =>
  Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 20 + 10,
  }));

// Reduced geometric shapes
const generateGeometricShapes = (count = 12) =>
  Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 100 + 50,
    rotation: Math.random() * 360,
    duration: Math.random() * 30 + 20,
    shape: ["square", "circle", "triangle"][Math.floor(Math.random() * 3)],
  }));

// Reduced grid dots
const generateGridDots = (count = 64) =>
  Array.from({ length: count }, (_, i) => ({
    id: i,
    x: (i % 8) * 12 + 6,
    y: Math.floor(i / 8) * 12 + 6,
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

// Grid Dots Background - CSS animations instead of JS
export const GridDotsBackground = ({ dotCount = 36, opacity = 0.6 }) => {
  const gridDots = useMemo(() => generateGridDots(dotCount), [dotCount]);

  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none"
      style={{ opacity }}
    >
      <svg className="w-full h-full">
        <style>
          {`
            @keyframes pulse {
              0%, 100% { opacity: 0.3; transform: scale(1); }
              50% { opacity: 0.8; transform: scale(1.5); }
            }
            .grid-dot { animation: pulse 3s ease-in-out infinite; }
          `}
        </style>
        {gridDots.map((dot) => (
          <circle
            key={dot.id}
            cx={`${dot.x}%`}
            cy={`${dot.y}%`}
            r="2"
            fill="#fbbf24"
            className="grid-dot"
            style={{ 
              filter: "drop-shadow(0 0 3px #fbbf24)",
              animationDelay: `${dot.id * 0.1}s`
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

// Mouse Follower Gradient - Throttled updates
export const MouseFollower = ({ size = 600, intensity = 50 }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let rafId;
    let lastX = 0, lastY = 0;
    
    const handleMouseMove = (e) => {
      // Throttle with requestAnimationFrame
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        // Only update if moved significantly
        if (Math.abs(e.clientX - lastX) > 5 || Math.abs(e.clientY - lastY) > 5) {
          lastX = e.clientX;
          lastY = e.clientY;
          setMousePosition({ x: e.clientX, y: e.clientY });
        }
        rafId = null;
      });
    };
    
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
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

// Combined Background Effects Component - Reduced defaults
export const BackgroundEffects = ({
  showProgressBar = true,
  showGridDots = true,
  showGeometricShapes = true,
  showParticles = true,
  showMouseFollower = true,
  gridDotCount = 64,
  shapeCount = 12,
  particleCount = 20,
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
