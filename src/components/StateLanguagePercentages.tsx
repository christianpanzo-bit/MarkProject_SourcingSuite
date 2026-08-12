import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Country } from '../types';
import { COUNTRIES_DATA } from '../data/countries';
import { CountryShapeSvg } from './CountryShapeSvg';
import { PRESET_STATE_LANGUAGES, CountryStateData, StateLanguageBreakdown } from '../data/stateLanguages';

// Helper to construct baseline state data for any country not in presets
function getFallbackCountryStateData(country: Country): CountryStateData {
  const primaryLang = country.languages[0]?.name || 'English';
  const secondaryLang = country.languages[1]?.name || (country.languages.length > 1 ? country.languages[1].name : undefined);
  const thirdLang = country.languages[2]?.name;

  const p1 = country.languages[0]?.percentage || 75;
  const p2 = country.languages[1]?.percentage || 15;
  const p3 = country.languages[2]?.percentage || 10;

  const basePercentages: { [key: string]: number } = {};
  basePercentages[primaryLang] = p1;
  if (secondaryLang) basePercentages[secondaryLang] = p2;
  if (thirdLang) basePercentages[thirdLang] = p3;
  if (Object.keys(basePercentages).length === 1 && p1 < 100) {
    basePercentages['Regional Dialects & Indigenous Languages'] = 100 - p1;
  }

  const isIslands =
    country.subregion?.toLowerCase().includes('caribbean') ||
    country.subregion?.toLowerCase().includes('polynesia') ||
    country.subregion?.toLowerCase().includes('micronesia');
  const subdivisionType: 'State' | 'Province' | 'Canton' | 'Department' | 'Region' | 'Territory' = isIslands
    ? 'Territory'
    : 'Province';

  const popMillions = (country.population / 1000000).toFixed(1);

  return {
    countryCode: country.code,
    countryName: country.name,
    subdivisionType,
    states: [
      {
        stateName: `${country.capital} Metropolitan District`,
        capitalOrCity: country.capital,
        populationEstimate: `${Math.max(0.1, Number((country.population * 0.4 / 1000000).toFixed(1)))} Million`,
        primaryLanguage: primaryLang,
        secondaryLanguage: secondaryLang,
        percentages: { ...basePercentages },
        notes: `Main urban, government, and commercial center around ${country.capital}.`
      },
      {
        stateName: `Northern & Coastal Divisions`,
        capitalOrCity: `Northern Hub`,
        populationEstimate: `${Math.max(0.1, Number((country.population * 0.35 / 1000000).toFixed(1)))} Million`,
        primaryLanguage: primaryLang,
        secondaryLanguage: secondaryLang,
        percentages: secondaryLang
          ? {
              [primaryLang]: Math.max(45, p1 - 10),
              [secondaryLang]: Math.min(45, p2 + 10),
              ...(thirdLang ? { [thirdLang]: p3 } : {})
            }
          : basePercentages,
        notes: `Northern and maritime administrative regions with diverse regional speaker communities.`
      },
      {
        stateName: `Central & Southern Inland`,
        capitalOrCity: `Central Regional Center`,
        populationEstimate: `${Math.max(0.1, Number((country.population * 0.25 / 1000000).toFixed(1)))} Million`,
        primaryLanguage: primaryLang,
        percentages: basePercentages,
        notes: `Inland agricultural and suburban areas where ${primaryLang} is predominant.`
      }
    ]
  };
}
import {
  Building2,
  Search,
  Globe,
  Sparkles,
  MapPin,
  RotateCcw,
  X,
  Loader2,
  Layers,
  ChevronRight,
  ChevronDown,
  Filter,
  PieChart,
  Users,
  Info,
  Check
} from 'lucide-react';

interface StateLanguagePercentagesProps {
  onSelectCountry: (country: Country) => void;
  initialCountryCode?: string;
}

const DEFAULT_COUNTRY_CODE = 'US';

// Color palette generator for percentage bars
const BAR_COLORS = [
  { bg: 'bg-indigo-600', text: 'text-indigo-600', border: 'border-indigo-200', lightBg: 'bg-indigo-50' },
  { bg: 'bg-rose-500', text: 'text-rose-600', border: 'border-rose-200', lightBg: 'bg-rose-50' },
  { bg: 'bg-amber-500', text: 'text-amber-600', border: 'border-amber-200', lightBg: 'bg-amber-50' },
  { bg: 'bg-emerald-500', text: 'text-emerald-600', border: 'border-emerald-200', lightBg: 'bg-emerald-50' },
  { bg: 'bg-sky-500', text: 'text-sky-600', border: 'border-sky-200', lightBg: 'bg-sky-50' },
  { bg: 'bg-purple-600', text: 'text-purple-600', border: 'border-purple-200', lightBg: 'bg-purple-50' },
];

