import React, { useState } from 'react';
import { 
  Search, 
  Plus, 
  Share2, 
  CheckSquare, 
  ChevronUp, 
  Equal, 
  MoreHorizontal, 
  Sparkles,
  ArrowRight,
  Filter,
  Check,
  MousePointer,
  X,
  Layers
} from 'lucide-react';
import { DayflowLogo, DayflowIcon } from './DayflowLogo';
import { BrandConfig } from '../config/brandConfig';

interface ProductShowcaseProps {
  brand: BrandConfig;
  onGetStarted: () => void;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({ brand, onGetStarted }) => {
  const [activeTab, setActiveTab] = useState<'Board' | 'List view' | 'Timeline' | 'Capacity'>('Board');
  const [agentDropdownOpen, setAgentDropdownOpen] = useState(true);
  const [selectedAgent, setSelectedAgent] = useState('Canva');
  const [agentSearch, setAgentSearch] = useState('');
  const [mobileColumn, setMobileColumn] = useState<'all' | 'todo' | 'design' | 'dev' | 'gtm' | 'done'>('all');
  
  const [todoInput, setTodoInput] = useState('');
  const [todoCards, setTodoCards] = useState([
    { id: 'todo-default', text: 'Define launch KPI targets and team tracking', key: 'DF-320' }
  ]);

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!todoInput.trim()) return;
    setTodoCards([
      ...todoCards, 
      { 
        id: `todo-${Date.now()}`, 
        text: todoInput.trim(), 
        key: `DF-${Math.floor(Math.random() * 800 + 100)}` 
      }
    ]);
    setTodoInput('');
  };

  const agents = [
    { id: 'cursor', name: 'Cursor', provider: 'by Dayflow', icon: 'C', color: 'bg-slate-800' },
    { id: 'github', name: 'GitHub Copilot', provider: 'by Dayflow', icon: 'GH', color: 'bg-slate-900' },
    { id: 'canva', name: 'Canva', provider: 'by Dayflow', icon: 'C', color: 'bg-sky-500' },
    { id: 'figma', name: 'Figma', provider: 'by Dayflow', icon: 'F', color: 'bg-purple-600', hasCursorBadge: true }
  ];

  const filteredAgents = agents.filter(a => 
    a.name.toLowerCase().includes(agentSearch.toLowerCase()) || 
    a.provider.toLowerCase().includes(agentSearch.toLowerCase())
  );

  return (
    <section id="product-showcase" className="py-16 sm:py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-[1536px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8 sm:mb-12 max-w-4xl">
          <div className="text-xs font-bold uppercase tracking-[0.1em] text-[#2563FF] mb-2 flex items-center gap-1.5">
            <span className="w-2 h-0.5 bg-[#2563FF] rounded-full inline-block" />
            <span>INTERACTIVE WORKSPACE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-[#101214] tracking-tight leading-[1.14]">
            {brand.kanbanSectionTitle}
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-slate-700 leading-relaxed font-normal">
            {brand.kanbanSectionSubtitle}
          </p>

          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              onGetStarted?.();
            }}
            className="mt-5 sm:mt-6 inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full border-2 border-[#101214] text-[#101214] hover:bg-[#101214] hover:text-white font-bold text-xs sm:text-sm transition-all duration-150 cursor-pointer active:scale-95 shadow-2xs"
          >
            <span>Get started for free</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Polished Product Mockup Container (No Horizontal Scrollbar at any breakpoint) */}
        <div className="w-full rounded-2xl border border-slate-200/90 bg-white shadow-2xl shadow-slate-200/50 overflow-hidden text-slate-900 select-none">
          
          {/* Top Application Bar - Clean Dayflow Navigation without unnecessary lines or shape clutter */}
          <div className="flex items-center justify-between px-3 sm:px-5 py-2.5 sm:py-3 bg-white text-xs">
            {/* Left: Product Logo & Quick Search */}
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="flex items-center font-bold text-slate-900">
                <DayflowLogo className="h-6 sm:h-7 w-auto object-contain" />
              </div>

              {/* Functional Search Bar */}
              <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-slate-100/80 hover:bg-slate-100 border border-slate-200/80 rounded-md w-48 lg:w-72 text-slate-500 transition-colors">
                <Search className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                <span className="text-xs">Search tasks, sprints & docs</span>
              </div>

              {/* Blue Create Button */}
              <button 
                type="button" 
                onClick={() => {
                  const el = document.getElementById('todo-input-field');
                  if (el) el.focus();
                }}
                className="flex items-center gap-1 px-2.5 sm:px-3 py-1 bg-[#2563FF] hover:bg-blue-600 text-white font-semibold rounded-md text-xs transition-colors shadow-2xs cursor-pointer active:scale-95"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Create</span>
              </button>
            </div>

            {/* Right: AI Assistant & User Avatar */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button 
                type="button" 
                onClick={() => setAgentDropdownOpen(!agentDropdownOpen)}
                className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full border border-blue-200 bg-blue-50/50 hover:bg-blue-100/70 text-[#1D4ED8] font-semibold text-xs transition-colors cursor-pointer"
                title="Toggle AI Agent selector"
              >
                <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-500 p-0.5 flex items-center justify-center">
                  <Sparkles className="w-2.5 h-2.5 text-white" />
                </div>
                <span className="hidden xs:inline">{brand.aiName}</span>
                <span className="xs:hidden">Agents</span>
              </button>

              {/* Founder Avatar */}
              <div 
                className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#2563FF] to-[#06B6D4] text-white font-bold flex items-center justify-center text-[10px] ring-2 ring-blue-100 shadow-2xs"
                title="Mohan S. (Admin)"
              >
                MS
              </div>
            </div>
          </div>

          {/* Project Title & View Selector Sub-Bar */}
          <div className="px-3 sm:px-5 py-2.5 bg-[#f8f9fa] border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 rounded-md bg-[#2563FF] flex items-center justify-center text-white text-xs font-bold shadow-2xs">
                <Layers className="w-3.5 h-3.5" />
              </div>
              <div className="flex items-center gap-2">
                <h3 className="text-xs sm:text-sm font-bold text-slate-900">Summer campaign</h3>
                <span className="hidden sm:inline-block px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-semibold">Active Sprint</span>
              </div>
            </div>

            {/* View switcher tabs */}
            <div className="flex items-center gap-1 sm:gap-3 text-xs font-semibold text-slate-600">
              {(['Board', 'List view', 'Timeline', 'Capacity'] as const).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`pb-0.5 px-2 transition-colors cursor-pointer ${
                    activeTab === tab 
                      ? 'text-[#2563FF] border-b-2 border-[#2563FF]' 
                      : 'hover:text-slate-900 border-b-2 border-transparent'
                  }`}
                >
                  {tab}
                </button>
              ))}
              <div className="hidden sm:flex items-center gap-1 ml-2 text-slate-500">
                <button type="button" className="p-1 hover:bg-slate-200/70 rounded" title="Add view">
                  <Plus className="w-3.5 h-3.5" />
                </button>
                <button type="button" className="p-1 hover:bg-slate-200/70 rounded" title="Share board">
                  <Share2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Tablet & Mobile Column Switcher (Visible on < lg screens to eliminate scrolling and let users zoom into columns) */}
          <div className="lg:hidden px-3 sm:px-5 py-2 bg-slate-100 border-t border-slate-200 flex items-center justify-between gap-2 overflow-x-auto text-xs">
            <span className="text-[11px] font-bold text-slate-500 shrink-0">View:</span>
            <div className="flex items-center gap-1">
              {[
                { id: 'all', label: 'All Columns' },
                { id: 'todo', label: `To do (${todoCards.length})` },
                { id: 'design', label: 'In design (3)' },
                { id: 'dev', label: 'In dev (4)' },
                { id: 'gtm', label: 'GTM (1)' },
                { id: 'done', label: 'Done (3)' }
              ].map(col => (
                <button
                  key={col.id}
                  type="button"
                  onClick={() => setMobileColumn(col.id as any)}
                  className={`px-2.5 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                    mobileColumn === col.id 
                      ? 'bg-[#2563FF] text-white shadow-xs' 
                      : 'bg-white text-slate-700 hover:bg-slate-200/80 border border-slate-200'
                  }`}
                >
                  {col.label}
                </button>
              ))}
            </div>
          </div>

          {/* Responsive Kanban Board Canvas - Fits 100% within viewport with Zero Horizontal Scrolling */}
          <div className="p-3 sm:p-4 lg:p-5 bg-[#f4f5f7]">
            <div className={`
              ${mobileColumn === 'all' 
                ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 xl:gap-3.5 w-full items-start' 
                : 'w-full max-w-xl mx-auto flex flex-col gap-3'
              }
            `}>

              {/* Column 1: To do */}
              {(mobileColumn === 'all' || mobileColumn === 'todo') && (
                <div className="w-full min-w-0 bg-[#ebecf0] rounded-xl p-3 flex flex-col gap-2.5 transition-all">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-700 px-1">
                    <span className="truncate">To do <span className="text-slate-500 font-normal">({todoCards.length})</span></span>
                    <div className="flex items-center gap-1 shrink-0">
                      <div className="w-4 h-4 rounded-full bg-purple-600 text-white text-[9px] flex items-center justify-center font-bold">M</div>
                      <MoreHorizontal className="w-3.5 h-3.5 text-slate-500" />
                    </div>
                  </div>

                  {/* Add Task Form with Purple Design Cursor */}
                  <div className="relative bg-white rounded-lg p-3 shadow-xs border border-blue-400 ring-2 ring-blue-100">
                    <form onSubmit={handleAddTodo}>
                      <input
                        id="todo-input-field"
                        type="text"
                        placeholder="What needs to be done?"
                        value={todoInput}
                        onChange={(e) => setTodoInput(e.target.value)}
                        className="w-full text-xs text-slate-800 placeholder:text-slate-400 outline-none pb-3"
                      />
                      <div className="flex items-center justify-between pt-1 border-t border-slate-100">
                        <div className="flex items-center gap-1 text-slate-400">
                          <CheckSquare className="w-3 h-3 text-blue-500" />
                          <div className="w-3.5 h-3.5 rounded-full bg-slate-300" />
                        </div>
                        <button 
                          type="submit" 
                          className="text-[10px] bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold px-1.5 py-0.5 rounded transition-colors"
                        >
                          Add ↵
                        </button>
                      </div>
                    </form>

                    {/* Purple Cursor 'Design' overlay */}
                    <div className="absolute -bottom-2.5 right-2 flex items-center gap-1 z-20 pointer-events-none drop-shadow-md">
                      <MousePointer className="w-3.5 h-3.5 fill-purple-600 text-purple-600 rotate-[-45deg]" />
                      <div className="bg-purple-600 text-white text-[9px] font-bold px-2 py-0.5 rounded-full shadow-sm flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-amber-200" />
                        <span>Design</span>
                      </div>
                    </div>
                  </div>

                  {/* Todo Cards */}
                  {todoCards.map((c) => (
                    <div key={c.id} className="bg-white rounded-lg p-3 shadow-xs border border-slate-200 hover:shadow transition-shadow">
                      <p className="text-xs font-medium text-slate-800 mb-2 leading-relaxed">{c.text}</p>
                      <div className="flex items-center justify-between text-[11px] text-slate-500">
                        <span className="flex items-center gap-1 text-blue-600 font-semibold">
                          <CheckSquare className="w-3 h-3 shrink-0" /> {c.key}
                        </span>
                        <div className="w-4 h-4 rounded-full bg-slate-200 text-slate-600 text-[9px] flex items-center justify-center font-bold">
                          1
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Column 2: In design */}
              {(mobileColumn === 'all' || mobileColumn === 'design') && (
                <div className="w-full min-w-0 bg-[#ebecf0] rounded-xl p-3 flex flex-col gap-2.5 transition-all">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-700 px-1">
                    <span className="truncate">In design <span className="text-slate-500 font-normal">3</span></span>
                    <div className="flex items-center gap-1 shrink-0">
                      <div className="w-4 h-4 rounded-full bg-black text-white text-[9px] flex items-center justify-center font-bold">F</div>
                      <MoreHorizontal className="w-3.5 h-3.5 text-slate-500" />
                    </div>
                  </div>

                  {/* Card 1 */}
                  <div className="bg-white rounded-lg p-3 shadow-xs border border-slate-200 hover:shadow transition-shadow">
                    <p className="text-xs font-medium text-slate-800 mb-2 leading-relaxed">
                      Design hero banner variants for campaign landing page
                    </p>
                    <div className="flex items-center justify-between text-[11px] text-slate-500">
                      <span className="flex items-center gap-1 text-blue-600 font-semibold">
                        <CheckSquare className="w-3 h-3 shrink-0" /> DF-365
                      </span>
                      <div className="flex items-center gap-1">
                        <ChevronUp className="w-3 h-3 text-rose-500" />
                        <div className="flex -space-x-1">
                          <div className="w-4 h-4 rounded-full bg-rose-500 border border-white text-[8px] text-white flex items-center justify-center font-bold">A</div>
                          <div className="w-4 h-4 rounded-full bg-blue-500 border border-white text-[8px] text-white flex items-center justify-center font-bold">T</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-white rounded-lg p-3 shadow-xs border border-slate-200 hover:shadow transition-shadow">
                    <p className="text-xs font-medium text-slate-800 mb-2 leading-relaxed">
                      Draft launch-day social copy & asset guidelines
                    </p>
                    <div className="flex items-center justify-between text-[11px] text-slate-500">
                      <span className="flex items-center gap-1 text-blue-600 font-semibold">
                        <CheckSquare className="w-3 h-3 shrink-0" /> DF-356
                      </span>
                      <div className="flex items-center gap-1">
                        <Equal className="w-3 h-3 text-amber-500" />
                        <div className="w-4 h-4 rounded-full bg-indigo-500 text-[8px] text-white flex items-center justify-center font-bold">M</div>
                      </div>
                    </div>
                  </div>

                  {/* Card 3: Figma Agent card */}
                  <div className="relative bg-white rounded-lg p-3 shadow-md border border-blue-400">
                    <p className="text-xs font-medium text-slate-800 mb-2 leading-relaxed">
                      Create responsive page designs for landing page
                    </p>
                    <div className="flex items-center justify-between text-[11px] text-slate-500">
                      <span className="flex items-center gap-1 text-blue-600 font-semibold">
                        <CheckSquare className="w-3 h-3 shrink-0" /> DF-343
                      </span>
                      <div className="flex items-center gap-1">
                        <Equal className="w-3 h-3 text-amber-500" />
                        <div className="flex -space-x-1">
                          <div className="w-4 h-4 rounded-full bg-emerald-500 border border-white" />
                          <div className="w-4 h-4 rounded-full bg-amber-500 border border-white" />
                        </div>
                      </div>
                    </div>

                    {/* Figma Agent Cursor Badge */}
                    <div className="absolute -bottom-2.5 left-2 flex items-center gap-1 z-20 pointer-events-none drop-shadow-md">
                      <MousePointer className="w-3.5 h-3.5 fill-black text-black" />
                      <div className="bg-black text-white text-[9px] font-bold px-2 py-0.5 rounded-full shadow-sm flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-purple-400" />
                        <span>Figma Agent</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Column 3: In development */}
              {(mobileColumn === 'all' || mobileColumn === 'dev') && (
                <div className="w-full min-w-0 bg-[#ebecf0] rounded-xl p-3 flex flex-col gap-2.5 transition-all">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-700 px-1">
                    <span className="truncate">In development <span className="text-slate-500 font-normal">4</span></span>
                    <div className="flex items-center gap-1 shrink-0">
                      <div className="w-4 h-4 rounded-full bg-blue-600 text-white text-[9px] flex items-center justify-center font-bold">C</div>
                      <MoreHorizontal className="w-3.5 h-3.5 text-slate-500" />
                    </div>
                  </div>

                  {/* Card 1 */}
                  <div className="bg-white rounded-lg p-3 shadow-xs border border-slate-200">
                    <p className="text-xs font-medium text-slate-800 mb-2 leading-relaxed">
                      Implement UTM parameter routing for campaign CTAs
                    </p>
                    <div className="flex items-center justify-between text-[11px] text-slate-500">
                      <span className="flex items-center gap-1 text-blue-600 font-semibold">
                        <CheckSquare className="w-3 h-3 shrink-0" /> DF-454
                      </span>
                      <div className="flex items-center gap-1">
                        <ChevronUp className="w-3 h-3 text-rose-500" />
                        <div className="w-4 h-4 rounded-full bg-orange-500 text-[8px] text-white flex items-center justify-center font-bold">R</div>
                      </div>
                    </div>
                  </div>

                  {/* Card 2 with Claude Agent Cursor */}
                  <div className="relative bg-white rounded-lg p-3 shadow-xs border border-slate-200">
                    <p className="text-xs font-medium text-slate-800 mb-2 leading-relaxed">
                      Build animated product embed component
                    </p>
                    <div className="flex items-center justify-between text-[11px] text-slate-500">
                      <span className="flex items-center gap-1 text-blue-600 font-semibold">
                        <CheckSquare className="w-3 h-3 shrink-0" /> DF-852
                      </span>
                      <div className="flex items-center gap-1">
                        <ChevronUp className="w-3 h-3 text-orange-500" />
                        <div className="w-4 h-4 rounded-full bg-blue-500 text-[8px] text-white flex items-center justify-center font-bold">D</div>
                      </div>
                    </div>

                    {/* Claude Agent Cursor Badge */}
                    <div className="absolute -top-2.5 right-2 flex items-center gap-1 z-20 pointer-events-none drop-shadow-md">
                      <MousePointer className="w-3.5 h-3.5 fill-[#2563FF] text-[#2563FF]" />
                      <div className="bg-[#2563FF] text-white text-[9px] font-bold px-2 py-0.5 rounded-full shadow-sm flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-orange-400" />
                        <span>Claude Agent</span>
                      </div>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="bg-white rounded-lg p-3 shadow-xs border border-slate-200">
                    <p className="text-xs font-medium text-slate-800 mb-2 leading-relaxed">
                      Add A/B experiment flag logic for headline variants
                    </p>
                    <div className="flex items-center justify-between text-[11px] text-slate-500">
                      <span className="flex items-center gap-1 text-blue-600 font-semibold">
                        <CheckSquare className="w-3 h-3 shrink-0" /> DF-387
                      </span>
                      <ChevronUp className="w-3 h-3 text-rose-500" />
                    </div>
                  </div>

                  <button 
                    type="button" 
                    className="flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-slate-900 p-1 cursor-pointer"
                  >
                    <Plus className="w-3 h-3" />
                    <span>Create task</span>
                  </button>
                </div>
              )}

              {/* Column 4: GTM Launch */}
              {(mobileColumn === 'all' || mobileColumn === 'gtm') && (
                <div className="w-full min-w-0 bg-[#ebecf0] rounded-xl p-3 flex flex-col gap-2.5 transition-all">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-700 px-1">
                    <span className="truncate">GTM Launch <span className="text-slate-500 font-normal">1</span></span>
                    <div className="flex items-center gap-1 shrink-0">
                      <div className="w-4 h-4 rounded-full bg-emerald-600 text-white text-[9px] flex items-center justify-center font-bold">M</div>
                      <MoreHorizontal className="w-3.5 h-3.5 text-slate-500" />
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-3 shadow-xs border border-slate-200">
                    <p className="text-xs font-medium text-slate-800 mb-2 leading-relaxed">
                      Create paid social ad set for campaign launch
                    </p>
                    <div className="flex items-center justify-between text-[11px] text-slate-500">
                      <span className="flex items-center gap-1 text-blue-600 font-semibold">
                        <CheckSquare className="w-3 h-3 shrink-0" /> DF-358
                      </span>
                      <div className="flex items-center gap-1">
                        <Equal className="w-3 h-3 text-amber-500" />
                        <div className="flex -space-x-1">
                          <div className="w-4 h-4 rounded-full bg-sky-500 border border-white" />
                          <div className="w-4 h-4 rounded-full bg-purple-500 border border-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Column 5: Done with the interactive Agent Dropdown */}
              {(mobileColumn === 'all' || mobileColumn === 'done') && (
                <div className="w-full min-w-0 bg-[#ebecf0] rounded-xl p-3 flex flex-col gap-2.5 transition-all">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-700 px-1">
                    <span className="truncate">Done <span className="text-slate-500 font-normal">3</span></span>
                    <div className="flex items-center gap-1 shrink-0">
                      <button 
                        type="button" 
                        onClick={() => setAgentDropdownOpen(!agentDropdownOpen)}
                        className="text-[10px] text-blue-600 font-semibold hover:underline"
                      >
                        {agentDropdownOpen ? 'Hide' : 'Agent'}
                      </button>
                      <div className="w-4 h-4 rounded-full bg-blue-500 text-white text-[9px] flex items-center justify-center font-bold">A</div>
                    </div>
                  </div>

                  {/* Interactive Agent Selection Overlay Box - Neatly styled to fit 100% inside column */}
                  {agentDropdownOpen && (
                    <div className="w-full bg-white rounded-xl shadow-lg border border-slate-200 p-3 space-y-2.5 relative">
                      <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                        <span>Select an agent</span>
                        <span className="text-[10px] font-normal text-slate-400">Dayflow Brain</span>
                      </div>

                      {/* Agent Search Input */}
                      <div className="flex items-center gap-1.5 px-2 py-1.5 bg-slate-50 border border-blue-500 rounded-md text-xs text-slate-700">
                        <Search className="w-3 h-3 text-slate-400 shrink-0" />
                        <input 
                          type="text" 
                          placeholder="Search agents" 
                          value={agentSearch}
                          onChange={(e) => setAgentSearch(e.target.value)}
                          className="w-full bg-transparent outline-none text-xs text-slate-800"
                        />
                      </div>

                      {/* Agent List */}
                      <div className="space-y-1 pt-0.5">
                        {filteredAgents.map(agent => (
                          <div 
                            key={agent.id}
                            onClick={() => setSelectedAgent(agent.name)}
                            className={`flex items-center justify-between p-2 rounded-lg cursor-pointer transition-colors relative ${
                              selectedAgent === agent.name 
                                ? 'bg-blue-50/80 border border-blue-100' 
                                : 'hover:bg-slate-50'
                            }`}
                          >
                            <div className="flex items-center gap-2 min-w-0">
                              <div className={`w-5 h-5 rounded ${agent.color} text-[9px] text-white flex items-center justify-center font-bold shrink-0`}>
                                {agent.icon}
                              </div>
                              <div className="min-w-0">
                                <div className="text-xs font-semibold text-slate-800 truncate">{agent.name}</div>
                                <div className="text-[10px] text-slate-400">{agent.provider}</div>
                              </div>
                            </div>

                            {selectedAgent === agent.name && (
                              <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                            )}

                            {/* Marketing Green Cursor Badge safely anchored */}
                            {agent.hasCursorBadge && (
                              <div className="hidden xs:flex absolute right-1 top-1.5 items-center gap-1 pointer-events-none drop-shadow-xs">
                                <MousePointer className="w-2.5 h-2.5 fill-lime-600 text-lime-600" />
                                <div className="bg-[#84cc16] text-black text-[9px] font-bold px-1.5 py-0.5 rounded-full">
                                  <span>Marketing</span>
                                </div>
                              </div>
                            )}
                          </div>
                        ))}

                        <div className="pt-2 border-t border-slate-100 flex flex-col gap-1 text-[11px] font-semibold text-slate-600">
                          <button type="button" className="text-left px-1.5 py-1 hover:text-blue-600 transition-colors cursor-pointer">
                            Browse all agents
                          </button>
                          <button type="button" className="text-left px-1.5 py-1 text-blue-600 hover:text-blue-700 flex items-center gap-1 cursor-pointer">
                            <Plus className="w-3 h-3" /> Create new agent
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Completed Task Cards */}
                  <div className="bg-white rounded-lg p-3 shadow-xs border border-slate-200">
                    <p className="text-xs font-medium text-slate-800 mb-2 leading-relaxed">
                      Finalize Dayflow brand system & token specs
                    </p>
                    <div className="flex items-center justify-between text-[11px] text-slate-500">
                      <span className="flex items-center gap-1 text-emerald-600 font-semibold">
                        <CheckSquare className="w-3 h-3 shrink-0" /> DF-312
                      </span>
                      <span className="text-[10px] bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded font-bold">Shipped</span>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
