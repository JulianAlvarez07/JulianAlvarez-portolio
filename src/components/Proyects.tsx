import ProjectCard from "./ProjectCard";
import { SiReact, SiTypescript, SiTailwindcss, SiFramer } from "react-icons/si";
import { motion } from "framer-motion";

// Datos de ejemplo para los proyectos
const projects = [
  {
    image: "https://via.placeholder.com/400x225/3b82f6/ffffff?text=Proyecto+1",
    title: "GYM CONTROL",
    description:
      "Una app web para crear, editar y seguir rutinas de entrenamiento de forma simple y efectiva.",
    technologies: [
      { name: "React", icon: <SiReact /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
      { name: "Framer Motion", icon: <SiFramer /> },
    ],
    liveUrl: "https://gym-control-ja.netlify.app/",
    githubUrl: "https://github.com/JulianAlvarez07/gym-control",
  },
  {
    image: "https://via.placeholder.com/400x225/10b981/ffffff?text=Proyecto+2",
    title: "Game: Connect 4",
    description:
      "Versión interactiva de Connect 4 hecha con React. Practiqué estados, componentes, lógica de juego y animaciones para crear una experiencia fluida y divertida.",
    technologies: [
      { name: "React", icon: <SiReact /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
      { name: "Framer Motion", icon: <SiFramer /> },
    ],
    liveUrl: "https://connect4-ja.netlify.app/",
    githubUrl: "https://github.com/JulianAlvarez07/connect-4",
  },
  {
    image: "https://via.placeholder.com/400x225/f59e0b/ffffff?text=Proyecto+3",
    title: "Weather App",
    description:
      "Aplicación del clima con pronósticos detallados y mapas interactivos.",
    technologies: [
      { name: "Vue.js", icon: "💚" },
      { name: "JavaScript", icon: "🟨" },
      { name: "API", icon: "🌐" },
    ],
    githubUrl: "https://github.com/usuario/proyecto3",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-12 text-[#262626] dark:text-[#ffedd5]"
          >
            MIS PROYECTOS
          </motion.h2>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard
                image={project.image}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                liveUrl={project.liveUrl}
                githubUrl={project.githubUrl}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
