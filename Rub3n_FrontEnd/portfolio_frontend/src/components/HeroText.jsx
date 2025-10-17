import React from "react";
import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";


export const HeroText = () => {
    const words = ["Seguro", "Moderno", "Escalable"];
    const variants = {
        hidden: {opacity: 0, x: -50},
        visible: {opacity: 1, x: 0},
    }
  return (
    
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      {/* Vista de Escitorio */}
      <div className=" flex-col hidden md:flex c-space">
        <motion.h1
          className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hola! Soy Ruben
        </motion.h1>
        <div className="flex flex-col items-start">
          <motion.p className="text-5xl font-medium text-neutral-300"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.2 }}>
            Un Desarrollador <br /> Dedicado a Crear
          </motion.p>
          <div>
            <FlipWords
              words={words}
              className="font-black text-white text-8xl"
            />
          </div>
          <motion.p className="text-4xl font-medium text-neutral-300"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.4 }}>
            Embedded Solutions
          </motion.p>
        </div>
      </div>

      {/* Vista de Celular */}
      <div className="flex- flex-col space-y-6 md:hidden">
        <motion.p className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}> Hola! Soy Ruben </motion.p>
        <div>
          <motion.p className="text-5xl font-black text-neutral-300"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.2 }}>
            Building
          </motion.p>
          <div>
            <FlipWords
              words={words}
              className="font-bold text-white text-7xl"
            />
          </div>
          <motion.p className="text-axl font-black text-neutral300"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.4 }}>
            Web Applications
          </motion.p>
        </div>
      </div>
    </div>
  );
};
