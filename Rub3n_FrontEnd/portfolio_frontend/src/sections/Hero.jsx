import React from "react";
import { Canvas } from "@react-three/fiber";
import { HeroText } from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
import { Raspberry } from "../components/Raspberry";
import { OrbitControls } from "@react-three/drei";

export const Hero = () => {
  return (
    <section className="flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space">
      <HeroText />
      <ParallaxBackground />
      <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas
          camera={{
            position: [5, 2, 8],
            fov: 50,
          }}
        >
          <ambientLight intensity={0.4} />
          <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
          <pointLight position={[-10, -10, -5]} intensity={0.3} />

          <Raspberry scale={0.23} />

        </Canvas>
      </figure>
    </section>
  );
};

export default Hero;
