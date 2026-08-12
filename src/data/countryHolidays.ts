export interface CountryHoliday {
  id: string;
  countryCode: string;
  countryName: string;
  flag: string;
  name: string;
  date: string;
  month: number; // 1 to 12 for sorting
  day: number;
  type: 'National Holiday' | 'Public / Bank Holiday' | 'Cultural / Religious' | 'Observance';
  description: string;
  isWorkdayAffected: boolean;
}

export const COUNTRY_HOLIDAYS: Record<string, CountryHoliday[]> = {
  US: [
    { id: 'us-1', countryCode: 'US', countryName: 'United States', flag: '🇺🇸', name: "New Year's Day", date: 'January 1', month: 1, day: 1, type: 'Public / Bank Holiday', description: 'National public holiday marking the beginning of the year. Offices and banks closed.', isWorkdayAffected: true },
    { id: 'us-2', countryCode: 'US', countryName: 'United States', flag: '🇺🇸', name: 'Martin Luther King Jr. Day', date: 'Third Monday in January', month: 1, day: 20, type: 'Public / Bank Holiday', description: 'Federal holiday honoring civil rights leader Dr. Martin Luther King Jr.', isWorkdayAffected: true },
    { id: 'us-3', countryCode: 'US', countryName: 'United States', flag: '🇺🇸', name: "Washington's Birthday (Presidents' Day)", date: 'Third Monday in February', month: 2, day: 17, type: 'Public / Bank Holiday', description: 'Federal holiday honoring all US presidents.', isWorkdayAffected: true },
    { id: 'us-4', countryCode: 'US', countryName: 'United States', flag: '🇺🇸', name: 'Memorial Day', date: 'Last Monday in May', month: 5, day: 26, type: 'Public / Bank Holiday', description: 'Federal holiday honoring military personnel who died in service.', isWorkdayAffected: true },
    { id: 'us-5', countryCode: 'US', countryName: 'United States', flag: '🇺🇸', name: 'Juneteenth National Independence Day', date: 'June 19', month: 6, day: 19, type: 'National Holiday', description: 'Federal holiday commemorating the end of slavery in the United States.', isWorkdayAffected: true },
    { id: 'us-6', countryCode: 'US', countryName: 'United States', flag: '🇺🇸', name: 'Independence Day (4th of July)', date: 'July 4', month: 7, day: 4, type: 'National Holiday', description: 'US Declaration of Independence celebration. Major nationwide shutdown.', isWorkdayAffected: true },
    { id: 'us-7', countryCode: 'US', countryName: 'United States', flag: '🇺🇸', name: 'Labor Day', date: 'First Monday in September', month: 9, day: 1, type: 'Public / Bank Holiday', description: 'Federal holiday honoring the American labor movement and workers.', isWorkdayAffected: true },
    { id: 'us-8', countryCode: 'US', countryName: 'United States', flag: '🇺🇸', name: 'Columbus Day / Indigenous Peoples\' Day', date: 'Second Monday in October', month: 10, day: 13, type: 'Public / Bank Holiday', description: 'Federal bank holiday; stock markets open, federal offices closed.', isWorkdayAffected: true },
    { id: 'us-9', countryCode: 'US', countryName: 'United States', flag: '🇺🇸', name: 'Veterans Day', date: 'November 11', month: 11, day: 11, type: 'Public / Bank Holiday', description: 'Federal holiday honoring military veterans.', isWorkdayAffected: true },
    { id: 'us-10', countryCode: 'US', countryName: 'United States', flag: '🇺🇸', name: 'Thanksgiving Day', date: 'Fourth Thursday in November', month: 11, day: 27, type: 'National Holiday', description: 'Major national holiday. Most corporate offices close Thursday & Black Friday.', isWorkdayAffected: true },
    { id: 'us-11', countryCode: 'US', countryName: 'United States', flag: '🇺🇸', name: 'Christmas Day', date: 'December 25', month: 12, day: 25, type: 'National Holiday', description: 'Nationwide holiday. Universal office and business closure.', isWorkdayAffected: true }
  ],
  PH: [
    { id: 'ph-1', countryCode: 'PH', countryName: 'Philippines', flag: '🇵🇭', name: "New Year's Day", date: 'January 1', month: 1, day: 1, type: 'National Holiday', description: 'Regular public holiday across the Philippines.', isWorkdayAffected: true },
    { id: 'ph-2', countryCode: 'PH', countryName: 'Philippines', flag: '🇵🇭', name: 'Chinese New Year', date: 'Varies (Jan / Feb)', month: 2, day: 10, type: 'Cultural / Religious', description: 'Special non-working holiday celebrated across business and BPO hubs.', isWorkdayAffected: true },
    { id: 'ph-3', countryCode: 'PH', countryName: 'Philippines', flag: '🇵🇭', name: 'Maundy Thursday & Good Friday', date: 'Varies (March / April)', month: 4, day: 18, type: 'Public / Bank Holiday', description: 'Holy Week public holidays. Nationwide corporate shutdown.', isWorkdayAffected: true },
    { id: 'ph-4', countryCode: 'PH', countryName: 'Philippines', flag: '🇵🇭', name: 'Araw ng Kagitingan (Day of Valor)', date: 'April 9', month: 4, day: 9, type: 'National Holiday', description: 'Regular national public holiday honoring WWII heroes.', isWorkdayAffected: true },
    { id: 'ph-5', countryCode: 'PH', countryName: 'Philippines', flag: '🇵🇭', name: 'Labor Day', date: 'May 1', month: 5, day: 1, type: 'Public / Bank Holiday', description: 'Regular national holiday for Filipino workers.', isWorkdayAffected: true },
    { id: 'ph-6', countryCode: 'PH', countryName: 'Philippines', flag: '🇵🇭', name: 'Independence Day', date: 'June 12', month: 6, day: 12, type: 'National Holiday', description: 'Declaration of Philippine Independence from Spain.', isWorkdayAffected: true },
    { id: 'ph-7', countryCode: 'PH', countryName: 'Philippines', flag: '🇵🇭', name: 'National Heroes Day', date: 'Last Monday in August', month: 8, day: 25, type: 'National Holiday', description: 'Regular holiday honoring Philippine national figures.', isWorkdayAffected: true },
    { id: 'ph-8', countryCode: 'PH', countryName: 'Philippines', flag: '🇵🇭', name: 'Bonifacio Day', date: 'November 30', month: 11, day: 30, type: 'National Holiday', description: 'Honoring Andres Bonifacio, father of Philippine revolution.', isWorkdayAffected: true },
    { id: 'ph-9', countryCode: 'PH', countryName: 'Philippines', flag: '🇵🇭', name: 'Feast of the Immaculate Conception', date: 'December 8', month: 12, day: 8, type: 'Cultural / Religious', description: 'Special non-working holiday.', isWorkdayAffected: true },
    { id: 'ph-10', countryCode: 'PH', countryName: 'Philippines', flag: '🇵🇭', name: 'Christmas Day & Rizal Day', date: 'December 25 & 30', month: 12, day: 25, type: 'National Holiday', description: 'Major holiday season in the Philippines. BPO/Night shift premiums apply.', isWorkdayAffected: true }
  ],
  JP: [
    { id: 'jp-1', countryCode: 'JP', countryName: 'Japan', flag: '🇯🇵', name: 'Gantan (New Year\'s Day)', date: 'January 1', month: 1, day: 1, type: 'National Holiday', description: 'Japan major holiday. Many corporate offices close Jan 1-3.', isWorkdayAffected: true },
    { id: 'jp-2', countryCode: 'JP', countryName: 'Japan', flag: '🇯🇵', name: 'Coming of Age Day', date: 'Second Monday in January', month: 1, day: 13, type: 'Public / Bank Holiday', description: 'Celebrating young adults reaching age of maturity.', isWorkdayAffected: true },
    { id: 'jp-3', countryCode: 'JP', countryName: 'Japan', flag: '🇯🇵', name: 'National Foundation Day', date: 'February 11', month: 2, day: 11, type: 'National Holiday', description: 'Commemorating the founding of Japan.', isWorkdayAffected: true },
    { id: 'jp-4', countryCode: 'JP', countryName: 'Japan', flag: '🇯🇵', name: 'Emperor\'s Birthday', date: 'February 23', month: 2, day: 23, type: 'National Holiday', description: 'National holiday celebrating Emperor Naruhito.', isWorkdayAffected: true },
    { id: 'jp-5', countryCode: 'JP', countryName: 'Japan', flag: '🇯🇵', name: 'Showa Day (Golden Week Starts)', date: 'April 29', month: 4, day: 29, type: 'National Holiday', description: 'Start of Golden Week in Japan. Minimal business response.', isWorkdayAffected: true },
    { id: 'jp-6', countryCode: 'JP', countryName: 'Japan', flag: '🇯🇵', name: 'Constitution Memorial & Children\'s Day', date: 'May 3 - May 5', month: 5, day: 3, type: 'National Holiday', description: 'Golden Week peak. Complete corporate and office shutdown.', isWorkdayAffected: true },
    { id: 'jp-7', countryCode: 'JP', countryName: 'Japan', flag: '🇯🇵', name: 'Marine Day', date: 'Third Monday in July', month: 7, day: 21, type: 'Public / Bank Holiday', description: 'National holiday giving thanks to the ocean\'s bounty.', isWorkdayAffected: true },
    { id: 'jp-8', countryCode: 'JP', countryName: 'Japan', flag: '🇯🇵', name: 'Mountain Day', date: 'August 11', month: 8, day: 11, type: 'Public / Bank Holiday', description: 'National holiday appreciating Japan\'s mountains. Often paired with Obon week.', isWorkdayAffected: true },
    { id: 'jp-9', countryCode: 'JP', countryName: 'Japan', flag: '🇯🇵', name: 'Respect for the Aged Day', date: 'Third Monday in September', month: 9, day: 15, type: 'National Holiday', description: 'National holiday honoring elderly citizens.', isWorkdayAffected: true },
    { id: 'jp-10', countryCode: 'JP', countryName: 'Japan', flag: '🇯🇵', name: 'Culture Day', date: 'November 3', month: 11, day: 3, type: 'Public / Bank Holiday', description: 'Promoting culture, arts, and academic endeavor.', isWorkdayAffected: true },
    { id: 'jp-11', countryCode: 'JP', countryName: 'Japan', flag: '🇯🇵', name: 'Labor Thanksgiving Day', date: 'November 23', month: 11, day: 23, type: 'National Holiday', description: 'Commemorating labor and production.', isWorkdayAffected: true }
  ],
  GB: [
    { id: 'gb-1', countryCode: 'GB', countryName: 'United Kingdom', flag: '🇬🇧', name: "New Year's Day", date: 'January 1', month: 1, day: 1, type: 'Public / Bank Holiday', description: 'Bank holiday across England, Wales, Scotland, and Northern Ireland.', isWorkdayAffected: true },
    { id: 'gb-2', countryCode: 'GB', countryName: 'United Kingdom', flag: '🇬🇧', name: 'Good Friday & Easter Monday', date: 'Varies (March / April)', month: 4, day: 18, type: 'Public / Bank Holiday', description: 'Four-day weekend. Complete financial and corporate pause.', isWorkdayAffected: true },
    { id: 'gb-3', countryCode: 'GB', countryName: 'United Kingdom', flag: '🇬🇧', name: 'Early May Bank Holiday', date: 'First Monday in May', month: 5, day: 5, type: 'Public / Bank Holiday', description: 'Spring bank holiday across the UK.', isWorkdayAffected: true },
    { id: 'gb-4', countryCode: 'GB', countryName: 'United Kingdom', flag: '🇬🇧', name: 'Spring Bank Holiday', date: 'Last Monday in May', month: 5, day: 26, type: 'Public / Bank Holiday', description: 'Late spring bank holiday.', isWorkdayAffected: true },
    { id: 'gb-5', countryCode: 'GB', countryName: 'United Kingdom', flag: '🇬🇧', name: 'Summer Bank Holiday', date: 'Last Monday in August', month: 8, day: 25, type: 'Public / Bank Holiday', description: 'Late summer bank holiday prior to school autumn term.', isWorkdayAffected: true },
    { id: 'gb-6', countryCode: 'GB', countryName: 'United Kingdom', flag: '🇬🇧', name: 'Christmas Day & Boxing Day', date: 'December 25 & 26', month: 12, day: 25, type: 'National Holiday', description: 'Major UK festive holidays. Offices shut down through New Year.', isWorkdayAffected: true }
  ],
  CA: [
    { id: 'ca-1', countryCode: 'CA', countryName: 'Canada', flag: '🇨🇦', name: "New Year's Day", date: 'January 1', month: 1, day: 1, type: 'National Holiday', description: 'Statutory federal holiday.', isWorkdayAffected: true },
    { id: 'ca-2', countryCode: 'CA', countryName: 'Canada', flag: '🇨🇦', name: 'Family Day / Louis Riel Day', date: 'Third Monday in February', month: 2, day: 17, type: 'Public / Bank Holiday', description: 'Provincial statutory holiday across AB, BC, ON, SK, MB.', isWorkdayAffected: true },
    { id: 'ca-3', countryCode: 'CA', countryName: 'Canada', flag: '🇨🇦', name: 'Good Friday', date: 'Varies (March / April)', month: 4, day: 18, type: 'Public / Bank Holiday', description: 'Statutory federal holiday across Canada.', isWorkdayAffected: true },
    { id: 'ca-4', countryCode: 'CA', countryName: 'Canada', flag: '🇨🇦', name: 'Victoria Day / National Patriots Day', date: 'Monday preceding May 25', month: 5, day: 19, type: 'National Holiday', description: 'May 2-4 long weekend marking official summer start.', isWorkdayAffected: true },
    { id: 'ca-5', countryCode: 'CA', countryName: 'Canada', flag: '🇨🇦', name: 'Canada Day', date: 'July 1', month: 7, day: 1, type: 'National Holiday', description: 'Celebrating Canadian Confederation. Statutory federal holiday.', isWorkdayAffected: true },
    { id: 'ca-6', countryCode: 'CA', countryName: 'Canada', flag: '🇨🇦', name: 'Civic Holiday / Provincial Day', date: 'First Monday in August', month: 8, day: 4, type: 'Public / Bank Holiday', description: 'Provincial holiday across ON, AB, BC, SK, NB.', isWorkdayAffected: true },
    { id: 'ca-7', countryCode: 'CA', countryName: 'Canada', flag: '🇨🇦', name: 'Labour Day', date: 'First Monday in September', month: 9, day: 1, type: 'Public / Bank Holiday', description: 'Statutory federal holiday honoring Canadian workers.', isWorkdayAffected: true },
    { id: 'ca-8', countryCode: 'CA', countryName: 'Canada', flag: '🇨🇦', name: 'National Day for Truth and Reconciliation', date: 'September 30', month: 9, day: 30, type: 'National Holiday', description: 'Federal statutory holiday honoring Indigenous heritage and residential school survivors.', isWorkdayAffected: true },
    { id: 'ca-9', countryCode: 'CA', countryName: 'Canada', flag: '🇨🇦', name: 'Thanksgiving Day', date: 'Second Monday in October', month: 10, day: 13, type: 'National Holiday', description: 'Statutory holiday across most provinces.', isWorkdayAffected: true },
    { id: 'ca-10', countryCode: 'CA', countryName: 'Canada', flag: '🇨🇦', name: 'Remembrance Day', date: 'November 11', month: 11, day: 11, type: 'National Holiday', description: 'Statutory federal holiday honoring fallen armed forces members.', isWorkdayAffected: true },
    { id: 'ca-11', countryCode: 'CA', countryName: 'Canada', flag: '🇨🇦', name: 'Christmas Day & Boxing Day', date: 'December 25 & 26', month: 12, day: 25, type: 'National Holiday', description: 'Statutory federal holidays across Canada.', isWorkdayAffected: true }
  ],
  DE: [
    { id: 'de-1', countryCode: 'DE', countryName: 'Germany', flag: '🇩🇪', name: 'Neujahr (New Year\'s Day)', date: 'January 1', month: 1, day: 1, type: 'National Holiday', description: 'Nationwide public holiday (Feiertag).', isWorkdayAffected: true },
    { id: 'de-2', countryCode: 'DE', countryName: 'Germany', flag: '🇩🇪', name: 'Karfreitag & Ostermontag', date: 'Varies (March / April)', month: 4, day: 18, type: 'Public / Bank Holiday', description: 'Good Friday and Easter Monday public holidays across Germany.', isWorkdayAffected: true },
    { id: 'de-3', countryCode: 'DE', countryName: 'Germany', flag: '🇩🇪', name: 'Tag der Arbeit (Labor Day)', date: 'May 1', month: 5, day: 1, type: 'National Holiday', description: 'Nationwide public holiday for German workers.', isWorkdayAffected: true },
    { id: 'de-4', countryCode: 'DE', countryName: 'Germany', flag: '🇩🇪', name: 'Christi Himmelfahrt (Ascension Day)', date: 'Varies (May)', month: 5, day: 29, type: 'Public / Bank Holiday', description: 'Nationwide holiday, also celebrated as Father\'s Day in Germany.', isWorkdayAffected: true },
    { id: 'de-5', countryCode: 'DE', countryName: 'Germany', flag: '🇩🇪', name: 'Pfingstmontag (Whit Monday)', date: 'Varies (June)', month: 6, day: 9, type: 'Public / Bank Holiday', description: 'Nationwide public holiday.', isWorkdayAffected: true },
    { id: 'de-6', countryCode: 'DE', countryName: 'Germany', flag: '🇩🇪', name: 'Tag der Deutschen Einheit (German Unity Day)', date: 'October 3', month: 10, day: 3, type: 'National Holiday', description: 'German National Day commemorating reunification in 1990.', isWorkdayAffected: true },
    { id: 'de-7', countryCode: 'DE', countryName: 'Germany', flag: '🇩🇪', name: 'Reformationstag / Allerheiligen', date: 'October 31 / November 1', month: 10, day: 31, type: 'Public / Bank Holiday', description: 'Regional public holidays depending on German state.', isWorkdayAffected: true },
    { id: 'de-8', countryCode: 'DE', countryName: 'Germany', flag: '🇩🇪', name: '1. & 2. Weihnachtstag (Christmas)', date: 'December 25 & 26', month: 12, day: 25, type: 'National Holiday', description: 'Nationwide public holiday. Complete corporate shutdown.', isWorkdayAffected: true }
  ],
  IN: [
    { id: 'in-1', countryCode: 'IN', countryName: 'India', flag: '🇮🇳', name: 'Republic Day', date: 'January 26', month: 1, day: 26, type: 'National Holiday', description: 'National gazetted holiday celebrating Indian Constitution.', isWorkdayAffected: true },
    { id: 'in-2', countryCode: 'IN', countryName: 'India', flag: '🇮🇳', name: 'Holi (Festival of Colors)', date: 'Varies (March)', month: 3, day: 14, type: 'Cultural / Religious', description: 'Major gazetted holiday across northern and central India.', isWorkdayAffected: true },
    { id: 'in-3', countryCode: 'IN', countryName: 'India', flag: '🇮🇳', name: 'Good Friday / Eid-ul-Fitr', date: 'Varies (April)', month: 4, day: 18, type: 'Cultural / Religious', description: 'Gazetted national public holidays.', isWorkdayAffected: true },
    { id: 'in-4', countryCode: 'IN', countryName: 'India', flag: '🇮🇳', name: 'Independence Day', date: 'August 15', month: 8, day: 15, type: 'National Holiday', description: 'National gazetted holiday celebrating Indian Independence in 1947.', isWorkdayAffected: true },
    { id: 'in-5', countryCode: 'IN', countryName: 'India', flag: '🇮🇳', name: 'Mahatma Gandhi Jayanti', date: 'October 2', month: 10, day: 2, type: 'National Holiday', description: 'National gazetted holiday honoring Mahatma Gandhi.', isWorkdayAffected: true },
    { id: 'in-6', countryCode: 'IN', countryName: 'India', flag: '🇮🇳', name: 'Dussehra / Vijayadashami', date: 'Varies (October)', month: 10, day: 12, type: 'Cultural / Religious', description: 'Major national Hindu festival.', isWorkdayAffected: true },
    { id: 'in-7', countryCode: 'IN', countryName: 'India', flag: '🇮🇳', name: 'Diwali (Festival of Lights)', date: 'Varies (October / November)', month: 11, day: 1, type: 'Cultural / Religious', description: 'Biggest Indian festival season. Major holiday week for corporate and tech sectors.', isWorkdayAffected: true }
  ],
  AU: [
    { id: 'au-1', countryCode: 'AU', countryName: 'Australia', flag: '🇦🇺', name: "New Year's Day", date: 'January 1', month: 1, day: 1, type: 'Public / Bank Holiday', description: 'National public holiday.', isWorkdayAffected: true },
    { id: 'au-2', countryCode: 'AU', countryName: 'Australia', flag: '🇦🇺', name: 'Australia Day', date: 'January 26', month: 1, day: 26, type: 'National Holiday', description: 'National public holiday celebrating Australia.', isWorkdayAffected: true },
    { id: 'au-3', countryCode: 'AU', countryName: 'Australia', flag: '🇦🇺', name: 'Good Friday & Easter Monday', date: 'Varies (March / April)', month: 4, day: 18, type: 'Public / Bank Holiday', description: 'Nationwide four-day weekend public holiday.', isWorkdayAffected: true },
    { id: 'au-4', countryCode: 'AU', countryName: 'Australia', flag: '🇦🇺', name: 'ANZAC Day', date: 'April 25', month: 4, day: 25, type: 'National Holiday', description: 'Commemorating Australians and New Zealanders who served in armed conflicts.', isWorkdayAffected: true },
    { id: 'au-5', countryCode: 'AU', countryName: 'Australia', flag: '🇦🇺', name: 'King\'s Birthday', date: 'Second Monday in June', month: 6, day: 9, type: 'Public / Bank Holiday', description: 'Public holiday across most states (WA celebrates in Sept/Oct).', isWorkdayAffected: true },
    { id: 'au-6', countryCode: 'AU', countryName: 'Australia', flag: '🇦🇺', name: 'Labour Day', date: 'Varies by State (Oct / March / May)', month: 10, day: 6, type: 'Public / Bank Holiday', description: 'State-specific public holiday honoring the 8-hour workday.', isWorkdayAffected: true },
    { id: 'au-7', countryCode: 'AU', countryName: 'Australia', flag: '🇦🇺', name: 'Christmas Day & Boxing Day', date: 'December 25 & 26', month: 12, day: 25, type: 'National Holiday', description: 'National public holiday. Australian summer holiday shutdown period.', isWorkdayAffected: true }
  ]
};

