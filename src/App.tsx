import React, { useState, useMemo } from 'react';
import { ViewMode, Country } from './types';
import { COUNTRIES_DATA } from './data/countries';
import { Header } from './components/Header';
import { CountryCard } from './components/CountryCard';
import { CountryDetailModal } from './components/CountryDetailModal';
import { ReverseLanguageSearch } from './components/ReverseLanguageSearch';
import { InteractiveWorldMap } from './components/InteractiveWorldMap';
import { StateLanguagePercentages } from './components/StateLanguagePercentages';
import { MinimumWageTracker } from './components/MinimumWageTracker';
import { TimeConverter } from './components/TimeConverter';
import { CountryJobsExplorer } from './components/CountryJobsExplorer';
import { FieldOfStudiesExplorer } from './components/FieldOfStudiesExplorer';
import { DemographicsExplorer } from './components/DemographicsExplorer';
import { SkillSearchExplorer } from './components/SkillSearchExplorer';
import { AiTravelAssistant } from './components/AiTravelAssistant';
import { QuizMode } from './components/QuizMode';
import { CountryComparisonModal } from './components/CountryComparisonModal';
import { TabHeaderInfo } from './components/TabHeaderInfo';
import { Globe, Sparkles, Languages, SearchX, Download, BarChart3, X, Check } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewMode>('explorer');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [comparedCodes, setComparedCodes] = useState<string[]>(['CH', 'CA', 'ZA']);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);

  // Filter countries based on search query and region filter
  const filteredCountries = useMemo(() => {
    return COUNTRIES_DATA.filter((country) => {
      // Region filter
      if (selectedRegion !== 'All' && country.region !== selectedRegion) {
        return false;
      }

      // Search query filter (Country name, native name, capital, or any language spoken)
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = country.name.toLowerCase().includes(q);
        const matchesNative = country.nativeName.toLowerCase().includes(q);
        const matchesCapital = country.capital.toLowerCase().includes(q);
        const matchesLanguage = country.languages.some(
          (l) => l.name.toLowerCase().includes(q) || l.nativeName.toLowerCase().includes(q)
        );

        return matchesName || matchesNative || matchesCapital || matchesLanguage;
      }

      return true;
    });
  }, [searchQuery, selectedRegion]);

  // Countries currently selected for comparison
  const comparedCountries = useMemo(() => {
    return COUNTRIES_DATA.filter((c) => comparedCodes.includes(c.code));
  }, [comparedCodes]);

  // Download CSV helper
  const handleDownloadCSV = (countriesList: Country[], filename: string = 'sourcing_country_data.csv') => {
    if (countriesList.length === 0) return;

    const headers = [
      'Country Code',
      'Country Name',
      'Native Name',
      'Region',
      'Subregion',
      'Capital',
      'Population',
      'Multilingual Diversity Score (1-10)',
      'Primary Languages',
      'Total Languages Spoken'
    ];

    const rows = countriesList.map((c) => [
      `"${c.code}"`,
      `"${c.name.replace(/"/g, '""')}"`,
      `"${c.nativeName.replace(/"/g, '""')}"`,
      `"${c.region}"`,
      `"${c.subregion || ''}"`,
      `"${c.capital}"`,
      c.population,
      c.multilingualScore,
      `"${c.languages.slice(0, 3).map((l) => `${l.name} (${l.percentage ? l.percentage + '%' : l.type})`).join('; ')}"`,
      c.languages.length,
    ]);

    const csvContent = [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Toggle compare selection
  const handleCompareToggle = (country: Country) => {
    if (comparedCodes.includes(country.code)) {
      setComparedCodes(comparedCodes.filter((c) => c !== country.code));
    } else {
      if (comparedCodes.length < 5) {
        setComparedCodes([...comparedCodes, country.code]);
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F6FA] text-slate-900 font-sans antialiased flex flex-col">
      {/* Horizontal Navigation Header */}
      <Header
        currentView={currentView}
        onViewChange={setCurrentView}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedRegion={selectedRegion}
        onRegionChange={setSelectedRegion}
      />

      {/* Main Area (Body Content - Maximized Results Area) */}
      <div className="flex-1 flex flex-col min-w-0 min-h-screen">

        {/* Main Body Content - Maximized Full-Width Area */}
        <main className="flex-1 w-full px-3 sm:px-6 lg:px-8 py-5">
          
          {/* Global Sourcing Suite Info & Active Tab Description Banner */}
          <TabHeaderInfo currentView={currentView} />

          {/* VIEW 1: COUNTRY EXPLORER GRID */}
          {currentView === 'explorer' && (
            <div className="space-y-6">
              
              {/* Quick stats counter header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-[#E3DDE8] shadow-xs">
                <div className="text-xs sm:text-sm text-slate-600 font-medium">
                  Showing <strong className="text-slate-900 font-bold">{filteredCountries.length}</strong> countries
                  {selectedRegion !== 'All' && <span> in <strong className="text-[#4B286D]">{selectedRegion}</strong></span>}
                  {searchQuery && <span> matching "<strong className="text-[#4B286D]">{searchQuery}</strong>"</span>}
                </div>

                <div className="flex items-center gap-3 text-xs text-slate-500">
                  <button
                    onClick={() => handleDownloadCSV(filteredCountries, 'filtered_country_sourcing_data.csv')}
                    className="inline-flex items-center gap-1.5 bg-[#2B8000] hover:bg-[#216300] text-white font-bold px-3.5 py-1.5 rounded-xl transition shadow-xs"
                    title="Download CSV of current filtered country list"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download CSV ({filteredCountries.length})</span>
                  </button>

                  <span className="hidden md:flex items-center gap-1.5 border-l border-slate-200 pl-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#66CC00] inline-block" />
                    Official Languages
                  </span>
                  <span className="hidden md:flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-sky-500 inline-block" />
                    Regional / Minority
                  </span>
                </div>
              </div>

              {/* Country Cards Grid */}
              {filteredCountries.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredCountries.map((country) => (
                    <CountryCard
                      key={country.code}
                      country={country}
                      onSelect={setSelectedCountry}
                      onCompareToggle={handleCompareToggle}
                      isCompared={comparedCodes.includes(country.code)}
                    />
                  ))}
                </div>
              ) : (
                /* Empty Search Fallback */
                <div className="p-12 text-center bg-white rounded-2xl border border-dashed border-[#D5C7E6] max-w-md mx-auto my-12 space-y-3">
                  <SearchX className="w-12 h-12 text-[#4B286D]/40 mx-auto" />
                  <h3 className="font-bold text-slate-800 text-base">No countries found</h3>
                  <p className="text-xs text-slate-500">
                    Try adjusting your search term or select "All Regions".
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedRegion('All');
                    }}
                    className="bg-[#4B286D] text-white font-semibold text-xs px-4 py-2 rounded-xl hover:bg-[#371B54] transition shadow-xs"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          )}

          {/* VIEW 2: REVERSE LANGUAGE LOOKUP */}
          {currentView === 'language_reverse' && (
            <ReverseLanguageSearch
              onSelectCountry={setSelectedCountry}
              searchQuery={searchQuery}
            />
          )}

          {/* VIEW 3: CONSOLIDATED WORLD & LANGUAGE HEAT MAP */}
          {(currentView === 'map' || currentView === 'heatmap') && (
            <InteractiveWorldMap onSelectCountry={setSelectedCountry} />
          )}

          {/* VIEW 5: STATE & PROVINCIAL LANGUAGE PERCENTAGES */}
          {currentView === 'state_percentages' && (
            <StateLanguagePercentages
              onSelectCountry={setSelectedCountry}
              initialCountryCode={selectedCountry?.code}
            />
          )}

          {/* VIEW 6: MINIMUM WAGE TRACKER */}
          {currentView === 'minimum_wage' && (
            <MinimumWageTracker onSelectCountry={setSelectedCountry} />
          )}

          {/* VIEW 7: CROSS-COUNTRY & STATE TIME CONVERTER */}
          {currentView === 'time_converter' && <TimeConverter />}

          {/* VIEW 8: GLOBAL JOBS & EMPLOYMENT MARKET DATA */}
          {currentView === 'jobs' && <CountryJobsExplorer />}

          {/* VIEW 8.2: SKILL SEARCH PER COUNTRY & STATE BREAKDOWN */}
          {currentView === 'skill_search' && <SkillSearchExplorer />}

          {/* VIEW 8.5: FIELD OF STUDIES EXPLORER */}
          {currentView === 'fields_of_study' && <FieldOfStudiesExplorer />}

          {/* VIEW 8.6: DEMOGRAPHICS (AGE BRACKETS & GENDER PREFERENCES) */}
          {currentView === 'demographics' && <DemographicsExplorer />}

          {/* VIEW 9: AI TRAVEL & LANGUAGE COACH */}
          {currentView === 'ai_assistant' && <AiTravelAssistant />}

          {/* VIEW 10: TRIVIA QUIZ */}
          {currentView === 'quiz' && <QuizMode />}

        </main>

        {/* Floating Sticky Compare Bar when countries are selected */}
        {comparedCodes.length > 0 && currentView === 'explorer' && (
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 bg-[#371B54]/95 border border-[#5E338A] text-white rounded-2xl shadow-2xl p-3 px-5 backdrop-blur-md flex items-center gap-4 max-w-2xl w-[90vw] animate-bounce-short">
            <div className="flex items-center gap-2 border-r border-purple-500/30 pr-4 shrink-0">
              <BarChart3 className="w-5 h-5 text-[#66CC00]" />
              <span className="text-xs font-bold text-slate-200">
                Compare ({comparedCodes.length}/5):
              </span>
            </div>

            <div className="flex items-center gap-1.5 overflow-x-auto flex-1 py-1 custom-scrollbar">
              {comparedCountries.map((c) => (
                <span
                  key={`compare-pill-${c.code}`}
                  className="inline-flex items-center gap-1 text-xs font-bold bg-[#4B286D] text-white border border-purple-400/30 px-2.5 py-1 rounded-xl shrink-0"
                >
                  <span>{c.flag}</span>
                  <span>{c.code}</span>
                  <button
                    onClick={() => setComparedCodes(comparedCodes.filter((id) => id !== c.code))}
                    className="text-purple-300 hover:text-rose-300 ml-1"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => setIsCompareModalOpen(true)}
                className="bg-[#66CC00] hover:bg-[#52A300] text-slate-950 font-extrabold text-xs px-3.5 py-2 rounded-xl transition shadow-sm whitespace-nowrap"
              >
                View Matrix →
              </button>

              <button
                onClick={() => handleDownloadCSV(comparedCountries, 'compared_country_sourcing.csv')}
                className="bg-[#2B8000] hover:bg-[#216300] text-white font-bold text-xs px-3 py-2 rounded-xl transition shadow-sm hidden sm:inline-flex items-center gap-1"
                title="Download comparison CSV"
              >
                <Download className="w-3.5 h-3.5" />
                <span>CSV</span>
              </button>

              <button
                onClick={() => setComparedCodes([])}
                className="text-purple-300 hover:text-white text-xs p-1"
                title="Clear all selected"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* App Footer */}
        <footer className="bg-[#371B54] text-purple-200 border-t border-[#4B286D] text-xs py-5 mt-10">
          <div className="w-full px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#66CC00]" />
              <span className="font-extrabold text-white">Sourcing Intelligence</span>
              <span>• Global sourcing, minimum wages & country data suite</span>
            </div>
            <div className="flex items-center gap-4 text-purple-300">
              <span>Powered by Gemini 3.6 Flash</span>
            </div>
          </div>
        </footer>
      </div>

      {/* Country Detail Modal */}
      <CountryDetailModal
        country={selectedCountry}
        onClose={() => setSelectedCountry(null)}
      />

      {/* Side-by-Side Country Comparison Modal */}
      <CountryComparisonModal
        isOpen={isCompareModalOpen}
        onClose={() => setIsCompareModalOpen(false)}
        comparedCountries={comparedCountries}
        onRemoveCountry={(code) => setComparedCodes(comparedCodes.filter((c) => c !== code))}
        onClearAll={() => setComparedCodes([])}
        onSelectCountry={setSelectedCountry}
      />
    </div>
  );
}
