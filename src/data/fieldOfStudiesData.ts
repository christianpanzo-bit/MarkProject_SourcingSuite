export interface GenderBreakdown {
  gender: 'Female' | 'Male' | 'Non-Binary / Unspecified';
  percentage: number;
  count: number;
  countFormatted: string;
}

export interface AgeBracketBreakdown {
  bracket: '18–24' | '25–34' | '35–49' | '50+';
  label: string;
  percentage: number;
  count: number;
  countFormatted: string;
}

export interface StateFieldBreakdown {
  stateName: string;
  tertiaryEducatedPopulation: number;
  tertiaryEducatedFormatted: string;
  percentageInField: number;
  actualGraduatesCount: number;
  actualGraduatesFormatted: string;
  annualNewGraduates: number;
  annualNewGraduatesFormatted: string;
  topUniversities: string[];
  genderBreakdown: GenderBreakdown[];
  ageBracketBreakdown: AgeBracketBreakdown[];
}

export interface ProvinceFieldBreakdown {
  provinceName: string;
  tertiaryEducatedPopulation: number;
  tertiaryEducatedFormatted: string;
  percentageInField: number;
  actualGraduatesCount: number;
  actualGraduatesFormatted: string;
  annualNewGraduates: number;
  annualNewGraduatesFormatted: string;
  topUniversities: string[];
  genderBreakdown: GenderBreakdown[];
  ageBracketBreakdown: AgeBracketBreakdown[];
}

export interface CountryFieldData {
  countryCode: string;
  countryName: string;
  flag: string;
  region: 'Africa' | 'Americas' | 'Asia' | 'Europe' | 'Oceania';
  tertiaryEducatedPopulation: number;
  tertiaryEducatedFormatted: string;
  percentageInField: number;
  actualGraduatesCount: number;
  actualGraduatesFormatted: string;
  annualNewGraduates: number;
  annualNewGraduatesFormatted: string;
  topUniversities: string[];
  genderBreakdown: GenderBreakdown[];
  ageBracketBreakdown: AgeBracketBreakdown[];
  usStateBreakdown?: StateFieldBreakdown[];
  canadaProvinceBreakdown?: ProvinceFieldBreakdown[];
}

export interface FieldOfStudyTopic {
  fieldId: string;
  fieldName: string;
  category: string;
  description: string;
  iconName: string;
  globalAvgPercentage: number;
  countryData: CountryFieldData[];
}

export function formatPop(val: number | undefined | null): string {
  if (val == null || isNaN(val)) return '0';
  if (val >= 1_000_000_000) return `${(val / 1_000_000_000).toFixed(2)} Billion`;
  if (val >= 1_000_000) return `${(val / 1_000_000).toFixed(2)} Million`;
  if (val >= 1_000) return `${(val / 1_000).toFixed(1)} Thousand`;
  return val.toLocaleString();
}

function hydrateGender(gb: any): GenderBreakdown {
  return {
    ...gb,
    countFormatted: formatPop(gb.count),
  };
}

function hydrateAge(ag: any): AgeBracketBreakdown {
  return {
    ...ag,
    countFormatted: formatPop(ag.count),
  };
}

function hydrateCountryField(c: any): CountryFieldData {
  return {
    ...c,
    tertiaryEducatedFormatted: formatPop(c.tertiaryEducatedPopulation),
    actualGraduatesFormatted: formatPop(c.actualGraduatesCount),
    annualNewGraduatesFormatted: formatPop(c.annualNewGraduates),
    genderBreakdown: (c.genderBreakdown || []).map(hydrateGender),
    ageBracketBreakdown: (c.ageBracketBreakdown || []).map(hydrateAge),
    usStateBreakdown: c.usStateBreakdown?.map((s: any) => ({
      ...s,
      tertiaryEducatedFormatted: formatPop(s.tertiaryEducatedPopulation),
      actualGraduatesFormatted: formatPop(s.actualGraduatesCount),
      annualNewGraduatesFormatted: formatPop(s.annualNewGraduates),
      genderBreakdown: (s.genderBreakdown || []).map(hydrateGender),
      ageBracketBreakdown: (s.ageBracketBreakdown || []).map(hydrateAge),
    })),
    canadaProvinceBreakdown: c.canadaProvinceBreakdown?.map((p: any) => ({
      ...p,
      tertiaryEducatedFormatted: formatPop(p.tertiaryEducatedPopulation),
      actualGraduatesFormatted: formatPop(p.actualGraduatesCount),
      annualNewGraduatesFormatted: formatPop(p.annualNewGraduates),
      genderBreakdown: (p.genderBreakdown || []).map(hydrateGender),
      ageBracketBreakdown: (p.ageBracketBreakdown || []).map(hydrateAge),
    })),
  };
}

function hydrateTopic(topic: any): FieldOfStudyTopic {
  return {
    ...topic,
    countryData: (topic.countryData || []).map(hydrateCountryField),
  };
}

import fieldOfStudiesRaw from './fieldOfStudiesData.json';

export const FIELD_OF_STUDIES_DATASET: FieldOfStudyTopic[] = (fieldOfStudiesRaw as any[]).map(hydrateTopic);
