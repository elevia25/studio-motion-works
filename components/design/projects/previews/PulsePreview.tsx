"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function PulsePreview() {
  const groupRef = useRef<THREE.Group>(null);
  const slats = 8;

  useFrame((state) => {
    if (!groupRef.current) return;
    const time = state.clock.elapsedTime;
    groupRef.current.children.forEach((child, i) => {
      const wave = Math.sin(time * 1.8 + i * 0.5) * 0.06;
      child.position.y = wave;
      child.rotation.x = wave * 0.5;
    });
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[2, 5, 3]} intensity={1.3} />

      {Array.from({ length: slats }, (_, i) => (
        <mesh
          key={i}
          position={[(i - slats / 2 + 0.5) * 0.28, 0, 0]}
          castShadow
        >
          <boxGeometry args={[0.24, 0.04, 0.6]} />
          <meshStandardMaterial
            color={i % 2 === 0 ? "#C5A065" : "#8A6D3B"}
            metalness={0.8}
            roughness={0.3}
            envMapIntensity={1.5}
          />
        </mesh>
      ))}
    </group>
  );
}