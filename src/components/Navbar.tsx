"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import CallForPostersButton from "./CallForPostersButton";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
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
    {
      name: "Program",
      href: "/program",
      subLinks: [
        { name: "Main Program", href: "/program" },
        { name: "Hackathon", href: "/program/hackathon" },
      ]
    },
    { name: "Venue", href: "/venue" },
    { name: "Registration", href: "/registration" },
    { name: "Committee", href: "/committee" },
    { name: "FAQ", href: "/faq" },
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
            <div className="group-hover:scale-105 transition-transform">
              <Image
                src="/head-footer-logo.png"
                alt="SYNTACS Logo"
                width={150}
                height={50}
                className="h-10 w-auto object-contain"
                priority
              />
            </div>

          </Link>

          <div className="flex items-center gap-6 md:gap-12">
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => link.subLinks && setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className="px-4 py-1.5 sm:px-8 sm:py-2.5 text-[10px] sm:text-sm font-medium rounded-full tracking-tight bg-slate-900 text-white hover:bg-slate-800 hover:scale-105 transition-all duration-300 shadow-lg block"
                  >
                    {link.name}
                  </Link>

                  {link.subLinks && (
                    <AnimatePresence>
                      {activeDropdown === link.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden py-2"
                        >
                          {link.subLinks.map((subLink) => (
                            <Link
                              key={subLink.name}
                              href={subLink.href}
                              className="block px-6 py-3 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {subLink.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            <CallForPostersButton />

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
            className="fixed inset-0 z-[90] bg-white pt-32 px-10 md:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-8 pb-20">
              {navLinks.map((link, index) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * (index + 1) }}
                  key={link.name}
                  className="space-y-4"
                >
                  <Link
                    href={link.href}
                    onClick={() => !link.subLinks && setIsMobileMenuOpen(false)}
                    className="text-4xl font-bold tracking-tighter text-slate-400 hover:text-slate-900 transition-colors"
                  >
                    {link.name}
                  </Link>

                  {link.subLinks && (
                    <div className="flex flex-col gap-4 pl-4 border-l-2 border-slate-100">
                      {link.subLinks.map((subLink) => (
                        <Link
                          key={subLink.name}
                          href={subLink.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="text-xl font-semibold text-slate-500 hover:text-slate-900"
                        >
                          {subLink.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-6 pt-10 border-t border-slate-100"
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

