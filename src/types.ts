export type Region = 'Africa' | 'Americas' | 'Asia' | 'Europe' | 'Oceania';

export type LanguageType = 
  | 'official' 
  | 'co-official' 
  | 'national'
  | 'regional' 
  | 'recognized' 
  | 'indigenous' 
  | 'minority' 
  | 'working'
  | 'widely_spoken';

export interface LanguageInfo {
  id: string;
  name: string;
  nativeName: string;
  script: string;
  family: string;
  type: LanguageType;
  percentage?: number; // e.g. 65 for 65%
  speakerCount?: string; // e.g. "45 Million"
  notes?: string;
}

export interface Phrase {
  english: string;
  native: string;
  phonetic: string;
  category?: 'greeting' | 'courtesy' | 'essentials' | 'dining' | 'numbers';
}

export interface GdpInfo {
  nominalUsd: string;        // e.g. "$28.78 Trillion"
  perCapitaUsd: string;      // e.g. "$85,370"
  growthRate: string;        // e.g. "+2.8%"
  rank: number;              // e.g. 1
  topSectors: string[];      // e.g. ["Technology & Services", "Healthcare", "Finance"]
}

export interface Country {
  code: string; // ISO 2 letter code, e.g. "CH"
  name: string;
  nativeName: string;
  flag: string; // Emoji
  region: Region;
  subregion: string;
  capital: string;
  population: number;
  multilingualScore: number; // 1-10 rating of linguistic diversity
  languages: LanguageInfo[];
  phrases: Phrase[];
  facts: string[];
  description: string;
  coordinates: { x: number; y: number }; // Relative coordinates for SVG map 0-100
  gdp?: GdpInfo;
}

