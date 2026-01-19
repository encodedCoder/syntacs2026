import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import KeynoteSection from "@/components/KeynoteSection";
import Footer from "@/components/Footer";

export default function KeynotesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <PageHero 
        title="KEYNOTE DISCOURSE"
        subtitle="SYNTACS 2026"
        description="World-renowned speakers exploring the frontiers of computational intelligence and emerging technologies."
      />

      <KeynoteSection />

      <Footer />
    </main>
  );
}
