import React from 'react';
import { ViewMode } from '../types';
import {
  Globe,
  Search,
  Languages,
  MapPin,
  PieChart,
  Sparkles,
  HelpCircle,
  Coins,
  Clock,
  Briefcase,
  ShieldCheck,
  GraduationCap,
  Users,
  Zap
} from 'lucide-react';

interface HeaderProps {
  currentView: ViewMode;
  onViewChange: (view: ViewMode) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  selectedRegion: string;
  onRegionChange: (r: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onViewChange,
  searchQuery,
  onSearchChange,
  selectedRegion,
  onRegionChange,
}) => {
  const regions = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  const navItems: {
    id: ViewMode;
    label: string;
    icon: React.FC<{ className?: string }>;
    badge?: string;
  }[] = [
    {
      id: 'explorer',
      label: 'Country Explorer',
      icon: Globe,
    },
    {
      id: 'jobs',
      label: 'Jobs and Sourcing Data per Country',
      icon: Briefcase,
    },
    {
      id: 'skill_search',
      label: 'Skill Search per Country',
      icon: Zap,
      badge: 'US, AU, CA, UK States',
    },
    {
      id: 'fields_of_study',
      label: 'Field of Studies',
      icon: GraduationCap,
      badge: '197 Countries & US/CA States',
    },
    {
      id: 'demographics',
      label: 'Demographics (Age & Gender)',
      icon: Users,
      badge: 'US, CA, AU, UK States',
    },
    {
      id: 'minimum_wage',
      label: 'Minimum Wage Tracker',
      icon: Coins,
      badge: 'Global & US',
    },
    {
      id: 'state_percentages',
      label: 'State Language %',
      icon: PieChart,
    },
    {
      id: 'time_converter',
      label: 'Time Zone Converter',
      icon: Clock,
      badge: 'Live',
    },
    {
      id: 'language_reverse',
      label: 'Language Lookup',
      icon: Languages,
    },
    {
      id: 'map',
      label: 'World & Language Heat Map',
      icon: MapPin,
    },
    {
      id: 'ai_assistant',
      label: 'AI Travel Coach',
      icon: Sparkles,
      badge: 'Gemini 3.6',
    },
    {
      id: 'quiz',
      label: 'Trivia Quiz',
      icon: HelpCircle,
    },
  ];

  return (
    <header className="sticky top-0 z-30 w-full bg-[#4B286D] text-white shadow-md border-b border-[#371B54]">
      {/* Top Header Row */}
      <div className="w-full px-3 sm:px-6 lg:px-8 py-2.5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          
          {/* Brand Logo & Title */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-[#66CC00] shadow-xs font-black">
              <Globe className="w-5 h-5 text-[#66CC00]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-base font-extrabold tracking-tight text-white">Sourcing</span>
                <span className="text-base font-light text-slate-200">Suite</span>
                <span className="w-2 h-2 rounded-full bg-[#66CC00] animate-pulse inline-block" />
                <span className="ml-1 hidden sm:inline-flex items-center gap-1 text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-[#66CC00] text-slate-950">
                  <ShieldCheck className="w-3 h-3" />
                  GLOBAL DATA
                </span>
              </div>
              <p className="text-[11px] text-purple-200 font-medium">
                Global Sourcing, Labor & Intelligence Directory
              </p>
            </div>
          </div>

          {/* Controls: Search Bar & Region Selector */}
          <div className="flex items-center gap-2.5 flex-1 max-w-lg md:justify-end">
            {(currentView === 'explorer' || currentView === 'language_reverse') && (
              <div className="relative flex-1 max-w-xs sm:max-w-md">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-purple-300" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  placeholder={
                    currentView === 'explorer'
                      ? 'Search country, language, capital...'
                      : 'Search language (Swahili, French...)...'
                  }
                  className="w-full bg-[#371B54] text-white text-xs rounded-xl pl-8 pr-7 py-2 border border-purple-400/40 focus:outline-none focus:border-[#66CC00] focus:ring-1 focus:ring-[#66CC00] placeholder-purple-300 transition"
                />
                {searchQuery && (
                  <button
                    onClick={() => onSearchChange('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] text-purple-300 hover:text-white bg-purple-900/60 px-1.5 py-0.5 rounded-md"
                  >
                    Clear
                  </button>
                )}
              </div>
            )}

            {/* Region Filter dropdown */}
            {currentView === 'explorer' && (
              <select
                value={selectedRegion}
                onChange={(e) => onRegionChange(e.target.value)}
                className="bg-[#371B54] text-white text-xs font-bold rounded-xl px-2.5 py-2 border border-purple-400/40 focus:outline-none focus:border-[#66CC00] shrink-0"
              >
                {regions.map((reg) => (
                  <option key={reg} value={reg} className="bg-[#4B286D] text-white">
                    {reg === 'All' ? 'All Regions' : reg}
                  </option>
                ))}
              </select>
            )}
          </div>

        </div>
      </div>

      {/* Horizontal Tabs Bar - Full Screen Width Navigation */}
      <div className="w-full bg-white border-t border-[#371B54]/40 px-2 sm:px-4 py-1.5 overflow-x-auto custom-scrollbar">
        <div className="flex items-center gap-1.5 min-w-max">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;

            return (
              <button
                key={item.id}
                onClick={() => onViewChange(item.id)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-[#4B286D] text-white shadow-xs'
                    : 'text-slate-700 hover:bg-[#F4EFF9] hover:text-[#4B286D]'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#66CC00]' : 'text-[#4B286D]'}`} />
                <span>{item.label}</span>
                {item.badge && (
                  <span
                    className={`text-[9px] font-extrabold px-1.5 py-0.2 rounded-md ${
                      isActive
                        ? 'bg-[#66CC00] text-slate-950'
                        : 'bg-[#F4EFF9] text-[#4B286D] border border-purple-200'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