export interface AiCountryInsight {
  summary: string;
  historicalContext: string;
  travelTips: string[];
  codeSwitchingAndEtiquette: string;
  funLinguisticFacts: string[];
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface SubnationalWageRate {
  stateOrRegionName: string; // e.g. "California", "Geneva", "Shanghai", "Tokyo", "Ontario"
  hourlyLocal: number;
  hourlyUsd: number;
  hourlyEur: number;
  notes?: string;
}

export interface MinimumWageEntry {
  countryCode: string;
  countryName: string;
  flag: string;
  region: Region;
  subregion?: string;
  currencyCode: string;       // e.g. "AUD"
  currencyName: string;       // e.g. "Australian Dollar"
  currencySymbol: string;     // e.g. "A$"
  hourlyLocal: number;        // Rate in local currency per hour (national baseline)
  hourlyUsd: number;          // Rate in US Dollars per hour
  hourlyEur: number;          // Rate in Euros per hour
  effectiveYear: string;      // e.g. "2024" or "2025"
  hasStatutoryMinimum: boolean; // false for Denmark/Sweden or countries without statutory floor
  subnationalRates?: SubnationalWageRate[]; // Regional/State/Provincial variations
  notes: string;              // Notes on state/national level variations, collective agreements, etc.
}

export interface JobSite {
  name: string;
  url: string;
  category: 'General' | 'Tech & IT' | 'Executive & Professional' | 'Government' | 'Remote & Freelance' | 'Niche & Startup' | 'Niche & Industry' | string;
  description: string;
  targetAudience?: string;
}

export interface CommonJob {
  title: string;
  category: string;
  percentage: number;
  averageSalaryUsd?: string;
}

export interface FieldOfStudy {
  field: string;
  percentage: number;
}

export interface EducationalAttainment {
  level: string; // e.g. "Primary / Secondary", "Vocational / Associate", "Bachelor's Degree", "Master's / Postgraduate", "Doctorate (PhD)"
  percentage: number;
}

export interface StateLiteracyData {
  stateOrRegionName: string;
  literacyRate: number; // percentage, e.g. 98.5
  youthLiteracyRate?: number;
  notes?: string;
}

export interface LiteracyInfo {
  overallAdultLiteracy: number; // percentage e.g. 99.0
  youthLiteracy: number;        // ages 15-24, e.g. 99.5
  femaleLiteracy: number;       // percentage e.g. 98.6
  maleLiteracy: number;         // percentage e.g. 99.4
  digitalLiteracyIndex?: number;// e.g. 91%
  statesOrRegions?: StateLiteracyData[];
  literacyNotes?: string;
}

export interface OutreachTimings {
  bestCallingHours: string;     // e.g. "10:00 AM - 11:30 AM & 2:00 PM - 4:00 PM local time"
  bestEmailingHours: string;    // e.g. "8:00 AM - 9:30 AM local time (Tuesday - Thursday)"
  bestMessagingHours: string;   // e.g. "9:30 AM - 11:00 AM & 3:00 PM - 5:00 PM local time"
  preferredChannels: string[];  // e.g. ["Email", "LinkedIn InMail", "WhatsApp"]
  etiquetteNotes: string;       // Etiquette guidance, cultural norms, and lunch hour rules
}

export interface LaborLawSubnational {
  stateOrRegionName: string;
  laborLawSummary: string;
  lawLink?: string;
  partTimeOrRemoteRules?: string;
  minimumRestOrOvertime?: string;
}

export interface LaborLawInfo {
  nationalLaborCodeName: string;
  nationalLaborCodeUrl?: string;
  standardWorkWeekHours: string;     // e.g. "40 Hours / Week"
  partTimeRegulations: string;       // Statutory rules & rights for part-time employees
  remoteWorkRegulations: string;     // Right to disconnect, telework agreements, equipment stipends
  dataProtectionLaw: {
    name: string;                    // e.g. "GDPR", "CCPA/CPRA & State Privacy Laws", "LGPD"
    summary: string;                 // Candidate data retention, privacy notice, consent rules
    officialUrl?: string;
  };
  mostCommonWorkSetups: {
    setupType: string;               // e.g. "Hybrid (3 Days Office, 2 Days Remote)"
    sharePercentage?: string;        // e.g. "62% Hybrid, 26% On-Site, 12% Fully Remote"
    commonPractices: string;
  };
  subnationalLaborLaws?: LaborLawSubnational[];
  keyLaborHighlights: string[];
}

export interface CityInfo {
  cityName: string;
  stateOrRegion: string;
  population: number;
  populationFormatted: string; // e.g. "8.8 Million" or "450,000"
  cityType: 'Capital' | 'Financial Hub' | 'Tech Hub' | 'BPO / Service Hub' | 'Industrial & Port' | 'Regional Center' | 'Major City';
  isCapital: boolean;
  isMajorSourcingHub: boolean;
  primaryIndustryOrSourcingFocus: string;
  primaryLanguagesSpoken: string[];
}

export interface CountryCitiesData {
  countryCode: string;
  countryName: string;
  mostPopulatedCities: CityInfo[];
  allCities: CityInfo[];
}

export interface CountryJobsData {
  countryCode: string;
  countryName: string;
  flag: string;
  employmentRate: number; // e.g., 96.2 for 96.2%
  unemploymentRate: number; // e.g. 3.8%
  laborForceSize: string; // e.g., "167.5 Million"
  partTimeJobs: {
    percentage: number; // e.g., 17.5%
    estimatedPeople: string; // e.g. "29.3 Million"
    notes?: string;
  };
  multipleJobsHolders: {
    percentage: number; // e.g., 5.3%
    estimatedPeople: string; // e.g. "8.8 Million"
    notes?: string;
  };
  mostCommonJobs: CommonJob[];
  fieldOfStudies: FieldOfStudy[];
  educationalAttainment: EducationalAttainment[];
  jobSites: JobSite[];
  literacyData?: LiteracyInfo;
  outreachTimings?: OutreachTimings;
  laborLawInfo?: LaborLawInfo;
  citiesData?: CountryCitiesData;
  sourcingNotes?: string;
}

export type ViewMode = 
  | 'explorer' 
  | 'jobs'
  | 'fields_of_study'
  | 'demographics'
  | 'minimum_wage' 
  | 'state_percentages'
  | 'time_converter'
  | 'language_reverse' 
  | 'map' 
  | 'heatmap'
  | 'ai_assistant' 
  | 'quiz';
