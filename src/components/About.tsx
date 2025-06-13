import aboutImage from "../assets/images/about-image.jpeg";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-12 lg:py-20">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4 lg:mb-12 text-[#262626] dark:text-[#ffedd5]"
        >
          {t("about_section.title")}
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center max-w-6xl mx-auto">
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
              alt={t("about_section.alt_image")}
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
              {t("about_section.greeting")}
            </h3>
            <p className="text-md text-gray-600 dark:text-gray-300 leading-relaxed mb-4 text-justify">
              {t("about_section.paragraph1")}
            </p>
            <p className="text-md text-gray-600 dark:text-gray-300 leading-relaxed mb-4 text-justify">
              {t("about_section.paragraph2")}
            </p>
            <p className="text-md text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
              {t("about_section.paragraph3")}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-6">
            <div>
              <h4 className="font-semibold">
                {t("about_section.location_title")}
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                {t("about_section.location")}
              </p>
            </div>
            <div>
              <h4 className="font-semibold">
                {t("about_section.email_title")}
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                {t("about_section.email")}
              </p>
            </div>
            <div>
              <h4 className="font-semibold">
                {t("about_section.experience_title")}
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                {t("about_section.experience")}
              </p>
            </div>
            <div>
              <h4 className="font-semibold">
                {t("about_section.status_title")}
              </h4>
              <p className="text-green-600 dark:text-green-400">
                {t("about_section.status")}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
