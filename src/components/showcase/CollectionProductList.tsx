import React from 'react';
import { CollectionAppItem } from '../../data/collectionShowcaseData';
import { DayflowAppIcon } from '../navigation/AppIcons';

interface CollectionProductListProps {
  apps: CollectionAppItem[];
}

export const CollectionProductList: React.FC<CollectionProductListProps> = ({ apps }) => {
  return (
    <div className="flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-7 pt-1 pb-1">
      {apps.map((app) => (
        <div key={app.id} className="flex items-center gap-2 select-none group">
          <div className="transition-transform duration-200 group-hover:scale-105">
            <DayflowAppIcon appId={app.id} className="w-[28px] h-[28px] sm:w-[32px] sm:h-[32px]" />
          </div>
          <span className="font-semibold text-[13.5px] sm:text-[14px] text-[#16181D] tracking-tight">
            {app.name}
          </span>
        </div>
      ))}
    </div>
  );
};
