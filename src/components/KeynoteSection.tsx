"use client";

import { motion } from "framer-motion";
import { Linkedin, Globe } from "lucide-react";

const speakers = [
  {
    name: "Keynote To Be Announced",
    role: "Global Tech Leader",
    org: "Futurist Perspectives",
    link: "#",
    linkText: "Stay Tuned",
    icon: Globe,
  },
  {
    name: "Keynote To Be Announced",
    role: "Senior Researcher",
    org: "Leading Academic Institute",
    link: "#",
    linkText: "Stay Tuned",
    icon: Globe,
  }
];

const KeynoteSection = () => {
  return (
    <section id="keynotes" className="py-32 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">KEYNOTE DISCOURSE</h2>
            <p className="text-white/40 text-lg">
              SYNTACS '26 will feature world-renowned speakers exploring the frontiers of 
              computational intelligence and emerging technologies.
            </p>
          </div>
          <div className="h-[2px] flex-grow bg-white/5 mx-12 hidden md:block" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {speakers.map((speaker, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-white/[0.02] border border-white/10 rounded-[2rem] transition-all duration-500 group-hover:bg-white/[0.04] group-hover:border-white/20" />
              <div className="relative p-10 flex flex-col h-full min-h-[350px] justify-between">
                <div>
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-8 border border-white/10 group-hover:bg-white/10 transition-colors">
                    <speaker.icon size={24} className="text-white/60" />
                  </div>
                  <h3 className="text-3xl font-bold tracking-tight mb-2 group-hover:text-white transition-colors capitalize italic">
                    {speaker.name}
                  </h3>
                  <p className="text-white/60 text-lg font-medium">{speaker.role}</p>
                  <p className="text-white/30 text-base">{speaker.org}</p>
                </div>

                <div className="mt-8">
                  <span className="text-sm uppercase tracking-widest font-mono text-white/20">
                    Selection In Progress...
                  </span>
                </div>

                {/* Decorative Element */}
                <div className="absolute bottom-12 right-12 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-500 text-white">
                  <speaker.icon size={160} strokeWidth={0.5} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeynoteSection;
