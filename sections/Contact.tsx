"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { personalInfo } from "@/lib/data";

const formatUrl = (url: string) => url.replace(/^https?:\/\//, "").replace(/\/$/, "");

const ensureProtocol = (url: string) =>
  url.startsWith("http://") || url.startsWith("https://") ? url : `https://${url}`;

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone.replace(/\s/g, "")}`,
  },
  {
    icon: Github,
    label: "GitHub",
    value: formatUrl(ensureProtocol(personalInfo.github)),
    href: ensureProtocol(personalInfo.github),
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: formatUrl(ensureProtocol(personalInfo.linkedin)),
    href: ensureProtocol(personalInfo.linkedin),
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-20 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center md:mb-12"
        >
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-accent sm:text-sm">
            Conectemos
          </p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">Contacto</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted sm:text-base">
            ¿Tienes un proyecto en mente o una oportunidad? Estoy disponible para conversar.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid gap-3 sm:grid-cols-2 sm:gap-4"
        >
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex min-w-0 items-center gap-3 rounded-2xl border border-white/[0.08] bg-surface-elevated/60 p-4 backdrop-blur-sm transition-all hover:border-accent/30 hover:bg-surface-elevated sm:gap-4 sm:p-5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 transition-colors group-hover:bg-accent/20 sm:h-12 sm:w-12">
                <link.icon className="h-4 w-4 text-accent sm:h-5 sm:w-5" />
              </div>
              <div className="min-w-0 overflow-hidden">
                <p className="text-xs text-muted sm:text-sm">{link.label}</p>
                <p className="break-all text-sm font-medium text-foreground sm:text-base">{link.value}</p>
              </div>
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 border-t border-white/[0.08] pt-8 text-center"
        >
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} {personalInfo.name}. Todos los derechos reservados.
          </p>
          <p className="mt-1 text-xs text-muted/60">
            Construido con Next.js, React Three Fiber y Tailwind CSS.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
