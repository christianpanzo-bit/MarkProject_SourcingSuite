import React, { useState, useMemo } from 'react';
import {
  ROBOTICS_DATASET,
  US_STATES_ROBOTICS,
  formatNumber,
} from '../data/roboticsData';
import { CountryRoboticsData, RoboticsInstitution, InstitutionType } from '../types';
import {
  Bot,
  Search,
  Building2,
  GraduationCap,
  Landmark,
  Briefcase,
  TrendingUp,
  Cpu,
  Globe,
  Filter,
  Download,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Award,
  Sparkles,
  BarChart3,
  Layers,
  MapPin,
  ShieldCheck,
  Zap,
  Info,
  GitCompare,
  X,
  Factory,
  SlidersHorizontal,
} from 'lucide-react';

export const RoboticsExplorer: React.FC = () => {
  // Selected Country Code
  const [selectedCountryCode, setSelectedCountryCode] = useState<string>('US');

  // Active View Tab: 'country_profile' | 'institutions_directory' | 'rankings' | 'compare'
  const [viewTab, setViewTab] = useState<'country_profile' | 'institutions_directory' | 'rankings' | 'compare'>('country_profile');

  // Search queries
  const [countrySearchQuery, setCountrySearchQuery] = useState<string>('');
  const [institutionSearchQuery, setInstitutionSearchQuery] = useState<string>('');
  const [isCountrySearchFocused, setIsCountrySearchFocused] = useState<boolean>(false);
  const [highlightedCountryIndex, setHighlightedCountryIndex] = useState<number>(0);

  // Filters
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [selectedFocus, setSelectedFocus] = useState<string>('All');
  const [institutionTypeFilter, setInstitutionTypeFilter] = useState<string>('All');

  // Subnational state selection for US
  const [selectedUsState, setSelectedUsState] = useState<string>('All');

  // Comparison mode selections
  const [comparedCountryCodes, setComparedCountryCodes] = useState<string[]>(['US', 'JP', 'DE', 'KR']);

  // Expanded cards tracker
  const [expandedInstitutionIds, setExpandedInstitutionIds] = useState<Record<string, boolean>>({});

  // Active country data
  const selectedCountry = useMemo(() => {
    return ROBOTICS_DATASET.find((c) => c.countryCode === selectedCountryCode) || ROBOTICS_DATASET[0];
  }, [selectedCountryCode]);

  // Live autocomplete matches for country search when typing few letters
  const countrySuggestions = useMemo(() => {
    if (!countrySearchQuery.trim()) {
      return selectedRegion === 'All'
        ? ROBOTICS_DATASET.slice(0, 10)
        : ROBOTICS_DATASET.filter((c) => c.region === selectedRegion).slice(0, 10);
    }
    const q = countrySearchQuery.toLowerCase().trim();

    // Priority sorting:
    // 1. Exact country code match
    // 2. Country name starts with q
    // 3. Country name contains q
    // 4. Sector / specialty contains q
    const exactCode: CountryRoboticsData[] = [];
    const startsWithName: CountryRoboticsData[] = [];
    const containsName: CountryRoboticsData[] = [];
    const otherMatches: CountryRoboticsData[] = [];

    ROBOTICS_DATASET.forEach((c) => {
      if (selectedRegion !== 'All' && c.region !== selectedRegion) return;
      if (selectedFocus !== 'All' && c.manufacturingFocus !== selectedFocus) return;

      const codeLower = c.countryCode.toLowerCase();
      const nameLower = c.countryName.toLowerCase();

      if (codeLower === q) {
        exactCode.push(c);
      } else if (nameLower.startsWith(q)) {
        startsWithName.push(c);
      } else if (nameLower.includes(q)) {
        containsName.push(c);
      } else if (
        c.primarySectors.some((s) => s.toLowerCase().includes(q)) ||
        c.institutions.some((inst) => inst.name.toLowerCase().includes(q) || inst.specialties.some((sp) => sp.toLowerCase().includes(q)))
      ) {
        otherMatches.push(c);
      }
    });

    return [...exactCode, ...startsWithName, ...containsName, ...otherMatches];
  }, [countrySearchQuery, selectedRegion, selectedFocus]);

  // Filtered countries list for selector/rankings
  const filteredCountries = useMemo(() => {
    return ROBOTICS_DATASET.filter((c) => {
      if (selectedRegion !== 'All' && c.region !== selectedRegion) return false;
      if (selectedFocus !== 'All' && c.manufacturingFocus !== selectedFocus) return false;
      if (countrySearchQuery.trim()) {
        const q = countrySearchQuery.toLowerCase().trim();
        const matchesName = c.countryName.toLowerCase().includes(q);
        const matchesCode = c.countryCode.toLowerCase().includes(q);
        const matchesSector = c.primarySectors.some((s) => s.toLowerCase().includes(q));
        const matchesInst = c.institutions.some((inst) =>
          inst.name.toLowerCase().includes(q) ||
          inst.specialties.some((sp) => sp.toLowerCase().includes(q))
        );
        return matchesName || matchesCode || matchesSector || matchesInst;
      }
      return true;
    });
  }, [selectedRegion, selectedFocus, countrySearchQuery]);

  // Filtered institutions for the selected country
  const filteredCountryInstitutions = useMemo(() => {
    if (!selectedCountry) return [];
    return selectedCountry.institutions.filter((inst) => {
      if (institutionTypeFilter !== 'All' && inst.type !== institutionTypeFilter) return false;
      if (institutionSearchQuery.trim()) {
        const q = institutionSearchQuery.toLowerCase().trim();
        const matchesName = inst.name.toLowerCase().includes(q);
        const matchesCity = inst.cityOrState.toLowerCase().includes(q);
        const matchesDesc = inst.description.toLowerCase().includes(q);
        const matchesSpecialty = inst.specialties.some((s) => s.toLowerCase().includes(q));
        const matchesProjects = inst.notableProjectsOrProducts?.some((p) => p.toLowerCase().includes(q));
        return matchesName || matchesCity || matchesDesc || matchesSpecialty || matchesProjects;
      }
      return true;
    });
  }, [selectedCountry, institutionTypeFilter, institutionSearchQuery]);

  // All institutions across all countries for the Global Directory view
  const allInstitutions = useMemo(() => {
    const list: { countryName: string; countryCode: string; flag: string; institution: RoboticsInstitution }[] = [];
    ROBOTICS_DATASET.forEach((c) => {
      c.institutions.forEach((inst) => {
        list.push({
          countryName: c.countryName,
          countryCode: c.countryCode,
          flag: c.flag,
          institution: inst,
        });
      });
    });
    return list;
  }, []);

  // Filtered Global Institutions
  const filteredGlobalInstitutions = useMemo(() => {
    return allInstitutions.filter((item) => {
      if (selectedRegion !== 'All') {
        const c = ROBOTICS_DATASET.find((cnt) => cnt.countryCode === item.countryCode);
        if (c && c.region !== selectedRegion) return false;
      }
      if (institutionTypeFilter !== 'All' && item.institution.type !== institutionTypeFilter) return false;
      if (institutionSearchQuery.trim()) {
        const q = institutionSearchQuery.toLowerCase().trim();
        const matchesName = item.institution.name.toLowerCase().includes(q);
        const matchesCountry = item.countryName.toLowerCase().includes(q);
        const matchesCity = item.institution.cityOrState.toLowerCase().includes(q);
        const matchesSpecialty = item.institution.specialties.some((s) => s.toLowerCase().includes(q));
        const matchesProjects = item.institution.notableProjectsOrProducts?.some((p) => p.toLowerCase().includes(q));
        return matchesName || matchesCountry || matchesCity || matchesSpecialty || matchesProjects;
      }
      return true;
    });
  }, [allInstitutions, selectedRegion, institutionTypeFilter, institutionSearchQuery]);

  // Toggle institution expansion
  const toggleInstitutionExpand = (id: string) => {
    setExpandedInstitutionIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // CSV Export for Institutions
  const handleExportInstitutionsCSV = () => {
    const headers = [
      'Country',
      'Country Code',
      'Institution Name',
      'Type',
      'City/State',
      'Specialties',
      'Notable Projects/Products',
      'Funding/Affiliation',
      'Website',
      'Description',
    ];

    const rows = filteredGlobalInstitutions.map((i) => [
      `"${i.countryName}"`,
      `"${i.countryCode}"`,
      `"${i.institution.name.replace(/"/g, '""')}"`,
      `"${i.institution.type}"`,
      `"${i.institution.cityOrState.replace(/"/g, '""')}"`,
      `"${i.institution.specialties.join('; ')}"`,
      `"${(i.institution.notableProjectsOrProducts || []).join('; ')}"`,
      `"${(i.institution.fundingOrAffiliation || '').replace(/"/g, '""')}"`,
      `"${i.institution.websiteUrl || ''}"`,
      `"${i.institution.description.replace(/"/g, '""')}"`,
    ]);

    const csvContent = [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `robotics_institutions_directory.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  // CSV Export for Country Robotics Data
  const handleExportCountriesCSV = () => {
    const headers = [
      'Country Name',
      'Country Code',
      'Region',
      'Global Robotics Rank',
      'Robot Density (per 10k workers)',
      'Operational Robot Stock',
      'Annual Installations',
      'Innovation Index (0-100)',
      'Market Size (USD)',
      'YoY Growth Rate',
      'Manufacturing Focus',
      'Primary Sectors',
      'Institutions Count',
    ];

    const rows = filteredCountries.map((c) => [
      `"${c.countryName}"`,
      `"${c.countryCode}"`,
      `"${c.region}"`,
      c.globalRoboticsRank,
      c.robotDensityPer10kWorkers,
      c.operationalRobotStock,
      c.annualInstallations,
      c.innovationIndexScore,
      `"${c.marketSizeUsd}"`,
      `"${c.annualGrowthRatePct}%"`,
      `"${c.manufacturingFocus}"`,
      `"${c.primarySectors.join('; ')}"`,
      c.institutions.length,
    ]);

    const csvContent = [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `global_robotics_manufacturing_and_adoption_197_countries.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  // Helper badge for institution type
  const renderInstitutionTypeBadge = (type: InstitutionType) => {
    switch (type) {
      case 'University / Academic Lab':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
            <GraduationCap className="w-3.5 h-3.5" />
            University / Academic
          </span>
        );
      case 'Public Research / Government':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-full bg-purple-50 text-[#4B286D] border border-purple-200">
            <Landmark className="w-3.5 h-3.5" />
            Public / Government Lab
          </span>
        );
      case 'Private R&D / Enterprise Manufacturer':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-[#2B8000] border border-emerald-200">
            <Building2 className="w-3.5 h-3.5" />
            Private R&D / Manufacturer
          </span>
        );
    }
  };

  return (
    <div className="space-y-6">
      {/* 1. TOP STATS BAR */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        <div className="bg-white p-4 rounded-2xl border border-[#E3DDE8] shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Countries</span>
            <Globe className="w-4 h-4 text-[#4B286D]" />
          </div>
          <p className="text-xl font-black text-slate-900 mt-1">197</p>
          <p className="text-[11px] text-[#2B8000] font-semibold mt-0.5">UN Member States</p>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-[#E3DDE8] shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Active Robots</span>
            <Bot className="w-4 h-4 text-[#2B8000]" />
          </div>
          <p className="text-xl font-black text-slate-900 mt-1">4.28M</p>
          <p className="text-[11px] text-slate-600 font-semibold mt-0.5">Operational Stock</p>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-[#E3DDE8] shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Annual Installs</span>
            <Factory className="w-4 h-4 text-blue-600" />
          </div>
          <p className="text-xl font-black text-slate-900 mt-1">590K+</p>
          <p className="text-[11px] text-[#2B8000] font-semibold mt-0.5">+13.8% YoY Growth</p>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-[#E3DDE8] shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Top Density</span>
            <Zap className="w-4 h-4 text-amber-500" />
          </div>
          <p className="text-xl font-black text-slate-900 mt-1">1,012</p>
          <p className="text-[11px] text-slate-600 font-semibold mt-0.5">🇰🇷 S. Korea / 10k workers</p>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-[#E3DDE8] shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Market Size</span>
            <TrendingUp className="w-4 h-4 text-emerald-600" />
          </div>
          <p className="text-xl font-black text-slate-900 mt-1">$48.5B</p>
          <p className="text-[11px] text-[#2B8000] font-semibold mt-0.5">Hardware & Systems</p>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-[#E3DDE8] shadow-xs">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Institutions</span>
            <GraduationCap className="w-4 h-4 text-purple-600" />
          </div>
          <p className="text-xl font-black text-slate-900 mt-1">{allInstitutions.length}+</p>
          <p className="text-[11px] text-slate-600 font-semibold mt-0.5">Schools, Public & Private</p>
        </div>
      </div>

      {/* 2. NAVIGATION SUB-TABS & EXPORT BUTTONS */}
      <div className="bg-white p-3 sm:p-4 rounded-2xl border border-[#E3DDE8] shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div className="flex items-center gap-1.5 overflow-x-auto custom-scrollbar pb-1 md:pb-0">
          <button
            onClick={() => setViewTab('country_profile')}
            className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap ${
              viewTab === 'country_profile'
                ? 'bg-[#4B286D] text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Globe className="w-4 h-4 text-[#66CC00]" />
            <span>Country Profile & Institutions</span>
          </button>

          <button
            onClick={() => setViewTab('institutions_directory')}
            className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap ${
              viewTab === 'institutions_directory'
                ? 'bg-[#4B286D] text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Building2 className="w-4 h-4 text-[#66CC00]" />
            <span>Global Institutions Directory</span>
            <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-white/20 text-white font-black">
              {filteredGlobalInstitutions.length}
            </span>
          </button>

          <button
            onClick={() => setViewTab('rankings')}
            className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap ${
              viewTab === 'rankings'
                ? 'bg-[#4B286D] text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <BarChart3 className="w-4 h-4 text-[#66CC00]" />
            <span>Adoption & Density Rankings</span>
          </button>

          <button
            onClick={() => setViewTab('compare')}
            className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap ${
              viewTab === 'compare'
                ? 'bg-[#4B286D] text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <GitCompare className="w-4 h-4 text-[#66CC00]" />
            <span>Country Comparator</span>
            <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-white/20 text-white font-black">
              {comparedCountryCodes.length}
            </span>
          </button>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={handleExportInstitutionsCSV}
            className="inline-flex items-center gap-1.5 bg-[#F4EFF9] hover:bg-[#E9E0F2] text-[#4B286D] text-xs font-bold px-3 py-2 rounded-xl border border-purple-200 transition"
            title="Download full Robotics Institutions dataset (Schools, Public, Private)"
          >
            <Download className="w-3.5 h-3.5 text-[#2B8000]" />
            <span>Institutions CSV</span>
          </button>

          <button
            onClick={handleExportCountriesCSV}
            className="inline-flex items-center gap-1.5 bg-[#2B8000] hover:bg-[#216300] text-white text-xs font-bold px-3 py-2 rounded-xl shadow-xs transition"
            title="Download all 197 Country Robotics Manufacturing & Adoption Metrics"
          >
            <Download className="w-3.5 h-3.5" />
            <span>All 197 Countries CSV</span>
          </button>
        </div>
      </div>

      {/* 3. VIEW TAB 1: COUNTRY PROFILE & PARTICIPATING INSTITUTIONS */}
      {viewTab === 'country_profile' && (
        <div className="space-y-6">
          {/* Quick Country Selector Grid / Search */}
          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#E3DDE8] shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-sm font-extrabold text-slate-900 flex items-center gap-2">
                  <Globe className="w-4 h-4 text-[#4B286D]" />
                  Select Country for Robotics Intelligence & Institutions
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Explore industrial manufacturing, robot density, national policies, and all registered schools, public labs, and private companies.
                </p>
              </div>

              {/* Region Filter */}
              <div className="flex items-center gap-2">
                <Filter className="w-3.5 h-3.5 text-slate-400" />
                <select
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="text-xs font-bold bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#4B286D]"
                >
                  <option value="All">All Regions (197)</option>
                  <option value="Americas">Americas</option>
                  <option value="Europe">Europe</option>
                  <option value="Asia">Asia</option>
                  <option value="Oceania">Oceania</option>
                  <option value="Africa">Africa</option>
                </select>
              </div>
            </div>

            {/* Quick Country Pills for Global Powerhouses */}
            <div className="flex items-center gap-1.5 overflow-x-auto custom-scrollbar pb-2">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0 mr-1">
                Top Hubs:
              </span>
              {[
                { code: 'US', name: 'United States', flag: '🇺🇸' },
                { code: 'JP', name: 'Japan', flag: '🇯🇵' },
                { code: 'DE', name: 'Germany', flag: '🇩🇪' },
                { code: 'KR', name: 'South Korea', flag: '🇰🇷' },
                { code: 'CN', name: 'China', flag: '🇨🇳' },
                { code: 'CH', name: 'Switzerland', flag: '🇨🇭' },
                { code: 'DK', name: 'Denmark', flag: '🇩🇰' },
                { code: 'IT', name: 'Italy', flag: '🇮🇹' },
                { code: 'SE', name: 'Sweden', flag: '🇸🇪' },
                { code: 'SG', name: 'Singapore', flag: '🇸🇬' },
              ].map((h) => (
                <button
                  key={h.code}
                  onClick={() => setSelectedCountryCode(h.code)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition whitespace-nowrap ${
                    selectedCountryCode === h.code
                      ? 'bg-[#4B286D] text-white shadow-xs'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200'
                  }`}
                >
                  <span>{h.flag}</span>
                  <span>{h.name}</span>
                </button>
              ))}
            </div>

            {/* Country Search Bar & Dropdown with Live Instant Autocomplete */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-2 border-t border-slate-100">
              <div className="relative col-span-1 sm:col-span-2">
                <div className="relative">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Type a few letters to search any country (e.g., 'ph', 'ja', 'ger', 'swi', 'kor', 'us')..."
                    value={countrySearchQuery}
                    onChange={(e) => {
                      setCountrySearchQuery(e.target.value);
                      setIsCountrySearchFocused(true);
                      setHighlightedCountryIndex(0);
                    }}
                    onFocus={() => setIsCountrySearchFocused(true)}
                    onBlur={() => {
                      // Small delay to allow click selection
                      setTimeout(() => setIsCountrySearchFocused(false), 200);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'ArrowDown') {
                        e.preventDefault();
                        setHighlightedCountryIndex((prev) =>
                          prev < countrySuggestions.length - 1 ? prev + 1 : 0
                        );
                      } else if (e.key === 'ArrowUp') {
                        e.preventDefault();
                        setHighlightedCountryIndex((prev) =>
                          prev > 0 ? prev - 1 : countrySuggestions.length - 1
                        );
                      } else if (e.key === 'Enter') {
                        e.preventDefault();
                        if (countrySuggestions.length > 0) {
                          const target = countrySuggestions[highlightedCountryIndex] || countrySuggestions[0];
                          setSelectedCountryCode(target.countryCode);
                          setIsCountrySearchFocused(false);
                        }
                      } else if (e.key === 'Escape') {
                        setIsCountrySearchFocused(false);
                      }
                    }}
                    className="w-full pl-9.5 pr-10 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#4B286D] bg-slate-50 text-slate-900 shadow-2xs font-medium"
                  />

                  {countrySearchQuery && (
                    <button
                      onClick={() => {
                        setCountrySearchQuery('');
                        setHighlightedCountryIndex(0);
                      }}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 p-1"
                      title="Clear search"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {/* Instant Autocomplete Suggestions Floating Dropdown */}
                {isCountrySearchFocused && countrySuggestions.length > 0 && (
                  <div className="absolute left-0 right-0 top-full mt-1.5 z-50 bg-white rounded-2xl border border-purple-200 shadow-xl overflow-hidden max-h-72 overflow-y-auto custom-scrollbar animate-in fade-in zoom-in-95 duration-100">
                    <div className="p-2 bg-purple-50/70 border-b border-purple-100 flex items-center justify-between text-[11px] text-[#4B286D] font-bold">
                      <span>Matching Countries ({countrySuggestions.length})</span>
                      <span className="text-[10px] text-slate-500 font-normal">Press Enter or click to select</span>
                    </div>

                    <div className="p-1 divide-y divide-slate-50">
                      {countrySuggestions.slice(0, 12).map((c, idx) => {
                        const isHighlighted = idx === highlightedCountryIndex;
                        const isCurrentSelected = c.countryCode === selectedCountryCode;

                        return (
                          <div
                            key={`sugg-${c.countryCode}`}
                            onMouseDown={(e) => {
                              e.preventDefault(); // prevent blur before click
                              setSelectedCountryCode(c.countryCode);
                              setIsCountrySearchFocused(false);
                            }}
                            className={`flex items-center justify-between p-2.5 rounded-xl cursor-pointer transition ${
                              isHighlighted
                                ? 'bg-purple-100/80 text-purple-950'
                                : isCurrentSelected
                                ? 'bg-purple-50 text-[#4B286D]'
                                : 'hover:bg-slate-100 text-slate-800'
                            }`}
                          >
                            <div className="flex items-center gap-2.5">
                              <span className="text-xl shrink-0">{c.flag}</span>
                              <div>
                                <div className="flex items-center gap-1.5">
                                  <span className="text-xs font-black">{c.countryName}</span>
                                  <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-purple-200/60 text-[#4B286D]">
                                    {c.countryCode}
                                  </span>
                                </div>
                                <p className="text-[10px] text-slate-500 font-medium">
                                  {c.region} • {c.manufacturingFocus}
                                </p>
                              </div>
                            </div>

                            <div className="text-right shrink-0">
                              <span className="text-xs font-black text-[#2B8000] block">
                                Rank #{c.globalRoboticsRank}
                              </span>
                              <span className="text-[10px] text-slate-500 font-semibold">
                                {c.robotDensityPer10kWorkers} robots / 10k
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              <div>
                <select
                  value={selectedCountryCode}
                  onChange={(e) => setSelectedCountryCode(e.target.value)}
                  className="w-full py-2.5 px-3 text-xs font-bold rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#4B286D] bg-white text-slate-800 shadow-2xs"
                >
                  {filteredCountries.map((c) => (
                    <option key={c.countryCode} value={c.countryCode}>
                      {c.flag} {c.countryName} (Rank #{c.globalRoboticsRank} • Density: {c.robotDensityPer10kWorkers})
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* ACTIVE SELECTED COUNTRY DEEP-DIVE CARD */}
          {selectedCountry && (
            <div className="bg-white rounded-3xl border border-[#E3DDE8] shadow-sm overflow-hidden">
              {/* Header Banner */}
              <div className="bg-gradient-to-r from-[#4B286D] via-[#371B54] to-[#200D36] text-white p-5 sm:p-7">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <span className="text-4xl sm:text-5xl shrink-0 drop-shadow-md">{selectedCountry.flag}</span>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                          {selectedCountry.countryName}
                        </h2>
                        <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-white/15 text-purple-200 border border-white/20">
                          {selectedCountry.region} • {selectedCountry.subregion}
                        </span>
                        <span className="text-xs font-extrabold px-2.5 py-0.5 rounded-full bg-[#66CC00] text-slate-950">
                          Global Rank #{selectedCountry.globalRoboticsRank}
                        </span>
                      </div>
                      <p className="text-xs text-purple-200 font-medium mt-1">
                        Manufacturing Classification:{' '}
                        <span className="font-bold text-white bg-white/10 px-2 py-0.5 rounded-md">
                          {selectedCountry.manufacturingFocus}
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-start md:self-auto">
                    <button
                      onClick={() => {
                        if (!comparedCountryCodes.includes(selectedCountry.countryCode) && comparedCountryCodes.length < 4) {
                          setComparedCountryCodes([...comparedCountryCodes, selectedCountry.countryCode]);
                          setViewTab('compare');
                        }
                      }}
                      className="inline-flex items-center gap-1.5 bg-[#66CC00] hover:bg-[#52A300] text-slate-950 text-xs font-extrabold px-3.5 py-2 rounded-xl transition shadow-xs"
                    >
                      <GitCompare className="w-4 h-4" />
                      <span>Compare Country</span>
                    </button>
                  </div>
                </div>

                {/* Country Key Robotics Metrics Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mt-6 pt-5 border-t border-purple-400/20">
                  <div className="bg-white/10 backdrop-blur-xs p-3 rounded-2xl border border-white/10">
                    <span className="text-[10px] font-bold text-purple-200 uppercase">Robot Density</span>
                    <p className="text-lg font-black text-white mt-0.5">
                      {selectedCountry.robotDensityPer10kWorkers}
                    </p>
                    <span className="text-[10px] text-[#66CC00] font-semibold">per 10k employees</span>
                  </div>

                  <div className="bg-white/10 backdrop-blur-xs p-3 rounded-2xl border border-white/10">
                    <span className="text-[10px] font-bold text-purple-200 uppercase">Active Stock</span>
                    <p className="text-lg font-black text-white mt-0.5">
                      {selectedCountry.operationalRobotStockFormatted}
                    </p>
                    <span className="text-[10px] text-purple-300 font-semibold">operational units</span>
                  </div>

                  <div className="bg-white/10 backdrop-blur-xs p-3 rounded-2xl border border-white/10">
                    <span className="text-[10px] font-bold text-purple-200 uppercase">Annual Installs</span>
                    <p className="text-lg font-black text-white mt-0.5">
                      {selectedCountry.annualInstallationsFormatted}
                    </p>
                    <span className="text-[10px] text-[#66CC00] font-semibold">units / year</span>
                  </div>

                  <div className="bg-white/10 backdrop-blur-xs p-3 rounded-2xl border border-white/10">
                    <span className="text-[10px] font-bold text-purple-200 uppercase">Innovation Score</span>
                    <p className="text-lg font-black text-white mt-0.5">
                      {selectedCountry.innovationIndexScore} / 100
                    </p>
                    <span className="text-[10px] text-amber-300 font-semibold">R&D Index</span>
                  </div>

                  <div className="bg-white/10 backdrop-blur-xs p-3 rounded-2xl border border-white/10">
                    <span className="text-[10px] font-bold text-purple-200 uppercase">Market Size</span>
                    <p className="text-lg font-black text-white mt-0.5">
                      {selectedCountry.marketSizeUsd}
                    </p>
                    <span className="text-[10px] text-purple-300 font-semibold">annual revenue</span>
                  </div>

                  <div className="bg-white/10 backdrop-blur-xs p-3 rounded-2xl border border-white/10">
                    <span className="text-[10px] font-bold text-purple-200 uppercase">YoY Growth</span>
                    <p className="text-lg font-black text-[#66CC00] mt-0.5">
                      +{selectedCountry.annualGrowthRatePct}%
                    </p>
                    <span className="text-[10px] text-purple-300 font-semibold">compound rate</span>
                  </div>
                </div>
              </div>

              {/* Country Body Details */}
              <div className="p-5 sm:p-7 space-y-6">
                {/* 1. Manufacturing Application Sectors & National Policies */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="bg-[#F8F6FA] p-4.5 rounded-2xl border border-[#E3DDE8] space-y-2.5">
                    <div className="flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-[#4B286D]" />
                      <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
                        Primary Robotics Application Sectors
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {selectedCountry.primarySectors.map((sector, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-xl bg-white text-slate-800 border border-slate-200 shadow-2xs"
                        >
                          <CheckCircle2 className="w-3 h-3 text-[#2B8000]" />
                          {sector}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-[#F8F6FA] p-4.5 rounded-2xl border border-[#E3DDE8] space-y-2.5">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#2B8000]" />
                      <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
                        Key Strategic Policies & National Initiatives
                      </h4>
                    </div>
                    <ul className="space-y-1.5 pt-1">
                      {selectedCountry.keyStrengthsAndPolicies.map((pol, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#2B8000] shrink-0 mt-1.5" />
                          <span>{pol}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* 2. Subnational US States Drilldown (If United States is selected) */}
                {selectedCountry.countryCode === 'US' && selectedCountry.subnationalBreakdown && (
                  <div className="bg-gradient-to-br from-purple-50/50 to-indigo-50/30 p-5 rounded-2xl border border-purple-200 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-purple-100 pb-3">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-[#4B286D]" />
                        <div>
                          <h4 className="text-sm font-black text-slate-900">
                            United States Subnational Robotics Clusters & State Ecosystems
                          </h4>
                          <p className="text-xs text-slate-600">
                            Detailed breakdown of state corridors, cluster density ratings, and local institutions.
                          </p>
                        </div>
                      </div>

                      {/* State Filter Buttons */}
                      <div className="flex items-center gap-1 overflow-x-auto custom-scrollbar">
                        <button
                          onClick={() => setSelectedUsState('All')}
                          className={`px-3 py-1 rounded-xl text-xs font-bold transition whitespace-nowrap ${
                            selectedUsState === 'All'
                              ? 'bg-[#4B286D] text-white'
                              : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                          }`}
                        >
                          All States
                        </button>
                        {selectedCountry.subnationalBreakdown.map((st) => (
                          <button
                            key={st.stateCode}
                            onClick={() => setSelectedUsState(st.stateCode)}
                            className={`px-3 py-1 rounded-xl text-xs font-bold transition whitespace-nowrap ${
                              selectedUsState === st.stateCode
                                ? 'bg-[#4B286D] text-white'
                                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                            }`}
                          >
                            {st.stateName}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* State Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {selectedCountry.subnationalBreakdown
                        .filter((st) => selectedUsState === 'All' || st.stateCode === selectedUsState)
                        .map((st) => (
                          <div
                            key={st.stateCode}
                            className="bg-white p-4 rounded-2xl border border-purple-100 shadow-xs space-y-2.5"
                          >
                            <div className="flex items-start justify-between">
                              <div>
                                <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-purple-100 text-[#4B286D]">
                                  {st.stateCode}
                                </span>
                                <h5 className="text-sm font-extrabold text-slate-900 mt-1">{st.stateName}</h5>
                                <p className="text-[11px] font-semibold text-purple-700">{st.hubName}</p>
                              </div>
                              <div className="text-right">
                                <span className="text-[10px] text-slate-400 font-bold block">Cluster Density</span>
                                <span className="text-sm font-black text-[#2B8000]">{st.roboticsDensityScore}/100</span>
                              </div>
                            </div>

                            <div className="flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-slate-100 font-medium">
                              <span>~{st.estimatedRoboticsCompanies} Robotics Cos</span>
                              <span>{st.institutions.length} Featured Labs</span>
                            </div>

                            <div className="flex flex-wrap gap-1 pt-1">
                              {st.keySpecializations.map((sp, idx) => (
                                <span
                                  key={idx}
                                  className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700"
                                >
                                  {sp}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                )}

                {/* 3. PARTICIPATING INSTITUTIONS DIRECTORY PER COUNTRY (Schools, Public, Private) */}
                <div className="space-y-4 pt-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-3">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-[#4B286D]" />
                      <div>
                        <h3 className="text-base font-extrabold text-slate-900">
                          Participating Robotics Institutions in {selectedCountry.countryName}
                        </h3>
                        <p className="text-xs text-slate-500">
                          Directory of universities, academic laboratories, public research centers, and commercial R&D manufacturers.
                        </p>
                      </div>
                    </div>

                    {/* Filter by Type & Search Bar */}
                    <div className="flex flex-wrap items-center gap-2">
                      <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
                        {(['All', 'University / Academic Lab', 'Public Research / Government', 'Private R&D / Enterprise Manufacturer'] as const).map((t) => (
                          <button
                            key={t}
                            onClick={() => setInstitutionTypeFilter(t)}
                            className={`px-2.5 py-1 rounded-lg text-xs font-bold transition ${
                              institutionTypeFilter === t
                                ? 'bg-white text-[#4B286D] shadow-xs'
                                : 'text-slate-600 hover:text-slate-900'
                            }`}
                          >
                            {t === 'All' ? 'All Types' : t.split(' ')[0]}
                          </button>
                        ))}
                      </div>

                      <div className="relative">
                        <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          placeholder="Filter institutions..."
                          value={institutionSearchQuery}
                          onChange={(e) => setInstitutionSearchQuery(e.target.value)}
                          className="pl-8 pr-3 py-1.5 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-[#4B286D]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Institutions List Grid */}
                  {filteredCountryInstitutions.length === 0 ? (
                    <div className="bg-slate-50 p-8 rounded-2xl text-center border border-slate-200 space-y-2">
                      <Bot className="w-8 h-8 text-slate-400 mx-auto" />
                      <p className="text-xs font-bold text-slate-700">No institutions matched your filter query.</p>
                      <p className="text-xs text-slate-500">Try clearing your search term or switching institution types.</p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {filteredCountryInstitutions.map((inst) => {
                        const isExpanded = expandedInstitutionIds[inst.id];
                        return (
                          <div
                            key={inst.id}
                            className="bg-[#FDFCFE] p-4.5 rounded-2xl border border-[#E3DDE8] hover:border-purple-300 transition-all shadow-2xs space-y-3 flex flex-col justify-between"
                          >
                            <div className="space-y-2">
                              <div className="flex items-start justify-between gap-2">
                                {renderInstitutionTypeBadge(inst.type)}
                                <span className="text-[11px] font-semibold text-slate-500 flex items-center gap-1">
                                  <MapPin className="w-3 h-3 text-slate-400" />
                                  {inst.cityOrState}
                                </span>
                              </div>

                              <h4 className="text-sm font-extrabold text-slate-900 leading-snug">
                                {inst.name}
                              </h4>

                              <p className="text-xs text-slate-600 leading-relaxed">
                                {inst.description}
                              </p>
                            </div>

                            <div className="space-y-2.5 pt-2 border-t border-slate-100">
                              {/* Specialties Tags */}
                              <div>
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                                  Specialties & Research Domains:
                                </span>
                                <div className="flex flex-wrap gap-1">
                                  {inst.specialties.map((sp, idx) => (
                                    <span
                                      key={idx}
                                      className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-purple-50 text-[#4B286D] border border-purple-100"
                                    >
                                      {sp}
                                    </span>
                                  ))}
                                </div>
                              </div>

                              {/* Notable Projects / Products if any */}
                              {inst.notableProjectsOrProducts && inst.notableProjectsOrProducts.length > 0 && (
                                <div className="bg-white p-2.5 rounded-xl border border-slate-100 space-y-1">
                                  <span className="text-[10px] font-bold text-[#2B8000] uppercase tracking-wider flex items-center gap-1">
                                    <Zap className="w-3 h-3" />
                                    Notable Inventions / Platforms:
                                  </span>
                                  <p className="text-xs font-bold text-slate-800">
                                    {inst.notableProjectsOrProducts.join(' • ')}
                                  </p>
                                </div>
                              )}

                              {/* Funding / Affiliations & Website Link */}
                              <div className="flex items-center justify-between text-xs pt-1">
                                {inst.fundingOrAffiliation && (
                                  <span className="text-[11px] text-slate-500 font-medium truncate max-w-[240px]">
                                    Affiliation: <strong className="text-slate-700">{inst.fundingOrAffiliation}</strong>
                                  </span>
                                )}

                                {inst.websiteUrl && (
                                  <a
                                    href={inst.websiteUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-1 text-xs font-bold text-[#4B286D] hover:text-[#2B8000] transition ml-auto"
                                  >
                                    <span>Website</span>
                                    <ExternalLink className="w-3 h-3" />
                                  </a>
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* 4. VIEW TAB 2: GLOBAL INSTITUTIONS DIRECTORY */}
      {viewTab === 'institutions_directory' && (
        <div className="space-y-5">
          {/* Controls Bar */}
          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#E3DDE8] shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-sm font-extrabold text-slate-900 flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#4B286D]" />
                  Global Robotics Schools, Research Labs & Enterprises Directory
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Search across {allInstitutions.length}+ institutions worldwide by domain (Humanoids, Cobots, Surgery, Vision, Drones, AMRs).
                </p>
              </div>

              <button
                onClick={handleExportInstitutionsCSV}
                className="inline-flex items-center gap-1.5 bg-[#4B286D] hover:bg-[#371B54] text-white text-xs font-bold px-3.5 py-2 rounded-xl transition shadow-xs shrink-0 self-start sm:self-auto"
              >
                <Download className="w-3.5 h-3.5 text-[#66CC00]" />
                <span>Export Filtered Directory ({filteredGlobalInstitutions.length})</span>
              </button>
            </div>

            {/* Filters Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-3 pt-2 border-t border-slate-100">
              {/* Keyword Search */}
              <div className="relative col-span-1 sm:col-span-2">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search institution name, city, specialty (e.g., Humanoid, Surgical, Cobot, AMR)..."
                  value={institutionSearchQuery}
                  onChange={(e) => setInstitutionSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#4B286D] bg-slate-50 text-slate-900"
                />
              </div>

              {/* Institution Type Filter */}
              <div>
                <select
                  value={institutionTypeFilter}
                  onChange={(e) => setInstitutionTypeFilter(e.target.value)}
                  className="w-full py-2 px-3 text-xs font-bold rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#4B286D] bg-white text-slate-800"
                >
                  <option value="All">All Types (Schools, Public, Private)</option>
                  <option value="University / Academic Lab">🎓 Universities & Academic Labs</option>
                  <option value="Public Research / Government">🏛️ Public & Government Labs</option>
                  <option value="Private R&D / Enterprise Manufacturer">🏢 Private R&D & Manufacturers</option>
                </select>
              </div>

              {/* Region Filter */}
              <div>
                <select
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="w-full py-2 px-3 text-xs font-bold rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#4B286D] bg-white text-slate-800"
                >
                  <option value="All">All Regions</option>
                  <option value="Americas">Americas</option>
                  <option value="Europe">Europe</option>
                  <option value="Asia">Asia</option>
                  <option value="Oceania">Oceania</option>
                  <option value="Africa">Africa</option>
                </select>
              </div>
            </div>
          </div>

          {/* Directory Results List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredGlobalInstitutions.map(({ countryName, countryCode, flag, institution }) => (
              <div
                key={`${countryCode}_${institution.id}`}
                className="bg-white p-4.5 rounded-2xl border border-[#E3DDE8] hover:border-purple-300 transition-all shadow-xs flex flex-col justify-between space-y-3"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => {
                        setSelectedCountryCode(countryCode);
                        setViewTab('country_profile');
                      }}
                      className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#4B286D] hover:underline"
                    >
                      <span>{flag}</span>
                      <span>{countryName}</span>
                    </button>
                    {renderInstitutionTypeBadge(institution.type)}
                  </div>

                  <h4 className="text-sm font-extrabold text-slate-900 leading-snug">
                    {institution.name}
                  </h4>

                  <p className="text-[11px] font-semibold text-slate-500 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    {institution.cityOrState}
                  </p>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {institution.description}
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <div className="flex flex-wrap gap-1">
                    {institution.specialties.map((sp, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-purple-50 text-[#4B286D]"
                      >
                        {sp}
                      </span>
                    ))}
                  </div>

                  {institution.notableProjectsOrProducts && (
                    <p className="text-[11px] text-slate-700 font-medium truncate">
                      <strong className="text-[#2B8000]">Inventions:</strong> {institution.notableProjectsOrProducts.join(', ')}
                    </p>
                  )}

                  <div className="flex items-center justify-between text-xs pt-1">
                    <button
                      onClick={() => {
                        setSelectedCountryCode(countryCode);
                        setViewTab('country_profile');
                      }}
                      className="text-[11px] font-bold text-[#4B286D] hover:text-[#2B8000] transition flex items-center gap-0.5"
                    >
                      <span>View Country Profile</span>
                      <ChevronRight className="w-3 h-3" />
                    </button>

                    {institution.websiteUrl && (
                      <a
                        href={institution.websiteUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-600 hover:text-slate-950"
                      >
                        <span>Website</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 5. VIEW TAB 3: ADOPTION & DENSITY RANKINGS TABLE */}
      {viewTab === 'rankings' && (
        <div className="bg-white rounded-3xl border border-[#E3DDE8] shadow-sm overflow-hidden space-y-4 p-5 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div>
              <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-[#4B286D]" />
                Global Robotics Adoption & Manufacturing Density Rankings
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Comparative ranking of all 197 countries by robot density per 10,000 workers, operational stock, and innovation score.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleExportCountriesCSV}
                className="inline-flex items-center gap-1 bg-[#2B8000] hover:bg-[#216300] text-white text-xs font-bold px-3 py-2 rounded-xl transition"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export Rankings CSV</span>
              </button>
            </div>
          </div>

          {/* Rankings Table */}
          <div className="overflow-x-auto custom-scrollbar">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-50 text-slate-600 font-extrabold border-b border-slate-200">
                  <th className="py-3 px-3 text-center">Rank</th>
                  <th className="py-3 px-4">Country</th>
                  <th className="py-3 px-3 text-center">Robot Density</th>
                  <th className="py-3 px-3 text-right">Operational Stock</th>
                  <th className="py-3 px-3 text-right">Annual Installs</th>
                  <th className="py-3 px-3 text-center">Innovation Index</th>
                  <th className="py-3 px-3 text-right">Market Size</th>
                  <th className="py-3 px-4">Manufacturing Focus</th>
                  <th className="py-3 px-3 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {ROBOTICS_DATASET.slice(0, 50).map((c, index) => (
                  <tr
                    key={c.countryCode}
                    className="hover:bg-purple-50/40 transition font-medium text-slate-800"
                  >
                    <td className="py-3 px-3 text-center font-black text-slate-700">
                      {index < 3 ? (
                        <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-800 inline-flex items-center justify-center font-extrabold text-xs">
                          {index + 1}
                        </span>
                      ) : (
                        `#${index + 1}`
                      )}
                    </td>

                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{c.flag}</span>
                        <div>
                          <p className="font-extrabold text-slate-900">{c.countryName}</p>
                          <p className="text-[10px] text-slate-400">{c.region}</p>
                        </div>
                      </div>
                    </td>

                    <td className="py-3 px-3 text-center">
                      <div className="inline-flex flex-col items-center">
                        <span className="font-black text-slate-900 text-sm">
                          {c.robotDensityPer10kWorkers}
                        </span>
                        <span className="text-[9px] text-slate-500 font-semibold">/10k workers</span>
                      </div>
                    </td>

                    <td className="py-3 px-3 text-right font-bold text-slate-900">
                      {c.operationalRobotStockFormatted}
                    </td>

                    <td className="py-3 px-3 text-right font-bold text-[#2B8000]">
                      {c.annualInstallationsFormatted}
                    </td>

                    <td className="py-3 px-3 text-center">
                      <span className="px-2 py-0.5 rounded-full text-xs font-black bg-purple-100 text-[#4B286D]">
                        {c.innovationIndexScore}/100
                      </span>
                    </td>

                    <td className="py-3 px-3 text-right font-bold text-slate-800">
                      {c.marketSizeUsd}
                    </td>

                    <td className="py-3 px-4">
                      <span className="text-[11px] font-semibold text-slate-700 bg-slate-100 px-2 py-1 rounded-lg">
                        {c.manufacturingFocus}
                      </span>
                    </td>

                    <td className="py-3 px-3 text-center">
                      <button
                        onClick={() => {
                          setSelectedCountryCode(c.countryCode);
                          setViewTab('country_profile');
                        }}
                        className="text-xs font-bold text-[#4B286D] hover:text-[#2B8000] transition"
                      >
                        Inspect →
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 6. VIEW TAB 4: SIDE-BY-SIDE COUNTRY COMPARATOR */}
      {viewTab === 'compare' && (
        <div className="bg-white rounded-3xl border border-[#E3DDE8] shadow-sm p-5 sm:p-6 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div>
              <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                <GitCompare className="w-5 h-5 text-[#4B286D]" />
                Side-by-Side Country Robotics Comparator (Up to 4 Countries)
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Directly compare density, installations, market size, leading sectors, and key research laboratories.
              </p>
            </div>

            {/* Quick Country Add Selector */}
            <div className="flex items-center gap-2">
              <select
                onChange={(e) => {
                  if (e.target.value && !comparedCountryCodes.includes(e.target.value) && comparedCountryCodes.length < 4) {
                    setComparedCountryCodes([...comparedCountryCodes, e.target.value]);
                  }
                }}
                value=""
                className="text-xs font-bold bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-800"
              >
                <option value="">+ Add Country to Compare...</option>
                {ROBOTICS_DATASET.filter((c) => !comparedCountryCodes.includes(c.countryCode)).map((c) => (
                  <option key={c.countryCode} value={c.countryCode}>
                    {c.flag} {c.countryName}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Comparison Matrix Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {comparedCountryCodes.map((code) => {
              const country = ROBOTICS_DATASET.find((c) => c.countryCode === code);
              if (!country) return null;

              return (
                <div
                  key={country.countryCode}
                  className="bg-[#F8F6FA] rounded-2xl border border-[#E3DDE8] p-4.5 space-y-4 relative flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-3xl">{country.flag}</span>
                        <div>
                          <h4 className="text-base font-extrabold text-slate-900 leading-tight">
                            {country.countryName}
                          </h4>
                          <span className="text-[10px] font-bold text-purple-700 bg-purple-100 px-2 py-0.5 rounded">
                            Rank #{country.globalRoboticsRank}
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={() => setComparedCountryCodes(comparedCountryCodes.filter((c) => c !== code))}
                        className="text-slate-400 hover:text-rose-500 p-1"
                        title="Remove from comparison"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Metric Bars */}
                    <div className="space-y-2 pt-2 border-t border-slate-200 text-xs">
                      <div className="flex justify-between">
                        <span className="text-slate-500 font-medium">Robot Density:</span>
                        <strong className="text-slate-900">{country.robotDensityPer10kWorkers} / 10k</strong>
                      </div>

                      <div className="flex justify-between">
                        <span className="text-slate-500 font-medium">Operational Stock:</span>
                        <strong className="text-slate-900">{country.operationalRobotStockFormatted}</strong>
                      </div>

                      <div className="flex justify-between">
                        <span className="text-slate-500 font-medium">Annual Installations:</span>
                        <strong className="text-[#2B8000]">{country.annualInstallationsFormatted}</strong>
                      </div>

                      <div className="flex justify-between">
                        <span className="text-slate-500 font-medium">Innovation Index:</span>
                        <strong className="text-[#4B286D]">{country.innovationIndexScore} / 100</strong>
                      </div>

                      <div className="flex justify-between">
                        <span className="text-slate-500 font-medium">Market Size:</span>
                        <strong className="text-slate-900">{country.marketSizeUsd}</strong>
                      </div>

                      <div className="flex justify-between">
                        <span className="text-slate-500 font-medium">Annual Growth:</span>
                        <strong className="text-[#2B8000]">+{country.annualGrowthRatePct}%</strong>
                      </div>
                    </div>

                    {/* Sectors */}
                    <div className="space-y-1 pt-2 border-t border-slate-200">
                      <span className="text-[10px] font-bold text-slate-400 uppercase">Primary Sectors:</span>
                      <div className="flex flex-wrap gap-1">
                        {country.primarySectors.slice(0, 3).map((s, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] font-semibold px-2 py-0.5 rounded bg-white text-slate-700 border border-slate-200"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Institutions */}
                    <div className="space-y-1.5 pt-2 border-t border-slate-200">
                      <span className="text-[10px] font-bold text-slate-400 uppercase">Top Institutions:</span>
                      <ul className="space-y-1 text-[11px] text-slate-700">
                        {country.institutions.slice(0, 3).map((inst) => (
                          <li key={inst.id} className="truncate font-semibold flex items-center gap-1">
                            <span className="w-1 h-1 rounded-full bg-[#4B286D]" />
                            <span>{inst.name}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedCountryCode(country.countryCode);
                      setViewTab('country_profile');
                    }}
                    className="w-full bg-[#4B286D] hover:bg-[#371B54] text-white text-xs font-bold py-2 rounded-xl transition text-center mt-3"
                  >
                    Open Deep Profile →
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
