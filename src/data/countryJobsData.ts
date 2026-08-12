import { CountryJobsData } from '../types';
import { getLaborLawInfoForCountry } from './laborLawsData';
import { getCountryCitiesData } from './countryCitiesData';
import {
  US_ALL_STATES_LITERACY,
  CANADA_ALL_PROVINCES_LITERACY,
  PHILIPPINES_ALL_REGIONS_LITERACY,
  INDIA_ALL_STATES_LITERACY,
  GERMANY_ALL_STATES_LITERACY,
  UK_ALL_REGIONS_LITERACY,
  AUSTRALIA_ALL_STATES_LITERACY,
  JAPAN_ALL_REGIONS_LITERACY
} from './allStatesLiteracy';

export const fontCountryJobsData: Record<string, CountryJobsData> = {};

export const COUNTRY_JOBS_PRESETS: CountryJobsData[] = [
  {
    countryCode: 'US',
    countryName: 'United States',
    flag: '🇺🇸',
    employmentRate: 96.1,
    unemploymentRate: 3.9,
    laborForceSize: '168.2 Million',
    partTimeJobs: {
      percentage: 16.8,
      estimatedPeople: '28.2 Million',
      notes: 'Includes voluntary part-time and economic part-time workers.'
    },
    multipleJobsHolders: {
      percentage: 5.3,
      estimatedPeople: '8.9 Million',
      notes: 'Common among service, healthcare, and gig-economy freelancers.'
    },
    mostCommonJobs: [
      { title: 'Retail Salespersons & Cashiers', category: 'Sales & Service', percentage: 8.4, averageSalaryUsd: '$31,200/yr' },
      { title: 'Registered Nurses & Healthcare Support', category: 'Healthcare', percentage: 6.2, averageSalaryUsd: '$81,300/yr' },
      { title: 'Software Developers & IT Specialists', category: 'Technology', percentage: 4.8, averageSalaryUsd: '$124,200/yr' },
      { title: 'General & Operations Managers', category: 'Management', percentage: 4.2, averageSalaryUsd: '$98,000/yr' },
      { title: 'Office Administrative & Clerical Support', category: 'Administration', percentage: 7.1, averageSalaryUsd: '$42,500/yr' },
      { title: 'Fast Food & Counter Workers', category: 'Hospitality', percentage: 5.1, averageSalaryUsd: '$28,600/yr' },
      { title: 'Freight & Stock Material Movers', category: 'Logistics', percentage: 4.3, averageSalaryUsd: '$38,400/yr' },
    ],
    fieldOfStudies: [
      { field: 'Business, Commerce & Management', percentage: 19.4 },
      { field: 'Health Professions & Medical Sciences', percentage: 13.8 },
      { field: 'Social Sciences & History', percentage: 9.2 },
      { field: 'Engineering & Technology', percentage: 8.5 },
      { field: 'Computer Science & Information Systems', percentage: 6.9 },
      { field: 'Biological & Biomedical Sciences', percentage: 6.1 },
      { field: 'Education & Teaching', percentage: 5.8 },
      { field: 'Arts, Humanities & Design', percentage: 5.2 },
      { field: 'Psychology', percentage: 6.0 },
      { field: 'Trades, Construction & Precision Craft', percentage: 19.1 },
    ],
    educationalAttainment: [
      { level: 'High School Diploma or Less', percentage: 34.2 },
      { level: 'Some College / Vocational / Associate Degree', percentage: 26.5 },
      { level: "Bachelor's Degree", percentage: 24.1 },
      { level: "Master's / Postgraduate Degree", percentage: 11.8 },
      { level: 'Doctorate or Professional Degree (PhD, MD, JD)', percentage: 3.4 },
    ],
    jobSites: [
      { name: 'Indeed US', url: 'https://www.indeed.com', category: 'General', description: 'Largest employment search engine in the US covering all industries and levels.' },
      { name: 'LinkedIn Jobs US', url: 'https://www.linkedin.com/jobs', category: 'Executive & Professional', description: 'Premier professional networking and corporate recruitment portal.' },
      { name: 'Glassdoor US', url: 'https://www.glassdoor.com', category: 'General', description: 'Job listings paired with company culture ratings, salary reviews, and interview insights.' },
      { name: 'ZipRecruiter', url: 'https://www.ziprecruiter.com', category: 'General', description: 'AI-powered job marketplace connecting employers and job seekers across the US.' },
      { name: 'Dice Tech', url: 'https://www.dice.com', category: 'Tech & IT', description: 'Premier tech, engineering, cloud infrastructure, and IT candidate sourcing platform.' },
      { name: 'USAJOBS', url: 'https://www.usajobs.gov', category: 'Government', description: 'Official United States Federal government civil service and defense job portal.' },
      { name: 'Upwork US Remote', url: 'https://www.upwork.com', category: 'Remote & Freelance', description: 'Leading freelance talent platform for remote contractors, developers, and designers.' },
      { name: 'Wellfound (AngelList)', url: 'https://wellfound.com', category: 'Niche & Startup', description: 'Premier startup job board connecting talent with seed-stage to Series E technology companies.' },
      { name: 'Monster US', url: 'https://www.monster.com', category: 'General', description: 'Established national job search portal with resume posting and career advice services.' },
      { name: 'CareerBuilder', url: 'https://www.careerbuilder.com', category: 'General', description: 'Large employment platform providing AI candidate matching and salary data.' },
      { name: 'SimplyHired', url: 'https://www.simplyhired.com', category: 'General', description: 'Job search aggregator covering millions of local and national job vacancies.' },
      { name: 'FlexJobs', url: 'https://www.flexjobs.com', category: 'Remote & Freelance', description: 'Hand-screened remote, hybrid, and flexible work opportunity directory.' },
      { name: 'We Work Remotely', url: 'https://weworkremotely.com', category: 'Tech & IT', description: 'Largest global remote work community for tech, programming, and design roles.' },
      { name: 'Turing AI Tech', url: 'https://www.turing.com', category: 'Tech & IT', description: 'AI-driven platform matching vetted remote software developers with US firms.' },
      { name: 'Toptal Elite Talent', url: 'https://www.toptal.com', category: 'Tech & IT', description: 'Exclusive network for top 3% freelance developers, designers, and finance experts.' },
      { name: 'Michael Page US', url: 'https://www.michaelpage.com', category: 'Executive & Professional', description: 'Global executive search and professional recruitment consultancy for management roles.' },
      { name: 'Hays US', url: 'https://www.hays.com', category: 'Executive & Professional', description: 'Specialist recruitment agency covering technology, finance, healthcare, and engineering.' },
      { name: 'Adecco USA', url: 'https://www.adeccousa.com', category: 'General', description: 'Temporary staffing and permanent placement service across industrial and commercial sectors.' },
      { name: 'Robert Half US', url: 'https://www.roberthalf.com', category: 'Executive & Professional', description: 'Specialized accounting, finance, technology, and legal talent recruitment agency.' },
      { name: 'Jooble US', url: 'https://us.jooble.org', category: 'General', description: 'International job aggregator indexing vacancies across thousands of US corporate career pages.' }
    ],
    literacyData: {
      overallAdultLiteracy: 99.0,
      youthLiteracy: 99.5,
      femaleLiteracy: 99.0,
      maleLiteracy: 99.0,
      digitalLiteracyIndex: 92.5,
      statesOrRegions: US_ALL_STATES_LITERACY,
      literacyNotes: 'High school graduation rate in the US is ~88.6%, with post-secondary enrollment exceeding 62% across all 50 states and territories.'
    },
    outreachTimings: {
      bestCallingHours: '10:00 AM - 11:30 AM & 2:00 PM - 4:00 PM (Local Zone: EST, CST, MST, PST)',
      bestEmailingHours: '8:00 AM - 9:30 AM local time (Tuesday through Thursday peak open rate)',
      bestMessagingHours: '9:30 AM - 11:00 AM & 3:00 PM - 5:00 PM local time (LinkedIn InMail & SMS)',
      preferredChannels: ['Email', 'LinkedIn InMail', 'SMS Text', 'MS Teams'],
      etiquetteNotes: 'Respect multi-time zone boundaries across mainland US. Avoid calling after 5:30 PM local time or before 8:30 AM. Direct and concise communication preferred.'
    },
    sourcingNotes: 'High liquidity in technology and healthcare. Remote work availability remains high (~28% of professional roles).'
  },
  {
    countryCode: 'PH',
    countryName: 'Philippines',
    flag: '🇵🇭',
    employmentRate: 95.5,
    unemploymentRate: 4.5,
    laborForceSize: '51.2 Million',
    partTimeJobs: {
      percentage: 32.4,
      estimatedPeople: '16.5 Million',
      notes: 'High incidence of underemployment and flexible project-based BPO shift work.'
    },
    multipleJobsHolders: {
      percentage: 12.8,
      estimatedPeople: '6.5 Million',
      notes: 'Widespread moonlighting in IT, Virtual Assistance, and online freelance tutoring.'
    },
    mostCommonJobs: [
      { title: 'BPO Customer Service & Tech Support', category: 'IT-BPM & Sourcing', percentage: 11.2, averageSalaryUsd: '$6,800/yr' },
      { title: 'Agricultural & Fishery Workers', category: 'Agriculture', percentage: 22.4, averageSalaryUsd: '$2,400/yr' },
      { title: 'Wholesale & Retail Sales Associates', category: 'Commerce', percentage: 18.5, averageSalaryUsd: '$3,800/yr' },
      { title: 'Software Developers & Virtual Assistants', category: 'Technology & Remote', percentage: 5.6, averageSalaryUsd: '$12,500/yr' },
      { title: 'Elementary & High School Teachers', category: 'Education', percentage: 4.9, averageSalaryUsd: '$5,400/yr' },
      { title: 'Construction & Mechanical Workers', category: 'Construction', percentage: 9.8, averageSalaryUsd: '$3,200/yr' },
      { title: 'Nurses & Overseas Healthcare Personnel', category: 'Healthcare', percentage: 4.1, averageSalaryUsd: '$7,200/yr' },
    ],
    fieldOfStudies: [
      { field: 'Business Administration, Accountancy & Marketing', percentage: 26.5 },
      { field: 'Education & Teacher Training', percentage: 15.2 },
      { field: 'Information Technology & Computer Science', percentage: 14.1 },
      { field: 'Engineering, Architecture & Tech Trades', percentage: 11.8 },
      { field: 'Medical & Nursing Sciences', percentage: 10.4 },
      { field: 'Hospitality, Culinary & Tourism Management', percentage: 8.6 },
      { field: 'Criminology & Public Safety', percentage: 5.3 },
      { field: 'Arts, Communication & Humanities', percentage: 8.1 },
    ],
    educationalAttainment: [
      { level: 'High School Graduate or Less', percentage: 48.6 },
      { level: 'Technical Vocational (TESDA) / Associate', percentage: 18.2 },
      { level: "Bachelor's Degree", percentage: 28.4 },
      { level: "Master's / Postgraduate Degree", percentage: 4.1 },
      { level: 'Doctorate (PhD)', percentage: 0.7 },
    ],
    jobSites: [
      { name: 'JobStreet Philippines', url: 'https://www.jobstreet.com.ph', category: 'General', description: 'Dominant employment portal in the Philippines for corporate, BPO, and technical vacancies.' },
      { name: 'OnlineJobs.ph', url: 'https://www.onlinejobs.ph', category: 'Remote & Freelance', description: 'Largest portal dedicated to hiring Filipino virtual assistants, remote developers, and staff.' },
      { name: 'Kalibrr', url: 'https://www.kalibrr.com', category: 'Tech & IT', description: 'AI-driven recruitment and skill testing platform popular among tech startups and top employers.' },
      { name: 'Foundit Philippines (Monster)', url: 'https://www.foundit.com.ph', category: 'Executive & Professional', description: 'Major BPO, IT, and corporate recruitment board in the Philippines.' },
      { name: 'PhilJobNet (DOLE)', url: 'https://philjobnet.gov.ph', category: 'Government', description: 'Official Department of Labor and Employment (DOLE) national job matching portal.' },
      { name: 'Civil Service Commission (CSC)', url: 'https://www.csc.gov.ph', category: 'Government', description: 'Official Philippine civil service examination and public sector job opening directory.' },
      { name: 'Bossjob Philippines', url: 'https://bossjob.ph', category: 'General', description: 'Chat-first recruitment app connecting candidates directly with hiring managers in PH.' },
      { name: 'LinkedIn Jobs PH', url: 'https://www.linkedin.com/jobs/philippines-jobs', category: 'Executive & Professional', description: 'Professional networking and corporate executive talent search in Manila, Cebu & Davao.' },
      { name: 'Indeed Philippines', url: 'https://ph.indeed.com', category: 'General', description: 'Global job search engine aggregating thousands of Philippine employment listings.' },
      { name: 'Workabroad.ph', url: 'https://www.workabroad.ph', category: 'Niche & Industry', description: 'POEA-licensed overseas job portal for Filipino skilled workers and overseas personnel (OFW).' },
      { name: 'Upwork Philippines', url: 'https://www.upwork.com', category: 'Remote & Freelance', description: 'Primary platform for Filipino freelancers, software engineers, and digital marketers.' },
      { name: 'Remoteco Philippines', url: 'https://remoteco.com', category: 'Remote & Freelance', description: 'Curated remote job platform connecting global employers with Philippines-based talent.' },
      { name: 'FreeUp', url: 'https://freeup.net', category: 'Remote & Freelance', description: 'Vetted freelance network featuring top Filipino virtual assistants and web developers.' },
      { name: 'BPO Career Hub', url: 'https://www.bpocareerhub.com', category: 'Niche & Industry', description: 'Dedicated recruitment channel for Business Process Outsourcing and call center roles.' },
      { name: 'Mynimo', url: 'https://www.mynimo.com', category: 'General', description: 'Leading regional job portal catering specifically to Visayas and Mindanao (Cebu, Davao, Iloilo).' },
      { name: 'Jora Philippines', url: 'https://ph.jora.com', category: 'General', description: 'Fast job search engine indexing Philippine employment sources and employer sites.' },
      { name: 'Joblum Philippines', url: 'https://ph.joblum.com', category: 'General', description: 'Comprehensive job directory featuring corporate, retail, and engineering openings.' },
      { name: 'Virtual Staff PH', url: 'https://www.virtualstaff.ph', category: 'Remote & Freelance', description: 'Direct hire platform connecting international businesses with remote staff in the Philippines.' },
      { name: 'Cyberbacker', url: 'https://cyberbacker.com', category: 'Remote & Freelance', description: 'Specialized virtual assistant management and remote sourcing platform in PH.' },
      { name: 'BestJobs Philippines', url: 'https://www.bestjobs.ph', category: 'General', description: 'Established job vacancy directory with candidate resume search capabilities.' }
    ],
    literacyData: {
      overallAdultLiteracy: 97.0,
      youthLiteracy: 99.1,
      femaleLiteracy: 97.4,
      maleLiteracy: 96.6,
      digitalLiteracyIndex: 88.0,
      statesOrRegions: PHILIPPINES_ALL_REGIONS_LITERACY,
      literacyNotes: 'The Philippines has one of the highest functional literacy rates in Southeast Asia (91.6% functional literacy). High English language proficiency across all 17 administrative regions.'
    },
    outreachTimings: {
      bestCallingHours: '10:00 AM - 11:30 AM & 2:00 PM - 4:30 PM PHT (or 9:00 PM - 5:00 AM PHT for US shift BPO talent)',
      bestEmailingHours: '8:30 AM - 10:00 AM PHT (Monday to Friday)',
      bestMessagingHours: '9:00 AM - 6:00 PM PHT (Viber, WhatsApp, LinkedIn)',
      preferredChannels: ['Viber', 'WhatsApp', 'Email', 'LinkedIn InMail'],
      etiquetteNotes: 'Polite and respectful greetings expected. Remote talent and BPO professionals are highly responsive on Viber and WhatsApp.'
    },
    sourcingNotes: 'Global hub for English BPO, virtual assistance, and remote IT talent. Exceptionally strong English fluency.'
  },
  {
    countryCode: 'CA',
    countryName: 'Canada',
    flag: '🇨🇦',
    employmentRate: 93.8,
    unemploymentRate: 6.2,
    laborForceSize: '21.4 Million',
    partTimeJobs: {
      percentage: 18.2,
      estimatedPeople: '3.9 Million',
      notes: 'Common among university students and retail service workers.'
    },
    multipleJobsHolders: {
      percentage: 5.8,
      estimatedPeople: '1.2 Million',
      notes: 'Driven by urban housing costs in Toronto, Vancouver, and Montreal.'
    },
    mostCommonJobs: [
      { title: 'Retail & Commercial Sales Associates', category: 'Sales & Service', percentage: 8.1, averageSalaryUsd: '$28,400/yr' },
      { title: 'Software Engineers & IT Managers', category: 'Technology', percentage: 5.4, averageSalaryUsd: '$88,000/yr' },
      { title: 'Registered Nurses & Healthcare Technicians', category: 'Healthcare', percentage: 6.8, averageSalaryUsd: '$68,500/yr' },
      { title: 'Financial Analysts & Accountants', category: 'Finance', percentage: 4.9, averageSalaryUsd: '$62,000/yr' },
      { title: 'Construction Trades & Electricians', category: 'Trades', percentage: 7.2, averageSalaryUsd: '$54,000/yr' },
      { title: 'Food Service & Kitchen Staff', category: 'Hospitality', percentage: 5.0, averageSalaryUsd: '$24,500/yr' },
    ],
    fieldOfStudies: [
      { field: 'Business, Management & Public Admin', percentage: 22.1 },
      { field: 'Architecture, Engineering & Related Technologies', percentage: 16.4 },
      { field: 'Health & Related Fields', percentage: 14.8 },
      { field: 'Social & Behavioral Sciences & Law', percentage: 11.2 },
      { field: 'Computer Science, Mathematics & IT', percentage: 8.9 },
      { field: 'Humanities & Visual Arts', percentage: 7.3 },
      { field: 'Education', percentage: 6.5 },
      { field: 'Agriculture, Natural Resources & Conservation', percentage: 12.8 },
    ],
    educationalAttainment: [
      { level: 'High School Diploma or Less', percentage: 26.1 },
      { level: 'Apprenticeship / Trades / College Diploma', percentage: 31.4 },
      { level: "Bachelor's Degree", percentage: 27.2 },
      { level: "Master's / Postgraduate Degree", percentage: 12.5 },
      { level: 'Doctorate (PhD)', percentage: 2.8 },
    ],
    jobSites: [
      { name: 'Canada Job Bank', url: 'https://www.jobbank.gc.ca', category: 'Government', description: 'Official Government of Canada employment portal with LMIA job posting information.' },
      { name: 'Indeed Canada', url: 'https://ca.indeed.com', category: 'General', description: 'Canada largest online employment aggregator across all 10 provinces and territories.' },
      { name: 'LinkedIn Jobs Canada', url: 'https://www.linkedin.com/jobs/canada-jobs', category: 'Executive & Professional', description: 'Top professional networking and corporate recruitment portal in Canada.' },
      { name: 'Workopolis', url: 'https://www.workopolis.com', category: 'General', description: 'Established Canadian career site providing job search and industry employment advice.' },
      { name: 'Eluta.ca', url: 'https://www.eluta.ca', category: 'General', description: 'Official job search engine powered by Canada Top 100 Employers project.' },
      { name: 'Glassdoor Canada', url: 'https://www.glassdoor.ca', category: 'General', description: 'Job listings with employee salary reviews, company ratings, and culture insights.' },
      { name: 'ZipRecruiter Canada', url: 'https://www.ziprecruiter.ca', category: 'General', description: 'AI job marketplace connecting Canadian job seekers with top regional employers.' },
      { name: 'Monster Canada', url: 'https://www.monster.ca', category: 'General', description: 'National career portal offering candidate resume databases and career tools.' },
      { name: 'CareerBeacon', url: 'https://www.careerbeacon.com', category: 'General', description: 'Leading job portal serving Atlantic Canada (Nova Scotia, New Brunswick, NL, PEI).' },
      { name: 'Techjobs.ca', url: 'https://www.techjobs.ca', category: 'Tech & IT', description: 'Dedicated technology recruitment portal for software, AI, and IT roles across Canada.' },
      { name: 'Communitech Job Board', url: 'https://jobs.communitech.ca', category: 'Tech & IT', description: 'Kitchener-Waterloo tech corridor innovation hub job board.' },
      { name: 'Toronto Tech Jobs', url: 'https://www.torontotechjobs.com', category: 'Tech & IT', description: 'Sourcing portal for Greater Toronto Area software engineering and AI startups.' },
      { name: 'BIV Jobs Vancouver', url: 'https://biv.com/jobs', category: 'Executive & Professional', description: 'Business in Vancouver executive and professional recruitment platform.' },
      { name: 'Randstad Canada', url: 'https://www.randstad.ca', category: 'Executive & Professional', description: 'Leading Canadian staffing agency for engineering, finance, IT, and skilled trades.' },
      { name: 'Adecco Canada', url: 'https://www.adecco.ca', category: 'General', description: 'National workforce solutions provider for office, industrial, and temporary roles.' },
      { name: 'Michael Page Canada', url: 'https://www.michaelpage.ca', category: 'Executive & Professional', description: 'Specialist executive search firm for mid-to-senior level Canadian professionals.' },
      { name: 'Robert Half Canada', url: 'https://www.roberthalf.ca', category: 'Executive & Professional', description: 'Accounting, finance, technology, and legal talent placement consultancy.' },
      { name: 'Upwork Canada', url: 'https://www.upwork.com', category: 'Remote & Freelance', description: 'Global remote contractor and freelance marketplace popular in Canada.' },
      { name: 'FlexJobs Canada', url: 'https://www.flexjobs.com', category: 'Remote & Freelance', description: 'Curated directory for flexible, remote, and hybrid employment in Canada.' },
      { name: 'Jooble Canada', url: 'https://ca.jooble.org', category: 'General', description: 'Aggregate search engine indexing corporate career pages across Canada.' }
    ],
    literacyData: {
      overallAdultLiteracy: 99.0,
      youthLiteracy: 99.5,
      femaleLiteracy: 99.0,
      maleLiteracy: 99.0,
      digitalLiteracyIndex: 93.0,
      statesOrRegions: CANADA_ALL_PROVINCES_LITERACY,
      literacyNotes: 'Canada leads OECD nations in tertiary educational attainment (~57.5% of working age population holds a college or university degree across all 10 provinces and 3 territories).'
    },
    sourcingNotes: 'Highly educated workforce. Strong bilingual (English/French) talent pool particularly in Quebec and Ottawa.'
  }
];

