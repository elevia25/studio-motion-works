"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Torus, Box, Cylinder } from "@react-three/drei";
import * as THREE from "three";

export function HelixModel() {
  const groupRef = useRef<THREE.Group>(null);
  const position: [number, number, number][] = [
    [-1.3, -0.5, -0.7],
    [1.3, -0.5, -0.7],
    [-1.3, -0.5, 0.7],
    [1.3, -0.5, 0.7],
  ];
  useFrame((state, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.2;
  });

  return (
    <group ref={groupRef} position={[0, -0.5, 0]}>
      {/* Base table surface */}
      <Box args={[3, 0.08, 1.8]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#C5A065"
          metalness={1}
          roughness={0.25}
          envMapIntensity={2}
        />
      </Box>

      {/* Helix arms */}
      {[0, 1, 2].map((i) => (
        <Torus
          key={i}
          args={[0.8 + i * 0.3, 0.03, 24, 64, Math.PI * 1.5]}
          position={[0, 0.15 + i * 0.15, 0]}
          rotation={[Math.PI / 2, 0, (i * Math.PI * 2) / 3]}
        >
          <meshStandardMaterial
            color={i === 1 ? "#B87333" : "#C5A065"}
            metalness={1}
            roughness={0.2}
            envMapIntensity={2.5}
          />
        </Torus>
      ))}

      {/* Central column */}
      <Cylinder args={[0.08, 0.08, 0.5, 24]} position={[0, -0.25, 0]}>
        <meshStandardMaterial
          color="#8A8A8A"
          metalness={1}
          roughness={0.3}
        />
      </Cylinder>

      {/* Legs */}
      {position.map((pos, i) => (
        <Cylinder key={i} args={[0.04, 0.04, 1, 16]} position={pos}>
          <meshStandardMaterial color="#8A8A8A" metalness={1} roughness={0.3} />
        </Cylinder>
      ))}
    </group>
  );
}