import React from 'react';
import { DayflowCollection } from '../../data/productCatalog';
import { CollectionCard } from './CollectionCard';

interface CollectionsSectionProps {
  collections: DayflowCollection[];
  onCollectionClick?: () => void;
}

export const CollectionsSection: React.FC<CollectionsSectionProps> = ({
  collections,
  onCollectionClick
}) => {
  return (
    <section className="mt-8 sm:mt-9 mb-6" aria-label="Dayflow Collections">
      {/* Section Header */}
      <div className="mb-3.5">
        <h3 className="text-[12px] font-bold uppercase tracking-[0.08em] text-[#42526E]">
          DAYFLOW COLLECTIONS
        </h3>
        <div className="h-[1px] bg-[#DADDE2] mt-1.5" />
      </div>

      {/* 2-column Grid of Cards with 24-30px gap */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {collections.map((col) => (
          <CollectionCard
            key={col.id}
            collection={col}
            onClick={onCollectionClick}
          />
        ))}
      </div>
    </section>
  );
};
