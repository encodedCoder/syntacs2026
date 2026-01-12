"use client";

import { motion } from "framer-motion";

const schedule = [
  { time: "Day 1 | 08:30 AM", event: "Grand Opening & Keynote I", location: "Senate Hall" },
  { time: "Day 1 | 11:00 AM", event: "Parallel Tracks: AI & Systems", location: "S. Ramanujan Block" },
  { time: "Day 1 | 02:00 PM", event: "Poster & Demo Showcase", location: "CSE Labs" },
  { time: "Day 1 | 05:00 PM", event: "Industrial Panel Discussion", location: "Senate Hall" },
  { time: "Day 2 | 09:00 AM", event: "Keynote II & Research Awards", location: "Senate Hall" },
  { time: "Day 2 | 11:30 AM", event: "Special Sessions: Edge AI", location: "S. Ramanujan Block" },
  { time: "Day 2 | 02:30 PM", event: "Interdisciplinary Research Day", location: "Open CS Area" },
  { time: "Day 2 | 04:30 PM", event: "Closing Ceremony", location: "Senate Hall" },
];

const Schedule = () => {
  return (
    <section id="program" className="py-32 px-6 bg-[#050505]/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-center gap-6 mb-20">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">SYMPOSIUM PROGRAM</h2>
          <div className="h-[1px] flex-grow bg-white/10 hidden md:block" />
          <span className="text-white/20 font-mono text-sm tracking-[0.2em] uppercase">20-21st March 2026</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-4">
          {schedule.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="group flex items-center gap-6 p-6 rounded-2xl bg-white/[0.01] border border-white/5 hover:bg-white/[0.03] hover:border-white/10 transition-all duration-300"
            >
              <div className="w-40 flex-shrink-0">
                <span className="text-white/30 font-mono text-[10px] uppercase tracking-widest">{item.time}</span>
              </div>
              
              <div className="flex-grow">
                <h3 className="text-base font-bold tracking-tight text-white/90 group-hover:text-white transition-colors">
                  {item.event}
                </h3>
              </div>

              <div className="text-right">
                <span className="text-[9px] font-mono uppercase tracking-[0.1em] text-white/10 px-2 py-0.5 rounded-full border border-white/5 whitespace-nowrap">
                  {item.location}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
