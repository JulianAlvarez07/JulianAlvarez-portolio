import aboutImage from "../assets/images/about-image.jpeg";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import SectionHeading from "./SectionHeading";

const About = () => {
  const { t } = useTranslation();

  const renderWithHighlights = (text: string, tokens: string[]) => {
    const escaped = tokens.map((token) =>
      token.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
    );
    const pattern = new RegExp(`(${escaped.join("|")})`);
    return text.split(pattern).map((part, index) => {
      if (tokens.includes(part)) {
        const key = part.replace(/[{}]/g, "");
        return (
          <span key={`${part}-${index}`} className="font-medium text-accent-color">
            {t(`about_section.${key}`)}
          </span>
        );
      }
      return part;
    });
  };

  const facts = [
    { label: t("about_section.location_title"), value: t("about_section.location") },
    {
      label: t("about_section.education_title"),
      value: t("about_section.education"),
    },
    {
      label: t("about_section.experience_title"),
      value: t("about_section.experience"),
    },
    {
      label: t("about_section.languages_title"),
      value: t("about_section.languages"),
    },
    { label: t("about_section.email_title"), value: t("about_section.email") },
    {
      label: t("about_section.status_title"),
      value: t("about_section.status"),
      accent: true,
    },
  ];

  return (
    <section id="about" className="scroll-mt-28 px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={t("about")}
          title={t("about_section.title")}
          description={t("about_section.subtitle")}
        />

        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="overflow-hidden rounded-3xl border border-border shadow-xl">
              <img
                src={aboutImage}
                alt={t("about_section.alt_image")}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-2xl font-semibold tracking-tight text-foreground">
              {t("about_section.greeting")}
            </h3>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                {renderWithHighlights(t("about_section.paragraph1"), [
                  "{degree}",
                  "{university}",
                ])}
              </p>
              <p>
                {renderWithHighlights(t("about_section.paragraph2"), [
                  "{fullstack}",
                  "{react}",
                  "{ai}",
                ])}
              </p>
              <p>
                {renderWithHighlights(t("about_section.paragraph3"), [
                  "{first_job}",
                ])}
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-2xl border border-border bg-surface px-4 py-4"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    {fact.label}
                  </p>
                  <p
                    className={`mt-1 text-sm ${
                      fact.accent
                        ? "font-medium text-emerald-600 dark:text-emerald-400"
                        : "text-foreground"
                    }`}
                  >
                    {fact.value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
