"use client";

import { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Torus, Cylinder, Environment } from "@react-three/drei";
import * as THREE from "three";

function AssemblingMark({ progress }: { progress: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const fragments = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.25;
    }

    if (fragments.current) {
      // Fragments fly in as progress goes 0 -> 1
      const p = THREE.MathUtils.clamp(progress, 0, 1);
      fragments.current.children.forEach((child, i) => {
        const angle = (i / fragments.current!.children.length) * Math.PI * 2;
        const targetRadius = 1.6;
        const startRadius = 6;

        const r = THREE.MathUtils.lerp(startRadius, targetRadius, p);
        const y = THREE.MathUtils.lerp(
          Math.sin(i * 1.5) * 4,
          Math.sin(i * 1.5) * 0.3,
          p
        );

        child.position.set(
          Math.cos(angle) * r,
          y,
          Math.sin(angle) * r
        );
        child.rotation.x = THREE.MathUtils.lerp(i * 1.2, 0, p);
        child.rotation.z = THREE.MathUtils.lerp(i * 0.8, 0, p);
      });
    }
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.25} />
      <directionalLight
        position={[4, 6, 4]}
        intensity={1.4}
        color="#F5F5F5"
        castShadow
      />
      <pointLight position={[-4, 2, -3]} intensity={0.7} color="#C5A065" />
      <pointLight position={[3, -2, 3]} intensity={0.5} color="#B87333" />

      {/* Central M mark — three counter-rotating arcs */}
      <group>
        <Torus
          args={[1.1, 0.055, 32, 96, Math.PI * 1.4]}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <meshStandardMaterial
            color="#C5A065"
            metalness={1}
            roughness={0.2}
            envMapIntensity={2.5}
          />
        </Torus>
        <Torus
          args={[0.85, 0.045, 32, 96, Math.PI * 1.2]}
          rotation={[Math.PI / 2, 0.6, Math.PI / 4]}
        >
          <meshStandardMaterial
            color="#B87333"
            metalness={1}
            roughness={0.28}
            envMapIntensity={2.2}
          />
        </Torus>
        <Torus
          args={[0.6, 0.035, 32, 96, Math.PI * 1.6]}
          rotation={[Math.PI / 2, -0.4, -Math.PI / 6]}
        >
          <meshStandardMaterial
            color="#C0C0C0"
            metalness={0.95}
            roughness={0.15}
            envMapIntensity={3}
          />
        </Torus>

        {/* Central spine — a small vertical cylinder */}
        <Cylinder args={[0.04, 0.04, 1.4, 24]} rotation={[0, 0, 0]}>
          <meshStandardMaterial
            color="#C5A065"
            metalness={1}
            roughness={0.25}
            envMapIntensity={2}
          />
        </Cylinder>
      </group>

      {/* Orbiting fragments that lock into place */}
      <group ref={fragments}>
        {Array.from({ length: 12 }, (_, i) => (
          <mesh key={i}>
            <boxGeometry args={[0.08, 0.08, 0.02 + (i % 3) * 0.02]} />
            <meshStandardMaterial
              color={i % 2 === 0 ? "#C5A065" : "#F5F5F5"}
              metalness={1}
              roughness={0.2}
              envMapIntensity={2}
            />
          </mesh>
        ))}
      </group>
    </group>
  );
}

export function LogoAssembly() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const handleScroll = () => {
      const rect = node.getBoundingClientRect();
      const vh = window.innerHeight;
      // Progress: 0 when top of element is at bottom of viewport, 1 when centered
      const raw = 1 - (rect.top - vh * 0.2) / (vh * 0.8);
      setProgress(Math.max(0, Math.min(1, raw)));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative h-[420px] w-full">
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <AssemblingMark progress={progress} />
        <Environment preset="studio" environmentIntensity={0.35} />
      </Canvas>

      {/* Instruction label */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 text-center">
        <span className="font-body text-[9px] tracking-[0.4em] uppercase text-ink-subtle">
          {progress < 0.85 ? "Scroll to assemble" : "Studio Motionworks"}
        </span>
      </div>
    </div>
  );
}