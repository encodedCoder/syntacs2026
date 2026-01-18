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
    <section id="info" className="py-32 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12 mb-12">
          {infoCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex flex-col gap-8 p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-white/60">
                <card.icon size={28} />
              </div>
              <div>
                <h3 className="text-[10px] font-mono tracking-[0.4em] uppercase text-white/20 mb-4">{card.title}</h3>
                <p className="text-2xl font-bold tracking-tight mb-2">{card.content}</p>
                <p className="text-white/40 text-sm">{card.subContent}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Learn More Link */}
        <div className="flex justify-center">
          <Link 
            href="/venue"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/[0.02] border border-white/10 hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300"
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
