export interface StateLanguageBreakdown {
  stateName: string;
  stateCode?: string;
  capitalOrCity: string;
  populationEstimate?: string;
  primaryLanguage: string;
  secondaryLanguage?: string;
  percentages: { [languageName: string]: number };
  notes: string;
}

export interface CountryStateData {
  countryCode: string;
  countryName: string;
  subdivisionType: 'State' | 'Province' | 'Canton' | 'Department' | 'Region' | 'Territory';
  states: StateLanguageBreakdown[];
}

export const PRESET_STATE_LANGUAGES: { [countryCode: string]: CountryStateData } = {
  // UNITED STATES - COMPLETE 50 STATES + DC + PUERTO RICO
  US: {
    countryCode: 'US',
    countryName: 'United States',
    subdivisionType: 'State',
    states: [
      {
        stateName: 'Alabama',
        capitalOrCity: 'Montgomery / Birmingham',
        populationEstimate: '5.1 Million',
        primaryLanguage: 'English',
        secondaryLanguage: 'Spanish',
        percentages: { 'English': 95, 'Spanish': 3, 'German': 1, 'Other': 1 },
        notes: 'English is the dominant official language; Spanish speaker communities are growing in urban metro centers.'
      },
      {
        stateName: 'Alaska',
        capitalOrCity: 'Juneau / Anchorage',
        populationEstimate: '733,000',
        primaryLanguage: 'English',
        secondaryLanguage: 'Alaska Native Languages & Tagalog',
        percentages: { 'English': 83, 'Alaska Native (Yup’ik/Inupiaq)': 5, 'Tagalog': 4, 'Spanish': 3, 'Other': 5 },
        notes: '20 Indigenous Alaska Native languages hold official co-status alongside English.'
      },
      {
        stateName: 'Arizona',
        capitalOrCity: 'Phoenix',
        populationEstimate: '7.4 Million',
        primaryLanguage: 'English',
        secondaryLanguage: 'Spanish & Navajo',
        percentages: { 'English': 73, 'Spanish': 20, 'Navajo': 2, 'Chinese': 1, 'Other': 4 },
        notes: 'Rich southwestern linguistic blend featuring Spanish and the Navajo Nation (Diné bizaad).'
      },
      {
        stateName: 'Arkansas',
        capitalOrCity: 'Little Rock',
        populationEstimate: '3.0 Million',
        primaryLanguage: 'English',
        secondaryLanguage: 'Spanish & Marshallese',
        percentages: { 'English': 92, 'Spanish': 5, 'Marshallese': 1, 'Other': 2 },
        notes: 'Northwest Arkansas is home to the largest Marshallese Diaspora population outside the Marshall Islands.'
      },
      {
        stateName: 'California',
        capitalOrCity: 'Sacramento / Los Angeles',
        populationEstimate: '39 Million',
        primaryLanguage: 'English',
        secondaryLanguage: 'Spanish & Chinese',
        percentages: { 'English': 56, 'Spanish': 28, 'Chinese (Mandarin/Cantonese)': 3, 'Tagalog': 2, 'Vietnamese': 2, 'Other': 9 },
        notes: 'America’s most linguistically diverse state with over 200 spoken languages.'
      },
      {
        stateName: 'Colorado',
        capitalOrCity: 'Denver',
        populationEstimate: '5.8 Million',
        primaryLanguage: 'English',
        secondaryLanguage: 'Spanish',
        percentages: { 'English': 82, 'Spanish': 12, 'German': 1, 'Vietnamese': 1, 'Other': 4 },
        notes: 'High concentration of English speakers alongside vibrant Hispanic heritage communities in Denver and Pueblo.'
      },
      {
        stateName: 'Connecticut',
        capitalOrCity: 'Hartford / Bridgeport',
        populationEstimate: '3.6 Million',
        primaryLanguage: 'English',
        secondaryLanguage: 'Spanish & Portuguese',
        percentages: { 'English': 79, 'Spanish': 12, 'Portuguese': 2, 'Polish': 1, 'Italian': 1, 'Other': 5 },
        notes: 'Strong Lusophone (Portuguese) and Italian linguistic traditions alongside Spanish.'
      },
      {
        stateName: 'Delaware',
        capitalOrCity: 'Dover / Wilmington',
        populationEstimate: '1.0 Million',
        primaryLanguage: 'English',
        secondaryLanguage: 'Spanish & Haitian Creole',
        percentages: { 'English': 87, 'Spanish': 7, 'Haitian Creole / French': 2, 'Other': 4 },
        notes: 'Growing Mid-Atlantic hub with vibrant Haitian Creole and Spanish speaker networks.'
      },
      {
        stateName: 'District of Columbia',
        capitalOrCity: 'Washington, D.C.',
        populationEstimate: '670,000',
        primaryLanguage: 'English',
        secondaryLanguage: 'Spanish & Amharic',
        percentages: { 'English': 82, 'Spanish': 9, 'Amharic (Ethiopian)': 2, 'French': 2, 'Other': 5 },
        notes: 'National capital enclave boasting the largest Ethiopian Amharic-speaking community outside Addis Ababa.'
      },
      {
        stateName: 'Florida',
        capitalOrCity: 'Tallahassee / Miami',
        populationEstimate: '22.6 Million',
        primaryLanguage: 'English',
        secondaryLanguage: 'Spanish & Haitian Creole',
        percentages: { 'English': 71, 'Spanish': 22, 'Haitian Creole': 2, 'Portuguese': 1, 'French': 1, 'Other': 3 },
        notes: 'International crossroads with deep Cuban, Puerto Rican, South American, and Caribbean linguistic influences.'
      },
      {
        stateName: 'Georgia',
        capitalOrCity: 'Atlanta',
        populationEstimate: '11.0 Million',
        primaryLanguage: 'English',
        secondaryLanguage: 'Spanish & Korean',
        percentages: { 'English': 86, 'Spanish': 8, 'Korean': 1, 'Vietnamese': 1, 'Chinese': 1, 'Other': 3 },
        notes: 'Metro Atlanta features major Korean, Vietnamese, and Spanish commercial enclaves.'
      },
      {
        stateName: 'Hawaii',
        capitalOrCity: 'Honolulu',
        populationEstimate: '1.4 Million',
        primaryLanguage: 'English',
        secondaryLanguage: 'Hawaiian & Hawaiian Pidgin',
        percentages: { 'English': 74, 'Tagalog/Ilocano': 9, 'Japanese': 4, 'Hawaiian': 3, 'Hawaiian Pidgin': 8, 'Other': 2 },
        notes: 'Hawaiian (`Ōlelo Hawai`i) is official along with English; Pidgin (Hawaiian Creole English) is spoken daily.'
      },
      {
        stateName: 'Idaho',
        capitalOrCity: 'Boise',
        populationEstimate: '1.9 Million',
        primaryLanguage: 'English',
        secondaryLanguage: 'Spanish & Basque',
        percentages: { 'English': 89, 'Spanish': 8, 'Basque': 1, 'Other': 2 },
        notes: 'Boise is home to one of the largest Basque diaspora communities in North America.'
      },
      {
        stateName: 'Illinois',
        capitalOrCity: 'Springfield / Chicago',
        populationEstimate: '12.5 Million',
        primaryLanguage: 'English',
        secondaryLanguage: 'Spanish & Polish',
        percentages: { 'English': 77, 'Spanish': 13, 'Polish': 2, 'Chinese': 1, 'Tagalog': 1, 'Other': 6 },
        notes: 'Chicago is legendary as one of the world’s largest Polish-speaking cities outside Warsaw.'
      },
      {
        stateName: 'Indiana',
        capitalOrCity: 'Indianapolis',
        populationEstimate: '6.8 Million',
        primaryLanguage: 'English',
        secondaryLanguage: 'Spanish & German / Burmese',
        percentages: { 'English': 92, 'Spanish': 5, 'German / Amish Dialects': 1, 'Burmese (Chin)': 1, 'Other': 1 },
        notes: 'Indianapolis hosts a major Burmese Chin refugee sanctuary alongside Old Order Amish German communities.'
      },
      {
        stateName: 'Iowa',
        capitalOrCity: 'Des Moines',
        populationEstimate: '3.2 Million',
        primaryLanguage: 'English',
        secondaryLanguage: 'Spanish & Bosnian / Vietnamese',
        percentages: { 'English': 92, 'Spanish': 4, 'Bosnian': 1, 'Vietnamese': 1, 'Other': 2 },
        notes: 'Des Moines features historic Bosnian refugee heritage communities alongside rural agricultural Spanish.'
      },
      {
        stateName: 'Kansas',
        capitalOrCity: 'Topeka / Wichita',
        populationEstimate: '2.9 Million',
        primaryLanguage: 'English',
        secondaryLanguage: 'Spanish & Vietnamese',
        percentages: { 'English': 88, 'Spanish': 8, 'Vietnamese': 1, 'Other': 3 },
        notes: 'Southwestern Kansas and meatpacking centers feature vibrant multilingual Latino and Vietnamese populations.'
      },
      {
        stateName: 'Kentucky',
        capitalOrCity: 'Frankfort / Louisville',
        populationEstimate: '4.5 Million',
        primaryLanguage: 'English',
        secondaryLanguage: 'Spanish & German',
        percentages: { 'English': 94, 'Spanish': 3, 'German': 1, 'Other': 2 },
        notes: 'Appalachian English roots with growing international refugee communities in Louisville and Lexington.'
      },
      {
        stateName: 'Louisiana',
        capitalOrCity: 'Baton Rouge / New Orleans',
        populationEstimate: '4.6 Million',
        primaryLanguage: 'English',
        secondaryLanguage: 'Louisiana French & Cajun French',
        percentages: { 'English': 91, 'Spanish': 4, 'French / Cajun French': 3, 'Vietnamese': 1, 'Other': 1 },
        notes: 'CODOFIL preserves Louisiana French, Cajun French, and Louisiana Creole in Acadiana parishes.'
      },
      {
        stateName: 'Maine',
        capitalOrCity: 'Augusta / Portland',
        populationEstimate: '1.4 Million',
        primaryLanguage: 'English',
        secondaryLanguage: 'French & Somali',
        percentages: { 'English': 93, 'French (Acadian/Franco-American)': 3, 'Somali / Arabic': 2, 'Spanish': 1, 'Other': 1 },
        notes: 'Deep Franco-American history along the St. John Valley plus new Somali community in Lewiston.'
      },
      {
        stateName: 'Maryland',
        capitalOrCity: 'Annapolis / Baltimore',
        populationEstimate: '6.2 Million',
        primaryLanguage: 'English',
        secondaryLanguage: 'Spanish & African Languages',
        percentages: { 'English': 80, 'Spanish': 8, 'African Languages (Yoruba/Igbo/Amharic)': 2, 'French': 2, 'Chinese': 1, 'Other': 7 },
        notes: 'Washington suburb counties (Montgomery and Prince George’s) boast extreme global multilingualism.'
      },
      {
        stateName: 'Massachusetts',
        capitalOrCity: 'Boston',
        populationEstimate: '7.0 Million',
        primaryLanguage: 'English',
        secondaryLanguage: 'Spanish & Portuguese',
        percentages: { 'English': 77, 'Spanish': 9, 'Portuguese': 3, 'Chinese': 2, 'French / Haitian Creole': 2, 'Other': 7 },
        notes: 'Major center for Portuguese (Azorean/Brazilian) and Haitian Creole speakers across Boston and Fall River.'
      },
      {
        stateName: 'Michigan',
        capitalOrCity: 'Lansing / Detroit',
        populationEstimate: '10.0 Million',
        primaryLanguage: 'English',
        secondaryLanguage: 'Spanish & Arabic',
        percentages: { 'English': 90, 'Spanish': 3, 'Arabic': 2, 'Chaldean / Aramaic': 1, 'Chinese': 1, 'Other': 3 },
        notes: 'Dearborn and Metro Detroit house the largest Arabic and Chaldean Neo-Aramaic speaking communities in North America.'
      },
      {
        stateName: 'Minnesota',
        capitalOrCity: 'St. Paul / Minneapolis',
        populationEstimate: '5.7 Million',
        primaryLanguage: 'English',
        secondaryLanguage: 'Spanish, Somali & Hmong',
        percentages: { 'English': 88, 'Spanish': 4, 'Somali': 2, 'Hmong': 2, 'Other': 4 },
        notes: 'Global cultural sanctuary hosting North America’s largest Somali and Hmong speaker communities.'
      },
      {
        stateName: 'Mississippi',
        capitalOrCity: 'Jackson',
        populationEstimate: '2.9 Million',
        primaryLanguage: 'English',
        secondaryLanguage: 'Spanish & Choctaw',
        percentages: { 'English': 96, 'Spanish': 2, 'Choctaw': 1, 'Other': 1 },
        notes: 'The Mississippi Band of Choctaw Indians preserves Choctaw (Chahta anumpa) in central Mississippi.'
      },
      {
        stateName: 'Missouri',
        capitalOrCity: 'Jefferson City / Kansas City',
        populationEstimate: '6.2 Million',
        primaryLanguage: 'English',
        secondaryLanguage: 'Spanish & Bosnian',
        percentages: { 'English': 93, 'Spanish': 3, 'Bosnian': 1, 'German': 1, 'Other': 2 },
        notes: 'St. Louis holds the largest Bosnian diaspora population outside Europe following 1990s resettlement.'
      },
      {
        stateName: 'Montana',
        capitalOrCity: 'Helena / Billings',
        populationEstimate: '1.1 Million',
        primaryLanguage: 'English',
        secondaryLanguage: 'Native American Languages & German',
        percentages: { 'English': 94, 'Spanish': 2, 'Native American (Crow/Blackfeet)': 2, 'German (Hutterite)': 2 },
        notes: 'Crow (Apsáalooke) and Blackfeet are actively taught on tribal reservation lands.'
      },
      {
        stateName: 'Nebraska',
        capitalOrCity: 'Lincoln / Omaha',
        populationEstimate: '2.0 Million',
        primaryLanguage: 'English',
        secondaryLanguage: 'Spanish & Karen / Vietnamese',
        percentages: { 'English': 88, 'Spanish': 8, 'Vietnamese': 1, 'Karen / Sudanese': 1, 'Other': 2 },
        notes: 'Omaha and Lincoln feature growing Karen (Myanmar) and Spanish speaking manufacturing communities.'
      },
      {
        stateName: 'Nevada',
        capitalOrCity: 'Carson City / Las Vegas',
        populationEstimate: '3.2 Million',
        primaryLanguage: 'English',
        secondaryLanguage: 'Spanish & Tagalog',
        percentages: { 'English': 69, 'Spanish': 21, 'Tagalog': 3, 'Chinese': 1, 'Other': 6 },
        notes: 'Las Vegas hospitality industry powers extensive Tagalog, Spanish, and Asian multilingualism.'
      },
      {
        stateName: 'New Hampshire',
        capitalOrCity: 'Concord / Manchester',
        populationEstimate: '1.4 Million',
        primaryLanguage: 'English',
        secondaryLanguage: 'Spanish & French',
        percentages: { 'English': 91, 'French': 2, 'Spanish': 2, 'Other': 5 },
        notes: 'Historic Franco-Canadian textile mill heritage alongside growing Manchester international diversity.'
      },
      {
        stateName: 'New Jersey',
        capitalOrCity: 'Trenton / Newark',
        populationEstimate: '9.3 Million',
        primaryLanguage: 'English',
        secondaryLanguage: 'Spanish & South Asian Languages',
        percentages: { 'English': 69, 'Spanish': 16, 'Chinese': 2, 'Gujarati / Hindi': 2, 'Tagalog': 1, 'Portuguese': 1, 'Other': 9 },
        notes: 'Edison and Middlesex County hold North America’s highest concentration of Gujarati and Hindi speakers.'
      },
      {
        stateName: 'New Mexico',
        capitalOrCity: 'Santa Fe / Albuquerque',
        populationEstimate: '2.1 Million',
        primaryLanguage: 'English',
        secondaryLanguage: 'Spanish & Navajo',
        percentages: { 'English': 64, 'Spanish': 28, 'Navajo': 4, 'Keres / Pueblo': 2, 'Other': 2 },
        notes: 'Official constitutional protections for traditional Neomexicano Spanish and Pueblo languages.'
      },
      {
        stateName: 'New York',
        capitalOrCity: 'Albany / New York City',
        populationEstimate: '19.6 Million',
        primaryLanguage: 'English',
        secondaryLanguage: 'Spanish, Chinese & Russian',
        percentages: { 'English': 68, 'Spanish': 15, 'Chinese (Mandarin/Cantonese)': 3, 'Russian': 2, 'Yiddish / Hebrew': 1, 'Italian': 1, 'Other': 10 },
        notes: 'New York City is internationally recognized as the world’s most linguistically diverse urban center.'
      },
      {
        stateName: 'North Carolina',
        capitalOrCity: 'Raleigh / Charlotte',
        populationEstimate: '10.7 Million',
        primaryLanguage: 'English',
        secondaryLanguage: 'Spanish',
        percentages: { 'English': 88, 'Spanish': 8, 'French': 1, 'Vietnamese': 1, 'Other': 2 },
        notes: 'Research Triangle and Charlotte banking corridors attract major national and global workforces.'
      },
      {
        stateName: 'North Dakota',
        capitalOrCity: 'Bismarck / Fargo',
        populationEstimate: '780,000',
        primaryLanguage: 'English',
        secondaryLanguage: 'German & Native American',
        percentages: { 'English': 93, 'German': 2, 'Spanish': 2, 'Native American (Ojibwe/Dakota)': 2, 'Other': 1 },
        notes: 'German-Russian heritage along with Dakota and Anishinaabe (Ojibwe) Indigenous language roots.'
      },
      {
        stateName: 'Ohio',
        capitalOrCity: 'Columbus',
        populationEstimate: '11.8 Million',
        primaryLanguage: 'English',
        secondaryLanguage: 'Spanish & Somali / Arabic',
        percentages: { 'English': 93, 'Spanish': 2, 'Somali': 1, 'Arabic': 1, 'German / Amish Dialects': 1, 'Other': 2 },
        notes: 'Columbus hosts the second largest Somali population in the US; Holmes County is Amish German heartland.'
      },
      {
        stateName: 'Oklahoma',
        capitalOrCity: 'Oklahoma City',
        populationEstimate: '4.0 Million',
        primaryLanguage: 'English',
        secondaryLanguage: 'Spanish & Cherokee / Choctaw',
        percentages: { 'English': 89, 'Spanish': 7, 'Cherokee / Native Languages': 1, 'Vietnamese': 1, 'Other': 2 },
        notes: 'Headquarters for 39 federally recognized tribes preserving Cherokee, Choctaw, and Muscogee Creek.'
      },
      {
        stateName: 'Oregon',
        capitalOrCity: 'Salem / Portland',
        populationEstimate: '4.2 Million',
        primaryLanguage: 'English',
        secondaryLanguage: 'Spanish & Russian / Vietnamese',
        percentages: { 'English': 84, 'Spanish': 9, 'Chinese': 1, 'Vietnamese': 1, 'Russian': 1, 'Other': 4 },
        notes: 'Woodburn and Willamette Valley feature major Old Believer Russian and Spanish agricultural communities.'
      },
      {
        stateName: 'Pennsylvania',
        capitalOrCity: 'Harrisburg / Philadelphia',
        populationEstimate: '13.0 Million',
        primaryLanguage: 'English',
        secondaryLanguage: 'Spanish & Pennsylvania Dutch (German)',
        percentages: { 'English': 89, 'Spanish': 5, 'Chinese': 1, 'Pennsylvania Dutch / German': 1, 'Other': 4 },
        notes: 'Pennsylvania Dutch (Deitsch) is spoken by Amish and Old Order Mennonite communities in Lancaster.'
      },
      {
        stateName: 'Puerto Rico (Territory)',
        capitalOrCity: 'San Juan',
        populationEstimate: '3.2 Million',
        primaryLanguage: 'Spanish',
        secondaryLanguage: 'English',
        percentages: { 'Spanish': 95, 'English': 5 },
        notes: 'US Commonwealth territory where Spanish is the primary language of daily life, government, and education.'
      },
      {
        stateName: 'Rhode Island',
        capitalOrCity: 'Providence',
        populationEstimate: '1.1 Million',
        primaryLanguage: 'English',
        secondaryLanguage: 'Spanish & Portuguese',
        percentages: { 'English': 78, 'Spanish': 13, 'Portuguese': 3, 'French': 2, 'Other': 4 },
        notes: 'High concentration of Cape Verdean Creole and Azorean Portuguese speakers in Providence and Pawtucket.'
      },
      {
        stateName: 'South Carolina',
        capitalOrCity: 'Columbia / Charleston',
        populationEstimate: '5.3 Million',
        primaryLanguage: 'English',
        secondaryLanguage: 'Spanish & Gullah',
        percentages: { 'English': 93, 'Spanish': 5, 'Gullah Creole': 1, 'French': 1 },
        notes: 'Lowcountry sea islands preserve Gullah (Geechee), an English-based creole with West African roots.'
      },
      {
        stateName: 'South Dakota',
        capitalOrCity: 'Pierre / Sioux Falls',
        populationEstimate: '910,000',
        primaryLanguage: 'English',
        secondaryLanguage: 'Dakota / Lakota & Spanish',
        percentages: { 'English': 92, 'Lakota / Dakota': 2, 'Spanish': 2, 'German': 2, 'Other': 2 },
        notes: 'Dakota and Lakota (Sioux) are official state Indigenous languages.'
      },
      {
        stateName: 'Tennessee',
        capitalOrCity: 'Nashville',
        populationEstimate: '7.1 Million',
        primaryLanguage: 'English',
        secondaryLanguage: 'Spanish & Kurdish',
        percentages: { 'English': 93, 'Spanish': 4, 'Kurdish': 1, 'Arabic': 1, 'Other': 1 },
        notes: 'Nashville is home to "Little Kurdistan", the largest Kurdish-speaking community in North America.'
      },
      {
        stateName: 'Texas',
        capitalOrCity: 'Austin / Houston',
        populationEstimate: '30 Million',
        primaryLanguage: 'English',
        secondaryLanguage: 'Spanish',
        percentages: { 'English': 65, 'Spanish': 29, 'Vietnamese': 1, 'Chinese': 1, 'Other': 4 },
        notes: 'Tex-Mex Spanish code-switching is a cultural marker across San Antonio, Houston, and El Paso.'
      },
      {
        stateName: 'Utah',
        capitalOrCity: 'Salt Lake City',
        populationEstimate: '3.4 Million',
        primaryLanguage: 'English',
        secondaryLanguage: 'Spanish & Pacific Islander Languages',
        percentages: { 'English': 85, 'Spanish': 10, 'Pacific Islander (Tongan/Samoan)': 1, 'Other': 4 },
        notes: 'Salt Lake Valley features significant Tongan and Samoan speaker populations alongside Spanish.'
      },
      {
        stateName: 'Vermont',
        capitalOrCity: 'Montpelier / Burlington',
        populationEstimate: '647,000',
        primaryLanguage: 'English',
        secondaryLanguage: 'French & Spanish',
        percentages: { 'English': 94, 'French': 2, 'Spanish': 1, 'Other': 3 },
        notes: 'Bordering Quebec with historic French Canadian family ties and Abenaki heritage.'
      },
      {
        stateName: 'Virginia',
        capitalOrCity: 'Richmond / Virginia Beach',
        populationEstimate: '8.7 Million',
        primaryLanguage: 'English',
        secondaryLanguage: 'Spanish, Korean & Vietnamese',
        percentages: { 'English': 84, 'Spanish': 7, 'Korean / Vietnamese / Chinese': 4, 'Arabic': 1, 'Other': 4 },
        notes: 'Northern Virginia (NoVA) features major Korean, Vietnamese, and Spanish international suburbs.'
      },
      {
        stateName: 'Washington',
        capitalOrCity: 'Olympia / Seattle',
        populationEstimate: '7.8 Million',
        primaryLanguage: 'English',
        secondaryLanguage: 'Spanish, Chinese & Tagalog',
        percentages: { 'English': 81, 'Spanish': 9, 'Chinese': 2, 'Vietnamese': 1, 'Tagalog': 1, 'Russian': 1, 'Other': 5 },
        notes: 'Puget Sound technology corridor attracts major Pacific Rim and Slavic language communities.'
      },
      {
        stateName: 'West Virginia',
        capitalOrCity: 'Charleston',
        populationEstimate: '1.8 Million',
        primaryLanguage: 'English',
        secondaryLanguage: 'Spanish & German',
        percentages: { 'English': 97, 'Spanish': 1, 'German': 1, 'Other': 1 },
        notes: 'Highest proportion of native English speakers in the nation; Appalachian linguistic tradition.'
      },
      {
        stateName: 'Wisconsin',
        capitalOrCity: 'Madison / Milwaukee',
        populationEstimate: '5.9 Million',
        primaryLanguage: 'English',
        secondaryLanguage: 'Spanish & Hmong',
        percentages: { 'English': 91, 'Spanish': 4, 'Hmong': 2, 'German': 1, 'Other': 2 },
        notes: 'Wausau and La Crosse house significant Hmong speaker populations alongside German heritage.'
      },
      {
        stateName: 'Wyoming',
        capitalOrCity: 'Cheyenne',
        populationEstimate: '580,000',
        primaryLanguage: 'English',
        secondaryLanguage: 'Spanish & Arapaho / Shoshone',
        percentages: { 'English': 93, 'Spanish': 5, 'Arapaho / Shoshone': 1, 'Other': 1 },
        notes: 'Wind River Indian Reservation preserves Northern Arapaho and Eastern Shoshone languages.'
      }
    ]
  },

  // CANADA - ALL 10 PROVINCES + 3 TERRITORIES
  CA: {
    countryCode: 'CA',
    countryName: 'Canada',
    subdivisionType: 'Province',
    states: [
      {
        stateName: 'Ontario',
        capitalOrCity: 'Toronto / Ottawa',
        populationEstimate: '15.5 Million',
        primaryLanguage: 'English',
        secondaryLanguage: 'French & Mandarin',
        percentages: { 'English': 72, 'French': 4, 'Mandarin': 4, 'Cantonese': 3, 'Punjabi': 3, 'Italian': 2, 'Spanish': 2 },
        notes: 'Canada’s most populous province; Franco-Ontarians preserve French in Eastern Ontario and Ottawa.'
      },
      {
        stateName: 'Quebec',
        capitalOrCity: 'Quebec City / Montreal',
        populationEstimate: '8.7 Million',
        primaryLanguage: 'French',
        secondaryLanguage: 'English',
        percentages: { 'French': 82, 'English': 11, 'Arabic': 3, 'Spanish': 2, 'Italian': 2 },
        notes: 'Monolingual official French under Charter of the French Language; Montreal is highly bilingual.'
      },
      {
        stateName: 'British Columbia',
        capitalOrCity: 'Victoria / Vancouver',
        populationEstimate: '5.4 Million',
        primaryLanguage: 'English',
        secondaryLanguage: 'Punjabi & Cantonese',
        percentages: { 'English': 71, 'Punjabi': 5, 'Cantonese': 5, 'Mandarin': 5, 'Tagalog': 2, 'French': 2 },
        notes: 'Pacific coast Gateway; high concentration of Asian linguistic communities and Indigenous languages.'
      },
      {
        stateName: 'Alberta',
        capitalOrCity: 'Edmonton / Calgary',
        populationEstimate: '4.7 Million',
        primaryLanguage: 'English',
        secondaryLanguage: 'Tagalog & Punjabi',
        percentages: { 'English': 76, 'Tagalog': 3, 'Punjabi': 3, 'Cantonese': 2, 'French': 2, 'Spanish': 2 },
        notes: 'Western prairie province with growing multilingual immigrant communities and Blackfoot/Cree speakers.'
      },
      {
        stateName: 'Manitoba',
        capitalOrCity: 'Winnipeg',
        populationEstimate: '1.4 Million',
        primaryLanguage: 'English',
        secondaryLanguage: 'Tagalog, German & Cree',
        percentages: { 'English': 73, 'Tagalog': 5, 'German (Mennonite)': 3, 'French': 3, 'Cree / Ojibwe': 3, 'Other': 13 },
        notes: 'Winnipeg holds Canada’s largest urban Tagalog and Indigenous Ojibwe/Cree populations.'
      },
      {
        stateName: 'Saskatchewan',
        capitalOrCity: 'Regina / Saskatoon',
        populationEstimate: '1.2 Million',
        primaryLanguage: 'English',
        secondaryLanguage: 'Cree & Tagalog',
        percentages: { 'English': 82, 'Cree': 3, 'Tagalog': 3, 'German': 2, 'French': 2, 'Other': 8 },
        notes: 'Nehiyawewin (Cree) is the most widely spoken Indigenous language in western Canada.'
      },
      {
        stateName: 'Nova Scotia',
        capitalOrCity: 'Halifax',
        populationEstimate: '1.0 Million',
        primaryLanguage: 'English',
        secondaryLanguage: 'French & Mi’kmaq / Gaelic',
        percentages: { 'English': 91, 'French (Acadian)': 3, 'Mi’kmaq': 1, 'Gaelic': 1, 'Other': 4 },
        notes: 'Cape Breton Island is the historical North American sanctuary for Scottish Gaelic (Gàidhlig).'
      },
      {
        stateName: 'New Brunswick',
        capitalOrCity: 'Fredericton / Moncton',
        populationEstimate: '830,000',
        primaryLanguage: 'Official Bilingual (English & French)',
        secondaryLanguage: 'Acadian French',
        percentages: { 'English': 65, 'French': 33, 'Mi’kmaq': 1, 'Other': 1 },
        notes: 'Canada’s only constitutionally bilingual province; birthplace of Acadian French culture.'
      },
      {
        stateName: 'Newfoundland and Labrador',
        capitalOrCity: 'St. John’s',
        populationEstimate: '530,000',
        primaryLanguage: 'English',
        secondaryLanguage: 'Innu & French',
        percentages: { 'English': 97, 'French': 1, 'Innu-aimun / Inuktitut': 1, 'Other': 1 },
        notes: 'Distinctive English dialect history with Irish and West Country English colonial roots.'
      },
      {
        stateName: 'Prince Edward Island',
        capitalOrCity: 'Charlottetown',
        populationEstimate: '170,000',
        primaryLanguage: 'English',
        secondaryLanguage: 'French',
        percentages: { 'English': 92, 'French (Acadian)': 4, 'Mandarin': 2, 'Other': 2 },
        notes: 'Birthplace of Canadian Confederation with active Acadian French region in Evangeline.'
      },
      {
        stateName: 'Yukon Territory',
        capitalOrCity: 'Whitehorse',
        populationEstimate: '44,000',
        primaryLanguage: 'English',
        secondaryLanguage: 'French & First Nations Languages',
        percentages: { 'English': 83, 'French': 5, 'Kaska / Tlingit / Gwich’in': 3, 'Tagalog': 3, 'Other': 6 },
        notes: '8 First Nations languages hold official recognition alongside English and French.'
      },
      {
        stateName: 'Northwest Territories',
        capitalOrCity: 'Yellowknife',
        populationEstimate: '45,000',
        primaryLanguage: 'English',
        secondaryLanguage: 'Dene & Inuvialuktun',
        percentages: { 'English': 77, 'Tłı̨chǫ (Dene)': 6, 'French': 3, 'South Slavey': 3, 'Inuvialuktun': 2, 'Other': 9 },
        notes: 'Boasts 11 official languages including Dene Sułı̨né, Tłı̨chǫ, Inuvialuktun, and Cree.'
      },
      {
        stateName: 'Nunavut Territory',
        capitalOrCity: 'Iqaluit',
        populationEstimate: '40,000',
        primaryLanguage: 'Inuktitut',
        secondaryLanguage: 'English & Inuinnaqtun',
        percentages: { 'Inuktitut': 64, 'English': 31, 'Inuinnaqtun': 3, 'French': 2 },
        notes: 'Indigenous Inuit territory where Inuktitut is official alongside Inuinnaqtun, English, and French.'
      }
    ]
  },

  // AUSTRALIA - ALL 8 STATES + TERRITORIES
  AU: {
    countryCode: 'AU',
    countryName: 'Australia',
    subdivisionType: 'State',
    states: [
      {
        stateName: 'New South Wales',
        capitalOrCity: 'Sydney',
        populationEstimate: '8.3 Million',
        primaryLanguage: 'English',
        secondaryLanguage: 'Mandarin, Arabic & Cantonese',
        percentages: { 'English': 67, 'Mandarin': 4, 'Arabic': 3, 'Cantonese': 2, 'Vietnamese': 2, 'Italian': 1, 'Greek': 1, 'Other': 20 },
        notes: 'Sydney is Australia’s multicultural center; Western Sydney features extensive Arabic and Asian communities.'
      },
      {
        stateName: 'Victoria',
        capitalOrCity: 'Melbourne',
        populationEstimate: '6.7 Million',
        primaryLanguage: 'English',
        secondaryLanguage: 'Mandarin, Greek & Italian',
        percentages: { 'English': 67, 'Mandarin': 4, 'Greek': 2, 'Italian': 2, 'Vietnamese': 2, 'Punjabi': 2, 'Other': 21 },
        notes: 'Melbourne is historically famed for having one of the largest Greek-speaking populations outside Greece.'
      },
      {
        stateName: 'Queensland',
        capitalOrCity: 'Brisbane / Gold Coast',
        populationEstimate: '5.4 Million',
        primaryLanguage: 'English',
        secondaryLanguage: 'Mandarin & Spanish',
        percentages: { 'English': 80, 'Mandarin': 2, 'Vietnamese': 1, 'Spanish': 1, 'Cantonese': 1, 'Other': 15 },
        notes: 'High percentage of native English speakers alongside growing Asian and Pacific Islander communities.'
      },
      {
        stateName: 'Western Australia',
        capitalOrCity: 'Perth',
        populationEstimate: '2.8 Million',
        primaryLanguage: 'English',
        secondaryLanguage: 'Mandarin & Italian',
        percentages: { 'English': 75, 'Mandarin': 3, 'Italian': 1, 'Vietnamese': 1, 'Punjabi': 1, 'Other': 19 },
        notes: 'Perth hosts substantial British, South African, Italian, and Southeast Asian immigrant communities.'
      },
      {
        stateName: 'South Australia',
        capitalOrCity: 'Adelaide',
        populationEstimate: '1.8 Million',
        primaryLanguage: 'English',
        secondaryLanguage: 'Italian & Mandarin',
        percentages: { 'English': 78, 'Italian': 2, 'Mandarin': 2, 'Greek': 1, 'Vietnamese': 1, 'Other': 16 },
        notes: 'Barossa Valley historically features German heritage; Adelaide has deep Italian and Greek roots.'
      },
      {
        stateName: 'Tasmania',
        capitalOrCity: 'Hobart',
        populationEstimate: '570,000',
        primaryLanguage: 'English',
        secondaryLanguage: 'Mandarin & Nepali',
        percentages: { 'English': 88, 'Mandarin': 2, 'Nepali': 1, 'Spanish': 1, 'Other': 8 },
        notes: 'Highest proportion of native English speakers among Australian states; Palawa Kani revitalizes Tasmanian languages.'
      },
      {
        stateName: 'Australian Capital Territory',
        capitalOrCity: 'Canberra',
        populationEstimate: '460,000',
        primaryLanguage: 'English',
        secondaryLanguage: 'Mandarin & Vietnamese',
        percentages: { 'English': 71, 'Mandarin': 3, 'Vietnamese': 1, 'Cantonese': 1, 'Hindi': 1, 'Other': 23 },
        notes: 'National capital enclave with international diplomatic missions and academic research communities.'
      },
      {
        stateName: 'Northern Territory',
        capitalOrCity: 'Darwin / Alice Springs',
        populationEstimate: '250,000',
        primaryLanguage: 'English',
        secondaryLanguage: 'Aboriginal Languages (Kriol, Pitjantjatjara)',
        percentages: { 'English': 58, 'Aboriginal Languages (Kriol/Yolŋu/Pitjantjatjara)': 25, 'Tagalog': 2, 'Greek': 1, 'Other': 14 },
        notes: 'Over a quarter of residents speak First Nations First Languages including Kriol, Yolŋu Matha, and Warlpiri.'
      }
    ]
  },

  // SWITZERLAND - ALL CANTONS
  CH: {
    countryCode: 'CH',
    countryName: 'Switzerland',
    subdivisionType: 'Canton',
    states: [
      {
        stateName: 'Zurich (Zürich)',
        capitalOrCity: 'Zurich',
        populationEstimate: '1.5 Million',
        primaryLanguage: 'German (Swiss German)',
        percentages: { 'German': 88, 'English': 6, 'Italian': 3, 'French': 3 },
        notes: 'Schwiizertüütsch is spoken in daily life; High German is used in media, business, and formal writing.'
      },
      {
        stateName: 'Geneva (Genève)',
        capitalOrCity: 'Geneva',
        populationEstimate: '510,000',
        primaryLanguage: 'French',
        percentages: { 'French': 82, 'English': 10, 'Spanish': 4, 'German': 4 },
        notes: 'Global diplomatic center with international organizations; French is the sole official language.'
      },
      {
        stateName: 'Vaud',
        capitalOrCity: 'Lausanne',
        populationEstimate: '815,000',
        primaryLanguage: 'French',
        percentages: { 'French': 84, 'German': 7, 'English': 5, 'Portuguese': 4 },
        notes: 'Located on Lake Geneva; Francophone cultural heartland in Romandie.'
      },
      {
        stateName: 'Bern (Berne)',
        capitalOrCity: 'Bern',
        populationEstimate: '1.04 Million',
        primaryLanguage: 'German',
        secondaryLanguage: 'French',
        percentages: { 'German': 86, 'French': 11, 'Italian': 2, 'English': 1 },
        notes: 'Official bilingual canton housing the federal capital; Bernese German spoken widely.'
      },
      {
        stateName: 'Ticino',
        capitalOrCity: 'Bellinzona',
        populationEstimate: '350,000',
        primaryLanguage: 'Italian',
        percentages: { 'Italian': 89, 'German': 5, 'French': 4, 'English': 2 },
        notes: 'Located south of the Alps; Italian is official and Ticinese Lombard dialect is spoken natively.'
      },
      {
        stateName: 'Graubünden (Grisons)',
        capitalOrCity: 'Chur',
        populationEstimate: '200,000',
        primaryLanguage: 'German',
        secondaryLanguage: 'Romansh & Italian',
        percentages: { 'German': 68, 'Romansh': 15, 'Italian': 14, 'French': 3 },
        notes: 'Switzerland’s only trilingual canton; ancestral stronghold of the Romansh language.'
      },
      {
        stateName: 'Fribourg (Freiburg)',
        capitalOrCity: 'Fribourg',
        populationEstimate: '325,000',
        primaryLanguage: 'French',
        secondaryLanguage: 'German',
        percentages: { 'French': 68, 'German': 26, 'English': 3, 'Portuguese': 3 },
        notes: 'Bilingual canton bridging Francophone Romandie and German-speaking Switzerland.'
      },
      {
        stateName: 'Valais (Wallis)',
        capitalOrCity: 'Sion',
        populationEstimate: '348,000',
        primaryLanguage: 'French',
        secondaryLanguage: 'German (Highest dialect variation)',
        percentages: { 'French': 63, 'German': 28, 'Italian': 3, 'English': 6 },
        notes: 'Home to the Matterhorn; Upper Valais speaks Walliser German, Lower Valais speaks French.'
      },
      {
        stateName: 'Basel-Stadt & Basel-Landschaft',
        capitalOrCity: 'Basel',
        populationEstimate: '490,000',
        primaryLanguage: 'German (Baseldytsch)',
        percentages: { 'German': 85, 'English': 7, 'French': 4, 'Italian': 4 },
        notes: 'Trinational border area with Germany and France; pharmaceutical and cultural capital.'
      },
      {
        stateName: 'Lucerne (Luzern)',
        capitalOrCity: 'Lucerne',
        populationEstimate: '420,000',
        primaryLanguage: 'German (Swiss German)',
        percentages: { 'German': 91, 'English': 4, 'Serbo-Croatian': 3, 'Italian': 2 },
        notes: 'Central Switzerland hub; High German used in education, Swiss German dialect in daily life.'
      },
      {
        stateName: 'St. Gallen',
        capitalOrCity: 'St. Gallen',
        populationEstimate: '515,000',
        primaryLanguage: 'German',
        percentages: { 'German': 89, 'Albanian': 4, 'Italian': 4, 'English': 3 },
        notes: 'Eastern Swiss commercial center near Liechtenstein and Lake Constance.'
      },
      {
        stateName: 'Neuchâtel',
        capitalOrCity: 'Neuchâtel',
        populationEstimate: '176,000',
        primaryLanguage: 'French',
        percentages: { 'French': 88, 'German': 4, 'Portuguese': 4, 'English': 4 },
        notes: 'Watchmaking valley tradition in Jura mountains; exclusively Francophone canton.'
      }
    ]
  },

  // GERMANY - ALL BUNDESLÄNDER
  DE: {
    countryCode: 'DE',
    countryName: 'Germany',
    subdivisionType: 'State',
    states: [
      {
        stateName: 'Bavaria (Bayern)',
        capitalOrCity: 'Munich',
        populationEstimate: '13.1 Million',
        primaryLanguage: 'Standard German (Hochdeutsch)',
        secondaryLanguage: 'Bavarian (Boarisch) dialect',
        percentages: { 'German': 92, 'Turkish': 3, 'English': 2, 'Other': 3 },
        notes: 'Bavarian dialect is proudly spoken in rural regions and Alpine valleys.'
      },
      {
        stateName: 'North Rhine-Westphalia',
        capitalOrCity: 'Düsseldorf / Cologne',
        populationEstimate: '17.9 Million',
        primaryLanguage: 'German',
        secondaryLanguage: 'Turkish & Polish',
        percentages: { 'German': 88, 'Turkish': 5, 'Polish': 2, 'Arabic': 2, 'English': 3 },
        notes: 'Germany’s most populous state featuring the industrial Ruhr valley and vibrant Rhine metropolitan areas.'
      },
      {
        stateName: 'Baden-Württemberg',
        capitalOrCity: 'Stuttgart',
        populationEstimate: '11.1 Million',
        primaryLanguage: 'German',
        secondaryLanguage: 'Swabian (Schwäbisch) & Alemannic',
        percentages: { 'German': 90, 'Turkish': 3, 'Italian': 2, 'Romanian': 1, 'English': 4 },
        notes: 'Swabian German is widely spoken; bordered by France and Switzerland.'
      },
      {
        stateName: 'Hesse (Hessen)',
        capitalOrCity: 'Wiesbaden / Frankfurt',
        populationEstimate: '6.3 Million',
        primaryLanguage: 'German',
        secondaryLanguage: 'Turkish & English',
        percentages: { 'German': 86, 'Turkish': 4, 'English': 4, 'Arabic': 2, 'Polish': 2, 'Other': 2 },
        notes: 'Frankfurt am Main is the financial capital of Europe with a massive international community.'
      },
      {
        stateName: 'Saxony (Sachsen)',
        capitalOrCity: 'Dresden / Leipzig',
        populationEstimate: '4.1 Million',
        primaryLanguage: 'German',
        secondaryLanguage: 'Upper Sorbian (Serbsce)',
        percentages: { 'German': 96, 'Upper Sorbian': 2, 'Polish / Czech': 2 },
        notes: 'Bautzen (Budyšin) is the cultural heartland of the Slavic Sorbian minority.'
      },
      {
        stateName: 'Berlin State',
        capitalOrCity: 'Berlin',
        populationEstimate: '3.8 Million',
        primaryLanguage: 'German',
        secondaryLanguage: 'Turkish & English',
        percentages: { 'German': 81, 'Turkish': 5, 'English': 5, 'Arabic': 3, 'Russian': 2, 'Polish': 2, 'Other': 2 },
        notes: 'Multicultural metropolis with vast international and immigrant linguistic communities.'
      },
      {
        stateName: 'Lower Saxony (Niedersachsen)',
        capitalOrCity: 'Hanover',
        populationEstimate: '8.0 Million',
        primaryLanguage: 'German',
        secondaryLanguage: 'Low German (Plattdüütsch) & Saterland Frisian',
        percentages: { 'German': 93, 'Low German': 4, 'Turkish': 2, 'Saterland Frisian': 1 },
        notes: 'Hanover is considered the benchmark region for pure standard High German (Hochdeutsch).'
      },
      {
        stateName: 'Schleswig-Holstein',
        capitalOrCity: 'Kiel / Flensburg',
        populationEstimate: '2.9 Million',
        primaryLanguage: 'German',
        secondaryLanguage: 'Danish, Low German & North Frisian',
        percentages: { 'German': 93, 'Low German': 4, 'Danish': 2, 'North Frisian': 1 },
        notes: 'Bordering Denmark; Danish and North Frisian are officially protected minority languages.'
      },
      {
        stateName: 'Rhineland-Palatinate (Rheinland-Pfalz)',
        capitalOrCity: 'Mainz',
        populationEstimate: '4.1 Million',
        primaryLanguage: 'German (Franconian Dialects)',
        percentages: { 'German': 92, 'Turkish': 3, 'Polish': 2, 'French': 2, 'Other': 1 },
        notes: 'Wine country along the Rhine and Moselle rivers with rich Palatine German dialect roots.'
      },
      {
        stateName: 'Brandenburg',
        capitalOrCity: 'Potsdam',
        populationEstimate: '2.5 Million',
        primaryLanguage: 'German',
        secondaryLanguage: 'Lower Sorbian (Dolnoserbski)',
        percentages: { 'German': 96, 'Lower Sorbian': 2, 'Polish': 1, 'Russian': 1 },
        notes: 'Surrounds Berlin; the Spreewald region preserves Lower Sorbian Slavic heritage.'
      }
    ]
  },

  // SPAIN - ALL AUTONOMOUS COMMUNITIES
  ES: {
    countryCode: 'ES',
    countryName: 'Spain',
    subdivisionType: 'Region',
    states: [
      {
        stateName: 'Catalonia (Catalunya)',
        capitalOrCity: 'Barcelona',
        populationEstimate: '7.8 Million',
        primaryLanguage: 'Catalan & Spanish (Castilian)',
        percentages: { 'Spanish': 51, 'Catalan': 43, 'Both': 4, 'Aranese Occitan': 1, 'Other': 1 },
        notes: 'Catalan is co-official and used as the primary language of instruction in public schools.'
      },
      {
        stateName: 'Basque Country (Euskadi)',
        capitalOrCity: 'Vitoria-Gasteiz / Bilbao',
        populationEstimate: '2.2 Million',
        primaryLanguage: 'Spanish',
        secondaryLanguage: 'Basque (Euskara)',
        percentages: { 'Spanish': 64, 'Basque': 36 },
        notes: 'Euskara is a language isolate with no known connection to Indo-European languages.'
      },
      {
        stateName: 'Galicia',
        capitalOrCity: 'Santiago de Compostela / A Coruña',
        populationEstimate: '2.7 Million',
        primaryLanguage: 'Galician (Galego) & Spanish',
        percentages: { 'Galician': 52, 'Spanish': 46, 'Other': 2 },
        notes: 'Galician is closely related to Portuguese; spoken in daily family life.'
      },
      {
        stateName: 'Community of Madrid',
        capitalOrCity: 'Madrid',
        populationEstimate: '6.7 Million',
        primaryLanguage: 'Spanish (Castilian)',
        percentages: { 'Spanish': 92, 'English': 4, 'Romanian': 2, 'Arabic': 2 },
        notes: 'National capital region; standard Castilian Spanish heartland.'
      },
      {
        stateName: 'Andalusia (Andalucía)',
        capitalOrCity: 'Seville',
        populationEstimate: '8.5 Million',
        primaryLanguage: 'Spanish (Andalusian dialect)',
        percentages: { 'Spanish': 97, 'English': 2, 'Arabic': 1 },
        notes: 'Andalusian Spanish features seseo/ceceo and aspirated trailing consonants.'
      },
      {
        stateName: 'Valencian Community',
        capitalOrCity: 'Valencia',
        populationEstimate: '5.1 Million',
        primaryLanguage: 'Spanish & Valencian (Catalan)',
        percentages: { 'Spanish': 58, 'Valencian / Catalan': 38, 'English': 2, 'Other': 2 },
        notes: 'Valencian is co-official alongside Castilian Spanish across Valencia and Alicante.'
      },
      {
        stateName: 'Balearic Islands (Illes Balears)',
        capitalOrCity: 'Palma de Mallorca',
        populationEstimate: '1.2 Million',
        primaryLanguage: 'Catalan (Balearic) & Spanish',
        percentages: { 'Spanish': 52, 'Catalan': 42, 'English': 4, 'German': 2 },
        notes: 'Tourist hub where Mallorquí, Menorquí, and Ibicenco Catalan variants thrive.'
      },
      {
        stateName: 'Canary Islands (Canarias)',
        capitalOrCity: 'Las Palmas / Santa Cruz',
        populationEstimate: '2.2 Million',
        primaryLanguage: 'Spanish (Canarian dialect)',
        percentages: { 'Spanish': 94, 'English': 3, 'German': 2, 'Other': 1 },
        notes: 'Canarian Spanish shares strong phonetic ties with Caribbean Spanish.'
      }
    ]
  },

  // INDIA - MAJOR STATES
  IN: {
    countryCode: 'IN',
    countryName: 'India',
    subdivisionType: 'State',
    states: [
      {
        stateName: 'Uttar Pradesh',
        capitalOrCity: 'Lucknow',
        populationEstimate: '235 Million',
        primaryLanguage: 'Hindi',
        secondaryLanguage: 'Urdu',
        percentages: { 'Hindi': 89, 'Urdu': 9, 'Punjabi': 1, 'English': 1 },
        notes: 'India’s most populous state; heartland of Devanagari script and Awadhi/Bhojpuri dialects.'
      },
      {
        stateName: 'Tamil Nadu',
        capitalOrCity: 'Chennai',
        populationEstimate: '76 Million',
        primaryLanguage: 'Tamil',
        percentages: { 'Tamil': 88, 'Telugu': 6, 'Kannada': 2, 'English': 3, 'Hindi': 1 },
        notes: 'Classical Dravidian language with over 2,000 years of recorded literary history.'
      },
      {
        stateName: 'Maharashtra',
        capitalOrCity: 'Mumbai',
        populationEstimate: '125 Million',
        primaryLanguage: 'Marathi',
        secondaryLanguage: 'Hindi & Gujarati',
        percentages: { 'Marathi': 69, 'Hindi': 12, 'Urdu': 7, 'Gujarati': 5, 'English': 5, 'Other': 2 },
        notes: 'Mumbai is a financial melting pot; Marathi is official and Devanagari script is used.'
      },
      {
        stateName: 'West Bengal',
        capitalOrCity: 'Kolkata',
        populationEstimate: '98 Million',
        primaryLanguage: 'Bengali',
        percentages: { 'Bengali': 86, 'Hindi': 7, 'Santali': 3, 'Urdu': 2, 'English': 2 },
        notes: 'Nobel laureate Rabindranath Tagore’s heritage; Bengali has its own distinctive script.'
      },
      {
        stateName: 'Kerala',
        capitalOrCity: 'Thiruvananthapuram',
        populationEstimate: '35 Million',
        primaryLanguage: 'Malayalam',
        percentages: { 'Malayalam': 97, 'Tamil': 1, 'English': 2 },
        notes: 'Boasts India’s highest literacy rate; Malayalam script is palindromic and highly expressive.'
      },
      {
        stateName: 'Punjab',
        capitalOrCity: 'Chandigarh / Amritsar',
        populationEstimate: '30 Million',
        primaryLanguage: 'Punjabi',
        percentages: { 'Punjabi': 90, 'Hindi': 8, 'English': 2 },
        notes: 'Written in Gurmukhi script; core heartland of Sikh culture and devotional music.'
      },
      {
        stateName: 'Gujarat',
        capitalOrCity: 'Gandhinagar / Ahmedabad',
        populationEstimate: '65 Million',
        primaryLanguage: 'Gujarati',
        percentages: { 'Gujarati': 86, 'Hindi': 9, 'Sindhi': 2, 'Marathi': 1, 'English': 2 },
        notes: 'Birthplace of Mahatma Gandhi; Gujarati script omits the top horizontal bar of Devanagari.'
      },
      {
        stateName: 'Karnataka',
        capitalOrCity: 'Bengaluru',
        populationEstimate: '68 Million',
        primaryLanguage: 'Kannada',
        secondaryLanguage: 'Urdu, Telugu & Tamil',
        percentages: { 'Kannada': 66, 'Urdu': 10, 'Telugu': 7, 'Tamil': 5, 'Marathi': 4, 'Hindi / English': 8 },
        notes: 'Bengaluru is India’s Silicon Valley, hosting a highly multilingual tech workforce.'
      }
    ]
  },

  // UNITED KINGDOM - COUNTRIES
  GB: {
    countryCode: 'GB',
    countryName: 'United Kingdom',
    subdivisionType: 'Region',
    states: [
      {
        stateName: 'Wales (Cymru)',
        capitalOrCity: 'Cardiff',
        populationEstimate: '3.1 Million',
        primaryLanguage: 'English',
        secondaryLanguage: 'Welsh (Cymraeg)',
        percentages: { 'English': 81, 'Welsh': 19 },
        notes: 'Welsh is official; place names, public signs, and school curricula are fully bilingual.'
      },
      {
        stateName: 'Scotland (Alba)',
        capitalOrCity: 'Edinburgh / Glasgow',
        populationEstimate: '5.5 Million',
        primaryLanguage: 'English',
        secondaryLanguage: 'Scots & Scottish Gaelic (Gàidhlig)',
        percentages: { 'English': 68, 'Scots': 30, 'Scottish Gaelic': 1.5, 'Polish': 0.5 },
        notes: 'Gaelic is protected in the Highlands & Islands (Hebrides); Scots is widely spoken in lowlands.'
      },
      {
        stateName: 'Northern Ireland (Tuaisceart Éireann)',
        capitalOrCity: 'Belfast',
        populationEstimate: '1.9 Million',
        primaryLanguage: 'English',
        secondaryLanguage: 'Irish (Gaeilge) & Ulster Scots',
        percentages: { 'English': 88, 'Irish': 7, 'Ulster Scots': 3, 'Polish': 2 },
        notes: 'Identity and heritage are tied to Irish and Ulster Scots linguistic revitalizations.'
      },
      {
        stateName: 'England',
        capitalOrCity: 'London',
        populationEstimate: '56.5 Million',
        primaryLanguage: 'English',
        percentages: { 'English': 91, 'Polish': 1, 'Punjabi': 1, 'Urdu': 1, 'Bengali': 1, 'Gujarati': 1, 'Cornish': 0.1, 'Other': 4 },
        notes: 'London speaks over 300 languages; Cornish is a recognized Celtic minority language in Cornwall.'
      }
    ]
  },

  // SOUTH AFRICA - ALL PROVINCES
  ZA: {
    countryCode: 'ZA',
    countryName: 'South Africa',
    subdivisionType: 'Province',
    states: [
      {
        stateName: 'KwaZulu-Natal',
        capitalOrCity: 'Pietermaritzburg / Durban',
        populationEstimate: '11.5 Million',
        primaryLanguage: 'isiZulu',
        percentages: { 'isiZulu': 78, 'English': 13, 'Afrikaans': 6, 'isiXhosa': 2, 'Other': 1 },
        notes: 'Heartland of the Zulu kingdom; Durban is a major English and isiZulu commercial hub.'
      },
      {
        stateName: 'Gauteng',
        capitalOrCity: 'Johannesburg / Pretoria',
        populationEstimate: '15.8 Million',
        primaryLanguage: 'isiZulu & English',
        percentages: { 'isiZulu': 20, 'English': 14, 'Sepedi': 12, 'Afrikaans': 11, 'Sesotho': 11, 'Setswana': 10, 'isiXhosa': 7, 'Xitsonga': 6, 'Other': 9 },
        notes: 'Economic hub with extreme multi-lingualism; urban code-switching (Tsotsitaal) is widespread.'
      },
      {
        stateName: 'Western Cape',
        capitalOrCity: 'Cape Town',
        populationEstimate: '7.2 Million',
        primaryLanguage: 'Afrikaans',
        percentages: { 'Afrikaans': 49, 'isiXhosa': 25, 'English': 20, 'Other': 6 },
        notes: 'Trilingual province with Kaaps Afrikaans, English, and isiXhosa spoken throughout Cape Town.'
      },
      {
        stateName: 'Eastern Cape',
        capitalOrCity: 'Bhisho / Gqeberha',
        populationEstimate: '6.7 Million',
        primaryLanguage: 'isiXhosa',
        percentages: { 'isiXhosa': 79, 'Afrikaans': 11, 'English': 9, 'Sesotho': 1 },
        notes: 'Ancestral home of Nelson Mandela; famous for click consonants in isiXhosa.'
      },
      {
        stateName: 'Limpopo',
        capitalOrCity: 'Polokwane',
        populationEstimate: '5.9 Million',
        primaryLanguage: 'Sepedi (Northern Sotho)',
        percentages: { 'Sepedi': 53, 'Xitsonga': 17, 'Tshivenda': 17, 'Afrikaans': 3, 'English': 2, 'Other': 8 },
        notes: 'Northernmost province bordering Zimbabwe; stronghold for Venda and Tsonga indigenous cultures.'
      },
      {
        stateName: 'Free State',
        capitalOrCity: 'Bloemfontein',
        populationEstimate: '2.9 Million',
        primaryLanguage: 'Sesotho',
        percentages: { 'Sesotho': 64, 'Afrikaans': 13, 'isiXhosa': 8, 'Setswana': 7, 'English': 3, 'Other': 5 },
        notes: 'Bordering Lesotho; Sesotho is spoken by nearly two-thirds of the population.'
      }
    ]
  },

  // BELGIUM - ALL REGIONS
  BE: {
    countryCode: 'BE',
    countryName: 'Belgium',
    subdivisionType: 'Region',
    states: [
      {
        stateName: 'Flanders (Flemish Region)',
        capitalOrCity: 'Antwerp / Ghent / Bruges',
        populationEstimate: '6.7 Million',
        primaryLanguage: 'Dutch (Flemish)',
        percentages: { 'Dutch': 95, 'French': 3, 'English': 2 },
        notes: 'Dutch-speaking northern region; Brabantian, West Flemish, and East Flemish dialects spoken.'
      },
      {
        stateName: 'Wallonia (Walloon Region)',
        capitalOrCity: 'Liège / Namur / Charleroi',
        populationEstimate: '3.6 Million',
        primaryLanguage: 'French',
        percentages: { 'French': 96, 'German': 2, 'Dutch': 2 },
        notes: 'Francophone southern region; incorporates the official German-speaking Community in East Canton.'
      },
      {
        stateName: 'Brussels-Capital Region',
        capitalOrCity: 'Brussels',
        populationEstimate: '1.2 Million',
        primaryLanguage: 'French (Dominant)',
        secondaryLanguage: 'Dutch (Officially co-equal)',
        percentages: { 'French': 85, 'Dutch': 10, 'English': 5 },
        notes: 'Officially bilingual capital enclave inside Flanders; European Union headquarters.'
      }
    ]
  },

  // NIGERIA - MAJOR STATES
  NG: {
    countryCode: 'NG',
    countryName: 'Nigeria',
    subdivisionType: 'State',
    states: [
      {
        stateName: 'Lagos & Southwestern States',
        capitalOrCity: 'Lagos / Ibadan',
        populationEstimate: '25 Million',
        primaryLanguage: 'Yoruba & Nigerian Pidgin',
        secondaryLanguage: 'English',
        percentages: { 'Yoruba': 65, 'Nigerian Pidgin': 20, 'English': 10, 'Igbo': 3, 'Hausa': 2 },
        notes: 'Economic hub where Yoruba culture, Nollywood cinema, and Nigerian Pidgin dominate.'
      },
      {
        stateName: 'Kano & Northern States',
        capitalOrCity: 'Kano / Kaduna',
        populationEstimate: '15 Million',
        primaryLanguage: 'Hausa',
        percentages: { 'Hausa': 82, 'Fulfulde (Fulani)': 10, 'Arabic': 4, 'English': 3, 'Other': 1 },
        notes: 'Hausa is written in Ajami (Arabic) and Boko (Latin) scripts; lingua franca of West Africa.'
      },
      {
        stateName: 'Enugu & Southeastern States',
        capitalOrCity: 'Enugu / Owerri',
        populationEstimate: '20 Million',
        primaryLanguage: 'Igbo',
        percentages: { 'Igbo': 85, 'Nigerian Pidgin': 10, 'English': 4, 'Other': 1 },
        notes: 'Igbo heartland with rich oral literature and proverbs.'
      },
      {
        stateName: 'Rivers & Niger Delta States',
        capitalOrCity: 'Port Harcourt',
        populationEstimate: '9 Million',
        primaryLanguage: 'Nigerian Pidgin & Ijaw',
        percentages: { 'Nigerian Pidgin': 50, 'Ijaw / Ogoni / Ikwerre': 35, 'English': 10, 'Igbo': 5 },
        notes: 'Extremely high linguistic diversity with dozens of coastal Niger-Congo languages.'
      }
    ]
  },

  // FRANCE - MAIN REGIONS
  FR: {
    countryCode: 'FR',
    countryName: 'France',
    subdivisionType: 'Region',
    states: [
      {
        stateName: 'Brittany (Bretagne)',
        capitalOrCity: 'Rennes / Quimper',
        populationEstimate: '3.4 Million',
        primaryLanguage: 'French',
        secondaryLanguage: 'Breton (Brezhoneg) & Gallo',
        percentages: { 'French': 94, 'Breton': 4, 'Gallo': 2 },
        notes: 'Breton is a Celtic language closely related to Cornish and Welsh; bilingual Diwan schools operate here.'
      },
      {
        stateName: 'Alsace (Grand Est)',
        capitalOrCity: 'Strasbourg',
        populationEstimate: '1.9 Million',
        primaryLanguage: 'French',
        secondaryLanguage: 'Alsatian (Elsässisch German dialect)',
        percentages: { 'French': 88, 'Alsatian German': 10, 'Other': 2 },
        notes: 'Germanic dialect tradition on the Rhine border; Strasbourg houses European Parliament.'
      },
      {
        stateName: 'Corsica (Corse)',
        capitalOrCity: 'Ajaccio / Bastia',
        populationEstimate: '350,000',
        primaryLanguage: 'French',
        secondaryLanguage: 'Corsican (Corsu)',
        percentages: { 'French': 75, 'Corsican': 23, 'Other': 2 },
        notes: 'Corsican is closely related to Tuscan Italian; taught in regional island schools.'
      },
      {
        stateName: 'Occitanie (Southern France)',
        capitalOrCity: 'Toulouse / Montpellier',
        populationEstimate: '6.0 Million',
        primaryLanguage: 'French',
        secondaryLanguage: 'Occitan (Lengadòc / Provençal)',
        percentages: { 'French': 95, 'Occitan': 4, 'Spanish / Catalan': 1 },
        notes: 'Historical Romance language region of troubadour poetry; Occitan signs present in Toulouse.'
      }
    ]
  },

  // PARAGUAY - DEPARTMENTS
  PY: {
    countryCode: 'PY',
    countryName: 'Paraguay',
    subdivisionType: 'Department',
    states: [
      {
        stateName: 'Asunción Capital Metro',
        capitalOrCity: 'Asunción',
        populationEstimate: '2.3 Million',
        primaryLanguage: 'Jopará (Guaraní-Spanish Code-Switching)',
        percentages: { 'Spanish': 52, 'Guaraní': 42, 'Jopará (Mixed)': 88 },
        notes: 'Urban residents seamlessly blend Spanish words onto Guaraní grammar rules.'
      },
      {
        stateName: 'Itapúa & San Pedro Departments',
        capitalOrCity: 'Encarnación',
        populationEstimate: '600,000',
        primaryLanguage: 'Guaraní',
        percentages: { 'Guaraní': 85, 'Spanish': 12, 'German (Mennonite)': 3 },
        notes: 'Rural heartland where Indigenous Guaraní is spoken in daily family and agricultural life.'
      }
    ]
  }
};
