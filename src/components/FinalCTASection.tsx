import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { BrandConfig } from '../config/brandConfig';

interface FinalCTASectionProps {
  brand: BrandConfig;
  onGetStarted: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({ brand, onGetStarted }) => {
  return (
    <section id="get-started" className="bg-[#0B0F19] text-white py-24 sm:py-32 text-center relative overflow-hidden border-t border-slate-800/60">
      {/* Ambient background glow */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-blue-600/20 via-indigo-600/10 to-transparent blur-3xl opacity-75"
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -bottom-32 right-1/4 w-[500px] h-[300px] bg-gradient-to-t from-cyan-500/10 to-transparent blur-3xl opacity-50"
      />

      <div className="relative max-w-[1200px] mx-auto px-6 md:px-12 z-10">
        
        {/* Subtle pill badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 mb-6">
          <Sparkles className="w-3.5 h-3.5 text-blue-400" />
          <span>START FREE TODAY</span>
        </div>

        {/* Main Headline */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] text-balance">
          {brand.finalCtaTitle}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400">
            {brand.finalCtaHighlight}
          </span>
        </h2>

        {/* Subtitle */}
        <p className="mt-5 text-base sm:text-lg text-slate-300 font-normal max-w-2xl mx-auto">
          {brand.finalCtaSubtitle}
        </p>

        {/* Primary Action Button */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              onGetStarted?.();
            }}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#2563FF] hover:bg-[#1d4ed8] text-white font-bold text-base transition-all duration-200 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 active:scale-95 cursor-pointer"
          >
            <span>{brand.primaryCtaLabel}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Reassurance text */}
        <p className="mt-4 text-xs text-slate-400">
          Instant setup · No credit card required · Free 14-day trial on Pro
        </p>

      </div>
    </section>
  );
};

