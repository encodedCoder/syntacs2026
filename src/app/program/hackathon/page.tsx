"use client";

import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Calendar, MapPin, Ticket, ExternalLink, Trophy, Home } from "lucide-react";
import Image from "next/image";

const hackathonDetails = [
  {
    title: "Date",
    content: "20th & 21st March 2026",
    icon: Calendar,
  },
  {
    title: "Venue",
    content: "Indian Institute of Technology Ropar, Punjab",
    icon: MapPin,
  },
  {
    title: "Registration Fee",
    content: "Free registration",
    icon: Ticket,
  },
  {
    title: "Accommodation",
    content: "Provided to participants at IIT Ropar",
    icon: Home,
  },
  {
    title: "Cash Prize",
    content: "Up to Rs. 1.5 lakhs",
    icon: Trophy,
  },
];

export default function HackathonPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <PageHero 
        title="National Level Hackathon"
        subtitle="ISEA Phase III Project"
        description="On FinTech Cybersecurity"
      />

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Details Column */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-12"
            >
              <div className="space-y-6">
                <h2 className="text-4xl font-bold tracking-tight">Event Details</h2>
                <div className="grid gap-6">
                  {hackathonDetails.map((detail, index) => (
                    <div key={index} className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100">
                      <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-slate-600 flex-shrink-0">
                        <detail.icon size={20} />
                      </div>
                      <div>
                        <p className="text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-1">{detail.title}</p>
                        <p className="text-lg font-semibold text-slate-900">{detail.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Registration Column */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-12"
            >
              <div className="p-8 md:p-12 rounded-[2.5rem] bg-slate-900 text-white relative overflow-hidden shadow-2xl">
                <div className="relative z-10 space-y-8">
                  <div>
                    <h2 className="text-3xl font-bold mb-4">Register Now</h2>
                    <p className="text-slate-400">Join us for two days of intense competition and innovation.</p>
                  </div>

                  <div className="space-y-8">
                    <div className="flex flex-col items-center gap-6 p-6 rounded-3xl bg-white/5 border border-white/10">
                      <div className="relative w-48 h-48 bg-white p-2 rounded-2xl overflow-hidden">
                        <Image 
                          src="/Hacka/QR.jpg" 
                          alt="Registration QR Code" 
                          fill 
                          className="object-contain"
                        />
                      </div>
                      <p className="text-sm font-mono tracking-widest text-slate-400 uppercase">Scan to Register</p>
                    </div>

                    <a 
                      href="https://faas.isea.app/formview/Hackathons20260223QPRP" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-4 bg-white text-slate-900 rounded-xl font-bold hover:bg-slate-100 transition-colors group"
                    >
                      <span>Registration Link</span>
                      <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                  </div>
                </div>

                {/* Decorative background element */}
                <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-500/20 blur-[80px] rounded-full" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
