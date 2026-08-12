import React from 'react';
import { Country } from '../types';
import { CountryShapeSvg } from './CountryShapeSvg';
import { MapPin, Users, BookOpen, ChevronRight, Sparkles, TrendingUp, DollarSign } from 'lucide-react';

interface CountryCardProps {
  country: Country;
  onSelect: (country: Country) => void;
  onCompareToggle?: (country: Country) => void;
  isCompared?: boolean;
}

export const CountryCard: React.FC<CountryCardProps> = ({
  country,
  onSelect,
  onCompareToggle,
  isCompared = false,
}) => {
  const officialLangs = country.languages.filter(
    (l) => l.type === 'official' || l.type === 'co-official'
  );
  const otherLangs = country.languages.filter(
    (l) => l.type !== 'official' && l.type !== 'co-official'
  );

  return (
    <div 
      className="bg-white rounded-2xl border border-[#E3DDE8] shadow-xs hover:shadow-md transition-all duration-200 flex flex-col overflow-hidden group hover:border-[#4B286D]/40"
      id={`country-card-${country.code}`}
    >
      {/* Header section */}
      <div className="p-5 pb-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <CountryShapeSvg
              countryCode={country.code}
              countryName={country.name}
              className="w-10 h-10 shrink-0"
              fillColor="#4B286D"
            />
            <span className="text-3xl leading-none select-none filter drop-shadow-xs group-hover:scale-105 transition-transform">
              {country.flag}
            </span>
            <div>
              <h3 className="font-bold text-slate-900 text-lg tracking-tight group-hover:text-[#4B286D] transition-colors">
                {country.name}
              </h3>
              <p className="text-xs text-slate-500 font-medium truncate max-w-[200px]">
                {country.nativeName}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-end">
            <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#F4EFF9] text-[#4B286D] border border-purple-200">
              {country.region}
            </span>
            <div className="flex items-center gap-1 mt-1.5" title="Multilingual Diversity Score (1-10)">
              <Sparkles className="w-3 h-3 text-[#2B8000]" />
              <span className="text-xs font-bold text-slate-700">
                {country.multilingualScore.toFixed(1)}/10
              </span>
            </div>
          </div>
        </div>

        {/* Quick info row */}
        <div className="flex items-center justify-between gap-2 text-xs text-slate-600 mt-3 pt-3 border-t border-slate-100 font-medium flex-wrap">
          <div className="flex items-center gap-1" title="Capital City">
            <MapPin className="w-3.5 h-3.5 text-[#4B286D]" />
            <span>{country.capital}</span>
          </div>
          <div className="flex items-center gap-1" title="Population">
            <Users className="w-3.5 h-3.5 text-[#2B8000]" />
            <span>{(country.population / 1000000).toFixed(1)}M</span>
          </div>
          {country.gdp && (
            <div className="flex items-center gap-1 font-bold text-[#4B286D] bg-[#F4EFF9] px-2 py-0.5 rounded-md border border-purple-200" title={`GDP: ${country.gdp.nominalUsd} (Rank #${country.gdp.rank})`}>
              <TrendingUp className="w-3 h-3 text-[#2B8000]" />
              <span>GDP {country.gdp.nominalUsd}</span>
            </div>
          )}
        </div>
      </div>

      {/* Languages list */}
      <div className="px-5 py-3 bg-[#F8F6FA] border-t border-b border-[#E3DDE8] flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-extrabold text-[#4B286D] uppercase tracking-wider flex items-center gap-1">
              <BookOpen className="w-3.5 h-3.5 text-[#2B8000]" />
              Languages ({country.languages.length})
            </span>
            <span className="text-[11px] text-slate-500 font-semibold">
              {officialLangs.length} Official
            </span>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {officialLangs.slice(0, 4).map((lang, idx) => (
              <span
                key={`${country.code}-official-${lang.id}-${idx}`}
                className="text-xs font-bold px-2 py-0.5 rounded-md bg-white text-[#4B286D] border border-purple-200 flex items-center gap-1 shadow-2xs"
              >
                <span>{lang.name}</span>
                {lang.percentage && (
                  <span className="text-[10px] text-[#2B8000] font-extrabold">
                    {lang.percentage}%
                  </span>
                )}
              </span>
            ))}

            {otherLangs.slice(0, 2).map((lang, idx) => (
              <span
                key={`${country.code}-other-${lang.id}-${idx}`}
                className="text-xs font-medium px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 border border-slate-200/80"
              >
                {lang.name}
              </span>
            ))}

            {country.languages.length > 6 && (
              <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-slate-200/80 text-slate-700">
                +{country.languages.length - 6} more
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="p-3 px-5 bg-white flex items-center justify-between gap-2">
        {onCompareToggle && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onCompareToggle(country);
            }}
            className={`text-xs font-bold px-2.5 py-1.5 rounded-xl border transition ${
              isCompared
                ? 'bg-[#E6F7D9] text-[#2B8000] border-[#66CC00]'
                : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-[#F4EFF9] hover:text-[#4B286D]'
            }`}
          >
            {isCompared ? '✓ Comparing' : '+ Compare'}
          </button>
        )}

        <button
          onClick={() => onSelect(country)}
          className="flex-1 inline-flex items-center justify-center gap-1 text-xs font-bold px-3.5 py-2 rounded-xl bg-[#4B286D] hover:bg-[#371B54] text-white transition shadow-xs"
        >
          <span>Explore Details</span>
          <ChevronRight className="w-3.5 h-3.5 text-[#66CC00]" />
        </button>
      </div>
    </div>
  );
};
