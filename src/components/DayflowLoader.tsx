import React, { useState, useEffect } from 'react';
import { DayflowIcon, DayflowLogo } from './DayflowLogo';

export type LoaderVariant = 'build' | 'pulse' | 'rotation' | 'minimal' | 'splash';

export interface DayflowLoaderProps {
  variant?: LoaderVariant;
  text?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  onComplete?: () => void;
}

export const DayflowLoader: React.FC<DayflowLoaderProps> = ({
  variant = 'build',
  text = 'Loading your workspace...',
  size = 'md',
  className = '',
  onComplete,
}) => {
  const [step, setStep] = useState<number>(0);

  // Stepped build animation matching Section 8 & the Brand Board:
  // Step 0: Start
  // Step 1: Dot appears
  // Step 2: Shape builds
  // Step 3: Arrow forms
  // Step 4: Completed symbol
  // Step 5: Finished / stable
  useEffect(() => {
    if (variant === 'build' || variant === 'splash') {
      const timers = [
        setTimeout(() => setStep(1), 250),
        setTimeout(() => setStep(2), 550),
        setTimeout(() => setStep(3), 900),
        setTimeout(() => setStep(4), 1300),
        setTimeout(() => {
          setStep(5);
          if (onComplete) onComplete();
        }, 1700),
      ];
      return () => timers.forEach(clearTimeout);
    }
  }, [variant, onComplete]);

  const sizeDimensions = {
    sm: { icon: 'w-6 h-6', container: 'p-3' },
    md: { icon: 'w-10 h-10', container: 'p-6' },
    lg: { icon: 'w-16 h-16', container: 'p-8' },
    xl: { icon: 'w-24 h-24', container: 'p-12' },
  }[size];

  // 1. Build Variant (Stepped Logo Mark Construction)
  if (variant === 'build') {
    return (
      <div className={`flex flex-col items-center justify-center gap-4 text-center select-none ${className}`}>
        <div className="relative flex items-center justify-center w-20 h-20">
          
          {/* Step 1: Cyan Dot */}
          <div
            className={`absolute w-4 h-4 rounded-full bg-[#06B6D4] transition-all duration-300 transform ${
              step >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
            } ${step >= 4 ? '-translate-x-6' : 'translate-x-0'}`}
          />

          {/* Step 2: D shape silhouette begins */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-all duration-400 ${
              step >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
            }`}
          >
            <div className={`transition-opacity duration-300 ${step >= 4 ? 'opacity-0' : 'opacity-100'}`}>
              <svg viewBox="0 0 100 100" className="w-14 h-14" fill="none">
                <path
                  d="M30 20H65C80 20 90 32 90 50C90 68 80 80 65 80H30"
                  stroke="#2563FF"
                  strokeWidth="12"
                  strokeLinecap="round"
                  strokeDasharray="200"
                  strokeDashoffset={step >= 3 ? "0" : "80"}
                  className="transition-all duration-500"
                />
              </svg>
            </div>
          </div>

          {/* Step 3: Arrow forms */}
          {step >= 3 && step < 4 && (
            <div className="absolute inset-0 flex items-center justify-center animate-in fade-in zoom-in-75 duration-200">
              <svg viewBox="0 0 100 100" className="w-10 h-10">
                <polygon points="35,35 60,50 35,65" fill="#8B5CF6" />
              </svg>
            </div>
          )}

          {/* Step 4 & 5: Completed Full Logo */}
          <div
            className={`transition-all duration-300 transform ${
              step >= 4 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
          >
            <DayflowIcon className="w-16 h-16" idPrefix="df-build-done" />
          </div>

        </div>

        {text && (
          <div className="space-y-1">
            <p className="text-xs font-semibold text-slate-700 animate-pulse">{text}</p>
            <div className="flex items-center justify-center gap-1.5 pt-1">
              {[0, 1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                    step >= i + 1 ? 'bg-[#2563FF] scale-110' : 'bg-slate-200 scale-75'
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  // 2. Pulse Animation (Gentle expanding wave halo)
  if (variant === 'pulse') {
    return (
      <div className={`flex flex-col items-center justify-center gap-3 text-center ${className}`}>
        <div className="relative flex items-center justify-center">
          {/* Circular halo pulses */}
          <div className="absolute w-24 h-24 rounded-full bg-blue-400/20 animate-ping duration-1000" />
          <div className="absolute w-20 h-20 rounded-full bg-cyan-400/25 animate-pulse" />
          <div className="relative z-10 transition-transform hover:scale-105">
            <DayflowIcon className={`${sizeDimensions.icon}`} idPrefix="df-pulse" />
          </div>
        </div>
        {text && <p className="text-xs font-semibold text-slate-600 mt-2">{text}</p>}
      </div>
    );
  }

  // 3. Rotation Animation (Rotating circular progress indicator around stationary symbol)
  if (variant === 'rotation') {
    return (
      <div className={`flex flex-col items-center justify-center gap-3 text-center ${className}`}>
        <div className="relative flex items-center justify-center p-3">
          {/* Thin rotating circular track */}
          <svg className="absolute w-20 h-20 animate-spin duration-1000" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="44"
              fill="none"
              stroke="#E2E8F0"
              strokeWidth="4"
            />
            <path
              d="M50 6 A44 44 0 0 1 94 50"
              fill="none"
              stroke="url(#df-rot-grad)"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="df-rot-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06B6D4" />
                <stop offset="100%" stopColor="#2563FF" />
              </linearGradient>
            </defs>
          </svg>
          {/* Stationary logo in center */}
          <div className="relative z-10 p-2">
            <DayflowIcon className="w-10 h-10" idPrefix="df-rot-center" />
          </div>
        </div>
        {text && <p className="text-xs font-semibold text-slate-600">{text}</p>}
      </div>
    );
  }

  // 4. Minimal / Skeleton Loader
  if (variant === 'minimal') {
    return (
      <div className={`inline-flex items-center gap-2.5 px-3 py-1.5 rounded-lg bg-slate-100/80 text-slate-500 ${className}`}>
        <div className="w-5 h-5 opacity-70 animate-pulse">
          <DayflowIcon className="w-5 h-5 grayscale" idPrefix="df-minimal" />
        </div>
        <span className="text-xs font-medium">{text}</span>
      </div>
    );
  }

  // 5. Splash Variant (Full brand reveal with tagline)
  return (
    <div className={`flex flex-col items-center justify-center p-8 bg-white rounded-3xl shadow-2xl border border-slate-100 text-center ${className}`}>
      <div className="transition-all duration-500 transform">
        <DayflowIcon className="w-20 h-20 mx-auto" idPrefix="df-splash" />
      </div>

      <div
        className={`transition-all duration-500 mt-4 ${
          step >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
        }`}
      >
        <div className="text-3xl font-black tracking-tight">
          <span className="text-[#0F172A]">day</span>
          <span className="text-[#2563FF]">flow</span>
        </div>
        <div className="text-[10px] font-extrabold tracking-[0.25em] text-slate-500 uppercase mt-1">
          MAKE WORK FLOW
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-1.5">
        <div className="w-1.5 h-1.5 rounded-full bg-[#06B6D4] animate-bounce" style={{ animationDelay: '0ms' }} />
        <div className="w-1.5 h-1.5 rounded-full bg-[#2563FF] animate-bounce" style={{ animationDelay: '150ms' }} />
        <div className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] animate-bounce" style={{ animationDelay: '300ms' }} />
      </div>

      {text && <p className="text-xs font-medium text-slate-500 mt-3">{text}</p>}
    </div>
  );
};
