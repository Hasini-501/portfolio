import React from 'react';
import { Sparkles, Terminal, Code2, Layers, Compass, ArrowRight, BookOpen, Lightbulb } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-14">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-rose-600 uppercase">
            <span className="w-6 h-[1px] bg-rose-400" />
            <span>01 • Who I Am</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-stone-900 tracking-tight">
            About Me
          </h2>
          <p className="text-sm sm:text-base text-stone-600 max-w-xl">
            A curious developer driven by practical experiments, clean code, and intelligent software.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-5 text-stone-700 leading-relaxed text-base sm:text-lg">
              {PERSONAL_INFO.aboutParagraphs.map((para, idx) => (
                <p key={idx} className="font-normal">
                  {para}
                </p>
              ))}
            </div>

            {/* Core Philosophy Callout */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-pink-200/90 shadow-sm shadow-pink-100/40 relative overflow-hidden">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-pink-100 text-rose-600 shrink-0">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-stone-900 mb-1">
                    Learning by Building
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    Theoretical lectures provide the foundation, but writing the code, debugging unexpected runtime exceptions, and observing how users interact with the final interface is where real understanding happens.
                  </p>
                </div>
              </div>
            </div>

            {/* Current Interests Grid */}
            <div className="pt-4 space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-stone-600 flex items-center gap-2">
                <Code2 className="w-4 h-4 text-rose-500" />
                <span>Current Areas of Interest</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {PERSONAL_INFO.interests.map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium bg-white text-stone-800 border border-pink-200/90 hover:border-rose-400 hover:text-rose-600 transition-colors shadow-xs"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Side Column: Currently Exploring + Student Attributes */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Currently Exploring Card */}
            <div className="p-6 rounded-2xl bg-white border border-pink-200/90 shadow-md shadow-pink-100/50 relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-pink-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse" />
                  <h3 className="text-sm font-semibold uppercase tracking-wider font-mono text-stone-800">
                    Currently Exploring
                  </h3>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-pink-100 text-rose-700 font-semibold border border-pink-200">
                  Active
                </span>
              </div>

              <div className="space-y-3.5">
                {PERSONAL_INFO.currentlyExploring.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-pink-50/50 border border-pink-100/80 hover:border-pink-300 hover:bg-pink-50 transition-all duration-200 group"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs sm:text-sm font-semibold text-stone-900 group-hover:text-rose-600 transition-colors">
                        {item.title}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-rose-600 transition-colors group-hover:translate-x-0.5" />
                    </div>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-5 pt-4 border-t border-pink-100 flex items-center justify-between text-xs text-stone-600">
                <span className="font-mono text-[11px]">Always curious</span>
                <a
                  href="#journey"
                  className="text-rose-600 hover:underline flex items-center gap-1 font-semibold"
                >
                  <span>See roadmap</span>
                  <span>↓</span>
                </a>
              </div>
            </div>

            {/* Quick Mindset Snippet */}
            <div className="p-5 rounded-2xl bg-white border border-pink-200/90 text-xs text-stone-700 space-y-2 shadow-xs">
              <div className="flex items-center gap-2 font-semibold text-stone-900">
                <BookOpen className="w-4 h-4 text-rose-500" />
                <span>Student Perspective</span>
              </div>
              <p className="leading-relaxed text-stone-600">
                "I don't claim to know everything. Technology evolves daily — my superpower is being deeply curious, disciplined, and genuinely excited to learn whatever it takes to build solutions that work."
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
