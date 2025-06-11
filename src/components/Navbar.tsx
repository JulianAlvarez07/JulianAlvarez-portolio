import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Moon, Sun, Languages } from "lucide-react";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const currentLanguage = i18n.language;

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex justify-center align-center items-center p-4">
      <div className="flex justify-between align-center items-center gap-4 p-4 border border-gray-500 rounded-full">
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, "home")}
          className="hover:text-gray-600 transition-colors"
        >
          {t("home")}
        </a>
        <a
          href="#about"
          onClick={(e) => scrollToSection(e, "about")}
          className="hover:text-gray-600 transition-colors"
        >
          {t("about")}
        </a>
        <a
          href="#projects"
          onClick={(e) => scrollToSection(e, "projects")}
          className="hover:text-gray-600 transition-colors"
        >
          {t("projects")}
        </a>
        <a
          href="#skills"
          onClick={(e) => scrollToSection(e, "skills")}
          className="hover:text-gray-600 transition-colors"
        >
          {t("skills")}
        </a>
        <a
          href="#education"
          onClick={(e) => scrollToSection(e, "education")}
          className="hover:text-gray-600 transition-colors"
        >
          {t("education")}
        </a>
        <a
          href="#contact"
          onClick={(e) => scrollToSection(e, "contact")}
          className="hover:text-gray-600 transition-colors"
        >
          {t("contact")}
        </a>
        <div className="flex items-center gap-2 border-l border-gray-500 pl-4">
          <button
            onClick={() =>
              changeLanguage(currentLanguage === "en" ? "es" : "en")
            }
            className="flex items-center gap-2 px-2 py-1 rounded transition-colors hover:text-gray-600"
          >
            <Languages size={16} />
            {currentLanguage === "en" ? "ES" : "EN"}
          </button>
          <button
            onClick={toggleDarkMode}
            className="flex items-center justify-center hover:text-gray-600 transition-colors"
          >
            {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
