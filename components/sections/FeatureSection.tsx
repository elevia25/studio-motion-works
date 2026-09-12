"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { KineticModel } from "@/components/canvas/KineticModel";
import { KineticLoader } from "@/components/canvas/KineticLoader";

const works = [
  { id: "helix", title: "Helix Table", model: "/models/helix-table.glb" },
  { id: "orbit", title: "Orbital Chandelier", model: "/models/orbit-chandelier.glb" },
  { id: "tide", title: "Tidal Wall", model: "/models/tidal-wall.glb" },
  { id: "pulse", title: "Pulse Bench", model: "/models/pulse-bench.glb" },
];

function ModelPreview({ src }: { src: string }) {
  return (
    <div className="absolute inset-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 40 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[3, 5, 2]} intensity={1} />
        <Suspense fallback={<KineticLoader />}>
          <KineticModel src={src} fitSize={2.5} />
        </Suspense>
      </Canvas>
    </div>
  );
}

function TiltCard({ work }: { work: (typeof works)[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springRotateX = useSpring(rotateX, { stiffness: 200, damping: 20 });
  const springRotateY = useSpring(rotateY, { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    rotateX.set((e.clientY - (rect.top + rect.height / 2)) * -0.06);
    rotateY.set((e.clientX - (rect.left + rect.width / 2)) * 0.06);
  };

  return (
    <motion.div
      ref={ref}
      data-magnetic
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        rotateX.set(0);
        rotateY.set(0);
      }}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      className="group relative aspect-[3/4] overflow-hidden rounded-sm bg-gunmetal"
    >
      {/* 3D preview only renders on hover to save GPU */}
      {hovered && <ModelPreview src={work.model} />}

      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-void/80 to-transparent p-6">
        <h3 className="font-display text-xl font-bold text-offwhite">
          {work.title}
        </h3>
      </div>
    </motion.div>
  );
}

export function FeaturedWorksWithModels() {
  return (
    <section className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {works.map((work) => (
            <TiltCard key={work.id} work={work} />
          ))}
        </div>
      </div>
    </section>
  );
}