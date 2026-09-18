import React, { useState } from 'react';
import { Briefcase, Award, ArrowUpRight, CheckCircle2, Calendar, MapPin, Code2, PlusCircle, ExternalLink } from 'lucide-react';
import { INTERNSHIPS_DATA } from '../data/portfolioData';
import { Internship } from '../types';

interface InternshipsProps {
  onViewCertificate: (internship: Internship) => void;
  onViewProject: (projectId: string) => void;
}

export const Internships: React.FC<InternshipsProps> = ({ onViewCertificate, onViewProject }) => {
  return (
    <section id="internships" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-14">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-rose-600 uppercase">
            <span className="w-6 h-[1px] bg-rose-400" />
            <span>05 • Professional Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-stone-900 tracking-tight">
            Internships & Applied Work
          </h2>
          <p className="text-sm sm:text-base text-stone-600 max-w-xl">
            Real-world industry cohorts where technical solutions were built for actual organizational workflows.
          </p>
        </div>

        {/* Internship List */}
        <div className="space-y-8">
          {INTERNSHIPS_DATA.map((intern) => (
            <div
              key={intern.id}
              className="rounded-3xl bg-white border border-pink-200/90 p-6 sm:p-10 transition-all duration-300 hover:border-rose-300 shadow-xl shadow-pink-200/30 relative overflow-hidden"
            >
              {/* Subtle accent corner glow */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-pink-300/10 rounded-full blur-3xl pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Left Header Column */}
                <div className="lg:col-span-4 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-100 text-rose-700 text-xs font-mono font-semibold border border-pink-200">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>Featured Experience</span>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-stone-900">
                      {intern.organization}
                    </h3>
                    <p className="text-base font-semibold text-rose-600 mt-0.5">
                      {intern.program}
                    </p>
                    <p className="text-sm text-stone-700 mt-1">
                      {intern.role}
                    </p>
                  </div>

                  <div className="space-y-1.5 text-xs text-stone-600 font-mono">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-rose-500" />
                      <span>{intern.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-rose-500" />
                      <span>{intern.location}</span>
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="pt-3 flex flex-wrap gap-2.5">
                    <button
                      onClick={() => onViewCertificate(intern)}
                      id={`internship-view-cert-${intern.id}`}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-rose-500 hover:bg-rose-600 text-white transition-all duration-200 shadow-md shadow-rose-500/25 active:scale-95"
                    >
                      <Award className="w-4 h-4" />
                      <span>View Certificate</span>
                    </button>

                    <button
                      onClick={() => onViewProject('smart-hiring-platform')}
                      id={`internship-view-proj-${intern.id}`}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-pink-50 hover:bg-pink-100 text-pink-800 border border-pink-200 transition-all duration-200 active:scale-95 shadow-xs"
                    >
                      <Code2 className="w-4 h-4 text-rose-500" />
                      <span>View Project</span>
                    </button>
                  </div>
                </div>

                {/* Right Details Column */}
                <div className="lg:col-span-8 space-y-5">
                  <div className="p-4 rounded-2xl bg-pink-50/60 border border-pink-200/80">
                    <span className="block text-[11px] font-mono uppercase tracking-wider text-stone-500 mb-1">
                      Project & Technology Focus
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-stone-900">
                      {intern.projectName}
                    </h4>
                    <p className="text-xs sm:text-sm text-stone-600 mt-1">
                      {intern.projectFocus}
                    </p>
                  </div>

                  {/* Contributions list */}
                  <div className="space-y-2.5">
                    <span className="text-xs font-mono uppercase tracking-wider text-stone-600 block font-semibold">
                      Key Contributions & Learnings
                    </span>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-stone-700">
                      {intern.contributions.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies pill box */}
                  <div className="pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {intern.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md text-xs font-mono bg-pink-50/70 text-stone-700 border border-pink-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}

          {/* Reserved Space for Future Internships */}
          <div className="p-6 rounded-3xl border border-dashed border-pink-300 bg-white/90 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-xs">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-pink-100 flex items-center justify-center text-rose-600 shrink-0 border border-pink-200">
                <PlusCircle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-stone-900">
                  Ready for Summer / Fall SDE & AI Internships
                </h4>
                <p className="text-xs text-stone-600">
                  Actively open to software engineering, backend, and machine learning developer internship opportunities for 2025–2026.
                </p>
              </div>
            </div>

            <a
              href="#contact"
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-rose-500 hover:bg-rose-600 text-white transition-colors whitespace-nowrap shadow-sm shadow-rose-500/25"
            >
              Get in Touch
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
