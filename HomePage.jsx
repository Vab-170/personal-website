import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative h-screen">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Stars />
          <OrbitControls enableZoom={false} />
          <mesh rotation={[90, 0, 20]}>
            <torusKnotGeometry args={[1, 0.3, 128, 32]} />
            <meshStandardMaterial color="hotpink" wireframe />
          </mesh>
        </Canvas>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Hi, I'm Vaibhav
          </motion.h1>
          <motion.p
            className="mt-4 text-xl md:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Full Stack Developer | AI Explorer | Software Engineer
          </motion.p>
        </div>
      </section>

      {/* About Section */}
      <section className="p-12 md:p-24 bg-gray-900 text-center">
        <motion.h2 className="text-4xl font-bold mb-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          About Me
        </motion.h2>
        <motion.p className="text-lg max-w-2xl mx-auto text-gray-300" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}>
          I'm a passionate developer with a love for AI, full-stack development, and creating experiences that make people go "wow".
        </motion.p>
      </section>

      {/* Projects Section */}
      <section className="p-12 md:p-24">
        <motion.h2 className="text-4xl font-bold mb-10 text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Card className="bg-white/10 border border-white/10 hover:border-pink-400 transition">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Project Title {i + 1}</h3>
                  <p className="text-sm text-gray-300">Short description of the project will go here. This will be replaced with real content later.</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="p-12 md:p-24 bg-gray-900">
        <motion.h2 className="text-4xl font-bold mb-10 text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          Skills
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-sm">
          {["React", "Node.js", "Python", "Django", "C++", "TailwindCSS", "Next.js", "PostgreSQL"].map(skill => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="bg-white/10 border border-white/10 p-4 rounded-xl"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="p-12 md:p-24 text-center">
        <motion.h2 className="text-4xl font-bold mb-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          Contact
        </motion.h2>
        <motion.p className="text-lg text-gray-300 mb-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}>
          Want to get in touch? Let's build something together!
        </motion.p>
        <motion.a
          href="mailto:your.email@example.com"
          className="inline-block px-6 py-3 bg-pink-500 hover:bg-pink-600 rounded-lg text-white font-semibold transition"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Email Me
        </motion.a>
      </section>
    </main>
  );
}
