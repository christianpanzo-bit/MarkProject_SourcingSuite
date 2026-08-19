import { COUNTRIES_DATA } from './countries';

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

function buildGender(total: number, femalePct: number, malePct: number): GenderBreakdown[] {
  const fCount = Math.round(total * (femalePct / 100));
  const mCount = Math.round(total * (malePct / 100));
  const nbCount = Math.max(0, total - fCount - mCount);
  const nbPct = Number(((nbCount / (total || 1)) * 100).toFixed(1));

  return [
    { gender: 'Female', percentage: femalePct, count: fCount, countFormatted: formatPop(fCount) },
    { gender: 'Male', percentage: malePct, count: mCount, countFormatted: formatPop(mCount) },
    { gender: 'Non-Binary / Unspecified', percentage: nbPct, count: nbCount, countFormatted: formatPop(nbCount) },
  ];
}

function buildAge(total: number): AgeBracketBreakdown[] {
  const c1 = Math.round(total * 0.28);
  const c2 = Math.round(total * 0.38);
  const c3 = Math.round(total * 0.22);
  const c4 = total - c1 - c2 - c3;

  return [
    { bracket: '18–24', label: 'New & Recent Graduates', percentage: 28.0, count: c1, countFormatted: formatPop(c1) },
    { bracket: '25–34', label: 'Early Career Professionals', percentage: 38.0, count: c2, countFormatted: formatPop(c2) },
    { bracket: '35–49', label: 'Mid-Career Specialists', percentage: 22.0, count: c3, countFormatted: formatPop(c3) },
    { bracket: '50+', label: 'Senior Experts & Directors', percentage: 12.0, count: c4, countFormatted: formatPop(c4) },
  ];
}

const US_STATES_FIELDS = [
  { name: 'California', popWeight: 0.12, unis: ['Stanford University', 'UC Berkeley', 'UCLA', 'USC', 'Caltech'] },
  { name: 'Texas', popWeight: 0.09, unis: ['UT Austin', 'Texas A&M University', 'Rice University', 'University of Houston'] },
  { name: 'New York', popWeight: 0.06, unis: ['Columbia University', 'NYU', 'Cornell University', 'CUNY System'] },
  { name: 'Florida', popWeight: 0.065, unis: ['University of Florida', 'Florida State University', 'University of Miami'] },
  { name: 'Massachusetts', popWeight: 0.03, unis: ['MIT', 'Harvard University', 'Northeastern University', 'Boston University'] },
  { name: 'Washington', popWeight: 0.03, unis: ['University of Washington', 'Washington State University'] },
  { name: 'Illinois', popWeight: 0.04, unis: ['University of Chicago', 'Northwestern University', 'UIUC'] },
  { name: 'Pennsylvania', popWeight: 0.04, unis: ['Penn State', 'University of Pennsylvania', 'Carnegie Mellon'] },
];

const FIELDS_METADATA = [
  {
    fieldId: 'cs_it_software',
    fieldName: 'Computer Science, IT & Software Engineering',
    category: 'STEM & Technology',
    description: 'Algorithms, full-stack software development, cloud systems, artificial intelligence, cybersecurity, and computer engineering.',
    iconName: 'Code',
    globalAvgPercentage: 11.8,
    femalePct: 32.0,
    malePct: 67.0,
  },
  {
    fieldId: 'business_admin_mgmt',
    fieldName: 'Business Administration, Management & Commerce',
    category: 'Business & Economics',
    description: 'Strategic management, organizational leadership, marketing, international commerce, and entrepreneurship.',
    iconName: 'Briefcase',
    globalAvgPercentage: 18.5,
    femalePct: 49.0,
    malePct: 50.0,
  },
  {
    fieldId: 'nursing_health_clinical',
    fieldName: 'Nursing, Medicine & Health Sciences',
    category: 'Healthcare & Life Sciences',
    description: 'Clinical nursing, general medicine, biomedical research, pharmacology, physical therapy, and health administration.',
    iconName: 'HeartPulse',
    globalAvgPercentage: 14.2,
    femalePct: 76.0,
    malePct: 23.0,
  },
  {
    fieldId: 'engineering_elec_mech_civil',
    fieldName: 'Electrical, Mechanical & Civil Engineering',
    category: 'STEM & Technology',
    description: 'Robotics, electronics, mechanical design, thermodynamics, civil infrastructure, structural and materials engineering.',
    iconName: 'Cpu',
    globalAvgPercentage: 13.4,
    femalePct: 26.0,
    malePct: 73.0,
  },
  {
    fieldId: 'finance_accounting_audit',
    fieldName: 'Finance, Banking, Accounting & Audit',
    category: 'Business & Economics',
    description: 'Corporate finance, auditing, CPA qualification paths, wealth management, financial modeling, and risk analysis.',
    iconName: 'Calculator',
    globalAvgPercentage: 9.6,
    femalePct: 47.0,
    malePct: 52.0,
  },
  {
    fieldId: 'law_legal_jurisprudence',
    fieldName: 'Law, Legal Studies & Jurisprudence',
    category: 'Legal & Public Policy',
    description: 'Corporate law, international jurisprudence, litigation, compliance, intellectual property, and arbitration.',
    iconName: 'Scale',
    globalAvgPercentage: 5.4,
    femalePct: 53.0,
    malePct: 46.0,
  },
  {
    fieldId: 'data_science_statistics',
    fieldName: 'Data Science, Statistics & Mathematics',
    category: 'STEM & Technology',
    description: 'Mathematical statistics, predictive analytics, quantitative finance, machine learning, and data visualization.',
    iconName: 'BarChart2',
    globalAvgPercentage: 6.2,
    femalePct: 38.0,
    malePct: 61.0,
  },
  {
    fieldId: 'biological_biomedical',
    fieldName: 'Biological, Chemical & Biomedical Sciences',
    category: 'Healthcare & Life Sciences',
    description: 'Molecular biology, biochemistry, biotechnology, genetics, microbiology, and pharmaceuticals.',
    iconName: 'Dna',
    globalAvgPercentage: 7.8,
    femalePct: 58.0,
    malePct: 41.0,
  },
  {
    fieldId: 'psychology_behavioral',
    fieldName: 'Psychology, Cognitive Science & Behavioral Health',
    category: 'Social Sciences & Humanities',
    description: 'Clinical psychology, cognitive neuroscience, organizational behavior, counseling, and human factors.',
    iconName: 'Brain',
    globalAvgPercentage: 6.5,
    femalePct: 71.0,
    malePct: 28.0,
  },
  {
    fieldId: 'education_pedagogy',
    fieldName: 'Education, Pedagogy & Curriculum Design',
    category: 'Education & Training',
    description: 'Primary/secondary education, curriculum architecture, instructional design, special education, and academic leadership.',
    iconName: 'GraduationCap',
    globalAvgPercentage: 8.9,
    femalePct: 74.0,
    malePct: 25.0,
  },
  {
    fieldId: 'design_media_arts',
    fieldName: 'Design, Fine Arts & Digital Media',
    category: 'Creative & Media',
    description: 'UI/UX design, visual communication, animation, industrial design, film production, and graphic arts.',
    iconName: 'Palette',
    globalAvgPercentage: 5.1,
    femalePct: 55.0,
    malePct: 44.0,
  },
  {
    fieldId: 'communications_marketing',
    fieldName: 'Marketing, Public Relations & Communications',
    category: 'Business & Economics',
    description: 'Brand strategy, corporate communications, journalism, digital marketing, PR campaigns, and media relations.',
    iconName: 'Megaphone',
    globalAvgPercentage: 7.2,
    femalePct: 63.0,
    malePct: 36.0,
  },
];

