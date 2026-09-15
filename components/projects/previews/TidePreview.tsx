"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function TidePreview() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const count = 12 * 6; // 12 cols x 6 rows

  const positions = useMemo(() => {
    const pos: THREE.Matrix4[] = [];
    for (let x = 0; x < 12; x++) {
      for (let y = 0; y < 6; y++) {
        const matrix = new THREE.Matrix4();
        matrix.setPosition(
          (x - 5.5) * 0.18,
          (y - 2.5) * 0.18,
          0
        );
        pos.push(matrix);
      }
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.elapsedTime;
    const dummy = new THREE.Object3D();

    for (let i = 0; i < count; i++) {
      const x = Math.floor(i / 6);
      const y = i % 6;
      const wave = Math.sin(time * 1.5 + x * 0.4 + y * 0.6) * 0.08;
      const z = Math.cos(time * 1.2 + x * 0.3) * 0.05 + wave;

      dummy.position.set(
        (x - 5.5) * 0.18,
        (y - 2.5) * 0.18,
        z
      );
      dummy.scale.set(0.12, 0.12, 0.04 + Math.abs(z) * 0.5);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <group>
      <ambientLight intensity={0.4} />
      <directionalLight position={[3, 4, 5]} intensity={1.4} />
      <pointLight position={[-2, -2, 3]} intensity={0.5} color="#C0C0C0" />

      <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
        <boxGeometry args={[0.12, 0.12, 0.04]} />
        <meshStandardMaterial
          color="#C0C0C0"
          metalness={0.9}
          roughness={0.2}
          envMapIntensity={1.5}
        />
      </instancedMesh>
    </group>
  );
}