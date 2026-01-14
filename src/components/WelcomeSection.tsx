"use client";

import { motion } from "framer-motion";

const WelcomeSection = () => {
  return (
    <section id="welcome" className="relative py-24 md:py-32 bg-[#050505] overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-4xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white mb-6">
            Welcome to SYNTACS 2026
          </h2>
          <div className="w-20 h-1 bg-white/20 mx-auto rounded-full mb-12" />
        </motion.div>

        <div className="grid gap-8 md:gap-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/60 text-base md:text-lg leading-relaxed text-justify font-light"
          >
            IIT Ropar's Computer Science and Engineering department proudly introduces <span className="text-white font-medium">SYNTACS</span>, <span className="text-white font-medium">SY</span>mposium on <span className="text-white font-medium">N</span>ovel <span className="text-white font-medium">T</span>echnologies and <span className="text-white font-medium">A</span>dvances in <span className="text-white font-medium">C</span>omputer <span className="text-white font-medium">S</span>cience, a Research Scholars Day aimed at fostering collaboration and knowledge exchange within the academic community. This event serves as a platform to bring together research scholars from diverse backgrounds, creating an environment conducive to networking and collaboration.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white/60 text-base md:text-lg leading-relaxed text-justify font-light"
          >
            Organized by CSE IIT Ropar, <span className="text-white font-medium">SYNTACS</span> will feature insightful talks by two prominent speakers, providing attendees with valuable insights into cutting-edge research and industry trends. The event will also include engaging poster sessions and demo sessions, offering scholars an opportunity to showcase their work and receive constructive feedback. We extend a warm invitation to all researchers to join us in this enriching experience, broaden your professional network, and make the most of <span className="text-white font-medium">SYNTACS</span> - a day full of learning and collaborative opportunities.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
