import React from 'react';
import { DayflowCollection } from '../../data/productCatalog';

interface CollectionCardProps {
  collection: DayflowCollection;
  onClick?: () => void;
}

export const CollectionCard: React.FC<CollectionCardProps> = ({ collection, onClick }) => {
  return (
    <a
      href={collection.link || '#features-grid'}
      onClick={(e) => {
        if (onClick) onClick();
      }}
      className="group bg-[#F7F7F8] hover:bg-[#F0F1F3] rounded-[20px] px-5 py-4 sm:px-6 sm:py-4.5 min-h-[114px] sm:min-h-[120px] flex flex-col justify-between transition-colors border-0 shadow-none outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 cursor-pointer text-left"
    >
      <div>
        {/* Title: [Name] Collection */}
        <h4 className="text-[15px] sm:text-[16px] text-[#16181D] tracking-tight leading-snug">
          <span className="font-bold group-hover:text-[#0052cc] transition-colors">{collection.name}</span>{' '}
          <span className="font-normal text-[#16181D]">Collection</span>
        </h4>

        {/* Description */}
        <p className="text-[12px] sm:text-[12.5px] text-[#5B5E66] mt-1 leading-[1.38] font-normal">
          {collection.description}
        </p>
      </div>

      {/* Included Products List */}
      <div className="mt-2.5 text-[12px] text-[#5B5E66] font-medium tracking-tight">
        {collection.products}
      </div>
    </a>
  );
};
