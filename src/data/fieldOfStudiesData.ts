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

import fieldOfStudiesRaw from './fieldOfStudiesData.json';

export const FIELD_OF_STUDIES_DATASET: FieldOfStudyTopic[] = fieldOfStudiesRaw as FieldOfStudyTopic[];
