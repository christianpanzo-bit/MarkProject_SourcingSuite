import React, { useState, useMemo } from 'react';
import {
  SKILLS_DATA,
  SKILL_CATEGORIES,
  searchSkills,
  formatNumber,
} from '../data/skillsData';
import {
  SkillItem,
  CountrySkillData,
  StateSkillBreakdown,
  Region,
} from '../types';
import {
  Search,
  Globe,
  Building2,
  Users,
  MapPin,
  FileSpreadsheet,
  Zap,
  Layers,
  Compass,
  Scale,
  X,
  Filter,
  SlidersHorizontal,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

export const SkillSearchExplorer: React.FC = () => {
  // -------------------------------------------------------------
  // STATE MANAGEMENT FOR SKILL SEARCH & DROPDOWN
  // -------------------------------------------------------------
  const [skillSearchQuery, setSkillSearchQuery] = useState<string>('');
  const [activeSkillSearchTerm, setActiveSkillSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All Categories');
  const [selectedSkillId, setSelectedSkillId] = useState<string>(SKILLS_DATA[0]?.id || 'python_data_ai');

  // -------------------------------------------------------------
  // STATE MANAGEMENT FOR COUNTRY & TALENT METRICS SEARCH
  // -------------------------------------------------------------
  const [countrySearchInput, setCountrySearchInput] = useState<string>('');
  const [appliedCountrySearchTerm, setAppliedCountrySearchTerm] = useState<string>('');
  const [selectedRegionFilter, setSelectedRegionFilter] = useState<Region | 'All'>('All');
  
  // Talent headcount filter
  const [minTalentPoolInput, setMinTalentPoolInput] = useState<number | ''>('');
  const [appliedMinTalentPool, setAppliedMinTalentPool] = useState<number>(0);

  // -------------------------------------------------------------
  // SUBNATIONAL STATE BREAKDOWN & COMPARISON STATE
  // -------------------------------------------------------------
  const [expandedStatesCountry, setExpandedStatesCountry] = useState<string | null>('US');
  const [stateSearchQuery, setStateSearchQuery] = useState<string>('');
  const [selectedStatesToCompare, setSelectedStatesToCompare] = useState<StateSkillBreakdown[]>([]);

  // -------------------------------------------------------------
  // SEARCH HANDLERS WITH EXPLICIT BUTTON ACTIONS
  // -------------------------------------------------------------
  const handleExecuteSkillSearch = () => {
    setActiveSkillSearchTerm(skillSearchQuery);
  };

  const handleExecuteCountrySearch = () => {
    setAppliedCountrySearchTerm(countrySearchInput);
    setAppliedMinTalentPool(typeof minTalentPoolInput === 'number' ? minTalentPoolInput : 0);
  };

  const handleResetCountryFilters = () => {
    setCountrySearchInput('');
    setAppliedCountrySearchTerm('');
    setMinTalentPoolInput('');
    setAppliedMinTalentPool(0);
    setSelectedRegionFilter('All');
  };

  // -------------------------------------------------------------
  // FILTERED SKILLS LIST
  // -------------------------------------------------------------
  const filteredSkills = useMemo(() => {
    return searchSkills(activeSkillSearchTerm, selectedCategory);
  }, [activeSkillSearchTerm, selectedCategory]);

  // Selected active skill details
  const activeSkill = useMemo(() => {
    return SKILLS_DATA.find((s) => s.id === selectedSkillId) || filteredSkills[0] || SKILLS_DATA[0];
  }, [selectedSkillId, filteredSkills]);

  // -------------------------------------------------------------
  // FILTERED COUNTRIES LIST (Covers 197 UN Countries)
  // -------------------------------------------------------------
  const filteredCountries = useMemo(() => {
    if (!activeSkill) return [];
    
    const term = appliedCountrySearchTerm.toLowerCase().trim();

    return activeSkill.countriesData.filter((c) => {
      // Region filter
      const matchRegion = selectedRegionFilter === 'All' || c.region === selectedRegionFilter;
      if (!matchRegion) return false;

      // Minimum talent pool size filter
      if (appliedMinTalentPool > 0 && c.totalTalentPool < appliedMinTalentPool) {
        return false;
      }

      // Country text search term filter
      if (term) {
        const matchName = c.countryName.toLowerCase().includes(term);
        const matchCode = c.countryCode.toLowerCase().includes(term);
        const matchHubs = c.keyHiringHubs.some((h) => h.toLowerCase().includes(term));
        return matchName || matchCode || matchHubs;
      }

      return true;
    });
  }, [activeSkill, selectedRegionFilter, appliedCountrySearchTerm, appliedMinTalentPool]);

  // Summary Metrics for active skill
  const skillMetrics = useMemo(() => {
    if (!activeSkill) return { totalPool: 0, totalPoolFormatted: '0', topHubsCount: 0 };
    const totalPool = activeSkill.countriesData.reduce((acc, curr) => acc + curr.totalTalentPool, 0);
    const hubsSet = new Set<string>();
    activeSkill.countriesData.forEach((c) => c.keyHiringHubs.forEach((h) => hubsSet.add(h)));
    return {
      totalPool,
      totalPoolFormatted: formatNumber(totalPool),
      topHubsCount: hubsSet.size,
    };
  }, [activeSkill]);

  // CSV Export
  const handleExportCsv = () => {
    if (!activeSkill) return;

    let csvContent = `Skill Name,${activeSkill.name}\n`;
    csvContent += `Category,${activeSkill.category}\n`;
    csvContent += `Global Demand,${activeSkill.globalDemandLevel}\n\n`;

    csvContent += `GLOBAL COUNTRY SOURCING BREAKDOWN (All 197 Countries)\n`;
    csvContent += `Country Code,Country Name,Region,Talent Pool,Demand Level,Salary Range USD,Remote %,Sourcing Complexity,English Proficiency,Key Hubs\n`;

    activeSkill.countriesData.forEach((c) => {
      const hubs = `"${c.keyHiringHubs.join('; ')}"`;
      csvContent += `${c.countryCode},"${c.countryName}",${c.region},${c.totalTalentPool},${c.demandLevel},"${c.averageSalaryUsd}",${c.remoteAvailabilityPct}%,${c.sourcingComplexity},"${c.englishProficiency}",${hubs}\n`;
    });

    const appendStateCsv = (countryCode: string, countryName: string, states?: StateSkillBreakdown[]) => {
      if (!states || states.length === 0) return;
      csvContent += `\n${countryName.toUpperCase()} STATE / PROVINCE BREAKDOWN (${countryCode})\n`;
      csvContent += `State Code,State Name,Capital / Tech Hub,Talent Pool,Demand Level,Salary Range USD,Remote %,Sourcing Complexity,Hiring Hubs\n`;
      states.forEach((st) => {
        const hubs = `"${st.keyHiringHubs.join('; ')}"`;
        csvContent += `${st.stateCode},"${st.stateName}","${st.capitalOrHub}",${st.estimatedTalentPool},${st.demandLevel},"${st.averageSalaryUsd}",${st.remoteAvailabilityPct}%,${st.sourcingComplexity},${hubs}\n`;
      });
    };

    const usData = activeSkill.countriesData.find((c) => c.countryCode === 'US');
    const auData = activeSkill.countriesData.find((c) => c.countryCode === 'AU');
    const caData = activeSkill.countriesData.find((c) => c.countryCode === 'CA');
    const ukData = activeSkill.countriesData.find((c) => c.countryCode === 'GB');

    if (usData) appendStateCsv('US', 'United States (50 States + DC + PR)', usData.usStateBreakdown);
    if (auData) appendStateCsv('AU', 'Australia (8 States & Territories)', auData.auStateBreakdown);
    if (caData) appendStateCsv('CA', 'Canada (13 Provinces & Territories)', caData.caProvinceBreakdown);
    if (ukData) appendStateCsv('UK', 'United Kingdom (8 Nations & Regions)', ukData.ukNationBreakdown);

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `${activeSkill.id}_197_countries_sourcing_data.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Badge Color Helpers
  const getDemandBadgeColor = (level: string) => {
    switch (level) {
      case 'Critical':
        return 'bg-rose-100 text-rose-800 border-rose-300';
      case 'Very High':
        return 'bg-amber-100 text-amber-800 border-amber-300';
      case 'High':
        return 'bg-emerald-100 text-emerald-800 border-emerald-300';
      default:
        return 'bg-slate-100 text-slate-800 border-slate-300';
    }
  };

  const getComplexityBadgeColor = (complexity: string) => {
    switch (complexity) {
      case 'Extreme':
        return 'bg-purple-100 text-purple-900 border-purple-300';
      case 'High':
        return 'bg-amber-100 text-amber-900 border-amber-300';
      case 'Medium':
        return 'bg-blue-100 text-blue-900 border-blue-300';
      default:
        return 'bg-emerald-100 text-emerald-900 border-emerald-300';
    }
  };

  return (
    <div className="space-y-6">
      
      {/* 1. HERO HEADER & STATS CARD */}
      <div className="bg-[#4B286D] text-white p-6 rounded-2xl border border-[#371B54] shadow-md relative overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-[#66CC00] text-slate-950 font-black text-[10px] tracking-wider uppercase flex items-center gap-1">
                <Zap className="w-3 h-3" /> 197 UN COUNTRIES COVERED
              </span>
              <span className="text-xs text-purple-200 font-semibold">
                Global Talent Supply & State-Level Sourcing Intelligence
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              Skill Search & Talent Supply per Country
            </h1>
            <p className="text-xs sm:text-sm text-purple-100 leading-relaxed font-medium">
              Comprehensive global talent search covering <strong className="text-[#66CC00]">all 197 countries</strong> across multi-sector skills (Engineering, Healthcare, Finance, Legal, Aviation, Energy, Trades, Software, and HR). Filter talent pools by specific headcount metrics and explore subnational state breakdowns for the <strong className="text-[#66CC00]">United States (50 States, DC, PR)</strong>, <strong className="text-[#66CC00]">Australia (8 States)</strong>, <strong className="text-[#66CC00]">Canada (13 Provinces)</strong>, and <strong className="text-[#66CC00]">United Kingdom (8 Regions)</strong>.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={handleExportCsv}
              className="px-4 py-2.5 rounded-xl bg-[#66CC00] hover:bg-[#5bb800] text-slate-950 font-black text-xs transition shadow-sm flex items-center gap-2"
            >
              <FileSpreadsheet className="w-4 h-4" />
              <span>Export 197 Countries Data (CSV)</span>
            </button>
          </div>
        </div>

        {/* Global Summary Stats Widgets */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-5 border-t border-purple-500/30 text-xs">
          <div className="bg-[#371B54]/80 p-3 rounded-xl border border-purple-400/20">
            <span className="text-purple-300 font-medium block text-[11px]">Active Skill</span>
            <span className="text-white font-black text-sm">{activeSkill?.name || 'Python, ML & GenAI'}</span>
          </div>
          <div className="bg-[#371B54]/80 p-3 rounded-xl border border-purple-400/20">
            <span className="text-purple-300 font-medium block text-[11px]">197-Country Global Pool</span>
            <span className="text-[#66CC00] font-black text-sm">{skillMetrics.totalPoolFormatted} Professionals</span>
          </div>
          <div className="bg-[#371B54]/80 p-3 rounded-xl border border-purple-400/20">
            <span className="text-purple-300 font-medium block text-[11px]">Global Demand Level</span>
            <span className="text-amber-300 font-black text-sm">{activeSkill?.globalDemandLevel || 'Critical'}</span>
          </div>
          <div className="bg-[#371B54]/80 p-3 rounded-xl border border-purple-400/20">
            <span className="text-purple-300 font-medium block text-[11px]">Subnational Coverage</span>
            <span className="text-white font-black text-sm">US, AU, CA, UK States & Regions</span>
          </div>
        </div>
      </div>

      {/* 2. SKILL SEARCH & DROPDOWN PANEL */}
      <div className="bg-white p-5 rounded-2xl border border-[#E3DDE8] shadow-xs space-y-4">
        
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h2 className="text-sm font-extrabold text-slate-900 flex items-center gap-2">
            <Search className="w-4 h-4 text-[#4B286D]" /> Skill Search & Selection
          </h2>
          <span className="text-xs text-slate-500 font-medium">
            Select or search from {SKILLS_DATA.length} specialized skill sets
          </span>
        </div>

        {/* Skill Keyword Search Input & Button */}
        <div className="flex flex-col sm:flex-row items-center gap-2">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={skillSearchQuery}
              onChange={(e) => setSkillSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleExecuteSkillSearch();
              }}
              placeholder="Search any skill across engineering, healthcare, finance, legal, aviation, energy, trades..."
              className="w-full bg-[#F8F6FA] text-slate-900 text-xs font-semibold rounded-xl pl-10 pr-8 py-2.5 border border-[#E3DDE8] focus:outline-none focus:border-[#4B286D] focus:ring-1 focus:ring-[#4B286D] transition placeholder-slate-400"
            />
            {skillSearchQuery && (
              <button
                onClick={() => {
                  setSkillSearchQuery('');
                  setActiveSkillSearchTerm('');
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <button
            onClick={handleExecuteSkillSearch}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#4B286D] hover:bg-[#371B54] text-white font-extrabold text-xs transition shadow-xs flex items-center justify-center gap-1.5 shrink-0"
          >
            <Search className="w-3.5 h-3.5" />
            <span>Search Skill</span>
          </button>
        </div>

        {/* Specific Skill Category Chips */}
        <div className="pt-2">
          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-2">
            Specific Skill Categories:
          </span>
          <div className="flex items-center gap-1.5 overflow-x-auto custom-scrollbar pb-1">
            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-[#4B286D] text-white shadow-xs'
                    : 'bg-[#F4EFF9] text-[#4B286D] hover:bg-[#E3DDE8]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* 3. SKILL SELECTOR CARDS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {filteredSkills.map((skill) => {
          const isSelected = skill.id === activeSkill?.id;
          return (
            <div
              key={skill.id}
              onClick={() => setSelectedSkillId(skill.id)}
              className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'bg-white border-[#4B286D] ring-2 ring-[#4B286D]/20 shadow-md'
                  : 'bg-white border-[#E3DDE8] hover:border-[#4B286D]/50 hover:shadow-xs'
              }`}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-md bg-[#F4EFF9] text-[#4B286D] border border-purple-200">
                    {skill.category}
                  </span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${getDemandBadgeColor(skill.globalDemandLevel)}`}>
                    {skill.globalDemandLevel} Demand
                  </span>
                </div>

                <h3 className="text-sm font-extrabold text-slate-900 leading-snug">
                  {skill.name}
                </h3>

                <p className="text-xs text-slate-600 line-clamp-2 font-medium">
                  {skill.description}
                </p>
              </div>

              <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-semibold">
                <span>{skill.keyFrameworks.slice(0, 3).join(' • ')}</span>
                <span className="text-[#4B286D] font-bold">Inspect 197 Countries &rarr;</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* 4. COUNTRY & TALENT METRICS SEARCH FILTER BAR */}
      <div className="bg-[#F8F6FA] p-5 rounded-2xl border border-[#E3DDE8] space-y-4 shadow-xs">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-purple-200/60 pb-3">
          <div>
            <h2 className="text-sm font-extrabold text-slate-900 flex items-center gap-2">
              <Globe className="w-4 h-4 text-[#4B286D]" /> Country Talent Search & Metric Filtering
            </h2>
            <p className="text-xs text-slate-600 font-medium">
              Search by country name, region, or filter by minimum talent pool headcount (number of people possessing {activeSkill?.name})
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-black px-2.5 py-1 rounded-lg bg-[#4B286D] text-[#66CC00]">
              Showing {filteredCountries.length} / 197 Countries
            </span>
            {(appliedCountrySearchTerm || appliedMinTalentPool > 0 || selectedRegionFilter !== 'All') && (
              <button
                onClick={handleResetCountryFilters}
                className="text-xs text-rose-700 hover:text-rose-900 font-bold underline"
              >
                Reset Filters
              </button>
            )}
          </div>
        </div>

        {/* Search Inputs & Filter Controls */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-end">
          
          {/* Country Search Term Input */}
          <div className="md:col-span-4 space-y-1">
            <label className="text-[11px] font-bold text-slate-700 flex items-center gap-1">
              <Search className="w-3 h-3 text-[#4B286D]" /> Country Name / Hiring Hub:
            </label>
            <input
              type="text"
              value={countrySearchInput}
              onChange={(e) => setCountrySearchInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleExecuteCountrySearch();
              }}
              placeholder="Search country (e.g., Japan, Germany, Brazil)..."
              className="w-full bg-white text-slate-900 text-xs font-semibold rounded-xl px-3 py-2 border border-[#E3DDE8] focus:outline-none focus:border-[#4B286D]"
            />
          </div>

          {/* Min Talent Pool Headcount Input */}
          <div className="md:col-span-3 space-y-1">
            <label className="text-[11px] font-bold text-slate-700 flex items-center gap-1">
              <Users className="w-3 h-3 text-[#4B286D]" /> Min Talent Pool Size (People):
            </label>
            <input
              type="number"
              value={minTalentPoolInput}
              onChange={(e) => setMinTalentPoolInput(e.target.value === '' ? '' : parseInt(e.target.value, 10))}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleExecuteCountrySearch();
              }}
              placeholder="Min headcount e.g. 50000"
              className="w-full bg-white text-slate-900 text-xs font-semibold rounded-xl px-3 py-2 border border-[#E3DDE8] focus:outline-none focus:border-[#4B286D]"
            />
          </div>

          {/* Region Filter Dropdown */}
          <div className="md:col-span-3 space-y-1">
            <label className="text-[11px] font-bold text-slate-700 flex items-center gap-1">
              <Compass className="w-3 h-3 text-[#4B286D]" /> UN Region:
            </label>
            <select
              value={selectedRegionFilter}
              onChange={(e) => setSelectedRegionFilter(e.target.value as Region | 'All')}
              className="w-full bg-white text-slate-900 text-xs font-bold rounded-xl px-3 py-2 border border-[#E3DDE8] focus:outline-none focus:border-[#4B286D]"
            >
              <option value="All">All Regions (197 Countries)</option>
              <option value="Americas">Americas</option>
              <option value="Europe">Europe</option>
              <option value="Asia">Asia</option>
              <option value="Oceania">Oceania</option>
              <option value="Africa">Africa</option>
            </select>
          </div>

          {/* Action Button: Search Countries */}
          <div className="md:col-span-2">
            <button
              onClick={handleExecuteCountrySearch}
              className="w-full py-2 px-3 rounded-xl bg-[#4B286D] hover:bg-[#371B54] text-white font-extrabold text-xs transition shadow-xs flex items-center justify-center gap-1.5"
            >
              <Filter className="w-3.5 h-3.5" />
              <span>Search Countries</span>
            </button>
          </div>

        </div>

        {/* Quick Headcount Presets */}
        <div className="flex items-center gap-2 pt-1 flex-wrap">
          <span className="text-[11px] font-bold text-slate-600">Quick Pool Presets:</span>
          {[
            { label: 'All Sizes', value: 0 },
            { label: '10K+ People', value: 10000 },
            { label: '50K+ People', value: 50000 },
            { label: '100K+ People', value: 100000 },
            { label: '500K+ People', value: 500000 },
            { label: '1M+ People', value: 1000000 },
          ].map((preset) => (
            <button
              key={preset.label}
              onClick={() => {
                setMinTalentPoolInput(preset.value === 0 ? '' : preset.value);
                setAppliedMinTalentPool(preset.value);
              }}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold transition border ${
                appliedMinTalentPool === preset.value
                  ? 'bg-[#4B286D] text-white border-[#4B286D]'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              {preset.label}
            </button>
          ))}
        </div>

      </div>

      {/* 5. ACTIVE SKILL SOURCING PANEL & COUNTRY GRID */}
      {activeSkill && (
        <div className="bg-white rounded-2xl border border-[#E3DDE8] shadow-sm p-5 space-y-6">
          
          {/* Active Skill Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-black uppercase px-2.5 py-0.5 rounded-md bg-[#4B286D] text-white">
                  {activeSkill.category}
                </span>
                <h2 className="text-xl font-extrabold text-slate-900">{activeSkill.name}</h2>
              </div>
              <p className="text-xs text-slate-600 mt-1 font-medium">{activeSkill.description}</p>
            </div>

            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="font-bold text-slate-600">Common Job Titles:</span>
              {activeSkill.commonJobTitles.slice(0, 3).map((title) => (
                <span key={title} className="px-2 py-0.5 rounded-lg bg-slate-100 text-slate-800 font-semibold border border-slate-200">
                  {title}
                </span>
              ))}
            </div>
          </div>

          {/* Key Frameworks Tags */}
          <div className="flex items-center gap-2 flex-wrap text-xs">
            <span className="font-bold text-slate-700 flex items-center gap-1">
              <Layers className="w-3.5 h-3.5 text-[#4B286D]" /> Primary Technologies & Tools:
            </span>
            {activeSkill.keyFrameworks.map((fw) => (
              <span key={fw} className="px-2.5 py-0.5 rounded-full bg-[#F4EFF9] text-[#4B286D] font-bold border border-purple-200 text-[11px]">
                {fw}
              </span>
            ))}
          </div>

          {/* COUNTRY CARDS GRID (Showing All 197 UN Countries) */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-extrabold text-slate-900 flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#4B286D]" /> Country Sourcing & Talent Headcount Breakdown ({filteredCountries.length} Countries)
              </h3>
            </div>

            {filteredCountries.length === 0 ? (
              <div className="p-8 text-center text-xs text-slate-500 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                <p className="font-bold text-slate-700">No countries match your search filters.</p>
                <button
                  onClick={handleResetCountryFilters}
                  className="px-3 py-1.5 rounded-xl bg-[#4B286D] text-white font-bold text-xs"
                >
                  Reset Country Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredCountries.map((c) => {
                  const hasStateBreakdown = !!(c.usStateBreakdown || c.auStateBreakdown || c.caProvinceBreakdown || c.ukNationBreakdown);
                  const isExpanded = expandedStatesCountry === c.countryCode;

                  return (
                    <div
                      key={c.countryCode}
                      className={`p-4 rounded-2xl border transition flex flex-col justify-between ${
                        hasStateBreakdown
                          ? 'bg-[#FDFCFE] border-purple-300 shadow-xs'
                          : 'bg-white border-slate-200'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <span className="text-2xl">{c.flag}</span>
                            <div>
                              <h4 className="font-extrabold text-sm text-slate-900 leading-none">{c.countryName}</h4>
                              <span className="text-[10px] text-slate-500 font-medium">{c.region} Region</span>
                            </div>
                          </div>
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${getDemandBadgeColor(c.demandLevel)}`}>
                            {c.demandLevel}
                          </span>
                        </div>

                        <div className="space-y-2 text-xs">
                          <div className="flex items-center justify-between py-1 border-b border-slate-100">
                            <span className="text-slate-500 font-medium flex items-center gap-1">
                              <Users className="w-3 h-3 text-[#4B286D]" /> Talent Pool Size:
                            </span>
                            <span className="font-black text-[#4B286D] text-sm">{c.totalTalentPoolFormatted}</span>
                          </div>

                          <div className="flex items-center justify-between py-1 border-b border-slate-100">
                            <span className="text-slate-500 font-medium">Average Salary Range:</span>
                            <span className="font-bold text-emerald-700">{c.averageSalaryUsd}</span>
                          </div>

                          <div className="flex items-center justify-between py-1 border-b border-slate-100">
                            <span className="text-slate-500 font-medium">Remote Availability:</span>
                            <span className="font-bold text-indigo-700">{c.remoteAvailabilityPct}%</span>
                          </div>

                          <div className="flex items-center justify-between py-1 border-b border-slate-100">
                            <span className="text-slate-500 font-medium">Sourcing Complexity:</span>
                            <span className={`text-[10px] font-bold px-1.5 py-0.2 rounded border ${getComplexityBadgeColor(c.sourcingComplexity)}`}>
                              {c.sourcingComplexity}
                            </span>
                          </div>

                          <div className="pt-1">
                            <span className="text-slate-500 font-medium block mb-1">Key Hiring Hubs:</span>
                            <div className="flex flex-wrap gap-1">
                              {c.keyHiringHubs.map((hub) => (
                                <span key={hub} className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                                  {hub}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* State breakdown button if available */}
                      {hasStateBreakdown && (
                        <div className="pt-3 border-t border-purple-200 mt-3">
                          <button
                            onClick={() => setExpandedStatesCountry(isExpanded ? null : c.countryCode)}
                            className="w-full py-2 px-3 rounded-xl bg-[#4B286D] hover:bg-[#371B54] text-white font-bold text-xs transition flex items-center justify-between shadow-xs"
                          >
                            <span className="flex items-center gap-1.5">
                              <MapPin className="w-3.5 h-3.5 text-[#66CC00]" />
                              <span>View {c.countryName} State / Province Breakdown</span>
                            </span>
                            {isExpanded ? <ChevronUp className="w-4 h-4 text-[#66CC00]" /> : <ChevronDown className="w-4 h-4 text-[#66CC00]" />}
                          </button>
                        </div>
                      )}

                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* 6. SUBNATIONAL STATE / PROVINCE BREAKDOWN SECTION (US, AU, CA, UK) */}
          {expandedStatesCountry && (
            <div className="mt-8 pt-6 border-t-2 border-[#4B286D]/20 space-y-4">
              
              {/* State Header Title */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#F4EFF9] p-4 rounded-2xl border border-purple-200">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#4B286D] text-[#66CC00]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-slate-900">
                      Subnational Breakdown: {expandedStatesCountry === 'US' ? 'United States (50 States, DC & PR)' : expandedStatesCountry === 'AU' ? 'Australia (8 States & Territories)' : expandedStatesCountry === 'CA' ? 'Canada (13 Provinces & Territories)' : 'United Kingdom (8 Nations & Regions)'}
                    </h3>
                    <p className="text-xs text-slate-600 font-medium">
                      Detailed state-by-state talent pool headcount, salary floors, remote flexibility, and primary tech hubs for {activeSkill.name}.
                    </p>
                  </div>
                </div>

                {/* State Quick Switch Chips */}
                <div className="flex items-center gap-1.5 shrink-0">
                  {['US', 'AU', 'CA', 'GB'].map((cc) => (
                    <button
                      key={cc}
                      onClick={() => setExpandedStatesCountry(cc)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                        expandedStatesCountry === cc
                          ? 'bg-[#4B286D] text-white shadow-xs'
                          : 'bg-white text-[#4B286D] border border-purple-200 hover:bg-purple-100'
                      }`}
                    >
                      {cc === 'US' ? '🇺🇸 US States' : cc === 'AU' ? '🇦🇺 AU States' : cc === 'CA' ? '🇨🇦 CA Prov' : '🇬🇧 UK Regions'}
                    </button>
                  ))}
                </div>
              </div>

              {/* State Search Filter Input */}
              <div className="relative max-w-sm">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={stateSearchQuery}
                  onChange={(e) => setStateSearchQuery(e.target.value)}
                  placeholder="Filter state by name, code, or hub (e.g. California, NSW, Ontario)..."
                  className="w-full bg-slate-50 text-slate-900 text-xs font-semibold rounded-xl pl-9 pr-7 py-2 border border-slate-200 focus:outline-none focus:border-[#4B286D]"
                />
              </div>

              {/* STATES DATA GRID */}
              {(() => {
                const countryObj = activeSkill.countriesData.find((c) => c.countryCode === expandedStatesCountry);
                const statesList: StateSkillBreakdown[] =
                  expandedStatesCountry === 'US'
                    ? countryObj?.usStateBreakdown || []
                    : expandedStatesCountry === 'AU'
                    ? countryObj?.auStateBreakdown || []
                    : expandedStatesCountry === 'CA'
                    ? countryObj?.caProvinceBreakdown || []
                    : countryObj?.ukNationBreakdown || [];

                const filteredStates = statesList.filter(
                  (st) =>
                    st.stateName.toLowerCase().includes(stateSearchQuery.toLowerCase()) ||
                    st.stateCode.toLowerCase().includes(stateSearchQuery.toLowerCase()) ||
                    st.capitalOrHub.toLowerCase().includes(stateSearchQuery.toLowerCase()) ||
                    st.keyHiringHubs.some((h) => h.toLowerCase().includes(stateSearchQuery.toLowerCase()))
                );

                if (filteredStates.length === 0) {
                  return (
                    <div className="p-8 text-center text-xs text-slate-500 bg-slate-50 rounded-2xl border border-slate-200">
                      No matching state or region found for "{stateSearchQuery}". Try clearing your search.
                    </div>
                  );
                }

                return (
                  <div className="space-y-4">
                    <div className="text-xs text-slate-600 font-semibold">
                      Showing {filteredStates.length} states / territories for {expandedStatesCountry}:
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {filteredStates.map((st) => {
                        const isCompared = selectedStatesToCompare.some((s) => s.stateCode === st.stateCode);

                        return (
                          <div
                            key={st.stateCode}
                            className={`p-3.5 rounded-2xl border transition relative ${
                              isCompared ? 'bg-purple-50 border-purple-400 shadow-xs' : 'bg-slate-50 border-slate-200 hover:border-purple-300'
                            }`}
                          >
                            <div className="flex items-center justify-between mb-2">
                              <div>
                                <span className="text-[10px] font-black uppercase px-1.5 py-0.2 rounded bg-purple-100 text-[#4B286D] mr-1.5">
                                  {st.stateCode}
                                </span>
                                <span className="font-extrabold text-sm text-slate-900">{st.stateName}</span>
                              </div>

                              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${getDemandBadgeColor(st.demandLevel)}`}>
                                {st.demandLevel}
                              </span>
                            </div>

                            <p className="text-[11px] text-slate-500 font-medium mb-3 flex items-center gap-1">
                              <Building2 className="w-3 h-3 text-[#4B286D]" /> {st.capitalOrHub}
                            </p>

                            <div className="space-y-1.5 text-xs">
                              <div className="flex items-center justify-between py-1 border-b border-slate-200/60">
                                <span className="text-slate-500">Talent Pool</span>
                                <span className="font-extrabold text-slate-900">{st.estimatedTalentPoolFormatted}</span>
                              </div>

                              <div className="flex items-center justify-between py-1 border-b border-slate-200/60">
                                <span className="text-slate-500">Salary Range</span>
                                <span className="font-bold text-emerald-700">{st.averageSalaryUsd}</span>
                              </div>

                              <div className="flex items-center justify-between py-1 border-b border-slate-200/60">
                                <span className="text-slate-500">Remote Availability</span>
                                <span className="font-bold text-indigo-700">{st.remoteAvailabilityPct}%</span>
                              </div>

                              <div className="pt-2">
                                <span className="text-[11px] text-slate-500 font-medium block mb-1">Key Cities / Hubs:</span>
                                <div className="flex flex-wrap gap-1">
                                  {st.keyHiringHubs.map((hub) => (
                                    <span key={hub} className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-white text-slate-800 border border-slate-200">
                                      {hub}
                                    </span>
                                  ))}
                                </div>
                              </div>

                              {/* Add to comparison matrix button */}
                              <div className="pt-3">
                                <button
                                  onClick={() => {
                                    if (isCompared) {
                                      setSelectedStatesToCompare(selectedStatesToCompare.filter((s) => s.stateCode !== st.stateCode));
                                    } else {
                                      if (selectedStatesToCompare.length >= 4) {
                                        alert('You can compare up to 4 states side-by-side.');
                                        return;
                                      }
                                      setSelectedStatesToCompare([...selectedStatesToCompare, st]);
                                    }
                                  }}
                                  className={`w-full py-1.5 px-2 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 ${
                                    isCompared
                                      ? 'bg-purple-900 text-white'
                                      : 'bg-white text-[#4B286D] border border-purple-200 hover:bg-purple-50'
                                  }`}
                                >
                                  <Scale className="w-3.5 h-3.5" />
                                  <span>{isCompared ? 'Remove from Compare' : '+ Compare State'}</span>
                                </button>
                              </div>

                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })()}

            </div>
          )}

          {/* 7. SIDE-BY-SIDE STATE COMPARISON MATRIX DRAWER */}
          {selectedStatesToCompare.length > 0 && (
            <div className="p-5 rounded-2xl bg-[#4B286D] text-white space-y-4 border border-[#371B54] shadow-lg">
              <div className="flex items-center justify-between border-b border-purple-400/30 pb-3">
                <div className="flex items-center gap-2">
                  <Scale className="w-5 h-5 text-[#66CC00]" />
                  <h3 className="font-extrabold text-base text-white">
                    State Sourcing Comparison Matrix ({selectedStatesToCompare.length} Selected)
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedStatesToCompare([])}
                  className="text-xs text-purple-200 hover:text-white bg-purple-900/80 px-2.5 py-1 rounded-lg border border-purple-400/30 font-bold"
                >
                  Clear All
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left text-purple-100 border-collapse">
                  <thead>
                    <tr className="border-b border-purple-400/30 text-[#66CC00] font-black uppercase text-[10px]">
                      <th className="py-2 px-3">Metric</th>
                      {selectedStatesToCompare.map((st) => (
                        <th key={st.stateCode} className="py-2 px-3">
                          {st.stateName} ({st.stateCode})
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-purple-500/20">
                    <tr>
                      <td className="py-2.5 px-3 font-bold text-white">Primary Hub</td>
                      {selectedStatesToCompare.map((st) => (
                        <td key={st.stateCode} className="py-2.5 px-3 font-medium">{st.capitalOrHub}</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 font-bold text-white">Talent Pool Size</td>
                      {selectedStatesToCompare.map((st) => (
                        <td key={st.stateCode} className="py-2.5 px-3 font-extrabold text-[#66CC00]">{st.estimatedTalentPoolFormatted}</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 font-bold text-white">Demand Level</td>
                      {selectedStatesToCompare.map((st) => (
                        <td key={st.stateCode} className="py-2.5 px-3 font-bold text-amber-300">{st.demandLevel}</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 font-bold text-white">Salary Range USD</td>
                      {selectedStatesToCompare.map((st) => (
                        <td key={st.stateCode} className="py-2.5 px-3 font-semibold">{st.averageSalaryUsd}</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 font-bold text-white">Remote Availability</td>
                      {selectedStatesToCompare.map((st) => (
                        <td key={st.stateCode} className="py-2.5 px-3 font-semibold">{st.remoteAvailabilityPct}%</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="py-2.5 px-3 font-bold text-white">Sourcing Difficulty</td>
                      {selectedStatesToCompare.map((st) => (
                        <td key={st.stateCode} className="py-2.5 px-3 font-semibold">{st.sourcingComplexity}</td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

        </div>
      )}

    </div>
  );
};
