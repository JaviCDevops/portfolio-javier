"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Scene3D } from "@/components/Scene3D";
import { useScrollTo } from "@/hooks/useScrollTo";
import { personalInfo } from "@/lib/data";

export function Hero() {
  const scrollTo = useScrollTo();

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-16"
    >
      <div className="absolute inset-0 z-0">
        <Scene3D cameraPosition={[0, 0, 10]} fov={50}>
          <group />
        </Scene3D>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-accent sm:text-sm sm:mb-4">
            {personalInfo.subtitle}
          </p>
          <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:mb-6 md:text-7xl">
            {personalInfo.name}
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted sm:text-lg md:text-xl">
            {personalInfo.bio}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4"
        >
          <button
            onClick={() => scrollTo("gallery")}
            className="group flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-background transition-transform hover:scale-105 sm:w-auto sm:px-8"
          >
            Explorar proyectos
            <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="w-full rounded-full border border-white/[0.15] bg-white/5 px-6 py-3 font-medium text-foreground backdrop-blur-sm transition-colors hover:bg-white/10 sm:w-auto sm:px-8"
          >
            Contactar
          </button>
        </motion.div>
      </div>

    </section>
  );
}
