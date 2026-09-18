import React from 'react';
import { 
  Terminal, 
  Cpu, 
  Database, 
  Sparkles, 
  Layout, 
  Compass, 
  ArrowDown, 
  CheckCircle2, 
  Code2, 
  Flame 
} from 'lucide-react';
import { JOURNEY_STAGES } from '../data/portfolioData';

export const LearningJourney: React.FC = () => {
  const getStageIcon = (iconName: string) => {
    switch (iconName) {
      case 'Terminal': return <Terminal className="w-5 h-5 text-rose-500" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-rose-500" />;
      case 'Database': return <Database className="w-5 h-5 text-rose-500" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-rose-500" />;
      case 'Layout': return <Layout className="w-5 h-5 text-rose-500" />;
      case 'Compass': return <Compass className="w-5 h-5 text-rose-500" />;
      default: return <Code2 className="w-5 h-5 text-rose-500" />;
    }
  };

  return (
    <section id="journey" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-16 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-rose-600 uppercase">
            <span className="w-6 h-[1px] bg-rose-400" />
            <span>04 • Technical Evolution</span>
            <span className="w-6 h-[1px] bg-rose-400" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-stone-900 tracking-tight">
            My Learning Journey
          </h2>
          <p className="text-sm sm:text-base text-stone-600">
            How my technical curiosity unfolded from introductory syntax into full intelligent applications.
          </p>
        </div>

        {/* Sequential Progression Flow */}
        <div className="max-w-4xl mx-auto space-y-6">
          {JOURNEY_STAGES.map((stage, idx) => {
            const isLast = idx === JOURNEY_STAGES.length - 1;

            return (
              <div key={stage.step} className="relative">
                {/* Stage Card */}
                <div className={`p-6 sm:p-7 rounded-3xl border transition-all duration-300 ${
                  isLast
                    ? 'bg-white border-rose-300 shadow-md shadow-rose-100/40'
                    : 'bg-white border-pink-200/90 shadow-sm shadow-pink-100/30 hover:border-pink-300'
                }`}>
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-start">
                    
                    {/* Step indicator + Icon */}
                    <div className="md:col-span-4 flex items-start gap-3.5">
                      <div className="w-11 h-11 rounded-2xl bg-pink-50 border border-pink-200 flex items-center justify-center shrink-0 shadow-xs">
                        {getStageIcon(stage.iconName)}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-pink-100 text-rose-700 font-semibold border border-pink-200">
                            STAGE 0{stage.step}
                          </span>
                          {isLast && (
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold">
                              Active Focus
                            </span>
                          )}
                        </div>
                        <h3 className="text-lg sm:text-xl font-display font-bold text-stone-900 mt-1">
                          {stage.title}
                        </h3>
                        <p className="text-xs text-stone-500 mt-0.5">
                          {stage.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Description and Skills */}
                    <div className="md:col-span-8 space-y-3.5">
                      <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                        {stage.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {stage.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2.5 py-1 rounded-md text-xs font-mono bg-pink-50/60 text-stone-700 border border-pink-200/80"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>

                {/* Connector Arrow if not last */}
                {!isLast && (
                  <div className="flex justify-center py-2">
                    <div className="w-6 h-6 rounded-full bg-white border border-pink-200 flex items-center justify-center text-rose-500 shadow-xs">
                      <ArrowDown className="w-3.5 h-3.5" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Personal Motto Quote Banner */}
        <div className="mt-16 max-w-2xl mx-auto text-center">
          <div className="p-6 rounded-2xl bg-gradient-to-r from-pink-100/60 via-white to-pink-100/60 border border-pink-200 shadow-sm shadow-pink-100/40">
            <p className="text-base sm:text-lg font-display font-semibold text-stone-900">
              “Still learning. Still experimenting. Still building.”
            </p>
            <span className="block text-xs font-mono text-rose-600 mt-1 font-medium">
              — Hasini's Continuous Growth Manifesto
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