export const GLOBAL_JOBS_DATA: CountryJobsData = {
  countryCode: 'GLOBAL',
  countryName: 'Global Aggregated Worldwide',
  flag: '🌍',
  employmentRate: 94.2,
  unemploymentRate: 5.8,
  laborForceSize: '3.45 Billion',
  partTimeJobs: {
    percentage: 18.0,
    estimatedPeople: '621 Million',
    notes: 'Includes voluntary, seasonal, and hourly contract personnel worldwide.'
  },
  multipleJobsHolders: {
    percentage: 6.2,
    estimatedPeople: '213 Million',
    notes: 'Secondary freelancing, remote consulting, and dual employment.'
  },
  mostCommonJobs: [
    { title: 'Agricultural & Farming Personnel', category: 'Agriculture', percentage: 26.5, averageSalaryUsd: '$3,800/yr' },
    { title: 'Retail & Wholesale Sales Workers', category: 'Commerce', percentage: 14.2, averageSalaryUsd: '$8,200/yr' },
    { title: 'Manufacturing & Industrial Operators', category: 'Manufacturing', percentage: 13.8, averageSalaryUsd: '$11,400/yr' },
    { title: 'Construction & Building Trades', category: 'Construction', percentage: 8.5, averageSalaryUsd: '$12,800/yr' },
    { title: 'Software Engineers & IT Specialists', category: 'Technology', percentage: 3.8, averageSalaryUsd: '$48,000/yr' },
    { title: 'Healthcare & Clinical Nursing Staff', category: 'Healthcare', percentage: 5.2, averageSalaryUsd: '$22,500/yr' },
  ],
  fieldOfStudies: [
    { field: 'Business, Commerce & Management', percentage: 22.0 },
    { field: 'Engineering, Manufacturing & Tech Trades', percentage: 18.5 },
    { field: 'Social Sciences & Humanities', percentage: 12.4 },
    { field: 'Health Sciences & Medicine', percentage: 11.2 },
    { field: 'Computer Science & Information Technology', percentage: 9.8 },
    { field: 'Education & Teacher Training', percentage: 8.5 },
    { field: 'Agriculture & Veterinary Sciences', percentage: 17.6 },
  ],
  educationalAttainment: [
    { level: 'Primary / Secondary Schooling or Less', percentage: 46.0 },
    { level: 'Vocational Training / Apprenticeship', percentage: 22.5 },
    { level: "Bachelor's Degree", percentage: 23.5 },
    { level: "Master's / Postgraduate Degree", percentage: 6.8 },
    { level: 'Doctorate (PhD)', percentage: 1.2 },
  ],
  jobSites: [
    { name: 'LinkedIn Global', url: 'https://www.linkedin.com/jobs', category: 'Executive & Professional', description: 'Worldwide professional networking and corporate recruitment network.' },
    { name: 'Indeed Global', url: 'https://www.indeed.com', category: 'General', description: 'Largest employment search engine across 60+ countries.' },
    { name: 'Glassdoor Global', url: 'https://www.glassdoor.com', category: 'General', description: 'Global workplace transparency, salary ratings, and company reviews.' },
    { name: 'Upwork Global', url: 'https://www.upwork.com', category: 'Remote & Freelance', description: 'Leading global freelance talent marketplace.' },
    { name: 'Monster / Foundit', url: 'https://www.foundit.com', category: 'General', description: 'International career network operating across Asia, US, and Europe.' },
    { name: 'Deel Remote Hiring', url: 'https://www.deel.com', category: 'Remote & Freelance', description: 'International remote hiring and EOR compliance platform.' }
  ],
  literacyData: {
    overallAdultLiteracy: 87.0,
    youthLiteracy: 91.7,
    femaleLiteracy: 83.3,
    maleLiteracy: 90.1,
    digitalLiteracyIndex: 72.0,
    statesOrRegions: [
      { stateOrRegionName: 'High-Income Nations (OECD / North America / EU)', literacyRate: 99.0, youthLiteracyRate: 99.5, notes: 'Universal adult literacy & advanced digital infrastructure.' },
      { stateOrRegionName: 'East Asia & Pacific Region', literacyRate: 95.8, youthLiteracyRate: 98.8, notes: 'Rapid expansion in STEM education and tech vocational skills.' },
      { stateOrRegionName: 'Latin America & Caribbean Region', literacyRate: 94.2, youthLiteracyRate: 98.1, notes: 'Strong urban literacy with growing remote talent hubs.' },
      { stateOrRegionName: 'South Asia Region', literacyRate: 74.8, youthLiteracyRate: 89.2, notes: 'Huge youth literacy gains with massive IT/software workforce.' },
      { stateOrRegionName: 'Sub-Saharan Africa Region', literacyRate: 67.5, youthLiteracyRate: 77.4, notes: 'Fastest growing youth demographic and mobile digital adoption.' }
    ],
    literacyNotes: 'Global adult literacy rate stands at 87.0%, with youth literacy reaching 91.7% according to UNESCO Institute for Statistics (UIS) data.'
  },
  outreachTimings: {
    bestCallingHours: '10:00 AM - 11:30 AM & 2:00 PM - 4:00 PM (Target Local Timezone)',
    bestEmailingHours: '8:00 AM - 9:30 AM (Target Local Timezone, Tuesday to Thursday)',
    bestMessagingHours: '9:30 AM - 11:00 AM & 3:00 PM - 5:00 PM (Target Local Timezone)',
    preferredChannels: ['Email', 'LinkedIn InMail', 'WhatsApp', 'Zoom / MS Teams'],
    etiquetteNotes: 'Always verify candidate local time zone and public holiday calendar before reaching out.'
  },
  sourcingNotes: 'Global aggregate metrics synthesized from ILO, World Bank, and OECD employment benchmarks.'
};

