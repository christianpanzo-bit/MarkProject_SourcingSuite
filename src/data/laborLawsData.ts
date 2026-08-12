import { LaborLawInfo, LaborLawSubnational } from '../types';

export const US_LABOR_LAW_INFO: LaborLawInfo = {
  nationalLaborCodeName: 'Fair Labor Standards Act (FLSA) & Occupational Safety and Health Act (OSHA)',
  nationalLaborCodeUrl: 'https://www.dol.gov/agencies/whd/flsa',
  standardWorkWeekHours: '40 Hours / Week (5 Days x 8 Hours standard)',
  partTimeRegulations: 'Federal law defines part-time as under 30-35 hours/week. Employers with 50+ full-time employees must provide ACA-compliant health insurance to employees working 30+ hours/week. Part-time employees working 1,000+ hours/year qualify for ERISA retirement plan participation.',
  remoteWorkRegulations: 'Under FLSA, employers must compensate non-exempt remote workers for all hours worked including tracking breaks. CA, NY, IL, MA, and DC require employers to reimburse necessary remote work expenses (internet, mobile, home office setup under CA Labor Code § 2802). NYC and state laws regulate AI automated recruitment tools (NYC Local Law 144 requirement for bias audits).',
  dataProtectionLaw: {
    name: 'CCPA/CPRA (California) & State Consumer Privacy Laws (2026 Framework)',
    summary: 'Covers job applicants and employee personal data in CA, TX, FL, CO, VA, OR, CT, UT. Requires explicit pre-collection privacy notices, applicant right to delete/know, prohibition on selling candidate data, and mandatory disclosures regarding automated resume screening algorithms.',
    officialUrl: 'https://oag.ca.gov/privacy/ccpa'
  },
  mostCommonWorkSetups: {
    setupType: 'Hybrid (3 Days In-Office / 2 Days Remote) & Flexible Remote',
    sharePercentage: '52% Hybrid, 29% On-Site, 19% Fully Remote',
    commonPractices: 'Core synchronous hours (10:00 AM - 3:00 PM local time), BYOD or corporate laptop provision, $50-$100/month remote stipend in mandatory states.'
  },
  keyLaborHighlights: [
    'Federal overtime threshold: 1.5x regular pay for hours over 40/week (non-exempt employees).',
    'At-will employment standard across 49 states (Montana excepted).',
    'FMLA provides 12 weeks unpaid job-protected leave for qualifying medical/family reasons (50+ employee firms).',
    'Pay transparency laws in CA, NY, CO, WA, MA, IL mandate disclosing salary ranges in job postings.'
  ],
  subnationalLaborLaws: [
    {
      stateOrRegionName: 'California',
      laborLawSummary: 'California Labor Code & Cal/OSHA. Daily overtime required after 8 hours/day (1.5x) and 12 hours/day (2.0x). Mandatory paid sick leave (5 days/40 hrs). SB 1162 requires salary ranges on all job listings.',
      lawLink: 'https://www.dir.ca.gov/dlse/',
      partTimeOrRemoteRules: 'Cal. Lab. Code § 2802 strictly requires full employer reimbursement of remote internet, phone, and home office costs.',
      minimumRestOrOvertime: 'Mandatory 30-min meal break before 5th hour worked, plus paid 10-min rest break every 4 hours.'
    },
    {
      stateOrRegionName: 'New York',
      laborLawSummary: 'New York State Labor Law. NY Pay Transparency Act mandates pay ranges in all recruitment materials. Mandatory paid family leave (PFL) up to 12 weeks.',
      lawLink: 'https://dol.ny.gov/labor-standards',
      partTimeOrRemoteRules: 'NYC Local Law 144 mandates annual independent bias audits for AI hiring tools used on NY candidates.',
      minimumRestOrOvertime: 'Overtime 1.5x after 40 hours. Spread of hours pay (1 additional hour minimum wage) if workday exceeds 10 hours.'
    },
    {
      stateOrRegionName: 'Texas',
      laborLawSummary: 'Texas Labor Code & TWC rules. Strict at-will employment state. Follows Federal FLSA standards for 40-hour workweek and overtime.',
      lawLink: 'https://www.twc.texas.gov/jobseekers/texas-payday-law',
      partTimeOrRemoteRules: 'No state-mandated expense reimbursement for remote work unless specified in employment contract.',
      minimumRestOrOvertime: 'Overtime 1.5x after 40 hours weekly. Meal/rest breaks governed by federal guidelines.'
    },
    {
      stateOrRegionName: 'Washington State',
      laborLawSummary: 'WA Paid Family & Medical Leave (PFML) up to 12-18 weeks. Pay Transparency Act mandates salary & benefit descriptions in job ads.',
      lawLink: 'https://secure.lni.wa.gov/',
      partTimeOrRemoteRules: 'Mandatory rest break (10 min per 4 hrs) and meal break (30 min per 5 hrs) applies to remote workers.',
      minimumRestOrOvertime: 'Overtime 1.5x over 40 hours. High state statutory minimum wage ($16.66/hr in 2026).'
    },
    {
      stateOrRegionName: 'Illinois',
      laborLawSummary: 'Illinois Equal Pay Act & One Day Rest in Seven Act (ODRISA). Mandatory pay transparency rules for employers with 15+ employees.',
      lawLink: 'https://labor.illinois.gov/',
      partTimeOrRemoteRules: '820 ILCS 115/9.5 mandates reimbursement of all necessary expenditures incurred by employees within scope of remote employment.',
      minimumRestOrOvertime: '20-minute paid meal break for shifts of 7.5 hours or longer.'
    }
  ]
};

