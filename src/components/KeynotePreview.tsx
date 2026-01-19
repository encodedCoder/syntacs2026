"use client";

import { motion } from "framer-motion";
import { Globe, ArrowRight } from "lucide-react";
import Link from "next/link";

const speakers = [
  {
    name: "Keynote To Be Announced",
    role: "Global Tech Leader",
    org: "Futurist Perspectives",
  },
  {
    name: "Keynote To Be Announced",
    role: "Senior Researcher",
    org: "Leading Academic Institute",
  }
];

const KeynotePreview = () => {
  return (
    <section id="keynotes" className="py-32 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">KEYNOTE DISCOURSE</h2>
            <p className="text-white/40 text-lg">
              SYNTACS will feature world-renowned speakers exploring the frontiers of 
              computational intelligence and emerging technologies.
            </p>
          </div>
          <div className="h-[2px] flex-grow bg-white/5 mx-12 hidden md:block" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {speakers.map((speaker, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-white/[0.02] border border-white/10 rounded-[2rem] transition-all duration-500 group-hover:bg-white/[0.04] group-hover:border-white/20" />
              <div className="relative p-7 sm:p-10 flex flex-col h-full min-h-[300px] sm:min-h-[350px] justify-between">
                <div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 sm:mb-8 border border-white/10 group-hover:bg-white/10 transition-colors">
                    <Globe size={22} className="text-white/60" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2 group-hover:text-white transition-colors capitalize italic">
                    {speaker.name}
                  </h3>
                  <p className="text-white/60 text-base sm:text-lg font-medium">{speaker.role}</p>
                  <p className="text-white/30 text-sm sm:text-base">{speaker.org}</p>
                </div>

                <div className="mt-6 sm:mt-8">
                  <span className="text-[10px] sm:text-sm uppercase tracking-widest font-mono text-white/20">
                    Selection In Progress...
                  </span>
                </div>

                {/* Decorative Element */}
                <div className="absolute bottom-8 right-8 sm:bottom-12 sm:right-12 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-500 text-white pointer-events-none">
                  <Globe size={120} strokeWidth={0.5} className="sm:w-40 sm:h-40" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        <div className="flex justify-center">
          <Link 
            href="/keynotes"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/[0.02] border border-white/10 hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300"
          >
            <span className="text-sm font-bold tracking-wide">View All Keynotes</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default KeynotePreview;
