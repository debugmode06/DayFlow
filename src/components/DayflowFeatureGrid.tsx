import React, { useState } from 'react';
import {
  GitBranch,
  Search,
  CheckSquare,
  Network,
  BookOpen,
  Mic,
  Calendar,
  CheckCheck,
  Briefcase,
  FileText,
  Bell,
  BarChart3,
  Target,
  Flame,
  Sliders,
  PenTool,
  Code2,
  Flag,
  FileSpreadsheet,
  Zap,
  Layers,
  Clock,
  Sparkles,
  AlertCircle,
  Hourglass,
  Video,
  LayoutGrid,
  ShieldCheck,
  Mail,
  PieChart,
  Timer,
  Kanban,
  Boxes,
  Users,
  FolderKanban,
  FileCode,
  MessageSquare
} from 'lucide-react';
import { DayflowIcon } from './DayflowLogo';

interface FeatureItem {
  id: string;
  name: string;
  icon: React.ReactNode;
}

const FeatureCell: React.FC<{
  feature: FeatureItem;
  isActive: boolean;
  onHover: (id: string | null) => void;
}> = ({ feature, isActive, onHover }) => (
  <div
    tabIndex={0}
    role="group"
    aria-label={feature.name}
    onMouseEnter={() => onHover(feature.id)}
    onMouseLeave={() => onHover(null)}
    onFocus={() => onHover(feature.id)}
    onBlur={() => onHover(null)}
    onClick={(e) => e.preventDefault()}
    className={`p-4 min-h-[110px] flex flex-col items-center justify-center text-center transition-colors duration-200 select-none cursor-default outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 focus-visible:z-10 ${
      isActive ? 'bg-slate-50' : 'bg-white'
    }`}
  >
    <div className={`transition-colors duration-200 ${isActive ? 'text-blue-600' : 'text-slate-400'}`}>
      {feature.icon}
    </div>
    <span className={`text-xs font-semibold mt-2 transition-colors duration-200 ${isActive ? 'text-slate-900' : 'text-slate-600'}`}>
      {feature.name}
    </span>
  </div>
);

