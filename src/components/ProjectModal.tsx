import React, { useState } from 'react';
import { X, ExternalLink, Github, CheckCircle2, AlertCircle, Sparkles, Layers, Terminal, Copy, Check } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [copiedLink, setCopiedLink] = useState(false);

  if (!project) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(project.githubUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-white rounded-3xl border border-pink-200 shadow-2xl overflow-hidden my-6 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-pink-50/70 border-b border-pink-200 shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-pink-100 text-rose-700 font-semibold border border-pink-200">
              {project.category}
            </span>
            <span className="text-xs text-stone-500 font-mono hidden sm:inline">
              Project Architecture
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="p-2 rounded-lg text-stone-600 hover:text-stone-900 hover:bg-pink-100 transition-colors text-xs flex items-center gap-1 font-mono"
              title="Copy GitHub Link"
            >
              {copiedLink ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              id="project-modal-close"
              aria-label="Close modal"
              className="p-2 rounded-lg text-stone-500 hover:text-stone-900 hover:bg-pink-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6 bg-pink-50/20">
          
          {/* Prototype disclaimer notice if applicable */}
          {project.isPrototypeNotice && (
            <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 flex items-start gap-3 text-xs sm:text-sm text-stone-700">
              <AlertCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
              <div>
                <strong className="text-rose-700 font-semibold block mb-0.5">Academic Prototype Notice:</strong>
                <span>{project.isPrototypeNotice}</span>
              </div>
            </div>
          )}

          {/* Title & Tagline */}
          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-stone-900">
              {project.name}
            </h3>
            <p className="text-base text-rose-600 font-medium">
              {project.tagline}
            </p>
            <p className="text-sm sm:text-base text-stone-700 leading-relaxed pt-1">
              {project.description}
            </p>
          </div>

          {/* Problem Statement Box */}
          <div className="p-5 rounded-2xl bg-white border border-pink-200 shadow-xs">
            <h4 className="text-xs font-mono uppercase tracking-wider text-stone-500 mb-1.5 flex items-center gap-1.5 font-semibold">
              <span>🎯 Problem Solved</span>
            </h4>
            <p className="text-xs sm:text-sm text-stone-800 leading-relaxed">
              {project.problemSolved}
            </p>
          </div>

          {/* Key Features */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-stone-600 font-semibold">
              Key Engineering Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.keyFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-white border border-pink-200/90 text-xs sm:text-sm text-stone-700 flex items-start gap-2.5 shadow-xs"
                >
                  <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Stack */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-stone-600 font-semibold">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-pink-50 text-stone-800 border border-pink-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Repository Links */}
          <div className="p-4 rounded-xl bg-white border border-pink-200 text-xs text-stone-600 font-mono space-y-1">
            <div className="flex items-center gap-2">
              <span>🔗 <strong>GitHub:</strong></span>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-600 underline truncate"
              >
                {project.githubUrl}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span>🚀 <strong>Demo URL:</strong></span>
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-600 underline truncate"
              >
                {project.liveDemoUrl}
              </a>
            </div>
          </div>

        </div>

        {/* Modal Footer CTA Bar */}
        <div className="px-6 py-4 bg-pink-50/70 border-t border-pink-200 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-stone-600 hover:text-stone-900 transition-colors"
          >
            Close Overview
          </button>

          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-white hover:bg-pink-50 text-stone-800 border border-pink-200 transition-colors shadow-xs"
            >
              <Github className="w-4 h-4" />
              <span>View Source Code</span>
            </a>

            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-rose-500 hover:bg-rose-600 text-white transition-colors shadow-sm shadow-rose-500/25"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Launch Live Demo</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