export const PH_LABOR_LAW_INFO: LaborLawInfo = {
  nationalLaborCodeName: 'Labor Code of the Philippines (Presidential Decree No. 442) & DOLE Regulations',
  nationalLaborCodeUrl: 'https://www.dole.gov.ph/labor-code-of-the-philippines/',
  standardWorkWeekHours: '40 to 48 Hours / Week (Max 8 Hours / Day for 5 or 6 days)',
  partTimeRegulations: 'Part-time workers are entitled to pro-rated statutory benefits including 13th month pay, Service Incentive Leave (SIL) after 1 year, SSS, PhilHealth, and Pag-IBIG contributions proportional to hours worked.',
  remoteWorkRegulations: 'Telecommuting Act (Republic Act No. 11165) protects remote workers with equal pay, overtime rights, access to training, and protection against isolation. RA 11165 mandates written telecommuting agreements and night shift differential pay (10% extra for 10 PM - 6 AM shift) common in global BPO operations.',
  dataProtectionLaw: {
    name: 'Data Privacy Act of 2012 (Republic Act No. 10173) & National Privacy Commission (NPC)',
    summary: 'Strict guidelines for HR and talent sourcing. Requires consent before collecting applicant CVs, strict data retention limits for unhired candidates, secure storage of background checks, and registration of HR databases processing over 1,000 records.',
    officialUrl: 'https://privacy.gov.ph/'
  },
  mostCommonWorkSetups: {
    setupType: 'Hybrid BPO Shift & Dedicated Remote Virtual Assistance',
    sharePercentage: '48% Hybrid BPO, 34% On-Site Manufacturing/Retail, 18% Full Remote Offshore',
    commonPractices: 'US/EU synchronous graveyard shifts (10% night differential), company-provided fiber internet allowance (PHP 1,500-2,500/mo), HMO health coverage on Day 1.'
  },
  keyLaborHighlights: [
    'Mandatory 13th Month Pay required by law for all rank-and-file employees before Dec 24.',
    'Night Shift Differential: 10% premium on hourly rate for work performed between 10:00 PM and 6:00 AM.',
    'Overtime rates: 125% regular hourly rate on normal days; 130% to 200% on rest days and statutory holidays.',
    'Regularization after 6 months probationary period unless covered by specific project contract.'
  ],
  subnationalLaborLaws: [
    {
      stateOrRegionName: 'NCR (National Capital Region - Metro Manila)',
      laborLawSummary: 'Highest daily minimum wage in Philippines (PHP 645-680/day in 2026). DOLE NCR strictly enforces BPO ergonomic standards and PEZA tax-incentive telework quotas.',
      lawLink: 'https://ncr.dole.gov.ph/',
      partTimeOrRemoteRules: 'PEZA FIRB Resolution allows IT-BPM firms flexible hybrid telework arrangements while retaining ecozone tax incentives.',
      minimumRestOrOvertime: 'Standard 8-hour daily limit; 125% regular overtime rate, 130% rest day rate.'
    },
    {
      stateOrRegionName: 'Region VII (Central Visayas - Cebu)',
      laborLawSummary: 'Major BPO and tech center. Daily wage PHP 468-501/day. Governed by DOLE Region 7 labor inspection standards.',
      lawLink: 'https://ro7.dole.gov.ph/',
      partTimeOrRemoteRules: 'High concentration of remote virtual assistant (VA) agencies operating under DOLE Department Order 174.',
      minimumRestOrOvertime: 'Mandatory 1-hour unpaid lunch break for 8-hour shifts; 10% night differential.'
    },
    {
      stateOrRegionName: 'Region XI (Davao Region)',
      laborLawSummary: 'Agri-industrial and regional tech hub. Daily wage PHP 481-490/day.',
      lawLink: 'https://ro11.dole.gov.ph/',
      partTimeOrRemoteRules: 'Full statutory compliance for local and offshore remote software developers.',
      minimumRestOrOvertime: 'Standard 8-hour work shift limit with 125% overtime pay.'
    }
  ]
};

