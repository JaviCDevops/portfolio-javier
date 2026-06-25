"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { useIsMobile } from "@/hooks/useMediaQuery";
import * as THREE from "three";

interface SkillOrbProps {
  position: [number, number, number];
  color: string;
  name: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  onClick?: () => void;
  isActive?: boolean;
}

export function SkillOrb({ position, color, name, icon: Icon, onClick, isActive = false }: SkillOrbProps) {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const isMobile = useIsMobile();

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.2;
      groupRef.current.rotation.z = Math.sin(clock.getElapsedTime() * 0.5) * 0.1;
      const targetScale = hovered || isActive ? 1.4 : 1;
      groupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
  });

  return (
    <group ref={groupRef} position={position}>
      <mesh
        onClick={onClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        visible={false}
      >
        <sphereGeometry args={[1.1, 32, 32]} />
        <meshBasicMaterial transparent opacity={0} />
      </mesh>

      <mesh>
        <icosahedronGeometry args={[0.7, 1]} />
        <meshStandardMaterial
          color={color}
          roughness={0.2}
          metalness={0.8}
          emissive={color}
          emissiveIntensity={isActive ? 0.4 : hovered ? 0.3 : 0.1}
        />
      </mesh>

      <mesh scale={1.3}>
        <icosahedronGeometry args={[0.7, 1]} />
        <meshBasicMaterial color={color} transparent opacity={0.15} wireframe />
      </mesh>

      <Html center transform={false} zIndexRange={[1, 0]}>
        <div className="pointer-events-none flex flex-col items-center justify-center gap-1 sm:gap-2">
          <div
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-surface-elevated/80 shadow-lg backdrop-blur-sm transition-all duration-200 sm:h-14 sm:w-14"
            style={{
              transform: hovered || isActive ? "scale(1.2)" : "scale(1)",
              boxShadow: hovered || isActive ? `0 0 24px ${color}60` : "none",
            }}
          >
            <Icon className="h-6 w-6 sm:h-8 sm:w-8" style={{ color }} />
          </div>
          <span className="max-w-[80px] truncate rounded-full bg-background/80 px-1.5 py-0.5 text-[9px] font-medium text-foreground backdrop-blur-sm sm:max-w-none sm:px-2 sm:text-[10px] sm:whitespace-nowrap">
            {name}
          </span>
        </div>
      </Html>
    </group>
  );
}
