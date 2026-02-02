"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import KeynoteCard from "./KeynoteCard";
import { speakers } from "@/data/speakers";

const KeynotePreview = () => {
  return (
    <section id="keynotes" className="py-32 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">KEYNOTE DISCOURSE</h2>
            <p className="text-slate-600 text-lg">
              SYNTACS will feature world-renowned speakers exploring the frontiers of
              computational intelligence and emerging technologies.
            </p>
          </div>
          <div className="h-[2px] flex-grow bg-slate-200 mx-12 hidden md:block" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {speakers.map((speaker, index) => (
            <KeynoteCard key={index} speaker={speaker} index={index} largeImage={true} />
          ))}
        </div>

        {/* View All Link */}
        <div className="flex justify-center">
          <Link
            href="/keynotes"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 shadow-sm"
          >
            <span className="text-sm font-bold tracking-wide">Learn more about keynotes</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default KeynotePreview;
