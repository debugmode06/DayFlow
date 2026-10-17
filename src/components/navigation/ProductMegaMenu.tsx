import React, { useState, useEffect, useRef } from 'react';
import {
  AUDIENCE_CATEGORIES,
  DAYFLOW_APPS,
  DAYFLOW_COLLECTIONS,
  AudienceCategory
} from '../../data/productCatalog';
import { AudienceSidebar } from './AudienceSidebar';
import { FeaturedAppsSection } from './FeaturedAppsSection';
import { CollectionsSection } from './CollectionsSection';
import { ZunoBanner } from './ZunoBanner';

interface ProductMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onActionClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export const ProductMegaMenu: React.FC<ProductMegaMenuProps> = ({
  isOpen,
  onClose,
  onActionClick,
  onMouseEnter,
  onMouseLeave
}) => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>('featured');
  const menuRef = useRef<HTMLDivElement | null>(null);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Click outside to dismiss (excluding the toggle button)
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        menuRef.current &&
        !menuRef.current.contains(target) &&
        !target.closest('.products-menu-trigger')
      ) {
        onClose();
      }
    };

    window.addEventListener('mousedown', handleClickOutside);
    return () => window.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Resolve current active category data
  const currentCategory: AudienceCategory =
    AUDIENCE_CATEGORIES.find((cat) => cat.id === activeCategoryId) ||
    AUDIENCE_CATEGORIES[0];

  const currentApps = currentCategory.appIds
    .map((id) => DAYFLOW_APPS[id])
    .filter(Boolean);

  const currentCollections = currentCategory.collectionIds
    .map((id) => DAYFLOW_COLLECTIONS[id])
    .filter(Boolean);

  const handleInteraction = () => {
    if (onActionClick) {
      onActionClick();
    }
  };

  return (
    <div
      ref={menuRef}
      id="dayflow-products-mega-menu"
      role="region"
      aria-label="Dayflow Products Mega Menu"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="absolute top-full left-1/2 -translate-x-1/2 mt-1 sm:mt-1.5 w-[88vw] max-w-[1140px] bg-white border border-[#E6E8EB] rounded-[16px] shadow-[0_16px_36px_rgba(0,0,0,0.08)] z-50 flex flex-col lg:flex-row animate-in fade-in slide-in-from-top-1 duration-150 overflow-hidden"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Column 1: Left Audience Sidebar (260px / ~23%) */}
      <AudienceSidebar
        activeCategoryId={activeCategoryId}
        onSelectCategory={setActiveCategoryId}
        onExploreAll={() => {
          handleInteraction();
          onClose();
        }}
      />

      {/* Column 2: Right Content Panel (Remaining ~77%) */}
      <div 
        id={`panel-${currentCategory.id}`}
        role="tabpanel"
        aria-labelledby={`tab-${currentCategory.id}`}
        className="flex-1 bg-white px-6 sm:px-7 lg:px-8 pt-6 sm:pt-7 pb-5 flex flex-col justify-between"
      >
        <div>
          {/* Section 1: Featured / Category Apps */}
          <FeaturedAppsSection
            headline={currentCategory.headline}
            apps={currentApps}
            onAppClick={() => {
              handleInteraction();
              onClose();
            }}
          />

          {/* Section 2: Dayflow Collections */}
          {currentCollections.length > 0 && (
            <CollectionsSection
              collections={currentCollections}
              onCollectionClick={() => {
                handleInteraction();
                onClose();
              }}
            />
          )}
        </div>

        {/* Section 3: Zuno Assistant Banner */}
        <ZunoBanner
          onBannerClick={() => {
            handleInteraction();
            onClose();
          }}
        />
      </div>
    </div>
  );
};
