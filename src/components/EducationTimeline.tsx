import React from 'react';
import { GraduationCap, Award, BookOpen, Calendar, CheckCircle2, MapPin } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const EducationTimeline: React.FC = () => {
  return (
    <section id="education" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-16">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-rose-600 uppercase">
            <span className="w-6 h-[1px] bg-rose-400" />
            <span>03 • Academic Foundation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-stone-900 tracking-tight">
            Education Timeline
          </h2>
          <p className="text-sm sm:text-base text-stone-600 max-w-xl">
            Where curiosity was structured into strong computational thinking and machine learning principles.
          </p>
        </div>

        {/* Vertical Timeline Structure */}
        <div className="relative pl-6 sm:pl-10 lg:pl-12 border-l-2 border-pink-200 ml-4 sm:ml-8 lg:ml-12 space-y-16">
          
          {EDUCATION_DATA.map((item, index) => {
            const isBTech = item.id === 'btech-cse';

            return (
              <div key={item.id} className="relative group">
                
                {/* Timeline node icon */}
                <div className={`absolute -left-[37px] sm:-left-[53px] lg:-left-[61px] top-1.5 w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center transition-all duration-300 border ${
                  isBTech 
                    ? 'bg-rose-500 text-white border-rose-400 shadow-md shadow-rose-500/25' 
                    : 'bg-white text-stone-700 border-pink-200 group-hover:border-rose-400 group-hover:text-rose-600'
                }`}>
                  <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>

                {/* Timeline Card Content */}
                <div className="rounded-3xl bg-white border border-pink-200/90 p-6 sm:p-8 transition-all duration-300 hover:border-rose-300 hover:shadow-xl shadow-md shadow-pink-100/40 relative">
                  
                  {/* Top Bar: Degree, Institution, Score */}
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-pink-100">
                    <div className="space-y-1.5">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-pink-50 border border-pink-200 text-stone-600 flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-rose-500" />
                          <span>{item.duration}</span>
                        </span>
                        {isBTech && (
                          <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-pink-100 text-rose-700 border border-pink-200 font-semibold">
                            Current Degree
                          </span>
                        )}
                      </div>

                      <h3 className="text-xl sm:text-2xl font-display font-bold text-stone-900">
                        {item.degree}
                      </h3>

                      <p className="text-sm sm:text-base font-medium text-stone-700 flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-rose-500 shrink-0" />
                        <span>{item.institution}</span>
                      </p>
                    </div>

                    {/* Score / Grade Highlight Pill */}
                    <div className="p-4 rounded-2xl bg-pink-50/80 border border-pink-200 flex flex-col items-start lg:items-end justify-center shrink-0">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-stone-500">
                        {item.scoreLabel}
                      </span>
                      <span className="text-xl sm:text-2xl font-display font-bold text-rose-600">
                        {item.scoreValue}
                      </span>
                    </div>
                  </div>

                  {/* Body description */}
                  <p className="py-5 text-sm sm:text-base text-stone-700 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Highlights and Coursework Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4 border-t border-pink-100">
                    
                    {/* Coursework list */}
                    <div className="space-y-3">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-stone-600 flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-rose-500" />
                        <span>Core Coursework</span>
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {item.coursework.map((course, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 rounded-md text-xs bg-pink-50/60 text-stone-700 border border-pink-200/80"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Academic Highlights */}
                    <div className="space-y-3">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-stone-600 flex items-center gap-2">
                        <Award className="w-4 h-4 text-rose-500" />
                        <span>Milestones & Focus</span>
                      </h4>
                      <ul className="space-y-2 text-xs sm:text-sm text-stone-600">
                        {item.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