export const DayflowFeatureGrid: React.FC = () => {
  const [activeHoverId, setActiveHoverId] = useState<string | null>(null);
  const [activePanel, setActivePanel] = useState<string | null>(null);

  return (
    <section id="features-grid" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold">
            <DayflowIcon className="w-3.5 h-3.5" idPrefix="grid-badge" />
            <span>DAYFLOW CAPABILITY MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            One platform. Every workflow.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Replace point tools with a unified work platform designed to make modern projects, documents, AI intelligence, and team collaboration flow.
          </p>
        </div>

        {/* Structured Product Feature Grid */}
        <div className="rounded-2xl border border-slate-200 bg-slate-200 overflow-hidden shadow-xs">
          
          {/* Responsive CSS Grid: 10 columns on desktop, 6 on tablet, 2-4 on mobile */}
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-10 gap-[1px] bg-slate-200">
            
            {/* Tile 1: Dependencies */}
            <FeatureCell
              feature={{ id: 'dep', name: 'Dependencies', icon: <GitBranch className="w-5 h-5" /> }}
              isActive={activeHoverId === 'dep'}
              onHover={setActiveHoverId}
            />

            {/* Tile 2: Connected Search */}
            <FeatureCell
              feature={{ id: 'search', name: 'Connected Search', icon: <Search className="w-5 h-5" /> }}
              isActive={activeHoverId === 'search'}
              onHover={setActiveHoverId}
            />

            {/* LARGE PANEL A: PROJECTS (col-span-2, row-span-2) */}
            <div
              tabIndex={0}
              role="group"
              aria-label="Dayflow Projects Showcase"
              onMouseEnter={() => setActivePanel('projects')}
              onMouseLeave={() => setActivePanel(null)}
              onFocus={() => setActivePanel('projects')}
              onBlur={() => setActivePanel(null)}
              onClick={(e) => e.preventDefault()}
              className="col-span-2 row-span-2 bg-[#FFF8F2] p-6 flex flex-col justify-between relative overflow-hidden transition-all duration-300 border border-amber-100/60 cursor-default outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50"
            >
              <div className="space-y-2.5">
                {/* Mini Project Card 1: Needs Updates */}
                <div className={`bg-white rounded-lg p-2.5 shadow-xs border border-amber-200/50 transition-all duration-200 ${
                  activePanel === 'projects' ? 'translate-y-[-2px] shadow-sm' : ''
                }`}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] font-bold text-slate-800">Mobile Onboarding Sprint</span>
                    <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-amber-100 text-amber-800">
                      Needs Updates
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-slate-400">
                    <span>Due tomorrow</span>
                    <div className="flex -space-x-1">
                      <div className="w-3.5 h-3.5 rounded-full bg-blue-500 text-[8px] text-white flex items-center justify-center font-bold">M</div>
                      <div className="w-3.5 h-3.5 rounded-full bg-indigo-500 text-[8px] text-white flex items-center justify-center font-bold">S</div>
                    </div>
                  </div>
                </div>

                {/* Mini Project Card 2: Closed */}
                <div className="bg-white/80 rounded-lg p-2.5 shadow-2xs border border-emerald-100/60">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-slate-700">Q3 Enterprise Security Audit</span>
                    <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800">
                      Closed
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Title: Projects */}
              <div className="pt-4 mt-auto flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-amber-500/10 text-amber-600 flex items-center justify-center">
                  <FolderKanban className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-slate-900 tracking-tight">Projects</h3>
              </div>
            </div>

            {/* LARGE PANEL B: DOCS (col-span-2, row-span-2) */}
            <div
              tabIndex={0}
              role="group"
              aria-label="Dayflow Docs Showcase"
              onMouseEnter={() => setActivePanel('docs')}
              onMouseLeave={() => setActivePanel(null)}
              onFocus={() => setActivePanel('docs')}
              onBlur={() => setActivePanel(null)}
              onClick={(e) => e.preventDefault()}
              className="col-span-2 row-span-2 bg-[#F0F7FF] p-6 flex flex-col justify-between relative overflow-hidden transition-all duration-300 border border-blue-100/60 cursor-default outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50"
            >
              {/* Overlapping Document Preview */}
              <div className="relative pt-1">
                {/* Back document */}
                <div className="w-4/5 h-20 bg-white/60 rounded-lg mx-auto border border-blue-200/40 rotate-[2deg] translate-y-1 shadow-2xs" />
                
                {/* Front Document: Convergence Brief */}
                <div className={`absolute top-0 inset-x-2 bg-white rounded-lg p-3 shadow-xs border border-blue-200/80 transition-transform duration-200 ${
                  activePanel === 'docs' ? 'translate-y-[-2px] shadow-sm' : ''
                }`}>
                  <div className="flex items-center justify-between pb-1.5 border-b border-slate-100">
                    <span className="text-[11px] font-bold text-slate-900">Convergence Brief</span>
                    <span className="text-[9px] text-blue-600 font-semibold">Live v2.4</span>
                  </div>
                  <div className="space-y-1.5 pt-2">
                    <div className="h-1.5 bg-blue-100 rounded w-full" />
                    <div className="h-1.5 bg-slate-100 rounded w-4/5" />
                    <div className="h-1.5 bg-slate-100 rounded w-2/3" />
                  </div>
                </div>
              </div>

              {/* Bottom Title: Docs */}
              <div className="pt-4 mt-auto flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-blue-500/10 text-blue-600 flex items-center justify-center">
                  <FileCode className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-slate-900 tracking-tight">Docs</h3>
              </div>
            </div>

            {/* Standard Tiles 3, 4, 5, 6 */}
            {[
              { id: 'tasks', name: 'Tasks', icon: <CheckSquare className="w-5 h-5" /> },
              { id: 'mindmaps', name: 'Mind Maps', icon: <Network className="w-5 h-5" /> },
              { id: 'wikis', name: 'Wikis', icon: <BookOpen className="w-5 h-5" /> },
              { id: 'notetaker', name: 'AI Notetaker', icon: <Mic className="w-5 h-5" /> },
            ].map((f) => (
              <FeatureCell
                key={f.id}
                feature={f}
                isActive={activeHoverId === f.id}
                onHover={setActiveHoverId}
              />
            ))}

            {/* Row 2 fillers next to large panels */}
            {[
              { id: 'calendar', name: 'Calendar', icon: <Calendar className="w-5 h-5" /> },
              { id: 'proofing', name: 'Proofing', icon: <CheckCheck className="w-5 h-5" /> },
              { id: 'portfolios', name: 'Portfolios', icon: <Briefcase className="w-5 h-5" /> },
              { id: 'templates', name: 'Templates', icon: <FileText className="w-5 h-5" /> },
            ].map((f) => (
              <FeatureCell
                key={f.id}
                feature={f}
                isActive={activeHoverId === f.id}
                onHover={setActiveHoverId}
              />
            ))}

            {/* LARGE PANEL C: BRAIN (col-span-2, row-span-2) */}
            <div
              tabIndex={0}
              role="group"
              aria-label="Dayflow Brain Showcase"
              onMouseEnter={() => setActivePanel('brain')}
              onMouseLeave={() => setActivePanel(null)}
              onFocus={() => setActivePanel('brain')}
              onBlur={() => setActivePanel(null)}
              onClick={(e) => e.preventDefault()}
              className="col-span-2 row-span-2 bg-[#FAF5FF] p-6 flex flex-col justify-between relative overflow-hidden transition-all duration-300 border border-purple-100/60 cursor-default outline-none focus-visible:ring-2 focus-visible:ring-purple-500/50"
            >
              <div className="space-y-2.5">
                {/* Search / AI Query Box matching Section 5 */}
                <div className="bg-white rounded-lg p-2.5 shadow-xs border border-purple-200/70">
                  <div className="flex items-center gap-1.5 text-[10px] text-purple-700 font-semibold mb-1">
                    <Sparkles className="w-3 h-3 text-purple-600" />
                    <span>Ask Dayflow Brain</span>
                  </div>
                  <div className="text-[11px] font-medium text-slate-800">
                    "Summarize Q3 launch blockers & team capacity"
                  </div>
                </div>

                {/* AI Answer Card */}
                <div className={`bg-purple-100/70 rounded-lg p-2.5 text-[10px] text-purple-950 font-medium transition-transform duration-200 ${
                  activePanel === 'brain' ? 'translate-y-[-2px]' : ''
                }`}>
                  <span className="font-bold text-purple-700">3 dependencies resolved.</span> Ready for GTM handoff today.
                </div>
              </div>

              {/* Bottom Title: Brain with authentic Dayflow icon */}
              <div className="pt-4 mt-auto flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-purple-500/10 flex items-center justify-center p-0.5">
                  <DayflowIcon className="w-4 h-4 rounded-xs" />
                </div>
                <h3 className="text-base font-bold text-slate-900 tracking-tight">Brain</h3>
              </div>
            </div>

            {/* Standard Tiles 7, 8 */}
            {[
              { id: 'reminders', name: 'Reminders', icon: <Bell className="w-5 h-5" /> },
              { id: 'reporting', name: 'Reporting', icon: <BarChart3 className="w-5 h-5" /> },
            ].map((f) => (
              <FeatureCell
                key={f.id}
                feature={f}
                isActive={activeHoverId === f.id}
                onHover={setActiveHoverId}
              />
            ))}

            {/* LARGE PANEL D: CHAT (col-span-2, row-span-2) */}
            <div
              tabIndex={0}
              role="group"
              aria-label="Dayflow Chat Showcase"
              onMouseEnter={() => setActivePanel('chat')}
              onMouseLeave={() => setActivePanel(null)}
              onFocus={() => setActivePanel('chat')}
              onBlur={() => setActivePanel(null)}
              onClick={(e) => e.preventDefault()}
              className="col-span-2 row-span-2 bg-[#F5F3FF] p-6 flex flex-col justify-between relative overflow-hidden transition-all duration-300 border border-indigo-100/60 cursor-default outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50"
            >
              {/* Chat Message Previews */}
              <div className="space-y-2">
                {/* Chat bubble 1 */}
                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-indigo-600 text-white text-[9px] font-bold flex items-center justify-center shrink-0">
                    A
                  </div>
                  <div className="bg-white rounded-lg p-2 text-[10px] text-slate-800 shadow-2xs border border-indigo-100/60 flex-1">
                    Sprint review pushed to 4pm!
                  </div>
                </div>

                {/* Chat bubble 2 with reaction chips */}
                <div className={`flex items-start gap-2 transition-transform duration-200 ${
                  activePanel === 'chat' ? 'translate-x-1' : ''
                }`}>
                  <div className="w-5 h-5 rounded-full bg-emerald-600 text-white text-[9px] font-bold flex items-center justify-center shrink-0">
                    R
                  </div>
                  <div className="bg-white rounded-lg p-2 text-[10px] text-slate-800 shadow-2xs border border-indigo-100/60 flex-1">
                    PR approved and merged! 🚀
                    <div className="flex items-center gap-1 mt-1">
                      <span className="px-1.5 py-0.5 rounded-full bg-slate-100 text-[9px]">👍 4</span>
                      <span className="px-1.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 text-[9px]">🚀 2</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Title: Chat */}
              <div className="pt-4 mt-auto flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-indigo-500/10 text-indigo-600 flex items-center justify-center">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-slate-900 tracking-tight">Chat</h3>
              </div>
            </div>

            {/* Remaining 22 standard features filling the bottom rows tightly */}
            {[
              { id: 'goals', name: 'Goals', icon: <Target className="w-5 h-5" /> },
              { id: 'sprints', name: 'Sprints', icon: <Flame className="w-5 h-5" /> },
              { id: 'custom-status', name: 'Custom Status', icon: <Sliders className="w-5 h-5" /> },
              { id: 'ai-writer', name: 'AI Writer', icon: <PenTool className="w-5 h-5" /> },
              { id: 'api-calls', name: 'API Calls', icon: <Code2 className="w-5 h-5" /> },
              { id: 'milestones', name: 'Milestones', icon: <Flag className="w-5 h-5" /> },
              { id: 'forms', name: 'Forms', icon: <FileSpreadsheet className="w-5 h-5" /> },
              { id: 'automations', name: 'Automations', icon: <Zap className="w-5 h-5" /> },
              { id: 'custom-fields', name: 'Custom Fields', icon: <Layers className="w-5 h-5" /> },
              { id: 'timesheets', name: 'Timesheets', icon: <Clock className="w-5 h-5" /> },
              { id: 'ai-qa', name: 'AI Q&A', icon: <Sparkles className="w-5 h-5" /> },
              { id: 'priorities', name: 'Priorities', icon: <AlertCircle className="w-5 h-5" /> },
              { id: 'time-est', name: 'Time Estimates', icon: <Hourglass className="w-5 h-5" /> },
              { id: 'clips', name: 'Clips', icon: <Video className="w-5 h-5" /> },
              { id: 'everything', name: 'Everything View', icon: <LayoutGrid className="w-5 h-5" /> },
              { id: 'sso', name: 'Single Sign-On', icon: <ShieldCheck className="w-5 h-5" /> },
              { id: 'emails', name: 'Emails', icon: <Mail className="w-5 h-5" /> },
              { id: 'dashboards', name: 'Dashboards', icon: <PieChart className="w-5 h-5" /> },
              { id: 'timetrack', name: 'Time Tracking', icon: <Timer className="w-5 h-5" /> },
              { id: 'kanban', name: 'Kanban Boards', icon: <Kanban className="w-5 h-5" /> },
              { id: 'integrations', name: 'Integrations', icon: <Boxes className="w-5 h-5" /> },
              { id: 'guests', name: 'Guests', icon: <Users className="w-5 h-5" /> },
            ].map((f) => (
              <FeatureCell
                key={f.id}
                feature={f}
                isActive={activeHoverId === f.id}
                onHover={setActiveHoverId}
              />
            ))}

          </div>

        </div>

        {/* Footnote about non-navigational capability map */}
        <div className="mt-6 text-center text-xs text-slate-400">
          Interactive Dayflow capability map · Hover any tile to explore integrated workspace features
        </div>

      </div>
    </section>
  );
};
