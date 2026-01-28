"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import CallForPostersButton from "./CallForPostersButton";

const WelcomeSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 10]);

  return (
    <section
      ref={containerRef}
      id="welcome"
      className="relative py-32 md:py-48 bg-white overflow-hidden"
    >
      {/* Background Aesthetic Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px] translate-y-1/2" />

        {/* Subtle Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, rgb(15,23,42) 1px, transparent 1px), linear-gradient(to bottom, rgb(15,23,42) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Decorative Floating Lines */}
      <motion.div style={{ y: y1 }} className="absolute top-20 right-[10%] w-px h-64 bg-gradient-to-b from-transparent via-slate-300 to-transparent hidden md:block" />
      <motion.div style={{ y: y2 }} className="absolute bottom-20 left-[10%] w-px h-64 bg-gradient-to-b from-transparent via-slate-300 to-transparent hidden md:block" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center">
          {/* Section Label */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 flex items-center gap-3"
          >
            <div className="h-px w-8 bg-slate-300" />
            <span className="text-[10px] md:text-xs font-mono tracking-[0.4em] text-slate-500 uppercase italic">
              Initialization // 01
            </span>
            <div className="h-px w-8 bg-slate-300" />
          </motion.div>

          {/* Heading with Gradient */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-7xl font-bold tracking-tighter text-center mb-12"
          >
            <span className="text-slate-900">Welcome to </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-600">
              SYNTACS 2026
            </span>
          </motion.h2>

          {/* Glassmorphism Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full bg-white border border-slate-200 backdrop-blur-3xl rounded-3xl p-8 md:p-16 relative overflow-hidden group shadow-sm"
          >
            {/* Inner Glow */}
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-blue-500/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

            <div className="grid gap-10 md:gap-14 relative z-10">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-slate-600 text-base md:text-xl leading-relaxed text-justify md:text-left font-light"
              >
                IIT Ropar's Computer Science and Engineering department proudly introduces <span className="text-slate-900 font-medium">SYNTACS</span>, <span className="text-slate-900 font-medium italic underline decoration-slate-300 underline-offset-4">SY</span>mposium on <span className="text-slate-900 font-medium italic underline decoration-slate-300 underline-offset-4">N</span>ovel <span className="text-slate-900 font-medium italic underline decoration-slate-300 underline-offset-4">T</span>echnologies and <span className="text-slate-900 font-medium italic underline decoration-slate-300 underline-offset-4">A</span>dvances in <span className="text-slate-900 font-medium italic underline decoration-slate-300 underline-offset-4">C</span>omputer <span className="text-slate-900 font-medium italic underline decoration-slate-300 underline-offset-4">S</span>cience, a Regional Summit aimed at fostering collaboration and knowledge exchange within the academic community. This event serves as a platform to bring together research scholars from diverse backgrounds, creating an environment conducive to networking and collaboration.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-slate-600 text-base md:text-xl leading-relaxed text-justify md:text-left font-light border-l border-slate-200 pl-8 md:pl-12"
              >
                Organized by CSE IIT Ropar, <span className="text-slate-900 font-medium">SYNTACS</span> will feature insightful talks by two prominent speakers, providing attendees with valuable insights into cutting-edge research and industry trends. The event will also include engaging poster sessions and demo sessions, offering scholars an opportunity to showcase their work and receive constructive feedback. We extend a warm invitation to all researchers to join us in this enriching experience, broaden your professional network, and make the most of <span className="text-slate-900 font-medium">SYNTACS</span> - a day full of learning and collaborative opportunities.
              </motion.p>

              {/* Action Button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex justify-center"
              >
                <CallForPostersButton />
              </motion.div>
            </div>

            {/* Tech Corner Decor */}
            <div className="absolute top-0 right-0 p-4 opacity-20">
              <div className="w-12 h-px bg-slate-300" />
              <div className="h-12 w-px bg-slate-300 ml-auto" />
            </div>
            <div className="absolute bottom-0 left-0 p-4 opacity-20">
              <div className="h-12 w-px bg-slate-300" />
              <div className="w-12 h-px bg-slate-300" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
