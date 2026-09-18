import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Sun, Moon, Camera, Palette } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { usePhoto, getPhotoTransformStyle } from '../context/PhotoContext';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { theme, toggleTheme, currentPalette, openPaletteModal } = useTheme();
  const { photoConfig, openEditor } = usePhoto();

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Journey', href: '#journey' },
    { name: 'Internships', href: '#internships' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Beyond Code', href: '#beyond-code' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Active section detection
      const sections = ['about', 'education', 'journey', 'internships', 'projects', 'certifications', 'beyond-code', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'backdrop-blur-md border-b shadow-xs'
          : 'bg-transparent'
      }`}
      style={
        isScrolled
          ? {
              backgroundColor: currentPalette.isDark
                ? 'rgba(13, 17, 23, 0.85)'
                : `${currentPalette.bgHex}e6`,
              borderColor: currentPalette.borderHex
            }
          : undefined
      }
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#hero"
          onClick={(e) => handleLinkClick(e, '#hero')}
          className="group flex items-center gap-2.5 transition-colors"
          style={{ color: currentPalette.isDark ? '#f8fafc' : '#1c1917' }}
          id="nav-logo-btn"
        >
          <div
            className="w-8 h-8 rounded-full overflow-hidden border shadow-xs group-hover:scale-105 transition-transform shrink-0 relative"
            style={{
              borderColor: currentPalette.borderHex,
              backgroundColor: currentPalette.surfaceSubtleHex
            }}
          >
            <img
              src={photoConfig.url}
              alt="Hasini Doddigarla"
              style={getPhotoTransformStyle(photoConfig)}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span
              className="font-display font-bold tracking-tight text-lg leading-tight transition-colors group-hover:opacity-80"
              style={{ color: currentPalette.isDark ? '#f8fafc' : '#1c1917' }}
            >
              Hasini
            </span>
            <span
              className="text-[10px] font-mono tracking-wider uppercase -mt-0.5"
              style={{ color: currentPalette.accentTextHex }}
            >
              CS • AI & DS
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav
          className="hidden xl:flex items-center gap-1 p-1.5 rounded-full border text-sm shadow-xs"
          style={{
            backgroundColor: currentPalette.isDark ? 'rgba(22, 29, 39, 0.9)' : 'rgba(255, 255, 255, 0.9)',
            borderColor: currentPalette.borderHex
          }}
        >
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`px-3.5 py-1.5 rounded-full font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-white font-semibold shadow-xs'
                    : 'hover:opacity-100'
                }`}
                style={
                  isActive
                    ? {
                        backgroundColor: currentPalette.primaryHex,
                        color: '#ffffff'
                      }
                    : {
                        color: currentPalette.isDark ? '#cbd5e1' : '#57534e'
                      }
                }
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="hidden sm:flex items-center gap-2">
          {/* Theme Palette Switcher Trigger */}
          <button
            onClick={openPaletteModal}
            id="nav-palette-btn"
            title="Choose Theme Color Palette"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all border shadow-2xs hover:scale-[1.02] active:scale-[0.98]"
            style={{
              backgroundColor: currentPalette.isDark ? '#1e293b' : '#ffffff',
              borderColor: currentPalette.borderHex,
              color: currentPalette.isDark ? '#f1f5f9' : '#1c1917'
            }}
          >
            <Palette className="w-3.5 h-3.5" style={{ color: currentPalette.primaryHex }} />
            <span>Palette</span>
            <span
              className="w-2 h-2 rounded-full ring-1 ring-white/50"
              style={{ backgroundColor: currentPalette.primaryHex }}
            />
          </button>

          {/* Edit Picture Trigger */}
          <button
            onClick={openEditor}
            id="nav-edit-photo-btn"
            title="Edit / Replace Profile Picture"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors border shadow-2xs"
            style={{
              backgroundColor: currentPalette.isDark ? '#1e293b' : '#ffffff',
              borderColor: currentPalette.borderHex,
              color: currentPalette.isDark ? '#cbd5e1' : '#44403c'
            }}
          >
            <Camera className="w-3.5 h-3.5" style={{ color: currentPalette.primaryHex }} />
            <span>Photo</span>
          </button>

          {/* Theme Dark/Light Toggle */}
          <button
            onClick={toggleTheme}
            id="theme-toggle-desktop"
            aria-label="Toggle dark mode"
            className="p-2 rounded-xl transition-colors border"
            style={{
              backgroundColor: currentPalette.isDark ? '#1e293b' : '#ffffff',
              borderColor: currentPalette.borderHex,
              color: currentPalette.primaryHex
            }}
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Resume CTA */}
          <button
            onClick={onOpenResume}
            id="nav-resume-btn"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white transition-all duration-200 shadow-md active:scale-95 hover:opacity-95"
            style={{
              backgroundColor: currentPalette.primaryHex
            }}
          >
            <FileText className="w-4 h-4" />
            <span>Resume</span>
          </button>
        </div>

        {/* Mobile menu and controls */}
        <div className="flex sm:hidden items-center gap-1.5">
          <button
            onClick={openPaletteModal}
            id="mobile-palette-btn"
            aria-label="Choose color palette"
            className="p-2 rounded-lg border"
            style={{
              backgroundColor: currentPalette.isDark ? '#1e293b' : '#ffffff',
              borderColor: currentPalette.borderHex,
              color: currentPalette.primaryHex
            }}
          >
            <Palette className="w-4 h-4" />
          </button>

          <button
            onClick={toggleTheme}
            id="theme-toggle-mobile"
            aria-label="Toggle theme"
            className="p-2 rounded-lg border"
            style={{
              backgroundColor: currentPalette.isDark ? '#1e293b' : '#ffffff',
              borderColor: currentPalette.borderHex,
              color: currentPalette.primaryHex
            }}
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-nav-toggle"
            aria-label="Toggle navigation menu"
            className="p-2 rounded-lg transition-colors border"
            style={{
              backgroundColor: currentPalette.isDark ? '#1e293b' : '#ffffff',
              borderColor: currentPalette.borderHex,
              color: currentPalette.isDark ? '#f8fafc' : '#1c1917'
            }}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="xl:hidden border-b px-4 pt-3 pb-6 space-y-1 shadow-2xl backdrop-blur-xl"
          style={{
            backgroundColor: currentPalette.isDark ? '#0d1117' : currentPalette.bgHex,
            borderColor: currentPalette.borderHex
          }}
        >
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="block px-4 py-2.5 rounded-lg text-base font-medium transition-colors"
                style={
                  isActive
                    ? {
                        backgroundColor: currentPalette.primaryHex,
                        color: '#ffffff',
                        fontWeight: 600
                      }
                    : {
                        color: currentPalette.isDark ? '#e2e8f0' : '#44403c'
                      }
                }
              >
                {link.name}
              </a>
            );
          })}

          <div
            className="pt-3 border-t flex flex-col gap-2"
            style={{ borderColor: currentPalette.borderHex }}
          >
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openPaletteModal();
              }}
              id="mobile-drawer-palette-btn"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold transition-colors border"
              style={{
                backgroundColor: currentPalette.surfaceSubtleHex,
                borderColor: currentPalette.borderHex,
                color: currentPalette.accentTextHex
              }}
            >
              <Palette className="w-4 h-4" />
              <span>Color Palettes ({currentPalette.name})</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openEditor();
              }}
              id="mobile-edit-photo-btn"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold transition-colors border"
              style={{
                backgroundColor: currentPalette.surfaceSubtleHex,
                borderColor: currentPalette.borderHex,
                color: currentPalette.accentTextHex
              }}
            >
              <Camera className="w-4 h-4" />
              <span>Edit / Change Profile Picture</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              id="mobile-resume-btn"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold text-white transition-colors shadow-md"
              style={{
                backgroundColor: currentPalette.primaryHex
              }}
            >
              <FileText className="w-4 h-4" />
              <span>View & Download Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
