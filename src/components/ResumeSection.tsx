import React from 'react';
import { FileText, Download, Eye, CheckCircle, ArrowUpRight, GraduationCap, Briefcase, Code } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ResumeSectionProps {
  onOpenResume: () => void;
  onDownloadResume: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenResume, onDownloadResume }) => {
  return (
    <section id="resume" className="py-20 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="space-y-2 mb-12">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-rose-600 uppercase">
            <span className="w-6 h-[1px] bg-rose-400" />
            <span>02 • Curriculum Vitae</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-stone-900 tracking-tight">
            Resume & Credentials
          </h2>
          <p className="text-sm sm:text-base text-stone-600 max-w-xl">
            A comprehensive snapshot of my education, technical toolkit, and internship contributions.
          </p>
        </div>

        {/* Elegant Clean Resume Preview Card */}
        <div className="relative rounded-3xl bg-white border border-pink-200/90 p-6 sm:p-10 shadow-xl shadow-pink-200/30 overflow-hidden">
          
          {/* Subtle accent corner glow */}
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-pink-300/15 rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Info Column */}
            <div className="lg:col-span-8 space-y-5">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-100 text-rose-700 text-xs font-mono border border-pink-200">
                  <span>Graduating 2027</span>
                  <span>•</span>
                  <span>Open to SDE Internships</span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-stone-900">
                  {PERSONAL_INFO.name}
                </h3>
                
                <p className="text-base sm:text-lg text-stone-700 font-medium">
                  {PERSONAL_INFO.headline} | Java, Python, DSA & DBMS Fundamentals
                </p>
              </div>

              <p className="text-sm text-stone-600 leading-relaxed max-w-2xl">
                Features academic milestones at Sri C R Reddy College of Engineering (CGPA 8.0/10), diploma distinctions (89.8%), training at Infosys Springboard & Pragati, and five independently built applications in Java and Python.
              </p>

              {/* Quick Resume Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-pink-50/70 border border-pink-200/80 text-xs">
                  <div className="flex items-center gap-1.5 text-rose-600 font-semibold mb-1">
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span>Education</span>
                  </div>
                  <span className="text-stone-700 font-medium">B.Tech (AI & DS) • {PERSONAL_INFO.cgpa} CGPA</span>
                </div>

                <div className="p-3 rounded-xl bg-pink-50/70 border border-pink-200/80 text-xs">
                  <div className="flex items-center gap-1.5 text-rose-600 font-semibold mb-1">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>Training Programs</span>
                  </div>
                  <span className="text-stone-700 font-medium">Infosys Springboard & Pragati</span>
                </div>

                <div className="p-3 rounded-xl bg-pink-50/70 border border-pink-200/80 text-xs">
                  <div className="flex items-center gap-1.5 text-rose-600 font-semibold mb-1">
                    <Code className="w-3.5 h-3.5" />
                    <span>Core CS</span>
                  </div>
                  <span className="text-stone-700 font-medium">Java, Python, DSA & DBMS</span>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-3">
                <button
                  onClick={onOpenResume}
                  id="resume-section-view-btn"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm bg-rose-500 hover:bg-rose-600 text-white transition-all duration-200 shadow-md shadow-rose-500/25 active:scale-95"
                >
                  <Eye className="w-4 h-4" />
                  <span>View Resume</span>
                </button>

                <button
                  onClick={onDownloadResume}
                  id="resume-section-download-btn"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm bg-pink-50 hover:bg-pink-100 text-pink-800 border border-pink-200 transition-all duration-200 active:scale-95 shadow-xs"
                >
                  <Download className="w-4 h-4 text-rose-500" />
                  <span>Download Resume</span>
                </button>
              </div>

            </div>

            {/* Right Card / Visual Thumbnail */}
            <div className="lg:col-span-4 flex justify-center">
              <div
                onClick={onOpenResume}
                className="group relative cursor-pointer w-full max-w-xs bg-white rounded-2xl border border-pink-200/90 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-rose-400 hover:shadow-xl shadow-md shadow-pink-100/40"
              >
                {/* Simulated Document Preview */}
                <div className="aspect-[1/1.3] rounded-xl bg-pink-50/40 border border-pink-100 p-4 flex flex-col justify-between overflow-hidden relative">
                  
                  <div className="space-y-2">
                    <div className="w-1/2 h-2.5 bg-rose-400/60 rounded" />
                    <div className="w-3/4 h-1.5 bg-pink-200 rounded" />
                    <div className="w-full h-[1px] bg-pink-200 my-2" />
                    
                    <div className="space-y-1">
                      <div className="w-1/3 h-2 bg-rose-300 rounded" />
                      <div className="w-full h-1 bg-pink-100 rounded" />
                      <div className="w-5/6 h-1 bg-pink-100 rounded" />
                    </div>

                    <div className="space-y-1 pt-1">
                      <div className="w-1/3 h-2 bg-rose-300 rounded" />
                      <div className="w-full h-1 bg-pink-100 rounded" />
                      <div className="w-4/6 h-1 bg-pink-100 rounded" />
                    </div>

                    <div className="space-y-1 pt-1">
                      <div className="w-1/3 h-2 bg-rose-300 rounded" />
                      <div className="w-full h-1 bg-pink-100 rounded" />
                      <div className="w-3/4 h-1 bg-pink-100 rounded" />
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-rose-500/10 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-center p-3">
                    <div className="w-10 h-10 rounded-full bg-rose-500 text-white flex items-center justify-center font-bold shadow-lg mb-2">
                      <Eye className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-semibold text-stone-900 bg-white/95 px-3 py-1 rounded-full shadow-sm border border-pink-200">
                      Click to Expand Preview
                    </span>
                  </div>

                  <div className="pt-2 border-t border-pink-100 flex justify-between items-center text-[10px] font-mono text-stone-500">
                    <span>PDF • A4 format</span>
                    <span>Updated 2026</span>
                  </div>
                </div>

                <div className="mt-3 text-center">
                  <span className="text-xs font-mono text-stone-600 font-medium">
                    hasini_doddigarla_resume.pdf
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Path note */}
          <div className="mt-6 pt-4 border-t border-pink-100 text-xs text-stone-500 font-mono flex items-center gap-2">
            <span>📄</span>
            <span>
              <strong>Official Credentials:</strong> B.Tech (AI & DS) • Class of 2027 • CGPA: 8.0/10.0
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
