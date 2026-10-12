import React from 'react';
import { CheckSquare, FolderKanban, Users, Workflow } from 'lucide-react';

export const DayflowCapabilitiesStrip: React.FC = () => {
  const capabilities = [
    {
      id: 'tasks',
      name: 'Tasks',
      icon: CheckSquare,
      iconColor: '#2563FF',
      bgColor: 'bg-[#ECF2FF]',
      hoverBg: 'hover:bg-[#DBEAFE]',
      hoverText: 'group-hover:text-[#2563FF]',
      borderColor: 'border-blue-100'
    },
    {
      id: 'projects',
      name: 'Projects',
      icon: FolderKanban,
      iconColor: '#06B6D4',
      bgColor: 'bg-[#ECFEFF]',
      hoverBg: 'hover:bg-[#CFFAFE]',
      hoverText: 'group-hover:text-[#06B6D4]',
      borderColor: 'border-cyan-100'
    },
    {
      id: 'teams',
      name: 'Teams',
      icon: Users,
      iconColor: '#8B5CF6',
      bgColor: 'bg-[#F5F3FF]',
      hoverBg: 'hover:bg-[#EDE9FE]',
      hoverText: 'group-hover:text-[#8B5CF6]',
      borderColor: 'border-purple-100'
    },
    {
      id: 'workflows',
      name: 'Workflows',
      icon: Workflow,
      iconColor: '#16A34A',
      bgColor: 'bg-[#F0FDF4]',
      hoverBg: 'hover:bg-[#DCFCE7]',
      hoverText: 'group-hover:text-[#16A34A]',
      borderColor: 'border-emerald-100'
    }
  ];

  return (
    <section 
      id="capabilities" 
      className="py-14 sm:py-20 lg:py-24 bg-white border-b border-slate-100/90 overflow-hidden"
      aria-label="Product Capabilities"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Eyebrow: BUILT FOR BETTER WORKFLOWS */}
        <div className="text-[13px] sm:text-[14px] font-bold uppercase tracking-[0.14em] text-[#2563FF] mb-2 sm:mb-3">
          BUILT FOR BETTER WORKFLOWS
        </div>

        {/* Main Heading: Everything your team needs. One connected workspace. */}
        <h2 className="text-[25px] sm:text-[28px] lg:text-[30px] font-semibold text-[#0F172A] tracking-tight leading-[1.25] max-w-2xl mx-auto">
          Everything your team needs. One connected workspace.
        </h2>

        {/* Supporting Line: Projects · Tasks · Teams · Collaboration · Automation */}
        <p className="mt-2.5 sm:mt-3.5 text-[17px] sm:text-[18px] text-slate-600 font-normal tracking-normal max-w-xl mx-auto leading-relaxed">
          Projects · Tasks · Teams · Collaboration · Automation
        </p>

        {/* Subtle Horizontal Divider */}
        <div className="my-10 sm:my-12 md:my-14 border-t border-slate-200/80 max-w-4xl mx-auto" />

        {/* Four-Column Feature Items (Two-Column on Mobile) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 max-w-4xl mx-auto">
          {capabilities.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                tabIndex={0}
                className="group flex flex-col items-center justify-center cursor-default select-none focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-500 rounded-2xl p-2 transition-all duration-200"
              >
                {/* Softly Colored Rounded Square (~60x60px) */}
                <div 
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl ${item.bgColor} border ${item.borderColor} flex items-center justify-center transition-all duration-200 ease-out motion-reduce:transform-none group-hover:-translate-y-1 ${item.hoverBg} group-hover:shadow-xs`}
                >
                  <Icon 
                    className="w-6 h-6 stroke-[1.85] transition-colors duration-200"
                    style={{ color: item.iconColor }}
                  />
                </div>

                {/* Feature Label */}
                <span 
                  className={`mt-3.5 text-[16px] sm:text-[17px] font-medium text-slate-800 transition-colors duration-200 ${item.hoverText}`}
                >
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>

        {/* Centered Closing Tagline */}
        <p className="mt-10 sm:mt-12 md:mt-14 text-[15px] sm:text-[16px] text-slate-500 font-normal">
          One workspace. A clearer way to work.
        </p>

      </div>
    </section>
  );
};

export default DayflowCapabilitiesStrip;
