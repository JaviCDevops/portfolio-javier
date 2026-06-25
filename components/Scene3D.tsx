"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, ReactNode } from "react";
import { Stars } from "@react-three/drei";

interface Scene3DProps {
  children: ReactNode;
  cameraPosition?: [number, number, number];
  fov?: number;
  className?: string;
}

export function Scene3D({
  children,
  cameraPosition = [0, 2, 8],
  fov = 45,
  className = "",
}: Scene3DProps) {
  return (
    <div className={`canvas-container h-full w-full ${className}`}>
      <Canvas
        camera={{ position: cameraPosition, fov }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={["#08101f"]} />
        <fog attach="fog" args={["#0a1730", 8, 30]} />
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 10, 7]} intensity={1.2} color="#f4f4f5" />
        <pointLight position={[-5, 4, -5]} intensity={0.8} color="#22d3ee" />
        <pointLight position={[5, -2, -5]} intensity={0.6} color="#a78bfa" />

        <Stars radius={60} depth={40} count={1200} factor={1.5} saturation={0} fade speed={0.4} />
        <Stars radius={60} depth={40} count={400} factor={3.5} saturation={0} fade speed={0.6} />
        <Stars radius={60} depth={40} count={80} factor={6} saturation={0} fade speed={0.8} />

        <Suspense fallback={null}>{children}</Suspense>
      </Canvas>
    </div>
  );
}
