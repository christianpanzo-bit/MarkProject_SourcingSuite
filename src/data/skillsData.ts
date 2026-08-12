import { SkillItem, StateSkillBreakdown, CountrySkillData, Region } from '../types';
import { COUNTRIES_DATA } from './countries';

// -------------------------------------------------------------
// EXPANDED BROAD SKILL CATEGORIES (Covering All Major Workforce Sectors)
// -------------------------------------------------------------
export const SKILL_CATEGORIES = [
  'All Categories',
  'Software & Cloud Systems',
  'AI & Data Science',
  'Cybersecurity & Network Security',
  'Engineering & Physical Sciences',
  'Healthcare & Life Sciences',
  'Finance, Accounting & Banking',
  'Legal, Compliance & Risk',
  'Supply Chain, Logistics & Aviation',
  'Construction, Architecture & Trades',
  'Energy, Renewables & Mining',
  'Manufacturing & Industrial Automation',
  'Sales, Marketing & E-Commerce',
  'Human Resources & Operations',
  'Design, Creative & Media',
  'Education & Academic Research',
] as const;

// Helper to format numbers cleanly
export function formatNumber(num: number): string {
  if (num >= 1_000_000) {
    return `${(num / 1_000_000).toFixed(2)}M`;
  }
  if (num >= 1_000) {
    return `${(num / 1_000).toFixed(0)}K`;
  }
  return num.toString();
}

// -------------------------------------------------------------
// US STATES DATA DEFINITION (50 States + DC + PR)
// -------------------------------------------------------------
const US_STATES = [
  { code: 'CA', name: 'California', hub: 'San Francisco & Silicon Valley', popWeight: 1.0, hubs: ['San Francisco', 'San Jose', 'Los Angeles', 'San Diego', 'Sacramento'], salMult: 1.35 },
  { code: 'TX', name: 'Texas', hub: 'Austin & Dallas-Fort Worth', popWeight: 0.85, hubs: ['Austin', 'Dallas', 'Houston', 'San Antonio', 'Plano'], salMult: 1.15 },
  { code: 'NY', name: 'New York', hub: 'New York City Metropolitan', popWeight: 0.82, hubs: ['New York City', 'Albany', 'Buffalo', 'Rochester', 'Syracuse'], salMult: 1.32 },
  { code: 'FL', name: 'Florida', hub: 'Miami & Orlando Innovation Hubs', popWeight: 0.70, hubs: ['Miami', 'Orlando', 'Tampa', 'Jacksonville', 'Fort Lauderdale'], salMult: 1.05 },
  { code: 'IL', name: 'Illinois', hub: 'Chicago Tech Center', popWeight: 0.55, hubs: ['Chicago', 'Evanston', 'Schaumburg', 'Peoria', 'Naperville'], salMult: 1.18 },
  { code: 'PA', name: 'Pennsylvania', hub: 'Philadelphia & Pittsburgh Robotics Corridor', popWeight: 0.50, hubs: ['Philadelphia', 'Pittsburgh', 'King of Prussia', 'Allentown'], salMult: 1.12 },
  { code: 'OH', name: 'Ohio', hub: 'Columbus & Cleveland Tech Hub', popWeight: 0.42, hubs: ['Columbus', 'Cleveland', 'Cincinnati', 'Dayton', 'Akron'], salMult: 1.02 },
  { code: 'GA', name: 'Georgia', hub: 'Atlanta Fintech Alley', popWeight: 0.48, hubs: ['Atlanta', 'Alpharetta', 'Savannah', 'Duluth', 'Marietta'], salMult: 1.10 },
  { code: 'NC', name: 'North Carolina', hub: 'Research Triangle Park (Raleigh-Durham)', popWeight: 0.52, hubs: ['Raleigh', 'Durham', 'Charlotte', 'Chapel Hill', 'Greensboro'], salMult: 1.12 },
  { code: 'MI', name: 'Michigan', hub: 'Detroit Mobility & Ann Arbor AI Hub', popWeight: 0.40, hubs: ['Detroit', 'Ann Arbor', 'Grand Rapids', 'Lansing'], salMult: 1.05 },
  { code: 'NJ', name: 'New Jersey', hub: 'Jersey City & Princeton Life Sciences', popWeight: 0.46, hubs: ['Jersey City', 'Princeton', 'Newark', 'Hoboken', 'Bridgewater'], salMult: 1.25 },
  { code: 'VA', name: 'Virginia', hub: 'Northern Virginia Cloud & Cybersecurity Hub', popWeight: 0.58, hubs: ['Arlington', 'Reston', 'McLean', 'Richmond', 'Tysons'], salMult: 1.28 },
  { code: 'WA', name: 'Washington', hub: 'Greater Seattle Cloud & Tech Hub', popWeight: 0.65, hubs: ['Seattle', 'Bellevue', 'Redmond', 'Spokane', 'Tacoma'], salMult: 1.38 },
  { code: 'AZ', name: 'Arizona', hub: 'Phoenix Semiconductor & Cloud Hub', popWeight: 0.38, hubs: ['Phoenix', 'Scottsdale', 'Tempe', 'Tucson', 'Chandler'], salMult: 1.05 },
  { code: 'MA', name: 'Massachusetts', hub: 'Boston & Cambridge Biotech / AI Corridor', popWeight: 0.62, hubs: ['Boston', 'Cambridge', 'Waltham', 'Worcester', 'Burlington'], salMult: 1.36 },
  { code: 'TN', name: 'Tennessee', hub: 'Nashville Healthcare & Music Tech Hub', popWeight: 0.32, hubs: ['Nashville', 'Memphis', 'Knoxville', 'Chattanooga'], salMult: 1.02 },
  { code: 'IN', name: 'Indiana', hub: 'Indianapolis AgTech & Logistics', popWeight: 0.30, hubs: ['Indianapolis', 'West Lafayette', 'Bloomington', 'Fort Wayne'], salMult: 0.98 },
  { code: 'MO', name: 'Missouri', hub: 'St. Louis AgTech & Kansas City Finance', popWeight: 0.30, hubs: ['St. Louis', 'Kansas City', 'Columbia', 'Springfield'], salMult: 1.00 },
  { code: 'MD', name: 'Maryland', hub: 'Bethesda Biotech & Fort Meade Cyber', popWeight: 0.44, hubs: ['Bethesda', 'Baltimore', 'Silver Spring', 'Columbia', 'Rockville'], salMult: 1.22 },
  { code: 'WI', name: 'Wisconsin', hub: 'Madison Healthcare Software & Milwaukee', popWeight: 0.28, hubs: ['Milwaukee', 'Madison', 'Green Bay', 'Appleton'], salMult: 1.02 },
  { code: 'CO', name: 'Colorado', hub: 'Denver & Boulder Aerospace Tech Hub', popWeight: 0.48, hubs: ['Denver', 'Boulder', 'Colorado Springs', 'Fort Collins'], salMult: 1.20 },
  { code: 'MN', name: 'Minnesota', hub: 'Minneapolis Medical Devices & Tech', popWeight: 0.35, hubs: ['Minneapolis', 'St. Paul', 'Rochester', 'Bloomington'], salMult: 1.10 },
  { code: 'SC', name: 'South Carolina', hub: 'Charleston Silicon Harbor & Greenville', popWeight: 0.25, hubs: ['Charleston', 'Greenville', 'Columbia', 'Spartanburg'], salMult: 0.98 },
  { code: 'AL', name: 'Alabama', hub: 'Huntsville Defense & Tech Hub', popWeight: 0.22, hubs: ['Huntsville', 'Birmingham', 'Mobile', 'Montgomery'], salMult: 0.96 },
  { code: 'LA', name: 'Louisiana', hub: 'New Orleans Technology & Digital Media', popWeight: 0.20, hubs: ['New Orleans', 'Baton Rouge', 'Lafayette', 'Shreveport'], salMult: 0.95 },
  { code: 'KY', name: 'Kentucky', hub: 'Louisville Logistics & Lexington Biotech', popWeight: 0.20, hubs: ['Louisville', 'Lexington', 'Bowling Green'], salMult: 0.94 },
  { code: 'OR', name: 'Oregon', hub: 'Portland Silicon Forest', popWeight: 0.34, hubs: ['Portland', 'Hillsboro', 'Eugene', 'Bend'], salMult: 1.15 },
  { code: 'OK', name: 'Oklahoma', hub: 'Oklahoma City Aerospace & Energy Tech', popWeight: 0.18, hubs: ['Oklahoma City', 'Tulsa', 'Norman'], salMult: 0.94 },
  { code: 'CT', name: 'Connecticut', hub: 'Stamford Financial & Hartford Insurance', popWeight: 0.28, hubs: ['Stamford', 'Hartford', 'New Haven', 'Greenwich'], salMult: 1.22 },
  { code: 'UT', name: 'Utah', hub: 'Silicon Slopes (Salt Lake - Lehi - Provo)', popWeight: 0.40, hubs: ['Salt Lake City', 'Provo', 'Lehi', 'Orem', 'Ogden'], salMult: 1.14 },
  { code: 'IA', name: 'Iowa', hub: 'Des Moines Insurance & Ames AgTech', popWeight: 0.18, hubs: ['Des Moines', 'Iowa City', 'Ames', 'Cedar Rapids'], salMult: 0.95 },
  { code: 'NV', name: 'Nevada', hub: 'Las Vegas Gaming & Tech Hub', popWeight: 0.22, hubs: ['Las Vegas', 'Reno', 'Henderson', 'Carson City'], salMult: 1.05 },
  { code: 'AR', name: 'Arkansas', hub: 'Bentonville Retail Tech & Supply Chain', popWeight: 0.18, hubs: ['Bentonville', 'Little Rock', 'Fayetteville', 'Rogers'], salMult: 0.95 },
  { code: 'MS', name: 'Mississippi', hub: 'Jackson & Gulf Coast Cyber Center', popWeight: 0.12, hubs: ['Jackson', 'Biloxi', 'Hattiesburg'], salMult: 0.90 },
  { code: 'KS', name: 'Kansas', hub: 'Overland Park Telecommunications & Tech', popWeight: 0.18, hubs: ['Overland Park', 'Wichita', 'Olathe', 'Lawrence'], salMult: 0.96 },
  { code: 'NM', name: 'New Mexico', hub: 'Albuquerque & Los Alamos National Labs', popWeight: 0.15, hubs: ['Albuquerque', 'Santa Fe', 'Los Alamos'], salMult: 0.98 },
  { code: 'NE', name: 'Nebraska', hub: 'Omaha Financial Tech Corridor', popWeight: 0.16, hubs: ['Omaha', 'Lincoln', 'Bellevue'], salMult: 0.96 },
  { code: 'ID', name: 'Idaho', hub: 'Boise Semiconductor & Tech Hub', popWeight: 0.20, hubs: ['Boise', 'Meridian', 'Idaho Falls', 'Nampa'], salMult: 1.02 },
  { code: 'WV', name: 'West Virginia', hub: 'Morgantown & Charleston Tech Centers', popWeight: 0.10, hubs: ['Morgantown', 'Charleston', 'Huntington'], salMult: 0.90 },
  { code: 'HI', name: 'Hawaii', hub: 'Honolulu Tech & Oceanography Hub', popWeight: 0.12, hubs: ['Honolulu', 'Hilo', 'Kailua'], salMult: 1.10 },
  { code: 'NH', name: 'New Hampshire', hub: 'Nashua & Manchester High-Tech Region', popWeight: 0.18, hubs: ['Manchester', 'Nashua', 'Portsmouth', 'Concord'], salMult: 1.12 },
  { code: 'ME', name: 'Maine', hub: 'Portland Technology Corridor', popWeight: 0.12, hubs: ['Portland', 'Bangor', 'Augusta'], salMult: 1.00 },
  { code: 'RI', name: 'Rhode Island', hub: 'Providence Innovation District', popWeight: 0.14, hubs: ['Providence', 'Warwick', 'Cranston'], salMult: 1.10 },
  { code: 'MT', name: 'Montana', hub: 'Bozeman High Tech Cluster', popWeight: 0.12, hubs: ['Bozeman', 'Missoula', 'Billings', 'Helena'], salMult: 1.02 },
  { code: 'DE', name: 'Delaware', hub: 'Wilmington Financial & Legal Tech Hub', popWeight: 0.16, hubs: ['Wilmington', 'Newark', 'Dover'], salMult: 1.15 },
  { code: 'SD', name: 'South Dakota', hub: 'Sioux Falls Financial Hub', popWeight: 0.10, hubs: ['Sioux Falls', 'Rapid City', 'Aberdeen'], salMult: 0.92 },
  { code: 'ND', name: 'North Dakota', hub: 'Fargo Tech Innovation Center', popWeight: 0.10, hubs: ['Fargo', 'Bismarck', 'Grand Forks'], salMult: 0.94 },
  { code: 'AK', name: 'Alaska', hub: 'Anchorage Energy & Geospatial Hub', popWeight: 0.08, hubs: ['Anchorage', 'Fairbanks', 'Juneau'], salMult: 1.05 },
  { code: 'VT', name: 'Vermont', hub: 'Burlington Green Tech Corridor', popWeight: 0.09, hubs: ['Burlington', 'South Burlington', 'Montpelier'], salMult: 1.02 },
  { code: 'WY', name: 'Wyoming', hub: 'Cheyenne Crypto & Data Hub', popWeight: 0.07, hubs: ['Cheyenne', 'Jackson', 'Casper'], salMult: 0.96 },
  { code: 'DC', name: 'District of Columbia', hub: 'Washington DC Federal Policy & Cyber', popWeight: 0.35, hubs: ['Washington DC'], salMult: 1.35 },
  { code: 'PR', name: 'Puerto Rico', hub: 'San Juan Life Sciences & Tech Hub', popWeight: 0.15, hubs: ['San Juan', 'Guaynabo', 'Bayamón', 'Mayagüez'], salMult: 0.75 },
];