export const CA_LABOR_LAW_INFO: LaborLawInfo = {
  nationalLaborCodeName: 'Canada Labour Code (Federal) & Provincial Employment Standards Acts',
  nationalLaborCodeUrl: 'https://www.canada.ca/en/services/jobs/workplace/human-rights.html',
  standardWorkWeekHours: '40 Hours / Week (8 Hours / Day standard)',
  partTimeRegulations: 'Part-time employees are protected under provincial employment standards, earning equal hourly rates for equal work, pro-rated statutory holiday pay, and mandatory public pension (CPP/QPP) contributions.',
  remoteWorkRegulations: 'Ontario Right to Disconnect law mandates written workplace policies for firms with 25+ staff. Federal Labour Code & provincial guidelines require written telework agreements and tax deductions for home office expenses (CRA Form T2200).',
  dataProtectionLaw: {
    name: 'PIPEDA (Personal Information Protection and Electronic Documents Act) & Provincial Privacy Acts',
    summary: 'Governs collection of candidate personal info. Requires consent, limits background check scopes, gives candidates access rights to interview notes, and mandates breach notifications under OPC oversight.',
    officialUrl: 'https://www.priv.gc.ca/en/'
  },
  mostCommonWorkSetups: {
    setupType: 'Hybrid (2-3 Days Office) & Distributed Remote Across Provinces',
    sharePercentage: '58% Hybrid, 26% On-Site, 16% Fully Remote',
    commonPractices: 'CRA T2200 tax slip issuance for home office expense deduction, flexible core hours (9 AM - 3 PM EST/PST).'
  },
  keyLaborHighlights: [
    'Minimum 2 to 3 weeks paid annual vacation (increasing to 3-4 weeks after 5-10 years service).',
    'Employment Insurance (EI) parental leave benefits up to 12-18 months.',
    'Statutory overtime: 1.5x hourly rate after 8 hours/day or 40-44 hours/week depending on province.',
    'Termination notice or pay in lieu required by law (1 to 8 weeks based on length of service).'
  ],
  subnationalLaborLaws: [
    {
      stateOrRegionName: 'Ontario',
      laborLawSummary: 'Ontario Employment Standards Act (ESA 2000). Mandates written "Right to Disconnect" policies (25+ employees) and ban on non-compete clauses for non-executives.',
      lawLink: 'https://www.ontario.ca/document/your-guide-employment-standards-act-0',
      partTimeOrRemoteRules: 'CRA T2200 home office declarations and provincial remote worker coverage under WSIB Ontario.',
      minimumRestOrOvertime: 'Overtime 1.5x after 44 hours per week. 30-minute meal break for every 5 consecutive hours worked.'
    },
    {
      stateOrRegionName: 'Quebec',
      laborLawSummary: 'Act Respecting Labour Standards (CNESST) & Bill 96 (Charter of the French Language). Requires French as primary language of internal communications and employment contracts.',
      lawLink: 'https://www.cnesst.gouv.qc.ca/en',
      partTimeOrRemoteRules: 'Strict French language workplace requirements apply to remote employee onboarding materials in Quebec.',
      minimumRestOrOvertime: 'Overtime 1.5x after 40 hours per week. Paid 30-minute rest period if required to remain available.'
    },
    {
      stateOrRegionName: 'British Columbia',
      laborLawSummary: 'BC Employment Standards Act & Pay Transparency Act. Requires salary ranges on publicly advertised job opportunities.',
      lawLink: 'https://www2.gov.bc.ca/gov/content/employment-business/employment-standards-advice/employment-standards',
      partTimeOrRemoteRules: 'WorkSafeBC mandates home workstation ergonomics assessment for remote employees.',
      minimumRestOrOvertime: 'Daily overtime 1.5x after 8 hours; 2.0x after 12 hours/day or 40 hours/week.'
    }
  ]
};

