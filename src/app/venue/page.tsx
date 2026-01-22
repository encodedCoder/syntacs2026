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

      <section className="py-24 px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 border-l-4 border-slate-900 pl-6 mb-8">
            About IIT Ropar 🗺️
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed font-light text-justify">
            IIT Ropar is located in the district of Rupnagar, the city formerly known as Ropar, 
            which possesses great historical importance. The excavations carried out at Rupnagar 
            have proved that this town was a seat of well-developed Indus Valley Civilization. 
            The city dates back to Harappa - Mohenjo-daro civilization located east of Satluj River. 
            Ropar is nested on the foothills of the Shivalik ranges, and the institute is very 
            close to Sri Anandpur Sahib - the birth place of Sikhism, and several scenic hill 
            stations of Himachal Pradesh. There are many national institutes and research 
            laboratories in the close vicinity of IIT Ropar, including IISER Mohali, NIPER Mohali, 
            PGIMER Chd., CSIR CSIO Chd., TBRL DRDO and IMTECH Chd.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 border-l-4 border-slate-900 pl-6 mb-12">
            How To Reach 🛣️
          </h2>
          
          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                From Chandigarh Railway Station 🚉
              </h3>
              <p className="text-lg text-slate-700 leading-relaxed font-light">
                You can get a pre-paid taxi 🚕 which will cost around ₹1500. Also, you can get state or private bus 🚌 transport from ‘Sector 43’ bus stand of Chandigarh to the Rupnagar bus stand which will cost around ₹80. Then auto-rickshaw 🛺 may cost around ₹300 to reach IIT Ropar from Rupnagar bus stand.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                From Chandigarh Airport 🛫
              </h3>
              <p className="text-lg text-slate-700 leading-relaxed font-light">
                You can get a pre-paid taxi which will cost around ₹1680. The taxi can drop you off directly at respective hostel/Guest-house. The taxi or auto-rickshaw would have to make an entry at the IIT Main Gate at the Security.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                From Rupnagar Railway Station 🚂
              </h3>
              <p className="text-lg text-slate-700 leading-relaxed font-light">
                An auto-rickshaw may cost around ₹300 to reach IIT till hostel or Guest-house.
              </p>
            </div>
          </div>
        </div>
      </section>

      <EventInfo />

      <Footer />
    </main>
  );
}
