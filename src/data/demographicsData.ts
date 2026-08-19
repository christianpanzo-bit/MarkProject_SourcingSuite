import { COUNTRIES_DATA } from './countries';

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

function buildBracketEmployment(pop: number, rate: number, ftRate: number, ptRate: number, mjRate: number): BracketEmploymentSummary {
  const workingCount = Math.round(pop * (rate / 100));
  const ftCount = Math.round(workingCount * (ftRate / 100));
  const ptCount = Math.round(workingCount * (ptRate / 100));
  const mjCount = Math.round(workingCount * (mjRate / 100));

  const femalePop = Math.round(pop * 0.495);
  const malePop = Math.round(pop * 0.495);
  const nbPop = Math.round(pop * 0.01);

  const makeGenderStats = (subPop: number, rateAdj: number): EmploymentStats => {
    const subWork = Math.round(subPop * ((rate * rateAdj) / 100));
    const subFt = Math.round(subWork * (ftRate / 100));
    const subPt = Math.round(subWork * (ptRate / 100));
    const subMj = Math.round(subWork * (mjRate / 100));
    return {
      population: subPop,
      populationFormatted: formatPop(subPop),
      laborForceParticipationRate: Number((rate * rateAdj).toFixed(1)),
      workingCount: subWork,
      workingCountFormatted: formatPop(subWork),
      workingPercentageOfPop: Number((rate * rateAdj).toFixed(1)),
      fullTimeCount: subFt,
      fullTimeFormatted: formatPop(subFt),
      fullTimePercentage: ftRate,
      partTimeCount: subPt,
      partTimeFormatted: formatPop(subPt),
      partTimePercentage: ptRate,
      multipleJobsCount: subMj,
      multipleJobsFormatted: formatPop(subMj),
      multipleJobsPercentage: mjRate,
    };
  };

  return {
    population: pop,
    populationFormatted: formatPop(pop),
    laborForceParticipationRate: rate,
    workingCount,
    workingCountFormatted: formatPop(workingCount),
    workingPercentageOfPop: rate,
    fullTimeCount: ftCount,
    fullTimeFormatted: formatPop(ftCount),
    fullTimePercentage: ftRate,
    partTimeCount: ptCount,
    partTimeFormatted: formatPop(ptCount),
    partTimePercentage: ptRate,
    multipleJobsCount: mjCount,
    multipleJobsFormatted: formatPop(mjCount),
    multipleJobsPercentage: mjRate,
    byGender: {
      Female: makeGenderStats(femalePop, 0.96),
      Male: makeGenderStats(malePop, 1.04),
      'Non-Binary / Unspecified': makeGenderStats(nbPop, 1.0),
    },
  };
}

