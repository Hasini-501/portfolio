import React, { useState } from 'react';
import { 
  Github, 
  ExternalLink, 
  Sparkles, 
  CheckCircle2, 
  Eye, 
  Filter, 
  Activity, 
  ShieldAlert, 
  Cpu, 
  Terminal, 
  FileCheck, 
  Layers, 
  SlidersHorizontal 
} from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  const categories = ['All', 'AI / LLM', 'Computer Vision', 'Full-Stack & Web'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  // Custom visual simulator for each project card to give rich, authentic craftsmanship
  const renderProjectVisual = (project: Project) => {
    switch (project.id) {
      case 'smart-hiring-platform':
        return (
          <div className="w-full h-full bg-pink-50/40 p-5 flex flex-col justify-between font-mono text-xs select-none">
            <div className="flex items-center justify-between pb-3 border-b border-pink-200/80">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-stone-600 text-[11px]">Streamlit • Ollama Local Inference</span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-semibold border border-emerald-200">Match Score: 94.2%</span>
            </div>

            <div className="my-3 space-y-2">
              <div className="p-2.5 rounded-lg bg-white border border-pink-200/80 shadow-xs">
                <div className="flex justify-between text-[11px] text-stone-700 mb-1">
                  <span>Candidate: SDE Intern Applicant</span>
                  <span className="text-rose-600 font-semibold">High Compatibility</span>
                </div>
                <div className="w-full bg-pink-100 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-rose-500 h-full rounded-full w-[94%]" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[10px]">
                <div className="p-2 rounded bg-white/80 border border-pink-100 text-stone-600">
                  <span className="block font-semibold text-stone-900">Key Strengths</span>
                  <span>Python, LangChain, API Design</span>
                </div>
                <div className="p-2 rounded bg-white/80 border border-pink-100 text-stone-600">
                  <span className="block font-semibold text-stone-900">Identified Gaps</span>
                  <span>Kubernetes production ops</span>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-pink-200/80 flex justify-between text-[10px] text-stone-500">
              <span>Llama 3 8B Prompt Pipeline</span>
              <span className="text-rose-600 font-medium">Zero Data Leakage</span>
            </div>
          </div>
        );

      case 'ai-resume-tailor':
        return (
          <div className="w-full h-full bg-pink-50/40 p-5 flex flex-col justify-between font-mono text-xs select-none">
            <div className="flex items-center justify-between pb-3 border-b border-pink-200/80">
              <div className="flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-rose-500" />
                <span className="text-stone-600 text-[11px]">ATS Diagnostic Engine</span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-pink-100 text-rose-700 font-semibold border border-pink-200">ATS Score: 89/100</span>
            </div>

            <div className="my-2 space-y-2 text-[11px]">
              <div className="p-2.5 rounded-lg bg-white border border-pink-200/80 shadow-xs">
                <span className="text-stone-400 line-through block text-[10px]">
                  "Worked on machine learning models for college project"
                </span>
                <span className="text-rose-700 font-sans font-medium text-xs block mt-1">
                  → "Engineered random forest classifier achieving 91.4% precision on imbalanced dataset"
                </span>
              </div>

              <div className="flex gap-2 text-[10px]">
                <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-200 font-semibold">Action Verbs: +40%</span>
                <span className="px-2 py-0.5 rounded bg-white border border-pink-200 text-stone-600">ATS Friendly Font: Passed</span>
              </div>
            </div>

            <div className="pt-2 border-t border-pink-200/80 flex justify-between text-[10px] text-stone-500">
              <span>PDF Parsing & Rewriting</span>
              <span className="text-rose-600 font-medium">Clean Single-Column</span>
            </div>
          </div>
        );

      case 'aurax-vision':
        return (
          <div className="w-full h-full bg-stone-900 text-neutral-200 p-5 flex flex-col justify-between font-mono text-xs select-none relative overflow-hidden">
            {/* Visual distinction for Computer Vision: grid canvas with tracked hand points */}
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#fb7185_1px,transparent_1px)] [background-size:16px_16px]" />

            <div className="flex items-center justify-between pb-3 border-b border-stone-800 z-10">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-400 animate-ping" />
                <span className="text-rose-300 text-[11px]">OpenCV 4.x + MediaPipe Hands</span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 font-mono border border-rose-500/30">34.2 FPS</span>
            </div>

            <div className="my-2 flex flex-col items-center justify-center py-2 z-10 relative">
              {/* Hand landmark visual representation */}
              <div className="w-32 h-28 border border-rose-500/30 rounded-xl bg-stone-950/80 p-2 relative flex items-center justify-center">
                <div className="absolute top-2 left-6 w-2 h-2 rounded-full bg-rose-400 shadow-[0_0_8px_#fb7185]" />
                <div className="absolute top-4 left-12 w-2 h-2 rounded-full bg-rose-400 shadow-[0_0_8px_#fb7185]" />
                <div className="absolute top-3 left-18 w-2 h-2 rounded-full bg-rose-400 shadow-[0_0_8px_#fb7185]" />
                <div className="absolute top-6 left-24 w-2 h-2 rounded-full bg-rose-400 shadow-[0_0_8px_#fb7185]" />
                <div className="absolute bottom-4 left-14 w-3 h-3 rounded-full bg-amber-400 shadow-[0_0_10px_orange]" />
                
                <span className="text-[9px] text-rose-200 font-mono tracking-tighter text-center">
                  21 Landmarks Active<br />
                  Gesture: PINCH_DRAG
                </span>
              </div>
            </div>

            <div className="pt-2 border-t border-stone-800 flex justify-between text-[10px] text-neutral-400 z-10">
              <span>Touchless Interface</span>
              <span className="text-rose-300">Realtime Gesture Trails</span>
            </div>
          </div>
        );

      case 'medimind-ai':
        return (
          <div className="w-full h-full bg-pink-50/40 p-5 flex flex-col justify-between font-mono text-xs select-none">
            <div className="flex items-center justify-between pb-3 border-b border-pink-200/80">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-500" />
                <span className="text-stone-600 text-[11px]">MediMind AI Concept Portal</span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-rose-100 text-rose-700 font-semibold border border-rose-200">Student Prototype</span>
            </div>

            <div className="my-2 space-y-2">
              <div className="grid grid-cols-3 gap-1.5 text-center text-[10px]">
                <div className="py-1 px-1.5 rounded bg-pink-200/80 text-rose-800 font-semibold border border-pink-300">Doctor View</div>
                <div className="py-1 px-1.5 rounded bg-white border border-pink-200 text-stone-600">Patient Portal</div>
                <div className="py-1 px-1.5 rounded bg-white border border-pink-200 text-stone-600">Clinic Admin</div>
              </div>

              <div className="p-2.5 rounded-lg bg-white border border-pink-200/80 text-[10px] text-stone-700 space-y-1 shadow-xs">
                <div className="flex justify-between">
                  <span>Triage: Symptom Review</span>
                  <span className="text-rose-600 font-semibold">Exploratory</span>
                </div>
                <p className="text-[10px] text-stone-500">
                  Uploaded Scan: Chest_XRay_v2.png (OCR extracted)
                </p>
              </div>
            </div>

            <div className="pt-2 border-t border-pink-200/80 flex justify-between text-[10px] text-stone-500">
              <span>Appointment Scheduling</span>
              <span className="text-rose-600 font-sans font-medium">Academic Research Only</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-rose-600 uppercase">
              <span className="w-6 h-[1px] bg-rose-400" />
              <span>06 • Built with Code</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-stone-900 tracking-tight">
              Featured Projects
            </h2>
            <p className="text-sm sm:text-base text-stone-600 max-w-xl">
              Practical software, intelligent LLM copilots, computer vision gestures, and full-stack explorations.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-2xl bg-white border border-pink-200 text-xs shadow-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl font-medium transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-rose-500 text-white font-semibold shadow-xs'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-pink-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-3xl bg-white border border-pink-200/90 overflow-hidden flex flex-col transition-all duration-300 hover:border-rose-300 hover:shadow-2xl shadow-xl shadow-pink-200/30"
            >
              {/* Project Visual / Interactive Simulated View */}
              <div className="h-52 sm:h-56 w-full border-b border-pink-100 overflow-hidden relative">
                {renderProjectVisual(project)}
                
                {/* Overlay trigger for quick modal preview */}
                <button
                  onClick={() => setActiveProjectModal(project)}
                  className="absolute inset-0 bg-white/80 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs font-semibold text-stone-900"
                >
                  <Eye className="w-4 h-4 text-rose-600" />
                  <span>View Architecture & Details</span>
                </button>
              </div>

              {/* Project Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                
                <div className="space-y-3">
                  {/* Category & Tag */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-pink-100 text-rose-700 font-semibold border border-pink-200">
                      {project.category}
                    </span>
                    {project.highlights && project.highlights[0] && (
                      <span className="text-[11px] font-mono text-stone-500">
                        {project.highlights[0]}
                      </span>
                    )}
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-stone-900 group-hover:text-rose-600 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 mt-1">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Academic disclaimer notice pill if present */}
                  {project.isPrototypeNotice && (
                    <div className="p-2 rounded-xl bg-rose-50 border border-rose-200 text-[11px] text-rose-800 font-sans">
                      ⚠️ {project.isPrototypeNotice}
                    </div>
                  )}

                  {/* Problem Solved Snippet */}
                  <div className="p-3 rounded-xl bg-pink-50/50 border border-pink-200/70 text-xs text-stone-600">
                    <strong className="text-stone-900 block mb-0.5">Problem Solved:</strong>
                    <span className="line-clamp-2">{project.problemSolved}</span>
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div className="space-y-4 pt-2 border-t border-pink-100">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 5).map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-pink-50/70 text-stone-700 border border-pink-200"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-1.5 py-0.5 text-[11px] text-stone-500 font-mono">
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between gap-3 pt-1">
                    <button
                      onClick={() => setActiveProjectModal(project)}
                      className="text-xs font-semibold text-stone-700 hover:text-rose-600 flex items-center gap-1.5 transition-colors"
                    >
                      <Eye className="w-4 h-4 text-rose-500" />
                      <span>Details</span>
                    </button>

                    <div className="flex items-center gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-pink-50 hover:bg-pink-100 text-stone-700 border border-pink-200 transition-colors shadow-xs"
                        title="View GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>

                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-rose-500 hover:bg-rose-600 text-white transition-colors active:scale-95 shadow-sm shadow-rose-500/25"
                        title="Launch Demo Application"
                      >
                        <span>Demo</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Project Architecture & Details Modal */}
        <ProjectModal
          project={activeProjectModal}
          onClose={() => setActiveProjectModal(null)}
        />

      </div>
    </section>
  );
};
