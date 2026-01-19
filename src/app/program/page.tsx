import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Schedule from "@/components/Schedule";
import Footer from "@/components/Footer";

export default function ProgramPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <PageHero 
        title="SYMPOSIUM PROGRAM"
        subtitle="SYNTACS 2026"
        description="Two days of rigorous discourse, collaborative sessions, and technological breakthroughs on 20-21 March 2026."
      />

      <Schedule />

      <Footer />
    </main>
  );
}
