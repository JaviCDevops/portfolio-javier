"use client";

import { useState, useMemo } from "react";
import { OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import { Scene3D } from "@/components/Scene3D";
import { ProjectPedestal } from "@/components/ProjectPedestal";
import { ProjectCard } from "@/components/ProjectCard";
import { useIsMobile } from "@/hooks/useMediaQuery";
import { projects } from "@/lib/data";

export function Gallery3D() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const isMobile = useIsMobile();

  const selectedProject = useMemo(
    () => projects.find((p) => p.id === selectedId) || null,
    [selectedId]
  );

  const positions: [number, number, number][] = useMemo(
    () =>
      isMobile
        ? [
            [0, 1.9, 0],
            [0, -1.9, 0],
          ]
        : [
            [-2.5, 0, 0],
            [2.5, 0, 0],
          ],
    [isMobile]
  );

  const cameraPosition: [number, number, number] = isMobile ? [0, 0, 11] : [0, 1.5, 8];
  const fov = isMobile ? 58 : 45;

  return (
    <section id="gallery" className="relative min-h-screen py-20 md:py-24">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-center md:mb-8"
        >
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-accent sm:text-sm">
            Portafolio
          </p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Proyectos
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted sm:text-base">
            Explora mis proyectos más relevantes. Haz clic en cada logo para conocer los
            detalles, tecnologías y logros.
          </p>
        </motion.div>
      </div>

      <div className="h-[75vh] w-full md:h-[80vh]">
        <Scene3D cameraPosition={cameraPosition} fov={fov}>
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 1.8}
            autoRotate
            autoRotateSpeed={0.5}
          />
          {projects.map((project, index) => (
            <ProjectPedestal
              key={project.id}
              position={positions[index]}
              color={project.color}
              shape={project.shape as "torus" | "box"}
              name={project.name}
              role={project.role}
              logo={project.logo}
              isSelected={selectedId === project.id}
              onClick={() => setSelectedId(project.id === selectedId ? null : project.id)}
            />
          ))}
        </Scene3D>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-6 text-center sm:px-6 md:pb-8">
        <p className="text-xs text-muted sm:text-sm">
          Arrastra para rotar · Haz clic en un proyecto para ver los detalles
        </p>
      </div>

      <ProjectCard
        isOpen={!!selectedProject}
        onClose={() => setSelectedId(null)}
        project={selectedProject}
      />
    </section>
  );
}