export const DE_LABOR_LAW_INFO: LaborLawInfo = {
  nationalLaborCodeName: 'German Civil Code (BGB § 611a), Arbeitszeitgesetz (ArbZG) & Betriebsverfassungsgesetz (BetrVG)',
  nationalLaborCodeUrl: 'https://www.bmas.de/DE/Arbeit/Arbeitsrecht/arbeitsrecht.html',
  standardWorkWeekHours: '38 to 40 Hours / Week (Strict maximum 8 hours/day, expandable to 10 hours if averaged over 6 months)',
  partTimeRegulations: 'Part-Time and Fixed-Term Employment Act (TzBfG) grants employees working 6+ months in firms with 15+ staff the legal right to reduce working hours (Teilzeit) and return to full-time (Brückenteilzeit). Equal hourly treatment mandated.',
  remoteWorkRegulations: 'Works Council (Betriebsrat) has co-determination rights over mobile working (Mobile Office) policies under BetrVG § 87. Employers must provide ergonomic IT hardware or pay tax-free home office allowance (€6/day up to €1,260/year tax deduction). Strict compliance with ArbZG rest periods applies at home.',
  dataProtectionLaw: {
    name: 'EU GDPR (General Data Protection Regulation) & BDSG (Bundesdatenschutzgesetz § 26)',
    summary: 'Strict protection for candidate data under BDSG § 26. Pre-employment screening strictly restricted to directly job-relevant qualifications. CVs of unhired candidates must be deleted within 6 months unless explicit opt-in talent pool consent is given. High administrative fines for non-compliance.',
    officialUrl: 'https://www.bfdi.bund.de/'
  },
  mostCommonWorkSetups: {
    setupType: 'Hybrid (Mobiles Arbeiten 2-3 Days) with High Works Council Governance',
    sharePercentage: '64% Hybrid, 22% On-Site, 14% Fully Remote',
    commonPractices: 'Tax-free €6/day home office allowance, core attendance hours (10:00 - 15:00 Uhr), zero work emails on weekends.'
  },
  keyLaborHighlights: [
    'Minimum 24 working days paid holiday required by federal law (28-30 days standard in agreements).',
    'Strict dismissal protection (Kündigungsschutzgesetz) for employees after 6 months in firms with 10+ staff.',
    '6 weeks 100% paid sick leave (Entgeltfortzahlung im Krankheitsfall) paid directly by employer.',
    'Mandatory 11 consecutive hours of rest between workdays (including remote shifts).'
  ],
  subnationalLaborLaws: [
    {
      stateOrRegionName: 'Bavaria (Bayern)',
      laborLawSummary: 'Bayerisches Kinderbildungs- und Betreuungsgesetz & regional public holidays (13 days/yr). Supervised by Gewerbeaufsicht Bayern.',
      lawLink: 'https://www.stmas.bayern.de/arbeit/',
      partTimeOrRemoteRules: 'High adoption of IG Metall 35-hour collective agreements across industrial and automotive sectors.',
      minimumRestOrOvertime: 'Strict Enforcement of ArbZG 11-hour rest periods.'
    },
    {
      stateOrRegionName: 'North Rhine-Westphalia (NRW)',
      laborLawSummary: 'NRW Arbeitsschutzgesetz & Ministerium für Arbeit NRW. Largest industrial labor force in Germany.',
      lawLink: 'https://www.mags.nrw/',
      partTimeOrRemoteRules: 'Widespread Mobile Working agreements negotiated via local Betriebsrat.',
      minimumRestOrOvertime: 'Max 10 hours daily limit with compulsory balancing within 24 weeks.'
    },
    {
      stateOrRegionName: 'Berlin',
      laborLawSummary: 'Berlin Senatsverwaltung für Arbeit. High tech startup and service sector density.',
      lawLink: 'https://www.berlin.de/sen/arbeit/',
      partTimeOrRemoteRules: 'Flexible remote telework policies in tech startups; strict compliance with GDPR BDSG § 26 candidate consent.',
      minimumRestOrOvertime: 'Standard ArbZG rules apply.'
    }
  ]
};

