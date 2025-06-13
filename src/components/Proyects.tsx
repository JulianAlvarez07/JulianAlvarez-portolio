import ProjectCard from "./ProjectCard";
import { SiReact, SiTypescript, SiTailwindcss, SiFramer } from "react-icons/si";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import gymControlImage from "../assets/images/screen-gym.png";
import connect4Image from "../assets/images/screen-game.png";
import landingPageImage from "../assets/images/screen-landing.png";

const Projects = () => {
  const { t } = useTranslation();

  // Datos de ejemplo para los proyectos
  const projects = [
    {
      image: gymControlImage,
      title: t("projects_section.projects.0.title"),
      description: t("projects_section.projects.0.description"),
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
      image: connect4Image,
      title: t("projects_section.projects.1.title"),
      description: t("projects_section.projects.1.description"),
      technologies: [
        { name: "React", icon: <SiReact /> },
        { name: "Tailwind", icon: <SiTailwindcss /> },
        { name: "Framer Motion", icon: <SiFramer /> },
      ],
      liveUrl: "https://connect4-ja.netlify.app/",
      githubUrl: "https://github.com/JulianAlvarez07/connect-4",
    },
    {
      image: landingPageImage,
      title: t("projects_section.projects.2.title"),
      description: t("projects_section.projects.2.description"),
      technologies: [
        { name: "React", icon: <SiReact /> },
        { name: "Tailwind", icon: <SiTailwindcss /> },
        { name: "Framer Motion", icon: <SiFramer /> },
      ],
      liveUrl: "https://landing-ja.netlify.app/",
      githubUrl: "https://github.com/JulianAlvarez07/landing-page",
    },
  ];

  return (
    <section id="projects" className="py-12 lg:py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-4 lg:mb-12 text-[#262626] dark:text-[#ffedd5]"
          >
            {t("projects_section.title")}
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
