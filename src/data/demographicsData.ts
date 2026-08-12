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

export function formatPop(val: number | undefined | null): string {
  if (val == null || isNaN(val)) return '0';
  if (val >= 1_000_000_000) return `${(val / 1_000_000_000).toFixed(2)} Billion`;
  if (val >= 1_000_000) return `${(val / 1_000_000).toFixed(2)} Million`;
  if (val >= 1_000) return `${(val / 1_000).toFixed(1)} Thousand`;
  return val.toLocaleString();
}

function hydrateEmploymentStats(stats: any): EmploymentStats {
  if (!stats) return {} as any;
  return {
    ...stats,
    populationFormatted: formatPop(stats.population),
    workingCountFormatted: formatPop(stats.workingCount),
    fullTimeFormatted: formatPop(stats.fullTimeCount),
    partTimeFormatted: formatPop(stats.partTimeCount),
    multipleJobsFormatted: formatPop(stats.multipleJobsCount),
  };
}

function hydrateLocation(loc: any): LocationDemographics {
  const genderBreakdown = (loc.genderBreakdown || []).map((g: any) => ({
    ...g,
    countFormatted: formatPop(g.count),
  }));

  const ageBracketBreakdown = (loc.ageBracketBreakdown || []).map((ag: any) => ({
    ...ag,
    countFormatted: formatPop(ag.count),
    employment: {
      ...hydrateEmploymentStats(ag.employment),
      byGender: {
        Female: hydrateEmploymentStats(ag.employment?.byGender?.Female),
        Male: hydrateEmploymentStats(ag.employment?.byGender?.Male),
        'Non-Binary / Unspecified': hydrateEmploymentStats(ag.employment?.byGender?.['Non-Binary / Unspecified']),
      },
    },
  }));

  const overallEmployment = {
    ...loc.overallEmployment,
    totalWorkingInhabitantsFormatted: formatPop(loc.overallEmployment?.totalWorkingInhabitants),
    totalFullTimeFormatted: formatPop(loc.overallEmployment?.totalFullTime),
    totalPartTimeFormatted: formatPop(loc.overallEmployment?.totalPartTime),
    totalMultipleJobsFormatted: formatPop(loc.overallEmployment?.totalMultipleJobs),
  };

  return {
    ...loc,
    totalPopulationFormatted: formatPop(loc.totalPopulation),
    genderBreakdown,
    ageBracketBreakdown,
    overallEmployment,
  };
}

import demographicsDataRaw from './demographicsData.json';

export const DEMOGRAPHICS_DATASET: LocationDemographics[] = (demographicsDataRaw as any[]).map(hydrateLocation);
