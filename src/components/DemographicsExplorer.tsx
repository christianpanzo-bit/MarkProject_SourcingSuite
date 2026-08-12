import React, { useState, useMemo } from 'react';
import {
  DEMOGRAPHICS_DATASET,
  LocationDemographics,
  GenderDemographic,
  AgeBracketDemographic,
  EmploymentStats,
  GenderEmploymentBreakdown,
  BracketEmploymentSummary,
  OverallEmploymentSummary
} from '../data/demographicsData';
import {
  Users,
  Search,
  PieChart,
  Download,
  Filter,
  BarChart3,
  MapPin,
  Clock,
  ArrowUpDown,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Info,
  CheckCircle2,
  GitCompare,
  TrendingUp,
  Award,
  Globe,
  Briefcase,
  UserCheck,
  Layers,
  Building2,
  Check,
  FileSpreadsheet
} from 'lucide-react';

export const DemographicsExplorer: React.FC = () => {
  // Selected primary location ID (default to US national or California)
  const [selectedLocationId, setSelectedLocationId] = useState<string>('COUNTRY_US');

  // Active view tab mode: 'profile' | 'grid' | 'compare'
  const [viewTab, setViewTab] = useState<'profile' | 'grid' | 'compare'>('profile');

  // Active employment focus mode inside Profile: 'all' | 'fullTime' | 'partTime' | 'multipleJobs'
  const [employmentFocus, setEmploymentFocus] = useState<'all' | 'fullTime' | 'partTime' | 'multipleJobs'>('all');

  // Gender filter inside employment matrix: 'all' | 'Female' | 'Male' | 'Non-Binary / Unspecified'
  const [genderMatrixFilter, setGenderMatrixFilter] = useState<'all' | 'Female' | 'Male' | 'Non-Binary / Unspecified'>('all');

  // Search filter query
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Dropdown search inside profile mode
  const [dropdownSearch, setDropdownSearch] = useState<string>('');
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  // Quick Level Filter: 'all' | 'countries' | 'US' | 'CA' | 'AU' | 'UK'
  const [levelFilter, setLevelFilter] = useState<'all' | 'countries' | 'US' | 'CA' | 'AU' | 'UK'>('all');

  // Region Filter for grid
  const [regionFilter, setRegionFilter] = useState<string>('All');

  // Sort By for grid
  const [sortBy, setSortBy] = useState<
    'pop_desc' | 'pop_asc' | 'working_high' | 'ft_high' | 'pt_high' | 'mj_high' | 'age_young' | 'age_old' | 'female_high' | 'male_high' | 'name_asc'
  >('pop_desc');

  // Comparison IDs
  const [compareIds, setCompareIds] = useState<string[]>(['COUNTRY_US', 'US_STATE_CALIFORNIA', 'US_STATE_TEXAS']);

  // Get currently selected location profile
  const currentLocation = useMemo(() => {
    return DEMOGRAPHICS_DATASET.find((loc) => loc.id === selectedLocationId) || DEMOGRAPHICS_DATASET[0];
  }, [selectedLocationId]);

  // Filtered dataset for dropdown and grid
  const filteredDataset = useMemo(() => {
    return DEMOGRAPHICS_DATASET.filter((loc) => {
      // Search term
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = loc.name.toLowerCase().includes(q);
        const matchesCountry = loc.parentCountryName.toLowerCase().includes(q);
        const matchesCode = loc.countryCode.toLowerCase().includes(q);
        if (!matchesName && !matchesCountry && !matchesCode) return false;
      }

      // Region Filter
      if (regionFilter !== 'All' && loc.region !== regionFilter) {
        return false;
      }

      // Level Filter
      if (levelFilter === 'countries' && loc.isSubnational) return false;
      if (levelFilter === 'US' && loc.subnationalType !== 'US State') return false;
      if (levelFilter === 'CA' && loc.subnationalType !== 'Canadian Province') return false;
      if (levelFilter === 'AU' && loc.subnationalType !== 'Australian State') return false;
      if (levelFilter === 'UK' && loc.subnationalType !== 'UK Nation') return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'pop_desc') return b.totalPopulation - a.totalPopulation;
      if (sortBy === 'pop_asc') return a.totalPopulation - b.totalPopulation;
      if (sortBy === 'working_high') return b.overallEmployment.totalWorkingInhabitants - a.overallEmployment.totalWorkingInhabitants;
      if (sortBy === 'ft_high') return b.overallEmployment.totalFullTime - a.overallEmployment.totalFullTime;
      if (sortBy === 'pt_high') return b.overallEmployment.totalPartTime - a.overallEmployment.totalPartTime;
      if (sortBy === 'mj_high') return b.overallEmployment.totalMultipleJobs - a.overallEmployment.totalMultipleJobs;
      if (sortBy === 'age_young') return a.medianAge - b.medianAge;
      if (sortBy === 'age_old') return b.medianAge - a.medianAge;
      if (sortBy === 'female_high') {
        const fA = a.genderBreakdown.find((g) => g.gender === 'Female')?.percentage || 0;
        const fB = b.genderBreakdown.find((g) => g.gender === 'Female')?.percentage || 0;
        return fB - fA;
      }
      if (sortBy === 'male_high') {
        const mA = a.genderBreakdown.find((g) => g.gender === 'Male')?.percentage || 0;
        const mB = b.genderBreakdown.find((g) => g.gender === 'Male')?.percentage || 0;
        return mB - mA;
      }
      return a.name.localeCompare(b.name);
    });
  }, [searchQuery, regionFilter, levelFilter, sortBy]);

  // Locations for dropdown search
  const dropdownFilteredLocations = useMemo(() => {
    if (!dropdownSearch.trim()) return DEMOGRAPHICS_DATASET;
    const q = dropdownSearch.toLowerCase().trim();
    return DEMOGRAPHICS_DATASET.filter(
      (l) => l.name.toLowerCase().includes(q) || l.parentCountryName.toLowerCase().includes(q)
    );
  }, [dropdownSearch]);

  // Grouped location categories for the dropdown
  const dropdownGrouped = useMemo(() => {
    const national = dropdownFilteredLocations.filter((l) => !l.isSubnational);
    const usStates = dropdownFilteredLocations.filter((l) => l.subnationalType === 'US State');
    const caProvinces = dropdownFilteredLocations.filter((l) => l.subnationalType === 'Canadian Province');
    const auStates = dropdownFilteredLocations.filter((l) => l.subnationalType === 'Australian State');
    const ukNations = dropdownFilteredLocations.filter((l) => l.subnationalType === 'UK Nation');

    return { national, usStates, caProvinces, auStates, ukNations };
  }, [dropdownFilteredLocations]);

  // Get children subnational items if a parent country is selected
  const subnationalChildren = useMemo(() => {
    if (currentLocation.isSubnational) return [];
    return DEMOGRAPHICS_DATASET.filter(
      (l) => l.isSubnational && l.countryCode === currentLocation.countryCode
    );
  }, [currentLocation]);

  // Export CSV
  const handleExportCSV = () => {
    const headers = [
      'ID',
      'Name',
      'Country Code',
      'Parent Country',
      'Region',
      'Subnational Type',
      'Total Population',
      'Median Age',
      'Sex Ratio Index',
      'Female %',
      'Female Count',
      'Male %',
      'Male Count',
      'Non-Binary %',
      'Non-Binary Count',
      'Total Working Inhabitants',
      'Labor Force Participation Rate (%)',
      'Total Full-Time Count',
      'Total Full-Time %',
      'Total Part-Time Count',
      'Total Part-Time %',
      'Total Multiple Jobholders Count',
      'Total Multiple Jobholders %',
      // Detailed Brackets
      '15-24 Working Count',
      '15-24 Full-Time',
      '15-24 Part-Time',
      '15-24 Multiple Jobs',
      '25-34 Working Count',
      '25-34 Full-Time',
      '25-34 Part-Time',
      '25-34 Multiple Jobs',
      '35-49 Working Count',
      '35-49 Full-Time',
      '35-49 Part-Time',
      '35-49 Multiple Jobs',
      '50-64 Working Count',
      '50-64 Full-Time',
      '50-64 Part-Time',
      '50-64 Multiple Jobs',
      '65+ Working Count',
      '65+ Full-Time',
      '65+ Part-Time',
      '65+ Multiple Jobs'
    ];

    const rows = filteredDataset.map((l) => {
      const f = l.genderBreakdown.find((g) => g.gender === 'Female');
      const m = l.genderBreakdown.find((g) => g.gender === 'Male');
      const nb = l.genderBreakdown.find((g) => g.gender === 'Non-Binary / Unspecified');

      const emp = l.overallEmployment;
      const b15 = l.ageBracketBreakdown.find((a) => a.bracket === '15–24')?.employment;
      const b25 = l.ageBracketBreakdown.find((a) => a.bracket === '25–34')?.employment;
      const b35 = l.ageBracketBreakdown.find((a) => a.bracket === '35–49')?.employment;
      const b50 = l.ageBracketBreakdown.find((a) => a.bracket === '50–64')?.employment;
      const b65 = l.ageBracketBreakdown.find((a) => a.bracket === '65+')?.employment;

      return [
        `"${l.id}"`,
        `"${l.name}"`,
        `"${l.countryCode}"`,
        `"${l.parentCountryName}"`,
        `"${l.region}"`,
        `"${l.subnationalType || 'National'}"`,
        l.totalPopulation,
        l.medianAge,
        `"${l.sexRatio}"`,
        f?.percentage || 0,
        f?.count || 0,
        m?.percentage || 0,
        m?.count || 0,
        nb?.percentage || 0,
        nb?.count || 0,
        emp.totalWorkingInhabitants,
        emp.overallLaborForceParticipationRate,
        emp.totalFullTime,
        emp.totalFullTimePercentage,
        emp.totalPartTime,
        emp.totalPartTimePercentage,
        emp.totalMultipleJobs,
        emp.totalMultipleJobsPercentage,
        b15?.workingCount || 0, b15?.fullTimeCount || 0, b15?.partTimeCount || 0, b15?.multipleJobsCount || 0,
        b25?.workingCount || 0, b25?.fullTimeCount || 0, b25?.partTimeCount || 0, b25?.multipleJobsCount || 0,
        b35?.workingCount || 0, b35?.fullTimeCount || 0, b35?.partTimeCount || 0, b35?.multipleJobsCount || 0,
        b50?.workingCount || 0, b50?.fullTimeCount || 0, b50?.partTimeCount || 0, b50?.multipleJobsCount || 0,
        b65?.workingCount || 0, b65?.fullTimeCount || 0, b65?.partTimeCount || 0, b65?.multipleJobsCount || 0
      ];
    });

    const csvContent = [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `demographics_age_gender_employment_data.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-6 pb-12">
      {/* HEADER BAR & DROPDOWN SELECTOR */}
      <div className="bg-white p-4 sm:p-6 rounded-2xl border border-[#E3DDE8] shadow-xs space-y-4">
        
        {/* Top Title & Control Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-[#4B286D] text-white shadow-xs">
              <Briefcase className="w-6 h-6 text-[#66CC00]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">
                  Demographics & Employment Explorer
                </h2>
                <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-[#2B8000]/10 text-[#2B8000] border border-[#2B8000]/20 uppercase">
                  274 Territories
                </span>
              </div>
              <p className="text-xs text-slate-600 font-medium mt-0.5">
                Age Brackets, Gender Preferences & Employment Status (Full-Time, Part-Time & Multiple Jobs by Count & %)
              </p>
            </div>
          </div>

          {/* Display Mode Navigation Tabs */}
          <div className="flex items-center gap-1.5 bg-[#FAF8FC] p-1.5 rounded-xl border border-[#E3DDE8] self-start lg:self-auto">
            <button
              onClick={() => setViewTab('profile')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                viewTab === 'profile'
                  ? 'bg-[#4B286D] text-white shadow-xs'
                  : 'text-slate-700 hover:bg-slate-200/60'
              }`}
            >
              <PieChart className="w-3.5 h-3.5" />
              <span>Location Profile</span>
            </button>

            <button
              onClick={() => setViewTab('grid')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                viewTab === 'grid'
                  ? 'bg-[#4B286D] text-white shadow-xs'
                  : 'text-slate-700 hover:bg-slate-200/60'
              }`}
            >
              <BarChart3 className="w-3.5 h-3.5" />
              <span>Global Grid & Table</span>
            </button>

            <button
              onClick={() => setViewTab('compare')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                viewTab === 'compare'
                  ? 'bg-[#4B286D] text-white shadow-xs'
                  : 'text-slate-700 hover:bg-slate-200/60'
              }`}
            >
              <GitCompare className="w-3.5 h-3.5 text-[#2B8000]" />
              <span>Side-by-Side Comparator</span>
            </button>
          </div>
        </div>

        {/* PRIMARY LOCATION DROPDOWN SELECTOR & CATEGORY FILTER BAR */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-center">
          
          {/* Custom Searchable Location Dropdown */}
          <div className="lg:col-span-8 relative">
            <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
              Select Country, US State, CA Province, AU State, or UK Nation:
            </label>

            <div className="relative">
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full bg-[#FAF8FC] hover:bg-white text-slate-900 font-bold text-sm px-3.5 py-2.5 rounded-xl border border-[#E3DDE8] focus:outline-none focus:border-[#4B286D] focus:ring-2 focus:ring-[#4B286D]/20 transition flex items-center justify-between text-left shadow-2xs"
              >
                <div className="flex items-center gap-2.5 truncate">
                  <span className="text-xl">{currentLocation.flag}</span>
                  <span className="truncate">{currentLocation.name}</span>
                  {currentLocation.isSubnational ? (
                    <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-md bg-[#2B8000]/10 text-[#2B8000] border border-[#2B8000]/20 shrink-0">
                      {currentLocation.subnationalType}
                    </span>
                  ) : (
                    <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-md bg-purple-100 text-[#4B286D] shrink-0">
                      National Country ({currentLocation.region})
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-xs text-slate-500 font-semibold hidden sm:inline">
                    Pop: {currentLocation.totalPopulationFormatted}
                  </span>
                  {isDropdownOpen ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                </div>
              </button>

              {/* Expandable Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute left-0 right-0 mt-1.5 bg-white rounded-2xl border border-slate-200 shadow-2xl z-50 p-2 space-y-2 max-h-[420px] overflow-hidden flex flex-col">
                  {/* Internal Search Input */}
                  <div className="relative shrink-0">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      value={dropdownSearch}
                      onChange={(e) => setDropdownSearch(e.target.value)}
                      placeholder="Type country, US state, province, or UK nation (e.g. California, Ontario, Scotland, Sydney)..."
                      className="w-full text-xs font-medium pl-9 pr-8 py-2 bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:border-[#4B286D]"
                      autoFocus
                    />
                    {dropdownSearch && (
                      <button
                        onClick={() => setDropdownSearch('')}
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] font-bold text-slate-400 hover:text-slate-700"
                      >
                        Clear
                      </button>
                    )}
                  </div>

                  {/* Scrollable Grouped Items */}
                  <div className="overflow-y-auto space-y-3 pr-1 text-xs custom-scrollbar">
                    {/* 🇺🇸 US States & Territories */}
                    {dropdownGrouped.usStates.length > 0 && (
                      <div className="space-y-1">
                        <div className="px-2.5 py-1 bg-blue-50 text-blue-900 font-extrabold text-[10px] uppercase tracking-wider rounded-lg flex items-center justify-between">
                          <span>🇺🇸 US States & Territories ({dropdownGrouped.usStates.length})</span>
                          <span>State Specific Data</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 pt-1">
                          {dropdownGrouped.usStates.map((st) => (
                            <button
                              key={st.id}
                              onClick={() => {
                                setSelectedLocationId(st.id);
                                setIsDropdownOpen(false);
                              }}
                              className={`w-full text-left px-2.5 py-1.5 rounded-lg flex items-center justify-between hover:bg-purple-50 transition ${
                                st.id === selectedLocationId ? 'bg-[#4B286D] text-white font-bold' : 'text-slate-800'
                              }`}
                            >
                              <span className="truncate">{st.name}</span>
                              <span className="text-[10px] opacity-70 ml-2 font-mono">{st.totalPopulationFormatted}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* 🇨🇦 Canadian Provinces & Territories */}
                    {dropdownGrouped.caProvinces.length > 0 && (
                      <div className="space-y-1">
                        <div className="px-2.5 py-1 bg-rose-50 text-rose-900 font-extrabold text-[10px] uppercase tracking-wider rounded-lg flex items-center justify-between">
                          <span>🇨🇦 Canadian Provinces ({dropdownGrouped.caProvinces.length})</span>
                          <span>Provincial Data</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 pt-1">
                          {dropdownGrouped.caProvinces.map((pr) => (
                            <button
                              key={pr.id}
                              onClick={() => {
                                setSelectedLocationId(pr.id);
                                setIsDropdownOpen(false);
                              }}
                              className={`w-full text-left px-2.5 py-1.5 rounded-lg flex items-center justify-between hover:bg-purple-50 transition ${
                                pr.id === selectedLocationId ? 'bg-[#4B286D] text-white font-bold' : 'text-slate-800'
                              }`}
                            >
                              <span className="truncate">{pr.name}</span>
                              <span className="text-[10px] opacity-70 ml-2 font-mono">{pr.totalPopulationFormatted}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* 🇦🇺 Australian States & Territories */}
                    {dropdownGrouped.auStates.length > 0 && (
                      <div className="space-y-1">
                        <div className="px-2.5 py-1 bg-amber-50 text-amber-900 font-extrabold text-[10px] uppercase tracking-wider rounded-lg flex items-center justify-between">
                          <span>🇦🇺 Australian States ({dropdownGrouped.auStates.length})</span>
                          <span>State Specific Data</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 pt-1">
                          {dropdownGrouped.auStates.map((au) => (
                            <button
                              key={au.id}
                              onClick={() => {
                                setSelectedLocationId(au.id);
                                setIsDropdownOpen(false);
                              }}
                              className={`w-full text-left px-2.5 py-1.5 rounded-lg flex items-center justify-between hover:bg-purple-50 transition ${
                                au.id === selectedLocationId ? 'bg-[#4B286D] text-white font-bold' : 'text-slate-800'
                              }`}
                            >
                              <span className="truncate">{au.name}</span>
                              <span className="text-[10px] opacity-70 ml-2 font-mono">{au.totalPopulationFormatted}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* 🇬🇧 United Kingdom Nations & Regions */}
                    {dropdownGrouped.ukNations.length > 0 && (
                      <div className="space-y-1">
                        <div className="px-2.5 py-1 bg-[#4B286D]/10 text-[#4B286D] font-extrabold text-[10px] uppercase tracking-wider rounded-lg flex items-center justify-between">
                          <span>🇬🇧 United Kingdom Nations ({dropdownGrouped.ukNations.length})</span>
                          <span>Regional Data</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 pt-1">
                          {dropdownGrouped.ukNations.map((uk) => (
                            <button
                              key={uk.id}
                              onClick={() => {
                                setSelectedLocationId(uk.id);
                                setIsDropdownOpen(false);
                              }}
                              className={`w-full text-left px-2.5 py-1.5 rounded-lg flex items-center justify-between hover:bg-purple-50 transition ${
                                uk.id === selectedLocationId ? 'bg-[#4B286D] text-white font-bold' : 'text-slate-800'
                              }`}
                            >
                              <span className="truncate">{uk.name}</span>
                              <span className="text-[10px] opacity-70 ml-2 font-mono">{uk.totalPopulationFormatted}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* National Level Countries */}
                    {dropdownGrouped.national.length > 0 && (
                      <div className="space-y-1">
                        <div className="px-2.5 py-1 bg-slate-100 text-slate-800 font-extrabold text-[10px] uppercase tracking-wider rounded-lg flex items-center justify-between">
                          <span>Global Countries ({dropdownGrouped.national.length})</span>
                          <span>National Level</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 pt-1">
                          {dropdownGrouped.national.map((nat) => (
                            <button
                              key={nat.id}
                              onClick={() => {
                                setSelectedLocationId(nat.id);
                                setIsDropdownOpen(false);
                              }}
                              className={`w-full text-left px-2.5 py-1.5 rounded-lg flex items-center justify-between hover:bg-purple-50 transition ${
                                nat.id === selectedLocationId ? 'bg-[#4B286D] text-white font-bold' : 'text-slate-800'
                              }`}
                            >
                              <div className="flex items-center gap-1.5 truncate">
                                <span>{nat.flag}</span>
                                <span className="truncate">{nat.name}</span>
                              </div>
                              <span className="text-[10px] opacity-70 ml-2 font-mono">{nat.totalPopulationFormatted}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Export CSV & Level Filter Quick Buttons */}
          <div className="lg:col-span-4 flex items-center justify-between lg:justify-end gap-2 pt-2 lg:pt-5">
            <button
              onClick={handleExportCSV}
              className="inline-flex items-center gap-1.5 text-xs font-bold bg-[#2B8000] hover:bg-[#236600] text-white px-3.5 py-2.5 rounded-xl transition shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export CSV (Inc. Employment)</span>
            </button>
          </div>

        </div>

      </div>

      {/* ==================== VIEW MODE 1: LOCATION PROFILE ==================== */}
      {viewTab === 'profile' && (
        <div className="space-y-6">
          
          {/* TOP METRIC BANNER CARDS WITH EMPLOYMENT STATS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            
            {/* Total Population Card */}
            <div className="bg-white p-4 rounded-2xl border border-[#E3DDE8] shadow-xs space-y-1">
              <div className="flex items-center justify-between text-slate-500 text-xs font-semibold">
                <span>Total Inhabitants</span>
                <Globe className="w-4 h-4 text-[#4B286D]" />
              </div>
              <div className="text-xl font-black text-slate-900 tracking-tight">
                {currentLocation.totalPopulationFormatted}
              </div>
              <p className="text-[11px] text-slate-500 font-medium">
                {currentLocation.totalPopulation.toLocaleString()} resident count
              </p>
            </div>

            {/* Total Working Population Card */}
            <div className="bg-white p-4 rounded-2xl border border-[#E3DDE8] shadow-xs space-y-1">
              <div className="flex items-center justify-between text-slate-500 text-xs font-semibold">
                <span>Working Population</span>
                <Briefcase className="w-4 h-4 text-[#2B8000]" />
              </div>
              <div className="text-xl font-black text-[#2B8000] tracking-tight">
                {currentLocation.overallEmployment.totalWorkingInhabitantsFormatted}
              </div>
              <p className="text-[11px] text-slate-500 font-medium">
                {currentLocation.overallEmployment.overallLaborForceParticipationRate}% Labor Force Participation
              </p>
            </div>

            {/* Full-Time Workers Card */}
            <div className="bg-white p-4 rounded-2xl border border-[#E3DDE8] shadow-xs space-y-1">
              <div className="flex items-center justify-between text-slate-500 text-xs font-semibold">
                <span>Full-Time Employed</span>
                <UserCheck className="w-4 h-4 text-[#1E56A0]" />
              </div>
              <div className="text-xl font-black text-slate-900 tracking-tight">
                {currentLocation.overallEmployment.totalFullTimeFormatted}
              </div>
              <p className="text-[11px] text-slate-500 font-medium">
                <strong className="text-[#1E56A0]">{currentLocation.overallEmployment.totalFullTimePercentage}%</strong> of working inhabitants
              </p>
            </div>

            {/* Part-Time Workers Card */}
            <div className="bg-white p-4 rounded-2xl border border-[#E3DDE8] shadow-xs space-y-1">
              <div className="flex items-center justify-between text-slate-500 text-xs font-semibold">
                <span>Part-Time Employed</span>
                <Clock className="w-4 h-4 text-[#8A2BE2]" />
              </div>
              <div className="text-xl font-black text-slate-900 tracking-tight">
                {currentLocation.overallEmployment.totalPartTimeFormatted}
              </div>
              <p className="text-[11px] text-slate-500 font-medium">
                <strong className="text-[#8A2BE2]">{currentLocation.overallEmployment.totalPartTimePercentage}%</strong> of working inhabitants
              </p>
            </div>

            {/* Multiple Jobholders Card */}
            <div className="bg-white p-4 rounded-2xl border border-[#E3DDE8] shadow-xs space-y-1">
              <div className="flex items-center justify-between text-slate-500 text-xs font-semibold">
                <span>Multiple Jobholders</span>
                <Layers className="w-4 h-4 text-amber-600" />
              </div>
              <div className="text-xl font-black text-slate-900 tracking-tight">
                {currentLocation.overallEmployment.totalMultipleJobsFormatted}
              </div>
              <p className="text-[11px] text-slate-500 font-medium">
                <strong className="text-amber-600">{currentLocation.overallEmployment.totalMultipleJobsPercentage}%</strong> hold 2+ jobs
              </p>
            </div>

          </div>

          {/* SECTION: AGE BRACKET & GENDER EMPLOYMENT BREAKDOWN MATRIX */}
          <div className="bg-white p-5 sm:p-6 rounded-2xl border border-[#E3DDE8] shadow-xs space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4">
              <div>
                <div className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-[#4B286D]" />
                  <h3 className="text-base font-extrabold text-slate-900 uppercase tracking-wider">
                    Demographics: Age Brackets & Gender Preferences with Employment Breakdown
                  </h3>
                </div>
                <p className="text-xs text-slate-600 font-medium mt-0.5">
                  Detailed count and percentage breakdown of full-time, part-time, and multiple jobholders across every age bracket and gender cohort for {currentLocation.name}.
                </p>
              </div>

              {/* Gender Filter for Matrix */}
              <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl border border-slate-200 self-start md:self-auto text-xs font-bold">
                <span className="text-[10px] text-slate-500 px-2 uppercase">Gender:</span>
                <button
                  onClick={() => setGenderMatrixFilter('all')}
                  className={`px-2.5 py-1 rounded-lg transition ${
                    genderMatrixFilter === 'all'
                      ? 'bg-[#4B286D] text-white shadow-xs'
                      : 'text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  All Genders
                </button>
                <button
                  onClick={() => setGenderMatrixFilter('Female')}
                  className={`px-2.5 py-1 rounded-lg transition ${
                    genderMatrixFilter === 'Female'
                      ? 'bg-[#D9381E] text-white shadow-xs'
                      : 'text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  ♀ Female
                </button>
                <button
                  onClick={() => setGenderMatrixFilter('Male')}
                  className={`px-2.5 py-1 rounded-lg transition ${
                    genderMatrixFilter === 'Male'
                      ? 'bg-[#1E56A0] text-white shadow-xs'
                      : 'text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  ♂ Male
                </button>
                <button
                  onClick={() => setGenderMatrixFilter('Non-Binary / Unspecified')}
                  className={`px-2.5 py-1 rounded-lg transition ${
                    genderMatrixFilter === 'Non-Binary / Unspecified'
                      ? 'bg-[#8A2BE2] text-white shadow-xs'
                      : 'text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  ⚧ Non-Binary
                </button>
              </div>
            </div>

            {/* TABULAR CROSS-BREAKDOWN TABLE */}
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-2xs">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-[#FAF8FC] text-slate-800 border-b border-slate-200 text-[11px] font-extrabold uppercase tracking-wider">
                    <th className="p-3 border-r border-slate-200">Age Bracket</th>
                    <th className="p-3 border-r border-slate-200">Gender Cohort</th>
                    <th className="p-3 border-r border-slate-200">Total Inhabitants</th>
                    <th className="p-3 border-r border-slate-200 bg-emerald-50/60 text-emerald-950">
                      Working People (LFPR)
                    </th>
                    <th className="p-3 border-r border-slate-200 bg-blue-50/60 text-blue-950">
                      Full-Time Employed
                    </th>
                    <th className="p-3 border-r border-slate-200 bg-purple-50/60 text-purple-950">
                      Part-Time Employed
                    </th>
                    <th className="p-3 bg-amber-50/60 text-amber-950">
                      Multiple Jobholders
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 font-medium">
                  {currentLocation.ageBracketBreakdown.map((ag) => {
                    // Determine which gender rows to display for this bracket
                    const gendersToShow: Array<'Female' | 'Male' | 'Non-Binary / Unspecified'> =
                      genderMatrixFilter === 'all'
                        ? ['Female', 'Male', 'Non-Binary / Unspecified']
                        : [genderMatrixFilter];

                    return (
                      <React.Fragment key={ag.bracket}>
                        {/* Overall Bracket Header Row */}
                        <tr className="bg-slate-100/80 font-bold border-t-2 border-slate-300 text-slate-900">
                          <td className="p-3 border-r border-slate-200" rowSpan={gendersToShow.length + 1}>
                            <div className="font-black text-slate-900 text-sm">{ag.bracket} yrs</div>
                            <div className="text-[11px] text-slate-500 font-semibold">{ag.label}</div>
                            <div className="text-[10px] text-slate-400 font-mono mt-0.5">
                              {ag.percentage}% of total pop
                            </div>
                          </td>
                          <td className="p-3 border-r border-slate-200 font-black text-[#4B286D] bg-purple-50/50">
                            Combined (All Genders)
                          </td>
                          <td className="p-3 border-r border-slate-200 font-bold">
                            {ag.countFormatted}
                          </td>
                          <td className="p-3 border-r border-slate-200 bg-emerald-50/30 font-black text-emerald-900">
                            {ag.employment.workingCountFormatted}{' '}
                            <span className="text-[10px] text-emerald-700 font-bold">
                              ({ag.employment.laborForceParticipationRate}% LFPR)
                            </span>
                          </td>
                          <td className="p-3 border-r border-slate-200 bg-blue-50/30 font-black text-blue-900">
                            {ag.employment.fullTimeFormatted}{' '}
                            <span className="text-[10px] text-blue-700 font-bold">
                              ({ag.employment.fullTimePercentage}%)
                            </span>
                          </td>
                          <td className="p-3 border-r border-slate-200 bg-purple-50/30 font-black text-purple-900">
                            {ag.employment.partTimeFormatted}{' '}
                            <span className="text-[10px] text-purple-700 font-bold">
                              ({ag.employment.partTimePercentage}%)
                            </span>
                          </td>
                          <td className="p-3 bg-amber-50/30 font-black text-amber-900">
                            {ag.employment.multipleJobsFormatted}{' '}
                            <span className="text-[10px] text-amber-700 font-bold">
                              ({ag.employment.multipleJobsPercentage}%)
                            </span>
                          </td>
                        </tr>

                        {/* Individual Gender Rows */}
                        {gendersToShow.map((g) => {
                          const stats: EmploymentStats = ag.employment.byGender[g];
                          let genderBadge = 'text-rose-900 bg-rose-50 border-rose-200';
                          let iconChar = '♀';

                          if (g === 'Male') {
                            genderBadge = 'text-blue-900 bg-blue-50 border-blue-200';
                            iconChar = '♂';
                          } else if (g === 'Non-Binary / Unspecified') {
                            genderBadge = 'text-purple-900 bg-purple-50 border-purple-200';
                            iconChar = '⚧';
                          }

                          return (
                            <tr key={g} className="hover:bg-slate-50 transition">
                              <td className="p-3 border-r border-slate-200 font-semibold">
                                <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md border text-[11px] font-bold ${genderBadge}`}>
                                  <span>{iconChar}</span>
                                  <span>{g}</span>
                                </span>
                              </td>
                              <td className="p-3 border-r border-slate-200 font-semibold text-slate-800">
                                {stats.populationFormatted}
                              </td>
                              <td className="p-3 border-r border-slate-200 font-bold text-emerald-900 bg-emerald-50/20">
                                <div>{stats.workingCountFormatted}</div>
                                <div className="text-[10px] text-slate-500 font-normal">
                                  {stats.laborForceParticipationRate}% participation
                                </div>
                              </td>
                              <td className="p-3 border-r border-slate-200 font-bold text-blue-900 bg-blue-50/20">
                                <div className="flex items-center justify-between">
                                  <span>{stats.fullTimeFormatted}</span>
                                  <span className="text-[10px] bg-blue-100 text-blue-800 font-bold px-1.5 py-0.5 rounded">
                                    {stats.fullTimePercentage}%
                                  </span>
                                </div>
                                <div className="w-full bg-slate-200 h-1 rounded-full overflow-hidden mt-1">
                                  <div style={{ width: `${stats.fullTimePercentage}%` }} className="bg-[#1E56A0] h-full" />
                                </div>
                              </td>
                              <td className="p-3 border-r border-slate-200 font-bold text-purple-900 bg-purple-50/20">
                                <div className="flex items-center justify-between">
                                  <span>{stats.partTimeFormatted}</span>
                                  <span className="text-[10px] bg-purple-100 text-purple-800 font-bold px-1.5 py-0.5 rounded">
                                    {stats.partTimePercentage}%
                                  </span>
                                </div>
                                <div className="w-full bg-slate-200 h-1 rounded-full overflow-hidden mt-1">
                                  <div style={{ width: `${stats.partTimePercentage}%` }} className="bg-[#8A2BE2] h-full" />
                                </div>
                              </td>
                              <td className="p-3 font-bold text-amber-900 bg-amber-50/20">
                                <div className="flex items-center justify-between">
                                  <span>{stats.multipleJobsFormatted}</span>
                                  <span className="text-[10px] bg-amber-100 text-amber-800 font-bold px-1.5 py-0.5 rounded">
                                    {stats.multipleJobsPercentage}%
                                  </span>
                                </div>
                                <div className="w-full bg-slate-200 h-1 rounded-full overflow-hidden mt-1">
                                  <div style={{ width: `${stats.multipleJobsPercentage * 5}%` }} className="bg-amber-600 h-full" />
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                      </React.Fragment>
                    );
                  })}
                </tbody>
              </table>
            </div>

          </div>

          {/* MAIN DUAL DEMOGRAPHIC PROFILE PANELS (GENDER & AGE) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* 1. GENDER PREFERENCES & DISTRIBUTION CARD (5 Cols) */}
            <div className="lg:col-span-5 bg-white p-5 rounded-2xl border border-[#E3DDE8] shadow-xs space-y-5">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <PieChart className="w-5 h-5 text-[#4B286D]" />
                  <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider">
                    Gender Distribution & Counts
                  </h3>
                </div>
                <span className="text-[10px] font-bold text-[#2B8000] bg-[#2B8000]/10 px-2.5 py-1 rounded-lg">
                  Counts & %
                </span>
              </div>

              {/* Stacked Gender Distribution Bar */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                  <span>Gender Proportion</span>
                  <span>100% Inhabitants</span>
                </div>
                <div className="w-full h-4 bg-slate-100 rounded-full overflow-hidden flex shadow-2xs">
                  {currentLocation.genderBreakdown.map((g) => {
                    let color = 'bg-[#D9381E]'; // Female
                    if (g.gender === 'Male') color = 'bg-[#1E56A0]';
                    if (g.gender === 'Non-Binary / Unspecified') color = 'bg-[#8A2BE2]';

                    return (
                      <div
                        key={g.gender}
                        style={{ width: `${g.percentage}%` }}
                        className={`${color} h-full transition-all`}
                        title={`${g.gender}: ${g.percentage}% (${g.countFormatted})`}
                      />
                    );
                  })}
                </div>

                <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500 pt-1">
                  <span className="flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#D9381E] inline-block" /> Female
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#1E56A0] inline-block" /> Male
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#8A2BE2] inline-block" /> Non-Binary / Unspecified
                  </span>
                </div>
              </div>

              {/* Detailed Gender Count Cards */}
              <div className="space-y-2.5">
                {currentLocation.genderBreakdown.map((g) => {
                  let badgeBg = 'bg-rose-50 border-rose-200 text-rose-900';
                  let iconChar = '♀';
                  let barColor = 'bg-[#D9381E]';

                  if (g.gender === 'Male') {
                    badgeBg = 'bg-blue-50 border-blue-200 text-blue-900';
                    iconChar = '♂';
                    barColor = 'bg-[#1E56A0]';
                  } else if (g.gender === 'Non-Binary / Unspecified') {
                    badgeBg = 'bg-purple-50 border-purple-200 text-purple-900';
                    iconChar = '⚧';
                    barColor = 'bg-[#8A2BE2]';
                  }

                  return (
                    <div
                      key={g.gender}
                      className={`p-3.5 rounded-xl border ${badgeBg} space-y-1.5 transition`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-extrabold flex items-center gap-1.5">
                          <span className="text-base">{iconChar}</span>
                          {g.gender}
                        </span>
                        <span className="text-sm font-black">{g.percentage}%</span>
                      </div>

                      <div className="flex items-center justify-between text-xs text-slate-700 font-medium">
                        <span>Actual Inhabitant Count:</span>
                        <strong className="font-bold text-slate-900">{g.countFormatted}</strong>
                      </div>

                      <div className="w-full bg-white/80 h-1.5 rounded-full overflow-hidden">
                        <div
                          className={`${barColor} h-full rounded-full`}
                          style={{ width: `${g.percentage}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Demographic Highlights Notes */}
              <div className="bg-[#FAF8FC] p-3.5 rounded-xl border border-[#E3DDE8] space-y-2 text-xs">
                <span className="font-bold text-[#4B286D] flex items-center gap-1 text-[11px] uppercase tracking-wider">
                  <Info className="w-3.5 h-3.5" /> Key Demographic Observations
                </span>
                <ul className="space-y-1.5 text-slate-700 text-[11px]">
                  {currentLocation.demographicHighlights.map((hl, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-[#2B8000] font-bold">•</span>
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* 2. AGE BRACKETS & CAREER COHORTS CARD (7 Cols) */}
            <div className="lg:col-span-7 bg-white p-5 rounded-2xl border border-[#E3DDE8] shadow-xs space-y-5">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-[#2B8000]" />
                  <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider">
                    Age Brackets & Cohort Breakdown
                  </h3>
                </div>
                <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                  6 Age Segments
                </span>
              </div>

              {/* Interactive Age Cohort Bars */}
              <div className="space-y-3.5">
                {currentLocation.ageBracketBreakdown.map((ag) => {
                  let levelColor = 'bg-[#2B8000]';
                  if (ag.bracket === '0–14') levelColor = 'bg-cyan-600';
                  if (ag.bracket === '15–24') levelColor = 'bg-blue-600';
                  if (ag.bracket === '25–34') levelColor = 'bg-[#2B8000]';
                  if (ag.bracket === '35–49') levelColor = 'bg-[#4B286D]';
                  if (ag.bracket === '50–64') levelColor = 'bg-amber-600';
                  if (ag.bracket === '65+') levelColor = 'bg-slate-700';

                  return (
                    <div key={ag.bracket} className="p-3 bg-slate-50/80 rounded-xl border border-slate-200/80 space-y-2 hover:bg-slate-100/60 transition">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                        <div className="flex items-center gap-2">
                          <span className="font-extrabold text-slate-900 bg-white px-2 py-0.5 rounded border border-slate-200 shadow-2xs font-mono text-[11px]">
                            {ag.bracket} yrs
                          </span>
                          <span className="font-bold text-slate-800">{ag.label}</span>
                        </div>
                        <div className="flex items-center gap-2 text-right">
                          <span className="font-black text-slate-900 text-sm">{ag.percentage}%</span>
                          <span className="text-slate-500 font-semibold text-[11px]">({ag.countFormatted})</span>
                        </div>
                      </div>

                      <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
                        <div
                          className={`${levelColor} h-full rounded-full transition-all duration-500`}
                          style={{ width: `${Math.min(100, ag.percentage * 2.8)}%` }}
                          title={`${ag.bracket}: ${ag.percentage}% (${ag.countFormatted})`}
                        />
                      </div>

                      {/* Mini Job Breakdown Badge Row */}
                      <div className="flex flex-wrap items-center justify-between gap-2 text-[10px] pt-1 text-slate-600 font-medium">
                        <span>Working: <strong className="text-emerald-800">{ag.employment.workingCountFormatted}</strong> ({ag.employment.laborForceParticipationRate}% LFPR)</span>
                        <div className="flex items-center gap-3">
                          <span className="text-blue-800 font-bold">FT: {ag.employment.fullTimePercentage}%</span>
                          <span className="text-purple-800 font-bold">PT: {ag.employment.partTimePercentage}%</span>
                          <span className="text-amber-800 font-bold">Multi: {ag.employment.multipleJobsPercentage}%</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Dependency & Workforce Summary Box */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3 bg-[#FAF8FC] rounded-xl border border-[#E3DDE8] space-y-1">
                  <div className="text-[10px] font-bold text-[#4B286D] uppercase tracking-wider">
                    Prime Working Cohort (25–64 yrs)
                  </div>
                  <div className="text-lg font-black text-slate-900">
                    {roundSum(currentLocation.ageBracketBreakdown, ['25–34', '35–49', '50–64'])}%
                  </div>
                  <p className="text-[10px] text-slate-500 font-medium">
                    Active labor supply pool: {formatCountSum(currentLocation.ageBracketBreakdown, ['25–34', '35–49', '50–64'])}
                  </p>
                </div>

                <div className="p-3 bg-emerald-50/70 rounded-xl border border-emerald-200 space-y-1">
                  <div className="text-[10px] font-bold text-emerald-900 uppercase tracking-wider">
                    Youth & Early Career (0–24 yrs)
                  </div>
                  <div className="text-lg font-black text-slate-900">
                    {roundSum(currentLocation.ageBracketBreakdown, ['0–14', '15–24'])}%
                  </div>
                  <p className="text-[10px] text-slate-600 font-medium">
                    Future & student talent pool: {formatCountSum(currentLocation.ageBracketBreakdown, ['0–14', '15–24'])}
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* SUBNATIONAL STATES / PROVINCES BREAKDOWN GRID (FOR US, CA, AU, UK, ETC) */}
          {subnationalChildren.length > 0 && (
            <div className="bg-white p-5 rounded-2xl border border-[#E3DDE8] shadow-xs space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#2B8000]" />
                  <h3 className="text-base font-extrabold text-slate-900">
                    Subnational State & Provincial Breakdown for {currentLocation.name} ({subnationalChildren.length} Regions)
                  </h3>
                </div>
                <span className="text-xs text-slate-500 font-semibold bg-slate-100 px-2.5 py-1 rounded-lg">
                  Click any state to inspect dedicated demographic & job profile
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 max-h-[500px] overflow-y-auto pr-1 custom-scrollbar">
                {subnationalChildren.map((sub) => {
                  const f = sub.genderBreakdown.find((g) => g.gender === 'Female')?.percentage || 50;
                  const m = sub.genderBreakdown.find((g) => g.gender === 'Male')?.percentage || 48;
                  const emp = sub.overallEmployment;

                  return (
                    <button
                      key={sub.id}
                      onClick={() => setSelectedLocationId(sub.id)}
                      className="text-left p-3.5 bg-[#FAF8FC] hover:bg-white rounded-xl border border-[#E3DDE8] hover:border-[#4B286D] shadow-2xs space-y-2 transition group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-extrabold text-xs text-slate-900 group-hover:text-[#4B286D] transition">
                          {sub.name}
                        </span>
                        <span className="text-[10px] font-bold text-[#2B8000] bg-white px-2 py-0.5 rounded border border-slate-200">
                          {sub.totalPopulationFormatted}
                        </span>
                      </div>

                      {/* Mini Gender Bar */}
                      <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden flex">
                        <div style={{ width: `${f}%` }} className="bg-[#D9381E] h-full" title={`Female ${f}%`} />
                        <div style={{ width: `${m}%` }} className="bg-[#1E56A0] h-full" title={`Male ${m}%`} />
                      </div>

                      <div className="flex items-center justify-between text-[10px] text-slate-600 font-medium">
                        <span className="text-rose-700 font-semibold">♀ {f}%</span>
                        <span className="text-blue-700 font-semibold">♂ {m}%</span>
                        <span>Working: <strong>{emp.totalWorkingInhabitantsFormatted}</strong></span>
                      </div>

                      <div className="text-[10px] text-slate-500 pt-1 border-t border-slate-200/60 flex items-center justify-between font-semibold">
                        <span className="text-blue-800">FT: {emp.totalFullTimePercentage}%</span>
                        <span className="text-purple-800">PT: {emp.totalPartTimePercentage}%</span>
                        <span className="text-amber-800">Multi: {emp.totalMultipleJobsPercentage}%</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

        </div>
      )}

      {/* ==================== VIEW MODE 2: GLOBAL GRID & TABLE ==================== */}
      {viewTab === 'grid' && (
        <div className="space-y-4">
          
          {/* SEARCH, REGION & LEVEL FILTERS BAR */}
          <div className="bg-white p-4 rounded-2xl border border-[#E3DDE8] shadow-xs space-y-3">
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-3">
              {/* Search Bar */}
              <div className="relative flex-1 w-full">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search location, country, US state, province..."
                  className="w-full text-xs font-medium pl-9 pr-8 py-2 bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:border-[#4B286D]"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] font-bold text-slate-400 hover:text-slate-700"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Region Filter */}
              <select
                value={regionFilter}
                onChange={(e) => setRegionFilter(e.target.value)}
                className="bg-slate-50 text-slate-800 text-xs font-bold rounded-xl px-3 py-2 border border-slate-200 focus:outline-none shrink-0"
              >
                <option value="All">All Regions</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
              </select>

              {/* Sort selector */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-slate-50 text-slate-800 text-xs font-bold rounded-xl px-3 py-2 border border-slate-200 focus:outline-none shrink-0"
              >
                <option value="pop_desc">Population (High to Low)</option>
                <option value="working_high">Working Inhabitants (Highest)</option>
                <option value="ft_high">Full-Time Workers (Highest)</option>
                <option value="pt_high">Part-Time Workers (Highest)</option>
                <option value="mj_high">Multiple Jobholders (Highest)</option>
                <option value="age_young">Median Age (Youngest)</option>
                <option value="age_old">Median Age (Oldest)</option>
                <option value="female_high">Female % (Highest)</option>
                <option value="male_high">Male % (Highest)</option>
                <option value="name_asc">Name (A-Z)</option>
              </select>
            </div>

            {/* Quick Level Filter Chips */}
            <div className="flex flex-wrap items-center gap-1.5 pt-1 border-t border-slate-100 text-xs font-semibold">
              <span className="text-slate-400 text-[11px] font-bold mr-1">Filter Territory:</span>
              
              <button
                onClick={() => setLevelFilter('all')}
                className={`px-2.5 py-1 rounded-lg transition ${
                  levelFilter === 'all'
                    ? 'bg-[#4B286D] text-white font-bold'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                All Territories ({filteredDataset.length})
              </button>

              <button
                onClick={() => setLevelFilter('countries')}
                className={`px-2.5 py-1 rounded-lg transition ${
                  levelFilter === 'countries'
                    ? 'bg-[#4B286D] text-white font-bold'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                Countries Only (197)
              </button>

              <button
                onClick={() => setLevelFilter('US')}
                className={`px-2.5 py-1 rounded-lg transition ${
                  levelFilter === 'US'
                    ? 'bg-[#4B286D] text-white font-bold'
                    : 'bg-blue-50 text-blue-900 border border-blue-200 hover:bg-blue-100'
                }`}
              >
                🇺🇸 US States (52)
              </button>

              <button
                onClick={() => setLevelFilter('CA')}
                className={`px-2.5 py-1 rounded-lg transition ${
                  levelFilter === 'CA'
                    ? 'bg-[#4B286D] text-white font-bold'
                    : 'bg-rose-50 text-rose-900 border border-rose-200 hover:bg-rose-100'
                }`}
              >
                🇨🇦 CA Provinces (13)
              </button>

              <button
                onClick={() => setLevelFilter('AU')}
                className={`px-2.5 py-1 rounded-lg transition ${
                  levelFilter === 'AU'
                    ? 'bg-[#4B286D] text-white font-bold'
                    : 'bg-amber-50 text-amber-900 border border-amber-200 hover:bg-amber-100'
                }`}
              >
                🇦🇺 AU States (8)
              </button>

              <button
                onClick={() => setLevelFilter('UK')}
                className={`px-2.5 py-1 rounded-lg transition ${
                  levelFilter === 'UK'
                    ? 'bg-[#4B286D] text-white font-bold'
                    : 'bg-purple-50 text-purple-900 border border-purple-200 hover:bg-purple-100'
                }`}
              >
                🇬🇧 UK Nations (4)
              </button>
            </div>

          </div>

          {/* GRID OF LOCATION CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredDataset.map((loc) => {
              const female = loc.genderBreakdown.find((g) => g.gender === 'Female');
              const male = loc.genderBreakdown.find((g) => g.gender === 'Male');
              const nonBinary = loc.genderBreakdown.find((g) => g.gender === 'Non-Binary / Unspecified');
              const emp = loc.overallEmployment;

              return (
                <div
                  key={loc.id}
                  className="bg-white p-4 rounded-2xl border border-[#E3DDE8] hover:border-[#4B286D] shadow-xs space-y-3 transition group"
                >
                  <div className="flex items-start justify-between gap-2 border-b border-slate-100 pb-2.5">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-xl">{loc.flag}</span>
                        <h4 className="font-extrabold text-sm text-slate-900 group-hover:text-[#4B286D] transition">
                          {loc.name}
                        </h4>
                      </div>
                      <p className="text-[11px] text-slate-500 font-medium">
                        {loc.isSubnational ? loc.subnationalType : loc.parentCountryName} ({loc.region})
                      </p>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-xs font-black text-[#2B8000] bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                        {loc.totalPopulationFormatted}
                      </span>
                      <div className="text-[10px] text-slate-400 font-semibold mt-0.5">
                        Median: {loc.medianAge} yrs
                      </div>
                    </div>
                  </div>

                  {/* Gender Percentage Stacked Bar */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="font-bold text-slate-700">Gender Breakdown</span>
                      <span className="font-semibold text-slate-500">
                        ♀ {female?.percentage}% | ♂ {male?.percentage}%
                      </span>
                    </div>

                    <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden flex">
                      <div style={{ width: `${female?.percentage}%` }} className="bg-[#D9381E] h-full" title={`Female: ${female?.countFormatted}`} />
                      <div style={{ width: `${male?.percentage}%` }} className="bg-[#1E56A0] h-full" title={`Male: ${male?.countFormatted}`} />
                      <div style={{ width: `${nonBinary?.percentage}%` }} className="bg-[#8A2BE2] h-full" title={`Non-Binary: ${nonBinary?.countFormatted}`} />
                    </div>
                  </div>

                  {/* Employment Status Metrics Card */}
                  <div className="space-y-1.5 pt-1 border-t border-slate-100 text-[11px]">
                    <div className="flex items-center justify-between font-bold text-slate-800">
                      <span>Working Population</span>
                      <span className="text-[#2B8000] font-black">{emp.totalWorkingInhabitantsFormatted} ({emp.overallLaborForceParticipationRate}% LFPR)</span>
                    </div>

                    <div className="grid grid-cols-3 gap-1 text-[10px] text-center font-semibold">
                      <div className="bg-blue-50/70 p-1.5 rounded border border-blue-200 text-blue-900">
                        <div>Full-Time</div>
                        <strong className="text-xs">{emp.totalFullTimePercentage}%</strong>
                      </div>
                      <div className="bg-purple-50/70 p-1.5 rounded border border-purple-200 text-purple-900">
                        <div>Part-Time</div>
                        <strong className="text-xs">{emp.totalPartTimePercentage}%</strong>
                      </div>
                      <div className="bg-amber-50/70 p-1.5 rounded border border-amber-200 text-amber-900">
                        <div>Multiple Jobs</div>
                        <strong className="text-xs">{emp.totalMultipleJobsPercentage}%</strong>
                      </div>
                    </div>
                  </div>

                  {/* Inspect Profile Button */}
                  <button
                    onClick={() => {
                      setSelectedLocationId(loc.id);
                      setViewTab('profile');
                    }}
                    className="w-full text-center text-xs font-bold text-[#4B286D] hover:text-white bg-[#4B286D]/10 hover:bg-[#4B286D] py-2 rounded-xl transition"
                  >
                    View Deep Demographic & Job Breakdown →
                  </button>
                </div>
              );
            })}
          </div>

        </div>
      )}

      {/* ==================== VIEW MODE 3: SIDE-BY-SIDE COMPARATOR ==================== */}
      {viewTab === 'compare' && (
        <div className="space-y-6">
          
          {/* COMPARISON SELECTION BAR */}
          <div className="bg-white p-5 rounded-2xl border border-[#E3DDE8] shadow-xs space-y-4">
            <div className="flex items-center gap-2 border-b border-slate-100 pb-2.5">
              <GitCompare className="w-5 h-5 text-[#2B8000]" />
              <h3 className="text-base font-extrabold text-slate-900">
                Side-by-Side Location Demographic & Employment Comparator
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {[0, 1, 2].map((idx) => {
                const currentLocId = compareIds[idx] || '';
                const locObj = DEMOGRAPHICS_DATASET.find((l) => l.id === currentLocId);

                return (
                  <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1.5">
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                      Location {idx + 1}:
                    </label>

                    <select
                      value={currentLocId}
                      onChange={(e) => {
                        const newArr = [...compareIds];
                        newArr[idx] = e.target.value;
                        setCompareIds(newArr);
                      }}
                      className="w-full bg-white text-slate-900 text-xs font-bold rounded-xl p-2 border border-slate-300 focus:outline-none"
                    >
                      {DEMOGRAPHICS_DATASET.map((l) => (
                        <option key={l.id} value={l.id}>
                          {l.flag} {l.name} ({l.isSubnational ? l.subnationalType : l.region})
                        </option>
                      ))}
                    </select>

                    {locObj && (
                      <div className="text-[11px] text-slate-600 font-medium flex items-center justify-between pt-1">
                        <span>Inhabitants: <strong>{locObj.totalPopulationFormatted}</strong></span>
                        <span>Working: <strong>{locObj.overallEmployment.totalWorkingInhabitantsFormatted}</strong></span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* SIDE BY SIDE COMPARISON MATRIX */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {compareIds.map((id, colIdx) => {
              const loc = DEMOGRAPHICS_DATASET.find((l) => l.id === id);
              if (!loc) return null;

              const female = loc.genderBreakdown.find((g) => g.gender === 'Female');
              const male = loc.genderBreakdown.find((g) => g.gender === 'Male');
              const nonBinary = loc.genderBreakdown.find((g) => g.gender === 'Non-Binary / Unspecified');
              const emp = loc.overallEmployment;

              return (
                <div
                  key={id}
                  className="bg-white p-5 rounded-2xl border border-[#E3DDE8] shadow-xs space-y-5"
                >
                  <div className="border-b border-slate-100 pb-3 space-y-1">
                    <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-[#4B286D] text-white">
                      Slot {colIdx + 1}
                    </span>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-2xl">{loc.flag}</span>
                      <h4 className="text-base font-extrabold text-slate-900">{loc.name}</h4>
                    </div>
                    <p className="text-xs text-slate-500 font-medium">
                      {loc.isSubnational ? loc.subnationalType : loc.parentCountryName} ({loc.region})
                    </p>
                  </div>

                  {/* Population & Employment Stats */}
                  <div className="p-3 bg-slate-50 rounded-xl space-y-1.5 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 font-medium">Total Population:</span>
                      <strong className="text-slate-900 font-black">{loc.totalPopulationFormatted}</strong>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 font-medium">Working Population:</span>
                      <strong className="text-emerald-800 font-black">{emp.totalWorkingInhabitantsFormatted} ({emp.overallLaborForceParticipationRate}%)</strong>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 font-medium">Full-Time Workers:</span>
                      <strong className="text-blue-900 font-bold">{emp.totalFullTimeFormatted} ({emp.totalFullTimePercentage}%)</strong>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 font-medium">Part-Time Workers:</span>
                      <strong className="text-purple-900 font-bold">{emp.totalPartTimeFormatted} ({emp.totalPartTimePercentage}%)</strong>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 font-medium">Multiple Jobholders:</span>
                      <strong className="text-amber-900 font-bold">{emp.totalMultipleJobsFormatted} ({emp.totalMultipleJobsPercentage}%)</strong>
                    </div>
                  </div>

                  {/* Gender Distribution Stacked Bar */}
                  <div className="space-y-2">
                    <span className="text-xs font-extrabold text-slate-800 uppercase tracking-wider block">
                      Gender Preferences & Distribution
                    </span>

                    <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden flex">
                      <div style={{ width: `${female?.percentage}%` }} className="bg-[#D9381E] h-full" />
                      <div style={{ width: `${male?.percentage}%` }} className="bg-[#1E56A0] h-full" />
                      <div style={{ width: `${nonBinary?.percentage}%` }} className="bg-[#8A2BE2] h-full" />
                    </div>

                    <div className="space-y-1.5 text-xs pt-1">
                      <div className="p-2 bg-rose-50/80 rounded-lg flex items-center justify-between text-rose-900 font-medium">
                        <span>♀ Female:</span>
                        <strong className="font-bold">{female?.percentage}% ({female?.countFormatted})</strong>
                      </div>
                      <div className="p-2 bg-blue-50/80 rounded-lg flex items-center justify-between text-blue-900 font-medium">
                        <span>♂ Male:</span>
                        <strong className="font-bold">{male?.percentage}% ({male?.countFormatted})</strong>
                      </div>
                      <div className="p-2 bg-purple-50/80 rounded-lg flex items-center justify-between text-purple-900 font-medium">
                        <span>⚧ Non-Binary:</span>
                        <strong className="font-bold">{nonBinary?.percentage}% ({nonBinary?.countFormatted})</strong>
                      </div>
                    </div>
                  </div>

                  {/* Age Brackets & Working Status */}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <span className="text-xs font-extrabold text-slate-800 uppercase tracking-wider block">
                      Age Cohorts & Employment
                    </span>

                    <div className="space-y-2">
                      {loc.ageBracketBreakdown.map((ag) => (
                        <div key={ag.bracket} className="p-2 bg-slate-50 rounded-lg space-y-1 text-xs">
                          <div className="flex items-center justify-between font-semibold text-slate-700">
                            <span>{ag.bracket} yrs ({ag.label}):</span>
                            <span className="font-bold text-slate-900">{ag.percentage}%</span>
                          </div>
                          <div className="flex items-center justify-between text-[10px] text-slate-500 font-medium">
                            <span>Working: {ag.employment.workingCountFormatted}</span>
                            <span>FT: {ag.employment.fullTimePercentage}% | PT: {ag.employment.partTimePercentage}%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      )}

    </div>
  );
};

// Helpers for calculations
function roundSum(brackets: AgeBracketDemographic[], bracketKeys: string[]): number {
  const sum = brackets
    .filter((b) => bracketKeys.includes(b.bracket))
    .reduce((acc, curr) => acc + curr.percentage, 0);
  return Math.round(sum * 10) / 10;
}

function formatCountSum(brackets: AgeBracketDemographic[], bracketKeys: string[]): string {
  const sumCount = brackets
    .filter((b) => bracketKeys.includes(b.bracket))
    .reduce((acc, curr) => acc + curr.count, 0);

  if (sumCount >= 1_000_000_000) return `${(sumCount / 1_000_000_000).toFixed(2)} Billion`;
  if (sumCount >= 1_000_000) return `${(sumCount / 1_000_000).toFixed(2)} Million`;
  if (sumCount >= 1_000) return `${(sumCount / 1_000).toFixed(1)} Thousand`;
  return sumCount.toString();
}

function roundVal(val: number): number {
  return Math.round(val * 10) / 10;
}
