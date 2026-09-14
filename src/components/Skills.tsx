import {
  SiCss3,
  SiDocker,
  SiExpress,
  SiFigma,
  SiGit,
  SiGithubcopilot,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiOpenai,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import SectionHeading from "./SectionHeading";

const CursorLogo = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    className={className}
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M11.925 24 22.35 18l-10.425-6L1.5 18l10.425 6Z" />
    <path d="M22.35 18V6L11.925 0v12l10.425 6Z" opacity="0.8" />
    <path d="M11.925 0 1.5 6v12l10.425-6V0Z" opacity="0.6" />
    <path d="m22.35 6-10.425 18V12L22.35 6Z" />
    <path d="m22.35 6-10.425 6L1.5 6h20.85Z" opacity="0.6" />
  </svg>
);

const Skills = () => {
  const { t } = useTranslation();

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
      { name: "Express", icon: SiExpress, color: "text-zinc-500" },
      { name: "Python", icon: SiPython, color: "text-yellow-500" },
    ],
    [t("skills_section.categories.database")]: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-700" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
      { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
    ],
    [t("skills_section.categories.ai")]: [
      { name: "Cursor", icon: CursorLogo, color: "text-foreground" },
      { name: "ChatGPT", icon: SiOpenai, color: "text-foreground" },
      {
        name: "GitHub Copilot",
        icon: SiGithubcopilot,
        color: "text-foreground",
      },
    ],
    [t("skills_section.categories.tools")]: [
      { name: "Git", icon: SiGit, color: "text-orange-600" },
      { name: "Docker", icon: SiDocker, color: "text-blue-600" },
      { name: "Figma", icon: SiFigma, color: "text-orange-500" },
    ],
  };

  const softSkills = t("skills_section.soft_skills", {
    returnObjects: true,
  }) as string[];

  return (
    <section
      id="skills"
      className="scroll-mt-28 px-5 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={t("skills")}
          title={t("skills_section.title")}
          description={t("skills_section.subtitle")}
        />

        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {Object.entries(technicalSkills).map(([category, skills]) => (
              <div key={category}>
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {skills.map((skill) => {
                    const IconComponent = skill.icon;
                    return (
                      <div
                        key={skill.name}
                        className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-2 text-sm transition-colors hover:border-accent-color/40"
                      >
                        <IconComponent className={`text-lg ${skill.color}`} />
                        <span>{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-3xl border border-border bg-surface p-6 sm:p-8"
          >
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              {t("skills_section.soft")}
            </h3>
            <div className="space-y-3">
              {softSkills.map((skill) => (
                <div
                  key={skill}
                  className="flex items-start gap-3 rounded-2xl bg-background/70 px-4 py-3"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-color" />
                  <p className="text-sm leading-relaxed text-foreground/90">
                    {skill}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
