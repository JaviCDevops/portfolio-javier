"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { OrbitControls } from "@react-three/drei";
import { Server, Layout, Cloud, Database, CheckCircle } from "lucide-react";
import { Scene3D } from "@/components/Scene3D";
import { SkillOrb } from "@/components/SkillOrb";
import { TechIcon3D } from "@/components/TechIcon3D";
import { useIsMobile } from "@/hooks/useMediaQuery";
import { skillCategories } from "@/lib/data";

const categoryIcons: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  "Backend & Integraciones": Server,
  "Frontend & UI": Layout,
  "Cloud & DevOps": Cloud,
  "Bases de Datos": Database,
  "Calidad & Agilidad": CheckCircle,
};

export function Skills() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const isMobile = useIsMobile();

  const orbPositions = useMemo<[number, number, number][]>(
    () =>
      isMobile
        ? [
            [-2.4, 1.6, 0],
            [0, 1.6, 0],
            [2.4, 1.6, 0],
            [-1.2, -1.3, 0],
            [1.2, -1.3, 0],
          ]
        : [
            [-3, 1, 0],
            [-1.5, -1.2, 0.5],
            [0, 1.2, -0.5],
            [1.5, -1, 0],
            [3, 1.2, 0.5],
          ],
    [isMobile]
  );

  const techNodes = useMemo(() => {
    if (activeIndex === null) return [];
    const center = orbPositions[activeIndex];
    const skills = skillCategories[activeIndex].skills;
    const radius = isMobile ? 1.6 : 2.2;
    const count = skills.length;

    return skills.map((skill, i) => {
      const angle = (i / count) * Math.PI * 2;
      const x = center[0] + Math.cos(angle) * radius;
      const z = center[2] + Math.sin(angle) * radius;
      const y = center[1];
      return {
        name: skill,
        position: [x, y, z] as [number, number, number],
        color: skillCategories[activeIndex].color,
        index: i,
      };
    });
  }, [activeIndex, orbPositions]);

  return (
    <section id="skills" className="relative min-h-screen py-20 md:py-24">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-center md:mb-8"
        >
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-accent sm:text-sm">
            Stack Tecnológico
          </p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Habilidades Técnicas
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted sm:text-base">
            Haz clic en cada categoría para revelar sus tecnologías en 3D.
          </p>
        </motion.div>
      </div>

      <div className="h-[75vh] w-full md:h-[80vh]">
        <Scene3D cameraPosition={[0, 0, isMobile ? 11 : 9]} fov={isMobile ? 58 : 45}>
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            autoRotate
            autoRotateSpeed={0.3}
            minPolarAngle={Math.PI / 2.5}
            maxPolarAngle={Math.PI / 1.7}
          />
          {skillCategories.map((category, index) => (
            <SkillOrb
              key={category.name}
              position={orbPositions[index]}
              color={category.color}
              name={category.name}
              icon={categoryIcons[category.name]}
              onClick={() => setActiveIndex(index === activeIndex ? null : index)}
              isActive={activeIndex === index}
            />
          ))}

          {techNodes.map((tech) => (
            <TechIcon3D
              key={tech.name}
              position={tech.position}
              color={tech.color}
              name={tech.name}
              index={tech.index}
            />
          ))}
        </Scene3D>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: activeIndex !== null ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="min-h-[80px] rounded-2xl border border-white/[0.08] bg-surface-elevated/80 p-5 text-center backdrop-blur-md"
        >
          {activeIndex !== null && (
            <>
              <h3
                className="mb-2 text-lg font-bold"
                style={{ color: skillCategories[activeIndex].color }}
              >
                {skillCategories[activeIndex].name}
              </h3>
              <p className="text-sm text-muted">
                {skillCategories[activeIndex].skills.join(" · ")}
              </p>
            </>
          )}
          {activeIndex === null && (
            <p className="text-muted">
              Selecciona una categoría para ver sus tecnologías flotando en 3D.
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
