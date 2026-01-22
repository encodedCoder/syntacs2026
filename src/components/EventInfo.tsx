"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, FileText, Mail, ArrowUpRight, Youtube, Twitter, Instagram, Linkedin } from "lucide-react";

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
  }
];

const EventInfo = () => {
  return (
    <section id="info" className="py-32 px-6 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12 mb-36">
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
            <div className="space-y-8 text-slate-600 text-xl leading-relaxed font-light font-sans">
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
            
            <div className="flex items-center gap-12 pt-10 border-t border-slate-200 grayscale opacity-40">
              <div className="text-sm font-mono tracking-widest font-bold">IIT ROPAR</div>
              <div className="text-sm font-mono tracking-widest font-bold">CSE DEPARTMENT</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="p-16 rounded-[4rem] bg-gradient-to-br from-slate-100 to-transparent border border-slate-200 relative overflow-hidden group shadow-sm"
          >
            <div className="relative z-10">
              <span className="text-[10px] font-mono tracking-[0.5em] text-slate-400 block mb-6 uppercase">Get in Touch</span>
              <h3 className="text-4xl font-bold mb-12 tracking-tight">Event Inquires.</h3>
              
              <div className="space-y-10">
                <a href="mailto:cse.events@iitrpr.ac.in" className="flex items-center gap-6 group/link">
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center group-hover/link:bg-slate-200 transition-all duration-500">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase font-mono tracking-widest mb-1">Symposium Events</p>
                    <p className="text-lg text-slate-600 group-hover/link:text-slate-900 transition-colors">cse.events@iitrpr.ac.in</p>
                  </div>
                </a>
                
                <div className="pt-10">
                   <p className="text-[10px] text-slate-400 uppercase font-mono tracking-widest mb-6">Social Frontier</p>
                   <div className="flex gap-4">
                      {[
                        { icon: <Youtube size={18} />, href: "https://www.youtube.com/@cseiitrpr" },
                        { icon: <Twitter size={18} />, href: "https://x.com/cseiitrpr" },
                        { icon: <Instagram size={18} />, href: "https://www.instagram.com/cseiitropar" },
                        { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/cseiitrpr/" }
                      ].map((social, i) => (
                        <a 
                          key={i}
                          href={social.href} 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:border-slate-400 hover:bg-slate-100 transition-all duration-300"
                        >
                          {social.icon}
                        </a>
                      ))}
                   </div>
                </div>
              </div>
            </div>
            {/* Background Blur Effect */}
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-blue-500/[0.05] blur-[120px] rounded-full group-hover:bg-blue-500/10 transition-colors duration-1000" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EventInfo;
