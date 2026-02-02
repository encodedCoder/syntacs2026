"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const schedule = [
  { time: "Day 1 | 09:30 AM", event: "Inauguration", location: "" },
  { time: "Day 1 | 10:00 AM", event: "Keynote 1", location: "" },
  { time: "Day 1 | 11:00 AM", event: "Posters", location: "" },
  { time: "Day 1 | 02:30 PM", event: "Keynote 2", location: "" },
];

const ProgramPreview = () => {
  return (
    <section id="program" className="py-32 px-6 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-100 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-center gap-6 mb-20">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">SYMPOSIUM PROGRAM</h2>
          <div className="h-[1px] flex-grow bg-slate-200 hidden md:block" />
          <span className="text-slate-400 font-mono text-sm tracking-[0.2em] uppercase">20-21st March 2026</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 mb-12">
          {schedule.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="group flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 shadow-sm"
            >
              <div className="sm:w-40 flex-shrink-0">
                <span className="text-slate-500 font-mono text-[9px] sm:text-[10px] uppercase tracking-widest">{item.time}</span>
              </div>

              <div className="flex-grow">
                <h3 className="text-sm sm:text-base font-bold tracking-tight text-slate-900 group-hover:text-slate-950 transition-colors">
                  {item.event}
                </h3>
              </div>

              {item.location && (
                <div className="sm:text-right mt-2 sm:mt-0 self-start sm:self-auto">
                  <span className="text-[8px] sm:text-[9px] font-mono uppercase tracking-[0.1em] text-slate-500 px-2 py-0.5 rounded-full border border-slate-200 whitespace-nowrap">
                    {item.location}
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* View Full Program Link */}
        <div className="flex justify-center">
          <Link
            href="/program"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 shadow-sm"
          >
            <span className="text-sm font-bold tracking-wide">View Full Program</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProgramPreview;
