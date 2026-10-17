import React from 'react';
import { CollectionShowcaseItem } from '../../data/collectionShowcaseData';
import { CollectionVisualAnnotations } from './CollectionVisualAnnotations';

interface CollectionHeroVisualProps {
  collection: CollectionShowcaseItem;
}

export const CollectionHeroVisual: React.FC<CollectionHeroVisualProps> = ({ collection }) => {
  return (
    <div className="relative w-full max-w-[680px] mx-auto lg:ml-auto lg:mr-0 pt-6 pb-6 select-none">
      
      {/* 1. Large Offset Colored Geometric Backplate */}
      <div
        className="absolute inset-0 transition-all duration-500 ease-out z-0"
        style={{
          backgroundColor: collection.backplateColor,
          clipPath: collection.backplatePolygon,
          transform: 'scale(1.04) translate(4px, -6px)'
        }}
        aria-hidden="true"
      />

      {/* 2. Layered Monochrome Photograph Container */}
      <div className="relative z-10 w-full overflow-hidden shadow-2xl bg-slate-900 border border-black/10">
        <img
          src={collection.image}
          alt={collection.imageAlt}
          className="w-full h-[320px] sm:h-[390px] lg:h-[430px] object-cover filter grayscale contrast-110 brightness-95 transition-all duration-300"
          loading="eager"
        />

        {/* 3. Floating Visual Annotations */}
        <CollectionVisualAnnotations collectionId={collection.id} />
      </div>

    </div>
  );
};
