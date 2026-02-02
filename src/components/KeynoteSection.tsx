"use client";

import KeynoteCard from "./KeynoteCard";
import { speakers } from "@/data/speakers";

const KeynoteSection = () => {
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

        <div className="grid md:grid-cols-2 gap-8">
          {speakers.map((speaker, index) => (
            <KeynoteCard key={index} speaker={speaker} index={index} showBio={true} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeynoteSection;
