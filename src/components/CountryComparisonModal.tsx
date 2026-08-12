import React from 'react';
import { Country } from '../types';
import { CountryShapeSvg } from './CountryShapeSvg';
import {
  X,
  Download,
  Check,
  Globe,
  Sparkles,
  MapPin,
  Users,
  BookOpen,
  DollarSign,
  Clock,
  Layers,
  BarChart3
} from 'lucide-react';

interface CountryComparisonModalProps {
  isOpen: boolean;
  onClose: () => void;
  comparedCountries: Country[];
  onRemoveCountry: (countryCode: string) => void;
  onClearAll: () => void;
  onSelectCountry: (country: Country) => void;
}

export const CountryComparisonModal: React.FC<CountryComparisonModalProps> = ({
  isOpen,
  onClose,
  comparedCountries,
  onRemoveCountry,
  onClearAll,
  onSelectCountry,
}) => {
  if (!isOpen) return null;

  // Download CSV helper for compared countries
  const handleExportCSV = () => {
    if (comparedCountries.length === 0) return;

    const headers = [
      'Country Code',
      'Country Name',
      'Native Name',
      'Region',
      'Subregion',
      'Capital',
      'Population',
      'Multilingual Score (1-10)',
      'Primary Languages',
      'All Spoken Languages',
      'Language Count'
    ];

    const rows = comparedCountries.map((c) => [
      `"${c.code}"`,
      `"${c.name.replace(/"/g, '""')}"`,
      `"${c.nativeName.replace(/"/g, '""')}"`,
      `"${c.region}"`,
      `"${c.subregion || ''}"`,
      `"${c.capital}"`,
      c.population,
      c.multilingualScore,
      `"${c.languages.slice(0, 3).map((l) => `${l.name} (${l.percentage ? l.percentage + '%' : l.type})`).join('; ')}"`,
      `"${c.languages.map((l) => l.name).join('; ')}"`,
      c.languages.length,
    ]);

    const csvContent = [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `country_comparison_sourcing_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-slate-900 border border-slate-800 text-white rounded-3xl w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl relative">
        
        {/* Header Bar */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-slate-900/90 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-indigo-600/30 border border-indigo-500/40 flex items-center justify-center text-indigo-400">
              <BarChart3 className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-extrabold text-white flex items-center gap-2">
                Country Side-by-Side Comparison
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  {comparedCountries.length} Selected
                </span>
              </h2>
              <p className="text-xs text-slate-400">
                Compare languages, population, multilingual scores, and sourcing metrics across countries
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleExportCSV}
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition shadow-sm"
              title="Export comparison data to CSV"
            >
              <Download className="w-4 h-4" />
              <span>Download CSV</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Comparison Grid */}
        <div className="p-6 overflow-x-auto overflow-y-auto flex-1">
          {comparedCountries.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <Globe className="w-12 h-12 text-slate-600 mx-auto" />
              <h3 className="text-base font-bold text-slate-300">No countries selected for comparison</h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Click the "+ Compare" button on any country card in the Country Explorer to add countries to this side-by-side view.
              </p>
            </div>
          ) : (
            <div className="min-w-[700px]">
              
              {/* Country Cards Header Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
                {comparedCountries.map((c) => (
                  <div
                    key={`comp-card-${c.code}`}
                    className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-4 relative flex flex-col justify-between"
                  >
                    <button
                      onClick={() => onRemoveCountry(c.code)}
                      className="absolute top-3 right-3 p-1 text-slate-400 hover:text-rose-400 hover:bg-slate-700/60 rounded-lg transition"
                      title="Remove from comparison"
                    >
                      <X className="w-4 h-4" />
                    </button>

                    <div>
                      <div className="flex items-center gap-2.5 mb-2">
                        <CountryShapeSvg
                          countryCode={c.code}
                          countryName={c.name}
                          className="w-8 h-8 shrink-0"
                          fillColor="#818cf8"
                        />
                        <span className="text-2xl leading-none">{c.flag}</span>
                        <div>
                          <h4 className="font-bold text-white text-base leading-tight truncate max-w-[140px]">
                            {c.name}
                          </h4>
                          <span className="text-[10px] text-slate-400 font-semibold">{c.code}</span>
                        </div>
                      </div>

                      <div className="text-xs text-slate-300 space-y-1 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800/80 mt-2">
                        <div className="flex items-center justify-between">
                          <span className="text-slate-400">Capital:</span>
                          <strong className="text-white">{c.capital}</strong>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-slate-400">Region:</span>
                          <span className="text-slate-200">{c.region}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-slate-400">Population:</span>
                          <strong className="text-white">{(c.population / 1000000).toFixed(1)}M</strong>
                        </div>
                        <div className="flex items-center justify-between pt-1 border-t border-slate-800">
                          <span className="text-slate-400 flex items-center gap-1">
                            <Sparkles className="w-3 h-3 text-amber-400" />
                            Diversity:
                          </span>
                          <span className="text-amber-400 font-bold">{c.multilingualScore.toFixed(1)}/10</span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        onClose();
                        onSelectCountry(c);
                      }}
                      className="mt-3 w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs py-2 rounded-xl transition"
                    >
                      Full Details →
                    </button>
                  </div>
                ))}
              </div>

              {/* Comparison Data Matrix Table */}
              <div className="bg-slate-800/50 border border-slate-700/80 rounded-2xl overflow-hidden">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-800 border-b border-slate-700 text-slate-400 uppercase tracking-wider text-[10px]">
                      <th className="p-3 font-bold w-48">Metric / Feature</th>
                      {comparedCountries.map((c) => (
                        <th key={`th-${c.code}`} className="p-3 font-bold text-white">
                          {c.flag} {c.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800 text-slate-300">
                    
                    {/* Primary Languages Row */}
                    <tr>
                      <td className="p-3 font-bold text-slate-400 bg-slate-900/40">Primary Language</td>
                      {comparedCountries.map((c) => (
                        <td key={`lang-p-${c.code}`} className="p-3 font-semibold text-indigo-300">
                          {c.languages[0]?.name || 'N/A'}{' '}
                          {c.languages[0]?.percentage ? `(${c.languages[0].percentage}%)` : ''}
                        </td>
                      ))}
                    </tr>

                    {/* Secondary Languages Row */}
                    <tr>
                      <td className="p-3 font-bold text-slate-400 bg-slate-900/40">Secondary / Regional</td>
                      {comparedCountries.map((c) => (
                        <td key={`lang-s-${c.code}`} className="p-3 text-slate-300">
                          {c.languages.slice(1, 4).map((l) => l.name).join(', ') || 'None listed'}
                        </td>
                      ))}
                    </tr>

                    {/* Total Languages Count */}
                    <tr>
                      <td className="p-3 font-bold text-slate-400 bg-slate-900/40">Total Languages Spoken</td>
                      {comparedCountries.map((c) => (
                        <td key={`lang-cnt-${c.code}`} className="p-3 font-bold text-white">
                          {c.languages.length} languages
                        </td>
                      ))}
                    </tr>

                    {/* Subregion Row */}
                    <tr>
                      <td className="p-3 font-bold text-slate-400 bg-slate-900/40">Subregion</td>
                      {comparedCountries.map((c) => (
                        <td key={`subr-${c.code}`} className="p-3 text-slate-300">
                          {c.subregion || c.region}
                        </td>
                      ))}
                    </tr>

                    {/* Capital City */}
                    <tr>
                      <td className="p-3 font-bold text-slate-400 bg-slate-900/40">Capital City</td>
                      {comparedCountries.map((c) => (
                        <td key={`cap-${c.code}`} className="p-3 font-semibold text-white">
                          {c.capital}
                        </td>
                      ))}
                    </tr>

                    {/* Multilingual Score */}
                    <tr>
                      <td className="p-3 font-bold text-slate-400 bg-slate-900/40">Multilingual Score</td>
                      {comparedCountries.map((c) => (
                        <td key={`score-${c.code}`} className="p-3 font-bold text-amber-400">
                          {c.multilingualScore.toFixed(1)} / 10
                        </td>
                      ))}
                    </tr>

                    {/* GDP Nominal */}
                    <tr>
                      <td className="p-3 font-bold text-slate-400 bg-slate-900/40">GDP (Nominal USD)</td>
                      {comparedCountries.map((c) => (
                        <td key={`gdp-nom-${c.code}`} className="p-3 font-extrabold text-emerald-400">
                          {c.gdp?.nominalUsd || 'N/A'}
                        </td>
                      ))}
                    </tr>

                    {/* GDP Per Capita */}
                    <tr>
                      <td className="p-3 font-bold text-slate-400 bg-slate-900/40">GDP Per Capita</td>
                      {comparedCountries.map((c) => (
                        <td key={`gdp-cap-${c.code}`} className="p-3 font-bold text-emerald-300">
                          {c.gdp?.perCapitaUsd || 'N/A'}
                        </td>
                      ))}
                    </tr>

                    {/* GDP Global Rank */}
                    <tr>
                      <td className="p-3 font-bold text-slate-400 bg-slate-900/40">World GDP Rank</td>
                      {comparedCountries.map((c) => (
                        <td key={`gdp-rank-${c.code}`} className="p-3 font-semibold text-purple-300">
                          {c.gdp?.rank ? `#${c.gdp.rank}` : 'N/A'}
                        </td>
                      ))}
                    </tr>

                  </tbody>
                </table>
              </div>

            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-900/90 flex items-center justify-between text-xs text-slate-400 shrink-0">
          <button
            onClick={onClearAll}
            className="text-slate-400 hover:text-rose-400 font-semibold transition"
          >
            Clear All Comparisons
          </button>

          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl transition"
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
};
