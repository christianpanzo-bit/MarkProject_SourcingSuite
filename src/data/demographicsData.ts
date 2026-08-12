export interface EmploymentStats {
  population: number;
  populationFormatted: string;
  laborForceParticipationRate: number;
  workingCount: number;
  workingCountFormatted: string;
  workingPercentageOfPop: number;
  fullTimeCount: number;
  fullTimeFormatted: string;
  fullTimePercentage: number;
  partTimeCount: number;
  partTimeFormatted: string;
  partTimePercentage: number;
  multipleJobsCount: number;
  multipleJobsFormatted: string;
  multipleJobsPercentage: number;
}

export interface GenderEmploymentBreakdown {
  Female: EmploymentStats;
  Male: EmploymentStats;
  'Non-Binary / Unspecified': EmploymentStats;
}

export interface BracketEmploymentSummary extends EmploymentStats {
  byGender: GenderEmploymentBreakdown;
}

export interface GenderDemographic {
  gender: 'Female' | 'Male' | 'Non-Binary / Unspecified';
  percentage: number;
  count: number;
  countFormatted: string;
}

export interface AgeBracketDemographic {
  bracket: '0–14' | '15–24' | '25–34' | '35–49' | '50–64' | '65+';
  label: string;
  percentage: number;
  count: number;
  countFormatted: string;
  employment: BracketEmploymentSummary;
}

export interface OverallEmploymentSummary {
  totalWorkingInhabitants: number;
  totalWorkingInhabitantsFormatted: string;
  overallLaborForceParticipationRate: number;
  totalFullTime: number;
  totalFullTimeFormatted: string;
  totalFullTimePercentage: number;
  totalPartTime: number;
  totalPartTimeFormatted: string;
  totalPartTimePercentage: number;
  totalMultipleJobs: number;
  totalMultipleJobsFormatted: string;
  totalMultipleJobsPercentage: number;
}

export interface LocationDemographics {
  id: string;
  name: string;
  countryCode: string;
  parentCountryName: string;
  flag: string;
  region: 'Africa' | 'Americas' | 'Asia' | 'Europe' | 'Oceania';
  subregion: string;
  isSubnational: boolean;
  subnationalType: 'US State' | 'Canadian Province' | 'Australian State' | 'UK Nation' | null;
  totalPopulation: number;
  totalPopulationFormatted: string;
  medianAge: number;
  sexRatio: string;
  malesPer100Females: number;
  genderBreakdown: GenderDemographic[];
  ageBracketBreakdown: AgeBracketDemographic[];
  overallEmployment: OverallEmploymentSummary;
  youthDependencyRatio: number;
  oldAgeDependencyRatio: number;
  totalDependencyRatio: number;
  demographicHighlights: string[];
}

import demographicsDataRaw from './demographicsData.json';

export const DEMOGRAPHICS_DATASET: LocationDemographics[] = demographicsDataRaw as LocationDemographics[];
