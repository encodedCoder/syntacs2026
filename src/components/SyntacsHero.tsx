"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import CallForPostersButton from "./CallForPostersButton";

const SyntacsHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  return (
    <section ref={containerRef} className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#050505] selection:bg-white selection:text-black">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] animate-pulse delay-1000" />
      </div>

      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 text-center px-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6 flex items-center justify-center gap-4"
        >
          <div className="h-[1px] w-12 bg-white/20" />
          <span className="text-white/40 font-mono tracking-[0.3em] uppercase text-xs sm:text-sm">
            IIT Ropar | 8th March 2025
          </span>
          <div className="h-[1px] w-12 bg-white/20" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-7xl sm:text-9xl font-bold tracking-tighter text-white mb-8"
        >
          SYNTACS<span className="text-white/20">'25</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="max-w-2xl mx-auto text-lg sm:text-xl text-white/50 font-light leading-relaxed tracking-tight"
        >
          Symposium on Novel Technologies and Advances in Computer Science.
          A Research Scholars Day focused on innovation and collaboration.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-10 flex justify-center"
        >
          <CallForPostersButton />
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <div className="w-[1px] h-20 bg-gradient-to-b from-white/20 to-transparent" />
        <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-mono">Scroll to explore</span>
      </motion.div>
    </section>
  );
};

export default SyntacsHero;
