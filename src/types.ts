export interface Project {
  id: string;
  name: string;
  tagline: string;
  category: 'AI / LLM' | 'Computer Vision' | 'Full-Stack & Web';
  description: string;
  problemSolved: string;
  keyFeatures: string[];
  technologies: string[];
  githubUrl: string; // Placeholder ready for replacement
  liveDemoUrl: string; // Placeholder ready for replacement
  image: string; // Placeholder ready for replacement
  isPrototypeNotice?: string;
  highlights?: string[];
}

export interface Internship {
  id: string;
  organization: string;
  program: string;
  role: string;
  duration: string;
  location: string;
  projectFocus: string;
  projectName: string;
  technologies: string[];
  contributions: string[];
  certificateUrl: string; // Placeholder
  projectUrl: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  duration: string;
  scoreLabel: string;
  scoreValue: string;
  description: string;
  highlights: string[];
  coursework: string[];
}

export interface JourneyStage {
  step: number;
  title: string;
  subtitle: string;
  skills: string[];
  description: string;
  iconName: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  skills: string[];
  verificationUrl: string; // Placeholder
  previewImage: string; // Placeholder
}

export interface FunFact {
  id: string;
  icon: string;
  title: string;
  detail: string;
}

export interface MemoryPhoto {
  id: string;
  caption: string;
  category: string;
  location?: string;
  aspect: string;
  bgGradient: string;
  icon: string;
}

export interface PhotoConfig {
  url: string;
  zoom: number;
  positionX: number;
  positionY: number;
  rotation: number;
  flipHorizontal: boolean;
  brightness: number;
  contrast: number;
  saturation: number;
  filter: 'none' | 'warm-rose' | 'soft-glow' | 'vibrant' | 'mono';
}
