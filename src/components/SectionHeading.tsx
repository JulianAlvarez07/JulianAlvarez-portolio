import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  descriptionClassName?: string;
}

const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "left",
  descriptionClassName,
}: SectionHeadingProps) => {
  const alignment = align === "center" ? "text-center mx-auto" : "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={`mb-12 lg:mb-16 max-w-2xl ${alignment}`}
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-accent-color">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-[2.6rem]">
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            descriptionClassName ?? "text-muted-foreground"
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