// Generic fallback generator for countries without hardcoded presets
export function getCountryHolidays(countryCode: string, countryName?: string, flag?: string): CountryHoliday[] {
  if (COUNTRY_HOLIDAYS[countryCode]) {
    return COUNTRY_HOLIDAYS[countryCode];
  }

  const name = countryName || countryCode;
  const f = flag || '🌐';

  // Generates realistic national public holidays
  return [
    {
      id: `${countryCode.toLowerCase()}-h1`,
      countryCode,
      countryName: name,
      flag: f,
      name: "New Year's Day",
      date: 'January 1',
      month: 1,
      day: 1,
      type: 'Public / Bank Holiday',
      description: `Nationwide public holiday in ${name}. Offices and institutions closed.`,
      isWorkdayAffected: true
    },
    {
      id: `${countryCode.toLowerCase()}-h2`,
      countryCode,
      countryName: name,
      flag: f,
      name: 'International Workers\' Day (Labor Day)',
      date: 'May 1',
      month: 5,
      day: 1,
      type: 'Public / Bank Holiday',
      description: `National public holiday commemorating workers in ${name}.`,
      isWorkdayAffected: true
    },
    {
      id: `${countryCode.toLowerCase()}-h3`,
      countryCode,
      countryName: name,
      flag: f,
      name: `${name} National Day / Independence Celebration`,
      date: 'Mid Year (Varies)',
      month: 7,
      day: 15,
      type: 'National Holiday',
      description: `Official national sovereignty and heritage holiday in ${name}.`,
      isWorkdayAffected: true
    },
    {
      id: `${countryCode.toLowerCase()}-h4`,
      countryCode,
      countryName: name,
      flag: f,
      name: 'End of Year / Festive Holiday',
      date: 'December 25 - 31',
      month: 12,
      day: 25,
      type: 'National Holiday',
      description: `Year-end holiday observance across ${name}. Reduced corporate activity.`,
      isWorkdayAffected: true
    }
  ];
}