export const GB_LABOR_LAW_INFO: LaborLawInfo = {
  nationalLaborCodeName: 'Employment Rights Act 1996 & Employment Relations Act 2024',
  nationalLaborCodeUrl: 'https://www.gov.uk/browse/employing-people',
  standardWorkWeekHours: '37.5 to 40 Hours / Week (Maximum 48 hours average under Working Time Regulations unless opted out)',
  partTimeRegulations: 'Part-time Workers (Prevention of Less Favourable Treatment) Regulations 2000 mandate pro-rata pay, holidays, sick pay, and pension access identical to full-time staff.',
  remoteWorkRegulations: 'Flexible Working Regulations 2024 give all employees the legal right to request flexible working/remote work from Day 1 of employment. Employers must consult and decide within 2 months. ACAS Code of Practice governs home working health & safety assessments.',
  dataProtectionLaw: {
    name: 'UK GDPR & Data Protection Act 2018 (ICO Oversight)',
    summary: 'Regulates processing of job applicant data. Mandates Privacy Notices at point of application, right to request access to interview scoring notes (Subject Access Request / SAR), and strict 6-month retention caps for non-selected candidates.',
    officialUrl: 'https://ico.org.uk/'
  },
  mostCommonWorkSetups: {
    setupType: 'Hybrid (2-3 Days Office) & London Commuter Hubs',
    sharePercentage: '61% Hybrid, 24% On-Site, 15% Fully Remote',
    commonPractices: 'Core hours (10:00 AM - 4:00 PM), workplace pension auto-enrolment (8% combined minimum), equipment shipping to candidate home address.'
  },
  keyLaborHighlights: [
    '28 days statutory paid annual leave (including 8 public/bank holidays).',
    'Auto-enrolment pension scheme required for eligible workers (employer contributes minimum 3%).',
    'Statutory Redundancy Pay after 2 years continuous service.',
    'Unfair dismissal protection triggers after 2 years continuous service.'
  ],
  subnationalLaborLaws: [
    {
      stateOrRegionName: 'England & Wales',
      laborLawSummary: 'Employment Rights Act 1996 enforced by Employment Tribunals. ACAS conciliation required before filing claims.',
      lawLink: 'https://www.gov.uk/employment-tribunals',
      partTimeOrRemoteRules: 'Day 1 statutory right to request flexible working under 2024 reform.',
      minimumRestOrOvertime: '21 minutes rest break for shifts over 6 hours; 11 hours daily rest between shifts.'
    },
    {
      stateOrRegionName: 'Scotland',
      laborLawSummary: 'Devolved Fair Work Convention guidance & Scottish Government Fair Work First criteria for public procurement.',
      lawLink: 'https://www.gov.scot/policies/fair-work-services/',
      partTimeOrRemoteRules: 'Strong encouragement of flexible working and Living Wage Foundation accreditation.',
      minimumRestOrOvertime: 'Standard Working Time Regulations 1998 apply.'
    },
    {
      stateOrRegionName: 'Northern Ireland',
      laborLawSummary: 'Employment Rights (Northern Ireland) Order 1996 & Labour Relations Agency (LRA) oversight.',
      lawLink: 'https://www.lra.org.uk/',
      partTimeOrRemoteRules: 'Separate Equality Commission guidelines on fair recruitment and monitoring requirements.',
      minimumRestOrOvertime: '20 minutes rest for shifts exceeding 6 hours.'
    }
  ]
};

