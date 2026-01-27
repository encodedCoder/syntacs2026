"use client";

import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function FAQPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <PageHero
                title="FAQ"
                subtitle="SYNTACS 2026"
                description="Frequently Asked Questions"
            />

            <div className="max-w-5xl mx-auto px-6 py-20 min-h-[40vh] flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-slate-900">
                        To be updated soon
                    </h2>
                    <p className="text-slate-600 text-lg">
                        We are compiling a list of frequently asked questions. Please check back later.
                    </p>
                </motion.div>
            </div>

            <Footer />
        </main>
    );
}
