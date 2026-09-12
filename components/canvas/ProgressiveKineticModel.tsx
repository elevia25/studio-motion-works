"use client";

import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useNeedleProgressive } from "@needle-tools/gltf-progressive";
import { useRef, useMemo } from "react";
import * as THREE from "three";

interface ProgressiveKineticModelProps {
  src: string;
  fitSize?: number;
  position?: [number, number, number];
}

export function ProgressiveKineticModel({
  src,
  fitSize,
  position = [0, 0, 0],
}: ProgressiveKineticModelProps) {
  const gl = useThree((s) => s.gl);
  const groupRef = useRef<THREE.Group>(null);

  // Register the progressive loader plugin on the GLTFLoader instance
  const { scene } = useGLTF(src, false, false, (loader) => {
    useNeedleProgressive(loader as any, gl as any);
  });

  const clonedScene = useMemo(() => {
    const clone = scene.clone(true);
    clone.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        (child as THREE.Mesh).castShadow = true;
        (child as THREE.Mesh).receiveShadow = true;
      }
    });
    return clone;
  }, [scene]);

  // Auto-scale
  useMemo(() => {
    if (!fitSize || !groupRef.current) return;
    const box = new THREE.Box3().setFromObject(clonedScene);
    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    groupRef.current.scale.setScalar(fitSize / maxDim);
  }, [fitSize, clonedScene]);

  return (
    <group ref={groupRef} position={position}>
      <primitive object={clonedScene} />
    </group>
  );
}