import React, { useState, useEffect } from 'react';
import { Search, ChevronDown, Menu, X, ArrowRight, Sparkles, Layout, Layers, ShieldCheck, Zap } from 'lucide-react';
import { AtlassianLogo, JiraLogo } from './BrandLogos';
import { DayflowLogo, DayflowIcon } from './DayflowLogo';
import { BrandConfig } from '../config/brandConfig';

interface SiteHeaderProps {
  brand: BrandConfig;
  onNavigateToAuth?: (mode?: 'login' | 'signup') => void;
  onSearchOpen?: () => void;
  onOpenLoaderDemo?: () => void;
}

export const SiteHeader: React.FC<SiteHeaderProps> = ({ brand, onNavigateToAuth }) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.nav-dropdown-container')) {
        setActiveDropdown(null);
      }
    };
    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, []);

  const toggleDropdown = (name: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const isDayflow = brand.companyName === 'dayflow';

  return (
    <header className="sticky top-0 z-40 bg-white transition-all border-none border-0 shadow-none">
      <div className="flex items-center justify-between h-16 md:h-20 w-full max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Left: Product Logo & Primary Nav */}
        <div className="flex items-center gap-6 lg:gap-8">
            
            {/* Logo Display */}
            <div 
              className="flex items-center select-none py-1"
            >
              {isDayflow ? (
                <DayflowLogo 
                  variant="horizontal" 
                  showTagline={true} 
                  className="h-11 sm:h-12 md:h-13 lg:h-14 w-auto max-w-[270px] sm:max-w-[310px] md:max-w-[350px] transition-all" 
                />
              ) : (
                <div className="flex items-center gap-3">
                  <JiraLogo className="w-8 h-8 md:w-9 md:h-9" />
                  <span className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">
                    {brand.logoText}
                  </span>
                </div>
              )}
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2 nav-dropdown-container">
              
              {/* Features Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={(e) => toggleDropdown('features', e)}
                  className={`flex items-center gap-1 px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                    activeDropdown === 'features' ? 'text-blue-600 bg-blue-50/60' : 'text-slate-700 hover:text-slate-900'
                  }`}
                >
                  <span>Features</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'features' ? 'rotate-180' : ''}`} />
                </button>

                {activeDropdown === 'features' && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-slate-200 p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="space-y-1">
                      <a href="#ai-era" onClick={() => setActiveDropdown(null)} className="flex items-start gap-3 p-2 rounded-lg hover:bg-slate-50 transition-colors">
                        <div className="p-2 bg-blue-50 text-blue-600 rounded-lg shrink-0 mt-0.5">
                          <Sparkles className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-slate-900">Rovo AI & Agents</div>
                          <div className="text-xs text-slate-500">Autonomous workflow orchestration</div>
                        </div>
                      </a>
                      <a href="#product-showcase" onClick={() => setActiveDropdown(null)} className="flex items-start gap-3 p-2 rounded-lg hover:bg-slate-50 transition-colors">
                        <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg shrink-0 mt-0.5">
                          <Layout className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-slate-900">Kanban & Sprint Boards</div>
                          <div className="text-xs text-slate-500">Plan, track, and ship cross-functional work</div>
                        </div>
                      </a>
                      <a href="#ai-era" onClick={() => setActiveDropdown(null)} className="flex items-start gap-3 p-2 rounded-lg hover:bg-slate-50 transition-colors">
                        <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg shrink-0 mt-0.5">
                          <Layers className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-slate-900">Teamwork Graph CLI</div>
                          <div className="text-xs text-slate-500">Terminal access and MCP agent integration</div>
                        </div>
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* Solutions Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={(e) => toggleDropdown('solutions', e)}
                  className={`flex items-center gap-1 px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                    activeDropdown === 'solutions' ? 'text-blue-600 bg-blue-50/60' : 'text-slate-700 hover:text-slate-900'
                  }`}
                >
                  <span>Solutions</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'solutions' ? 'rotate-180' : ''}`} />
                </button>

                {activeDropdown === 'solutions' && (
                  <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-slate-200 p-3 z-50">
                    <div className="space-y-1">
                      <div className="px-2 py-1 text-xs font-semibold text-slate-400 uppercase tracking-wider">By Department</div>
                      <a href="#product-showcase" onClick={() => setActiveDropdown(null)} className="block px-3 py-1.5 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-md">Software Engineering</a>
                      <a href="#product-showcase" onClick={() => setActiveDropdown(null)} className="block px-3 py-1.5 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-md">Product Management</a>
                      <a href="#product-showcase" onClick={() => setActiveDropdown(null)} className="block px-3 py-1.5 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-md">Marketing & Creative</a>
                      <a href="#product-showcase" onClick={() => setActiveDropdown(null)} className="block px-3 py-1.5 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-md">Operations & HR</a>
                    </div>
                  </div>
                )}
              </div>

              {/* Guides */}
              <a
                href="#stories"
                className="px-3 py-1.5 text-sm font-medium text-slate-700 hover:text-slate-900 rounded-md transition-colors"
              >
                Guides
              </a>

              {/* Templates Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={(e) => toggleDropdown('templates', e)}
                  className={`flex items-center gap-1 px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                    activeDropdown === 'templates' ? 'text-blue-600 bg-blue-50/60' : 'text-slate-700 hover:text-slate-900'
                  }`}
                >
                  <span>Templates</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'templates' ? 'rotate-180' : ''}`} />
                </button>

                {activeDropdown === 'templates' && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-slate-200 p-2 z-50">
                    <a href="#product-showcase" onClick={() => setActiveDropdown(null)} className="block px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded-lg">Scrum & Sprints</a>
                    <a href="#product-showcase" onClick={() => setActiveDropdown(null)} className="block px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded-lg">Bug & Issue Tracking</a>
                    <a href="#product-showcase" onClick={() => setActiveDropdown(null)} className="block px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded-lg">GTM Marketing Launch</a>
                    <a href="#product-showcase" onClick={() => setActiveDropdown(null)} className="block px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded-lg">AI Agent Pipelines</a>
                  </div>
                )}
              </div>

              {/* Pricing */}
              <a
                href="#stats"
                className="px-3 py-1.5 text-sm font-medium text-slate-700 hover:text-slate-900 rounded-md transition-colors"
              >
                Pricing
              </a>
            </nav>
          </div>

          {/* Right: Search, Sign in, and Get it free button */}
          <div className="flex items-center gap-3 md:gap-5">
            
            {/* Search Button */}
            <button
              type="button"
              onClick={(e) => e.preventDefault()}
              className="w-9 h-9 rounded-full flex items-center justify-center text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Search"
              title="Search documentation and features"
            >
              <Search className="w-4 h-4 stroke-[2.2]" />
            </button>

            {/* Sign in button */}
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                onNavigateToAuth?.('login');
              }}
              className="hidden sm:inline-block text-sm font-semibold text-slate-800 hover:text-blue-600 transition-colors cursor-pointer"
            >
              Sign in
            </button>

            {/* Primary Action Button: 'Get it free' */}
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                onNavigateToAuth?.('signup');
              }}
              className="bg-[#0052cc] hover:bg-[#0065ff] text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-all shadow-sm hover:shadow active:scale-[0.98] whitespace-nowrap cursor-pointer"
            >
              Get it free
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-9 h-9 rounded-md flex items-center justify-center text-slate-700 hover:bg-slate-100"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 py-5 space-y-4 animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-3 font-medium text-slate-800">
            <a 
              href="#ai-era" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-slate-100 flex items-center justify-between"
            >
              <span>Features & AI Agents</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </a>
            <a 
              href="#product-showcase" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-slate-100 flex items-center justify-between"
            >
              <span>Interactive Board</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </a>
            <a 
              href="#stories" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-slate-100 flex items-center justify-between"
            >
              <span>Customer Stories</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </a>
            <a 
              href="#stats" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-slate-100 flex items-center justify-between"
            >
              <span>Pricing & Trust</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </a>
          </nav>
          <div className="pt-2 flex flex-col gap-2.5">
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                onNavigateToAuth?.('login');
              }}
              className="w-full py-2.5 text-center text-sm font-semibold text-slate-800 border border-slate-200 rounded-full hover:bg-slate-50 cursor-pointer"
            >
              Sign in
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                onNavigateToAuth?.('signup');
              }}
              className="w-full py-2.5 text-center text-sm font-semibold text-white bg-[#0052cc] rounded-full hover:bg-[#0065ff] cursor-pointer"
            >
              Get it free
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
