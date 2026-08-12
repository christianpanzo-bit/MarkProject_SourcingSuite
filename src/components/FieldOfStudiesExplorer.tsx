import React, { useState, useMemo } from 'react';
import {
  FIELD_OF_STUDIES_DATASET,
  FieldOfStudyTopic,
  CountryFieldData,
  StateFieldBreakdown,
  ProvinceFieldBreakdown,
  GenderBreakdown,
  AgeBracketBreakdown
} from '../data/fieldOfStudiesData';
import {
  GraduationCap,
  Search,
  BookOpen,
  Globe,
  Building2,
  Users,
  BarChart3,
  Download,
  ChevronDown,
  ChevronUp,
  Sparkles,
  MapPin,
  Award,
  Filter,
  Check,
  Briefcase,
  Layers,
  ArrowUpDown,
  Laptop,
  HeartPulse,
  Wrench,
  Atom,
  Globe2,
  Palette,
  Scale,
  Hammer,
  Sprout,
  Calculator,
  PieChart,
  Clock,
  UserCheck
} from 'lucide-react';

// Sub-component to render Demographics (Age & Gender preferences)
const DemographicsCard: React.FC<{
  genderBreakdown: GenderBreakdown[];
  ageBracketBreakdown: AgeBracketBreakdown[];
  totalGraduates: number;
  locationName: string;
}> = ({ genderBreakdown, ageBracketBreakdown, totalGraduates, locationName }) => {
  const female = genderBreakdown.find((g) => g.gender === 'Female');
  const male = genderBreakdown.find((g) => g.gender === 'Male');
  const nonBinary = genderBreakdown.find((g) => g.gender === 'Non-Binary / Unspecified');

  return (
    <div className="bg-[#FAF8FC] p-4 rounded-2xl border border-[#E3DDE8] space-y-4 my-3">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2.5 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <PieChart className="w-4 h-4 text-[#4B286D]" />
          <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
            Demographic & Career Stage Profile for {locationName}
          </h4>
        </div>
        <span className="text-[11px] text-slate-600 font-medium bg-white px-2.5 py-1 rounded-lg border border-slate-200">
          Sampled Pool: <strong className="text-slate-900 font-bold">{totalGraduates.toLocaleString()}</strong> degree holders
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Gender Distribution Card */}
        <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-3 shadow-2xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-[#4B286D]" />
              Gender Preferences & Distribution
            </span>
            <span className="text-[10px] font-bold text-[#2B8000] bg-[#2B8000]/10 px-2 py-0.5 rounded-md">
              Counts & Percentages
            </span>
          </div>

          {/* Stacked Percentage Bar */}
          <div className="w-full h-3.5 bg-slate-100 rounded-full overflow-hidden flex shadow-2xs">
            <div
              style={{ width: `${female?.percentage || 0}%` }}
              className="bg-[#D9381E] h-full transition-all"
              title={`Female: ${female?.percentage}% (${female?.countFormatted})`}
            />
            <div
              style={{ width: `${male?.percentage || 0}%` }}
              className="bg-[#1E56A0] h-full transition-all"
              title={`Male: ${male?.percentage}% (${male?.countFormatted})`}
            />
            <div
              style={{ width: `${nonBinary?.percentage || 0}%` }}
              className="bg-[#8A2BE2] h-full transition-all"
              title={`Non-Binary / Unspecified: ${nonBinary?.percentage}% (${nonBinary?.countFormatted})`}
            />
          </div>

          {/* Gender Stats Grid */}
          <div className="grid grid-cols-3 gap-2 text-center pt-1">
            <div className="p-2.5 bg-rose-50/70 rounded-xl border border-rose-100">
              <div className="text-[10px] font-bold text-rose-800 flex items-center justify-center gap-1">
                <span>♀</span> Female
              </div>
              <div className="text-sm font-black text-slate-900 mt-0.5">{female?.percentage}%</div>
              <div className="text-[10px] text-slate-600 font-semibold">{female?.countFormatted}</div>
            </div>

            <div className="p-2.5 bg-blue-50/70 rounded-xl border border-blue-100">
              <div className="text-[10px] font-bold text-blue-800 flex items-center justify-center gap-1">
                <span>♂</span> Male
              </div>
              <div className="text-sm font-black text-slate-900 mt-0.5">{male?.percentage}%</div>
              <div className="text-[10px] text-slate-600 font-semibold">{male?.countFormatted}</div>
            </div>

            <div className="p-2.5 bg-purple-50/70 rounded-xl border border-purple-100">
              <div className="text-[10px] font-bold text-purple-800 flex items-center justify-center gap-1">
                <span>⚧</span> Non-Binary
              </div>
              <div className="text-sm font-black text-slate-900 mt-0.5">{nonBinary?.percentage}%</div>
              <div className="text-[10px] text-slate-600 font-semibold">{nonBinary?.countFormatted}</div>
            </div>
          </div>
        </div>

        {/* Age Brackets Card */}
        <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-3 shadow-2xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#2B8000]" />
              Age Brackets & Career Stages
            </span>
            <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
              4 Segments
            </span>
          </div>

          <div className="space-y-2 pt-0.5">
            {ageBracketBreakdown.map((ag) => (
              <div key={ag.bracket} className="space-y-1">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="font-bold text-slate-800">
                    {ag.bracket} <span className="text-slate-400 font-normal">({ag.label})</span>
                  </span>
                  <span className="font-black text-slate-900">
                    {ag.percentage}% <span className="text-slate-500 font-semibold">({ag.countFormatted})</span>
                  </span>
                </div>
                <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-[#2B8000] h-full rounded-full"
                    style={{ width: `${Math.min(100, ag.percentage * 2.2)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const FieldOfStudiesExplorer: React.FC = () => {
  // Active Field of Study ID
  const [selectedFieldId, setSelectedFieldId] = useState<string>('cs_it');
  
  // Search query for filtering field or country
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'count' | 'percentage' | 'name'>('count');
  
  // View Perspective: 'field' (Search by Field) vs 'country' (Explore by Country/State)
  const [viewPerspective, setViewPerspective] = useState<'field' | 'country'>('field');
  const [selectedCountryCode, setSelectedCountryCode] = useState<string>('US');

  // Expanded State Breakdowns for US & CA
  const [expandedBreakdown, setExpandedBreakdown] = useState<{ [countryCode: string]: boolean }>({
    'US': true,
    'CA': true
  });

  // Expanded Demographics for Countries
  const [expandedDemographics, setExpandedDemographics] = useState<{ [countryCode: string]: boolean }>({});

  // State search queries inside breakdown accordions
  const [usStateQuery, setUsStateQuery] = useState<string>('');
  const [caProvinceQuery, setCaProvinceQuery] = useState<string>('');

  // Icon mapping helper
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Laptop': return <Laptop className="w-5 h-5" />;
      case 'Briefcase': return <Briefcase className="w-5 h-5" />;
      case 'Wrench': return <Wrench className="w-5 h-5" />;
      case 'HeartPulse': return <HeartPulse className="w-5 h-5" />;
      case 'Atom': return <Atom className="w-5 h-5" />;
      case 'Globe2': return <Globe2 className="w-5 h-5" />;
      case 'Palette': return <Palette className="w-5 h-5" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5" />;
      case 'Scale': return <Scale className="w-5 h-5" />;
      case 'Hammer': return <Hammer className="w-5 h-5" />;
      case 'Sprout': return <Sprout className="w-5 h-5" />;
      case 'Calculator': return <Calculator className="w-5 h-5" />;
      default: return <BookOpen className="w-5 h-5" />;
    }
  };

  // Currently active Field topic
  const currentTopic = useMemo(() => {
    return FIELD_OF_STUDIES_DATASET.find((f) => f.fieldId === selectedFieldId) || FIELD_OF_STUDIES_DATASET[0];
  }, [selectedFieldId]);

  // Filtered list of fields based on search
  const filteredFields = useMemo(() => {
    if (!searchQuery.trim() || viewPerspective === 'country') return FIELD_OF_STUDIES_DATASET;
    const q = searchQuery.toLowerCase().trim();
    return FIELD_OF_STUDIES_DATASET.filter(
      (f) =>
        f.fieldName.toLowerCase().includes(q) ||
        f.category.toLowerCase().includes(q) ||
        f.description.toLowerCase().includes(q)
    );
  }, [searchQuery, viewPerspective]);

  // Filtered & Sorted countries for current topic
  const processedCountries = useMemo(() => {
    let list = [...currentTopic.countryData];

    // Region filter
    if (selectedRegion !== 'All') {
      list = list.filter((c) => c.region === selectedRegion);
    }

    // Search query filter for countries
    if (searchQuery.trim() && viewPerspective === 'field') {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (c) =>
          c.countryName.toLowerCase().includes(q) ||
          c.countryCode.toLowerCase().includes(q) ||
          c.topUniversities.some((u) => u.toLowerCase().includes(q))
      );
    }

    // Sort
    list.sort((a, b) => {
      if (sortBy === 'count') return b.actualGraduatesCount - a.actualGraduatesCount;
      if (sortBy === 'percentage') return b.percentageInField - a.percentageInField;
      return a.countryName.localeCompare(b.countryName);
    });

    return list;
  }, [currentTopic, selectedRegion, searchQuery, viewPerspective, sortBy]);

  // Summary stats for current topic
  const totalGlobalVolume = useMemo(() => {
    const total = currentTopic.countryData.reduce((acc, c) => acc + c.actualGraduatesCount, 0);
    if (total >= 1000000) return `${(total / 1000000).toFixed(1)} Million`;
    return total.toLocaleString();
  }, [currentTopic]);

  const top3SourcingNations = useMemo(() => {
    const sorted = [...currentTopic.countryData].sort((a, b) => b.actualGraduatesCount - a.actualGraduatesCount);
    return sorted.slice(0, 3);
  }, [currentTopic]);

  // Toggle state breakdown accordion
  const toggleBreakdown = (code: string) => {
    setExpandedBreakdown((prev) => ({
      ...prev,
      [code]: !prev[code]
    }));
  };

  // Toggle demographics card
  const toggleDemographics = (code: string) => {
    setExpandedDemographics((prev) => ({
      ...prev,
      [code]: !prev[code]
    }));
  };

  // CSV Export for Field of Studies
  const handleExportCSV = () => {
    const headers = [
      'Country Code',
      'Country Name',
      'Region',
      'Field of Study',
      'Share Percentage (%)',
      'Total Graduates (Actual Number)',
      'Annual New Graduates',
      'Total Tertiary Educated Population',
      'Female Percentage (%)',
      'Female Count',
      'Male Percentage (%)',
      'Male Count',
      'Non-Binary Percentage (%)',
      'Non-Binary Count',
      'Age 18-24 Percentage (%)',
      'Age 18-24 Count',
      'Age 25-34 Percentage (%)',
      'Age 25-34 Count',
      'Age 35-49 Percentage (%)',
      'Age 35-49 Count',
      'Age 50+ Percentage (%)',
      'Age 50+ Count',
      'Top Institutions'
    ];

    const rows = processedCountries.map((c) => {
      const female = c.genderBreakdown.find((g) => g.gender === 'Female');
      const male = c.genderBreakdown.find((g) => g.gender === 'Male');
      const nonBinary = c.genderBreakdown.find((g) => g.gender === 'Non-Binary / Unspecified');

      const a18 = c.ageBracketBreakdown.find((a) => a.bracket === '18–24');
      const a25 = c.ageBracketBreakdown.find((a) => a.bracket === '25–34');
      const a35 = c.ageBracketBreakdown.find((a) => a.bracket === '35–49');
      const a50 = c.ageBracketBreakdown.find((a) => a.bracket === '50+');

      return [
        `"${c.countryCode}"`,
        `"${c.countryName}"`,
        `"${c.region}"`,
        `"${currentTopic.fieldName}"`,
        `${c.percentageInField}%`,
        c.actualGraduatesCount,
        c.annualNewGraduates,
        c.tertiaryEducatedPopulation,
        `${female?.percentage || 0}%`,
        female?.count || 0,
        `${male?.percentage || 0}%`,
        male?.count || 0,
        `${nonBinary?.percentage || 0}%`,
        nonBinary?.count || 0,
        `${a18?.percentage || 0}%`,
        a18?.count || 0,
        `${a25?.percentage || 0}%`,
        a25?.count || 0,
        `${a35?.percentage || 0}%`,
        a35?.count || 0,
        `${a50?.percentage || 0}%`,
        a50?.count || 0,
        `"${c.topUniversities.join('; ')}"`
      ];
    });

    const csvContent = [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `${currentTopic.fieldId}_field_of_study_global_demographics_data.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Selected Country for Country Profile Mode
  const countryProfileData = useMemo(() => {
    if (viewPerspective !== 'country') return null;
    
    // Find country info across topics
    const sample = FIELD_OF_STUDIES_DATASET[0].countryData.find(
      (c) => c.countryCode === selectedCountryCode
    );
    if (!sample) return null;

    // Build breakdown of all fields for this country
    const fieldBreakdown = FIELD_OF_STUDIES_DATASET.map((topic) => {
      const cData = topic.countryData.find((c) => c.countryCode === selectedCountryCode);
      return {
        fieldId: topic.fieldId,
        fieldName: topic.fieldName,
        category: topic.category,
        iconName: topic.iconName,
        percentage: cData ? cData.percentageInField : 0,
        actualCount: cData ? cData.actualGraduatesCount : 0,
        actualFormatted: cData ? cData.actualGraduatesFormatted : '0',
        annualNew: cData ? cData.annualNewGraduatesFormatted : '0',
        topUnis: cData ? cData.topUniversities : [],
        genderBreakdown: cData ? cData.genderBreakdown : [],
        ageBracketBreakdown: cData ? cData.ageBracketBreakdown : []
      };
    }).sort((a, b) => b.actualCount - a.actualCount);

    return {
      countryName: sample.countryName,
      countryCode: sample.countryCode,
      flag: sample.flag,
      region: sample.region,
      tertiaryPopulation: sample.tertiaryEducatedFormatted,
      fieldBreakdown
    };
  }, [viewPerspective, selectedCountryCode]);

  return (
    <div className="space-y-6">
      
      {/* Top Banner & Mode Toggle */}
      <div className="bg-gradient-to-r from-[#2C1A4D] via-[#4B286D] to-[#1E1135] text-white p-6 rounded-2xl shadow-md border border-[#5A3382]">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 bg-[#A27B5C]/30 text-[#E5D3B3] px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase border border-[#A27B5C]/40">
              <GraduationCap className="w-3.5 h-3.5 text-[#FFC72C]" />
              <span>Higher Education & Talent Distribution Explorer</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white flex items-center gap-2.5">
              Global Field of Studies Directory
            </h1>
            <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
              Identify which countries offer specific fields of study, complete with exact graduate population figures and percentage shares. Includes state-level breakdowns for the United States and Canada.
            </p>
          </div>

          {/* Perspective Switcher Buttons */}
          <div className="flex flex-wrap items-center gap-2 bg-black/20 p-1.5 rounded-xl border border-white/10">
            <button
              onClick={() => setViewPerspective('field')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition flex items-center gap-2 ${
                viewPerspective === 'field'
                  ? 'bg-white text-[#4B286D] shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Search by Field of Study</span>
            </button>

            <button
              onClick={() => setViewPerspective('country')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition flex items-center gap-2 ${
                viewPerspective === 'country'
                  ? 'bg-white text-[#4B286D] shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <Globe className="w-4 h-4" />
              <span>Explore by Country / State</span>
            </button>
          </div>
        </div>
      </div>

      {/* VIEW PERSPECTIVE 1: SEARCH BY FIELD OF STUDY */}
      {viewPerspective === 'field' && (
        <div className="space-y-6">
          
          {/* Field Selector Grid / Carousel */}
          <div className="bg-white p-5 rounded-2xl border border-[#E3DDE8] shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#4B286D]" />
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  Select Field of Study ({FIELD_OF_STUDIES_DATASET.length} Major Disciplines)
                </h3>
              </div>

              {/* Quick Filter Box */}
              <div className="relative max-w-xs w-full">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Filter fields (e.g. IT, Med, Law)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full text-xs pl-8 pr-3 py-1.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#4B286D] bg-slate-50"
                />
              </div>
            </div>

            {/* Field Category Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5">
              {filteredFields.map((field) => {
                const isSelected = field.fieldId === selectedFieldId;
                return (
                  <button
                    key={field.fieldId}
                    onClick={() => setSelectedFieldId(field.fieldId)}
                    className={`p-3 rounded-xl border text-left transition flex flex-col justify-between gap-2.5 group relative overflow-hidden ${
                      isSelected
                        ? 'bg-[#4B286D] text-white border-[#4B286D] shadow-sm ring-2 ring-[#4B286D]/20'
                        : 'bg-slate-50 hover:bg-slate-100/80 border-slate-200 text-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full">
                      <div
                        className={`p-1.5 rounded-lg ${
                          isSelected ? 'bg-white/20 text-white' : 'bg-white text-[#4B286D] shadow-2xs'
                        }`}
                      >
                        {renderIcon(field.iconName)}
                      </div>
                      {isSelected && <Check className="w-4 h-4 text-[#FFC72C]" />}
                    </div>

                    <div>
                      <div className="text-[11px] font-semibold opacity-75 uppercase tracking-tight line-clamp-1">
                        {field.category}
                      </div>
                      <div className="text-xs font-bold leading-tight mt-0.5 line-clamp-2">
                        {field.fieldName}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Field Header & Quick Metrics Banner */}
          <div className="bg-white p-6 rounded-2xl border border-[#E3DDE8] shadow-xs space-y-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100">
              <div className="flex items-start gap-3.5">
                <div className="p-3 bg-[#4B286D]/10 text-[#4B286D] rounded-2xl">
                  {renderIcon(currentTopic.iconName)}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#4B286D] bg-[#4B286D]/10 px-2.5 py-0.5 rounded-full uppercase tracking-wide">
                      {currentTopic.category}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      Global Benchmark: ~{currentTopic.globalAvgPercentage}% of graduates
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 mt-1">
                    {currentTopic.fieldName}
                  </h2>
                  <p className="text-xs text-slate-600 mt-1 max-w-3xl leading-relaxed">
                    {currentTopic.description}
                  </p>
                </div>
              </div>

              {/* Download & Controls */}
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={handleExportCSV}
                  className="inline-flex items-center gap-1.5 bg-[#2B8000] hover:bg-[#216300] text-white text-xs font-bold px-3.5 py-2 rounded-xl transition shadow-2xs"
                  title="Export Field of Study CSV for all countries"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Export Field CSV</span>
                </button>
              </div>
            </div>

            {/* Quick Metrics Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                <div className="text-xs font-medium text-slate-500 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#4B286D]" />
                  <span>Estimated Total Global Graduates</span>
                </div>
                <div className="text-lg font-black text-slate-900 mt-1">
                  {totalGlobalVolume}
                </div>
                <div className="text-[11px] text-slate-500">
                  Across 197 recorded countries
                </div>
              </div>

              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                <div className="text-xs font-medium text-slate-500 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-[#2B8000]" />
                  <span>Top Volume Sourcing Nations</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  {top3SourcingNations.map((c, i) => (
                    <span key={c.countryCode} className="inline-flex items-center gap-1 text-xs font-bold text-slate-800 bg-white px-2 py-1 rounded-md border border-slate-200">
                      <span>{c.flag}</span>
                      <span>{c.countryCode}</span>
                      <span className="text-[10px] text-slate-500 font-normal">({c.actualGraduatesFormatted})</span>
                    </span>
                  ))}
                </div>
                <div className="text-[11px] text-slate-500 mt-1">
                  Largest estimated degree counts
                </div>
              </div>

              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                <div className="text-xs font-medium text-slate-500 flex items-center gap-1.5">
                  <BarChart3 className="w-3.5 h-3.5 text-[#D9381E]" />
                  <span>Data Coverage & Granularity</span>
                </div>
                <div className="text-sm font-bold text-slate-900 mt-1">
                  197 Countries + 50 US States + CA Provinces
                </div>
                <div className="text-[11px] text-[#2B8000] font-semibold mt-0.5">
                  ✓ Includes Actual Numbers & Percentages
                </div>
              </div>
            </div>
          </div>

          {/* Region Filters & Sorting Bar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white p-3.5 rounded-xl border border-[#E3DDE8]">
            {/* Region Tabs */}
            <div className="flex flex-wrap items-center gap-1">
              <span className="text-xs font-bold text-slate-500 mr-2 flex items-center gap-1">
                <Filter className="w-3 h-3" /> Region:
              </span>
              {['All', 'Americas', 'Europe', 'Asia', 'Africa', 'Oceania'].map((reg) => (
                <button
                  key={reg}
                  onClick={() => setSelectedRegion(reg)}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition ${
                    selectedRegion === reg
                      ? 'bg-[#4B286D] text-white shadow-2xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {reg}
                </button>
              ))}
            </div>

            {/* Sorting control */}
            <div className="flex items-center gap-2 self-end sm:self-auto">
              <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                <ArrowUpDown className="w-3 h-3" /> Sort by:
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="text-xs font-semibold bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#4B286D]"
              >
                <option value="count">Actual Numbers (Highest Volume)</option>
                <option value="percentage">Share Percentage (%)</option>
                <option value="name">Country Name (A-Z)</option>
              </select>
            </div>
          </div>

          {/* Country Table & List Cards */}
          <div className="bg-white rounded-2xl border border-[#E3DDE8] shadow-xs overflow-hidden">
            <div className="p-4 bg-slate-50/80 border-b border-slate-200 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-700">
                Showing <strong className="text-slate-900">{processedCountries.length}</strong> countries offering <strong className="text-[#4B286D]">{currentTopic.fieldName}</strong>
              </span>
              <span className="text-[11px] text-slate-500">
                Click "Expand State Breakdown" on US/Canada for per-state data
              </span>
            </div>

            <div className="divide-y divide-slate-200">
              {processedCountries.length === 0 ? (
                <div className="p-12 text-center text-slate-500">
                  <Globe className="w-10 h-10 text-slate-300 mx-auto mb-3" />
                  <p className="text-sm font-semibold">No countries found matching your search query or filter.</p>
                  <p className="text-xs text-slate-400 mt-1">Try resetting the region filter or modifying your search keywords.</p>
                </div>
              ) : (
                processedCountries.map((country, idx) => {
                  const isUS = country.countryCode === 'US';
                  const isCA = country.countryCode === 'CA';
                  const isExpanded = expandedBreakdown[country.countryCode];
                  const showDemo = expandedDemographics[country.countryCode];

                  return (
                    <div key={country.countryCode} className="p-4 sm:p-5 hover:bg-slate-50/60 transition">
                      
                      {/* Main Country Row */}
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                        
                        {/* Country Info & Rank */}
                        <div className="flex items-start gap-3.5 min-w-[280px]">
                          <span className="text-xs font-extrabold text-slate-400 w-6 text-right pt-1 shrink-0">
                            #{idx + 1}
                          </span>
                          <span className="text-2xl shrink-0 pt-0.5">{country.flag}</span>
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="text-base font-bold text-slate-900">
                                {country.countryName}
                              </h3>
                              <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200">
                                {country.region}
                              </span>
                            </div>

                            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500 mt-1">
                              <span>
                                Tertiary Talent Pool: <strong className="text-slate-800">{country.tertiaryEducatedFormatted}</strong>
                              </span>
                              <span>•</span>
                              <span>
                                Annual New: <strong className="text-[#2B8000]">{country.annualNewGraduatesFormatted}</strong>
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Metrics Display (Percentages & Actual Numbers Side-by-Side) */}
                        <div className="flex items-center gap-4 sm:gap-6 shrink-0">
                          
                          {/* Percentage Share Box */}
                          <div className="text-right min-w-[100px]">
                            <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                              Share Percentage
                            </div>
                            <div className="text-lg font-black text-[#4B286D]">
                              {country.percentageInField}%
                            </div>
                            <div className="w-24 bg-slate-100 h-1.5 rounded-full overflow-hidden ml-auto mt-1">
                              <div
                                className="bg-[#4B286D] h-full rounded-full"
                                style={{ width: `${Math.min(100, country.percentageInField * 3)}%` }}
                              />
                            </div>
                          </div>

                          {/* Actual Numbers Box */}
                          <div className="text-right min-w-[130px] bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                            <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                              Actual Volume
                            </div>
                            <div className="text-base font-black text-slate-900">
                              {country.actualGraduatesFormatted}
                            </div>
                            <div className="text-[10px] font-semibold text-slate-500">
                              ({country.actualGraduatesCount.toLocaleString()} grads)
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Top Universities Tags & Action Buttons */}
                      <div className="mt-3 pt-2.5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
                        <div className="flex flex-wrap items-center gap-1.5">
                          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-tight mr-1">
                            Key Institutions:
                          </span>
                          {country.topUniversities.map((uni) => (
                            <span
                              key={uni}
                              className="text-xs bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-md border border-slate-200/80 font-medium"
                            >
                              {uni}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center gap-2 ml-auto">
                          {/* DEMOGRAPHICS TOGGLE BUTTON */}
                          <button
                            onClick={() => toggleDemographics(country.countryCode)}
                            className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-xl transition ${
                              showDemo
                                ? 'bg-[#2B8000] text-white shadow-xs'
                                : 'bg-[#2B8000]/10 hover:bg-[#2B8000]/20 text-[#2B8000]'
                            }`}
                          >
                            <UserCheck className="w-3.5 h-3.5" />
                            <span>Demographics (Age & Gender)</span>
                            {showDemo ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                          </button>

                          {/* STATE BREAKDOWN TOGGLE BUTTON FOR US / CANADA */}
                          {(isUS || isCA) && (
                            <button
                              onClick={() => toggleBreakdown(country.countryCode)}
                              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4B286D] hover:text-[#371d50] bg-[#4B286D]/10 hover:bg-[#4B286D]/20 px-3 py-1.5 rounded-xl transition"
                            >
                              <MapPin className="w-3.5 h-3.5 text-[#2B8000]" />
                              <span>
                                {isUS
                                  ? `State Breakdown`
                                  : `Provincial Breakdown`}
                              </span>
                              {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                            </button>
                          )}
                        </div>
                      </div>

                      {/* DEMOGRAPHICS CARD EXPANDED PANEL */}
                      {showDemo && (
                        <DemographicsCard
                          genderBreakdown={country.genderBreakdown}
                          ageBracketBreakdown={country.ageBracketBreakdown}
                          totalGraduates={country.actualGraduatesCount}
                          locationName={country.countryName}
                        />
                      )}

                      {/* EXPANDABLE US STATE BREAKDOWN PANEL */}
                      {isUS && isExpanded && country.usStateBreakdown && (
                        <div className="mt-4 p-4 bg-slate-50/90 rounded-2xl border border-slate-200 space-y-3">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-200">
                            <div className="flex items-center gap-2">
                              <span className="text-base">🇺🇸</span>
                              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                                United States Breakdown by State ({country.usStateBreakdown.length} States & Territories)
                              </h4>
                            </div>

                            {/* State filter box */}
                            <div className="relative max-w-xs w-full">
                              <Search className="w-3 h-3 absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
                              <input
                                type="text"
                                placeholder="Filter state (e.g. California, Texas)..."
                                value={usStateQuery}
                                onChange={(e) => setUsStateQuery(e.target.value)}
                                className="w-full text-xs pl-7 pr-2.5 py-1 rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-1 focus:ring-[#4B286D]"
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 max-h-[460px] overflow-y-auto pr-1">
                            {country.usStateBreakdown
                              .filter((st) => !usStateQuery.trim() || st.stateName.toLowerCase().includes(usStateQuery.toLowerCase().trim()))
                              .map((st) => {
                                const stFemale = st.genderBreakdown.find((g) => g.gender === 'Female')?.percentage || 50;
                                const stMale = st.genderBreakdown.find((g) => g.gender === 'Male')?.percentage || 48;
                                const stAge18 = st.ageBracketBreakdown.find((a) => a.bracket === '18–24')?.percentage || 28;

                                return (
                                  <div
                                    key={st.stateName}
                                    className="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs space-y-1.5"
                                  >
                                    <div className="flex items-center justify-between">
                                      <span className="text-xs font-bold text-slate-900">{st.stateName}</span>
                                      <span className="text-xs font-black text-[#4B286D]">{st.percentageInField}%</span>
                                    </div>

                                    <div className="flex items-center justify-between text-xs text-slate-600 pt-1 border-t border-slate-100">
                                      <span>Actual Graduates:</span>
                                      <strong className="text-slate-900 font-bold">{st.actualGraduatesFormatted}</strong>
                                    </div>

                                    <div className="text-[10px] text-slate-400 flex items-center justify-between">
                                      <span>Annual New: {st.annualNewGraduatesFormatted}</span>
                                      <span>Pool: {st.tertiaryEducatedFormatted}</span>
                                    </div>

                                    {/* Mini Demographics Badge */}
                                    <div className="flex items-center justify-between text-[10px] bg-slate-50 p-1.5 rounded-lg border border-slate-100 font-medium">
                                      <span className="text-rose-700 font-semibold">♀ {stFemale}%</span>
                                      <span className="text-blue-700 font-semibold">♂ {stMale}%</span>
                                      <span className="text-slate-600">18–24 yrs: {stAge18}%</span>
                                    </div>

                                    {st.topUniversities.length > 0 && (
                                      <div className="text-[10px] text-slate-500 font-medium truncate pt-0.5">
                                        🎓 {st.topUniversities.slice(0, 2).join(', ')}
                                      </div>
                                    )}
                                  </div>
                                );
                              })}
                          </div>
                        </div>
                      )}

                      {/* EXPANDABLE CANADA PROVINCE BREAKDOWN PANEL */}
                      {isCA && isExpanded && country.canadaProvinceBreakdown && (
                        <div className="mt-4 p-4 bg-slate-50/90 rounded-2xl border border-slate-200 space-y-3">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-200">
                            <div className="flex items-center gap-2">
                              <span className="text-base">🇨🇦</span>
                              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                                Canada Provincial & Territorial Breakdown ({country.canadaProvinceBreakdown.length} Regions)
                              </h4>
                            </div>

                            <div className="relative max-w-xs w-full">
                              <Search className="w-3 h-3 absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
                              <input
                                type="text"
                                placeholder="Filter province (e.g. Ontario, Quebec)..."
                                value={caProvinceQuery}
                                onChange={(e) => setCaProvinceQuery(e.target.value)}
                                className="w-full text-xs pl-7 pr-2.5 py-1 rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-1 focus:ring-[#4B286D]"
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 max-h-[420px] overflow-y-auto pr-1">
                            {country.canadaProvinceBreakdown
                              .filter((prov) => !caProvinceQuery.trim() || prov.provinceName.toLowerCase().includes(caProvinceQuery.toLowerCase().trim()))
                              .map((prov) => {
                                const provFemale = prov.genderBreakdown.find((g) => g.gender === 'Female')?.percentage || 50;
                                const provMale = prov.genderBreakdown.find((g) => g.gender === 'Male')?.percentage || 48;
                                const provAge18 = prov.ageBracketBreakdown.find((a) => a.bracket === '18–24')?.percentage || 28;

                                return (
                                  <div
                                    key={prov.provinceName}
                                    className="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs space-y-1.5"
                                  >
                                    <div className="flex items-center justify-between">
                                      <span className="text-xs font-bold text-slate-900">{prov.provinceName}</span>
                                      <span className="text-xs font-black text-[#4B286D]">{prov.percentageInField}%</span>
                                    </div>

                                    <div className="flex items-center justify-between text-xs text-slate-600 pt-1 border-t border-slate-100">
                                      <span>Actual Graduates:</span>
                                      <strong className="text-slate-900 font-bold">{prov.actualGraduatesFormatted}</strong>
                                    </div>

                                    <div className="text-[10px] text-slate-400 flex items-center justify-between">
                                      <span>Annual New: {prov.annualNewGraduatesFormatted}</span>
                                      <span>Pool: {prov.tertiaryEducatedFormatted}</span>
                                    </div>

                                    {/* Mini Demographics Badge */}
                                    <div className="flex items-center justify-between text-[10px] bg-slate-50 p-1.5 rounded-lg border border-slate-100 font-medium">
                                      <span className="text-rose-700 font-semibold">♀ {provFemale}%</span>
                                      <span className="text-blue-700 font-semibold">♂ {provMale}%</span>
                                      <span className="text-slate-600">18–24 yrs: {provAge18}%</span>
                                    </div>

                                    {prov.topUniversities.length > 0 && (
                                      <div className="text-[10px] text-slate-500 font-medium truncate pt-0.5">
                                        🎓 {prov.topUniversities.slice(0, 2).join(', ')}
                                      </div>
                                    )}
                                  </div>
                                );
                              })}
                          </div>
                        </div>
                      )}

                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      )}

      {/* VIEW PERSPECTIVE 2: EXPLORE BY COUNTRY PROFILE */}
      {viewPerspective === 'country' && (
        <div className="space-y-6">
          
          {/* Country Selection Header */}
          <div className="bg-white p-5 rounded-2xl border border-[#E3DDE8] shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Globe className="w-5 h-5 text-[#4B286D]" />
                <span>Select Country to View Complete Educational Profile</span>
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Examine full breakdown across all 12 major disciplines with exact percentages and actual talent counts.
              </p>
            </div>

            {/* Country Dropdown */}
            <div className="min-w-[260px]">
              <select
                value={selectedCountryCode}
                onChange={(e) => setSelectedCountryCode(e.target.value)}
                className="w-full text-xs font-bold bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#4B286D]"
              >
                {FIELD_OF_STUDIES_DATASET[0].countryData.map((c) => (
                  <option key={c.countryCode} value={c.countryCode}>
                    {c.flag} {c.countryName} ({c.region})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Country Profile Display */}
          {countryProfileData && (
            <div className="bg-white p-6 rounded-2xl border border-[#E3DDE8] shadow-xs space-y-6">
              
              {/* Profile Header Card */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{countryProfileData.flag}</span>
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-2xl font-black text-slate-900">
                        {countryProfileData.countryName}
                      </h2>
                      <span className="text-xs font-bold bg-[#4B286D]/10 text-[#4B286D] px-2.5 py-0.5 rounded-md">
                        {countryProfileData.region}
                      </span>
                    </div>
                    <div className="text-xs text-slate-500 mt-1">
                      Total Tertiary Educated Talent Pool: <strong className="text-slate-800">{countryProfileData.tertiaryPopulation}</strong>
                    </div>
                  </div>
                </div>
              </div>

              {/* Grid of Fields of Study for this country */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {countryProfileData.fieldBreakdown.map((f, idx) => (
                  <div key={f.fieldId} className="p-4 bg-slate-50 rounded-xl border border-slate-200 hover:border-[#4B286D]/30 transition space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <div className="p-2 bg-white text-[#4B286D] rounded-lg shadow-2xs border border-slate-200">
                          {renderIcon(f.iconName)}
                        </div>
                        <div>
                          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">
                            #{idx + 1} {f.category}
                          </div>
                          <div className="text-sm font-bold text-slate-900 leading-tight">
                            {f.fieldName}
                          </div>
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="text-lg font-black text-[#4B286D]">
                          {f.percentage}%
                        </div>
                        <div className="text-[10px] font-semibold text-slate-500">
                          {f.actualFormatted}
                        </div>
                      </div>
                    </div>

                    <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-[#4B286D] h-full rounded-full"
                        style={{ width: `${Math.min(100, f.percentage * 3.5)}%` }}
                      />
                    </div>

                    {f.genderBreakdown.length > 0 && (
                      <div className="flex flex-wrap items-center justify-between text-[11px] bg-white p-2 rounded-lg border border-slate-200 gap-1">
                        <span className="text-rose-700 font-bold flex items-center gap-1">
                          ♀ {f.genderBreakdown.find(g => g.gender === 'Female')?.percentage}% ({f.genderBreakdown.find(g => g.gender === 'Female')?.countFormatted})
                        </span>
                        <span className="text-blue-700 font-bold flex items-center gap-1">
                          ♂ {f.genderBreakdown.find(g => g.gender === 'Male')?.percentage}% ({f.genderBreakdown.find(g => g.gender === 'Male')?.countFormatted})
                        </span>
                        <span className="text-purple-700 font-semibold">
                          ⚧ Non-Binary: {f.genderBreakdown.find(g => g.gender === 'Non-Binary / Unspecified')?.percentage}%
                        </span>
                        <span className="text-slate-600 font-semibold bg-slate-100 px-1.5 py-0.5 rounded">
                          18–24: {f.ageBracketBreakdown.find(a => a.bracket === '18–24')?.percentage}%
                        </span>
                      </div>
                    )}

                    {f.topUnis.length > 0 && (
                      <div className="text-xs text-slate-600 pt-1 border-t border-slate-200/80">
                        <span className="font-bold text-slate-500 mr-1">Key Universities:</span>
                        <span>{f.topUnis.join(', ')}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>

            </div>
          )}

        </div>
      )}

    </div>
  );
};
