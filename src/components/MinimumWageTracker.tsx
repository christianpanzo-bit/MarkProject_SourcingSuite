import React, { useState, useMemo, useRef, useEffect } from 'react';
import { MinimumWageEntry, Country, SubnationalWageRate } from '../types';
import { MINIMUM_WAGE_DATA, getCompleteMinimumWageData } from '../data/minimumWages';
import { COUNTRIES_DATA } from '../data/countries';
import {
  Coins,
  Search,
  ArrowUpDown,
  Calculator,
  Info,
  DollarSign,
  Euro,
  Globe,
  Award,
  CheckCircle2,
  AlertCircle,
  Clock,
  TrendingUp,
  BarChart2,
  ChevronRight,
  ExternalLink,
  Sliders,
  MapPin,
  Building2,
  Sparkles,
  X,
  RotateCcw,
  ChevronDown,
  Check
} from 'lucide-react';

interface MinimumWageTrackerProps {
  onSelectCountry?: (country: Country) => void;
}

export const MinimumWageTracker: React.FC<MinimumWageTrackerProps> = ({ onSelectCountry }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [selectedLawType, setSelectedLawType] = useState<string>('All');
  const [selectedCountryCode, setSelectedCountryCode] = useState<string>('US');
  const [selectedStateName, setSelectedStateName] = useState<string>('National Standard');
  const [sortBy, setSortBy] = useState<'usd' | 'eur' | 'local' | 'name'>('usd');
  const [sortOrder, setSortOrder] = useState<'desc' | 'asc'>('desc');
  const [workHoursPerWeek, setWorkHoursPerWeek] = useState<number>(40);
  const [customHourlyLocal, setCustomHourlyLocal] = useState<string>('');

  // Searchable Country Picker state
  const [countrySearchQuery, setCountrySearchQuery] = useState('');
  const [isCountryPickerOpen, setIsCountryPickerOpen] = useState(false);
  const countryPickerRef = useRef<HTMLDivElement>(null);

  // Searchable State/Region Picker state
  const [stateSearchQuery, setStateSearchQuery] = useState('');
  const [isStatePickerOpen, setIsStatePickerOpen] = useState(false);
  const statePickerRef = useRef<HTMLDivElement>(null);

  // Complete 195+ Countries minimum wage entries
  const allMinimumWageEntries = useMemo(() => {
    return getCompleteMinimumWageData(COUNTRIES_DATA);
  }, []);

  // Close comboboxes on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (countryPickerRef.current && !countryPickerRef.current.contains(e.target as Node)) {
        setIsCountryPickerOpen(false);
      }
      if (statePickerRef.current && !statePickerRef.current.contains(e.target as Node)) {
        setIsStatePickerOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Filtered countries for the top Searchable Country Combobox
  const selectableCountries = useMemo(() => {
    if (!countrySearchQuery.trim()) return allMinimumWageEntries;
    const q = countrySearchQuery.toLowerCase().trim();
    return allMinimumWageEntries.filter(
      (entry) =>
        entry.countryName.toLowerCase().includes(q) ||
        entry.countryCode.toLowerCase().includes(q) ||
        entry.currencyCode.toLowerCase().includes(q) ||
        entry.currencyName.toLowerCase().includes(q)
    );
  }, [allMinimumWageEntries, countrySearchQuery]);

  // Find currently selected country entry
  const selectedEntry = useMemo(() => {
    return (
      allMinimumWageEntries.find((item) => item.countryCode === selectedCountryCode) ||
      allMinimumWageEntries[0]
    );
  }, [allMinimumWageEntries, selectedCountryCode]);

  // Filtered states/regions for the top Searchable State Combobox
  const selectableSubnationalRates = useMemo(() => {
    if (!selectedEntry.subnationalRates) return [];
    if (!stateSearchQuery.trim()) return selectedEntry.subnationalRates;
    const q = stateSearchQuery.toLowerCase().trim();
    return selectedEntry.subnationalRates.filter(
      (sub) =>
        sub.stateOrRegionName.toLowerCase().includes(q) ||
        (sub.notes && sub.notes.toLowerCase().includes(q))
    );
  }, [selectedEntry, stateSearchQuery]);

  // Selected state or region object if a subnational rate is picked
  const selectedSubnationalRate = useMemo<SubnationalWageRate | null>(() => {
    if (!selectedEntry.subnationalRates || selectedStateName === 'National Standard') {
      return null;
    }
    return selectedEntry.subnationalRates.find((s) => s.stateOrRegionName === selectedStateName) || null;
  }, [selectedEntry, selectedStateName]);

  // Matching Country object for detail modal triggers
  const matchingCountry = useMemo(() => {
    return COUNTRIES_DATA.find((c) => c.code === selectedCountryCode);
  }, [selectedCountryCode]);

  // Check if directory filters are active
  const isDirectoryFilterActive = useMemo(() => {
    return (
      searchQuery.trim() !== '' ||
      selectedRegion !== 'All' ||
      selectedLawType !== 'All' ||
      sortBy !== 'usd' ||
      sortOrder !== 'desc'
    );
  }, [searchQuery, selectedRegion, selectedLawType, sortBy, sortOrder]);

  // Reset Directory Filters
  const handleResetDirectoryFilters = () => {
    setSearchQuery('');
    setSelectedRegion('All');
    setSelectedLawType('All');
    setSortBy('usd');
    setSortOrder('desc');
  };

  // Reset Country & State Selection to default (US)
  const handleResetCountrySelection = () => {
    setSelectedCountryCode('US');
    setSelectedStateName('National Standard');
    setCustomHourlyLocal('');
    setCountrySearchQuery('');
    setStateSearchQuery('');
    setIsCountryPickerOpen(false);
    setIsStatePickerOpen(false);
  };

  // Filtered and sorted data list
  const filteredEntries = useMemo(() => {
    return allMinimumWageEntries.filter((item) => {
      // Region filter
      if (selectedRegion !== 'All' && item.region !== selectedRegion) {
        return false;
      }

      // Statutory / Law type filter
      if (selectedLawType === 'statutory' && !item.hasStatutoryMinimum) return false;
      if (selectedLawType === 'collective' && item.hasStatutoryMinimum) return false;
      if (selectedLawType === 'subnational' && (!item.subnationalRates || item.subnationalRates.length === 0)) return false;

      // Search query filter (matches country name, code, currency, or state/region name)
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = item.countryName.toLowerCase().includes(q);
        const matchesCode = item.countryCode.toLowerCase().includes(q);
        const matchesCurrName = item.currencyName.toLowerCase().includes(q);
        const matchesCurrCode = item.currencyCode.toLowerCase().includes(q);
        const matchesState = item.subnationalRates?.some((s) => s.stateOrRegionName.toLowerCase().includes(q));

        return matchesName || matchesCode || matchesCurrName || matchesCurrCode || matchesState;
      }

      return true;
    }).sort((a, b) => {
      let valueA = 0;
      let valueB = 0;

      if (sortBy === 'usd') {
        valueA = a.hourlyUsd;
        valueB = b.hourlyUsd;
      } else if (sortBy === 'eur') {
        valueA = a.hourlyEur;
        valueB = b.hourlyEur;
      } else if (sortBy === 'local') {
        valueA = a.hourlyLocal;
        valueB = b.hourlyLocal;
      } else if (sortBy === 'name') {
        const comp = a.countryName.localeCompare(b.countryName);
        return sortOrder === 'asc' ? comp : -comp;
      }

      return sortOrder === 'desc' ? valueB - valueA : valueA - valueB;
    });
  }, [allMinimumWageEntries, searchQuery, selectedRegion, selectedLawType, sortBy, sortOrder]);

  // Global Statistics
  const globalStats = useMemo(() => {
    const validUsd = allMinimumWageEntries.map((d) => d.hourlyUsd).filter((v) => v > 0);
    const highest = Math.max(...validUsd, 0);
    const average = validUsd.reduce((a, b) => a + b, 0) / (validUsd.length || 1);
    const statutoryCount = allMinimumWageEntries.filter((d) => d.hasStatutoryMinimum).length;
    const subnationalCount = allMinimumWageEntries.filter((d) => d.subnationalRates && d.subnationalRates.length > 0).length;

    const highestEntry = allMinimumWageEntries.find((d) => d.hourlyUsd === highest);

    return {
      highest,
      highestCountry: highestEntry?.countryName || 'Switzerland',
      highestFlag: highestEntry?.flag || '🇨🇭',
      averageUsd: average,
      totalCount: allMinimumWageEntries.length,
      statutoryCount,
      subnationalCount
    };
  }, [allMinimumWageEntries]);

  // Effective hourly rate calculation (incorporating selected state/region rate if applicable)
  const activeRates = useMemo(() => {
    let local = selectedEntry.hourlyLocal;
    let usd = selectedEntry.hourlyUsd;
    let eur = selectedEntry.hourlyEur;

    if (selectedSubnationalRate) {
      local = selectedSubnationalRate.hourlyLocal;
      usd = selectedSubnationalRate.hourlyUsd;
      eur = selectedSubnationalRate.hourlyEur;
    }

    if (customHourlyLocal && !isNaN(parseFloat(customHourlyLocal))) {
      local = parseFloat(customHourlyLocal);
      const ratioUsd = selectedEntry.hourlyLocal > 0 ? selectedEntry.hourlyUsd / selectedEntry.hourlyLocal : 1;
      const ratioEur = selectedEntry.hourlyLocal > 0 ? selectedEntry.hourlyEur / selectedEntry.hourlyLocal : 1;
      usd = local * ratioUsd;
      eur = local * ratioEur;
    }

    return { local, usd, eur };
  }, [selectedEntry, selectedSubnationalRate, customHourlyLocal]);

  // Calculate earnings benchmarks
  const earnings = useMemo(() => {
    const hourlyLocal = activeRates.local;
    const hourlyUsd = activeRates.usd;
    const hourlyEur = activeRates.eur;

    const weeklyLocal = hourlyLocal * workHoursPerWeek;
    const weeklyUsd = hourlyUsd * workHoursPerWeek;
    const weeklyEur = hourlyEur * workHoursPerWeek;

    const monthlyLocal = weeklyLocal * (52 / 12);
    const monthlyUsd = weeklyUsd * (52 / 12);
    const monthlyEur = weeklyEur * (52 / 12);

    const annualLocal = weeklyLocal * 52;
    const annualUsd = weeklyUsd * 52;
    const annualEur = weeklyEur * 52;

    return {
      hourly: { local: hourlyLocal, usd: hourlyUsd, eur: hourlyEur },
      weekly: { local: weeklyLocal, usd: weeklyUsd, eur: weeklyEur },
      monthly: { local: monthlyLocal, usd: monthlyUsd, eur: monthlyEur },
      annual: { local: annualLocal, usd: annualUsd, eur: annualEur }
    };
  }, [activeRates, workHoursPerWeek]);

  // Format currency helpers
  const formatLocal = (amount: number, symbol: string) => {
    return `${symbol}${amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  const formatUsd = (amount: number) => {
    return `$${amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  const formatEur = (amount: number) => {
    return `€${amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Sleek Compact Quick Stats Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="bg-white border border-[#E3DDE8] rounded-xl p-3 shadow-2xs flex items-center justify-between">
          <div>
            <span className="text-[10px] text-slate-500 font-extrabold uppercase tracking-wider block">Highest Wage</span>
            <div className="text-xs sm:text-sm font-extrabold text-[#2B8000] flex items-center gap-1 mt-0.5">
              <span>{globalStats.highestFlag}</span>
              <span className="truncate">{globalStats.highestCountry}</span>
            </div>
          </div>
          <span className="text-xs font-bold text-slate-700 bg-[#F4EFF9] px-2 py-0.5 rounded-md border border-purple-200 shrink-0">
            ${globalStats.highest.toFixed(2)}/hr
          </span>
        </div>

        <div className="bg-white border border-[#E3DDE8] rounded-xl p-3 shadow-2xs flex items-center justify-between">
          <div>
            <span className="text-[10px] text-slate-500 font-extrabold uppercase tracking-wider block">Global Avg Wage</span>
            <div className="text-xs sm:text-sm font-extrabold text-[#4B286D] mt-0.5">
              ${globalStats.averageUsd.toFixed(2)} / hr
            </div>
          </div>
          <span className="text-[11px] text-slate-600 font-medium bg-slate-100 px-2 py-0.5 rounded-md shrink-0">
            ~€{(globalStats.averageUsd * 0.92).toFixed(2)}
          </span>
        </div>

        <div className="bg-white border border-[#E3DDE8] rounded-xl p-3 shadow-2xs flex items-center justify-between">
          <div>
            <span className="text-[10px] text-slate-500 font-extrabold uppercase tracking-wider block">Total Tracked</span>
            <div className="text-xs sm:text-sm font-extrabold text-slate-900 mt-0.5">
              {globalStats.totalCount} Nations
            </div>
          </div>
          <span className="text-[11px] text-slate-600 font-medium bg-slate-100 px-2 py-0.5 rounded-md shrink-0">
            {globalStats.statutoryCount} Laws
          </span>
        </div>

        <div className="bg-white border border-[#E3DDE8] rounded-xl p-3 shadow-2xs flex items-center justify-between">
          <div>
            <span className="text-[10px] text-slate-500 font-extrabold uppercase tracking-wider block">State/Regional Rates</span>
            <div className="text-xs sm:text-sm font-extrabold text-[#4B286D] mt-0.5 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#2B8000]" />
              {globalStats.subnationalCount} Nations
            </div>
          </div>
          <span className="text-[11px] text-[#2B8000] font-bold bg-[#E6F7D9] px-2 py-0.5 rounded-md shrink-0">
            Active
          </span>
        </div>
      </div>

      {/* Main Focus Country Card & Subnational Selector & Earnings Calculator */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-6">
        
        {/* Country & State Selector Toolbar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div className="space-y-3 flex-1">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                Select Country & Region / State (Type to Locate)
              </label>

              {/* Reset button if country or state is non-default */}
              {(selectedCountryCode !== 'US' || selectedStateName !== 'National Standard' || customHourlyLocal) && (
                <button
                  onClick={handleResetCountrySelection}
                  className="inline-flex items-center gap-1 text-xs text-indigo-600 hover:text-indigo-800 font-semibold transition bg-indigo-50 hover:bg-indigo-100 px-2.5 py-1 rounded-lg border border-indigo-100"
                  title="Reset to United States default"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset Selection</span>
                </button>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              
              {/* Searchable Country Picker Combobox */}
              <div className="relative" ref={countryPickerRef}>
                <div className="flex items-center gap-2 bg-slate-50 border border-slate-300 hover:border-indigo-400 rounded-xl px-3 py-2 transition shadow-xs">
                  <span className="text-2xl">{selectedEntry.flag}</span>
                  <div className="flex-1 min-w-[180px] max-w-[240px]">
                    <input
                      type="text"
                      value={isCountryPickerOpen ? countrySearchQuery : `${selectedEntry.countryName} (${selectedEntry.countryCode})`}
                      onFocus={() => {
                        setIsCountryPickerOpen(true);
                        setCountrySearchQuery('');
                      }}
                      onChange={(e) => {
                        setCountrySearchQuery(e.target.value);
                        if (!isCountryPickerOpen) setIsCountryPickerOpen(true);
                      }}
                      placeholder="Type country name..."
                      className="w-full bg-transparent text-slate-900 font-bold text-sm sm:text-base focus:outline-none placeholder:text-slate-400 placeholder:font-normal"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsCountryPickerOpen(!isCountryPickerOpen)}
                    className="p-1 hover:bg-slate-200 rounded-lg text-slate-500"
                  >
                    <ChevronDown className={`w-4 h-4 transition-transform ${isCountryPickerOpen ? 'rotate-180' : ''}`} />
                  </button>
                </div>

                {/* Dropdown list for countries */}
                {isCountryPickerOpen && (
                  <div className="absolute left-0 top-full mt-2 w-80 max-h-72 bg-white border border-slate-200 rounded-2xl shadow-xl z-50 overflow-hidden flex flex-col">
                    <div className="p-2 border-b border-slate-100 bg-slate-50 flex items-center justify-between">
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider px-2">
                        Search 195+ Countries ({selectableCountries.length})
                      </span>
                      {countrySearchQuery && (
                        <button
                          onClick={() => setCountrySearchQuery('')}
                          className="text-xs text-slate-400 hover:text-slate-600 px-1"
                        >
                          Clear
                        </button>
                      )}
                    </div>
                    
                    <div className="overflow-y-auto flex-1 divide-y divide-slate-100 p-1">
                      {selectableCountries.length === 0 ? (
                        <div className="p-4 text-center text-xs text-slate-500">
                          No matching country found for "{countrySearchQuery}".
                        </div>
                      ) : (
                        selectableCountries.map((entry) => {
                          const isCurSelected = entry.countryCode === selectedCountryCode;
                          return (
                            <button
                              key={entry.countryCode}
                              type="button"
                              onClick={() => {
                                setSelectedCountryCode(entry.countryCode);
                                setSelectedStateName('National Standard');
                                setCustomHourlyLocal('');
                                setIsCountryPickerOpen(false);
                                setCountrySearchQuery('');
                              }}
                              className={`w-full text-left p-2.5 rounded-xl transition flex items-center justify-between text-xs hover:bg-indigo-50 ${
                                isCurSelected ? 'bg-indigo-50/80 font-bold text-indigo-900' : 'text-slate-800'
                              }`}
                            >
                              <div className="flex items-center gap-2.5 truncate">
                                <span className="text-xl">{entry.flag}</span>
                                <div className="truncate">
                                  <span className="font-bold text-slate-900 block truncate">{entry.countryName}</span>
                                  <span className="text-[10px] text-slate-500">{entry.region} • {entry.currencyCode}</span>
                                </div>
                              </div>

                              <div className="text-right shrink-0">
                                <span className="font-semibold text-emerald-700 block">${entry.hourlyUsd.toFixed(2)}/hr</span>
                                {isCurSelected && <Check className="w-3.5 h-3.5 text-indigo-600 inline ml-1" />}
                              </div>
                            </button>
                          );
                        })
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Searchable State / Region Picker Combobox */}
              {selectedEntry.subnationalRates && selectedEntry.subnationalRates.length > 0 && (
                <div className="relative" ref={statePickerRef}>
                  <div className="flex items-center gap-2 bg-amber-50 border border-amber-300 hover:border-amber-400 rounded-xl px-3 py-2 shadow-xs transition">
                    <MapPin className="w-4 h-4 text-amber-700 shrink-0" />
                    <div className="flex-1 min-w-[170px] max-w-[230px]">
                      <span className="text-[10px] font-bold text-amber-900 uppercase block tracking-wider -mb-0.5">
                        State / Region ({selectedEntry.subnationalRates.length})
                      </span>
                      <input
                        type="text"
                        value={isStatePickerOpen ? stateSearchQuery : selectedStateName}
                        onFocus={() => {
                          setIsStatePickerOpen(true);
                          setStateSearchQuery('');
                        }}
                        onChange={(e) => {
                          setStateSearchQuery(e.target.value);
                          if (!isStatePickerOpen) setIsStatePickerOpen(true);
                        }}
                        placeholder="Type region (e.g. NCR, Cebu)..."
                        className="w-full bg-transparent text-slate-900 font-bold text-xs sm:text-sm focus:outline-none placeholder:text-amber-700/60"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => setIsStatePickerOpen(!isStatePickerOpen)}
                      className="p-1 hover:bg-amber-100 rounded-lg text-amber-800"
                    >
                      <ChevronDown className={`w-4 h-4 transition-transform ${isStatePickerOpen ? 'rotate-180' : ''}`} />
                    </button>
                  </div>

                  {/* Dropdown list for States / Regions */}
                  {isStatePickerOpen && (
                    <div className="absolute left-0 top-full mt-2 w-80 max-h-72 bg-white border border-amber-200 rounded-2xl shadow-xl z-50 overflow-hidden flex flex-col">
                      <div className="p-2 border-b border-amber-100 bg-amber-50/80 flex items-center justify-between">
                        <span className="text-[11px] font-bold text-amber-900 uppercase tracking-wider px-2">
                          {selectedEntry.countryName} Regions ({selectedEntry.subnationalRates.length})
                        </span>
                        {stateSearchQuery && (
                          <button
                            onClick={() => setStateSearchQuery('')}
                            className="text-xs text-amber-700 hover:text-amber-900 px-1"
                          >
                            Clear
                          </button>
                        )}
                      </div>

                      <div className="overflow-y-auto flex-1 divide-y divide-slate-100 p-1">
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedStateName('National Standard');
                            setCustomHourlyLocal('');
                            setIsStatePickerOpen(false);
                            setStateSearchQuery('');
                          }}
                          className={`w-full text-left p-2.5 rounded-xl transition flex items-center justify-between text-xs hover:bg-amber-50 ${
                            selectedStateName === 'National Standard' ? 'bg-amber-100/70 font-bold text-amber-950' : 'text-slate-800'
                          }`}
                        >
                          <div>
                            <span className="font-bold text-slate-900 block">National Baseline / Average</span>
                            <span className="text-[10px] text-slate-500">Country standard rate</span>
                          </div>
                          <span className="font-semibold text-amber-800">
                            {selectedEntry.currencySymbol}{selectedEntry.hourlyLocal.toFixed(2)}/hr
                          </span>
                        </button>

                        {selectableSubnationalRates.length === 0 ? (
                          <div className="p-4 text-center text-xs text-slate-500">
                            No region matched "{stateSearchQuery}".
                          </div>
                        ) : (
                          selectableSubnationalRates.map((sub) => {
                            const isSelectedState = sub.stateOrRegionName === selectedStateName;
                            return (
                              <button
                                key={sub.stateOrRegionName}
                                type="button"
                                onClick={() => {
                                  setSelectedStateName(sub.stateOrRegionName);
                                  setCustomHourlyLocal('');
                                  setIsStatePickerOpen(false);
                                  setStateSearchQuery('');
                                }}
                                className={`w-full text-left p-2.5 rounded-xl transition flex items-center justify-between text-xs hover:bg-amber-50 ${
                                  isSelectedState ? 'bg-amber-100/70 font-bold text-amber-950' : 'text-slate-800'
                                }`}
                              >
                                <div className="pr-2">
                                  <span className="font-bold text-slate-900 block">{sub.stateOrRegionName}</span>
                                  {sub.notes && <span className="text-[10px] text-slate-500 block truncate max-w-[180px]">{sub.notes}</span>}
                                </div>
                                <span className="font-bold text-amber-900 shrink-0">
                                  {selectedEntry.currencySymbol}{sub.hourlyLocal.toFixed(2)}/hr
                                </span>
                              </button>
                            );
                          })
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {matchingCountry && onSelectCountry && (
                <button
                  onClick={() => onSelectCountry(matchingCountry)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-800 bg-indigo-50 hover:bg-indigo-100 px-3 py-2 rounded-xl transition"
                  title="View full language and country facts"
                >
                  <span>Country Details</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              )}

            </div>
          </div>

          {/* Workweek preset toggle */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="bg-slate-100 p-1 rounded-xl flex items-center text-xs font-medium text-slate-600">
              <span className="px-2.5 text-slate-400">Workweek:</span>
              {[20, 35, 40, 48].map((hours) => (
                <button
                  key={hours}
                  onClick={() => setWorkHoursPerWeek(hours)}
                  className={`px-2.5 py-1 rounded-lg transition font-bold ${
                    workHoursPerWeek === hours
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'hover:text-slate-900 hover:bg-slate-200'
                  }`}
                >
                  {hours} hrs
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Selected State Notice Banner if active */}
        {selectedSubnationalRate && (
          <div className="bg-gradient-to-r from-amber-500/10 via-amber-400/15 to-amber-500/10 border border-amber-300 rounded-xl p-3 text-xs text-amber-950 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-700 shrink-0" />
              <span>
                Viewing specific regional wage for <strong>{selectedSubnationalRate.stateOrRegionName}</strong> in {selectedEntry.countryName}.
              </span>
            </div>
            {selectedSubnationalRate.notes && (
              <span className="text-[11px] font-medium text-amber-800 italic bg-amber-100/80 px-2 py-0.5 rounded-md">
                "{selectedSubnationalRate.notes}"
              </span>
            )}
          </div>
        )}

        {/* 3 Benchmark Currency Hourly Wage Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Card 1: Local Currency Rate */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50/50 rounded-2xl p-5 border border-amber-200/80 space-y-2 relative overflow-hidden">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800 flex items-center gap-1.5">
                <Coins className="w-4 h-4 text-amber-600" />
                Local Currency
              </span>
              <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-amber-200/80 text-amber-900">
                {selectedEntry.currencyCode} ({selectedEntry.currencySymbol})
              </span>
            </div>

            <div className="pt-1">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {formatLocal(earnings.hourly.local, selectedEntry.currencySymbol)}
                <span className="text-sm font-normal text-slate-600"> / hr</span>
              </div>
              <div className="text-xs font-medium text-amber-900/80 mt-1">
                {selectedEntry.currencyName}
              </div>
            </div>

            <div className="pt-2 text-xs text-slate-600 border-t border-amber-200/60 flex items-center justify-between">
              <span>{workHoursPerWeek}h / week total:</span>
              <strong className="text-slate-900 font-bold">
                {formatLocal(earnings.weekly.local, selectedEntry.currencySymbol)}
              </strong>
            </div>
          </div>

          {/* Card 2: US Dollar (USD) Rate */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50/50 rounded-2xl p-5 border border-emerald-200/80 space-y-2 relative overflow-hidden">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
                <DollarSign className="w-4 h-4 text-emerald-600" />
                Based on US Dollar
              </span>
              <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-200/80 text-emerald-900">
                USD ($)
              </span>
            </div>

            <div className="pt-1">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {formatUsd(earnings.hourly.usd)}
                <span className="text-sm font-normal text-slate-600"> / hr</span>
              </div>
              <div className="text-xs font-medium text-emerald-900/80 mt-1">
                {earnings.hourly.usd >= 7.25 ? (
                  <span className="text-emerald-700 font-semibold">
                    +{(earnings.hourly.usd - 7.25).toFixed(2)} above US Fed Baseline ($7.25)
                  </span>
                ) : (
                  <span className="text-amber-700 font-semibold">
                    -{(7.25 - earnings.hourly.usd).toFixed(2)} vs US Fed Baseline ($7.25)
                  </span>
                )}
              </div>
            </div>

            <div className="pt-2 text-xs text-slate-600 border-t border-emerald-200/60 flex items-center justify-between">
              <span>{workHoursPerWeek}h / week total:</span>
              <strong className="text-slate-900 font-bold">
                {formatUsd(earnings.weekly.usd)}
              </strong>
            </div>
          </div>

          {/* Card 3: Euro (EUR) Rate */}
          <div className="bg-gradient-to-br from-indigo-50 to-blue-50/50 rounded-2xl p-5 border border-indigo-200/80 space-y-2 relative overflow-hidden">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-800 flex items-center gap-1.5">
                <Euro className="w-4 h-4 text-indigo-600" />
                Based on Euro
              </span>
              <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-indigo-200/80 text-indigo-900">
                EUR (€)
              </span>
            </div>

            <div className="pt-1">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {formatEur(earnings.hourly.eur)}
                <span className="text-sm font-normal text-slate-600"> / hr</span>
              </div>
              <div className="text-xs font-medium text-indigo-900/80 mt-1">
                Standardized EU Benchmark Rate
              </div>
            </div>

            <div className="pt-2 text-xs text-slate-600 border-t border-indigo-200/60 flex items-center justify-between">
              <span>{workHoursPerWeek}h / week total:</span>
              <strong className="text-slate-900 font-bold">
                {formatEur(earnings.weekly.eur)}
              </strong>
            </div>
          </div>

        </div>

        {/* Detailed Earnings Projection Table & Legal Context */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-2">
          
          {/* Earnings Projection breakdown (2 cols) */}
          <div className="lg:col-span-2 bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <Calculator className="w-4 h-4 text-indigo-600" />
                Gross Salary Projections ({workHoursPerWeek} Hours / Week)
                {selectedStateName !== 'National Standard' && (
                  <span className="text-amber-700 text-xs font-normal">({selectedStateName})</span>
                )}
              </h3>
              <span className="text-xs text-slate-500 font-medium">
                Effective Year: {selectedEntry.effectiveYear}
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-500 font-semibold">
                    <th className="pb-2">Period</th>
                    <th className="pb-2 text-right">Local ({selectedEntry.currencyCode})</th>
                    <th className="pb-2 text-right">US Dollar ($)</th>
                    <th className="pb-2 text-right">Euro (€)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200/70 font-medium text-slate-800">
                  <tr>
                    <td className="py-2.5 font-bold text-slate-900">Hourly Rate</td>
                    <td className="py-2.5 text-right font-bold text-amber-700">
                      {formatLocal(earnings.hourly.local, selectedEntry.currencySymbol)}
                    </td>
                    <td className="py-2.5 text-right font-bold text-emerald-700">
                      {formatUsd(earnings.hourly.usd)}
                    </td>
                    <td className="py-2.5 text-right font-bold text-indigo-700">
                      {formatEur(earnings.hourly.eur)}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2.5 font-semibold">Weekly ({workHoursPerWeek} hrs)</td>
                    <td className="py-2.5 text-right">
                      {formatLocal(earnings.weekly.local, selectedEntry.currencySymbol)}
                    </td>
                    <td className="py-2.5 text-right text-emerald-800 font-semibold">
                      {formatUsd(earnings.weekly.usd)}
                    </td>
                    <td className="py-2.5 text-right text-indigo-800 font-semibold">
                      {formatEur(earnings.weekly.eur)}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2.5 font-semibold">Monthly (~160 hrs)</td>
                    <td className="py-2.5 text-right">
                      {formatLocal(earnings.monthly.local, selectedEntry.currencySymbol)}
                    </td>
                    <td className="py-2.5 text-right text-emerald-800 font-semibold">
                      {formatUsd(earnings.monthly.usd)}
                    </td>
                    <td className="py-2.5 text-right text-indigo-800 font-semibold">
                      {formatEur(earnings.monthly.eur)}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2.5 font-bold text-slate-900">Annual Gross (~2,080 hrs)</td>
                    <td className="py-2.5 text-right font-extrabold text-amber-900">
                      {formatLocal(earnings.annual.local, selectedEntry.currencySymbol)}
                    </td>
                    <td className="py-2.5 text-right font-extrabold text-emerald-900">
                      {formatUsd(earnings.annual.usd)}
                    </td>
                    <td className="py-2.5 text-right font-extrabold text-indigo-900">
                      {formatEur(earnings.annual.eur)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Custom Rate Tester */}
            <div className="pt-3 border-t border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <span className="text-slate-600">
                Want to test a custom wage rate for {selectedEntry.countryName}?
              </span>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  step="0.10"
                  value={customHourlyLocal}
                  onChange={(e) => setCustomHourlyLocal(e.target.value)}
                  placeholder={`Custom ${selectedEntry.currencySymbol}/hr`}
                  className="bg-white border border-slate-300 rounded-lg px-3 py-1.5 text-slate-900 font-medium text-xs w-36 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
                {customHourlyLocal && (
                  <button
                    onClick={() => setCustomHourlyLocal('')}
                    className="text-xs text-slate-500 hover:text-slate-800 underline"
                  >
                    Reset
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Legal Framework & Notes (1 col) */}
          <div className="bg-indigo-50/50 rounded-2xl p-5 border border-indigo-100 space-y-3 text-xs">
            <h4 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
              <Info className="w-4 h-4 text-indigo-600" />
              Statutory Law & Notes
            </h4>

            <div className="space-y-2 text-slate-700 leading-relaxed">
              <div className="flex items-center gap-2">
                {selectedEntry.hasStatutoryMinimum ? (
                  <span className="inline-flex items-center gap-1 text-emerald-700 bg-emerald-100/80 font-bold px-2 py-0.5 rounded-md">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Statutory Minimum Wage Law
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 text-amber-800 bg-amber-100/80 font-bold px-2 py-0.5 rounded-md">
                    <AlertCircle className="w-3.5 h-3.5" />
                    Collective Bargaining / Sectoral
                  </span>
                )}
              </div>

              <p className="text-slate-600 pt-1">
                {selectedEntry.notes}
              </p>

              <div className="bg-white p-3 rounded-xl border border-indigo-100 text-slate-600 space-y-1 mt-2">
                <span className="font-bold text-slate-800 block">Region: {selectedEntry.region}</span>
                {selectedEntry.subnationalRates && selectedEntry.subnationalRates.length > 0 ? (
                  <span className="text-amber-800 font-medium block">
                    ✓ Features {selectedEntry.subnationalRates.length} state or regional wage variations.
                  </span>
                ) : (
                  <span>Standard national rate applies uniformly across regions.</span>
                )}
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Global Country List / Comparison Grid */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-6">
        
        {/* Search, Filter & Sort Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-3">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Globe className="w-5 h-5 text-indigo-600" />
                Global Minimum Wage Directory
              </h3>
              {isDirectoryFilterActive && (
                <button
                  onClick={handleResetDirectoryFilters}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-rose-600 hover:text-rose-800 bg-rose-50 hover:bg-rose-100 border border-rose-200 px-2.5 py-1 rounded-lg transition"
                  title="Reset all directory search and filters"
                >
                  <RotateCcw className="w-3 h-3.5" />
                  <span>Reset Filters</span>
                </button>
              )}
            </div>
            <p className="text-xs text-slate-500">
              Showing {filteredEntries.length} of {allMinimumWageEntries.length} countries. Click any country to view full rates and subnational state filters.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Search Input */}
            <div className="relative flex-1 sm:w-64">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search country, state (e.g. California, Geneva)..."
                className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-8 py-2 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5"
                  title="Clear search query"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Region Filter */}
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
            >
              {['All', 'Europe', 'Americas', 'Asia', 'Oceania', 'Africa'].map((r) => (
                <option key={r} value={r}>
                  {r === 'All' ? 'All Continents' : r}
                </option>
              ))}
            </select>

            {/* Statutory / State Filter */}
            <select
              value={selectedLawType}
              onChange={(e) => setSelectedLawType(e.target.value)}
              className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
            >
              <option value="All">All Legal Frameworks</option>
              <option value="statutory">Statutory Laws Only</option>
              <option value="collective">Collective Bargaining Only</option>
              <option value="subnational">Has State/Region Variations</option>
            </select>

            {/* Sort Options */}
            <select
              value={`${sortBy}-${sortOrder}`}
              onChange={(e) => {
                const [by, order] = e.target.value.split('-') as ['usd' | 'eur' | 'local' | 'name', 'desc' | 'asc'];
                setSortBy(by);
                setSortOrder(order);
              }}
              className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
            >
              <option value="usd-desc">Sort by USD Rate (High → Low)</option>
              <option value="usd-asc">Sort by USD Rate (Low → High)</option>
              <option value="eur-desc">Sort by EUR Rate (High → Low)</option>
              <option value="local-desc">Sort by Local Wage (High → Low)</option>
              <option value="name-asc">Sort by Country Name (A → Z)</option>
            </select>
          </div>
        </div>

        {/* Directory Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredEntries.map((item) => {
            const isSelected = item.countryCode === selectedCountryCode;
            const hasSubnational = item.subnationalRates && item.subnationalRates.length > 0;

            return (
              <div
                key={item.countryCode}
                onClick={() => {
                  setSelectedCountryCode(item.countryCode);
                  setSelectedStateName('National Standard');
                  setCustomHourlyLocal('');
                  window.scrollTo({ top: 120, behavior: 'smooth' });
                }}
                className={`p-4 rounded-2xl border transition cursor-pointer relative flex flex-col justify-between ${
                  isSelected
                    ? 'bg-indigo-50/90 border-indigo-500 ring-2 ring-indigo-500/20 shadow-md'
                    : 'bg-white border-slate-200/90 hover:border-indigo-300 hover:shadow-md'
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{item.flag}</span>
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm">{item.countryName}</h4>
                        <span className="text-[11px] font-semibold text-slate-500 block">
                          {item.region}
                        </span>
                      </div>
                    </div>

                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 uppercase">
                      {item.currencyCode}
                    </span>
                  </div>

                  {/* Regional variation tag if available */}
                  {hasSubnational && (
                    <div className="mt-2.5 inline-flex items-center gap-1 text-[10px] font-bold text-amber-800 bg-amber-100/80 px-2 py-0.5 rounded-md">
                      <MapPin className="w-3 h-3 text-amber-600" />
                      {item.subnationalRates?.length} State/Region Rates
                    </div>
                  )}

                  {/* Hourly Rates Stack */}
                  <div className="mt-3 space-y-1.5 pt-3 border-t border-slate-100">
                    
                    {/* Local Rate */}
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-500 font-medium">Local Currency:</span>
                      <strong className="text-slate-900 font-bold">
                        {item.currencySymbol}{item.hourlyLocal.toLocaleString()}{' '}
                        <span className="text-[10px] text-slate-400 font-normal">{item.currencyCode}</span>
                      </strong>
                    </div>

                    {/* USD Rate */}
                    <div className="flex items-center justify-between text-xs bg-emerald-50/60 p-1.5 rounded-lg border border-emerald-100">
                      <span className="text-emerald-800 font-semibold flex items-center gap-1">
                        <DollarSign className="w-3 h-3 text-emerald-600" />
                        USD Rate:
                      </span>
                      <strong className="text-emerald-900 font-bold">
                        ${item.hourlyUsd.toFixed(2)} / hr
                      </strong>
                    </div>

                    {/* EUR Rate */}
                    <div className="flex items-center justify-between text-xs bg-indigo-50/60 p-1.5 rounded-lg border border-indigo-100">
                      <span className="text-indigo-800 font-semibold flex items-center gap-1">
                        <Euro className="w-3 h-3 text-indigo-600" />
                        EUR Rate:
                      </span>
                      <strong className="text-indigo-900 font-bold">
                        €{item.hourlyEur.toFixed(2)} / hr
                      </strong>
                    </div>

                  </div>
                </div>

                <div className="mt-3 pt-2 text-[11px] text-slate-500 line-clamp-2 border-t border-slate-100 flex items-center justify-between">
                  <span>{item.hasStatutoryMinimum ? 'Statutory Law' : 'Collective Agreement'}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
