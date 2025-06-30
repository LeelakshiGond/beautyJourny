"use client";
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";

// Helper function to generate particles in a sphere
function generateSphereParticles(count: number, radius: number): Float32Array {
  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    // Generate random spherical coordinates
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const r = radius * Math.cbrt(Math.random()); // Cube root for uniform distribution

    // Convert to Cartesian coordinates
    const x = r * Math.sin(phi) * Math.cos(theta);
    const y = r * Math.sin(phi) * Math.sin(theta);
    const z = r * Math.cos(phi);

    // Ensure we don't have NaN values
    if (isNaN(x) || isNaN(y) || isNaN(z)) {
      positions[i * 3] = 0;
      positions[i * 3 + 1] = 0;
      positions[i * 3 + 2] = 0;
    } else {
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }
  }

  return positions;
}

function ParticleField() {
  const ref = useRef<any>(null);
  const sphere = useMemo(() => generateSphereParticles(5000, 1.5), []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#ec4899"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

function SparkleField() {
  const ref = useRef<any>(null);
  const sparkles = useMemo(() => generateSphereParticles(2000, 2), []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta / 20;
      ref.current.rotation.y += delta / 25;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      <Points ref={ref} positions={sparkles} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#f472b6"
          size={0.003}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

function LightOrbs() {
  const ref = useRef<any>(null);
  const orbs = useMemo(() => generateSphereParticles(500, 3), []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta / 30;
      ref.current.rotation.y += delta / 35;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      <Points ref={ref} positions={orbs} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#f59e0b"
          size={0.008}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function FloatingParticles() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        style={{
          background:
            "radial-gradient(circle at center, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 50%, transparent 100%)",
        }}
      >
        <ParticleField />
        <SparkleField />
        <LightOrbs />
      </Canvas>
    </div>
  );
}
