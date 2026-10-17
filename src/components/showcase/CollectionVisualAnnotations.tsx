import React from 'react';
import { Check } from 'lucide-react';
import { DayflowAppIcon } from '../navigation/AppIcons';

interface VisualAnnotationsProps {
  collectionId: 'teamwork' | 'strategy' | 'service' | 'software' | 'product';
}

export const CollectionVisualAnnotations: React.FC<VisualAnnotationsProps> = ({ collectionId }) => {
  switch (collectionId) {
    case 'teamwork':
      return (
        <div className="absolute inset-0 pointer-events-none select-none z-20">
          {/* Top-left: Floating Zuno AI Companion Badge */}
          <div className="absolute top-5 sm:top-7 left-3 sm:left-5 flex items-center gap-2 bg-[#16181D] text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-lg border border-white/20 animate-in fade-in duration-300">
            <DayflowAppIcon appId="zuno" className="w-5 h-5 rounded-full" />
            <span className="font-bold text-xs sm:text-sm tracking-tight">Zuno</span>
            {/* Cursor arrow pointing into photo */}
            <div className="absolute -bottom-2.5 right-2 w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-t-[9px] border-t-[#16181D]" />
          </div>

          {/* Curved Hand-drawn Arrow pointing to the team laptop */}
          <svg
            className="absolute bottom-6 left-6 sm:left-10 w-28 sm:w-36 h-24 sm:h-28 overflow-visible"
            viewBox="0 0 140 100"
            fill="none"
          >
            <path
              d="M10 90 C 25 40, 70 85, 115 25"
              stroke="#16181D"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            {/* Arrowhead */}
            <path
              d="M106 24 L 117 23 L 118 35"
              stroke="#16181D"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* Bottom-right: IN PROGRESS Pill Badge */}
          <div className="absolute bottom-5 sm:bottom-7 right-4 sm:right-6 bg-[#0052CC] text-white font-extrabold text-[11px] sm:text-xs tracking-wider uppercase px-3 sm:px-4 py-1.5 rounded-md shadow-md animate-in fade-in duration-300">
            IN PROGRESS
          </div>
        </div>
      );

    case 'strategy':
      return (
        <div className="absolute inset-0 pointer-events-none select-none z-20">
          {/* Arcing curved arrow from top-left */}
          <svg
            className="absolute -top-6 left-6 sm:left-12 w-32 sm:w-44 h-24 sm:h-32 overflow-visible"
            viewBox="0 0 160 110"
            fill="none"
          >
            <path
              d="M10 15 C 60 5, 120 10, 140 60"
              stroke="#16181D"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            {/* Arrowhead */}
            <path
              d="M130 52 L 140 62 L 148 50"
              stroke="#16181D"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* Bottom-left: ON TRACK Badge */}
          <div className="absolute bottom-16 sm:bottom-20 left-2 sm:left-4 bg-[#16181D] text-white font-extrabold text-[10px] sm:text-[11px] tracking-wider uppercase px-3 py-1.5 rounded-md shadow-md">
            ON TRACK
          </div>

          {/* Orange User Badge: Matthew with pointer */}
          <div className="absolute bottom-6 sm:bottom-8 left-16 sm:left-24 bg-[#FF9F0A] text-[#16181D] font-bold text-xs sm:text-sm px-4 sm:px-5 py-2 rounded-full shadow-lg flex items-center gap-1.5 animate-in fade-in duration-300">
            <span className="w-2 h-2 rounded-full bg-[#16181D]" />
            <span>Matthew</span>
            <div className="absolute -top-2 left-4 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[8px] border-b-[#FF9F0A]" />
          </div>
        </div>
      );

    case 'service':
      return (
        <div className="absolute inset-0 pointer-events-none select-none z-20">
          {/* Left: Long curved arrow arcing upwards */}
          <svg
            className="absolute -left-8 sm:-left-12 bottom-6 w-28 sm:w-36 h-48 sm:h-64 overflow-visible"
            viewBox="0 0 120 220"
            fill="none"
          >
            <path
              d="M10 200 C -15 110, 30 50, 95 30"
              stroke="#16181D"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            {/* Arrowhead */}
            <path
              d="M85 24 L 97 30 L 90 42"
              stroke="#16181D"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* Top-left: 4 Requests Badge */}
          <div className="absolute top-5 sm:top-8 left-4 sm:left-8 bg-white/95 text-[#16181D] font-bold text-xs sm:text-sm px-3.5 sm:px-4 py-2 rounded-full shadow-lg border border-slate-200 flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-[#FFC61A] text-[#16181D] font-black text-xs flex items-center justify-center">
              4
            </span>
            <span>Requests</span>
          </div>

          {/* Bottom status badge: Resolved */}
          <div className="absolute bottom-3 sm:bottom-5 left-10 sm:left-16 bg-[#FFC61A] text-[#16181D] font-bold text-xs sm:text-sm px-4 sm:px-5 py-2 rounded-full shadow-md flex items-center gap-2 animate-in fade-in duration-300">
            <div className="w-4 h-4 rounded-full bg-white text-[#16181D] flex items-center justify-center">
              <Check className="w-3 h-3 stroke-[3]" />
            </div>
            <span>Resolved</span>
          </div>
        </div>
      );

    case 'software':
      return (
        <div className="absolute inset-0 pointer-events-none select-none z-20">
          {/* Top-left: Brand Icon Badge */}
          <div className="absolute top-4 sm:top-6 left-4 sm:left-6 bg-[#16181D] p-2.5 rounded-xl shadow-lg border border-white/20">
            <DayflowAppIcon appId="miraz" className="w-6 h-6" />
          </div>

          {/* Top-right: Hand-drawn circular outline with checkmark */}
          <div className="absolute top-4 sm:top-6 right-24 sm:right-32 w-10 sm:w-12 h-10 sm:h-12 rounded-full border-2 border-[#16181D] flex items-center justify-center bg-white/80 shadow-xs">
            <Check className="w-6 h-6 text-[#16181D] stroke-[2.5]" />
          </div>

          {/* Green LAUNCHED Pill Badge */}
          <div className="absolute top-12 sm:top-14 right-4 sm:right-6 bg-[#94C943] text-[#16181D] font-black text-xs sm:text-sm tracking-wider uppercase px-4 py-1.5 rounded-md shadow-md animate-in fade-in duration-300">
            LAUNCHED
          </div>
        </div>
      );

    case 'product':
      return (
        <div className="absolute inset-0 pointer-events-none select-none z-20">
          {/* Bottom-left: Purple Target/Bullseye Badge */}
          <div className="absolute bottom-6 sm:bottom-10 left-3 sm:left-6 w-12 sm:w-14 h-12 sm:h-14 rounded-xl bg-[#C56BEA] border-2 border-[#16181D] flex items-center justify-center shadow-lg">
            <div className="w-6 h-6 rounded-full border-2 border-[#16181D] flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-[#16181D]" />
            </div>
          </div>

          {/* Rising Line Chart with Trend Arrow towards laptop */}
          <svg
            className="absolute bottom-6 sm:bottom-10 left-16 sm:left-24 w-48 sm:w-64 h-24 sm:h-32 overflow-visible"
            viewBox="0 0 220 100"
            fill="none"
          >
            {/* Chart line */}
            <path
              d="M10 90 L 50 60 L 95 75 L 175 15"
              stroke="#16181D"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Nodes */}
            <circle cx="50" cy="60" r="3.5" fill="#16181D" />
            <circle cx="95" cy="75" r="3.5" fill="#16181D" />
            {/* Arrowhead */}
            <path
              d="M165 14 L 176 14 L 176 26"
              stroke="#16181D"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* Right: fx Impact Score Dark Badge */}
          <div className="absolute bottom-6 sm:bottom-8 right-3 sm:right-6 bg-[#16181D] text-white font-bold text-xs sm:text-sm px-4 py-2 rounded-md shadow-lg flex items-center gap-2 animate-in fade-in duration-300">
            <span className="italic font-serif text-[#C56BEA] font-semibold text-sm">fx</span>
            <span>Impact Score</span>
          </div>
        </div>
      );
  }
};
