import aboutImage from "../assets/images/about-image.jpeg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4 text-[#262626] dark:text-[#ffedd5]"
        >
          SOBRE MÍ
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center max-w-6xl mx-auto">
        {/* Imagen */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="w-72 h-72 overflow-hidden rounded-lg shadow-lg">
            <img
              src={aboutImage}
              alt="Julian Alvarez"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Contenido de texto */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              ¡Hola! Soy Julian
            </h3>
            <p className="text-md text-gray-600 dark:text-gray-300 leading-relaxed mb-4 text-justify">
              Actualmente tengo 22 años y estoy finalizando la{" "}
              <span className="text-accent-color font-semibold">
                {" "}
                Tecnicatura Universitaria en Programación Full Stack
              </span>{" "}
              en la{" "}
              <span className="text-accent-color font-semibold">
                Universidad Nacional de Hurlingham
              </span>
              , carrera que comencé en marzo de 2022.
            </p>
            <p className="text-md text-gray-600 dark:text-gray-300 leading-relaxed mb-4 text-justify">
              A lo largo de la tecnicatura adquirí conocimientos tanto del
              desarrollo front-end como back-end, pero en este último tiempo
              decidí enfocarme principalmente en el
              <span className="text-accent-color font-semibold">
                {" "}
                desarrollo front-end
              </span>
              , especializándome en{" "}
              <span className="text-accent-color font-semibold"> react</span> y
              en la creación de interfaces modernas, responsivas y centradas en
              la experiencia de usuario.
            </p>
            <p className="text-md text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
              Me apasiona resolver problemas con código, aprender tecnologías
              nuevas y colaborar en proyectos reales que generen impacto. Estoy
              en búsqueda de mi{" "}
              <span className="text-accent-color font-semibold">
                {" "}
                primera experiencia profesional como desarrollador front-end{" "}
              </span>
              , donde pueda aportar mis habilidades y seguir creciendo en
              equipo.
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
        </motion.div>
      </div>
    </section>
  );
};

export default About;
