import React, { useState } from 'react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { DayflowLogo, DayflowIcon } from './DayflowLogo';
import mohanPortrait from '../assets/mohan-founder-portrait.jpg';
import dayflowLogoTransparent from '../assets/dayflow-logo-transparent.png';

interface DayflowFounderStoryProps {
  onExploreVision?: () => void;
}

export const DayflowFounderStory: React.FC<DayflowFounderStoryProps> = ({ onExploreVision }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleCtaClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onExploreVision) {
      onExploreVision();
    }
  };

  return (
    <section id="founder-story" className="py-20 lg:py-28 bg-white border-b border-slate-200 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="mb-12 max-w-2xl">
          <div className="text-xs font-bold uppercase tracking-[0.1em] text-[#2563FF] mb-2 flex items-center gap-1.5">
            <span className="w-2 h-0.5 bg-[#2563FF] rounded-full inline-block" />
            <span>THE STORY BEHIND DAYFLOW</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-[#0F172A] tracking-tight leading-[1.18]">
            Built from a simple belief: work should flow.
          </h2>
        </div>

        {/* Founder Story Composition matching Reference Screenshot */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative max-w-[1160px] mx-auto"
        >
          {/* Desktop & Tablet Overlapping Grid Container */}
          <div className="relative flex flex-col lg:flex-row items-center lg:items-stretch">
            
            {/* Left: Founder Portrait Frame (Overlapping the blue content panel) */}
            <div className="w-full sm:w-[320px] lg:w-[360px] shrink-0 z-20 mb-[-32px] sm:mb-[-40px] lg:mb-0 lg:mr-[-48px] self-center lg:self-center">
              <div 
                className={`relative aspect-[4/5] sm:h-[440px] lg:h-[480px] w-full rounded-2xl lg:rounded-3xl bg-[#DBEAFE] overflow-hidden border border-blue-200/80 shadow-xl transition-all duration-300 ${
                  isHovered ? 'scale-[1.01] shadow-2xl -translate-y-1' : ''
                }`}
              >
                {/* Genuine Grayscale Portrait of Mohan S. from supplied asset */}
                <img
                  src={mohanPortrait}
                  alt="Mohan S. - Founder & Product Builder at Dayflow"
                  className="w-full h-full object-cover object-[center_18%] filter grayscale contrast-[1.08] brightness-[1.02] transition-transform duration-500"
                />

                {/* Subtle soft gradient scrim for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#DBEAFE]/30 via-transparent to-transparent pointer-events-none" />

                {/* Subtle verified builder tag in bottom corner */}
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-full text-[10px] font-bold text-slate-800 shadow-xs flex items-center gap-1 border border-slate-200/70">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Founder Portrait</span>
                </div>
              </div>
            </div>

            {/* Right: Solid Blue Story Content Panel */}
            <div className="w-full flex-1 bg-[#1858B8] rounded-2xl lg:rounded-3xl text-white shadow-2xl p-7 sm:p-10 lg:p-12 lg:pl-20 z-10 flex flex-col justify-between transition-colors duration-200">
              
              {/* Top: Dayflow Brand Logo Asset */}
              <div className="flex items-center justify-between pb-2">
                <div className="bg-white/95 px-3.5 py-1.5 rounded-xl inline-flex items-center shadow-xs">
                  <img
                    src={dayflowLogoTransparent}
                    alt="Dayflow — Make Work Flow"
                    className="h-7 sm:h-8 w-auto object-contain"
                  />
                </div>

                <span className="text-[11px] font-semibold text-white/80 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">
                  Founder Story
                </span>
              </div>

              {/* Editorial Quote Mark */}
              <div className="text-5xl lg:text-6xl font-serif text-white font-black leading-none opacity-90 select-none my-3">
                “
              </div>

              {/* Main Founder Story Copy */}
              <p className="text-base sm:text-lg lg:text-[1.25rem] font-medium text-white leading-relaxed tracking-tight max-w-2xl">
                "Dayflow is my vision for bringing projects, tasks, teams, and everyday workflows into one connected workspace. As a developer and product builder, I want to make managing work feel clearer, simpler, and more connected — so people can spend less time coordinating and more time creating."
              </p>

              {/* Attribution & CTA Footer */}
              <div className="pt-6 mt-6 border-t border-white/20 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                
                {/* Author Info */}
                <div>
                  <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
                    MOHAN S.
                  </div>
                  <div className="text-xs sm:text-[13px] text-white/80 font-normal mt-0.5">
                    Founder & Product Builder, Dayflow
                  </div>
                </div>

                {/* Explore Vision CTA */}
                <button
                  type="button"
                  onClick={handleCtaClick}
                  className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-white hover:text-cyan-200 transition-colors group cursor-pointer"
                >
                  <span>Explore the Dayflow vision</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </button>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
