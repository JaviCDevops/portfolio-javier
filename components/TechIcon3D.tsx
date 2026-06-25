"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { useIsMobile } from "@/hooks/useMediaQuery";
import * as THREE from "three";

import {
  SiApache,
  SiApachejmeter,
  SiCpanel,
  SiCss,
  SiDocker,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiHibernate,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiKubernetes,
  SiLaravel,
  SiLinux,
  SiMariadb,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenapiinitiative,
  SiOpenjdk,
  SiPhp,
  SiPostgresql,
  SiReact,
  SiScrumalliance,
  SiSelenium,
  SiSpringboot,
  SiTailwindcss,
} from "@icons-pack/react-simple-icons";

import {
  Cloud,
  Code2,
  Database,
  GitBranch,
  Layout,
  Linkedin,
  Server,
  Shield,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  Java: SiOpenjdk,
  "Spring Boot": SiSpringboot,
  "JPA/Hibernate": SiHibernate,
  "Node.js": SiNodedotjs,
  Laravel: SiLaravel,
  PHP: SiPhp,
  "React.js": SiReact,
  "Next.js": SiNextdotjs,
  "JavaScript ES6+": SiJavascript,
  HTML5: SiHtml5,
  CSS3: SiCss,
  Tailwind: SiTailwindcss,
  "Microsoft Azure": Cloud,
  Azure: Cloud,
  Kubernetes: SiKubernetes,
  AKS: SiKubernetes,
  Docker: SiDocker,
  "CI/CD": SiGithubactions,
  "Azure Pipelines": SiGithubactions,
  Git: SiGit,
  GitHub: SiGithub,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  MariaDB: SiMariadb,
  MongoDB: SiMongodb,
  JMeter: SiApachejmeter,
  Selenium: SiSelenium,
  "Code Reviews": GitBranch,
  "Pruebas unitarias": SiJest,
  Scrum: SiScrumalliance,
  "RESTful APIs": SiOpenapiinitiative,
  BFF: Shield,
  MVC: Layout,
  "Diseño relacional": Database,
  Linux: SiLinux,
  cPanel: SiCpanel,
  Apache: SiApache,
  Linkedin: Linkedin,
};

interface TechIcon3DProps {
  position: [number, number, number];
  name: string;
  color: string;
  index: number;
}

export function TechIcon3D({ position, name, color, index }: TechIcon3DProps) {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const isMobile = useIsMobile();

  const Icon = iconMap[name] || Code2;

  useFrame(({ clock }) => {
    if (groupRef.current) {
      const time = clock.getElapsedTime();
      groupRef.current.position.y = position[1] + Math.sin(time * 1.5 + index * 0.8) * 0.12;
      groupRef.current.rotation.y = Math.sin(time * 0.5 + index) * 0.15;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      <mesh scale={hovered ? 1.4 : 1.1}>
        <sphereGeometry args={[0.35, 24, 24]} />
        <meshBasicMaterial color={color} transparent opacity={0.12} />
      </mesh>

      <Html
        center
        transform={false}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <div
          className="flex flex-col items-center justify-center gap-1 transition-transform duration-200"
          style={{ transform: hovered ? "scale(1.25)" : "scale(1)" }}
        >
          <div
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-surface-elevated/90 shadow-lg backdrop-blur-sm sm:h-12 sm:w-12 sm:rounded-xl"
            style={{ boxShadow: hovered ? `0 0 20px ${color}50` : "none" }}
          >
            <Icon className="h-5 w-5 sm:h-7 sm:w-7" style={{ color }} />
          </div>
          <span className="max-w-[70px] truncate rounded-full bg-background/80 px-1.5 py-0.5 text-[9px] font-medium text-foreground backdrop-blur-sm sm:max-w-none sm:px-2 sm:text-[10px] sm:whitespace-nowrap">
            {name}
          </span>
        </div>
      </Html>
    </group>
  );
}
