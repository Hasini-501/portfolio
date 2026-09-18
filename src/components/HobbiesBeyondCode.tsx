import React from 'react';
import { Sparkles, Palette, BookOpen, Drama, Video, Music, Footprints, Brush, Heart } from 'lucide-react';
import { HOBBIES_DATA, FUN_FACTS } from '../data/portfolioData';

export const HobbiesBeyondCode: React.FC = () => {
  const getHobbyIcon = (iconName: string) => {
    switch (iconName) {
      case 'Footprints': return <Footprints className="w-5 h-5 text-rose-500" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-rose-500" />;
      case 'Palette': return <Palette className="w-5 h-5 text-rose-500" />;
      case 'BookOpen': return <BookOpen className="w-5 h-5 text-rose-500" />;
      case 'Theater': return <Drama className="w-5 h-5 text-rose-500" />;
      case 'Video': return <Video className="w-5 h-5 text-rose-500" />;
      default: return <Heart className="w-5 h-5 text-rose-500" />;
    }
  };

  const getFunFactIcon = (iconName: string) => {
    switch (iconName) {
      case 'Palette': return <Palette className="w-4 h-4 text-rose-500" />;
      case 'Sparkles': return <Sparkles className="w-4 h-4 text-rose-500" />;
      case 'Brush': return <Brush className="w-4 h-4 text-rose-500" />;
      case 'BookOpen': return <BookOpen className="w-4 h-4 text-rose-500" />;
      case 'Theater': return <Drama className="w-4 h-4 text-rose-500" />;
      case 'Music': return <Music className="w-4 h-4 text-rose-500" />;
      case 'Video': return <Video className="w-4 h-4 text-rose-500" />;
      default: return <Sparkles className="w-4 h-4 text-rose-500" />;
    }
  };

  return (
    <section id="beyond-code" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-14">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-rose-600 uppercase">
            <span className="w-6 h-[1px] bg-rose-400" />
            <span>08 • Creative Passions & Hobbies</span>
          </div>
          <div className="flex items-center gap-3">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-stone-900 tracking-tight">
              Beyond the Code
            </h2>
            <span className="text-2xl animate-pulse">🌸</span>
          </div>
          <p className="text-sm sm:text-base text-stone-600 max-w-xl">
            Software engineering is what I build; arts, crochet, storytelling, drama, dance, and creative content are how I recharge and view the world.
          </p>
        </div>

        {/* Core Creative Hobbies Grid (Arts, Crochet, Painting, Novels, Drama, Classical Dance) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {HOBBIES_DATA.map((hobby) => (
            <div
              key={hobby.id}
              className="rounded-3xl bg-white border border-pink-200/90 p-6 sm:p-7 flex flex-col justify-between space-y-5 transition-all duration-300 hover:border-rose-300 hover:shadow-xl shadow-md shadow-pink-100/40 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-2xl bg-pink-100 border border-pink-200 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getHobbyIcon(hobby.icon)}
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-pink-50 text-rose-700 font-semibold border border-pink-200">
                    {hobby.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-display font-bold text-stone-900 group-hover:text-rose-600 transition-colors">
                    {hobby.title}
                  </h3>
                  <p className="text-xs text-rose-600 font-semibold mt-0.5">
                    {hobby.subtitle}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  {hobby.description}
                </p>
              </div>

              {/* Personal Reflection */}
              <div className="pt-3 border-t border-pink-100">
                <span className="text-[11px] font-mono text-stone-500 italic block">
                  "{hobby.takeaway}"
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Fun Facts About Me Section */}
        <div className="space-y-5 rounded-3xl bg-white border border-pink-200 p-6 sm:p-8 shadow-sm shadow-pink-100/40">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-pink-100">
            <h3 className="text-xs font-mono uppercase tracking-widest text-rose-600 flex items-center gap-2 font-semibold">
              <Sparkles className="w-4 h-4 text-rose-500" />
              <span>Fun Facts: Arts, Crochet, Painting, Novels, Drama, Dance & Content</span>
            </h3>
            <span className="text-xs text-stone-500 font-mono">
              7 quick glimpses into my world
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {FUN_FACTS.map((fact) => (
              <div
                key={fact.id}
                className="p-4 rounded-2xl bg-pink-50/50 border border-pink-200/80 space-y-2 hover:border-rose-300 transition-colors group"
              >
                <div className="w-8 h-8 rounded-xl bg-pink-100 flex items-center justify-center text-rose-600 group-hover:scale-110 transition-transform">
                  {getFunFactIcon(fact.icon)}
                </div>
                <h4 className="text-sm font-semibold text-stone-900">
                  {fact.title}
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {fact.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

