"use client";

import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import { Calendar, MapPin, Users, FileText, Award, Video, ExternalLink, CheckCircle2, Download } from "lucide-react";
import Footer from "@/components/Footer";

export default function CallForPapersPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <PageHero
        title="CALL FOR POSTERS"
        subtitle="SYNTACS 2026"
        description="Present your research, share your ideas, and connect with the community at our vibrant poster session."
      />

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-20">

        {/* About Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-slate-900">About</h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            We invite students, researchers, and professionals to submit posters for SYNTACS 2026.
            The poster session provides a vibrant platform to present ideas, ongoing work, and completed
            research while fostering collaboration and networking.
          </p>
        </motion.section>

        {/* Poster Areas (Themes) */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-slate-900">Poster Areas (Themes)</h2>
          <p className="text-slate-600 text-lg mb-8">
            Submissions are invited in (but not limited to) the following four areas:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Strategic Intelligence & Theoretical Computer Science",
                description: "Algorithms, complexity, graph theory, optimization, theoretical machine learning, federated and reinforcement learning, human–AI interaction, and fairness."
              },
              {
                title: "Networks, Security & Distributed Systems",
                description: "Computer and wireless networks, cybersecurity, cryptography, blockchain, distributed systems, IoT, edge computing, and cloud security."
              },
              {
                title: "Visual Computing & Artificial Intelligence",
                description: "Computer vision, image processing, deep learning, generative AI, multimedia, multimodal learning, medical imaging, remote sensing, natural language processing, and explainable AI."
              },
              {
                title: "System Architecture & Infrastructure",
                description: "Computer architecture, hardware security, hardware accelerators, high-performance and green computing, embedded systems, operating system, and edge accelerators."
              },
              {
                title: "Computing Applications and Demonstrations",
                description: ""
              }
            ].map((area, index) => (
              <div key={index} className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-3 text-slate-900">{area.title}</h3>
                {area.description && (
                  <p className="text-slate-600 leading-relaxed">
                    {area.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </motion.section>


        {/* Event Details */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 text-slate-900">Event Details</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
              <Calendar className="text-slate-600 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-3 text-slate-900">Dates</h3>
              <ul className="space-y-4 text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={18} className="text-slate-500 mt-1 shrink-0" />
                  <span>Submission Deadline: <strong>16 Feb 2026</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={18} className="text-slate-500 mt-1 shrink-0" />
                  <span>Acceptance Notification: <strong>2nd March 2026</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={18} className="text-slate-500 mt-1 shrink-0" />
                  <span>Camera Ready: <strong>9th March 2026</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={18} className="text-slate-500 mt-1 shrink-0" />
                  <span>Early Bird Registration: <strong>9th March 2026</strong></span>
                </li>
                <li className="flex items-start gap-2 pt-2 border-t border-slate-200">
                  <CheckCircle2 size={18} className="text-slate-500 mt-1 shrink-0" />
                  <span>Conference Dates: <strong>20–21 March 2026</strong></span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
              <MapPin className="text-slate-600 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-3 text-slate-900">Venue</h3>
              <p className="text-slate-600">
                <strong>CSE, IIT Ropar</strong>
              </p>
              <p className="text-slate-500 text-sm mt-2">
                IIT Ropar, Punjab, India
              </p>
            </div>
          </div>
        </motion.section>

        {/* Who Can Submit */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 text-slate-900">Who Can Submit?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "UG / PG students",
              "PhD scholars",
              "Researchers",
              "Industry professionals",
              "Start-ups and innovators"
            ].map((category, index) => (
              <div key={index} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center gap-3">
                <Users className="text-slate-600 shrink-0" size={24} />
                <span className="text-slate-900">{category}</span>
              </div>
            ))}
          </div>
          <p className="text-slate-600 mt-6 text-sm">
            Both new posters and previously presented posters are welcome.
          </p>
        </motion.section>

        {/* Poster Guidelines */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 text-slate-900">Poster Guidelines</h2>

          <div className="space-y-8">
            {/* Format */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-slate-900">
                <FileText className="text-slate-600" size={28} />
                Format
              </h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="text-slate-500 mt-1">•</span>
                  <span><strong>Size:</strong> A0 (Portrait)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-500 mt-1">•</span>
                  <span><strong>File for submission:</strong> PDF</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-500 mt-1">•</span>
                  <span><strong>Language:</strong> English</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-500 mt-1">•</span>
                  <span><strong>Samples:</strong> View <a href="/static/poster_samples/Poster_Sample_PowerPoint.pdf" target="_blank" rel="noopener noreferrer" className="text-slate-900 underline underline-offset-2 hover:text-blue-600 transition-colors">PowerPoint</a> and <a href="/static/poster_samples/Poster_Sample_Overleaf.pdf" target="_blank" rel="noopener noreferrer" className="text-slate-900 underline underline-offset-2 hover:text-blue-600 transition-colors">LaTeX</a> samples</span>
                </li>
              </ul>
            </div>

            {/* Previously Presented Posters */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-slate-900">Previously Presented Posters</h3>
              <p className="text-slate-600">
                Posters already presented at any conference/workshop can be submitted.
              </p>
            </div>

            {/* New Posters */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-slate-900">New Posters</h3>
              <p className="text-slate-600 mb-4">
                Participants creating fresh posters must use the official templates to maintain quality.
              </p>
              <p className="text-slate-500 text-sm mb-3">Download official templates:</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="/static/poster_templates/PosterA0_Syntacs26_template_Powerpoint.pptx"
                  download
                  className="px-4 py-2 rounded-full bg-slate-100 border border-slate-200 text-sm text-slate-700 hover:bg-slate-200 hover:border-slate-300 transition-colors flex items-center gap-2"
                >
                  <span>PowerPoint</span>
                  <Download size={14} />
                </a>
                <a
                  href="/static/poster_templates/PosterA0_Syntacs26_template_LaTex.zip"
                  download
                  className="px-4 py-2 rounded-full bg-slate-100 border border-slate-200 text-sm text-slate-700 hover:bg-slate-200 hover:border-slate-300 transition-colors flex items-center gap-2"
                >
                  <span>LaTeX (Zip)</span>
                  <Download size={14} />
                </a>
              </div>

              <p className="text-slate-500 text-sm mb-3 mt-6">View filled samples (PDF):</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="/static/poster_samples/Poster_Sample_PowerPoint.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-sm text-slate-700 hover:bg-slate-100 hover:border-slate-300 transition-colors flex items-center gap-2"
                >
                  <span>Sample (PPT)</span>
                  <ExternalLink size={14} />
                </a>
                <a
                  href="/static/poster_samples/Poster_Sample_Overleaf.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-sm text-slate-700 hover:bg-slate-100 hover:border-slate-300 transition-colors flex items-center gap-2"
                >
                  <span>Sample (LaTeX)</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Submission Guidelines */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 text-slate-900">Submission Guidelines</h2>
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
            <p className="text-slate-600 leading-relaxed text-lg">
              Authors submitting posters to SYNTACS 2026 must prepare their posters in A0 size (portrait orientation) and submit them in PDF format through the designated submission portal. Both new posters and previously presented posters are eligible for submission. To ensure uniformity and ease of preparation, the organizing committee will provide official PowerPoint and Overleaf templates, which authors are strongly encouraged to use while creating their posters. Authors who already have a poster presented at another conference may submit their existing portrait-format poster, provided it conforms to the A0 portrait size requirement. All accepted posters will be presented in a physical poster session, and authors are required to bring a printed copy of their poster to the conference venue for display; digital-only or virtual poster presentations will not be accommodated. Posters accepted at SYNTACS 2026 will not be included in any conference proceedings.
            </p>
          </div>
        </motion.section>

        {/* Presentation Requirement */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 text-slate-900">Presentation Requirement</h2>
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
            <p className="text-slate-600 mb-6">
              This is a <strong className="text-slate-900">physical poster session</strong>.
            </p>
            <p className="text-slate-500 mb-4">Participants must:</p>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-slate-500 mt-1 shrink-0" />
                <span>Print and bring the poster yourself</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-slate-500 mt-1 shrink-0" />
                <span>Be present at the poster during the assigned session</span>
              </li>
            </ul>
          </div>
        </motion.section>

        {/* Registration Fee */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 text-slate-900">Registration Fee</h2>
          <div className="p-10 rounded-3xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 shadow-sm">
            <div className="text-5xl font-bold mb-6 text-slate-900">₹1500</div>
            <p className="text-slate-500 text-sm mb-8">(inclusive of GST)</p>

            <h3 className="text-xl font-bold mb-4 text-slate-900">Includes:</h3>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-slate-500 mt-1 shrink-0" />
                <span>Poster presentation</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-slate-500 mt-1 shrink-0" />
                <span>Participation</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-slate-500 mt-1 shrink-0" />
                <span>Certificate</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-slate-500 mt-1 shrink-0" />
                <span>Lunch + High Tea on Main Event</span>
              </li>
            </ul>

            <p className="text-slate-500 text-sm mt-6">
              <strong>Note:</strong> Accommodation is not included.
            </p>
          </div>
        </motion.section>

        {/* Lightning Talks & Awards */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 text-slate-900">Lightning Talks & Awards</h2>
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
            <Award className="text-slate-600 mb-6" size={36} />
            <p className="text-slate-600 mb-6">
              The best posters will be shortlisted for <strong className="text-slate-900">Lightning Talks</strong>:
            </p>
            <ul className="space-y-3 text-slate-600 mb-6">
              <li className="flex items-start gap-3">
                <span className="text-slate-500 mt-1">•</span>
                <span><strong>Duration:</strong> 5–8 minutes</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-slate-500 mt-1">•</span>
                <span>Details will be communicated later</span>
              </li>
            </ul>
            <div className="pt-6 border-t border-slate-200">
              <p className="text-slate-600">
                Best Lightning Talks will receive <strong className="text-slate-900">awards</strong>.
              </p>
              <p className="text-slate-500 mt-2">
                All participants will receive certificates.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Optional Demo Video */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 text-slate-900">Optional Demo Video</h2>
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
            <Video className="text-slate-600 mb-6" size={32} />
            <p className="text-slate-600 mb-6">
              If your poster includes a demo, prototype, or experiment, you may submit a video:
            </p>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start gap-3">
                <span className="text-slate-500 mt-1">•</span>
                <span><strong>Duration:</strong> 5–10 minutes</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-slate-500 mt-1">•</span>
                <span><strong>Platform:</strong> YouTube</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-slate-500 mt-1">•</span>
                <span><strong>Submission:</strong> Share the YouTube link in the submission form</span>
              </li>
            </ul>
          </div>
        </motion.section>

        {/* Instructions for Authors */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 text-slate-900">Instructions for Authors</h2>
          <div className="p-10 rounded-3xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold mb-6 text-slate-900">Track: Poster Presentation – SYNTACS 2026</h3>
            <ul className="space-y-4 text-slate-600">
              <li className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-slate-500 mt-1 shrink-0" />
                <span>Submit your poster in <strong className="text-slate-900">PDF format</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-slate-500 mt-1 shrink-0" />
                <span>Poster size must be <strong className="text-slate-900">A0 (Portrait)</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-slate-500 mt-1 shrink-0" />
                <span>Posters previously presented at other conferences are <strong className="text-slate-900">allowed</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-slate-500 mt-1 shrink-0" />
                <span>New posters must follow the official templates (<strong className="text-slate-900">downloadable above</strong>)</span>
              </li>
            </ul>
          </div>
        </motion.section>

        {/* Required Information */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 text-slate-900">Required Information</h2>
          <div className="p-10 rounded-3xl bg-white border border-slate-200 shadow-sm">
            <p className="text-slate-500 mb-6">When submitting your poster, you will need to provide:</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-slate-500 mt-2 shrink-0" />
                  <div>
                    <p className="text-slate-900 font-medium">Poster Title</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-slate-500 mt-2 shrink-0" />
                  <div>
                    <p className="text-slate-900 font-medium">Authors & Affiliations</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-slate-500 mt-2 shrink-0" />
                  <div>
                    <p className="text-slate-900 font-medium">Corresponding Author Email</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-slate-500 mt-2 shrink-0" />
                  <div>
                    <p className="text-slate-900 font-medium">Poster Upload (PDF)</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-slate-500 mt-2 shrink-0" />
                  <div>
                    <p className="text-slate-900 font-medium">Is this poster previously presented?</p>
                    <p className="text-slate-500 text-sm mt-1">Yes / No</p>
                    <p className="text-slate-500 text-sm">If yes, mention the event name</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-slate-500 mt-2 shrink-0" />
                  <div>
                    <p className="text-slate-900 font-medium">Do you have a demo/video?</p>
                    <p className="text-slate-500 text-sm mt-1">Optional: Share a YouTube link (5–10 minutes)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Presentation & Registration Policy */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 text-slate-900">Presentation & Registration Policy</h2>
          <div className="p-10 rounded-3xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 shadow-sm">
            <p className="text-slate-600 mb-6">
              This is a <strong className="text-slate-900">physical poster presentation</strong>.
            </p>

            <div className="space-y-6">
              <div>
                <p className="text-slate-500 mb-4">Selected participants must:</p>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-slate-500 mt-1 shrink-0" />
                    <span>Print and bring the poster themselves</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-slate-500 mt-1 shrink-0" />
                    <span>Be present during the poster session</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-slate-200">
                <p className="text-slate-600 mb-2">
                  <strong className="text-slate-900">Registration fee:</strong> ₹1500 (inclusive of GST)
                </p>
                <p className="text-slate-500 text-sm">
                  <strong>Note:</strong> Accommodation is not included.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Submission */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 text-slate-900">Submission</h2>
          <div className="p-10 rounded-3xl bg-gradient-to-br from-blue-50 to-white border border-blue-200 shadow-sm">
            <p className="text-slate-600 mb-6">
              <strong>Submission Platform:</strong> CMT
            </p>
            <a
              href="https://cmt3.research.microsoft.com/SYNTACS2026"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-slate-900 text-white font-bold hover:bg-slate-800 hover:scale-105 transition-all mb-8 shadow-lg"
            >
              <span>Submit Your Poster</span>
              <ExternalLink size={18} />
            </a>

            <div className="pt-8 border-t border-slate-200">
              <p className="text-slate-500 mb-4">You will be asked to upload:</p>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-slate-500 mt-1 shrink-0" />
                  <span>Poster (PDF)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-slate-500 mt-1 shrink-0" />
                  <span>Indicate if previously presented</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-slate-500 mt-1 shrink-0" />
                  <span>Optional YouTube demo link</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* CMT Acknowledgment */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-12 pt-12 border-t border-slate-200"
        >
          <p className="text-slate-500 text-sm italic text-center leading-relaxed">
            CMT ACKNOWLEDGMENT: The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
          </p>
        </motion.section>

      </div>

      <Footer />
    </main>
  );
}
