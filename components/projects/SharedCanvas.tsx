"use client";

import { Canvas } from "@react-three/fiber";
import { View, Preload, Environment } from "@react-three/drei";
import { Suspense, useRef } from "react";

export function SharedCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-0"
      style={{ pointerEvents: "none" }}
    >
      <Canvas
        eventSource={containerRef as any}
        eventPrefix="client"
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
        }}
      >
        <Suspense fallback={null}>
          <View.Port />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}