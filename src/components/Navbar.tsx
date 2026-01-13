"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
      
      // Show/Hide logic: Show on scroll up, hide on scroll down (if not at top)
      if (latest < 50) {
        setIsVisible(true);
      } else if (latest > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(latest);
    });
  }, [scrollY, lastScrollY]);

  const navLinks = [
    { name: "Keynotes", href: "#keynotes" },
    { name: "Program", href: "#program" },
    { name: "Venue & Contact", href: "#info" },
  ];

  return (
    <>
      <motion.nav
        animate={{ y: isVisible || isMobileMenuOpen ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        style={{ 
          backgroundColor: `rgba(5, 5, 5, ${isScrolled || isMobileMenuOpen ? 0.9 : 0})`,
          backdropFilter: `blur(${isScrolled || isMobileMenuOpen ? 12 : 0}px)`,
        }}
        className="fixed top-0 left-0 right-0 z-[100] px-6 py-6"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link 
            href="/" 
            className="group flex items-center gap-3"
            onClick={(e) => {
              if (window.location.pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
          >
            <div className="w-8 h-8 bg-white flex items-center justify-center rounded-lg group-hover:scale-110 transition-transform">
              <span className="text-black font-bold text-xs">S26</span>
            </div>
            <span className="font-bold tracking-tighter text-lg sm:text-xl">SYNTACS '26</span>
          </Link>

          <div className="flex items-center gap-4 md:gap-8">
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-sm font-medium text-white/40 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            <a 
              href="https://www.syntacs2025.site/register" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-white text-black text-sm font-bold rounded-full hover:scale-105 transition-transform"
            >
              Register
            </a>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden p-2 text-white/60 hover:text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[90] bg-[#050505] pt-32 px-10 md:hidden"
          >
            <div className="flex flex-col gap-10">
              {navLinks.map((link, index) => (
                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * (index + 1) }}
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-4xl font-bold tracking-tighter text-white/40 hover:text-white transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-10 pt-10 border-t border-white/5"
              >
                <p className="text-white/20 font-mono text-xs uppercase tracking-widest mb-4">Symposium Venue</p>
                <p className="text-white/60 text-lg">IIT Ropar, Punjab, India</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