function buildLocation(
  id: string,
  name: string,
  countryCode: string,
  parentName: string,
  flag: string,
  region: 'Africa' | 'Americas' | 'Asia' | 'Europe' | 'Oceania',
  subregion: string,
  isSubnational: boolean,
  subnationalType: 'US State' | 'Canadian Province' | 'Australian State' | 'UK Nation' | null,
  totalPop: number,
  medianAge: number,
  femalePct: number,
  malePct: number,
  highlights: string[]
): LocationDemographics {
  const femaleCount = Math.round(totalPop * (femalePct / 100));
  const maleCount = Math.round(totalPop * (malePct / 100));
  const nbCount = totalPop - femaleCount - maleCount;
  const nbPct = Number(((nbCount / totalPop) * 100).toFixed(1));

  const malesPer100 = femaleCount > 0 ? Number(((maleCount / femaleCount) * 100).toFixed(1)) : 100;

  // Standard age distributions
  const bracketsConfig: { bracket: AgeBracketDemographic['bracket']; label: string; pct: number; rate: number; ft: number; pt: number; mj: number }[] = [
    { bracket: '0–14', label: 'Children & Adolescents', pct: 16.5, rate: 0.0, ft: 0, pt: 0, mj: 0 },
    { bracket: '15–24', label: 'Youth & Early Career', pct: 13.0, rate: 58.2, ft: 45.0, pt: 55.0, mj: 7.2 },
    { bracket: '25–34', label: 'Prime Career Foundation', pct: 14.5, rate: 84.6, ft: 83.5, pt: 16.5, mj: 6.8 },
    { bracket: '35–49', label: 'Mid-Career & Leadership', pct: 19.5, rate: 83.2, ft: 86.0, pt: 14.0, mj: 6.1 },
    { bracket: '50–64', label: 'Senior Workforce & Mentors', pct: 18.5, rate: 68.4, ft: 81.0, pt: 19.0, mj: 4.8 },
    { bracket: '65+', label: 'Retirement & Senior Inhabitants', pct: 18.0, rate: 19.2, ft: 52.0, pt: 48.0, mj: 3.2 },
  ];

  const ageBracketBreakdown: AgeBracketDemographic[] = bracketsConfig.map((b) => {
    const bPop = Math.round(totalPop * (b.pct / 100));
    return {
      bracket: b.bracket,
      label: b.label,
      percentage: b.pct,
      count: bPop,
      countFormatted: formatPop(bPop),
      employment: buildBracketEmployment(bPop, b.rate, b.ft, b.pt, b.mj),
    };
  });

  let totalWorking = 0;
  let totalFt = 0;
  let totalPt = 0;
  let totalMj = 0;

  ageBracketBreakdown.forEach((ag) => {
    totalWorking += ag.employment.workingCount;
    totalFt += ag.employment.fullTimeCount;
    totalPt += ag.employment.partTimeCount;
    totalMj += ag.employment.multipleJobsCount;
  });

  const overallLaborForceRate = totalPop > 0 ? Number(((totalWorking / totalPop) * 100).toFixed(1)) : 0;
  const overallFtPct = totalWorking > 0 ? Number(((totalFt / totalWorking) * 100).toFixed(1)) : 0;
  const overallPtPct = totalWorking > 0 ? Number(((totalPt / totalWorking) * 100).toFixed(1)) : 0;
  const overallMjPct = totalWorking > 0 ? Number(((totalMj / totalWorking) * 100).toFixed(1)) : 0;

  const pop0to14 = ageBracketBreakdown[0].count;
  const pop15to64 = ageBracketBreakdown.slice(1, 5).reduce((acc, c) => acc + c.count, 0);
  const pop65plus = ageBracketBreakdown[5].count;

  const youthDep = pop15to64 > 0 ? Number(((pop0to14 / pop15to64) * 100).toFixed(1)) : 0;
  const oldAgeDep = pop15to64 > 0 ? Number(((pop65plus / pop15to64) * 100).toFixed(1)) : 0;
  const totalDep = Number((youthDep + oldAgeDep).toFixed(1));

  return {
    id,
    name,
    countryCode,
    parentCountryName: parentName,
    flag,
    region,
    subregion,
    isSubnational,
    subnationalType,
    totalPopulation: totalPop,
    totalPopulationFormatted: formatPop(totalPop),
    medianAge,
    sexRatio: `${malesPer100} males per 100 females`,
    malesPer100Females: malesPer100,
    genderBreakdown: [
      { gender: 'Female', percentage: femalePct, count: femaleCount, countFormatted: formatPop(femaleCount) },
      { gender: 'Male', percentage: malePct, count: maleCount, countFormatted: formatPop(maleCount) },
      { gender: 'Non-Binary / Unspecified', percentage: nbPct, count: nbCount, countFormatted: formatPop(nbCount) },
    ],
    ageBracketBreakdown,
    overallEmployment: {
      totalWorkingInhabitants: totalWorking,
      totalWorkingInhabitantsFormatted: formatPop(totalWorking),
      overallLaborForceParticipationRate: overallLaborForceRate,
      totalFullTime: totalFt,
      totalFullTimeFormatted: formatPop(totalFt),
      totalFullTimePercentage: overallFtPct,
      totalPartTime: totalPt,
      totalPartTimeFormatted: formatPop(totalPt),
      totalPartTimePercentage: overallPtPct,
      totalMultipleJobs: totalMj,
      totalMultipleJobsFormatted: formatPop(totalMj),
      totalMultipleJobsPercentage: overallMjPct,
    },
    youthDependencyRatio: youthDep,
    oldAgeDependencyRatio: oldAgeDep,
    totalDependencyRatio: totalDep,
    demographicHighlights: highlights,
  };
}

