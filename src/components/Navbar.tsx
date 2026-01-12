"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.onChange((latest) => setIsScrolled(latest > 50));
  }, [scrollY]);

  return (
    <motion.nav
      style={{ 
        backgroundColor: `rgba(5, 5, 5, ${isScrolled ? 0.8 : 0})`,
        backdropFilter: `blur(${isScrolled ? 12 : 0}px)`,
      }}
      className="fixed top-0 left-0 right-0 z-[100] px-6 py-6 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className="group flex items-center gap-3">
          <div className="w-8 h-8 bg-white flex items-center justify-center rounded-lg group-hover:scale-110 transition-transform">
            <span className="text-black font-bold text-xs">S26</span>
          </div>
          <span className="font-bold tracking-tighter text-xl hidden sm:block">SYNTACS '26</span>
        </a>

        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-8">
            <a href="#keynotes" className="text-sm font-medium text-white/40 hover:text-white transition-colors">Keynotes</a>
            <a href="#program" className="text-sm font-medium text-white/40 hover:text-white transition-colors">Program</a>
            <a href="#info" className="text-sm font-medium text-white/40 hover:text-white transition-colors">Venue & Contact</a>
          </div>
          
          <a 
            href="https://www.syntacs2025.site/register" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-white text-black text-sm font-bold rounded-full hover:scale-105 transition-transform"
          >
            Register
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
