import React, { useState, useMemo } from 'react';
import { Country } from '../types';
import { COUNTRIES_DATA, getAllUniqueLanguages } from '../data/countries';
import { Languages, Search, Globe, ChevronRight, CheckCircle2, RotateCcw, X, Filter } from 'lucide-react';

interface ReverseLanguageSearchProps {
  onSelectCountry: (country: Country) => void;
  searchQuery: string;
  onSearchChange?: (q: string) => void;
}

const DEFAULT_LANGUAGE = 'English';

export const ReverseLanguageSearch: React.FC<ReverseLanguageSearchProps> = ({
  onSelectCountry,
  searchQuery: externalSearchQuery,
  onSearchChange,
}) => {
  const uniqueLanguages = useMemo(() => getAllUniqueLanguages(), []);
  
  // Local search query state (can sync with external prop if provided)
  const [localSearch, setLocalSearch] = useState<string>('');
  const [selectedLanguageName, setSelectedLanguageName] = useState<string>(DEFAULT_LANGUAGE);

  // Active query combining local or external search
  const effectiveQuery = (localSearch || externalSearchQuery || '').trim();

  // Reset function to restore search and selection defaults
  const handleReset = () => {
    setLocalSearch('');
    if (onSearchChange) {
      onSearchChange('');
    }
    setSelectedLanguageName(DEFAULT_LANGUAGE);
  };

  // Filter languages list by search query
  const filteredLanguages = useMemo(() => {
    if (!effectiveQuery) return uniqueLanguages;
    const q = effectiveQuery.toLowerCase();
    return uniqueLanguages.filter(
      (l) =>
        (l.name || '').toLowerCase().includes(q) ||
        (l.nativeName || '').toLowerCase().includes(q) ||
        (l.family || '').toLowerCase().includes(q) ||
        (l.script || '').toLowerCase().includes(q)
    );
  }, [uniqueLanguages, effectiveQuery]);

  // Find all countries matching the selected language
  const matchingCountries = useMemo(() => {
    if (!selectedLanguageName) return [];
    const target = selectedLanguageName.toLowerCase().trim();

    return COUNTRIES_DATA.filter((c) =>
      c.languages?.some((l) => l?.name && l.name.toLowerCase().trim() === target)
    );
  }, [selectedLanguageName]);

  // Active language object details
  const activeLanguageObj = useMemo(() => {
    if (!selectedLanguageName) return uniqueLanguages[0] || null;
    const target = selectedLanguageName.toLowerCase().trim();
    return (
      uniqueLanguages.find(
        (l) => l?.name && l.name.toLowerCase().trim() === target
      ) || uniqueLanguages[0] || null
    );
  }, [uniqueLanguages, selectedLanguageName]);

  const isFiltered = Boolean(effectiveQuery || selectedLanguageName !== DEFAULT_LANGUAGE);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left column: Languages list with search bar & reset button */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col h-[650px]">
          <div className="space-y-3 mb-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Languages ({filteredLanguages.length} / {uniqueLanguages.length})
              </h3>

              {(effectiveQuery || selectedLanguageName !== DEFAULT_LANGUAGE) && (
                <button
                  onClick={handleReset}
                  className="text-xs text-indigo-600 hover:text-indigo-800 font-bold flex items-center gap-1 transition"
                >
                  <RotateCcw className="w-3 h-3" />
                  Reset
                </button>
              )}
            </div>

            {/* In-component Search Input with Reset Button */}
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={localSearch || externalSearchQuery || ''}
                onChange={(e) => {
                  setLocalSearch(e.target.value);
                  if (onSearchChange) onSearchChange(e.target.value);
                }}
                placeholder="Search language (e.g., Swahili, Arabic)..."
                className="w-full bg-slate-50 text-slate-900 text-xs rounded-xl pl-9 pr-8 py-2 border border-slate-200 focus:outline-none focus:border-indigo-600 focus:bg-white transition"
              />
              {effectiveQuery && (
                <button
                  onClick={() => {
                    setLocalSearch('');
                    if (onSearchChange) onSearchChange('');
                  }}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition"
                  title="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          <div className="overflow-y-auto space-y-1.5 flex-1 pr-1">
            {filteredLanguages.length > 0 ? (
              filteredLanguages.map((lang, idx) => {
                const isSelected = lang.name.toLowerCase() === selectedLanguageName.toLowerCase();
                return (
                  <button
                    key={`rev-lang-${lang.id}-${lang.name.replace(/\s+/g, '-')}-${idx}`}
                    onClick={() => setSelectedLanguageName(lang.name)}
                    className={`w-full text-left p-3 rounded-xl border transition flex items-center justify-between ${
                      isSelected
                        ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                        : 'bg-slate-50/80 hover:bg-slate-100 text-slate-800 border-slate-200/80'
                    }`}
                  >
                    <div>
                      <div className="font-bold text-sm tracking-tight flex items-center gap-2">
                        <span>{lang.name}</span>
                        <span className={`text-xs ${isSelected ? 'text-indigo-200' : 'text-slate-400'}`}>
                          ({lang.nativeName})
                        </span>
                      </div>
                      <div className={`text-[11px] mt-0.5 ${isSelected ? 'text-indigo-100' : 'text-slate-500'}`}>
                        {lang.family} • {lang.script} script
                      </div>
                    </div>

                    <span
                      className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                        isSelected
                          ? 'bg-indigo-500 text-white border border-indigo-400/40'
                          : 'bg-slate-200 text-slate-700'
                      }`}
                    >
                      {lang.countriesCount} {lang.countriesCount === 1 ? 'country' : 'countries'}
                    </span>
                  </button>
                );
              })
            ) : (
              <div className="p-8 text-center bg-slate-50 rounded-xl border border-dashed border-slate-200 space-y-2 my-auto">
                <Search className="w-8 h-8 text-slate-400 mx-auto" />
                <p className="text-xs text-slate-600 font-medium">No language matches "{effectiveQuery}"</p>
                <button
                  onClick={handleReset}
                  className="bg-indigo-600 text-white font-bold text-xs px-3 py-1.5 rounded-lg hover:bg-indigo-700 transition"
                >
                  Reset Search
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Right column: Country distribution for selected language */}
        <div className="lg:col-span-2 space-y-4">
          {activeLanguageObj && (
            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
                <div>
                  <div className="text-xs font-bold text-indigo-600 uppercase tracking-wider">
                    Selected Language Profile
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mt-0.5">
                    {activeLanguageObj.name}
                    <span className="text-base font-medium text-slate-500 ml-2">
                      ({activeLanguageObj.nativeName})
                    </span>
                  </h3>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <div className="bg-indigo-50 border border-indigo-200 text-indigo-800 text-xs font-bold px-3 py-1.5 rounded-xl">
                    Script: {activeLanguageObj.script}
                  </div>
                  <div className="bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold px-3 py-1.5 rounded-xl">
                    Family: {activeLanguageObj.family}
                  </div>
                  {selectedLanguageName !== DEFAULT_LANGUAGE && (
                    <button
                      onClick={handleReset}
                      className="bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold px-3 py-1.5 rounded-xl transition flex items-center gap-1"
                      title="Reset selected language to default"
                    >
                      <RotateCcw className="w-3 h-3" /> Reset Language
                    </button>
                  )}
                </div>
              </div>

              <div className="mt-4">
                <h4 className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-3">
                  Countries where {activeLanguageObj.name} is spoken ({matchingCountries.length})
                </h4>

                {matchingCountries.length === 0 ? (
                  <p className="text-sm text-slate-500 italic py-6 text-center bg-slate-50 rounded-xl border border-dashed border-slate-200">
                    No matching countries found in the database for this language.
                  </p>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {matchingCountries.map((c) => {
                      const langObj = c.languages?.find(
                        (l) => l?.name && activeLanguageObj?.name && l.name.toLowerCase().trim() === activeLanguageObj.name.toLowerCase().trim()
                      );

                      return (
                        <div
                          key={c.code}
                          onClick={() => onSelectCountry(c)}
                          className="bg-slate-50/80 hover:bg-indigo-50/50 p-4 rounded-xl border border-slate-200 hover:border-indigo-300 transition cursor-pointer flex items-center justify-between group"
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-3xl leading-none filter drop-shadow-sm">
                              {c.flag}
                            </span>
                            <div>
                              <div className="font-bold text-slate-900 group-hover:text-indigo-600 transition">
                                {c.name}
                              </div>
                              <div className="text-xs text-slate-500">
                                {c.capital} • {c.region}
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-col items-end gap-1">
                            {langObj && (
                              <span
                                className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                                  langObj.type === 'official' || langObj.type === 'co-official'
                                    ? 'bg-emerald-50 text-emerald-700 border-emerald-300'
                                    : 'bg-slate-200 text-slate-700 border-slate-300'
                                }`}
                              >
                                {langObj.type.replace('_', ' ')}
                              </span>
                            )}
                            {langObj?.percentage && (
                              <span className="text-xs font-extrabold text-indigo-600">
                                {langObj.percentage}% of pop
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