// Generate full 197 UN countries + subnational states/provinces
const US_STATES_DEMO = [
  { code: 'CA', name: 'California', pop: 39029342, medianAge: 37.3, female: 50.3, male: 49.2 },
  { code: 'TX', name: 'Texas', pop: 30029572, medianAge: 35.5, female: 50.4, male: 49.1 },
  { code: 'FL', name: 'Florida', pop: 22244823, medianAge: 42.8, female: 51.1, male: 48.4 },
  { code: 'NY', name: 'New York', pop: 19677151, medianAge: 39.4, female: 51.4, male: 48.1 },
  { code: 'PA', name: 'Pennsylvania', pop: 12972008, medianAge: 40.9, female: 50.9, male: 48.6 },
  { code: 'IL', name: 'Illinois', pop: 12582032, medianAge: 38.8, female: 50.8, male: 48.7 },
  { code: 'OH', name: 'Ohio', pop: 11756058, medianAge: 39.6, female: 50.8, male: 48.7 },
  { code: 'GA', name: 'Georgia', pop: 10912876, medianAge: 37.2, female: 51.2, male: 48.3 },
  { code: 'NC', name: 'North Carolina', pop: 10698973, medianAge: 39.1, female: 51.3, male: 48.2 },
  { code: 'MI', name: 'Michigan', pop: 10034113, medianAge: 40.1, female: 50.7, male: 48.8 },
  { code: 'NJ', name: 'New Jersey', pop: 9261694, medianAge: 40.2, female: 51.0, male: 48.5 },
  { code: 'VA', name: 'Virginia', pop: 8683619, medianAge: 38.6, female: 50.7, male: 48.8 },
  { code: 'WA', name: 'Washington', pop: 7785786, medianAge: 38.0, female: 49.9, male: 49.6 },
  { code: 'AZ', name: 'Arizona', pop: 7359197, medianAge: 38.4, female: 50.3, male: 49.2 },
  { code: 'MA', name: 'Massachusetts', pop: 6981974, medianAge: 39.7, female: 51.3, male: 48.2 },
  { code: 'TN', name: 'Tennessee', pop: 7051339, medianAge: 39.0, female: 51.1, male: 48.4 },
  { code: 'IN', name: 'Indiana', pop: 6833037, medianAge: 38.0, female: 50.6, male: 48.9 },
  { code: 'MO', name: 'Missouri', pop: 6177957, medianAge: 38.9, female: 50.8, male: 48.7 },
  { code: 'MD', name: 'Maryland', pop: 6164660, medianAge: 39.0, female: 51.5, male: 48.0 },
  { code: 'WI', name: 'Wisconsin', pop: 5892539, medianAge: 39.9, female: 50.3, male: 49.2 },
  { code: 'CO', name: 'Colorado', pop: 5839926, medianAge: 37.3, female: 49.6, male: 49.9 },
  { code: 'MN', name: 'Minnesota', pop: 5717184, medianAge: 38.4, female: 50.2, male: 49.3 },
  { code: 'SC', name: 'South Carolina', pop: 5282634, medianAge: 39.9, female: 51.4, male: 48.1 },
  { code: 'AL', name: 'Alabama', pop: 5074296, medianAge: 39.4, female: 51.5, male: 48.0 },
  { code: 'LA', name: 'Louisiana', pop: 4590241, medianAge: 37.6, female: 51.2, male: 48.3 },
  { code: 'KY', name: 'Kentucky', pop: 4512310, medianAge: 39.1, female: 50.7, male: 48.8 },
  { code: 'OR', name: 'Oregon', pop: 4240137, medianAge: 39.8, female: 50.4, male: 49.1 },
  { code: 'OK', name: 'Oklahoma', pop: 4019800, medianAge: 36.8, female: 50.5, male: 49.0 },
  { code: 'CT', name: 'Connecticut', pop: 3605944, medianAge: 41.2, female: 51.1, male: 48.4 },
  { code: 'UT', name: 'Utah', pop: 3380800, medianAge: 31.5, female: 49.7, male: 49.8 },
  { code: 'IA', name: 'Iowa', pop: 3200517, medianAge: 38.5, female: 50.3, male: 49.2 },
  { code: 'NV', name: 'Nevada', pop: 3177772, medianAge: 38.5, female: 49.9, male: 49.6 },
  { code: 'AR', name: 'Arkansas', pop: 3045637, medianAge: 38.5, female: 50.9, male: 48.6 },
  { code: 'MS', name: 'Mississippi', pop: 2940057, medianAge: 38.0, female: 51.6, male: 47.9 },
  { code: 'KS', name: 'Kansas', pop: 2937150, medianAge: 37.2, female: 50.3, male: 49.2 },
  { code: 'NM', name: 'New Mexico', pop: 2113344, medianAge: 38.6, female: 50.6, male: 48.9 },
  { code: 'NE', name: 'Nebraska', pop: 1967923, medianAge: 36.9, female: 50.1, male: 49.4 },
  { code: 'ID', name: 'Idaho', pop: 1939033, medianAge: 36.9, female: 49.8, male: 49.7 },
  { code: 'WV', name: 'West Virginia', pop: 1775156, medianAge: 42.8, female: 50.6, male: 48.9 },
  { code: 'HI', name: 'Hawaii', pop: 1440196, medianAge: 39.6, female: 50.1, male: 49.4 },
  { code: 'NH', name: 'New Hampshire', pop: 1395231, medianAge: 43.1, female: 50.4, male: 49.1 },
  { code: 'ME', name: 'Maine', pop: 1385340, medianAge: 45.0, female: 51.0, male: 48.5 },
  { code: 'RI', name: 'Rhode Island', pop: 1093734, medianAge: 40.3, female: 51.3, male: 48.2 },
  { code: 'MT', name: 'Montana', pop: 1122867, medianAge: 40.1, female: 49.6, male: 49.9 },
  { code: 'DE', name: 'Delaware', pop: 1018396, medianAge: 41.5, female: 51.6, male: 47.9 },
  { code: 'SD', name: 'South Dakota', pop: 909824, medianAge: 37.4, female: 49.7, male: 49.8 },
  { code: 'ND', name: 'North Dakota', pop: 779261, medianAge: 35.6, female: 49.0, male: 50.5 },
  { code: 'AK', name: 'Alaska', pop: 733583, medianAge: 35.3, female: 48.1, male: 51.4 },
  { code: 'DC', name: 'District of Columbia', pop: 671803, medianAge: 34.3, female: 52.4, male: 46.8 },
  { code: 'VT', name: 'Vermont', pop: 647064, medianAge: 43.0, female: 50.7, male: 48.8 },
  { code: 'WY', name: 'Wyoming', pop: 581381, medianAge: 38.7, female: 49.2, male: 50.3 },
  { code: 'PR', name: 'Puerto Rico', pop: 3221789, medianAge: 43.6, female: 52.6, male: 46.9 },
];

