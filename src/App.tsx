import React, { useState } from 'react';
import { Palette } from 'lucide-react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { PhotoProvider } from './context/PhotoContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ResumeSection } from './components/ResumeSection';
import { ResumeModal } from './components/ResumeModal';
import { EducationTimeline } from './components/EducationTimeline';
import { LearningJourney } from './components/LearningJourney';
import { Internships } from './components/Internships';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { CertificateModal } from './components/CertificateModal';
import { EditPhotoModal } from './components/EditPhotoModal';
import { PaletteModal } from './components/PaletteModal';
import { HobbiesBeyondCode } from './components/HobbiesBeyondCode';
import { Contact } from './components/Contact';
import { BackToTop } from './components/BackToTop';
import { Internship } from './types';
import { PERSONAL_INFO } from './data/portfolioData';

function PortfolioLayout() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [activeCertificate, setActiveCertificate] = useState<Internship | null>(null);
  const { currentPalette, openPaletteModal } = useTheme();

  const handleDownloadResume = () => {
    // Triggers download of the placeholder resume file (or generates printable version)
    const link = document.createElement('a');
    link.href = PERSONAL_INFO.resumePdfUrl;
    link.download = 'Hasini_Doddigarla_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Also open modal so the user immediately sees the full formatted resume
    setResumeModalOpen(true);
  };

  const handleViewInternshipProject = (projectId: string) => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className="min-h-screen transition-colors duration-500 relative font-sans"
      style={{
        backgroundColor: currentPalette.bgHex,
        color: currentPalette.isDark ? '#f1f5f9' : '#1c1917'
      }}
    >
      {/* Ambient background radial gradients that adapt dynamically to the active palette */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div
          className="absolute -top-40 -right-40 w-[650px] h-[650px] rounded-full blur-3xl transition-colors duration-700"
          style={{ backgroundColor: currentPalette.glowHex1 }}
        />
        <div
          className="absolute top-1/3 -left-40 w-[550px] h-[550px] rounded-full blur-3xl transition-colors duration-700"
          style={{ backgroundColor: currentPalette.glowHex2 }}
        />
        <div
          className="absolute bottom-10 right-10 w-[600px] h-[600px] rounded-full blur-3xl transition-colors duration-700"
          style={{ backgroundColor: currentPalette.glowHex1 }}
        />
      </div>

      {/* Navigation */}
      <Navbar onOpenResume={() => setResumeModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative">
        {/* Hero / Welcome */}
        <Hero
          onOpenResume={() => setResumeModalOpen(true)}
          onDownloadResume={handleDownloadResume}
        />

        {/* About Me */}
        <About />

        {/* Dedicated Resume Card Section */}
        <ResumeSection
          onOpenResume={() => setResumeModalOpen(true)}
          onDownloadResume={handleDownloadResume}
        />

        {/* Education Timeline */}
        <EducationTimeline />

        {/* Learning Journey Roadmap */}
        <LearningJourney />

        {/* Internships */}
        <Internships
          onViewCertificate={(internship) => setActiveCertificate(internship)}
          onViewProject={handleViewInternshipProject}
        />

        {/* Featured Projects */}
        <Projects />

        {/* Certifications */}
        <Certifications />

        {/* Hobbies & Beyond Code */}
        <HobbiesBeyondCode />

        {/* Contact & Footer */}
        <Contact />
      </main>

      {/* Global Interactive Modals */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
        onDownload={handleDownloadResume}
      />

      <CertificateModal
        item={activeCertificate}
        onClose={() => setActiveCertificate(null)}
      />

      <EditPhotoModal />

      {/* Color Palette Switcher Modal */}
      <PaletteModal />

      {/* Floating Quick Palette Pill on Bottom-Left for Desktop */}
      <button
        onClick={openPaletteModal}
        id="floating-palette-btn"
        title="Change theme color palette"
        className="fixed bottom-6 left-6 z-40 hidden md:flex items-center gap-2 px-3.5 py-2 rounded-full shadow-lg border backdrop-blur-md transition-all duration-200 hover:scale-105 active:scale-95 text-xs font-semibold group"
        style={{
          backgroundColor: currentPalette.isDark ? 'rgba(22, 29, 39, 0.92)' : 'rgba(255, 255, 255, 0.92)',
          borderColor: currentPalette.borderHex,
          color: currentPalette.isDark ? '#f1f5f9' : '#1c1917'
        }}
      >
        <Palette className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform" style={{ color: currentPalette.primaryHex }} />
        <span>Palette: {currentPalette.name}</span>
        <span
          className="w-2.5 h-2.5 rounded-full ring-1 ring-black/10"
          style={{ backgroundColor: currentPalette.primaryHex }}
        />
      </button>

      {/* Floating Back to Top Control */}
      <BackToTop />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PhotoProvider>
        <PortfolioLayout />
      </PhotoProvider>
    </ThemeProvider>
  );
}
