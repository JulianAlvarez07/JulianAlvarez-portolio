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

const Skills = () => {
  // Datos de habilidades técnicas con iconos y colores
  const technicalSkills = {
    "FRONT-END": [
      { name: "HTML5", icon: SiHtml5, color: "text-orange-600" },
      { name: "CSS3", icon: SiCss3, color: "text-blue-600" },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
      { name: "React", icon: SiReact, color: "text-cyan-500" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-500" },
    ],
    "BACK-END": [
      { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
      {
        name: "Express",
        icon: SiExpress,
        color: "text-gray-600 dark:text-gray-400",
      },
      { name: "Python", icon: SiPython, color: "text-yellow-500" },
    ],
    "BASE DE DATOS": [
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-700" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
      { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
    ],
    "OTRAS HERRAMIENTAS": [
      { name: "Git", icon: SiGit, color: "text-orange-600" },
      { name: "Docker", icon: SiDocker, color: "text-blue-600" },
      { name: "Figma", icon: SiFigma, color: "text-orange-500" },
    ],
  };

  // Habilidades blandas
  const softSkills = [
    "Comunicación efectiva y trabajo en equipo.",
    "Escucha activa.",
    "Aprendizaje autónomo y continuo.",
    "Adaptabilidad al cambio.",
    "Responsabilidad personal y compromiso académico.",
    "Pensamiento analítico y enfoque en soluciones.",
  ];

  return (
    <section id="skills" className="py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-12 text-center text-[#262626] dark:text-[#ffedd5]"
      >
        HABILIDADES
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-4xl mx-auto">
        {/* Columna de Habilidades Técnicas */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-2 border-gray-300 dark:border-gray-600 rounded-lg p-3"
        >
          <h3 className="text-lg font-semibold text-center mb-3 font-mono">
            TÉCNICAS
          </h3>

          {Object.entries(technicalSkills).map(([category, skills]) => (
            <div key={category} className="mb-3">
              <h4 className="text-sm font-medium mb-1.5">{category}</h4>
              <div className="grid grid-cols-3 gap-1.5">
                {skills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="font-montserrat rounded-lg p-1.5 h-12 flex flex-col items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                        <IconComponent className={`text-lg ${skill.color}`} />
                        <span className="text-xs font-medium leading-none mt-1">
                          {skill.name}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Columna de Habilidades Blandas */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border-2 border-gray-300 dark:border-gray-600 rounded-lg p-3"
        >
          <h3 className="text-lg font-semibold text-center mb-3">BLANDAS</h3>

          <div className="space-y-2">
            {softSkills.map((skill, index) => (
              <div key={index} className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full flex-shrink-0 mt-1.5"></div>
                <span className="text-sm leading-relaxed">{skill}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
