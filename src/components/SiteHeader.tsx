import React, { useState, useEffect, useRef } from 'react';
import {
  Search,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Sparkles,
  Layout,
  Layers,
  ShieldCheck,
  Zap,
  Code2,
  Users,
  Compass,
  BookOpen,
  Award,
  HelpCircle,
  FileCode,
  Building2,
  CheckCircle2
} from 'lucide-react';
import { DayflowLogo, DayflowIcon } from './DayflowLogo';
import { BrandConfig } from '../config/brandConfig';
import { ProductMegaMenu } from './navigation/ProductMegaMenu';
import {
  AUDIENCE_CATEGORIES,
  DAYFLOW_APPS,
  DAYFLOW_COLLECTIONS
} from '../data/productCatalog';
import { DayflowAppIcon } from './navigation/AppIcons';

interface SiteHeaderProps {
  brand: BrandConfig;
  onNavigateToAuth?: (mode?: 'login' | 'signup') => void;
  onSearchOpen?: () => void;
  onOpenLoaderDemo?: () => void;
}

export const SiteHeader: React.FC<SiteHeaderProps> = ({
  brand,
  onNavigateToAuth
}) => {
  const [productsOpen, setProductsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileActiveCategory, setMobileActiveCategory] = useState('featured');
  const [mobileProductsExpanded, setMobileProductsExpanded] = useState(true);

  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Close dropdowns on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        !target.closest('.nav-dropdown-container') &&
        !target.closest('#dayflow-products-mega-menu')
      ) {
        setActiveDropdown(null);
        setProductsOpen(false);
      }
    };
    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, []);

  const handleMouseEnterProducts = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveDropdown(null);
    setProductsOpen(true);
  };

  const handleMouseLeaveProducts = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    closeTimeoutRef.current = setTimeout(() => {
      setProductsOpen(false);
    }, 280);
  };

  const toggleProductsMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveDropdown(null);
    setProductsOpen((prev) => !prev);
  };

  const toggleDropdown = (name: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setProductsOpen(false);
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const closeAllMenus = () => {
    setProductsOpen(false);
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  };

  const isDayflow = brand.companyName === 'dayflow';

  const currentMobileCategory =
    AUDIENCE_CATEGORIES.find((c) => c.id === mobileActiveCategory) ||
    AUDIENCE_CATEGORIES[0];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#E6E8EB] transition-all">
      <div className="relative flex items-center justify-between h-20 sm:h-[86px] md:h-[88px] w-full max-w-[1536px] mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Left: Product Logo & Main Desktop Nav */}
        <div className="flex items-center gap-6 lg:gap-8 min-w-0">
          
          {/* Brand Logo on the far left */}
          <div className="flex items-center select-none py-1 shrink-0">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                closeAllMenus();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              title="Dayflow — Make Work Flow"
              className="outline-none focus-visible:ring-2 focus-visible:ring-[#0052cc]/50 rounded-lg p-0.5"
            >
              <DayflowLogo
                variant="horizontal"
                showTagline={true}
                className="h-9 sm:h-10 md:h-11 w-auto max-w-[220px] sm:max-w-[260px] md:max-w-[290px] transition-all"
              />
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden md:flex items-center gap-0.5 lg:gap-1.5 nav-dropdown-container whitespace-nowrap flex-nowrap"
            aria-label="Main Navigation"
          >
            {/* 1. Products Trigger (Mega Menu) */}
            <div
              className="relative products-menu-trigger"
              onMouseEnter={handleMouseEnterProducts}
              onMouseLeave={handleMouseLeaveProducts}
            >
              <button
                type="button"
                id="products-menu-btn"
                aria-expanded={productsOpen}
                aria-controls="dayflow-products-mega-menu"
                onClick={toggleProductsMenu}
                className={`flex items-center gap-1 px-3 py-2 text-[14px] font-medium transition-colors cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 rounded-md ${
                  productsOpen
                    ? 'text-[#0052cc] font-semibold'
                    : 'text-[#16181D] hover:text-[#0052cc]'
                }`}
              >
                <span>Products</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    productsOpen ? 'rotate-180 text-[#0052cc]' : 'text-slate-500'
                  }`}
                />
              </button>
            </div>

            {/* 2. AI Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={(e) => toggleDropdown('ai', e)}
                className={`flex items-center gap-1.5 px-3 py-2 text-[14px] font-medium rounded-lg transition-colors cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 ${
                  activeDropdown === 'ai'
                    ? 'text-[#0052cc] bg-blue-50/70 font-semibold'
                    : 'text-[#16181D] hover:text-[#0052cc] hover:bg-slate-50'
                }`}
              >
                <span>AI</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeDropdown === 'ai' ? 'rotate-180 text-[#0052cc]' : 'text-slate-500'
                  }`}
                />
              </button>

              {activeDropdown === 'ai' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-[#DDE0E5] p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="space-y-1">
                    <a
                      href="#ai-era"
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                    >
                      <div className="p-2 bg-blue-50 text-[#0052cc] rounded-xl shrink-0 mt-0.5">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-900">Zuno & Dayflow Brain</div>
                        <div className="text-xs text-slate-500 mt-0.5">Contextual AI work companion across teams</div>
                      </div>
                    </a>
                    <a
                      href="#ai-era"
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                    >
                      <div className="p-2 bg-blue-50 text-blue-600 rounded-xl shrink-0 mt-0.5">
                        <Zap className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-900">Autonomous Agents</div>
                        <div className="text-xs text-slate-500 mt-0.5">Turn plan specs into verified PRs & tickets</div>
                      </div>
                    </a>
                    <a
                      href="#ai-era"
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                    >
                      <div className="p-2 bg-purple-50 text-purple-600 rounded-xl shrink-0 mt-0.5">
                        <Layers className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-900">Teamwork Graph CLI</div>
                        <div className="text-xs text-slate-500 mt-0.5">Terminal access & MCP agent protocols</div>
                      </div>
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* 3. Solutions Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={(e) => toggleDropdown('solutions', e)}
                className={`flex items-center gap-1.5 px-3 py-2 text-[14px] font-medium rounded-lg transition-colors cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 ${
                  activeDropdown === 'solutions'
                    ? 'text-[#0052cc] bg-blue-50/70 font-semibold'
                    : 'text-[#16181D] hover:text-[#0052cc] hover:bg-slate-50'
                }`}
              >
                <span>Solutions</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeDropdown === 'solutions' ? 'rotate-180 text-[#0052cc]' : 'text-slate-500'
                  }`}
                />
              </button>

              {activeDropdown === 'solutions' && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-[#DDE0E5] p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="space-y-1">
                    <div className="px-3 py-1 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      By Department
                    </div>
                    <a
                      href="#product-showcase"
                      onClick={() => setActiveDropdown(null)}
                      className="block px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg transition-colors"
                    >
                      Software Engineering & QA
                    </a>
                    <a
                      href="#product-showcase"
                      onClick={() => setActiveDropdown(null)}
                      className="block px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg transition-colors"
                    >
                      Product Management & Roadmaps
                    </a>
                    <a
                      href="#product-showcase"
                      onClick={() => setActiveDropdown(null)}
                      className="block px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg transition-colors"
                    >
                      Marketing & Creative Campaigns
                    </a>
                    <a
                      href="#product-showcase"
                      onClick={() => setActiveDropdown(null)}
                      className="block px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg transition-colors"
                    >
                      IT Support & Operations
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* 4. Why Dayflow Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={(e) => toggleDropdown('why-dayflow', e)}
                className={`flex items-center gap-1.5 px-3 py-2 text-[14px] font-medium rounded-lg transition-colors cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 ${
                  activeDropdown === 'why-dayflow'
                    ? 'text-[#0052cc] bg-blue-50/70 font-semibold'
                    : 'text-[#16181D] hover:text-[#0052cc] hover:bg-slate-50'
                }`}
              >
                <span>Why Dayflow</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeDropdown === 'why-dayflow' ? 'rotate-180 text-[#0052cc]' : 'text-slate-500'
                  }`}
                />
              </button>

              {activeDropdown === 'why-dayflow' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-[#DDE0E5] p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="space-y-1">
                    <a
                      href="#features-grid"
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                    >
                      <div className="p-2 bg-emerald-50 text-emerald-600 rounded-xl shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-900">All-in-One Consolidation</div>
                        <div className="text-xs text-slate-500 mt-0.5">Replace 6+ disconnected SaaS tools</div>
                      </div>
                    </a>
                    <a
                      href="#stories"
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                    >
                      <div className="p-2 bg-blue-50 text-blue-600 rounded-xl shrink-0 mt-0.5">
                        <Award className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-900">Founder Story & Vision</div>
                        <div className="text-xs text-slate-500 mt-0.5">Built by Mohan S. for high-flow engineering</div>
                      </div>
                    </a>
                    <a
                      href="#stats"
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                    >
                      <div className="p-2 bg-purple-50 text-purple-600 rounded-xl shrink-0 mt-0.5">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-900">Enterprise Security</div>
                        <div className="text-xs text-slate-500 mt-0.5">SOC2, HIPAA, GDPR & SSO compliance</div>
                      </div>
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Enterprise Standard Link */}
            <a
              href="#features-grid"
              onClick={() => closeAllMenus()}
              className="px-3 py-2 text-[14px] font-medium text-[#16181D] hover:text-[#0052cc] hover:bg-slate-50 rounded-lg transition-colors"
            >
              Enterprise
            </a>
          </nav>
        </div>

        {/* Right: Search, Sign in, and Get it free button */}
        <div className="flex items-center gap-3 md:gap-4 shrink-0">
          
          {/* Search Button */}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              closeAllMenus();
            }}
            className="w-9 h-9 rounded-full flex items-center justify-center text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Search Dayflow workspace"
            title="Search products and documentation"
          >
            <Search className="w-4 h-4 stroke-[2.2]" />
          </button>

          {/* Sign in button */}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              closeAllMenus();
              onNavigateToAuth?.('login');
            }}
            className="hidden sm:inline-block text-sm font-semibold text-slate-800 hover:text-blue-600 transition-colors cursor-pointer px-2 py-1"
          >
            Sign in
          </button>

          {/* Primary Action Button: 'Get it free' */}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              closeAllMenus();
              onNavigateToAuth?.('signup');
            }}
            className="bg-[#0052cc] hover:bg-[#0065ff] text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-all shadow-sm hover:shadow active:scale-[0.98] whitespace-nowrap cursor-pointer"
          >
            Get it free
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => {
              setProductsOpen(false);
              setActiveDropdown(null);
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="md:hidden w-9 h-9 rounded-md flex items-center justify-center text-slate-700 hover:bg-slate-100 cursor-pointer"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Floating Mega Menu Component (Centered horizontally beneath the navbar) */}
        <ProductMegaMenu
          isOpen={productsOpen}
          onClose={() => setProductsOpen(false)}
          onActionClick={closeAllMenus}
          onMouseEnter={handleMouseEnterProducts}
          onMouseLeave={handleMouseLeaveProducts}
        />
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#DDE0E5] px-4 sm:px-6 py-5 max-h-[calc(100vh-80px)] overflow-y-auto space-y-5 animate-in slide-in-from-top-4 duration-200">
          
          {/* Mobile Products Accordion */}
          <div className="border border-[#DDE0E5] rounded-2xl p-4 bg-[#F7F7F8]/80">
            <button
              type="button"
              onClick={() => setMobileProductsExpanded(!mobileProductsExpanded)}
              className="w-full flex items-center justify-between font-bold text-base text-[#16181D]"
            >
              <span className="flex items-center gap-2">
                <span className="text-[#0052cc]">Products</span>
                <span className="text-xs bg-blue-50 text-[#0052cc] px-2 py-0.5 rounded-full border border-blue-200">
                  Ecosystem
                </span>
              </span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  mobileProductsExpanded ? 'rotate-180 text-[#0052cc]' : 'text-slate-400'
                }`}
              />
            </button>

            {mobileProductsExpanded && (
              <div className="mt-4 pt-4 border-t border-[#DDE0E5] space-y-4">
                {/* Horizontal Category Pill Tabs */}
                <div className="flex gap-1.5 overflow-x-auto pb-2 scrollbar-none">
                  {AUDIENCE_CATEGORIES.map((cat) => {
                    const isSelected = cat.id === mobileActiveCategory;
                    return (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => setMobileActiveCategory(cat.id)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-colors ${
                          isSelected
                            ? 'bg-white text-[#0052cc] shadow-xs ring-1 ring-blue-500/20'
                            : 'text-slate-700 hover:bg-white/60'
                        }`}
                      >
                        {cat.name}
                      </button>
                    );
                  })}
                </div>

                {/* Mobile Apps List */}
                <div className="space-y-2 bg-white rounded-xl p-3 border border-[#DDE0E5]/60">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                    {currentMobileCategory.headline}
                  </div>
                  {currentMobileCategory.appIds.map((id) => {
                    const app = DAYFLOW_APPS[id];
                    if (!app) return null;
                    return (
                      <a
                        key={app.id}
                        href={app.link || '#product-showcase'}
                        onClick={closeAllMenus}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 transition-colors"
                      >
                        <DayflowAppIcon appId={app.id} className="w-8 h-8" />
                        <div>
                          <div className="text-sm font-bold text-[#16181D]">{app.name}</div>
                          <div className="text-xs text-[#626570] line-clamp-1">{app.tagline}</div>
                        </div>
                      </a>
                    );
                  })}
                </div>

                {/* Mobile Collections List */}
                {currentMobileCategory.collectionIds.length > 0 && (
                  <div className="space-y-2">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Collections
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                      {currentMobileCategory.collectionIds.map((colId) => {
                        const col = DAYFLOW_COLLECTIONS[colId];
                        if (!col) return null;
                        return (
                          <a
                            key={col.id}
                            href={col.link || '#features-grid'}
                            onClick={closeAllMenus}
                            className="p-3 bg-white rounded-xl border border-[#DDE0E5]/60 block"
                          >
                            <div className="text-sm font-bold text-[#16181D]">
                              {col.name} <span className="font-normal text-slate-500">Collection</span>
                            </div>
                            <div className="text-xs text-[#626570] mt-0.5">{col.description}</div>
                            <div className="text-[11px] text-slate-400 mt-1 font-medium">{col.products}</div>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Explore all apps link */}
                <a
                  href="#features-grid"
                  onClick={closeAllMenus}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0052cc] pt-1"
                >
                  <span>Explore all apps in Capability Matrix</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            )}
          </div>

          {/* Standard Navigation Links */}
          <nav className="flex flex-col space-y-1 font-medium text-slate-800">
            <a
              href="#ai-era"
              onClick={closeAllMenus}
              className="py-2.5 px-3 rounded-lg hover:bg-slate-50 flex items-center justify-between"
            >
              <span className="flex items-center gap-2 text-sm font-semibold">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span>AI & Agents</span>
              </span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </a>
            <a
              href="#product-showcase"
              onClick={closeAllMenus}
              className="py-2.5 px-3 rounded-lg hover:bg-slate-50 flex items-center justify-between"
            >
              <span className="flex items-center gap-2 text-sm font-semibold">
                <Layout className="w-4 h-4 text-emerald-500" />
                <span>Solutions & Boards</span>
              </span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </a>
            <a
              href="#features-grid"
              onClick={closeAllMenus}
              className="py-2.5 px-3 rounded-lg hover:bg-slate-50 flex items-center justify-between"
            >
              <span className="flex items-center gap-2 text-sm font-semibold">
                <ShieldCheck className="w-4 h-4 text-blue-500" />
                <span>Enterprise Platform</span>
              </span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </a>
            <a
              href="#stories"
              onClick={closeAllMenus}
              className="py-2.5 px-3 rounded-lg hover:bg-slate-50 flex items-center justify-between"
            >
              <span className="flex items-center gap-2 text-sm font-semibold">
                <Award className="w-4 h-4 text-purple-500" />
                <span>Customer Stories</span>
              </span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </a>
          </nav>

          {/* Mobile Auth Actions */}
          <div className="pt-2 flex flex-col gap-2.5">
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                closeAllMenus();
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
                closeAllMenus();
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

export default SiteHeader;