// -------------------------------------------------------------
// AUSTRALIA STATES DATA DEFINITION (8 States & Territories)
// -------------------------------------------------------------
const AU_STATES = [
  { code: 'NSW', name: 'New South Wales', hub: 'Sydney Global Hub', popWeight: 1.0, hubs: ['Sydney', 'Parramatta', 'Newcastle', 'Wollongong'], salMult: 1.15 },
  { code: 'VIC', name: 'Victoria', hub: 'Melbourne Creative & Tech District', popWeight: 0.88, hubs: ['Melbourne', 'Geelong', 'Ballarat', 'Bendigo'], salMult: 1.10 },
  { code: 'QLD', name: 'Queensland', hub: 'Brisbane & Gold Coast Hub', popWeight: 0.65, hubs: ['Brisbane', 'Gold Coast', 'Sunshine Coast', 'Cairns'], salMult: 1.00 },
  { code: 'WA', name: 'Western Australia', hub: 'Perth Mining & Energy Hub', popWeight: 0.45, hubs: ['Perth', 'Fremantle', 'Bunbury', 'Kalgoorlie'], salMult: 1.12 },
  { code: 'SA', name: 'South Australia', hub: 'Adelaide Defence & Tech Ecosystem', popWeight: 0.30, hubs: ['Adelaide', 'Mount Gambier', 'Whyalla'], salMult: 0.95 },
  { code: 'TAS', name: 'Tasmania', hub: 'Hobart Maritime & Agriculture', popWeight: 0.12, hubs: ['Hobart', 'Launceston', 'Devonport'], salMult: 0.90 },
  { code: 'ACT', name: 'Australian Capital Territory', hub: 'Canberra Government & Defence Hub', popWeight: 0.22, hubs: ['Canberra'], salMult: 1.20 },
  { code: 'NT', name: 'Northern Territory', hub: 'Darwin Regional Logistics Hub', popWeight: 0.08, hubs: ['Darwin', 'Alice Springs', 'Palmerston'], salMult: 1.02 },
];

// -------------------------------------------------------------
// CANADA PROVINCES DATA DEFINITION (13 Provinces & Territories)
// -------------------------------------------------------------
const CA_PROVINCES = [
  { code: 'ON', name: 'Ontario', hub: 'Toronto - Waterloo Innovation Corridor', popWeight: 1.0, hubs: ['Toronto', 'Waterloo', 'Ottawa', 'Mississauga', 'Markham'], salMult: 1.15 },
  { code: 'QC', name: 'Quebec', hub: 'Montreal Aerospace & Tech Capital', popWeight: 0.72, hubs: ['Montreal', 'Quebec City', 'Laval', 'Gatineau', 'Sherbrooke'], salMult: 1.05 },
  { code: 'BC', name: 'British Columbia', hub: 'Vancouver Cascadia Tech Hub', popWeight: 0.60, hubs: ['Vancouver', 'Victoria', 'Burnaby', 'Kelowna', 'Surrey'], salMult: 1.12 },
  { code: 'AB', name: 'Alberta', hub: 'Calgary & Edmonton Industrial Hub', popWeight: 0.48, hubs: ['Calgary', 'Edmonton', 'Lethbridge', 'Red Deer'], salMult: 1.10 },
  { code: 'MB', name: 'Manitoba', hub: 'Winnipeg Agriculture & Transport', popWeight: 0.22, hubs: ['Winnipeg', 'Brandon', 'Steinbach'], salMult: 0.92 },
  { code: 'SK', name: 'Saskatchewan', hub: 'Saskatoon AgBio & Mining Tech', popWeight: 0.18, hubs: ['Saskatoon', 'Regina', 'Moose Jaw'], salMult: 0.94 },
  { code: 'NS', name: 'Nova Scotia', hub: 'Halifax Maritime Gateway', popWeight: 0.20, hubs: ['Halifax', 'Sydney', 'Dartmouth'], salMult: 0.92 },
  { code: 'NB', name: 'New Brunswick', hub: 'Fredericton & Moncton Hub', popWeight: 0.14, hubs: ['Fredericton', 'Moncton', 'Saint John'], salMult: 0.90 },
  { code: 'NL', name: 'Newfoundland and Labrador', hub: 'St. John’s Ocean & Energy Corridor', popWeight: 0.12, hubs: ['St. John’s', 'Corner Brook', 'Mount Pearl'], salMult: 0.92 },
  { code: 'PE', name: 'Prince Edward Island', hub: 'Charlottetown BioTech Center', popWeight: 0.08, hubs: ['Charlottetown', 'Summerside'], salMult: 0.88 },
  { code: 'YT', name: 'Yukon', hub: 'Whitehorse Mining & Resource Center', popWeight: 0.05, hubs: ['Whitehorse'], salMult: 1.05 },
  { code: 'NT', name: 'Northwest Territories', hub: 'Yellowknife Geospatial & Energy', popWeight: 0.05, hubs: ['Yellowknife'], salMult: 1.10 },
  { code: 'NU', name: 'Nunavut', hub: 'Iqaluit Arctic Logistics Hub', popWeight: 0.04, hubs: ['Iqaluit'], salMult: 1.12 },
];

// -------------------------------------------------------------
// UK NATIONS & REGIONS DATA DEFINITION (8 Regions)
// -------------------------------------------------------------
const UK_NATIONS = [
  { code: 'ENG-LON', name: 'Greater London', hub: 'London Financial & Tech Center', popWeight: 1.0, hubs: ['City of London', 'Canary Wharf', 'Shoreditch', 'Camden'], salMult: 1.35 },
  { code: 'ENG-SE', name: 'South East England', hub: 'Oxford & Reading Innovation Corridor', popWeight: 0.85, hubs: ['Oxford', 'Reading', 'Milton Keynes', 'Guildford', 'Brighton'], salMult: 1.20 },
  { code: 'ENG-[#4B286D]', name: 'North West England', hub: 'Manchester Digital City', popWeight: 0.70, hubs: ['Manchester', 'Liverpool', 'Salford', 'Preston'], salMult: 1.05 },
  { code: 'SCT', name: 'Scotland', hub: 'Edinburgh Financial & Glasgow Engineering', popWeight: 0.65, hubs: ['Edinburgh', 'Glasgow', 'Aberdeen', 'Dundee'], salMult: 1.08 },
  { code: 'ENG-WM', name: 'West Midlands', hub: 'Birmingham Manufacturing & Automotive Hub', popWeight: 0.60, hubs: ['Birmingham', 'Coventry', 'Wolverhampton'], salMult: 1.02 },
  { code: 'ENG-YORK', name: 'Yorkshire and the Humber', hub: 'Leeds Financial & Tech Hub', popWeight: 0.55, hubs: ['Leeds', 'Sheffield', 'York', 'Hull'], salMult: 0.98 },
  { code: 'WAL', name: 'Wales', hub: 'Cardiff Cyber & Energy Hub', popWeight: 0.40, hubs: ['Cardiff', 'Swansea', 'Newport'], salMult: 0.95 },
  { code: 'NIR', name: 'Northern Ireland', hub: 'Belfast Tech & Legal Services Hub', popWeight: 0.35, hubs: ['Belfast', 'Derry'], salMult: 0.94 },
];

