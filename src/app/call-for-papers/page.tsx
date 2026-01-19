"use client";

import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import { Calendar, MapPin, Users, FileText, Award, Video, ExternalLink, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Youtube, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

export default function CallForPapersPage() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <Navbar />
      
      <PageHero 
        title="CALL FOR POSTERS"
        subtitle="SYNTACS 2026"
        description="Present your research, share your ideas, and connect with the community at our vibrant poster session."
      />

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-20">
        
        {/* About Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">About</h2>
          <p className="text-white/60 text-lg leading-relaxed">
            We invite students, researchers, and professionals to submit posters for SYNTACS 2026. 
            The poster session provides a vibrant platform to present ideas, ongoing work, and completed 
            research while fostering collaboration and networking.
          </p>
        </motion.section>

        {/* Event Details */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">Event Details</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10">
              <Calendar className="text-white/40 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-3">Dates</h3>
              <ul className="space-y-2 text-white/60">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={18} className="text-white/40 mt-1 shrink-0" />
                  <span><strong>20–21 March 2026</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={18} className="text-white/40 mt-1 shrink-0" />
                  <span>Main Conference Day: <strong>21 March 2026</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={18} className="text-white/40 mt-1 shrink-0" />
                  <span>Interaction & Collaboration Day: <strong>20 March 2026</strong></span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10">
              <MapPin className="text-white/40 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-3">Venue</h3>
              <p className="text-white/60">
                <strong>CSE, IIT Ropar</strong>
              </p>
              <p className="text-white/40 text-sm mt-2">
                IIT Ropar, Punjab, India
              </p>
            </div>
          </div>
        </motion.section>

        {/* Who Can Submit */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">Who Can Submit?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "UG / PG students",
              "PhD scholars",
              "Researchers",
              "Industry professionals",
              "Start-ups and innovators"
            ].map((category, index) => (
              <div key={index} className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex items-center gap-3">
                <Users className="text-white/40 shrink-0" size={24} />
                <span className="text-white/80">{category}</span>
              </div>
            ))}
          </div>
          <p className="text-white/50 mt-6 text-sm">
            Both new posters and previously presented posters are welcome.
          </p>
        </motion.section>

        {/* Poster Guidelines */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">Poster Guidelines</h2>
          
          <div className="space-y-8">
            {/* Format */}
            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <FileText className="text-white/40" size={28} />
                Format
              </h3>
              <ul className="space-y-3 text-white/60">
                <li className="flex items-start gap-3">
                  <span className="text-white/40 mt-1">•</span>
                  <span><strong>Size:</strong> A0 (Portrait)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white/40 mt-1">•</span>
                  <span><strong>File for submission:</strong> PDF</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white/40 mt-1">•</span>
                  <span><strong>Language:</strong> English</span>
                </li>
              </ul>
            </div>

            {/* Previously Presented Posters */}
            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10">
              <h3 className="text-xl font-bold mb-4">Previously Presented Posters</h3>
              <p className="text-white/60">
                Posters already presented at any conference/workshop can be submitted.
              </p>
            </div>

            {/* New Posters */}
            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10">
              <h3 className="text-xl font-bold mb-4">New Posters</h3>
              <p className="text-white/60 mb-4">
                Participants creating fresh posters must use the official templates to maintain quality.
              </p>
              <p className="text-white/50 text-sm mb-3">Templates will be provided in:</p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm">PowerPoint</span>
                <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm">Overleaf (LaTeX)</span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Presentation Requirement */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">Presentation Requirement</h2>
          <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10">
            <p className="text-white/60 mb-6">
              This is a <strong className="text-white/90">physical poster session</strong>.
            </p>
            <p className="text-white/50 mb-4">Participants must:</p>
            <ul className="space-y-3 text-white/60">
              <li className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-white/40 mt-1 shrink-0" />
                <span>Print and bring the poster yourself</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-white/40 mt-1 shrink-0" />
                <span>Be present at the poster during the assigned session</span>
              </li>
            </ul>
          </div>
        </motion.section>

        {/* Registration Fee */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">Registration Fee</h2>
          <div className="p-10 rounded-3xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10">
            <div className="text-5xl font-bold mb-6">₹1500</div>
            <p className="text-white/40 text-sm mb-8">(inclusive of GST)</p>
            
            <h3 className="text-xl font-bold mb-4">Includes:</h3>
            <ul className="space-y-3 text-white/60">
              <li className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-white/40 mt-1 shrink-0" />
                <span>Poster presentation</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-white/40 mt-1 shrink-0" />
                <span>Participation</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-white/40 mt-1 shrink-0" />
                <span>Certificate</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-white/40 mt-1 shrink-0" />
                <span>Lunch + High Tea on Main Event</span>
              </li>
            </ul>
            
            <p className="text-white/40 text-sm mt-6">
              <strong>Note:</strong> Accommodation is not included.
            </p>
          </div>
        </motion.section>

        {/* Lightning Talks & Awards */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">Lightning Talks & Awards</h2>
          <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10">
            <Award className="text-white/40 mb-6" size={36} />
            <p className="text-white/60 mb-6">
              The best posters will be shortlisted for <strong className="text-white/90">Lightning Talks</strong>:
            </p>
            <ul className="space-y-3 text-white/60 mb-6">
              <li className="flex items-start gap-3">
                <span className="text-white/40 mt-1">•</span>
                <span><strong>Duration:</strong> 5–8 minutes</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white/40 mt-1">•</span>
                <span>Details will be communicated later</span>
              </li>
            </ul>
            <div className="pt-6 border-t border-white/10">
              <p className="text-white/60">
                Best Lightning Talks will receive <strong className="text-white/90">awards</strong>.
              </p>
              <p className="text-white/50 mt-2">
                All participants will receive certificates.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Optional Demo Video */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">Optional Demo Video</h2>
          <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10">
            <Video className="text-white/40 mb-6" size={32} />
            <p className="text-white/60 mb-6">
              If your poster includes a demo, prototype, or experiment, you may submit a video:
            </p>
            <ul className="space-y-3 text-white/60">
              <li className="flex items-start gap-3">
                <span className="text-white/40 mt-1">•</span>
                <span><strong>Duration:</strong> 5–10 minutes</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white/40 mt-1">•</span>
                <span><strong>Platform:</strong> YouTube</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white/40 mt-1">•</span>
                <span><strong>Submission:</strong> Share the YouTube link in the submission form</span>
              </li>
            </ul>
          </div>
        </motion.section>

        {/* Instructions for Authors */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">Instructions for Authors</h2>
          <div className="p-10 rounded-3xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10">
            <h3 className="text-xl font-bold mb-6 text-white/90">Track: Poster Presentation – SYNTACS 2026</h3>
            <ul className="space-y-4 text-white/60">
              <li className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-white/40 mt-1 shrink-0" />
                <span>Submit your poster in <strong className="text-white/80">PDF format</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-white/40 mt-1 shrink-0" />
                <span>Poster size must be <strong className="text-white/80">A0 (Portrait)</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-white/40 mt-1 shrink-0" />
                <span>Posters previously presented at other conferences are <strong className="text-white/80">allowed</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-white/40 mt-1 shrink-0" />
                <span>New posters must follow the official templates provided (<strong className="text-white/80">PowerPoint / Overleaf</strong>)</span>
              </li>
            </ul>
          </div>
        </motion.section>

        {/* Required Information */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">Required Information</h2>
          <div className="p-10 rounded-3xl bg-white/[0.02] border border-white/10">
            <p className="text-white/50 mb-6">When submitting your poster, you will need to provide:</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-white/40 mt-2 shrink-0" />
                  <div>
                    <p className="text-white/80 font-medium">Poster Title</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-white/40 mt-2 shrink-0" />
                  <div>
                    <p className="text-white/80 font-medium">Authors & Affiliations</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-white/40 mt-2 shrink-0" />
                  <div>
                    <p className="text-white/80 font-medium">Corresponding Author Email</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-white/40 mt-2 shrink-0" />
                  <div>
                    <p className="text-white/80 font-medium">Poster Upload (PDF)</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-white/40 mt-2 shrink-0" />
                  <div>
                    <p className="text-white/80 font-medium">Is this poster previously presented?</p>
                    <p className="text-white/40 text-sm mt-1">Yes / No</p>
                    <p className="text-white/40 text-sm">If yes, mention the event name</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-white/40 mt-2 shrink-0" />
                  <div>
                    <p className="text-white/80 font-medium">Do you have a demo/video?</p>
                    <p className="text-white/40 text-sm mt-1">Optional: Share a YouTube link (5–10 minutes)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Presentation & Registration Policy */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">Presentation & Registration Policy</h2>
          <div className="p-10 rounded-3xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10">
            <p className="text-white/60 mb-6">
              This is a <strong className="text-white/90">physical poster presentation</strong>.
            </p>
            
            <div className="space-y-6">
              <div>
                <p className="text-white/50 mb-4">Selected participants must:</p>
                <ul className="space-y-3 text-white/60">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-white/40 mt-1 shrink-0" />
                    <span>Print and bring the poster themselves</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-white/40 mt-1 shrink-0" />
                    <span>Be present during the poster session</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-white/10">
                <p className="text-white/60 mb-2">
                  <strong className="text-white/80">Registration fee:</strong> ₹1500 (inclusive of GST)
                </p>
                <p className="text-white/50 text-sm">
                  <strong>Note:</strong> Accommodation is not included.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Submission */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">Submission</h2>
          <div className="p-10 rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/20">
            <p className="text-white/60 mb-6">
              <strong>Submission Platform:</strong> CMT
            </p>
            <a 
              href="#" 
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-bold hover:scale-105 transition-transform mb-8"
            >
              <span>Submit Your Poster</span>
              <ExternalLink size={18} />
            </a>
            
            <div className="pt-8 border-t border-white/10">
              <p className="text-white/50 mb-4">You will be asked to upload:</p>
              <ul className="space-y-3 text-white/60">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-white/40 mt-1 shrink-0" />
                  <span>Poster (PDF)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-white/40 mt-1 shrink-0" />
                  <span>Indicate if previously presented</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-white/40 mt-1 shrink-0" />
                  <span>Optional YouTube demo link</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

      </div>

      {/* Footer */}
      <footer className="py-24 border-t border-white/5 bg-[#050505] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
            <div className="md:col-span-4">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-white flex items-center justify-center rounded-xl">
                  <span className="text-black font-black text-sm">S26</span>
                </div>
                <span className="font-bold tracking-tighter text-2xl text-white/90">SYNTACS '26</span>
              </div>
              <p className="text-white/40 text-sm leading-relaxed font-light mb-8 max-w-sm">
                The Symposium on Novel Technologies and Advances in Computer Science returns 
                to IIT Ropar for its most immersive edition yet. Join us for a journey through the frontier of computational research.
              </p>
              <div className="flex gap-4">
                {[
                  { icon: <Youtube size={18} />, href: "https://www.youtube.com/@cseiitrpr" },
                  { icon: <Twitter size={18} />, href: "https://x.com/cseiitrpr" },
                  { icon: <Instagram size={18} />, href: "https://www.instagram.com/cseiitropar" },
                  { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/cseiitrpr/" }
                ].map((social, i) => (
                  <a 
                    key={i}
                    href={social.href} 
                    target="_blank"
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="md:col-span-2">
              <p className="text-[10px] uppercase tracking-[0.4em] text-white/20 font-mono mb-8">Navigation</p>
              <ul className="space-y-4">
                <li><Link href="/" className="text-sm text-white/40 hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/keynotes" className="text-sm text-white/40 hover:text-white transition-colors">Keynotes</Link></li>
                <li><Link href="/program" className="text-sm text-white/40 hover:text-white transition-colors">Program</Link></li>
                <li><Link href="/venue" className="text-sm text-white/40 hover:text-white transition-colors">Venue</Link></li>
              </ul>
            </div>

            <div className="md:col-span-3">
              <p className="text-[10px] uppercase tracking-[0.4em] text-white/20 font-mono mb-8">Contact Details</p>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <MapPin size={18} className="text-white/20 shrink-0" />
                  <p className="text-sm text-white/40 leading-relaxed font-light">
                    S. Ramanujan Block, Department of Computer Science and Engineering, IIT Ropar, Rupnagar, Punjab - 140001, India
                  </p>
                </div>
                <div className="flex gap-4 items-center">
                  <Mail size={18} className="text-white/20 shrink-0" />
                  <a href="mailto:cseoffice@iitrpr.ac.in" className="text-sm text-white/40 hover:text-white transition-colors">cseoffice@iitrpr.ac.in</a>
                </div>
              </div>
            </div>

            <div className="md:col-span-3">
              <p className="text-[10px] uppercase tracking-[0.4em] text-white/20 font-mono mb-8">Location</p>
              <div className="rounded-2xl overflow-hidden border border-white/5 opacity-80 hover:opacity-100 transition-opacity duration-500 grayscale brightness-75 hover:grayscale-0 hover:brightness-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13684.267356494109!2d76.473305!3d30.9686169!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3905542fe45e58f7%3A0x5d16c2617cfdbdb8!2sIndian%20Institute%20Of%20Technology%E2%80%93Ropar%20(IIT%E2%80%93Ropar)!5e0!3m2!1sen!2sin!4v1697191231534!5m2!1sen!2sin"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-white/20 text-[10px] font-mono tracking-widest uppercase">
              © 2026 INDIAN INSTITUTE OF TECHNOLOGY ROPAR. ALL RIGHTS RESERVED.
            </p>
            <div className="flex items-center gap-6">
              <span className="text-white/20 text-[10px] font-mono uppercase tracking-[0.2em]">
                Designed by <a href="https://encodedcoder.com" target="_blank" className="text-white/40 hover:text-white transition-colors">Suresh</a>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
