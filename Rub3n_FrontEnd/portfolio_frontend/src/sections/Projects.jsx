import { useState, useEffect } from "react";
import Project from "../components/Project";
// import { myProjects } from "../constants/index"; // No longer used
import { motion, useMotionValue, useSpring } from "motion/react";
import api from "../services/api";

const Projects = () => {
  const [certifications, setCertifications] = useState([]);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });

  useEffect(() => {
    const fetchCertifications = async () => {
      try {
        const response = await api.get("/certifications/");
        const data = response.data.results.map((cert) => ({
          id: cert.id,
          title: cert.titulo,
          description: cert.descripcion,
          subDescription: cert.descripcion.split('\r\n\r\n'),
          image: cert.imagen || cert.imagen_url,
          tags: cert.tecnologias || [],
          href: "",
        }));
        setCertifications(data);
      } catch (error) {
        console.error("Error fetching certifications:", error);
      }
    };

    fetchCertifications();
  }, []);

  const handleMouseMove = (e) => {
    x.set(e.clientX + 20);
    y.set(e.clientY + 20);

  };
  const [preview, setPreview] = useState(null);
  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative c-space pt-20 pb-10"
    >
      <div
        id="certifications"
        className="scroll-mt-32"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-400 mb-16 text-center">
          My Certifications
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certifications.map((project) => (
          <Project key={project.id} {...project} setPreview={setPreview} />
        ))}
      </div>

      {preview && (
        <motion.img
          className="fixed top-0 left-0 z-50 object-cover h-64 rounded-xl shadow-2xl pointer-events-none w-96 border-2 border-white/10 backdrop-blur-sm"
          src={preview}
          style={{ x: springX, y: springY }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
        />
      )}
    </section>
  );
};

export default Projects;
