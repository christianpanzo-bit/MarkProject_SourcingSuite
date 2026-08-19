import React, { useState } from 'react';
import { ViewMode } from '../types';
import {
  Globe,
  Briefcase,
  Coins,
  PieChart,
  Clock,
  Languages,
  MapPin,
  Sparkles,
  HelpCircle,
  Info,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  CheckCircle2,
  Building2,
  Users,
  Award,
  GraduationCap,
  Zap,
  Bot
} from 'lucide-react';

interface TabHeaderInfoProps {
  currentView: ViewMode;
}

const TAB_DESCRIPTIONS: Record<ViewMode, { title: string; subtitle: string; icon: React.FC<{ className?: string }>; keyFeatures: string[] }> = {
  explorer: {
    title: 'Country Explorer & Directory',
    subtitle: 'Browse and inspect comprehensive profiles for 250+ countries worldwide.',
    icon: Globe,
    keyFeatures: [
      'Search countries by name, native name, capital, or spoken language',
      'View GDP rankings, population, multilingual scores, currency, dial codes, and travel entry rules',
      'Export filtered country datasets directly to CSV for sourcing analysis',
      'Compare up to 5 countries side-by-side using the interactive comparison tool'
    ]
  },
  jobs: {
    title: 'Jobs, Sourcing Data & Labor Laws per Country',
    subtitle: 'Comprehensive statutory labor compliance, job portal links, and employment statistics.',
    icon: Briefcase,
    keyFeatures: [
      'Analyze national employment, unemployment, part-time, and multi-job holder percentages',
      'Review statutory labor law frameworks, standard work hours, and national labor codes',
      'Inspect remote/telework regulations, part-time protections, and GDPR candidate data rules',
      'Access verified official job portals and talent acquisition boards per country'
    ]
  },
  skill_search: {
    title: 'Skill Search & Sourcing Intelligence per Country',
    subtitle: 'Search skills globally and inspect state-level talent pools for US, Australia, Canada, and UK.',
    icon: Zap,
    keyFeatures: [
      'Search core skills across Software & Cloud, AI/ML, Cybersecurity, Healthcare, Design, and Finance',
      'Examine total talent pool size, demand severity, average salary ranges, and remote availability',
      'Subnational state breakdowns for all 50 US States + DC/PR, 8 Australian States, 13 Canadian Provinces, and 8 UK Regions',
      'Side-by-side state comparison matrix and full CSV dataset export for talent intelligence'
    ]
  },
  robotics: {
    title: 'Robotics Manufacturing, Innovation & Institutional Directory per Country',
    subtitle: 'Track robot adoption density, operational stock, annual installations, and explore universities, public labs, and private manufacturers per country.',
    icon: Bot,
    keyFeatures: [
      'Inspect robot density per 10,000 workers, operational robot stock, and annual installations across 197 UN countries',
      'Explore participating academic universities, government defense labs, and private enterprise manufacturers per nation',
      'Subnational cluster breakdowns for US states (Massachusetts, California, Pennsylvania, Michigan, Texas)',
      'Searchable global institutional directory by research domain (Humanoid, Cobots, Surgery, AMRs, Vision) with CSV exports'
    ]
  },
  fields_of_study: {
    title: 'Field of Studies & Talent Pool Directory',
    subtitle: 'Search disciplines across 197 UN countries with state-level breakdowns for US & Canada.',
    icon: GraduationCap,
    keyFeatures: [
      'Search 12 major higher education fields of study (CS, Engineering, Healthcare, Business, Law...)',
      'View actual graduate counts alongside percentage shares for all 197 countries',
      'Expand state-level breakdowns for all 50 US States + DC & Canadian Provinces',
      'Filter by region, sort by graduate volume, and export custom field data to CSV'
    ]
  },
  demographics: {
    title: 'Demographics: Age Brackets & Gender Preferences',
    subtitle: 'Inspect population counts and percentages by age cohort and gender across 197 UN countries and subnational states.',
    icon: Users,
    keyFeatures: [
      'Analyze 6 age bracket cohorts (0–14, 15–24, 25–34, 35–49, 50–64, 65+) by percentage and actual count',
      'Examine gender distributions (Female, Male, Non-Binary / Unspecified) and sex ratios per territory',
      'State & region specific breakdown for US (50 States, DC, PR), CA (13 Prov/Terr), AU (8 States), and UK (4 Nations)',
      'Filterable dropdown selector, side-by-side location comparator, and full CSV export'
    ]
  },
  minimum_wage: {
    title: 'Global & US Minimum Wage Tracker',
    subtitle: 'Track statutory minimum wage rates across 250+ countries and all 50 US states.',
    icon: Coins,
    keyFeatures: [
      'Compare hourly minimum wage rates converted live into local currency, USD, and EUR',
      'Inspect state, cantonal, and provincial subnational wage floors (e.g. US States, Swiss cantons)',
      'Review effective policy dates, statutory enforcement rules, and annual wage growth trends',
      'Filter by statutory minimum wage availability and regional economic groupings'
    ]
  },
  state_percentages: {
    title: 'State & Provincial Language Percentages',
    subtitle: 'Analyze subnational linguistic demographics across states, cantons, and provinces.',
    icon: PieChart,
    keyFeatures: [
      'Examine regional speaker breakdowns for US States, Swiss Cantons, Canadian Provinces, etc.',
      'Filter by primary language spoken at home vs official administrative languages',
      'Explore visual pie charts and comparative tables for subnational demographic analysis',
      'Locate minority and heritage language communities within multi-ethnic territories'
    ]
  },
  time_converter: {
    title: 'Live Cross-Border Time Zone Converter',
    subtitle: 'Convert time across multiple international cities and schedule global collaboration.',
    icon: Clock,
    keyFeatures: [
      'Add multiple global cities to convert live local times in a synchronized interactive view',
      'Identify overlapping business hours for distributed remote teams across time zones',
      'Plan international meetings and candidate interview schedules with instant time alignment',
      'View UTC/GMT offsets, daylight saving status, and local business hour indicators'
    ]
  },
  language_reverse: {
    title: 'Reverse Language Lookup Engine',
    subtitle: 'Search any language to discover every country and region where it is spoken.',
    icon: Languages,
    keyFeatures: [
      'Search 100+ global languages (e.g., Swahili, French, Quechua) to locate speaker populations',
      'Distinguish official national status from regional, native, or minority spoken usage',
      'View population percentages, writing scripts (Devanagari, Cyrillic, Latin), and dialect notes',
      'Directly open full country profiles for any nation where the language is active'
    ]
  },
  map: {
    title: 'Consolidated World Map & Language Heat Map',
    subtitle: 'Interactive high-definition vector map with global language heat dominance and sub-regions.',
    icon: MapPin,
    keyFeatures: [
      'Explore interactive vector SVG maps with hover inspection and country markers',
      'Visualize global language heat dominance with dynamic color temperature spectrums',
      'Inspect sub-regional cantonal, provincial, and state linguistic breakdowns',
      'Filter map views by global regions (Africa, Americas, Asia, Europe, Oceania)'
    ]
  },
  heatmap: {
    title: 'Consolidated World Map & Language Heat Map',
    subtitle: 'Interactive high-definition vector map with global language heat dominance and sub-regions.',
    icon: MapPin,
    keyFeatures: [
      'Explore interactive vector SVG maps with hover inspection and country markers',
      'Visualize global language heat dominance with dynamic color temperature spectrums',
      'Inspect sub-regional cantonal, provincial, and state linguistic breakdowns',
      'Filter map views by global regions (Africa, Americas, Asia, Europe, Oceania)'
    ]
  },
  ai_assistant: {
    title: 'AI Travel & Language Coach (Gemini 3.6)',
    subtitle: 'Get instant AI-generated travel advice, cultural etiquette, and business greetings.',
    icon: Sparkles,
    keyFeatures: [
      'Generate localized business etiquette guides and cultural communication norms',
      'Learn essential greetings and phonetic phrases for any destination country',
      'Receive custom travel advisories, packing lists, and tipping guidelines',
      'Ask open questions about local customs, negotiating etiquette, and workplace norms'
    ]
  },
  quiz: {
    title: 'Global Sourcing & Geography Trivia Quiz',
    subtitle: 'Test and sharpen your global knowledge across geography, languages, and labor facts.',
    icon: HelpCircle,
    keyFeatures: [
      'Challenge yourself with multiple-choice questions on capitals, languages, and minimum wages',
      'Track your accuracy score and streak across geography and labor intelligence domains',
      'Review detailed explanations for every answer to build expertise in global sourcing',
      'Replay customizable quiz rounds to master global country and labor facts'
    ]
  }
};

