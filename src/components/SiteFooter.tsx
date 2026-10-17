import React, { useState } from 'react';
import { 
  Globe, 
  ChevronDown, 
  ArrowUp, 
  Github, 
  Twitter, 
  Linkedin, 
  Mail, 
  Sparkles,
  ExternalLink,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { DayflowLogo } from './DayflowLogo';
import { BrandConfig } from '../config/brandConfig';

interface SiteFooterProps {
  brand: BrandConfig;
  onNavigateToAuth: () => void;
}

export const SiteFooter: React.FC<SiteFooterProps> = ({ brand, onNavigateToAuth }) => {
  const [languageOpen, setLanguageOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('English (US)');
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | 'security' | 'cookies' | null>(null);

  const languages = [
    'English (US)',
    'English (UK)',
    'Deutsch',
    'Français',
    'Español',
    '日本語',
    'Português'
  ];

  const scrollToTop = (e?: React.MouseEvent) => {
    if (e && e.preventDefault) e.preventDefault();
  };

  const scrollToSection = (id: string, e?: React.MouseEvent) => {
    if (e && e.preventDefault) e.preventDefault();
  };

  return (
    <footer className="bg-slate-50/70 border-t border-slate-200/80 text-slate-700 transition-colors">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12 pt-16 pb-12">
        
        {/* Main Grid: Brand info (4 cols) + Navigation Columns (8 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 pb-14 border-b border-slate-200/80">
          
          {/* Brand & Mission Column */}
          <div className="lg:col-span-4 space-y-5">
            <div 
              onClick={scrollToTop}
              className="inline-block cursor-pointer hover:opacity-90 transition-opacity"
              title="Dayflow — Make Work Flow"
            >
              <DayflowLogo variant="horizontal" className="h-10 sm:h-11 md:h-12 w-auto max-w-[280px]" />
            </div>

            <p className="text-sm text-slate-600 leading-relaxed max-w-sm font-normal">
              A connected workspace bringing projects, tasks, teams, and intelligent agent workflows into one unified flow. Built for modern teams who value clarity and momentum.
            </p>

            {/* Founder Attribution Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50/80 border border-blue-200/60 text-xs font-medium text-blue-800 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              <span>Founded by <strong className="font-semibold text-blue-900">Mohan S.</strong></span>
              <span className="text-blue-400">·</span>
              <button 
                type="button"
                onClick={() => scrollToSection('stories')}
                className="font-semibold hover:underline cursor-pointer text-blue-700"
              >
                Read story →
              </button>
            </div>

            {/* System Status Indicator */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/70 text-xs font-medium text-emerald-800">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>All systems operational</span>
              </div>
            </div>

            {/* Social & Contact Links */}
            <div className="pt-2 flex items-center gap-3">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white border border-slate-200 hover:border-slate-300 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-all hover:shadow-xs active:scale-95"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white border border-slate-200 hover:border-slate-300 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-all hover:shadow-xs active:scale-95"
                title="X / Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white border border-slate-200 hover:border-slate-300 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-all hover:shadow-xs active:scale-95"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="mailto:mr.mohan.s143@gmail.com"
                className="w-9 h-9 rounded-lg bg-white border border-slate-200 hover:border-slate-300 text-slate-600 hover:text-blue-600 flex items-center justify-center transition-all hover:shadow-xs active:scale-95"
                title="Email Mohan S. (mr.mohan.s143@gmail.com)"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* 4 Nav Columns (8 cols) */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            
            {/* Column 1: Product */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Product
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm font-medium text-slate-600">
                <li>
                  <button 
                    type="button" 
                    onClick={() => scrollToSection('capabilities')}
                    className="hover:text-blue-600 transition-colors text-left"
                  >
                    Tasks & Subtasks
                  </button>
                </li>
                <li>
                  <button 
                    type="button" 
                    onClick={() => scrollToSection('product-showcase')}
                    className="hover:text-blue-600 transition-colors text-left"
                  >
                    Kanban Board
                  </button>
                </li>
                <li>
                  <button 
                    type="button" 
                    onClick={() => scrollToSection('capabilities')}
                    className="hover:text-blue-600 transition-colors text-left"
                  >
                    Projects & Roadmaps
                  </button>
                </li>
                <li>
                  <button 
                    type="button" 
                    onClick={() => scrollToSection('capabilities')}
                    className="hover:text-blue-600 transition-colors text-left"
                  >
                    Connected Teams
                  </button>
                </li>
                <li>
                  <button 
                    type="button" 
                    onClick={() => scrollToSection('ai-era')}
                    className="hover:text-blue-600 transition-colors text-left flex items-center gap-1.5"
                  >
                    <span>Dayflow Brain</span>
                    <span className="px-1.5 py-0.2 rounded text-[10px] font-bold bg-purple-100 text-purple-700">AI</span>
                  </button>
                </li>
                <li>
                  <button 
                    type="button" 
                    onClick={() => scrollToSection('capabilities')}
                    className="hover:text-blue-600 transition-colors text-left"
                  >
                    Workflow Automation
                  </button>
                </li>
                <li>
                  <span className="text-slate-500 flex items-center gap-1.5">
                    <span>Changelog</span>
                    <span className="px-1.5 py-0.2 rounded text-[10px] font-bold bg-blue-100 text-blue-700">v2.4</span>
                  </span>
                </li>
              </ul>
            </div>

            {/* Column 2: Solutions */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Solutions
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm font-medium text-slate-600">
                <li>
                  <button type="button" onClick={onNavigateToAuth} className="hover:text-blue-600 transition-colors text-left">
                    Software Development
                  </button>
                </li>
                <li>
                  <button type="button" onClick={onNavigateToAuth} className="hover:text-blue-600 transition-colors text-left">
                    Product Management
                  </button>
                </li>
                <li>
                  <button type="button" onClick={onNavigateToAuth} className="hover:text-blue-600 transition-colors text-left">
                    Design & Creative
                  </button>
                </li>
                <li>
                  <button type="button" onClick={onNavigateToAuth} className="hover:text-blue-600 transition-colors text-left">
                    Marketing & GTM
                  </button>
                </li>
                <li>
                  <button type="button" onClick={onNavigateToAuth} className="hover:text-blue-600 transition-colors text-left">
                    Operations
                  </button>
                </li>
                <li>
                  <button type="button" onClick={onNavigateToAuth} className="hover:text-blue-600 transition-colors text-left">
                    Startups & Builders
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Resources */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Resources
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm font-medium text-slate-600">
                <li>
                  <button type="button" onClick={() => scrollToSection('product-showcase')} className="hover:text-blue-600 transition-colors text-left">
                    Interactive Demo
                  </button>
                </li>
                <li>
                  <button type="button" onClick={onNavigateToAuth} className="hover:text-blue-600 transition-colors text-left">
                    Workflow Templates
                  </button>
                </li>
                <li>
                  <button type="button" onClick={onNavigateToAuth} className="hover:text-blue-600 transition-colors text-left">
                    Developer API
                  </button>
                </li>
                <li>
                  <button type="button" onClick={onNavigateToAuth} className="hover:text-blue-600 transition-colors text-left">
                    Community Hub
                  </button>
                </li>
                <li>
                  <button type="button" onClick={onNavigateToAuth} className="hover:text-blue-600 transition-colors text-left">
                    Help & Guides
                  </button>
                </li>
                <li>
                  <button type="button" onClick={onNavigateToAuth} className="hover:text-blue-600 transition-colors text-left">
                    Security & Trust
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 4: Company */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Company
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm font-medium text-slate-600">
                <li>
                  <button type="button" onClick={() => scrollToSection('stories')} className="hover:text-blue-600 transition-colors text-left">
                    About Dayflow
                  </button>
                </li>
                <li>
                  <button type="button" onClick={() => scrollToSection('stories')} className="hover:text-blue-600 transition-colors text-left">
                    Founder Story
                  </button>
                </li>
                <li>
                  <button type="button" onClick={() => scrollToSection('stories')} className="hover:text-blue-600 transition-colors text-left">
                    Product Vision
                  </button>
                </li>
                <li>
                  <a href="mailto:mr.mohan.s143@gmail.com" className="hover:text-blue-600 transition-colors text-left block">
                    Contact Mohan
                  </a>
                </li>
                <li>
                  <button type="button" onClick={onNavigateToAuth} className="hover:text-blue-600 transition-colors text-left">
                    Brand Assets
                  </button>
                </li>
                <li>
                  <span className="text-slate-500 flex items-center gap-1.5">
                    <span>Careers</span>
                    <span className="px-1.5 py-0.2 rounded text-[10px] font-bold bg-emerald-100 text-emerald-700">We're hiring</span>
                  </span>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom Utility Bar: Copyright, Legal, Language & Back to Top */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-5 text-xs text-slate-500">
          
          {/* Left: Copyright */}
          <div className="flex items-center gap-2">
            <span>© 2026 Dayflow Technologies.</span>
            <span>All rights reserved.</span>
          </div>

          {/* Center: Legal Links */}
          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6 font-medium">
            <button
              type="button"
              onClick={() => setLegalModal('privacy')}
              className="hover:text-slate-800 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => setLegalModal('terms')}
              className="hover:text-slate-800 transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <button
              type="button"
              onClick={() => setLegalModal('security')}
              className="hover:text-slate-800 transition-colors cursor-pointer"
            >
              Security
            </button>
            <button
              type="button"
              onClick={() => setLegalModal('cookies')}
              className="hover:text-slate-800 transition-colors cursor-pointer"
            >
              Cookie Settings
            </button>
          </div>

          {/* Right: Language Dropdown & Back to Top */}
          <div className="flex items-center gap-4">
            
            {/* Language Selector */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setLanguageOpen(!languageOpen)}
                className="flex items-center gap-1.5 text-slate-700 hover:text-blue-600 font-medium transition-colors px-2 py-1 rounded-md hover:bg-slate-200/50 cursor-pointer"
              >
                <Globe className="w-3.5 h-3.5 text-slate-500" />
                <span>{currentLang}</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {languageOpen && (
                <div className="absolute bottom-full right-0 mb-2 w-36 bg-white rounded-lg shadow-xl border border-slate-200 py-1 z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      type="button"
                      onClick={() => {
                        setCurrentLang(lang);
                        setLanguageOpen(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 text-xs hover:bg-slate-50 transition-colors cursor-pointer ${
                        currentLang === lang ? 'font-bold text-blue-600 bg-blue-50/50' : 'text-slate-700'
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Back to Top Button */}
            <button
              type="button"
              onClick={scrollToTop}
              className="p-1.5 rounded-md hover:bg-slate-200/50 text-slate-600 hover:text-slate-900 transition-all cursor-pointer flex items-center gap-1"
              title="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>

          </div>

        </div>

      </div>

      {/* Accessible Legal Dialog Modal */}
      {legalModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/50 backdrop-blur-xs"
          onClick={() => setLegalModal(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative max-h-[85vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 capitalize">
                {legalModal === 'privacy' && 'Dayflow Privacy Policy'}
                {legalModal === 'terms' && 'Dayflow Terms of Service'}
                {legalModal === 'security' && 'Dayflow Security & Compliance'}
                {legalModal === 'cookies' && 'Cookie Preferences'}
              </h3>
              <button
                type="button"
                onClick={() => setLegalModal(null)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Close dialog"
              >
                ✕
              </button>
            </div>

            <div className="pt-4 text-sm text-slate-600 space-y-3 leading-relaxed">
              {legalModal === 'privacy' && (
                <>
                  <p>
                    Dayflow Technologies is committed to safeguarding customer data. We never sell your personal information or use private workspace data to train shared commercial foundation models.
                  </p>
                  <p>
                    All customer telemetry and data in transit is encrypted using TLS 1.3, and data at rest is protected with AES-256 encryption across multi-tenant enterprise VPC boundaries.
                  </p>
                </>
              )}
              {legalModal === 'terms' && (
                <>
                  <p>
                    By deploying Dayflow workspaces and connected agent workflows, your organization agrees to fair use, ethical agent execution, and standard enterprise SLA guarantees.
                  </p>
                  <p>
                    Dayflow offers 99.95% uptime for business tiers and 99.99% uptime for enterprise dedicated private clusters.
                  </p>
                </>
              )}
              {legalModal === 'security' && (
                <>
                  <p>
                    Dayflow maintains SOC 2 Type II, ISO 27001, HIPAA BAA compliance, and GDPR compliance with EU-based data residency options.
                  </p>
                  <p>
                    SAML 2.0 Single Sign-On (Okta, Azure AD, Google Workspace), SCIM 2.0 automated provisioning, and hardware-backed MFA are supported across all enterprise tiers.
                  </p>
                </>
              )}
              {legalModal === 'cookies' && (
                <>
                  <p>
                    Dayflow only uses strictly necessary session cookies for authentication, security tokens, and user preference state.
                  </p>
                  <p>
                    Third-party advertising and cross-site tracking cookies are disabled by default.
                  </p>
                </>
              )}
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 flex justify-end">
              <button
                type="button"
                onClick={() => setLegalModal(null)}
                className="px-5 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
