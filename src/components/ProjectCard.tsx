import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useTranslation } from "react-i18next";

interface Technology {
  name: string;
  icon?: ReactNode;
}

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  technologies: Technology[];
  liveUrl?: string;
  githubUrl?: string;
  badge?: string;
  featured?: boolean;
  meta?: string;
  highlights?: string[];
}

const ProjectCard = ({
  image,
  title,
  description,
  technologies,
  liveUrl,
  githubUrl,
  badge,
  featured = false,
  meta,
  highlights = [],
}: ProjectCardProps) => {
  const { t } = useTranslation();

  if (featured) {
    return (
      <article className="overflow-hidden rounded-3xl border border-border bg-surface shadow-sm transition-shadow duration-300 hover:shadow-xl">
        <div className="grid lg:grid-cols-2">
          <div className="aspect-[16/10] overflow-hidden lg:aspect-auto lg:h-full lg:min-h-[420px]">
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
            {badge && (
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent-color">
                {badge}
              </p>
            )}
            <h3 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {title}
            </h3>
            {meta && (
              <p className="mt-2 text-sm text-muted-foreground">{meta}</p>
            )}
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {description}
            </p>
            {highlights.length > 0 && (
              <ul className="mt-5 space-y-2.5">
                {highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-3 text-sm leading-relaxed text-foreground/90"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-color" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            )}
            <div className="mt-6 flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech.name}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/70 px-2.5 py-1 text-xs text-muted-foreground"
                >
                  {tech.icon && <span className="text-sm">{tech.icon}</span>}
                  {tech.name}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {liveUrl && (
                <Button
                  className="cursor-pointer bg-foreground text-background hover:bg-foreground/90"
                  onClick={() =>
                    window.open(liveUrl, "_blank", "noopener,noreferrer")
                  }
                >
                  <ExternalLink className="h-4 w-4" />
                  {t("projects_section.project_card.view_project")}
                </Button>
              )}
              {githubUrl && (
                <Button
                  variant="outline"
                  className="cursor-pointer"
                  onClick={() =>
                    window.open(githubUrl, "_blank", "noopener,noreferrer")
                  }
                >
                  <Github className="h-4 w-4" />
                  {t("projects_section.project_card.github")}
                </Button>
              )}
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {badge && (
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent-color">
            {badge}
          </p>
        )}
        <h3 className="text-xl font-semibold tracking-tight text-foreground">
          {title}
        </h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech.name}
              className="inline-flex items-center gap-1.5 rounded-full border border-border px-2 py-1 text-[11px] text-muted-foreground"
            >
              {tech.icon && <span className="text-sm">{tech.icon}</span>}
              {tech.name}
            </span>
          ))}
        </div>
        {(liveUrl || githubUrl) && (
          <div className="mt-auto flex gap-2 pt-6">
            {liveUrl && (
              <Button
                size="sm"
                className="flex-1 cursor-pointer bg-foreground text-background hover:bg-foreground/90"
                onClick={() =>
                  window.open(liveUrl, "_blank", "noopener,noreferrer")
                }
              >
                <ExternalLink className="h-4 w-4" />
                {t("projects_section.project_card.view_project")}
              </Button>
            )}
            {githubUrl && (
              <Button
                variant="outline"
                size="sm"
                className="flex-1 cursor-pointer"
                onClick={() =>
                  window.open(githubUrl, "_blank", "noopener,noreferrer")
                }
              >
                <Github className="h-4 w-4" />
                {t("projects_section.project_card.github")}
              </Button>
            )}
          </div>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