// Helper functions for state breakdowns
function generateUsStateBreakdown(basePool: number, baseMinSal: number, baseMaxSal: number, subSkills: string[]): StateSkillBreakdown[] {
  return US_STATES.map((st) => {
    const pool = Math.round(basePool * st.popWeight * (0.8 + Math.random() * 0.4));
    const minSal = Math.round(baseMinSal * st.salMult);
    const maxSal = Math.round(baseMaxSal * st.salMult);
    const demand: 'Critical' | 'Very High' | 'High' | 'Moderate' | 'Steady' =
      st.salMult >= 1.25 ? 'Critical' : st.salMult >= 1.10 ? 'Very High' : 'High';
    const complexity: 'Low' | 'Medium' | 'High' | 'Extreme' =
      st.salMult >= 1.25 ? 'Extreme' : st.salMult >= 1.10 ? 'High' : 'Medium';

    return {
      stateCode: st.code,
      stateName: st.name,
      capitalOrHub: st.hub,
      estimatedTalentPool: pool,
      estimatedTalentPoolFormatted: formatNumber(pool),
      demandLevel: demand,
      averageSalaryUsd: `$${minSal.toLocaleString()} - $${maxSal.toLocaleString()}`,
      remoteAvailabilityPct: Math.round(55 + (st.salMult * 15)),
      sourcingComplexity: complexity,
      topIndustries: ['Technology Services', 'Enterprise Systems', 'Healthcare', 'Finance', 'Manufacturing'],
      subSkills: subSkills.slice(0, 4),
      keyHiringHubs: st.hubs,
    };
  }).sort((a, b) => b.estimatedTalentPool - a.estimatedTalentPool);
}

function generateAuStateBreakdown(baseMinSal: number, baseMaxSal: number, basePool: number, subSkills: string[]): StateSkillBreakdown[] {
  return AU_STATES.map((st) => {
    const pool = Math.round((basePool / 10) * st.popWeight * (0.85 + Math.random() * 0.3));
    const minSal = Math.round(baseMinSal * 0.88 * st.salMult);
    const maxSal = Math.round(baseMaxSal * 0.88 * st.salMult);
    const demand: 'Critical' | 'Very High' | 'High' | 'Moderate' | 'Steady' =
      st.salMult >= 1.12 ? 'Very High' : st.salMult >= 1.0 ? 'High' : 'Moderate';
    const complexity: 'Low' | 'Medium' | 'High' | 'Extreme' =
      st.salMult >= 1.12 ? 'High' : 'Medium';

    return {
      stateCode: st.code,
      stateName: st.name,
      capitalOrHub: st.hub,
      estimatedTalentPool: pool,
      estimatedTalentPoolFormatted: formatNumber(pool),
      demandLevel: demand,
      averageSalaryUsd: `$${minSal.toLocaleString()} - $${maxSal.toLocaleString()}`,
      remoteAvailabilityPct: Math.round(50 + (st.salMult * 15)),
      sourcingComplexity: complexity,
      topIndustries: ['Resources & Energy', 'Government & Defence', 'Healthcare', 'Higher Ed', 'Finance'],
      subSkills: subSkills.slice(0, 4),
      keyHiringHubs: st.hubs,
    };
  }).sort((a, b) => b.estimatedTalentPool - a.estimatedTalentPool);
}

function generateCaProvinceBreakdown(baseMinSal: number, baseMaxSal: number, basePool: number, subSkills: string[]): StateSkillBreakdown[] {
  return CA_PROVINCES.map((st) => {
    const pool = Math.round((basePool / 8) * st.popWeight * (0.85 + Math.random() * 0.3));
    const minSal = Math.round(baseMinSal * 0.82 * st.salMult);
    const maxSal = Math.round(baseMaxSal * 0.82 * st.salMult);
    const demand: 'Critical' | 'Very High' | 'High' | 'Moderate' | 'Steady' =
      st.salMult >= 1.12 ? 'Very High' : st.salMult >= 1.0 ? 'High' : 'Moderate';
    const complexity: 'Low' | 'Medium' | 'High' | 'Extreme' =
      st.salMult >= 1.12 ? 'High' : 'Medium';

    return {
      stateCode: st.code,
      stateName: st.name,
      capitalOrHub: st.hub,
      estimatedTalentPool: pool,
      estimatedTalentPoolFormatted: formatNumber(pool),
      demandLevel: demand,
      averageSalaryUsd: `$${minSal.toLocaleString()} - $${maxSal.toLocaleString()}`,
      remoteAvailabilityPct: Math.round(52 + (st.salMult * 16)),
      sourcingComplexity: complexity,
      topIndustries: ['Natural Resources', 'Clean Tech', 'Financial Services', 'Aerospace', 'Health Sciences'],
      subSkills: subSkills.slice(0, 4),
      keyHiringHubs: st.hubs,
    };
  }).sort((a, b) => b.estimatedTalentPool - a.estimatedTalentPool);
}

function generateUkNationBreakdown(baseMinSal: number, baseMaxSal: number, basePool: number, subSkills: string[]): StateSkillBreakdown[] {
  return UK_NATIONS.map((st) => {
    const pool = Math.round((basePool / 6) * st.popWeight * (0.85 + Math.random() * 0.3));
    const minSal = Math.round(baseMinSal * 0.85 * st.salMult);
    const maxSal = Math.round(baseMaxSal * 0.85 * st.salMult);
    const demand: 'Critical' | 'Very High' | 'High' | 'Moderate' | 'Steady' =
      st.salMult >= 1.25 ? 'Critical' : st.salMult >= 1.10 ? 'Very High' : 'High';
    const complexity: 'Low' | 'Medium' | 'High' | 'Extreme' =
      st.salMult >= 1.2 ? 'Extreme' : st.salMult >= 1.05 ? 'High' : 'Medium';

    return {
      stateCode: st.code,
      stateName: st.name,
      capitalOrHub: st.hub,
      estimatedTalentPool: pool,
      estimatedTalentPoolFormatted: formatNumber(pool),
      demandLevel: demand,
      averageSalaryUsd: `$${minSal.toLocaleString()} - $${maxSal.toLocaleString()}`,
      remoteAvailabilityPct: Math.round(55 + (st.salMult * 18)),
      sourcingComplexity: complexity,
      topIndustries: ['Financial Services', 'Biotech & Pharma', 'Aerospace', 'Cyber Security', 'Government'],
      subSkills: subSkills.slice(0, 4),
      keyHiringHubs: st.hubs,
    };
  }).sort((a, b) => b.estimatedTalentPool - a.estimatedTalentPool);
}

// -------------------------------------------------------------
// DYNAMIC 197 COUNTRY GENERATOR FOR EVERY SKILL
// -------------------------------------------------------------
function build197CountriesDataForSkill(
  poolMult: number,
  baseMinSalary: number,
  baseMaxSalary: number,
  category: string,
  keyFrameworks: string[],
  customOverrides?: Record<string, Partial<CountrySkillData>>
): CountrySkillData[] {
  return COUNTRIES_DATA.map((c) => {
    const code = c.code;

    // Check if custom override exists
    if (customOverrides && customOverrides[code]) {
      const custom = customOverrides[code];
      const pool = custom.totalTalentPool || Math.round((c.population * 0.0015 * poolMult));
      return {
        countryCode: c.code,
        countryName: c.name,
        flag: c.flag,
        region: c.region,
        totalTalentPool: pool,
        totalTalentPoolFormatted: formatNumber(pool),
        demandLevel: custom.demandLevel || 'High',
        averageSalaryUsd: custom.averageSalaryUsd || `$${baseMinSalary.toLocaleString()} - $${baseMaxSalary.toLocaleString()}`,
        remoteAvailabilityPct: custom.remoteAvailabilityPct || 65,
        sourcingComplexity: custom.sourcingComplexity || 'Medium',
        englishProficiency: custom.englishProficiency || (c.languages?.some(l => l.name.toLowerCase().includes('english')) ? 'Native / Official' : 'High'),
        topIndustries: custom.topIndustries || [category, 'Global Services', 'Enterprise Operations', 'Industry 4.0'],
        topSubSkills: custom.topSubSkills || keyFrameworks.slice(0, 4),
        keyHiringHubs: custom.keyHiringHubs || [c.capital, `${c.name} Innovation Corridor`].filter(Boolean),
        sourcingNotes: custom.sourcingNotes || `Active talent cluster in ${c.capital || c.name} with growing depth in ${keyFrameworks[0] || category}.`,
        usStateBreakdown: custom.usStateBreakdown,
        auStateBreakdown: custom.auStateBreakdown,
        caProvinceBreakdown: custom.caProvinceBreakdown,
        ukNationBreakdown: custom.ukNationBreakdown,
      };
    }

    // Algorithmic calculation for all remaining 197 UN countries based on population & region
    let regionFactor = 1.0;
    if (c.region === 'Americas') regionFactor = 1.1;
    if (c.region === 'Europe') regionFactor = 1.25;
    if (c.region === 'Asia') regionFactor = 0.95;
    if (c.region === 'Oceania') regionFactor = 0.85;
    if (c.region === 'Africa') regionFactor = 0.45;

    // Population based talent scaling with smooth bounds
    const popBase = Math.sqrt(c.population) * 80;
    const pool = Math.max(350, Math.round(popBase * poolMult * regionFactor));

    // Localized salary estimates relative to region
    const salMin = Math.round(baseMinSalary * regionFactor * 0.7);
    const salMax = Math.round(baseMaxSalary * regionFactor * 0.75);

    const isEng = c.languages?.some((l) => l.name.toLowerCase().includes('english'));
    const engProf: 'Native / Official' | 'Very High' | 'High' | 'Moderate' | 'Emerging' = isEng
      ? 'Native / Official'
      : c.region === 'Europe'
      ? 'Very High'
      : c.region === 'Americas'
      ? 'High'
      : 'Moderate';

    const demand: 'Critical' | 'Very High' | 'High' | 'Moderate' | 'Steady' =
      pool >= 100000 ? 'Critical' : pool >= 30000 ? 'Very High' : pool >= 5000 ? 'High' : 'Moderate';

    const complexity: 'Low' | 'Medium' | 'High' | 'Extreme' =
      salMin > 80000 ? 'High' : salMin > 40000 ? 'Medium' : 'Low';

    const hubs = [c.capital].filter(Boolean) as string[];
    if (hubs.length === 0) hubs.push(`${c.name} Hub`);

    return {
      countryCode: c.code,
      countryName: c.name,
      flag: c.flag,
      region: c.region,
      totalTalentPool: pool,
      totalTalentPoolFormatted: formatNumber(pool),
      demandLevel: demand,
      averageSalaryUsd: `$${salMin.toLocaleString()} - $${salMax.toLocaleString()}`,
      remoteAvailabilityPct: Math.round(45 + Math.random() * 35),
      sourcingComplexity: complexity,
      englishProficiency: engProf,
      topIndustries: [category, 'Global Operations', 'Enterprise Services', 'Local Economy'],
      topSubSkills: keyFrameworks.slice(0, 4),
      keyHiringHubs: hubs,
      sourcingNotes: `Established talent pool in ${hubs.join(', ')} with strong core competencies in ${keyFrameworks[0] || category}.`,
    };
  }).sort((a, b) => b.totalTalentPool - a.totalTalentPool);
}

