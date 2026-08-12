import { useState, useMemo, useRef, useEffect } from 'react';
import { COUNTRIES_DATA } from '../data/countries';
import { getJobsDataForCountry, GLOBAL_JOBS_DATA } from '../data/countryJobsData';
import { exportCitiesToCsv } from '../data/countryCitiesData';
import { CountryJobsData, JobSite } from '../types';
import {
  Briefcase,
  Users,
  GraduationCap,
  Download,
  ExternalLink,
  Search,
  Sparkles,
  Award,
  Globe,
  Clock,
  Building2,
  TrendingUp,
  Layers,
  ChevronDown,
  CheckCircle2,
  BookOpen,
  X,
  Filter,
  Loader2,
  ListFilter,
  Phone,
  Mail,
  MessageSquare,
  PhoneCall,
  ShieldCheck,
  Scale,
  FileText,
  Laptop,
  Lock,
  Landmark,
  MapPin
} from 'lucide-react';

export const CountryJobsExplorer = () => {
  const [selectedCountryCode, setSelectedCountryCode] = useState<string>('US');
  const [countrySearchQuery, setCountrySearchQuery] = useState<string>('');
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  
  // AI Insights state
  const [aiInsight, setAiInsight] = useState<string | null>(null);
  const [isLoadingAi, setIsLoadingAi] = useState<boolean>(false);

  // Job Sites Filter and AI Live Search state
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [siteSearchQuery, setSiteSearchQuery] = useState<string>('');
  const [regionSearchQuery, setRegionSearchQuery] = useState<string>('');
  const [livePortals, setLivePortals] = useState<JobSite[]>([]);
  const [isLoadingLivePortals, setIsLoadingLivePortals] = useState<boolean>(false);
  const [liveSearchAttempted, setLiveSearchAttempted] = useState<boolean>(false);

  // Cities Filter & Search state
  const [citySearchQuery, setCitySearchQuery] = useState<string>('');
  const [cityTypeFilter, setCityTypeFilter] = useState<string>('All');

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Filter countries for searchable combobox
  const filteredCountries = useMemo(() => {
    const q = countrySearchQuery.trim().toLowerCase();
    if (!q) return COUNTRIES_DATA;
    return COUNTRIES_DATA.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.code.toLowerCase().includes(q)
    );
  }, [countrySearchQuery]);

  // Selected Country object or Global
  const selectedCountry = useMemo(() => {
    if (selectedCountryCode === 'GLOBAL') {
      return {
        code: 'GLOBAL',
        name: 'Global Summary (All Countries)',
        flag: '🌍',
        population: 8000000000,
        languages: [],
        capital: 'N/A',
        region: 'Worldwide'
      };
    }
    return COUNTRIES_DATA.find((c) => c.code === selectedCountryCode) || COUNTRIES_DATA[0];
  }, [selectedCountryCode]);

  // Jobs data object
  const jobsData: CountryJobsData = useMemo(() => {
    return getJobsDataForCountry(
      selectedCountry.code,
      selectedCountry.name,
      selectedCountry.flag,
      selectedCountry.population
    );
  }, [selectedCountry]);

  // Reset live search portals and city filters when country changes
  const handleSelectCountry = (code: string) => {
    setSelectedCountryCode(code);
    setIsDropdownOpen(false);
    setCountrySearchQuery('');
    setAiInsight(null);
    setLivePortals([]);
    setLiveSearchAttempted(false);
    setSiteSearchQuery('');
    setRegionSearchQuery('');
    setCitySearchQuery('');
    setCityTypeFilter('All');
  };

  // Job Portals category list
  const categories = ['All', 'General', 'Tech & IT', 'Executive & Professional', 'Remote & Freelance', 'Government', 'Niche & Startup'];

  // Filtered preset job sites
  const filteredPresetSites = useMemo(() => {
    return jobsData.jobSites.filter((site) => {
      const matchesCat = selectedCategory === 'All' || site.category.toLowerCase().includes(selectedCategory.toLowerCase());
      const matchesSearch =
        !siteSearchQuery ||
        site.name.toLowerCase().includes(siteSearchQuery.toLowerCase()) ||
        site.description.toLowerCase().includes(siteSearchQuery.toLowerCase()) ||
        site.category.toLowerCase().includes(siteSearchQuery.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [jobsData.jobSites, selectedCategory, siteSearchQuery]);

  // Filtered state & regional literacy data
  const filteredRegions = useMemo(() => {
    if (!jobsData.literacyData?.statesOrRegions) return [];
    if (!regionSearchQuery.trim()) return jobsData.literacyData.statesOrRegions;
    const q = regionSearchQuery.toLowerCase();
    return jobsData.literacyData.statesOrRegions.filter(
      (st) =>
        st.stateOrRegionName.toLowerCase().includes(q) ||
        st.notes.toLowerCase().includes(q)
    );
  }, [jobsData.literacyData, regionSearchQuery]);

  // Filtered live internet search portals
  const filteredLiveSites = useMemo(() => {
    return livePortals.filter((site) => {
      const matchesCat = selectedCategory === 'All' || site.category.toLowerCase().includes(selectedCategory.toLowerCase());
      const matchesSearch =
        !siteSearchQuery ||
        site.name.toLowerCase().includes(siteSearchQuery.toLowerCase()) ||
        site.description.toLowerCase().includes(siteSearchQuery.toLowerCase()) ||
        site.category.toLowerCase().includes(siteSearchQuery.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [livePortals, selectedCategory, siteSearchQuery]);

  // Filtered cities list for Top 30 Most Populated Cities
  const filteredCities = useMemo(() => {
    if (!jobsData.citiesData?.mostPopulatedCities) return [];
    return jobsData.citiesData.mostPopulatedCities.filter((city) => {
      const matchesType = cityTypeFilter === 'All' || city.cityType === cityTypeFilter;
      const q = citySearchQuery.trim().toLowerCase();
      const matchesSearch =
        !q ||
        city.cityName.toLowerCase().includes(q) ||
        city.stateOrRegion.toLowerCase().includes(q) ||
        city.primaryIndustryOrSourcingFocus.toLowerCase().includes(q) ||
        city.primaryLanguagesSpoken.some((l) => l.toLowerCase().includes(q));
      return matchesType && matchesSearch;
    });
  }, [jobsData.citiesData, citySearchQuery, cityTypeFilter]);

  // Dedicated City CSV Export handler for Top 30 Most Populated Cities
  const handleExportMostPopulatedCities = () => {
    if (!jobsData.citiesData?.mostPopulatedCities) return;
    exportCitiesToCsv(jobsData.countryName, jobsData.citiesData.mostPopulatedCities, 'Top_30_Most_Populated_Cities');
  };

  // Export full CSV report helper
  const handleExportCSV = () => {
    const headers = ['Category', 'Metric / Item', 'Value / Percentage', 'Notes / Details'];
    const rows = [
      ['General', 'Country', jobsData.countryName, jobsData.countryCode],
      ['General', 'Employment Rate', `${jobsData.employmentRate}%`, `Unemployment: ${jobsData.unemploymentRate}%`],
      ['General', 'Total Labor Force Size', jobsData.laborForceSize, 'Active working age population'],
      ['Employment Type', 'Part-Time Jobs (%)', `${jobsData.partTimeJobs.percentage}%`, `Est. ${jobsData.partTimeJobs.estimatedPeople} workers`],
      ['Employment Type', 'Multiple Jobs Holders (%)', `${jobsData.multipleJobsHolders.percentage}%`, `Est. ${jobsData.multipleJobsHolders.estimatedPeople} workers`],
      ...jobsData.mostCommonJobs.map((j) => ['Top Job', j.title, `${j.percentage}%`, `Category: ${j.category} | Avg Salary: ${j.averageSalaryUsd || 'N/A'}`]),
      ...jobsData.educationalAttainment.map((e) => ['Education Level', e.level, `${e.percentage}%`, 'Attainment percentage']),
      ...jobsData.fieldOfStudies.map((f) => ['Field of Study', f.field, `${f.percentage}%`, 'Graduate concentration']),
      ...jobsData.jobSites.map((s) => ['Recruitment Portal', s.name, s.url, `Category: ${s.category} | ${s.description}`]),
      ...livePortals.map((s) => ['AI Live Portal', s.name, s.url, `Category: ${s.category} | ${s.description}`]),
      ...(jobsData.citiesData?.mostPopulatedCities || []).map((c, i) => [
        'Most Populated City',
        `#${i + 1} ${c.cityName}`,
        c.populationFormatted,
        `Type: ${c.cityType} | Region: ${c.stateOrRegion} | Focus: ${c.primaryIndustryOrSourcingFocus}`
      ]),
      ...(jobsData.citiesData?.allCities || []).map((c) => [
        'City Directory Entry',
        c.cityName,
        c.populationFormatted,
        `State/Region: ${c.stateOrRegion} | Type: ${c.cityType} | Hub: ${c.isMajorSourcingHub ? 'Major' : 'Regional'} | Languages: ${c.primaryLanguagesSpoken.join(', ')}`
      ]),
    ];

    const csvContent = [headers.join(','), ...rows.map((r) => r.map((c) => `"${c.replace(/"/g, '""')}"`).join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `${jobsData.countryName.toLowerCase()}_jobs_employment_report.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Fetch AI Live Talent Sourcing Insight
  const handleFetchAiInsight = async () => {
    setIsLoadingAi(true);
    setAiInsight(null);
    try {
      const res = await fetch('/api/ai-travel-guide', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          countryName: jobsData.countryName,
          query: `Provide a concise, high-level talent sourcing and labor market briefing for ${jobsData.countryName}. Include top in-demand skills, salary competitive advantage, hiring remote talent tips, and popular recruitment strategies.`
        }),
      });
      const data = await res.json();
      setAiInsight(data.guide || 'Failed to fetch AI insights. Please try again.');
    } catch {
      setAiInsight('Unable to connect to AI server. Please check internet connection.');
    } finally {
      setIsLoadingAi(false);
    }
  };

  // Search internet live for all job sites in this country via Gemini AI endpoint
  const handleLiveInternetSearchJobSites = async () => {
    setIsLoadingLivePortals(true);
    setLiveSearchAttempted(true);
    try {
      const res = await fetch('/api/gemini/job-portals', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          countryName: jobsData.countryName,
          countryCode: jobsData.countryCode,
          searchCategory: selectedCategory
        }),
      });
      const data = await res.json();
      if (data.portals && Array.isArray(data.portals)) {
        setLivePortals(data.portals);
      }
    } catch (e) {
      console.error('Error searching live portals:', e);
    } finally {
      setIsLoadingLivePortals(false);
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn pb-12">
      
      {/* Compact Controls Header */}
      <div className="bg-white border border-[#E3DDE8] rounded-xl p-3 sm:p-4 text-slate-900 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="text-2xl">{jobsData.flag}</span>
            <h1 className="text-base font-extrabold text-slate-900 tracking-tight">
              {jobsData.countryName} Labor & Jobs
            </h1>
          </div>

          <div className="h-4 w-px bg-slate-200 hidden sm:block" />

          {/* Searchable Combobox */}
          <div className="relative w-full sm:w-[280px]" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full bg-[#F8F6FA] hover:bg-[#F4EFF9] border border-[#E3DDE8] text-slate-900 text-xs font-bold rounded-xl px-3.5 py-2 flex items-center justify-between gap-2 transition focus:outline-none focus:ring-2 focus:ring-[#4B286D]/30 shadow-xs"
              >
                <div className="flex items-center gap-2.5 truncate">
                  <span className="text-base">{selectedCountry.flag}</span>
                  <span className="truncate">{selectedCountry.name}</span>
                  {selectedCountry.code !== 'GLOBAL' && (
                    <span className="text-[10px] bg-purple-100 text-[#4B286D] px-1.5 py-0.5 rounded font-mono">
                      {selectedCountry.code}
                    </span>
                  )}
                </div>
                <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Popover Dropdown with Filter Input */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-[#E3DDE8] rounded-2xl shadow-xl z-50 overflow-hidden animate-fadeIn">
                  
                  {/* Sticky Search Input Bar */}
                  <div className="p-2.5 border-b border-[#E3DDE8] bg-[#F8F6FA] sticky top-0 z-10 flex items-center gap-2">
                    <Search className="w-4 h-4 text-[#4B286D] shrink-0 ml-1" />
                    <input
                      type="text"
                      autoFocus
                      value={countrySearchQuery}
                      onChange={(e) => setCountrySearchQuery(e.target.value)}
                      placeholder="Type country name or code (e.g. PH, Japan)..."
                      className="w-full bg-white border border-[#E3DDE8] text-slate-900 text-xs px-2.5 py-2 rounded-lg focus:outline-none focus:border-[#4B286D] placeholder:text-slate-400"
                    />
                    {countrySearchQuery && (
                      <button
                        onClick={() => setCountrySearchQuery('')}
                        className="text-slate-500 hover:text-slate-900 p-1"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>

                  {/* Scrollable Country List Options */}
                  <div className="max-h-64 overflow-y-auto p-1.5 space-y-0.5 custom-scrollbar">
                    
                    {/* GLOBAL SUMMARY OPTION (Always at top) */}
                    {('global summary all countries'.includes(countrySearchQuery.toLowerCase()) || countrySearchQuery === '') && (
                      <button
                        onClick={() => handleSelectCountry('GLOBAL')}
                        className={`w-full text-left px-3 py-2 rounded-xl text-xs font-extrabold flex items-center justify-between transition ${
                          selectedCountryCode === 'GLOBAL'
                            ? 'bg-indigo-600 text-white shadow-md'
                            : 'text-amber-300 hover:bg-slate-800/90'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="text-base">🌍</span>
                          <span>Global Summary (All Countries)</span>
                        </div>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 font-bold">
                          GLOBAL
                        </span>
                      </button>
                    )}

                    {/* Filtered Countries */}
                    {filteredCountries.length > 0 ? (
                      filteredCountries.map((c) => (
                        <button
                          key={`select-job-country-${c.code}`}
                          onClick={() => handleSelectCountry(c.code)}
                          className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold flex items-center justify-between transition ${
                            selectedCountryCode === c.code
                              ? 'bg-indigo-600 text-white font-extrabold'
                              : 'text-slate-200 hover:bg-slate-800'
                          }`}
                        >
                          <div className="flex items-center gap-2.5 truncate">
                            <span className="text-base">{c.flag}</span>
                            <span className="truncate">{c.name}</span>
                          </div>
                          <span className="text-[10px] text-slate-400 font-mono font-medium">
                            {c.code}
                          </span>
                        </button>
                      ))
                    ) : (
                      <div className="p-4 text-center text-xs text-slate-400">
                        No countries match "{countrySearchQuery}"
                      </div>
                    )}
                  </div>

                  {/* Bottom Counter Bar */}
                  <div className="p-2 bg-slate-950 border-t border-slate-800 text-[11px] text-slate-400 text-center font-medium">
                    Showing {filteredCountries.length} countries + Global Summary
                  </div>
                </div>
              )}
            </div>
          </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={handleExportCSV}
            className="inline-flex items-center gap-1.5 bg-[#2B8000] hover:bg-[#216300] text-white font-bold text-xs px-3 py-1.5 rounded-xl transition shadow-xs"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export CSV</span>
          </button>

          <button
            onClick={handleFetchAiInsight}
            disabled={isLoadingAi}
            className="inline-flex items-center gap-1.5 bg-[#4B286D] hover:bg-[#371B54] text-white font-bold text-xs px-3 py-1.5 rounded-xl transition shadow-xs disabled:opacity-50"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#66CC00]" />
            <span>{isLoadingAi ? 'Analyzing...' : 'AI Brief'}</span>
          </button>
        </div>
      </div>

      {/* AI Intelligence Brief Section */}
      {aiInsight && (
        <div className="bg-gradient-to-r from-indigo-950/80 to-slate-900 border border-indigo-800/80 rounded-2xl p-6 text-white space-y-3 animate-fadeIn shadow-lg">
          <div className="flex items-center justify-between border-b border-indigo-800/50 pb-3">
            <div className="flex items-center gap-2 text-amber-300 font-bold text-sm">
              <Sparkles className="w-4 h-4" />
              <span>AI Talent Sourcing Brief — {jobsData.countryName}</span>
            </div>
            <button
              onClick={() => setAiInsight(null)}
              className="text-xs text-slate-400 hover:text-white"
            >
              Dismiss
            </button>
          </div>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed whitespace-pre-line">
            {aiInsight}
          </p>
        </div>
      )}

      {/* SECTION: BEST COMMUNICATION HOURS & OUTREACH ETIQUETTE */}
      {jobsData.outreachTimings && (
        <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-6 sm:p-8 text-white border border-indigo-900/60 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-indigo-800/60 pb-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-bold mb-2">
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Candidate Sourcing & Outreach Windows — {jobsData.countryName}</span>
              </div>
              <h3 className="text-xl font-extrabold text-white flex items-center gap-2">
                <Clock className="w-5 h-5 text-indigo-400" />
                Best Times to Call, Email & Message People in {jobsData.countryName}
              </h3>
              <p className="text-xs text-slate-300 mt-1 max-w-2xl leading-relaxed">
                Maximize candidate response rates and talent conversion by scheduling phone calls, email blasts, and text messages during peak local engagement windows.
              </p>
            </div>
          </div>

          {/* 3 Cards for Calling, Emailing, Texting */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            
            {/* 1. BEST TIME TO CALL */}
            <div className="bg-slate-900/90 border border-indigo-800/70 rounded-2xl p-5 space-y-3 hover:border-amber-400/50 transition">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-amber-300 font-extrabold text-sm">
                  <Phone className="w-4 h-4" />
                  <span>Best Time to Call</span>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 border border-amber-400/30">
                  Phone / Calls
                </span>
              </div>
              <div className="text-sm font-bold text-white bg-indigo-950/80 p-3 rounded-xl border border-indigo-800/50 font-mono leading-snug">
                {jobsData.outreachTimings.bestCallingHours}
              </div>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                Peak answer rates occur mid-morning & afternoon. Avoid calling during lunch breaks or after 5:30 PM local time.
              </p>
            </div>

            {/* 2. BEST TIME TO EMAIL */}
            <div className="bg-slate-900/90 border border-indigo-800/70 rounded-2xl p-5 space-y-3 hover:border-indigo-400/50 transition">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-indigo-300 font-extrabold text-sm">
                  <Mail className="w-4 h-4" />
                  <span>Best Time to Email</span>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  Inbox Placement
                </span>
              </div>
              <div className="text-sm font-bold text-white bg-indigo-950/80 p-3 rounded-xl border border-indigo-800/50 font-mono leading-snug">
                {jobsData.outreachTimings.bestEmailingHours}
              </div>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                Schedule emails to arrive right as people open their inbox in the morning. Tuesday to Thursday yields highest open rates.
              </p>
            </div>

            {/* 3. BEST TIME TO SEND TEXTS / MESSAGES */}
            <div className="bg-slate-900/90 border border-indigo-800/70 rounded-2xl p-5 space-y-3 hover:border-emerald-400/50 transition">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-emerald-400 font-extrabold text-sm">
                  <MessageSquare className="w-4 h-4" />
                  <span>Best Time to Text / Chat</span>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  SMS & Messaging
                </span>
              </div>
              <div className="text-sm font-bold text-white bg-indigo-950/80 p-3 rounded-xl border border-indigo-800/50 font-mono leading-snug">
                {jobsData.outreachTimings.bestMessagingHours}
              </div>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                High engagement on mobile messaging. Keep initial text messages professional, concise, and localized.
              </p>
            </div>

          </div>

          {/* Preferred Channels & Cultural Etiquette Notes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2 border-t border-indigo-900/80">
            
            {/* Preferred Communication Channels */}
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                Preferred Communication Channels ({jobsData.countryName}):
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {jobsData.outreachTimings.preferredChannels.map((channel, i) => (
                  <span
                    key={`channel-${i}`}
                    className="text-xs font-extrabold text-indigo-200 bg-indigo-900/80 border border-indigo-700/80 px-3 py-1.5 rounded-xl shadow-xs"
                  >
                    ✓ {channel}
                  </span>
                ))}
              </div>
            </div>

            {/* Local Business Etiquette Notes */}
            <div className="p-4 rounded-2xl bg-indigo-950/60 border border-indigo-800/60 space-y-1">
              <span className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Outreach Etiquette & Communication Custom:</span>
              </span>
              <p className="text-xs text-slate-200 leading-relaxed">
                {jobsData.outreachTimings.etiquetteNotes}
              </p>
            </div>

          </div>
        </div>
      )}

      {/* SECTION: MOST POPULATED CITIES */}
      {jobsData.citiesData && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-6">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold mb-2">
                <Building2 className="w-3.5 h-3.5 text-[#2B8000]" />
                <span>Urban Demographics & Sourcing Locations — {jobsData.countryName}</span>
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#4B286D]" />
                Most Populated Cities
              </h3>
              <p className="text-xs text-slate-500 mt-1 max-w-3xl leading-relaxed">
                Top 30 most populated urban centers, key talent sourcing hubs, regional jurisdictions, city classifications, and downloadable CSV data for {jobsData.countryName}.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 shrink-0">
              <button
                onClick={handleExportMostPopulatedCities}
                className="inline-flex items-center gap-1.5 bg-[#4B286D] hover:bg-[#371B54] text-white font-bold text-xs px-3.5 py-2 rounded-xl transition shadow-xs"
              >
                <Download className="w-3.5 h-3.5 text-[#66CC00]" />
                <span>Export Top 30 Cities CSV</span>
              </button>
            </div>
          </div>

          {/* SUB-SECTION 1: MOST POPULATED CITIES HIGHLIGHT CARDS */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-extrabold text-slate-900 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-[#2B8000]" />
                <span>Top Key Urban Sourcing Hubs</span>
              </h4>
              <span className="text-xs text-slate-500 font-medium">Ranked by municipal & metro population</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {jobsData.citiesData.mostPopulatedCities.slice(0, 4).map((city, idx) => (
                <div
                  key={`pop-city-${idx}`}
                  className="bg-[#F8F6FA] p-4 rounded-2xl border border-[#E3DDE8] space-y-3 flex flex-col justify-between hover:border-purple-300 transition"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-lg bg-[#4B286D] text-white font-extrabold text-xs">
                        #{idx + 1}
                      </span>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                          city.isCapital
                            ? 'bg-amber-100 text-amber-900 border border-amber-200'
                            : city.cityType === 'Tech Hub'
                            ? 'bg-indigo-100 text-indigo-900 border border-indigo-200'
                            : city.cityType === 'Financial Hub'
                            ? 'bg-emerald-100 text-emerald-900 border border-emerald-200'
                            : city.cityType === 'BPO / Service Hub'
                            ? 'bg-sky-100 text-sky-900 border border-sky-200'
                            : 'bg-slate-200 text-slate-800'
                        }`}
                      >
                        {city.cityType}
                      </span>
                    </div>

                    <div>
                      <h5 className="font-extrabold text-slate-900 text-base flex items-center gap-1.5">
                        <span>{city.cityName}</span>
                        {city.isCapital && <span className="text-xs" title="Capital City">👑</span>}
                      </h5>
                      <p className="text-xs text-slate-500 font-medium">{city.stateOrRegion}</p>
                    </div>

                    <div className="bg-white p-2.5 rounded-xl border border-[#E3DDE8] space-y-1">
                      <div className="text-[11px] text-slate-500 flex justify-between">
                        <span>Population:</span>
                        <strong className="text-slate-900 font-extrabold">{city.populationFormatted}</strong>
                      </div>
                      <div className="text-[11px] text-slate-600 leading-snug">
                        <strong className="text-[#4B286D]">Focus:</strong> {city.primaryIndustryOrSourcingFocus}
                      </div>
                    </div>
                  </div>

                  <div className="text-[10px] text-slate-500 flex flex-wrap gap-1 pt-1">
                    {city.primaryLanguagesSpoken.map((lang, lIdx) => (
                      <span key={lIdx} className="bg-purple-50 text-[#4B286D] px-1.5 py-0.5 rounded font-medium border border-purple-100">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SUB-SECTION 2: TOP 30 MOST POPULATED CITIES SEARCHABLE TABLE */}
          <div className="space-y-4 pt-4 border-t border-slate-100">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div>
                <h4 className="text-sm font-extrabold text-slate-900 flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#4B286D]" />
                  <span>Top 30 Most Populated Cities Directory</span>
                </h4>
                <p className="text-xs text-slate-500">
                  Filterable directory of the 30 largest urban centers, state/regional jurisdictions, and sourcing focus in {jobsData.countryName}.
                </p>
              </div>

              {/* Filter Pills & Search */}
              <div className="flex flex-wrap items-center gap-2">
                {/* Search Box */}
                <div className="relative">
                  <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    value={citySearchQuery}
                    onChange={(e) => setCitySearchQuery(e.target.value)}
                    placeholder="Search city, region, focus..."
                    className="pl-8 pr-3 py-1.5 bg-[#F8F6FA] border border-[#E3DDE8] rounded-xl text-xs text-slate-900 focus:outline-none focus:border-[#4B286D] w-48 sm:w-64"
                  />
                  {citySearchQuery && (
                    <button
                      onClick={() => setCitySearchQuery('')}
                      className="absolute right-2 top-2 text-slate-400 hover:text-slate-600"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {/* Type Filter Select */}
                <select
                  value={cityTypeFilter}
                  onChange={(e) => setCityTypeFilter(e.target.value)}
                  className="bg-[#F8F6FA] border border-[#E3DDE8] text-xs font-bold text-slate-800 rounded-xl px-3 py-1.5 focus:outline-none focus:border-[#4B286D]"
                >
                  <option value="All">All Classifications</option>
                  <option value="Capital">Capital Cities</option>
                  <option value="Financial Hub">Financial Hubs</option>
                  <option value="Tech Hub">Tech Hubs</option>
                  <option value="BPO / Service Hub">BPO / Service Hubs</option>
                  <option value="Industrial & Port">Industrial & Ports</option>
                  <option value="Regional Center">Regional Centers</option>
                  <option value="Major City">Major Cities</option>
                </select>
              </div>
            </div>

            {/* Cities Table */}
            <div className="overflow-x-auto max-h-[640px] overflow-y-auto border border-[#E3DDE8] rounded-2xl bg-white shadow-xs">
              <table className="w-full text-left border-collapse">
                <thead className="sticky top-0 z-10">
                  <tr className="bg-[#F8F6FA] border-b border-[#E3DDE8] text-[11px] font-extrabold text-[#4B286D] uppercase tracking-wider">
                    <th className="py-3 px-4">#</th>
                    <th className="py-3 px-4">City Name</th>
                    <th className="py-3 px-4">State / Province / Region</th>
                    <th className="py-3 px-4">Population</th>
                    <th className="py-3 px-4">Classification</th>
                    <th className="py-3 px-4">Sourcing Hub</th>
                    <th className="py-3 px-4">Primary Industry & Sourcing Focus</th>
                    <th className="py-3 px-4">Primary Languages</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs">
                  {filteredCities.length > 0 ? (
                    filteredCities.map((city, idx) => (
                      <tr key={`city-row-${idx}`} className="hover:bg-purple-50/40 transition">
                        <td className="py-3 px-4 font-mono font-bold text-slate-400 text-[11px]">{idx + 1}</td>
                        <td className="py-3 px-4 font-extrabold text-slate-900 whitespace-nowrap">
                          <span className="flex items-center gap-1.5">
                            {city.cityName}
                            {city.isCapital && (
                              <span className="text-[10px] bg-amber-100 text-amber-900 px-1.5 py-0.2 rounded font-bold border border-amber-200">
                                Capital
                              </span>
                            )}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-slate-600 font-medium whitespace-nowrap">{city.stateOrRegion}</td>
                        <td className="py-3 px-4 font-bold text-slate-900 whitespace-nowrap">{city.populationFormatted}</td>
                        <td className="py-3 px-4 whitespace-nowrap">
                          <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                            {city.cityType}
                          </span>
                        </td>
                        <td className="py-3 px-4 whitespace-nowrap">
                          {city.isMajorSourcingHub ? (
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-200">
                              Major Hub
                            </span>
                          ) : (
                            <span className="text-[10px] text-slate-400">Regional</span>
                          )}
                        </td>
                        <td className="py-3 px-4 text-slate-700 font-medium min-w-[220px]">
                          {city.primaryIndustryOrSourcingFocus}
                        </td>
                        <td className="py-3 px-4 whitespace-nowrap">
                          <div className="flex flex-wrap gap-1">
                            {city.primaryLanguagesSpoken.map((lang, lIdx) => (
                              <span key={lIdx} className="text-[10px] bg-purple-50 text-[#4B286D] px-1.5 py-0.5 rounded border border-purple-100 font-medium">
                                {lang}
                              </span>
                            ))}
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={8} className="py-8 text-center text-slate-400 text-xs">
                        No cities found matching "{citySearchQuery}" in {jobsData.countryName}.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-500 pt-1 px-1">
              <span>Showing <strong>{filteredCities.length}</strong> of <strong>30</strong> most populated cities in {jobsData.countryName}</span>
              <button
                onClick={handleExportMostPopulatedCities}
                className="text-[#4B286D] hover:underline font-bold flex items-center gap-1"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Top 30 Cities CSV</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* SECTION: LABOR LAW, REMOTE & PART-TIME WORK, GDPR DATA PROTECTION & WORK SETUPS */}
      {jobsData.laborLawInfo && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F4EFF9] text-[#4B286D] border border-purple-200 text-xs font-bold mb-2">
                <Scale className="w-3.5 h-3.5 text-[#2B8000]" />
                <span>Statutory Compliance & Legal Intelligence — {jobsData.countryName}</span>
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
                <Landmark className="w-5 h-5 text-[#4B286D]" />
                Labor Laws, Remote Work Rules, GDPR & Work Setups per Country, State & Region
              </h3>
              <p className="text-xs text-slate-500 mt-1 max-w-3xl leading-relaxed">
                Comprehensive statutory regulations, national labor code references, remote & part-time worker protections, GDPR candidate data compliance, and subnational state/regional law variations.
              </p>
            </div>

            {jobsData.laborLawInfo.nationalLaborCodeUrl && (
              <a
                href={jobsData.laborLawInfo.nationalLaborCodeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#4B286D] hover:bg-[#371B54] text-white text-xs font-bold px-4 py-2.5 rounded-2xl transition shrink-0 self-start sm:self-auto shadow-xs"
              >
                <FileText className="w-4 h-4 text-[#66CC00]" />
                <span>Official Labor Code Portal</span>
                <ExternalLink className="w-3.5 h-3.5 text-purple-200" />
              </a>
            )}
          </div>

          {/* Core National Labor Rules Grid (4 Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            
            {/* 1. National Code & Standard Hours */}
            <div className="bg-[#F8F6FA] p-5 rounded-2xl border border-[#E3DDE8] space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#4B286D] uppercase tracking-wider flex items-center gap-1.5">
                  <Landmark className="w-4 h-4 text-[#2B8000]" />
                  <span>National Labor Code Framework</span>
                </span>
                <span className="text-xs font-extrabold px-2.5 py-0.5 rounded-md bg-white text-[#4B286D] border border-purple-200">
                  {jobsData.laborLawInfo.standardWorkWeekHours}
                </span>
              </div>
              <h4 className="text-sm font-extrabold text-slate-900">
                {jobsData.laborLawInfo.nationalLaborCodeName}
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-700 font-medium">
                {jobsData.laborLawInfo.keyLaborHighlights.map((hl, i) => (
                  <li key={`hl-${i}`} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2B8000] shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 2. Part-Time Work Statutory Regulations */}
            <div className="bg-[#F8F6FA] p-5 rounded-2xl border border-[#E3DDE8] space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#4B286D] uppercase tracking-wider flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#2B8000]" />
                  <span>Part-Time Work Regulations & Rights</span>
                </span>
                <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-sky-100 text-sky-800 border border-sky-200">
                  Pro-Rata Rights
                </span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed font-medium">
                {jobsData.laborLawInfo.partTimeRegulations}
              </p>
            </div>

            {/* 3. Remote & Telework Regulations */}
            <div className="bg-[#F8F6FA] p-5 rounded-2xl border border-[#E3DDE8] space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#4B286D] uppercase tracking-wider flex items-center gap-1.5">
                  <Laptop className="w-4 h-4 text-[#2B8000]" />
                  <span>Remote & Telework Regulations</span>
                </span>
                <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 border border-emerald-200">
                  Telework Laws
                </span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed font-medium">
                {jobsData.laborLawInfo.remoteWorkRegulations}
              </p>
            </div>

            {/* 4. GDPR & Candidate Data Protection */}
            <div className="bg-[#F8F6FA] p-5 rounded-2xl border border-[#E3DDE8] space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#4B286D] uppercase tracking-wider flex items-center gap-1.5">
                  <Lock className="w-4 h-4 text-[#2B8000]" />
                  <span>GDPR & Candidate Data Protection</span>
                </span>
                {jobsData.laborLawInfo.dataProtectionLaw.officialUrl && (
                  <a
                    href={jobsData.laborLawInfo.dataProtectionLaw.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-bold text-[#4B286D] hover:underline flex items-center gap-1"
                  >
                    <span>{jobsData.laborLawInfo.dataProtectionLaw.name}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
              <p className="text-xs text-slate-700 leading-relaxed font-medium">
                {jobsData.laborLawInfo.dataProtectionLaw.summary}
              </p>
            </div>

          </div>

          {/* Most Common Work Setups Banner */}
          <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white p-5 rounded-2xl border border-indigo-900 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="text-xs font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
                <Briefcase className="w-4 h-4" />
                <span>Most Common Work Setups — {jobsData.countryName}</span>
              </div>
              <div className="text-sm font-extrabold text-white">
                {jobsData.laborLawInfo.mostCommonWorkSetups.setupType}
              </div>
              <p className="text-xs text-slate-300">
                {jobsData.laborLawInfo.mostCommonWorkSetups.commonPractices}
              </p>
            </div>

            {jobsData.laborLawInfo.mostCommonWorkSetups.sharePercentage && (
              <div className="bg-slate-800/80 border border-slate-700 px-4 py-2.5 rounded-xl shrink-0">
                <div className="text-[10px] text-slate-400 uppercase font-semibold">Workforce Breakdown</div>
                <div className="text-xs font-extrabold text-indigo-300 mt-0.5">
                  {jobsData.laborLawInfo.mostCommonWorkSetups.sharePercentage}
                </div>
              </div>
            )}
          </div>

          {/* Subnational / State / Regional Labor Laws Breakdown */}
          {jobsData.laborLawInfo.subnationalLaborLaws && jobsData.laborLawInfo.subnationalLaborLaws.length > 0 && (
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-extrabold text-slate-900 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#4B286D]" />
                  <span>State, Provincial & Regional Labor Laws ({jobsData.laborLawInfo.subnationalLaborLaws.length} Key Jurisdictions)</span>
                </h4>
                <span className="text-xs text-slate-500 font-medium">State-level labor variations</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {jobsData.laborLawInfo.subnationalLaborLaws.map((sub, i) => (
                  <div key={`sublaw-${i}`} className="bg-[#F8F6FA] p-4 rounded-xl border border-[#E3DDE8] space-y-2 flex flex-col justify-between">
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="font-extrabold text-slate-900 text-sm">{sub.stateOrRegionName}</span>
                        {sub.lawLink && (
                          <a
                            href={sub.lawLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[11px] text-[#4B286D] hover:underline flex items-center gap-1 font-bold"
                          >
                            <span>State Portal</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                      <p className="text-xs text-slate-700 leading-relaxed font-medium">
                        {sub.laborLawSummary}
                      </p>
                      {sub.partTimeOrRemoteRules && (
                        <div className="text-[11px] text-[#4B286D] bg-purple-50 p-2 rounded-lg border border-purple-100 mt-2 font-medium">
                          <strong>Remote/Part-Time:</strong> {sub.partTimeOrRemoteRules}
                        </div>
                      )}
                      {sub.minimumRestOrOvertime && (
                        <div className="text-[11px] text-[#2B8000] bg-emerald-50 p-2 rounded-lg border border-emerald-100 font-medium">
                          <strong>Overtime & Rest:</strong> {sub.minimumRestOrOvertime}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      )}

      {/* SECTION 1: KEY STATS GRID (Employment, Unemployment, Part-Time, Multi-Jobs) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Employment Rate Card */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Employment Rate</span>
            <span className="p-2 rounded-xl bg-emerald-50 text-emerald-600">
              <TrendingUp className="w-5 h-5" />
            </span>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-slate-900">{jobsData.employmentRate}%</div>
            <div className="text-xs text-slate-500 mt-1 flex items-center justify-between">
              <span>Unemployment: <strong className="text-slate-800">{jobsData.unemploymentRate}%</strong></span>
              <span className="text-[11px] text-emerald-600 font-bold">Active Labor Force</span>
            </div>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
            <div
              className="bg-emerald-500 h-2 rounded-full"
              style={{ width: `${jobsData.employmentRate}%` }}
            />
          </div>
        </div>

        {/* Total Labor Force Size Card */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Labor Force Size</span>
            <span className="p-2 rounded-xl bg-indigo-50 text-indigo-600">
              <Users className="w-5 h-5" />
            </span>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-slate-900">{jobsData.laborForceSize}</div>
            <div className="text-xs text-slate-500 mt-1">
              Active working-age population in {jobsData.countryName}
            </div>
          </div>
          <div className="text-[11px] text-indigo-600 font-semibold bg-indigo-50 px-2.5 py-1 rounded-lg inline-block">
            Sourcing Pool Size
          </div>
        </div>

        {/* Part-Time Jobs Card */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Part-Time Jobs</span>
            <span className="p-2 rounded-xl bg-sky-50 text-sky-600">
              <Clock className="w-5 h-5" />
            </span>
          </div>
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-extrabold text-slate-900">{jobsData.partTimeJobs.percentage}%</span>
              <span className="text-xs text-slate-500 font-bold">({jobsData.partTimeJobs.estimatedPeople})</span>
            </div>
            <div className="text-[11px] text-slate-500 mt-1 leading-snug">
              {jobsData.partTimeJobs.notes || 'Working under 30-35 hours weekly.'}
            </div>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
            <div
              className="bg-sky-500 h-2 rounded-full"
              style={{ width: `${Math.min(jobsData.partTimeJobs.percentage * 2, 100)}%` }}
            />
          </div>
        </div>

        {/* Multiple Jobs Holders Card */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Multiple Job Holders</span>
            <span className="p-2 rounded-xl bg-amber-50 text-amber-600">
              <Layers className="w-5 h-5" />
            </span>
          </div>
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-extrabold text-slate-900">{jobsData.multipleJobsHolders.percentage}%</span>
              <span className="text-xs text-slate-500 font-bold">({jobsData.multipleJobsHolders.estimatedPeople})</span>
            </div>
            <div className="text-[11px] text-slate-500 mt-1 leading-snug">
              {jobsData.multipleJobsHolders.notes || 'Holding 2+ active jobs or side contracts.'}
            </div>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
            <div
              className="bg-amber-500 h-2 rounded-full"
              style={{ width: `${Math.min(jobsData.multipleJobsHolders.percentage * 3, 100)}%` }}
            />
          </div>
        </div>

      </div>

      {/* SECTION 2: COMMON JOBS BREAKDOWN & SALARIES */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div>
            <h3 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-indigo-600" />
              Breakdown & Percentage of Most Common Jobs ({jobsData.countryName})
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Dominant employment categories, labor share percentages, and estimated average annual salary in USD.
            </p>
          </div>
          <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-full self-start">
            {jobsData.mostCommonJobs.length} Primary Roles Listed
          </span>
        </div>

        <div className="space-y-4">
          {jobsData.mostCommonJobs.map((job, idx) => (
            <div
              key={`job-${idx}-${job.title}`}
              className="p-4 rounded-2xl bg-slate-50 hover:bg-slate-100/80 border border-slate-200/60 transition space-y-2"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <span className="w-6 h-6 rounded-lg bg-indigo-600 text-white text-xs font-black flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm leading-snug">
                      {job.title}
                    </h4>
                    <span className="text-[11px] font-semibold text-slate-500 bg-slate-200 px-2 py-0.5 rounded-md">
                      {job.category}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4 shrink-0">
                  {job.averageSalaryUsd && (
                    <div className="text-right">
                      <span className="text-[10px] text-slate-400 block font-semibold">EST. AVG SALARY</span>
                      <strong className="text-xs text-emerald-600 font-extrabold">{job.averageSalaryUsd}</strong>
                    </div>
                  )}
                  <div className="text-right min-w-[70px]">
                    <span className="text-[10px] text-slate-400 block font-semibold">WORKFORCE SHARE</span>
                    <strong className="text-sm text-indigo-600 font-extrabold">{job.percentage}%</strong>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-slate-200/80 rounded-full h-2 overflow-hidden mt-2">
                <div
                  className="bg-indigo-600 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${Math.min(job.percentage * 4, 100)}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 3: EDUCATIONAL ATTAINMENT & FIELDS OF STUDY (2 Columns) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Educational Attainment Column */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-6 flex flex-col justify-between">
          <div>
            <div className="border-b border-slate-100 pb-4 mb-4">
              <h3 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-indigo-600" />
                Educational Attainment Breakdown
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Highest level of education completed among the adult working population in {jobsData.countryName}.
              </p>
            </div>

            <div className="space-y-4">
              {jobsData.educationalAttainment.map((edu, idx) => (
                <div key={`edu-${idx}`} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className="text-slate-800">{edu.level}</span>
                    <span className="text-indigo-600 font-extrabold">{edu.percentage}%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                    <div
                      className="bg-indigo-500 h-2.5 rounded-full"
                      style={{ width: `${edu.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 p-4 rounded-2xl bg-indigo-50/60 border border-indigo-100 text-xs text-indigo-950 flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
            <span>
              Sourcing tip: Tertiary graduation rates indicate candidate pools for engineering, management, and legal/finance.
            </span>
          </div>
        </div>

        {/* Field of Studies Column */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-6 flex flex-col justify-between">
          <div>
            <div className="border-b border-slate-100 pb-4 mb-4">
              <h3 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-indigo-600" />
                Fields of Study (Graduate Degree Concentration)
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Distribution of academic degree disciplines among university and college graduates in {jobsData.countryName}.
              </p>
            </div>

            <div className="space-y-3.5">
              {jobsData.fieldOfStudies.map((fos, idx) => (
                <div key={`fos-${idx}`} className="space-y-1">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className="text-slate-800 truncate max-w-[220px]">{fos.field}</span>
                    <span className="text-emerald-600 font-extrabold">{fos.percentage}%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-emerald-500 h-2 rounded-full"
                      style={{ width: `${Math.min(fos.percentage * 3, 100)}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100 text-xs text-emerald-950 flex items-start gap-2">
            <Award className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span>
              Academic concentrations reveal technical capabilities across STEM, Business, Healthcare, and Creative Arts industries.
            </span>
          </div>
        </div>

      </div>

      {/* SECTION 3.5: LITERACY RATE PER COUNTRY, STATES/REGIONS & GLOBAL LITERACY */}
      {jobsData.literacyData && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-6">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100 text-xs font-bold mb-2">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Workforce Quality & Educational Foundation</span>
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
                <span>Literacy Rates & Regional Breakdown — {jobsData.countryName}</span>
              </h3>
              <p className="text-xs text-slate-500 mt-1 max-w-2xl leading-relaxed">
                National adult literacy, youth literacy, digital readiness index, state/regional literacy distribution, and global literacy benchmarks.
              </p>
            </div>
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-full self-start">
              Adult Literacy: {jobsData.literacyData.overallAdultLiteracy}%
            </span>
          </div>

          {/* 4 Literacy KPI Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* 1. Adult Literacy Rate */}
            <div className="bg-slate-50/80 p-5 rounded-2xl border border-slate-200/80 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Adult Literacy Rate</span>
                <span className="p-2 rounded-xl bg-indigo-100 text-indigo-700 font-bold text-xs">
                  Ages 15+
                </span>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-slate-900">{jobsData.literacyData.overallAdultLiteracy}%</div>
                <div className="text-xs text-slate-500 mt-1">
                  Overall population reading & writing proficiency
                </div>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-indigo-600 h-2 rounded-full"
                  style={{ width: `${jobsData.literacyData.overallAdultLiteracy}%` }}
                />
              </div>
            </div>

            {/* 2. Youth Literacy Rate */}
            <div className="bg-slate-50/80 p-5 rounded-2xl border border-slate-200/80 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Youth Literacy Rate</span>
                <span className="p-2 rounded-xl bg-emerald-100 text-emerald-700 font-bold text-xs">
                  Ages 15–24
                </span>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-slate-900">{jobsData.literacyData.youthLiteracy}%</div>
                <div className="text-xs text-slate-500 mt-1">
                  Emerging workforce educational foundation
                </div>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-emerald-500 h-2 rounded-full"
                  style={{ width: `${jobsData.literacyData.youthLiteracy}%` }}
                />
              </div>
            </div>

            {/* 3. Gender Literacy Parity */}
            <div className="bg-slate-50/80 p-5 rounded-2xl border border-slate-200/80 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Gender Parity</span>
                <span className="p-2 rounded-xl bg-purple-100 text-purple-700 font-bold text-xs">
                  M vs F
                </span>
              </div>
              <div className="space-y-1.5">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-600 font-medium">Female Literacy:</span>
                  <strong className="text-purple-700 font-bold">{jobsData.literacyData.femaleLiteracy ?? jobsData.literacyData.overallAdultLiteracy}%</strong>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-600 font-medium">Male Literacy:</span>
                  <strong className="text-slate-900 font-bold">{jobsData.literacyData.maleLiteracy ?? jobsData.literacyData.overallAdultLiteracy}%</strong>
                </div>
              </div>
              <div className="text-[11px] text-purple-700 bg-purple-50 px-2 py-1 rounded-lg font-medium">
                Gender equality index in basic education
              </div>
            </div>

            {/* 4. Digital Literacy Index */}
            <div className="bg-slate-50/80 p-5 rounded-2xl border border-slate-200/80 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Digital Literacy Index</span>
                <span className="p-2 rounded-xl bg-sky-100 text-sky-700 font-bold text-xs">
                  Tech Scale
                </span>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-slate-900">
                  {jobsData.literacyData.digitalLiteracyIndex ?? 85.0}<span className="text-sm font-semibold text-slate-500">/100</span>
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  Computer, internet & software fluency for remote work
                </div>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-sky-500 h-2 rounded-full"
                  style={{ width: `${jobsData.literacyData.digitalLiteracyIndex ?? 85.0}%` }}
                />
              </div>
            </div>

          </div>

          {/* Regional / State Breakdown Table */}
          {jobsData.literacyData.statesOrRegions && jobsData.literacyData.statesOrRegions.length > 0 && (
            <div className="space-y-3 pt-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <h4 className="text-sm font-extrabold text-slate-900 flex items-center gap-2">
                  <Globe className="w-4 h-4 text-indigo-600" />
                  <span>State & Region Literacy Rates ({filteredRegions.length} of {jobsData.literacyData.statesOrRegions.length} Listed)</span>
                </h4>

                {/* State / Region Search Input */}
                <div className="relative w-full sm:w-72">
                  <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    value={regionSearchQuery}
                    onChange={(e) => setRegionSearchQuery(e.target.value)}
                    placeholder={`Search ${jobsData.countryName} states or regions...`}
                    className="w-full pl-8 pr-8 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition"
                  />
                  {regionSearchQuery && (
                    <button
                      onClick={() => setRegionSearchQuery('')}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>

              <div className="overflow-x-auto max-h-[520px] overflow-y-auto rounded-2xl border border-slate-200/80 shadow-xs custom-scrollbar">
                <table className="w-full text-left text-xs relative">
                  <thead className="bg-slate-100/90 backdrop-blur-xs text-slate-700 font-bold border-b border-slate-200 sticky top-0 z-10">
                    <tr>
                      <th className="py-3 px-4">State / Region / Territory</th>
                      <th className="py-3 px-4 text-center">Adult Literacy Rate</th>
                      <th className="py-3 px-4 text-center">Youth Literacy Rate</th>
                      <th className="py-3 px-4">Sourcing & Talent Ecosystem Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white font-medium text-slate-800">
                    {filteredRegions.map((st, i) => (
                      <tr key={`state-lit-${i}`} className="hover:bg-slate-50/80 transition">
                        <td className="py-3 px-4 font-bold text-slate-900 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-indigo-500 shrink-0" />
                          <span>{st.stateOrRegionName}</span>
                        </td>
                        <td className="py-3 px-4 text-center whitespace-nowrap">
                          <span className="px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 font-extrabold text-xs border border-indigo-100">
                            {st.literacyRate}%
                          </span>
                        </td>
                        <td className="py-3 px-4 text-center whitespace-nowrap">
                          <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-extrabold text-xs border border-emerald-100">
                            {st.youthLiteracyRate}%
                          </span>
                        </td>
                        <td className="py-3 px-4 text-slate-600 leading-relaxed max-w-xs sm:max-w-md">
                          {st.notes}
                        </td>
                      </tr>
                    ))}

                    {filteredRegions.length === 0 && (
                      <tr>
                        <td colSpan={4} className="py-8 text-center text-slate-500">
                          <p className="text-xs font-semibold">No state or region matches "{regionSearchQuery}"</p>
                          <button
                            onClick={() => setRegionSearchQuery('')}
                            className="mt-2 text-xs text-indigo-600 font-bold hover:underline"
                          >
                            Clear search filter
                          </button>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Literacy Notes & Global Context Banner */}
          <div className="bg-gradient-to-r from-slate-900 to-indigo-950 text-white rounded-2xl p-5 border border-indigo-800/80 space-y-3">
            <div className="flex items-center gap-2 text-amber-300 font-bold text-xs uppercase tracking-wider">
              <Globe className="w-4 h-4" />
              <span>Global Literacy & Educational Context</span>
            </div>
            <p className="text-xs text-slate-200 leading-relaxed">
              {jobsData.literacyData.literacyNotes || 'Globally, literacy rates indicate the capacity of local labor markets to absorb technical training, adopt software platforms, and deliver high-quality remote output.'}
            </p>
            <div className="text-[11px] text-slate-400 pt-2 border-t border-indigo-900/80 flex flex-wrap items-center justify-between gap-2 font-medium">
              <span>Source: UNESCO Institute for Statistics (UIS) & World Bank Education Statistics</span>
              <span className="text-amber-300 font-semibold">Global Adult Literacy Benchmark: ~87.0%</span>
            </div>
          </div>

        </div>
      )}

      {/* SECTION 4: RECRUITMENT PORTALS & DEEP INTERNET SOURCING SEARCH */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-6">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-100 pb-5">
          <div>
            <h3 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-indigo-600" />
              Job Sites & Recruitment Portals ({jobsData.countryName})
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Direct recruitment channels, general portals, tech boards, government sites, and remote staffing hubs for {jobsData.countryName}.
            </p>
          </div>

          {/* AI Internet Deep Search Button */}
          <button
            onClick={handleLiveInternetSearchJobSites}
            disabled={isLoadingLivePortals}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 via-indigo-700 to-slate-900 hover:from-indigo-500 hover:to-slate-800 text-white font-bold text-xs px-4 py-2.5 rounded-2xl transition shadow-md disabled:opacity-50 shrink-0 self-start lg:self-auto"
          >
            {isLoadingLivePortals ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-amber-300" />
                <span>Searching Live Internet Portals...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Search Internet for ALL Local Portals (AI)</span>
              </>
            )}
          </button>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-50 p-3.5 rounded-2xl border border-slate-200/70">
          
          {/* Category Pill Filters */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 custom-scrollbar">
            <Filter className="w-3.5 h-3.5 text-slate-400 shrink-0 mr-1" />
            {categories.map((cat) => (
              <button
                key={`portal-cat-${cat}`}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-bold px-3 py-1.5 rounded-xl whitespace-nowrap transition ${
                  selectedCategory === cat
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:bg-slate-200/80 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Quick Keyword Search Input */}
          <div className="relative min-w-[220px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={siteSearchQuery}
              onChange={(e) => setSiteSearchQuery(e.target.value)}
              placeholder="Filter portal name or keyword..."
              className="w-full bg-white border border-slate-200 text-slate-800 text-xs rounded-xl pl-9 pr-8 py-1.5 focus:outline-none focus:border-indigo-500 font-medium"
            />
            {siteSearchQuery && (
              <button
                onClick={() => setSiteSearchQuery('')}
                className="text-slate-400 hover:text-slate-600 absolute right-2.5 top-1/2 -translate-y-1/2"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* AI LIVE INTERNET SEARCH RESULTS DISPLAY */}
        {liveSearchAttempted && (
          <div className="bg-gradient-to-r from-indigo-950/90 via-slate-900 to-indigo-950 border border-indigo-700/80 rounded-2xl p-5 text-white space-y-4 animate-fadeIn shadow-lg">
            <div className="flex items-center justify-between border-b border-indigo-800/80 pb-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-300" />
                <h4 className="font-extrabold text-sm text-white">
                  AI Live Internet Search Results ({jobsData.countryName})
                </h4>
                <span className="text-[10px] bg-amber-400/20 text-amber-300 border border-amber-400/30 px-2 py-0.5 rounded-full font-bold">
                  Live Web Indexed
                </span>
              </div>
              <button
                onClick={() => setLivePortals([])}
                className="text-xs text-slate-400 hover:text-white"
              >
                Clear Live Results
              </button>
            </div>

            {isLoadingLivePortals ? (
              <div className="py-8 text-center space-y-3">
                <Loader2 className="w-8 h-8 text-indigo-400 animate-spin mx-auto" />
                <p className="text-xs text-slate-300 font-medium">
                  Scanning global domain registers, regional employment agency databases, and local job boards for {jobsData.countryName}...
                </p>
              </div>
            ) : filteredLiveSites.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-1">
                {filteredLiveSites.map((site, idx) => (
                  <a
                    key={`live-site-${idx}-${site.name}`}
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl border border-indigo-800/80 bg-slate-900/90 hover:bg-slate-800 hover:border-amber-400/60 transition group flex flex-col justify-between space-y-3 shadow-md"
                  >
                    <div className="space-y-1.5">
                      <div className="flex items-start justify-between gap-2">
                        <h5 className="font-bold text-white text-xs group-hover:text-amber-300 transition flex items-center gap-1.5">
                          <span>{site.name}</span>
                          <ExternalLink className="w-3.5 h-3.5 text-indigo-400 group-hover:text-amber-300 transition shrink-0" />
                        </h5>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-900/80 text-indigo-300 border border-indigo-700 shrink-0">
                          {site.category}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-300 leading-relaxed">
                        {site.description}
                      </p>
                    </div>

                    <div className="text-[10px] font-semibold text-amber-300 flex items-center gap-1 pt-2 border-t border-indigo-900/60">
                      <span>Visit Live Portal</span>
                      <ChevronDown className="w-3 h-3 -rotate-90" />
                    </div>
                  </a>
                ))}
              </div>
            ) : (
              <div className="py-4 text-center text-xs text-slate-300">
                No live portals match filter category "{selectedCategory}" or query "{siteSearchQuery}".
              </div>
            )}
          </div>
        )}

        {/* CURATED PRIMARY JOB SITES GRID */}
        <div>
          <div className="flex items-center justify-between mb-3 text-xs font-bold text-slate-600">
            <span>Core Curated Recruitment Portals ({filteredPresetSites.length})</span>
            {selectedCategory !== 'All' && <span>Category: {selectedCategory}</span>}
          </div>

          {filteredPresetSites.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredPresetSites.map((site, idx) => (
                <a
                  key={`site-${idx}-${site.name}`}
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 rounded-2xl border border-slate-200 hover:border-indigo-400 bg-slate-50/60 hover:bg-white transition group flex flex-col justify-between space-y-3 shadow-xs hover:shadow-md"
                >
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-extrabold text-slate-900 text-sm group-hover:text-indigo-600 transition flex items-center gap-1.5">
                        <span>{site.name}</span>
                        <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-600 transition shrink-0" />
                      </h4>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-indigo-100 text-indigo-700 shrink-0">
                        {site.category}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {site.description}
                    </p>
                  </div>

                  <div className="text-[11px] font-bold text-indigo-600 flex items-center gap-1 group-hover:translate-x-1 transition pt-2 border-t border-slate-100">
                    <span>Visit Recruitment Portal</span>
                    <ChevronDown className="w-3.5 h-3.5 -rotate-90" />
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center bg-slate-50 rounded-2xl border border-dashed border-slate-200 text-xs text-slate-500 space-y-2">
              <ListFilter className="w-6 h-6 text-slate-400 mx-auto" />
              <p>No curated job portals match category "{selectedCategory}" or search query "{siteSearchQuery}".</p>
              <button
                onClick={handleLiveInternetSearchJobSites}
                className="text-indigo-600 font-bold hover:underline"
              >
                Click here to run AI Live Internet Search for {jobsData.countryName} portals
              </button>
            </div>
          )}
        </div>

      </div>

    </div>
  );
};
