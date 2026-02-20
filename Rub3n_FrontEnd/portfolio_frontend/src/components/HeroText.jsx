import React from "react";
import { motion } from "motion/react";

export const HeroText = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative z-10 flex flex-col items-center justify-center text-center w-full px-4 pt-16 md:pt-24 pointer-events-none">
      <motion.p
        className="text-lg md:text-xl font-medium text-cyan-500 mb-4 tracking-[0.2em] uppercase"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Ruben • Embedded Systems Engineer
      </motion.p>

      <motion.h1
        className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-white mb-6 leading-tight"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        Embedded <br className="hidden md:block" /> Intelligence.
      </motion.h1>

      <motion.p
        className="text-xl md:text-3xl font-light text-neutral-400 max-w-2xl leading-relaxed"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1.1, duration: 0.8 }}
      >
        Precision firmware. Robust hardware. <br />
        <span className="text-white">Built for the real world.</span>
      </motion.p>

      <motion.div
        className="mt-12 pointer-events-auto"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        <a
          href="/Projects"
          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black text-lg font-semibold rounded-full hover:bg-neutral-200 transition-colors duration-300"
        >
          View Projects
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </motion.div>
    </div>
  );
};
