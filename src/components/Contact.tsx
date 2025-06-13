import { FaGithub, FaLinkedin, FaEnvelope, FaReact } from "react-icons/fa";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const { t } = useTranslation();

  const handleEmailClick = async () => {
    try {
      await navigator.clipboard.writeText("alvarezjuli30@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <section className="py-8 bg-color border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-4 lg:mb-8 text-[#262626] dark:text-[#ffedd5] text-center">
          {t("contact_section.title")}
        </h2>

        <div className="flex flex-col items-center space-y-6">
          <div className="flex space-x-6">
            <a
              href="https://github.com/JulianAlvarez07"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-gray-600 transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/julian-alvarez-285882249/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-gray-600 transition-colors"
            >
              <FaLinkedin />
            </a>
            <div className="relative">
              <button
                onClick={handleEmailClick}
                className="text-2xl hover:text-gray-600 transition-colors"
              >
                <FaEnvelope />
              </button>
              {copied && (
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-sm whitespace-nowrap">
                  {t("contact_section.copied")}
                </span>
              )}
            </div>
          </div>

          <p className="text-gray-600 text-center">
            {t("contact_section.cta")}
          </p>
          <div>
            <p className="text-center text-sm">
              &copy; {new Date().getFullYear()} Julian Alvarez.{" "}
              {t("footer.copyright")}
            </p>
            <p className="flex items-center justify-center text-center text-sm">
              {t("footer.built_with")}{" "}
              <FaReact className="text-blue-500 ml-2" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
