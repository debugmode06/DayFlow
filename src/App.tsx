import React from 'react';
import { dayflowBrand, BrandConfig } from './config/brandConfig';
import { SiteHeader } from './components/SiteHeader';
import { HeroSection } from './components/HeroSection';
import { DayflowFeatureGrid } from './components/DayflowFeatureGrid';
import { DayflowCollectionShowcase } from './components/DayflowCollectionShowcase';
import { DarkFeatureSection } from './components/DarkFeatureSection';
import { ProductShowcase } from './components/ProductShowcase';
import { DayflowFounderStory } from './components/DayflowFounderStory';
import { FinalCTASection } from './components/FinalCTASection';
import { SiteFooter } from './components/SiteFooter';

export default function App() {
  const brand: BrandConfig = dayflowBrand;

  // Safe in-place handler that does not navigate or jump the viewport
  const handleNoNav = () => {
    // In-place non-navigating handler
  };

  return (
    <div className="min-h-screen bg-white text-[#161b22] flex flex-col font-sans">
      <main className="flex-1 flex flex-col">
        {/* 1. Header & Navigation Bar with Enterprise Product Mega Menu */}
        <SiteHeader
          brand={brand}
          onNavigateToAuth={handleNoNav}
        />

        {/* 2. Hero Section with Inline Form Handling */}
        <HeroSection brand={brand} />

        {/* 3. Dayflow Interactive Product Capability Grid */}
        <DayflowFeatureGrid />

        {/* 4. Dayflow Product Collection Showcase (Teamwork, Strategy, Service, Software, Product) */}
        <DayflowCollectionShowcase />

        {/* 5. Dark AI Era Feature Showcase */}
        <DarkFeatureSection brand={brand} />

        {/* 6. Product Demonstration / Interactive Kanban Board */}
        <ProductShowcase
          brand={brand}
          onGetStarted={handleNoNav}
        />

        {/* 7. Dayflow Founder Story Section (Mohan S. Story Card) */}
        <DayflowFounderStory />

        {/* 8. Final Call to Action Section */}
        <FinalCTASection
          brand={brand}
          onGetStarted={handleNoNav}
        />

        {/* 9. Site Footer */}
        <div id="footer">
          <SiteFooter
            brand={brand}
            onNavigateToAuth={handleNoNav}
          />
        </div>
      </main>
    </div>
  );
}
