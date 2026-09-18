import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      id="back-to-top-btn"
      aria-label="Scroll back to top"
      className="fixed bottom-6 right-6 z-40 p-3 rounded-2xl bg-neutral-900/90 light:bg-white text-neutral-300 light:text-stone-700 hover:text-amber-400 light:hover:text-amber-700 border border-neutral-800 light:border-stone-300 shadow-xl backdrop-blur-md transition-all duration-200 hover:-translate-y-1 active:scale-95"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};
