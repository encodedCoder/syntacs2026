import Navbar from "@/components/Navbar";
import SyntacsScroll26 from "@/components/SyntacsScroll26";
import WelcomeSection from "@/components/WelcomeSection";
import KeynotePreview from "@/components/KeynotePreview";
import ProgramPreview from "@/components/ProgramPreview";
import VenuePreview from "@/components/VenuePreview";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* High-End Scrollytelling Hero */}
      <SyntacsScroll26 />

      {/* Welcome Section */}
      <WelcomeSection />

      {/* Symposium Content - Preview Sections */}
      <div className="relative">
        <KeynotePreview />
        <ProgramPreview />
        <VenuePreview />
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