export const AU_LABOR_LAW_INFO: LaborLawInfo = {
  nationalLaborCodeName: 'Fair Work Act 2009, Modern Awards & Fair Work Legislation Amendment (Closing Loopholes) Act 2024',
  nationalLaborCodeUrl: 'https://www.fairwork.gov.au/',
  standardWorkWeekHours: '38 Hours / Week (plus reasonable additional hours)',
  partTimeRegulations: 'Part-time employees work guaranteed minimum hours under Modern Awards, earning pro-rata annual leave (4 weeks/yr), sick leave (10 days/yr), and superannuation contributions (11.5% - 12% in 2026).',
  remoteWorkRegulations: 'Fair Work Act "Right to Disconnect" (effective 2024/2025) gives employees the legal right to refuse to monitor, read or respond to contact from their employer outside working hours unless unreasonable. Employers must cover ergonomic remote expenses under OHS/WHS rules.',
  dataProtectionLaw: {
    name: 'Privacy Act 1988 (Cth) & OAIC Guidelines',
    summary: 'Candidate privacy protected during recruitment. While employee records have partial exemptions, job applicant data prior to hiring is fully subject to Australian Privacy Principles (APPs). Mandatory data breach reporting required.',
    officialUrl: 'https://www.oaic.gov.au/'
  },
  mostCommonWorkSetups: {
    setupType: 'Hybrid (3 Days Office / 2 Days Remote) & Right to Disconnect',
    sharePercentage: '57% Hybrid, 27% On-Site, 16% Fully Remote',
    commonPractices: 'Superannuation Guarantee (12% of salary), employer home office stipends, strict compliance with Right to Disconnect laws.'
  },
  keyLaborHighlights: [
    'Superannuation Guarantee rate: 12.0% paid by employer into super fund on top of base salary (2026).',
    '4 weeks paid annual leave per year (5 weeks for shift workers) + 10 days paid personal/carer\'s leave.',
    'Long Service Leave (2 months paid leave after 10 years service with same employer).',
    'Casual conversion rights: casual employees can request permanent status after 6-12 months.'
  ],
  subnationalLaborLaws: [
    {
      stateOrRegionName: 'New South Wales (NSW)',
      laborLawSummary: 'NSW Work Health and Safety Act 2011 & Long Service Leave Act 1955. Governed by SafeWork NSW.',
      lawLink: 'https://www.safework.nsw.gov.au/',
      partTimeOrRemoteRules: 'Full application of Fair Work Ombudsman Right to Disconnect and WHS home safety checklists.',
      minimumRestOrOvertime: 'Overtime 1.5x for first 2 hours, 2.0x thereafter under relevant Modern Awards.'
    },
    {
      stateOrRegionName: 'Victoria',
      laborLawSummary: 'Victorian Long Service Leave Act 2018 & WorkSafe Victoria. Allows portable long service leave in contract/cleaning sectors.',
      lawLink: 'https://www.worksafe.vic.gov.au/',
      partTimeOrRemoteRules: 'Victorian Public Sector flexible work policies setting baseline for commercial sector remote standards.',
      minimumRestOrOvertime: 'Mandatory 10-hour break between consecutive shifts.'
    },
    {
      stateOrRegionName: 'Queensland',
      laborLawSummary: 'Queensland Industrial Relations Act 2016 & Workplace Health and Safety Queensland.',
      lawLink: 'https://www.worksafe.qld.gov.au/',
      partTimeOrRemoteRules: 'Specific heat stress and remote ergonomic guidelines for regional remote workers.',
      minimumRestOrOvertime: 'Award-specific overtime penalty rates apply.'
    }
  ]
};

