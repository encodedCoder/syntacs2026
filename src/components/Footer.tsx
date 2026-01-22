import Link from "next/link";
import { Youtube, Twitter, Instagram, Linkedin, MapPin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-24 border-t border-slate-200 bg-gray-50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          {/* Branding & Description */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-slate-900 flex items-center justify-center rounded-xl">
                <span className="text-white font-black text-sm">S26</span>
              </div>
              <span className="font-bold tracking-tighter text-2xl text-slate-900">SYNTACS</span>
            </div>
            <p className="text-black text-sm leading-relaxed font-light mb-8 max-w-sm">
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
                  className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:border-slate-400 hover:bg-slate-100 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <p className="text-[10px] uppercase tracking-[0.4em] text-black font-mono mb-8">Navigation</p>
            <ul className="space-y-4">
              <li><Link href="/" className="text-sm text-black hover:text-slate-900 transition-colors">Home</Link></li>
              <li><Link href="/keynotes" className="text-sm text-black hover:text-slate-900 transition-colors">Keynotes</Link></li>
              <li><Link href="/program" className="text-sm text-black hover:text-slate-900 transition-colors">Program</Link></li>
              <li><Link href="/venue" className="text-sm text-black hover:text-slate-900 transition-colors">Venue</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-3">
            <p className="text-[10px] uppercase tracking-[0.4em] text-black font-mono mb-8">Contact Details</p>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <MapPin size={18} className="text-black shrink-0" />
                <p className="text-sm text-black leading-relaxed font-light">
                  S. Ramanujan Block, Department of Computer Science and Engineering, IIT Ropar, Rupnagar, Punjab - 140001, India
                </p>
              </div>
              <div className="flex gap-4 items-center">
                <Mail size={18} className="text-black shrink-0" />
                <a href="mailto:cseoffice@iitrpr.ac.in" className="text-sm text-black hover:text-slate-900 transition-colors">cseoffice@iitrpr.ac.in</a>
              </div>
            </div>
          </div>

          {/* Location / CTA */}
          <div className="md:col-span-3">
            <p className="text-[10px] uppercase tracking-[0.4em] text-black font-mono mb-8">Location</p>
            <div className="rounded-2xl overflow-hidden border border-slate-200 opacity-80 hover:opacity-100 transition-opacity duration-500 grayscale brightness-75 hover:grayscale-0 hover:brightness-100">
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
        
        <div className="pt-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-black text-sm font-mono tracking-widest uppercase">
            © 2026 INDIAN INSTITUTE OF TECHNOLOGY ROPAR. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-black text-sm font-mono uppercase tracking-[0.2em]">
              Designed by <a href="https://encodedcoder.com" target="_blank" className="text-black hover:text-slate-900 transition-colors font-bold">Suresh</a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
