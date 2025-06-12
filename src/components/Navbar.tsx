import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Moon, Sun, Languages, Menu, X } from "lucide-react";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Verificar si hay una preferencia guardada o usar la preferencia del sistema
    const saved = localStorage.getItem("darkMode");
    if (saved !== null) {
      return JSON.parse(saved);
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const currentLanguage = i18n.language;

  useEffect(() => {
    // Aplicar el modo al cargar
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    // Guardar la preferencia
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  // Prevenir scroll horizontal cuando el menú está abierto

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false); // Cerrar menú móvil al navegar
  };

  const navLinks = [
    { href: "#home", text: t("home") },
    { href: "#projects", text: t("projects") },
    { href: "#skills", text: t("skills") },
    { href: "#about", text: t("about") },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 hidden md:block">
        <div className="flex justify-between items-center gap-4 p-4 border border-gray-400 rounded-full bg-gray-900/90 backdrop-blur-sm text-gray-100 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href.slice(1))}
              className="hover:text-blue-400 transition-colors whitespace-nowrap"
            >
              {link.text}
            </a>
          ))}

          <div className="flex items-center gap-2 border-l border-gray-400 pl-4">
            <button
              onClick={() =>
                changeLanguage(currentLanguage === "en" ? "es" : "en")
              }
              className="flex items-center gap-2 px-2 py-1 rounded transition-colors hover:text-blue-400 hover:bg-gray-800"
            >
              <Languages size={16} />
              {currentLanguage === "en" ? "ES" : "EN"}
            </button>
            <button
              onClick={toggleDarkMode}
              className="flex items-center justify-center p-2 rounded-full hover:bg-gray-800 transition-colors"
            >
              {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="fixed top-4 right-4 z-50 md:hidden">
        <button
          onClick={toggleMobileMenu}
          className="p-3 border border-gray-400 rounded-full bg-gray-900/90 backdrop-blur-sm text-gray-100 shadow-lg hover:bg-gray-800 transition-colors"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden overflow-y-auto overflow-x-hidden">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={toggleMobileMenu}
          ></div>

          {/* Menu Content */}
          <div className="relative min-h-screen flex items-start justify-center pt-20 px-4">
            <div className="w-full max-w-sm bg-gray-900/95 backdrop-blur-sm border border-gray-400 rounded-2xl shadow-xl p-6">
              <div className="space-y-6">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href.slice(1))}
                    className="block text-xl text-center text-gray-100 hover:text-blue-400 transition-colors py-3 border-b border-gray-700 last:border-b-0"
                  >
                    {link.text}
                  </a>
                ))}

                <div className="border-t border-gray-600 pt-6 flex justify-center gap-4">
                  <button
                    onClick={() => {
                      changeLanguage(currentLanguage === "en" ? "es" : "en");
                      setIsMobileMenuOpen(false);
                    }}
                    className="flex items-center gap-2 px-4 py-3 rounded-full bg-gray-800 text-gray-100 hover:bg-gray-700 transition-colors"
                  >
                    <Languages size={18} />
                    {currentLanguage === "en" ? "ES" : "EN"}
                  </button>
                  <button
                    onClick={() => {
                      toggleDarkMode();
                      setIsMobileMenuOpen(false);
                    }}
                    className="flex items-center justify-center p-3 rounded-full bg-gray-800 text-gray-100 hover:bg-gray-700 transition-colors"
                  >
                    {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
