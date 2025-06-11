// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(HttpBackend) // carga los archivos JSON
  .use(LanguageDetector) // detecta el idioma del navegador
  .use(initReactI18next) // conecta con React
  .init({
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false, // React ya hace el escape
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json",
    },
  });

export default i18n;
