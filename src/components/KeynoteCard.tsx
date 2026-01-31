import { motion } from "framer-motion";
import { ExternalLink, LucideIcon } from "lucide-react";
import Image from "next/image";

interface Speaker {
    name: string;
    role: string;
    org: string;
    link: string;
    linkText: string;
    image: string;
    icon: LucideIcon;
}

interface KeynoteCardProps {
    speaker: Speaker;
    index: number;
}

const KeynoteCard = ({ speaker, index }: KeynoteCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            className="group relative"
        >
            <div className="absolute inset-0 bg-white border border-slate-200 rounded-[2rem] transition-all duration-500 group-hover:bg-slate-50 group-hover:border-slate-300 shadow-sm" />
            <div className="relative p-7 sm:p-10 flex flex-col h-full min-h-[300px] sm:min-h-[350px] justify-between z-10">
                <div className="flex items-start gap-6">
                    {/* Image or Icon Placeholder */}
                    <div className="shrink-0 relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 group-hover:border-slate-300 transition-colors">
                        {speaker.image ? (
                            <Image
                                src={speaker.image}
                                alt={speaker.name}
                                fill
                                className="object-cover"
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center">
                                <speaker.icon size={32} className="text-slate-400" />
                            </div>
                        )}
                    </div>

                    <div>
                        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2 text-slate-900 group-hover:text-slate-950 transition-colors">
                            {speaker.name}
                        </h3>
                        <p className="text-slate-600 text-base sm:text-lg font-medium">{speaker.role}</p>
                        <p className="text-slate-500 text-sm sm:text-base">{speaker.org}</p>
                    </div>
                </div>

                <div className="mt-8 flex justify-end">
                    <a
                        href={speaker.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 uppercase tracking-wider hover:text-blue-600 transition-colors"
                    >
                        {speaker.linkText}
                        <ExternalLink size={16} />
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

export default KeynoteCard;
