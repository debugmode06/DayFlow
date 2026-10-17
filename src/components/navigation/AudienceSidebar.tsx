import React from 'react';
import { AUDIENCE_CATEGORIES } from '../../data/productCatalog';
import { ArrowRight } from 'lucide-react';

interface AudienceSidebarProps {
  activeCategoryId: string;
  onSelectCategory: (id: string) => void;
  onExploreAll?: () => void;
}

export const AudienceSidebar: React.FC<AudienceSidebarProps> = ({
  activeCategoryId,
  onSelectCategory,
  onExploreAll
}) => {
  return (
    <aside 
      className="w-full lg:w-[280px] bg-[#F7F7F8] shrink-0 border-b lg:border-b-0 lg:border-r border-[#E6E8EB] flex flex-col justify-between py-7 px-4 sm:px-5 select-none"
      aria-label="Product Categories"
    >
      {/* Category List */}
      <nav className="space-y-1" role="tablist" aria-orientation="vertical">
        {AUDIENCE_CATEGORIES.map((category) => {
          const isActive = category.id === activeCategoryId;
          return (
            <button
              key={category.id}
              role="tab"
              id={`tab-${category.id}`}
              aria-selected={isActive}
              aria-controls={`panel-${category.id}`}
              type="button"
              onClick={() => onSelectCategory(category.id)}
              className={`w-full h-[42px] sm:h-[44px] px-3.5 flex items-center text-left rounded-[10px] font-semibold text-[13px] sm:text-[13.5px] transition-colors outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 cursor-pointer ${
                isActive
                  ? 'bg-white text-[#0052cc] shadow-xs font-bold'
                  : 'text-[#16181D] hover:bg-black/[0.04]'
              }`}
            >
              <span>{category.name}</span>
            </button>
          );
        })}
      </nav>

      {/* Bottom Action: Explore all apps in reference blue */}
      <div className="pt-6 px-3.5 mt-auto">
        <a
          href="#features-grid"
          onClick={(e) => {
            if (onExploreAll) {
              onExploreAll();
            }
          }}
          className="inline-flex items-center gap-1.5 font-semibold text-[13px] text-[#0052cc] hover:text-[#0C66E4] transition-colors py-1 outline-none focus-visible:underline group"
        >
          <span>Explore all apps</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </a>
      </div>
    </aside>
  );
};
