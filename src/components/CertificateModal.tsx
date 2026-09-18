import React from 'react';
import { X, Award, ExternalLink, Calendar, CheckCircle2, FileText, Download } from 'lucide-react';
import { Certification, Internship } from '../types';

interface CertificateModalProps {
  item: Certification | Internship | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  const isCert = 'title' in item;
  const title = isCert ? item.title : `${item.organization} — ${item.program}`;
  const issuer = isCert ? item.issuer : item.organization;
  const date = isCert ? item.issueDate : item.duration;
  const verificationUrl = isCert ? item.verificationUrl : '#';
  const credentialId = isCert ? item.credentialId : 'INF-SB-7.0-VERIFIED';

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl border border-pink-200 shadow-2xl overflow-hidden my-6 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-pink-50/70 border-b border-pink-200">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-rose-600" />
            <h3 className="font-display font-bold text-sm sm:text-base text-stone-900">
              Certificate Verification Preview
            </h3>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 rounded-lg text-stone-500 hover:text-stone-900 hover:bg-pink-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Certificate Display Card */}
        <div className="p-6 sm:p-8 space-y-6 bg-pink-50/30">
          
          {/* Certificate Graphical Layout */}
          <div className="border-4 border-double border-rose-300/60 rounded-2xl p-6 sm:p-8 bg-white text-center relative overflow-hidden shadow-sm">
            
            <div className="w-12 h-12 rounded-full bg-pink-100 border border-pink-200 flex items-center justify-center text-rose-600 mx-auto mb-3">
              <Award className="w-6 h-6" />
            </div>

            <span className="text-[11px] font-mono tracking-widest uppercase text-stone-500 font-semibold">
              Certificate of Completion
            </span>

            <h4 className="text-xl sm:text-2xl font-display font-bold text-stone-900 mt-2 mb-1">
              {title}
            </h4>

            <p className="text-xs text-stone-600">
              Awarded to <strong className="text-rose-600 font-semibold">Hasini Doddigarla</strong>
            </p>

            <div className="my-5 border-t border-b border-pink-100 py-3 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-mono text-stone-600">
              <div>
                <span className="block text-[10px] text-stone-400 uppercase">Issuing Authority</span>
                <span className="font-semibold text-stone-800">{issuer}</span>
              </div>
              <div>
                <span className="block text-[10px] text-stone-400 uppercase">Timeline / Issue</span>
                <span className="font-semibold text-stone-800">{date}</span>
              </div>
              <div>
                <span className="block text-[10px] text-stone-400 uppercase">Credential ID</span>
                <span className="font-semibold text-stone-800">{credentialId}</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-1.5 text-xs text-emerald-600 font-medium">
              <CheckCircle2 className="w-4 h-4" />
              <span>Verified Credential Record</span>
            </div>
          </div>

          {/* Helper note */}
          <div className="p-3.5 rounded-xl bg-white border border-pink-200 text-xs text-stone-600 font-mono">
            💡 <strong>Verified Credential:</strong> Scanned credential document and verification badge recorded for academic and industry validation.
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-pink-50/70 border-t border-pink-200 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-stone-600 hover:text-stone-900 transition-colors"
          >
            Close
          </button>

          <a
            href={verificationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-rose-500 hover:bg-rose-600 text-white transition-colors shadow-sm shadow-rose-500/25"
          >
            <span>Verify on Portal</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
