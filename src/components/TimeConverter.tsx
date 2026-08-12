import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  GLOBAL_COUNTRY_TIMEZONES,
  TimeZoneLocation,
  getFormattedTimeForZone
} from '../data/timezones';
import { getCountryHolidays, CountryHoliday } from '../data/countryHolidays';
import {
  Clock,
  ArrowRightLeft,
  Calendar,
  Globe,
  Sun,
  Moon,
  Briefcase,
  Users,
  Plus,
  Trash2,
  ChevronDown,
  RotateCcw,
  Sparkles,
  Info,
  Check,
  Search,
  AlertCircle,
  Building2,
  CheckCircle2
} from 'lucide-react';

export const TimeConverter: React.FC = () => {
  // Live current date tick state
  const [now, setNow] = useState<Date>(new Date());

  // Location 1 (Source) & Location 2 (Target)
  const [sourceId, setSourceId] = useState<string>('US-CA'); // California
  const [targetId, setTargetId] = useState<string>('JP');    // Japan

  // Custom hour slider state (0 to 23 hours in source location)
  const [selectedSourceHour, setSelectedSourceHour] = useState<number>(() => {
    return new Date().getHours();
  });
  const [selectedSourceMinute, setSelectedSourceMinute] = useState<number>(0);

  // Search combobox open states
  const [isSourceOpen, setIsSourceOpen] = useState(false);
  const [sourceQuery, setSourceQuery] = useState('');
  const sourceRef = useRef<HTMLDivElement>(null);

  const [isTargetOpen, setIsTargetOpen] = useState(false);
  const [targetQuery, setTargetQuery] = useState('');
  const targetRef = useRef<HTMLDivElement>(null);

  // Team Board Search Combobox
  const [isTeamAddOpen, setIsTeamAddOpen] = useState(false);
  const [teamAddQuery, setTeamAddQuery] = useState('');
  const teamAddRef = useRef<HTMLDivElement>(null);

  // Holiday Explorer state
  const [activeHolidayTab, setActiveHolidayTab] = useState<'source' | 'target' | 'all'>('source');
  const [holidaySearchQuery, setHolidaySearchQuery] = useState('');

  // Multi-location team grid items
  const [teamLocationIds, setTeamLocationIds] = useState<string[]>([
    'US-CA',
    'US-NY',
    'GB',
    'CH',
    'PH',
    'JP'
  ]);

  // Update live clock every second
  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Close comboboxes when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (sourceRef.current && !sourceRef.current.contains(e.target as Node)) {
        setIsSourceOpen(false);
      }
      if (targetRef.current && !targetRef.current.contains(e.target as Node)) {
        setIsTargetOpen(false);
      }
      if (teamAddRef.current && !teamAddRef.current.contains(e.target as Node)) {
        setIsTeamAddOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Selected source & target objects
  const sourceLocation = useMemo(() => {
    return (
      GLOBAL_COUNTRY_TIMEZONES.find((t) => t.id === sourceId) ||
      GLOBAL_COUNTRY_TIMEZONES[4] // CA default
    );
  }, [sourceId]);

  const targetLocation = useMemo(() => {
    return (
      GLOBAL_COUNTRY_TIMEZONES.find((t) => t.id === targetId) ||
      GLOBAL_COUNTRY_TIMEZONES[16] // JP default
    );
  }, [targetId]);

  // Filtered dropdown search lists
  const filteredSourceLocations = useMemo(() => {
    if (!sourceQuery.trim()) return GLOBAL_COUNTRY_TIMEZONES;
    const q = sourceQuery.toLowerCase().trim();
    return GLOBAL_COUNTRY_TIMEZONES.filter(
      (loc) =>
        loc.countryName.toLowerCase().includes(q) ||
        (loc.stateOrRegionName && loc.stateOrRegionName.toLowerCase().includes(q)) ||
        loc.capitalOrMajorCity.toLowerCase().includes(q) ||
        loc.utcOffsetLabel.toLowerCase().includes(q)
    );
  }, [sourceQuery]);

  const filteredTargetLocations = useMemo(() => {
    if (!targetQuery.trim()) return GLOBAL_COUNTRY_TIMEZONES;
    const q = targetQuery.toLowerCase().trim();
    return GLOBAL_COUNTRY_TIMEZONES.filter(
      (loc) =>
        loc.countryName.toLowerCase().includes(q) ||
        (loc.stateOrRegionName && loc.stateOrRegionName.toLowerCase().includes(q)) ||
        loc.capitalOrMajorCity.toLowerCase().includes(q) ||
        loc.utcOffsetLabel.toLowerCase().includes(q) ||
        loc.countryCode.toLowerCase().includes(q)
    );
  }, [targetQuery]);

  const filteredTeamAddLocations = useMemo(() => {
    const unadded = GLOBAL_COUNTRY_TIMEZONES.filter((loc) => !teamLocationIds.includes(loc.id));
    if (!teamAddQuery.trim()) return unadded;
    const q = teamAddQuery.toLowerCase().trim();
    return unadded.filter(
      (loc) =>
        loc.countryName.toLowerCase().includes(q) ||
        (loc.stateOrRegionName && loc.stateOrRegionName.toLowerCase().includes(q)) ||
        loc.capitalOrMajorCity.toLowerCase().includes(q) ||
        loc.utcOffsetLabel.toLowerCase().includes(q) ||
        loc.countryCode.toLowerCase().includes(q)
    );
  }, [teamAddQuery, teamLocationIds]);

  // Holidays data computations
  const sourceHolidays = useMemo(() => {
    return getCountryHolidays(sourceLocation.countryCode, sourceLocation.countryName, sourceLocation.flag);
  }, [sourceLocation]);

  const targetHolidays = useMemo(() => {
    return getCountryHolidays(targetLocation.countryCode, targetLocation.countryName, targetLocation.flag);
  }, [targetLocation]);

  const displayedHolidays = useMemo(() => {
    let list: CountryHoliday[] = [];
    if (activeHolidayTab === 'source') {
      list = sourceHolidays;
    } else if (activeHolidayTab === 'target') {
      list = targetHolidays;
    } else {
      // Combine source & target plus default all preset country holidays
      const combined = [...sourceHolidays];
      targetHolidays.forEach((h) => {
        if (!combined.some((item) => item.date === h.date && item.name === h.name)) {
          combined.push(h);
        }
      });
      // Also pull other key preset countries
      ['US', 'PH', 'CA', 'GB', 'DE', 'IN', 'AU', 'JP'].forEach((code) => {
        const extra = getCountryHolidays(code);
        extra.forEach((h) => {
          if (!combined.some((item) => item.date === h.date && item.name === h.name)) {
            combined.push(h);
          }
        });
      });
      list = combined;
    }

    if (!holidaySearchQuery.trim()) return list;
    const q = holidaySearchQuery.toLowerCase().trim();
    return list.filter(
      (h) =>
        h.name.toLowerCase().includes(q) ||
        h.date.toLowerCase().includes(q) ||
        h.countryName.toLowerCase().includes(q) ||
        h.type.toLowerCase().includes(q) ||
        h.description.toLowerCase().includes(q)
    );
  }, [activeHolidayTab, sourceHolidays, targetHolidays, holidaySearchQuery]);

  // Live clocks for Source and Target
  const sourceLive = useMemo(() => {
    return getFormattedTimeForZone(sourceLocation.ianaTimeZone, now);
  }, [sourceLocation, now]);

  const targetLive = useMemo(() => {
    return getFormattedTimeForZone(targetLocation.ianaTimeZone, now);
  }, [targetLocation, now]);

  // Calculate custom converted time based on selectedSourceHour & selectedSourceMinute
  const customConvertedTime = useMemo(() => {
    const tempDate = new Date();
    // Build a date representing source local time
    // Get difference between source timezone offset and target timezone offset
    const sourceData = getFormattedTimeForZone(sourceLocation.ianaTimeZone, tempDate);
    const targetData = getFormattedTimeForZone(targetLocation.ianaTimeZone, tempDate);

    const hourDiff = targetData.utcOffsetHours - sourceData.utcOffsetHours;

    let targetHour = (selectedSourceHour + hourDiff) % 24;
    let dayOffset = Math.floor((selectedSourceHour + hourDiff) / 24);

    if (targetHour < 0) {
      targetHour += 24;
    }

    const isAM = targetHour < 12;
    const displayHour12 = targetHour % 12 === 0 ? 12 : targetHour % 12;
    const minuteStr = selectedSourceMinute.toString().padStart(2, '0');
    const period = isAM ? 'AM' : 'PM';

    let dayLabel = 'Same Day';
    if (dayOffset > 0) dayLabel = `+${dayOffset} Day (Tomorrow)`;
    if (dayOffset < 0) dayLabel = `${dayOffset} Day (Yesterday)`;

    return {
      targetHour24: targetHour,
      displayHour12,
      minuteStr,
      period,
      dayLabel,
      hourDiff
    };
  }, [sourceLocation, targetLocation, selectedSourceHour, selectedSourceMinute]);

  // Swap source & target locations
  const handleSwapLocations = () => {
    const oldSource = sourceId;
    setSourceId(targetId);
    setTargetId(oldSource);
  };

  // Helper to determine work hour status for an hour (0-23)
  const getWorkStatus = (hour: number) => {
    if (hour >= 9 && hour < 17) {
      return {
        label: 'Business Hours',
        color: 'bg-emerald-100 text-emerald-800 border-emerald-300',
        dotColor: 'bg-emerald-500',
        type: 'work'
      };
    } else if ((hour >= 7 && hour < 9) || (hour >= 17 && hour < 21)) {
      return {
        label: 'Extended Hours',
        color: 'bg-amber-100 text-amber-800 border-amber-300',
        dotColor: 'bg-amber-500',
        type: 'extended'
      };
    } else {
      return {
        label: 'Sleeping / Off-Hours',
        color: 'bg-slate-100 text-slate-700 border-slate-300',
        dotColor: 'bg-slate-400',
        type: 'off'
      };
    }
  };

  const sourceStatus = getWorkStatus(selectedSourceHour);
  const targetStatus = getWorkStatus(customConvertedTime.targetHour24);

  // Add location to team grid
  const handleAddTeamLocation = (id: string) => {
    if (!teamLocationIds.includes(id)) {
      setTeamLocationIds([...teamLocationIds, id]);
    }
  };

  // Remove location from team grid
  const handleRemoveTeamLocation = (id: string) => {
    if (teamLocationIds.length > 1) {
      setTeamLocationIds(teamLocationIds.filter((t) => t !== id));
    }
  };

  return (
    <div className="space-y-6 animate-fadeIn pb-12">
      
      {/* SECTION 1: DUAL LOCATION LIVE TIME COMPARISON */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-5 sm:p-6 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div>
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900 flex items-center gap-2">
              <ArrowRightLeft className="w-5 h-5 text-[#4B286D]" />
              Direct Time Zone & Country Converter
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Compare live local times across all 195+ countries, states & territories
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleSwapLocations}
              className="inline-flex items-center gap-2 text-xs font-bold text-[#4B286D] bg-[#F4EFF9] hover:bg-[#ECE3F4] px-3.5 py-1.5 rounded-xl border border-purple-200 transition shadow-2xs"
            >
              <ArrowRightLeft className="w-3.5 h-3.5 text-[#2B8000]" />
              <span>Swap Locations</span>
            </button>

            <div className="bg-[#F8F6FA] rounded-xl px-3 py-1.5 border border-[#E3DDE8] flex items-center gap-2.5 shrink-0">
              <Clock className="w-4 h-4 text-[#2B8000]" />
              <div className="text-xs font-extrabold text-[#4B286D] font-mono">
                System: {now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
              </div>
            </div>
          </div>
        </div>

        {/* Source & Target Dropdowns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* SOURCE LOCATION CARD */}
          <div className="bg-slate-50/80 rounded-2xl p-5 border border-slate-200 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 inline-block" />
                Origin / Source Location
              </span>
              <span className="text-[11px] font-bold text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-100">
                {sourceLocation.utcOffsetLabel}
              </span>
            </div>

            {/* Combobox for Source */}
            <div className="relative" ref={sourceRef}>
              <div className="flex items-center gap-3 bg-white border border-slate-300 hover:border-indigo-400 rounded-xl px-3.5 py-2.5 shadow-2xs transition">
                <span className="text-3xl shrink-0">{sourceLocation.flag}</span>
                <div className="flex-1 min-w-0">
                  <input
                    type="text"
                    value={isSourceOpen ? sourceQuery : `${sourceLocation.countryName}${sourceLocation.stateOrRegionName ? ` - ${sourceLocation.stateOrRegionName}` : ''}`}
                    onFocus={() => {
                      setIsSourceOpen(true);
                      setSourceQuery('');
                    }}
                    onChange={(e) => {
                      setSourceQuery(e.target.value);
                      if (!isSourceOpen) setIsSourceOpen(true);
                    }}
                    placeholder="Search origin state or country..."
                    className="w-full bg-transparent text-slate-900 font-bold text-sm sm:text-base focus:outline-none placeholder:text-slate-400 placeholder:font-normal truncate"
                  />
                  <div className="text-[11px] text-slate-500 truncate">
                    {sourceLocation.capitalOrMajorCity} ({sourceLocation.ianaTimeZone})
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsSourceOpen(!isSourceOpen)}
                  className="p-1 hover:bg-slate-100 rounded-lg text-slate-500"
                >
                  <ChevronDown className={`w-4 h-4 transition-transform ${isSourceOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>

              {/* Source Dropdown Menu */}
              {isSourceOpen && (
                <div className="absolute left-0 top-full mt-2 w-full max-h-72 bg-white border border-slate-200 rounded-2xl shadow-xl z-50 overflow-hidden flex flex-col">
                  <div className="p-2 border-b border-slate-100 bg-slate-50 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider px-2">
                      Select Location ({filteredSourceLocations.length})
                    </span>
                    {sourceQuery && (
                      <button
                        onClick={() => setSourceQuery('')}
                        className="text-xs text-slate-400 hover:text-slate-600 px-1"
                      >
                        Clear
                      </button>
                    )}
                  </div>

                  <div className="overflow-y-auto flex-1 divide-y divide-slate-100 p-1">
                    {filteredSourceLocations.length === 0 ? (
                      <div className="p-4 text-center text-xs text-slate-500">
                        No location matched "{sourceQuery}".
                      </div>
                    ) : (
                      filteredSourceLocations.map((loc) => {
                        const isSelected = loc.id === sourceId;
                        return (
                          <button
                            key={loc.id}
                            type="button"
                            onClick={() => {
                              setSourceId(loc.id);
                              setIsSourceOpen(false);
                              setSourceQuery('');
                            }}
                            className={`w-full text-left p-2.5 rounded-xl transition flex items-center justify-between text-xs hover:bg-indigo-50 ${
                              isSelected ? 'bg-indigo-50 font-bold text-indigo-900' : 'text-slate-800'
                            }`}
                          >
                            <div className="flex items-center gap-2.5 truncate pr-2">
                              <span className="text-xl">{loc.flag}</span>
                              <div className="truncate">
                                <span className="font-bold text-slate-900 block truncate">
                                  {loc.countryName} {loc.stateOrRegionName ? `(${loc.stateOrRegionName})` : ''}
                                </span>
                                <span className="text-[10px] text-slate-500">{loc.capitalOrMajorCity}</span>
                              </div>
                            </div>
                            <span className="text-[10px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md shrink-0">
                              {loc.utcOffsetLabel}
                            </span>
                          </button>
                        );
                      })
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Live Clock Display for Source */}
            <div className="bg-white rounded-xl p-4 border border-slate-200/80 shadow-2xs flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                  Current Live Time
                </span>
                <span className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-mono">
                  {sourceLive.formattedTime}
                </span>
                <span className="text-xs text-slate-500 block font-medium">
                  {sourceLive.formattedDate}
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs font-semibold text-slate-600 block">
                  {sourceLocation.region}
                </span>
                <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100 inline-block mt-1">
                  {sourceLive.utcOffsetHours >= 0 ? `UTC+${sourceLive.utcOffsetHours}` : `UTC${sourceLive.utcOffsetHours}`}
                </span>
              </div>
            </div>
          </div>

          {/* TARGET LOCATION CARD */}
          <div className="bg-slate-50/80 rounded-2xl p-5 border border-slate-200 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 inline-block" />
                Target / Destination Location
              </span>
              <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">
                {targetLocation.utcOffsetLabel}
              </span>
            </div>

            {/* Combobox for Target */}
            <div className="relative" ref={targetRef}>
              <div className="flex items-center gap-3 bg-white border border-slate-300 hover:border-emerald-400 rounded-xl px-3.5 py-2.5 shadow-2xs transition">
                <span className="text-3xl shrink-0">{targetLocation.flag}</span>
                <div className="flex-1 min-w-0">
                  <input
                    type="text"
                    value={isTargetOpen ? targetQuery : `${targetLocation.countryName}${targetLocation.stateOrRegionName ? ` - ${targetLocation.stateOrRegionName}` : ''}`}
                    onFocus={() => {
                      setIsTargetOpen(true);
                      setTargetQuery('');
                    }}
                    onChange={(e) => {
                      setTargetQuery(e.target.value);
                      if (!isTargetOpen) setIsTargetOpen(true);
                    }}
                    placeholder="Search target state or country..."
                    className="w-full bg-transparent text-slate-900 font-bold text-sm sm:text-base focus:outline-none placeholder:text-slate-400 placeholder:font-normal truncate"
                  />
                  <div className="text-[11px] text-slate-500 truncate">
                    {targetLocation.capitalOrMajorCity} ({targetLocation.ianaTimeZone})
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsTargetOpen(!isTargetOpen)}
                  className="p-1 hover:bg-slate-100 rounded-lg text-slate-500"
                >
                  <ChevronDown className={`w-4 h-4 transition-transform ${isTargetOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>

              {/* Target Dropdown Menu */}
              {isTargetOpen && (
                <div className="absolute left-0 top-full mt-2 w-full max-h-72 bg-white border border-slate-200 rounded-2xl shadow-xl z-50 overflow-hidden flex flex-col">
                  <div className="p-2 border-b border-slate-100 bg-slate-50 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider px-2">
                      Select Location ({filteredTargetLocations.length})
                    </span>
                    {targetQuery && (
                      <button
                        onClick={() => setTargetQuery('')}
                        className="text-xs text-slate-400 hover:text-slate-600 px-1"
                      >
                        Clear
                      </button>
                    )}
                  </div>

                  <div className="overflow-y-auto flex-1 divide-y divide-slate-100 p-1">
                    {filteredTargetLocations.length === 0 ? (
                      <div className="p-4 text-center text-xs text-slate-500">
                        No location matched "{targetQuery}".
                      </div>
                    ) : (
                      filteredTargetLocations.map((loc) => {
                        const isSelected = loc.id === targetId;
                        return (
                          <button
                            key={loc.id}
                            type="button"
                            onClick={() => {
                              setTargetId(loc.id);
                              setIsTargetOpen(false);
                              setTargetQuery('');
                            }}
                            className={`w-full text-left p-2.5 rounded-xl transition flex items-center justify-between text-xs hover:bg-emerald-50 ${
                              isSelected ? 'bg-emerald-50 font-bold text-emerald-900' : 'text-slate-800'
                            }`}
                          >
                            <div className="flex items-center gap-2.5 truncate pr-2">
                              <span className="text-xl">{loc.flag}</span>
                              <div className="truncate">
                                <span className="font-bold text-slate-900 block truncate">
                                  {loc.countryName} {loc.stateOrRegionName ? `(${loc.stateOrRegionName})` : ''}
                                </span>
                                <span className="text-[10px] text-slate-500">{loc.capitalOrMajorCity}</span>
                              </div>
                            </div>
                            <span className="text-[10px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md shrink-0">
                              {loc.utcOffsetLabel}
                            </span>
                          </button>
                        );
                      })
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Live Clock Display for Target */}
            <div className="bg-white rounded-xl p-4 border border-slate-200/80 shadow-2xs flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                  Current Live Time
                </span>
                <span className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-mono">
                  {targetLive.formattedTime}
                </span>
                <span className="text-xs text-slate-500 block font-medium">
                  {targetLive.formattedDate}
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs font-semibold text-slate-600 block">
                  {targetLocation.region}
                </span>
                <span className="text-[11px] font-medium text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-md border border-indigo-100 inline-block mt-1">
                  {targetLive.utcOffsetHours >= 0 ? `UTC+${targetLive.utcOffsetHours}` : `UTC${targetLive.utcOffsetHours}`}
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Time Difference Summary Badge */}
        <div className="bg-indigo-50/70 border border-indigo-100 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-indigo-950">
                Time Zone Gap & Offset Summary
              </div>
              <div className="text-sm font-semibold text-indigo-900">
                {targetLocation.countryName} ({targetLocation.stateOrRegionName || targetLocation.capitalOrMajorCity}) is{' '}
                <strong className="text-indigo-700 font-extrabold underline decoration-indigo-300">
                  {Math.abs(customConvertedTime.hourDiff)} {Math.abs(customConvertedTime.hourDiff) === 1 ? 'hour' : 'hours'}{' '}
                  {customConvertedTime.hourDiff >= 0 ? 'ahead of' : 'behind'}
                </strong>{' '}
                {sourceLocation.countryName} ({sourceLocation.stateOrRegionName || sourceLocation.capitalOrMajorCity}).
              </div>
            </div>
          </div>

          <div className="text-xs font-bold px-3 py-1.5 rounded-xl bg-white border border-indigo-200 text-indigo-900 shrink-0">
            {customConvertedTime.hourDiff >= 0 ? `+${customConvertedTime.hourDiff} Hours` : `${customConvertedTime.hourDiff} Hours`}
          </div>
        </div>
      </div>

      {/* SECTION: NATIONAL & PUBLIC HOLIDAYS DIRECTORY */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-6 sm:p-8 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-700 border border-rose-200/80 text-xs font-bold mb-2">
              <Calendar className="w-3.5 h-3.5" />
              <span>National & Public Holidays Directory</span>
            </div>
            <h3 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
              Country Public Holidays & Statutory Non-Working Days
            </h3>
            <p className="text-xs text-slate-500 mt-1 max-w-2xl">
              Cross-verify official national holidays, statutory bank closures, and cultural observances to plan global meetings and sourcing without schedule conflicts.
            </p>
          </div>

          {/* Holiday Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 bg-slate-100 p-1.5 rounded-2xl border border-slate-200/80 self-start md:self-auto">
            <button
              type="button"
              onClick={() => setActiveHolidayTab('source')}
              className={`text-xs font-bold px-3 py-1.5 rounded-xl transition flex items-center gap-1.5 ${
                activeHolidayTab === 'source'
                  ? 'bg-white text-indigo-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>{sourceLocation.flag}</span>
              <span>{sourceLocation.countryName} ({sourceHolidays.length})</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveHolidayTab('target')}
              className={`text-xs font-bold px-3 py-1.5 rounded-xl transition flex items-center gap-1.5 ${
                activeHolidayTab === 'target'
                  ? 'bg-white text-indigo-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>{targetLocation.flag}</span>
              <span>{targetLocation.countryName} ({targetHolidays.length})</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveHolidayTab('all')}
              className={`text-xs font-bold px-3 py-1.5 rounded-xl transition flex items-center gap-1.5 ${
                activeHolidayTab === 'all'
                  ? 'bg-white text-indigo-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Globe className="w-3.5 h-3.5 text-indigo-600" />
              <span>All Preset Countries</span>
            </button>
          </div>
        </div>

        {/* Holiday Filter Search Input */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          <input
            type="text"
            value={holidaySearchQuery}
            onChange={(e) => setHolidaySearchQuery(e.target.value)}
            placeholder="Search holidays by name, date (e.g. Jul 4, Independence), country, or type..."
            className="w-full pl-10 pr-10 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium"
          />
          {holidaySearchQuery && (
            <button
              type="button"
              onClick={() => setHolidaySearchQuery('')}
              className="absolute right-3 top-2.5 text-xs text-slate-400 hover:text-slate-700 font-bold"
            >
              Clear
            </button>
          )}
        </div>

        {/* Holidays List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayedHolidays.length === 0 ? (
            <div className="col-span-full py-8 text-center bg-slate-50 rounded-2xl border border-dashed border-slate-200">
              <Calendar className="w-8 h-8 text-slate-300 mx-auto mb-2" />
              <p className="text-xs text-slate-500 font-medium">
                No holidays matching "{holidaySearchQuery}".
              </p>
            </div>
          ) : (
            displayedHolidays.map((holiday, idx) => {
              const isNational = holiday.type.toLowerCase().includes('national');
              return (
                <div
                  key={`${holiday.countryCode}-${holiday.name}-${idx}`}
                  className="bg-slate-50/80 border border-slate-200/80 hover:border-indigo-300 rounded-2xl p-4 transition space-y-2.5 relative shadow-2xs group"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{holiday.flag}</span>
                      <div>
                        <span className="text-xs font-bold text-slate-900 block leading-tight">
                          {holiday.name}
                        </span>
                        <span className="text-[10px] font-semibold text-slate-500 block">
                          {holiday.countryName}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs font-black font-mono text-indigo-900 bg-indigo-50 border border-indigo-100 px-2.5 py-1 rounded-xl shrink-0">
                      {holiday.date}
                    </span>
                  </div>

                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    {holiday.description}
                  </p>

                  <div className="flex items-center justify-between pt-2 border-t border-slate-200/60 text-[10px] font-bold">
                    <span
                      className={`px-2 py-0.5 rounded-lg border ${
                        isNational
                          ? 'bg-rose-50 text-rose-700 border-rose-200'
                          : 'bg-amber-50 text-amber-700 border-amber-200'
                      }`}
                    >
                      {holiday.type}
                    </span>
                    <span
                      className={`flex items-center gap-1 ${
                        holiday.isOfficeClosed ? 'text-rose-600' : 'text-slate-500'
                      }`}
                    >
                      {holiday.isOfficeClosed ? (
                        <>
                          <Building2 className="w-3 h-3" />
                          <span>Office Closed</span>
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-3 h-3 text-amber-500" />
                          <span>Observance</span>
                        </>
                      )}
                    </span>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* SECTION 2: INTERACTIVE MEETING & WORK HOUR CONVERTER */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div>
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-emerald-600" />
              Interactive Meeting & Work Hour Planner
            </h3>
            <p className="text-xs text-slate-500">
              Drag the hour slider or select a time in {sourceLocation.countryName} to calculate equivalent local time in {targetLocation.countryName}.
            </p>
          </div>

          {/* Quick preset time shortcuts */}
          <div className="flex flex-wrap items-center gap-1.5">
            <button
              onClick={() => setSelectedSourceHour(9)}
              className={`text-xs px-2.5 py-1 rounded-lg border font-semibold transition ${
                selectedSourceHour === 9
                  ? 'bg-emerald-600 text-white border-emerald-600'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              9:00 AM Sync
            </button>
            <button
              onClick={() => setSelectedSourceHour(13)}
              className={`text-xs px-2.5 py-1 rounded-lg border font-semibold transition ${
                selectedSourceHour === 13
                  ? 'bg-emerald-600 text-white border-emerald-600'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              1:00 PM Lunch
            </button>
            <button
              onClick={() => setSelectedSourceHour(17)}
              className={`text-xs px-2.5 py-1 rounded-lg border font-semibold transition ${
                selectedSourceHour === 17
                  ? 'bg-emerald-600 text-white border-emerald-600'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              5:00 PM Handover
            </button>
          </div>
        </div>

        {/* 24-Hour Interactive Range Slider */}
        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 space-y-5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              Selected Origin Time ({sourceLocation.countryName})
            </span>
            <span className="text-lg font-extrabold text-indigo-900 font-mono">
              {selectedSourceHour % 12 === 0 ? 12 : selectedSourceHour % 12}:{selectedSourceMinute.toString().padStart(2, '0')}{' '}
              {selectedSourceHour < 12 ? 'AM' : 'PM'}
            </span>
          </div>

          <input
            type="range"
            min={0}
            max={23}
            value={selectedSourceHour}
            onChange={(e) => setSelectedSourceHour(parseInt(e.target.value, 10))}
            className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600 focus:outline-none"
          />

          {/* Hour Scale Ticks */}
          <div className="flex justify-between text-[10px] text-slate-400 font-mono font-medium px-1">
            <span>12 AM</span>
            <span>3 AM</span>
            <span>6 AM</span>
            <span>9 AM (Start Work)</span>
            <span>12 PM</span>
            <span>3 PM</span>
            <span>5 PM (End Work)</span>
            <span>9 PM</span>
            <span>11 PM</span>
          </div>
        </div>

        {/* Comparison Result Display Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Source Selected Hour Status */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-2xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500 uppercase">
                {sourceLocation.flag} {sourceLocation.countryName}
              </span>
              <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${sourceStatus.color}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${sourceStatus.dotColor} inline-block mr-1.5`} />
                {sourceStatus.label}
              </span>
            </div>

            <div className="text-3xl font-black text-slate-900 font-mono tracking-tight">
              {selectedSourceHour % 12 === 0 ? 12 : selectedSourceHour % 12}:{selectedSourceMinute.toString().padStart(2, '0')}{' '}
              <span className="text-xl font-bold text-indigo-600">{selectedSourceHour < 12 ? 'AM' : 'PM'}</span>
            </div>

            <div className="text-xs text-slate-500 font-medium">
              {sourceLocation.stateOrRegionName || sourceLocation.capitalOrMajorCity} ({sourceLocation.utcOffsetLabel})
            </div>
          </div>

          {/* Target Converted Hour Status */}
          <div className="bg-emerald-50/60 border border-emerald-200 rounded-2xl p-5 shadow-2xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-emerald-950 uppercase">
                {targetLocation.flag} {targetLocation.countryName} (Converted)
              </span>
              <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${targetStatus.color}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${targetStatus.dotColor} inline-block mr-1.5`} />
                {targetStatus.label}
              </span>
            </div>

            <div className="text-3xl font-black text-emerald-950 font-mono tracking-tight flex items-baseline gap-2">
              <span>
                {customConvertedTime.displayHour12}:{customConvertedTime.minuteStr}{' '}
                <span className="text-xl font-bold text-emerald-700">{customConvertedTime.period}</span>
              </span>
              <span className="text-xs font-bold text-emerald-800 bg-emerald-100/80 px-2 py-0.5 rounded-md border border-emerald-200">
                {customConvertedTime.dayLabel}
              </span>
            </div>

            <div className="text-xs text-emerald-900/80 font-medium">
              {targetLocation.stateOrRegionName || targetLocation.capitalOrMajorCity} ({targetLocation.utcOffsetLabel})
            </div>
          </div>

        </div>

        {/* 24-HOUR OVERLAP TIMELINE MATRIX */}
        <div className="space-y-3 pt-4 border-t border-slate-100">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
              24-Hour Workday Overlap Timeline
            </span>
            <div className="flex items-center gap-3 text-[11px] font-medium text-slate-500">
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                Work (9-5)
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                Extended (7-9 & 5-9)
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                Sleep / Off
              </span>
            </div>
          </div>

          <div className="overflow-x-auto no-scrollbar pb-2">
            <div className="min-w-[700px] grid grid-cols-24 gap-1">
              {Array.from({ length: 24 }).map((_, h) => {
                const targetH = (h + customConvertedTime.hourDiff + 24) % 24;
                const isSelectedH = h === selectedSourceHour;

                const srcW = getWorkStatus(h);
                const tgtW = getWorkStatus(targetH);

                const isOverlapWork = srcW.type === 'work' && tgtW.type === 'work';

                return (
                  <button
                    key={h}
                    onClick={() => setSelectedSourceHour(h)}
                    className={`p-1.5 rounded-xl border text-center transition flex flex-col items-center justify-between gap-1 min-h-[72px] ${
                      isSelectedH
                        ? 'border-indigo-600 bg-indigo-50 ring-2 ring-indigo-500'
                        : isOverlapWork
                        ? 'border-emerald-300 bg-emerald-50/90 hover:bg-emerald-100'
                        : 'border-slate-200 bg-slate-50 hover:bg-slate-100'
                    }`}
                  >
                    <span className="text-[9px] font-bold text-slate-600 font-mono">
                      {h % 12 === 0 ? 12 : h % 12}{h < 12 ? 'a' : 'p'}
                    </span>

                    <div className="w-full flex items-center justify-center gap-0.5 my-0.5">
                      <span className={`w-2 h-2 rounded-full ${srcW.dotColor}`} title={`Origin: ${srcW.label}`} />
                      <span className={`w-2 h-2 rounded-full ${tgtW.dotColor}`} title={`Target: ${tgtW.label}`} />
                    </div>

                    <span className="text-[9px] font-bold text-slate-500 font-mono">
                      {targetH % 12 === 0 ? 12 : targetH % 12}{targetH < 12 ? 'a' : 'p'}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 3: MULTI-LOCATION TEAM BOARD */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div>
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Users className="w-5 h-5 text-indigo-600" />
              Multi-Location Global Team Dashboard
            </h3>
            <p className="text-xs text-slate-500">
              Track real-time local times and active business status across remote team members and global offices simultaneously.
            </p>
          </div>

          {/* Quick add searchable combobox */}
          <div className="relative" ref={teamAddRef}>
            <button
              type="button"
              onClick={() => setIsTeamAddOpen(!isTeamAddOpen)}
              className="bg-indigo-50 hover:bg-indigo-100 text-indigo-900 text-xs font-bold rounded-xl px-3.5 py-2 border border-indigo-200 transition flex items-center gap-2 cursor-pointer shadow-2xs"
            >
              <Plus className="w-4 h-4 text-indigo-600" />
              <span>+ Add Location to Board</span>
              <ChevronDown className="w-3.5 h-3.5 text-indigo-500 ml-1" />
            </button>

            {isTeamAddOpen && (
              <div className="absolute right-0 top-full mt-2 w-72 sm:w-80 bg-white rounded-2xl border border-slate-200 shadow-xl z-50 p-2 space-y-2 animate-fadeIn max-h-80 flex flex-col">
                <div className="relative">
                  <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    value={teamAddQuery}
                    onChange={(e) => setTeamAddQuery(e.target.value)}
                    placeholder="Type country, state, or region..."
                    autoFocus
                    className="w-full pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium"
                  />
                  {teamAddQuery && (
                    <button
                      type="button"
                      onClick={() => setTeamAddQuery('')}
                      className="absolute right-2.5 top-1.5 text-xs text-slate-400 hover:text-slate-700 font-bold"
                    >
                      Clear
                    </button>
                  )}
                </div>

                <div className="overflow-y-auto flex-1 divide-y divide-slate-100 pr-1">
                  {filteredTeamAddLocations.length === 0 ? (
                    <div className="p-4 text-center text-xs text-slate-500">
                      No unadded locations matched "{teamAddQuery}".
                    </div>
                  ) : (
                    filteredTeamAddLocations.map((loc) => (
                      <button
                        key={loc.id}
                        type="button"
                        onClick={() => {
                          handleAddTeamLocation(loc.id);
                          setIsTeamAddOpen(false);
                          setTeamAddQuery('');
                        }}
                        className="w-full text-left p-2 rounded-xl transition flex items-center justify-between text-xs hover:bg-indigo-50/80 text-slate-800"
                      >
                        <div className="flex items-center gap-2 truncate pr-2">
                          <span className="text-lg">{loc.flag}</span>
                          <div className="truncate">
                            <span className="font-bold text-slate-900 block truncate">
                              {loc.countryName} {loc.stateOrRegionName ? `(${loc.stateOrRegionName})` : ''}
                            </span>
                            <span className="text-[10px] text-slate-500">{loc.capitalOrMajorCity}</span>
                          </div>
                        </div>
                        <span className="text-[10px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md shrink-0">
                          {loc.utcOffsetLabel}
                        </span>
                      </button>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {teamLocationIds.map((id) => {
            const loc = GLOBAL_COUNTRY_TIMEZONES.find((t) => t.id === id);
            if (!loc) return null;

            const formatted = getFormattedTimeForZone(loc.ianaTimeZone, now);
            const status = getWorkStatus(formatted.hours + (formatted.period === 'PM' && formatted.hours < 12 ? 12 : formatted.period === 'AM' && formatted.hours === 12 ? -12 : 0));

            return (
              <div
                key={id}
                className="bg-slate-50/80 border border-slate-200 hover:border-indigo-300 rounded-2xl p-4 transition shadow-2xs relative group space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{loc.flag}</span>
                    <div>
                      <span className="font-bold text-slate-900 text-sm block leading-tight">
                        {loc.countryName}
                      </span>
                      <span className="text-[11px] text-slate-500 block">
                        {loc.stateOrRegionName || loc.capitalOrMajorCity}
                      </span>
                    </div>
                  </div>

                  {teamLocationIds.length > 1 && (
                    <button
                      onClick={() => handleRemoveTeamLocation(id)}
                      className="text-slate-300 hover:text-rose-600 p-1 rounded-lg transition opacity-0 group-hover:opacity-100"
                      title="Remove from board"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                <div className="flex items-baseline justify-between bg-white rounded-xl p-3 border border-slate-200/80">
                  <span className="text-xl font-extrabold font-mono text-slate-900">
                    {formatted.formattedTime}
                  </span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${status.color}`}>
                    {status.label}
                  </span>
                </div>

                <div className="flex items-center justify-between text-[10px] text-slate-500 font-medium">
                  <span>{formatted.formattedDate}</span>
                  <span className="bg-slate-200/70 px-2 py-0.5 rounded-md font-semibold text-slate-700">
                    {loc.utcOffsetLabel}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
