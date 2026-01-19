import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import EventInfo from "@/components/EventInfo";
import Footer from "@/components/Footer";

export default function VenuePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <PageHero 
        title="VENUE"
        subtitle="SYNTACS 2026"
        description="Join us at IIT Ropar, Punjab for two days of innovation and collaboration."
      />

      <EventInfo />

      <Footer />
    </main>
  );
}
