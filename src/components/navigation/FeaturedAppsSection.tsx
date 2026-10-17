import React from 'react';
import { DayflowApp } from '../../data/productCatalog';
import { ApplicationCard } from './ApplicationCard';

interface FeaturedAppsSectionProps {
  headline: string;
  apps: DayflowApp[];
  onAppClick?: () => void;
}

export const FeaturedAppsSection: React.FC<FeaturedAppsSectionProps> = ({
  headline,
  apps,
  onAppClick
}) => {
  return (
    <section className="mb-6 sm:mb-7" aria-label={headline}>
      {/* Section Header */}
      <div className="mb-3">
        <h3 className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#42526E]">
          {headline}
        </h3>
        <div className="h-[1px] bg-[#DADDE2] mt-1.5" />
      </div>

      {/* Responsive App Grid: 3 columns on desktop, 2 on tablet, 1 on mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {apps.map((app) => (
          <ApplicationCard key={app.id} app={app} onClick={onAppClick} />
        ))}
      </div>
    </section>
  );
};