export const TabHeaderInfo: React.FC<TabHeaderInfoProps> = ({ currentView }) => {
  const [isSuiteInfoExpanded, setIsSuiteInfoExpanded] = useState(false);
  const currentTab = TAB_DESCRIPTIONS[currentView] || TAB_DESCRIPTIONS.explorer;
  const TabIcon = currentTab.icon;

  return (
    <div className="space-y-4 mb-6">
      
      {/* 1. SOURCING SUITE PLATFORM CAPABILITIES OVERVIEW CARD */}
      <div className="bg-[#4B286D] text-white rounded-2xl border border-[#371B54] p-4 sm:p-5 shadow-sm transition-all">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#371B54] border border-purple-400/30 text-[#66CC00] shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-base sm:text-lg font-black tracking-tight text-white">
                  What Sourcing Suite Can Do
                </h1>
                <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-[#66CC00] text-slate-950">
                  PLATFORM OVERVIEW
                </span>
              </div>
              <p className="text-xs text-purple-200 mt-0.5">
                All-in-one global talent directory, labor law intelligence, minimum wage tracking, time zone planning, and language mapping suite.
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsSuiteInfoExpanded(!isSuiteInfoExpanded)}
            className="inline-flex items-center gap-1.5 bg-[#371B54] hover:bg-purple-900/60 text-white text-xs font-bold px-3.5 py-2 rounded-xl border border-purple-400/30 transition shrink-0 self-start md:self-auto"
          >
            <Info className="w-3.5 h-3.5 text-[#66CC00]" />
            <span>{isSuiteInfoExpanded ? 'Hide Platform Guide' : 'Learn What Sourcing Suite Can Do'}</span>
            {isSuiteInfoExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* Collapsible Platform Overview Content */}
        {isSuiteInfoExpanded && (
          <div className="mt-4 pt-4 border-t border-purple-500/30 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
            <div className="bg-[#371B54]/70 p-3.5 rounded-xl border border-purple-400/20 space-y-1.5">
              <div className="font-bold text-[#66CC00] flex items-center gap-1.5">
                <Briefcase className="w-4 h-4" />
                <span>Jobs & Statutory Labor Laws</span>
              </div>
              <p className="text-purple-100 text-[11px] leading-relaxed">
                Access official labor codes, standard work hours, remote/telework regulations, part-time worker protections, GDPR candidate data compliance, and national job boards for 250+ countries.
              </p>
            </div>

            <div className="bg-[#371B54]/70 p-3.5 rounded-xl border border-purple-400/20 space-y-1.5">
              <div className="font-bold text-[#66CC00] flex items-center gap-1.5">
                <Coins className="w-4 h-4" />
                <span>Global & US Minimum Wages</span>
              </div>
              <p className="text-purple-100 text-[11px] leading-relaxed">
                Compare hourly statutory minimum wage rates globally and across all 50 US states converted live to local currencies, USD, and EUR, with effective enforcement dates and cantonal/state breakdowns.
              </p>
            </div>

            <div className="bg-[#371B54]/70 p-3.5 rounded-xl border border-purple-400/20 space-y-1.5">
              <div className="font-bold text-[#66CC00] flex items-center gap-1.5">
                <MapPin className="w-4 h-4" />
                <span>Linguistic Heatmaps & Maps</span>
              </div>
              <p className="text-purple-100 text-[11px] leading-relaxed">
                Visualize global geography with interactive SVG maps, global language heat dominance spectrums, and sub-regional state/cantonal language distribution percentage charts.
              </p>
            </div>

            <div className="bg-[#371B54]/70 p-3.5 rounded-xl border border-purple-400/20 space-y-1.5">
              <div className="font-bold text-[#66CC00] flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>Cross-Border Time Zone Alignment</span>
              </div>
              <p className="text-purple-100 text-[11px] leading-relaxed">
                Convert live local times across multiple global cities simultaneously, identify team working overlap hours, and schedule global remote team meetings seamlessly.
              </p>
            </div>

            <div className="bg-[#371B54]/70 p-3.5 rounded-xl border border-purple-400/20 space-y-1.5">
              <div className="font-bold text-[#66CC00] flex items-center gap-1.5">
                <Languages className="w-4 h-4" />
                <span>Country & Reverse Language Search</span>
              </div>
              <p className="text-purple-100 text-[11px] leading-relaxed">
                Search 250+ country profiles or perform reverse language lookups for 100+ languages to locate native and official speaker populations worldwide.
              </p>
            </div>

            <div className="bg-[#371B54]/70 p-3.5 rounded-xl border border-purple-400/20 space-y-1.5">
              <div className="font-bold text-[#66CC00] flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" />
                <span>AI Cultural Coach & Trivia</span>
              </div>
              <p className="text-purple-100 text-[11px] leading-relaxed">
                Utilize Gemini 3.6 AI for localized business etiquette, greetings, and travel guidelines, and test your knowledge with interactive sourcing trivia.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 2. DEDICATED "WHAT YOU CAN DO IN THIS TAB" DESCRIPTION BANNER */}
      <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#E3DDE8] shadow-xs space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-3">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-[#F4EFF9] text-[#4B286D] border border-purple-200">
              <TabIcon className="w-5 h-5 text-[#2B8000]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-[#F4EFF9] text-[#4B286D] border border-purple-200 uppercase">
                  Current Tab Guide
                </span>
                <h2 className="text-base font-extrabold text-slate-900">{currentTab.title}</h2>
              </div>
              <p className="text-xs text-slate-600 font-medium mt-0.5">{currentTab.subtitle}</p>
            </div>
          </div>
        </div>

        {/* Tab Capability Bullet Points */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
          {currentTab.keyFeatures.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2 bg-[#F8F6FA] p-2.5 rounded-xl border border-[#E3DDE8]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#2B8000] shrink-0 mt-0.5" />
              <span className="font-medium text-slate-800">{feature}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
