import React, { useState } from 'react';
import { X, Palette, Check, Sparkles, Sun, Moon, RotateCcw } from 'lucide-react';
import { useTheme, COLOR_PALETTES, PaletteId } from '../context/ThemeContext';

export const PaletteModal: React.FC = () => {
  const { paletteId, setPalette, isPaletteModalOpen, closePaletteModal, currentPalette } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  if (!isPaletteModalOpen) return null;

  const categories = ['All', 'Pastel', 'Nature', 'Warm', 'Cool', 'Dark', 'Minimal'];

  const filteredPalettes = selectedCategory === 'All'
    ? COLOR_PALETTES
    : COLOR_PALETTES.filter(p => p.category === selectedCategory);

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
      onClick={closePaletteModal}
      id="palette-modal-backdrop"
    >
      <div
        className="relative w-full max-w-2xl rounded-2xl border shadow-2xl overflow-hidden my-6 flex flex-col transition-all"
        style={{
          backgroundColor: currentPalette.cardBgHex,
          borderColor: currentPalette.borderHex,
          color: currentPalette.isDark ? '#f1f5f9' : '#1c1917'
        }}
        onClick={(e) => e.stopPropagation()}
        id="palette-modal-container"
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-6 py-4 border-b shrink-0"
          style={{
            backgroundColor: currentPalette.surfaceSubtleHex,
            borderColor: currentPalette.borderHex
          }}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center shadow-xs"
              style={{
                backgroundColor: currentPalette.primaryHex,
                color: '#ffffff'
              }}
            >
              <Palette className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-base sm:text-lg flex items-center gap-2">
                <span>Portfolio Color Palette</span>
                <span
                  className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full font-semibold border"
                  style={{
                    backgroundColor: currentPalette.cardBgHex,
                    borderColor: currentPalette.borderHex,
                    color: currentPalette.accentTextHex
                  }}
                >
                  {currentPalette.name}
                </span>
              </h3>
              <p className="text-xs opacity-75 font-sans">
                Choose an aesthetic palette to transform the portfolio colors
              </p>
            </div>
          </div>

          <button
            onClick={closePaletteModal}
            id="palette-modal-close-btn"
            className="p-2 rounded-xl transition-colors opacity-70 hover:opacity-100 hover:bg-black/5 dark:hover:bg-white/10"
            aria-label="Close palette selector"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Category Filters */}
        <div className="px-6 pt-4 pb-2 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
          {categories.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all shrink-0 ${
                  isSelected
                    ? 'shadow-xs font-semibold'
                    : 'opacity-70 hover:opacity-100'
                }`}
                style={
                  isSelected
                    ? {
                        backgroundColor: currentPalette.primaryHex,
                        color: '#ffffff'
                      }
                    : {
                        backgroundColor: currentPalette.surfaceSubtleHex,
                        color: currentPalette.isDark ? '#e2e8f0' : '#44403c'
                      }
                }
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Palette Grid */}
        <div className="p-6 max-h-[60vh] overflow-y-auto space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {filteredPalettes.map((p) => {
              const isActive = p.id === paletteId;
              return (
                <button
                  key={p.id}
                  onClick={() => setPalette(p.id)}
                  id={`palette-option-${p.id}`}
                  className={`group relative text-left p-4 rounded-xl border-2 transition-all duration-200 flex flex-col justify-between hover:scale-[1.01] active:scale-[0.99] ${
                    isActive ? 'shadow-md ring-2 ring-offset-1' : 'hover:shadow-xs'
                  }`}
                  style={{
                    backgroundColor: p.isDark ? '#161d27' : '#ffffff',
                    borderColor: isActive ? p.primaryHex : p.borderHex,
                    boxShadow: isActive ? `0 0 0 2px ${p.primaryHex}33` : undefined
                  }}
                >
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <span
                          className="w-2.5 h-2.5 rounded-full"
                          style={{ backgroundColor: p.primaryHex }}
                        />
                        <span className="font-display font-bold text-sm" style={{ color: p.isDark ? '#f8fafc' : '#1c1917' }}>
                          {p.name}
                        </span>
                      </div>

                      {isActive ? (
                        <span
                          className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
                          style={{
                            backgroundColor: p.primaryHex,
                            color: '#ffffff'
                          }}
                        >
                          <Check className="w-3 h-3" />
                          <span>Active</span>
                        </span>
                      ) : (
                        <span
                          className="text-[10px] font-medium opacity-60 uppercase font-mono px-1.5 py-0.5 rounded"
                          style={{
                            backgroundColor: p.surfaceSubtleHex,
                            color: p.isDark ? '#cbd5e1' : '#57534e'
                          }}
                        >
                          {p.category}
                        </span>
                      )}
                    </div>

                    <p className="text-xs opacity-75 mb-3 line-clamp-2" style={{ color: p.isDark ? '#94a3b8' : '#57534e' }}>
                      {p.tagline}
                    </p>
                  </div>

                  {/* Swatches Visual Bar */}
                  <div
                    className="p-2 rounded-lg flex items-center justify-between border"
                    style={{
                      backgroundColor: p.bgHex,
                      borderColor: p.borderHex
                    }}
                  >
                    <div className="flex items-center gap-1.5">
                      {p.swatches.map((color, idx) => (
                        <div
                          key={idx}
                          className="w-5 h-5 rounded-full border border-black/10 shadow-2xs"
                          style={{ backgroundColor: color }}
                          title={color}
                        />
                      ))}
                    </div>
                    <span
                      className="text-[11px] font-mono font-semibold"
                      style={{ color: p.accentTextHex }}
                    >
                      {p.primaryHex}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div
          className="flex items-center justify-between px-6 py-3.5 border-t shrink-0 text-xs"
          style={{
            backgroundColor: currentPalette.surfaceSubtleHex,
            borderColor: currentPalette.borderHex
          }}
        >
          <button
            onClick={() => setPalette('blush')}
            className="inline-flex items-center gap-1.5 opacity-70 hover:opacity-100 transition-opacity font-medium"
            id="palette-reset-default-btn"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset to Pale Rose Default</span>
          </button>

          <button
            onClick={closePaletteModal}
            id="palette-modal-done-btn"
            className="px-4 py-1.5 rounded-xl font-semibold text-white shadow-xs transition-transform active:scale-95"
            style={{ backgroundColor: currentPalette.primaryHex }}
          >
            Apply & Close
          </button>
        </div>
      </div>
    </div>
  );
};
