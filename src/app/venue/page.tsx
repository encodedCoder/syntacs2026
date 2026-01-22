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

      <section className="py-24 px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 border-l-4 border-slate-900 pl-6 mb-12">
            Nearby Places to Visit 🧳
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-slate-900">Chandigarh 🏙️</h3>
                    <span className="text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full">47 KM</span>
                </div>
                <p className="text-slate-600 leading-relaxed font-light">
                    Chandigarh is a beautiful city located near Ropar and is known for its well-planned architecture, gardens, and museums. The city is also home to several important landmarks, such as the Rock Garden, Sukhna Lake, and the Capitol Complex.
                </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-slate-900">Ropar Wetland 🚾</h3>
                    <span className="text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full">11 KM</span>
                </div>
                <p className="text-slate-600 leading-relaxed font-light">
                    The Ropar Wetland is a popular bird sanctuary and a beautiful natural reserve that is home to a variety of migratory birds. It is also a great spot for boating and picnics.
                </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                     <h3 className="text-xl font-bold text-slate-900">Archaeological Museum 🗿</h3>
                     <span className="text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full">5 KM</span>
                </div>
                <p className="text-slate-600 leading-relaxed font-light">
                    The Archaeological Museum in Ropar is a must-visit for history enthusiasts. It houses several ancient artifacts and relics that offer a glimpse into the region's rich past.
                </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-slate-900">Virasat-e-Khalsa 🖼️</h3>
                    <span className="text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full">45 KM</span>
                </div>
                <p className="text-slate-600 leading-relaxed font-light">
                    Virasat-e-Khalsa is a museum located in Anandpur Sahib, near Ropar, that showcases the history and culture of the Sikh religion. The museum is a popular tourist spot and is known for its unique architecture.
                </p>
            </div>

             <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-slate-900">Bhakra Nangal Dam 🌊</h3>
                    <span className="text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full">79 KM</span>
                </div>
                <p className="text-slate-600 leading-relaxed font-light">
                    The Bhakra Nangal Dam is another popular tourist attraction located near Ropar. It is one of the largest gravity dams in the world and is a major source of hydroelectric power in northern India.
                </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-slate-900">Naina Devi Temple 🛕</h3>
                    <span className="text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full">68 KM</span>
                </div>
                <p className="text-slate-600 leading-relaxed font-light">
                   Naina Devi Temple is a sacred Hindu temple located near Ropar. It is believed to be the site where the eyes of the Hindu goddess Sati fell, according to Hindu mythology. The temple is a popular pilgrimage site and is known for its beautiful architecture and scenic views.
                </p>
            </div>
             <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow md:col-span-2 lg:col-span-3 text-center">
                <div className="flex justify-center items-center gap-4 mb-2">
                    <h3 className="text-xl font-bold text-slate-900">Hill Stations ⛰️</h3>
                    <span className="text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full">4-6 hours</span>
                </div>
                <p className="text-slate-600 leading-relaxed font-light">
                   4-6 hours drive away from popular hill stations such as Shimla 🚞, Manali ⛰️, Dharamshala 🪂, Dehradoon 🌄, etc.
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
