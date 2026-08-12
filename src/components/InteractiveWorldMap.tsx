import React, { useState, useMemo } from 'react';
import { Country, Region } from '../types';
import { COUNTRIES_DATA, getAllUniqueLanguages } from '../data/countries';
import { DETAILED_CONTINENT_PATHS } from '../data/countryShapes';
import { CountryShapeSvg } from './CountryShapeSvg';
import {
  MapPin,
  Globe,
  Sparkles,
  BookOpen,
  Layers,
  Search,
  RotateCcw,
  X,
  Compass,
  Info,
  Flame,
  ChevronRight,
  Loader2,
  Award,
  Filter,
  CheckCircle2,
  Building2,
  TrendingUp,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Minimize2,
  Move,
  Crosshair
} from 'lucide-react';

interface InteractiveWorldMapProps {
  onSelectCountry: (country: Country) => void;
  initialSubMode?: 'map_geographic' | 'global_heatmap' | 'subregions';
}

interface RegionalBreakdown {
  regionName: string;
  primaryLanguage: string;
  secondaryLanguage?: string;
  percentages: { [langName: string]: number };
  notes: string;
}

const DEFAULT_HEAT_LANGUAGE = 'ALL';
const DEFAULT_HEAT_COUNTRY = 'CH';

// Sub-regional preset heat maps for famous multilingual nations
const COUNTRY_SUBREGIONAL_HEATMAPS: { [countryCode: string]: RegionalBreakdown[] } = {
  CH: [ // Switzerland
    {
      regionName: 'Deutschschweiz (German Cantons: Zurich, Bern, Basel, Lucerne)',
      primaryLanguage: 'German (Swiss German)',
      percentages: { German: 87, French: 5, Italian: 2, English: 6 },
      notes: 'Schwiizertüütsch is spoken daily; High German is used in official media and education.',
    },
    {
      regionName: 'Romandie (French Cantons: Geneva, Vaud, Neuchâtel, Jura)',
      primaryLanguage: 'French',
      percentages: { French: 85, German: 8, English: 5, Italian: 2 },
      notes: 'Geneva and Lausanne are major Francophone centers in international diplomacy.',
    },
    {
      regionName: 'Ticino & Southern Valleys (Italian Cantons)',
      primaryLanguage: 'Italian',
      percentages: { Italian: 90, German: 5, French: 3, English: 2 },
      notes: 'Lombard dialects are natively spoken alongside standard Italian.',
    },
    {
      regionName: 'Graubünden (Grisons Alpine Valleys)',
      primaryLanguage: 'German',
      secondaryLanguage: 'Romansh',
      percentages: { German: 68, Romansh: 15, Italian: 14, French: 3 },
      notes: 'Switzerland’s only trilingual canton and home to the ancient Romansh language.',
    },
  ],
  ZA: [ // South Africa
    {
      regionName: 'KwaZulu-Natal',
      primaryLanguage: 'isiZulu',
      percentages: { isiZulu: 78, English: 13, Afrikaans: 6, isiXhosa: 3 },
      notes: 'Heartland of the Zulu nation; Durban is a major English and isiZulu hub.',
    },
    {
      regionName: 'Eastern Cape',
      primaryLanguage: 'isiXhosa',
      percentages: { isiXhosa: 79, Afrikaans: 10, English: 9, Sesotho: 2 },
      notes: 'Ancestral land of Nelson Mandela; famous for click consonants.',
    },
    {
      regionName: 'Western Cape (Cape Town & Winelands)',
      primaryLanguage: 'Afrikaans',
      percentages: { Afrikaans: 49, isiXhosa: 25, English: 20, Other: 6 },
      notes: 'Trilingual region blending Afrikaans, Xhosa, and South African English.',
    },
    {
      regionName: 'Gauteng (Johannesburg & Pretoria)',
      primaryLanguage: 'Multilingual Code-Switching Hub',
      percentages: { isiZulu: 20, English: 13, Sepedi: 12, Afrikaans: 11, Sesotho: 11, Setswana: 10, isiXhosa: 7, Xitsonga: 6, Other: 10 },
      notes: 'High degree of code-switching (Tsotsitaal) and urban multi-lingualism.',
    },
    {
      regionName: 'Limpopo & Mpumalanga',
      primaryLanguage: 'Sepedi & Xitsonga',
      percentages: { Sepedi: 53, Xitsonga: 17, Tshivenda: 16, Afrikaans: 3, English: 3 },
      notes: 'Northern indigenous language strongholds near Kruger National Park.',
    },
  ],
  CA: [ // Canada
    {
      regionName: 'Quebec (Montreal & Quebec City)',
      primaryLanguage: 'French',
      percentages: { French: 82, English: 11, Allophone: 7 },
      notes: 'Official monolingual status under Charter of the French Language; Montreal is highly bilingual.',
    },
    {
      regionName: 'Ontario & Western Canada (Toronto, Vancouver, Calgary)',
      primaryLanguage: 'English',
      percentages: { English: 84, French: 3, Cantonese: 4, Mandarin: 4, Punjabi: 3, Spanish: 2 },
      notes: 'Dominant Anglophone zone with vast immigrant linguistic communities.',
    },
    {
      regionName: 'Nunavut Territory',
      primaryLanguage: 'Inuktitut & Inuinnaqtun',
      percentages: { Inuktitut: 65, English: 30, French: 2, Inuinnaqtun: 3 },
      notes: 'Indigenous Inuit language is co-official alongside English and French.',
    },
    {
      regionName: 'New Brunswick',
      primaryLanguage: 'Official Bilingual (English & French)',
      percentages: { English: 65, French: 33, Other: 2 },
      notes: 'Canada’s only officially constitutionally bilingual province.',
    },
  ],
  IN: [ // India
    {
      regionName: 'Northern Hindi Belt (Uttar Pradesh, Bihar, Rajasthan, MP, Delhi)',
      primaryLanguage: 'Hindi',
      percentages: { Hindi: 88, Urdu: 8, Punjabi: 2, English: 2 },
      notes: 'Heartland of Devanagari script and Hindustani lingua franca.',
    },
    {
      regionName: 'Tamil Nadu (Chennai, Madurai)',
      primaryLanguage: 'Tamil',
      percentages: { Tamil: 88, Telugu: 6, Kannada: 2, English: 4 },
      notes: 'Classical Dravidian language with thousands of years of recorded literature.',
    },
    {
      regionName: 'West Bengal (Kolkata)',
      primaryLanguage: 'Bengali',
      percentages: { Bengali: 86, Hindi: 7, Santali: 3, Urdu: 2, English: 2 },
      notes: 'Rich literary heritage of Rabindranath Tagore; Bengali script.',
    },
    {
      regionName: 'Maharashtra (Mumbai, Pune)',
      primaryLanguage: 'Marathi',
      percentages: { Marathi: 69, Hindi: 12, Gujarati: 5, Urdu: 7, English: 7 },
      notes: 'Mumbai is a melting pot with high business English and Hindi use.',
    },
    {
      regionName: 'Kerala & Lakshadweep',
      primaryLanguage: 'Malayalam',
      percentages: { Malayalam: 97, Tamil: 1, English: 2 },
      notes: 'Highest literacy rate in India; Malayalam script.',
    },
  ],
  BE: [ // Belgium
    {
      regionName: 'Flanders (Northern Region: Antwerp, Ghent, Bruges)',
      primaryLanguage: 'Dutch (Flemish)',
      percentages: { Dutch: 95, French: 3, English: 2 },
      notes: 'Dutch-speaking community bordering Netherlands.',
    },
    {
      regionName: 'Wallonia (Southern Region: Liège, Namur, Charleroi)',
      primaryLanguage: 'French',
      percentages: { French: 98, German: 1, Dutch: 1 },
      notes: 'Francophone region; includes small German-speaking Community in East.',
    },
    {
      regionName: 'Brussels-Capital Region',
      primaryLanguage: 'Officially Bilingual (French Dominant)',
      percentages: { French: 85, Dutch: 10, English: 5 },
      notes: 'Bilingual capital city with international diplomatic presence.',
    },
  ],
  ES: [ // Spain
    {
      regionName: 'Catalonia & Balearic Islands (Barcelona, Palma)',
      primaryLanguage: 'Catalan / Spanish Bilingual',
      percentages: { Spanish: 50, Catalan: 40, Both: 10 },
      notes: 'Catalan is co-official and used extensively in schools and local government.',
    },
    {
      regionName: 'Basque Country (Euskadi: Bilbao, San Sebastián)',
      primaryLanguage: 'Spanish & Basque (Euskara)',
      percentages: { Spanish: 65, Basque: 35 },
      notes: 'Euskara is a language isolate with no known connection to Indo-European.',
    },
    {
      regionName: 'Galicia (Santiago, A Coruña)',
      primaryLanguage: 'Galician (Galego) & Spanish',
      percentages: { Galician: 55, Spanish: 45 },
      notes: 'Galician shares close linguistic roots with Portuguese.',
    },
    {
      regionName: 'Central & Southern Spain (Madrid, Seville, Valencia)',
      primaryLanguage: 'Castilian Spanish',
      percentages: { Spanish: 98, Other: 2 },
      notes: 'Standard Spanish heartland.',
    },
  ],
  PY: [ // Paraguay
    {
      regionName: 'Asunción Urban Metro',
      primaryLanguage: 'Jopará (Guaraní-Spanish Code-Switching)',
      percentages: { Spanish: 55, Guaraní: 40, Jopará: 85 },
      notes: 'Urban residents blend Spanish vocabulary onto Guaraní grammar.',
    },
    {
      regionName: 'Rural Departments (Itapúa, San Pedro, Caaguazú)',
      primaryLanguage: 'Guaraní',
      percentages: { Guaraní: 88, Spanish: 10, German: 2 },
      notes: 'Guaraní is spoken in daily life by non-indigenous and indigenous rural citizens alike.',
    },
  ],
};

