import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Languages, Menu, Moon, Sun, X } from "lucide-react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { getActiveSectionId, scrollToId } from "@/lib/scroll";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved !== null) {
      return JSON.parse(saved);
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const currentLanguage = i18n.language.startsWith("en") ? "en" : "es";

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  useEffect(() => {
    document.documentElement.lang = currentLanguage;
  }, [currentLanguage]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const onScroll = () => {
      setActiveSection(getActiveSectionId());
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const goToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault();
    setActiveSection(id);
    setIsMobileMenuOpen(false);
    scrollToId(id);
  };

  const navLinks = [
    { href: "#home", text: t("home") },
    { href: "#projects", text: t("projects") },
    { href: "#skills", text: t("skills") },
    { href: "#about", text: t("about") },
    { href: "#contact", text: t("contact") },
  ];

  const controlButtonClass =
    "inline-flex h-9 w-9 items-center justify-center rounded-full text-foreground/80 transition-colors hover:bg-foreground/10 hover:text-foreground cursor-pointer";

  return (
    <>
      <header className="fixed top-4 left-1/2 z-50 w-[min(92%,760px)] -translate-x-1/2">
        <nav className="flex items-center justify-between gap-3 rounded-full border border-border/80 bg-background/80 px-3 py-2 shadow-lg shadow-black/5 backdrop-blur-xl dark:shadow-black/30">
          <a
            href="#home"
            onClick={(e) => goToSection(e, "home")}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-foreground text-sm font-semibold text-background"
            aria-label="Julian Alvarez"
          >
            JA
          </a>

          <LayoutGroup>
            <div className="relative hidden items-center md:flex">
              {navLinks.map((link) => {
                const id = link.href.slice(1);
                const isActive = activeSection === id;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => goToSection(e, id)}
                    className={`relative z-10 px-3 py-1.5 text-sm transition-colors ${
                      isActive
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 -z-10 rounded-full bg-foreground/10"
                        transition={{
                          type: "spring",
                          stiffness: 420,
                          damping: 32,
                        }}
                      />
                    )}
                    {link.text}
                  </a>
                );
              })}
            </div>
          </LayoutGroup>

          <div className="flex items-center gap-1">
            <button
              onClick={() =>
                changeLanguage(currentLanguage === "en" ? "es" : "en")
              }
              className="hidden h-9 cursor-pointer items-center gap-1.5 rounded-full px-2.5 text-xs font-medium text-foreground/80 transition-colors hover:bg-foreground/10 hover:text-foreground md:inline-flex"
              aria-label={t("nav.toggle_language")}
            >
              <Languages size={16} />
              {currentLanguage === "en" ? "ES" : "EN"}
            </button>
            <button
              onClick={toggleDarkMode}
              className={controlButtonClass}
              aria-label={t("nav.toggle_theme")}
            >
              {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              className={`${controlButtonClass} md:hidden`}
              aria-label={t("nav.toggle_menu")}
            >
              {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
              className="absolute inset-x-4 top-20 rounded-3xl border border-border bg-background/95 p-6 shadow-2xl backdrop-blur-xl"
            >
              <div className="space-y-1">
                {navLinks.map((link) => {
                  const id = link.href.slice(1);
                  const isActive = activeSection === id;
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => goToSection(e, id)}
                      className="relative block px-4 py-3 text-lg"
                    >
                      {isActive && (
                        <motion.span
                          layoutId="nav-pill-mobile"
                          className="absolute inset-0 rounded-2xl bg-foreground/10"
                          transition={{
                            type: "spring",
                            stiffness: 420,
                            damping: 32,
                          }}
                        />
                      )}
                      <span
                        className={`relative z-10 ${
                          isActive ? "text-foreground" : "text-muted-foreground"
                        }`}
                      >
                        {link.text}
                      </span>
                    </a>
                  );
                })}
              </div>
              <div className="mt-6 flex gap-3 border-t border-border pt-6">
                <button
                  onClick={() => {
                    changeLanguage(currentLanguage === "en" ? "es" : "en");
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-full border border-border px-4 py-3 text-sm"
                >
                  <Languages size={16} />
                  {currentLanguage === "en" ? "Español" : "English"}
                </button>
                <button
                  onClick={() => {
                    toggleDarkMode();
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-border"
                  aria-label={t("nav.toggle_theme")}
                >
                  {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