export const StateLanguagePercentages: React.FC<StateLanguagePercentagesProps> = ({
  onSelectCountry,
  initialCountryCode,
}) => {
  const [selectedCountryCode, setSelectedCountryCode] = useState<string>(initialCountryCode || '');
  const [countrySearchInput, setCountrySearchInput] = useState<string>('');
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [stateSearchFilter, setStateSearchFilter] = useState<string>('');
  const [selectedLanguageFilter, setSelectedLanguageFilter] = useState<string>('ALL');
  const [aiGeneratedData, setAiGeneratedData] = useState<{ [code: string]: CountryStateData }>({});
  const [loadingAi, setLoadingAi] = useState<boolean>(false);
  const [aiError, setAiError] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close country dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Active Country object
  const activeCountry = useMemo(() => {
    if (!selectedCountryCode) return null;
    return COUNTRIES_DATA.find((c) => c.code === selectedCountryCode) || null;
  }, [selectedCountryCode]);

  // Combined Preset + AI Generated + Fallback State Data
  const currentStateData: CountryStateData | null = useMemo(() => {
    if (!selectedCountryCode || !activeCountry) return null;
    if (aiGeneratedData[selectedCountryCode]) {
      return aiGeneratedData[selectedCountryCode];
    }
    if (PRESET_STATE_LANGUAGES[selectedCountryCode]) {
      return PRESET_STATE_LANGUAGES[selectedCountryCode];
    }
    return getFallbackCountryStateData(activeCountry);
  }, [selectedCountryCode, aiGeneratedData, activeCountry]);

  // Automatically fetch detailed AI state percentages when a non-preset country is selected
  useEffect(() => {
    if (
      selectedCountryCode &&
      activeCountry &&
      !PRESET_STATE_LANGUAGES[selectedCountryCode] &&
      !aiGeneratedData[selectedCountryCode]
    ) {
      handleGenerateAiStateLanguages();
    }
  }, [selectedCountryCode, activeCountry]);

  // Extract all unique languages present in active country's states
  const availableLanguagesInCountry = useMemo(() => {
    if (!currentStateData) return [];
    const set = new Set<string>();
    currentStateData.states.forEach((st) => {
      Object.keys(st.percentages).forEach((l) => set.add(l.trim()));
    });
    return Array.from(set).sort();
  }, [currentStateData]);

  // Reset search, country selection, and language filters back to clean blank state
  const handleReset = () => {
    setSelectedCountryCode('');
    setCountrySearchInput('');
    setIsDropdownOpen(false);
    setStateSearchFilter('');
    setSelectedLanguageFilter('ALL');
    setAiError(null);
  };

  // Filter countries list by typing search in the combobox
  const searchableCountries = useMemo(() => {
    if (!countrySearchInput.trim()) return COUNTRIES_DATA;
    const q = countrySearchInput.toLowerCase().trim();
    return COUNTRIES_DATA.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.code.toLowerCase().includes(q) ||
        c.capital.toLowerCase().includes(q) ||
        c.languages.some((l) => l.name.toLowerCase().includes(q))
    );
  }, [countrySearchInput]);

  // Filter states of the currently selected country
  const displayedStates = useMemo(() => {
    if (!currentStateData) return [];
    let list = currentStateData.states;

    // Filter by specific language
    if (selectedLanguageFilter !== 'ALL') {
      const targetLang = selectedLanguageFilter.toLowerCase().trim();
      list = list.filter((st) =>
        st.primaryLanguage.toLowerCase().includes(targetLang) ||
        (st.secondaryLanguage && st.secondaryLanguage.toLowerCase().includes(targetLang)) ||
        Object.keys(st.percentages).some((l) => l.toLowerCase().includes(targetLang) && (st.percentages[l] > 0))
      );
    }

    // Filter by state search text
    if (stateSearchFilter.trim()) {
      const q = stateSearchFilter.toLowerCase().trim();
      list = list.filter(
        (st) =>
          st.stateName.toLowerCase().includes(q) ||
          st.capitalOrCity.toLowerCase().includes(q) ||
          st.primaryLanguage.toLowerCase().includes(q) ||
          Object.keys(st.percentages).some((l) => l.toLowerCase().includes(q))
      );
    }

    return list;
  }, [currentStateData, selectedLanguageFilter, stateSearchFilter]);

  // Request Gemini to generate state language breakdown for ANY country
  const handleGenerateAiStateLanguages = async () => {
    if (!activeCountry) return;
    setLoadingAi(true);
    setAiError(null);

    try {
      const res = await fetch('/api/gemini/state-languages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          countryName: activeCountry.name,
          countryCode: activeCountry.code,
        }),
      });

      if (!res.ok) {
        throw new Error('Failed to generate state language percentages');
      }

      const data = await res.json();

      if (data.states && Array.isArray(data.states)) {
        const formatted: CountryStateData = {
          countryCode: activeCountry.code,
          countryName: activeCountry.name,
          subdivisionType: data.subdivisionType || 'State/Province',
          states: data.states,
        };

        setAiGeneratedData((prev) => ({
          ...prev,
          [activeCountry.code]: formatted,
        }));
      } else {
        throw new Error('Invalid state language structure received');
      }
    } catch (err: any) {
      console.error(err);
      setAiError(err.message || 'Error communicating with Gemini AI.');
    } finally {
      setLoadingAi(false);
    }
  };

  const isFiltered = Boolean(
    selectedCountryCode !== '' ||
    countrySearchInput.trim() !== '' ||
    stateSearchFilter.trim() !== '' ||
    selectedLanguageFilter !== 'ALL'
  );

  return (
    <div className="space-y-6">
      
      {/* Control Bar: Searchable Country Selector & Reset */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          
          {/* Searchable Country Combobox Dropdown */}
          <div className="flex-1 relative" ref={dropdownRef}>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
              Select or Type Country Name:
            </label>
            
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
              <input
                type="text"
                value={
                  isDropdownOpen
                    ? countrySearchInput
                    : activeCountry
                    ? `${activeCountry.flag} ${activeCountry.name} (${activeCountry.capital})`
                    : countrySearchInput
                }
                onChange={(e) => {
                  setCountrySearchInput(e.target.value);
                  if (!isDropdownOpen) setIsDropdownOpen(true);
                }}
                onFocus={() => {
                  setIsDropdownOpen(true);
                  if (activeCountry) {
                    setCountrySearchInput('');
                  }
                }}
                placeholder="Type country name, capital, or code to locate..."
                className="w-full bg-slate-50 border border-slate-300 text-slate-900 font-bold text-sm rounded-xl pl-9 pr-16 py-2.5 focus:outline-none focus:border-indigo-600 focus:bg-white transition shadow-sm"
              />

              <div className="absolute right-2.5 top-1/2 -translate-y-1/2 flex items-center gap-1">
                {(selectedCountryCode || countrySearchInput) && (
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedCountryCode('');
                      setCountrySearchInput('');
                      setIsDropdownOpen(false);
                      setStateSearchFilter('');
                      setSelectedLanguageFilter('ALL');
                    }}
                    className="p-1 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition"
                    title="Clear country selection"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="p-1 text-slate-400 hover:text-slate-700 rounded-lg"
                >
                  <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </div>

            {/* Dropdown Options List */}
            {isDropdownOpen && (
              <div className="absolute left-0 right-0 top-full mt-1.5 bg-white border border-slate-200 rounded-xl shadow-xl z-50 max-h-72 overflow-y-auto p-1.5 space-y-0.5">
                {searchableCountries.length > 0 ? (
                  searchableCountries.map((c) => {
                    const isSelected = selectedCountryCode === c.code;
                    return (
                      <button
                        key={`st-combobox-${c.code}`}
                        type="button"
                        onClick={() => {
                          setSelectedCountryCode(c.code);
                          setCountrySearchInput('');
                          setIsDropdownOpen(false);
                          setStateSearchFilter('');
                          setSelectedLanguageFilter('ALL');
                        }}
                        className={`w-full text-left px-3 py-2 rounded-lg text-xs transition flex items-center justify-between ${
                          isSelected
                            ? 'bg-indigo-50 text-indigo-900 font-bold border border-indigo-100'
                            : 'hover:bg-slate-100 text-slate-800'
                        }`}
                      >
                        <div className="flex items-center gap-2.5 truncate">
                          <span className="text-base leading-none">{c.flag}</span>
                          <span className="font-bold">{c.name}</span>
                          <span className="text-slate-400 font-normal">({c.capital})</span>
                        </div>
                        {isSelected && <Check className="w-4 h-4 text-indigo-600 shrink-0" />}
                      </button>
                    );
                  })
                ) : (
                  <div className="p-4 text-center text-xs text-slate-500 font-medium">
                    No countries matching "{countrySearchInput}"
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Reset Button */}
          <div className="sm:self-end">
            <button
              type="button"
              onClick={handleReset}
              disabled={!isFiltered}
              className={`w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 border shrink-0 ${
                isFiltered
                  ? 'bg-indigo-600 hover:bg-indigo-700 text-white border-indigo-600 shadow-sm cursor-pointer'
                  : 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed opacity-60'
              }`}
              title="Reset country selection and state filters"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Filters</span>
            </button>
          </div>

        </div>
      </div>

      {/* Selected Country Banner & State Breakdown Section */}
      {activeCountry ? (
        <>
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <CountryShapeSvg
                countryCode={activeCountry.code}
                countryName={activeCountry.name}
                className="w-16 h-16 shrink-0"
                fillColor="#6366f1"
              />
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-3xl">{activeCountry.flag}</span>
                  <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                    {activeCountry.name}
                  </h3>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                    {activeCountry.code}
                  </span>
                </div>

                <p className="text-xs text-slate-500 mt-1">
                  Capital: <strong className="text-slate-800">{activeCountry.capital}</strong> • Population:{' '}
                  <strong className="text-slate-800">{(activeCountry.population / 1000000).toFixed(1)}M</strong> •
                  Multilingual Index:{' '}
                  <strong className="text-amber-600">{activeCountry.multilingualScore.toFixed(1)}/10</strong>
                </p>

                <div className="flex flex-wrap gap-1 mt-2">
                  {activeCountry.languages.map((l, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-semibold px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-100"
                    >
                      {l.name} {l.percentage && `(${l.percentage}%)`}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-2 shrink-0">
              <button
                onClick={() => onSelectCountry(activeCountry)}
                className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition"
              >
                Full {activeCountry.name} Profile →
              </button>
            </div>
          </div>

          {/* Main State / Provincial Breakdown Section */}
          {currentStateData ? (
            <div className="space-y-4">
              
              {/* Subheader with state filter & language filter dropdown */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm">
                <div className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-indigo-600 shrink-0" />
                  <h4 className="text-base font-bold text-slate-900">
                    {activeCountry.name} {currentStateData.subdivisionType}s ({displayedStates.length} / {currentStateData.states.length})
                  </h4>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  {/* Language Filter Dropdown */}
                  {availableLanguagesInCountry.length > 0 && (
                    <div className="flex items-center gap-1.5">
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider shrink-0">
                        Language:
                      </span>
                      <select
                        value={selectedLanguageFilter}
                        onChange={(e) => setSelectedLanguageFilter(e.target.value)}
                        className="bg-slate-50 border border-slate-300 text-slate-900 font-bold text-xs rounded-xl px-2.5 py-1.5 focus:outline-none focus:border-indigo-600"
                      >
                        <option value="ALL">🌐 All Languages ({availableLanguagesInCountry.length})</option>
                        {availableLanguagesInCountry.map((langName) => (
                          <option key={`st-lang-${langName}`} value={langName}>
                            {langName}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  {/* Filter states inside country */}
                  <div className="relative flex-1 min-w-[160px] sm:w-52">
                    <Filter className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      value={stateSearchFilter}
                      onChange={(e) => setStateSearchFilter(e.target.value)}
                      placeholder={`Search ${currentStateData.subdivisionType.toLowerCase()}s...`}
                      className="w-full bg-slate-50 text-slate-900 text-xs rounded-xl pl-8 pr-7 py-1.5 border border-slate-300 focus:outline-none focus:border-indigo-600"
                    />
                    {stateSearchFilter && (
                      <button
                        onClick={() => setStateSearchFilter('')}
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 p-0.5"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    )}
                  </div>

                  {/* Reset State Filters Button */}
                  {(stateSearchFilter || selectedLanguageFilter !== 'ALL' || selectedCountryCode !== '') && (
                    <button
                      onClick={handleReset}
                      className="bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 text-xs font-bold px-3 py-1.5 rounded-xl transition flex items-center gap-1 shrink-0"
                      title="Reset state filters and clear country selection"
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>Reset Filters</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Grid of State Cards */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {displayedStates.map((st, idx) => (
                  <div
                    key={`state-${st.stateName}-${idx}`}
                    className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm hover:border-indigo-300 transition space-y-4 flex flex-col justify-between"
                  >
                    <div>
                      {/* State Title & Capital */}
                      <div className="flex items-start justify-between border-b border-slate-100 pb-3 gap-3">
                        <div>
                          <h5 className="font-bold text-slate-900 text-lg flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-indigo-600 shrink-0" />
                            {st.stateName}
                          </h5>
                          <p className="text-xs text-slate-500 mt-0.5">
                            Capital/Center: <strong className="text-slate-700">{st.capitalOrCity}</strong>
                            {st.populationEstimate && ` • Pop: ${st.populationEstimate}`}
                          </p>
                        </div>

                        <div className="text-right shrink-0">
                          <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-700 border border-indigo-200 block">
                            Primary: {st.primaryLanguage}
                          </span>
                          {st.secondaryLanguage && (
                            <span className="text-[10px] font-semibold text-slate-500 block mt-1">
                              Co-spoken: {st.secondaryLanguage}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Language Percentages Stacked Bar & List */}
                      <div className="mt-4 space-y-3">
                        <div className="text-xs font-bold text-slate-500 uppercase tracking-wider flex justify-between">
                          <span>Language Speaker Breakdown</span>
                          <span className="text-[10px] text-slate-400">% of State Population</span>
                        </div>

                        {/* Stacked visual percentage bar */}
                        <div className="w-full h-3.5 bg-slate-100 rounded-full overflow-hidden flex shadow-inner">
                          {Object.entries(st.percentages).map(([lName, rawPct], lIdx) => {
                            const pct = Math.max(0, Math.min(100, Number(rawPct) || 0));
                            const colorObj = BAR_COLORS[lIdx % BAR_COLORS.length];
                            return (
                              <div
                                key={lName}
                                style={{ width: `${pct}%` }}
                                className={`h-full ${colorObj.bg} transition-all duration-500`}
                                title={`${lName}: ${pct}%`}
                              />
                            );
                          })}
                        </div>

                        {/* Detailed Percentage list */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-1">
                          {Object.entries(st.percentages).map(([lName, rawPct], lIdx) => {
                            const pct = Number(rawPct) || 0;
                            const colorObj = BAR_COLORS[lIdx % BAR_COLORS.length];
                            return (
                              <div
                                key={lName}
                                className={`p-2 rounded-xl border ${colorObj.lightBg} ${colorObj.border} flex flex-col justify-between`}
                              >
                                <span className="text-xs font-bold text-slate-800 truncate" title={lName}>
                                  {lName}
                                </span>
                                <span className={`text-sm font-extrabold ${colorObj.text} mt-0.5`}>
                                  {pct}%
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    {/* Cultural/Linguistic Context notes */}
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs text-slate-600 flex items-start gap-2">
                      <Info className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-800">Linguistic Context:</strong> {st.notes}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            /* Empty State / Gemini AI State Generator Prompt */
            <div className="bg-white p-8 rounded-2xl border border-dashed border-slate-300 text-center space-y-4 max-w-xl mx-auto my-6">
              <Sparkles className="w-10 h-10 text-indigo-600 mx-auto" />
              <div>
                <h4 className="font-bold text-slate-900 text-lg">
                  No preset state percentages for {activeCountry.name}
                </h4>
                <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
                  Use Gemini AI to generate a realistic state and provincial language percentage breakdown for {activeCountry.name}!
                </p>
              </div>

              {aiError && (
                <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-xl">
                  {aiError}
                </div>
              )}

              <button
                onClick={handleGenerateAiStateLanguages}
                disabled={loadingAi}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs px-5 py-3 rounded-xl transition inline-flex items-center gap-2 shadow-sm disabled:opacity-50"
              >
                {loadingAi ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Analyzing {activeCountry.name} State Percentages with Gemini...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>Generate AI State Language Breakdown for {activeCountry.name}</span>
                  </>
                )}
              </button>
            </div>
          )}
        </>
      ) : (
        /* Blank Initial State Prompt when no country is selected */
        <div className="bg-white p-12 rounded-2xl border border-slate-200/80 shadow-sm text-center space-y-4 my-2">
          <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl border border-indigo-100 flex items-center justify-center mx-auto shadow-sm">
            <Building2 className="w-8 h-8" />
          </div>
          <div className="max-w-md mx-auto space-y-1.5">
            <h3 className="text-lg font-bold text-slate-900">Select a Country to View Language Breakdown</h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Type or select a country from the dropdown menu above to display detailed state and provincial speaker percentages.
            </p>
          </div>
        </div>
      )}

    </div>
  );
};
