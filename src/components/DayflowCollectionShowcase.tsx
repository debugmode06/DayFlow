import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import {
  COLLECTION_SHOWCASE_DATA,
  CollectionShowcaseItem
} from '../data/collectionShowcaseData';
import { CollectionSelector, CollectionTab } from './showcase/CollectionSelector';
import { CollectionProductList } from './showcase/CollectionProductList';
import { CollectionHeroVisual } from './showcase/CollectionHeroVisual';

export const DayflowCollectionShowcase: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState<CollectionShowcaseItem['id']>('teamwork');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const tabs: CollectionTab[] = COLLECTION_SHOWCASE_DATA.map((item) => ({
    id: item.id,
    label: item.tabName
  }));

  const currentCollection: CollectionShowcaseItem =
    COLLECTION_SHOWCASE_DATA.find((item) => item.id === activeTabId) ||
    COLLECTION_SHOWCASE_DATA[0];

  const handleSelectTab = (id: CollectionShowcaseItem['id']) => {
    if (id === activeTabId) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveTabId(id);
      setIsTransitioning(false);
    }, 150);
  };

  return (
    <section
      id="collections-showcase"
      className="py-14 sm:py-20 lg:py-24 bg-white overflow-hidden border-b border-slate-200/80"
      aria-label="Dayflow Collections Showcase"
    >
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-14">
        
        {/* 1. Top Segmented Collection Selector (Pill component) */}
        <div className="mb-10 sm:mb-14 lg:mb-16">
          <CollectionSelector
            tabs={tabs}
            activeTabId={activeTabId}
            onSelectTab={handleSelectTab}
          />
        </div>

        {/* 2. Main Two-Column Showcase Layout */}
        <div
          id={`panel-${currentCollection.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${currentCollection.id}`}
          className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center transition-opacity duration-200 ${
            isTransitioning ? 'opacity-40' : 'opacity-100'
          }`}
        >
          {/* Left Column: Content Hierarchy (approx 48-50%) */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-5 sm:space-y-6">
            
            {/* A. Collection title: [Name] Collection */}
            <h2 className="text-[26px] sm:text-[30px] lg:text-[34px] text-[#16181D] tracking-tight leading-none">
              <span className="font-extrabold">{currentCollection.collectionName}</span>{' '}
              <span className="font-normal text-[#16181D]">Collection</span>
            </h2>

            {/* B. Product application row */}
            <CollectionProductList apps={currentCollection.apps} />

            {/* C. Hero headline */}
            <h3 className="text-2xl sm:text-3xl lg:text-[36px] xl:text-[40px] font-extrabold text-[#16181D] leading-[1.16] tracking-[-0.025em] text-balance">
              {currentCollection.headline}
            </h3>

            {/* D. Supporting description */}
            <p className="text-[15px] sm:text-[16px] text-[#42454D] leading-[1.58] max-w-xl font-normal">
              {currentCollection.description}
            </p>

            {/* E. CTA link */}
            <div className="pt-1.5">
              <a
                href={currentCollection.ctaLink || '#features-grid'}
                className="inline-flex items-center gap-2 text-[15px] sm:text-[16px] font-bold text-[#0052CC] hover:text-[#0C66E4] transition-colors group outline-none focus-visible:underline"
              >
                <span>{currentCollection.ctaLabel}</span>
                <ArrowRight className="w-4.5 h-4.5 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </div>

          </div>

          {/* Right Column: Layered Editorial Hero Visual (approx 48-50%) */}
          <div className="lg:col-span-6 xl:col-span-6 flex justify-center lg:justify-end">
            <CollectionHeroVisual collection={currentCollection} />
          </div>

        </div>

      </div>
    </section>
  );
};

export default DayflowCollectionShowcase;
