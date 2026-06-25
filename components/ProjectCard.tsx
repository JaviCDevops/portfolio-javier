"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface ProjectCardProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    name: string;
    role: string;
    period: string;
    location: string;
    description: string;
    highlights: string[];
    technologies: string[];
    color: string;
    logo?: string;
  } | null;
}

export function ProjectCard({ isOpen, onClose, project }: ProjectCardProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-3 backdrop-blur-sm sm:p-4"
          onClick={onClose}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-white/[0.08] bg-surface-elevated p-4 shadow-2xl sm:p-6 md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute right-3 top-3 rounded-full p-2 text-muted transition-colors hover:bg-white/10 hover:text-foreground sm:right-4 sm:top-4"
              aria-label="Cerrar"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="mb-4 flex items-center gap-3 sm:gap-4">
              {project.logo ? (
                <img
                  src={project.logo}
                  alt={project.name}
                  className="h-12 w-12 object-contain sm:h-14 sm:w-14"
                />
              ) : (
                <div
                  className="h-4 w-4 rounded-full shadow-[0_0_12px]"
                  style={{ backgroundColor: project.color, boxShadow: `0 0 12px ${project.color}` }}
                />
              )}
              <div>
                <h3 className="text-xl font-bold text-foreground sm:text-2xl">{project.name}</h3>
                <p className="text-xs text-muted sm:text-sm">{project.role}</p>
              </div>
            </div>

            <p className="mb-1 text-accent">{project.role}</p>
            <p className="mb-4 text-sm text-muted">
              {project.period} · {project.location}
            </p>

            <p className="mb-6 leading-relaxed text-foreground/90">{project.description}</p>

            <div className="mb-6">
              <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted">
                Logros destacados
              </h4>
              <ul className="space-y-2">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-foreground/80">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted">
                Tecnologías
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/[0.08] bg-background px-3 py-1 text-xs font-medium text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
