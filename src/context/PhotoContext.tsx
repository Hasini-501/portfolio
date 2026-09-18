import React, { createContext, useContext, useState, useEffect } from 'react';
import { PhotoConfig } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';

export const DEFAULT_PHOTO_CONFIG: PhotoConfig = {
  url: PERSONAL_INFO.photoUrl || '/hasini.jpg',
  zoom: 1,
  positionX: 50,
  positionY: 15,
  rotation: 0,
  flipHorizontal: false,
  brightness: 100,
  contrast: 100,
  saturation: 100,
  filter: 'none',
};

const STORAGE_KEY = 'hasini_portfolio_photo_config_v2';

export const getPhotoFilterCss = (config: PhotoConfig): string => {
  const { brightness, contrast, saturation, filter } = config;
  
  let base = `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturation}%)`;
  
  switch (filter) {
    case 'warm-rose':
      return `${base} sepia(18%) hue-rotate(-12deg)`;
    case 'soft-glow':
      return `brightness(${brightness * 1.05}%) contrast(${contrast * 0.95}%) saturate(${saturation * 1.05}%)`;
    case 'vibrant':
      return `brightness(${brightness}%) contrast(${contrast * 1.12}%) saturate(${saturation * 1.25}%)`;
    case 'mono':
      return `brightness(${brightness}%) contrast(${contrast * 1.2}%) grayscale(100%)`;
    default:
      return base;
  }
};

export const getPhotoTransformStyle = (config: PhotoConfig): React.CSSProperties => {
  const flip = config.flipHorizontal ? -1 : 1;
  return {
    transform: `scale(${config.zoom}) rotate(${config.rotation}deg) scaleX(${flip})`,
    objectPosition: `${config.positionX}% ${config.positionY}%`,
    filter: getPhotoFilterCss(config),
  };
};

interface PhotoContextType {
  photoConfig: PhotoConfig;
  updatePhotoConfig: (newConfig: PhotoConfig) => void;
  resetPhotoConfig: () => void;
  isEditorOpen: boolean;
  openEditor: () => void;
  closeEditor: () => void;
}

const PhotoContext = createContext<PhotoContextType | undefined>(undefined);

export const PhotoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [photoConfig, setPhotoConfig] = useState<PhotoConfig>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        return { ...DEFAULT_PHOTO_CONFIG, ...parsed };
      }
    } catch {
      // Fallback if localStorage read fails
    }
    return DEFAULT_PHOTO_CONFIG;
  });

  const [isEditorOpen, setIsEditorOpen] = useState(false);

  const updatePhotoConfig = (newConfig: PhotoConfig) => {
    setPhotoConfig(newConfig);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newConfig));
    } catch (e) {
      console.warn('Could not persist photo configuration to localStorage:', e);
    }
  };

  const resetPhotoConfig = () => {
    setPhotoConfig(DEFAULT_PHOTO_CONFIG);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      console.warn('Could not reset photo localStorage item:', e);
    }
  };

  const openEditor = () => setIsEditorOpen(true);
  const closeEditor = () => setIsEditorOpen(false);

  return (
    <PhotoContext.Provider
      value={{
        photoConfig,
        updatePhotoConfig,
        resetPhotoConfig,
        isEditorOpen,
        openEditor,
        closeEditor,
      }}
    >
      {children}
    </PhotoContext.Provider>
  );
};

export const usePhoto = () => {
  const context = useContext(PhotoContext);
  if (!context) {
    throw new Error('usePhoto must be used within a PhotoProvider');
  }
  return context;
};
