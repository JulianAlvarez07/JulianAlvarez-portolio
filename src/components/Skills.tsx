import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiGit,
  SiDocker,
  SiFigma,
} from "react-icons/si";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation();

  // Datos de habilidades técnicas con iconos y colores
  const technicalSkills = {
    [t("skills_section.categories.frontend")]: [
      { name: "HTML5", icon: SiHtml5, color: "text-orange-600" },
      { name: "CSS3", icon: SiCss3, color: "text-blue-600" },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
      { name: "React", icon: SiReact, color: "text-cyan-500" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-500" },
    ],
    [t("skills_section.categories.backend")]: [
      { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
      {
        name: "Express",
        icon: SiExpress,
        color: "text-gray-600 dark:text-gray-400",
      },
      { name: "Python", icon: SiPython, color: "text-yellow-500" },
    ],
    [t("skills_section.categories.database")]: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-700" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
      { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
    ],
    [t("skills_section.categories.tools")]: [
      { name: "Git", icon: SiGit, color: "text-orange-600" },
      { name: "Docker", icon: SiDocker, color: "text-blue-600" },
      { name: "Figma", icon: SiFigma, color: "text-orange-500" },
    ],
  };

  // Habilidades blandas
  const softSkills = t("skills_section.soft_skills", {
    returnObjects: true,
  }) as string[];

  return (
    <section id="skills" className="py-12 lg:py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-12 text-center text-[#262626] dark:text-[#ffedd5]"
      >
        {t("skills_section.title")}
      </motion.h2>

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Columna de Habilidades Técnicas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                {t("skills_section.technical")}
              </h3>

              <div className="space-y-8">
                {Object.entries(technicalSkills).map(([category, skills]) => (
                  <div key={category} className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700 pb-2">
                      {category}
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                      {skills.map((skill, index) => {
                        const IconComponent = skill.icon;
                        return (
                          <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center gap-3 bg-gray-50 dark:bg-gray-700 rounded-lg p-3 transition-colors hover:bg-gray-100 dark:hover:bg-gray-600"
                          >
                            <IconComponent
                              className={`text-2xl ${skill.color}`}
                            />
                            <span className="text-sm font-medium">
                              {skill.name}
                            </span>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Columna de Habilidades Blandas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
          >
            <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              {t("skills_section.soft")}
            </h3>

            <div className="space-y-4">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center gap-3 bg-gray-50 dark:bg-gray-700 rounded-lg p-4 transition-colors hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  <div className="h-2 w-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500" />
                  <p className="text-sm">{skill}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
