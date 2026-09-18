import React, { useRef, useState } from 'react';
import { X, Download, Printer, ExternalLink, Mail, Phone, MapPin, Github, Linkedin, CheckCircle2, Copy, Check } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION_DATA, TECHNICAL_SKILLS, INTERNSHIPS_DATA, PROJECTS_DATA, CERTIFICATIONS_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDownload: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, onDownload }) => {
  const resumeRef = useRef<HTMLDivElement>(null);
  const [copiedText, setCopiedText] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const rawResumeText = `DODDIGARLA HASINI
Aspiring Systems/Software Engineer | Java, Python, DSA & DBMS Fundamentals
Krishna, Andhra Pradesh, India | ${PERSONAL_INFO.email} | ${PERSONAL_INFO.phone}
github.com/Hasini-501 | linkedin.com/in/hasini-doddigarla

PROFESSIONAL SUMMARY
${PERSONAL_INFO.professionalSummary}

EDUCATION
B.Tech, Artificial Intelligence and Data Science\t2024 - 2027 (Expected)
Sri C R Reddy College of Engineering | CGPA: 8.0 / 10
Diploma, Computer Science and Engineering\t2021 - 2024
A.A.N.M & V.V.R.S.R Polytechnic College | 89.8%

TECHNICAL SKILLS
Core CS: ${TECHNICAL_SKILLS.coreCS.join(', ')}
Languages: ${TECHNICAL_SKILLS.languages.join(', ')}
Web Development: ${TECHNICAL_SKILLS.webDevelopment.join(', ')}
Frameworks & Libraries: ${TECHNICAL_SKILLS.frameworksLibraries.join(', ')}
AI/ML: ${TECHNICAL_SKILLS.aiMl.join(', ')}
Tools: ${TECHNICAL_SKILLS.tools.join(', ')}

PROJECTS
AI-Driven Smart Hiring and Candidate Matching Copilot\tPython, Streamlit, Llama 3.2, Pandas, Plotly
• Designed the data flow for resume screening, JD matching, and candidate scoring end-to-end, structuring 100+ resume-JD records with Pandas.
• Built the scoring and visualization layer with Plotly so results are interpretable, not just raw model output.

AI Resume Tailor\tPython, Streamlit, Rule-Based + LLM Scoring
• Designed a rule-based scoring engine (not pure LLM output) so resume-to-JD match scores are explainable and auditable.
• Built the logic to flag specific skill gaps and map them to course recommendations.

AuraX - Hand Gesture Tracking\tPython, OpenCV, MediaPipe
• Built real-time hand landmark detection with OpenCV and MediaPipe, mapping distinct gestures to distinct visual outputs.
• Handled the logic layer translating raw landmark coordinates into gesture states (open palm, index point, two-finger, fist).

Also Built: AI Learning Buddy (Python, Streamlit, Gemini API) - on-demand explanations and quizzes across 5 subject areas; Personal Portfolio - Creative Vault (React, JavaScript, HTML, CSS) - a component-based site with a downloadable resume.

TRAINING PROGRAMS
Virtual Internship - Infosys Springboard\tJul 29, 2026 - Sep 17, 2026
• Completed structured, industry-designed technical modules on Data Structures & Algorithms, AI, Machine Learning, DBMS, and OOP.
Pragati: Path to Future - Infosys Springboard\tAug 2026 - Ongoing
• Completing applied coursework and assessments focused on professional and technical workplace readiness.

CERTIFICATIONS
• QuizOff 2026: India's Biggest AI Quiz - Participation Certificate, CampusCrew x Unstop, among 5,25,000+ participants from 48,500+ institutions.
• Deloitte Australia Technology Job Simulation - Forage.
• Walmart USA Job Simulation - Forage.`;

    navigator.clipboard.writeText(rawResumeText);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 print:p-0 print:bg-white"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-white rounded-2xl border border-pink-200 shadow-2xl overflow-hidden my-6 max-h-[92vh] flex flex-col print:max-h-none print:shadow-none print:border-none print:rounded-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar - Hidden on print */}
        <div className="flex items-center justify-between px-6 py-4 bg-pink-50/70 border-b border-pink-200 shrink-0 print:hidden">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-rose-500" />
            <div>
              <h3 className="font-display font-bold text-base text-stone-900">
                Resume Preview — Hasini Doddigarla
              </h3>
              <p className="text-xs text-stone-600 font-mono">
                Aspiring Systems/Software Engineer (B.Tech 2027)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              id="resume-modal-copy-text-btn"
              title="Copy plain text resume"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white hover:bg-pink-100 text-stone-700 border border-pink-200 transition-colors shadow-xs"
            >
              {copiedText ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-rose-500" />
                  <span>Copy Text</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              id="resume-modal-print-btn"
              title="Print or Save as PDF"
              className="p-2 rounded-lg text-stone-600 hover:text-stone-900 hover:bg-pink-100 transition-colors"
            >
              <Printer className="w-4 h-4" />
            </button>

            <button
              onClick={onDownload}
              id="resume-modal-download-btn"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-rose-500 hover:bg-rose-600 text-white transition-colors shadow-sm shadow-rose-500/25"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>

            <button
              onClick={onClose}
              id="resume-modal-close-btn"
              aria-label="Close modal"
              className="p-2 rounded-lg text-stone-500 hover:text-stone-900 hover:bg-pink-100 transition-colors ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Resume Sheet */}
        <div className="overflow-y-auto p-6 sm:p-10 bg-pink-50/20 print:p-0 print:bg-white print:overflow-visible">
          
          {/* Professional Resume Status Banner - Hidden on print */}
          <div className="mb-6 p-3.5 rounded-xl bg-pink-100/70 border border-pink-200 text-xs text-stone-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 print:hidden">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-500" />
              <span>
                <strong>Official Resume Document</strong> • B.Tech Artificial Intelligence & Data Science (CGPA: 8.0 / 10)
              </span>
            </div>
            <button
              onClick={handleCopyText}
              className="text-rose-600 hover:underline font-mono text-[11px] font-semibold flex items-center gap-1"
            >
              <span>{copiedText ? 'Copied to clipboard!' : 'Copy full resume text'}</span>
            </button>
          </div>

          {/* Actual Resume Document Card */}
          <div
            ref={resumeRef}
            id="printable-resume"
            className="bg-white text-stone-900 rounded-xl p-8 sm:p-12 shadow-md border border-pink-200 max-w-3xl mx-auto font-sans leading-normal print:shadow-none print:border-none print:p-0"
          >
            {/* Header */}
            <div className="border-b border-stone-200 pb-4 mb-4 text-center sm:text-left">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 uppercase">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-stone-700 font-semibold text-xs sm:text-sm mt-1">
                Aspiring Systems/Software Engineer | Java, Python, DSA & DBMS Fundamentals
              </p>

              {/* Contact info row */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-1 text-xs text-stone-600 mt-2 font-mono">
                <span>{PERSONAL_INFO.location}</span>
                <span>|</span>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-rose-600">{PERSONAL_INFO.email}</a>
                <span>|</span>
                <span>{PERSONAL_INFO.phone}</span>
              </div>

              {/* Links row */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-1 text-xs text-rose-600 mt-1 font-mono">
                <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="hover:underline">
                  github.com/Hasini-501
                </a>
                <span className="text-stone-400">|</span>
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:underline">
                  linkedin.com/in/hasini-doddigarla
                </a>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="mb-4">
              <h2 className="text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200 pb-1 mb-1.5">
                Professional Summary
              </h2>
              <p className="text-xs text-stone-700 leading-relaxed text-justify">
                {PERSONAL_INFO.professionalSummary}
              </p>
            </div>

            {/* Education */}
            <div className="mb-4">
              <h2 className="text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200 pb-1 mb-2">
                Education
              </h2>
              <div className="space-y-2">
                <div className="text-xs">
                  <div className="flex justify-between items-baseline font-semibold text-stone-900">
                    <span>B.Tech, Artificial Intelligence and Data Science</span>
                    <span className="text-stone-500 font-normal text-xs">2024 - 2027 (Expected)</span>
                  </div>
                  <div className="flex justify-between text-stone-600 text-xs mt-0.5">
                    <span>Sri C R Reddy College of Engineering</span>
                    <span className="font-semibold text-rose-600">CGPA: 8.0 / 10</span>
                  </div>
                </div>

                <div className="text-xs">
                  <div className="flex justify-between items-baseline font-semibold text-stone-900">
                    <span>Diploma, Computer Science and Engineering</span>
                    <span className="text-stone-500 font-normal text-xs">2021 - 2024</span>
                  </div>
                  <div className="flex justify-between text-stone-600 text-xs mt-0.5">
                    <span>A.A.N.M & V.V.R.S.R Polytechnic College</span>
                    <span className="font-semibold text-rose-600">89.8%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Skills */}
            <div className="mb-4">
              <h2 className="text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200 pb-1 mb-2">
                Technical Skills
              </h2>
              <div className="space-y-1 text-xs text-stone-700">
                <div><strong>Core CS:</strong> {TECHNICAL_SKILLS.coreCS.join(', ')}</div>
                <div><strong>Languages:</strong> {TECHNICAL_SKILLS.languages.join(', ')}</div>
                <div><strong>Web Development:</strong> {TECHNICAL_SKILLS.webDevelopment.join(', ')}</div>
                <div><strong>Frameworks & Libraries:</strong> {TECHNICAL_SKILLS.frameworksLibraries.join(', ')}</div>
                <div><strong>AI/ML:</strong> {TECHNICAL_SKILLS.aiMl.join(', ')}</div>
                <div><strong>Tools:</strong> {TECHNICAL_SKILLS.tools.join(', ')}</div>
              </div>
            </div>

            {/* Projects */}
            <div className="mb-4">
              <h2 className="text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200 pb-1 mb-2">
                Projects
              </h2>
              <div className="space-y-3 text-xs">
                {/* Project 1 */}
                <div>
                  <div className="flex flex-wrap justify-between items-baseline font-semibold text-stone-900">
                    <span>AI-Driven Smart Hiring and Candidate Matching Copilot</span>
                    <span className="text-stone-500 font-mono text-[11px]">Python, Streamlit, Llama 3.2, Pandas, Plotly</span>
                  </div>
                  <ul className="list-disc list-inside space-y-0.5 text-stone-700 mt-1">
                    <li>Designed the data flow for resume screening, JD matching, and candidate scoring end-to-end, structuring 100+ resume-JD records with Pandas.</li>
                    <li>Built the scoring and visualization layer with Plotly so results are interpretable, not just raw model output.</li>
                  </ul>
                </div>

                {/* Project 2 */}
                <div>
                  <div className="flex flex-wrap justify-between items-baseline font-semibold text-stone-900">
                    <span>AI Resume Tailor</span>
                    <span className="text-stone-500 font-mono text-[11px]">Python, Streamlit, Rule-Based + LLM Scoring</span>
                  </div>
                  <ul className="list-disc list-inside space-y-0.5 text-stone-700 mt-1">
                    <li>Designed a rule-based scoring engine (not pure LLM output) so resume-to-JD match scores are explainable and auditable.</li>
                    <li>Built the logic to flag specific skill gaps and map them to course recommendations.</li>
                  </ul>
                </div>

                {/* Project 3 */}
                <div>
                  <div className="flex flex-wrap justify-between items-baseline font-semibold text-stone-900">
                    <span>AuraX - Hand Gesture Tracking</span>
                    <span className="text-stone-500 font-mono text-[11px]">Python, OpenCV, MediaPipe</span>
                  </div>
                  <ul className="list-disc list-inside space-y-0.5 text-stone-700 mt-1">
                    <li>Built real-time hand landmark detection with OpenCV and MediaPipe, mapping distinct gestures to distinct visual outputs.</li>
                    <li>Handled the logic layer translating raw landmark coordinates into gesture states (open palm, index point, two-finger, fist).</li>
                  </ul>
                </div>

                {/* Also Built */}
                <div className="pt-1 text-xs text-stone-600 italic border-t border-stone-100">
                  <strong>Also Built:</strong> AI Learning Buddy (Python, Streamlit, Gemini API) - on-demand explanations and quizzes across 5 subject areas; Personal Portfolio - Creative Vault (React, JavaScript, HTML, CSS) - a component-based site with a downloadable resume.
                </div>
              </div>
            </div>

            {/* Training Programs */}
            <div className="mb-4">
              <h2 className="text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200 pb-1 mb-2">
                Training Programs
              </h2>
              <div className="space-y-2 text-xs">
                <div>
                  <div className="flex justify-between items-baseline font-semibold text-stone-900">
                    <span>Virtual Internship - Infosys Springboard</span>
                    <span className="text-stone-500 text-xs font-normal">Jul 29, 2026 - Sep 17, 2026</span>
                  </div>
                  <ul className="list-disc list-inside space-y-0.5 text-stone-700 mt-0.5">
                    <li>Completed structured, industry-designed technical modules on Data Structures & Algorithms, AI, Machine Learning, DBMS, and OOP.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between items-baseline font-semibold text-stone-900">
                    <span>Pragati: Path to Future - Infosys Springboard</span>
                    <span className="text-stone-500 text-xs font-normal">Aug 2026 - Ongoing</span>
                  </div>
                  <ul className="list-disc list-inside space-y-0.5 text-stone-700 mt-0.5">
                    <li>Completing applied coursework and assessments focused on professional and technical workplace readiness.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-stone-900 border-b border-stone-200 pb-1 mb-2">
                Certifications
              </h2>
              <ul className="list-disc list-inside space-y-1 text-xs text-stone-700">
                <li>
                  <strong>QuizOff 2026: India's Biggest AI Quiz</strong> - Participation Certificate, CampusCrew x Unstop, among 5,25,000+ participants from 48,500+ institutions.
                </li>
                <li>
                  <strong>Deloitte Australia Technology Job Simulation</strong> - Forage.
                </li>
                <li>
                  <strong>Walmart USA Job Simulation</strong> - Forage.
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
