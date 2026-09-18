import React, { createContext, useContext, useEffect, useState } from 'react';

export type PaletteId = 'blush' | 'lavender' | 'sage' | 'peach' | 'sky' | 'slate-dark' | 'monochrome';

export interface ColorPalette {
  id: PaletteId;
  name: string;
  tagline: string;
  category: 'Pastel' | 'Nature' | 'Warm' | 'Cool' | 'Dark' | 'Minimal';
  primaryHex: string;
  primaryHoverHex: string;
  bgHex: string;
  cardBgHex: string;
  surfaceSubtleHex: string;
  borderHex: string;
  accentTextHex: string;
  glowHex1: string;
  glowHex2: string;
  isDark?: boolean;
  swatches: string[];
}

export const COLOR_PALETTES: ColorPalette[] = [
  {
    id: 'blush',
    name: 'Pale Rose & Blush',
    tagline: 'Signature pale pink canvas with delicate rose accents',
    category: 'Pastel',
    primaryHex: '#e11d48',
    primaryHoverHex: '#be123c',
    bgHex: '#fdf2f4',
    cardBgHex: '#ffffff',
    surfaceSubtleHex: '#fce7ed',
    borderHex: '#fbcfe8',
    accentTextHex: '#e11d48',
    glowHex1: 'rgba(244, 114, 182, 0.28)',
    glowHex2: 'rgba(225, 29, 72, 0.16)',
    isDark: false,
    swatches: ['#fdf2f4', '#fbcfe8', '#f43f5e', '#be123c']
  },
  {
    id: 'lavender',
    name: 'Lavender & Lilac',
    tagline: 'Ethereal pastel violet with creative artistic lilac notes',
    category: 'Pastel',
    primaryHex: '#7c3aed',
    primaryHoverHex: '#6d28d9',
    bgHex: '#f8f6fc',
    cardBgHex: '#ffffff',
    surfaceSubtleHex: '#f2edf9',
    borderHex: '#ddd6fe',
    accentTextHex: '#7c3aed',
    glowHex1: 'rgba(196, 181, 253, 0.28)',
    glowHex2: 'rgba(124, 58, 237, 0.16)',
    isDark: false,
    swatches: ['#f8f6fc', '#ddd6fe', '#8b5cf6', '#6d28d9']
  },
  {
    id: 'sage',
    name: 'Sage & Matcha',
    tagline: 'Botanical mint, tranquil earth tones & fresh leaves',
    category: 'Nature',
    primaryHex: '#059669',
    primaryHoverHex: '#047857',
    bgHex: '#f4f9f5',
    cardBgHex: '#ffffff',
    surfaceSubtleHex: '#e8f3ea',
    borderHex: '#bbf7d0',
    accentTextHex: '#059669',
    glowHex1: 'rgba(134, 239, 172, 0.28)',
    glowHex2: 'rgba(5, 150, 105, 0.16)',
    isDark: false,
    swatches: ['#f4f9f5', '#bbf7d0', '#10b981', '#047857']
  },
  {
    id: 'peach',
    name: 'Honey & Sunset Amber',
    tagline: 'Warm golden apricot, honey amber & soft terracotta',
    category: 'Warm',
    primaryHex: '#ea580c',
    primaryHoverHex: '#c2410c',
    bgHex: '#fff9f3',
    cardBgHex: '#ffffff',
    surfaceSubtleHex: '#feeede',
    borderHex: '#fed7aa',
    accentTextHex: '#ea580c',
    glowHex1: 'rgba(253, 186, 116, 0.28)',
    glowHex2: 'rgba(234, 88, 12, 0.16)',
    isDark: false,
    swatches: ['#fff9f3', '#fed7aa', '#f97316', '#c2410c']
  },
  {
    id: 'sky',
    name: 'Ocean Breeze & Azure',
    tagline: 'Crisp morning sky, coastal azure & modern cyan',
    category: 'Cool',
    primaryHex: '#0284c7',
    primaryHoverHex: '#0369a1',
    bgHex: '#f2f8fc',
    cardBgHex: '#ffffff',
    surfaceSubtleHex: '#e3f2fb',
    borderHex: '#bae6fd',
    accentTextHex: '#0284c7',
    glowHex1: 'rgba(186, 230, 253, 0.28)',
    glowHex2: 'rgba(2, 132, 199, 0.16)',
    isDark: false,
    swatches: ['#f2f8fc', '#bae6fd', '#0284c7', '#0369a1']
  },
  {
    id: 'slate-dark',
    name: 'Twilight Velvet',
    tagline: 'Deep midnight blue with glowing neon rose luminescence',
    category: 'Dark',
    primaryHex: '#fb7185',
    primaryHoverHex: '#f43f5e',
    bgHex: '#0d1117',
    cardBgHex: '#161d27',
    surfaceSubtleHex: '#1f2937',
    borderHex: '#334155',
    accentTextHex: '#fb7185',
    glowHex1: 'rgba(251, 113, 133, 0.18)',
    glowHex2: 'rgba(244, 63, 94, 0.12)',
    isDark: true,
    swatches: ['#0d1117', '#161d27', '#334155', '#fb7185']
  },
  {
    id: 'monochrome',
    name: 'Pearl & Minimal Charcoal',
    tagline: 'Modern editorial simplicity and refined contrast',
    category: 'Minimal',
    primaryHex: '#18181b',
    primaryHoverHex: '#27272a',
    bgHex: '#f9fafb',
    cardBgHex: '#ffffff',
    surfaceSubtleHex: '#f3f4f6',
    borderHex: '#e5e7eb',
    accentTextHex: '#18181b',
    glowHex1: 'rgba(228, 228, 231, 0.35)',
    glowHex2: 'rgba(24, 24, 27, 0.08)',
    isDark: false,
    swatches: ['#f9fafb', '#e5e7eb', '#71717a', '#18181b']
  }
];

