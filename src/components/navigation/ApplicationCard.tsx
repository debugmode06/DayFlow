import React from 'react';
import { DayflowApp } from '../../data/productCatalog';
import { DayflowAppIcon } from './AppIcons';

interface ApplicationCardProps {
  app: DayflowApp;
  onClick?: () => void;
}

export const ApplicationCard: React.FC<ApplicationCardProps> = ({ app, onClick }) => {
  return (
    <a
      href={app.link || '#product-showcase'}
      onClick={(e) => {
        if (onClick) onClick();
      }}
      className="group flex items-start gap-3 p-1.5 rounded-lg transition-colors hover:bg-slate-50/60 outline-none focus-visible:ring-2 focus-visible:ring-slate-400 cursor-pointer"
      title={`${app.name} — ${app.description}`}
    >
      {/* 36x36 App Icon with 8-10px radius */}
      <div className="shrink-0 pt-0.5">
        <DayflowAppIcon appId={app.id} className="w-9 h-9 rounded-[9px]" />
      </div>

      {/* App Metadata */}
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1.5">
          <h4 className="font-bold text-[14px] sm:text-[14.5px] text-[#16181D] tracking-tight group-hover:text-[#0052cc] transition-colors leading-tight">
            {app.name}
          </h4>
          {app.badge && (
            <span className="text-[9px] font-bold px-1.5 py-0.2 rounded-full bg-blue-50 text-[#0052cc] border border-blue-200/60 uppercase">
              {app.badge}
            </span>
          )}
        </div>
        <p className="text-[12px] sm:text-[12.5px] text-[#5B5E66] leading-[1.35] mt-0.5 font-normal line-clamp-2">
          {app.tagline || app.description}
        </p>
      </div>
    </a>
  );
};
