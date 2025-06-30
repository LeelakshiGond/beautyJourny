"use client";
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box, Cylinder, Sphere, Torus, useGLTF } from "@react-three/drei";

function Lipstick() {
  const ref = useRef<any>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.3;
      ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <group ref={ref} position={[-2, 0, 0]}>
      {/* Lipstick base */}
      <Cylinder args={[0.1, 0.1, 0.8, 8]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#e91e63" metalness={0.1} roughness={0.8} />
      </Cylinder>
      {/* Lipstick tip */}
      <Cylinder args={[0.08, 0.1, 0.2, 8]} position={[0, 0.5, 0]}>
        <meshStandardMaterial color="#f06292" metalness={0.1} roughness={0.8} />
      </Cylinder>
      {/* Cap */}
      <Cylinder args={[0.12, 0.12, 0.3, 8]} position={[0, -0.65, 0]}>
        <meshStandardMaterial color="#f8bbd9" metalness={0.2} roughness={0.7} />
      </Cylinder>
    </group>
  );
}

function PerfumeBottle() {
  const ref = useRef<any>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.7) * 0.4;
      ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.15;
    }
  });

  return (
    <group ref={ref} position={[2, 0, 0]}>
      {/* Bottle body */}
      <Cylinder args={[0.3, 0.3, 1.2, 12]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#f3e5f5"
          transparent
          opacity={0.8}
          metalness={0.3}
          roughness={0.2}
        />
      </Cylinder>
      {/* Bottle neck */}
      <Cylinder args={[0.1, 0.1, 0.4, 8]} position={[0, 0.8, 0]}>
        <meshStandardMaterial color="#e1bee7" metalness={0.2} roughness={0.6} />
      </Cylinder>
      {/* Cap */}
      <Sphere args={[0.15, 8, 8]} position={[0, 1.1, 0]}>
        <meshStandardMaterial color="#ce93d8" metalness={0.4} roughness={0.3} />
      </Sphere>
    </group>
  );
}

function MakeupBrush() {
  const ref = useRef<any>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
      ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.25;
    }
  });

  return (
    <group ref={ref} position={[0, 0, 2]}>
      {/* Handle */}
      <Cylinder args={[0.05, 0.05, 0.8, 8]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#8d6e63" metalness={0.1} roughness={0.9} />
      </Cylinder>
      {/* Brush head */}
      <Sphere args={[0.12, 8, 8]} position={[0, 0.46, 0]}>
        <meshStandardMaterial color="#d7ccc8" metalness={0.1} roughness={0.8} />
      </Sphere>
    </group>
  );
}

function CompactMirror() {
  const ref = useRef<any>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.3;
      ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <group ref={ref} position={[0, 0, -2]}>
      {/* Mirror case */}
      <Box args={[0.6, 0.6, 0.1]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#ffcdd2" metalness={0.1} roughness={0.7} />
      </Box>
      {/* Mirror surface */}
      <Box args={[0.5, 0.5, 0.02]} position={[0, 0, 0.06]}>
        <meshStandardMaterial color="#e0e0e0" metalness={0.9} roughness={0.1} />
      </Box>
    </group>
  );
}

function NailPolish() {
  const ref = useRef<any>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.4;
      ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.2;
    }
  });

  return (
    <group ref={ref} position={[-1.5, 0, 1.5]}>
      {/* Bottle */}
      <Cylinder args={[0.15, 0.15, 0.6, 8]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#e8f5e8"
          transparent
          opacity={0.7}
          metalness={0.2}
          roughness={0.3}
        />
      </Cylinder>
      {/* Cap */}
      <Cylinder args={[0.18, 0.18, 0.2, 8]} position={[0, 0.4, 0]}>
        <meshStandardMaterial color="#c8e6c9" metalness={0.1} roughness={0.6} />
      </Cylinder>
      {/* Brush */}
      <Cylinder args={[0.02, 0.02, 0.3, 4]} position={[0, 0.65, 0]}>
        <meshStandardMaterial color="#4caf50" metalness={0.1} roughness={0.8} />
      </Cylinder>
    </group>
  );
}

export default function FloatingBeautyProducts() {
  return (
    <div className="absolute inset-0 pointer-events-none z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#ec4899" />
        <pointLight
          position={[-10, -10, -10]}
          intensity={0.5}
          color="#ec4899"
        />

        <Lipstick />
        <PerfumeBottle />
        <MakeupBrush />
        <CompactMirror />
        <NailPolish />
      </Canvas>
    </div>
  );
}
