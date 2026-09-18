import React, { useState } from 'react';
import { Award, Calendar, ExternalLink, Eye, CheckCircle2, ShieldCheck } from 'lucide-react';
import { CERTIFICATIONS_DATA } from '../data/portfolioData';
import { Certification } from '../types';
import { CertificateModal } from './CertificateModal';

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <section id="certifications" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-14">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-rose-600 uppercase">
            <span className="w-6 h-[1px] bg-rose-400" />
            <span>07 • Verified Skills</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-stone-900 tracking-tight">
            Certifications & Training
          </h2>
          <p className="text-sm sm:text-base text-stone-600 max-w-xl">
            Industry and academic recognitions demonstrating hands-on proficiency in software, AI, and data science.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CERTIFICATIONS_DATA.map((cert) => (
            <div
              key={cert.id}
              className="group rounded-3xl bg-white border border-pink-200/90 overflow-hidden flex flex-col justify-between p-6 transition-all duration-300 hover:border-rose-300 hover:shadow-xl shadow-md shadow-pink-100/40 relative"
            >
              {/* Thumbnail / Header graphic */}
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-pink-100 border border-pink-200 flex items-center justify-center text-rose-600 shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-pink-50 border border-pink-200 text-stone-600 flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-rose-500" />
                    <span>{cert.issueDate}</span>
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-display font-bold text-stone-900 group-hover:text-rose-600 transition-colors line-clamp-2">
                  {cert.title}
                </h3>

                <p className="text-xs font-semibold text-rose-600 mt-1">
                  {cert.issuer}
                </p>

                {/* Topic / Skills */}
                <div className="mt-4 pt-3 border-t border-pink-100">
                  <span className="text-[10px] font-mono uppercase text-stone-500 block mb-1.5 font-medium">
                    Topics & Technologies
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-pink-50/70 text-stone-700 border border-pink-200/80"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* View Certificate Button */}
              <div className="pt-5 mt-4 border-t border-pink-100 flex items-center justify-between">
                <span className="text-[10px] font-mono text-stone-500">
                  ID: {cert.credentialId || 'VERIFIED'}
                </span>

                <button
                  onClick={() => setSelectedCert(cert)}
                  id={`cert-view-btn-${cert.id}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-600 hover:text-rose-700 transition-colors"
                >
                  <Eye className="w-3.5 h-3.5 text-rose-500" />
                  <span>View</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Certificate Modal */}
        <CertificateModal
          item={selectedCert}
          onClose={() => setSelectedCert(null)}
        />

      </div>
    </section>
  );
};
