import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { HeroText } from "../components/HeroText";
import { Raspberry } from "../components/Raspberry";
import { OrbitControls, PerspectiveCamera, Environment, Float, Stars, ContactShadows } from "@react-three/drei";

export const Hero = () => {
  return (
    <section className="relative w-full h-screen bg-black overflow-hidden flex flex-col items-center">
      {/* Studio Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-800/30 via-black to-black z-0 pointer-events-none" />

      {/* Stars for depth */}
      <div className="absolute inset-0 z-0 opacity-30">
        <Canvas>
          <Stars radius={300} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        </Canvas>
      </div>

      {/* 3D Product Shot - Full viewport behind text */}
      <div className="absolute inset-0 z-10">
        <Canvas className="w-full h-full">
          <PerspectiveCamera makeDefault position={[0, 0, 10]} />

          {/* Apple-style Studio Lighting */}
          <ambientLight intensity={0.3} />
          {/* Key light - strong top-right */}
          <spotLight
            position={[8, 12, 8]}
            angle={0.4}
            penumbra={1}
            intensity={5}
            castShadow
            color="#ffffff"
          />
          {/* Cyan rim light - left side for brand accent */}
          <spotLight
            position={[-8, 2, 6]}
            angle={0.6}
            penumbra={1}
            intensity={5}
            color="#00ffff"
          />
          {/* Warm fill - subtle warmth from below-right */}
          <spotLight
            position={[5, -3, 4]}
            angle={0.5}
            penumbra={1}
            intensity={2}
            color="#ffeedd"
          />
          {/* Back light for edge definition */}
          <spotLight
            position={[0, 5, -8]}
            angle={0.6}
            penumbra={0.5}
            intensity={3}
            color="#ffffff"
          />
          <Environment preset="city" />

          <Suspense fallback={null}>
            <Float
              speed={1.8}
              rotationIntensity={0.6}
              floatIntensity={0.8}
            >
              <Raspberry
                rotation={[0.3, -0.2, 0]}
                scale={1.0}
                position={[0, -3, 0]}
              />
            </Float>
            <ContactShadows position={[0, -3, 0]} opacity={0.4} scale={12} blur={3} far={5} />
            <OrbitControls
              enableZoom={false}
              autoRotate
              autoRotateSpeed={0.6}
              enablePan={false}
              maxPolarAngle={Math.PI / 1.5}
              minPolarAngle={Math.PI / 3}
            />
          </Suspense>
        </Canvas>
      </div>

      {/* Typography Section - On top of 3D */}
      <div className="relative z-20 w-full flex flex-col items-center justify-start pt-10 pointer-events-none">
        <HeroText />
      </div>

      {/* Bottom gradient fade for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />
    </section>
  );
};

export default Hero;