// -------------------------------------------------------------
// WIDENED & COMPREHENSIVE SKILLS DATASET (Across 15 Major Sectors)
// -------------------------------------------------------------
export const SKILLS_DATA: SkillItem[] = [
  // 1. AI & DATA SCIENCE
  {
    id: 'python_data_ai',
    name: 'Python, Machine Learning & GenAI',
    category: 'AI & Data Science',
    description: 'Expertise in Python, PyTorch, TensorFlow, LLM fine-tuning, RAG architecture, Pandas, and GenAI pipeline development.',
    globalDemandLevel: 'Critical',
    commonJobTitles: ['Machine Learning Engineer', 'Data Scientist', 'AI Engineer', 'Backend Python Developer', 'MLOps Architect'],
    keyFrameworks: ['Python 3.12', 'PyTorch', 'TensorFlow', 'FastAPI', 'LangChain', 'Scikit-Learn', 'Pandas', 'Hugging Face'],
    countriesData: build197CountriesDataForSkill(
      1.5,
      130000,
      195000,
      'AI & Data Science',
      ['PyTorch', 'LLM Fine-Tuning', 'FastAPI', 'MLOps'],
      {
        US: {
          totalTalentPool: 680000,
          demandLevel: 'Critical',
          averageSalaryUsd: '$140,000 - $210,000',
          remoteAvailabilityPct: 74,
          sourcingComplexity: 'Extreme',
          topIndustries: ['Artificial Intelligence', 'Big Tech', 'Fintech', 'Biotech & Genomics', 'Autonomous Driving'],
          keyHiringHubs: ['San Francisco Bay Area', 'Seattle', 'New York City', 'Boston', 'Austin'],
          sourcingNotes: 'Silicon Valley, Boston, and Seattle feature top AI research and LLM engineering talent.',
          usStateBreakdown: generateUsStateBreakdown(48000, 135000, 205000, ['PyTorch', 'LLM Fine-Tuning', 'FastAPI', 'MLOps']),
        },
        AU: {
          totalTalentPool: 78000,
          demandLevel: 'Very High',
          averageSalaryUsd: '$115,000 - $165,000',
          remoteAvailabilityPct: 68,
          sourcingComplexity: 'High',
          topIndustries: ['Mining Analytics', 'Fintech', 'Government Research (CSIRO)', 'AgTech'],
          keyHiringHubs: ['Sydney', 'Melbourne', 'Brisbane', 'Perth'],
          auStateBreakdown: generateAuStateBreakdown(48000, 115000, 165000, ['Python Analytics', 'Geospatial ML', 'Scikit-Learn', 'AWS SageMaker']),
        },
        CA: {
          totalTalentPool: 110000,
          demandLevel: 'Critical',
          averageSalaryUsd: '$105,000 - $160,000',
          remoteAvailabilityPct: 70,
          sourcingComplexity: 'High',
          topIndustries: ['AI Research (MILA & Vector)', 'Fintech', 'Gaming AI', 'Clean Energy'],
          keyHiringHubs: ['Toronto', 'Montreal', 'Vancouver', 'Waterloo'],
          caProvinceBreakdown: generateCaProvinceBreakdown(48000, 105000, 160000, ['PyTorch', 'Reinforcement Learning', 'Computer Vision', 'NLP']),
        },
        GB: {
          totalTalentPool: 145000,
          demandLevel: 'Critical',
          averageSalaryUsd: '$110,000 - $175,000',
          remoteAvailabilityPct: 72,
          sourcingComplexity: 'Extreme',
          topIndustries: ['DeepMind AI Research Cluster', 'Fintech', 'Pharma & Drug Discovery', 'Quant Finance'],
          keyHiringHubs: ['London', 'Cambridge', 'Oxford', 'Edinburgh'],
          ukNationBreakdown: generateUkNationBreakdown(48000, 110000, 175000, ['Deep Learning', 'PyTorch', 'Quant Modeling', 'GCP Vertex AI']),
        },
        IN: {
          totalTalentPool: 1250000,
          demandLevel: 'Critical',
          averageSalaryUsd: '$25,000 - $65,000',
          remoteAvailabilityPct: 62,
          sourcingComplexity: 'Medium',
          topIndustries: ['Global Capability Centers (GCC)', 'IT Consulting', 'Fintech', 'Enterprise SaaS'],
          keyHiringHubs: ['Bengaluru', 'Hyderabad', 'Pune', 'NCR (Gurugram/Noida)', 'Chennai'],
        },
      }
    ),
  },

  {
    id: 'pytorch_deep_learning',
    name: 'PyTorch, Deep Learning & Vision Models',
    category: 'AI & Data Science',
    description: 'Computer vision, convolutional neural networks, transformer architectures, PyTorch Lightning, ONNX export, and edge AI deployment.',
    globalDemandLevel: 'Critical',
    commonJobTitles: ['Deep Learning Researcher', 'Computer Vision Engineer', 'AI Perception Lead', 'Robotics AI Engineer'],
    keyFrameworks: ['PyTorch', 'TorchVision', 'ONNX', 'CUDA', 'TensorRT', 'OpenCV', 'YOLOv8', 'Transformers'],
    countriesData: build197CountriesDataForSkill(
      1.1,
      135000,
      205000,
      'AI & Data Science',
      ['PyTorch', 'Computer Vision', 'CUDA', 'TensorRT'],
      {
        US: {
          totalTalentPool: 420000,
          demandLevel: 'Critical',
          averageSalaryUsd: '$150,000 - $225,000',
          usStateBreakdown: generateUsStateBreakdown(35000, 145000, 220000, ['PyTorch', 'CUDA', 'TensorRT', 'YOLOv8']),
        },
        AU: {
          totalTalentPool: 45000,
          demandLevel: 'Very High',
          averageSalaryUsd: '$120,000 - $170,000',
          auStateBreakdown: generateAuStateBreakdown(35000, 120000, 170000, ['PyTorch', 'Perception ML', 'OpenCV']),
        },
        CA: {
          totalTalentPool: 75000,
          demandLevel: 'Critical',
          averageSalaryUsd: '$110,000 - $165,000',
          caProvinceBreakdown: generateCaProvinceBreakdown(35000, 110000, 165000, ['PyTorch', 'MILA Deep Learning', 'ONNX']),
        },
        GB: {
          totalTalentPool: 95000,
          demandLevel: 'Critical',
          averageSalaryUsd: '$115,000 - $180,000',
          ukNationBreakdown: generateUkNationBreakdown(35000, 115000, 180000, ['PyTorch', 'DeepMind Cluster', 'Transformer Architectures']),
        },
      }
    ),
  },

  // 2. SOFTWARE & CLOUD SYSTEMS
  {
    id: 'cloud_aws_architecture',
    name: 'AWS Cloud Architecture & Infrastructure',
    category: 'Software & Cloud Systems',
    description: 'Design and deployment of AWS solutions including EC2, EKS, Serverless (Lambda), IAM, VPC networking, CloudFormation, and Cost Optimization.',
    globalDemandLevel: 'Critical',
    commonJobTitles: ['AWS Cloud Architect', 'Cloud Infrastructure Engineer', 'AWS Solutions Specialist', 'Enterprise Cloud Architect'],
    keyFrameworks: ['AWS Certified Solutions Architect', 'AWS Lambda', 'Amazon EKS', 'Terraform', 'CloudFormation', 'IAM', 'DynamoDB'],
    countriesData: build197CountriesDataForSkill(
      1.8,
      125000,
      185000,
      'Software & Cloud Systems',
      ['AWS Solutions Architect', 'EKS', 'Terraform', 'Serverless'],
      {
        US: {
          totalTalentPool: 780000,
          demandLevel: 'Critical',
          averageSalaryUsd: '$135,000 - $195,000',
          usStateBreakdown: generateUsStateBreakdown(55000, 130000, 190000, ['AWS', 'Terraform', 'EKS', 'CloudFormation']),
        },
        AU: {
          totalTalentPool: 88000,
          demandLevel: 'Very High',
          averageSalaryUsd: '$115,000 - $165,000',
          auStateBreakdown: generateAuStateBreakdown(55000, 115000, 165000, ['AWS', 'Terraform', 'Serverless', 'GovCloud']),
        },
        CA: {
          totalTalentPool: 130000,
          demandLevel: 'Critical',
          averageSalaryUsd: '$105,000 - $155,000',
          caProvinceBreakdown: generateCaProvinceBreakdown(55000, 105000, 155000, ['AWS', 'Cloud Architecture', 'Terraform']),
        },
        GB: {
          totalTalentPool: 170000,
          demandLevel: 'Critical',
          averageSalaryUsd: '$110,000 - $170,000',
          ukNationBreakdown: generateUkNationBreakdown(55000, 110000, 170000, ['AWS', 'Fintech Cloud', 'EKS']),
        },
      }
    ),
  },

  {
    id: 'kubernetes_cloud_native',
    name: 'Kubernetes, Service Mesh & Container Orchestration',
    category: 'Software & Cloud Systems',
    description: 'Production Kubernetes management, Helm charts, Istio/Linkerd service meshes, cluster security, GitOps with ArgoCD, and multi-cloud orchestration.',
    globalDemandLevel: 'Critical',
    commonJobTitles: ['Kubernetes Engineer', 'Cloud Native Architect', 'Platform Engineer', 'SRE Lead'],
    keyFrameworks: ['Kubernetes (CKA/CKAD)', 'Helm', 'ArgoCD', 'Istio', 'Docker', 'Prometheus', 'Grafana', 'Flux'],
    countriesData: build197CountriesDataForSkill(
      1.3,
      130000,
      190000,
      'Software & Cloud Systems',
      ['Kubernetes (CKA)', 'Helm', 'ArgoCD', 'Istio'],
      {
        US: {
          totalTalentPool: 580000,
          usStateBreakdown: generateUsStateBreakdown(42000, 130000, 190000, ['Kubernetes', 'Helm', 'ArgoCD', 'Istio']),
        },
        AU: {
          totalTalentPool: 65000,
          auStateBreakdown: generateAuStateBreakdown(42000, 110000, 160000, ['Kubernetes', 'ArgoCD', 'Prometheus']),
        },
        CA: {
          totalTalentPool: 95000,
          caProvinceBreakdown: generateCaProvinceBreakdown(42000, 100000, 150000, ['Kubernetes', 'Helm', 'Service Mesh']),
        },
        GB: {
          totalTalentPool: 125000,
          ukNationBreakdown: generateUkNationBreakdown(42000, 105000, 165000, ['Kubernetes', 'GitOps', 'Istio']),
        },
      }
    ),
  },

  {
    id: 'react_nextjs_frontend',
    name: 'React, Next.js & Modern Web Frontend',
    category: 'Software & Cloud Systems',
    description: 'Building ultra-fast responsive web applications with React 18, Next.js App Router, TypeScript, Tailwind CSS, State Management, and Web Vitals optimization.',
    globalDemandLevel: 'Very High',
    commonJobTitles: ['Frontend Developer', 'Full Stack Engineer', 'React Lead', 'UI Architect', 'Next.js Specialist'],
    keyFrameworks: ['React 18', 'Next.js App Router', 'TypeScript', 'Tailwind CSS', 'Zustand', 'GraphQL', 'Vite', 'Turbopack'],
    countriesData: build197CountriesDataForSkill(
      2.0,
      115000,
      170000,
      'Software & Cloud Systems',
      ['React 18', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      {
        US: {
          totalTalentPool: 850000,
          usStateBreakdown: generateUsStateBreakdown(60000, 115000, 170000, ['React 18', 'Next.js', 'TypeScript', 'Tailwind CSS']),
        },
        AU: {
          totalTalentPool: 95000,
          auStateBreakdown: generateAuStateBreakdown(60000, 100000, 145000, ['React', 'Next.js', 'Design Systems', 'TypeScript']),
        },
        CA: {
          totalTalentPool: 140000,
          caProvinceBreakdown: generateCaProvinceBreakdown(60000, 95000, 140000, ['React', 'Next.js', 'Tailwind CSS']),
        },
        GB: {
          totalTalentPool: 185000,
          ukNationBreakdown: generateUkNationBreakdown(60000, 100000, 150000, ['React Frontend', 'Next.js', 'TypeScript']),
        },
      }
    ),
  },

  {
    id: 'golang_distributed_systems',
    name: 'Golang, gRPC & Distributed Systems',
    category: 'Software & Cloud Systems',
    description: 'High-performance microservices, concurrency models, gRPC, Protobuf, Kafka event streaming, distributed key-value stores, and low-latency backends.',
    globalDemandLevel: 'Very High',
    commonJobTitles: ['Golang Engineer', 'Distributed Systems Architect', 'Backend Infrastructure Lead', 'Fintech Backend Lead'],
    keyFrameworks: ['Go 1.22', 'gRPC', 'Apache Kafka', 'Protocol Buffers', 'Redis', 'PostgreSQL', 'Docker', 'OpenTelemetry'],
    countriesData: build197CountriesDataForSkill(
      1.2,
      125000,
      185000,
      'Software & Cloud Systems',
      ['Golang', 'gRPC', 'Kafka', 'Distributed Systems'],
      {
        US: {
          totalTalentPool: 490000,
          usStateBreakdown: generateUsStateBreakdown(36000, 125000, 185000, ['Golang', 'gRPC', 'Kafka', 'Redis']),
        },
        AU: {
          totalTalentPool: 52000,
          auStateBreakdown: generateAuStateBreakdown(36000, 110000, 160000, ['Golang', 'Fintech Backends', 'Kafka']),
        },
        CA: {
          totalTalentPool: 78000,
          caProvinceBreakdown: generateCaProvinceBreakdown(36000, 100000, 150000, ['Golang', 'gRPC Microservices']),
        },
        GB: {
          totalTalentPool: 110000,
          ukNationBreakdown: generateUkNationBreakdown(36000, 105000, 165000, ['Go Fintech', 'Low Latency Systems']),
        },
      }
    ),
  },

  // 3. CYBERSECURITY & NETWORK SECURITY
  {
    id: 'cybersecurity_pen_testing',
    name: 'Cybersecurity, Pen Testing & SIEM Operations',
    category: 'Cybersecurity & Network Security',
    description: 'Offensive security, ethical hacking, SOC monitoring with Splunk/Sentinel, zero-trust architecture, ISO 27001, and NIST cybersecurity frameworks.',
    globalDemandLevel: 'Critical',
    commonJobTitles: ['Penetration Tester', 'SOC Analyst', 'Cybersecurity Architect', 'CISO', 'Incident Response Lead'],
    keyFrameworks: ['Burp Suite', 'Splunk SIEM', 'CrowdStrike', 'NIST', 'ISO 27001', 'Metasploit', 'Wireshark', 'OSCP'],
    countriesData: build197CountriesDataForSkill(
      1.4,
      120000,
      185000,
      'Cybersecurity & Network Security',
      ['OSCP Pen Testing', 'SIEM Operations', 'Zero Trust', 'Incident Response'],
      {
        US: {
          totalTalentPool: 510000,
          demandLevel: 'Critical',
          usStateBreakdown: generateUsStateBreakdown(38000, 125000, 190000, ['Penetration Testing', 'SIEM', 'Zero Trust']),
        },
        AU: {
          totalTalentPool: 62000,
          auStateBreakdown: generateAuStateBreakdown(38000, 110000, 160000, ['Essential Eight Compliance', 'Pen Testing', 'SOC Ops']),
        },
        CA: {
          totalTalentPool: 85000,
          caProvinceBreakdown: generateCaProvinceBreakdown(38000, 98000, 150000, ['Incident Response', 'IAM Security', 'Threat Intel']),
        },
        GB: {
          totalTalentPool: 120000,
          ukNationBreakdown: generateUkNationBreakdown(38000, 100000, 160000, ['CREST Pen Testing', 'SIEM Sentinel', 'Cloud Security']),
        },
      }
    ),
  },

  // 4. ENGINEERING & PHYSICAL SCIENCES
  {
    id: 'civil_structural_engineering',
    name: 'Civil, Structural & Seismic Engineering',
    category: 'Engineering & Physical Sciences',
    description: 'Structural mechanics, reinforced concrete design, foundation engineering, seismic risk mitigation, CAD/ETABS modeling, and infrastructure design.',
    globalDemandLevel: 'High',
    commonJobTitles: ['Structural Engineer', 'Civil Project Engineer', 'Bridge Engineer', 'Geotechnical Lead'],
    keyFrameworks: ['AutoCAD Civil 3D', 'ETABS / SAP2000', 'STAAD.Pro', 'ACI 318', 'Eurocodes', 'PE License', 'Geotechnical Modeling'],
    countriesData: build197CountriesDataForSkill(
      2.5,
      95000,
      145000,
      'Engineering & Physical Sciences',
      ['Structural Engineering', 'ETABS', 'AutoCAD Civil 3D', 'Concrete Design'],
      {
        US: {
          totalTalentPool: 820000,
          usStateBreakdown: generateUsStateBreakdown(65000, 95000, 145000, ['Structural Engineering', 'Civil 3D', 'PE License']),
        },
        AU: {
          totalTalentPool: 92000,
          auStateBreakdown: generateAuStateBreakdown(65000, 85000, 130000, ['Engineers Australia Charter', 'Structural Design']),
        },
        CA: {
          totalTalentPool: 125000,
          caProvinceBreakdown: generateCaProvinceBreakdown(65000, 82000, 125000, ['P.Eng Canada', 'Civil Engineering', 'Bridge Design']),
        },
        GB: {
          totalTalentPool: 140000,
          ukNationBreakdown: generateUkNationBreakdown(65000, 85000, 132000, ['CEng IStructE', 'Eurocodes', 'Civil Infrastructure']),
        },
      }
    ),
  },

  {
    id: 'embedded_hardware_firmware',
    name: 'Embedded C/C++, Firmware & Microcontrollers',
    category: 'Engineering & Physical Sciences',
    description: 'Bare-metal embedded systems, FreeRTOS, ARM Cortex-M architecture, SPI/I2C/CAN bus protocols, PCB layout review, and IoT hardware firmware.',
    globalDemandLevel: 'Very High',
    commonJobTitles: ['Embedded Systems Engineer', 'Firmware Architect', 'IoT Hardware Lead', 'Robotics Systems Engineer'],
    keyFrameworks: ['Embedded C/C++', 'FreeRTOS', 'ARM Cortex-M', 'STM32', 'CAN Bus', 'KiCAD / Altium', 'Logic Analyzers', 'Nordic BLE'],
    countriesData: build197CountriesDataForSkill(
      1.5,
      110000,
      165000,
      'Engineering & Physical Sciences',
      ['Embedded C/C++', 'ARM Cortex', 'FreeRTOS', 'Altium'],
      {
        US: {
          totalTalentPool: 450000,
          usStateBreakdown: generateUsStateBreakdown(32000, 110000, 165000, ['Embedded C++', 'ARM Cortex', 'CAN Bus']),
        },
        DE: {
          totalTalentPool: 280000,
          demandLevel: 'Critical',
          averageSalaryUsd: '$85,000 - $130,000',
          sourcingNotes: 'Automotive embedded hardware stronghold (Bosch, Continental, Infineon).',
        },
        AU: {
          totalTalentPool: 38000,
          auStateBreakdown: generateAuStateBreakdown(32000, 95000, 145000, ['Embedded Firmware', 'IoT Electronics']),
        },
      }
    ),
  },

  // 5. HEALTHCARE & LIFE SCIENCES
  {
    id: 'registered_nursing_clinical',
    name: 'Registered Nursing, BSN & Clinical Healthcare Operations',
    category: 'Healthcare & Life Sciences',
    description: 'Patient care, acute clinical interventions, ICU/Emergency room care, electronic health records (Epic/Cerner), medical compliance, and health informatics.',
    globalDemandLevel: 'Critical',
    commonJobTitles: ['Registered Nurse (RN)', 'Nurse Practitioner (NP)', 'Clinical Nurse Specialist', 'Nurse Director'],
    keyFrameworks: ['NCLEX-RN Certification', 'Epic EHR', 'Cerner Health', 'BLS / ACLS Certification', 'HIPAA Compliance', 'ICU Care'],
    countriesData: build197CountriesDataForSkill(
      3.0,
      80000,
      120000,
      'Healthcare & Life Sciences',
      ['NCLEX-RN', 'Epic EHR', 'ACLS', 'Acute Clinical Care'],
      {
        US: {
          totalTalentPool: 3200000,
          usStateBreakdown: generateUsStateBreakdown(150000, 80000, 120000, ['RN Nursing', 'Epic EHR', 'ACLS', 'Clinical Care']),
        },
        AU: {
          totalTalentPool: 310000,
          auStateBreakdown: generateAuStateBreakdown(150000, 75000, 110000, ['AHPRA Registered Nurse', 'Clinical Healthcare']),
        },
        CA: {
          totalTalentPool: 380000,
          caProvinceBreakdown: generateCaProvinceBreakdown(150000, 72000, 108000, ['RN Canada', 'Clinical Care', 'EHR Systems']),
        },
        GB: {
          totalTalentPool: 450000,
          ukNationBreakdown: generateUkNationBreakdown(150000, 70000, 105000, ['NMC Registered Nurse', 'NHS Healthcare']),
        },
        PH: {
          totalTalentPool: 680000,
          demandLevel: 'Critical',
          averageSalaryUsd: '$12,000 - $28,000',
          sourcingNotes: 'Largest global exporter of highly skilled English-speaking registered nurses worldwide.',
        },
      }
    ),
  },

  {
    id: 'biopharma_process_engineering',
    name: 'Biopharmaceutical Process & Vaccine Manufacturing',
    category: 'Healthcare & Life Sciences',
    description: 'GMP bioprocessing, cell culture bioreactors, downstream purification, HPLC validation, sterile fill-finish operations, and FDA/EMA compliance.',
    globalDemandLevel: 'Critical',
    commonJobTitles: ['Bioprocess Engineer', 'Validation Specialist', 'Quality Assurance Manager (GMP)', 'Formulation Scientist'],
    keyFrameworks: ['cGMP Regulations', 'FDA 21 CFR Part 11', 'Bioreactor Scale-up', 'HPLC Chromatography', 'Cleanroom Operations'],
    countriesData: build197CountriesDataForSkill(
      1.1,
      115000,
      175000,
      'Healthcare & Life Sciences',
      ['cGMP Compliance', 'HPLC Chromatography', 'Bioreactors', 'FDA Validation'],
      {
        US: {
          totalTalentPool: 380000,
          usStateBreakdown: generateUsStateBreakdown(28000, 120000, 180000, ['cGMP', 'FDA Compliance', 'Bioprocessing']),
        },
        CH: {
          totalTalentPool: 95000,
          demandLevel: 'Critical',
          averageSalaryUsd: '$130,000 - $190,000',
          sourcingNotes: 'Global hub for Novartis & Roche pharmaceutical operations.',
        },
        IE: {
          totalTalentPool: 65000,
          demandLevel: 'Critical',
          averageSalaryUsd: '$85,000 - $135,000',
          sourcingNotes: 'Major European biopharma cluster in Dublin and Cork.',
        },
      }
    ),
  },

  {
    id: 'clinical_trials_regulatory',
    name: 'Clinical Trial Operations & Medical Regulatory Affairs',
    category: 'Healthcare & Life Sciences',
    description: 'Phase I-IV clinical trial management, GCP/ICH guidelines, IRB submissions, clinical data management systems (EDC), and FDA 510(k) submissions.',
    globalDemandLevel: 'High',
    commonJobTitles: ['Clinical Research Associate (CRA)', 'Regulatory Affairs Director', 'Clinical Project Manager', 'Medical Monitor'],
    keyFrameworks: ['Good Clinical Practice (GCP)', 'Medidata Rave EDC', 'Veeva Vault CTMS', 'FDA 510(k)', 'CE Mark MDR'],
    countriesData: build197CountriesDataForSkill(
      1.3,
      105000,
      160000,
      'Healthcare & Life Sciences',
      ['GCP Compliance', 'Veeva CTMS', 'Regulatory Affairs', 'Clinical Trials'],
      {
        US: {
          totalTalentPool: 420000,
          usStateBreakdown: generateUsStateBreakdown(32000, 110000, 165000, ['GCP', 'Veeva CTMS', 'FDA Submissions']),
        },
        GB: {
          totalTalentPool: 110000,
          ukNationBreakdown: generateUkNationBreakdown(32000, 95000, 145000, ['MHRA Regulations', 'GCP Trials']),
        },
      }
    ),
  },

  // 6. FINANCE, ACCOUNTING & BANKING
  {
    id: 'cpa_audit_financial_accounting',
    name: 'CPA, Financial Audit & Technical Accounting',
    category: 'Finance, Accounting & Banking',
    description: 'GAAP & IFRS financial reporting, external audit procedures, corporate taxation, SEC filings (10-K/10-Q), Sarbanes-Oxley (SOX) compliance, and SAP ERP.',
    globalDemandLevel: 'High',
    commonJobTitles: ['Senior Auditor', 'Accounting Manager', 'CPA Specialist', 'Controller', 'SEC Reporting Lead'],
    keyFrameworks: ['Certified Public Accountant (CPA)', 'US GAAP', 'IFRS Standards', 'SOX 404', 'NetSuite ERP', 'SAP S/4HANA Finance', 'Excel Financial Modeling'],
    countriesData: build197CountriesDataForSkill(
      2.2,
      95000,
      150000,
      'Finance, Accounting & Banking',
      ['CPA Certification', 'US GAAP / IFRS', 'SOX Compliance', 'Financial Audit'],
      {
        US: {
          totalTalentPool: 1450000,
          demandLevel: 'High',
          averageSalaryUsd: '$100,000 - $160,000',
          usStateBreakdown: generateUsStateBreakdown(95000, 100000, 160000, ['CPA', 'US GAAP', 'SOX Compliance', 'SEC Filings']),
        },
        AU: {
          totalTalentPool: 140000,
          auStateBreakdown: generateAuStateBreakdown(95000, 85000, 135000, ['CPA Australia', 'IFRS', 'Financial Modeling']),
        },
        CA: {
          totalTalentPool: 195000,
          caProvinceBreakdown: generateCaProvinceBreakdown(95000, 80000, 128000, ['CPA Canada', 'IFRS', 'Valuation']),
        },
        GB: {
          totalTalentPool: 240000,
          ukNationBreakdown: generateUkNationBreakdown(95000, 82000, 135000, ['ACCA / ACA', 'IFRS', 'Quant Finance']),
        },
      }
    ),
  },

  {
    id: 'investment_banking_ma',
    name: 'Investment Banking, M&A & Financial Valuation',
    category: 'Finance, Accounting & Banking',
    description: 'DCF valuation modeling, LBO analysis, M&A deal execution, pitchbook preparation, capital raising, and private equity due diligence.',
    globalDemandLevel: 'Very High',
    commonJobTitles: ['Investment Banking Associate', 'M&A Manager', 'Private Equity Analyst', 'Corporate Development Director'],
    keyFrameworks: ['Financial Modeling (DCF/LBO)', 'FactSet / CapIQ', 'PitchBook', 'Syndicated Loans', 'Debt Capital Markets', 'Series 7/79'],
    countriesData: build197CountriesDataForSkill(
      1.2,
      140000,
      240000,
      'Finance, Accounting & Banking',
      ['Financial Modeling', 'DCF Valuation', 'LBO Analysis', 'M&A Execution'],
      {
        US: {
          totalTalentPool: 380000,
          usStateBreakdown: generateUsStateBreakdown(25000, 145000, 250000, ['M&A Valuation', 'DCF Modeling', 'LBO', 'Private Equity']),
        },
        GB: {
          totalTalentPool: 160000,
          demandLevel: 'Critical',
          averageSalaryUsd: '$130,000 - $220,000',
          ukNationBreakdown: generateUkNationBreakdown(25000, 130000, 220000, ['City of London M&A', 'Investment Banking', 'DCF']),
        },
        SG: {
          totalTalentPool: 75000,
          demandLevel: 'Critical',
          averageSalaryUsd: '$120,000 - $200,000',
          sourcingNotes: 'Southeast Asia M&A and Private Equity dealmaking hub.',
        },
      }
    ),
  },

  // 7. LEGAL, COMPLIANCE & RISK
  {
    id: 'corporate_law_ma_ip',
    name: 'Corporate Law, M&A Governance & IP Protection',
    category: 'Legal, Compliance & Risk',
    description: 'Contract drafting, cross-border M&A legal structure, patent & trademark prosecution, corporate governance, and regulatory dispute resolution.',
    globalDemandLevel: 'High',
    commonJobTitles: ['Corporate Counsel', 'IP Attorney', 'M&A Partner', 'Legal Compliance Director'],
    keyFrameworks: ['Juris Doctor (JD) / LLM', 'Bar Association Admission', 'Patent Prosecution (USPTO)', 'Cross-Border M&A Contracts', 'GDPR Compliance'],
    countriesData: build197CountriesDataForSkill(
      1.8,
      130000,
      220000,
      'Legal, Compliance & Risk',
      ['Bar Admission', 'Corporate M&A Law', 'IP Patent Prosecution', 'Contract Drafting'],
      {
        US: {
          totalTalentPool: 920000,
          usStateBreakdown: generateUsStateBreakdown(70000, 130000, 220000, ['Corporate Law', 'Bar Admission', 'IP Law']),
        },
        GB: {
          totalTalentPool: 180000,
          ukNationBreakdown: generateUkNationBreakdown(70000, 115000, 195000, ['Solicitor / Barrister', 'Common Law M&A']),
        },
      }
    ),
  },

  // 8. SUPPLY CHAIN, LOGISTICS & AVIATION
  {
    id: 'supply_chain_sap_logistics',
    name: 'Supply Chain Management & SAP IBP Logistics',
    category: 'Supply Chain, Logistics & Aviation',
    description: 'Demand forecasting, SAP IBP/MM supply chain configuration, freight logistics, inventory optimization, procurement, and warehouse management.',
    globalDemandLevel: 'Very High',
    commonJobTitles: ['Supply Chain Manager', 'SAP Logistics Lead', 'Global Procurement Director', 'Freight Operations Manager'],
    keyFrameworks: ['SAP IBP / APO', 'SAP MM/SD', 'APICS CSCP', 'Manhattan Associates WMS', 'Freight Forwarding', 'Six Sigma Green Belt'],
    countriesData: build197CountriesDataForSkill(
      2.0,
      90000,
      140000,
      'Supply Chain, Logistics & Aviation',
      ['SAP IBP', 'CSCP Certification', 'Global Freight', 'Inventory Control'],
      {
        US: {
          totalTalentPool: 850000,
          usStateBreakdown: generateUsStateBreakdown(60000, 90000, 140000, ['SAP IBP', 'Supply Chain', 'Logistics', 'WMS']),
        },
        DE: {
          totalTalentPool: 340000,
          demandLevel: 'Critical',
          averageSalaryUsd: '$75,000 - $120,000',
          sourcingNotes: 'European logistics & distribution powerhouse (DHL, DB Schenker).',
        },
        NL: {
          totalTalentPool: 140000,
          demandLevel: 'Critical',
          averageSalaryUsd: '$70,000 - $115,000',
          sourcingNotes: 'Port of Rotterdam logistics & international trade hub.',
        },
      }
    ),
  },

  {
    id: 'commercial_aviation_pilot',
    name: 'Commercial Aviation, Flight Operations & Avionics',
    category: 'Supply Chain, Logistics & Aviation',
    description: 'ATP multi-engine flight operations, Boeing/Airbus type ratings, flight dispatch, air traffic safety management systems (SMS), and aviation compliance.',
    globalDemandLevel: 'Critical',
    commonJobTitles: ['Airline Captain', 'First Officer', 'Flight Operations Manager', 'Aviation Safety Director'],
    keyFrameworks: ['FAA Airline Transport Pilot (ATP)', 'EASA ATPL', 'Type Rating (B737 / A320)', 'ICAO Safety Management', 'Flight Dispatch'],
    countriesData: build197CountriesDataForSkill(
      1.1,
      110000,
      210000,
      'Supply Chain, Logistics & Aviation',
      ['FAA ATP', 'Type Rating A320/B737', 'Flight Safety', 'Air Navigation'],
      {
        US: {
          totalTalentPool: 210000,
          demandLevel: 'Critical',
          averageSalaryUsd: '$120,000 - $240,000',
          usStateBreakdown: generateUsStateBreakdown(15000, 120000, 240000, ['ATP Pilot', 'Airbus A320', 'Boeing 737']),
        },
        AE: {
          totalTalentPool: 42000,
          demandLevel: 'Critical',
          averageSalaryUsd: '$130,000 - $220,000',
          sourcingNotes: 'Middle East long-haul international flight operations hub (Emirates, Etihad).',
        },
      }
    ),
  },

  // 9. CONSTRUCTION, ARCHITECTURE & TRADES
  {
    id: 'construction_management_estimating',
    name: 'Commercial Construction Management & Procore',
    category: 'Construction, Architecture & Trades',
    description: 'Commercial building project management, Procore submittals, Primavera P6 scheduling, cost estimating, site safety (OSHA), and trade subcontractor coordination.',
    globalDemandLevel: 'High',
    commonJobTitles: ['General Contractor Project Manager', 'Construction Superintendent', 'Cost Estimator', 'Safety Manager'],
    keyFrameworks: ['Procore Management', 'Primavera P6', 'OSHA 30 Certification', 'BIM 360', 'RSMeans Estimating', 'LEED AP'],
    countriesData: build197CountriesDataForSkill(
      2.6,
      85000,
      135000,
      'Construction, Architecture & Trades',
      ['Procore', 'Primavera P6', 'OSHA 30', 'Cost Estimating'],
      {
        US: {
          totalTalentPool: 1250000,
          usStateBreakdown: generateUsStateBreakdown(90000, 85000, 135000, ['Procore', 'Primavera P6', 'Construction Management']),
        },
        AU: {
          totalTalentPool: 180000,
          auStateBreakdown: generateAuStateBreakdown(85000, 80000, 125000, ['Commercial Construction', 'WHS Safety']),
        },
      }
    ),
  },

  {
    id: 'architecture_bim_revit',
    name: 'Architecture, Autodesk Revit & BIM Spatial Planning',
    category: 'Construction, Architecture & Trades',
    description: 'Building Information Modeling (BIM), Autodesk Revit 3D architectural design, building code compliance (IBC), sustainable LEED design, and rendering.',
    globalDemandLevel: 'High',
    commonJobTitles: ['Licensed Architect', 'BIM Manager', 'Architectural Designer', 'Urban Planner'],
    keyFrameworks: ['Autodesk Revit', 'BIM 360', 'Rhino 3D + Grasshopper', 'Enscape / V-Ray', 'LEED AP', 'AIA / NCARB License'],
    countriesData: build197CountriesDataForSkill(
      1.8,
      80000,
      130000,
      'Construction, Architecture & Trades',
      ['Autodesk Revit', 'BIM Modeling', 'LEED Architecture', 'Rhino 3D'],
      {
        US: {
          totalTalentPool: 480000,
          usStateBreakdown: generateUsStateBreakdown(35000, 80000, 130000, ['Revit BIM', 'Architectural Design', 'LEED']),
        },
        GB: {
          totalTalentPool: 120000,
          ukNationBreakdown: generateUkNationBreakdown(35000, 75000, 120000, ['RIBA Chartered Architect', 'Revit BIM']),
        },
      }
    ),
  },

  {
    id: 'precision_welding_piping',
    name: 'Precision Welding, Pipefitting & NDT Testing',
    category: 'Construction, Architecture & Trades',
    description: 'TIG/MIG industrial welding, ASME pressure vessel codes, high-pressure pipefitting, Non-Destructive Testing (NDT Ultrasonic/Radiographic), and metallurgy.',
    globalDemandLevel: 'Critical',
    commonJobTitles: ['Certified Welding Inspector (CWI)', 'Master Pipefitter', 'NDT Technician', 'Structural Fabricator'],
    keyFrameworks: ['AWS Certified Welder', 'ASME Section IX', 'API 1104 Pipe Welding', 'NDT Level II/III', 'TIG / GTAW Welding'],
    countriesData: build197CountriesDataForSkill(
      2.2,
      70000,
      115000,
      'Construction, Architecture & Trades',
      ['AWS Certified Welder', 'ASME Section IX', 'TIG Welding', 'NDT Inspection'],
      {
        US: {
          totalTalentPool: 780000,
          usStateBreakdown: generateUsStateBreakdown(55000, 70000, 115000, ['TIG Welding', 'ASME Pipefitting', 'NDT Testing']),
        },
        CA: {
          totalTalentPool: 140000,
          caProvinceBreakdown: generateCaProvinceBreakdown(55000, 68000, 110000, ['Red Seal Welder', 'Pressure Piping']),
        },
      }
    ),
  },

  // 10. ENERGY, RENEWABLES & MINING
  {
    id: 'solar_wind_renewable_energy',
    name: 'Solar Photovoltaics, Wind Energy & Grid Storage',
    category: 'Energy, Renewables & Mining',
    description: 'Utility-scale solar PV plant design, wind turbine engineering, battery energy storage systems (BESS), grid interconnection standards, and PVSyst simulation.',
    globalDemandLevel: 'Critical',
    commonJobTitles: ['Renewable Energy Engineer', 'Solar PV Project Developer', 'BESS Specialist', 'Wind Farm Engineer'],
    keyFrameworks: ['PVSyst Software', 'AutoCAD Electrical', 'Battery Energy Storage (BESS)', 'IEEE 1547 Grid Standard', 'NABCEP Certification'],
    countriesData: build197CountriesDataForSkill(
      1.6,
      95000,
      150000,
      'Energy, Renewables & Mining',
      ['PVSyst Solar Design', 'BESS Battery Storage', 'Wind Energy', 'Grid Interconnection'],
      {
        US: {
          totalTalentPool: 450000,
          usStateBreakdown: generateUsStateBreakdown(32000, 95000, 150000, ['PVSyst', 'Solar PV', 'BESS Storage', 'Wind Turbine']),
        },
        CN: {
          totalTalentPool: 1200000,
          demandLevel: 'Critical',
          averageSalaryUsd: '$28,000 - $65,000',
          sourcingNotes: 'Global leader in solar PV manufacturing and wind turbine equipment export.',
        },
        ES: {
          totalTalentPool: 110000,
          demandLevel: 'Critical',
          averageSalaryUsd: '$55,000 - $95,000',
          sourcingNotes: 'European clean energy pioneer (Iberdrola, Acciona).',
        },
      }
    ),
  },

  {
    id: 'mining_geophysics_exploration',
    name: 'Mining Exploration, Geophysics & Hydrology',
    category: 'Energy, Renewables & Mining',
    description: 'Geological resource estimation, Leapfrog 3D modeling, open-pit and underground mine planning (Deswik), environmental hydrology, and mineral economics.',
    globalDemandLevel: 'Critical',
    commonJobTitles: ['Mining Engineer', 'Exploration Geologist', 'Hydrogeologist', 'Mine Planning Lead'],
    keyFrameworks: ['Leapfrog Geo 3D', 'Deswik Mine Planning', 'Micromine', 'JORC Code Compliance', 'Resource Estimation'],
    countriesData: build197CountriesDataForSkill(
      1.2,
      105000,
      175000,
      'Energy, Renewables & Mining',
      ['Leapfrog Geo', 'Deswik Mine Planning', 'JORC Code', 'Hydrogeology'],
      {
        AU: {
          totalTalentPool: 140000,
          demandLevel: 'Critical',
          averageSalaryUsd: '$120,000 - $185,000',
          sourcingNotes: 'World leader in iron ore, lithium, and critical mineral extraction engineering.',
          auStateBreakdown: generateAuStateBreakdown(30000, 120000, 185000, ['Deswik', 'Leapfrog 3D', 'Open Pit Mining', 'Lithium Extraction']),
        },
        CA: {
          totalTalentPool: 115000,
          demandLevel: 'Critical',
          caProvinceBreakdown: generateCaProvinceBreakdown(30000, 105000, 165000, ['Exploration Geology', 'NI 43-101', 'Potash Mining']),
        },
        CL: {
          totalTalentPool: 85000,
          demandLevel: 'Critical',
          averageSalaryUsd: '$45,000 - $95,000',
          sourcingNotes: 'Major global copper and lithium mining workforce.',
        },
      }
    ),
  },

  // 11. MANUFACTURING & INDUSTRIAL AUTOMATION
  {
    id: 'industrial_automation_plc_robotics',
    name: 'Industrial Automation, PLC Programming & Robotics',
    category: 'Manufacturing & Industrial Automation',
    description: 'Rockwell/Siemens PLC logic programming, FANUC/KUKA robotic arms, SCADA monitoring, industrial IoT sensors, and factory line commissioning.',
    globalDemandLevel: 'Very High',
    commonJobTitles: ['Controls Engineer', 'Automation Specialist', 'Robotics Programmer', 'SCADA Engineer'],
    keyFrameworks: ['Allen-Bradley Studio 5000', 'Siemens TIA Portal', 'FANUC Robotics (ROBOGUIDE)', 'SCADA (Ignition)', 'Modbus / Ethernet/IP'],
    countriesData: build197CountriesDataForSkill(
      1.8,
      95000,
      145000,
      'Manufacturing & Industrial Automation',
      ['Allen-Bradley PLC', 'Siemens TIA Portal', 'FANUC Robotics', 'Ignition SCADA'],
      {
        US: {
          totalTalentPool: 620000,
          usStateBreakdown: generateUsStateBreakdown(45000, 95000, 145000, ['PLC Programming', 'Siemens', 'FANUC Robotics']),
        },
        DE: {
          totalTalentPool: 380000,
          demandLevel: 'Critical',
          averageSalaryUsd: '$80,000 - $130,000',
          sourcingNotes: 'Industry 4.0 automation birthplace (Siemens, KUKA, Festo).',
        },
        JP: {
          totalTalentPool: 420000,
          demandLevel: 'Critical',
          averageSalaryUsd: '$55,000 - $95,000',
          sourcingNotes: 'Global robotics stronghold (FANUC, Yaskawa, Kawasaki).',
        },
      }
    ),
  },

  // 12. SALES, MARKETING & E-COMMERCE
  {
    id: 'b2b_saas_enterprise_sales',
    name: 'B2B Enterprise SaaS Sales & Account Management',
    category: 'Sales, Marketing & E-Commerce',
    description: 'MEDDPICC sales methodology, Salesforce CRM pipeline management, enterprise contract negotiation, solution selling, and customer ARR growth.',
    globalDemandLevel: 'Very High',
    commonJobTitles: ['Enterprise Account Executive', 'Sales Development Manager', 'VP of Global Sales', 'Account Director'],
    keyFrameworks: ['MEDDPICC Sales Framework', 'Salesforce CRM', 'Gong.io Sales Intelligence', 'Outreach.io', 'Challenger Sale Method'],
    countriesData: build197CountriesDataForSkill(
      2.5,
      100000,
      220000,
      'Sales, Marketing & E-Commerce',
      ['MEDDPICC', 'Salesforce CRM', 'Enterprise Closing', 'Pipeline Generation'],
      {
        US: {
          totalTalentPool: 1350000,
          usStateBreakdown: generateUsStateBreakdown(95000, 105000, 225000, ['MEDDPICC', 'Salesforce', 'Enterprise Sales', 'ARR Growth']),
        },
        AU: {
          totalTalentPool: 110000,
          auStateBreakdown: generateAuStateBreakdown(95000, 90000, 180000, ['Enterprise SaaS', 'B2B Tech Closing']),
        },
        GB: {
          totalTalentPool: 220000,
          ukNationBreakdown: generateUkNationBreakdown(95000, 95000, 200000, ['London SaaS Sales', 'EMEA Enterprise Deals']),
        },
      }
    ),
  },

  {
    id: 'growth_seo_ecom_marketing',
    name: 'Growth Marketing, SEO & E-Commerce Strategy',
    category: 'Sales, Marketing & E-Commerce',
    description: 'Performance marketing, search engine optimization (SEO), conversion rate optimization (CRO), Google Ads, Meta Ads, Shopify E-Commerce, and marketing analytics.',
    globalDemandLevel: 'High',
    commonJobTitles: ['Growth Marketing Manager', 'SEO Director', 'E-Commerce Specialist', 'Performance Marketer'],
    keyFrameworks: ['Google Analytics 4 (GA4)', 'Google Ads', 'Ahrefs / SEMrush', 'Shopify Plus', 'Meta Ads Manager', 'Klaviyo Email'],
    countriesData: build197CountriesDataForSkill(
      2.0,
      85000,
      135000,
      'Sales, Marketing & E-Commerce',
      ['GA4 Analytics', 'SEO Optimization', 'Google Ads', 'Shopify'],
      {
        US: {
          totalTalentPool: 980000,
          usStateBreakdown: generateUsStateBreakdown(65000, 85000, 135000, ['GA4', 'SEO', 'Google Ads', 'Shopify']),
        },
        AU: {
          totalTalentPool: 95000,
          auStateBreakdown: generateAuStateBreakdown(65000, 78000, 120000, ['Growth Marketing', 'E-Commerce', 'SEMrush']),
        },
        CA: {
          totalTalentPool: 135000,
          caProvinceBreakdown: generateCaProvinceBreakdown(65000, 72000, 115000, ['Shopify Ecosystem', 'SEO', 'Performance Marketing']),
        },
        GB: {
          totalTalentPool: 175000,
          ukNationBreakdown: generateUkNationBreakdown(65000, 75000, 122000, ['Digital Marketing', 'GA4', 'E-Commerce SEO']),
        },
      }
    ),
  },

  // 13. HUMAN RESOURCES & OPERATIONS
  {
    id: 'workday_hris_people_ops',
    name: 'Workday HRIS & Global People Operations',
    category: 'Human Resources & Operations',
    description: 'Workday HCM configuration, payroll integrations, talent acquisition systems, global employee relations, HR compliance, and workforce analytics.',
    globalDemandLevel: 'High',
    commonJobTitles: ['Workday HRIS Consultant', 'People Operations Director', 'HR Business Partner (HRBP)', 'Talent Lead'],
    keyFrameworks: ['Workday HCM', 'Workday Prism Analytics', 'Greenhouse ATS', 'BambooHR', 'Labor Law Compliance', 'ADP Payroll'],
    countriesData: build197CountriesDataForSkill(
      1.5,
      90000,
      140000,
      'Human Resources & Operations',
      ['Workday HCM', 'HRIS Systems', 'Talent Analytics', 'ADP Payroll'],
      {
        US: {
          totalTalentPool: 620000,
          usStateBreakdown: generateUsStateBreakdown(40000, 90000, 140000, ['Workday HCM', 'HRIS', 'People Ops']),
        },
        AU: {
          totalTalentPool: 68000,
          auStateBreakdown: generateAuStateBreakdown(40000, 82000, 125000, ['Workday', 'HR Business Partner']),
        },
        CA: {
          totalTalentPool: 95000,
          caProvinceBreakdown: generateCaProvinceBreakdown(40000, 78000, 120000, ['Workday HCM', 'Global HRIS']),
        },
        GB: {
          totalTalentPool: 125000,
          ukNationBreakdown: generateUkNationBreakdown(40000, 80000, 128000, ['Workday Specialist', 'People Analytics']),
        },
      }
    ),
  },

  // 14. DESIGN, CREATIVE & MEDIA
  {
    id: 'uiux_design_figma',
    name: 'UI/UX Design, Figma Architecture & Design Systems',
    category: 'Design, Creative & Media',
    description: 'User research, wireframing, interactive prototyping, Figma design token systems, accessibility (WCAG 2.1), and usability testing.',
    globalDemandLevel: 'Very High',
    commonJobTitles: ['Lead Product Designer', 'UI/UX Designer', 'Design Systems Architect', 'UX Researcher'],
    keyFrameworks: ['Figma', 'Figma Variables & Tokens', 'Protopie', 'Maze Usability Testing', 'WCAG 2.1 AA', 'Storybook UI'],
    countriesData: build197CountriesDataForSkill(
      1.8,
      95000,
      155000,
      'Design, Creative & Media',
      ['Figma Design Systems', 'UX Research', 'Interactive Prototyping', 'WCAG Accessibility'],
      {
        US: {
          totalTalentPool: 590000,
          usStateBreakdown: generateUsStateBreakdown(42000, 95000, 155000, ['Figma', 'Design Systems', 'UX Research']),
        },
        AU: {
          totalTalentPool: 65000,
          auStateBreakdown: generateAuStateBreakdown(42000, 85000, 135000, ['Figma Specialist', 'UI/UX Product Design']),
        },
        CA: {
          totalTalentPool: 92000,
          caProvinceBreakdown: generateCaProvinceBreakdown(42000, 82000, 130000, ['Product Design', 'Figma Prototyping']),
        },
        GB: {
          totalTalentPool: 130000,
          ukNationBreakdown: generateUkNationBreakdown(42000, 88000, 140000, ['London Design Studios', 'Figma Tokens']),
        },
      }
    ),
  },

  {
    id: '3d_motion_graphics_aftereffects',
    name: 'Film 3D Motion Graphics & Unreal Engine Animation',
    category: 'Design, Creative & Media',
    description: '3D motion design, Cinema 4D, Unreal Engine 5 virtual production, Adobe After Effects compositing, Octane render, and visual effects (VFX).',
    globalDemandLevel: 'High',
    commonJobTitles: ['3D Motion Designer', 'Unreal Engine Technical Artist', 'VFX Compositor', 'Creative Director'],
    keyFrameworks: ['Cinema 4D', 'Unreal Engine 5', 'Adobe After Effects', 'Octane / Redshift', 'Blender', 'Houdini FX'],
    countriesData: build197CountriesDataForSkill(
      1.2,
      85000,
      140000,
      'Design, Creative & Media',
      ['Cinema 4D', 'Unreal Engine 5', 'After Effects', 'VFX Compositing'],
      {
        US: {
          totalTalentPool: 380000,
          usStateBreakdown: generateUsStateBreakdown(26000, 85000, 140000, ['Unreal Engine', 'Cinema 4D', 'After Effects']),
        },
        CA: {
          totalTalentPool: 110000,
          demandLevel: 'Critical',
          caProvinceBreakdown: generateCaProvinceBreakdown(26000, 80000, 130000, ['Vancouver VFX', 'Montreal Gaming Animation']),
        },
      }
    ),
  },

  // 15. EDUCATION & ACADEMIC RESEARCH
  {
    id: 'higher_education_stem_pedagogy',
    name: 'Higher Education STEM Instruction & Instructional Design',
    category: 'Education & Academic Research',
    description: 'University curriculum development, Canvas/Blackboard LMS, online STEM course design, academic peer-reviewed research publishing, and student assessment.',
    globalDemandLevel: 'Moderate',
    commonJobTitles: ['Associate Professor', 'Instructional Designer', 'STEM Lecturer', 'Academic Dean'],
    keyFrameworks: ['Canvas LMS', 'Blackboard Ultra', 'Quality Matters (QM) Rubric', 'Bloom’s Taxonomy', 'Articulate 360', 'Grant Writing'],
    countriesData: build197CountriesDataForSkill(
      2.5,
      75000,
      120000,
      'Education & Academic Research',
      ['Canvas LMS', 'Curriculum Design', 'Instructional Technology', 'STEM Pedagogy'],
      {
        US: {
          totalTalentPool: 1150000,
          usStateBreakdown: generateUsStateBreakdown(80000, 75000, 120000, ['Canvas LMS', 'Instructional Design', 'Higher Ed Pedagogy']),
        },
        AU: {
          totalTalentPool: 130000,
          auStateBreakdown: generateAuStateBreakdown(80000, 70000, 110000, ['Group of Eight Universities', 'LMS Pedagogy']),
        },
        GB: {
          totalTalentPool: 190000,
          ukNationBreakdown: generateUkNationBreakdown(80000, 72000, 115000, ['Russell Group Universities', 'Instructional Design']),
        },
      }
    ),
  },
];

// -------------------------------------------------------------
// FILTER UTILITY FUNCTIONS
// -------------------------------------------------------------
export function searchSkills(query: string, category: string): SkillItem[] {
  const cleanQuery = query.toLowerCase().trim();
  
  return SKILLS_DATA.filter((skill) => {
    const matchCategory = category === 'All Categories' || skill.category === category;
    if (!matchCategory) return false;

    if (!cleanQuery) return true;

    const nameMatch = skill.name.toLowerCase().includes(cleanQuery);
    const descMatch = skill.description.toLowerCase().includes(cleanQuery);
    const titleMatch = skill.commonJobTitles.some((t) => t.toLowerCase().includes(cleanQuery));
    const frameworkMatch = skill.keyFrameworks.some((f) => f.toLowerCase().includes(cleanQuery));

    return nameMatch || descMatch || titleMatch || frameworkMatch;
  });
}
