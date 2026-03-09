import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import Link from "next/link";
import { CheckCircle2, AlertCircle } from "lucide-react";

export default function RegistrationPage() {
    const inclusions = [
        "Poster presentation",
        "Participation",
        "Certificate",
        "Lunch + High Tea on Main Event",
    ];

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <PageHero
                title="REGISTRATION"
                subtitle="JOIN US"
                description="Register now to be part of SYNTACS 2026 at IIT Ropar."
            />

            <section className="py-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        {/* Fee Details */}
                        <div className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100 shadow-sm">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Registration Fee</h2>
                            <div className="flex items-baseline gap-2 mb-2">
                                <span className="text-5xl font-extrabold text-slate-900">₹1000</span>
                                <span className="text-slate-500 font-medium">/ participant</span>
                            </div>
                            <p className="text-slate-500 text-sm mb-8">(+ GST as applicable)</p>

                            <div className="space-y-4 mb-10">
                                <p className="font-semibold text-slate-800">Includes:</p>
                                {inclusions.map((item) => (
                                    <div key={item} className="flex gap-3 items-center">
                                        <CheckCircle2 size={18} className="text-blue-600 shrink-0" />
                                        <span className="text-slate-600">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <Link
                                href="https://docs.google.com/forms/d/e/1FAIpQLSdve_Fhj2k21r7BPDXJYxLi--LlQbYjbbRxIVYQ4BMknNQJbg/viewform?usp=publish-editor"
                                target="_blank"
                                className="w-full inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-slate-200"
                            >
                                Register Now
                            </Link>
                        </div>

                        {/* Important Notes */}
                        <div className="space-y-8">
                            <div className="p-8 bg-blue-50/50 rounded-3xl border border-blue-100">
                                <div className="flex gap-4 items-start">
                                    <AlertCircle className="text-blue-600 shrink-0 mt-1" size={24} />
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-900 mb-3">Important Note</h3>
                                        <p className="text-slate-600 leading-relaxed mb-4">
                                            Accommodation is not provided. Kindly check the FAQs for the list of nearby hotels/hostels.
                                        </p>
                                        <Link
                                            href="/faq"
                                            className="text-blue-600 font-semibold hover:underline flex items-center gap-1"
                                        >
                                            View FAQs →
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                                <h3 className="text-lg font-bold text-slate-900 mb-3">Questions?</h3>
                                <p className="text-slate-600 mb-6">
                                    If you have any queries regarding registration or the symposium, feel free to reach out to us.
                                </p>
                                <Link
                                    href="mailto:cse office@iitrpr.ac.in"
                                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-slate-200 text-slate-900 rounded-xl font-semibold hover:bg-slate-100 transition-colors"
                                >
                                    Contact Support
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
