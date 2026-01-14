"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, FileText, Mail, ArrowUpRight } from "lucide-react";

const infoCards = [
  {
    title: "Venue & Location",
    content: "IIT Ropar, Punjab, India",
    subContent: "S. Ramanujan Block (CSE)",
    icon: MapPin,
    btn: "Campus Guide",
    link: "https://www.syntacs2025.site/venue",
  },
  {
    title: "Future Dates",
    content: "20-21 March 2026",
    subContent: "Save the Date",
    icon: Calendar,
    btn: "Add to Calendar",
    link: "#",
  },
  {
    title: "Registration",
    content: "Available Soon",
    subContent: "Join the waitlist",
    icon: FileText,
    btn: "Notify Me",
    link: "mailto:cse.events@iitrpr.ac.in",
  }
];

const EventInfo = () => {
  return (
    <section id="info" className="py-32 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12 mb-36">
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
              <a 
                href={card.link}
                target={card.link.startsWith('http') ? "_blank" : "_self"}
                className="mt-auto inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-bold group"
              >
                <span>{card.btn}</span>
                <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-10"
          >
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight italic">
              Legacy of <br />
              Innovation.
            </h2>
            <div className="space-y-8 text-white/50 text-xl leading-relaxed font-light font-sans">
              <p>
                Building upon the immense success of SYNTACS '25, the 2026 symposium 
                is poised to redefine the landscape of computer science research 
                in India and beyond.
              </p>
              <p>
                Join academic leaders and research scholars at IIT Ropar for 
                two days of rigorous discourse, collaborative sessions, and 
                technological breakthroughs.
              </p>
            </div>
            
            <div className="flex items-center gap-12 pt-10 border-t border-white/10 grayscale opacity-40">
              <div className="text-sm font-mono tracking-widest font-bold">IIT ROPAR</div>
              <div className="text-sm font-mono tracking-widest font-bold">CSE DEPARTMENT</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="p-16 rounded-[4rem] bg-gradient-to-br from-white/[0.04] to-transparent border border-white/10 relative overflow-hidden group"
          >
            <div className="relative z-10">
              <span className="text-[10px] font-mono tracking-[0.5em] text-white/20 block mb-6 uppercase">Get in Touch</span>
              <h3 className="text-4xl font-bold mb-12 tracking-tight">Project Inquires.</h3>
              
              <div className="space-y-10">
                <a href="mailto:cse.events@iitrpr.ac.in" className="flex items-center gap-6 group/link">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover/link:bg-white/20 transition-all duration-500">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] text-white/20 uppercase font-mono tracking-widest mb-1">Symposium Events</p>
                    <p className="text-lg text-white/70 group-hover/link:text-white transition-colors">cse.events@iitrpr.ac.in</p>
                  </div>
                </a>
                
                <div className="pt-10">
                   <p className="text-[10px] text-white/20 uppercase font-mono tracking-widest mb-6">Social Frontier</p>
                   <div className="flex gap-8">
                      <a href="#" className="text-sm text-white/40 hover:text-white transition-colors">LinkedIn</a>
                      <a href="#" className="text-sm text-white/40 hover:text-white transition-colors">Twitter</a>
                      <a href="#" className="text-sm text-white/40 hover:text-white transition-colors">Instagram</a>
                   </div>
                </div>
              </div>
            </div>
            {/* Background Blur Effect */}
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-white/[0.03] blur-[120px] rounded-full group-hover:bg-white/10 transition-colors duration-1000" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EventInfo;
