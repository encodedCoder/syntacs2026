"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface CallForPapersButtonProps {
  className?: string;
}

const CallForPapersButton = ({ className = "" }: CallForPapersButtonProps) => {
  return (
    <Link href="/call-for-papers">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`inline-flex px-8 py-3 md:px-10 md:py-4 animate-gradient-border text-slate-900 text-xs md:text-sm font-medium tracking-[0.2em] uppercase rounded-full transition-all duration-300 shadow-lg items-center gap-2 ${className}`}
      >
        <span className="relative z-10">Call for Papers</span>
      </motion.button>
    </Link>
  );
};

export default CallForPapersButton;
