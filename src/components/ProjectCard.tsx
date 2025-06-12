import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

interface Technology {
  name: string;
  icon: React.ReactNode;
}

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  technologies: Technology[];
  liveUrl?: string;
  githubUrl?: string;
}

const ProjectCard = ({
  image,
  title,
  description,
  technologies,
  liveUrl,
  githubUrl,
}: ProjectCardProps) => {
  return (
    <Card className="w-full max-w-sm overflow-hidden">
      {/* Imagen del proyecto */}
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Contenido */}
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <CardContent>
        {/* Tecnologías */}
        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground">
            Tecnologías:
          </p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="flex items-center gap-1 px-2 py-1 bg-secondary rounded-md text-xs"
              >
                <span className="text-sm">{tech.icon}</span>
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>

      {/* Botones */}
      <CardFooter className="gap-2">
        {liveUrl && (
          <Button
            variant="default"
            size="sm"
            className="flex-1 cursor-pointer"
            onClick={() => window.open(liveUrl, "_blank")}
          >
            <ExternalLink className="w-4 h-4" />
            Ver proyecto
          </Button>
        )}
        {githubUrl && (
          <Button
            variant="outline"
            size="sm"
            className="flex-1 cursor-pointer"
            onClick={() => window.open(githubUrl, "_blank")}
          >
            <Github className="w-4 h-4" />
            GitHub
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
