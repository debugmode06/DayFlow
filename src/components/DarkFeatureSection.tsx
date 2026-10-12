import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { GitHubCopilotIcon, GoogleLogo, SlackLogo, McpIcon } from './BrandLogos';
import { BrandConfig } from '../config/brandConfig';

interface DarkFeatureSectionProps {
  brand: BrandConfig;
}

// Consistent blue pixel-style icons matching the reference
const PixelWorkflowIcon: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => (
  <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="12" y="6" width="16" height="4" fill="#388BFD" />
    <rect x="6" y="10" width="6" height="4" fill="#388BFD" />
    <rect x="28" y="10" width="6" height="4" fill="#388BFD" />
    <rect x="4" y="14" width="4" height="12" fill="#388BFD" />
    <rect x="32" y="14" width="4" height="12" fill="#388BFD" />
    
    {/* Inner connected nodes */}
    <rect x="14" y="14" width="12" height="3" fill="#388BFD" />
    <rect x="12" y="17" width="3" height="6" fill="#388BFD" />
    <rect x="23" y="17" width="3" height="10" fill="#388BFD" />
    <rect x="14" y="23" width="9" height="3" fill="#388BFD" />
    <rect x="18" y="17" width="3" height="4" fill="#388BFD" />
    <rect x="26" y="24" width="4" height="3" fill="#388BFD" />
    <rect x="30" y="20" width="3" height="4" fill="#388BFD" />
    
    <rect x="6" y="26" width="6" height="4" fill="#388BFD" />
    <rect x="12" y="30" width="16" height="4" fill="#388BFD" />
  </svg>
);

const PixelAiIcon: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => (
  <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    {/* < tag */}
    <rect x="12" y="8" width="4" height="4" fill="#388BFD" />
    <rect x="8" y="12" width="4" height="4" fill="#388BFD" />
    <rect x="4" y="16" width="4" height="4" fill="#388BFD" />
    <rect x="8" y="20" width="4" height="4" fill="#388BFD" />
    <rect x="12" y="24" width="4" height="4" fill="#388BFD" />
    
    {/* / slash */}
    <rect x="24" y="8" width="4" height="4" fill="#388BFD" />
    <rect x="22" y="12" width="4" height="4" fill="#388BFD" />
    <rect x="20" y="16" width="4" height="4" fill="#388BFD" />
    <rect x="18" y="20" width="4" height="4" fill="#388BFD" />
    <rect x="16" y="24" width="4" height="4" fill="#388BFD" />
    
    {/* > tag */}
    <rect x="28" y="8" width="4" height="4" fill="#388BFD" />
    <rect x="32" y="12" width="4" height="4" fill="#388BFD" />
    <rect x="36" y="16" width="4" height="4" fill="#388BFD" />
    <rect x="32" y="20" width="4" height="4" fill="#388BFD" />
    <rect x="28" y="24" width="4" height="4" fill="#388BFD" />
  </svg>
);

const PixelControlIcon: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => (
  <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="16" y="4" width="8" height="4" fill="#388BFD" />
    <rect x="10" y="8" width="6" height="4" fill="#388BFD" />
    <rect x="24" y="8" width="6" height="4" fill="#388BFD" />
    <rect x="6" y="12" width="6" height="4" fill="#388BFD" />
    <rect x="28" y="12" width="6" height="4" fill="#388BFD" />
    <rect x="6" y="18" width="6" height="4" fill="#388BFD" />
    <rect x="28" y="18" width="6" height="4" fill="#388BFD" />
    <rect x="10" y="24" width="6" height="4" fill="#388BFD" />
    <rect x="24" y="24" width="6" height="4" fill="#388BFD" />
    <rect x="16" y="28" width="8" height="4" fill="#388BFD" />
    
    {/* Center node */}
    <rect x="18" y="14" width="4" height="8" fill="#388BFD" fillOpacity="0.8" />
  </svg>
);

export const DarkFeatureSection: React.FC<DarkFeatureSectionProps> = ({ brand }) => {
  const [selectedPill, setSelectedPill] = useState<string>('AI Agents');

  // Integrations strictly matching the exact specification:
  // GitHub, Google Workspace, Slack, AI Agents, MCP Tools
  const integrations = [
    {
      id: 'github',
      name: 'GitHub',
      icon: <GitHubCopilotIcon className="w-3.5 h-3.5 text-white shrink-0" />
    },
    {
      id: 'google',
      name: 'Google Workspace',
      icon: <GoogleLogo className="w-3.5 h-3.5 shrink-0" />
    },
    {
      id: 'slack',
      name: 'Slack',
      icon: <SlackLogo className="w-3.5 h-3.5 shrink-0" />
    },
    {
      id: 'agents',
      name: 'AI Agents',
      icon: (
        <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-500 p-0.5 flex items-center justify-center shrink-0">
          <Sparkles className="w-2.5 h-2.5 text-white" />
        </div>
      )
    },
    {
      id: 'mcp',
      name: 'MCP Tools',
      icon: <McpIcon className="w-3.5 h-3.5 text-slate-300 shrink-0" />
    }
  ];

  const features = [
    {
      id: 'feature-1',
      title: 'Connect your workflow',
      description: 'Bring projects, tasks, and team collaboration into one organized workspace.',
      icon: PixelWorkflowIcon
    },
    {
      id: 'feature-2',
      title: 'Work smarter with AI',
      description: 'Use AI assistance to summarize updates, organize tasks, and reduce repetitive work.',
      icon: PixelAiIcon
    },
    {
      id: 'feature-3',
      title: 'Stay in control',
      description: 'Keep work organized with clear ownership, permissions, and activity visibility.',
      icon: PixelControlIcon
    }
  ];

  return (
    <section id="ai-era" className="relative bg-[#0D0F12] text-white py-20 lg:py-28 overflow-hidden">
      {/* Subtle Dotted Grid Background */}
      <div className="absolute inset-0 bg-dot-grid opacity-30 pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Terminal Header Banner */}
        <div className="mb-12">
          <div className="inline-block bg-[#16181d] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-xs">
            {/* Heading line 1: Dayflow for the AI era */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-mono font-bold tracking-tight text-white mb-2">
              Dayflow for the AI era
            </h2>
            
            {/* Heading line 2: > Work smarter, together */}
            <div className="text-2xl sm:text-3xl md:text-4xl font-mono font-bold tracking-tight text-white flex items-center gap-2">
              <span className="text-slate-400">&gt;</span>
              <span>Work smarter, </span>
              <span className="text-[#43D98B] drop-shadow-[0_0_12px_rgba(67,217,139,0.35)]">
                together
              </span>
            </div>
          </div>
        </div>

        {/* WORKS WITH Row */}
        <div className="mb-16">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-3.5">
            WORKS WITH
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {integrations.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedPill(item.name)}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium border transition-all cursor-pointer ${
                  selectedPill === item.name
                    ? 'bg-[#1f242d] border-[#388BFD]/80 text-white shadow-xs'
                    : 'bg-[#16181d] border-white/10 text-slate-300 hover:bg-[#1e2128] hover:border-white/20'
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Three Columns Feature Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 pt-8 border-t border-white/10">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div 
                key={feature.id} 
                className="space-y-4 group p-2 rounded-xl transition-all duration-200 hover:-translate-y-1"
              >
                <div className="p-1">
                  <Icon className="w-9 h-9 text-[#388BFD] group-hover:scale-105 transition-transform duration-200" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-normal">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default DarkFeatureSection;