interface ThemeContextType {
  theme: 'dark' | 'light';
  paletteId: PaletteId;
  currentPalette: ColorPalette;
  palettes: ColorPalette[];
  setPalette: (id: PaletteId) => void;
  toggleTheme: () => void;
  isPaletteModalOpen: boolean;
  openPaletteModal: () => void;
  closePaletteModal: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [paletteId, setPaletteIdState] = useState<PaletteId>(() => {
    const saved = localStorage.getItem('hasini_portfolio_palette') as PaletteId | null;
    if (saved && COLOR_PALETTES.some(p => p.id === saved)) {
      return saved;
    }
    return 'blush';
  });

  const [lastLightPalette, setLastLightPalette] = useState<PaletteId>(() => {
    const saved = localStorage.getItem('hasini_portfolio_last_light') as PaletteId | null;
    return saved || 'blush';
  });

  const [isPaletteModalOpen, setIsPaletteModalOpen] = useState(false);

  const currentPalette = COLOR_PALETTES.find(p => p.id === paletteId) || COLOR_PALETTES[0];
  const theme: 'dark' | 'light' = currentPalette.isDark ? 'dark' : 'light';

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-palette', paletteId);
    
    // Inject dynamic CSS variables to root for smooth system-wide styling
    root.style.setProperty('--palette-id', paletteId);
    root.style.setProperty('--palette-bg', currentPalette.bgHex);
    root.style.setProperty('--palette-card-bg', currentPalette.cardBgHex);
    root.style.setProperty('--palette-surface-subtle', currentPalette.surfaceSubtleHex);
    root.style.setProperty('--palette-border', currentPalette.borderHex);
    root.style.setProperty('--palette-accent', currentPalette.primaryHex);
    root.style.setProperty('--palette-accent-hover', currentPalette.primaryHoverHex);
    root.style.setProperty('--palette-accent-text', currentPalette.accentTextHex);
    root.style.setProperty('--palette-glow-1', currentPalette.glowHex1);
    root.style.setProperty('--palette-glow-2', currentPalette.glowHex2);

    if (currentPalette.isDark) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
      setLastLightPalette(paletteId);
      localStorage.setItem('hasini_portfolio_last_light', paletteId);
    }

    localStorage.setItem('hasini_portfolio_palette', paletteId);
    localStorage.setItem('hasini_portfolio_theme', theme);
  }, [paletteId, currentPalette, theme]);

  const setPalette = (id: PaletteId) => {
    setPaletteIdState(id);
  };

  const toggleTheme = () => {
    if (currentPalette.isDark) {
      setPaletteIdState(lastLightPalette || 'blush');
    } else {
      setPaletteIdState('slate-dark');
    }
  };

  const openPaletteModal = () => setIsPaletteModalOpen(true);
  const closePaletteModal = () => setIsPaletteModalOpen(false);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        paletteId,
        currentPalette,
        palettes: COLOR_PALETTES,
        setPalette,
        toggleTheme,
        isPaletteModalOpen,
        openPaletteModal,
        closePaletteModal
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
