"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Torus, Box } from "@react-three/drei";
import * as THREE from "three";

export function HelixPreview() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.3;
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[3, 5, 3]} intensity={1.5} color="#F5F5F5" />
      <pointLight position={[-3, 2, -2]} intensity={0.8} color="#C5A065" />

      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
        <Torus args={[1.2, 0.04, 32, 96]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial
            color="#C5A065"
            metalness={1}
            roughness={0.25}
            envMapIntensity={2}
          />
        </Torus>
        <Torus args={[0.9, 0.03, 32, 96]} rotation={[Math.PI / 2, 0.4, 0]}>
          <meshStandardMaterial
            color="#B87333"
            metalness={1}
            roughness={0.3}
            envMapIntensity={2}
          />
        </Torus>
        <Box args={[1.8, 0.04, 1.2]} position={[0, -0.3, 0]}>
          <meshStandardMaterial
            color="#F5F5F5"
            metalness={0.9}
            roughness={0.1}
            transparent
            opacity={0.3}
          />
        </Box>
      </Float>
    </group>
  );
}