/**
 * Fallback labor law generator for all other countries in the catalog.
 */
export function getFallbackLaborLawInfo(countryCode: string, countryName: string): LaborLawInfo {
  return {
    nationalLaborCodeName: `National Labor Code & Employment Act of ${countryName}`,
    nationalLaborCodeUrl: `https://www.ilo.org/dyn/natlex/natlex4.country?p_lang=en&p_country=${countryCode}`,
    standardWorkWeekHours: '40 Hours / Week (8 Hours / Day, 5 Days/Week standard)',
    partTimeRegulations: `Part-time workers in ${countryName} are entitled to statutory pro-rata protections, equal pay for equal work, and proportional social security and medical benefits under statutory labor standards.`,
    remoteWorkRegulations: `Telework regulations in ${countryName} mandate written employment contracts detailing remote working arrangements, equipment provisions, work hour tracking, and occupational health and safety guidelines for home offices.`,
    dataProtectionLaw: {
      name: `Data Protection & Personal Privacy Act of ${countryName} (GDPR-Aligned Framework)`,
      summary: `Requires candidate consent before collecting CVs and background records, restricts retention of unhired applicant data to 6-12 months, and mandates secure data processing protocols.`,
      officialUrl: `https://www.ilo.org/global/topics/labor-market-information/lang--en/index.htm`
    },
    mostCommonWorkSetups: {
      setupType: 'Hybrid (3 Days In-Office / 2 Days Remote) & Flexible Core Hours',
      sharePercentage: '55% Hybrid / On-Site, 30% Commercial Office, 15% Remote Sourcing',
      commonPractices: 'Core synchronous collaboration hours (10:00 AM - 3:00 PM local time), company laptop provision, and monthly communications allowance.'
    },
    keyLaborHighlights: [
      `Standard 40-hour work week with overtime premiums (125% - 150% regular rate).`,
      `Statutory minimum annual paid leave (14 to 28 days depending on tenure).`,
      `Social security and national healthcare contribution obligations for employers.`,
      `Statutory severance and notice period requirements based on years of continuous service.`
    ],
    subnationalLaborLaws: [
      {
        stateOrRegionName: `Capital District / Metro (${countryName})`,
        laborLawSummary: `Primary administrative and commercial zone in ${countryName}. Enforces national labor inspections and statutory minimum wage floors.`,
        lawLink: `https://www.ilo.org/dyn/natlex/natlex4.country?p_lang=en&p_country=${countryCode}`,
        partTimeOrRemoteRules: 'High concentration of remote tech and service operations with standardized telework agreements.',
        minimumRestOrOvertime: 'Standard 8-hour daily limit; 1.25x - 1.5x overtime multiplier.'
      },
      {
        stateOrRegionName: `Regional States & Industrial Zones (${countryName})`,
        laborLawSummary: `Manufacturing, logistics, and regional trade hubs operating under provincial labor directorate oversight.`,
        lawLink: `https://www.ilo.org/dyn/natlex/natlex4.country?p_lang=en&p_country=${countryCode}`,
        partTimeOrRemoteRules: 'Pro-rata statutory holiday pay and regional labor board supervision.',
        minimumRestOrOvertime: 'Mandatory 24 consecutive hours rest per 7-day period.'
      }
    ]
  };
}

/**
 * Returns preset or generated LaborLawInfo for any country code.
 */
export function getLaborLawInfoForCountry(countryCode: string, countryName: string): LaborLawInfo {
  switch (countryCode) {
    case 'US': return US_LABOR_LAW_INFO;
    case 'PH': return PH_LABOR_LAW_INFO;
    case 'CA': return CA_LABOR_LAW_INFO;
    case 'DE': return DE_LABOR_LAW_INFO;
    case 'GB': return GB_LABOR_LAW_INFO;
    case 'AU': return AU_LABOR_LAW_INFO;
    default: return getFallbackLaborLawInfo(countryCode, countryName);
  }
}
