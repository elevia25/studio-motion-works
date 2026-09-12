"use client";

import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useEffect, useRef, useMemo } from "react";
import * as THREE from "three";

// ─── Single Model Loader ───────────────────────────────────

interface KineticModelProps {
  src: string;
  scale?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
  /** Draco decoder path. Defaults to Drei's CDN decoder. */
  dracoPath?: string;
  /** Auto-scale model to fit within this bounding box size */
  fitSize?: number;
  /** Cast shadows from model meshes */
  castShadow?: boolean;
  onLoaded?: (scene: THREE.Group) => void;
}

export function KineticModel({
  src,
  scale = 1,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  dracoPath,
  fitSize,
  castShadow = true,
  onLoaded,
}: KineticModelProps) {
  const groupRef = useRef<THREE.Group>(null);

  // useGLTF: Suspense-integrated GLB loader
  // Draco is auto-detected if the file is compressed
  const { scene } = useGLTF(src, dracoPath);

  // Clone the scene so multiple instances don't share transforms
  const clonedScene = useMemo(() => {
    const clone = scene.clone(true);
    clone.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        mesh.castShadow = castShadow;
        mesh.receiveShadow = true;

        // Ensure materials support your bronze/titanium lighting
        if (mesh.material) {
          const materials = Array.isArray(mesh.material)
            ? mesh.material
            : [mesh.material];
          materials.forEach((mat) => {
            if (mat instanceof THREE.MeshStandardMaterial) {
              mat.envMapIntensity = 1.5;
              mat.needsUpdate = true;
            }
          });
        }
      }
    });
    return clone;
  }, [scene, castShadow]);

  // Auto-scale: fit model into a target bounding box size
  useEffect(() => {
    if (!fitSize || !groupRef.current) return;
    const box = new THREE.Box3().setFromObject(clonedScene);
    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    const autoScale = fitSize / maxDim;
    groupRef.current.scale.setScalar(autoScale);
    onLoaded?.(clonedScene);
  }, [fitSize, clonedScene, onLoaded]);

  return (
    <group ref={groupRef} position={position} rotation={rotation}>
      <primitive object={clonedScene} scale={scale} />
    </group>
  );
}

// Preload for instant availability when the component mounts
export function preloadKineticModel(src: string, dracoPath?: string) {
  useGLTF.preload(src, dracoPath);
}