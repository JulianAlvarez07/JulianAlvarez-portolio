import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";
import {
  SiCss3,
  SiExpress,
  SiFramer,
  SiHtml5,
  SiJavascript,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import gymControlImage from "../assets/images/screen-gym.png";
import connect4Image from "../assets/images/screen-game.png";
import landingPageImage from "../assets/images/screen-landing.png";
import antiSocialImage from "../assets/images/screen-antisocial.jpeg";
import mitoImage from "../assets/images/screen-mito.png";
import intaImage from "../assets/images/inta-screen.jpeg";

const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      image: intaImage,
      title: t("projects_section.projects.5.title"),
      description: t("projects_section.projects.5.description"),
      technologies: [
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "HTML", icon: <SiHtml5 /> },
        { name: "CSS", icon: <SiCss3 /> },
      ],
      liveUrl: "https://sepa.inta.gob.ar/productos/focos/seccion-focos/",
      badge: t("projects_section.badges.product"),
      featured: true,
    },
    {
      image: mitoImage,
      title: t("projects_section.projects.4.title"),
      description: t("projects_section.projects.4.description"),
      technologies: [
        { name: "React", icon: <SiReact /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "Tailwind", icon: <SiTailwindcss /> },
        { name: "Framer Motion", icon: <SiFramer /> },
      ],
      liveUrl: "https://mitorental.com/",
      githubUrl: "https://github.com/JulianAlvarez07/mito",
      badge: t("projects_section.badges.client"),
    },
    {
      image: antiSocialImage,
      title: t("projects_section.projects.0.title"),
      description: t("projects_section.projects.0.description"),
      technologies: [
        { name: "React", icon: <SiReact /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "Tailwind", icon: <SiTailwindcss /> },
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "Express", icon: <SiExpress /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
      ],
      liveUrl: "https://anti-social-loscrudos.netlify.app/",
      githubUrl: "https://github.com/JulianAlvarez07/Unahur-antisocialred-front",
      badge: t("projects_section.badges.academic"),
    },
    {
      image: gymControlImage,
      title: t("projects_section.projects.1.title"),
      description: t("projects_section.projects.1.description"),
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
      title: t("projects_section.projects.2.title"),
      description: t("projects_section.projects.2.description"),
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
      title: t("projects_section.projects.3.title"),
      description: t("projects_section.projects.3.description"),
      technologies: [
        { name: "React", icon: <SiReact /> },
        { name: "Tailwind", icon: <SiTailwindcss /> },
        { name: "Framer Motion", icon: <SiFramer /> },
      ],
      liveUrl: "https://landing-ja.netlify.app/",
      githubUrl: "https://github.com/JulianAlvarez07/landing-page",
    },
  ];

  const [featured, ...rest] = projects;

  return (
    <section id="projects" className="scroll-mt-28 px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={t("projects")}
          title={t("projects_section.title")}
          description={t("projects_section.subtitle")}
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <ProjectCard {...featured} />
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {rest.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
