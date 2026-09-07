import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaEnvelope, FaGithub, FaLinkedin, FaReact } from "react-icons/fa";
import { Check, Copy, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "./SectionHeading";

const EMAIL = "alvarezjuli30@gmail.com";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const { t } = useTranslation();

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <section
      id="contact"
      className="scroll-mt-28 border-t border-border px-5 pt-20 pb-10 sm:px-6 lg:px-8 lg:pt-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={t("contact")}
          title={t("contact_section.title")}
          description={t("contact_section.cta")}
        />

        <div className="rounded-3xl border border-border bg-surface p-6 sm:p-8 lg:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.16em] text-muted-foreground">
                Email
              </p>
              <a
                href={`mailto:${EMAIL}`}
                className="mt-2 block text-2xl font-semibold tracking-tight text-foreground transition-colors hover:text-accent-color sm:text-3xl"
              >
                {EMAIL}
              </a>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                size="lg"
                className="cursor-pointer bg-foreground text-background hover:bg-foreground/90"
                onClick={() => {
                  window.location.href = `mailto:${EMAIL}`;
                }}
              >
                <Mail className="h-4 w-4" />
                {t("contact_section.email_cta")}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="cursor-pointer"
                onClick={handleCopyEmail}
              >
                {copied ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
                {copied
                  ? t("contact_section.copied")
                  : t("contact_section.copy_email")}
              </Button>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 border-t border-border pt-8">
            <a
              href="https://github.com/JulianAlvarez07"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm transition-colors hover:border-accent-color/40 hover:text-accent-color"
            >
              <FaGithub />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/julian-alvarez-285882249/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm transition-colors hover:border-accent-color/40 hover:text-accent-color"
            >
              <FaLinkedin />
              LinkedIn
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm transition-colors hover:border-accent-color/40 hover:text-accent-color"
            >
              <FaEnvelope />
              Email
            </a>
          </div>
        </div>

        <footer className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} Julian Alvarez. {t("footer.copyright")}
          </p>
          <p className="inline-flex items-center gap-2">
            {t("footer.built_with")}
            <FaReact className="text-sky-500" />
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
