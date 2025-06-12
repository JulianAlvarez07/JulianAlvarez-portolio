import { Button } from "@/components/ui/button";
import perfilImage from "../assets/images/perfil.jpeg";

const Hero = () => {
  return (
    <section id="home" className="flex justify-center pt-12">
      <div className="flex flex-col gap-12 lg:flex-row lg:gap-24">
        {/* Contenido del perfil */}
        <div>
          <p>Bienvenido ni nombre es:</p>
          <h1 className="text-2xl lg:text-6xl font-bold text-accent-color">
            Julian Alvarez
          </h1>
          <p className="text-xl lg:text-xl pt-2">Desarrollador Front-End</p>
          <p className="text-xxl lg:text-xl">
            Apasionado por la tecnología y el desarrollo web
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="#projects">
              <Button className="cursor-pointer">Ver mis proyectos</Button>
            </a>
            <Button variant="outline" className="cursor-pointer">
              Descargar CV
            </Button>
          </div>
        </div>

        {/* Imagen de perfil */}
        <div className="flex justify-center">
          <img
            src={perfilImage}
            alt="Julian Alvarez"
            className="w-48 h-48 rounded-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