export const DEMOGRAPHICS_DATASET: LocationDemographics[] = [
  // 197 UN Country Demographics
  ...COUNTRIES_DATA.map((c) => {
    let medAge = 32.5;
    if (c.region === 'Europe') medAge = 42.5;
    if (c.region === 'Americas') medAge = 34.0;
    if (c.region === 'Asia') medAge = 31.8;
    if (c.region === 'Africa') medAge = 20.2;
    if (c.region === 'Oceania') medAge = 35.0;

    const femalePct = 50.2;
    const malePct = 49.3;

    return buildLocation(
      `COUNTRY_${c.code}`,
      c.name,
      c.code,
      c.name,
      c.flag,
      c.region,
      c.subregion || c.region,
      false,
      null,
      c.population,
      medAge,
      femalePct,
      malePct,
      [
        `Capital city: ${c.capital}`,
        `Region: ${c.region} (${c.subregion || 'Global'})`,
        `Working population: ${formatPop(Math.round(c.population * 0.62))}`,
        `Official languages: ${c.languages.filter((l) => l.type === 'official').map((l) => l.name).join(', ') || 'Various'}`,
      ]
    );
  }),

  // US States
  ...US_STATES_DEMO.map((st) => {
    return buildLocation(
      `US_STATE_${st.code}`,
      st.name,
      'US',
      'United States',
      '🇺🇸',
      'Americas',
      'Northern America',
      true,
      'US State',
      st.pop,
      st.medianAge,
      st.female,
      st.male,
      [
        `State jurisdiction: ${st.name} (${st.code})`,
        `Median population age: ${st.medianAge} years`,
        `Total active workforce: ${formatPop(Math.round(st.pop * 0.65))}`,
        `Gender balance: ${st.female}% Female, ${st.male}% Male`,
      ]
    );
  }),
];
