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
  className?: string;
}> = ({ feature, isActive, onHover, className = '' }) => (
  <div
    tabIndex={0}
    role="group"
    aria-label={feature.name}
    onMouseEnter={() => onHover(feature.id)}
    onMouseLeave={() => onHover(null)}
    onFocus={() => onHover(feature.id)}
    onBlur={() => onHover(null)}
    onClick={(e) => e.preventDefault()}
    className={`p-3 min-h-[96px] sm:min-h-[102px] flex flex-col items-center justify-center text-center transition-all duration-200 select-none cursor-default outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 focus-visible:z-10 ${
      isActive ? 'bg-slate-50 shadow-inner' : 'bg-white hover:bg-slate-50/70'
    } ${className}`}
  >
    <div className={`transition-colors duration-200 ${isActive ? 'text-blue-600 scale-105' : 'text-slate-400'}`}>
      {feature.icon}
    </div>
    <span className={`text-[11px] sm:text-[11.5px] font-semibold mt-2 transition-colors duration-200 leading-tight ${isActive ? 'text-slate-900 font-bold' : 'text-slate-600'}`}>
      {feature.name}
    </span>
  </div>
);

export const DayflowFeatureGrid: React.FC = () => {
  const [activeHoverId, setActiveHoverId] = useState<string | null>(null);
  const [activePanel, setActivePanel] = useState<string | null>(null);

  return (
    <section id="features-grid" className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-blue-50/80 border border-blue-200/80 text-blue-700 text-[11px] font-semibold tracking-wide shadow-2xs">
            <DayflowIcon className="w-3.5 h-3.5" idPrefix="grid-badge" />
            <span className="uppercase tracking-wider">Dayflow Capability Matrix</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold tracking-tight text-slate-900 leading-[1.18]">
            One platform. Every workflow.
          </h2>
          <p className="text-sm sm:text-[15px] text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
            Replace point tools with a unified work platform designed to make modern projects, documents, AI intelligence, and team collaboration flow.
          </p>
        </div>

        {/* Structured Product Feature Grid */}
        <div className="rounded-2xl border border-slate-200/90 bg-slate-200 overflow-hidden shadow-xs">
          
          {/* Responsive CSS Grid: 10 columns on desktop (lg+), 6 on tablet (md), 4 on sm, 2 on xs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-10 gap-[1px] bg-slate-200/90">
            
            {/* ========================================================== */}
            {/* ROW 1: Dependencies, Search, [PROJECTS], [DOCS], Tasks, Mind Maps, Wikis, AI Notetaker */}
            {/* ========================================================== */}

            {/* 1. Dependencies */}
            <FeatureCell
              feature={{ id: 'dep', name: 'Dependencies', icon: <GitBranch className="w-5 h-5" /> }}
              isActive={activeHoverId === 'dep'}
              onHover={setActiveHoverId}
            />

            {/* 2. Connected Search */}
            <FeatureCell
              feature={{ id: 'search', name: 'Connected Search', icon: <Search className="w-5 h-5" /> }}
              isActive={activeHoverId === 'search'}
              onHover={setActiveHoverId}
            />

            {/* LARGE PANEL A: PROJECTS (spans 2 cols, 2 rows in rows 1-2) */}
            <div
              tabIndex={0}
              role="group"
              aria-label="Dayflow Projects Showcase"
              onMouseEnter={() => setActivePanel('projects')}
              onMouseLeave={() => setActivePanel(null)}
              onFocus={() => setActivePanel('projects')}
              onBlur={() => setActivePanel(null)}
              onClick={(e) => e.preventDefault()}
              className="col-span-2 row-span-2 bg-[#FFF8F2] p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden transition-all duration-300 border border-amber-100/70 cursor-default outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50"
            >
              <div className="space-y-2.5">
                {/* Mini Project Card 1: Needs Updates */}
                <div className={`bg-white rounded-lg p-2.5 shadow-xs border border-amber-200/60 transition-all duration-200 ${
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
                      <div className="w-4 h-4 rounded-full bg-blue-500 text-[8px] text-white flex items-center justify-center font-bold ring-1 ring-white">M</div>
                      <div className="w-4 h-4 rounded-full bg-indigo-500 text-[8px] text-white flex items-center justify-center font-bold ring-1 ring-white">S</div>
                    </div>
                  </div>
                </div>

                {/* Mini Project Card 2: Closed */}
                <div className="bg-white/90 rounded-lg p-2.5 shadow-2xs border border-emerald-100/70">
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
                <div className="w-6 h-6 rounded-md bg-amber-500/15 text-amber-600 flex items-center justify-center">
                  <FolderKanban className="w-4 h-4" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight">Projects</h3>
              </div>
            </div>

            {/* LARGE PANEL B: DOCS (spans 2 cols, 2 rows in rows 1-2) */}
            <div
              tabIndex={0}
              role="group"
              aria-label="Dayflow Docs Showcase"
              onMouseEnter={() => setActivePanel('docs')}
              onMouseLeave={() => setActivePanel(null)}
              onFocus={() => setActivePanel('docs')}
              onBlur={() => setActivePanel(null)}
              onClick={(e) => e.preventDefault()}
              className="col-span-2 row-span-2 bg-[#F0F7FF] p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden transition-all duration-300 border border-blue-100/70 cursor-default outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50"
            >
              {/* Overlapping Document Preview */}
              <div className="relative pt-1">
                {/* Back document */}
                <div className="w-4/5 h-20 bg-white/70 rounded-lg mx-auto border border-blue-200/50 rotate-[2deg] translate-y-1 shadow-2xs" />
                
                {/* Front Document: Convergence Brief */}
                <div className={`absolute top-0 inset-x-1.5 bg-white rounded-lg p-3 shadow-xs border border-blue-200/80 transition-transform duration-200 ${
                  activePanel === 'docs' ? 'translate-y-[-2px] shadow-sm' : ''
                }`}>
                  <div className="flex items-center justify-between pb-1.5 border-b border-slate-100">
                    <span className="text-[11px] font-bold text-slate-900">Convergence Brief</span>
                    <span className="text-[9px] text-blue-600 font-semibold bg-blue-50 px-1.5 py-0.5 rounded">Live v2.4</span>
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
                <div className="w-6 h-6 rounded-md bg-blue-500/15 text-blue-600 flex items-center justify-center">
                  <FileCode className="w-4 h-4" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight">Docs</h3>
              </div>
            </div>

            {/* 3. Tasks */}
            <FeatureCell
              feature={{ id: 'tasks', name: 'Tasks', icon: <CheckSquare className="w-5 h-5" /> }}
              isActive={activeHoverId === 'tasks'}
              onHover={setActiveHoverId}
            />

            {/* 4. Mind Maps */}
            <FeatureCell
              feature={{ id: 'mindmaps', name: 'Mind Maps', icon: <Network className="w-5 h-5" /> }}
              isActive={activeHoverId === 'mindmaps'}
              onHover={setActiveHoverId}
            />

            {/* 5. Wikis */}
            <FeatureCell
              feature={{ id: 'wikis', name: 'Wikis', icon: <BookOpen className="w-5 h-5" /> }}
              isActive={activeHoverId === 'wikis'}
              onHover={setActiveHoverId}
            />

            {/* 6. AI Notetaker */}
            <FeatureCell
              feature={{ id: 'notetaker', name: 'AI Notetaker', icon: <Mic className="w-5 h-5" /> }}
              isActive={activeHoverId === 'notetaker'}
              onHover={setActiveHoverId}
            />

            {/* ========================================================== */}
            {/* ROW 2: Calendar, Proofing, [Panels A & B continue], Portfolios, Templates, Reminders, Reporting */}
            {/* ========================================================== */}

            {/* 7. Calendar */}
            <FeatureCell
              feature={{ id: 'calendar', name: 'Calendar', icon: <Calendar className="w-5 h-5" /> }}
              isActive={activeHoverId === 'calendar'}
              onHover={setActiveHoverId}
            />

            {/* 8. Proofing */}
            <FeatureCell
              feature={{ id: 'proofing', name: 'Proofing', icon: <CheckCheck className="w-5 h-5" /> }}
              isActive={activeHoverId === 'proofing'}
              onHover={setActiveHoverId}
            />

            {/* 9. Portfolios */}
            <FeatureCell
              feature={{ id: 'portfolios', name: 'Portfolios', icon: <Briefcase className="w-5 h-5" /> }}
              isActive={activeHoverId === 'portfolios'}
              onHover={setActiveHoverId}
            />

            {/* 10. Templates */}
            <FeatureCell
              feature={{ id: 'templates', name: 'Templates', icon: <FileText className="w-5 h-5" /> }}
              isActive={activeHoverId === 'templates'}
              onHover={setActiveHoverId}
            />

            {/* 11. Reminders */}
            <FeatureCell
              feature={{ id: 'reminders', name: 'Reminders', icon: <Bell className="w-5 h-5" /> }}
              isActive={activeHoverId === 'reminders'}
              onHover={setActiveHoverId}
            />

            {/* 12. Reporting */}
            <FeatureCell
              feature={{ id: 'reporting', name: 'Reporting', icon: <BarChart3 className="w-5 h-5" /> }}
              isActive={activeHoverId === 'reporting'}
              onHover={setActiveHoverId}
            />

            {/* ========================================================== */}
            {/* ROW 3: Goals, Sprints, [BRAIN], Custom Status, AI Writer, [CHAT], API Calls, Milestones */}
            {/* ========================================================== */}

            {/* 13. Goals */}
            <FeatureCell
              feature={{ id: 'goals', name: 'Goals', icon: <Target className="w-5 h-5" /> }}
              isActive={activeHoverId === 'goals'}
              onHover={setActiveHoverId}
            />

            {/* 14. Sprints */}
            <FeatureCell
              feature={{ id: 'sprints', name: 'Sprints', icon: <Flame className="w-5 h-5" /> }}
              isActive={activeHoverId === 'sprints'}
              onHover={setActiveHoverId}
            />

            {/* LARGE PANEL C: BRAIN (spans 2 cols, 2 rows in rows 3-4) */}
            <div
              tabIndex={0}
              role="group"
              aria-label="Dayflow Brain Showcase"
              onMouseEnter={() => setActivePanel('brain')}
              onMouseLeave={() => setActivePanel(null)}
              onFocus={() => setActivePanel('brain')}
              onBlur={() => setActivePanel(null)}
              onClick={(e) => e.preventDefault()}
              className="col-span-2 row-span-2 bg-[#FAF5FF] p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden transition-all duration-300 border border-purple-100/70 cursor-default outline-none focus-visible:ring-2 focus-visible:ring-purple-500/50"
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
                <div className={`bg-purple-100/80 rounded-lg p-2.5 text-[10px] text-purple-950 font-medium transition-transform duration-200 ${
                  activePanel === 'brain' ? 'translate-y-[-2px]' : ''
                }`}>
                  <span className="font-bold text-purple-700">3 dependencies resolved.</span> Ready for GTM handoff today.
                </div>
              </div>

              {/* Bottom Title: Brain with authentic Dayflow icon */}
              <div className="pt-4 mt-auto flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-purple-500/15 flex items-center justify-center p-0.5">
                  <DayflowIcon className="w-4 h-4 rounded-xs" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight">Brain</h3>
              </div>
            </div>

            {/* 15. Custom Status */}
            <FeatureCell
              feature={{ id: 'custom-status', name: 'Custom Status', icon: <Sliders className="w-5 h-5" /> }}
              isActive={activeHoverId === 'custom-status'}
              onHover={setActiveHoverId}
            />

            {/* 16. AI Writer */}
            <FeatureCell
              feature={{ id: 'ai-writer', name: 'AI Writer', icon: <PenTool className="w-5 h-5" /> }}
              isActive={activeHoverId === 'ai-writer'}
              onHover={setActiveHoverId}
            />

            {/* LARGE PANEL D: CHAT (spans 2 cols, 2 rows in rows 3-4) */}
            <div
              tabIndex={0}
              role="group"
              aria-label="Dayflow Chat Showcase"
              onMouseEnter={() => setActivePanel('chat')}
              onMouseLeave={() => setActivePanel(null)}
              onFocus={() => setActivePanel('chat')}
              onBlur={() => setActivePanel(null)}
              onClick={(e) => e.preventDefault()}
              className="col-span-2 row-span-2 bg-[#F5F3FF] p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden transition-all duration-300 border border-indigo-100/70 cursor-default outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50"
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
                      <span className="px-1.5 py-0.5 rounded-full bg-slate-100 text-[9px] font-medium">👍 4</span>
                      <span className="px-1.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 text-[9px] font-medium">🚀 2</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Title: Chat */}
              <div className="pt-4 mt-auto flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-indigo-500/15 text-indigo-600 flex items-center justify-center">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight">Chat</h3>
              </div>
            </div>

            {/* 17. API Calls */}
            <FeatureCell
              feature={{ id: 'api-calls', name: 'API Calls', icon: <Code2 className="w-5 h-5" /> }}
              isActive={activeHoverId === 'api-calls'}
              onHover={setActiveHoverId}
            />

            {/* 18. Milestones */}
            <FeatureCell
              feature={{ id: 'milestones', name: 'Milestones', icon: <Flag className="w-5 h-5" /> }}
              isActive={activeHoverId === 'milestones'}
              onHover={setActiveHoverId}
            />

            {/* ========================================================== */}
            {/* ROW 4: Forms, Automations, [Panels C & D continue], Custom Fields, Timesheets, AI Q&A, Priorities */}
            {/* ========================================================== */}

            {/* 19. Forms */}
            <FeatureCell
              feature={{ id: 'forms', name: 'Forms', icon: <FileSpreadsheet className="w-5 h-5" /> }}
              isActive={activeHoverId === 'forms'}
              onHover={setActiveHoverId}
            />

            {/* 20. Automations */}
            <FeatureCell
              feature={{ id: 'automations', name: 'Automations', icon: <Zap className="w-5 h-5" /> }}
              isActive={activeHoverId === 'automations'}
              onHover={setActiveHoverId}
            />

            {/* 21. Custom Fields */}
            <FeatureCell
              feature={{ id: 'custom-fields', name: 'Custom Fields', icon: <Layers className="w-5 h-5" /> }}
              isActive={activeHoverId === 'custom-fields'}
              onHover={setActiveHoverId}
            />

            {/* 22. Timesheets */}
            <FeatureCell
              feature={{ id: 'timesheets', name: 'Timesheets', icon: <Clock className="w-5 h-5" /> }}
              isActive={activeHoverId === 'timesheets'}
              onHover={setActiveHoverId}
            />

            {/* 23. AI Q&A */}
            <FeatureCell
              feature={{ id: 'ai-qa', name: 'AI Q&A', icon: <Sparkles className="w-5 h-5" /> }}
              isActive={activeHoverId === 'ai-qa'}
              onHover={setActiveHoverId}
            />

            {/* 24. Priorities */}
            <FeatureCell
              feature={{ id: 'priorities', name: 'Priorities', icon: <AlertCircle className="w-5 h-5" /> }}
              isActive={activeHoverId === 'priorities'}
              onHover={setActiveHoverId}
            />

            {/* ========================================================== */}
            {/* ROW 5: 10 full single feature tiles across the bottom */}
            {/* ========================================================== */}

            {/* 25. Time Estimates */}
            <FeatureCell
              feature={{ id: 'time-est', name: 'Time Estimates', icon: <Hourglass className="w-5 h-5" /> }}
              isActive={activeHoverId === 'time-est'}
              onHover={setActiveHoverId}
            />

            {/* 26. Clips */}
            <FeatureCell
              feature={{ id: 'clips', name: 'Clips', icon: <Video className="w-5 h-5" /> }}
              isActive={activeHoverId === 'clips'}
              onHover={setActiveHoverId}
            />

            {/* 27. Everything View */}
            <FeatureCell
              feature={{ id: 'everything', name: 'Everything View', icon: <LayoutGrid className="w-5 h-5" /> }}
              isActive={activeHoverId === 'everything'}
              onHover={setActiveHoverId}
            />

            {/* 28. Single Sign-On */}
            <FeatureCell
              feature={{ id: 'sso', name: 'Single Sign-On', icon: <ShieldCheck className="w-5 h-5" /> }}
              isActive={activeHoverId === 'sso'}
              onHover={setActiveHoverId}
            />

            {/* 29. Emails */}
            <FeatureCell
              feature={{ id: 'emails', name: 'Emails', icon: <Mail className="w-5 h-5" /> }}
              isActive={activeHoverId === 'emails'}
              onHover={setActiveHoverId}
            />

            {/* 30. Dashboards */}
            <FeatureCell
              feature={{ id: 'dashboards', name: 'Dashboards', icon: <PieChart className="w-5 h-5" /> }}
              isActive={activeHoverId === 'dashboards'}
              onHover={setActiveHoverId}
            />

            {/* 31. Time Tracking */}
            <FeatureCell
              feature={{ id: 'timetrack', name: 'Time Tracking', icon: <Timer className="w-5 h-5" /> }}
              isActive={activeHoverId === 'timetrack'}
              onHover={setActiveHoverId}
            />

            {/* 32. Kanban Boards */}
            <FeatureCell
              feature={{ id: 'kanban', name: 'Kanban Boards', icon: <Kanban className="w-5 h-5" /> }}
              isActive={activeHoverId === 'kanban'}
              onHover={setActiveHoverId}
            />

            {/* 33. Integrations */}
            <FeatureCell
              feature={{ id: 'integrations', name: 'Integrations', icon: <Boxes className="w-5 h-5" /> }}
              isActive={activeHoverId === 'integrations'}
              onHover={setActiveHoverId}
            />

            {/* 34. Guests */}
            <FeatureCell
              feature={{ id: 'guests', name: 'Guests', icon: <Users className="w-5 h-5" /> }}
              isActive={activeHoverId === 'guests'}
              onHover={setActiveHoverId}
            />

          </div>

        </div>

        {/* Footnote */}
        <div className="mt-6 text-center text-xs text-slate-400">
          Interactive Dayflow capability matrix · Hover or focus any tile to explore integrated workspace capabilities
        </div>

      </div>
    </section>
  );
};

export default DayflowFeatureGrid;
