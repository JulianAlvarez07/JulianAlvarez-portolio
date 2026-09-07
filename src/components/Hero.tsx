import { Button } from "@/components/ui/button";
import perfilImage from "../assets/images/perfil.jpeg";
import { motion } from "framer-motion";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { Download, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
import { scrollToId } from "@/lib/scroll";

const Hero = () => {
  const { t } = useTranslation();
  const highlightsRaw = t("hero.highlights", { returnObjects: true });
  const highlights = Array.isArray(highlightsRaw) ? highlightsRaw : [];

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center px-5 pt-28 pb-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-3 py-1.5 text-sm text-muted-foreground backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            {t("hero.available")}
          </div>

          <p className="mb-2 text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
            {t("hero.greeting")}
          </p>
          <h1 className="text-5xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Julian Alvarez
          </h1>
          <h2 className="mt-4 text-xl font-medium text-foreground/70 sm:text-2xl">
            {t("hero.role")}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {t("hero.description")}
          </p>
          <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 shrink-0" />
            {t("hero.location")}
          </p>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
            {t("hero.education_status")}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {highlights.map((item) => (
              <span
                key={item}
                className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-foreground/80"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 space-y-3">
            <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
              <Button
                className="h-11 cursor-pointer bg-foreground px-2 text-xs text-background hover:bg-foreground/90 sm:h-10 sm:px-5 sm:text-sm"
                onClick={() => scrollToId("projects")}
              >
                {t("hero.view_projects")}
              </Button>
              <Button
                variant="outline"
                className="h-11 cursor-pointer px-2 text-xs sm:h-10 sm:px-5 sm:text-sm"
                onClick={() => window.open("/julian-alvarez-cv.pdf", "_blank")}
              >
                <Download className="h-4 w-4" />
                {t("hero.download_cv")}
              </Button>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                className="h-10 w-10 cursor-pointer"
                aria-label="LinkedIn"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/julian-alvarez-285882249/",
                    "_blank",
                    "noopener,noreferrer",
                  )
                }
              >
                <SiLinkedin className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-10 w-10 cursor-pointer"
                aria-label="GitHub"
                onClick={() =>
                  window.open(
                    "https://github.com/JulianAlvarez07",
                    "_blank",
                    "noopener,noreferrer",
                  )
                }
              >
                <SiGithub className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative h-72 w-60 sm:h-80 sm:w-72 lg:h-[26rem] lg:w-80">
            <img
              src={perfilImage}
              alt={t("hero.alt_profile")}
              className="h-full w-full rounded-2xl object-cover object-[center_20%]"
            />
            <span className="pointer-events-none absolute -inset-[5px] rounded-[1.15rem] border border-white shadow-[0_0_24px_rgba(255,255,255,0.28)]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
