"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, useProgress } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";
import { KineticModel, preloadKineticModel } from "./KineticModel";
import { KineticLoader } from "./KineticLoader";

// Preload at module level — starts fetching before the component mounts
preloadKineticModel("/models/helix-sculpture.glb");

function SculptureScene() {
  const groupRef = useRef<THREE.Group>(null);
  const pointer = useRef(new THREE.Vector2(0, 0));

  useFrame((state) => {
    pointer.current.set(
      (state.pointer.x * 2 - 1) * 0.5,
      (state.pointer.y * 2 - 1) * 0.5
    );

    if (!groupRef.current) return;
    // Magnet pull: sculpture subtly follows cursor
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      pointer.current.x * 0.4,
      0.02
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      pointer.current.y * -0.2,
      0.02
    );
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
        <KineticModel
          src="/models/helix-sculpture.glb"
          fitSize={4}
          castShadow
        />
      </Float>
    </group>
  );
}

export function KineticHeroWithModel() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.15} />
        <directionalLight position={[5, 8, 5]} intensity={1.2} color="#F5F5F5" castShadow />
        <pointLight position={[-4, 2, -4]} intensity={0.6} color="#C5A065" />
        <pointLight position={[3, -3, 4]} intensity={0.4} color="#B87333" />

        <Suspense fallback={<KineticLoader />}>
          <SculptureScene />
        </Suspense>

        <Environment preset="studio" environmentIntensity={0.4} />
      </Canvas>
    </div>
  );
}