export const InteractiveWorldMap: React.FC<InteractiveWorldMapProps> = ({
  onSelectCountry,
  initialSubMode = 'map_geographic',
}) => {
  // Primary Consolidated Sub-Mode
  const [subMode, setSubMode] = useState<'map_geographic' | 'global_heatmap' | 'subregions'>(initialSubMode);

  // Geographic Map Mode State
  const [selectedRegion, setSelectedRegion] = useState<Region | 'All'>('All');
  const [hoveredCountry, setHoveredCountry] = useState<Country | null>(null);
  const [activeCountry, setActiveCountry] = useState<Country | null>(null);
  const [mapSearch, setMapSearch] = useState<string>('');

  // Zoom, Pan & Map Expansion State
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [panOffset, setPanOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isMapExpanded, setIsMapExpanded] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const REGION_ZOOM_PRESETS: { [key in Region | 'All']: { zoom: number; x: number; y: number } } = {
    All: { zoom: 1, x: 0, y: 0 },
    Europe: { zoom: 2.5, x: 2, y: -18 },
    Asia: { zoom: 1.9, x: 22, y: -8 },
    Africa: { zoom: 2.1, x: 2, y: 8 },
    Americas: { zoom: 1.7, x: -24, y: 2 },
    Oceania: { zoom: 2.3, x: 34, y: 20 },
  };

  const handleSelectRegion = (reg: Region | 'All') => {
    setSelectedRegion(reg);
    const preset = REGION_ZOOM_PRESETS[reg];
    if (preset) {
      setZoomLevel(preset.zoom);
      setPanOffset({ x: preset.x, y: preset.y });
    }
  };

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(Number((prev + 0.5).toFixed(1)), 8));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => {
      const next = Math.max(Number((prev - 0.5).toFixed(1)), 1);
      if (next === 1) setPanOffset({ x: 0, y: 0 });
      return next;
    });
  };

  const handleResetZoom = () => {
    setZoomLevel(1);
    setPanOffset({ x: 0, y: 0 });
  };

  const handleFocusCountryOnMap = (c: Country) => {
    setZoomLevel(3.5);
    const targetX = c.coordinates.x - 50;
    const targetY = c.coordinates.y - 42.5;
    setPanOffset({ x: targetX, y: targetY });
    setActiveCountry(c);
    setHoveredCountry(c);
  };

  const viewBox = useMemo(() => {
    const baseW = 100;
    const baseH = 85;
    const w = baseW / zoomLevel;
    const h = baseH / zoomLevel;

    const centerX = (baseW - w) / 2 + panOffset.x;
    const centerY = (baseH - h) / 2 + panOffset.y;

    const minX = -15;
    const maxX = baseW - w + 15;
    const minY = -15;
    const maxY = baseH - h + 15;

    const clampedX = Math.max(minX, Math.min(maxX, centerX));
    const clampedY = Math.max(minY, Math.min(maxY, centerY));

    return `${clampedX} ${clampedY} ${w} ${h}`;
  }, [zoomLevel, panOffset]);

  const handleMouseDown = (e: React.MouseEvent<SVGSVGElement>) => {
    if (e.button !== 0) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    if (!isDragging) return;
    const svg = e.currentTarget;
    const rect = svg.getBoundingClientRect();
    const scaleX = 100 / (rect.width * zoomLevel);
    const scaleY = 85 / (rect.height * zoomLevel);

    const dx = (e.clientX - dragStart.x) * scaleX;
    const dy = (e.clientY - dragStart.y) * scaleY;

    setPanOffset((prev) => ({
      x: prev.x - dx,
      y: prev.y - dy,
    }));

    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => setIsDragging(false);

  const handleTouchStart = (e: React.TouchEvent<SVGSVGElement>) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      setDragStart({ x: e.touches[0].clientX, y: e.touches[0].clientY });
    }
  };

  const handleTouchMove = (e: React.TouchEvent<SVGSVGElement>) => {
    if (!isDragging || e.touches.length !== 1) return;
    const svg = e.currentTarget;
    const rect = svg.getBoundingClientRect();
    const scaleX = 100 / (rect.width * zoomLevel);
    const scaleY = 85 / (rect.height * zoomLevel);

    const dx = (e.touches[0].clientX - dragStart.x) * scaleX;
    const dy = (e.touches[0].clientY - dragStart.y) * scaleY;

    setPanOffset((prev) => ({
      x: prev.x - dx,
      y: prev.y - dy,
    }));

    setDragStart({ x: e.touches[0].clientX, y: e.touches[0].clientY });
  };

  const handleTouchEnd = () => setIsDragging(false);

  const handleWheel = (e: React.WheelEvent<SVGSVGElement>) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      handleZoomIn();
    } else {
      handleZoomOut();
    }
  };

  // Global Language Heatmap State
  const uniqueLanguages = useMemo(() => getAllUniqueLanguages(), []);
  const [selectedLanguage, setSelectedLanguage] = useState<string>(DEFAULT_HEAT_LANGUAGE);
  const [languageSearch, setLanguageSearch] = useState<string>('');

  // Sub-Regional Heatmap State
  const [selectedCountryCode, setSelectedCountryCode] = useState<string>(DEFAULT_HEAT_COUNTRY);
  const [aiBreakdown, setAiBreakdown] = useState<RegionalBreakdown[] | null>(null);
  const [loadingAi, setLoadingAi] = useState(false);

  const regions: (Region | 'All')[] = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  // Filter countries by region and map search query
  const filteredCountries = useMemo(() => {
    return COUNTRIES_DATA.filter((c) => {
      const matchesRegion = selectedRegion === 'All' || c.region === selectedRegion;
      if (!mapSearch.trim()) return matchesRegion;
      const q = mapSearch.toLowerCase().trim();
      const matchesSearch =
        c.name.toLowerCase().includes(q) ||
        c.capital.toLowerCase().includes(q) ||
        c.code.toLowerCase().includes(q) ||
        c.languages.some((l) => l.name.toLowerCase().includes(q));
      return matchesRegion && matchesSearch;
    });
  }, [selectedRegion, mapSearch]);

  // Compute heatmap dominance percentage for every country given selected language
  const countryHeatData = useMemo(() => {
    if (selectedLanguage === 'ALL') {
      return COUNTRIES_DATA.map((c) => {
        const primaryLang = c.languages[0];
        const percentage = primaryLang?.percentage ?? 80;
        let status: 'dominant' | 'major' | 'official' | 'minority' | 'spoken' | 'none' = 'dominant';

        if (percentage >= 70) status = 'dominant';
        else if (percentage >= 40) status = 'major';
        else if (percentage >= 15) status = 'official';
        else status = 'minority';

        return {
          country: c,
          match: primaryLang,
          percentage,
          status,
        };
      }).sort((a, b) => b.percentage - a.percentage);
    }

    const langTarget = selectedLanguage.toLowerCase().trim();

    return COUNTRIES_DATA.map((c) => {
      const match = c.languages.find((l) => l.name.toLowerCase().trim() === langTarget);
      let percentage = 0;
      let status: 'dominant' | 'major' | 'official' | 'minority' | 'spoken' | 'none' = 'none';

      if (match) {
        percentage = match.percentage ?? (match.type === 'official' ? 60 : 15);
        if (percentage >= 70) status = 'dominant';
        else if (percentage >= 40) status = 'major';
        else if (percentage >= 15) status = 'official';
        else if (percentage >= 5) status = 'minority';
        else status = 'spoken';
      }

      return {
        country: c,
        match,
        percentage,
        status,
      };
    }).sort((a, b) => b.percentage - a.percentage);
  }, [selectedLanguage]);

  // Quick lookup map for country heat values
  const countryHeatMapLookup = useMemo(() => {
    const map = new Map<string, { percentage: number; status: string }>();
    countryHeatData.forEach((item) => {
      map.set(item.country.code, { percentage: item.percentage, status: item.status });
    });
    return map;
  }, [countryHeatData]);

  // Color mapper helper based on percentage
  const getHeatColor = (percentage: number) => {
    if (percentage >= 75) return { bg: 'bg-rose-600', fill: '#e11d48', label: '80-100% Dominant', text: 'text-rose-600', border: 'border-rose-500' };
    if (percentage >= 45) return { bg: 'bg-orange-500', fill: '#f97316', label: '45-74% Major', text: 'text-orange-600', border: 'border-orange-400' };
    if (percentage >= 20) return { bg: 'bg-amber-500', fill: '#f59e0b', label: '20-44% Moderate', text: 'text-amber-600', border: 'border-amber-400' };
    if (percentage >= 5) return { bg: 'bg-emerald-500', fill: '#10b981', label: '5-19% Regional', text: 'text-emerald-600', border: 'border-emerald-400' };
    if (percentage > 0) return { bg: 'bg-sky-500', fill: '#0ea5e9', label: '< 5% Spoken', text: 'text-sky-600', border: 'border-sky-400' };
    return { bg: 'bg-slate-700', fill: '#334155', label: '0% Unrecorded', text: 'text-slate-400', border: 'border-slate-700' };
  };

  // Filter unique languages list by search term
  const filteredUniqueLanguages = useMemo(() => {
    if (!languageSearch.trim()) return uniqueLanguages;
    const q = languageSearch.toLowerCase().trim();
    return uniqueLanguages.filter(
      (l) =>
        l.name.toLowerCase().includes(q) ||
        l.nativeName.toLowerCase().includes(q)
    );
  }, [uniqueLanguages, languageSearch]);

  // Reset helper
  const handleResetMap = () => {
    setSelectedRegion('All');
    setMapSearch('');
    setHoveredCountry(null);
    setActiveCountry(null);
    setSelectedLanguage(DEFAULT_HEAT_LANGUAGE);
    setLanguageSearch('');
    setSelectedCountryCode(DEFAULT_HEAT_COUNTRY);
    setAiBreakdown(null);
    handleResetZoom();
  };

  // Generate AI sub-regional heatmap for any selected country
  const handleGenerateAiSubregions = async () => {
    const c = COUNTRIES_DATA.find((item) => item.code === selectedCountryCode);
    if (!c) return;

    setLoadingAi(true);
    setAiBreakdown(null);

    try {
      const res = await fetch('/api/gemini/country-insights', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          countryName: `${c.name} (${c.capital})`,
          languages: c.languages.map((l) => l.name),
        }),
      });

      if (!res.ok) throw new Error('Failed to generate AI breakdown');
      const data = await res.json();

      const syntheticRegions: RegionalBreakdown[] = [
        {
          regionName: `Capital & Urban Metro (${c.capital})`,
          primaryLanguage: c.languages[0]?.name || 'Official Language',
          percentages: {
            [c.languages[0]?.name || 'Primary']: 75,
            [c.languages[1]?.name || 'English']: 20,
          },
          notes: data.codeSwitchingAndEtiquette || 'Urban hub with high multilingual commercial usage.',
        },
        {
          regionName: `Regional Provinces & Interior`,
          primaryLanguage: c.languages[1]?.name || c.languages[0]?.name || 'Local Language',
          percentages: {
            [c.languages[1]?.name || c.languages[0]?.name || 'Local']: 65,
            [c.languages[0]?.name || 'Official']: 30,
          },
          notes: data.historicalContext || 'Traditional regional dialect patterns preserve local heritage.',
        },
      ];

      setAiBreakdown(syntheticRegions);
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingAi(false);
    }
  };

  const currentPreviewCountry = hoveredCountry || activeCountry || filteredCountries[0] || COUNTRIES_DATA[0];
  const activeSubregionCountry = COUNTRIES_DATA.find((c) => c.code === selectedCountryCode) || COUNTRIES_DATA[0];
  const activeSubregions = COUNTRY_SUBREGIONAL_HEATMAPS[selectedCountryCode] || aiBreakdown;
  const isMapFiltered = Boolean(selectedRegion !== 'All' || mapSearch.trim() || selectedLanguage !== DEFAULT_HEAT_LANGUAGE);

  return (
    <div className="space-y-6">
      
      {/* Primary Mode Switcher Header Bar */}
      <div className="bg-white p-3 sm:p-4 rounded-2xl border border-[#E3DDE8] shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-[#F4EFF9] text-[#4B286D] border border-purple-200">
            <Globe className="w-5 h-5 text-[#2B8000]" />
          </div>
          <div>
            <h2 className="text-base font-extrabold text-slate-900">Consolidated World & Language Heat Map</h2>
            <p className="text-xs text-slate-500">Interactive SVG map, language heat intensity, and sub-regional breakdowns</p>
          </div>
        </div>

        {/* Consolidated View Switcher Tabs */}
        <div className="flex bg-[#F8F6FA] p-1 rounded-xl border border-[#E3DDE8] shrink-0 self-start md:self-auto flex-wrap sm:flex-nowrap gap-1">
          <button
            onClick={() => setSubMode('map_geographic')}
            className={`text-xs font-bold px-3 py-1.5 rounded-lg transition flex items-center gap-1.5 ${
              subMode === 'map_geographic'
                ? 'bg-[#4B286D] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-[#F4EFF9]'
            }`}
          >
            <MapPin className="w-3.5 h-3.5 text-[#66CC00]" />
            <span>Interactive Map & Shapes</span>
          </button>

          <button
            onClick={() => setSubMode('global_heatmap')}
            className={`text-xs font-bold px-3 py-1.5 rounded-lg transition flex items-center gap-1.5 ${
              subMode === 'global_heatmap'
                ? 'bg-[#4B286D] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-[#F4EFF9]'
            }`}
          >
            <Flame className="w-3.5 h-3.5 text-rose-500" />
            <span>Global Language Heat Map</span>
          </button>

          <button
            onClick={() => setSubMode('subregions')}
            className={`text-xs font-bold px-3 py-1.5 rounded-lg transition flex items-center gap-1.5 ${
              subMode === 'subregions'
                ? 'bg-[#4B286D] text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-[#F4EFF9]'
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-amber-500" />
            <span>Sub-Regional Heat Maps</span>
          </button>
        </div>
      </div>

      {/* FILTER & CONTROL TOOLBAR FOR GEOGRAPHIC & GLOBAL HEATMAP MODES */}
      {subMode === 'map_geographic' && (
        <div className="bg-white p-3 sm:p-4 rounded-xl border border-[#E3DDE8] shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Compass className="w-4 h-4 text-[#4B286D]" />
            <span className="text-xs font-extrabold text-slate-800">Geographic Controls</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className="relative">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={mapSearch}
                onChange={(e) => setMapSearch(e.target.value)}
                placeholder="Search country on map..."
                className="bg-[#F8F6FA] text-slate-900 text-xs rounded-xl pl-8 pr-7 py-1.5 border border-[#E3DDE8] focus:outline-none focus:border-[#4B286D] w-44 sm:w-52"
              />
              {mapSearch && (
                <button
                  onClick={() => setMapSearch('')}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-900 p-0.5"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <div className="flex flex-wrap gap-1 bg-[#F8F6FA] p-1 rounded-xl border border-[#E3DDE8]">
              {regions.map((reg) => (
                <button
                  key={reg}
                  onClick={() => handleSelectRegion(reg)}
                  className={`text-xs font-bold px-2 py-1 rounded-lg transition ${
                    selectedRegion === reg
                      ? 'bg-[#4B286D] text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-[#F4EFF9]'
                  }`}
                >
                  {reg}
                </button>
              ))}
            </div>

            {isMapFiltered && (
              <button
                onClick={handleResetMap}
                className="bg-[#F4EFF9] hover:bg-[#ECE3F4] text-[#4B286D] border border-purple-200 text-xs font-bold px-2.5 py-1.5 rounded-xl transition flex items-center gap-1"
                title="Reset filters"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            )}
          </div>
        </div>
      )}

      {subMode === 'global_heatmap' && (
        <div className="bg-white p-4 rounded-xl border border-[#E3DDE8] shadow-xs space-y-3">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3 flex-1">
              <span className="text-xs font-bold text-slate-600 uppercase tracking-wider shrink-0 flex items-center gap-1">
                <Flame className="w-4 h-4 text-rose-600" />
                Select Language to Map Heat:
              </span>

              {/* Language Search */}
              <div className="relative">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={languageSearch}
                  onChange={(e) => setLanguageSearch(e.target.value)}
                  placeholder="Filter languages..."
                  className="bg-[#F8F6FA] text-slate-900 text-xs rounded-xl pl-8 pr-7 py-1.5 border border-[#E3DDE8] focus:outline-none focus:border-[#4B286D] w-36 sm:w-44"
                />
                {languageSearch && (
                  <button
                    onClick={() => setLanguageSearch('')}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-900 p-0.5"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Language Select Dropdown */}
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="bg-[#F8F6FA] text-slate-900 text-xs font-bold rounded-xl px-3 py-1.5 border border-[#E3DDE8] focus:outline-none focus:border-[#4B286D] max-w-xs cursor-pointer"
              >
                <option value="ALL">🌐 All Primary Official Languages</option>
                {filteredUniqueLanguages.map((lang) => (
                  <option key={lang.id} value={lang.name}>
                    {lang.name} ({lang.nativeName}) — {lang.speakerCount || 'Global'}
                  </option>
                ))}
              </select>
            </div>

            {selectedLanguage !== 'ALL' && (
              <button
                onClick={() => {
                  setSelectedLanguage('ALL');
                  setLanguageSearch('');
                }}
                className="bg-[#F4EFF9] hover:bg-[#ECE3F4] text-[#4B286D] border border-purple-200 text-xs font-bold px-3 py-1.5 rounded-xl transition flex items-center gap-1 shrink-0 self-start lg:self-auto"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Show All Languages</span>
              </button>
            )}
          </div>

          {/* Color Temperature Legend Spectrum */}
          <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center gap-2 text-[11px] font-semibold text-slate-600">
            <span className="text-slate-400 font-bold uppercase text-[10px]">Heat Scale:</span>
            <span className="flex items-center gap-1 bg-rose-50 text-rose-700 px-2 py-0.5 rounded border border-rose-200">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-600" /> 80-100% Dominant
            </span>
            <span className="flex items-center gap-1 bg-orange-50 text-orange-700 px-2 py-0.5 rounded border border-orange-200">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500" /> 45-74% Major
            </span>
            <span className="flex items-center gap-1 bg-amber-50 text-amber-700 px-2 py-0.5 rounded border border-amber-200">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500" /> 20-44% Moderate
            </span>
            <span className="flex items-center gap-1 bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded border border-emerald-200">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /> 5-19% Regional
            </span>
            <span className="flex items-center gap-1 bg-sky-50 text-sky-700 px-2 py-0.5 rounded border border-sky-200">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-500" /> &lt;5% Spoken
            </span>
            <span className="flex items-center gap-1 bg-slate-100 text-slate-500 px-2 py-0.5 rounded border border-slate-200">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-600" /> 0% Unrecorded
            </span>
          </div>
        </div>
      )}

      {/* COMMON HIGH-DEFINITIONS VECTOR SVG MAP CANVAS (FOR GEOGRAPHIC & GLOBAL HEATMAP MODES) */}
      {(subMode === 'map_geographic' || subMode === 'global_heatmap') && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* SVG MAP CANVAS */}
          <div className={`${isMapExpanded ? 'lg:col-span-3' : 'lg:col-span-2'} bg-slate-950 p-4 sm:p-6 rounded-2xl border border-slate-800 shadow-xl relative overflow-hidden flex flex-col justify-between transition-all duration-300`}>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3 text-xs text-slate-400 relative z-10">
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-indigo-400 shrink-0" />
                <span className="font-semibold text-slate-200">
                  {subMode === 'global_heatmap'
                    ? `Heat Dominance Map for: ${selectedLanguage}`
                    : `Showing ${filteredCountries.length} countries (${selectedRegion} Region)`}
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 rounded-full bg-indigo-950 text-indigo-300 border border-indigo-800 text-[10px] font-bold">
                  Zoom: {Math.round(zoomLevel * 100)}%
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsMapExpanded(!isMapExpanded)}
                  className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition flex items-center gap-1.5 border border-slate-700"
                  title={isMapExpanded ? "Collapse to Split View" : "Expand Map View"}
                >
                  {isMapExpanded ? <Minimize2 className="w-3.5 h-3.5 text-amber-400" /> : <Maximize2 className="w-3.5 h-3.5 text-indigo-400" />}
                  <span>{isMapExpanded ? "Split View" : "Expand Map"}</span>
                </button>
              </div>
            </div>

            <div className={`relative w-full ${isMapExpanded ? 'h-[560px] sm:h-[660px] lg:h-[760px]' : 'h-[460px] sm:h-[540px] lg:h-[620px]'} bg-slate-900 rounded-xl border border-slate-800/90 overflow-hidden shadow-inner flex items-center justify-center p-1 transition-all duration-300 group`}>
              <svg
                viewBox={viewBox}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onWheel={handleWheel}
                className={`w-full h-full relative z-0 select-none ${isDragging ? 'cursor-grabbing' : zoomLevel > 1 ? 'cursor-grab' : 'cursor-crosshair'}`}
              >
                <defs>
                  <pattern id="mapGridConsolidated" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#1e293b" strokeWidth="0.15" />
                  </pattern>
                </defs>
                <rect width="100" height="85" fill="url(#mapGridConsolidated)" opacity="0.6" />

                <line x1="0" y1="42.5" x2="100" y2="42.5" stroke="#6366f1" strokeWidth="0.2" strokeDasharray="1,1" opacity="0.4" />
                <line x1="0" y1="25" x2="100" y2="25" stroke="#38bdf8" strokeWidth="0.15" strokeDasharray="1,2" opacity="0.3" />
                <line x1="0" y1="60" x2="100" y2="60" stroke="#38bdf8" strokeWidth="0.15" strokeDasharray="1,2" opacity="0.3" />

                {/* Continent Detailed Paths */}
                {DETAILED_CONTINENT_PATHS.map((cont) => {
                  const isRegionActive = selectedRegion === 'All' || selectedRegion === cont.region;
                  return (
                    <path
                      key={cont.id}
                      d={cont.path}
                      fill={cont.color}
                      fillOpacity={isRegionActive ? '0.22' : '0.05'}
                      stroke={cont.color}
                      strokeWidth="0.4"
                      strokeOpacity={isRegionActive ? '0.6' : '0.1'}
                      className="transition-all duration-300"
                    />
                  );
                })}

                {/* Country Pins */}
                {filteredCountries.map((c) => {
                  const isHovered = hoveredCountry?.code === c.code || activeCountry?.code === c.code;

                  // Heatmap color logic if in global_heatmap mode
                  const heatInfo = countryHeatMapLookup.get(c.code);
                  const heatColor = subMode === 'global_heatmap' && heatInfo
                    ? getHeatColor(heatInfo.percentage).fill
                    : isHovered ? '#10b981' : '#818cf8';

                  const pinRadius = isHovered ? (3.2 / Math.sqrt(zoomLevel)) : (2.0 / Math.sqrt(zoomLevel));
                  const pingRadius = (5.5 / Math.sqrt(zoomLevel));
                  const textOffset = -3.5 / Math.sqrt(zoomLevel);
                  const textSize = isHovered ? Math.max(2.0, 3.2 / Math.sqrt(zoomLevel)) : Math.max(1.5, 2.4 / Math.sqrt(zoomLevel));

                  return (
                    <g
                      key={c.code}
                      transform={`translate(${c.coordinates.x}, ${c.coordinates.y})`}
                      className="cursor-pointer transition-transform duration-200"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleFocusCountryOnMap(c);
                        onSelectCountry(c);
                      }}
                      onMouseEnter={() => setHoveredCountry(c)}
                      onMouseLeave={() => setHoveredCountry(null)}
                    >
                      {isHovered && (
                        <circle
                          r={pingRadius}
                          fill={heatColor}
                          className="opacity-50 animate-ping"
                        />
                      )}

                      <circle
                        r={pinRadius}
                        fill={heatColor}
                        stroke="#020617"
                        strokeWidth={0.5 / Math.sqrt(zoomLevel)}
                        className="transition-all duration-200"
                      />

                      <text
                        y={textOffset}
                        textAnchor="middle"
                        style={{ fontSize: `${textSize}px` }}
                        className={`font-bold tracking-tight transition-all select-none ${
                          isHovered ? 'fill-emerald-300 font-extrabold' : 'fill-slate-200 opacity-80'
                        }`}
                      >
                        {c.flag} {c.code}
                      </text>
                    </g>
                  );
                })}
              </svg>

              {/* FLOATING ZOOM CONTROLS (Top Right of Canvas) */}
              <div className="absolute top-3 right-3 flex flex-col gap-1.5 z-20">
                <div className="bg-slate-950/90 backdrop-blur border border-slate-700/80 p-1 rounded-xl shadow-lg flex flex-col gap-1">
                  <button
                    onClick={handleZoomIn}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition flex items-center justify-center text-xs font-bold"
                    title="Zoom In (+)"
                  >
                    <ZoomIn className="w-4 h-4 text-emerald-400" />
                  </button>
                  <button
                    onClick={handleZoomOut}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition flex items-center justify-center text-xs font-bold"
                    title="Zoom Out (-)"
                  >
                    <ZoomOut className="w-4 h-4 text-amber-400" />
                  </button>
                  <button
                    onClick={handleResetZoom}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition flex items-center justify-center text-xs font-bold"
                    title="Reset Zoom & Pan"
                  >
                    <RotateCcw className="w-4 h-4 text-indigo-400" />
                  </button>
                </div>

                <div className="bg-slate-950/90 backdrop-blur border border-slate-700/80 px-2 py-1 rounded-lg text-[10px] font-mono text-center text-indigo-300 shadow-md">
                  {Math.round(zoomLevel * 100)}%
                </div>
              </div>

              {/* FLOATING HINT OVERLAY (Bottom Left) */}
              <div className="absolute bottom-3 left-3 bg-slate-950/80 backdrop-blur border border-slate-800 px-3 py-1.5 rounded-xl text-[10px] text-slate-300 flex items-center gap-2 z-10 pointer-events-none">
                <Move className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span>{zoomLevel > 1 ? 'Click & drag or scroll wheel to pan map' : 'Scroll wheel or + / - to zoom in'}</span>
              </div>

              {/* FLOATING LEGEND (Bottom Right) */}
              <div className="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur border border-slate-800 px-3 py-1.5 rounded-xl text-[10px] text-slate-400 flex items-center gap-3 z-10">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-indigo-400" /> Country Marker
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" /> Selected / Active
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE PANEL: GEOGRAPHIC SHAPE OR HEATMAP PROFILE */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <span className="text-xs font-bold text-[#4B286D] uppercase tracking-wider flex items-center gap-1.5">
                  <Globe className="w-4 h-4 text-[#2B8000]" />
                  {subMode === 'global_heatmap' ? 'Language Distribution Profile' : 'Geographical Shape Profile'}
                </span>

                {isMapFiltered && (
                  <button
                    onClick={handleResetMap}
                    className="text-[11px] text-slate-500 hover:text-slate-800 font-semibold flex items-center gap-1 transition"
                  >
                    <RotateCcw className="w-3 h-3" /> Reset View
                  </button>
                )}
              </div>

              {currentPreviewCountry ? (
                <div className="mt-4 space-y-4">
                  <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col items-center justify-center relative overflow-hidden group">
                    <div className="absolute top-3 left-3 text-[10px] font-mono text-indigo-400">
                      MAP COORD: X:{currentPreviewCountry.coordinates.x} Y:{currentPreviewCountry.coordinates.y}
                    </div>

                    <CountryShapeSvg
                      countryCode={currentPreviewCountry.code}
                      countryName={currentPreviewCountry.name}
                      className="w-28 h-28 my-2"
                      fillColor={
                        subMode === 'global_heatmap' && countryHeatMapLookup.has(currentPreviewCountry.code)
                          ? getHeatColor(countryHeatMapLookup.get(currentPreviewCountry.code)!.percentage).fill
                          : "#6366f1"
                      }
                      strokeColor="#818cf8"
                    />

                    <div className="text-center mt-1">
                      <span className="text-3xl filter drop-shadow">{currentPreviewCountry.flag}</span>
                      <h3 className="text-lg font-bold text-white tracking-tight mt-1">
                        {currentPreviewCountry.name}
                      </h3>
                      <p className="text-xs text-slate-400">
                        {currentPreviewCountry.nativeName} • {currentPreviewCountry.capital}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between py-1.5 border-b border-slate-100">
                      <span className="text-slate-500 font-medium">Region:</span>
                      <strong className="text-slate-900">{currentPreviewCountry.region} ({currentPreviewCountry.subregion})</strong>
                    </div>

                    {currentPreviewCountry.gdp && (
                      <div className="flex justify-between py-1.5 border-b border-slate-100">
                        <span className="text-slate-500 font-medium">GDP (Nominal):</span>
                        <strong className="text-emerald-700">{currentPreviewCountry.gdp.nominalUsd} (Rank #{currentPreviewCountry.gdp.rank})</strong>
                      </div>
                    )}

                    <div className="flex justify-between py-1.5 border-b border-slate-100">
                      <span className="text-slate-500 font-medium">Multilingual Score:</span>
                      <strong className="text-amber-600">{currentPreviewCountry.multilingualScore.toFixed(1)} / 10</strong>
                    </div>

                    {subMode === 'global_heatmap' && countryHeatMapLookup.has(currentPreviewCountry.code) && (
                      <div className="flex justify-between py-1.5 border-b border-slate-100 bg-purple-50 px-2 rounded-lg border border-purple-100">
                        <span className="text-[#4B286D] font-bold">Selected Lang Share ({selectedLanguage}):</span>
                        <strong className={getHeatColor(countryHeatMapLookup.get(currentPreviewCountry.code)!.percentage).text}>
                          {countryHeatMapLookup.get(currentPreviewCountry.code)!.percentage}%
                        </strong>
                      </div>
                    )}

                    <div className="py-1.5">
                      <span className="text-slate-500 font-medium block mb-1">
                        Spoken Languages ({currentPreviewCountry.languages.length}):
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {currentPreviewCountry.languages.map((l, i) => (
                          <span
                            key={i}
                            className="bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded text-[11px] font-semibold border border-indigo-100"
                          >
                            {l.name} ({l.percentage ? l.percentage + '%' : l.type})
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="text-xs text-slate-500 italic py-8 text-center">
                  Select or hover over any country pin on the map.
                </p>
              )}
            </div>

            {currentPreviewCountry && (
              <button
                onClick={() => onSelectCountry(currentPreviewCountry)}
                className="w-full bg-[#4B286D] hover:bg-[#371B54] text-white font-bold text-xs py-2.5 rounded-xl transition shadow-sm"
              >
                Open Full {currentPreviewCountry.name} Profile →
              </button>
            )}
          </div>
        </div>
      )}

      {/* GEOGRAPHIC MODE: COUNTRY CARDS GRID */}
      {subMode === 'map_geographic' && (
        <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="text-base font-bold text-slate-900">
              Countries in {selectedRegion} Region ({filteredCountries.length})
            </h3>

            {isMapFiltered && (
              <button
                onClick={handleResetMap}
                className="text-xs text-[#4B286D] hover:text-[#371B54] font-bold flex items-center gap-1 transition"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Reset Filters
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {filteredCountries.map((c) => (
              <div
                key={c.code}
                onClick={() => onSelectCountry(c)}
                onMouseEnter={() => setHoveredCountry(c)}
                onMouseLeave={() => setHoveredCountry(null)}
                className="p-3.5 rounded-xl bg-slate-50 hover:bg-purple-50/60 border border-slate-200/80 hover:border-purple-300 transition cursor-pointer flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <CountryShapeSvg
                    countryCode={c.code}
                    countryName={c.name}
                    className="w-10 h-10 shrink-0"
                    fillColor="#4B286D"
                  />
                  <div>
                    <div className="font-bold text-sm text-slate-900 group-hover:text-[#4B286D] transition flex items-center gap-1.5">
                      <span>{c.flag}</span>
                      <span>{c.name}</span>
                    </div>
                    <div className="text-xs text-slate-500 font-medium">
                      {c.capital} • {c.languages.slice(0, 2).map((l) => l.name).join(', ')}
                    </div>
                  </div>
                </div>

                <span className="text-xs font-bold text-[#4B286D] px-2 py-1 rounded-md bg-white border border-slate-200 shrink-0">
                  {c.languages.length} langs
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* GLOBAL HEATMAP MODE: RANKINGS & COUNTRY HEAT LIST */}
      {subMode === 'global_heatmap' && (
        <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-5">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div>
              <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-[#2B8000]" />
                Top Countries Spoken: {selectedLanguage} ({countryHeatData.filter((d) => d.percentage > 0).length} Total Nations)
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">Ranked by estimated percentage of population fluent or native</p>
            </div>

            <span className="text-xs font-bold px-3 py-1 bg-[#F4EFF9] text-[#4B286D] border border-purple-200 rounded-full">
              {selectedLanguage === 'ALL' ? 'All Languages' : `Filter: ${selectedLanguage}`}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {countryHeatData
              .filter((item) => selectedLanguage === 'ALL' || item.percentage > 0)
              .map(({ country, match, percentage }) => {
                const heatStyle = getHeatColor(percentage);

                return (
                  <div
                    key={country.code}
                    onClick={() => onSelectCountry(country)}
                    className="p-4 rounded-xl bg-[#F8F6FA] border border-[#E3DDE8] hover:border-purple-300 transition cursor-pointer flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <CountryShapeSvg
                        countryCode={country.code}
                        countryName={country.name}
                        className="w-10 h-10 shrink-0"
                        fillColor={heatStyle.fill}
                      />
                      <div>
                        <div className="font-extrabold text-sm text-slate-900 group-hover:text-[#4B286D] flex items-center gap-1.5">
                          <span>{country.flag}</span>
                          <span>{country.name}</span>
                        </div>
                        <div className="text-xs text-slate-500 font-medium mt-0.5">
                          {match?.name || country.languages[0]?.name || 'Official'} ({match?.type || 'Language'})
                        </div>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <div className={`text-sm font-black ${heatStyle.text}`}>
                        {percentage}%
                      </div>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full bg-white border ${heatStyle.border}`}>
                        {heatStyle.label.split(' ')[1] || 'Spoken'}
                      </span>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      )}

      {/* SUB-REGIONAL HEATMAP MODE */}
      {subMode === 'subregions' && (
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F4EFF9] text-[#4B286D] border border-purple-200 text-xs font-bold mb-2">
                <Layers className="w-3.5 h-3.5 text-[#2B8000]" />
                <span>Sub-Regional Linguistic Maps</span>
              </div>
              <h3 className="text-xl font-extrabold text-slate-900">
                Cantonal, Provincial & State Language Distributions
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Explore internal sub-regional language percentages for famous multilingual nations or generate AI breakdowns for any country.
              </p>
            </div>

            {/* Country Selector for Sub-regions */}
            <div className="flex items-center gap-2">
              <select
                value={selectedCountryCode}
                onChange={(e) => {
                  setSelectedCountryCode(e.target.value);
                  setAiBreakdown(null);
                }}
                className="bg-[#F8F6FA] text-slate-900 text-xs font-bold rounded-xl px-3.5 py-2 border border-[#E3DDE8] focus:outline-none focus:border-[#4B286D] cursor-pointer"
              >
                <optgroup label="Preset Multilingual Nations">
                  <option value="CH">🇨🇭 Switzerland (Cantons)</option>
                  <option value="ZA">🇿🇦 South Africa (Provinces)</option>
                  <option value="CA">🇨🇦 Canada (Provinces & Territories)</option>
                  <option value="IN">🇮🇳 India (States & Belts)</option>
                  <option value="BE">🇧🇪 Belgium (Regions)</option>
                  <option value="ES">🇪🇸 Spain (Autonomous Communities)</option>
                  <option value="PY">🇵🇾 Paraguay (Departments)</option>
                </optgroup>
                <optgroup label="All Global Nations">
                  {COUNTRIES_DATA.map((c) => (
                    <option key={`sub-${c.code}`} value={c.code}>
                      {c.flag} {c.name} ({c.capital})
                    </option>
                  ))}
                </optgroup>
              </select>
            </div>
          </div>

          {/* Active Country Banner */}
          <div className="bg-gradient-to-r from-[#4B286D] to-[#371B54] text-white p-6 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm">
            <div className="flex items-center gap-4">
              <span className="text-5xl filter drop-shadow">{activeSubregionCountry.flag}</span>
              <div>
                <h3 className="text-2xl font-black">{activeSubregionCountry.name}</h3>
                <p className="text-xs text-purple-200 mt-0.5">
                  Capital: {activeSubregionCountry.capital} • Multilingual Score: {activeSubregionCountry.multilingualScore.toFixed(1)}/10
                </p>
              </div>
            </div>

            <button
              onClick={() => onSelectCountry(activeSubregionCountry)}
              className="bg-white hover:bg-slate-100 text-[#4B286D] font-extrabold text-xs px-4 py-2.5 rounded-xl transition shadow-xs self-start md:self-auto"
            >
              Full Profile →
            </button>
          </div>

          {/* Sub-regional breakdown grid */}
          {activeSubregions ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {activeSubregions.map((reg, idx) => (
                <div key={idx} className="bg-[#F8F6FA] p-5 rounded-2xl border border-[#E3DDE8] space-y-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                      <h4 className="font-extrabold text-slate-900 text-sm flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-[#4B286D]" />
                        <span>{reg.regionName}</span>
                      </h4>
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-purple-100 text-[#4B286D]">
                        {reg.primaryLanguage}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed font-medium">
                      {reg.notes}
                    </p>

                    {/* Percentage Breakdown Bars */}
                    <div className="space-y-2 pt-2">
                      <span className="text-[10px] font-bold uppercase text-slate-500">Linguistic Percentage Breakdown:</span>
                      {Object.entries(reg.percentages).map(([lang, pct]) => (
                        <div key={lang} className="space-y-1">
                          <div className="flex justify-between text-xs font-semibold text-slate-700">
                            <span>{lang}</span>
                            <span>{pct}%</span>
                          </div>
                          <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                            <div
                              className="bg-[#4B286D] h-2 rounded-full transition-all duration-500"
                              style={{ width: `${pct}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center bg-[#F8F6FA] rounded-2xl border border-dashed border-purple-200 space-y-4">
              <Sparkles className="w-10 h-10 text-[#4B286D] mx-auto animate-pulse" />
              <div>
                <h4 className="font-extrabold text-slate-900 text-base">Generate AI Sub-Regional Breakdown</h4>
                <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
                  This country does not have a hardcoded preset. Generate an AI regional breakdown for {activeSubregionCountry.name} using Gemini.
                </p>
              </div>
              <button
                onClick={handleGenerateAiSubregions}
                disabled={loadingAi}
                className="bg-[#4B286D] hover:bg-[#371B54] text-white font-bold text-xs px-5 py-2.5 rounded-xl transition shadow-xs inline-flex items-center gap-2 disabled:opacity-50"
              >
                {loadingAi ? <Loader2 className="w-4 h-4 animate-spin text-[#66CC00]" /> : <Sparkles className="w-4 h-4 text-[#66CC00]" />}
                <span>{loadingAi ? 'Generating Regional Breakdown...' : 'Generate AI Sub-Regions'}</span>
              </button>
            </div>
          )}
        </div>
      )}

    </div>
  );
};