export const FIELD_OF_STUDIES_DATASET: FieldOfStudyTopic[] = FIELDS_METADATA.map((meta) => {
  const countryData: CountryFieldData[] = COUNTRIES_DATA.map((c) => {
    let tertiaryRate = 0.35;
    if (c.region === 'Europe') tertiaryRate = 0.44;
    if (c.region === 'Americas') tertiaryRate = 0.40;
    if (c.region === 'Asia') tertiaryRate = 0.32;
    if (c.region === 'Oceania') tertiaryRate = 0.42;
    if (c.region === 'Africa') tertiaryRate = 0.14;

    const tertiaryPop = Math.max(1000, Math.round(c.population * tertiaryRate));
    const actualGrads = Math.round(tertiaryPop * (meta.globalAvgPercentage / 100));
    const annualNew = Math.round(actualGrads * 0.085);

    const topUnis = [`${c.name} National University`, `${c.capital || c.name} Institute of Technology`, `University of ${c.capital || c.name}`];

    const usStateBreakdown: StateFieldBreakdown[] =
      c.code === 'US'
        ? US_STATES_FIELDS.map((st) => {
            const stTertiary = Math.round(tertiaryPop * st.popWeight);
            const stGrads = Math.round(stTertiary * (meta.globalAvgPercentage / 100));
            const stAnnual = Math.round(stGrads * 0.09);
            return {
              stateName: st.name,
              tertiaryEducatedPopulation: stTertiary,
              tertiaryEducatedFormatted: formatPop(stTertiary),
              percentageInField: meta.globalAvgPercentage,
              actualGraduatesCount: stGrads,
              actualGraduatesFormatted: formatPop(stGrads),
              annualNewGraduates: stAnnual,
              annualNewGraduatesFormatted: formatPop(stAnnual),
              topUniversities: st.unis,
              genderBreakdown: buildGender(stGrads, meta.femalePct, meta.malePct),
              ageBracketBreakdown: buildAge(stGrads),
            };
          })
        : [];

    return {
      countryCode: c.code,
      countryName: c.name,
      flag: c.flag,
      region: c.region,
      tertiaryEducatedPopulation: tertiaryPop,
      tertiaryEducatedFormatted: formatPop(tertiaryPop),
      percentageInField: meta.globalAvgPercentage,
      actualGraduatesCount: actualGrads,
      actualGraduatesFormatted: formatPop(actualGrads),
      annualNewGraduates: annualNew,
      annualNewGraduatesFormatted: formatPop(annualNew),
      topUniversities: topUnis,
      genderBreakdown: buildGender(actualGrads, meta.femalePct, meta.malePct),
      ageBracketBreakdown: buildAge(actualGrads),
      usStateBreakdown: usStateBreakdown.length > 0 ? usStateBreakdown : undefined,
    };
  });

  return {
    fieldId: meta.fieldId,
    fieldName: meta.fieldName,
    category: meta.category,
    description: meta.description,
    iconName: meta.iconName,
    globalAvgPercentage: meta.globalAvgPercentage,
    countryData,
  };
});
