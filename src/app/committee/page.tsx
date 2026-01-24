import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";

export default function CommitteePage() {
  const committee = [
    { name: "Neeraj Goel", role: "Chair" },
    { name: "Prathmesh", role: "Co-chair" },
  ];

  const facultyCoordination = [
    "Puneet Goyal",
    "Mukesh Saini",
    "Anil Shukla",
    "Jagpreet Singh",
    "Manish Kumar",
  ];

  const technicalProgram = [
    "Puneet Goyal",
    "Mukesh Saini",
    "Anil Shukla",
    "Jagpreet Singh",
    "Manish Kumar",
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <PageHero 
        title="COMMITTEE"
        subtitle="ORGANIZERS"
        description="The dedicated team behind SYNTACS 2026."
      />

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* Organizing Committee */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-8 border-b pb-4">Organizing Committee</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {committee.map((member) => (
                <div key={member.name} className="bg-slate-50 p-6 rounded-2xl">
                  <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
                  <p className="text-slate-600 font-medium">{member.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Chairs */}
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8 border-b pb-4">Program Chair</h2>
              <div className="bg-slate-50 p-6 rounded-2xl">
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
                  <h3 className="text-xl font-bold text-slate-900">Shreya Bansal</h3>
                  <div className="hidden md:block w-px h-6 bg-slate-300"></div>
                  <h3 className="text-xl font-bold text-slate-900">Lownish Rai Sookha</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Faculty Coordination Committee */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-8 border-b pb-4">Faculty Coordination Committee and TPC</h2>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {facultyCoordination.map((name) => (
                <div key={name} className="bg-slate-50 p-4 rounded-xl">
                  <p className="font-semibold text-slate-800">{name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Program Committee */}
          <div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8 border-b pb-4">Website Chair</h2>
              <div className="bg-slate-50 p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-slate-900">Suresh</h3>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
