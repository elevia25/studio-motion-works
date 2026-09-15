"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Sphere } from "@react-three/drei";
import * as THREE from "three";

export function OrbitPreview() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.2;
  });

  const spheres = Array.from({ length: 7 }, (_, i) => ({
    angle: (i / 7) * Math.PI * 2,
    radius: 1.2 + Math.sin(i * 1.5) * 0.3,
    y: Math.sin(i * 2) * 0.4,
    size: 0.12 + (i % 3) * 0.04,
  }));

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.3} />
      <directionalLight position={[4, 6, 4]} intensity={1.2} />
      <pointLight position={[0, 0, 0]} intensity={0.6} color="#C5A065" />

      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.4}>
        {spheres.map((s, i) => (
          <Float
            key={i}
            speed={2 + i * 0.3}
            rotationIntensity={0.5}
            floatIntensity={0.6}
          >
            <Sphere
              args={[s.size, 24, 24]}
              position={[
                Math.cos(s.angle) * s.radius,
                s.y,
                Math.sin(s.angle) * s.radius,
              ]}
            >
              <meshStandardMaterial
                color={i % 2 === 0 ? "#B87333" : "#F5F5F5"}
                metalness={0.95}
                roughness={0.15}
                emissive={i % 2 === 0 ? "#B87333" : "#F5F5F5"}
                emissiveIntensity={0.15}
              />
            </Sphere>
          </Float>
        ))}
        <Sphere args={[0.15, 24, 24]}>
          <meshStandardMaterial color="#C5A065" metalness={1} roughness={0.2} />
        </Sphere>
      </Float>
    </group>
  );
}