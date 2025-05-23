import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('hero');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const canvasRef = useRef();
  const sceneRef = useRef();
  const rendererRef = useRef();
  const meshRef = useRef();

  // Initialize Three.js scene
  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    
    // Create floating geometric shapes
    const geometry = new THREE.IcosahedronGeometry(1, 1);
    const material = new THREE.MeshPhongMaterial({
      color: 0xff0080,
      wireframe: true,
      transparent: true,
      opacity: 0.8
    });
    
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    
    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);
    
    const pointLight = new THREE.PointLight(0x00ffff, 1, 100);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);
    
    camera.position.z = 5;
    
    sceneRef.current = scene;
    rendererRef.current = renderer;
    meshRef.current = mesh;
    
    return () => {
      renderer.dispose();
    };
  }, []);

  // Animation loop
  useEffect(() => {
    const animate = () => {
      requestAnimationFrame(animate);
      
      if (meshRef.current) {
        meshRef.current.rotation.x += 0.01;
        meshRef.current.rotation.y += 0.01;
        
        // Mouse interaction
        meshRef.current.position.x = (mousePosition.x - 0.5) * 2;
        meshRef.current.position.y = -(mousePosition.y - 0.5) * 2;
      }
      
      if (rendererRef.current && sceneRef.current) {
        rendererRef.current.render(sceneRef.current, rendererRef.current.cameras?.[0] || new THREE.PerspectiveCamera());
      }
    };
    
    animate();
  }, [mousePosition]);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const projects = [
    {
      title: "AI-Powered Chat Application",
      description: "Real-time chat app with AI integration, built with React, Node.js, and OpenAI API",
      tech: ["React", "Node.js", "WebSocket", "OpenAI"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration and admin dashboard",
      tech: ["Next.js", "Django", "PostgreSQL", "Stripe"],
      gradient: "from-blue-500 to-teal-500"
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for complex data analysis with real-time updates",
      tech: ["React", "D3.js", "Python", "FastAPI"],
      gradient: "from-green-500 to-blue-500"
    },
    {
      title: "Mobile Fitness Tracker",
      description: "Cross-platform mobile app for fitness tracking with social features",
      tech: ["React Native", "Firebase", "Redux", "Expo"],
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Blockchain Voting System",
      description: "Secure voting platform using blockchain technology for transparency",
      tech: ["Solidity", "Web3.js", "React", "Ethereum"],
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      title: "ML Image Classifier",
      description: "Deep learning model for image classification with web interface",
      tech: ["TensorFlow", "Python", "Flask", "React"],
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  const skills = [
    { name: "React", level: 95, color: "bg-blue-500" },
    { name: "Node.js", level: 90, color: "bg-green-500" },
    { name: "Python", level: 88, color: "bg-yellow-500" },
    { name: "Django", level: 85, color: "bg-emerald-500" },
    { name: "C++", level: 82, color: "bg-red-500" },
    { name: "PostgreSQL", level: 80, color: "bg-indigo-500" },
    { name: "TailwindCSS", level: 92, color: "bg-cyan-500" },
    { name: "Next.js", level: 88, color: "bg-gray-500" }
  ];

  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Innovations Inc.",
      period: "2023 - Present",
      description: "Led development of scalable web applications, mentored junior developers, and implemented CI/CD pipelines."
    },
    {
      title: "Software Engineer",
      company: "StartupXYZ",
      period: "2021 - 2023",
      description: "Developed microservices architecture, optimized database performance, and collaborated with cross-functional teams."
    },
    {
      title: "Junior Developer",
      company: "WebSolutions",
      period: "2020 - 2021",
      description: "Built responsive web interfaces, integrated APIs, and maintained legacy codebases."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Floating Navigation */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
        <div className="flex space-x-6">
          {['Hero', 'About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => setActiveSection(item.toLowerCase())}
              className={`text-sm font-medium transition-all duration-300 px-3 py-1 rounded-full ${
                activeSection === item.toLowerCase() 
                  ? 'bg-gradient-to-r from-pink-500 to-violet-500 text-white' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ pointerEvents: 'none' }}
        />
        
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-blue-900/20" />
        
        {/* Floating Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-32 h-32 rounded-full opacity-20 animate-pulse bg-gradient-to-r ${
                ['from-pink-500 to-violet-500', 'from-blue-500 to-teal-500', 'from-green-500 to-blue-500'][i % 3]
              }`}
              style={{
                left: `${20 + (i * 15)}%`,
                top: `${30 + (i * 10)}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i}s`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center max-w-4xl px-6">
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-500 bg-clip-text text-transparent animate-pulse">
              VAIBHAV
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-pink-500 to-violet-500 mx-auto rounded-full" />
            <p className="text-xl md:text-2xl text-gray-300 font-light">
              Full Stack Developer • AI Explorer • Software Engineer
            </p>
            <div className="flex justify-center space-x-4 pt-8">
              <button className="px-8 py-3 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg shadow-pink-500/25">
                View Projects
              </button>
              <button className="px-8 py-3 border border-white/30 rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
                Contact Me
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate full-stack developer with over 4 years of experience creating digital experiences that matter. 
                My journey began with curiosity about how things work under the hood, and it's evolved into a love for building 
                scalable, beautiful, and functional applications.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me exploring the latest in AI and machine learning, contributing to open-source 
                projects, or sharing knowledge with the developer community. I believe in writing clean, maintainable code and 
                creating user experiences that feel magical.
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                {['Problem Solver', 'Team Player', 'Continuous Learner', 'Open Source Contributor'].map((trait) => (
                  <span key={trait} className="px-4 py-2 bg-white/10 rounded-full text-sm border border-white/20">
                    {trait}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-pink-500 to-violet-500 rounded-3xl mx-auto opacity-80 animate-pulse" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-6xl">👨‍💻</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative group">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-pink-500 to-violet-500 rounded-full" />
                <div className="ml-8 p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-pink-500/30 transition-all duration-300 group-hover:bg-white/10">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                    <span className="text-pink-400 font-medium">{exp.period}</span>
                  </div>
                  <p className="text-gray-400 font-medium mb-3">{exp.company}</p>
                  <p className="text-gray-300">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="group relative bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:bg-white/10"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-violet-400 group-hover:bg-clip-text transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-white/10 rounded-full text-xs border border-white/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    <button className="text-pink-400 hover:text-pink-300 text-sm font-medium transition-colors">
                      View Project →
                    </button>
                    <button className="text-gray-400 hover:text-gray-300 text-sm font-medium transition-colors">
                      GitHub
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div key={skill.name} className="group">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-white">{skill.name}</span>
                  <span className="text-sm text-gray-400">{skill.level}%</span>
                </div>
                <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
            Let's Build Something Amazing
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Ready to bring your ideas to life? I'm always excited to work on new projects and collaborate with talented people.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="mailto:vaibhav@example.com"
              className="px-8 py-4 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg shadow-pink-500/25"
            >
              📧 Get In Touch
            </a>
            <a 
              href="#"
              className="px-8 py-4 border border-white/30 rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
            >
              📄 Download Resume
            </a>
          </div>

          <div className="flex justify-center space-x-6 mt-12">
            {['GitHub', 'LinkedIn', 'Twitter', 'Portfolio'].map((social) => (
              <a 
                key={social}
                href="#"
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110 border border-white/20"
              >
                <span className="text-sm font-bold">{social[0]}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Vaibhav. Crafted with 💜 and lots of ☕
          </p>
        </div>
      </footer>
    </div>
  );
}