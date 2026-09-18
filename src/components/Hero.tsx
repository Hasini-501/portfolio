import React, { useState } from 'react';
import { ArrowDown, Code, Github, Linkedin, Mail, FileText, Sparkles, MapPin, GraduationCap, Check, ExternalLink, Camera, Sliders } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { usePhoto, getPhotoTransformStyle } from '../context/PhotoContext';
import { useTheme } from '../context/ThemeContext';

interface HeroProps {
  onOpenResume: () => void;
  onDownloadResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onDownloadResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const { photoConfig, openEditor } = usePhoto();
  const { currentPalette } = useTheme();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-24 sm:pt-32 pb-16 flex items-center justify-center overflow-hidden"
    >
      {/* Soft pale pink and rose ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-pink-200/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Content Column */}
          <div className="lg:col-span-7 space-y-7 text-left">
            
            {/* Greeting badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-pink-200/90 text-stone-800 text-sm font-medium shadow-xs">
              <span className="inline-block animate-wave origin-[70%_70%] text-base">👋</span>
              <span>Hi, I'm <strong className="text-rose-600 font-bold">{PERSONAL_INFO.displayName}</strong></span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse ml-1" />
              <span className="text-xs text-stone-600 font-normal">Available for Internships (2025–2026)</span>
            </div>

            {/* Headline & Subhead */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-stone-900 leading-[1.12]">
                {PERSONAL_INFO.headline}
              </h1>
              <p className="text-lg sm:text-xl text-stone-700 font-normal leading-relaxed max-w-2xl">
                {PERSONAL_INFO.subHeadline}
              </p>
            </div>

            {/* Personal Welcome Quote Card */}
            <div
              className="relative pl-4 sm:pl-5 border-l-2 py-1.5 max-w-2xl rounded-r-xl"
              style={{
                borderColor: currentPalette.primaryHex,
                backgroundColor: currentPalette.surfaceSubtleHex
              }}
            >
              <p
                className="text-sm sm:text-base italic leading-relaxed"
                style={{ color: currentPalette.isDark ? '#e2e8f0' : '#44403c' }}
              >
                {PERSONAL_INFO.welcomeMessage}
              </p>
            </div>

            {/* Quick Micro Credentials Bar */}
            <div
              className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs sm:text-sm font-medium pt-1"
              style={{ color: currentPalette.isDark ? '#cbd5e1' : '#44403c' }}
            >
              <div className="flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4" style={{ color: currentPalette.primaryHex }} />
                <span>B.Tech AI & DS (CGPA: {PERSONAL_INFO.cgpa}) • Class of {PERSONAL_INFO.graduationYear}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4" style={{ color: currentPalette.primaryHex }} />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#journey"
                onClick={(e) => scrollToSection(e, 'journey')}
                id="hero-cta-journey"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white transition-all duration-200 shadow-md active:scale-95 hover:opacity-95"
                style={{ backgroundColor: currentPalette.primaryHex }}
              >
                <span>Explore My Journey</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, 'projects')}
                id="hero-cta-projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm border transition-all duration-200 active:scale-95 shadow-xs"
                style={{
                  backgroundColor: currentPalette.isDark ? '#1e293b' : '#ffffff',
                  borderColor: currentPalette.borderHex,
                  color: currentPalette.isDark ? '#f8fafc' : '#1c1917'
                }}
              >
                <Code className="w-4 h-4" style={{ color: currentPalette.primaryHex }} />
                <span>View My Projects</span>
              </a>

              <button
                onClick={onOpenResume}
                id="hero-cta-resume"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm border transition-all duration-200 active:scale-95 shadow-xs"
                style={{
                  backgroundColor: currentPalette.surfaceSubtleHex,
                  borderColor: currentPalette.borderHex,
                  color: currentPalette.accentTextHex
                }}
              >
                <FileText className="w-4 h-4" style={{ color: currentPalette.primaryHex }} />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Small Social & Contact Links */}
            <div className="pt-3 border-t border-pink-200/70 flex flex-wrap items-center gap-4">
              <span className="text-xs uppercase tracking-wider text-stone-500 font-mono">
                Connect:
              </span>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-social-github"
                className="flex items-center gap-1.5 text-xs font-medium text-stone-700 hover:text-rose-600 transition-colors"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-social-linkedin"
                className="flex items-center gap-1.5 text-xs font-medium text-stone-700 hover:text-rose-600 transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                id="hero-social-email"
                className="flex items-center gap-1.5 text-xs font-medium text-stone-700 hover:text-rose-600 transition-colors"
                title="Send Email"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>

              <button
                onClick={handleCopyEmail}
                id="hero-copy-email-btn"
                className="text-[11px] font-mono px-2 py-0.5 rounded bg-white text-stone-700 hover:text-rose-600 hover:bg-pink-50 border border-pink-200/80 transition-colors flex items-center gap-1 shadow-xs"
                title="Copy email address"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-500" />
                    <span className="text-emerald-600 font-semibold">Copied!</span>
                  </>
                ) : (
                  <span>copy email</span>
                )}
              </button>
            </div>

          </div>

          {/* Photo & Profile Card Column - Exact Picture Intact, Zero Black Background, Pale Pink Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Decorative pale pink accent aura */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-pink-300/30 via-rose-200/40 to-pink-200/20 rounded-3xl blur-lg opacity-80 pointer-events-none" />

              {/* Portrait Frame Card in Soft Pale Pink & White */}
              <div className="relative bg-white/95 rounded-3xl border border-pink-200/90 p-5 shadow-xl shadow-pink-200/30">
                
                {/* Photo Header Bar */}
                <div className="flex items-center justify-between pb-3 mb-3.5 border-b border-pink-100">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                    <span className="text-xs font-mono text-stone-700 font-medium">Hasini Doddigarla</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <button
                      onClick={openEditor}
                      id="hero-header-edit-photo-btn"
                      className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-pink-100 hover:bg-rose-500 text-rose-700 hover:text-white border border-pink-200 text-[11px] font-mono font-semibold transition-colors shadow-2xs"
                      title="Adjust framing, zoom, or upload a new picture"
                    >
                      <Camera className="w-3 h-3" />
                      <span>Edit Photo</span>
                    </button>

                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-rose-50 text-rose-700 font-semibold border border-rose-200">
                      CGPA: {PERSONAL_INFO.cgpa}
                    </span>
                  </div>
                </div>

                {/* Photo Container - Interactive with edit trigger & custom framing styles */}
                <div
                  onClick={openEditor}
                  id="hero-photo-container"
                  className="relative aspect-[4/4.5] w-full rounded-2xl overflow-hidden bg-pink-50/60 border border-pink-200/80 shadow-inner group cursor-pointer"
                  title="Click to edit, zoom, crop, or replace picture"
                >
                  <img
                    src={photoConfig.url}
                    alt="Hasini Doddigarla"
                    style={getPhotoTransformStyle(photoConfig)}
                    className="w-full h-full object-cover transition-all duration-300"
                  />

                  {/* Floating Edit Picture Pill on Top-Right of Photo */}
                  <div className="absolute top-3 right-3 z-10">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        openEditor();
                      }}
                      id="hero-floating-edit-btn"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 hover:bg-rose-500 text-stone-800 hover:text-white text-xs font-medium border border-pink-200/90 shadow-md backdrop-blur-xs transition-all duration-200 group-hover:scale-105"
                    >
                      <Camera className="w-3.5 h-3.5 text-rose-500 group-hover:text-white transition-colors" />
                      <span className="font-semibold">Edit Picture</span>
                    </button>
                  </div>

                  {/* Hover banner on bottom */}
                  <div className="absolute inset-x-0 bottom-0 p-2.5 bg-gradient-to-t from-stone-900/80 via-stone-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-1.5 text-white text-xs font-medium backdrop-blur-2xs">
                    <Sliders className="w-3.5 h-3.5 text-pink-300" />
                    <span>Click to adjust zoom, framing, or change photo</span>
                  </div>
                </div>

                {/* Profile Identity underneath photo */}
                <div className="mt-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-base font-display font-bold text-stone-900 tracking-tight">
                        {PERSONAL_INFO.displayName}
                      </h3>
                      <p className="text-xs text-stone-600 font-mono">
                        Sri C R Reddy COE • AI & DS
                      </p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-pink-100 text-rose-600 flex items-center justify-center font-bold border border-pink-200 shadow-xs">
                      <Sparkles className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Card footer detail pills */}
                  <div className="pt-3 border-t border-pink-100 grid grid-cols-2 gap-2 text-center text-xs">
                    <div className="p-2.5 rounded-xl bg-pink-50/80 border border-pink-200/70">
                      <span className="block text-stone-500 text-[10px] uppercase font-mono tracking-wider">Academics</span>
                      <span className="font-semibold text-rose-700 text-xs">B.Tech 8.0 CGPA</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-rose-50/70 border border-rose-200/70">
                      <span className="block text-stone-500 text-[10px] uppercase font-mono tracking-wider">Graduation</span>
                      <span className="font-semibold text-stone-800 text-xs">Class of 2027</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
