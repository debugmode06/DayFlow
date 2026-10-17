import React from 'react';
import { DayflowAppIcon } from './AppIcons';
import { ArrowRight } from 'lucide-react';

interface ZunoBannerProps {
  onBannerClick?: () => void;
}

export const ZunoBanner: React.FC<ZunoBannerProps> = ({ onBannerClick }) => {
  return (
    <aside aria-label="Zuno AI Assistant" className="pt-2">
      <a
        href="#ai-era"
        onClick={(e) => {
          if (onBannerClick) onBannerClick();
        }}
        className="group w-full min-h-[66px] sm:min-h-[70px] bg-white hover:bg-slate-50/70 border border-[#E6E8EB] hover:border-slate-300 rounded-[16px] px-4 sm:px-5 py-2.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 sm:gap-4 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 cursor-pointer shadow-2xs"
      >
        {/* Left: Icon, Name & Description */}
        <div className="flex items-center gap-3">
          <div className="shrink-0">
            <DayflowAppIcon appId="zuno" className="w-8 h-8 rounded-[8px]" />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
            <span className="font-bold text-[14px] sm:text-[14.5px] text-[#16181D] tracking-tight group-hover:text-[#0052cc] transition-colors flex items-center gap-1.5">
              <span>Zuno</span>
              <span className="text-[9px] font-bold px-1.5 py-0.2 rounded-full bg-blue-50 text-[#0052cc] border border-blue-200/60 uppercase">
                AI
              </span>
            </span>
            <span className="hidden sm:inline text-slate-300 text-xs">·</span>
            <span className="text-[12px] sm:text-[12.5px] text-[#5B5E66] font-normal leading-snug">
              AI-powered work assistance across your Dayflow apps.
            </span>
          </div>
        </div>

        {/* Right: Learn more CTA */}
        <div className="flex items-center gap-1.5 text-[12.5px] font-semibold text-[#0052cc] group-hover:text-[#0C66E4] transition-colors shrink-0 self-end sm:self-auto">
          <span>Explore Zuno</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </div>
      </a>
    </aside>
  );
};
