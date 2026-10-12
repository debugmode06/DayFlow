import React from 'react';
import { dayflowBrand, BrandConfig } from './config/brandConfig';
import { SiteHeader } from './components/SiteHeader';
import { HeroSection } from './components/HeroSection';
import { DayflowCapabilitiesStrip } from './components/DayflowCapabilitiesStrip';
import { DarkFeatureSection } from './components/DarkFeatureSection';
import { ProductShowcase } from './components/ProductShowcase';
import { DayflowFeatureGrid } from './components/DayflowFeatureGrid';
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
        {/* Header & Navigation Bar */}
        <SiteHeader
          brand={brand}
          onNavigateToAuth={handleNoNav}
        />

        {/* Hero Section with Inline Form Handling */}
        <HeroSection brand={brand} />

        {/* Dayflow Product Capabilities Strip */}
        <DayflowCapabilitiesStrip />

        {/* Dark AI Era Feature Showcase */}
        <DarkFeatureSection brand={brand} />

        {/* Product Demonstration / Interactive Kanban Board */}
        <ProductShowcase
          brand={brand}
          onGetStarted={handleNoNav}
        />

        {/* Dayflow Interactive Product Capability Grid */}
        <DayflowFeatureGrid />

        {/* Dayflow Founder Story Section (Mohan S. Story Card) */}
        <DayflowFounderStory />

        {/* Final Call to Action Section */}
        <FinalCTASection
          brand={brand}
          onGetStarted={handleNoNav}
        />

        {/* Site Footer */}
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
