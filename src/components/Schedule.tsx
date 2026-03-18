"use client";

import { motion } from "framer-motion";

const scheduleData = [
  {
    day: "Day 0",
    date: "March 20, 2026",
    events: [
      { time: "TBA", event: "Department presentations by faculty members and PhD students", venue: "TBA" },
      { time: "TBA", event: "Lab visits", venue: "CSE Department" },
      { time: "TBA", event: "Open discussion", venue: "TBA" },
    ]
  },
  {
    day: "Day 1",
    date: "March 21, 2026",
    events: [
      { time: "09:00 AM - 09:30 AM", event: "Inauguration" },
      { time: "09:30 AM - 10:30 AM", event: "Keynote 1 by Dr. Sachin Lodha (Chief Scientist, TCS Research)" },
      { time: "10:30 AM - 11:30 AM", event: "Keynote 2 by Dr. Himanshu Tagra (Business Head – Online & ISV Business, HCL Technologies)" },
      { time: "11:30 AM - 11:40 AM", event: "High Tea 1", venue: "Open Area (CSE)" },
      { time: "11:40 AM - 01:30 PM", event: "Poster Presentation", venue: "Open Area (CSE)" },
      { time: "01:30 PM - 02:30 PM", event: "Lunch", venue: "Open Area (CSE)" },
      { time: "02:30 PM - 03:30 PM", event: "Keynote 3 by Prof. R. Govindarajan (Professor, IISc Bangalore)" },
      { time: "03:30 PM - 04:30 PM", event: "Keynote 4 by Niranjan Singh Manohar (AI BP Solutions - GTM & Strategy, Microsoft)" },
      { time: "04:30 PM - 04:40 PM", event: "High Tea 2", venue: "Open Area (CSE)" },
      { time: "04:40 PM - 05:30 PM", event: "Lightning Talks (Only for Selected Posters)" },
      { time: "05:30 PM - 06:00 PM", event: "Awards and Closing Ceremony" },
    ]
  }
];

const Schedule = () => {
  return (
    <section id="program" className="py-32 px-6 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-100 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-center gap-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">SYMPOSIUM PROGRAM</h2>
          <div className="h-[1px] flex-grow bg-slate-200 hidden md:block" />
          <span className="text-slate-400 font-mono text-xs sm:text-sm tracking-[0.2em] uppercase whitespace-nowrap">20-21st March 2026</span>
        </div>

        <div className="space-y-12">
          {scheduleData.map((dayGroup, dayIndex) => (
            <div key={dayGroup.day}>
              <div className="mb-6 flex items-end gap-3 sm:gap-4">
                <h3 className="text-2xl font-bold text-slate-900">{dayGroup.day}</h3>
                <span className="text-slate-500 font-mono text-sm pb-1">{dayGroup.date}</span>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                {/* Header Row */}
                <div className="hidden sm:grid sm:grid-cols-[200px_1fr_150px] gap-4 px-6 py-4 bg-slate-50 border-b border-slate-200 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  <div>Timing</div>
                  <div>Event</div>
                  <div>Venue</div>
                </div>

                <div className="flex flex-col">
                  {dayGroup.events.map((item, index) => (
                    <motion.div
                      key={`${dayGroup.day}-${index}`}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.5 }}
                      className={`group flex flex-col sm:grid sm:grid-cols-[200px_1fr_150px] sm:items-center gap-2 sm:gap-4 px-4 py-3 sm:px-6 sm:py-4 border-b border-slate-100 last:border-b-0 hover:bg-slate-100 transition-all duration-300 ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}
                    >
                      {/* Timing Column */}
                      <div className="flex-shrink-0">
                        <span className="sm:hidden text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1 block">Timing</span>
                        {item.time ? (
                          <span className="inline-block px-3 py-1.5 bg-slate-100 text-slate-600 font-mono text-[10px] sm:text-xs rounded-full uppercase tracking-widest whitespace-nowrap group-hover:bg-slate-200 group-hover:text-slate-800 transition-colors">
                            {item.time}
                          </span>
                        ) : (
                          <span className="text-slate-300 font-mono text-[10px] sm:text-xs px-3 py-1.5 inline-block">—</span>
                        )}
                      </div>

                      {/* Event Column */}
                      <div className="flex-grow sm:border-l sm:border-slate-200 sm:pl-4">
                        <span className="sm:hidden text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1 block mt-2">Event</span>
                        <h3 className="text-sm sm:text-base font-medium tracking-tight text-slate-700 group-hover:text-slate-950 transition-colors">
                          {item.event}
                        </h3>
                      </div>

                      {/* Venue Column */}
                      <div className="flex-shrink-0 sm:border-l sm:border-slate-200 sm:pl-4">
                        <span className="sm:hidden text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1 block mt-2">Venue</span>
                        <span className="inline-flex items-center text-[11px] sm:text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                          {(item as any).venue || "CSE Seminar Hall"}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
