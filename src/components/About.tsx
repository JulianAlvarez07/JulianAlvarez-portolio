import perfilImage from "../assets/images/perfil.jpeg";

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Sobre mí</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center max-w-6xl mx-auto">
        {/* Imagen */}
        <div className="flex justify-center lg:justify-end">
          <div className="w-80 h-80 overflow-hidden rounded-lg shadow-lg">
            <img
              src={perfilImage}
              alt="Julian Alvarez"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Contenido de texto */}
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              ¡Hola! Soy Julian
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Soy un desarrollador Front-End apasionado por crear experiencias
              digitales excepcionales. Me especializo en React, TypeScript y
              tecnologías modernas de desarrollo web.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Mi enfoque se centra en escribir código limpio, crear interfaces
              intuitivas y colaborar en equipos multidisciplinarios para
              entregar productos de calidad.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Cuando no estoy programando, disfruto aprender nuevas tecnologías,
              contribuir a proyectos open source y mantenerme actualizado con
              las últimas tendencias del desarrollo web.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-6">
            <div>
              <h4 className="font-semibold">Ubicación</h4>
              <p className="text-gray-600 dark:text-gray-300">Argentina</p>
            </div>
            <div>
              <h4 className="font-semibold">Email</h4>
              <p className="text-gray-600 dark:text-gray-300">
                alvarezjuli30@email.com
              </p>
            </div>
            <div>
              <h4 className="font-semibold">Experiencia programando</h4>
              <p className="text-gray-600 dark:text-gray-300">4+ años</p>
            </div>
            <div>
              <h4 className="font-semibold">Estado</h4>
              <p className="text-green-600 dark:text-green-400">Disponible</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
