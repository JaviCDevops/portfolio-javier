"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Html, Float } from "@react-three/drei";
import { useIsMobile } from "@/hooks/useMediaQuery";
import * as THREE from "three";

interface ProjectPedestalProps {
  position: [number, number, number];
  color: string;
  shape: "torus" | "box";
  name: string;
  role: string;
  logo?: string;
  isSelected: boolean;
  onClick: () => void;
}

export function ProjectPedestal({
  position,
  color,
  name,
  role,
  logo,
  isSelected,
  onClick,
}: ProjectPedestalProps) {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const isMobile = useIsMobile();

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.3) * 0.15;
    }
  });

  const scale = hovered || isSelected ? 1.15 : 1;
  const logoSize = isMobile ? 120 : 160;
  const labelOffset = isMobile ? -1.8 : -1.6;

  return (
    <group ref={groupRef} position={position}>
      <mesh position={[0, -0.8, 0]} receiveShadow>
        <cylinderGeometry args={[1.2, 1.4, 0.2, 64]} />
        <meshStandardMaterial color="#18181b" roughness={0.4} metalness={0.6} />
      </mesh>

      <mesh position={[0, -0.68, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.25, 1.35, 64]} />
        <meshBasicMaterial color={color} transparent opacity={0.6} />
      </mesh>

      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <Html center transform={false} zIndexRange={[1, 0]}>
          <div
            className="flex cursor-pointer items-center justify-center overflow-hidden transition-all duration-200"
            style={{
              width: `${logoSize}px`,
              height: `${logoSize}px`,
              transform: `scale(${scale})`,
              filter: hovered || isSelected ? `drop-shadow(0 0 20px ${color}80)` : "none",
            }}
            onClick={(e) => {
              e.stopPropagation();
              onClick();
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {logo ? (
              <img
                src={logo}
                alt={name}
                className="pointer-events-none h-full w-full object-contain"
              />
            ) : (
              <span className="pointer-events-none text-lg font-bold text-foreground">{name}</span>
            )}
          </div>
        </Html>
      </Float>

      <Html position={[0, labelOffset, 0]} center transform={false} zIndexRange={[1, 0]}>
        <div className="pointer-events-none whitespace-nowrap text-center">
          <p className="text-sm font-semibold text-foreground">{name}</p>
          <p className="text-xs text-muted">{role}</p>
        </div>
      </Html>
    </group>
  );
}
