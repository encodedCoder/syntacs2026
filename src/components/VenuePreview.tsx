"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, FileText, ArrowUpRight, ArrowRight } from "lucide-react";
import Link from "next/link";

const infoCards = [
  {
    title: "Venue & Location",
    content: "IIT Ropar, Punjab, India",
    subContent: "S. Ramanujan Block (CSE)",
    icon: MapPin,
  },
  {
    title: "Future Dates",
    content: "20-21 March 2026",
    subContent: "Save the Date",
    icon: Calendar,
  },
  {
    title: "Registration",
    content: "Available Soon",
    subContent: "Join the waitlist",
    icon: FileText,
  }
];

const VenuePreview = () => {
  return (
    <section id="info" className="py-32 px-6 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12 mb-12">
          {infoCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex flex-col gap-8 p-10 rounded-[2.5rem] bg-white border border-slate-200 hover:border-slate-300 transition-colors shadow-sm"
            >
              <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-600">
                <card.icon size={28} />
              </div>
              <div>
                <h3 className="text-[10px] font-mono tracking-[0.4em] uppercase text-slate-400 mb-4">{card.title}</h3>
                <p className="text-2xl font-bold tracking-tight mb-2">{card.content}</p>
                <p className="text-slate-500 text-sm">{card.subContent}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Learn More Link */}
        <div className="flex justify-center">
          <Link 
            href="/venue"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 shadow-sm"
          >
            <span className="text-sm font-bold tracking-wide">Learn More About Venue</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VenuePreview;
