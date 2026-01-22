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
    { name: "Keynotes", href: "/keynotes" },
    { name: "Program", href: "/program" },
    { name: "Venue", href: "/venue" },
    { name: "Committee", href: "/committee" },
  ];

  return (
    <>
      <motion.nav
        animate={{ y: isVisible || isMobileMenuOpen ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        style={{ 
          backgroundColor: `rgba(255, 255, 255, ${isScrolled || isMobileMenuOpen ? 0.95 : 0})`,
          backdropFilter: `blur(${isScrolled || isMobileMenuOpen ? 12 : 0}px)`,
        }}
        className="fixed top-0 left-0 right-0 z-[100] px-6 py-6"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link 
            href="/" 
            className="group flex items-center gap-3"
          >
            <div className="group-hover:scale-110 transition-transform flex items-center gap-2">
              <motion.div className="w-8 h-8 bg-slate-900 flex items-center justify-center rounded-lg">
                <span className="text-white font-bold text-sm">S26</span>
              </motion.div>
              <span className="font-bold tracking-tighter text-xl sm:text-2xl text-slate-900">
                SYNTACS<span className="hidden min-[375px]:inline"></span>
              </span>
            </div>

          </Link>

          <div className="flex items-center gap-6 md:gap-12">
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className="px-4 py-1.5 sm:px-8 sm:py-2.5 text-[10px] sm:text-sm font-medium rounded-full tracking-tight bg-slate-900 text-white hover:bg-slate-800 hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            <Link 
              href="/call-for-papers"
              className="px-5 py-2 sm:px-8 sm:py-2.5 bg-slate-900 text-white text-xs sm:text-base font-bold rounded-full hover:bg-slate-800 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Call for Papers
            </Link>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden p-2 text-slate-600 hover:text-slate-900"
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
            className="fixed inset-0 z-[90] bg-white pt-32 px-10 md:hidden"
          >
            <div className="flex flex-col gap-10">
              {navLinks.map((link, index) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * (index + 1) }}
                  key={link.name}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-4xl font-bold tracking-tighter text-slate-400 hover:text-slate-900 transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-10 pt-10 border-t border-white/5"
              >
                <p className="text-slate-400 font-mono text-xs uppercase tracking-widest mb-4">Symposium Venue</p>
                <p className="text-slate-600 text-lg">IIT Ropar, Punjab, India</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

