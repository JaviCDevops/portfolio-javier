"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award } from "lucide-react";
import { experience, education, certifications } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="relative py-20 md:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center md:mb-16"
        >
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-accent sm:text-sm">
            Trayectoria
          </p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Experiencia y Educación
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-10 top-0 h-full w-px bg-gradient-to-b from-accent/50 via-white/10 to-transparent md:left-1/2" />

          {experience.map((item, index) => (
            <motion.div
              key={item.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative mb-12 flex flex-col gap-4 md:flex-row ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1" />
              <div className="absolute left-10 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center overflow-hidden rounded-full md:h-16 md:w-16 md:left-1/2">
                {item.logo ? (
                  <img src={item.logo} alt={item.company} className="h-full w-full rounded-full object-contain shadow-[0_0_20px_rgba(34,211,238,0.15)]" />
                ) : (
                  <div className="flex h-full w-full items-center justify-center rounded-full border border-white/[0.08] bg-surface-elevated shadow-[0_0_20px_rgba(34,211,238,0.15)]">
                    <Briefcase className="h-5 w-5 text-accent md:h-6 md:w-6" />
                  </div>
                )}
              </div>
              <div
                className={`ml-20 flex-1 rounded-2xl border border-white/[0.08] bg-surface-elevated/60 p-4 backdrop-blur-sm sm:p-6 md:ml-0 ${
                  index % 2 === 0 ? "md:mr-12 md:text-right" : "md:ml-12"
                }`}
              >
                <span className="text-sm font-medium text-accent">{item.period}</span>
                <h3 className="mt-1 text-xl font-bold text-foreground">{item.title}</h3>
                <p className="text-muted">{item.company}</p>
                <p className="mt-3 text-sm text-foreground/80">{item.summary}</p>
              </div>
            </motion.div>
          ))}

          {education.map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative mb-12 flex flex-col gap-4 md:flex-row-reverse"
            >
              <div className="flex-1" />
              <div className="absolute left-10 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border border-white/[0.08] bg-surface-elevated shadow-[0_0_20px_rgba(167,139,250,0.15)] md:h-16 md:w-16 md:left-1/2">
                <GraduationCap className="h-5 w-5 text-[#a78bfa] md:h-6 md:w-6" />
              </div>
              <div className="ml-20 flex-1 rounded-2xl border border-white/[0.08] bg-surface-elevated/60 p-4 backdrop-blur-sm sm:p-6 md:mr-12 md:ml-0 md:text-right">
                <span className="text-sm font-medium text-[#a78bfa]">{item.period}</span>
                <h3 className="mt-1 text-xl font-bold text-foreground">{item.title}</h3>
                <p className="text-muted">{item.institution}</p>
                <p className="mt-1 text-sm text-foreground/80">{item.detail}</p>
              </div>
            </motion.div>
          ))}

          {certifications.map((cert) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative flex flex-col gap-4 md:flex-row"
            >
              <div className="flex-1" />
              <div className="absolute left-10 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border border-white/[0.08] bg-surface-elevated shadow-[0_0_20px_rgba(251,191,36,0.15)] md:h-16 md:w-16 md:left-1/2">
                <Award className="h-5 w-5 text-[#fbbf24] md:h-6 md:w-6" />
              </div>
              <div className="ml-20 flex-1 rounded-2xl border border-white/[0.08] bg-surface-elevated/60 p-4 backdrop-blur-sm sm:p-6 md:ml-12">
                <span className="text-sm font-medium text-[#fbbf24]">Certificación</span>
                <h3 className="mt-1 text-lg font-bold text-foreground">{cert.name}</h3>
                <p className="text-muted">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
