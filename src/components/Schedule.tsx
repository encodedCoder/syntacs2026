"use client";

import { motion } from "framer-motion";

const scheduleData = [
  {
    day: "Day 0",
    date: "March 20, 2026",
    events: [
      { time: "", event: "Department presentations by faculty members and PhD students" },
      { time: "", event: "Lab visits" },
      { time: "", event: "Open discussion" },
    ]
  },
  {
    day: "Day 1",
    date: "March 21, 2026",
    events: [
      { time: "09:30 AM", event: "Inauguration" },
      { time: "10:00 AM", event: "Keynote 1" },
      { time: "11:00 AM", event: "Posters" },
      { time: "01:00 PM", event: "Lunch" },
      { time: "02:30 PM", event: "Keynote 2" },
      { time: "03:30 PM", event: "Keynote 3" },
      { time: "04:30 PM", event: "Flash talks by selected students" },
      { time: "05:30 PM", event: "Ask me anything" },
      { time: "06:00 PM", event: "Awards" },
    ]
  }
];

const Schedule = () => {
  return (
    <section id="program" className="py-32 px-6 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-100 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-center gap-6 mb-20">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">SYMPOSIUM PROGRAM</h2>
          <div className="h-[1px] flex-grow bg-slate-200 hidden md:block" />
          <span className="text-slate-400 font-mono text-sm tracking-[0.2em] uppercase">20-21st March 2026</span>
        </div>

        <div className="space-y-16">
          {scheduleData.map((dayGroup, dayIndex) => (
            <div key={dayGroup.day}>
              <div className="mb-8 flex items-end gap-4">
                <h3 className="text-2xl font-bold text-slate-900">{dayGroup.day}</h3>
                <span className="text-slate-500 font-mono text-sm pb-1">{dayGroup.date}</span>
              </div>

              <div className="grid lg:grid-cols-2 gap-4">
                {dayGroup.events.map((item, index) => (
                  <motion.div
                    key={`${dayGroup.day}-${index}`}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.5 }}
                    className="group flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 shadow-sm"
                  >
                    {item.time && (
                      <div className="sm:w-32 flex-shrink-0">
                        <span className="text-slate-500 font-mono text-[9px] sm:text-[10px] uppercase tracking-widest">{item.time}</span>
                      </div>
                    )}

                    <div className="flex-grow">
                      <h3 className="text-sm sm:text-base font-bold tracking-tight text-slate-900 group-hover:text-slate-950 transition-colors">
                        {item.event}
                      </h3>
                    </div>

                    {/* Placeholder for location if we add it back later, keeping the structure consistent */}
                    {/* <div className="sm:text-right mt-2 sm:mt-0 self-start sm:self-auto">
                      <span className="text-[8px] sm:text-[9px] font-mono uppercase tracking-[0.1em] text-slate-500 px-2 py-0.5 rounded-full border border-slate-200 whitespace-nowrap">
                        Location
                      </span>
                    </div> */}
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
