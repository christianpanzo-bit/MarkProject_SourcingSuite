import React, { useState, useEffect } from 'react';
import { Country, AiCountryInsight } from '../types';
import { speakText } from '../lib/audio';
import { CountryShapeSvg } from './CountryShapeSvg';
import {
  X,
  Volume2,
  Sparkles,
  BookOpen,
  MessageSquare,
  Globe,
  Info,
  Loader2,
  CheckCircle2,
  Send,
  Layers,
  Award,
  TrendingUp,
  Coins,
  Building2,
  BarChart2
} from 'lucide-react';

interface CountryDetailModalProps {
  country: Country | null;
  onClose: () => void;
}

export const CountryDetailModal: React.FC<CountryDetailModalProps> = ({
  country,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'languages' | 'phrases' | 'ai_insights' | 'facts' | 'gdp'>('languages');
  const [playingPhraseIndex, setPlayingPhraseIndex] = useState<number | null>(null);
  
  // Custom situation phrase generator state
  const [customSituation, setCustomSituation] = useState('');
  const [customPhrases, setCustomPhrases] = useState<any[]>([]);
  const [loadingCustomPhrases, setLoadingCustomPhrases] = useState(false);
  
  // AI Country Insights state
  const [aiInsight, setAiInsight] = useState<AiCountryInsight | null>(null);
  const [loadingAiInsight, setLoadingAiInsight] = useState(false);
  const [aiInsightError, setAiInsightError] = useState<string | null>(null);

  useEffect(() => {
    // Reset state when country changes
    setActiveTab('languages');
    setCustomPhrases([]);
    setCustomSituation('');
    setAiInsight(null);
    setAiInsightError(null);
  }, [country?.code]);

  if (!country) return null;

  // Handle playing phrase audio
  const handlePlayAudio = (text: string, index: number, langCode?: string) => {
    setPlayingPhraseIndex(index);
    speakText({
      text,
      languageCode: langCode || 'en',
      onStart: () => setPlayingPhraseIndex(index),
      onEnd: () => setPlayingPhraseIndex(null),
      onError: () => setPlayingPhraseIndex(null),
    });
  };

  // Fetch AI Insights for country
  const fetchAiInsights = async () => {
    if (aiInsight || loadingAiInsight) return;
    setLoadingAiInsight(true);
    setAiInsightError(null);

    try {
      const res = await fetch('/api/gemini/country-insights', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          countryName: country.name,
          languages: country.languages.map((l) => l.name),
        }),
      });

      if (!res.ok) throw new Error('Failed to fetch AI insights');
      const data = await res.json();
      setAiInsight(data);
    } catch (err: any) {
      console.error(err);
      setAiInsightError('Could not load AI insights. Please check API key configuration.');
    } finally {
      setLoadingAiInsight(false);
    }
  };

  // Generate custom situation phrases
  const handleGenerateCustomPhrases = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!customSituation.trim()) return;

    setLoadingCustomPhrases(true);
    try {
      const primaryLang = country.languages[0]?.name || 'English';
      const res = await fetch('/api/gemini/phrases', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          country: country.name,
          language: primaryLang,
          situation: customSituation,
        }),
      });

      if (!res.ok) throw new Error('Failed to generate phrases');
      const data = await res.json();
      setCustomPhrases(data.phrases || []);
    } catch (err: any) {
      console.error(err);
    } finally {
      setLoadingCustomPhrases(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-sm overflow-y-auto">
      <div 
        className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-auto flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200"
        id={`modal-${country.code}`}
      >
        {/* Modal Top Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-800 p-2 rounded-full transition"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <CountryShapeSvg
                countryCode={country.code}
                countryName={country.name}
                className="w-14 h-14 shrink-0"
                fillColor="#818cf8"
              />
              <span className="text-5xl filter drop-shadow select-none">{country.flag}</span>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-2xl font-bold text-white tracking-tight">
                    {country.name}
                  </h2>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-indigo-500/30 text-indigo-300 border border-indigo-400/30">
                    {country.region}
                  </span>
                </div>
                <p className="text-sm text-slate-300 mt-0.5 font-medium">
                  {country.nativeName} • Capital: <span className="text-white">{country.capital}</span>
                </p>
              </div>
            </div>

            <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-3 flex items-center gap-4">
              <div>
                <div className="text-[10px] text-slate-400 font-semibold uppercase">Multilingual Score</div>
                <div className="text-lg font-extrabold text-amber-400 flex items-center gap-1">
                  <Sparkles className="w-4 h-4 fill-amber-400 text-amber-400" />
                  {country.multilingualScore.toFixed(1)} / 10
                </div>
              </div>
              <div className="border-l border-slate-700 pl-4">
                <div className="text-[10px] text-slate-400 font-semibold uppercase">Languages</div>
                <div className="text-lg font-extrabold text-indigo-300">
                  {country.languages.length} Listed
                </div>
              </div>
              {country.gdp && (
                <div className="border-l border-slate-700 pl-4">
                  <div className="text-[10px] text-slate-400 font-semibold uppercase">GDP (Nominal)</div>
                  <div className="text-lg font-extrabold text-emerald-400 flex items-center gap-1">
                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                    {country.gdp.nominalUsd}
                  </div>
                </div>
              )}
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 mt-4 leading-relaxed max-w-3xl">
            {country.description}
          </p>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-2 mt-6 pt-2 border-t border-slate-800 overflow-x-auto no-scrollbar">
            <button
              onClick={() => setActiveTab('languages')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition ${
                activeTab === 'languages'
                  ? 'bg-indigo-600 text-white'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              Language Breakdown ({country.languages.length})
            </button>

            {country.gdp && (
              <button
                onClick={() => setActiveTab('gdp')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition ${
                  activeTab === 'gdp'
                    ? 'bg-purple-600 text-white'
                    : 'text-purple-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <TrendingUp className="w-4 h-4 text-[#66CC00]" />
                GDP & Economic Data
              </button>
            )}

            <button
              onClick={() => setActiveTab('phrases')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition ${
                activeTab === 'phrases'
                  ? 'bg-indigo-600 text-white'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <MessageSquare className="w-4 h-4" />
              Phrasebook & Audio
            </button>

            <button
              onClick={() => {
                setActiveTab('ai_insights');
                fetchAiInsights();
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition ${
                activeTab === 'ai_insights'
                  ? 'bg-emerald-600 text-white'
                  : 'text-emerald-400 hover:text-emerald-300 hover:bg-slate-800/60'
              }`}
            >
              <Sparkles className="w-4 h-4 text-emerald-300" />
              AI Travel & Etiquette Insights
            </button>

            <button
              onClick={() => setActiveTab('facts')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition ${
                activeTab === 'facts'
                  ? 'bg-indigo-600 text-white'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Info className="w-4 h-4" />
              Linguistic Facts
            </button>
          </div>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 overflow-y-auto flex-1 bg-slate-50">
          
          {/* TAB: GDP & ECONOMIC PERFORMANCE */}
          {activeTab === 'gdp' && country.gdp && (
            <div className="space-y-6 animate-fadeIn">
              <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-xs">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-[#F4EFF9] border border-purple-200 rounded-lg text-[#4B286D]">
                      <Coins className="w-5 h-5 text-[#2B8000]" />
                    </div>
                    <div>
                      <h3 className="text-base font-extrabold text-slate-900">GDP & Economic Intelligence</h3>
                      <p className="text-xs text-slate-500">Official macroeconomic metrics based on 2026 standards</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                    World Rank #{country.gdp.rank}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-[#F8F6FA] p-4 rounded-xl border border-[#E3DDE8]">
                    <div className="text-xs text-slate-500 font-semibold uppercase">Nominal GDP</div>
                    <div className="text-xl font-black text-[#4B286D] mt-1">{country.gdp.nominalUsd}</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">Total annual economic output</div>
                  </div>

                  <div className="bg-[#F8F6FA] p-4 rounded-xl border border-[#E3DDE8]">
                    <div className="text-xs text-slate-500 font-semibold uppercase">GDP Per Capita</div>
                    <div className="text-xl font-black text-[#2B8000] mt-1">{country.gdp.perCapitaUsd}</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">Average output per resident</div>
                  </div>

                  <div className="bg-[#F8F6FA] p-4 rounded-xl border border-[#E3DDE8]">
                    <div className="text-xs text-slate-500 font-semibold uppercase">Real Growth Rate</div>
                    <div className="text-xl font-black text-indigo-700 mt-1">{country.gdp.growthRate}</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">Annualized real GDP trend</div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-xs space-y-3">
                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#4B286D]" />
                  <span>Key Economic Sectors & Drivers</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {country.gdp.topSectors.map((sector, idx) => (
                    <div key={idx} className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-800">
                      <span className="w-2 h-2 rounded-full bg-[#2B8000]" />
                      <span>{sector}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          
          {/* TAB 1: LANGUAGES BREAKDOWN */}
          {activeTab === 'languages' && (
            <div className="space-y-4">
              <h3 className="text-base font-bold text-slate-900 flex items-center justify-between">
                <span>Official, Recognized & Minority Languages</span>
                <span className="text-xs font-normal text-slate-500">
                  Sorted by status and population speaker share
                </span>
              </h3>

              <div className="grid grid-cols-1 gap-3">
                {country.languages.map((lang, idx) => (
                  <div
                    key={`${country.code}-detail-lang-${lang.id}-${idx}`}
                    className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-indigo-300 transition"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2.5">
                        <span className="font-bold text-slate-900 text-base">
                          {lang.name}
                        </span>
                        <span className="text-xs text-slate-500 font-medium">
                          ({lang.nativeName})
                        </span>

                        <span
                          className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                            lang.type === 'official'
                              ? 'bg-emerald-50 text-emerald-700 border-emerald-300'
                              : lang.type === 'co-official'
                              ? 'bg-indigo-50 text-indigo-700 border-indigo-300'
                              : lang.type === 'regional'
                              ? 'bg-sky-50 text-sky-700 border-sky-300'
                              : 'bg-slate-100 text-slate-700 border-slate-300'
                          }`}
                        >
                          {lang.type.replace('_', ' ')}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500 mt-2">
                        <div>
                          <strong className="text-slate-700">Script:</strong> {lang.script}
                        </div>
                        <div>
                          <strong className="text-slate-700">Family:</strong> {lang.family}
                        </div>
                        {lang.speakerCount && (
                          <div>
                            <strong className="text-slate-700">Speakers:</strong> {lang.speakerCount}
                          </div>
                        )}
                      </div>

                      {lang.notes && (
                        <p className="text-xs text-slate-600 mt-2 bg-slate-50 p-2 rounded-lg border border-slate-100">
                          {lang.notes}
                        </p>
                      )}
                    </div>

                    {/* Percentage Share visual bar */}
                    {lang.percentage !== undefined && (
                      <div className="sm:w-36 flex flex-col items-end">
                        <div className="text-sm font-extrabold text-indigo-600">
                          {lang.percentage}% <span className="text-[10px] font-normal text-slate-400">pop</span>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-2 mt-1 overflow-hidden">
                          <div
                            className="bg-gradient-to-r from-indigo-500 to-emerald-400 h-2 rounded-full"
                            style={{ width: `${Math.min(100, lang.percentage)}%` }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: PHRASEBOOK & PRONUNCIATION */}
          {activeTab === 'phrases' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-1">
                  Key Essential Survival Phrases
                </h3>
                <p className="text-xs text-slate-500">
                  Click the audio icon to listen to native pronunciation with Web Speech / Gemini TTS
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                  {country.phrases.map((phrase, idx) => (
                    <div
                      key={idx}
                      className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm flex items-start justify-between gap-3 hover:border-indigo-300 transition"
                    >
                      <div>
                        <div className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">
                          {phrase.english}
                        </div>
                        <div className="text-lg font-bold text-slate-900 mt-0.5">
                          {phrase.native}
                        </div>
                        <div className="text-xs text-slate-500 italic mt-0.5 font-mono">
                          "{phrase.phonetic}"
                        </div>
                      </div>

                      <button
                        onClick={() => handlePlayAudio(phrase.native, idx, country.languages[0]?.id)}
                        disabled={playingPhraseIndex === idx}
                        className="p-2.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-600 transition flex items-center justify-center shrink-0 disabled:opacity-50"
                        title="Listen to Audio"
                      >
                        {playingPhraseIndex === idx ? (
                          <Loader2 className="w-4 h-4 animate-spin text-indigo-600" />
                        ) : (
                          <Volume2 className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Custom Gemini Phrase Generator */}
              <div className="bg-gradient-to-br from-indigo-50 to-slate-100 p-5 rounded-2xl border border-indigo-200/80">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-5 h-5 text-indigo-600" />
                  <h4 className="font-bold text-slate-900 text-sm">
                    Generate Custom Phrases for Specific Situations
                  </h4>
                </div>
                <p className="text-xs text-slate-600 mb-3">
                  Need phrases for taxi, ordering food, emergency, or asking directions in {country.name}?
                </p>

                <form onSubmit={handleGenerateCustomPhrases} className="flex gap-2">
                  <input
                    type="text"
                    value={customSituation}
                    onChange={(e) => setCustomSituation(e.target.value)}
                    placeholder="e.g., Ordering coffee, haggling at market, train station..."
                    className="flex-1 bg-white border border-slate-300 text-xs sm:text-sm rounded-xl px-3.5 py-2 focus:outline-none focus:border-indigo-600"
                  />
                  <button
                    type="submit"
                    disabled={loadingCustomPhrases || !customSituation.trim()}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs rounded-xl px-4 py-2 transition flex items-center gap-1.5 disabled:opacity-50"
                  >
                    {loadingCustomPhrases ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <>
                        <span>Generate</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </form>

                {customPhrases.length > 0 && (
                  <div className="mt-4 space-y-2">
                    <h5 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Generated Phrases for "{customSituation}"
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {customPhrases.map((p, i) => (
                        <div key={i} className="bg-white p-3 rounded-xl border border-slate-200 text-xs">
                          <div className="font-semibold text-slate-900">{p.english}</div>
                          <div className="text-sm font-bold text-indigo-600 mt-0.5">{p.native}</div>
                          <div className="text-slate-500 italic mt-0.5">{p.phonetic}</div>
                          {p.context && <div className="text-[10px] text-slate-400 mt-1">{p.context}</div>}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 3: AI TRAVEL & ETSIQUETTE INSIGHTS */}
          {activeTab === 'ai_insights' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-emerald-500" />
                  Gemini AI Linguistic & Etiquette Guide
                </h3>

                <button
                  onClick={fetchAiInsights}
                  disabled={loadingAiInsight}
                  className="text-xs text-indigo-600 font-semibold hover:underline flex items-center gap-1"
                >
                  {loadingAiInsight && <Loader2 className="w-3 h-3 animate-spin" />}
                  Refresh AI Analysis
                </button>
              </div>

              {loadingAiInsight && (
                <div className="p-8 text-center bg-white rounded-2xl border border-slate-200 space-y-3">
                  <Loader2 className="w-8 h-8 text-emerald-500 animate-spin mx-auto" />
                  <p className="text-sm text-slate-600 font-medium">
                    Analyzing linguistic nuances, code-switching norms, and travel tips for {country.name}...
                  </p>
                </div>
              )}

              {aiInsightError && (
                <div className="p-4 bg-amber-50 border border-amber-200 text-amber-800 rounded-xl text-xs">
                  {aiInsightError}
                </div>
              )}

              {aiInsight && !loadingAiInsight && (
                <div className="space-y-4">
                  {/* Summary */}
                  <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm">
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                      Linguistic Overview
                    </h4>
                    <p className="text-sm text-slate-800 leading-relaxed font-medium">
                      {aiInsight.summary}
                    </p>
                  </div>

                  {/* Historical context */}
                  {aiInsight.historicalContext && (
                    <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm">
                      <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                        Historical Context
                      </h4>
                      <p className="text-sm text-slate-700 leading-relaxed">
                        {aiInsight.historicalContext}
                      </p>
                    </div>
                  )}

                  {/* Travel Tips */}
                  {aiInsight.travelTips && aiInsight.travelTips.length > 0 && (
                    <div className="bg-emerald-50/60 p-4 rounded-xl border border-emerald-200/80">
                      <h4 className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        Polite Travel Communication Tips
                      </h4>
                      <ul className="space-y-1.5">
                        {aiInsight.travelTips.map((tip, i) => (
                          <li key={i} className="text-xs text-emerald-950 flex items-start gap-2">
                            <span className="text-emerald-500 font-bold">•</span>
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Code switching and etiquette */}
                  {aiInsight.codeSwitchingAndEtiquette && (
                    <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm">
                      <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                        Code-Switching & Social Etiquette
                      </h4>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        {aiInsight.codeSwitchingAndEtiquette}
                      </p>
                    </div>
                  )}

                  {/* Fun facts */}
                  {aiInsight.funLinguisticFacts && aiInsight.funLinguisticFacts.length > 0 && (
                    <div className="bg-indigo-50/50 p-4 rounded-xl border border-indigo-100">
                      <h4 className="text-xs font-bold text-indigo-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <Award className="w-4 h-4 text-indigo-600" />
                        Did You Know?
                      </h4>
                      <ul className="space-y-1">
                        {aiInsight.funLinguisticFacts.map((fact, i) => (
                          <li key={i} className="text-xs text-indigo-950 flex items-start gap-2">
                            <span className="text-indigo-500">•</span>
                            <span>{fact}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* TAB 4: LINGUISTIC FACTS & CURATED TRIVIA */}
          {activeTab === 'facts' && (
            <div className="space-y-4">
              <h3 className="text-base font-bold text-slate-900">
                Curated Cultural & Policy Facts for {country.name}
              </h3>

              <div className="grid grid-cols-1 gap-3">
                {country.facts.map((fact, i) => (
                  <div
                    key={i}
                    className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm flex items-start gap-3"
                  >
                    <div className="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                      {i + 1}
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed font-medium">
                      {fact}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="bg-slate-100 px-6 py-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <div>
            ISO Code: <strong className="text-slate-700">{country.code}</strong> • Region: <strong className="text-slate-700">{country.subregion}</strong>
          </div>
          <button
            onClick={onClose}
            className="bg-slate-800 hover:bg-slate-900 text-white font-semibold px-4 py-1.5 rounded-lg transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
