import Navbar from "@/components/Navbar";
import SyntacsScroll26 from "@/components/SyntacsScroll26";
import KeynoteSection from "@/components/KeynoteSection";
import Schedule from "@/components/Schedule";
import EventInfo from "@/components/EventInfo";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <Navbar />
      
      {/* High-End Scrollytelling Hero */}
      <SyntacsScroll26 />

      {/* Symposium Content */}
      <div className="relative">
        <KeynoteSection />
        <Schedule />
        <EventInfo />
      </div>

      {/* Footer */}
      <footer className="py-24 border-t border-white/5 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-white flex items-center justify-center rounded-xl">
                  <span className="text-black font-black text-sm">S26</span>
                </div>
                <span className="font-bold tracking-tighter text-2xl text-white/90">SYNTACS '26</span>
              </div>
              <p className="text-white/20 text-sm max-w-sm leading-relaxed font-light">
                The Symposium on Novel Technologies and Advances in Computer Science returns 
                to IIT Ropar for its most immersive edition yet.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-x-16 gap-y-8">
              <div className="space-y-4">
                <p className="text-[10px] uppercase tracking-[0.4em] text-white/10 font-mono mb-6">Navigation</p>
                <a href="#keynotes" className="block text-sm text-white/40 hover:text-white transition-colors">Keynotes</a>
                <a href="#program" className="block text-sm text-white/40 hover:text-white transition-colors">Program</a>
                <a href="#info" className="block text-sm text-white/40 hover:text-white transition-colors">Venue</a>
                <a href="https://iitrpr.ac.in/" target="_blank" className="block text-sm text-white/40 hover:text-white transition-colors">IIT Ropar</a>
              </div>
            </div>
          </div>
          
          <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between gap-8">
            <p className="text-white/20 text-[10px] font-mono tracking-widest uppercase">
              © 2026 INDIAN INSTITUTE OF TECHNOLOGY ROPAR.
            </p>
            <div className="flex gap-6">
              <span className="text-white/20 text-[10px] font-mono uppercase">Designed by encodedCoder</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
