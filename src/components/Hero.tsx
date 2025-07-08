import { Button } from "@/components/ui/button";
import perfilImage from "../assets/images/perfil.jpeg";
import { motion } from "framer-motion";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { Download } from "lucide-react";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="flex items-center justify-center px-6 lg:px-8 py-12 lg:py-24"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col-reverse lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Contenido del perfil */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-lg"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-sm lg:text-base text-gray-600 dark:text-gray-400 mb-2"
            >
              {t("hero.greeting")}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl lg:text-7xl font-bold text-accent-color mb-3 leading-tight"
            >
              Julian Alvarez
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl lg:text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-4"
            >
              {t("hero.role")}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-base lg:text-lg text-gray-700 dark:text-gray-300 mb-3 leading-relaxed"
            >
              {t("hero.description")}
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-sm lg:text-base text-gray-600 dark:text-gray-400 mb-8 leading-relaxed"
            >
              {t("hero.education_status")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              {/* Botón destacado de CV */}
              <Button
                className="cursor-pointer bg-accent-color hover:bg-accent-color/90 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex-1 sm:flex-none transform hover:scale-105"
                onClick={() => window.open("/julian-alvarez-cv.pdf", "_blank")}
              >
                <Download className="w-4 h-4 mr-2" />
                {t("hero.download_cv")}
              </Button>

              {/* Botones secundarios */}
              <div className="flex gap-3 flex-1 sm:flex-none">
                <Button
                  variant="outline"
                  size="sm"
                  className="cursor-pointer flex-1 sm:flex-none"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/julian-alvarez-285882249/"
                    )
                  }
                >
                  <SiLinkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="cursor-pointer flex-1 sm:flex-none"
                  onClick={() =>
                    window.open("https://github.com/JulianAlvarez07", "_blank")
                  }
                >
                  <SiGithub className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
              </div>
            </motion.div>
          </motion.div>

          {/* Imagen de perfil */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              <div className="w-56 h-56 lg:w-72 lg:h-72 rounded-full overflow-hidden shadow-2xl ring-4 ring-accent-color/20">
                <img
                  src={perfilImage}
                  alt={t("hero.alt_profile")}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Decoración de fondo */}
              <div className="absolute -inset-4 bg-gradient-to-r from-accent-color/10 to-transparent rounded-full -z-10 blur-xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