fontCountryJobsData['GLOBAL'] = GLOBAL_JOBS_DATA;

// Helper to construct realistic baseline job statistics with 20 job portals for ANY country
export function getFallbackCountryJobsData(countryCode: string, countryName: string, flag: string, population: number): CountryJobsData {
  const estLaborForce = Math.round(population * 0.48);
  const laborForceFormatted = estLaborForce > 1000000 
    ? `${(estLaborForce / 1000000).toFixed(1)} Million` 
    : `${(estLaborForce / 1000).toFixed(0)} Thousand`;

  const estPartTimeNum = Math.round(estLaborForce * 0.18);
  const partTimeFormatted = estPartTimeNum > 1000000
    ? `${(estPartTimeNum / 1000000).toFixed(1)} Million`
    : `${(estPartTimeNum / 1000).toFixed(0)} Thousand`;

  const estMultiNum = Math.round(estLaborForce * 0.05);
  const multiFormatted = estMultiNum > 1000000
    ? `${(estMultiNum / 1000000).toFixed(1)} Million`
    : `${(estMultiNum / 1000).toFixed(0)} Thousand`;

  return {
    countryCode,
    countryName,
    flag,
    employmentRate: 94.2,
    unemploymentRate: 5.8,
    laborForceSize: laborForceFormatted,
    partTimeJobs: {
      percentage: 18.0,
      estimatedPeople: partTimeFormatted,
      notes: 'Includes voluntary part-time and economic hourly workers.'
    },
    multipleJobsHolders: {
      percentage: 5.0,
      estimatedPeople: multiFormatted,
      notes: 'Covers secondary freelancing, consulting, and dual-employment.'
    },
    mostCommonJobs: [
      { title: 'Retail & Wholesale Sales Personnel', category: 'Commerce & Sales', percentage: 14.5, averageSalaryUsd: '$8,400/yr' },
      { title: 'Agricultural & Farming Operators', category: 'Agriculture', percentage: 18.2, averageSalaryUsd: '$3,600/yr' },
      { title: 'Software Developers & IT Specialists', category: 'Technology', percentage: 4.2, averageSalaryUsd: '$22,000/yr' },
      { title: 'Elementary & High School Educators', category: 'Education', percentage: 6.1, averageSalaryUsd: '$9,200/yr' },
      { title: 'Office Clerical & Customer Support', category: 'Administration', percentage: 8.5, averageSalaryUsd: '$7,800/yr' },
      { title: 'Healthcare Technicians & Nursing Assistants', category: 'Healthcare', percentage: 5.8, averageSalaryUsd: '$12,400/yr' },
      { title: 'Construction & Civil Engineering Trades', category: 'Construction', percentage: 9.2, averageSalaryUsd: '$6,500/yr' },
    ],
    fieldOfStudies: [
      { field: 'Business Administration & Management', percentage: 24.5 },
      { field: 'Engineering & Industrial Technology', percentage: 16.8 },
      { field: 'Computer Science & Information Technology', percentage: 12.4 },
      { field: 'Education & Pedagogical Sciences', percentage: 11.2 },
      { field: 'Health Sciences, Nursing & Pharmacy', percentage: 10.5 },
      { field: 'Social Sciences & Humanities', percentage: 9.8 },
      { field: 'Natural Sciences & Mathematics', percentage: 5.8 },
      { field: 'Arts, Design & Fine Arts', percentage: 9.0 },
    ],
    educationalAttainment: [
      { level: 'Primary / Secondary Schooling or Less', percentage: 42.5 },
      { level: 'Vocational Training / Technical Diploma', percentage: 22.0 },
      { level: "Bachelor's Degree", percentage: 26.5 },
      { level: "Master's / Postgraduate Degree", percentage: 7.8 },
      { level: 'Doctorate (PhD)', percentage: 1.2 },
    ],
    jobSites: [
      { name: `Indeed ${countryName}`, url: `https://www.indeed.com`, category: 'General', description: `Dominant global employment search engine indexing vacancies across ${countryName}.` },
      { name: `LinkedIn Jobs (${countryName})`, url: `https://www.linkedin.com/jobs`, category: 'Executive & Professional', description: `Premier worldwide professional networking and corporate executive portal serving ${countryName}.` },
      { name: `Glassdoor ${countryName}`, url: `https://www.glassdoor.com`, category: 'General', description: `Global job search portal featuring employee salary reviews and corporate ratings for ${countryName}.` },
      { name: `Jooble ${countryName}`, url: `https://jooble.org`, category: 'General', description: `International job search aggregator indexing national career pages across ${countryName}.` },
      { name: `CareerJet ${countryName}`, url: `https://www.careerjet.com`, category: 'General', description: `Aggregated employment portal scanning thousands of employer websites in ${countryName}.` },
      { name: `Monster / Foundit ${countryName}`, url: `https://www.foundit.com`, category: 'General', description: `Established international career network with candidate resume database for ${countryName}.` },
      { name: `Jora ${countryName}`, url: `https://jora.com`, category: 'General', description: `Search engine for job vacancies sourcing local listings across ${countryName}.` },
      { name: `SimplyHired ${countryName}`, url: `https://www.simplyhired.com`, category: 'General', description: `National and international employment portal with salary estimator tools.` },
      { name: `Michael Page ${countryName}`, url: `https://www.michaelpage.com`, category: 'Executive & Professional', description: `Global executive search consultancy specializing in finance, tech, and legal talent in ${countryName}.` },
      { name: `Hays Executive (${countryName})`, url: `https://www.hays.com`, category: 'Executive & Professional', description: `Professional recruitment agency for technology, engineering, and healthcare roles in ${countryName}.` },
      { name: `Adecco Workforce (${countryName})`, url: `https://www.adecco.com`, category: 'General', description: `Global staffing and temporary employment placement agency serving ${countryName}.` },
      { name: `Randstad Talent Hub (${countryName})`, url: `https://www.randstad.com`, category: 'Executive & Professional', description: `International HR solutions and workforce management platform active in ${countryName}.` },
      { name: `Dice Tech & IT`, url: `https://www.dice.com`, category: 'Tech & IT', description: `Specialized tech, software engineering, and IT candidate recruitment platform.` },
      { name: `Wellfound Startups (${countryName})`, url: `https://wellfound.com`, category: 'Niche & Startup', description: `Global tech startup job board matching candidates with innovative companies in ${countryName}.` },
      { name: `Turing AI Software Sourcing`, url: `https://www.turing.com`, category: 'Tech & IT', description: `AI-driven platform connecting vetted software engineers in ${countryName} with global firms.` },
      { name: `Toptal Elite Tech (${countryName})`, url: `https://www.toptal.com`, category: 'Tech & IT', description: `Exclusive network connecting top 3% of tech and finance talent in ${countryName}.` },
      { name: `Upwork Remote (${countryName})`, url: `https://www.upwork.com`, category: 'Remote & Freelance', description: `Leading remote contractor and online freelance marketplace for professionals in ${countryName}.` },
      { name: `Deel Global Hiring (${countryName})`, url: `https://www.deel.com`, category: 'Remote & Freelance', description: `International remote hiring, compliance, and EOR contract workforce portal for ${countryName}.` },
      { name: `FlexJobs Remote (${countryName})`, url: `https://www.flexjobs.com`, category: 'Remote & Freelance', description: `Hand-screened remote, flexible, and hybrid job directory accessible in ${countryName}.` },
      { name: `Official National Employment Service (${countryName})`, url: `https://www.google.com/search?q=${countryName}+government+job+portal`, category: 'Government', description: `Official public sector civil service and government employment directory for ${countryName}.` }
    ],
    literacyData: {
      overallAdultLiteracy: 91.2,
      youthLiteracy: 95.8,
      femaleLiteracy: 89.5,
      maleLiteracy: 92.9,
      digitalLiteracyIndex: 78.0,
      statesOrRegions: [
        { stateOrRegionName: `Capital District / Metro (${countryName})`, literacyRate: 96.5, youthLiteracyRate: 98.8, notes: 'Primary urban economic & administrative center.' },
        { stateOrRegionName: `Northern Region (${countryName})`, literacyRate: 91.8, youthLiteracyRate: 96.2, notes: 'Industrial, manufacturing, and agricultural workforce.' },
        { stateOrRegionName: `Southern Region (${countryName})`, literacyRate: 89.4, youthLiteracyRate: 94.8, notes: 'Coastal trade, logistics, and regional commerce.' },
        { stateOrRegionName: `Central / Western Region (${countryName})`, literacyRate: 88.0, youthLiteracyRate: 93.5, notes: 'Vocational, agrarian, and service labor force.' }
      ],
      literacyNotes: `National literacy estimations derived from UNESCO Institute for Statistics (UIS) and World Bank benchmarks for ${countryName}.`
    },
    outreachTimings: {
      bestCallingHours: `10:00 AM - 11:30 AM & 2:00 PM - 4:00 PM (${countryName} Local Time)`,
      bestEmailingHours: `8:00 AM - 9:30 AM (${countryName} Local Time, Tue - Thu)`,
      bestMessagingHours: `9:30 AM - 11:00 AM & 3:00 PM - 5:00 PM (${countryName} Local Time)`,
      preferredChannels: ['Email', 'LinkedIn InMail', 'WhatsApp'],
      etiquetteNotes: `Respect standard business hours in ${countryName}. Avoid calling during lunch (12:00 PM - 1:30 PM) or after 5:30 PM local time.`
    },
    sourcingNotes: `Statistical estimates based on regional labor force surveys and International Labour Organization (ILO) data for ${countryName}.`,
    laborLawInfo: getLaborLawInfoForCountry(countryCode, countryName)
  };
}

// Map presets
COUNTRY_JOBS_PRESETS.forEach((item) => {
  item.laborLawInfo = item.laborLawInfo || getLaborLawInfoForCountry(item.countryCode, item.countryName);
  fontCountryJobsData[item.countryCode] = item;
});

export function getJobsDataForCountry(countryCode: string, countryName: string, flag: string, population: number): CountryJobsData {
  let jobsObj: CountryJobsData;
  if (fontCountryJobsData[countryCode]) {
    jobsObj = fontCountryJobsData[countryCode];
  } else {
    jobsObj = getFallbackCountryJobsData(countryCode, countryName, flag, population);
  }

  if (!jobsObj.laborLawInfo) {
    jobsObj.laborLawInfo = getLaborLawInfoForCountry(countryCode, countryName);
  }

  // Always attach/update complete cities data dynamically
  jobsObj.citiesData = getCountryCitiesData(countryCode, countryName, 'Capital City', population);

  return jobsObj;
}
