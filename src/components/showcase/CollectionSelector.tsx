import React from 'react';

export interface CollectionTab {
  id: 'teamwork' | 'strategy' | 'service' | 'software' | 'product';
  label: string;
}

interface CollectionSelectorProps {
  tabs: CollectionTab[];
  activeTabId: string;
  onSelectTab: (id: 'teamwork' | 'strategy' | 'service' | 'software' | 'product') => void;
}

export const CollectionSelector: React.FC<CollectionSelectorProps> = ({
  tabs,
  activeTabId,
  onSelectTab
}) => {
  return (
    <div className="w-full flex justify-center px-4 sm:px-6">
      <div
        role="tablist"
        aria-label="Dayflow Collections Selector"
        className="w-full max-w-[820px] min-h-[50px] sm:min-h-[56px] bg-[#F0F1F2] rounded-full p-1 sm:p-1.5 flex items-center justify-between gap-1 overflow-x-auto scrollbar-none select-none shadow-2xs"
      >
        {tabs.map((tab) => {
          const isActive = tab.id === activeTabId;
          return (
            <button
              key={tab.id}
              role="tab"
              id={`tab-${tab.id}`}
              aria-selected={isActive}
              aria-controls={`panel-${tab.id}`}
              tabIndex={isActive ? 0 : -1}
              type="button"
              onClick={() => onSelectTab(tab.id)}
              className={`flex-1 min-w-[90px] sm:min-w-0 h-full py-2 sm:py-2.5 px-3 sm:px-4 rounded-full flex items-center justify-center text-center font-bold text-[13px] sm:text-[14px] transition-all duration-200 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-blue-600/40 whitespace-nowrap ${
                isActive
                  ? 'bg-[#111315] text-white shadow-sm font-bold'
                  : 'text-[#16181D] hover:text-black hover:bg-black/[0.04] font-semibold'
              }`}
            >
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
