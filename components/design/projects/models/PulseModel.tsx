"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function PulseModel() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const time = state.clock.elapsedTime;
    groupRef.current.children.forEach((child, i) => {
      if (i < 12) {
        const wave = Math.sin(time * 1.5 + i * 0.4) * 0.05;
        child.position.y = wave;
      }
    });
  });

  return (
    <group ref={groupRef} position={[0, -0.5, 0]}>
      {Array.from({ length: 12 }, (_, i) => (
        <mesh key={i} position={[(i - 5.5) * 0.35, 0, 0]} castShadow>
          <boxGeometry args={[0.3, 0.05, 0.9]} />
          <meshStandardMaterial
            color={i % 2 === 0 ? "#C5A065" : "#8A6D3B"}
            metalness={0.85}
            roughness={0.3}
            envMapIntensity={1.8}
          />
        </mesh>
      ))}

      {/* Frame */}
      <mesh position={[0, -0.15, 0]}>
        <boxGeometry args={[4.2, 0.06, 1]} />
        <meshStandardMaterial color="#4A4A4A" metalness={1} roughness={0.4} />
      </mesh>

      {/* Legs */}
      {[-1.8, 1.8].map((x) =>
        [-0.35, 0.35].map((z) => (
          <mesh key={`${x}-${z}`} position={[x, -0.6, z]}>
            <cylinderGeometry args={[0.04, 0.04, 1.2, 16]} />
            <meshStandardMaterial color="#4A4A4A" metalness={1} roughness={0.4} />
          </mesh>
        ))
      )}
    </group>
  );
}