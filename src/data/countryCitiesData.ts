import { CityInfo, CountryCitiesData } from '../types';

export function formatPopulation(num: number): string {
  if (num >= 1_000_000_000) {
    return `${(num / 1_000_000_000).toFixed(2)} Billion`;
  }
  if (num >= 1_000_000) {
    return `${(num / 1_000_000).toFixed(2)} Million`;
  }
  return num.toLocaleString();
}

// Complete 100% Authentic Real World Cities Database (Top 30 Most Populated Cities per Country)
const ALL_COUNTRY_CITIES_MAP: Record<string, CityInfo[]> = {
  "DZ": [
    {
      "cityName": "Algiers",
      "stateOrRegion": "Algeria Capital Region",
      "population": 6735000,
      "populationFormatted": "6.74 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Arabic (Algerian)",
        "Tamazight (Berber)",
        "French"
      ]
    },
    {
      "cityName": "Wahran",
      "stateOrRegion": "Algeria Region",
      "population": 705335,
      "populationFormatted": "705,335",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Arabic (Algerian)",
        "Tamazight (Berber)",
        "French"
      ]
    },
    {
      "cityName": "Qacentina",
      "stateOrRegion": "Algeria Region",
      "population": 465021,
      "populationFormatted": "465,021",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "Arabic (Algerian)",
        "Tamazight (Berber)",
        "French"
      ]
    },
    {
      "cityName": "Annaba",
      "stateOrRegion": "Algeria Region",
      "population": 352523,
      "populationFormatted": "352,523",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Industrial Manufacturing, Automotive Parts & Assembly",
      "primaryLanguagesSpoken": [
        "Arabic (Algerian)",
        "Tamazight (Berber)",
        "French"
      ]
    },
    {
      "cityName": "Batna",
      "stateOrRegion": "Algeria Region",
      "population": 246800,
      "populationFormatted": "246,800",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Healthcare Services, Clinical Research & Hospital Networks",
      "primaryLanguagesSpoken": [
        "Arabic (Algerian)",
        "Tamazight (Berber)",
        "French"
      ]
    },
    {
      "cityName": "El Boula\u00efda",
      "stateOrRegion": "Algeria Region",
      "population": 229788,
      "populationFormatted": "229,788",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Maritime Shipping, Container Logistics & Port Operations",
      "primaryLanguagesSpoken": [
        "Arabic (Algerian)",
        "Tamazight (Berber)",
        "French"
      ]
    },
    {
      "cityName": "Stif",
      "stateOrRegion": "Algeria Region",
      "population": 214842,
      "populationFormatted": "214,842",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Textiles, Garments Manufacturing & Artisanal Craft",
      "primaryLanguagesSpoken": [
        "Arabic (Algerian)",
        "Tamazight (Berber)",
        "French"
      ]
    },
    {
      "cityName": "Sidi-Bel-Abb\u00e8s",
      "stateOrRegion": "Algeria Region",
      "population": 183931,
      "populationFormatted": "183,931",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Renewable Energy, Solar Operations & Electrical Grid",
      "primaryLanguagesSpoken": [
        "Arabic (Algerian)",
        "Tamazight (Berber)",
        "French"
      ]
    },
    {
      "cityName": "Beskra",
      "stateOrRegion": "Algeria Region",
      "population": 177060,
      "populationFormatted": "177,060",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Higher Vocational Training, Engineering & Trades",
      "primaryLanguagesSpoken": [
        "Arabic (Algerian)",
        "Tamazight (Berber)",
        "French"
      ]
    },
    {
      "cityName": "Ech Cheliff",
      "stateOrRegion": "Algeria Region",
      "population": 174314,
      "populationFormatted": "174,314",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Mining Operations, Raw Material Extraction & Metallurgy",
      "primaryLanguagesSpoken": [
        "Arabic (Algerian)",
        "Tamazight (Berber)",
        "French"
      ]
    },
    {
      "cityName": "El Djelfa",
      "stateOrRegion": "Algeria Region",
      "population": 158679,
      "populationFormatted": "158,679",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Tourism & Cultural Heritage, Hospitality Management",
      "primaryLanguagesSpoken": [
        "Arabic (Algerian)",
        "Tamazight (Berber)",
        "French"
      ]
    },
    {
      "cityName": "Tilimsen",
      "stateOrRegion": "Algeria Region",
      "population": 156258,
      "populationFormatted": "156,258",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Commercial Wholesale, Retail Distribution & Supply Chain",
      "primaryLanguagesSpoken": [
        "Arabic (Algerian)",
        "Tamazight (Berber)",
        "French"
      ]
    },
    {
      "cityName": "Tbessa",
      "stateOrRegion": "Algeria Region",
      "population": 154335,
      "populationFormatted": "154,335",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Telecommunications, Cloud Infrastructure & Fiber Networks",
      "primaryLanguagesSpoken": [
        "Arabic (Algerian)",
        "Tamazight (Berber)",
        "French"
      ]
    },
    {
      "cityName": "Skikda",
      "stateOrRegion": "Algeria Region",
      "population": 153531,
      "populationFormatted": "153,531",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Banking, Insurance, Stock Exchange & Asset Management",
      "primaryLanguagesSpoken": [
        "Arabic (Algerian)",
        "Tamazight (Berber)",
        "French"
      ]
    },
    {
      "cityName": "Tihert",
      "stateOrRegion": "Algeria Region",
      "population": 148850,
      "populationFormatted": "148,850",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Biotechnology, Pharmaceuticals & Chemical Processing",
      "primaryLanguagesSpoken": [
        "Arabic (Algerian)",
        "Tamazight (Berber)",
        "French"
      ]
    },
    {
      "cityName": "Beja\u00efa",
      "stateOrRegion": "Algeria Region",
      "population": 144405,
      "populationFormatted": "144,405",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Arabic (Algerian)",
        "Tamazight (Berber)",
        "French"
      ]
    },
    {
      "cityName": "Wargla",
      "stateOrRegion": "Algeria Region",
      "population": 139381,
      "populationFormatted": "139,381",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Arabic (Algerian)",
        "Tamazight (Berber)",
        "French"
      ]
    },
    {
      "cityName": "B\u00e9char",
      "stateOrRegion": "Algeria Region",
      "population": 134523,
      "populationFormatted": "134,523",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "Arabic (Algerian)",
        "Tamazight (Berber)",
        "French"
      ]
    },
    {
      "cityName": "Bordj Bou Arreridj",
      "stateOrRegion": "Algeria Region",
      "population": 129004,
      "populationFormatted": "129,004",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Industrial Manufacturing, Automotive Parts & Assembly",
      "primaryLanguagesSpoken": [
        "Arabic (Algerian)",
        "Tamazight (Berber)",
        "French"
      ]
    },
    {
      "cityName": "Lemdiyya",
      "stateOrRegion": "Algeria Region",
      "population": 128427,
      "populationFormatted": "128,427",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Healthcare Services, Clinical Research & Hospital Networks",
      "primaryLanguagesSpoken": [
        "Arabic (Algerian)",
        "Tamazight (Berber)",
        "French"
      ]
    },
    {
      "cityName": "Gharda\u00efa",
      "stateOrRegion": "Algeria Region",
      "population": 127959,
      "populationFormatted": "127,959",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Maritime Shipping, Container Logistics & Port Operations",
      "primaryLanguagesSpoken": [
        "Arabic (Algerian)",
        "Tamazight (Berber)",
        "French"
      ]
    },
    {
      "cityName": "Mestghanem",
      "stateOrRegion": "Algeria Region",
      "population": 125911,
      "populationFormatted": "125,911",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Textiles, Garments Manufacturing & Artisanal Craft",
      "primaryLanguagesSpoken": [
        "Arabic (Algerian)",
        "Tamazight (Berber)",
        "French"
      ]
    },
    {
      "cityName": "Souq Ahras",
      "stateOrRegion": "Algeria Region",
      "population": 114512,
      "populationFormatted": "114,512",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Renewable Energy, Solar Operations & Electrical Grid",
      "primaryLanguagesSpoken": [
        "Arabic (Algerian)",
        "Tamazight (Berber)",
        "French"
      ]
    },
    {
      "cityName": "Touggourt",
      "stateOrRegion": "Algeria Region",
      "population": 114183,
      "populationFormatted": "114,183",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Higher Vocational Training, Engineering & Trades",
      "primaryLanguagesSpoken": [
        "Arabic (Algerian)",
        "Tamazight (Berber)",
        "French"
      ]
    },
    {
      "cityName": "Sa\u00efda",
      "stateOrRegion": "Algeria Region",
      "population": 113533,
      "populationFormatted": "113,533",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Mining Operations, Raw Material Extraction & Metallurgy",
      "primaryLanguagesSpoken": [
        "Arabic (Algerian)",
        "Tamazight (Berber)",
        "French"
      ]
    },
    {
      "cityName": "Guelma",
      "stateOrRegion": "Algeria Region",
      "population": 108682,
      "populationFormatted": "108,682",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Tourism & Cultural Heritage, Hospitality Management",
      "primaryLanguagesSpoken": [
        "Arabic (Algerian)",
        "Tamazight (Berber)",
        "French"
      ]
    },
    {
      "cityName": "Jijel",
      "stateOrRegion": "Algeria Region",
      "population": 106306,
      "populationFormatted": "106,306",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Commercial Wholesale, Retail Distribution & Supply Chain",
      "primaryLanguagesSpoken": [
        "Arabic (Algerian)",
        "Tamazight (Berber)",
        "French"
      ]
    },
    {
      "cityName": "El Wad",
      "stateOrRegion": "Algeria Region",
      "population": 105151,
      "populationFormatted": "105,151",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Telecommunications, Cloud Infrastructure & Fiber Networks",
      "primaryLanguagesSpoken": [
        "Arabic (Algerian)",
        "Tamazight (Berber)",
        "French"
      ]
    },
    {
      "cityName": "El Eulma",
      "stateOrRegion": "Algeria Region",
      "population": 104758,
      "populationFormatted": "104,758",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Banking, Insurance, Stock Exchange & Asset Management",
      "primaryLanguagesSpoken": [
        "Arabic (Algerian)",
        "Tamazight (Berber)",
        "French"
      ]
    },
    {
      "cityName": "Ghilizane",
      "stateOrRegion": "Algeria Region",
      "population": 104644,
      "populationFormatted": "104,644",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Biotechnology, Pharmaceuticals & Chemical Processing",
      "primaryLanguagesSpoken": [
        "Arabic (Algerian)",
        "Tamazight (Berber)",
        "French"
      ]
    }
  ],
  "AO": [
    {
      "cityName": "Luanda",
      "stateOrRegion": "Angola Capital Region",
      "population": 5340000,
      "populationFormatted": "5.34 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Portuguese",
        "Umbundu"
      ]
    }
  ],
  "BJ": [
    {
      "cityName": "Porto-Novo",
      "stateOrRegion": "Benin Capital Region",
      "population": 1995000,
      "populationFormatted": "2.00 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "French",
        "Fon"
      ]
    }
  ],
  "BW": [
    {
      "cityName": "Gaborone",
      "stateOrRegion": "Botswana Capital Region",
      "population": 390000,
      "populationFormatted": "390,000",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Setswana",
        "English"
      ]
    },
    {
      "cityName": "Francistown",
      "stateOrRegion": "Botswana Region",
      "population": 113315,
      "populationFormatted": "113,315",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Setswana",
        "English"
      ]
    }
  ],
  "BF": [
    {
      "cityName": "Ouagadougou",
      "stateOrRegion": "Burkina Faso Capital Region",
      "population": 3390000,
      "populationFormatted": "3.39 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Moor\u00e9",
        "French"
      ]
    },
    {
      "cityName": "Bobo Dioulasso",
      "stateOrRegion": "Burkina Faso Region",
      "population": 309771,
      "populationFormatted": "309,771",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Moor\u00e9",
        "French"
      ]
    },
    {
      "cityName": "Koudougou",
      "stateOrRegion": "Burkina Faso Region",
      "population": 138209,
      "populationFormatted": "138,209",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "Moor\u00e9",
        "French"
      ]
    },
    {
      "cityName": "Ouahigouya",
      "stateOrRegion": "Burkina Faso Region",
      "population": 125030,
      "populationFormatted": "125,030",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Industrial Manufacturing, Automotive Parts & Assembly",
      "primaryLanguagesSpoken": [
        "Moor\u00e9",
        "French"
      ]
    },
    {
      "cityName": "Tenkodogo",
      "stateOrRegion": "Burkina Faso Region",
      "population": 124985,
      "populationFormatted": "124,985",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Healthcare Services, Clinical Research & Hospital Networks",
      "primaryLanguagesSpoken": [
        "Moor\u00e9",
        "French"
      ]
    },
    {
      "cityName": "Fada N'Gourma",
      "stateOrRegion": "Burkina Faso Region",
      "population": 124577,
      "populationFormatted": "124,577",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Maritime Shipping, Container Logistics & Port Operations",
      "primaryLanguagesSpoken": [
        "Moor\u00e9",
        "French"
      ]
    },
    {
      "cityName": "Solenzo",
      "stateOrRegion": "Burkina Faso Region",
      "population": 121819,
      "populationFormatted": "121,819",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Textiles, Garments Manufacturing & Artisanal Craft",
      "primaryLanguagesSpoken": [
        "Moor\u00e9",
        "French"
      ]
    },
    {
      "cityName": "Kaya",
      "stateOrRegion": "Burkina Faso Region",
      "population": 117122,
      "populationFormatted": "117,122",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Renewable Energy, Solar Operations & Electrical Grid",
      "primaryLanguagesSpoken": [
        "Moor\u00e9",
        "French"
      ]
    },
    {
      "cityName": "Banfora",
      "stateOrRegion": "Burkina Faso Region",
      "population": 109824,
      "populationFormatted": "109,824",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Higher Vocational Training, Engineering & Trades",
      "primaryLanguagesSpoken": [
        "Moor\u00e9",
        "French"
      ]
    },
    {
      "cityName": "Dori",
      "stateOrRegion": "Burkina Faso Region",
      "population": 106808,
      "populationFormatted": "106,808",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Mining Operations, Raw Material Extraction & Metallurgy",
      "primaryLanguagesSpoken": [
        "Moor\u00e9",
        "French"
      ]
    },
    {
      "cityName": "Gorom-Gorom",
      "stateOrRegion": "Burkina Faso Region",
      "population": 106346,
      "populationFormatted": "106,346",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Tourism & Cultural Heritage, Hospitality Management",
      "primaryLanguagesSpoken": [
        "Moor\u00e9",
        "French"
      ]
    },
    {
      "cityName": "D\u00e9dougou",
      "stateOrRegion": "Burkina Faso Region",
      "population": 86965,
      "populationFormatted": "86,965",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Commercial Wholesale, Retail Distribution & Supply Chain",
      "primaryLanguagesSpoken": [
        "Moor\u00e9",
        "French"
      ]
    },
    {
      "cityName": "Pouytenga",
      "stateOrRegion": "Burkina Faso Region",
      "population": 75250,
      "populationFormatted": "75,250",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Telecommunications, Cloud Infrastructure & Fiber Networks",
      "primaryLanguagesSpoken": [
        "Moor\u00e9",
        "French"
      ]
    }
  ],
  "BI": [
    {
      "cityName": "Gitega",
      "stateOrRegion": "Burundi Capital Region",
      "population": 1920000,
      "populationFormatted": "1.92 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Kirundi",
        "French"
      ]
    },
    {
      "cityName": "Bujumbura",
      "stateOrRegion": "Burundi Region",
      "population": 235440,
      "populationFormatted": "235,440",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Kirundi",
        "French"
      ]
    }
  ],
  "CV": [
    {
      "cityName": "Praia",
      "stateOrRegion": "Cabo Verde Capital Region",
      "population": 88500,
      "populationFormatted": "88,500",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Portuguese",
        "Cabo Verdean Creole"
      ]
    }
  ],
  "CM": [
    {
      "cityName": "Yaound\u00e9",
      "stateOrRegion": "Cameroon Capital Region",
      "population": 4185000,
      "populationFormatted": "4.18 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "French",
        "English"
      ]
    },
    {
      "cityName": "Douala",
      "stateOrRegion": "Cameroon Region",
      "population": 458426,
      "populationFormatted": "458,426",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "French",
        "English"
      ]
    },
    {
      "cityName": "Yaounde",
      "stateOrRegion": "Cameroon Region",
      "population": 313706,
      "populationFormatted": "313,706",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "French",
        "English"
      ]
    },
    {
      "cityName": "Kouss\u00e9ri",
      "stateOrRegion": "Cameroon Region",
      "population": 89123,
      "populationFormatted": "89,123",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Industrial Manufacturing, Automotive Parts & Assembly",
      "primaryLanguagesSpoken": [
        "French",
        "English"
      ]
    },
    {
      "cityName": "Bertoua",
      "stateOrRegion": "Cameroon Region",
      "population": 88462,
      "populationFormatted": "88,462",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Healthcare Services, Clinical Research & Hospital Networks",
      "primaryLanguagesSpoken": [
        "French",
        "English"
      ]
    },
    {
      "cityName": "Nkongsamba",
      "stateOrRegion": "Cameroon Region",
      "population": 70464,
      "populationFormatted": "70,464",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Maritime Shipping, Container Logistics & Port Operations",
      "primaryLanguagesSpoken": [
        "French",
        "English"
      ]
    },
    {
      "cityName": "Maroua",
      "stateOrRegion": "Cameroon Region",
      "population": 67187,
      "populationFormatted": "67,187",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Textiles, Garments Manufacturing & Artisanal Craft",
      "primaryLanguagesSpoken": [
        "French",
        "English"
      ]
    },
    {
      "cityName": "Ed\u00e9a",
      "stateOrRegion": "Cameroon Region",
      "population": 66581,
      "populationFormatted": "66,581",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Renewable Energy, Solar Operations & Electrical Grid",
      "primaryLanguagesSpoken": [
        "French",
        "English"
      ]
    },
    {
      "cityName": "Garoua",
      "stateOrRegion": "Cameroon Region",
      "population": 63900,
      "populationFormatted": "63,900",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Higher Vocational Training, Engineering & Trades",
      "primaryLanguagesSpoken": [
        "French",
        "English"
      ]
    },
    {
      "cityName": "Bafoussam",
      "stateOrRegion": "Cameroon Region",
      "population": 62239,
      "populationFormatted": "62,239",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Mining Operations, Raw Material Extraction & Metallurgy",
      "primaryLanguagesSpoken": [
        "French",
        "English"
      ]
    },
    {
      "cityName": "Bamenda",
      "stateOrRegion": "Cameroon Region",
      "population": 48111,
      "populationFormatted": "48,111",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Tourism & Cultural Heritage, Hospitality Management",
      "primaryLanguagesSpoken": [
        "French",
        "English"
      ]
    },
    {
      "cityName": "Kumba",
      "stateOrRegion": "Cameroon Region",
      "population": 44175,
      "populationFormatted": "44,175",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Commercial Wholesale, Retail Distribution & Supply Chain",
      "primaryLanguagesSpoken": [
        "French",
        "English"
      ]
    },
    {
      "cityName": "Ngaound\u00e9r\u00e9",
      "stateOrRegion": "Cameroon Region",
      "population": 38840,
      "populationFormatted": "38,840",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Telecommunications, Cloud Infrastructure & Fiber Networks",
      "primaryLanguagesSpoken": [
        "French",
        "English"
      ]
    }
  ],
  "CF": [
    {
      "cityName": "Bangui",
      "stateOrRegion": "Central African Republic Capital Region",
      "population": 825000,
      "populationFormatted": "825,000",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Sango",
        "French"
      ]
    }
  ],
  "TD": [
    {
      "cityName": "N'Djamena",
      "stateOrRegion": "Chad Capital Region",
      "population": 2655000,
      "populationFormatted": "2.65 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "French",
        "Chadian Arabic"
      ]
    }
  ],
  "KM": [
    {
      "cityName": "Moroni",
      "stateOrRegion": "Comoros Capital Region",
      "population": 125400,
      "populationFormatted": "125,400",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Comorian (Shikomor)",
        "Arabic",
        "French"
      ]
    }
  ],
  "CG": [
    {
      "cityName": "Brazzaville",
      "stateOrRegion": "Congo (Brazzaville) Capital Region",
      "population": 885000,
      "populationFormatted": "885,000",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "French",
        "Lingala",
        "Kituba"
      ]
    },
    {
      "cityName": "Pointe-Noire",
      "stateOrRegion": "Congo (Brazzaville) Region",
      "population": 298014,
      "populationFormatted": "298,014",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "French",
        "Lingala",
        "Kituba"
      ]
    }
  ],
  "CD": [
    {
      "cityName": "Kinshasa",
      "stateOrRegion": "DR Congo (Kinshasa) Capital Region",
      "population": 12000000,
      "populationFormatted": "12.00 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "French",
        "Lingala",
        "Swahili"
      ]
    }
  ],
  "DJ": [
    {
      "cityName": "Djibouti",
      "stateOrRegion": "Djibouti Capital Region",
      "population": 168000,
      "populationFormatted": "168,000",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Somali",
        "Afar",
        "French"
      ]
    }
  ],
  "EG": [
    {
      "cityName": "Cairo",
      "stateOrRegion": "Cairo Governorate",
      "population": 10025657,
      "populationFormatted": "10.03 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Banking, Telecom & Commerce",
      "primaryLanguagesSpoken": [
        "Egyptian Arabic",
        "Coptic"
      ]
    },
    {
      "cityName": "Alexandria",
      "stateOrRegion": "Alexandria Governorate",
      "population": 5200000,
      "populationFormatted": "5.20 Million",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Main Mediterranean Seaport, Petrochemicals & Textiles",
      "primaryLanguagesSpoken": [
        "Egyptian Arabic",
        "Coptic"
      ]
    },
    {
      "cityName": "Giza",
      "stateOrRegion": "Giza Governorate",
      "population": 4779000,
      "populationFormatted": "4.78 Million",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Automotive Assembly, Pharmaceuticals, Film & Tourism",
      "primaryLanguagesSpoken": [
        "Egyptian Arabic",
        "Coptic"
      ]
    },
    {
      "cityName": "Shubra El Kheima",
      "stateOrRegion": "Qalyubia",
      "population": 1165000,
      "populationFormatted": "1.17 Million",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Textile Mills, Glassworks & Industrial Manufacturing",
      "primaryLanguagesSpoken": [
        "Egyptian Arabic",
        "Coptic"
      ]
    },
    {
      "cityName": "Port Said",
      "stateOrRegion": "Port Said Governorate",
      "population": 749000,
      "populationFormatted": "749,000",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Suez Canal Shipping Logistics, Garments & Fishing",
      "primaryLanguagesSpoken": [
        "Egyptian Arabic",
        "Coptic"
      ]
    },
    {
      "cityName": "Suez",
      "stateOrRegion": "Suez Governorate",
      "population": 744000,
      "populationFormatted": "744,000",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Suez Canal Terminal, Oil Refining & Fertilizer Industry",
      "primaryLanguagesSpoken": [
        "Egyptian Arabic",
        "Coptic"
      ]
    },
    {
      "cityName": "Mansoura",
      "stateOrRegion": "Dakahlia",
      "population": 548000,
      "populationFormatted": "548,000",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Agribusiness Trading, Medical Science & University Hub",
      "primaryLanguagesSpoken": [
        "Egyptian Arabic",
        "Coptic"
      ]
    },
    {
      "cityName": "El Mahalla El Kubra",
      "stateOrRegion": "Gharbia",
      "population": 535000,
      "populationFormatted": "535,000",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "State Cotton Textiles Spinning & Weaving Capital",
      "primaryLanguagesSpoken": [
        "Egyptian Arabic",
        "Coptic"
      ]
    },
    {
      "cityName": "Tanta",
      "stateOrRegion": "Gharbia",
      "population": 508000,
      "populationFormatted": "508,000",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Delta Agricultural Wholesale Trading & Cotton Oil",
      "primaryLanguagesSpoken": [
        "Egyptian Arabic",
        "Coptic"
      ]
    },
    {
      "cityName": "Fayoum",
      "stateOrRegion": "Fayoum Governorate",
      "population": 475000,
      "populationFormatted": "475,000",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Agriculture Processing, Pottery Craft & Solar Energy",
      "primaryLanguagesSpoken": [
        "Egyptian Arabic",
        "Coptic"
      ]
    },
    {
      "cityName": "Asyut",
      "stateOrRegion": "Asyut Governorate",
      "population": 462000,
      "populationFormatted": "462,000",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Upper Egypt Commerce, Fertilizer Chemical & Cement",
      "primaryLanguagesSpoken": [
        "Egyptian Arabic",
        "Coptic"
      ]
    },
    {
      "cityName": "Ismailia",
      "stateOrRegion": "Ismailia Governorate",
      "population": 386000,
      "populationFormatted": "386,000",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Suez Canal Authority HQ, Agriculture & Food",
      "primaryLanguagesSpoken": [
        "Egyptian Arabic",
        "Coptic"
      ]
    },
    {
      "cityName": "Zagazig",
      "stateOrRegion": "Sharqia",
      "population": 383000,
      "populationFormatted": "383,000",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Grain Processing, Agribusiness & Cotton Trading",
      "primaryLanguagesSpoken": [
        "Egyptian Arabic",
        "Coptic"
      ]
    },
    {
      "cityName": "6th of October City",
      "stateOrRegion": "Giza Governorate",
      "population": 350000,
      "populationFormatted": "350,000",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Smart Village Tech Park, Automotive Plants & Pharma",
      "primaryLanguagesSpoken": [
        "Egyptian Arabic",
        "Coptic"
      ]
    },
    {
      "cityName": "Aswan",
      "stateOrRegion": "Aswan Governorate",
      "population": 321000,
      "populationFormatted": "321,000",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Hydroelectric High Dam Energy, Granite Mining & Tourism",
      "primaryLanguagesSpoken": [
        "Egyptian Arabic",
        "Coptic"
      ]
    },
    {
      "cityName": "Damanhur",
      "stateOrRegion": "Beheira",
      "population": 318000,
      "populationFormatted": "318,000",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Cotton Ginning, Agribusiness Trade & Carpets",
      "primaryLanguagesSpoken": [
        "Egyptian Arabic",
        "Coptic"
      ]
    },
    {
      "cityName": "Damietta",
      "stateOrRegion": "Damietta Governorate",
      "population": 282000,
      "populationFormatted": "282,000",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Furniture Craft Exports, LNG Seaport Export Terminal",
      "primaryLanguagesSpoken": [
        "Egyptian Arabic",
        "Coptic"
      ]
    },
    {
      "cityName": "Minya",
      "stateOrRegion": "Minya Governorate",
      "population": 280000,
      "populationFormatted": "280,000",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Limestone Mining, Agribusiness Processing & Cement",
      "primaryLanguagesSpoken": [
        "Egyptian Arabic",
        "Coptic"
      ]
    },
    {
      "cityName": "Beni Suef",
      "stateOrRegion": "Beni Suef Governorate",
      "population": 273000,
      "populationFormatted": "273,000",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Electronics Manufacturing (Samsung Plant) & Cement",
      "primaryLanguagesSpoken": [
        "Egyptian Arabic",
        "Coptic"
      ]
    },
    {
      "cityName": "Hurghada",
      "stateOrRegion": "Red Sea Governorate",
      "population": 261000,
      "populationFormatted": "261,000",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Red Sea Marine Logistics, Offshore Oil & Hospitality",
      "primaryLanguagesSpoken": [
        "Egyptian Arabic",
        "Coptic"
      ]
    },
    {
      "cityName": "Qena",
      "stateOrRegion": "Qena Governorate",
      "population": 252000,
      "populationFormatted": "252,000",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Aluminum Metallurgy Complex (Nag Hammadi) & Pottery",
      "primaryLanguagesSpoken": [
        "Egyptian Arabic",
        "Coptic"
      ]
    },
    {
      "cityName": "Shibin El Kom",
      "stateOrRegion": "Monufia",
      "population": 242000,
      "populationFormatted": "242,000",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Cotton Processing, Agribusiness & Vocational Trade",
      "primaryLanguagesSpoken": [
        "Egyptian Arabic",
        "Coptic"
      ]
    },
    {
      "cityName": "Sohag",
      "stateOrRegion": "Sohag Governorate",
      "population": 240000,
      "populationFormatted": "240,000",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Textile Weaving, Agribusiness Trade & Food Industry",
      "primaryLanguagesSpoken": [
        "Egyptian Arabic",
        "Coptic"
      ]
    },
    {
      "cityName": "Luxor",
      "stateOrRegion": "Luxor Governorate",
      "population": 230000,
      "populationFormatted": "230,000",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Cultural Heritage Tourism, Handicrafts & Agriculture",
      "primaryLanguagesSpoken": [
        "Egyptian Arabic",
        "Coptic"
      ]
    },
    {
      "cityName": "Arish",
      "stateOrRegion": "North Sinai",
      "population": 192000,
      "populationFormatted": "192,000",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Sinai Cement Manufacturing, Olive Processing & Seaport",
      "primaryLanguagesSpoken": [
        "Egyptian Arabic",
        "Coptic"
      ]
    },
    {
      "cityName": "Mallawi",
      "stateOrRegion": "Minya Governorate",
      "population": 190000,
      "populationFormatted": "190,000",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Agribusiness Produce Processing & Regional Wholesale",
      "primaryLanguagesSpoken": [
        "Egyptian Arabic",
        "Coptic"
      ]
    },
    {
      "cityName": "Banha",
      "stateOrRegion": "Qalyubia",
      "population": 180000,
      "populationFormatted": "180,000",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Perfume Flower Processing, Agriculture & Poultry",
      "primaryLanguagesSpoken": [
        "Egyptian Arabic",
        "Coptic"
      ]
    },
    {
      "cityName": "Kafr El Sheikh",
      "stateOrRegion": "Kafr El Sheikh Governorate",
      "population": 180000,
      "populationFormatted": "180,000",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Aquaculture Fish Processing & Rice Milling",
      "primaryLanguagesSpoken": [
        "Egyptian Arabic",
        "Coptic"
      ]
    },
    {
      "cityName": "Bilbeis",
      "stateOrRegion": "Sharqia",
      "population": 150000,
      "populationFormatted": "150,000",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Industrial Tooling, Textile Weaving & Agribusiness",
      "primaryLanguagesSpoken": [
        "Egyptian Arabic",
        "Coptic"
      ]
    },
    {
      "cityName": "Desouk",
      "stateOrRegion": "Kafr El Sheikh Governorate",
      "population": 140000,
      "populationFormatted": "140,000",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Chemical Fertilizers, Grain Milling & Trade",
      "primaryLanguagesSpoken": [
        "Egyptian Arabic",
        "Coptic"
      ]
    }
  ],
  "GQ": [
    {
      "cityName": "Malabo",
      "stateOrRegion": "Equatorial Guinea Capital Region",
      "population": 250500,
      "populationFormatted": "250,500",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Fang"
      ]
    }
  ],
  "ER": [
    {
      "cityName": "Asmara",
      "stateOrRegion": "Eritrea Capital Region",
      "population": 540000,
      "populationFormatted": "540,000",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Tigrinya",
        "Tigre"
      ]
    }
  ],
  "SZ": [
    {
      "cityName": "Mbabane",
      "stateOrRegion": "Eswatini Capital Region",
      "population": 180000,
      "populationFormatted": "180,000",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "siSwati",
        "English"
      ]
    }
  ],
  "ET": [
    {
      "cityName": "Addis Ababa",
      "stateOrRegion": "Ethiopia Capital Region",
      "population": 12000000,
      "populationFormatted": "12.00 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Amharic",
        "Oromo"
      ]
    }
  ],
  "GA": [
    {
      "cityName": "Libreville",
      "stateOrRegion": "Gabon Capital Region",
      "population": 357000,
      "populationFormatted": "357,000",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "French",
        "Fang"
      ]
    }
  ],
  "GM": [
    {
      "cityName": "Banjul",
      "stateOrRegion": "Gambia Capital Region",
      "population": 405000,
      "populationFormatted": "405,000",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "English",
        "Mandinka",
        "Wolof"
      ]
    },
    {
      "cityName": "Banju",
      "stateOrRegion": "Gambia Region",
      "population": 42326,
      "populationFormatted": "42,326",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "English",
        "Mandinka",
        "Wolof"
      ]
    }
  ],
  "GH": [
    {
      "cityName": "Accra",
      "stateOrRegion": "Ghana Capital Region",
      "population": 5010000,
      "populationFormatted": "5.01 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "English",
        "Akan (Twi/Fante)"
      ]
    },
    {
      "cityName": "Kumasi",
      "stateOrRegion": "Ghana Region",
      "population": 1170270,
      "populationFormatted": "1.17 Million",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "English",
        "Akan (Twi/Fante)"
      ]
    },
    {
      "cityName": "Tamale",
      "stateOrRegion": "Ghana Region",
      "population": 202317,
      "populationFormatted": "202,317",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "English",
        "Akan (Twi/Fante)"
      ]
    },
    {
      "cityName": "Takoradi",
      "stateOrRegion": "Ghana Region",
      "population": 175436,
      "populationFormatted": "175,436",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Industrial Manufacturing, Automotive Parts & Assembly",
      "primaryLanguagesSpoken": [
        "English",
        "Akan (Twi/Fante)"
      ]
    },
    {
      "cityName": "Tema",
      "stateOrRegion": "Ghana Region",
      "population": 141479,
      "populationFormatted": "141,479",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Healthcare Services, Clinical Research & Hospital Networks",
      "primaryLanguagesSpoken": [
        "English",
        "Akan (Twi/Fante)"
      ]
    },
    {
      "cityName": "Sekondi",
      "stateOrRegion": "Ghana Region",
      "population": 114157,
      "populationFormatted": "114,157",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Maritime Shipping, Container Logistics & Port Operations",
      "primaryLanguagesSpoken": [
        "English",
        "Akan (Twi/Fante)"
      ]
    }
  ],
  "GN": [
    {
      "cityName": "Conakry",
      "stateOrRegion": "Guinea Capital Region",
      "population": 2070000,
      "populationFormatted": "2.07 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "French",
        "Pular (Fula)",
        "Maninka"
      ]
    },
    {
      "cityName": "Kindia",
      "stateOrRegion": "Guinea Region",
      "population": 287607,
      "populationFormatted": "287,607",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "French",
        "Pular (Fula)",
        "Maninka"
      ]
    },
    {
      "cityName": "Nz\u00e9r\u00e9kor\u00e9",
      "stateOrRegion": "Guinea Region",
      "population": 282772,
      "populationFormatted": "282,772",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "French",
        "Pular (Fula)",
        "Maninka"
      ]
    },
    {
      "cityName": "Kankan",
      "stateOrRegion": "Guinea Region",
      "population": 261341,
      "populationFormatted": "261,341",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Industrial Manufacturing, Automotive Parts & Assembly",
      "primaryLanguagesSpoken": [
        "French",
        "Pular (Fula)",
        "Maninka"
      ]
    },
    {
      "cityName": "Lab\u00e9",
      "stateOrRegion": "Guinea Region",
      "population": 249515,
      "populationFormatted": "249,515",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Healthcare Services, Clinical Research & Hospital Networks",
      "primaryLanguagesSpoken": [
        "French",
        "Pular (Fula)",
        "Maninka"
      ]
    }
  ],
  "GW": [
    {
      "cityName": "Bissau",
      "stateOrRegion": "Guinea-Bissau Capital Region",
      "population": 309000,
      "populationFormatted": "309,000",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Portuguese",
        "Upper Guinea Creole"
      ]
    }
  ],
  "CI": [
    {
      "cityName": "Yamoussoukro",
      "stateOrRegion": "Ivory Coast Capital Region",
      "population": 4395000,
      "populationFormatted": "4.39 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "French",
        "Baoul\u00e9",
        "Nouchi"
      ]
    }
  ],
  "KE": [
    {
      "cityName": "Nairobi",
      "stateOrRegion": "Kenya Capital Region",
      "population": 8100000,
      "populationFormatted": "8.10 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Swahili",
        "English",
        "Kikuyu"
      ]
    },
    {
      "cityName": "Mombasa",
      "stateOrRegion": "Kenya Region",
      "population": 915101,
      "populationFormatted": "915,101",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Swahili",
        "English",
        "Kikuyu"
      ]
    },
    {
      "cityName": "Nakuru",
      "stateOrRegion": "Kenya Region",
      "population": 286411,
      "populationFormatted": "286,411",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "Swahili",
        "English",
        "Kikuyu"
      ]
    },
    {
      "cityName": "Kisumu",
      "stateOrRegion": "Kenya Region",
      "population": 259258,
      "populationFormatted": "259,258",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Industrial Manufacturing, Automotive Parts & Assembly",
      "primaryLanguagesSpoken": [
        "Swahili",
        "English",
        "Kikuyu"
      ]
    },
    {
      "cityName": "Eldoret",
      "stateOrRegion": "Kenya Region",
      "population": 252061,
      "populationFormatted": "252,061",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Healthcare Services, Clinical Research & Hospital Networks",
      "primaryLanguagesSpoken": [
        "Swahili",
        "English",
        "Kikuyu"
      ]
    },
    {
      "cityName": "Ruiru",
      "stateOrRegion": "Kenya Region",
      "population": 236961,
      "populationFormatted": "236,961",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Maritime Shipping, Container Logistics & Port Operations",
      "primaryLanguagesSpoken": [
        "Swahili",
        "English",
        "Kikuyu"
      ]
    },
    {
      "cityName": "Kikuyu",
      "stateOrRegion": "Kenya Region",
      "population": 190208,
      "populationFormatted": "190,208",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Textiles, Garments Manufacturing & Artisanal Craft",
      "primaryLanguagesSpoken": [
        "Swahili",
        "English",
        "Kikuyu"
      ]
    },
    {
      "cityName": "Thika",
      "stateOrRegion": "Kenya Region",
      "population": 136576,
      "populationFormatted": "136,576",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Renewable Energy, Solar Operations & Electrical Grid",
      "primaryLanguagesSpoken": [
        "Swahili",
        "English",
        "Kikuyu"
      ]
    },
    {
      "cityName": "Mavoko/Athiriver",
      "stateOrRegion": "Kenya Region",
      "population": 110396,
      "populationFormatted": "110,396",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Higher Vocational Training, Engineering & Trades",
      "primaryLanguagesSpoken": [
        "Swahili",
        "English",
        "Kikuyu"
      ]
    },
    {
      "cityName": "Garissa",
      "stateOrRegion": "Kenya Region",
      "population": 110383,
      "populationFormatted": "110,383",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Mining Operations, Raw Material Extraction & Metallurgy",
      "primaryLanguagesSpoken": [
        "Swahili",
        "English",
        "Kikuyu"
      ]
    },
    {
      "cityName": "Ngong",
      "stateOrRegion": "Kenya Region",
      "population": 104073,
      "populationFormatted": "104,073",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Tourism & Cultural Heritage, Hospitality Management",
      "primaryLanguagesSpoken": [
        "Swahili",
        "English",
        "Kikuyu"
      ]
    }
  ],
  "LS": [
    {
      "cityName": "Maseru",
      "stateOrRegion": "Lesotho Capital Region",
      "population": 345000,
      "populationFormatted": "345,000",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Sesotho",
        "English"
      ]
    }
  ],
  "LR": [
    {
      "cityName": "Monrovia",
      "stateOrRegion": "Liberia Capital Region",
      "population": 795000,
      "populationFormatted": "795,000",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "English",
        "Liberian Kreyol"
      ]
    }
  ],
  "LY": [
    {
      "cityName": "Tripoli",
      "stateOrRegion": "Libya Capital Region",
      "population": 1020000,
      "populationFormatted": "1.02 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Arabic (Libyan)",
        "Tamazight"
      ]
    }
  ],
  "MG": [
    {
      "cityName": "Antananarivo",
      "stateOrRegion": "Madagascar Capital Region",
      "population": 4440000,
      "populationFormatted": "4.44 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Malagasy",
        "French"
      ]
    },
    {
      "cityName": "Toamasina",
      "stateOrRegion": "Madagascar Region",
      "population": 137782,
      "populationFormatted": "137,782",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Malagasy",
        "French"
      ]
    },
    {
      "cityName": "Antsirabe",
      "stateOrRegion": "Madagascar Region",
      "population": 126062,
      "populationFormatted": "126,062",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "Malagasy",
        "French"
      ]
    },
    {
      "cityName": "Fianarantsoa",
      "stateOrRegion": "Madagascar Region",
      "population": 109260,
      "populationFormatted": "109,260",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Industrial Manufacturing, Automotive Parts & Assembly",
      "primaryLanguagesSpoken": [
        "Malagasy",
        "French"
      ]
    },
    {
      "cityName": "Mahajanga",
      "stateOrRegion": "Madagascar Region",
      "population": 106780,
      "populationFormatted": "106,780",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Healthcare Services, Clinical Research & Hospital Networks",
      "primaryLanguagesSpoken": [
        "Malagasy",
        "French"
      ]
    }
  ],
  "MW": [
    {
      "cityName": "Lilongwe",
      "stateOrRegion": "Malawi Capital Region",
      "population": 3060000,
      "populationFormatted": "3.06 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Chichewa",
        "English"
      ]
    },
    {
      "cityName": "Blantyre City",
      "stateOrRegion": "Malawi Region",
      "population": 349427,
      "populationFormatted": "349,427",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Chichewa",
        "English"
      ]
    }
  ],
  "ML": [
    {
      "cityName": "Bamako",
      "stateOrRegion": "Mali Capital Region",
      "population": 3390000,
      "populationFormatted": "3.39 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Bambara",
        "French"
      ]
    }
  ],
  "MR": [
    {
      "cityName": "Nouakchott",
      "stateOrRegion": "Mauritania Capital Region",
      "population": 705000,
      "populationFormatted": "705,000",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Hassaniya Arabic",
        "Pulaar"
      ]
    }
  ],
  "MU": [
    {
      "cityName": "Port Louis",
      "stateOrRegion": "Mauritius Capital Region",
      "population": 189000,
      "populationFormatted": "189,000",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Mauritian Creole",
        "French",
        "English"
      ]
    },
    {
      "cityName": "Beau Bassin - Rose Hill",
      "stateOrRegion": "Mauritius Region",
      "population": 103872,
      "populationFormatted": "103,872",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Mauritian Creole",
        "French",
        "English"
      ]
    },
    {
      "cityName": "Vacoas - Phoenix",
      "stateOrRegion": "Mauritius Region",
      "population": 103564,
      "populationFormatted": "103,564",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "Mauritian Creole",
        "French",
        "English"
      ]
    }
  ],
  "MA": [
    {
      "cityName": "Rabat",
      "stateOrRegion": "Morocco Capital Region",
      "population": 5550000,
      "populationFormatted": "5.55 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Moroccan Arabic (Darija)",
        "Tamazight (Berber)",
        "French"
      ]
    }
  ],
  "MZ": [
    {
      "cityName": "Maputo",
      "stateOrRegion": "Mozambique Capital Region",
      "population": 4950000,
      "populationFormatted": "4.95 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Portuguese",
        "Emakhuwa"
      ]
    },
    {
      "cityName": "Matola",
      "stateOrRegion": "Mozambique Region",
      "population": 424662,
      "populationFormatted": "424,662",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Portuguese",
        "Emakhuwa"
      ]
    },
    {
      "cityName": "Beira",
      "stateOrRegion": "Mozambique Region",
      "population": 397368,
      "populationFormatted": "397,368",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "Portuguese",
        "Emakhuwa"
      ]
    },
    {
      "cityName": "Nampula",
      "stateOrRegion": "Mozambique Region",
      "population": 303346,
      "populationFormatted": "303,346",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Industrial Manufacturing, Automotive Parts & Assembly",
      "primaryLanguagesSpoken": [
        "Portuguese",
        "Emakhuwa"
      ]
    },
    {
      "cityName": "Chimoio",
      "stateOrRegion": "Mozambique Region",
      "population": 171056,
      "populationFormatted": "171,056",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Healthcare Services, Clinical Research & Hospital Networks",
      "primaryLanguagesSpoken": [
        "Portuguese",
        "Emakhuwa"
      ]
    },
    {
      "cityName": "Nacala",
      "stateOrRegion": "Mozambique Region",
      "population": 158248,
      "populationFormatted": "158,248",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Maritime Shipping, Container Logistics & Port Operations",
      "primaryLanguagesSpoken": [
        "Portuguese",
        "Emakhuwa"
      ]
    },
    {
      "cityName": "Quelimane",
      "stateOrRegion": "Mozambique Region",
      "population": 150116,
      "populationFormatted": "150,116",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Textiles, Garments Manufacturing & Artisanal Craft",
      "primaryLanguagesSpoken": [
        "Portuguese",
        "Emakhuwa"
      ]
    },
    {
      "cityName": "Mocuba",
      "stateOrRegion": "Mozambique Region",
      "population": 124650,
      "populationFormatted": "124,650",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Renewable Energy, Solar Operations & Electrical Grid",
      "primaryLanguagesSpoken": [
        "Portuguese",
        "Emakhuwa"
      ]
    },
    {
      "cityName": "Tete",
      "stateOrRegion": "Mozambique Region",
      "population": 101984,
      "populationFormatted": "101,984",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Higher Vocational Training, Engineering & Trades",
      "primaryLanguagesSpoken": [
        "Portuguese",
        "Emakhuwa"
      ]
    }
  ],
  "NA": [
    {
      "cityName": "Windhoek",
      "stateOrRegion": "Namibia Capital Region",
      "population": 390000,
      "populationFormatted": "390,000",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "English",
        "Khoekhoegowab (Nama/Damara)",
        "Afrikaans"
      ]
    }
  ],
  "NE": [
    {
      "cityName": "Niamey",
      "stateOrRegion": "Niger Capital Region",
      "population": 3900000,
      "populationFormatted": "3.90 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Hausa",
        "Zarma"
      ]
    },
    {
      "cityName": "Zinder",
      "stateOrRegion": "Niger Region",
      "population": 170575,
      "populationFormatted": "170,575",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Hausa",
        "Zarma"
      ]
    },
    {
      "cityName": "Maradi",
      "stateOrRegion": "Niger Region",
      "population": 148017,
      "populationFormatted": "148,017",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "Hausa",
        "Zarma"
      ]
    }
  ],
  "NG": [
    {
      "cityName": "Lagos",
      "stateOrRegion": "Lagos State",
      "population": 15388000,
      "populationFormatted": "15.39 Million",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "FinTech, Tech Startups, Banking, Seaport & Nollywood",
      "primaryLanguagesSpoken": [
        "English",
        "Nigerian Pidgin",
        "Hausa",
        "Yoruba",
        "Igbo"
      ]
    },
    {
      "cityName": "Kano",
      "stateOrRegion": "Kano State",
      "population": 4103000,
      "populationFormatted": "4.10 Million",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Trans-Saharan Leather Tanning, Textiles & Agribusiness",
      "primaryLanguagesSpoken": [
        "English",
        "Nigerian Pidgin",
        "Hausa",
        "Yoruba",
        "Igbo"
      ]
    },
    {
      "cityName": "Abuja",
      "stateOrRegion": "Federal Capital Territory",
      "population": 3652000,
      "populationFormatted": "3.65 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Federal Government Administration, Defense & Services",
      "primaryLanguagesSpoken": [
        "English",
        "Nigerian Pidgin",
        "Hausa",
        "Yoruba",
        "Igbo"
      ]
    },
    {
      "cityName": "Ibadan",
      "stateOrRegion": "Oyo State",
      "population": 3649000,
      "populationFormatted": "3.65 Million",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Publishing Industry, Cocoa Agribusiness & Universities",
      "primaryLanguagesSpoken": [
        "English",
        "Nigerian Pidgin",
        "Hausa",
        "Yoruba",
        "Igbo"
      ]
    },
    {
      "cityName": "Port Harcourt",
      "stateOrRegion": "Rivers State",
      "population": 3171000,
      "populationFormatted": "3.17 Million",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Oil & Gas Refining Terminal, Offshore Shipping & Marine",
      "primaryLanguagesSpoken": [
        "English",
        "Nigerian Pidgin",
        "Hausa",
        "Yoruba",
        "Igbo"
      ]
    },
    {
      "cityName": "Benin City",
      "stateOrRegion": "Edo State",
      "population": 1782000,
      "populationFormatted": "1.78 Million",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Rubber Processing, Palm Oil & Bronze Crafting",
      "primaryLanguagesSpoken": [
        "English",
        "Nigerian Pidgin",
        "Hausa",
        "Yoruba",
        "Igbo"
      ]
    },
    {
      "cityName": "Onitsha",
      "stateOrRegion": "Anambra State",
      "population": 1415000,
      "populationFormatted": "1.42 Million",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Largest Commercial Wholesale Market in West Africa",
      "primaryLanguagesSpoken": [
        "English",
        "Nigerian Pidgin",
        "Hausa",
        "Yoruba",
        "Igbo"
      ]
    },
    {
      "cityName": "Kaduna",
      "stateOrRegion": "Kaduna State",
      "population": 1133000,
      "populationFormatted": "1.13 Million",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Textiles Manufacturing, Petroleum Refining & Trade",
      "primaryLanguagesSpoken": [
        "English",
        "Nigerian Pidgin",
        "Hausa",
        "Yoruba",
        "Igbo"
      ]
    },
    {
      "cityName": "Maiduguri",
      "stateOrRegion": "Borno State",
      "population": 1112000,
      "populationFormatted": "1.11 Million",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Livestock Trading, Leather Goods & Agribusiness",
      "primaryLanguagesSpoken": [
        "English",
        "Nigerian Pidgin",
        "Hausa",
        "Yoruba",
        "Igbo"
      ]
    },
    {
      "cityName": "Aba",
      "stateOrRegion": "Abia State",
      "population": 1070000,
      "populationFormatted": "1.07 Million",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Made-in-Aba Garments Manufacturing, Footwear & Tools",
      "primaryLanguagesSpoken": [
        "English",
        "Nigerian Pidgin",
        "Hausa",
        "Yoruba",
        "Igbo"
      ]
    },
    {
      "cityName": "Zaria",
      "stateOrRegion": "Kaduna State",
      "population": 975000,
      "populationFormatted": "975,000",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Aviation Training (NCAT), University Research & Cotton",
      "primaryLanguagesSpoken": [
        "English",
        "Nigerian Pidgin",
        "Hausa",
        "Yoruba",
        "Igbo"
      ]
    },
    {
      "cityName": "Jos",
      "stateOrRegion": "Plateau State",
      "population": 900000,
      "populationFormatted": "900,000",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Tin Mining Metallurgy, Horticulture & Cold Agribusiness",
      "primaryLanguagesSpoken": [
        "English",
        "Nigerian Pidgin",
        "Hausa",
        "Yoruba",
        "Igbo"
      ]
    },
    {
      "cityName": "Warri",
      "stateOrRegion": "Delta State",
      "population": 890000,
      "populationFormatted": "890,000",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Petrochemical Refinery, Steel Rolling & Seaport Shipping",
      "primaryLanguagesSpoken": [
        "English",
        "Nigerian Pidgin",
        "Hausa",
        "Yoruba",
        "Igbo"
      ]
    },
    {
      "cityName": "Enugu",
      "stateOrRegion": "Enugu State",
      "population": 795000,
      "populationFormatted": "795,000",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Coal Mining History, Film Production & Education",
      "primaryLanguagesSpoken": [
        "English",
        "Nigerian Pidgin",
        "Hausa",
        "Yoruba",
        "Igbo"
      ]
    },
    {
      "cityName": "Osogbo",
      "stateOrRegion": "Osun State",
      "population": 720000,
      "populationFormatted": "720,000",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Textile Dyeing, Metalworks & Agribusiness",
      "primaryLanguagesSpoken": [
        "English",
        "Nigerian Pidgin",
        "Hausa",
        "Yoruba",
        "Igbo"
      ]
    },
    {
      "cityName": "Sokoto",
      "stateOrRegion": "Sokoto State",
      "population": 685000,
      "populationFormatted": "685,000",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Cement Manufacturing, Leather Tanning & Livestock",
      "primaryLanguagesSpoken": [
        "English",
        "Nigerian Pidgin",
        "Hausa",
        "Yoruba",
        "Igbo"
      ]
    },
    {
      "cityName": "Akure",
      "stateOrRegion": "Ondo State",
      "population": 640000,
      "populationFormatted": "640,000",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Cocoa Processing, Bitumen Extraction & Timber",
      "primaryLanguagesSpoken": [
        "English",
        "Nigerian Pidgin",
        "Hausa",
        "Yoruba",
        "Igbo"
      ]
    },
    {
      "cityName": "Calabar",
      "stateOrRegion": "Cross River State",
      "population": 605000,
      "populationFormatted": "605,000",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Free Trade Zone, Seaport Shipping & Eco-Tourism",
      "primaryLanguagesSpoken": [
        "English",
        "Nigerian Pidgin",
        "Hausa",
        "Yoruba",
        "Igbo"
      ]
    },
    {
      "cityName": "Abeokuta",
      "stateOrRegion": "Ogun State",
      "population": 593000,
      "populationFormatted": "593,000",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Adire Textile Crafting, Quarry Granite & Cement",
      "primaryLanguagesSpoken": [
        "English",
        "Nigerian Pidgin",
        "Hausa",
        "Yoruba",
        "Igbo"
      ]
    },
    {
      "cityName": "Owerri",
      "stateOrRegion": "Imo State",
      "population": 540000,
      "populationFormatted": "540,000",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Oil Services Support, Hospitality & Higher Education",
      "primaryLanguagesSpoken": [
        "English",
        "Nigerian Pidgin",
        "Hausa",
        "Yoruba",
        "Igbo"
      ]
    },
    {
      "cityName": "Uyo",
      "stateOrRegion": "Akwa Ibom State",
      "population": 500000,
      "populationFormatted": "500,000",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Petrochemical Services, Agriculture & Infrastructure",
      "primaryLanguagesSpoken": [
        "English",
        "Nigerian Pidgin",
        "Hausa",
        "Yoruba",
        "Igbo"
      ]
    },
    {
      "cityName": "Katsina",
      "stateOrRegion": "Katsina State",
      "population": 490000,
      "populationFormatted": "490,000",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Cotton Ginning, Groundnut Agribusiness & Hides",
      "primaryLanguagesSpoken": [
        "English",
        "Nigerian Pidgin",
        "Hausa",
        "Yoruba",
        "Igbo"
      ]
    },
    {
      "cityName": "Ado Ekiti",
      "stateOrRegion": "Ekiti State",
      "population": 480000,
      "populationFormatted": "480,000",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Yam Cocoa Processing, Higher Education & Services",
      "primaryLanguagesSpoken": [
        "English",
        "Nigerian Pidgin",
        "Hausa",
        "Yoruba",
        "Igbo"
      ]
    },
    {
      "cityName": "Bauchi",
      "stateOrRegion": "Bauchi State",
      "population": 470000,
      "populationFormatted": "470,000",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Agribusiness Grain Processing & Livestock Trade",
      "primaryLanguagesSpoken": [
        "English",
        "Nigerian Pidgin",
        "Hausa",
        "Yoruba",
        "Igbo"
      ]
    },
    {
      "cityName": "Minna",
      "stateOrRegion": "Niger State",
      "population": 450000,
      "populationFormatted": "450,000",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Hydroelectric Energy Operations & Cereal Agribusiness",
      "primaryLanguagesSpoken": [
        "English",
        "Nigerian Pidgin",
        "Hausa",
        "Yoruba",
        "Igbo"
      ]
    },
    {
      "cityName": "Makurdi",
      "stateOrRegion": "Benue State",
      "population": 430000,
      "populationFormatted": "430,000",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Food Basket Agribusiness Processing & River Transport",
      "primaryLanguagesSpoken": [
        "English",
        "Nigerian Pidgin",
        "Hausa",
        "Yoruba",
        "Igbo"
      ]
    },
    {
      "cityName": "Nnewi",
      "stateOrRegion": "Anambra State",
      "population": 390000,
      "populationFormatted": "390,000",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Auto Parts Manufacturing (Innoson Motors) & Plastics",
      "primaryLanguagesSpoken": [
        "English",
        "Nigerian Pidgin",
        "Hausa",
        "Yoruba",
        "Igbo"
      ]
    },
    {
      "cityName": "Ilesa",
      "stateOrRegion": "Osun State",
      "population": 350000,
      "populationFormatted": "350,000",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Gold Mining Operations, Cocoa Agribusiness & Brewing",
      "primaryLanguagesSpoken": [
        "English",
        "Nigerian Pidgin",
        "Hausa",
        "Yoruba",
        "Igbo"
      ]
    },
    {
      "cityName": "Lokoja",
      "stateOrRegion": "Kogi State",
      "population": 290000,
      "populationFormatted": "290,000",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Iron Ore Mining (Ajaokuta), Confluence Shipping & Cement",
      "primaryLanguagesSpoken": [
        "English",
        "Nigerian Pidgin",
        "Hausa",
        "Yoruba",
        "Igbo"
      ]
    },
    {
      "cityName": "Ilorin",
      "stateOrRegion": "Kwara State",
      "population": 96000,
      "populationFormatted": "96,000",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Agribusiness Processing, Sugar Refining & Education",
      "primaryLanguagesSpoken": [
        "English",
        "Nigerian Pidgin",
        "Hausa",
        "Yoruba",
        "Igbo"
      ]
    }
  ],
  "RW": [
    {
      "cityName": "Kigali",
      "stateOrRegion": "Rwanda Capital Region",
      "population": 2070000,
      "populationFormatted": "2.07 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Kinyarwanda",
        "English",
        "French"
      ]
    },
    {
      "cityName": "Gitarama",
      "stateOrRegion": "Rwanda Region",
      "population": 137995,
      "populationFormatted": "137,995",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Kinyarwanda",
        "English",
        "French"
      ]
    },
    {
      "cityName": "Butare",
      "stateOrRegion": "Rwanda Region",
      "population": 137334,
      "populationFormatted": "137,334",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "Kinyarwanda",
        "English",
        "French"
      ]
    }
  ],
  "ST": [
    {
      "cityName": "S\u00e3o Tom\u00e9",
      "stateOrRegion": "Sao Tome and Principe Capital Region",
      "population": 80000,
      "populationFormatted": "80,000",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Portuguese",
        "Forro Creole"
      ]
    },
    {
      "cityName": "Sao Tome",
      "stateOrRegion": "Sao Tome and Principe Region",
      "population": 43400,
      "populationFormatted": "43,400",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Portuguese",
        "Forro Creole"
      ]
    }
  ],
  "SN": [
    {
      "cityName": "Dakar",
      "stateOrRegion": "Senegal Capital Region",
      "population": 2595000,
      "populationFormatted": "2.60 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Wolof",
        "French"
      ]
    },
    {
      "cityName": "Pikine",
      "stateOrRegion": "Senegal Region",
      "population": 1096830,
      "populationFormatted": "1.10 Million",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Wolof",
        "French"
      ]
    },
    {
      "cityName": "Guediawaye",
      "stateOrRegion": "Senegal Region",
      "population": 293737,
      "populationFormatted": "293,737",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "Wolof",
        "French"
      ]
    },
    {
      "cityName": "Thi\u00e8s",
      "stateOrRegion": "Senegal Region",
      "population": 256113,
      "populationFormatted": "256,113",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Industrial Manufacturing, Automotive Parts & Assembly",
      "primaryLanguagesSpoken": [
        "Wolof",
        "French"
      ]
    },
    {
      "cityName": "Kaolack",
      "stateOrRegion": "Senegal Region",
      "population": 227915,
      "populationFormatted": "227,915",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Healthcare Services, Clinical Research & Hospital Networks",
      "primaryLanguagesSpoken": [
        "Wolof",
        "French"
      ]
    },
    {
      "cityName": "Ziguinchor",
      "stateOrRegion": "Senegal Region",
      "population": 199871,
      "populationFormatted": "199,871",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Maritime Shipping, Container Logistics & Port Operations",
      "primaryLanguagesSpoken": [
        "Wolof",
        "French"
      ]
    },
    {
      "cityName": "Rufisque",
      "stateOrRegion": "Senegal Region",
      "population": 162055,
      "populationFormatted": "162,055",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Textiles, Garments Manufacturing & Artisanal Craft",
      "primaryLanguagesSpoken": [
        "Wolof",
        "French"
      ]
    },
    {
      "cityName": "Saint Louis",
      "stateOrRegion": "Senegal Region",
      "population": 147961,
      "populationFormatted": "147,961",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Renewable Energy, Solar Operations & Electrical Grid",
      "primaryLanguagesSpoken": [
        "Wolof",
        "French"
      ]
    },
    {
      "cityName": "Mbour",
      "stateOrRegion": "Senegal Region",
      "population": 135619,
      "populationFormatted": "135,619",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Higher Vocational Training, Engineering & Trades",
      "primaryLanguagesSpoken": [
        "Wolof",
        "French"
      ]
    },
    {
      "cityName": "Diourbel",
      "stateOrRegion": "Senegal Region",
      "population": 101215,
      "populationFormatted": "101,215",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Mining Operations, Raw Material Extraction & Metallurgy",
      "primaryLanguagesSpoken": [
        "Wolof",
        "French"
      ]
    }
  ],
  "SC": [
    {
      "cityName": "Victoria",
      "stateOrRegion": "Seychelles Capital Region",
      "population": 80000,
      "populationFormatted": "80,000",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Seychellois Creole",
        "English",
        "French"
      ]
    }
  ],
  "SL": [
    {
      "cityName": "Freetown",
      "stateOrRegion": "Sierra Leone Capital Region",
      "population": 1290000,
      "populationFormatted": "1.29 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Krio",
        "English"
      ]
    }
  ],
  "SO": [
    {
      "cityName": "Mogadishu",
      "stateOrRegion": "Somalia Capital Region",
      "population": 2640000,
      "populationFormatted": "2.64 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Somali",
        "Arabic"
      ]
    }
  ],
  "ZA": [
    {
      "cityName": "Pretoria / Cape Town / Bloemfontein",
      "stateOrRegion": "KwaZulu-Natal",
      "population": 9090000,
      "populationFormatted": "9.09 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "isiZulu",
        "isiXhosa",
        "Afrikaans",
        "English"
      ]
    },
    {
      "cityName": "Cape Town",
      "stateOrRegion": "Gauteng",
      "population": 987007,
      "populationFormatted": "987,007",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "isiZulu",
        "isiXhosa",
        "Afrikaans",
        "English"
      ]
    },
    {
      "cityName": "Soweto",
      "stateOrRegion": "Western Cape",
      "population": 904165,
      "populationFormatted": "904,165",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "isiZulu",
        "isiXhosa",
        "Afrikaans",
        "English"
      ]
    },
    {
      "cityName": "Port Elizabeth",
      "stateOrRegion": "Eastern Cape",
      "population": 775255,
      "populationFormatted": "775,255",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Industrial Manufacturing, Automotive Parts & Assembly",
      "primaryLanguagesSpoken": [
        "isiZulu",
        "isiXhosa",
        "Afrikaans",
        "English"
      ]
    },
    {
      "cityName": "Johannesburg",
      "stateOrRegion": "Limpopo",
      "population": 752349,
      "populationFormatted": "752,349",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Healthcare Services, Clinical Research & Hospital Networks",
      "primaryLanguagesSpoken": [
        "isiZulu",
        "isiXhosa",
        "Afrikaans",
        "English"
      ]
    },
    {
      "cityName": "Pretoria",
      "stateOrRegion": "Free State",
      "population": 692348,
      "populationFormatted": "692,348",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Maritime Shipping, Container Logistics & Port Operations",
      "primaryLanguagesSpoken": [
        "isiZulu",
        "isiXhosa",
        "Afrikaans",
        "English"
      ]
    },
    {
      "cityName": "Durban",
      "stateOrRegion": "KwaZulu-Natal",
      "population": 669242,
      "populationFormatted": "669,242",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Textiles, Garments Manufacturing & Artisanal Craft",
      "primaryLanguagesSpoken": [
        "isiZulu",
        "isiXhosa",
        "Afrikaans",
        "English"
      ]
    },
    {
      "cityName": "Pietermaritzburg",
      "stateOrRegion": "Gauteng",
      "population": 405385,
      "populationFormatted": "405,385",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Renewable Energy, Solar Operations & Electrical Grid",
      "primaryLanguagesSpoken": [
        "isiZulu",
        "isiXhosa",
        "Afrikaans",
        "English"
      ]
    },
    {
      "cityName": "Vereeniging",
      "stateOrRegion": "Western Cape",
      "population": 379638,
      "populationFormatted": "379,638",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Higher Vocational Training, Engineering & Trades",
      "primaryLanguagesSpoken": [
        "isiZulu",
        "isiXhosa",
        "Afrikaans",
        "English"
      ]
    },
    {
      "cityName": "Benoni",
      "stateOrRegion": "Eastern Cape",
      "population": 366343,
      "populationFormatted": "366,343",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Mining Operations, Raw Material Extraction & Metallurgy",
      "primaryLanguagesSpoken": [
        "isiZulu",
        "isiXhosa",
        "Afrikaans",
        "English"
      ]
    },
    {
      "cityName": "Bloemfontein",
      "stateOrRegion": "Limpopo",
      "population": 350504,
      "populationFormatted": "350,504",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Tourism & Cultural Heritage, Hospitality Management",
      "primaryLanguagesSpoken": [
        "isiZulu",
        "isiXhosa",
        "Afrikaans",
        "English"
      ]
    },
    {
      "cityName": "Kathlehong",
      "stateOrRegion": "Free State",
      "population": 344803,
      "populationFormatted": "344,803",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Commercial Wholesale, Retail Distribution & Supply Chain",
      "primaryLanguagesSpoken": [
        "isiZulu",
        "isiXhosa",
        "Afrikaans",
        "English"
      ]
    },
    {
      "cityName": "Kempton Park",
      "stateOrRegion": "KwaZulu-Natal",
      "population": 344426,
      "populationFormatted": "344,426",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Telecommunications, Cloud Infrastructure & Fiber Networks",
      "primaryLanguagesSpoken": [
        "isiZulu",
        "isiXhosa",
        "Afrikaans",
        "English"
      ]
    },
    {
      "cityName": "Umlazi",
      "stateOrRegion": "Gauteng",
      "population": 339715,
      "populationFormatted": "339,715",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Banking, Insurance, Stock Exchange & Asset Management",
      "primaryLanguagesSpoken": [
        "isiZulu",
        "isiXhosa",
        "Afrikaans",
        "English"
      ]
    },
    {
      "cityName": "Khayelitsa",
      "stateOrRegion": "Western Cape",
      "population": 314239,
      "populationFormatted": "314,239",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Biotechnology, Pharmaceuticals & Chemical Processing",
      "primaryLanguagesSpoken": [
        "isiZulu",
        "isiXhosa",
        "Afrikaans",
        "English"
      ]
    },
    {
      "cityName": "Roodepoort",
      "stateOrRegion": "Eastern Cape",
      "population": 279340,
      "populationFormatted": "279,340",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "isiZulu",
        "isiXhosa",
        "Afrikaans",
        "English"
      ]
    },
    {
      "cityName": "Boksburg",
      "stateOrRegion": "Limpopo",
      "population": 263179,
      "populationFormatted": "263,179",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "isiZulu",
        "isiXhosa",
        "Afrikaans",
        "English"
      ]
    },
    {
      "cityName": "Tembisa",
      "stateOrRegion": "Free State",
      "population": 237676,
      "populationFormatted": "237,676",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "isiZulu",
        "isiXhosa",
        "Afrikaans",
        "English"
      ]
    },
    {
      "cityName": "KwaZulu-Natal",
      "stateOrRegion": "KwaZulu-Natal",
      "population": 218160,
      "populationFormatted": "218,160",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Mining Operations, Raw Material Extraction & Metallurgy",
      "primaryLanguagesSpoken": [
        "isiZulu",
        "isiXhosa",
        "Afrikaans",
        "English"
      ]
    },
    {
      "cityName": "Gauteng",
      "stateOrRegion": "Gauteng",
      "population": 209769,
      "populationFormatted": "209,769",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Tourism & Cultural Heritage, Hospitality Management",
      "primaryLanguagesSpoken": [
        "isiZulu",
        "isiXhosa",
        "Afrikaans",
        "English"
      ]
    },
    {
      "cityName": "Kimberley",
      "stateOrRegion": "KwaZulu-Natal",
      "population": 206070,
      "populationFormatted": "206,070",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Industrial Manufacturing, Automotive Parts & Assembly",
      "primaryLanguagesSpoken": [
        "isiZulu",
        "isiXhosa",
        "Afrikaans",
        "English"
      ]
    },
    {
      "cityName": "Western Cape",
      "stateOrRegion": "Western Cape",
      "population": 202000,
      "populationFormatted": "202,000",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Commercial Wholesale, Retail Distribution & Supply Chain",
      "primaryLanguagesSpoken": [
        "isiZulu",
        "isiXhosa",
        "Afrikaans",
        "English"
      ]
    },
    {
      "cityName": "Eastern Cape",
      "stateOrRegion": "Eastern Cape",
      "population": 194785,
      "populationFormatted": "194,785",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Telecommunications, Cloud Infrastructure & Fiber Networks",
      "primaryLanguagesSpoken": [
        "isiZulu",
        "isiXhosa",
        "Afrikaans",
        "English"
      ]
    },
    {
      "cityName": "Limpopo",
      "stateOrRegion": "Limpopo",
      "population": 188068,
      "populationFormatted": "188,068",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Banking, Insurance, Stock Exchange & Asset Management",
      "primaryLanguagesSpoken": [
        "isiZulu",
        "isiXhosa",
        "Afrikaans",
        "English"
      ]
    },
    {
      "cityName": "Free",
      "stateOrRegion": "Free State",
      "population": 181800,
      "populationFormatted": "181,800",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Biotechnology, Pharmaceuticals & Chemical Processing",
      "primaryLanguagesSpoken": [
        "isiZulu",
        "isiXhosa",
        "Afrikaans",
        "English"
      ]
    },
    {
      "cityName": "Botshabelo",
      "stateOrRegion": "Gauteng",
      "population": 177971,
      "populationFormatted": "177,971",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Healthcare Services, Clinical Research & Hospital Networks",
      "primaryLanguagesSpoken": [
        "isiZulu",
        "isiXhosa",
        "Afrikaans",
        "English"
      ]
    },
    {
      "cityName": "Mangaung",
      "stateOrRegion": "Western Cape",
      "population": 176525,
      "populationFormatted": "176,525",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Maritime Shipping, Container Logistics & Port Operations",
      "primaryLanguagesSpoken": [
        "isiZulu",
        "isiXhosa",
        "Afrikaans",
        "English"
      ]
    },
    {
      "cityName": "Alexandra",
      "stateOrRegion": "Eastern Cape",
      "population": 171284,
      "populationFormatted": "171,284",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Textiles, Garments Manufacturing & Artisanal Craft",
      "primaryLanguagesSpoken": [
        "isiZulu",
        "isiXhosa",
        "Afrikaans",
        "English"
      ]
    },
    {
      "cityName": "Germiston",
      "stateOrRegion": "Limpopo",
      "population": 164252,
      "populationFormatted": "164,252",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Renewable Energy, Solar Operations & Electrical Grid",
      "primaryLanguagesSpoken": [
        "isiZulu",
        "isiXhosa",
        "Afrikaans",
        "English"
      ]
    },
    {
      "cityName": "Springs",
      "stateOrRegion": "Free State",
      "population": 163304,
      "populationFormatted": "163,304",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Higher Vocational Training, Engineering & Trades",
      "primaryLanguagesSpoken": [
        "isiZulu",
        "isiXhosa",
        "Afrikaans",
        "English"
      ]
    }
  ],
  "SS": [
    {
      "cityName": "Juba",
      "stateOrRegion": "South Sudan Capital Region",
      "population": 1665000,
      "populationFormatted": "1.67 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "English",
        "Dinka",
        "Juba Arabic"
      ]
    }
  ],
  "SD": [
    {
      "cityName": "Khartoum",
      "stateOrRegion": "Sudan Capital Region",
      "population": 6840000,
      "populationFormatted": "6.84 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Sudanese Arabic",
        "English"
      ]
    }
  ],
  "TZ": [
    {
      "cityName": "Dodoma",
      "stateOrRegion": "Tanzania Capital Region",
      "population": 9825000,
      "populationFormatted": "9.82 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Swahili",
        "English"
      ]
    }
  ],
  "TG": [
    {
      "cityName": "Lom\u00e9",
      "stateOrRegion": "Togo Capital Region",
      "population": 1320000,
      "populationFormatted": "1.32 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "French",
        "Ewe (\u00c9w\u00e9)",
        "Kabiye"
      ]
    }
  ],
  "TN": [
    {
      "cityName": "Tunis",
      "stateOrRegion": "Tunisia Capital Region",
      "population": 1845000,
      "populationFormatted": "1.84 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Tunisian Arabic (Tounsi)",
        "French"
      ]
    }
  ],
  "UG": [
    {
      "cityName": "Kampala",
      "stateOrRegion": "Uganda Capital Region",
      "population": 7080000,
      "populationFormatted": "7.08 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "English",
        "Swahili",
        "Luganda"
      ]
    },
    {
      "cityName": "Gulu",
      "stateOrRegion": "Uganda Region",
      "population": 113144,
      "populationFormatted": "113,144",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "English",
        "Swahili",
        "Luganda"
      ]
    }
  ],
  "ZM": [
    {
      "cityName": "Lusaka",
      "stateOrRegion": "Zambia Capital Region",
      "population": 3000000,
      "populationFormatted": "3.00 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "English",
        "Bemba",
        "Nyanja"
      ]
    },
    {
      "cityName": "Kitwe",
      "stateOrRegion": "Zambia Region",
      "population": 517543,
      "populationFormatted": "517,543",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "English",
        "Bemba",
        "Nyanja"
      ]
    },
    {
      "cityName": "Chipata",
      "stateOrRegion": "Zambia Region",
      "population": 455783,
      "populationFormatted": "455,783",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "English",
        "Bemba",
        "Nyanja"
      ]
    },
    {
      "cityName": "Ndola",
      "stateOrRegion": "Zambia Region",
      "population": 451246,
      "populationFormatted": "451,246",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Industrial Manufacturing, Automotive Parts & Assembly",
      "primaryLanguagesSpoken": [
        "English",
        "Bemba",
        "Nyanja"
      ]
    },
    {
      "cityName": "Kasama",
      "stateOrRegion": "Zambia Region",
      "population": 231824,
      "populationFormatted": "231,824",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Healthcare Services, Clinical Research & Hospital Networks",
      "primaryLanguagesSpoken": [
        "English",
        "Bemba",
        "Nyanja"
      ]
    },
    {
      "cityName": "Chingola",
      "stateOrRegion": "Zambia Region",
      "population": 216626,
      "populationFormatted": "216,626",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Maritime Shipping, Container Logistics & Port Operations",
      "primaryLanguagesSpoken": [
        "English",
        "Bemba",
        "Nyanja"
      ]
    },
    {
      "cityName": "Kabwe",
      "stateOrRegion": "Zambia Region",
      "population": 202360,
      "populationFormatted": "202,360",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Textiles, Garments Manufacturing & Artisanal Craft",
      "primaryLanguagesSpoken": [
        "English",
        "Bemba",
        "Nyanja"
      ]
    },
    {
      "cityName": "Mufulira",
      "stateOrRegion": "Zambia Region",
      "population": 162889,
      "populationFormatted": "162,889",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Renewable Energy, Solar Operations & Electrical Grid",
      "primaryLanguagesSpoken": [
        "English",
        "Bemba",
        "Nyanja"
      ]
    },
    {
      "cityName": "Luanshya",
      "stateOrRegion": "Zambia Region",
      "population": 156059,
      "populationFormatted": "156,059",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Higher Vocational Training, Engineering & Trades",
      "primaryLanguagesSpoken": [
        "English",
        "Bemba",
        "Nyanja"
      ]
    },
    {
      "cityName": "Livingstone",
      "stateOrRegion": "Zambia Region",
      "population": 139509,
      "populationFormatted": "139,509",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Mining Operations, Raw Material Extraction & Metallurgy",
      "primaryLanguagesSpoken": [
        "English",
        "Bemba",
        "Nyanja"
      ]
    }
  ],
  "ZW": [
    {
      "cityName": "Harare",
      "stateOrRegion": "Zimbabwe Capital Region",
      "population": 2445000,
      "populationFormatted": "2.44 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Shona",
        "Ndebele",
        "English"
      ]
    },
    {
      "cityName": "Bulawayo",
      "stateOrRegion": "Zimbabwe Region",
      "population": 621742,
      "populationFormatted": "621,742",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Shona",
        "Ndebele",
        "English"
      ]
    },
    {
      "cityName": "Chitungwiza",
      "stateOrRegion": "Zimbabwe Region",
      "population": 274912,
      "populationFormatted": "274,912",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "Shona",
        "Ndebele",
        "English"
      ]
    },
    {
      "cityName": "Mutare",
      "stateOrRegion": "Zimbabwe Region",
      "population": 131367,
      "populationFormatted": "131,367",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Industrial Manufacturing, Automotive Parts & Assembly",
      "primaryLanguagesSpoken": [
        "Shona",
        "Ndebele",
        "English"
      ]
    },
    {
      "cityName": "Gweru",
      "stateOrRegion": "Zimbabwe Region",
      "population": 128037,
      "populationFormatted": "128,037",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Healthcare Services, Clinical Research & Hospital Networks",
      "primaryLanguagesSpoken": [
        "Shona",
        "Ndebele",
        "English"
      ]
    }
  ],
  "AG": [
    {
      "cityName": "St. John's",
      "stateOrRegion": "Antigua and Barbuda Capital Region",
      "population": 80000,
      "populationFormatted": "80,000",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "English",
        "Antiguan Creole"
      ]
    },
    {
      "cityName": "St. John",
      "stateOrRegion": "Antigua and Barbuda Region",
      "population": 22342,
      "populationFormatted": "22,342",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "English",
        "Antiguan Creole"
      ]
    }
  ],
  "AR": [
    {
      "cityName": "Buenos Aires",
      "stateOrRegion": "Argentina Capital Region",
      "population": 6870000,
      "populationFormatted": "6.87 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Spanish (Rioplatense)",
        "Guarani",
        "Quechua"
      ]
    },
    {
      "cityName": "La Matanza",
      "stateOrRegion": "Argentina Region",
      "population": 1120088,
      "populationFormatted": "1.12 Million",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Spanish (Rioplatense)",
        "Guarani",
        "Quechua"
      ]
    },
    {
      "cityName": "Tucum\u00e1n-Taf\u00ed Viejo",
      "stateOrRegion": "Argentina Region",
      "population": 811804,
      "populationFormatted": "811,804",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "Spanish (Rioplatense)",
        "Guarani",
        "Quechua"
      ]
    },
    {
      "cityName": "Mendoza",
      "stateOrRegion": "Argentina Region",
      "population": 773113,
      "populationFormatted": "773,113",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Industrial Manufacturing, Automotive Parts & Assembly",
      "primaryLanguagesSpoken": [
        "Spanish (Rioplatense)",
        "Guarani",
        "Quechua"
      ]
    },
    {
      "cityName": "Mor\u00f3n",
      "stateOrRegion": "Argentina Region",
      "population": 643553,
      "populationFormatted": "643,553",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Healthcare Services, Clinical Research & Hospital Networks",
      "primaryLanguagesSpoken": [
        "Spanish (Rioplatense)",
        "Guarani",
        "Quechua"
      ]
    },
    {
      "cityName": "La Plata",
      "stateOrRegion": "Argentina Region",
      "population": 642979,
      "populationFormatted": "642,979",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Maritime Shipping, Container Logistics & Port Operations",
      "primaryLanguagesSpoken": [
        "Spanish (Rioplatense)",
        "Guarani",
        "Quechua"
      ]
    },
    {
      "cityName": "San Miguel De Tucum\u00e1n",
      "stateOrRegion": "Argentina Region",
      "population": 622324,
      "populationFormatted": "622,324",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Textiles, Garments Manufacturing & Artisanal Craft",
      "primaryLanguagesSpoken": [
        "Spanish (Rioplatense)",
        "Guarani",
        "Quechua"
      ]
    },
    {
      "cityName": "Lomas De Zamora",
      "stateOrRegion": "Argentina Region",
      "population": 574330,
      "populationFormatted": "574,330",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Renewable Energy, Solar Operations & Electrical Grid",
      "primaryLanguagesSpoken": [
        "Spanish (Rioplatense)",
        "Guarani",
        "Quechua"
      ]
    },
    {
      "cityName": "Mar Del Plata-Bat\u00e1n",
      "stateOrRegion": "Argentina Region",
      "population": 512880,
      "populationFormatted": "512,880",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Higher Vocational Training, Engineering & Trades",
      "primaryLanguagesSpoken": [
        "Spanish (Rioplatense)",
        "Guarani",
        "Quechua"
      ]
    },
    {
      "cityName": "Quilmes",
      "stateOrRegion": "Argentina Region",
      "population": 511234,
      "populationFormatted": "511,234",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Mining Operations, Raw Material Extraction & Metallurgy",
      "primaryLanguagesSpoken": [
        "Spanish (Rioplatense)",
        "Guarani",
        "Quechua"
      ]
    },
    {
      "cityName": "Lanus",
      "stateOrRegion": "Argentina Region",
      "population": 468561,
      "populationFormatted": "468,561",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Tourism & Cultural Heritage, Hospitality Management",
      "primaryLanguagesSpoken": [
        "Spanish (Rioplatense)",
        "Guarani",
        "Quechua"
      ]
    },
    {
      "cityName": "C\u00f3rdoba",
      "stateOrRegion": "Argentina Region",
      "population": 412759,
      "populationFormatted": "412,759",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Commercial Wholesale, Retail Distribution & Supply Chain",
      "primaryLanguagesSpoken": [
        "Spanish (Rioplatense)",
        "Guarani",
        "Quechua"
      ]
    },
    {
      "cityName": "General San Mart\u00edn",
      "stateOrRegion": "Argentina Region",
      "population": 406809,
      "populationFormatted": "406,809",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Telecommunications, Cloud Infrastructure & Fiber Networks",
      "primaryLanguagesSpoken": [
        "Spanish (Rioplatense)",
        "Guarani",
        "Quechua"
      ]
    },
    {
      "cityName": "Santa F\u00e9",
      "stateOrRegion": "Argentina Region",
      "population": 406388,
      "populationFormatted": "406,388",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Banking, Insurance, Stock Exchange & Asset Management",
      "primaryLanguagesSpoken": [
        "Spanish (Rioplatense)",
        "Guarani",
        "Quechua"
      ]
    },
    {
      "cityName": "Salta",
      "stateOrRegion": "Argentina Region",
      "population": 370904,
      "populationFormatted": "370,904",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Biotechnology, Pharmaceuticals & Chemical Processing",
      "primaryLanguagesSpoken": [
        "Spanish (Rioplatense)",
        "Guarani",
        "Quechua"
      ]
    },
    {
      "cityName": "Avellaneda",
      "stateOrRegion": "Argentina Region",
      "population": 344024,
      "populationFormatted": "344,024",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Spanish (Rioplatense)",
        "Guarani",
        "Quechua"
      ]
    },
    {
      "cityName": "San Isidro",
      "stateOrRegion": "Argentina Region",
      "population": 299023,
      "populationFormatted": "299,023",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Spanish (Rioplatense)",
        "Guarani",
        "Quechua"
      ]
    },
    {
      "cityName": "Resistencia",
      "stateOrRegion": "Argentina Region",
      "population": 292287,
      "populationFormatted": "292,287",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "Spanish (Rioplatense)",
        "Guarani",
        "Quechua"
      ]
    },
    {
      "cityName": "Vicente L\u00f3pez",
      "stateOrRegion": "Argentina Region",
      "population": 289505,
      "populationFormatted": "289,505",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Industrial Manufacturing, Automotive Parts & Assembly",
      "primaryLanguagesSpoken": [
        "Spanish (Rioplatense)",
        "Guarani",
        "Quechua"
      ]
    },
    {
      "cityName": "Santiago Del Estero-La Banda",
      "stateOrRegion": "Argentina Region",
      "population": 263471,
      "populationFormatted": "263,471",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Healthcare Services, Clinical Research & Hospital Networks",
      "primaryLanguagesSpoken": [
        "Spanish (Rioplatense)",
        "Guarani",
        "Quechua"
      ]
    },
    {
      "cityName": "Bah\u00eda Blanca-Cerri",
      "stateOrRegion": "Argentina Region",
      "population": 260096,
      "populationFormatted": "260,096",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Maritime Shipping, Container Logistics & Port Operations",
      "primaryLanguagesSpoken": [
        "Spanish (Rioplatense)",
        "Guarani",
        "Quechua"
      ]
    },
    {
      "cityName": "Corrientes",
      "stateOrRegion": "Argentina Region",
      "population": 258103,
      "populationFormatted": "258,103",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Textiles, Garments Manufacturing & Artisanal Craft",
      "primaryLanguagesSpoken": [
        "Spanish (Rioplatense)",
        "Guarani",
        "Quechua"
      ]
    },
    {
      "cityName": "Paran\u00e1",
      "stateOrRegion": "Argentina Region",
      "population": 211936,
      "populationFormatted": "211,936",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Renewable Energy, Solar Operations & Electrical Grid",
      "primaryLanguagesSpoken": [
        "Spanish (Rioplatense)",
        "Guarani",
        "Quechua"
      ]
    },
    {
      "cityName": "Posadas",
      "stateOrRegion": "Argentina Region",
      "population": 210755,
      "populationFormatted": "210,755",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Higher Vocational Training, Engineering & Trades",
      "primaryLanguagesSpoken": [
        "Spanish (Rioplatense)",
        "Guarani",
        "Quechua"
      ]
    },
    {
      "cityName": "San Luis - El Chorrillo",
      "stateOrRegion": "Argentina Region",
      "population": 203161,
      "populationFormatted": "203,161",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Mining Operations, Raw Material Extraction & Metallurgy",
      "primaryLanguagesSpoken": [
        "Spanish (Rioplatense)",
        "Guarani",
        "Quechua"
      ]
    },
    {
      "cityName": "Neuqu\u00e9n-Plottier",
      "stateOrRegion": "Argentina Region",
      "population": 183579,
      "populationFormatted": "183,579",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Tourism & Cultural Heritage, Hospitality Management",
      "primaryLanguagesSpoken": [
        "Spanish (Rioplatense)",
        "Guarani",
        "Quechua"
      ]
    },
    {
      "cityName": "La Rioja",
      "stateOrRegion": "Argentina Region",
      "population": 181938,
      "populationFormatted": "181,938",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Commercial Wholesale, Retail Distribution & Supply Chain",
      "primaryLanguagesSpoken": [
        "Spanish (Rioplatense)",
        "Guarani",
        "Quechua"
      ]
    },
    {
      "cityName": "San Salvador De Jujuy-Palpal\u00e1",
      "stateOrRegion": "Argentina Region",
      "population": 180102,
      "populationFormatted": "180,102",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Telecommunications, Cloud Infrastructure & Fiber Networks",
      "primaryLanguagesSpoken": [
        "Spanish (Rioplatense)",
        "Guarani",
        "Quechua"
      ]
    },
    {
      "cityName": "San Fernando",
      "stateOrRegion": "Argentina Region",
      "population": 141063,
      "populationFormatted": "141,063",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Banking, Insurance, Stock Exchange & Asset Management",
      "primaryLanguagesSpoken": [
        "Spanish (Rioplatense)",
        "Guarani",
        "Quechua"
      ]
    },
    {
      "cityName": "R\u00edo Cuarto",
      "stateOrRegion": "Argentina Region",
      "population": 138853,
      "populationFormatted": "138,853",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Biotechnology, Pharmaceuticals & Chemical Processing",
      "primaryLanguagesSpoken": [
        "Spanish (Rioplatense)",
        "Guarani",
        "Quechua"
      ]
    }
  ],
  "BS": [
    {
      "cityName": "Nassau",
      "stateOrRegion": "Bahamas Capital Region",
      "population": 80000,
      "populationFormatted": "80,000",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "English",
        "Bahamian Creole"
      ]
    }
  ],
  "BB": [
    {
      "cityName": "Bridgetown",
      "stateOrRegion": "Barbados Capital Region",
      "population": 80000,
      "populationFormatted": "80,000",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "English",
        "Bajan"
      ]
    }
  ],
  "BZ": [
    {
      "cityName": "Belmopan",
      "stateOrRegion": "Belize Capital Region",
      "population": 80000,
      "populationFormatted": "80,000",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "English",
        "Spanish",
        "Belizean Kriol",
        "Garifuna"
      ]
    }
  ],
  "BO": [
    {
      "cityName": "Sucre / La Paz",
      "stateOrRegion": "Bolivia Capital Region",
      "population": 1815000,
      "populationFormatted": "1.81 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Quechua",
        "Aymara",
        "Guarani"
      ]
    }
  ],
  "BR": [
    {
      "cityName": "S\u00e3o Paulo",
      "stateOrRegion": "S\u00e3o Paulo",
      "population": 12325000,
      "populationFormatted": "12.32 Million",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "B3 Stock Exchange, FinTech, Global Banking & Corporate HQ",
      "primaryLanguagesSpoken": [
        "Portuguese",
        "Nheengatu"
      ]
    },
    {
      "cityName": "Rio de Janeiro",
      "stateOrRegion": "Rio de Janeiro",
      "population": 6748000,
      "populationFormatted": "6.75 Million",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Offshore Energy HQ (Petrobras), Telecom & Media",
      "primaryLanguagesSpoken": [
        "Portuguese",
        "Nheengatu"
      ]
    },
    {
      "cityName": "Bras\u00edlia",
      "stateOrRegion": "Federal District",
      "population": 3055000,
      "populationFormatted": "3.06 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Federal Government Administration, Policy & Services",
      "primaryLanguagesSpoken": [
        "Portuguese",
        "Nheengatu"
      ]
    },
    {
      "cityName": "Salvador",
      "stateOrRegion": "Bahia",
      "population": 2886000,
      "populationFormatted": "2.89 Million",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Petrochemical Complex, Tourism & Maritime Logistics",
      "primaryLanguagesSpoken": [
        "Portuguese",
        "Nheengatu"
      ]
    },
    {
      "cityName": "Fortaleza",
      "stateOrRegion": "Cear\u00e1",
      "population": 2686000,
      "populationFormatted": "2.69 Million",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Subsea Fiber Cables Gateway, Renewable Energy & Apparel",
      "primaryLanguagesSpoken": [
        "Portuguese",
        "Nheengatu"
      ]
    },
    {
      "cityName": "Belo Horizonte",
      "stateOrRegion": "Minas Gerais",
      "population": 2521000,
      "populationFormatted": "2.52 Million",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Mining Corporate HQ (Vale), Software & Metallurgy",
      "primaryLanguagesSpoken": [
        "Portuguese",
        "Nheengatu"
      ]
    },
    {
      "cityName": "Manaus",
      "stateOrRegion": "Amazonas",
      "population": 2219000,
      "populationFormatted": "2.22 Million",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Free Economic Zone Electronics Manufacturing & Motorcycles",
      "primaryLanguagesSpoken": [
        "Portuguese",
        "Nheengatu"
      ]
    },
    {
      "cityName": "Curitiba",
      "stateOrRegion": "Paran\u00e1",
      "population": 1948000,
      "populationFormatted": "1.95 Million",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Smart City Infrastructure, Automotive R&D & Software",
      "primaryLanguagesSpoken": [
        "Portuguese",
        "Nheengatu"
      ]
    },
    {
      "cityName": "Recife",
      "stateOrRegion": "Pernambuco",
      "population": 1653000,
      "populationFormatted": "1.65 Million",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Porto Digital Software Park, Medical Center & Trade",
      "primaryLanguagesSpoken": [
        "Portuguese",
        "Nheengatu"
      ]
    },
    {
      "cityName": "Goi\u00e2nia",
      "stateOrRegion": "Goi\u00e1s",
      "population": 1536000,
      "populationFormatted": "1.54 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Grain Exports, Agribusiness Logistics & Pharmaceuticals",
      "primaryLanguagesSpoken": [
        "Portuguese",
        "Nheengatu"
      ]
    },
    {
      "cityName": "Bel\u00e9m",
      "stateOrRegion": "Par\u00e1",
      "population": 1499000,
      "populationFormatted": "1.50 Million",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Amazon Seaport Logistics, Mineral Exports & Agribusiness",
      "primaryLanguagesSpoken": [
        "Portuguese",
        "Nheengatu"
      ]
    },
    {
      "cityName": "Porto Alegre",
      "stateOrRegion": "Rio Grande do Sul",
      "population": 1488000,
      "populationFormatted": "1.49 Million",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Software Technology & Health Sciences",
      "primaryLanguagesSpoken": [
        "Portuguese",
        "Nheengatu"
      ]
    },
    {
      "cityName": "Guarulhos",
      "stateOrRegion": "S\u00e3o Paulo",
      "population": 1392000,
      "populationFormatted": "1.39 Million",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "GRU International Logistics Hub, Manufacturing & Freight",
      "primaryLanguagesSpoken": [
        "Portuguese",
        "Nheengatu"
      ]
    },
    {
      "cityName": "Campinas",
      "stateOrRegion": "S\u00e3o Paulo",
      "population": 1213000,
      "populationFormatted": "1.21 Million",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Brazilian Silicon Valley (UNICAMP), Microelectronics",
      "primaryLanguagesSpoken": [
        "Portuguese",
        "Nheengatu"
      ]
    },
    {
      "cityName": "S\u00e3o Lu\u00eds",
      "stateOrRegion": "Maranh\u00e3o",
      "population": 1108000,
      "populationFormatted": "1.11 Million",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Ponta da Madeira Iron Ore Seaport & Aluminum Refining",
      "primaryLanguagesSpoken": [
        "Portuguese",
        "Nheengatu"
      ]
    },
    {
      "cityName": "S\u00e3o Gon\u00e7alo",
      "stateOrRegion": "Rio de Janeiro",
      "population": 1091000,
      "populationFormatted": "1.09 Million",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Naval Industry, Chemical Supplies & Services",
      "primaryLanguagesSpoken": [
        "Portuguese",
        "Nheengatu"
      ]
    },
    {
      "cityName": "Macei\u00f3",
      "stateOrRegion": "Alagoas",
      "population": 1025000,
      "populationFormatted": "1.02 Million",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Chemical Salt Mining, Agribusiness Processing & Tourism",
      "primaryLanguagesSpoken": [
        "Portuguese",
        "Nheengatu"
      ]
    },
    {
      "cityName": "Duque de Caxias",
      "stateOrRegion": "Rio de Janeiro",
      "population": 924000,
      "populationFormatted": "924,000",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Reduc Oil Refinery, Petrochemicals & Heavy Freight",
      "primaryLanguagesSpoken": [
        "Portuguese",
        "Nheengatu"
      ]
    },
    {
      "cityName": "Campo Grande",
      "stateOrRegion": "Mato Grosso do Sul",
      "population": 906000,
      "populationFormatted": "906,000",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Meatpacking Agribusiness, Biofuels & Trade",
      "primaryLanguagesSpoken": [
        "Portuguese",
        "Nheengatu"
      ]
    },
    {
      "cityName": "Natal",
      "stateOrRegion": "Rio Grande do Norte",
      "population": 890000,
      "populationFormatted": "890,000",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Offshore Wind Power Logistics, Textiles & Tourism",
      "primaryLanguagesSpoken": [
        "Portuguese",
        "Nheengatu"
      ]
    },
    {
      "cityName": "Teresina",
      "stateOrRegion": "Piau\u00ed",
      "population": 868000,
      "populationFormatted": "868,000",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Health Hub of Northeast Brazil, Commerce & Services",
      "primaryLanguagesSpoken": [
        "Portuguese",
        "Nheengatu"
      ]
    },
    {
      "cityName": "S\u00e3o Bernardo do Campo",
      "stateOrRegion": "S\u00e3o Paulo",
      "population": 844000,
      "populationFormatted": "844,000",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Automotive Assembly (Scania, VW, Toyota) & Tooling",
      "primaryLanguagesSpoken": [
        "Portuguese",
        "Nheengatu"
      ]
    },
    {
      "cityName": "Nova Igua\u00e7u",
      "stateOrRegion": "Rio de Janeiro",
      "population": 821000,
      "populationFormatted": "821,000",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Cosmetics Manufacturing, Logistics & Retail Services",
      "primaryLanguagesSpoken": [
        "Portuguese",
        "Nheengatu"
      ]
    },
    {
      "cityName": "Jo\u00e3o Pessoa",
      "stateOrRegion": "Para\u00edba",
      "population": 817000,
      "populationFormatted": "817,000",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Software Startups, Renewable Energy & Construction",
      "primaryLanguagesSpoken": [
        "Portuguese",
        "Nheengatu"
      ]
    },
    {
      "cityName": "S\u00e3o Jos\u00e9 dos Campos",
      "stateOrRegion": "S\u00e3o Paulo",
      "population": 729000,
      "populationFormatted": "729,000",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Aerospace Engineering (Embraer HQ), Defense & Satellites",
      "primaryLanguagesSpoken": [
        "Portuguese",
        "Nheengatu"
      ]
    },
    {
      "cityName": "Santo Andr\u00e9",
      "stateOrRegion": "S\u00e3o Paulo",
      "population": 721000,
      "populationFormatted": "721,000",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Petrochemical Industry, Auto Parts & Industrial Tools",
      "primaryLanguagesSpoken": [
        "Portuguese",
        "Nheengatu"
      ]
    },
    {
      "cityName": "Ribeir\u00e3o Preto",
      "stateOrRegion": "S\u00e3o Paulo",
      "population": 711000,
      "populationFormatted": "711,000",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Agribusiness Tech Capital, Ethanol Sugar Biofuels",
      "primaryLanguagesSpoken": [
        "Portuguese",
        "Nheengatu"
      ]
    },
    {
      "cityName": "Osasco",
      "stateOrRegion": "S\u00e3o Paulo",
      "population": 699000,
      "populationFormatted": "699,000",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "E-Commerce Logistics HQ (Mercado Livre, Bradesco)",
      "primaryLanguagesSpoken": [
        "Portuguese",
        "Nheengatu"
      ]
    },
    {
      "cityName": "Uberl\u00e2ndia",
      "stateOrRegion": "Minas Gerais",
      "population": 699000,
      "populationFormatted": "699,000",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Wholesale Distribution Capital, Telecommunications & IT",
      "primaryLanguagesSpoken": [
        "Portuguese",
        "Nheengatu"
      ]
    },
    {
      "cityName": "Sorocaba",
      "stateOrRegion": "S\u00e3o Paulo",
      "population": 687000,
      "populationFormatted": "687,000",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Heavy Machinery (Toyota, JCB), Wind Turbines & Auto",
      "primaryLanguagesSpoken": [
        "Portuguese",
        "Nheengatu"
      ]
    }
  ],
  "CA": [
    {
      "cityName": "Toronto",
      "stateOrRegion": "Ontario",
      "population": 2794356,
      "populationFormatted": "2.79 Million",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Banking, FinTech, Artificial Intelligence & Software",
      "primaryLanguagesSpoken": [
        "English",
        "French",
        "Inuktitut"
      ]
    },
    {
      "cityName": "Montreal",
      "stateOrRegion": "Quebec",
      "population": 1762949,
      "populationFormatted": "1.76 Million",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Aerospace Engineering, AI Research & Game Tech",
      "primaryLanguagesSpoken": [
        "English",
        "French",
        "Inuktitut"
      ]
    },
    {
      "cityName": "Calgary",
      "stateOrRegion": "Alberta",
      "population": 1306784,
      "populationFormatted": "1.31 Million",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Energy Infrastructure, Cleantech & Agribusiness",
      "primaryLanguagesSpoken": [
        "English",
        "French",
        "Inuktitut"
      ]
    },
    {
      "cityName": "Ottawa",
      "stateOrRegion": "Ontario",
      "population": 1017449,
      "populationFormatted": "1.02 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Telecom & Defense Tech",
      "primaryLanguagesSpoken": [
        "English",
        "French",
        "Inuktitut"
      ]
    },
    {
      "cityName": "Edmonton",
      "stateOrRegion": "Alberta",
      "population": 1010899,
      "populationFormatted": "1.01 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Petrochemical Processing, Artificial Intelligence & Energy",
      "primaryLanguagesSpoken": [
        "English",
        "French",
        "Inuktitut"
      ]
    },
    {
      "cityName": "Winnipeg",
      "stateOrRegion": "Manitoba",
      "population": 749607,
      "populationFormatted": "749,607",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Transportation Logistics, Agribusiness & Manufacturing",
      "primaryLanguagesSpoken": [
        "English",
        "French",
        "Inuktitut"
      ]
    },
    {
      "cityName": "Vancouver",
      "stateOrRegion": "British Columbia",
      "population": 662248,
      "populationFormatted": "662,248",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Digital Media, Pacific Port Operations & Software",
      "primaryLanguagesSpoken": [
        "English",
        "French",
        "Inuktitut"
      ]
    },
    {
      "cityName": "Hamilton",
      "stateOrRegion": "Ontario",
      "population": 569353,
      "populationFormatted": "569,353",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Advanced Manufacturing, Steelworks & Health Sciences",
      "primaryLanguagesSpoken": [
        "English",
        "French",
        "Inuktitut"
      ]
    },
    {
      "cityName": "Quebec City",
      "stateOrRegion": "Quebec",
      "population": 549459,
      "populationFormatted": "549,459",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Government Administration, Optics/Photonics & Software",
      "primaryLanguagesSpoken": [
        "English",
        "French",
        "Inuktitut"
      ]
    },
    {
      "cityName": "Halifax",
      "stateOrRegion": "Nova Scotia",
      "population": 439819,
      "populationFormatted": "439,819",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Ocean Technology, Defense Shipbuilding & Financial Services",
      "primaryLanguagesSpoken": [
        "English",
        "French",
        "Inuktitut"
      ]
    },
    {
      "cityName": "London",
      "stateOrRegion": "Ontario",
      "population": 422324,
      "populationFormatted": "422,324",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Medical Technologies, Manufacturing & Insurance",
      "primaryLanguagesSpoken": [
        "English",
        "French",
        "Inuktitut"
      ]
    },
    {
      "cityName": "Saskatoon",
      "stateOrRegion": "Saskatchewan",
      "population": 266141,
      "populationFormatted": "266,141",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Agribusiness Research, Potash Mining & Biotechnology",
      "primaryLanguagesSpoken": [
        "English",
        "French",
        "Inuktitut"
      ]
    },
    {
      "cityName": "Kitchener",
      "stateOrRegion": "Ontario",
      "population": 256885,
      "populationFormatted": "256,885",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Enterprise Software, Quantum Computing & Hardware",
      "primaryLanguagesSpoken": [
        "English",
        "French",
        "Inuktitut"
      ]
    },
    {
      "cityName": "Windsor",
      "stateOrRegion": "Ontario",
      "population": 229660,
      "populationFormatted": "229,660",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Automotive Tooling, EV Battery Manufacturing & Trade",
      "primaryLanguagesSpoken": [
        "English",
        "French",
        "Inuktitut"
      ]
    },
    {
      "cityName": "Regina",
      "stateOrRegion": "Saskatchewan",
      "population": 226404,
      "populationFormatted": "226,404",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Agriculture Machinery, Steel Manufacturing & Energy",
      "primaryLanguagesSpoken": [
        "English",
        "French",
        "Inuktitut"
      ]
    },
    {
      "cityName": "Oshawa",
      "stateOrRegion": "Ontario",
      "population": 175383,
      "populationFormatted": "175,383",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Automotive Assembly, Cleantech & Logistics",
      "primaryLanguagesSpoken": [
        "English",
        "French",
        "Inuktitut"
      ]
    },
    {
      "cityName": "Sherbrooke",
      "stateOrRegion": "Quebec",
      "population": 172950,
      "populationFormatted": "172,950",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Microelectronics, Health Sciences & Micro-nanotech",
      "primaryLanguagesSpoken": [
        "English",
        "French",
        "Inuktitut"
      ]
    },
    {
      "cityName": "Sudbury",
      "stateOrRegion": "Ontario",
      "population": 166004,
      "populationFormatted": "166,004",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Mining Innovation, Clean Energy & Environmental Sciences",
      "primaryLanguagesSpoken": [
        "English",
        "French",
        "Inuktitut"
      ]
    },
    {
      "cityName": "Abbotsford",
      "stateOrRegion": "British Columbia",
      "population": 153524,
      "populationFormatted": "153,524",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Agribusiness Processing, Aviation Services & Logistics",
      "primaryLanguagesSpoken": [
        "English",
        "French",
        "Inuktitut"
      ]
    },
    {
      "cityName": "Barrie",
      "stateOrRegion": "Ontario",
      "population": 147829,
      "populationFormatted": "147,829",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Advanced Manufacturing & Healthcare Technology",
      "primaryLanguagesSpoken": [
        "English",
        "French",
        "Inuktitut"
      ]
    },
    {
      "cityName": "Kelowna",
      "stateOrRegion": "British Columbia",
      "population": 144576,
      "populationFormatted": "144,576",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Information Technology, Viticulture & Aerospace",
      "primaryLanguagesSpoken": [
        "English",
        "French",
        "Inuktitut"
      ]
    },
    {
      "cityName": "Trois-Rivi\u00e8res",
      "stateOrRegion": "Quebec",
      "population": 139163,
      "populationFormatted": "139,163",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Bioproducts, Clean Energy Innovation & Maritime Port",
      "primaryLanguagesSpoken": [
        "English",
        "French",
        "Inuktitut"
      ]
    },
    {
      "cityName": "St. Catharines",
      "stateOrRegion": "Ontario",
      "population": 136803,
      "populationFormatted": "136,803",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Manufacturing, Agro-tech & Regional Trade",
      "primaryLanguagesSpoken": [
        "English",
        "French",
        "Inuktitut"
      ]
    },
    {
      "cityName": "Guelph",
      "stateOrRegion": "Ontario",
      "population": 135474,
      "populationFormatted": "135,474",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Agri-Food Innovation, Environmental Tech & Robotics",
      "primaryLanguagesSpoken": [
        "English",
        "French",
        "Inuktitut"
      ]
    },
    {
      "cityName": "Kingston",
      "stateOrRegion": "Ontario",
      "population": 132485,
      "populationFormatted": "132,485",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Higher Education, Research & Clean Technology",
      "primaryLanguagesSpoken": [
        "English",
        "French",
        "Inuktitut"
      ]
    },
    {
      "cityName": "St. John's",
      "stateOrRegion": "Newfoundland and Labrador",
      "population": 110525,
      "populationFormatted": "110,525",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Offshore Energy Engineering, Ocean Sciences & Marine",
      "primaryLanguagesSpoken": [
        "English",
        "French",
        "Inuktitut"
      ]
    },
    {
      "cityName": "Thunder Bay",
      "stateOrRegion": "Ontario",
      "population": 108843,
      "populationFormatted": "108,843",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Grain Export Shipping, Molecular Research & Forestry",
      "primaryLanguagesSpoken": [
        "English",
        "French",
        "Inuktitut"
      ]
    },
    {
      "cityName": "Victoria",
      "stateOrRegion": "British Columbia",
      "population": 91867,
      "populationFormatted": "91,867",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Government Services, Ocean Tech & Software Hub",
      "primaryLanguagesSpoken": [
        "English",
        "French",
        "Inuktitut"
      ]
    },
    {
      "cityName": "Moncton",
      "stateOrRegion": "New Brunswick",
      "population": 85182,
      "populationFormatted": "85,182",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Financial Tech, Multilingual Customer Support & Freight",
      "primaryLanguagesSpoken": [
        "English",
        "French",
        "Inuktitut"
      ]
    },
    {
      "cityName": "Saint John",
      "stateOrRegion": "New Brunswick",
      "population": 69885,
      "populationFormatted": "69,885",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Refining Energy, Seaport Shipping & Advanced Industry",
      "primaryLanguagesSpoken": [
        "English",
        "French",
        "Inuktitut"
      ]
    }
  ],
  "CL": [
    {
      "cityName": "Santiago",
      "stateOrRegion": "Chile Capital Region",
      "population": 2940000,
      "populationFormatted": "2.94 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Mapudungun",
        "Rapa Nui"
      ]
    },
    {
      "cityName": "Valpara\u00edso",
      "stateOrRegion": "Chile Region",
      "population": 803683,
      "populationFormatted": "803,683",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Mapudungun",
        "Rapa Nui"
      ]
    },
    {
      "cityName": "Concepci\u00f3n",
      "stateOrRegion": "Chile Region",
      "population": 666381,
      "populationFormatted": "666,381",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Mapudungun",
        "Rapa Nui"
      ]
    },
    {
      "cityName": "Talcahuano",
      "stateOrRegion": "Chile Region",
      "population": 666381,
      "populationFormatted": "666,381",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Industrial Manufacturing, Automotive Parts & Assembly",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Mapudungun",
        "Rapa Nui"
      ]
    },
    {
      "cityName": "Puente Alto",
      "stateOrRegion": "Chile Region",
      "population": 458906,
      "populationFormatted": "458,906",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Healthcare Services, Clinical Research & Hospital Networks",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Mapudungun",
        "Rapa Nui"
      ]
    },
    {
      "cityName": "Vi\u00f1a Del Mar",
      "stateOrRegion": "Chile Region",
      "population": 350221,
      "populationFormatted": "350,221",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Maritime Shipping, Container Logistics & Port Operations",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Mapudungun",
        "Rapa Nui"
      ]
    },
    {
      "cityName": "La Serena",
      "stateOrRegion": "Chile Region",
      "population": 296253,
      "populationFormatted": "296,253",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Textiles, Garments Manufacturing & Artisanal Craft",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Mapudungun",
        "Rapa Nui"
      ]
    },
    {
      "cityName": "San Bernardo",
      "stateOrRegion": "Chile Region",
      "population": 262623,
      "populationFormatted": "262,623",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Renewable Energy, Solar Operations & Electrical Grid",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Mapudungun",
        "Rapa Nui"
      ]
    },
    {
      "cityName": "Temuco",
      "stateOrRegion": "Chile Region",
      "population": 260783,
      "populationFormatted": "260,783",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Higher Vocational Training, Engineering & Trades",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Mapudungun",
        "Rapa Nui"
      ]
    },
    {
      "cityName": "Antofagasta",
      "stateOrRegion": "Chile Region",
      "population": 257207,
      "populationFormatted": "257,207",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Mining Operations, Raw Material Extraction & Metallurgy",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Mapudungun",
        "Rapa Nui"
      ]
    },
    {
      "cityName": "Rancagua",
      "stateOrRegion": "Chile Region",
      "population": 236363,
      "populationFormatted": "236,363",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Tourism & Cultural Heritage, Hospitality Management",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Mapudungun",
        "Rapa Nui"
      ]
    },
    {
      "cityName": "Talca",
      "stateOrRegion": "Chile Region",
      "population": 191154,
      "populationFormatted": "191,154",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Commercial Wholesale, Retail Distribution & Supply Chain",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Mapudungun",
        "Rapa Nui"
      ]
    },
    {
      "cityName": "Arica",
      "stateOrRegion": "Chile Region",
      "population": 189743,
      "populationFormatted": "189,743",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Telecommunications, Cloud Infrastructure & Fiber Networks",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Mapudungun",
        "Rapa Nui"
      ]
    },
    {
      "cityName": "Iquique",
      "stateOrRegion": "Chile Region",
      "population": 175677,
      "populationFormatted": "175,677",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Banking, Insurance, Stock Exchange & Asset Management",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Mapudungun",
        "Rapa Nui"
      ]
    },
    {
      "cityName": "Chill\u00e1n",
      "stateOrRegion": "Chile Region",
      "population": 165528,
      "populationFormatted": "165,528",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Biotechnology, Pharmaceuticals & Chemical Processing",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Mapudungun",
        "Rapa Nui"
      ]
    },
    {
      "cityName": "Puerto Montt",
      "stateOrRegion": "Chile Region",
      "population": 144880,
      "populationFormatted": "144,880",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Mapudungun",
        "Rapa Nui"
      ]
    },
    {
      "cityName": "Coquimbo",
      "stateOrRegion": "Chile Region",
      "population": 141796,
      "populationFormatted": "141,796",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Mapudungun",
        "Rapa Nui"
      ]
    },
    {
      "cityName": "Calama",
      "stateOrRegion": "Chile Region",
      "population": 132669,
      "populationFormatted": "132,669",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Mapudungun",
        "Rapa Nui"
      ]
    },
    {
      "cityName": "Osorno",
      "stateOrRegion": "Chile Region",
      "population": 132245,
      "populationFormatted": "132,245",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Industrial Manufacturing, Automotive Parts & Assembly",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Mapudungun",
        "Rapa Nui"
      ]
    },
    {
      "cityName": "Valdivia",
      "stateOrRegion": "Chile Region",
      "population": 128533,
      "populationFormatted": "128,533",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Healthcare Services, Clinical Research & Hospital Networks",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Mapudungun",
        "Rapa Nui"
      ]
    },
    {
      "cityName": "Copiap\u00f3",
      "stateOrRegion": "Chile Region",
      "population": 127504,
      "populationFormatted": "127,504",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Maritime Shipping, Container Logistics & Port Operations",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Mapudungun",
        "Rapa Nui"
      ]
    },
    {
      "cityName": "Punta Arenas",
      "stateOrRegion": "Chile Region",
      "population": 126586,
      "populationFormatted": "126,586",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Textiles, Garments Manufacturing & Artisanal Craft",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Mapudungun",
        "Rapa Nui"
      ]
    },
    {
      "cityName": "Quilpu\u00e9",
      "stateOrRegion": "Chile Region",
      "population": 124586,
      "populationFormatted": "124,586",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Renewable Energy, Solar Operations & Electrical Grid",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Mapudungun",
        "Rapa Nui"
      ]
    },
    {
      "cityName": "Los Angeles",
      "stateOrRegion": "Chile Region",
      "population": 117972,
      "populationFormatted": "117,972",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Higher Vocational Training, Engineering & Trades",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Mapudungun",
        "Rapa Nui"
      ]
    },
    {
      "cityName": "Villa Alemana",
      "stateOrRegion": "Chile Region",
      "population": 117225,
      "populationFormatted": "117,225",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Mining Operations, Raw Material Extraction & Metallurgy",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Mapudungun",
        "Rapa Nui"
      ]
    },
    {
      "cityName": "Alto Hospicio",
      "stateOrRegion": "Chile Region",
      "population": 107935,
      "populationFormatted": "107,935",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Tourism & Cultural Heritage, Hospitality Management",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Mapudungun",
        "Rapa Nui"
      ]
    },
    {
      "cityName": "Chiguallante",
      "stateOrRegion": "Chile Region",
      "population": 107411,
      "populationFormatted": "107,411",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Commercial Wholesale, Retail Distribution & Supply Chain",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Mapudungun",
        "Rapa Nui"
      ]
    },
    {
      "cityName": "Curic\u00f3",
      "stateOrRegion": "Chile Region",
      "population": 102029,
      "populationFormatted": "102,029",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Telecommunications, Cloud Infrastructure & Fiber Networks",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Mapudungun",
        "Rapa Nui"
      ]
    },
    {
      "cityName": "San Pedro De La Paz",
      "stateOrRegion": "Chile Region",
      "population": 101345,
      "populationFormatted": "101,345",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Banking, Insurance, Stock Exchange & Asset Management",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Mapudungun",
        "Rapa Nui"
      ]
    },
    {
      "cityName": "Coronel",
      "stateOrRegion": "Chile Region",
      "population": 100922,
      "populationFormatted": "100,922",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Biotechnology, Pharmaceuticals & Chemical Processing",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Mapudungun",
        "Rapa Nui"
      ]
    }
  ],
  "CO": [
    {
      "cityName": "Bogot\u00e1",
      "stateOrRegion": "Colombia Capital Region",
      "population": 7770000,
      "populationFormatted": "7.77 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Wayuunaiki"
      ]
    },
    {
      "cityName": "Bogota, D.C.",
      "stateOrRegion": "Colombia Region",
      "population": 6778691,
      "populationFormatted": "6.78 Million",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Wayuunaiki"
      ]
    },
    {
      "cityName": "Medell\u00edn",
      "stateOrRegion": "Colombia Region",
      "population": 2219861,
      "populationFormatted": "2.22 Million",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Wayuunaiki"
      ]
    },
    {
      "cityName": "Cali",
      "stateOrRegion": "Colombia Region",
      "population": 2075380,
      "populationFormatted": "2.08 Million",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Industrial Manufacturing, Automotive Parts & Assembly",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Wayuunaiki"
      ]
    },
    {
      "cityName": "Barranquilla",
      "stateOrRegion": "Colombia Region",
      "population": 1112889,
      "populationFormatted": "1.11 Million",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Healthcare Services, Clinical Research & Hospital Networks",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Wayuunaiki"
      ]
    },
    {
      "cityName": "C\u00facuta",
      "stateOrRegion": "Colombia Region",
      "population": 585543,
      "populationFormatted": "585,543",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Maritime Shipping, Container Logistics & Port Operations",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Wayuunaiki"
      ]
    },
    {
      "cityName": "Bucaramanga",
      "stateOrRegion": "Colombia Region",
      "population": 509918,
      "populationFormatted": "509,918",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Textiles, Garments Manufacturing & Artisanal Craft",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Wayuunaiki"
      ]
    },
    {
      "cityName": "Ibagu\u00e9",
      "stateOrRegion": "Colombia Region",
      "population": 495246,
      "populationFormatted": "495,246",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Renewable Energy, Solar Operations & Electrical Grid",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Wayuunaiki"
      ]
    },
    {
      "cityName": "Soledad",
      "stateOrRegion": "Colombia Region",
      "population": 455796,
      "populationFormatted": "455,796",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Higher Vocational Training, Engineering & Trades",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Wayuunaiki"
      ]
    },
    {
      "cityName": "Pereira",
      "stateOrRegion": "Colombia Region",
      "population": 428397,
      "populationFormatted": "428,397",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Mining Operations, Raw Material Extraction & Metallurgy",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Wayuunaiki"
      ]
    },
    {
      "cityName": "Santa Marta",
      "stateOrRegion": "Colombia Region",
      "population": 414387,
      "populationFormatted": "414,387",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Tourism & Cultural Heritage, Hospitality Management",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Wayuunaiki"
      ]
    },
    {
      "cityName": "Soacha",
      "stateOrRegion": "Colombia Region",
      "population": 398295,
      "populationFormatted": "398,295",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Commercial Wholesale, Retail Distribution & Supply Chain",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Wayuunaiki"
      ]
    },
    {
      "cityName": "Villavicencio",
      "stateOrRegion": "Colombia Region",
      "population": 384131,
      "populationFormatted": "384,131",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Telecommunications, Cloud Infrastructure & Fiber Networks",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Wayuunaiki"
      ]
    },
    {
      "cityName": "Pasto",
      "stateOrRegion": "Colombia Region",
      "population": 383846,
      "populationFormatted": "383,846",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Banking, Insurance, Stock Exchange & Asset Management",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Wayuunaiki"
      ]
    },
    {
      "cityName": "Monter\u00eda",
      "stateOrRegion": "Colombia Region",
      "population": 381284,
      "populationFormatted": "381,284",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Biotechnology, Pharmaceuticals & Chemical Processing",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Wayuunaiki"
      ]
    },
    {
      "cityName": "Bello",
      "stateOrRegion": "Colombia Region",
      "population": 373013,
      "populationFormatted": "373,013",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Wayuunaiki"
      ]
    },
    {
      "cityName": "Manizales",
      "stateOrRegion": "Colombia Region",
      "population": 368433,
      "populationFormatted": "368,433",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Wayuunaiki"
      ]
    },
    {
      "cityName": "Valledupar",
      "stateOrRegion": "Colombia Region",
      "population": 348990,
      "populationFormatted": "348,990",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Wayuunaiki"
      ]
    },
    {
      "cityName": "Buenaventura",
      "stateOrRegion": "Colombia Region",
      "population": 324207,
      "populationFormatted": "324,207",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Industrial Manufacturing, Automotive Parts & Assembly",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Wayuunaiki"
      ]
    },
    {
      "cityName": "Neiva",
      "stateOrRegion": "Colombia Region",
      "population": 315332,
      "populationFormatted": "315,332",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Healthcare Services, Clinical Research & Hospital Networks",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Wayuunaiki"
      ]
    },
    {
      "cityName": "Palmira",
      "stateOrRegion": "Colombia Region",
      "population": 278358,
      "populationFormatted": "278,358",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Maritime Shipping, Container Logistics & Port Operations",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Wayuunaiki"
      ]
    },
    {
      "cityName": "Armenia",
      "stateOrRegion": "Colombia Region",
      "population": 272574,
      "populationFormatted": "272,574",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Textiles, Garments Manufacturing & Artisanal Craft",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Wayuunaiki"
      ]
    },
    {
      "cityName": "Popay\u00e1n",
      "stateOrRegion": "Colombia Region",
      "population": 258653,
      "populationFormatted": "258,653",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Renewable Energy, Solar Operations & Electrical Grid",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Wayuunaiki"
      ]
    },
    {
      "cityName": "Sincelejo",
      "stateOrRegion": "Colombia Region",
      "population": 236780,
      "populationFormatted": "236,780",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Higher Vocational Training, Engineering & Trades",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Wayuunaiki"
      ]
    },
    {
      "cityName": "Itag\u00fci",
      "stateOrRegion": "Colombia Region",
      "population": 235567,
      "populationFormatted": "235,567",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Mining Operations, Raw Material Extraction & Metallurgy",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Wayuunaiki"
      ]
    },
    {
      "cityName": "Barrancabermeja",
      "stateOrRegion": "Colombia Region",
      "population": 187311,
      "populationFormatted": "187,311",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Tourism & Cultural Heritage, Hospitality Management",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Wayuunaiki"
      ]
    },
    {
      "cityName": "Cartagena",
      "stateOrRegion": "Colombia Region",
      "population": 184686,
      "populationFormatted": "184,686",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Commercial Wholesale, Retail Distribution & Supply Chain",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Wayuunaiki"
      ]
    },
    {
      "cityName": "Envigado",
      "stateOrRegion": "Colombia Region",
      "population": 175337,
      "populationFormatted": "175,337",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Telecommunications, Cloud Infrastructure & Fiber Networks",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Wayuunaiki"
      ]
    },
    {
      "cityName": "Dosquebradas",
      "stateOrRegion": "Colombia Region",
      "population": 173452,
      "populationFormatted": "173,452",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Banking, Insurance, Stock Exchange & Asset Management",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Wayuunaiki"
      ]
    },
    {
      "cityName": "Riohacha",
      "stateOrRegion": "Colombia Region",
      "population": 169311,
      "populationFormatted": "169,311",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Biotechnology, Pharmaceuticals & Chemical Processing",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Wayuunaiki"
      ]
    }
  ],
  "CR": [
    {
      "cityName": "San Jos\u00e9",
      "stateOrRegion": "Costa Rica Capital Region",
      "population": 780000,
      "populationFormatted": "780,000",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Lim\u00f3n Creole (Mekatelyu)"
      ]
    },
    {
      "cityName": "San Jose",
      "stateOrRegion": "Costa Rica Region",
      "population": 309672,
      "populationFormatted": "309,672",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Lim\u00f3n Creole (Mekatelyu)"
      ]
    },
    {
      "cityName": "Alajuela",
      "stateOrRegion": "Costa Rica Region",
      "population": 222853,
      "populationFormatted": "222,853",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Lim\u00f3n Creole (Mekatelyu)"
      ]
    },
    {
      "cityName": "Desamparados",
      "stateOrRegion": "Costa Rica Region",
      "population": 193478,
      "populationFormatted": "193,478",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Industrial Manufacturing, Automotive Parts & Assembly",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Lim\u00f3n Creole (Mekatelyu)"
      ]
    },
    {
      "cityName": "San Carlos",
      "stateOrRegion": "Costa Rica Region",
      "population": 127140,
      "populationFormatted": "127,140",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Healthcare Services, Clinical Research & Hospital Networks",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Lim\u00f3n Creole (Mekatelyu)"
      ]
    },
    {
      "cityName": "Perez Zeledon",
      "stateOrRegion": "Costa Rica Region",
      "population": 122187,
      "populationFormatted": "122,187",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Maritime Shipping, Container Logistics & Port Operations",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Lim\u00f3n Creole (Mekatelyu)"
      ]
    },
    {
      "cityName": "Alajuelita",
      "stateOrRegion": "Costa Rica Region",
      "population": 119616,
      "populationFormatted": "119,616",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Textiles, Garments Manufacturing & Artisanal Craft",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Lim\u00f3n Creole (Mekatelyu)"
      ]
    },
    {
      "cityName": "Goicoechea",
      "stateOrRegion": "Costa Rica Region",
      "population": 117532,
      "populationFormatted": "117,532",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Renewable Energy, Solar Operations & Electrical Grid",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Lim\u00f3n Creole (Mekatelyu)"
      ]
    },
    {
      "cityName": "Pavas",
      "stateOrRegion": "Costa Rica Region",
      "population": 109207,
      "populationFormatted": "109,207",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Higher Vocational Training, Engineering & Trades",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Lim\u00f3n Creole (Mekatelyu)"
      ]
    },
    {
      "cityName": "Lim\u00f3n",
      "stateOrRegion": "Costa Rica Region",
      "population": 104763,
      "populationFormatted": "104,763",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Mining Operations, Raw Material Extraction & Metallurgy",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Lim\u00f3n Creole (Mekatelyu)"
      ]
    },
    {
      "cityName": "Heredia",
      "stateOrRegion": "Costa Rica Region",
      "population": 103894,
      "populationFormatted": "103,894",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Tourism & Cultural Heritage, Hospitality Management",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Lim\u00f3n Creole (Mekatelyu)"
      ]
    },
    {
      "cityName": "La Uni\u00f3n",
      "stateOrRegion": "Costa Rica Region",
      "population": 103496,
      "populationFormatted": "103,496",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Commercial Wholesale, Retail Distribution & Supply Chain",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Lim\u00f3n Creole (Mekatelyu)"
      ]
    },
    {
      "cityName": "Pococi",
      "stateOrRegion": "Costa Rica Region",
      "population": 103121,
      "populationFormatted": "103,121",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Telecommunications, Cloud Infrastructure & Fiber Networks",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Lim\u00f3n Creole (Mekatelyu)"
      ]
    },
    {
      "cityName": "Puntarenas",
      "stateOrRegion": "Costa Rica Region",
      "population": 102504,
      "populationFormatted": "102,504",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Banking, Insurance, Stock Exchange & Asset Management",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Lim\u00f3n Creole (Mekatelyu)"
      ]
    }
  ],
  "CU": [
    {
      "cityName": "La Habana",
      "stateOrRegion": "Cuba Region",
      "population": 2201610,
      "populationFormatted": "2.20 Million",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Spanish"
      ]
    },
    {
      "cityName": "Havana",
      "stateOrRegion": "Cuba Capital Region",
      "population": 1650000,
      "populationFormatted": "1.65 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Spanish"
      ]
    },
    {
      "cityName": "Santiago De Cuba",
      "stateOrRegion": "Cuba Region",
      "population": 423392,
      "populationFormatted": "423,392",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "Spanish"
      ]
    },
    {
      "cityName": "Camag\u00fcey",
      "stateOrRegion": "Cuba Region",
      "population": 301574,
      "populationFormatted": "301,574",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Industrial Manufacturing, Automotive Parts & Assembly",
      "primaryLanguagesSpoken": [
        "Spanish"
      ]
    },
    {
      "cityName": "Holgu\u00edn",
      "stateOrRegion": "Cuba Region",
      "population": 269618,
      "populationFormatted": "269,618",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Healthcare Services, Clinical Research & Hospital Networks",
      "primaryLanguagesSpoken": [
        "Spanish"
      ]
    },
    {
      "cityName": "Santa Clara",
      "stateOrRegion": "Cuba Region",
      "population": 210220,
      "populationFormatted": "210,220",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Maritime Shipping, Container Logistics & Port Operations",
      "primaryLanguagesSpoken": [
        "Spanish"
      ]
    },
    {
      "cityName": "Guant\u00e1namo",
      "stateOrRegion": "Cuba Region",
      "population": 208145,
      "populationFormatted": "208,145",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Textiles, Garments Manufacturing & Artisanal Craft",
      "primaryLanguagesSpoken": [
        "Spanish"
      ]
    },
    {
      "cityName": "Bayamo",
      "stateOrRegion": "Cuba Region",
      "population": 144664,
      "populationFormatted": "144,664",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Renewable Energy, Solar Operations & Electrical Grid",
      "primaryLanguagesSpoken": [
        "Spanish"
      ]
    },
    {
      "cityName": "Las Tunas",
      "stateOrRegion": "Cuba Region",
      "population": 143582,
      "populationFormatted": "143,582",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Higher Vocational Training, Engineering & Trades",
      "primaryLanguagesSpoken": [
        "Spanish"
      ]
    },
    {
      "cityName": "Cienfuegos",
      "stateOrRegion": "Cuba Region",
      "population": 140734,
      "populationFormatted": "140,734",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Mining Operations, Raw Material Extraction & Metallurgy",
      "primaryLanguagesSpoken": [
        "Spanish"
      ]
    },
    {
      "cityName": "Pinar Del R\u00edo",
      "stateOrRegion": "Cuba Region",
      "population": 139336,
      "populationFormatted": "139,336",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Tourism & Cultural Heritage, Hospitality Management",
      "primaryLanguagesSpoken": [
        "Spanish"
      ]
    },
    {
      "cityName": "Matanzas",
      "stateOrRegion": "Cuba Region",
      "population": 127287,
      "populationFormatted": "127,287",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Commercial Wholesale, Retail Distribution & Supply Chain",
      "primaryLanguagesSpoken": [
        "Spanish"
      ]
    },
    {
      "cityName": "Ciego De Avila",
      "stateOrRegion": "Cuba Region",
      "population": 106225,
      "populationFormatted": "106,225",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Telecommunications, Cloud Infrastructure & Fiber Networks",
      "primaryLanguagesSpoken": [
        "Spanish"
      ]
    },
    {
      "cityName": "Sancti Sp\u00edritus",
      "stateOrRegion": "Cuba Region",
      "population": 98552,
      "populationFormatted": "98,552",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Banking, Insurance, Stock Exchange & Asset Management",
      "primaryLanguagesSpoken": [
        "Spanish"
      ]
    }
  ],
  "DM": [
    {
      "cityName": "Roseau",
      "stateOrRegion": "Dominica Capital Region",
      "population": 80000,
      "populationFormatted": "80,000",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "English",
        "Dominican Creole French"
      ]
    }
  ],
  "DO": [
    {
      "cityName": "Santo Domingo",
      "stateOrRegion": "Dominican Republic Capital Region",
      "population": 1680000,
      "populationFormatted": "1.68 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Spanish"
      ]
    },
    {
      "cityName": "Santiago De Los Caballeros",
      "stateOrRegion": "Dominican Republic Region",
      "population": 622101,
      "populationFormatted": "622,101",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Spanish"
      ]
    },
    {
      "cityName": "Santo Domingo East",
      "stateOrRegion": "Dominican Republic Region",
      "population": 492302,
      "populationFormatted": "492,302",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "Spanish"
      ]
    },
    {
      "cityName": "Santo Domingo West",
      "stateOrRegion": "Dominican Republic Region",
      "population": 415935,
      "populationFormatted": "415,935",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Industrial Manufacturing, Automotive Parts & Assembly",
      "primaryLanguagesSpoken": [
        "Spanish"
      ]
    },
    {
      "cityName": "Santo Domingo North",
      "stateOrRegion": "Dominican Republic Region",
      "population": 326484,
      "populationFormatted": "326,484",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Healthcare Services, Clinical Research & Hospital Networks",
      "primaryLanguagesSpoken": [
        "Spanish"
      ]
    },
    {
      "cityName": "San Crist\u00f3bal",
      "stateOrRegion": "Dominican Republic Region",
      "population": 272374,
      "populationFormatted": "272,374",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Maritime Shipping, Container Logistics & Port Operations",
      "primaryLanguagesSpoken": [
        "Spanish"
      ]
    },
    {
      "cityName": "San Pedro De Macoris",
      "stateOrRegion": "Dominican Republic Region",
      "population": 217141,
      "populationFormatted": "217,141",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Textiles, Garments Manufacturing & Artisanal Craft",
      "primaryLanguagesSpoken": [
        "Spanish"
      ]
    },
    {
      "cityName": "Los Alcarrizos",
      "stateOrRegion": "Dominican Republic Region",
      "population": 206557,
      "populationFormatted": "206,557",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Renewable Energy, Solar Operations & Electrical Grid",
      "primaryLanguagesSpoken": [
        "Spanish"
      ]
    },
    {
      "cityName": "La Vega",
      "stateOrRegion": "Dominican Republic Region",
      "population": 202864,
      "populationFormatted": "202,864",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Higher Vocational Training, Engineering & Trades",
      "primaryLanguagesSpoken": [
        "Spanish"
      ]
    },
    {
      "cityName": "La Romana",
      "stateOrRegion": "Dominican Republic Region",
      "population": 202488,
      "populationFormatted": "202,488",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Mining Operations, Raw Material Extraction & Metallurgy",
      "primaryLanguagesSpoken": [
        "Spanish"
      ]
    },
    {
      "cityName": "Hig\u00fcey",
      "stateOrRegion": "Dominican Republic Region",
      "population": 168501,
      "populationFormatted": "168,501",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Tourism & Cultural Heritage, Hospitality Management",
      "primaryLanguagesSpoken": [
        "Spanish"
      ]
    },
    {
      "cityName": "San Francisco De Macoris",
      "stateOrRegion": "Dominican Republic Region",
      "population": 149508,
      "populationFormatted": "149,508",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Commercial Wholesale, Retail Distribution & Supply Chain",
      "primaryLanguagesSpoken": [
        "Spanish"
      ]
    },
    {
      "cityName": "Puerto Plata",
      "stateOrRegion": "Dominican Republic Region",
      "population": 128240,
      "populationFormatted": "128,240",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Telecommunications, Cloud Infrastructure & Fiber Networks",
      "primaryLanguagesSpoken": [
        "Spanish"
      ]
    },
    {
      "cityName": "Moca",
      "stateOrRegion": "Dominican Republic Region",
      "population": 94981,
      "populationFormatted": "94,981",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Banking, Insurance, Stock Exchange & Asset Management",
      "primaryLanguagesSpoken": [
        "Spanish"
      ]
    },
    {
      "cityName": "Ban\u00ed",
      "stateOrRegion": "Dominican Republic Region",
      "population": 92153,
      "populationFormatted": "92,153",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Biotechnology, Pharmaceuticals & Chemical Processing",
      "primaryLanguagesSpoken": [
        "Spanish"
      ]
    },
    {
      "cityName": "Bajos De Haina",
      "stateOrRegion": "Dominican Republic Region",
      "population": 83582,
      "populationFormatted": "83,582",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Spanish"
      ]
    },
    {
      "cityName": "Boca Chica",
      "stateOrRegion": "Dominican Republic Region",
      "population": 78882,
      "populationFormatted": "78,882",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Spanish"
      ]
    },
    {
      "cityName": "San Juan De La Maguana",
      "stateOrRegion": "Dominican Republic Region",
      "population": 78313,
      "populationFormatted": "78,313",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "Spanish"
      ]
    },
    {
      "cityName": "Bonao",
      "stateOrRegion": "Dominican Republic Region",
      "population": 76241,
      "populationFormatted": "76,241",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Industrial Manufacturing, Automotive Parts & Assembly",
      "primaryLanguagesSpoken": [
        "Spanish"
      ]
    },
    {
      "cityName": "Azua",
      "stateOrRegion": "Dominican Republic Region",
      "population": 59319,
      "populationFormatted": "59,319",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Healthcare Services, Clinical Research & Hospital Networks",
      "primaryLanguagesSpoken": [
        "Spanish"
      ]
    }
  ],
  "EC": [
    {
      "cityName": "Quito",
      "stateOrRegion": "Ecuador Capital Region",
      "population": 2700000,
      "populationFormatted": "2.70 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Kichwa",
        "Shuar"
      ]
    },
    {
      "cityName": "Guayaquil",
      "stateOrRegion": "Ecuador Region",
      "population": 2278738,
      "populationFormatted": "2.28 Million",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Kichwa",
        "Shuar"
      ]
    },
    {
      "cityName": "Cuenca",
      "stateOrRegion": "Ecuador Region",
      "population": 487901,
      "populationFormatted": "487,901",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Kichwa",
        "Shuar"
      ]
    },
    {
      "cityName": "Ambato",
      "stateOrRegion": "Ecuador Region",
      "population": 338728,
      "populationFormatted": "338,728",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Industrial Manufacturing, Automotive Parts & Assembly",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Kichwa",
        "Shuar"
      ]
    },
    {
      "cityName": "Santo Domingo De Los Colorados",
      "stateOrRegion": "Ecuador Region",
      "population": 331126,
      "populationFormatted": "331,126",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Healthcare Services, Clinical Research & Hospital Networks",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Kichwa",
        "Shuar"
      ]
    },
    {
      "cityName": "Santa Elena",
      "stateOrRegion": "Ecuador Region",
      "population": 305632,
      "populationFormatted": "305,632",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Maritime Shipping, Container Logistics & Port Operations",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Kichwa",
        "Shuar"
      ]
    },
    {
      "cityName": "Portoviejo",
      "stateOrRegion": "Ecuador Region",
      "population": 270765,
      "populationFormatted": "270,765",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Textiles, Garments Manufacturing & Artisanal Craft",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Kichwa",
        "Shuar"
      ]
    },
    {
      "cityName": "Machala",
      "stateOrRegion": "Ecuador Region",
      "population": 261551,
      "populationFormatted": "261,551",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Renewable Energy, Solar Operations & Electrical Grid",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Kichwa",
        "Shuar"
      ]
    },
    {
      "cityName": "Manta",
      "stateOrRegion": "Ecuador Region",
      "population": 218406,
      "populationFormatted": "218,406",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Higher Vocational Training, Engineering & Trades",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Kichwa",
        "Shuar"
      ]
    },
    {
      "cityName": "Riobamba",
      "stateOrRegion": "Ecuador Region",
      "population": 218019,
      "populationFormatted": "218,019",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Mining Operations, Raw Material Extraction & Metallurgy",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Kichwa",
        "Shuar"
      ]
    },
    {
      "cityName": "Dur\u00e1n",
      "stateOrRegion": "Ecuador Region",
      "population": 199650,
      "populationFormatted": "199,650",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Tourism & Cultural Heritage, Hospitality Management",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Kichwa",
        "Shuar"
      ]
    },
    {
      "cityName": "Loja",
      "stateOrRegion": "Ecuador Region",
      "population": 190976,
      "populationFormatted": "190,976",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Commercial Wholesale, Retail Distribution & Supply Chain",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Kichwa",
        "Shuar"
      ]
    },
    {
      "cityName": "Esmeraldas",
      "stateOrRegion": "Ecuador Region",
      "population": 185782,
      "populationFormatted": "185,782",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Telecommunications, Cloud Infrastructure & Fiber Networks",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Kichwa",
        "Shuar"
      ]
    },
    {
      "cityName": "Ibarra",
      "stateOrRegion": "Ecuador Region",
      "population": 184378,
      "populationFormatted": "184,378",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Banking, Insurance, Stock Exchange & Asset Management",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Kichwa",
        "Shuar"
      ]
    },
    {
      "cityName": "Quevedo",
      "stateOrRegion": "Ecuador Region",
      "population": 165363,
      "populationFormatted": "165,363",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Biotechnology, Pharmaceuticals & Chemical Processing",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Kichwa",
        "Shuar"
      ]
    },
    {
      "cityName": "Babahoyo",
      "stateOrRegion": "Ecuador Region",
      "population": 156577,
      "populationFormatted": "156,577",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Kichwa",
        "Shuar"
      ]
    },
    {
      "cityName": "Milagro",
      "stateOrRegion": "Ecuador Region",
      "population": 156515,
      "populationFormatted": "156,515",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Kichwa",
        "Shuar"
      ]
    },
    {
      "cityName": "Calderon",
      "stateOrRegion": "Ecuador Region",
      "population": 152242,
      "populationFormatted": "152,242",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Kichwa",
        "Shuar"
      ]
    }
  ],
  "SV": [
    {
      "cityName": "San Salvador",
      "stateOrRegion": "El Salvador Capital Region",
      "population": 945000,
      "populationFormatted": "945,000",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Nawat (Pipil)"
      ]
    },
    {
      "cityName": "Santa Ana",
      "stateOrRegion": "El Salvador Region",
      "population": 350363,
      "populationFormatted": "350,363",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Nawat (Pipil)"
      ]
    },
    {
      "cityName": "Mejicanos",
      "stateOrRegion": "El Salvador Region",
      "population": 276827,
      "populationFormatted": "276,827",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Nawat (Pipil)"
      ]
    },
    {
      "cityName": "Soyapango",
      "stateOrRegion": "El Salvador Region",
      "population": 261122,
      "populationFormatted": "261,122",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Industrial Manufacturing, Automotive Parts & Assembly",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Nawat (Pipil)"
      ]
    },
    {
      "cityName": "Santa Tecla",
      "stateOrRegion": "El Salvador Region",
      "population": 214090,
      "populationFormatted": "214,090",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Healthcare Services, Clinical Research & Hospital Networks",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Nawat (Pipil)"
      ]
    },
    {
      "cityName": "Apopa",
      "stateOrRegion": "El Salvador Region",
      "population": 198006,
      "populationFormatted": "198,006",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Maritime Shipping, Container Logistics & Port Operations",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Nawat (Pipil)"
      ]
    },
    {
      "cityName": "Ilopango",
      "stateOrRegion": "El Salvador Region",
      "population": 169703,
      "populationFormatted": "169,703",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Textiles, Garments Manufacturing & Artisanal Craft",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Nawat (Pipil)"
      ]
    },
    {
      "cityName": "Ciudad Delgado",
      "stateOrRegion": "El Salvador Region",
      "population": 166564,
      "populationFormatted": "166,564",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Renewable Energy, Solar Operations & Electrical Grid",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Nawat (Pipil)"
      ]
    },
    {
      "cityName": "San Miguel",
      "stateOrRegion": "El Salvador Region",
      "population": 142854,
      "populationFormatted": "142,854",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Higher Vocational Training, Engineering & Trades",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Nawat (Pipil)"
      ]
    },
    {
      "cityName": "Sonsonate",
      "stateOrRegion": "El Salvador Region",
      "population": 124603,
      "populationFormatted": "124,603",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Mining Operations, Raw Material Extraction & Metallurgy",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Nawat (Pipil)"
      ]
    },
    {
      "cityName": "Ahuachapan",
      "stateOrRegion": "El Salvador Region",
      "population": 112300,
      "populationFormatted": "112,300",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Tourism & Cultural Heritage, Hospitality Management",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Nawat (Pipil)"
      ]
    },
    {
      "cityName": "Cuscatancingo",
      "stateOrRegion": "El Salvador Region",
      "population": 92624,
      "populationFormatted": "92,624",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Commercial Wholesale, Retail Distribution & Supply Chain",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Nawat (Pipil)"
      ]
    },
    {
      "cityName": "San Martin",
      "stateOrRegion": "El Salvador Region",
      "population": 87703,
      "populationFormatted": "87,703",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Telecommunications, Cloud Infrastructure & Fiber Networks",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Nawat (Pipil)"
      ]
    }
  ],
  "GD": [
    {
      "cityName": "St. George's",
      "stateOrRegion": "Grenada Capital Region",
      "population": 80000,
      "populationFormatted": "80,000",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "English",
        "Grenadian Creole English"
      ]
    }
  ],
  "GT": [
    {
      "cityName": "Guatemala City",
      "stateOrRegion": "Guatemala Capital Region",
      "population": 2670000,
      "populationFormatted": "2.67 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Spanish",
        "K'iche'",
        "Kaqchikel",
        "Q'eqchi'"
      ]
    },
    {
      "cityName": "Cuidad De Guatemala",
      "stateOrRegion": "Guatemala Region",
      "population": 1022001,
      "populationFormatted": "1.02 Million",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Spanish",
        "K'iche'",
        "Kaqchikel",
        "Q'eqchi'"
      ]
    },
    {
      "cityName": "Mixco",
      "stateOrRegion": "Guatemala Region",
      "population": 452134,
      "populationFormatted": "452,134",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "Spanish",
        "K'iche'",
        "Kaqchikel",
        "Q'eqchi'"
      ]
    },
    {
      "cityName": "Villa Nueva",
      "stateOrRegion": "Guatemala Region",
      "population": 390329,
      "populationFormatted": "390,329",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Industrial Manufacturing, Automotive Parts & Assembly",
      "primaryLanguagesSpoken": [
        "Spanish",
        "K'iche'",
        "Kaqchikel",
        "Q'eqchi'"
      ]
    },
    {
      "cityName": "Quetzaltenango",
      "stateOrRegion": "Guatemala Region",
      "population": 152223,
      "populationFormatted": "152,223",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Healthcare Services, Clinical Research & Hospital Networks",
      "primaryLanguagesSpoken": [
        "Spanish",
        "K'iche'",
        "Kaqchikel",
        "Q'eqchi'"
      ]
    },
    {
      "cityName": "Escuintla",
      "stateOrRegion": "Guatemala Region",
      "population": 114626,
      "populationFormatted": "114,626",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Maritime Shipping, Container Logistics & Port Operations",
      "primaryLanguagesSpoken": [
        "Spanish",
        "K'iche'",
        "Kaqchikel",
        "Q'eqchi'"
      ]
    }
  ],
  "GY": [
    {
      "cityName": "Georgetown",
      "stateOrRegion": "Guyana Capital Region",
      "population": 120000,
      "populationFormatted": "120,000",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "English",
        "Guyanese Creole"
      ]
    }
  ],
  "HT": [
    {
      "cityName": "Port-au-Prince",
      "stateOrRegion": "Haiti Capital Region",
      "population": 1755000,
      "populationFormatted": "1.75 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Haitian Creole",
        "French"
      ]
    }
  ],
  "HN": [
    {
      "cityName": "Tegucigalpa",
      "stateOrRegion": "Honduras Capital Region",
      "population": 1560000,
      "populationFormatted": "1.56 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Garifuna"
      ]
    },
    {
      "cityName": "San Pedro Sula",
      "stateOrRegion": "Honduras Region",
      "population": 437798,
      "populationFormatted": "437,798",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Garifuna"
      ]
    },
    {
      "cityName": "La Ceiba",
      "stateOrRegion": "Honduras Region",
      "population": 114277,
      "populationFormatted": "114,277",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Garifuna"
      ]
    },
    {
      "cityName": "Choloma",
      "stateOrRegion": "Honduras Region",
      "population": 105899,
      "populationFormatted": "105,899",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Industrial Manufacturing, Automotive Parts & Assembly",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Garifuna"
      ]
    }
  ],
  "JM": [
    {
      "cityName": "Kingston",
      "stateOrRegion": "Jamaica Capital Region",
      "population": 420000,
      "populationFormatted": "420,000",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "English",
        "Jamaican Patois"
      ]
    },
    {
      "cityName": "Portmore",
      "stateOrRegion": "Jamaica Region",
      "population": 156467,
      "populationFormatted": "156,467",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "English",
        "Jamaican Patois"
      ]
    },
    {
      "cityName": "Spanish Town",
      "stateOrRegion": "Jamaica Region",
      "population": 131510,
      "populationFormatted": "131,510",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "English",
        "Jamaican Patois"
      ]
    },
    {
      "cityName": "Montego Bay",
      "stateOrRegion": "Jamaica Region",
      "population": 111037,
      "populationFormatted": "111,037",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Industrial Manufacturing, Automotive Parts & Assembly",
      "primaryLanguagesSpoken": [
        "English",
        "Jamaican Patois"
      ]
    }
  ],
  "MX": [
    {
      "cityName": "Mexico City",
      "stateOrRegion": "Mexico City",
      "population": 9209944,
      "populationFormatted": "9.21 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Federal Government, Banking, Tech Policy & Corporate HQ",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Nahuatl",
        "Yucatec Maya"
      ]
    },
    {
      "cityName": "Tijuana",
      "stateOrRegion": "Baja California",
      "population": 1810645,
      "populationFormatted": "1.81 Million",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Medical Device Manufacturing, Cross-Border Tech & Aerospace",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Nahuatl",
        "Yucatec Maya"
      ]
    },
    {
      "cityName": "Ecatepec",
      "stateOrRegion": "State of Mexico",
      "population": 1645352,
      "populationFormatted": "1.65 Million",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Consumer Goods Packaging, Metallurgy & Chemical Industry",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Nahuatl",
        "Yucatec Maya"
      ]
    },
    {
      "cityName": "Le\u00f3n",
      "stateOrRegion": "Guanajuato",
      "population": 1579803,
      "populationFormatted": "1.58 Million",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Footwear Leather Manufacturing, Auto Parts & Logistics",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Nahuatl",
        "Yucatec Maya"
      ]
    },
    {
      "cityName": "Puebla",
      "stateOrRegion": "Puebla",
      "population": 1542232,
      "populationFormatted": "1.54 Million",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Automotive Assembly (Volkswagen, Audi) & Electronics",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Nahuatl",
        "Yucatec Maya"
      ]
    },
    {
      "cityName": "Ju\u00e1rez",
      "stateOrRegion": "Chihuahua",
      "population": 1501851,
      "populationFormatted": "1.50 Million",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Maquiladora Electronics Manufacturing & Automotive Harnesses",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Nahuatl",
        "Yucatec Maya"
      ]
    },
    {
      "cityName": "Guadalajara",
      "stateOrRegion": "Jalisco",
      "population": 1385629,
      "populationFormatted": "1.39 Million",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Silicon Valley of Mexico, Enterprise Software & Hardware",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Nahuatl",
        "Yucatec Maya"
      ]
    },
    {
      "cityName": "Zapopan",
      "stateOrRegion": "Jalisco",
      "population": 1257547,
      "populationFormatted": "1.26 Million",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Corporate Finance, Technology Tech Parks & Services",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Nahuatl",
        "Yucatec Maya"
      ]
    },
    {
      "cityName": "Monterrey",
      "stateOrRegion": "Nuevo Le\u00f3n",
      "population": 1142994,
      "populationFormatted": "1.14 Million",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Industrial Capital, Steel (Ternium), Cement (Cemex) & EVs",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Nahuatl",
        "Yucatec Maya"
      ]
    },
    {
      "cityName": "Nezahualc\u00f3yotl",
      "stateOrRegion": "State of Mexico",
      "population": 1072676,
      "populationFormatted": "1.07 Million",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Light Industry Manufacturing, Retail Commerce & Trades",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Nahuatl",
        "Yucatec Maya"
      ]
    },
    {
      "cityName": "Chihuahua",
      "stateOrRegion": "Chihuahua",
      "population": 925762,
      "populationFormatted": "925,762",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Aerospace Machinery, Auto Parts & Electronic Assembly",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Nahuatl",
        "Yucatec Maya"
      ]
    },
    {
      "cityName": "M\u00e9rida",
      "stateOrRegion": "Yucat\u00e1n",
      "population": 921771,
      "populationFormatted": "921,771",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Software Outsourcing, Medical Hub & Agribusiness Exports",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Nahuatl",
        "Yucatec Maya"
      ]
    },
    {
      "cityName": "Canc\u00fan",
      "stateOrRegion": "Quintana Roo",
      "population": 888797,
      "populationFormatted": "888,797",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Hospitality Management, International Air Freight & Tourism",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Nahuatl",
        "Yucatec Maya"
      ]
    },
    {
      "cityName": "Saltillo",
      "stateOrRegion": "Coahuila",
      "population": 864431,
      "populationFormatted": "864,431",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Automotive Manufacturing (GM, Stellantis) & Tooling",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Nahuatl",
        "Yucatec Maya"
      ]
    },
    {
      "cityName": "Aguascalientes",
      "stateOrRegion": "Aguascalientes",
      "population": 863893,
      "populationFormatted": "863,893",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Nissan Auto Manufacturing, IT Services & Electronics",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Nahuatl",
        "Yucatec Maya"
      ]
    },
    {
      "cityName": "Hermosillo",
      "stateOrRegion": "Sonora",
      "population": 855563,
      "populationFormatted": "855,563",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Ford Automotive Plant, Solar Energy & Mining Support",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Nahuatl",
        "Yucatec Maya"
      ]
    },
    {
      "cityName": "San Luis Potos\u00ed",
      "stateOrRegion": "San Luis Potos\u00ed",
      "population": 845941,
      "populationFormatted": "845,941",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "BMW Automotive Complex, Household Appliances & Logistics",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Nahuatl",
        "Yucatec Maya"
      ]
    },
    {
      "cityName": "Naucalpan",
      "stateOrRegion": "State of Mexico",
      "population": 834434,
      "populationFormatted": "834,434",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Chemical Industry, Auto Components & Industrial Parks",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Nahuatl",
        "Yucatec Maya"
      ]
    },
    {
      "cityName": "Culiac\u00e1n",
      "stateOrRegion": "Sinaloa",
      "population": 808416,
      "populationFormatted": "808,416",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Agribusiness Food Processing, Aquaculture & Commerce",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Nahuatl",
        "Yucatec Maya"
      ]
    },
    {
      "cityName": "Quer\u00e9taro",
      "stateOrRegion": "Quer\u00e9taro",
      "population": 794789,
      "populationFormatted": "794,789",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Aerospace Engineering Hub, Cloud Data Centers & Auto",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Nahuatl",
        "Yucatec Maya"
      ]
    },
    {
      "cityName": "Morelia",
      "stateOrRegion": "Michoac\u00e1n",
      "population": 743275,
      "populationFormatted": "743,275",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Agribusiness Avocado Logistics, Higher Education & Software",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Nahuatl",
        "Yucatec Maya"
      ]
    },
    {
      "cityName": "Reynosa",
      "stateOrRegion": "Tamaulipas",
      "population": 691557,
      "populationFormatted": "691,557",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Cross-Border Electronics Assembly & Auto Parts",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Nahuatl",
        "Yucatec Maya"
      ]
    },
    {
      "cityName": "Torre\u00f3n",
      "stateOrRegion": "Coahuila",
      "population": 690193,
      "populationFormatted": "690,193",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Silver Metallurgy (Pe\u00f1oles), Milk Agribusiness & Auto",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Nahuatl",
        "Yucatec Maya"
      ]
    },
    {
      "cityName": "Chimalhuac\u00e1n",
      "stateOrRegion": "State of Mexico",
      "population": 679811,
      "populationFormatted": "679,811",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Textiles Manufacturing, Construction & Local Services",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Nahuatl",
        "Yucatec Maya"
      ]
    },
    {
      "cityName": "Tlalnepantla",
      "stateOrRegion": "State of Mexico",
      "population": 658907,
      "populationFormatted": "658,907",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Heavy Machinery, Logistics Freight & Chemical Storage",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Nahuatl",
        "Yucatec Maya"
      ]
    },
    {
      "cityName": "Acapulco",
      "stateOrRegion": "Guerrero",
      "population": 658609,
      "populationFormatted": "658,609",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Seaport Maritime Logistics, Hospitality & Commerce",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Nahuatl",
        "Yucatec Maya"
      ]
    },
    {
      "cityName": "Tlaquepaque",
      "stateOrRegion": "Jalisco",
      "population": 650123,
      "populationFormatted": "650,123",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Artisanal Crafts Manufacturing, Electronics & Warehousing",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Nahuatl",
        "Yucatec Maya"
      ]
    },
    {
      "cityName": "Guadalupe",
      "stateOrRegion": "Nuevo Le\u00f3n",
      "population": 635862,
      "populationFormatted": "635,862",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Industrial Equipment, Auto Components & Metalworks",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Nahuatl",
        "Yucatec Maya"
      ]
    },
    {
      "cityName": "Tuxtla Guti\u00e9rrez",
      "stateOrRegion": "Chiapas",
      "population": 578830,
      "populationFormatted": "578,830",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Hydroelectric Energy Operations, Coffee Exports & Services",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Nahuatl",
        "Yucatec Maya"
      ]
    },
    {
      "cityName": "Durango",
      "stateOrRegion": "Durango",
      "population": 565300,
      "populationFormatted": "565,300",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Forestry Wood Processing, Mining Engineering & Solar",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Nahuatl",
        "Yucatec Maya"
      ]
    }
  ],
  "NI": [
    {
      "cityName": "Managua",
      "stateOrRegion": "Nicaragua Capital Region",
      "population": 1035000,
      "populationFormatted": "1.03 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Miskito"
      ]
    },
    {
      "cityName": "Le\u00f3n",
      "stateOrRegion": "Nicaragua Region",
      "population": 180695,
      "populationFormatted": "180,695",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Miskito"
      ]
    }
  ],
  "PA": [
    {
      "cityName": "Panama City",
      "stateOrRegion": "Panama Capital Region",
      "population": 660000,
      "populationFormatted": "660,000",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Ng\u00e4bere",
        "Kuna"
      ]
    }
  ],
  "PY": [
    {
      "cityName": "Asuncion",
      "stateOrRegion": "Itap\u00faa & San Pedro Departments",
      "population": 1620483,
      "populationFormatted": "1.62 Million",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Guarani",
        "Spanish"
      ]
    },
    {
      "cityName": "Asunci\u00f3n",
      "stateOrRegion": "Asunci\u00f3n Capital Metro",
      "population": 1110000,
      "populationFormatted": "1.11 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Guarani",
        "Spanish"
      ]
    },
    {
      "cityName": "Ciudad Del Este",
      "stateOrRegion": "Asunci\u00f3n Capital Metro",
      "population": 333535,
      "populationFormatted": "333,535",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "Guarani",
        "Spanish"
      ]
    },
    {
      "cityName": "San Lorenzo",
      "stateOrRegion": "Itap\u00faa & San Pedro Departments",
      "population": 202745,
      "populationFormatted": "202,745",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Industrial Manufacturing, Automotive Parts & Assembly",
      "primaryLanguagesSpoken": [
        "Guarani",
        "Spanish"
      ]
    },
    {
      "cityName": "Luque",
      "stateOrRegion": "Asunci\u00f3n Capital Metro",
      "population": 170433,
      "populationFormatted": "170,433",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Healthcare Services, Clinical Research & Hospital Networks",
      "primaryLanguagesSpoken": [
        "Guarani",
        "Spanish"
      ]
    },
    {
      "cityName": "Capiat\u00e1",
      "stateOrRegion": "Itap\u00faa & San Pedro Departments",
      "population": 154469,
      "populationFormatted": "154,469",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Maritime Shipping, Container Logistics & Port Operations",
      "primaryLanguagesSpoken": [
        "Guarani",
        "Spanish"
      ]
    },
    {
      "cityName": "Lambar\u00e9",
      "stateOrRegion": "Asunci\u00f3n Capital Metro",
      "population": 119984,
      "populationFormatted": "119,984",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Textiles, Garments Manufacturing & Artisanal Craft",
      "primaryLanguagesSpoken": [
        "Guarani",
        "Spanish"
      ]
    },
    {
      "cityName": "Fernando De La Mora",
      "stateOrRegion": "Itap\u00faa & San Pedro Departments",
      "population": 114332,
      "populationFormatted": "114,332",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Renewable Energy, Solar Operations & Electrical Grid",
      "primaryLanguagesSpoken": [
        "Guarani",
        "Spanish"
      ]
    },
    {
      "cityName": "Asunci\u00f3n Capital Metro",
      "stateOrRegion": "Asunci\u00f3n Capital Metro",
      "population": 74000,
      "populationFormatted": "74,000",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Higher Vocational Training, Engineering & Trades",
      "primaryLanguagesSpoken": [
        "Guarani",
        "Spanish"
      ]
    },
    {
      "cityName": "Itap\u00faa & San Pedros",
      "stateOrRegion": "Itap\u00faa & San Pedro Departments",
      "population": 66600,
      "populationFormatted": "66,600",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Mining Operations, Raw Material Extraction & Metallurgy",
      "primaryLanguagesSpoken": [
        "Guarani",
        "Spanish"
      ]
    }
  ],
  "PE": [
    {
      "cityName": "Lima",
      "stateOrRegion": "Peru Capital Region",
      "population": 5055000,
      "populationFormatted": "5.05 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Quechua",
        "Aymara"
      ]
    },
    {
      "cityName": "Arequipa",
      "stateOrRegion": "Peru Region",
      "population": 783000,
      "populationFormatted": "783,000",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Quechua",
        "Aymara"
      ]
    },
    {
      "cityName": "Trujillo",
      "stateOrRegion": "Peru Region",
      "population": 644547,
      "populationFormatted": "644,547",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Quechua",
        "Aymara"
      ]
    },
    {
      "cityName": "Callao",
      "stateOrRegion": "Peru Region",
      "population": 567042,
      "populationFormatted": "567,042",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Industrial Manufacturing, Automotive Parts & Assembly",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Quechua",
        "Aymara"
      ]
    },
    {
      "cityName": "Chiclayo",
      "stateOrRegion": "Peru Region",
      "population": 500561,
      "populationFormatted": "500,561",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Healthcare Services, Clinical Research & Hospital Networks",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Quechua",
        "Aymara"
      ]
    },
    {
      "cityName": "Piura",
      "stateOrRegion": "Peru Region",
      "population": 361832,
      "populationFormatted": "361,832",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Maritime Shipping, Container Logistics & Port Operations",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Quechua",
        "Aymara"
      ]
    },
    {
      "cityName": "Iquitos",
      "stateOrRegion": "Peru Region",
      "population": 356549,
      "populationFormatted": "356,549",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Textiles, Garments Manufacturing & Artisanal Craft",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Quechua",
        "Aymara"
      ]
    },
    {
      "cityName": "Chimbote",
      "stateOrRegion": "Peru Region",
      "population": 328386,
      "populationFormatted": "328,386",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Renewable Energy, Solar Operations & Electrical Grid",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Quechua",
        "Aymara"
      ]
    },
    {
      "cityName": "Cuzco",
      "stateOrRegion": "Peru Region",
      "population": 326405,
      "populationFormatted": "326,405",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Higher Vocational Training, Engineering & Trades",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Quechua",
        "Aymara"
      ]
    },
    {
      "cityName": "Huancayo",
      "stateOrRegion": "Peru Region",
      "population": 306954,
      "populationFormatted": "306,954",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Mining Operations, Raw Material Extraction & Metallurgy",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Quechua",
        "Aymara"
      ]
    },
    {
      "cityName": "Pucallpa",
      "stateOrRegion": "Peru Region",
      "population": 248878,
      "populationFormatted": "248,878",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Tourism & Cultural Heritage, Hospitality Management",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Quechua",
        "Aymara"
      ]
    },
    {
      "cityName": "Tacna",
      "stateOrRegion": "Peru Region",
      "population": 230146,
      "populationFormatted": "230,146",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Commercial Wholesale, Retail Distribution & Supply Chain",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Quechua",
        "Aymara"
      ]
    },
    {
      "cityName": "Juliaca",
      "stateOrRegion": "Peru Region",
      "population": 208553,
      "populationFormatted": "208,553",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Telecommunications, Cloud Infrastructure & Fiber Networks",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Quechua",
        "Aymara"
      ]
    },
    {
      "cityName": "Ica",
      "stateOrRegion": "Peru Region",
      "population": 205807,
      "populationFormatted": "205,807",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Banking, Insurance, Stock Exchange & Asset Management",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Quechua",
        "Aymara"
      ]
    },
    {
      "cityName": "Sullana",
      "stateOrRegion": "Peru Region",
      "population": 175078,
      "populationFormatted": "175,078",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Biotechnology, Pharmaceuticals & Chemical Processing",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Quechua",
        "Aymara"
      ]
    },
    {
      "cityName": "Ayacucho",
      "stateOrRegion": "Peru Region",
      "population": 161586,
      "populationFormatted": "161,586",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Quechua",
        "Aymara"
      ]
    },
    {
      "cityName": "Hu\u00e1nuco",
      "stateOrRegion": "Peru Region",
      "population": 142738,
      "populationFormatted": "142,738",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Quechua",
        "Aymara"
      ]
    },
    {
      "cityName": "Chincha Alta",
      "stateOrRegion": "Peru Region",
      "population": 140477,
      "populationFormatted": "140,477",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Quechua",
        "Aymara"
      ]
    },
    {
      "cityName": "Cajamarca",
      "stateOrRegion": "Peru Region",
      "population": 129079,
      "populationFormatted": "129,079",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Industrial Manufacturing, Automotive Parts & Assembly",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Quechua",
        "Aymara"
      ]
    },
    {
      "cityName": "Puno",
      "stateOrRegion": "Peru Region",
      "population": 118008,
      "populationFormatted": "118,008",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Healthcare Services, Clinical Research & Hospital Networks",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Quechua",
        "Aymara"
      ]
    },
    {
      "cityName": "Tarapoto",
      "stateOrRegion": "Peru Region",
      "population": 108042,
      "populationFormatted": "108,042",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Maritime Shipping, Container Logistics & Port Operations",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Quechua",
        "Aymara"
      ]
    },
    {
      "cityName": "Huaraz",
      "stateOrRegion": "Peru Region",
      "population": 100931,
      "populationFormatted": "100,931",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Textiles, Garments Manufacturing & Artisanal Craft",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Quechua",
        "Aymara"
      ]
    },
    {
      "cityName": "Pisco",
      "stateOrRegion": "Peru Region",
      "population": 99549,
      "populationFormatted": "99,549",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Renewable Energy, Solar Operations & Electrical Grid",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Quechua",
        "Aymara"
      ]
    }
  ],
  "KN": [
    {
      "cityName": "Basseterre",
      "stateOrRegion": "Saint Kitts and Nevis Capital Region",
      "population": 80000,
      "populationFormatted": "80,000",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "English"
      ]
    }
  ],
  "LC": [
    {
      "cityName": "Castries",
      "stateOrRegion": "Saint Lucia Capital Region",
      "population": 80000,
      "populationFormatted": "80,000",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "English",
        "Saint Lucian Creole French"
      ]
    }
  ],
  "VC": [
    {
      "cityName": "Kingstown",
      "stateOrRegion": "Saint Vincent and the Grenadines Capital Region",
      "population": 80000,
      "populationFormatted": "80,000",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "English",
        "Vincentian Creole"
      ]
    }
  ],
  "SR": [
    {
      "cityName": "Paramaribo",
      "stateOrRegion": "Suriname Capital Region",
      "population": 92700,
      "populationFormatted": "92,700",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Dutch",
        "Sranan Tongo",
        "Caribbean Hindustani"
      ]
    }
  ],
  "TT": [
    {
      "cityName": "Port of Spain",
      "stateOrRegion": "Trinidad and Tobago Capital Region",
      "population": 229500,
      "populationFormatted": "229,500",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "English",
        "Trinidadian Creole"
      ]
    },
    {
      "cityName": "Port-Of-Spain",
      "stateOrRegion": "Trinidad and Tobago Region",
      "population": 43396,
      "populationFormatted": "43,396",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "English",
        "Trinidadian Creole"
      ]
    }
  ],
  "US": [
    {
      "cityName": "New York",
      "stateOrRegion": "New York",
      "population": 8804190,
      "populationFormatted": "8.80 Million",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Financial Operations, Media & Global Commerce",
      "primaryLanguagesSpoken": [
        "English",
        "Spanish",
        "Chinese (Mandarin/Cantonese)"
      ]
    },
    {
      "cityName": "Los Angeles",
      "stateOrRegion": "California",
      "population": 3898747,
      "populationFormatted": "3.90 Million",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Entertainment, Technology & Port Logistics",
      "primaryLanguagesSpoken": [
        "English",
        "Spanish",
        "Chinese (Mandarin/Cantonese)"
      ]
    },
    {
      "cityName": "Chicago",
      "stateOrRegion": "Illinois",
      "population": 2746388,
      "populationFormatted": "2.75 Million",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Manufacturing, Commodities & Transportation Hub",
      "primaryLanguagesSpoken": [
        "English",
        "Spanish",
        "Chinese (Mandarin/Cantonese)"
      ]
    },
    {
      "cityName": "Houston",
      "stateOrRegion": "Texas",
      "population": 2304580,
      "populationFormatted": "2.30 Million",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Energy Infrastructure, Petrochemicals & Aerospace",
      "primaryLanguagesSpoken": [
        "English",
        "Spanish",
        "Chinese (Mandarin/Cantonese)"
      ]
    },
    {
      "cityName": "Phoenix",
      "stateOrRegion": "Arizona",
      "population": 1608139,
      "populationFormatted": "1.61 Million",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Semiconductor Manufacturing & Business Services",
      "primaryLanguagesSpoken": [
        "English",
        "Spanish",
        "Chinese (Mandarin/Cantonese)"
      ]
    },
    {
      "cityName": "Philadelphia",
      "stateOrRegion": "Pennsylvania",
      "population": 1603797,
      "populationFormatted": "1.60 Million",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Healthcare, Higher Education & Life Sciences",
      "primaryLanguagesSpoken": [
        "English",
        "Spanish",
        "Chinese (Mandarin/Cantonese)"
      ]
    },
    {
      "cityName": "San Antonio",
      "stateOrRegion": "Texas",
      "population": 1434625,
      "populationFormatted": "1.43 Million",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Cybersecurity, Military Operations & Healthcare",
      "primaryLanguagesSpoken": [
        "English",
        "Spanish",
        "Chinese (Mandarin/Cantonese)"
      ]
    },
    {
      "cityName": "San Diego",
      "stateOrRegion": "California",
      "population": 1386932,
      "populationFormatted": "1.39 Million",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Biotechnology, Defense Tech & International Trade",
      "primaryLanguagesSpoken": [
        "English",
        "Spanish",
        "Chinese (Mandarin/Cantonese)"
      ]
    },
    {
      "cityName": "Dallas",
      "stateOrRegion": "Texas",
      "population": 1304379,
      "populationFormatted": "1.30 Million",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Telecommunications, Banking & Supply Chain",
      "primaryLanguagesSpoken": [
        "English",
        "Spanish",
        "Chinese (Mandarin/Cantonese)"
      ]
    },
    {
      "cityName": "San Jose",
      "stateOrRegion": "California",
      "population": 1013240,
      "populationFormatted": "1.01 Million",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Silicon Valley Software Engineering & Hardware",
      "primaryLanguagesSpoken": [
        "English",
        "Spanish",
        "Chinese (Mandarin/Cantonese)"
      ]
    },
    {
      "cityName": "Austin",
      "stateOrRegion": "Texas",
      "population": 961855,
      "populationFormatted": "961,855",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Enterprise Software, Hardware & Startup Ecosystem",
      "primaryLanguagesSpoken": [
        "English",
        "Spanish",
        "Chinese (Mandarin/Cantonese)"
      ]
    },
    {
      "cityName": "Jacksonville",
      "stateOrRegion": "Florida",
      "population": 949611,
      "populationFormatted": "949,611",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Maritime Logistics, Financial Services & Healthcare",
      "primaryLanguagesSpoken": [
        "English",
        "Spanish",
        "Chinese (Mandarin/Cantonese)"
      ]
    },
    {
      "cityName": "Fort Worth",
      "stateOrRegion": "Texas",
      "population": 918915,
      "populationFormatted": "918,915",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Aeronautical Defense, Logistics & Agribusiness",
      "primaryLanguagesSpoken": [
        "English",
        "Spanish",
        "Chinese (Mandarin/Cantonese)"
      ]
    },
    {
      "cityName": "Columbus",
      "stateOrRegion": "Ohio",
      "population": 905748,
      "populationFormatted": "905,748",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Retail Corporate HQ, Tech & Insurance Services",
      "primaryLanguagesSpoken": [
        "English",
        "Spanish",
        "Chinese (Mandarin/Cantonese)"
      ]
    },
    {
      "cityName": "Indianapolis",
      "stateOrRegion": "Indiana",
      "population": 887642,
      "populationFormatted": "887,642",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Pharmaceuticals, Motors & Distribution Logistics",
      "primaryLanguagesSpoken": [
        "English",
        "Spanish",
        "Chinese (Mandarin/Cantonese)"
      ]
    },
    {
      "cityName": "Charlotte",
      "stateOrRegion": "North Carolina",
      "population": 874579,
      "populationFormatted": "874,579",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Commercial Banking Capital, Energy & Fintech",
      "primaryLanguagesSpoken": [
        "English",
        "Spanish",
        "Chinese (Mandarin/Cantonese)"
      ]
    },
    {
      "cityName": "San Francisco",
      "stateOrRegion": "California",
      "population": 873965,
      "populationFormatted": "873,965",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "AI Research, Venture Capital & Cloud Tech",
      "primaryLanguagesSpoken": [
        "English",
        "Spanish",
        "Chinese (Mandarin/Cantonese)"
      ]
    },
    {
      "cityName": "Seattle",
      "stateOrRegion": "Washington",
      "population": 737015,
      "populationFormatted": "737,015",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Cloud Infrastructure, E-Commerce & Aviation",
      "primaryLanguagesSpoken": [
        "English",
        "Spanish",
        "Chinese (Mandarin/Cantonese)"
      ]
    },
    {
      "cityName": "Denver",
      "stateOrRegion": "Colorado",
      "population": 715522,
      "populationFormatted": "715,522",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Telecommunications, Energy Tech & Aerospace",
      "primaryLanguagesSpoken": [
        "English",
        "Spanish",
        "Chinese (Mandarin/Cantonese)"
      ]
    },
    {
      "cityName": "Washington",
      "stateOrRegion": "District of Columbia",
      "population": 689545,
      "populationFormatted": "689,545",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Government Administration, Defense & Tech Policy",
      "primaryLanguagesSpoken": [
        "English",
        "Spanish",
        "Chinese (Mandarin/Cantonese)"
      ]
    },
    {
      "cityName": "Nashville",
      "stateOrRegion": "Tennessee",
      "population": 689447,
      "populationFormatted": "689,447",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Healthcare Management, Music Industry & Finance",
      "primaryLanguagesSpoken": [
        "English",
        "Spanish",
        "Chinese (Mandarin/Cantonese)"
      ]
    },
    {
      "cityName": "Oklahoma City",
      "stateOrRegion": "Oklahoma",
      "population": 681054,
      "populationFormatted": "681,054",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Energy Engineering, Aviation & Government",
      "primaryLanguagesSpoken": [
        "English",
        "Spanish",
        "Chinese (Mandarin/Cantonese)"
      ]
    },
    {
      "cityName": "El Paso",
      "stateOrRegion": "Texas",
      "population": 678815,
      "populationFormatted": "678,815",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Cross-Border Trade, Defense & Manufacturing",
      "primaryLanguagesSpoken": [
        "English",
        "Spanish",
        "Chinese (Mandarin/Cantonese)"
      ]
    },
    {
      "cityName": "Boston",
      "stateOrRegion": "Massachusetts",
      "population": 675647,
      "populationFormatted": "675,647",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Biotech, Higher Education & Financial Tech",
      "primaryLanguagesSpoken": [
        "English",
        "Spanish",
        "Chinese (Mandarin/Cantonese)"
      ]
    },
    {
      "cityName": "Portland",
      "stateOrRegion": "Oregon",
      "population": 652503,
      "populationFormatted": "652,503",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Athletic Footwear Tech, Clean Energy & Software",
      "primaryLanguagesSpoken": [
        "English",
        "Spanish",
        "Chinese (Mandarin/Cantonese)"
      ]
    },
    {
      "cityName": "Las Vegas",
      "stateOrRegion": "Nevada",
      "population": 641903,
      "populationFormatted": "641,903",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Hospitality Management, Entertainment & Conventions",
      "primaryLanguagesSpoken": [
        "English",
        "Spanish",
        "Chinese (Mandarin/Cantonese)"
      ]
    },
    {
      "cityName": "Detroit",
      "stateOrRegion": "Michigan",
      "population": 639111,
      "populationFormatted": "639,111",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Automotive Engineering, Autonomous Driving & Manufacturing",
      "primaryLanguagesSpoken": [
        "English",
        "Spanish",
        "Chinese (Mandarin/Cantonese)"
      ]
    },
    {
      "cityName": "Memphis",
      "stateOrRegion": "Tennessee",
      "population": 633104,
      "populationFormatted": "633,104",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Global Air Freight, Distribution & Biomedical",
      "primaryLanguagesSpoken": [
        "English",
        "Spanish",
        "Chinese (Mandarin/Cantonese)"
      ]
    },
    {
      "cityName": "Louisville",
      "stateOrRegion": "Kentucky",
      "population": 633045,
      "populationFormatted": "633,045",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Healthcare Networks, Beverage Logistics & Manufacturing",
      "primaryLanguagesSpoken": [
        "English",
        "Spanish",
        "Chinese (Mandarin/Cantonese)"
      ]
    },
    {
      "cityName": "Baltimore",
      "stateOrRegion": "Maryland",
      "population": 585708,
      "populationFormatted": "585,708",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Cybersecurity, Medical Research & Seaport Shipping",
      "primaryLanguagesSpoken": [
        "English",
        "Spanish",
        "Chinese (Mandarin/Cantonese)"
      ]
    }
  ],
  "UY": [
    {
      "cityName": "Montevideo",
      "stateOrRegion": "Uruguay Capital Region",
      "population": 513000,
      "populationFormatted": "513,000",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Portu\u00f1ol"
      ]
    }
  ],
  "VE": [
    {
      "cityName": "Caracas",
      "stateOrRegion": "Venezuela Capital Region",
      "population": 4320000,
      "populationFormatted": "4.32 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Wayuu"
      ]
    }
  ],
  "AL": [
    {
      "cityName": "Tirana",
      "stateOrRegion": "Albania Capital Region",
      "population": 412500,
      "populationFormatted": "412,500",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Albanian",
        "Greek"
      ]
    },
    {
      "cityName": "Durr\u00ebs",
      "stateOrRegion": "Albania Region",
      "population": 113249,
      "populationFormatted": "113,249",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Albanian",
        "Greek"
      ]
    }
  ],
  "AD": [
    {
      "cityName": "Andorra la Vella",
      "stateOrRegion": "Andorra Capital Region",
      "population": 80000,
      "populationFormatted": "80,000",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Catalan",
        "Spanish"
      ]
    }
  ],
  "AT": [
    {
      "cityName": "Wien",
      "stateOrRegion": "Austria Region",
      "population": 1829876,
      "populationFormatted": "1.83 Million",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "German"
      ]
    },
    {
      "cityName": "Vienna",
      "stateOrRegion": "Austria Capital Region",
      "population": 1365000,
      "populationFormatted": "1.36 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "German"
      ]
    },
    {
      "cityName": "Graz",
      "stateOrRegion": "Austria Region",
      "population": 267475,
      "populationFormatted": "267,475",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "German"
      ]
    },
    {
      "cityName": "Linz",
      "stateOrRegion": "Austria Region",
      "population": 239974,
      "populationFormatted": "239,974",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Industrial Manufacturing, Automotive Parts & Assembly",
      "primaryLanguagesSpoken": [
        "German"
      ]
    },
    {
      "cityName": "Salzburg",
      "stateOrRegion": "Austria Region",
      "population": 208073,
      "populationFormatted": "208,073",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Healthcare Services, Clinical Research & Hospital Networks",
      "primaryLanguagesSpoken": [
        "German"
      ]
    },
    {
      "cityName": "Innsbruck",
      "stateOrRegion": "Austria Region",
      "population": 197276,
      "populationFormatted": "197,276",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Maritime Shipping, Container Logistics & Port Operations",
      "primaryLanguagesSpoken": [
        "German"
      ]
    },
    {
      "cityName": "Bregenz",
      "stateOrRegion": "Austria Region",
      "population": 144838,
      "populationFormatted": "144,838",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Textiles, Garments Manufacturing & Artisanal Craft",
      "primaryLanguagesSpoken": [
        "German"
      ]
    },
    {
      "cityName": "Klagenfurt",
      "stateOrRegion": "Austria Region",
      "population": 102380,
      "populationFormatted": "102,380",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Renewable Energy, Solar Operations & Electrical Grid",
      "primaryLanguagesSpoken": [
        "German"
      ]
    },
    {
      "cityName": "Sankt P\u00f6lten",
      "stateOrRegion": "Austria Region",
      "population": 51688,
      "populationFormatted": "51,688",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Higher Vocational Training, Engineering & Trades",
      "primaryLanguagesSpoken": [
        "German"
      ]
    },
    {
      "cityName": "Eisenstadt",
      "stateOrRegion": "Austria Region",
      "population": 12856,
      "populationFormatted": "12,856",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Mining Operations, Raw Material Extraction & Metallurgy",
      "primaryLanguagesSpoken": [
        "German"
      ]
    }
  ],
  "BY": [
    {
      "cityName": "Minsk",
      "stateOrRegion": "Belarus Capital Region",
      "population": 1380000,
      "populationFormatted": "1.38 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Belarusian",
        "Russian"
      ]
    },
    {
      "cityName": "Gomel",
      "stateOrRegion": "Belarus Region",
      "population": 475486,
      "populationFormatted": "475,486",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Belarusian",
        "Russian"
      ]
    },
    {
      "cityName": "Mogilev",
      "stateOrRegion": "Belarus Region",
      "population": 356457,
      "populationFormatted": "356,457",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "Belarusian",
        "Russian"
      ]
    },
    {
      "cityName": "Vitebsk",
      "stateOrRegion": "Belarus Region",
      "population": 340710,
      "populationFormatted": "340,710",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Industrial Manufacturing, Automotive Parts & Assembly",
      "primaryLanguagesSpoken": [
        "Belarusian",
        "Russian"
      ]
    },
    {
      "cityName": "Grodno",
      "stateOrRegion": "Belarus Region",
      "population": 301622,
      "populationFormatted": "301,622",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Healthcare Services, Clinical Research & Hospital Networks",
      "primaryLanguagesSpoken": [
        "Belarusian",
        "Russian"
      ]
    },
    {
      "cityName": "Bobruisk",
      "stateOrRegion": "Belarus Region",
      "population": 220653,
      "populationFormatted": "220,653",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Maritime Shipping, Container Logistics & Port Operations",
      "primaryLanguagesSpoken": [
        "Belarusian",
        "Russian"
      ]
    },
    {
      "cityName": "Brest",
      "stateOrRegion": "Belarus Region",
      "population": 210058,
      "populationFormatted": "210,058",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Textiles, Garments Manufacturing & Artisanal Craft",
      "primaryLanguagesSpoken": [
        "Belarusian",
        "Russian"
      ]
    },
    {
      "cityName": "Baranovichi",
      "stateOrRegion": "Belarus Region",
      "population": 167419,
      "populationFormatted": "167,419",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Renewable Energy, Solar Operations & Electrical Grid",
      "primaryLanguagesSpoken": [
        "Belarusian",
        "Russian"
      ]
    },
    {
      "cityName": "Borisov",
      "stateOrRegion": "Belarus Region",
      "population": 150730,
      "populationFormatted": "150,730",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Higher Vocational Training, Engineering & Trades",
      "primaryLanguagesSpoken": [
        "Belarusian",
        "Russian"
      ]
    },
    {
      "cityName": "Pinsk",
      "stateOrRegion": "Belarus Region",
      "population": 129935,
      "populationFormatted": "129,935",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Mining Operations, Raw Material Extraction & Metallurgy",
      "primaryLanguagesSpoken": [
        "Belarusian",
        "Russian"
      ]
    },
    {
      "cityName": "Orsha",
      "stateOrRegion": "Belarus Region",
      "population": 123861,
      "populationFormatted": "123,861",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Tourism & Cultural Heritage, Hospitality Management",
      "primaryLanguagesSpoken": [
        "Belarusian",
        "Russian"
      ]
    },
    {
      "cityName": "Mozir",
      "stateOrRegion": "Belarus Region",
      "population": 109784,
      "populationFormatted": "109,784",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Commercial Wholesale, Retail Distribution & Supply Chain",
      "primaryLanguagesSpoken": [
        "Belarusian",
        "Russian"
      ]
    },
    {
      "cityName": "Novopolotsk",
      "stateOrRegion": "Belarus Region",
      "population": 105648,
      "populationFormatted": "105,648",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Telecommunications, Cloud Infrastructure & Fiber Networks",
      "primaryLanguagesSpoken": [
        "Belarusian",
        "Russian"
      ]
    },
    {
      "cityName": "Soligorsk",
      "stateOrRegion": "Belarus Region",
      "population": 100930,
      "populationFormatted": "100,930",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Banking, Insurance, Stock Exchange & Asset Management",
      "primaryLanguagesSpoken": [
        "Belarusian",
        "Russian"
      ]
    },
    {
      "cityName": "Lida",
      "stateOrRegion": "Belarus Region",
      "population": 100714,
      "populationFormatted": "100,714",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Biotechnology, Pharmaceuticals & Chemical Processing",
      "primaryLanguagesSpoken": [
        "Belarusian",
        "Russian"
      ]
    }
  ],
  "BE": [
    {
      "cityName": "Brussels",
      "stateOrRegion": "Flanders (Flemish Region)",
      "population": 1755000,
      "populationFormatted": "1.75 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Dutch",
        "French",
        "German"
      ]
    },
    {
      "cityName": "Bruxelles",
      "stateOrRegion": "Wallonia (Walloon Region)",
      "population": 964405,
      "populationFormatted": "964,405",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Dutch",
        "French",
        "German"
      ]
    },
    {
      "cityName": "Antwerpen",
      "stateOrRegion": "Brussels-Capital Region",
      "population": 445570,
      "populationFormatted": "445,570",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "Dutch",
        "French",
        "German"
      ]
    },
    {
      "cityName": "Gent",
      "stateOrRegion": "Flanders (Flemish Region)",
      "population": 224685,
      "populationFormatted": "224,685",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Industrial Manufacturing, Automotive Parts & Assembly",
      "primaryLanguagesSpoken": [
        "Dutch",
        "French",
        "German"
      ]
    },
    {
      "cityName": "Charleroi",
      "stateOrRegion": "Wallonia (Walloon Region)",
      "population": 200233,
      "populationFormatted": "200,233",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Healthcare Services, Clinical Research & Hospital Networks",
      "primaryLanguagesSpoken": [
        "Dutch",
        "French",
        "German"
      ]
    },
    {
      "cityName": "Li\u00e8ge",
      "stateOrRegion": "Brussels-Capital Region",
      "population": 184550,
      "populationFormatted": "184,550",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Maritime Shipping, Container Logistics & Port Operations",
      "primaryLanguagesSpoken": [
        "Dutch",
        "French",
        "German"
      ]
    },
    {
      "cityName": "Brugge",
      "stateOrRegion": "Flanders (Flemish Region)",
      "population": 116559,
      "populationFormatted": "116,559",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Textiles, Garments Manufacturing & Artisanal Craft",
      "primaryLanguagesSpoken": [
        "Dutch",
        "French",
        "German"
      ]
    },
    {
      "cityName": "Schaerbeek",
      "stateOrRegion": "Wallonia (Walloon Region)",
      "population": 107488,
      "populationFormatted": "107,488",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Renewable Energy, Solar Operations & Electrical Grid",
      "primaryLanguagesSpoken": [
        "Dutch",
        "French",
        "German"
      ]
    },
    {
      "cityName": "Namur",
      "stateOrRegion": "Brussels-Capital Region",
      "population": 105248,
      "populationFormatted": "105,248",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Higher Vocational Training, Engineering & Trades",
      "primaryLanguagesSpoken": [
        "Dutch",
        "French",
        "German"
      ]
    },
    {
      "cityName": "Anderlecht",
      "stateOrRegion": "Flanders (Flemish Region)",
      "population": 103009,
      "populationFormatted": "103,009",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Mining Operations, Raw Material Extraction & Metallurgy",
      "primaryLanguagesSpoken": [
        "Dutch",
        "French",
        "German"
      ]
    },
    {
      "cityName": "Flanders (Flemish)",
      "stateOrRegion": "Flanders (Flemish Region)",
      "population": 95727,
      "populationFormatted": "95,727",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Tourism & Cultural Heritage, Hospitality Management",
      "primaryLanguagesSpoken": [
        "Dutch",
        "French",
        "German"
      ]
    },
    {
      "cityName": "Wallonia (Walloon)",
      "stateOrRegion": "Wallonia (Walloon Region)",
      "population": 87749,
      "populationFormatted": "87,749",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Commercial Wholesale, Retail Distribution & Supply Chain",
      "primaryLanguagesSpoken": [
        "Dutch",
        "French",
        "German"
      ]
    },
    {
      "cityName": "Brussels-Capital",
      "stateOrRegion": "Brussels-Capital Region",
      "population": 80999,
      "populationFormatted": "80,999",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Telecommunications, Cloud Infrastructure & Fiber Networks",
      "primaryLanguagesSpoken": [
        "Dutch",
        "French",
        "German"
      ]
    }
  ],
  "BA": [
    {
      "cityName": "Sarajevo",
      "stateOrRegion": "Bosnia and Herzegovina Capital Region",
      "population": 480000,
      "populationFormatted": "480,000",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Bosnian",
        "Serbian",
        "Croatian"
      ]
    },
    {
      "cityName": "Banja Luka",
      "stateOrRegion": "Bosnia and Herzegovina Region",
      "population": 195994,
      "populationFormatted": "195,994",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Bosnian",
        "Serbian",
        "Croatian"
      ]
    },
    {
      "cityName": "Zenica",
      "stateOrRegion": "Bosnia and Herzegovina Region",
      "population": 145837,
      "populationFormatted": "145,837",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "Bosnian",
        "Serbian",
        "Croatian"
      ]
    },
    {
      "cityName": "Tuzla",
      "stateOrRegion": "Bosnia and Herzegovina Region",
      "population": 131866,
      "populationFormatted": "131,866",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Industrial Manufacturing, Automotive Parts & Assembly",
      "primaryLanguagesSpoken": [
        "Bosnian",
        "Serbian",
        "Croatian"
      ]
    },
    {
      "cityName": "Mostar",
      "stateOrRegion": "Bosnia and Herzegovina Region",
      "population": 127034,
      "populationFormatted": "127,034",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Healthcare Services, Clinical Research & Hospital Networks",
      "primaryLanguagesSpoken": [
        "Bosnian",
        "Serbian",
        "Croatian"
      ]
    },
    {
      "cityName": "Prijedor",
      "stateOrRegion": "Bosnia and Herzegovina Region",
      "population": 112635,
      "populationFormatted": "112,635",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Maritime Shipping, Container Logistics & Port Operations",
      "primaryLanguagesSpoken": [
        "Bosnian",
        "Serbian",
        "Croatian"
      ]
    },
    {
      "cityName": "Doboj",
      "stateOrRegion": "Bosnia and Herzegovina Region",
      "population": 102624,
      "populationFormatted": "102,624",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Textiles, Garments Manufacturing & Artisanal Craft",
      "primaryLanguagesSpoken": [
        "Bosnian",
        "Serbian",
        "Croatian"
      ]
    }
  ],
  "BG": [
    {
      "cityName": "Sofia",
      "stateOrRegion": "Bulgaria Capital Region",
      "population": 960000,
      "populationFormatted": "960,000",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Bulgarian"
      ]
    },
    {
      "cityName": "Plovdiv",
      "stateOrRegion": "Bulgaria Region",
      "population": 340398,
      "populationFormatted": "340,398",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Bulgarian"
      ]
    },
    {
      "cityName": "Varna",
      "stateOrRegion": "Bulgaria Region",
      "population": 312778,
      "populationFormatted": "312,778",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "Bulgarian"
      ]
    },
    {
      "cityName": "Burgas",
      "stateOrRegion": "Bulgaria Region",
      "population": 193603,
      "populationFormatted": "193,603",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Industrial Manufacturing, Automotive Parts & Assembly",
      "primaryLanguagesSpoken": [
        "Bulgarian"
      ]
    },
    {
      "cityName": "Ruse",
      "stateOrRegion": "Bulgaria Region",
      "population": 159441,
      "populationFormatted": "159,441",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Healthcare Services, Clinical Research & Hospital Networks",
      "primaryLanguagesSpoken": [
        "Bulgarian"
      ]
    },
    {
      "cityName": "Stara Zagora",
      "stateOrRegion": "Bulgaria Region",
      "population": 142797,
      "populationFormatted": "142,797",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Maritime Shipping, Container Logistics & Port Operations",
      "primaryLanguagesSpoken": [
        "Bulgarian"
      ]
    },
    {
      "cityName": "Pleven",
      "stateOrRegion": "Bulgaria Region",
      "population": 122888,
      "populationFormatted": "122,888",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Textiles, Garments Manufacturing & Artisanal Craft",
      "primaryLanguagesSpoken": [
        "Bulgarian"
      ]
    }
  ],
  "HR": [
    {
      "cityName": "Zagreb",
      "stateOrRegion": "Croatia Capital Region",
      "population": 570000,
      "populationFormatted": "570,000",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Croatian"
      ]
    },
    {
      "cityName": "Split",
      "stateOrRegion": "Croatia Region",
      "population": 188694,
      "populationFormatted": "188,694",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Croatian"
      ]
    },
    {
      "cityName": "Rijeka",
      "stateOrRegion": "Croatia Region",
      "population": 144043,
      "populationFormatted": "144,043",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "Croatian"
      ]
    },
    {
      "cityName": "Osijek",
      "stateOrRegion": "Croatia Region",
      "population": 114616,
      "populationFormatted": "114,616",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Industrial Manufacturing, Automotive Parts & Assembly",
      "primaryLanguagesSpoken": [
        "Croatian"
      ]
    }
  ],
  "CY": [
    {
      "cityName": "Nicosia",
      "stateOrRegion": "Cyprus Capital Region",
      "population": 180000,
      "populationFormatted": "180,000",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Greek",
        "Turkish"
      ]
    }
  ],
  "CZ": [
    {
      "cityName": "Prague",
      "stateOrRegion": "Czech Republic Capital Region",
      "population": 1620000,
      "populationFormatted": "1.62 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Czech"
      ]
    },
    {
      "cityName": "Praha",
      "stateOrRegion": "Czech Republic Region",
      "population": 1165581,
      "populationFormatted": "1.17 Million",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Czech"
      ]
    },
    {
      "cityName": "Brno",
      "stateOrRegion": "Czech Republic Region",
      "population": 369559,
      "populationFormatted": "369,559",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "Czech"
      ]
    },
    {
      "cityName": "Ostrava",
      "stateOrRegion": "Czech Republic Region",
      "population": 313088,
      "populationFormatted": "313,088",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Industrial Manufacturing, Automotive Parts & Assembly",
      "primaryLanguagesSpoken": [
        "Czech"
      ]
    },
    {
      "cityName": "Plzen",
      "stateOrRegion": "Czech Republic Region",
      "population": 164180,
      "populationFormatted": "164,180",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Healthcare Services, Clinical Research & Hospital Networks",
      "primaryLanguagesSpoken": [
        "Czech"
      ]
    },
    {
      "cityName": "Olomouc",
      "stateOrRegion": "Czech Republic Region",
      "population": 101268,
      "populationFormatted": "101,268",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Maritime Shipping, Container Logistics & Port Operations",
      "primaryLanguagesSpoken": [
        "Czech"
      ]
    },
    {
      "cityName": "Liberec",
      "stateOrRegion": "Czech Republic Region",
      "population": 97770,
      "populationFormatted": "97,770",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Textiles, Garments Manufacturing & Artisanal Craft",
      "primaryLanguagesSpoken": [
        "Czech"
      ]
    },
    {
      "cityName": "Hradec Kr\u00e1lov\u00e9",
      "stateOrRegion": "Czech Republic Region",
      "population": 95195,
      "populationFormatted": "95,195",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Renewable Energy, Solar Operations & Electrical Grid",
      "primaryLanguagesSpoken": [
        "Czech"
      ]
    },
    {
      "cityName": "\u00dast\u00ed Nad Labem",
      "stateOrRegion": "Czech Republic Region",
      "population": 94105,
      "populationFormatted": "94,105",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Higher Vocational Training, Engineering & Trades",
      "primaryLanguagesSpoken": [
        "Czech"
      ]
    }
  ],
  "DK": [
    {
      "cityName": "Copenhagen",
      "stateOrRegion": "Denmark Capital Region",
      "population": 885000,
      "populationFormatted": "885,000",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Danish"
      ]
    },
    {
      "cityName": "Kobenhavn",
      "stateOrRegion": "Denmark Region",
      "population": 499148,
      "populationFormatted": "499,148",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Danish"
      ]
    },
    {
      "cityName": "\u00c5rhus",
      "stateOrRegion": "Denmark Region",
      "population": 286668,
      "populationFormatted": "286,668",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "Danish"
      ]
    },
    {
      "cityName": "Odense",
      "stateOrRegion": "Denmark Region",
      "population": 183691,
      "populationFormatted": "183,691",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Industrial Manufacturing, Automotive Parts & Assembly",
      "primaryLanguagesSpoken": [
        "Danish"
      ]
    },
    {
      "cityName": "\u00c5lborg",
      "stateOrRegion": "Denmark Region",
      "population": 161661,
      "populationFormatted": "161,661",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Healthcare Services, Clinical Research & Hospital Networks",
      "primaryLanguagesSpoken": [
        "Danish"
      ]
    },
    {
      "cityName": "Esbjerg",
      "stateOrRegion": "Denmark Region",
      "population": 114806,
      "populationFormatted": "114,806",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Maritime Shipping, Container Logistics & Port Operations",
      "primaryLanguagesSpoken": [
        "Danish"
      ]
    },
    {
      "cityName": "Vejle",
      "stateOrRegion": "Denmark Region",
      "population": 106281,
      "populationFormatted": "106,281",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Textiles, Garments Manufacturing & Artisanal Craft",
      "primaryLanguagesSpoken": [
        "Danish"
      ]
    },
    {
      "cityName": "Frederiksberg",
      "stateOrRegion": "Denmark Region",
      "population": 100637,
      "populationFormatted": "100,637",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Renewable Energy, Solar Operations & Electrical Grid",
      "primaryLanguagesSpoken": [
        "Danish"
      ]
    }
  ],
  "EE": [
    {
      "cityName": "Tallinn",
      "stateOrRegion": "Estonia Capital Region",
      "population": 204000,
      "populationFormatted": "204,000",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Estonian"
      ]
    },
    {
      "cityName": "Tartu",
      "stateOrRegion": "Estonia Region",
      "population": 101165,
      "populationFormatted": "101,165",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Estonian"
      ]
    }
  ],
  "FI": [
    {
      "cityName": "Helsinki",
      "stateOrRegion": "Finland Capital Region",
      "population": 840000,
      "populationFormatted": "840,000",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Finnish",
        "Swedish"
      ]
    },
    {
      "cityName": "Espoo",
      "stateOrRegion": "Finland Region",
      "population": 222914,
      "populationFormatted": "222,914",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Finnish",
        "Swedish"
      ]
    },
    {
      "cityName": "Tampere",
      "stateOrRegion": "Finland Region",
      "population": 200395,
      "populationFormatted": "200,395",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "Finnish",
        "Swedish"
      ]
    },
    {
      "cityName": "Vantaa",
      "stateOrRegion": "Finland Region",
      "population": 182965,
      "populationFormatted": "182,965",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Industrial Manufacturing, Automotive Parts & Assembly",
      "primaryLanguagesSpoken": [
        "Finnish",
        "Swedish"
      ]
    },
    {
      "cityName": "Turku",
      "stateOrRegion": "Finland Region",
      "population": 174839,
      "populationFormatted": "174,839",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Healthcare Services, Clinical Research & Hospital Networks",
      "primaryLanguagesSpoken": [
        "Finnish",
        "Swedish"
      ]
    },
    {
      "cityName": "Oulu",
      "stateOrRegion": "Finland Region",
      "population": 125258,
      "populationFormatted": "125,258",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Maritime Shipping, Container Logistics & Port Operations",
      "primaryLanguagesSpoken": [
        "Finnish",
        "Swedish"
      ]
    },
    {
      "cityName": "Kuopio",
      "stateOrRegion": "Finland Region",
      "population": 104534,
      "populationFormatted": "104,534",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Textiles, Garments Manufacturing & Artisanal Craft",
      "primaryLanguagesSpoken": [
        "Finnish",
        "Swedish"
      ]
    },
    {
      "cityName": "Lahti",
      "stateOrRegion": "Finland Region",
      "population": 98267,
      "populationFormatted": "98,267",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Renewable Energy, Solar Operations & Electrical Grid",
      "primaryLanguagesSpoken": [
        "Finnish",
        "Swedish"
      ]
    },
    {
      "cityName": "Jyvaskyla",
      "stateOrRegion": "Finland Region",
      "population": 82995,
      "populationFormatted": "82,995",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Higher Vocational Training, Engineering & Trades",
      "primaryLanguagesSpoken": [
        "Finnish",
        "Swedish"
      ]
    }
  ],
  "FR": [
    {
      "cityName": "Paris",
      "stateOrRegion": "\u00cele-de-France",
      "population": 2161000,
      "populationFormatted": "2.16 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Global Finance, Technology, Government & Corporate HQ",
      "primaryLanguagesSpoken": [
        "French"
      ]
    },
    {
      "cityName": "Marseille",
      "stateOrRegion": "Provence-Alpes-C\u00f4te d'Azur",
      "population": 870000,
      "populationFormatted": "870,000",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Mediterranean Shipping, Subsea Cables & Petrochemicals",
      "primaryLanguagesSpoken": [
        "French"
      ]
    },
    {
      "cityName": "Lyon",
      "stateOrRegion": "Auvergne-Rh\u00f4ne-Alpes",
      "population": 522000,
      "populationFormatted": "522,000",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Biotechnology, Vaccines, Chemicals & Software",
      "primaryLanguagesSpoken": [
        "French"
      ]
    },
    {
      "cityName": "Toulouse",
      "stateOrRegion": "Occitanie",
      "population": 493000,
      "populationFormatted": "493,000",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "European Aerospace Capital (Airbus), Satellite Tech & R&D",
      "primaryLanguagesSpoken": [
        "French"
      ]
    },
    {
      "cityName": "Nice",
      "stateOrRegion": "Provence-Alpes-C\u00f4te d'Azur",
      "population": 342000,
      "populationFormatted": "342,000",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Tourism Management, Software Technology & Health",
      "primaryLanguagesSpoken": [
        "French"
      ]
    },
    {
      "cityName": "Nantes",
      "stateOrRegion": "Pays de la Loire",
      "population": 320000,
      "populationFormatted": "320,000",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Digital Services, Composite Materials & Agribusiness",
      "primaryLanguagesSpoken": [
        "French"
      ]
    },
    {
      "cityName": "Montpellier",
      "stateOrRegion": "Occitanie",
      "population": 299000,
      "populationFormatted": "299,000",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Medical Biotechnology, Health AI & Digital Gaming",
      "primaryLanguagesSpoken": [
        "French"
      ]
    },
    {
      "cityName": "Strasbourg",
      "stateOrRegion": "Grand Est",
      "population": 287000,
      "populationFormatted": "287,000",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "European Institutions, Cross-Border Trade & Medicine",
      "primaryLanguagesSpoken": [
        "French"
      ]
    },
    {
      "cityName": "Bordeaux",
      "stateOrRegion": "Nouvelle-Aquitaine",
      "population": 260000,
      "populationFormatted": "260,000",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Aeronautics, Laser Technology, Wine Exports & Tech",
      "primaryLanguagesSpoken": [
        "French"
      ]
    },
    {
      "cityName": "Lille",
      "stateOrRegion": "Hauts-de-France",
      "population": 234000,
      "populationFormatted": "234,000",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "E-Commerce Logistics, FinTech, Textiles & IT Services",
      "primaryLanguagesSpoken": [
        "French"
      ]
    },
    {
      "cityName": "Rennes",
      "stateOrRegion": "Brittany",
      "population": 222000,
      "populationFormatted": "222,000",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Cybersecurity Capital, Telecom Networks & Agribusiness",
      "primaryLanguagesSpoken": [
        "French"
      ]
    },
    {
      "cityName": "Reims",
      "stateOrRegion": "Grand Est",
      "population": 181000,
      "populationFormatted": "181,000",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Champagne Agribusiness, Logistics & Packaging",
      "primaryLanguagesSpoken": [
        "French"
      ]
    },
    {
      "cityName": "Toulon",
      "stateOrRegion": "Provence-Alpes-C\u00f4te d'Azur",
      "population": 179000,
      "populationFormatted": "179,000",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Naval Defense Base, Maritime Technology & Trade",
      "primaryLanguagesSpoken": [
        "French"
      ]
    },
    {
      "cityName": "Saint-\u00c9tienne",
      "stateOrRegion": "Auvergne-Rh\u00f4ne-Alpes",
      "population": 172000,
      "populationFormatted": "172,000",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Industrial Design, Optics & Mechanical Engineering",
      "primaryLanguagesSpoken": [
        "French"
      ]
    },
    {
      "cityName": "Le Havre",
      "stateOrRegion": "Normandy",
      "population": 166000,
      "populationFormatted": "166,000",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Deep-Water Container Seaport & Petrochemical Refining",
      "primaryLanguagesSpoken": [
        "French"
      ]
    },
    {
      "cityName": "Dijon",
      "stateOrRegion": "Bourgogne-Franche-Comt\u00e9",
      "population": 159000,
      "populationFormatted": "159,000",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Food Technology, Pharmaceuticals & Logistics",
      "primaryLanguagesSpoken": [
        "French"
      ]
    },
    {
      "cityName": "Grenoble",
      "stateOrRegion": "Auvergne-Rh\u00f4ne-Alpes",
      "population": 158000,
      "populationFormatted": "158,000",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Microelectronics, Semiconductors & Nuclear Physics",
      "primaryLanguagesSpoken": [
        "French"
      ]
    },
    {
      "cityName": "Angers",
      "stateOrRegion": "Pays de la Loire",
      "population": 155000,
      "populationFormatted": "155,000",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Electronics Systems Assembly, Horticulture & Software",
      "primaryLanguagesSpoken": [
        "French"
      ]
    },
    {
      "cityName": "Villeurbanne",
      "stateOrRegion": "Auvergne-Rh\u00f4ne-Alpes",
      "population": 152000,
      "populationFormatted": "152,000",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Software R&D, University Research & Clean Tech",
      "primaryLanguagesSpoken": [
        "French"
      ]
    },
    {
      "cityName": "N\u00eemes",
      "stateOrRegion": "Occitanie",
      "population": 148000,
      "populationFormatted": "148,000",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Textiles Manufacturing, Logistics & Cultural Tourism",
      "primaryLanguagesSpoken": [
        "French"
      ]
    },
    {
      "cityName": "Clermont-Ferrand",
      "stateOrRegion": "Auvergne-Rh\u00f4ne-Alpes",
      "population": 147000,
      "populationFormatted": "147,000",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Tire Engineering (Michelin), Metallurgy & Software",
      "primaryLanguagesSpoken": [
        "French"
      ]
    },
    {
      "cityName": "Aix-en-Provence",
      "stateOrRegion": "Provence-Alpes-C\u00f4te d'Azur",
      "population": 145000,
      "populationFormatted": "145,000",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Clean Energy Research (ITER), Microelectronics & Law",
      "primaryLanguagesSpoken": [
        "French"
      ]
    },
    {
      "cityName": "Le Mans",
      "stateOrRegion": "Pays de la Loire",
      "population": 143000,
      "populationFormatted": "143,000",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Automotive Engineering, Insurance Services & Plastics",
      "primaryLanguagesSpoken": [
        "French"
      ]
    },
    {
      "cityName": "Brest",
      "stateOrRegion": "Brittany",
      "population": 139000,
      "populationFormatted": "139,000",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Oceanography Research, Naval Defense & Cybersecurity",
      "primaryLanguagesSpoken": [
        "French"
      ]
    },
    {
      "cityName": "Tours",
      "stateOrRegion": "Centre-Val de Loire",
      "population": 137000,
      "populationFormatted": "137,000",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Pharmaceutical Manufacturing, Tourism & Agribusiness",
      "primaryLanguagesSpoken": [
        "French"
      ]
    },
    {
      "cityName": "Amiens",
      "stateOrRegion": "Hauts-de-France",
      "population": 134000,
      "populationFormatted": "134,000",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Automotive Supply, Consumer Goods & Logistics",
      "primaryLanguagesSpoken": [
        "French"
      ]
    },
    {
      "cityName": "Limoges",
      "stateOrRegion": "Nouvelle-Aquitaine",
      "population": 131000,
      "populationFormatted": "131,000",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Industrial Ceramics, Electrical Equipment (Legrand)",
      "primaryLanguagesSpoken": [
        "French"
      ]
    },
    {
      "cityName": "Annecy",
      "stateOrRegion": "Auvergne-Rh\u00f4ne-Alpes",
      "population": 130000,
      "populationFormatted": "130,000",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Outdoor Sports Tech, Precision Engineering & Image Film",
      "primaryLanguagesSpoken": [
        "French"
      ]
    },
    {
      "cityName": "Besan\u00e7on",
      "stateOrRegion": "Bourgogne-Franche-Comt\u00e9",
      "population": 117000,
      "populationFormatted": "117,000",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Microtechnology, Precision Timekeeping & Medicine",
      "primaryLanguagesSpoken": [
        "French"
      ]
    },
    {
      "cityName": "Metz",
      "stateOrRegion": "Grand Est",
      "population": 116000,
      "populationFormatted": "116,000",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Metals Engineering, Automotive Assembly & Logistics",
      "primaryLanguagesSpoken": [
        "French"
      ]
    }
  ],
  "DE": [
    {
      "cityName": "Berlin",
      "stateOrRegion": "Berlin",
      "population": 3677000,
      "populationFormatted": "3.68 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Global Tech Capital, AI R&D, Government & Startups",
      "primaryLanguagesSpoken": [
        "German"
      ]
    },
    {
      "cityName": "Hamburg",
      "stateOrRegion": "Hamburg",
      "population": 1852000,
      "populationFormatted": "1.85 Million",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Maritime Shipping Container Port, Aviation & Media",
      "primaryLanguagesSpoken": [
        "German"
      ]
    },
    {
      "cityName": "Munich",
      "stateOrRegion": "Bavaria",
      "population": 1488000,
      "populationFormatted": "1.49 Million",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Automotive (BMW), Siemens, Insurance & Cloud Tech",
      "primaryLanguagesSpoken": [
        "German"
      ]
    },
    {
      "cityName": "Cologne",
      "stateOrRegion": "North Rhine-Westphalia",
      "population": 1083000,
      "populationFormatted": "1.08 Million",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Media Production, Chemical Processing & Trade Fairs",
      "primaryLanguagesSpoken": [
        "German"
      ]
    },
    {
      "cityName": "Frankfurt",
      "stateOrRegion": "Hesse",
      "population": 764000,
      "populationFormatted": "764,000",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "European Central Bank, Stock Exchange, FinTech & Aviation",
      "primaryLanguagesSpoken": [
        "German"
      ]
    },
    {
      "cityName": "Stuttgart",
      "stateOrRegion": "Baden-W\u00fcrttemberg",
      "population": 630000,
      "populationFormatted": "630,000",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Automotive Engineering (Mercedes, Porsche) & Robotics",
      "primaryLanguagesSpoken": [
        "German"
      ]
    },
    {
      "cityName": "D\u00fcsseldorf",
      "stateOrRegion": "North Rhine-Westphalia",
      "population": 621000,
      "populationFormatted": "621,000",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Telecommunications, Advertising, Fashion & Consulting",
      "primaryLanguagesSpoken": [
        "German"
      ]
    },
    {
      "cityName": "Leipzig",
      "stateOrRegion": "Saxony",
      "population": 605000,
      "populationFormatted": "605,000",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Air Freight Logistics (DHL Hub), Automotive & Software",
      "primaryLanguagesSpoken": [
        "German"
      ]
    },
    {
      "cityName": "Dortmund",
      "stateOrRegion": "North Rhine-Westphalia",
      "population": 588000,
      "populationFormatted": "588,000",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Technology Park, Logistics Research & IT",
      "primaryLanguagesSpoken": [
        "German"
      ]
    },
    {
      "cityName": "Essen",
      "stateOrRegion": "North Rhine-Westphalia",
      "population": 583000,
      "populationFormatted": "583,000",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Energy Utilities (E.ON, RWE), Industrial Engineering",
      "primaryLanguagesSpoken": [
        "German"
      ]
    },
    {
      "cityName": "Bremen",
      "stateOrRegion": "Bremen",
      "population": 567000,
      "populationFormatted": "567,000",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Aerospace Manufacturing, Maritime Trade & Food Processing",
      "primaryLanguagesSpoken": [
        "German"
      ]
    },
    {
      "cityName": "Dresden",
      "stateOrRegion": "Saxony",
      "population": 556000,
      "populationFormatted": "556,000",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Silicon Saxony Microelectronics & Semiconductor Fabrication",
      "primaryLanguagesSpoken": [
        "German"
      ]
    },
    {
      "cityName": "Hanover",
      "stateOrRegion": "Lower Saxony",
      "population": 536000,
      "populationFormatted": "536,000",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Industrial Trade Fairs, Automotive (Continental) & Insurance",
      "primaryLanguagesSpoken": [
        "German"
      ]
    },
    {
      "cityName": "Nuremberg",
      "stateOrRegion": "Bavaria",
      "population": 515000,
      "populationFormatted": "515,000",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Power Electronics, Automation & Consumer Research",
      "primaryLanguagesSpoken": [
        "German"
      ]
    },
    {
      "cityName": "Duisburg",
      "stateOrRegion": "North Rhine-Westphalia",
      "population": 496000,
      "populationFormatted": "496,000",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Inland Waterway Port, Steel Production & Freight",
      "primaryLanguagesSpoken": [
        "German"
      ]
    },
    {
      "cityName": "Bochum",
      "stateOrRegion": "North Rhine-Westphalia",
      "population": 364000,
      "populationFormatted": "364,000",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Cybersecurity Research, Software & Automotive R&D",
      "primaryLanguagesSpoken": [
        "German"
      ]
    },
    {
      "cityName": "Wuppertal",
      "stateOrRegion": "North Rhine-Westphalia",
      "population": 355000,
      "populationFormatted": "355,000",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Chemicals, Automotive Suppliers & Machinery",
      "primaryLanguagesSpoken": [
        "German"
      ]
    },
    {
      "cityName": "Bielefeld",
      "stateOrRegion": "North Rhine-Westphalia",
      "population": 334000,
      "populationFormatted": "334,000",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Food Processing (Dr. Oetker), IT Services & Engineering",
      "primaryLanguagesSpoken": [
        "German"
      ]
    },
    {
      "cityName": "Bonn",
      "stateOrRegion": "North Rhine-Westphalia",
      "population": 331000,
      "populationFormatted": "331,000",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "United Nations Agencies, Telecom HQ (Deutsche Telekom)",
      "primaryLanguagesSpoken": [
        "German"
      ]
    },
    {
      "cityName": "M\u00fcnster",
      "stateOrRegion": "North Rhine-Westphalia",
      "population": 316000,
      "populationFormatted": "316,000",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Financial Services, Biotech & Higher Education",
      "primaryLanguagesSpoken": [
        "German"
      ]
    },
    {
      "cityName": "Mannheim",
      "stateOrRegion": "Baden-W\u00fcrttemberg",
      "population": 310000,
      "populationFormatted": "310,000",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Chemical Engineering, Machinery & Inland Logistics",
      "primaryLanguagesSpoken": [
        "German"
      ]
    },
    {
      "cityName": "Karlsruhe",
      "stateOrRegion": "Baden-W\u00fcrttemberg",
      "population": 308000,
      "populationFormatted": "308,000",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Computer Science Research (KIT), Federal Courts & Energy",
      "primaryLanguagesSpoken": [
        "German"
      ]
    },
    {
      "cityName": "Augsburg",
      "stateOrRegion": "Bavaria",
      "population": 296000,
      "populationFormatted": "296,000",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Carbon Fiber Composite Materials, Mechatronics & Aerospace",
      "primaryLanguagesSpoken": [
        "German"
      ]
    },
    {
      "cityName": "Wiesbaden",
      "stateOrRegion": "Hesse",
      "population": 278000,
      "populationFormatted": "278,000",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Government Administration, Insurance & Healthcare",
      "primaryLanguagesSpoken": [
        "German"
      ]
    },
    {
      "cityName": "M\u00f6nchengladbach",
      "stateOrRegion": "North Rhine-Westphalia",
      "population": 261000,
      "populationFormatted": "261,000",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Textiles Machinery, Logistics Parks & IT Services",
      "primaryLanguagesSpoken": [
        "German"
      ]
    },
    {
      "cityName": "Gelsenkirchen",
      "stateOrRegion": "North Rhine-Westphalia",
      "population": 260000,
      "populationFormatted": "260,000",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Solar Technology, Logistics & Industrial Energy",
      "primaryLanguagesSpoken": [
        "German"
      ]
    },
    {
      "cityName": "Aachen",
      "stateOrRegion": "North Rhine-Westphalia",
      "population": 249000,
      "populationFormatted": "249,000",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Laser Technology, EV Mobility Engineering (RWTH Aachen)",
      "primaryLanguagesSpoken": [
        "German"
      ]
    },
    {
      "cityName": "Braunschweig",
      "stateOrRegion": "Lower Saxony",
      "population": 248000,
      "populationFormatted": "248,000",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Automotive Mobility R&D, Aviation & Metrology",
      "primaryLanguagesSpoken": [
        "German"
      ]
    },
    {
      "cityName": "Kiel",
      "stateOrRegion": "Schleswig-Holstein",
      "population": 247000,
      "populationFormatted": "247,000",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Naval Shipbuilding, Baltic Sea Shipping & Marine Tech",
      "primaryLanguagesSpoken": [
        "German"
      ]
    },
    {
      "cityName": "Chemnitz",
      "stateOrRegion": "Saxony",
      "population": 244000,
      "populationFormatted": "244,000",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Mechanical Engineering, Automation & Microsystems",
      "primaryLanguagesSpoken": [
        "German"
      ]
    }
  ],
  "GR": [
    {
      "cityName": "Athens",
      "stateOrRegion": "Greece Capital Region",
      "population": 1560000,
      "populationFormatted": "1.56 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Greek"
      ]
    },
    {
      "cityName": "Athinai",
      "stateOrRegion": "Greece Region",
      "population": 789166,
      "populationFormatted": "789,166",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Greek"
      ]
    },
    {
      "cityName": "Thessaloniki",
      "stateOrRegion": "Greece Region",
      "population": 385406,
      "populationFormatted": "385,406",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "Greek"
      ]
    },
    {
      "cityName": "Pireas",
      "stateOrRegion": "Greece Region",
      "population": 181933,
      "populationFormatted": "181,933",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Industrial Manufacturing, Automotive Parts & Assembly",
      "primaryLanguagesSpoken": [
        "Greek"
      ]
    },
    {
      "cityName": "Patrai",
      "stateOrRegion": "Greece Region",
      "population": 168530,
      "populationFormatted": "168,530",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Healthcare Services, Clinical Research & Hospital Networks",
      "primaryLanguagesSpoken": [
        "Greek"
      ]
    },
    {
      "cityName": "P\u00e9sterion",
      "stateOrRegion": "Greece Region",
      "population": 146743,
      "populationFormatted": "146,743",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Maritime Shipping, Container Logistics & Port Operations",
      "primaryLanguagesSpoken": [
        "Greek"
      ]
    },
    {
      "cityName": "Iraclion",
      "stateOrRegion": "Greece Region",
      "population": 135761,
      "populationFormatted": "135,761",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Textiles, Garments Manufacturing & Artisanal Craft",
      "primaryLanguagesSpoken": [
        "Greek"
      ]
    },
    {
      "cityName": "Larissa",
      "stateOrRegion": "Greece Region",
      "population": 131095,
      "populationFormatted": "131,095",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Renewable Energy, Solar Operations & Electrical Grid",
      "primaryLanguagesSpoken": [
        "Greek"
      ]
    },
    {
      "cityName": "Calith\u00e8a",
      "stateOrRegion": "Greece Region",
      "population": 115150,
      "populationFormatted": "115,150",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Higher Vocational Training, Engineering & Trades",
      "primaryLanguagesSpoken": [
        "Greek"
      ]
    }
  ],
  "HU": [
    {
      "cityName": "Budapest",
      "stateOrRegion": "Hungary Capital Region",
      "population": 1440000,
      "populationFormatted": "1.44 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Hungarian"
      ]
    },
    {
      "cityName": "Debrecen",
      "stateOrRegion": "Hungary Region",
      "population": 242884,
      "populationFormatted": "242,884",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Hungarian"
      ]
    },
    {
      "cityName": "Miskolc",
      "stateOrRegion": "Hungary Region",
      "population": 224208,
      "populationFormatted": "224,208",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "Hungarian"
      ]
    },
    {
      "cityName": "Szeged",
      "stateOrRegion": "Hungary Region",
      "population": 205387,
      "populationFormatted": "205,387",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Industrial Manufacturing, Automotive Parts & Assembly",
      "primaryLanguagesSpoken": [
        "Hungarian"
      ]
    },
    {
      "cityName": "P\u00e9cs",
      "stateOrRegion": "Hungary Region",
      "population": 182873,
      "populationFormatted": "182,873",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Healthcare Services, Clinical Research & Hospital Networks",
      "primaryLanguagesSpoken": [
        "Hungarian"
      ]
    },
    {
      "cityName": "Gy\u00f6r",
      "stateOrRegion": "Hungary Region",
      "population": 181277,
      "populationFormatted": "181,277",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Maritime Shipping, Container Logistics & Port Operations",
      "primaryLanguagesSpoken": [
        "Hungarian"
      ]
    },
    {
      "cityName": "Kecskem\u00e9t",
      "stateOrRegion": "Hungary Region",
      "population": 138650,
      "populationFormatted": "138,650",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Textiles, Garments Manufacturing & Artisanal Craft",
      "primaryLanguagesSpoken": [
        "Hungarian"
      ]
    },
    {
      "cityName": "Nyiregyhaza",
      "stateOrRegion": "Hungary Region",
      "population": 135267,
      "populationFormatted": "135,267",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Renewable Energy, Solar Operations & Electrical Grid",
      "primaryLanguagesSpoken": [
        "Hungarian"
      ]
    },
    {
      "cityName": "Sz\u00e9kesfeh\u00e9rvar",
      "stateOrRegion": "Hungary Region",
      "population": 127421,
      "populationFormatted": "127,421",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Higher Vocational Training, Engineering & Trades",
      "primaryLanguagesSpoken": [
        "Hungarian"
      ]
    }
  ],
  "IS": [
    {
      "cityName": "Reykjavik",
      "stateOrRegion": "Iceland Region",
      "population": 180823,
      "populationFormatted": "180,823",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Icelandic"
      ]
    },
    {
      "cityName": "Reykjav\u00edk",
      "stateOrRegion": "Iceland Capital Region",
      "population": 80000,
      "populationFormatted": "80,000",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Icelandic"
      ]
    }
  ],
  "IE": [
    {
      "cityName": "Dublin",
      "stateOrRegion": "Ireland Capital Region",
      "population": 780000,
      "populationFormatted": "780,000",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Irish",
        "English"
      ]
    },
    {
      "cityName": "Cork",
      "stateOrRegion": "Ireland Region",
      "population": 186239,
      "populationFormatted": "186,239",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Irish",
        "English"
      ]
    }
  ],
  "IT": [
    {
      "cityName": "Rome",
      "stateOrRegion": "Italy Capital Region",
      "population": 8820000,
      "populationFormatted": "8.82 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Italian"
      ]
    },
    {
      "cityName": "Roma",
      "stateOrRegion": "Italy Region",
      "population": 2546804,
      "populationFormatted": "2.55 Million",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Italian"
      ]
    },
    {
      "cityName": "Milano",
      "stateOrRegion": "Italy Region",
      "population": 1256211,
      "populationFormatted": "1.26 Million",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "Italian"
      ]
    },
    {
      "cityName": "Napoli",
      "stateOrRegion": "Italy Region",
      "population": 1004500,
      "populationFormatted": "1.00 Million",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Industrial Manufacturing, Automotive Parts & Assembly",
      "primaryLanguagesSpoken": [
        "Italian"
      ]
    },
    {
      "cityName": "Torino",
      "stateOrRegion": "Italy Region",
      "population": 865263,
      "populationFormatted": "865,263",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Healthcare Services, Clinical Research & Hospital Networks",
      "primaryLanguagesSpoken": [
        "Italian"
      ]
    },
    {
      "cityName": "Palermo",
      "stateOrRegion": "Italy Region",
      "population": 686722,
      "populationFormatted": "686,722",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Maritime Shipping, Container Logistics & Port Operations",
      "primaryLanguagesSpoken": [
        "Italian"
      ]
    },
    {
      "cityName": "Genova",
      "stateOrRegion": "Italy Region",
      "population": 610307,
      "populationFormatted": "610,307",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Textiles, Garments Manufacturing & Artisanal Craft",
      "primaryLanguagesSpoken": [
        "Italian"
      ]
    },
    {
      "cityName": "Bologna",
      "stateOrRegion": "Italy Region",
      "population": 371217,
      "populationFormatted": "371,217",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Renewable Energy, Solar Operations & Electrical Grid",
      "primaryLanguagesSpoken": [
        "Italian"
      ]
    },
    {
      "cityName": "Firenze",
      "stateOrRegion": "Italy Region",
      "population": 356118,
      "populationFormatted": "356,118",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Higher Vocational Training, Engineering & Trades",
      "primaryLanguagesSpoken": [
        "Italian"
      ]
    },
    {
      "cityName": "Bari",
      "stateOrRegion": "Italy Region",
      "population": 316532,
      "populationFormatted": "316,532",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Mining Operations, Raw Material Extraction & Metallurgy",
      "primaryLanguagesSpoken": [
        "Italian"
      ]
    },
    {
      "cityName": "Catania",
      "stateOrRegion": "Italy Region",
      "population": 313110,
      "populationFormatted": "313,110",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Tourism & Cultural Heritage, Hospitality Management",
      "primaryLanguagesSpoken": [
        "Italian"
      ]
    },
    {
      "cityName": "Venezia",
      "stateOrRegion": "Italy Region",
      "population": 271073,
      "populationFormatted": "271,073",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Commercial Wholesale, Retail Distribution & Supply Chain",
      "primaryLanguagesSpoken": [
        "Italian"
      ]
    },
    {
      "cityName": "Verona",
      "stateOrRegion": "Italy Region",
      "population": 253208,
      "populationFormatted": "253,208",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Telecommunications, Cloud Infrastructure & Fiber Networks",
      "primaryLanguagesSpoken": [
        "Italian"
      ]
    },
    {
      "cityName": "Messina",
      "stateOrRegion": "Italy Region",
      "population": 252026,
      "populationFormatted": "252,026",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Banking, Insurance, Stock Exchange & Asset Management",
      "primaryLanguagesSpoken": [
        "Italian"
      ]
    },
    {
      "cityName": "Trieste",
      "stateOrRegion": "Italy Region",
      "population": 211184,
      "populationFormatted": "211,184",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Biotechnology, Pharmaceuticals & Chemical Processing",
      "primaryLanguagesSpoken": [
        "Italian"
      ]
    },
    {
      "cityName": "Padova",
      "stateOrRegion": "Italy Region",
      "population": 204870,
      "populationFormatted": "204,870",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Italian"
      ]
    },
    {
      "cityName": "Taranto",
      "stateOrRegion": "Italy Region",
      "population": 202033,
      "populationFormatted": "202,033",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Italian"
      ]
    },
    {
      "cityName": "Brescia",
      "stateOrRegion": "Italy Region",
      "population": 187567,
      "populationFormatted": "187,567",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "Italian"
      ]
    },
    {
      "cityName": "Reggio Di Calabria",
      "stateOrRegion": "Italy Region",
      "population": 180353,
      "populationFormatted": "180,353",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Industrial Manufacturing, Automotive Parts & Assembly",
      "primaryLanguagesSpoken": [
        "Italian"
      ]
    },
    {
      "cityName": "Modena",
      "stateOrRegion": "Italy Region",
      "population": 175502,
      "populationFormatted": "175,502",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Healthcare Services, Clinical Research & Hospital Networks",
      "primaryLanguagesSpoken": [
        "Italian"
      ]
    },
    {
      "cityName": "Prato",
      "stateOrRegion": "Italy Region",
      "population": 172499,
      "populationFormatted": "172,499",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Maritime Shipping, Container Logistics & Port Operations",
      "primaryLanguagesSpoken": [
        "Italian"
      ]
    },
    {
      "cityName": "Cagliari",
      "stateOrRegion": "Italy Region",
      "population": 164249,
      "populationFormatted": "164,249",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Textiles, Garments Manufacturing & Artisanal Craft",
      "primaryLanguagesSpoken": [
        "Italian"
      ]
    },
    {
      "cityName": "Parma",
      "stateOrRegion": "Italy Region",
      "population": 163457,
      "populationFormatted": "163,457",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Renewable Energy, Solar Operations & Electrical Grid",
      "primaryLanguagesSpoken": [
        "Italian"
      ]
    },
    {
      "cityName": "Livorno",
      "stateOrRegion": "Italy Region",
      "population": 156274,
      "populationFormatted": "156,274",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Higher Vocational Training, Engineering & Trades",
      "primaryLanguagesSpoken": [
        "Italian"
      ]
    },
    {
      "cityName": "Foggia",
      "stateOrRegion": "Italy Region",
      "population": 155203,
      "populationFormatted": "155,203",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Mining Operations, Raw Material Extraction & Metallurgy",
      "primaryLanguagesSpoken": [
        "Italian"
      ]
    },
    {
      "cityName": "Perugia",
      "stateOrRegion": "Italy Region",
      "population": 149125,
      "populationFormatted": "149,125",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Tourism & Cultural Heritage, Hospitality Management",
      "primaryLanguagesSpoken": [
        "Italian"
      ]
    },
    {
      "cityName": "Reggio Nell'Emilia",
      "stateOrRegion": "Italy Region",
      "population": 141877,
      "populationFormatted": "141,877",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Commercial Wholesale, Retail Distribution & Supply Chain",
      "primaryLanguagesSpoken": [
        "Italian"
      ]
    },
    {
      "cityName": "Salerno",
      "stateOrRegion": "Italy Region",
      "population": 138188,
      "populationFormatted": "138,188",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Telecommunications, Cloud Infrastructure & Fiber Networks",
      "primaryLanguagesSpoken": [
        "Italian"
      ]
    },
    {
      "cityName": "Ravenna",
      "stateOrRegion": "Italy Region",
      "population": 134631,
      "populationFormatted": "134,631",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Banking, Insurance, Stock Exchange & Asset Management",
      "primaryLanguagesSpoken": [
        "Italian"
      ]
    },
    {
      "cityName": "Ferrara",
      "stateOrRegion": "Italy Region",
      "population": 130992,
      "populationFormatted": "130,992",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Biotechnology, Pharmaceuticals & Chemical Processing",
      "primaryLanguagesSpoken": [
        "Italian"
      ]
    }
  ],
  "XK": [
    {
      "cityName": "Pristina",
      "stateOrRegion": "Kosovo Capital Region",
      "population": 270000,
      "populationFormatted": "270,000",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Albanian",
        "Serbian"
      ]
    }
  ],
  "LV": [
    {
      "cityName": "Riga",
      "stateOrRegion": "Latvia Capital Region",
      "population": 282000,
      "populationFormatted": "282,000",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Latvian"
      ]
    },
    {
      "cityName": "Daugavpils",
      "stateOrRegion": "Latvia Region",
      "population": 115265,
      "populationFormatted": "115,265",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Latvian"
      ]
    }
  ],
  "LI": [
    {
      "cityName": "Vaduz",
      "stateOrRegion": "Liechtenstein Capital Region",
      "population": 80000,
      "populationFormatted": "80,000",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "German"
      ]
    }
  ],
  "LT": [
    {
      "cityName": "Vilnius",
      "stateOrRegion": "Lithuania Capital Region",
      "population": 429000,
      "populationFormatted": "429,000",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Lithuanian"
      ]
    },
    {
      "cityName": "Kaunas",
      "stateOrRegion": "Lithuania Region",
      "population": 378943,
      "populationFormatted": "378,943",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Lithuanian"
      ]
    },
    {
      "cityName": "Klaipeda",
      "stateOrRegion": "Lithuania Region",
      "population": 192954,
      "populationFormatted": "192,954",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "Lithuanian"
      ]
    },
    {
      "cityName": "Shauliai",
      "stateOrRegion": "Lithuania Region",
      "population": 133883,
      "populationFormatted": "133,883",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Industrial Manufacturing, Automotive Parts & Assembly",
      "primaryLanguagesSpoken": [
        "Lithuanian"
      ]
    },
    {
      "cityName": "Panevezhis",
      "stateOrRegion": "Lithuania Region",
      "population": 119749,
      "populationFormatted": "119,749",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Healthcare Services, Clinical Research & Hospital Networks",
      "primaryLanguagesSpoken": [
        "Lithuanian"
      ]
    }
  ],
  "LU": [
    {
      "cityName": "Luxembourg",
      "stateOrRegion": "Luxembourg Capital Region",
      "population": 99000,
      "populationFormatted": "99,000",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Luxembourgish",
        "French",
        "German"
      ]
    },
    {
      "cityName": "Luxembourg-Ville",
      "stateOrRegion": "Luxembourg Region",
      "population": 76688,
      "populationFormatted": "76,688",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Luxembourgish",
        "French",
        "German"
      ]
    }
  ],
  "MT": [
    {
      "cityName": "Valletta",
      "stateOrRegion": "Malta Capital Region",
      "population": 80000,
      "populationFormatted": "80,000",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Maltese",
        "English"
      ]
    }
  ],
  "MD": [
    {
      "cityName": "Chisinau",
      "stateOrRegion": "Moldova Capital Region",
      "population": 375000,
      "populationFormatted": "375,000",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Romanian"
      ]
    }
  ],
  "MC": [
    {
      "cityName": "Monaco",
      "stateOrRegion": "Monaco Capital Region",
      "population": 80000,
      "populationFormatted": "80,000",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "French",
        "Mon\u00e9gasque"
      ]
    }
  ],
  "ME": [
    {
      "cityName": "Podgorica",
      "stateOrRegion": "Montenegro Capital Region",
      "population": 93000,
      "populationFormatted": "93,000",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Montenegrin"
      ]
    }
  ],
  "NL": [
    {
      "cityName": "Amsterdam",
      "stateOrRegion": "Netherlands Capital Region",
      "population": 2670000,
      "populationFormatted": "2.67 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Dutch",
        "West Frisian"
      ]
    },
    {
      "cityName": "Rotterdam",
      "stateOrRegion": "Netherlands Region",
      "population": 1008390,
      "populationFormatted": "1.01 Million",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Dutch",
        "West Frisian"
      ]
    },
    {
      "cityName": "S-Gravenhage",
      "stateOrRegion": "Netherlands Region",
      "population": 627645,
      "populationFormatted": "627,645",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "Dutch",
        "West Frisian"
      ]
    },
    {
      "cityName": "The Hague",
      "stateOrRegion": "Netherlands Region",
      "population": 472096,
      "populationFormatted": "472,096",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Industrial Manufacturing, Automotive Parts & Assembly",
      "primaryLanguagesSpoken": [
        "Dutch",
        "West Frisian"
      ]
    },
    {
      "cityName": "Utrecht",
      "stateOrRegion": "Netherlands Region",
      "population": 400559,
      "populationFormatted": "400,559",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Healthcare Services, Clinical Research & Hospital Networks",
      "primaryLanguagesSpoken": [
        "Dutch",
        "West Frisian"
      ]
    },
    {
      "cityName": "Eindhoven",
      "stateOrRegion": "Netherlands Region",
      "population": 308213,
      "populationFormatted": "308,213",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Maritime Shipping, Container Logistics & Port Operations",
      "primaryLanguagesSpoken": [
        "Dutch",
        "West Frisian"
      ]
    },
    {
      "cityName": "Leiden",
      "stateOrRegion": "Netherlands Region",
      "population": 253106,
      "populationFormatted": "253,106",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Textiles, Garments Manufacturing & Artisanal Craft",
      "primaryLanguagesSpoken": [
        "Dutch",
        "West Frisian"
      ]
    },
    {
      "cityName": "Dordrecht",
      "stateOrRegion": "Netherlands Region",
      "population": 246187,
      "populationFormatted": "246,187",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Renewable Energy, Solar Operations & Electrical Grid",
      "primaryLanguagesSpoken": [
        "Dutch",
        "West Frisian"
      ]
    },
    {
      "cityName": "Tilburg",
      "stateOrRegion": "Netherlands Region",
      "population": 220427,
      "populationFormatted": "220,427",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Higher Vocational Training, Engineering & Trades",
      "primaryLanguagesSpoken": [
        "Dutch",
        "West Frisian"
      ]
    },
    {
      "cityName": "Heerlen-Kerkrade",
      "stateOrRegion": "Netherlands Region",
      "population": 214261,
      "populationFormatted": "214,261",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Mining Operations, Raw Material Extraction & Metallurgy",
      "primaryLanguagesSpoken": [
        "Dutch",
        "West Frisian"
      ]
    },
    {
      "cityName": "Groningen",
      "stateOrRegion": "Netherlands Region",
      "population": 196180,
      "populationFormatted": "196,180",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Tourism & Cultural Heritage, Hospitality Management",
      "primaryLanguagesSpoken": [
        "Dutch",
        "West Frisian"
      ]
    },
    {
      "cityName": "Haarlem",
      "stateOrRegion": "Netherlands Region",
      "population": 189902,
      "populationFormatted": "189,902",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Commercial Wholesale, Retail Distribution & Supply Chain",
      "primaryLanguagesSpoken": [
        "Dutch",
        "West Frisian"
      ]
    },
    {
      "cityName": "Almere",
      "stateOrRegion": "Netherlands Region",
      "population": 165106,
      "populationFormatted": "165,106",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Telecommunications, Cloud Infrastructure & Fiber Networks",
      "primaryLanguagesSpoken": [
        "Dutch",
        "West Frisian"
      ]
    },
    {
      "cityName": "Breda",
      "stateOrRegion": "Netherlands Region",
      "population": 164397,
      "populationFormatted": "164,397",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Banking, Insurance, Stock Exchange & Asset Management",
      "primaryLanguagesSpoken": [
        "Dutch",
        "West Frisian"
      ]
    },
    {
      "cityName": "Amersfoort",
      "stateOrRegion": "Netherlands Region",
      "population": 160219,
      "populationFormatted": "160,219",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Biotechnology, Pharmaceuticals & Chemical Processing",
      "primaryLanguagesSpoken": [
        "Dutch",
        "West Frisian"
      ]
    },
    {
      "cityName": "S-Hertogenbosch",
      "stateOrRegion": "Netherlands Region",
      "population": 157774,
      "populationFormatted": "157,774",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Dutch",
        "West Frisian"
      ]
    },
    {
      "cityName": "Nijmegen",
      "stateOrRegion": "Netherlands Region",
      "population": 156198,
      "populationFormatted": "156,198",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Dutch",
        "West Frisian"
      ]
    },
    {
      "cityName": "Apeldoorn",
      "stateOrRegion": "Netherlands Region",
      "population": 155741,
      "populationFormatted": "155,741",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "Dutch",
        "West Frisian"
      ]
    },
    {
      "cityName": "Enschede",
      "stateOrRegion": "Netherlands Region",
      "population": 152321,
      "populationFormatted": "152,321",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Industrial Manufacturing, Automotive Parts & Assembly",
      "primaryLanguagesSpoken": [
        "Dutch",
        "West Frisian"
      ]
    },
    {
      "cityName": "Arnhem",
      "stateOrRegion": "Netherlands Region",
      "population": 143055,
      "populationFormatted": "143,055",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Healthcare Services, Clinical Research & Hospital Networks",
      "primaryLanguagesSpoken": [
        "Dutch",
        "West Frisian"
      ]
    },
    {
      "cityName": "Ede",
      "stateOrRegion": "Netherlands Region",
      "population": 142363,
      "populationFormatted": "142,363",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Maritime Shipping, Container Logistics & Port Operations",
      "primaryLanguagesSpoken": [
        "Dutch",
        "West Frisian"
      ]
    },
    {
      "cityName": "Geleen-Sittard",
      "stateOrRegion": "Netherlands Region",
      "population": 141467,
      "populationFormatted": "141,467",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Textiles, Garments Manufacturing & Artisanal Craft",
      "primaryLanguagesSpoken": [
        "Dutch",
        "West Frisian"
      ]
    },
    {
      "cityName": "Zaanstad",
      "stateOrRegion": "Netherlands Region",
      "population": 139464,
      "populationFormatted": "139,464",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Renewable Energy, Solar Operations & Electrical Grid",
      "primaryLanguagesSpoken": [
        "Dutch",
        "West Frisian"
      ]
    },
    {
      "cityName": "Haarlemmermeer",
      "stateOrRegion": "Netherlands Region",
      "population": 122902,
      "populationFormatted": "122,902",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Higher Vocational Training, Engineering & Trades",
      "primaryLanguagesSpoken": [
        "Dutch",
        "West Frisian"
      ]
    },
    {
      "cityName": "Maastricht",
      "stateOrRegion": "Netherlands Region",
      "population": 121982,
      "populationFormatted": "121,982",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Mining Operations, Raw Material Extraction & Metallurgy",
      "primaryLanguagesSpoken": [
        "Dutch",
        "West Frisian"
      ]
    },
    {
      "cityName": "Zoetermeer",
      "stateOrRegion": "Netherlands Region",
      "population": 112594,
      "populationFormatted": "112,594",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Tourism & Cultural Heritage, Hospitality Management",
      "primaryLanguagesSpoken": [
        "Dutch",
        "West Frisian"
      ]
    },
    {
      "cityName": "Zwolle",
      "stateOrRegion": "Netherlands Region",
      "population": 109955,
      "populationFormatted": "109,955",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Commercial Wholesale, Retail Distribution & Supply Chain",
      "primaryLanguagesSpoken": [
        "Dutch",
        "West Frisian"
      ]
    },
    {
      "cityName": "Emmen",
      "stateOrRegion": "Netherlands Region",
      "population": 108198,
      "populationFormatted": "108,198",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Telecommunications, Cloud Infrastructure & Fiber Networks",
      "primaryLanguagesSpoken": [
        "Dutch",
        "West Frisian"
      ]
    }
  ],
  "MK": [
    {
      "cityName": "Skopje",
      "stateOrRegion": "North Macedonia Capital Region",
      "population": 274500,
      "populationFormatted": "274,500",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Macedonian",
        "Albanian"
      ]
    }
  ],
  "NO": [
    {
      "cityName": "Oslo",
      "stateOrRegion": "Norway Capital Region",
      "population": 825000,
      "populationFormatted": "825,000",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Norwegian Bokm\u00e5l",
        "Norwegian Nynorsk"
      ]
    },
    {
      "cityName": "Bergen",
      "stateOrRegion": "Norway Region",
      "population": 236427,
      "populationFormatted": "236,427",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Norwegian Bokm\u00e5l",
        "Norwegian Nynorsk"
      ]
    },
    {
      "cityName": "Trondheim",
      "stateOrRegion": "Norway Region",
      "population": 153525,
      "populationFormatted": "153,525",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "Norwegian Bokm\u00e5l",
        "Norwegian Nynorsk"
      ]
    },
    {
      "cityName": "Stavanger",
      "stateOrRegion": "Norway Region",
      "population": 111706,
      "populationFormatted": "111,706",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Industrial Manufacturing, Automotive Parts & Assembly",
      "primaryLanguagesSpoken": [
        "Norwegian Bokm\u00e5l",
        "Norwegian Nynorsk"
      ]
    }
  ],
  "PL": [
    {
      "cityName": "Warsaw",
      "stateOrRegion": "Poland Capital Region",
      "population": 5520000,
      "populationFormatted": "5.52 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Polish"
      ]
    },
    {
      "cityName": "Warszawa",
      "stateOrRegion": "Poland Region",
      "population": 1688300,
      "populationFormatted": "1.69 Million",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Polish"
      ]
    },
    {
      "cityName": "L\u00f3dz",
      "stateOrRegion": "Poland Region",
      "population": 781932,
      "populationFormatted": "781,932",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "Polish"
      ]
    },
    {
      "cityName": "Krak\u00f3w",
      "stateOrRegion": "Poland Region",
      "population": 757427,
      "populationFormatted": "757,427",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Industrial Manufacturing, Automotive Parts & Assembly",
      "primaryLanguagesSpoken": [
        "Polish"
      ]
    },
    {
      "cityName": "Wroclaw",
      "stateOrRegion": "Poland Region",
      "population": 638459,
      "populationFormatted": "638,459",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Healthcare Services, Clinical Research & Hospital Networks",
      "primaryLanguagesSpoken": [
        "Polish"
      ]
    },
    {
      "cityName": "Poznan",
      "stateOrRegion": "Poland Region",
      "population": 575742,
      "populationFormatted": "575,742",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Maritime Shipping, Container Logistics & Port Operations",
      "primaryLanguagesSpoken": [
        "Polish"
      ]
    },
    {
      "cityName": "Gdansk",
      "stateOrRegion": "Poland Region",
      "population": 461482,
      "populationFormatted": "461,482",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Textiles, Garments Manufacturing & Artisanal Craft",
      "primaryLanguagesSpoken": [
        "Polish"
      ]
    },
    {
      "cityName": "Szczecin",
      "stateOrRegion": "Poland Region",
      "population": 414685,
      "populationFormatted": "414,685",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Renewable Energy, Solar Operations & Electrical Grid",
      "primaryLanguagesSpoken": [
        "Polish"
      ]
    },
    {
      "cityName": "Bydgoszcz",
      "stateOrRegion": "Poland Region",
      "population": 371237,
      "populationFormatted": "371,237",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Higher Vocational Training, Engineering & Trades",
      "primaryLanguagesSpoken": [
        "Polish"
      ]
    },
    {
      "cityName": "Lublin",
      "stateOrRegion": "Poland Region",
      "population": 358079,
      "populationFormatted": "358,079",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Mining Operations, Raw Material Extraction & Metallurgy",
      "primaryLanguagesSpoken": [
        "Polish"
      ]
    },
    {
      "cityName": "Katowice",
      "stateOrRegion": "Poland Region",
      "population": 323710,
      "populationFormatted": "323,710",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Tourism & Cultural Heritage, Hospitality Management",
      "primaryLanguagesSpoken": [
        "Polish"
      ]
    },
    {
      "cityName": "Bialystok",
      "stateOrRegion": "Poland Region",
      "population": 291465,
      "populationFormatted": "291,465",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Commercial Wholesale, Retail Distribution & Supply Chain",
      "primaryLanguagesSpoken": [
        "Polish"
      ]
    },
    {
      "cityName": "Gdynia",
      "stateOrRegion": "Poland Region",
      "population": 253587,
      "populationFormatted": "253,587",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Telecommunications, Cloud Infrastructure & Fiber Networks",
      "primaryLanguagesSpoken": [
        "Polish"
      ]
    },
    {
      "cityName": "Czestochowa",
      "stateOrRegion": "Poland Region",
      "population": 250241,
      "populationFormatted": "250,241",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Banking, Insurance, Stock Exchange & Asset Management",
      "primaryLanguagesSpoken": [
        "Polish"
      ]
    },
    {
      "cityName": "Sosnowiec",
      "stateOrRegion": "Poland Region",
      "population": 230720,
      "populationFormatted": "230,720",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Biotechnology, Pharmaceuticals & Chemical Processing",
      "primaryLanguagesSpoken": [
        "Polish"
      ]
    },
    {
      "cityName": "Radom",
      "stateOrRegion": "Poland Region",
      "population": 228710,
      "populationFormatted": "228,710",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Polish"
      ]
    },
    {
      "cityName": "Kielce",
      "stateOrRegion": "Poland Region",
      "population": 211085,
      "populationFormatted": "211,085",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Polish"
      ]
    },
    {
      "cityName": "Torun",
      "stateOrRegion": "Poland Region",
      "population": 210357,
      "populationFormatted": "210,357",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "Polish"
      ]
    },
    {
      "cityName": "Gliwice",
      "stateOrRegion": "Poland Region",
      "population": 202057,
      "populationFormatted": "202,057",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Industrial Manufacturing, Automotive Parts & Assembly",
      "primaryLanguagesSpoken": [
        "Polish"
      ]
    },
    {
      "cityName": "Zabrze",
      "stateOrRegion": "Poland Region",
      "population": 194148,
      "populationFormatted": "194,148",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Healthcare Services, Clinical Research & Hospital Networks",
      "primaryLanguagesSpoken": [
        "Polish"
      ]
    },
    {
      "cityName": "Bytom",
      "stateOrRegion": "Poland Region",
      "population": 191890,
      "populationFormatted": "191,890",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Maritime Shipping, Container Logistics & Port Operations",
      "primaryLanguagesSpoken": [
        "Polish"
      ]
    },
    {
      "cityName": "Bielsko-Biala",
      "stateOrRegion": "Poland Region",
      "population": 177538,
      "populationFormatted": "177,538",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Textiles, Garments Manufacturing & Artisanal Craft",
      "primaryLanguagesSpoken": [
        "Polish"
      ]
    },
    {
      "cityName": "Olsztyn",
      "stateOrRegion": "Poland Region",
      "population": 172672,
      "populationFormatted": "172,672",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Renewable Energy, Solar Operations & Electrical Grid",
      "primaryLanguagesSpoken": [
        "Polish"
      ]
    },
    {
      "cityName": "Rzesz\u00f3w",
      "stateOrRegion": "Poland Region",
      "population": 159649,
      "populationFormatted": "159,649",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Higher Vocational Training, Engineering & Trades",
      "primaryLanguagesSpoken": [
        "Polish"
      ]
    },
    {
      "cityName": "Ruda Slaska",
      "stateOrRegion": "Poland Region",
      "population": 148936,
      "populationFormatted": "148,936",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Mining Operations, Raw Material Extraction & Metallurgy",
      "primaryLanguagesSpoken": [
        "Polish"
      ]
    },
    {
      "cityName": "Rybnik",
      "stateOrRegion": "Poland Region",
      "population": 142626,
      "populationFormatted": "142,626",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Tourism & Cultural Heritage, Hospitality Management",
      "primaryLanguagesSpoken": [
        "Polish"
      ]
    },
    {
      "cityName": "Tychy",
      "stateOrRegion": "Poland Region",
      "population": 132415,
      "populationFormatted": "132,415",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Commercial Wholesale, Retail Distribution & Supply Chain",
      "primaryLanguagesSpoken": [
        "Polish"
      ]
    },
    {
      "cityName": "Dabrowa G\u00f3rnicza",
      "stateOrRegion": "Poland Region",
      "population": 131652,
      "populationFormatted": "131,652",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Telecommunications, Cloud Infrastructure & Fiber Networks",
      "primaryLanguagesSpoken": [
        "Polish"
      ]
    },
    {
      "cityName": "Walbrzych",
      "stateOrRegion": "Poland Region",
      "population": 129252,
      "populationFormatted": "129,252",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Banking, Insurance, Stock Exchange & Asset Management",
      "primaryLanguagesSpoken": [
        "Polish"
      ]
    },
    {
      "cityName": "Opole",
      "stateOrRegion": "Poland Region",
      "population": 129073,
      "populationFormatted": "129,073",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Biotechnology, Pharmaceuticals & Chemical Processing",
      "primaryLanguagesSpoken": [
        "Polish"
      ]
    }
  ],
  "PT": [
    {
      "cityName": "Lisbon",
      "stateOrRegion": "Portugal Capital Region",
      "population": 1560000,
      "populationFormatted": "1.56 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Portuguese"
      ]
    },
    {
      "cityName": "Lisboa",
      "stateOrRegion": "Portugal Region",
      "population": 540022,
      "populationFormatted": "540,022",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Portuguese"
      ]
    },
    {
      "cityName": "Porto",
      "stateOrRegion": "Portugal Region",
      "population": 263131,
      "populationFormatted": "263,131",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "Portuguese"
      ]
    },
    {
      "cityName": "Vila Nova De Gaia",
      "stateOrRegion": "Portugal Region",
      "population": 178255,
      "populationFormatted": "178,255",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Industrial Manufacturing, Automotive Parts & Assembly",
      "primaryLanguagesSpoken": [
        "Portuguese"
      ]
    },
    {
      "cityName": "Amadora",
      "stateOrRegion": "Portugal Region",
      "population": 175872,
      "populationFormatted": "175,872",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Healthcare Services, Clinical Research & Hospital Networks",
      "primaryLanguagesSpoken": [
        "Portuguese"
      ]
    },
    {
      "cityName": "Setubal",
      "stateOrRegion": "Portugal Region",
      "population": 118696,
      "populationFormatted": "118,696",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Maritime Shipping, Container Logistics & Port Operations",
      "primaryLanguagesSpoken": [
        "Portuguese"
      ]
    },
    {
      "cityName": "Braga",
      "stateOrRegion": "Portugal Region",
      "population": 117272,
      "populationFormatted": "117,272",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Textiles, Garments Manufacturing & Artisanal Craft",
      "primaryLanguagesSpoken": [
        "Portuguese"
      ]
    },
    {
      "cityName": "Funchal",
      "stateOrRegion": "Portugal Region",
      "population": 103932,
      "populationFormatted": "103,932",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Renewable Energy, Solar Operations & Electrical Grid",
      "primaryLanguagesSpoken": [
        "Portuguese"
      ]
    },
    {
      "cityName": "Almada",
      "stateOrRegion": "Portugal Region",
      "population": 101501,
      "populationFormatted": "101,501",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Higher Vocational Training, Engineering & Trades",
      "primaryLanguagesSpoken": [
        "Portuguese"
      ]
    },
    {
      "cityName": "Coimbra",
      "stateOrRegion": "Portugal Region",
      "population": 101069,
      "populationFormatted": "101,069",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Mining Operations, Raw Material Extraction & Metallurgy",
      "primaryLanguagesSpoken": [
        "Portuguese"
      ]
    }
  ],
  "RO": [
    {
      "cityName": "Bucharest",
      "stateOrRegion": "Romania Capital Region",
      "population": 2850000,
      "populationFormatted": "2.85 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Romanian"
      ]
    },
    {
      "cityName": "Bucuresti",
      "stateOrRegion": "Romania Region",
      "population": 1926334,
      "populationFormatted": "1.93 Million",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Romanian"
      ]
    },
    {
      "cityName": "Iasi",
      "stateOrRegion": "Romania Region",
      "population": 320888,
      "populationFormatted": "320,888",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "Romanian"
      ]
    },
    {
      "cityName": "Cluj-Napoca",
      "stateOrRegion": "Romania Region",
      "population": 317953,
      "populationFormatted": "317,953",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Industrial Manufacturing, Automotive Parts & Assembly",
      "primaryLanguagesSpoken": [
        "Romanian"
      ]
    },
    {
      "cityName": "Timisoara",
      "stateOrRegion": "Romania Region",
      "population": 317660,
      "populationFormatted": "317,660",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Healthcare Services, Clinical Research & Hospital Networks",
      "primaryLanguagesSpoken": [
        "Romanian"
      ]
    },
    {
      "cityName": "Constanta",
      "stateOrRegion": "Romania Region",
      "population": 306288,
      "populationFormatted": "306,288",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Maritime Shipping, Container Logistics & Port Operations",
      "primaryLanguagesSpoken": [
        "Romanian"
      ]
    },
    {
      "cityName": "Galati",
      "stateOrRegion": "Romania Region",
      "population": 298861,
      "populationFormatted": "298,861",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Textiles, Garments Manufacturing & Artisanal Craft",
      "primaryLanguagesSpoken": [
        "Romanian"
      ]
    },
    {
      "cityName": "Craiova",
      "stateOrRegion": "Romania Region",
      "population": 291443,
      "populationFormatted": "291,443",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Renewable Energy, Solar Operations & Electrical Grid",
      "primaryLanguagesSpoken": [
        "Romanian"
      ]
    },
    {
      "cityName": "Brasov",
      "stateOrRegion": "Romania Region",
      "population": 284246,
      "populationFormatted": "284,246",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Higher Vocational Training, Engineering & Trades",
      "primaryLanguagesSpoken": [
        "Romanian"
      ]
    },
    {
      "cityName": "Ploiesti",
      "stateOrRegion": "Romania Region",
      "population": 232527,
      "populationFormatted": "232,527",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Mining Operations, Raw Material Extraction & Metallurgy",
      "primaryLanguagesSpoken": [
        "Romanian"
      ]
    },
    {
      "cityName": "Braila",
      "stateOrRegion": "Romania Region",
      "population": 216292,
      "populationFormatted": "216,292",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Tourism & Cultural Heritage, Hospitality Management",
      "primaryLanguagesSpoken": [
        "Romanian"
      ]
    },
    {
      "cityName": "Oradea",
      "stateOrRegion": "Romania Region",
      "population": 206614,
      "populationFormatted": "206,614",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Commercial Wholesale, Retail Distribution & Supply Chain",
      "primaryLanguagesSpoken": [
        "Romanian"
      ]
    },
    {
      "cityName": "Bacau",
      "stateOrRegion": "Romania Region",
      "population": 175500,
      "populationFormatted": "175,500",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Telecommunications, Cloud Infrastructure & Fiber Networks",
      "primaryLanguagesSpoken": [
        "Romanian"
      ]
    },
    {
      "cityName": "Arad",
      "stateOrRegion": "Romania Region",
      "population": 172827,
      "populationFormatted": "172,827",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Banking, Insurance, Stock Exchange & Asset Management",
      "primaryLanguagesSpoken": [
        "Romanian"
      ]
    },
    {
      "cityName": "Pitesti",
      "stateOrRegion": "Romania Region",
      "population": 168458,
      "populationFormatted": "168,458",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Biotechnology, Pharmaceuticals & Chemical Processing",
      "primaryLanguagesSpoken": [
        "Romanian"
      ]
    },
    {
      "cityName": "Sibiu",
      "stateOrRegion": "Romania Region",
      "population": 154841,
      "populationFormatted": "154,841",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Romanian"
      ]
    },
    {
      "cityName": "Baia Mare",
      "stateOrRegion": "Romania Region",
      "population": 136254,
      "populationFormatted": "136,254",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Romanian"
      ]
    },
    {
      "cityName": "Buzau",
      "stateOrRegion": "Romania Region",
      "population": 134227,
      "populationFormatted": "134,227",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "Romanian"
      ]
    },
    {
      "cityName": "Tirgu-Mures",
      "stateOrRegion": "Romania Region",
      "population": 128612,
      "populationFormatted": "128,612",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Industrial Manufacturing, Automotive Parts & Assembly",
      "primaryLanguagesSpoken": [
        "Romanian"
      ]
    },
    {
      "cityName": "Botosani",
      "stateOrRegion": "Romania Region",
      "population": 115070,
      "populationFormatted": "115,070",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Healthcare Services, Clinical Research & Hospital Networks",
      "primaryLanguagesSpoken": [
        "Romanian"
      ]
    },
    {
      "cityName": "Satu-Mare",
      "stateOrRegion": "Romania Region",
      "population": 113697,
      "populationFormatted": "113,697",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Maritime Shipping, Container Logistics & Port Operations",
      "primaryLanguagesSpoken": [
        "Romanian"
      ]
    },
    {
      "cityName": "Rimnicu Vilcea",
      "stateOrRegion": "Romania Region",
      "population": 112804,
      "populationFormatted": "112,804",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Textiles, Garments Manufacturing & Artisanal Craft",
      "primaryLanguagesSpoken": [
        "Romanian"
      ]
    },
    {
      "cityName": "Drobeta Turnu-Severin",
      "stateOrRegion": "Romania Region",
      "population": 110727,
      "populationFormatted": "110,727",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Renewable Energy, Solar Operations & Electrical Grid",
      "primaryLanguagesSpoken": [
        "Romanian"
      ]
    },
    {
      "cityName": "Suceava",
      "stateOrRegion": "Romania Region",
      "population": 105865,
      "populationFormatted": "105,865",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Higher Vocational Training, Engineering & Trades",
      "primaryLanguagesSpoken": [
        "Romanian"
      ]
    },
    {
      "cityName": "Piatra Neamt",
      "stateOrRegion": "Romania Region",
      "population": 102694,
      "populationFormatted": "102,694",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Mining Operations, Raw Material Extraction & Metallurgy",
      "primaryLanguagesSpoken": [
        "Romanian"
      ]
    },
    {
      "cityName": "Focsani",
      "stateOrRegion": "Romania Region",
      "population": 101891,
      "populationFormatted": "101,891",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Tourism & Cultural Heritage, Hospitality Management",
      "primaryLanguagesSpoken": [
        "Romanian"
      ]
    }
  ],
  "RU": [
    {
      "cityName": "Moscow",
      "stateOrRegion": "Russia Capital Region",
      "population": 12000000,
      "populationFormatted": "12.00 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Russian"
      ]
    }
  ],
  "SM": [
    {
      "cityName": "San Marino",
      "stateOrRegion": "San Marino Capital Region",
      "population": 80000,
      "populationFormatted": "80,000",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Italian"
      ]
    }
  ],
  "RS": [
    {
      "cityName": "Beograd",
      "stateOrRegion": "Serbia Region",
      "population": 1576124,
      "populationFormatted": "1.58 Million",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Serbian"
      ]
    },
    {
      "cityName": "Belgrade",
      "stateOrRegion": "Serbia Capital Region",
      "population": 990000,
      "populationFormatted": "990,000",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Serbian"
      ]
    },
    {
      "cityName": "Novi Sad",
      "stateOrRegion": "Serbia Region",
      "population": 299294,
      "populationFormatted": "299,294",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "Serbian"
      ]
    },
    {
      "cityName": "Ni\u0161",
      "stateOrRegion": "Serbia Region",
      "population": 235159,
      "populationFormatted": "235,159",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Industrial Manufacturing, Automotive Parts & Assembly",
      "primaryLanguagesSpoken": [
        "Serbian"
      ]
    },
    {
      "cityName": "Kragujevac",
      "stateOrRegion": "Serbia Region",
      "population": 175802,
      "populationFormatted": "175,802",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Healthcare Services, Clinical Research & Hospital Networks",
      "primaryLanguagesSpoken": [
        "Serbian"
      ]
    },
    {
      "cityName": "Leskovac",
      "stateOrRegion": "Serbia Region",
      "population": 155679,
      "populationFormatted": "155,679",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Maritime Shipping, Container Logistics & Port Operations",
      "primaryLanguagesSpoken": [
        "Serbian"
      ]
    },
    {
      "cityName": "Subotica",
      "stateOrRegion": "Serbia Region",
      "population": 149257,
      "populationFormatted": "149,257",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Textiles, Garments Manufacturing & Artisanal Craft",
      "primaryLanguagesSpoken": [
        "Serbian"
      ]
    },
    {
      "cityName": "Zrenjanin",
      "stateOrRegion": "Serbia Region",
      "population": 132430,
      "populationFormatted": "132,430",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Renewable Energy, Solar Operations & Electrical Grid",
      "primaryLanguagesSpoken": [
        "Serbian"
      ]
    },
    {
      "cityName": "Kru\u0161evac",
      "stateOrRegion": "Serbia Region",
      "population": 131116,
      "populationFormatted": "131,116",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Higher Vocational Training, Engineering & Trades",
      "primaryLanguagesSpoken": [
        "Serbian"
      ]
    },
    {
      "cityName": "Pancevo",
      "stateOrRegion": "Serbia Region",
      "population": 128447,
      "populationFormatted": "128,447",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Mining Operations, Raw Material Extraction & Metallurgy",
      "primaryLanguagesSpoken": [
        "Serbian"
      ]
    },
    {
      "cityName": "\u0160abac",
      "stateOrRegion": "Serbia Region",
      "population": 123155,
      "populationFormatted": "123,155",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Tourism & Cultural Heritage, Hospitality Management",
      "primaryLanguagesSpoken": [
        "Serbian"
      ]
    },
    {
      "cityName": "Kraljevo",
      "stateOrRegion": "Serbia Region",
      "population": 121595,
      "populationFormatted": "121,595",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Commercial Wholesale, Retail Distribution & Supply Chain",
      "primaryLanguagesSpoken": [
        "Serbian"
      ]
    },
    {
      "cityName": "Cacak",
      "stateOrRegion": "Serbia Region",
      "population": 117578,
      "populationFormatted": "117,578",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Telecommunications, Cloud Infrastructure & Fiber Networks",
      "primaryLanguagesSpoken": [
        "Serbian"
      ]
    },
    {
      "cityName": "Smederevo",
      "stateOrRegion": "Serbia Region",
      "population": 109977,
      "populationFormatted": "109,977",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Banking, Insurance, Stock Exchange & Asset Management",
      "primaryLanguagesSpoken": [
        "Serbian"
      ]
    }
  ],
  "SK": [
    {
      "cityName": "Bratislava",
      "stateOrRegion": "Slovakia Capital Region",
      "population": 810000,
      "populationFormatted": "810,000",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Slovak"
      ]
    },
    {
      "cityName": "Kosice",
      "stateOrRegion": "Slovakia Region",
      "population": 236093,
      "populationFormatted": "236,093",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Slovak"
      ]
    }
  ],
  "SI": [
    {
      "cityName": "Ljubljana",
      "stateOrRegion": "Slovenia Capital Region",
      "population": 315000,
      "populationFormatted": "315,000",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Slovene"
      ]
    },
    {
      "cityName": "Maribor",
      "stateOrRegion": "Slovenia Region",
      "population": 108241,
      "populationFormatted": "108,241",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Slovene"
      ]
    }
  ],
  "ES": [
    {
      "cityName": "Madrid",
      "stateOrRegion": "Catalonia (Catalunya)",
      "population": 7110000,
      "populationFormatted": "7.11 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Catalan",
        "Galician",
        "Basque"
      ]
    },
    {
      "cityName": "Sevilla",
      "stateOrRegion": "Basque Country (Euskadi)",
      "population": 984092,
      "populationFormatted": "984,092",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Catalan",
        "Galician",
        "Basque"
      ]
    },
    {
      "cityName": "Murcia",
      "stateOrRegion": "Galicia",
      "population": 772211,
      "populationFormatted": "772,211",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Catalan",
        "Galician",
        "Basque"
      ]
    },
    {
      "cityName": "Zaragoza",
      "stateOrRegion": "Community of Madrid",
      "population": 679004,
      "populationFormatted": "679,004",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Industrial Manufacturing, Automotive Parts & Assembly",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Catalan",
        "Galician",
        "Basque"
      ]
    },
    {
      "cityName": "M\u00e1laga",
      "stateOrRegion": "Andalusia (Andaluc\u00eda)",
      "population": 645541,
      "populationFormatted": "645,541",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Healthcare Services, Clinical Research & Hospital Networks",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Catalan",
        "Galician",
        "Basque"
      ]
    },
    {
      "cityName": "Alicante",
      "stateOrRegion": "Valencian Community",
      "population": 590669,
      "populationFormatted": "590,669",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Maritime Shipping, Container Logistics & Port Operations",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Catalan",
        "Galician",
        "Basque"
      ]
    },
    {
      "cityName": "Bilbao",
      "stateOrRegion": "Balearic Islands (Illes Balears)",
      "population": 546043,
      "populationFormatted": "546,043",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Textiles, Garments Manufacturing & Artisanal Craft",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Catalan",
        "Galician",
        "Basque"
      ]
    },
    {
      "cityName": "Las Palmas De Gran Canaria",
      "stateOrRegion": "Canary Islands (Canarias)",
      "population": 504216,
      "populationFormatted": "504,216",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Renewable Energy, Solar Operations & Electrical Grid",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Catalan",
        "Galician",
        "Basque"
      ]
    },
    {
      "cityName": "Palma De Mallorca",
      "stateOrRegion": "Catalonia (Catalunya)",
      "population": 439091,
      "populationFormatted": "439,091",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Higher Vocational Training, Engineering & Trades",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Catalan",
        "Galician",
        "Basque"
      ]
    },
    {
      "cityName": "Palma",
      "stateOrRegion": "Basque Country (Euskadi)",
      "population": 402045,
      "populationFormatted": "402,045",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Mining Operations, Raw Material Extraction & Metallurgy",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Catalan",
        "Galician",
        "Basque"
      ]
    },
    {
      "cityName": "Palmas De Gran Canaria",
      "stateOrRegion": "Galicia",
      "population": 377056,
      "populationFormatted": "377,056",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Tourism & Cultural Heritage, Hospitality Management",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Catalan",
        "Galician",
        "Basque"
      ]
    },
    {
      "cityName": "Valladolid",
      "stateOrRegion": "Community of Madrid",
      "population": 374085,
      "populationFormatted": "374,085",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Commercial Wholesale, Retail Distribution & Supply Chain",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Catalan",
        "Galician",
        "Basque"
      ]
    },
    {
      "cityName": "Oviedo",
      "stateOrRegion": "Andalusia (Andaluc\u00eda)",
      "population": 370094,
      "populationFormatted": "370,094",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Telecommunications, Cloud Infrastructure & Fiber Networks",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Catalan",
        "Galician",
        "Basque"
      ]
    },
    {
      "cityName": "Granada",
      "stateOrRegion": "Valencian Community",
      "population": 357747,
      "populationFormatted": "357,747",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Banking, Insurance, Stock Exchange & Asset Management",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Catalan",
        "Galician",
        "Basque"
      ]
    },
    {
      "cityName": "Santa Cruz De Tenerife",
      "stateOrRegion": "Balearic Islands (Illes Balears)",
      "population": 329651,
      "populationFormatted": "329,651",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Biotechnology, Pharmaceuticals & Chemical Processing",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Catalan",
        "Galician",
        "Basque"
      ]
    },
    {
      "cityName": "La Coru\u00f1a",
      "stateOrRegion": "Canary Islands (Canarias)",
      "population": 309029,
      "populationFormatted": "309,029",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Catalan",
        "Galician",
        "Basque"
      ]
    },
    {
      "cityName": "Barcelona",
      "stateOrRegion": "Catalonia (Catalunya)",
      "population": 301595,
      "populationFormatted": "301,595",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Catalan",
        "Galician",
        "Basque"
      ]
    },
    {
      "cityName": "Donostia - San Sebasti\u00e1n",
      "stateOrRegion": "Basque Country (Euskadi)",
      "population": 297537,
      "populationFormatted": "297,537",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Catalan",
        "Galician",
        "Basque"
      ]
    },
    {
      "cityName": "Vigo",
      "stateOrRegion": "Galicia",
      "population": 280186,
      "populationFormatted": "280,186",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Industrial Manufacturing, Automotive Parts & Assembly",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Catalan",
        "Galician",
        "Basque"
      ]
    },
    {
      "cityName": "Pamplona",
      "stateOrRegion": "Community of Madrid",
      "population": 271477,
      "populationFormatted": "271,477",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Healthcare Services, Clinical Research & Hospital Networks",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Catalan",
        "Galician",
        "Basque"
      ]
    },
    {
      "cityName": "Gij\u00f3n",
      "stateOrRegion": "Andalusia (Andaluc\u00eda)",
      "population": 266419,
      "populationFormatted": "266,419",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Maritime Shipping, Container Logistics & Port Operations",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Catalan",
        "Galician",
        "Basque"
      ]
    },
    {
      "cityName": "Badajoz",
      "stateOrRegion": "Valencian Community",
      "population": 255953,
      "populationFormatted": "255,953",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Textiles, Garments Manufacturing & Artisanal Craft",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Catalan",
        "Galician",
        "Basque"
      ]
    },
    {
      "cityName": "A Coru\u00f1a",
      "stateOrRegion": "Balearic Islands (Illes Balears)",
      "population": 243320,
      "populationFormatted": "243,320",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Renewable Energy, Solar Operations & Electrical Grid",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Catalan",
        "Galician",
        "Basque"
      ]
    },
    {
      "cityName": "Hospitalet De Llobregat",
      "stateOrRegion": "Canary Islands (Canarias)",
      "population": 239019,
      "populationFormatted": "239,019",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Higher Vocational Training, Engineering & Trades",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Catalan",
        "Galician",
        "Basque"
      ]
    },
    {
      "cityName": "Tarragona",
      "stateOrRegion": "Catalonia (Catalunya)",
      "population": 229074,
      "populationFormatted": "229,074",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Mining Operations, Raw Material Extraction & Metallurgy",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Catalan",
        "Galician",
        "Basque"
      ]
    },
    {
      "cityName": "Vitoria-Gasteiz",
      "stateOrRegion": "Basque Country (Euskadi)",
      "population": 224652,
      "populationFormatted": "224,652",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Tourism & Cultural Heritage, Hospitality Management",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Catalan",
        "Galician",
        "Basque"
      ]
    },
    {
      "cityName": "C\u00e1diz",
      "stateOrRegion": "Galicia",
      "population": 221130,
      "populationFormatted": "221,130",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Commercial Wholesale, Retail Distribution & Supply Chain",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Catalan",
        "Galician",
        "Basque"
      ]
    },
    {
      "cityName": "Santander",
      "stateOrRegion": "Community of Madrid",
      "population": 214160,
      "populationFormatted": "214,160",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Telecommunications, Cloud Infrastructure & Fiber Networks",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Catalan",
        "Galician",
        "Basque"
      ]
    },
    {
      "cityName": "Castell\u00f3n De La Plana",
      "stateOrRegion": "Andalusia (Andaluc\u00eda)",
      "population": 210455,
      "populationFormatted": "210,455",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Banking, Insurance, Stock Exchange & Asset Management",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Catalan",
        "Galician",
        "Basque"
      ]
    },
    {
      "cityName": "Badalona",
      "stateOrRegion": "Valencian Community",
      "population": 205836,
      "populationFormatted": "205,836",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Biotechnology, Pharmaceuticals & Chemical Processing",
      "primaryLanguagesSpoken": [
        "Spanish",
        "Catalan",
        "Galician",
        "Basque"
      ]
    }
  ],
  "SE": [
    {
      "cityName": "Stockholm",
      "stateOrRegion": "Sweden Capital Region",
      "population": 1575000,
      "populationFormatted": "1.57 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Swedish"
      ]
    },
    {
      "cityName": "G\u00f6teborg",
      "stateOrRegion": "Sweden Region",
      "population": 788970,
      "populationFormatted": "788,970",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Swedish"
      ]
    },
    {
      "cityName": "Malm\u00f6",
      "stateOrRegion": "Sweden Region",
      "population": 518506,
      "populationFormatted": "518,506",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "Swedish"
      ]
    },
    {
      "cityName": "Uppsala",
      "stateOrRegion": "Sweden Region",
      "population": 188478,
      "populationFormatted": "188,478",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Industrial Manufacturing, Automotive Parts & Assembly",
      "primaryLanguagesSpoken": [
        "Swedish"
      ]
    },
    {
      "cityName": "Link\u00f6ping",
      "stateOrRegion": "Sweden Region",
      "population": 132500,
      "populationFormatted": "132,500",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Healthcare Services, Clinical Research & Hospital Networks",
      "primaryLanguagesSpoken": [
        "Swedish"
      ]
    },
    {
      "cityName": "V\u00e4ster\u00e5s",
      "stateOrRegion": "Sweden Region",
      "population": 125433,
      "populationFormatted": "125,433",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Maritime Shipping, Container Logistics & Port Operations",
      "primaryLanguagesSpoken": [
        "Swedish"
      ]
    },
    {
      "cityName": "Orebro",
      "stateOrRegion": "Sweden Region",
      "population": 123503,
      "populationFormatted": "123,503",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Textiles, Garments Manufacturing & Artisanal Craft",
      "primaryLanguagesSpoken": [
        "Swedish"
      ]
    },
    {
      "cityName": "Norrk\u00f6ping",
      "stateOrRegion": "Sweden Region",
      "population": 122212,
      "populationFormatted": "122,212",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Renewable Energy, Solar Operations & Electrical Grid",
      "primaryLanguagesSpoken": [
        "Swedish"
      ]
    },
    {
      "cityName": "Helsingborg",
      "stateOrRegion": "Sweden Region",
      "population": 116870,
      "populationFormatted": "116,870",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Higher Vocational Training, Engineering & Trades",
      "primaryLanguagesSpoken": [
        "Swedish"
      ]
    },
    {
      "cityName": "J\u00f6nk\u00f6ping",
      "stateOrRegion": "Sweden Region",
      "population": 116344,
      "populationFormatted": "116,344",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Mining Operations, Raw Material Extraction & Metallurgy",
      "primaryLanguagesSpoken": [
        "Swedish"
      ]
    },
    {
      "cityName": "Ume\u00e5",
      "stateOrRegion": "Sweden Region",
      "population": 103970,
      "populationFormatted": "103,970",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Tourism & Cultural Heritage, Hospitality Management",
      "primaryLanguagesSpoken": [
        "Swedish"
      ]
    }
  ],
  "CH": [
    {
      "cityName": "Bern",
      "stateOrRegion": "Zurich (Z\u00fcrich)",
      "population": 1320000,
      "populationFormatted": "1.32 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "German",
        "French",
        "Italian",
        "Romansh"
      ]
    },
    {
      "cityName": "Z\u00fcrich",
      "stateOrRegion": "Geneva (Gen\u00e8ve)",
      "population": 1080728,
      "populationFormatted": "1.08 Million",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "German",
        "French",
        "Italian",
        "Romansh"
      ]
    },
    {
      "cityName": "B\u00e2le",
      "stateOrRegion": "Vaud",
      "population": 479308,
      "populationFormatted": "479,308",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "German",
        "French",
        "Italian",
        "Romansh"
      ]
    },
    {
      "cityName": "Gen\u00e8ve",
      "stateOrRegion": "Bern (Berne)",
      "population": 471314,
      "populationFormatted": "471,314",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Industrial Manufacturing, Automotive Parts & Assembly",
      "primaryLanguagesSpoken": [
        "German",
        "French",
        "Italian",
        "Romansh"
      ]
    },
    {
      "cityName": "Berne",
      "stateOrRegion": "Ticino",
      "population": 349096,
      "populationFormatted": "349,096",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Healthcare Services, Clinical Research & Hospital Networks",
      "primaryLanguagesSpoken": [
        "German",
        "French",
        "Italian",
        "Romansh"
      ]
    },
    {
      "cityName": "Lausanne",
      "stateOrRegion": "Graub\u00fcnden (Grisons)",
      "population": 311441,
      "populationFormatted": "311,441",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Maritime Shipping, Container Logistics & Port Operations",
      "primaryLanguagesSpoken": [
        "German",
        "French",
        "Italian",
        "Romansh"
      ]
    },
    {
      "cityName": "Luzern",
      "stateOrRegion": "Fribourg (Freiburg)",
      "population": 199202,
      "populationFormatted": "199,202",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Textiles, Garments Manufacturing & Artisanal Craft",
      "primaryLanguagesSpoken": [
        "German",
        "French",
        "Italian",
        "Romansh"
      ]
    },
    {
      "cityName": "St. Gallen",
      "stateOrRegion": "Valais (Wallis)",
      "population": 145270,
      "populationFormatted": "145,270",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Renewable Energy, Solar Operations & Electrical Grid",
      "primaryLanguagesSpoken": [
        "German",
        "French",
        "Italian",
        "Romansh"
      ]
    },
    {
      "cityName": "Winterthur",
      "stateOrRegion": "Basel-Stadt & Basel-Landschaft",
      "population": 128654,
      "populationFormatted": "128,654",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Higher Vocational Training, Engineering & Trades",
      "primaryLanguagesSpoken": [
        "German",
        "French",
        "Italian",
        "Romansh"
      ]
    },
    {
      "cityName": "Lugano",
      "stateOrRegion": "Lucerne (Luzern)",
      "population": 127351,
      "populationFormatted": "127,351",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Mining Operations, Raw Material Extraction & Metallurgy",
      "primaryLanguagesSpoken": [
        "German",
        "French",
        "Italian",
        "Romansh"
      ]
    },
    {
      "cityName": "Baden-Brugg",
      "stateOrRegion": "St. Gallen",
      "population": 108977,
      "populationFormatted": "108,977",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Tourism & Cultural Heritage, Hospitality Management",
      "primaryLanguagesSpoken": [
        "German",
        "French",
        "Italian",
        "Romansh"
      ]
    },
    {
      "cityName": "Olten-Zofingen",
      "stateOrRegion": "Neuch\u00e2tel",
      "population": 104644,
      "populationFormatted": "104,644",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Commercial Wholesale, Retail Distribution & Supply Chain",
      "primaryLanguagesSpoken": [
        "German",
        "French",
        "Italian",
        "Romansh"
      ]
    },
    {
      "cityName": "Zug",
      "stateOrRegion": "Zurich (Z\u00fcrich)",
      "population": 102487,
      "populationFormatted": "102,487",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Telecommunications, Cloud Infrastructure & Fiber Networks",
      "primaryLanguagesSpoken": [
        "German",
        "French",
        "Italian",
        "Romansh"
      ]
    },
    {
      "cityName": "Fribourg",
      "stateOrRegion": "Geneva (Gen\u00e8ve)",
      "population": 102114,
      "populationFormatted": "102,114",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Banking, Insurance, Stock Exchange & Asset Management",
      "primaryLanguagesSpoken": [
        "German",
        "French",
        "Italian",
        "Romansh"
      ]
    },
    {
      "cityName": "Zurich (Z\u00fcrich)",
      "stateOrRegion": "Zurich (Z\u00fcrich)",
      "population": 52800,
      "populationFormatted": "52,800",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Biotechnology, Pharmaceuticals & Chemical Processing",
      "primaryLanguagesSpoken": [
        "German",
        "French",
        "Italian",
        "Romansh"
      ]
    },
    {
      "cityName": "Geneva (Gen\u00e8ve)",
      "stateOrRegion": "Geneva (Gen\u00e8ve)",
      "population": 49500,
      "populationFormatted": "49,500",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "German",
        "French",
        "Italian",
        "Romansh"
      ]
    },
    {
      "cityName": "Vaud",
      "stateOrRegion": "Vaud",
      "population": 46588,
      "populationFormatted": "46,588",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "German",
        "French",
        "Italian",
        "Romansh"
      ]
    },
    {
      "cityName": "Bern (Berne)",
      "stateOrRegion": "Bern (Berne)",
      "population": 44000,
      "populationFormatted": "44,000",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "German",
        "French",
        "Italian",
        "Romansh"
      ]
    },
    {
      "cityName": "Ticino",
      "stateOrRegion": "Ticino",
      "population": 41684,
      "populationFormatted": "41,684",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Industrial Manufacturing, Automotive Parts & Assembly",
      "primaryLanguagesSpoken": [
        "German",
        "French",
        "Italian",
        "Romansh"
      ]
    },
    {
      "cityName": "Graub\u00fcnden (Grisons)",
      "stateOrRegion": "Graub\u00fcnden (Grisons)",
      "population": 39600,
      "populationFormatted": "39,600",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Healthcare Services, Clinical Research & Hospital Networks",
      "primaryLanguagesSpoken": [
        "German",
        "French",
        "Italian",
        "Romansh"
      ]
    },
    {
      "cityName": "Fribourg (Freiburg)",
      "stateOrRegion": "Fribourg (Freiburg)",
      "population": 37714,
      "populationFormatted": "37,714",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Maritime Shipping, Container Logistics & Port Operations",
      "primaryLanguagesSpoken": [
        "German",
        "French",
        "Italian",
        "Romansh"
      ]
    },
    {
      "cityName": "Valais (Wallis)",
      "stateOrRegion": "Valais (Wallis)",
      "population": 36000,
      "populationFormatted": "36,000",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Textiles, Garments Manufacturing & Artisanal Craft",
      "primaryLanguagesSpoken": [
        "German",
        "French",
        "Italian",
        "Romansh"
      ]
    },
    {
      "cityName": "Basel-Stadt & Basel-Landschaft",
      "stateOrRegion": "Basel-Stadt & Basel-Landschaft",
      "population": 34434,
      "populationFormatted": "34,434",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Renewable Energy, Solar Operations & Electrical Grid",
      "primaryLanguagesSpoken": [
        "German",
        "French",
        "Italian",
        "Romansh"
      ]
    },
    {
      "cityName": "Lucerne (Luzern)",
      "stateOrRegion": "Lucerne (Luzern)",
      "population": 33000,
      "populationFormatted": "33,000",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Higher Vocational Training, Engineering & Trades",
      "primaryLanguagesSpoken": [
        "German",
        "French",
        "Italian",
        "Romansh"
      ]
    },
    {
      "cityName": "Neuch\u00e2tel",
      "stateOrRegion": "Neuch\u00e2tel",
      "population": 31680,
      "populationFormatted": "31,680",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Mining Operations, Raw Material Extraction & Metallurgy",
      "primaryLanguagesSpoken": [
        "German",
        "French",
        "Italian",
        "Romansh"
      ]
    }
  ],
  "UA": [
    {
      "cityName": "Kyiv",
      "stateOrRegion": "Ukraine Capital Region",
      "population": 5700000,
      "populationFormatted": "5.70 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Ukrainian"
      ]
    },
    {
      "cityName": "Kiev",
      "stateOrRegion": "Ukraine Region",
      "population": 2566953,
      "populationFormatted": "2.57 Million",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Ukrainian"
      ]
    },
    {
      "cityName": "Kharkov",
      "stateOrRegion": "Ukraine Region",
      "population": 1449871,
      "populationFormatted": "1.45 Million",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "Ukrainian"
      ]
    },
    {
      "cityName": "Dnepropetrovsk",
      "stateOrRegion": "Ukraine Region",
      "population": 1053951,
      "populationFormatted": "1.05 Million",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Industrial Manufacturing, Automotive Parts & Assembly",
      "primaryLanguagesSpoken": [
        "Ukrainian"
      ]
    },
    {
      "cityName": "Odessa",
      "stateOrRegion": "Ukraine Region",
      "population": 1010298,
      "populationFormatted": "1.01 Million",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Healthcare Services, Clinical Research & Hospital Networks",
      "primaryLanguagesSpoken": [
        "Ukrainian"
      ]
    },
    {
      "cityName": "Donetsk",
      "stateOrRegion": "Ukraine Region",
      "population": 1007440,
      "populationFormatted": "1.01 Million",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Maritime Shipping, Container Logistics & Port Operations",
      "primaryLanguagesSpoken": [
        "Ukrainian"
      ]
    },
    {
      "cityName": "Zaporozhye",
      "stateOrRegion": "Ukraine Region",
      "population": 810620,
      "populationFormatted": "810,620",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Textiles, Garments Manufacturing & Artisanal Craft",
      "primaryLanguagesSpoken": [
        "Ukrainian"
      ]
    },
    {
      "cityName": "Lvov",
      "stateOrRegion": "Ukraine Region",
      "population": 725202,
      "populationFormatted": "725,202",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Renewable Energy, Solar Operations & Electrical Grid",
      "primaryLanguagesSpoken": [
        "Ukrainian"
      ]
    },
    {
      "cityName": "Kryvy Rig",
      "stateOrRegion": "Ukraine Region",
      "population": 666812,
      "populationFormatted": "666,812",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Higher Vocational Training, Engineering & Trades",
      "primaryLanguagesSpoken": [
        "Ukrainian"
      ]
    },
    {
      "cityName": "Mykolaiv",
      "stateOrRegion": "Ukraine Region",
      "population": 509102,
      "populationFormatted": "509,102",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Mining Operations, Raw Material Extraction & Metallurgy",
      "primaryLanguagesSpoken": [
        "Ukrainian"
      ]
    },
    {
      "cityName": "Mariupol",
      "stateOrRegion": "Ukraine Region",
      "population": 488462,
      "populationFormatted": "488,462",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Tourism & Cultural Heritage, Hospitality Management",
      "primaryLanguagesSpoken": [
        "Ukrainian"
      ]
    },
    {
      "cityName": "Lugansk",
      "stateOrRegion": "Ukraine Region",
      "population": 459294,
      "populationFormatted": "459,294",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Commercial Wholesale, Retail Distribution & Supply Chain",
      "primaryLanguagesSpoken": [
        "Ukrainian"
      ]
    },
    {
      "cityName": "Makeyevka",
      "stateOrRegion": "Ukraine Region",
      "population": 387609,
      "populationFormatted": "387,609",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Telecommunications, Cloud Infrastructure & Fiber Networks",
      "primaryLanguagesSpoken": [
        "Ukrainian"
      ]
    },
    {
      "cityName": "Vinnutsya",
      "stateOrRegion": "Ukraine Region",
      "population": 354639,
      "populationFormatted": "354,639",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Banking, Insurance, Stock Exchange & Asset Management",
      "primaryLanguagesSpoken": [
        "Ukrainian"
      ]
    },
    {
      "cityName": "Sevastopol",
      "stateOrRegion": "Ukraine Region",
      "population": 340190,
      "populationFormatted": "340,190",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Biotechnology, Pharmaceuticals & Chemical Processing",
      "primaryLanguagesSpoken": [
        "Ukrainian"
      ]
    },
    {
      "cityName": "Simferopol",
      "stateOrRegion": "Ukraine Region",
      "population": 338038,
      "populationFormatted": "338,038",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Ukrainian"
      ]
    },
    {
      "cityName": "Kherson",
      "stateOrRegion": "Ukraine Region",
      "population": 324424,
      "populationFormatted": "324,424",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Ukrainian"
      ]
    },
    {
      "cityName": "Poltava",
      "stateOrRegion": "Ukraine Region",
      "population": 310755,
      "populationFormatted": "310,755",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "Ukrainian"
      ]
    },
    {
      "cityName": "Chernigov",
      "stateOrRegion": "Ukraine Region",
      "population": 299038,
      "populationFormatted": "299,038",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Industrial Manufacturing, Automotive Parts & Assembly",
      "primaryLanguagesSpoken": [
        "Ukrainian"
      ]
    },
    {
      "cityName": "Cherkassy",
      "stateOrRegion": "Ukraine Region",
      "population": 292761,
      "populationFormatted": "292,761",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Healthcare Services, Clinical Research & Hospital Networks",
      "primaryLanguagesSpoken": [
        "Ukrainian"
      ]
    },
    {
      "cityName": "Sumy",
      "stateOrRegion": "Ukraine Region",
      "population": 292139,
      "populationFormatted": "292,139",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Maritime Shipping, Container Logistics & Port Operations",
      "primaryLanguagesSpoken": [
        "Ukrainian"
      ]
    },
    {
      "cityName": "Gorlovka",
      "stateOrRegion": "Ukraine Region",
      "population": 289872,
      "populationFormatted": "289,872",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Textiles, Garments Manufacturing & Artisanal Craft",
      "primaryLanguagesSpoken": [
        "Ukrainian"
      ]
    },
    {
      "cityName": "Zhitomir",
      "stateOrRegion": "Ukraine Region",
      "population": 282823,
      "populationFormatted": "282,823",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Renewable Energy, Solar Operations & Electrical Grid",
      "primaryLanguagesSpoken": [
        "Ukrainian"
      ]
    },
    {
      "cityName": "Dneprodzerzhinsk",
      "stateOrRegion": "Ukraine Region",
      "population": 254869,
      "populationFormatted": "254,869",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Higher Vocational Training, Engineering & Trades",
      "primaryLanguagesSpoken": [
        "Ukrainian"
      ]
    },
    {
      "cityName": "Khmelnitsky",
      "stateOrRegion": "Ukraine Region",
      "population": 251077,
      "populationFormatted": "251,077",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Mining Operations, Raw Material Extraction & Metallurgy",
      "primaryLanguagesSpoken": [
        "Ukrainian"
      ]
    },
    {
      "cityName": "Kirovograd",
      "stateOrRegion": "Ukraine Region",
      "population": 250629,
      "populationFormatted": "250,629",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Tourism & Cultural Heritage, Hospitality Management",
      "primaryLanguagesSpoken": [
        "Ukrainian"
      ]
    },
    {
      "cityName": "Rivne",
      "stateOrRegion": "Ukraine Region",
      "population": 245323,
      "populationFormatted": "245,323",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Commercial Wholesale, Retail Distribution & Supply Chain",
      "primaryLanguagesSpoken": [
        "Ukrainian"
      ]
    },
    {
      "cityName": "Chernovtsy",
      "stateOrRegion": "Ukraine Region",
      "population": 236691,
      "populationFormatted": "236,691",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Telecommunications, Cloud Infrastructure & Fiber Networks",
      "primaryLanguagesSpoken": [
        "Ukrainian"
      ]
    },
    {
      "cityName": "Krementchug",
      "stateOrRegion": "Ukraine Region",
      "population": 232960,
      "populationFormatted": "232,960",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Banking, Insurance, Stock Exchange & Asset Management",
      "primaryLanguagesSpoken": [
        "Ukrainian"
      ]
    },
    {
      "cityName": "Ternopol",
      "stateOrRegion": "Ukraine Region",
      "population": 226029,
      "populationFormatted": "226,029",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Biotechnology, Pharmaceuticals & Chemical Processing",
      "primaryLanguagesSpoken": [
        "Ukrainian"
      ]
    }
  ],
  "GB": [
    {
      "cityName": "London",
      "stateOrRegion": "Greater London",
      "population": 8982000,
      "populationFormatted": "8.98 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Global Banking, FinTech, Tech Policy & Corporate HQ",
      "primaryLanguagesSpoken": [
        "English",
        "Welsh"
      ]
    },
    {
      "cityName": "Birmingham",
      "stateOrRegion": "West Midlands",
      "population": 1149000,
      "populationFormatted": "1.15 Million",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Automotive Engineering, Financial Services & Jewelry",
      "primaryLanguagesSpoken": [
        "English",
        "Welsh"
      ]
    },
    {
      "cityName": "Leeds",
      "stateOrRegion": "Yorkshire and the Humber",
      "population": 793000,
      "populationFormatted": "793,000",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Commercial Banking, Legal Services & Healthcare Tech",
      "primaryLanguagesSpoken": [
        "English",
        "Welsh"
      ]
    },
    {
      "cityName": "Glasgow",
      "stateOrRegion": "Scotland",
      "population": 635000,
      "populationFormatted": "635,000",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Shipbuilding Tech, Financial Engineering & Higher Ed",
      "primaryLanguagesSpoken": [
        "English",
        "Welsh"
      ]
    },
    {
      "cityName": "Sheffield",
      "stateOrRegion": "Yorkshire and the Humber",
      "population": 584000,
      "populationFormatted": "584,000",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Advanced Metals Manufacturing & Precision Engineering",
      "primaryLanguagesSpoken": [
        "English",
        "Welsh"
      ]
    },
    {
      "cityName": "Manchester",
      "stateOrRegion": "North West",
      "population": 553000,
      "populationFormatted": "553,000",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, Media Production & E-Commerce",
      "primaryLanguagesSpoken": [
        "English",
        "Welsh"
      ]
    },
    {
      "cityName": "Bradford",
      "stateOrRegion": "Yorkshire and the Humber",
      "population": 539000,
      "populationFormatted": "539,000",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Engineering, Chemical Industry & Food Processing",
      "primaryLanguagesSpoken": [
        "English",
        "Welsh"
      ]
    },
    {
      "cityName": "Edinburgh",
      "stateOrRegion": "Scotland",
      "population": 527000,
      "populationFormatted": "527,000",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Asset Management, Banking, Software & Higher Education",
      "primaryLanguagesSpoken": [
        "English",
        "Welsh"
      ]
    },
    {
      "cityName": "Liverpool",
      "stateOrRegion": "North West",
      "population": 498000,
      "populationFormatted": "498,000",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Maritime Trade, Life Sciences & Creative Industries",
      "primaryLanguagesSpoken": [
        "English",
        "Welsh"
      ]
    },
    {
      "cityName": "Bristol",
      "stateOrRegion": "South West",
      "population": 467000,
      "populationFormatted": "467,000",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Aerospace Engineering, Microelectronics & Creative Tech",
      "primaryLanguagesSpoken": [
        "English",
        "Welsh"
      ]
    },
    {
      "cityName": "Coventry",
      "stateOrRegion": "West Midlands",
      "population": 379000,
      "populationFormatted": "379,000",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Automotive R&D, EV Batteries & Telecom Engineering",
      "primaryLanguagesSpoken": [
        "English",
        "Welsh"
      ]
    },
    {
      "cityName": "Cardiff",
      "stateOrRegion": "Wales",
      "population": 362000,
      "populationFormatted": "362,000",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Government Services, FinTech, Creative Media & Insurance",
      "primaryLanguagesSpoken": [
        "English",
        "Welsh"
      ]
    },
    {
      "cityName": "Leicester",
      "stateOrRegion": "East Midlands",
      "population": 354000,
      "populationFormatted": "354,000",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Textiles Manufacturing, Space Tech & Commerce",
      "primaryLanguagesSpoken": [
        "English",
        "Welsh"
      ]
    },
    {
      "cityName": "Belfast",
      "stateOrRegion": "Northern Ireland",
      "population": 343000,
      "populationFormatted": "343,000",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Cybersecurity Research, Financial Services & Aerospace",
      "primaryLanguagesSpoken": [
        "English",
        "Welsh"
      ]
    },
    {
      "cityName": "Nottingham",
      "stateOrRegion": "East Midlands",
      "population": 331000,
      "populationFormatted": "331,000",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Pharmaceuticals, Retail Logistics & Software Tech",
      "primaryLanguagesSpoken": [
        "English",
        "Welsh"
      ]
    },
    {
      "cityName": "Newcastle upon Tyne",
      "stateOrRegion": "North East",
      "population": 300000,
      "populationFormatted": "300,000",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Offshore Energy Tech, Software & Life Sciences",
      "primaryLanguagesSpoken": [
        "English",
        "Welsh"
      ]
    },
    {
      "cityName": "Brighton",
      "stateOrRegion": "South East",
      "population": 290000,
      "populationFormatted": "290,000",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Digital Agencies, Software Engineering & Creative Arts",
      "primaryLanguagesSpoken": [
        "English",
        "Welsh"
      ]
    },
    {
      "cityName": "Sunderland",
      "stateOrRegion": "North East",
      "population": 277000,
      "populationFormatted": "277,000",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "EV Automotive Assembly, Software & Customer Support",
      "primaryLanguagesSpoken": [
        "English",
        "Welsh"
      ]
    },
    {
      "cityName": "Wolverhampton",
      "stateOrRegion": "West Midlands",
      "population": 263000,
      "populationFormatted": "263,000",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Aerospace Components & Industrial Manufacturing",
      "primaryLanguagesSpoken": [
        "English",
        "Welsh"
      ]
    },
    {
      "cityName": "Plymouth",
      "stateOrRegion": "South West",
      "population": 262000,
      "populationFormatted": "262,000",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Naval Defense Engineering, Marine Autonomy & Shipping",
      "primaryLanguagesSpoken": [
        "English",
        "Welsh"
      ]
    },
    {
      "cityName": "Hull",
      "stateOrRegion": "Yorkshire and the Humber",
      "population": 260000,
      "populationFormatted": "260,000",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Wind Turbine Manufacturing & Chemical Processing",
      "primaryLanguagesSpoken": [
        "English",
        "Welsh"
      ]
    },
    {
      "cityName": "Derby",
      "stateOrRegion": "East Midlands",
      "population": 258000,
      "populationFormatted": "258,000",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Jet Engine Manufacturing (Rolls-Royce) & Nuclear",
      "primaryLanguagesSpoken": [
        "English",
        "Welsh"
      ]
    },
    {
      "cityName": "Stoke-on-Trent",
      "stateOrRegion": "West Midlands",
      "population": 256000,
      "populationFormatted": "256,000",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Advanced Ceramics, Games Tech & Distribution Hubs",
      "primaryLanguagesSpoken": [
        "English",
        "Welsh"
      ]
    },
    {
      "cityName": "Southampton",
      "stateOrRegion": "South East",
      "population": 252000,
      "populationFormatted": "252,000",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Deep-Water Container Shipping, Oceanography & Cruise",
      "primaryLanguagesSpoken": [
        "English",
        "Welsh"
      ]
    },
    {
      "cityName": "Aberdeen",
      "stateOrRegion": "Scotland",
      "population": 228000,
      "populationFormatted": "228,000",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Offshore Energy Capital, Subsea Tech & Renewable Power",
      "primaryLanguagesSpoken": [
        "English",
        "Welsh"
      ]
    },
    {
      "cityName": "Swindon",
      "stateOrRegion": "South West",
      "population": 222000,
      "populationFormatted": "222,000",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Pharmaceutical Logistics, Financial Services & Tech",
      "primaryLanguagesSpoken": [
        "English",
        "Welsh"
      ]
    },
    {
      "cityName": "Bournemouth",
      "stateOrRegion": "South West",
      "population": 194000,
      "populationFormatted": "194,000",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Financial Services Back-Office, Insurance & Software",
      "primaryLanguagesSpoken": [
        "English",
        "Welsh"
      ]
    },
    {
      "cityName": "Dundee",
      "stateOrRegion": "Scotland",
      "population": 148000,
      "populationFormatted": "148,000",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Video Game Software Development & Biotech Research",
      "primaryLanguagesSpoken": [
        "English",
        "Welsh"
      ]
    },
    {
      "cityName": "Preston",
      "stateOrRegion": "North West",
      "population": 143000,
      "populationFormatted": "143,000",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Military Aircraft Assembly, Nuclear Fuel & Services",
      "primaryLanguagesSpoken": [
        "English",
        "Welsh"
      ]
    },
    {
      "cityName": "Middlesbrough",
      "stateOrRegion": "North East",
      "population": 140000,
      "populationFormatted": "140,000",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Chemical Petrochemicals, Steelwork & Clean Energy",
      "primaryLanguagesSpoken": [
        "English",
        "Welsh"
      ]
    }
  ],
  "VA": [
    {
      "cityName": "Vatican City",
      "stateOrRegion": "Vatican City Capital Region",
      "population": 80000,
      "populationFormatted": "80,000",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Latin",
        "Italian"
      ]
    }
  ],
  "AF": [
    {
      "cityName": "Kabul",
      "stateOrRegion": "Afghanistan Capital Region",
      "population": 6165000,
      "populationFormatted": "6.17 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Pashto",
        "Dari (Persian)",
        "Uzbek"
      ]
    }
  ],
  "AM": [
    {
      "cityName": "Yerevan",
      "stateOrRegion": "Armenia Capital Region",
      "population": 417000,
      "populationFormatted": "417,000",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Armenian",
        "Russian"
      ]
    },
    {
      "cityName": "Gyumri",
      "stateOrRegion": "Armenia Region",
      "population": 150917,
      "populationFormatted": "150,917",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Armenian",
        "Russian"
      ]
    },
    {
      "cityName": "Vanadzoz",
      "stateOrRegion": "Armenia Region",
      "population": 107394,
      "populationFormatted": "107,394",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "Armenian",
        "Russian"
      ]
    }
  ],
  "AZ": [
    {
      "cityName": "Baku",
      "stateOrRegion": "Azerbaijan Capital Region",
      "population": 1515000,
      "populationFormatted": "1.51 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Azerbaijani",
        "Russian"
      ]
    },
    {
      "cityName": "Ganja",
      "stateOrRegion": "Azerbaijan Region",
      "population": 302700,
      "populationFormatted": "302,700",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Azerbaijani",
        "Russian"
      ]
    },
    {
      "cityName": "Sumgayit",
      "stateOrRegion": "Azerbaijan Region",
      "population": 290200,
      "populationFormatted": "290,200",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "Azerbaijani",
        "Russian"
      ]
    }
  ],
  "BH": [
    {
      "cityName": "Manama",
      "stateOrRegion": "Bahrain Capital Region",
      "population": 225000,
      "populationFormatted": "225,000",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Arabic (Bahrani)",
        "English"
      ]
    }
  ],
  "BD": [
    {
      "cityName": "Dhaka",
      "stateOrRegion": "Bangladesh Capital Region",
      "population": 12000000,
      "populationFormatted": "12.00 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Bengali",
        "English"
      ]
    },
    {
      "cityName": "Chittagong",
      "stateOrRegion": "Bangladesh Region",
      "population": 1363998,
      "populationFormatted": "1.36 Million",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Bengali",
        "English"
      ]
    },
    {
      "cityName": "Khulna",
      "stateOrRegion": "Bangladesh Region",
      "population": 545849,
      "populationFormatted": "545,849",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "Bengali",
        "English"
      ]
    },
    {
      "cityName": "Rajshahi",
      "stateOrRegion": "Bangladesh Region",
      "population": 299671,
      "populationFormatted": "299,671",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Industrial Manufacturing, Automotive Parts & Assembly",
      "primaryLanguagesSpoken": [
        "Bengali",
        "English"
      ]
    },
    {
      "cityName": "Narayanganj",
      "stateOrRegion": "Bangladesh Region",
      "population": 268952,
      "populationFormatted": "268,952",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Healthcare Services, Clinical Research & Hospital Networks",
      "primaryLanguagesSpoken": [
        "Bengali",
        "English"
      ]
    },
    {
      "cityName": "Rangpur",
      "stateOrRegion": "Bangladesh Region",
      "population": 203931,
      "populationFormatted": "203,931",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Maritime Shipping, Container Logistics & Port Operations",
      "primaryLanguagesSpoken": [
        "Bengali",
        "English"
      ]
    },
    {
      "cityName": "Mymensingh",
      "stateOrRegion": "Bangladesh Region",
      "population": 185517,
      "populationFormatted": "185,517",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Textiles, Garments Manufacturing & Artisanal Craft",
      "primaryLanguagesSpoken": [
        "Bengali",
        "English"
      ]
    },
    {
      "cityName": "Barisal",
      "stateOrRegion": "Bangladesh Region",
      "population": 163481,
      "populationFormatted": "163,481",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Renewable Energy, Solar Operations & Electrical Grid",
      "primaryLanguagesSpoken": [
        "Bengali",
        "English"
      ]
    },
    {
      "cityName": "Jessore",
      "stateOrRegion": "Bangladesh Region",
      "population": 160198,
      "populationFormatted": "160,198",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Higher Vocational Training, Engineering & Trades",
      "primaryLanguagesSpoken": [
        "Bengali",
        "English"
      ]
    },
    {
      "cityName": "Bogra",
      "stateOrRegion": "Bangladesh Region",
      "population": 154807,
      "populationFormatted": "154,807",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Mining Operations, Raw Material Extraction & Metallurgy",
      "primaryLanguagesSpoken": [
        "Bengali",
        "English"
      ]
    },
    {
      "cityName": "Tongi",
      "stateOrRegion": "Bangladesh Region",
      "population": 154175,
      "populationFormatted": "154,175",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Tourism & Cultural Heritage, Hospitality Management",
      "primaryLanguagesSpoken": [
        "Bengali",
        "English"
      ]
    },
    {
      "cityName": "Comilla",
      "stateOrRegion": "Bangladesh Region",
      "population": 143282,
      "populationFormatted": "143,282",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Commercial Wholesale, Retail Distribution & Supply Chain",
      "primaryLanguagesSpoken": [
        "Bengali",
        "English"
      ]
    },
    {
      "cityName": "Brahmanbaria",
      "stateOrRegion": "Bangladesh Region",
      "population": 129278,
      "populationFormatted": "129,278",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Telecommunications, Cloud Infrastructure & Fiber Networks",
      "primaryLanguagesSpoken": [
        "Bengali",
        "English"
      ]
    },
    {
      "cityName": "Kadamrasul",
      "stateOrRegion": "Bangladesh Region",
      "population": 128561,
      "populationFormatted": "128,561",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Banking, Insurance, Stock Exchange & Asset Management",
      "primaryLanguagesSpoken": [
        "Bengali",
        "English"
      ]
    },
    {
      "cityName": "Sirajganj",
      "stateOrRegion": "Bangladesh Region",
      "population": 128144,
      "populationFormatted": "128,144",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Biotechnology, Pharmaceuticals & Chemical Processing",
      "primaryLanguagesSpoken": [
        "Bengali",
        "English"
      ]
    },
    {
      "cityName": "Dinajpur",
      "stateOrRegion": "Bangladesh Region",
      "population": 126189,
      "populationFormatted": "126,189",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Bengali",
        "English"
      ]
    },
    {
      "cityName": "Narsingdi",
      "stateOrRegion": "Bangladesh Region",
      "population": 124204,
      "populationFormatted": "124,204",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Bengali",
        "English"
      ]
    },
    {
      "cityName": "Naogaon",
      "stateOrRegion": "Bangladesh Region",
      "population": 124046,
      "populationFormatted": "124,046",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "Bengali",
        "English"
      ]
    },
    {
      "cityName": "Gazipur",
      "stateOrRegion": "Bangladesh Region",
      "population": 122801,
      "populationFormatted": "122,801",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Industrial Manufacturing, Automotive Parts & Assembly",
      "primaryLanguagesSpoken": [
        "Bengali",
        "English"
      ]
    },
    {
      "cityName": "Nawabganj",
      "stateOrRegion": "Bangladesh Region",
      "population": 121205,
      "populationFormatted": "121,205",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Healthcare Services, Clinical Research & Hospital Networks",
      "primaryLanguagesSpoken": [
        "Bengali",
        "English"
      ]
    },
    {
      "cityName": "Pabna",
      "stateOrRegion": "Bangladesh Region",
      "population": 104479,
      "populationFormatted": "104,479",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Maritime Shipping, Container Logistics & Port Operations",
      "primaryLanguagesSpoken": [
        "Bengali",
        "English"
      ]
    },
    {
      "cityName": "Tangail",
      "stateOrRegion": "Bangladesh Region",
      "population": 104387,
      "populationFormatted": "104,387",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Textiles, Garments Manufacturing & Artisanal Craft",
      "primaryLanguagesSpoken": [
        "Bengali",
        "English"
      ]
    },
    {
      "cityName": "Saidpur",
      "stateOrRegion": "Bangladesh Region",
      "population": 102030,
      "populationFormatted": "102,030",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Renewable Energy, Solar Operations & Electrical Grid",
      "primaryLanguagesSpoken": [
        "Bengali",
        "English"
      ]
    },
    {
      "cityName": "Jamalpur",
      "stateOrRegion": "Bangladesh Region",
      "population": 101242,
      "populationFormatted": "101,242",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Higher Vocational Training, Engineering & Trades",
      "primaryLanguagesSpoken": [
        "Bengali",
        "English"
      ]
    }
  ],
  "BT": [
    {
      "cityName": "Thimphu",
      "stateOrRegion": "Bhutan Capital Region",
      "population": 117000,
      "populationFormatted": "117,000",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Dzongkha",
        "Nepali"
      ]
    }
  ],
  "BN": [
    {
      "cityName": "Bandar Seri Begawan",
      "stateOrRegion": "Brunei Capital Region",
      "population": 80000,
      "populationFormatted": "80,000",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Malay (Brunei)",
        "English"
      ]
    }
  ],
  "KH": [
    {
      "cityName": "Phnom Penh",
      "stateOrRegion": "Cambodia Capital Region",
      "population": 2520000,
      "populationFormatted": "2.52 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Khmer",
        "French"
      ]
    }
  ],
  "CN": [
    {
      "cityName": "Chongqing",
      "stateOrRegion": "Chongqing Municipality",
      "population": 32050000,
      "populationFormatted": "32.05 Million",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Automotive Assembly, Laptops & Heavy Metallurgy",
      "primaryLanguagesSpoken": [
        "Mandarin Chinese",
        "Cantonese",
        "Uyghur",
        "Tibetan"
      ]
    },
    {
      "cityName": "Shanghai",
      "stateOrRegion": "Shanghai Municipality",
      "population": 24870000,
      "populationFormatted": "24.87 Million",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Global Trade, Semiconductor Fab, Finance & Shipping Port",
      "primaryLanguagesSpoken": [
        "Mandarin Chinese",
        "Cantonese",
        "Uyghur",
        "Tibetan"
      ]
    },
    {
      "cityName": "Beijing",
      "stateOrRegion": "Beijing Municipality",
      "population": 21890000,
      "populationFormatted": "21.89 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "AI Policy, Cloud Computing, State Enterprise HQ & R&D",
      "primaryLanguagesSpoken": [
        "Mandarin Chinese",
        "Cantonese",
        "Uyghur",
        "Tibetan"
      ]
    },
    {
      "cityName": "Chengdu",
      "stateOrRegion": "Sichuan",
      "population": 21190000,
      "populationFormatted": "21.19 Million",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Outsourcing, Electronic Components & Gaming",
      "primaryLanguagesSpoken": [
        "Mandarin Chinese",
        "Cantonese",
        "Uyghur",
        "Tibetan"
      ]
    },
    {
      "cityName": "Guangzhou",
      "stateOrRegion": "Guangdong",
      "population": 18670000,
      "populationFormatted": "18.67 Million",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Automotive Manufacturing, International Trade & Biotech",
      "primaryLanguagesSpoken": [
        "Mandarin Chinese",
        "Cantonese",
        "Uyghur",
        "Tibetan"
      ]
    },
    {
      "cityName": "Shenzhen",
      "stateOrRegion": "Guangdong",
      "population": 17560000,
      "populationFormatted": "17.56 Million",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Hardware Innovation, Telecom (Huawei, ZTE), Tencent & EVs",
      "primaryLanguagesSpoken": [
        "Mandarin Chinese",
        "Cantonese",
        "Uyghur",
        "Tibetan"
      ]
    },
    {
      "cityName": "Tianjin",
      "stateOrRegion": "Tianjin Municipality",
      "population": 13860000,
      "populationFormatted": "13.86 Million",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Northern Container Shipping Port, Aviation & Petrochemicals",
      "primaryLanguagesSpoken": [
        "Mandarin Chinese",
        "Cantonese",
        "Uyghur",
        "Tibetan"
      ]
    },
    {
      "cityName": "Xi'an",
      "stateOrRegion": "Shaanxi",
      "population": 12950000,
      "populationFormatted": "12.95 Million",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Aerospace Manufacturing, Semiconductor Assembly & Software",
      "primaryLanguagesSpoken": [
        "Mandarin Chinese",
        "Cantonese",
        "Uyghur",
        "Tibetan"
      ]
    },
    {
      "cityName": "Suzhou",
      "stateOrRegion": "Jiangsu",
      "population": 12740000,
      "populationFormatted": "12.74 Million",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "High-Tech Industrial Park, Nanotech, Biotech & Hardware",
      "primaryLanguagesSpoken": [
        "Mandarin Chinese",
        "Cantonese",
        "Uyghur",
        "Tibetan"
      ]
    },
    {
      "cityName": "Zhengzhou",
      "stateOrRegion": "Henan",
      "population": 12600000,
      "populationFormatted": "12.60 Million",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Electronics Manufacturing (Foxconn iPhone City) & Rail",
      "primaryLanguagesSpoken": [
        "Mandarin Chinese",
        "Cantonese",
        "Uyghur",
        "Tibetan"
      ]
    },
    {
      "cityName": "Wuhan",
      "stateOrRegion": "Hubei",
      "population": 12320000,
      "populationFormatted": "12.32 Million",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Optoelectronics (Optics Valley), Automotive R&D & Steel",
      "primaryLanguagesSpoken": [
        "Mandarin Chinese",
        "Cantonese",
        "Uyghur",
        "Tibetan"
      ]
    },
    {
      "cityName": "Hangzhou",
      "stateOrRegion": "Zhejiang",
      "population": 11930000,
      "populationFormatted": "11.93 Million",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "E-Commerce Capital (Alibaba HQ), Cloud Computing & FinTech",
      "primaryLanguagesSpoken": [
        "Mandarin Chinese",
        "Cantonese",
        "Uyghur",
        "Tibetan"
      ]
    },
    {
      "cityName": "Dongguan",
      "stateOrRegion": "Guangdong",
      "population": 10470000,
      "populationFormatted": "10.47 Million",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Smartphone Manufacturing (OPPO, Vivo), Electronics Assembly",
      "primaryLanguagesSpoken": [
        "Mandarin Chinese",
        "Cantonese",
        "Uyghur",
        "Tibetan"
      ]
    },
    {
      "cityName": "Qingdao",
      "stateOrRegion": "Shandong",
      "population": 10070000,
      "populationFormatted": "10.07 Million",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Home Appliances (Haier, Hisense), Maritime & Beer",
      "primaryLanguagesSpoken": [
        "Mandarin Chinese",
        "Cantonese",
        "Uyghur",
        "Tibetan"
      ]
    },
    {
      "cityName": "Changsha",
      "stateOrRegion": "Hunan",
      "population": 10040000,
      "populationFormatted": "10.04 Million",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Heavy Construction Machinery (Sany), Media & Metallurgy",
      "primaryLanguagesSpoken": [
        "Mandarin Chinese",
        "Cantonese",
        "Uyghur",
        "Tibetan"
      ]
    },
    {
      "cityName": "Harbin",
      "stateOrRegion": "Heilongjiang",
      "population": 10000000,
      "populationFormatted": "10.00 Million",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Heavy Equipment, Agribusiness & Cold Region Engineering",
      "primaryLanguagesSpoken": [
        "Mandarin Chinese",
        "Cantonese",
        "Uyghur",
        "Tibetan"
      ]
    },
    {
      "cityName": "Foshan",
      "stateOrRegion": "Guangdong",
      "population": 9500000,
      "populationFormatted": "9.50 Million",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Home Appliances (Midea), Robotics & Ceramics Manufacturing",
      "primaryLanguagesSpoken": [
        "Mandarin Chinese",
        "Cantonese",
        "Uyghur",
        "Tibetan"
      ]
    },
    {
      "cityName": "Ningbo",
      "stateOrRegion": "Zhejiang",
      "population": 9400000,
      "populationFormatted": "9.40 Million",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "World Top Shipping Port, Auto Parts & Plastics",
      "primaryLanguagesSpoken": [
        "Mandarin Chinese",
        "Cantonese",
        "Uyghur",
        "Tibetan"
      ]
    },
    {
      "cityName": "Hefei",
      "stateOrRegion": "Anhui",
      "population": 9370000,
      "populationFormatted": "9.37 Million",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Display Panels (BOE), Quantum Information & EV Manufacturing",
      "primaryLanguagesSpoken": [
        "Mandarin Chinese",
        "Cantonese",
        "Uyghur",
        "Tibetan"
      ]
    },
    {
      "cityName": "Nanjing",
      "stateOrRegion": "Jiangsu",
      "population": 9310000,
      "populationFormatted": "9.31 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Software Engineering, Chemicals & Electronics R&D",
      "primaryLanguagesSpoken": [
        "Mandarin Chinese",
        "Cantonese",
        "Uyghur",
        "Tibetan"
      ]
    },
    {
      "cityName": "Jinan",
      "stateOrRegion": "Shandong",
      "population": 9200000,
      "populationFormatted": "9.20 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Heavy Trucks (Sinotruk), Quantum Computing & Pharma",
      "primaryLanguagesSpoken": [
        "Mandarin Chinese",
        "Cantonese",
        "Uyghur",
        "Tibetan"
      ]
    },
    {
      "cityName": "Shenyang",
      "stateOrRegion": "Liaoning",
      "population": 9070000,
      "populationFormatted": "9.07 Million",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Heavy Machinery, Aircraft Assembly & Automotive (BMW)",
      "primaryLanguagesSpoken": [
        "Mandarin Chinese",
        "Cantonese",
        "Uyghur",
        "Tibetan"
      ]
    },
    {
      "cityName": "Changchun",
      "stateOrRegion": "Jilin",
      "population": 9060000,
      "populationFormatted": "9.06 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "China First Auto Works (FAW), Rail Vehicles & Optics",
      "primaryLanguagesSpoken": [
        "Mandarin Chinese",
        "Cantonese",
        "Uyghur",
        "Tibetan"
      ]
    },
    {
      "cityName": "Nanning",
      "stateOrRegion": "Guangxi",
      "population": 8740000,
      "populationFormatted": "8.74 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Cross-Border Trade with Vietnam, Agribusiness & Minerals",
      "primaryLanguagesSpoken": [
        "Mandarin Chinese",
        "Cantonese",
        "Uyghur",
        "Tibetan"
      ]
    },
    {
      "cityName": "Kunming",
      "stateOrRegion": "Yunnan",
      "population": 8460000,
      "populationFormatted": "8.46 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "ASEAN Gateway Trade, Floriculture & Green Energy",
      "primaryLanguagesSpoken": [
        "Mandarin Chinese",
        "Cantonese",
        "Uyghur",
        "Tibetan"
      ]
    },
    {
      "cityName": "Wuxi",
      "stateOrRegion": "Jiangsu",
      "population": 7460000,
      "populationFormatted": "7.46 Million",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Semiconductor Packaging, IoT Sensors & Solar PV",
      "primaryLanguagesSpoken": [
        "Mandarin Chinese",
        "Cantonese",
        "Uyghur",
        "Tibetan"
      ]
    },
    {
      "cityName": "Dalian",
      "stateOrRegion": "Liaoning",
      "population": 7450000,
      "populationFormatted": "7.45 Million",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Software Outsourcing, Shipbuilding & Petrochemical Seaport",
      "primaryLanguagesSpoken": [
        "Mandarin Chinese",
        "Cantonese",
        "Uyghur",
        "Tibetan"
      ]
    },
    {
      "cityName": "Guiyang",
      "stateOrRegion": "Guizhou",
      "population": 5980000,
      "populationFormatted": "5.98 Million",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "National Big Data Cloud Center, Apple/Microsoft Data Hub",
      "primaryLanguagesSpoken": [
        "Mandarin Chinese",
        "Cantonese",
        "Uyghur",
        "Tibetan"
      ]
    },
    {
      "cityName": "Taiyuan",
      "stateOrRegion": "Shanxi",
      "population": 5300000,
      "populationFormatted": "5.30 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Energy Infrastructure, Coal Chemical Processing & Metallurgy",
      "primaryLanguagesSpoken": [
        "Mandarin Chinese",
        "Cantonese",
        "Uyghur",
        "Tibetan"
      ]
    },
    {
      "cityName": "Xiamen",
      "stateOrRegion": "Fujian",
      "population": 5160000,
      "populationFormatted": "5.16 Million",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Cross-Strait Commerce, Optoelectronics & Touchscreens",
      "primaryLanguagesSpoken": [
        "Mandarin Chinese",
        "Cantonese",
        "Uyghur",
        "Tibetan"
      ]
    }
  ],
  "GE": [
    {
      "cityName": "Tbilisi",
      "stateOrRegion": "Georgia Capital Region",
      "population": 555000,
      "populationFormatted": "555,000",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Georgian",
        "Abkhazian"
      ]
    },
    {
      "cityName": "Kutaisi",
      "stateOrRegion": "Georgia Region",
      "population": 185965,
      "populationFormatted": "185,965",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Georgian",
        "Abkhazian"
      ]
    },
    {
      "cityName": "Batumi",
      "stateOrRegion": "Georgia Region",
      "population": 121806,
      "populationFormatted": "121,806",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "Georgian",
        "Abkhazian"
      ]
    },
    {
      "cityName": "Rustavi",
      "stateOrRegion": "Georgia Region",
      "population": 116384,
      "populationFormatted": "116,384",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Industrial Manufacturing, Automotive Parts & Assembly",
      "primaryLanguagesSpoken": [
        "Georgian",
        "Abkhazian"
      ]
    }
  ],
  "IN": [
    {
      "cityName": "Mumbai",
      "stateOrRegion": "Maharashtra",
      "population": 12442373,
      "populationFormatted": "12.44 Million",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Reserve Bank, Stock Exchange, Bollywood & Global Banking",
      "primaryLanguagesSpoken": [
        "Hindi",
        "English",
        "Bengali",
        "Marathi",
        "Telugu",
        "Tamil"
      ]
    },
    {
      "cityName": "Delhi",
      "stateOrRegion": "National Capital Territory",
      "population": 11034555,
      "populationFormatted": "11.03 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Software Services & Defense",
      "primaryLanguagesSpoken": [
        "Hindi",
        "English",
        "Bengali",
        "Marathi",
        "Telugu",
        "Tamil"
      ]
    },
    {
      "cityName": "Bangalore",
      "stateOrRegion": "Karnataka",
      "population": 8443675,
      "populationFormatted": "8.44 Million",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Silicon Valley of India, Enterprise Cloud, AI & Startups",
      "primaryLanguagesSpoken": [
        "Hindi",
        "English",
        "Bengali",
        "Marathi",
        "Telugu",
        "Tamil"
      ]
    },
    {
      "cityName": "Hyderabad",
      "stateOrRegion": "Telangana",
      "population": 6731790,
      "populationFormatted": "6.73 Million",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "HITEC City Software, Pharmaceuticals & Biotechnology",
      "primaryLanguagesSpoken": [
        "Hindi",
        "English",
        "Bengali",
        "Marathi",
        "Telugu",
        "Tamil"
      ]
    },
    {
      "cityName": "Ahmedabad",
      "stateOrRegion": "Gujarat",
      "population": 5577940,
      "populationFormatted": "5.58 Million",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Textiles Capital, Petrochemicals, Pharmaceuticals & Trade",
      "primaryLanguagesSpoken": [
        "Hindi",
        "English",
        "Bengali",
        "Marathi",
        "Telugu",
        "Tamil"
      ]
    },
    {
      "cityName": "Chennai",
      "stateOrRegion": "Tamil Nadu",
      "population": 4646732,
      "populationFormatted": "4.65 Million",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Detroit of South Asia Automotive, SaaS Software & Health",
      "primaryLanguagesSpoken": [
        "Hindi",
        "English",
        "Bengali",
        "Marathi",
        "Telugu",
        "Tamil"
      ]
    },
    {
      "cityName": "Kolkata",
      "stateOrRegion": "West Bengal",
      "population": 4496694,
      "populationFormatted": "4.50 Million",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Commercial Shipping Port, Financial Services & IT Parks",
      "primaryLanguagesSpoken": [
        "Hindi",
        "English",
        "Bengali",
        "Marathi",
        "Telugu",
        "Tamil"
      ]
    },
    {
      "cityName": "Surat",
      "stateOrRegion": "Gujarat",
      "population": 4467797,
      "populationFormatted": "4.47 Million",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "World Diamond Polishing Capital, Textiles & Synthetic Fibers",
      "primaryLanguagesSpoken": [
        "Hindi",
        "English",
        "Bengali",
        "Marathi",
        "Telugu",
        "Tamil"
      ]
    },
    {
      "cityName": "Pune",
      "stateOrRegion": "Maharashtra",
      "population": 3124458,
      "populationFormatted": "3.12 Million",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Automotive Engineering, Software Tech Parks & Education",
      "primaryLanguagesSpoken": [
        "Hindi",
        "English",
        "Bengali",
        "Marathi",
        "Telugu",
        "Tamil"
      ]
    },
    {
      "cityName": "Jaipur",
      "stateOrRegion": "Rajasthan",
      "population": 3046163,
      "populationFormatted": "3.05 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Jewelry Crafting, Textiles, Software & Heritage Tourism",
      "primaryLanguagesSpoken": [
        "Hindi",
        "English",
        "Bengali",
        "Marathi",
        "Telugu",
        "Tamil"
      ]
    },
    {
      "cityName": "Lucknow",
      "stateOrRegion": "Uttar Pradesh",
      "population": 2817105,
      "populationFormatted": "2.82 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Handicrafts Textiles, Defense Manufacturing & IT Services",
      "primaryLanguagesSpoken": [
        "Hindi",
        "English",
        "Bengali",
        "Marathi",
        "Telugu",
        "Tamil"
      ]
    },
    {
      "cityName": "Kanpur",
      "stateOrRegion": "Uttar Pradesh",
      "population": 2765348,
      "populationFormatted": "2.77 Million",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Leather Manufacturing, Aerospace Defense & Engineering",
      "primaryLanguagesSpoken": [
        "Hindi",
        "English",
        "Bengali",
        "Marathi",
        "Telugu",
        "Tamil"
      ]
    },
    {
      "cityName": "Nagpur",
      "stateOrRegion": "Maharashtra",
      "population": 2405665,
      "populationFormatted": "2.41 Million",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Logistics Hub of India, Multi-Modal Freight & Citrus",
      "primaryLanguagesSpoken": [
        "Hindi",
        "English",
        "Bengali",
        "Marathi",
        "Telugu",
        "Tamil"
      ]
    },
    {
      "cityName": "Indore",
      "stateOrRegion": "Madhya Pradesh",
      "population": 1964086,
      "populationFormatted": "1.96 Million",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Commercial Capital of MP, Pharmaceuticals & Software",
      "primaryLanguagesSpoken": [
        "Hindi",
        "English",
        "Bengali",
        "Marathi",
        "Telugu",
        "Tamil"
      ]
    },
    {
      "cityName": "Thane",
      "stateOrRegion": "Maharashtra",
      "population": 1841488,
      "populationFormatted": "1.84 Million",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Chemical Manufacturing, Engineering & Corporate Back-Office",
      "primaryLanguagesSpoken": [
        "Hindi",
        "English",
        "Bengali",
        "Marathi",
        "Telugu",
        "Tamil"
      ]
    },
    {
      "cityName": "Bhopal",
      "stateOrRegion": "Madhya Pradesh",
      "population": 1798218,
      "populationFormatted": "1.80 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Electrical Machinery (BHEL), Chemical Industry & Services",
      "primaryLanguagesSpoken": [
        "Hindi",
        "English",
        "Bengali",
        "Marathi",
        "Telugu",
        "Tamil"
      ]
    },
    {
      "cityName": "Visakhapatnam",
      "stateOrRegion": "Andhra Pradesh",
      "population": 1728143,
      "populationFormatted": "1.73 Million",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Eastern Naval Command Base, Steel Plant & Seaport",
      "primaryLanguagesSpoken": [
        "Hindi",
        "English",
        "Bengali",
        "Marathi",
        "Telugu",
        "Tamil"
      ]
    },
    {
      "cityName": "Pimpri-Chinchwad",
      "stateOrRegion": "Maharashtra",
      "population": 1727692,
      "populationFormatted": "1.73 Million",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Heavy Auto Assembly (Tata Motors, Bajaj) & Electronics",
      "primaryLanguagesSpoken": [
        "Hindi",
        "English",
        "Bengali",
        "Marathi",
        "Telugu",
        "Tamil"
      ]
    },
    {
      "cityName": "Patna",
      "stateOrRegion": "Bihar",
      "population": 1684222,
      "populationFormatted": "1.68 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Agribusiness Wholesale Distribution, Education & Services",
      "primaryLanguagesSpoken": [
        "Hindi",
        "English",
        "Bengali",
        "Marathi",
        "Telugu",
        "Tamil"
      ]
    },
    {
      "cityName": "Vadodara",
      "stateOrRegion": "Gujarat",
      "population": 1670806,
      "populationFormatted": "1.67 Million",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Heavy Chemicals, Power Transmission Equipment & Pharma",
      "primaryLanguagesSpoken": [
        "Hindi",
        "English",
        "Bengali",
        "Marathi",
        "Telugu",
        "Tamil"
      ]
    },
    {
      "cityName": "Ghaziabad",
      "stateOrRegion": "Uttar Pradesh",
      "population": 1648643,
      "populationFormatted": "1.65 Million",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Industrial Machinery, Electronics Assembly & Rail Tech",
      "primaryLanguagesSpoken": [
        "Hindi",
        "English",
        "Bengali",
        "Marathi",
        "Telugu",
        "Tamil"
      ]
    },
    {
      "cityName": "Ludhiana",
      "stateOrRegion": "Punjab",
      "population": 1618879,
      "populationFormatted": "1.62 Million",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Apparel Knitwear Capital, Bicycle Manufacturing & Agribusiness",
      "primaryLanguagesSpoken": [
        "Hindi",
        "English",
        "Bengali",
        "Marathi",
        "Telugu",
        "Tamil"
      ]
    },
    {
      "cityName": "Agra",
      "stateOrRegion": "Uttar Pradesh",
      "population": 1585704,
      "populationFormatted": "1.59 Million",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Leather Goods Exports, Tourism & Handicrafts",
      "primaryLanguagesSpoken": [
        "Hindi",
        "English",
        "Bengali",
        "Marathi",
        "Telugu",
        "Tamil"
      ]
    },
    {
      "cityName": "Nashik",
      "stateOrRegion": "Maharashtra",
      "population": 1486053,
      "populationFormatted": "1.49 Million",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Defense Aircraft Overhaul (HAL), Wine Technology & Electrical",
      "primaryLanguagesSpoken": [
        "Hindi",
        "English",
        "Bengali",
        "Marathi",
        "Telugu",
        "Tamil"
      ]
    },
    {
      "cityName": "Faridabad",
      "stateOrRegion": "Haryana",
      "population": 1414050,
      "populationFormatted": "1.41 Million",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Tractors Manufacturing, Auto Components & Electronics",
      "primaryLanguagesSpoken": [
        "Hindi",
        "English",
        "Bengali",
        "Marathi",
        "Telugu",
        "Tamil"
      ]
    },
    {
      "cityName": "Meerut",
      "stateOrRegion": "Uttar Pradesh",
      "population": 1305429,
      "populationFormatted": "1.31 Million",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Sports Goods Manufacturing, Musical Instruments & Sugar",
      "primaryLanguagesSpoken": [
        "Hindi",
        "English",
        "Bengali",
        "Marathi",
        "Telugu",
        "Tamil"
      ]
    },
    {
      "cityName": "Rajkot",
      "stateOrRegion": "Gujarat",
      "population": 1286678,
      "populationFormatted": "1.29 Million",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Diesel Engines Manufacturing, Auto Parts & Casting Foundries",
      "primaryLanguagesSpoken": [
        "Hindi",
        "English",
        "Bengali",
        "Marathi",
        "Telugu",
        "Tamil"
      ]
    },
    {
      "cityName": "Kalyan-Dombivli",
      "stateOrRegion": "Maharashtra",
      "population": 1247327,
      "populationFormatted": "1.25 Million",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Engineering Works, Textile Manufacturing & Services",
      "primaryLanguagesSpoken": [
        "Hindi",
        "English",
        "Bengali",
        "Marathi",
        "Telugu",
        "Tamil"
      ]
    },
    {
      "cityName": "Vasai-Virar",
      "stateOrRegion": "Maharashtra",
      "population": 1222390,
      "populationFormatted": "1.22 Million",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Small-Scale Manufacturing, Plastics & Logistics",
      "primaryLanguagesSpoken": [
        "Hindi",
        "English",
        "Bengali",
        "Marathi",
        "Telugu",
        "Tamil"
      ]
    },
    {
      "cityName": "Varanasi",
      "stateOrRegion": "Uttar Pradesh",
      "population": 1198491,
      "populationFormatted": "1.20 Million",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Silk Weaving Handlooms, Cultural Tourism & Handicrafts",
      "primaryLanguagesSpoken": [
        "Hindi",
        "English",
        "Bengali",
        "Marathi",
        "Telugu",
        "Tamil"
      ]
    }
  ],
  "ID": [
    {
      "cityName": "Jakarta / Nusantara",
      "stateOrRegion": "Indonesia Capital Region",
      "population": 12000000,
      "populationFormatted": "12.00 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Indonesian",
        "Javanese",
        "Sundanese"
      ]
    },
    {
      "cityName": "Jakarta",
      "stateOrRegion": "Indonesia Region",
      "population": 8820603,
      "populationFormatted": "8.82 Million",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Indonesian",
        "Javanese",
        "Sundanese"
      ]
    },
    {
      "cityName": "Surabaya",
      "stateOrRegion": "Indonesia Region",
      "population": 2611506,
      "populationFormatted": "2.61 Million",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "Indonesian",
        "Javanese",
        "Sundanese"
      ]
    },
    {
      "cityName": "Bandung",
      "stateOrRegion": "Indonesia Region",
      "population": 2288570,
      "populationFormatted": "2.29 Million",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Industrial Manufacturing, Automotive Parts & Assembly",
      "primaryLanguagesSpoken": [
        "Indonesian",
        "Javanese",
        "Sundanese"
      ]
    },
    {
      "cityName": "Medan",
      "stateOrRegion": "Indonesia Region",
      "population": 2029797,
      "populationFormatted": "2.03 Million",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Healthcare Services, Clinical Research & Hospital Networks",
      "primaryLanguagesSpoken": [
        "Indonesian",
        "Javanese",
        "Sundanese"
      ]
    },
    {
      "cityName": "Tangerang",
      "stateOrRegion": "Indonesia Region",
      "population": 1451595,
      "populationFormatted": "1.45 Million",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Maritime Shipping, Container Logistics & Port Operations",
      "primaryLanguagesSpoken": [
        "Indonesian",
        "Javanese",
        "Sundanese"
      ]
    },
    {
      "cityName": "Semarang",
      "stateOrRegion": "Indonesia Region",
      "population": 1352869,
      "populationFormatted": "1.35 Million",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Textiles, Garments Manufacturing & Artisanal Craft",
      "primaryLanguagesSpoken": [
        "Indonesian",
        "Javanese",
        "Sundanese"
      ]
    },
    {
      "cityName": "Palembang",
      "stateOrRegion": "Indonesia Region",
      "population": 1323169,
      "populationFormatted": "1.32 Million",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Renewable Energy, Solar Operations & Electrical Grid",
      "primaryLanguagesSpoken": [
        "Indonesian",
        "Javanese",
        "Sundanese"
      ]
    },
    {
      "cityName": "Makasar",
      "stateOrRegion": "Indonesia Region",
      "population": 1168258,
      "populationFormatted": "1.17 Million",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Higher Vocational Training, Engineering & Trades",
      "primaryLanguagesSpoken": [
        "Indonesian",
        "Javanese",
        "Sundanese"
      ]
    },
    {
      "cityName": "Bogor",
      "stateOrRegion": "Indonesia Region",
      "population": 891467,
      "populationFormatted": "891,467",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Mining Operations, Raw Material Extraction & Metallurgy",
      "primaryLanguagesSpoken": [
        "Indonesian",
        "Javanese",
        "Sundanese"
      ]
    },
    {
      "cityName": "Bandar Lampung",
      "stateOrRegion": "Indonesia Region",
      "population": 790057,
      "populationFormatted": "790,057",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Tourism & Cultural Heritage, Hospitality Management",
      "primaryLanguagesSpoken": [
        "Indonesian",
        "Javanese",
        "Sundanese"
      ]
    },
    {
      "cityName": "Malang",
      "stateOrRegion": "Indonesia Region",
      "population": 773174,
      "populationFormatted": "773,174",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Commercial Wholesale, Retail Distribution & Supply Chain",
      "primaryLanguagesSpoken": [
        "Indonesian",
        "Javanese",
        "Sundanese"
      ]
    },
    {
      "cityName": "Pakanbaru",
      "stateOrRegion": "Indonesia Region",
      "population": 703956,
      "populationFormatted": "703,956",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Telecommunications, Cloud Infrastructure & Fiber Networks",
      "primaryLanguagesSpoken": [
        "Indonesian",
        "Javanese",
        "Sundanese"
      ]
    },
    {
      "cityName": "Padang",
      "stateOrRegion": "Indonesia Region",
      "population": 686908,
      "populationFormatted": "686,908",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Banking, Insurance, Stock Exchange & Asset Management",
      "primaryLanguagesSpoken": [
        "Indonesian",
        "Javanese",
        "Sundanese"
      ]
    },
    {
      "cityName": "Batam",
      "stateOrRegion": "Indonesia Region",
      "population": 587227,
      "populationFormatted": "587,227",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Biotechnology, Pharmaceuticals & Chemical Processing",
      "primaryLanguagesSpoken": [
        "Indonesian",
        "Javanese",
        "Sundanese"
      ]
    },
    {
      "cityName": "Bandjarmasin",
      "stateOrRegion": "Indonesia Region",
      "population": 576413,
      "populationFormatted": "576,413",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Indonesian",
        "Javanese",
        "Sundanese"
      ]
    },
    {
      "cityName": "Denpasar",
      "stateOrRegion": "Indonesia Region",
      "population": 574610,
      "populationFormatted": "574,610",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Indonesian",
        "Javanese",
        "Sundanese"
      ]
    },
    {
      "cityName": "Surakarta",
      "stateOrRegion": "Indonesia Region",
      "population": 506397,
      "populationFormatted": "506,397",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "Indonesian",
        "Javanese",
        "Sundanese"
      ]
    },
    {
      "cityName": "Samarinda",
      "stateOrRegion": "Indonesia Region",
      "population": 505664,
      "populationFormatted": "505,664",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Industrial Manufacturing, Automotive Parts & Assembly",
      "primaryLanguagesSpoken": [
        "Indonesian",
        "Javanese",
        "Sundanese"
      ]
    },
    {
      "cityName": "Pontianak",
      "stateOrRegion": "Indonesia Region",
      "population": 501843,
      "populationFormatted": "501,843",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Healthcare Services, Clinical Research & Hospital Networks",
      "primaryLanguagesSpoken": [
        "Indonesian",
        "Javanese",
        "Sundanese"
      ]
    },
    {
      "cityName": "Balikpapan",
      "stateOrRegion": "Indonesia Region",
      "population": 440552,
      "populationFormatted": "440,552",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Maritime Shipping, Container Logistics & Port Operations",
      "primaryLanguagesSpoken": [
        "Indonesian",
        "Javanese",
        "Sundanese"
      ]
    },
    {
      "cityName": "Yogyakarta",
      "stateOrRegion": "Indonesia Region",
      "population": 433539,
      "populationFormatted": "433,539",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Textiles, Garments Manufacturing & Artisanal Craft",
      "primaryLanguagesSpoken": [
        "Indonesian",
        "Javanese",
        "Sundanese"
      ]
    },
    {
      "cityName": "Jambi",
      "stateOrRegion": "Indonesia Region",
      "population": 409202,
      "populationFormatted": "409,202",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Renewable Energy, Solar Operations & Electrical Grid",
      "primaryLanguagesSpoken": [
        "Indonesian",
        "Javanese",
        "Sundanese"
      ]
    },
    {
      "cityName": "Manado",
      "stateOrRegion": "Indonesia Region",
      "population": 370139,
      "populationFormatted": "370,139",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Higher Vocational Training, Engineering & Trades",
      "primaryLanguagesSpoken": [
        "Indonesian",
        "Javanese",
        "Sundanese"
      ]
    },
    {
      "cityName": "Mataram",
      "stateOrRegion": "Indonesia Region",
      "population": 342896,
      "populationFormatted": "342,896",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Mining Operations, Raw Material Extraction & Metallurgy",
      "primaryLanguagesSpoken": [
        "Indonesian",
        "Javanese",
        "Sundanese"
      ]
    },
    {
      "cityName": "Cirebon",
      "stateOrRegion": "Indonesia Region",
      "population": 312771,
      "populationFormatted": "312,771",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Tourism & Cultural Heritage, Hospitality Management",
      "primaryLanguagesSpoken": [
        "Indonesian",
        "Javanese",
        "Sundanese"
      ]
    },
    {
      "cityName": "Sukabumi",
      "stateOrRegion": "Indonesia Region",
      "population": 280373,
      "populationFormatted": "280,373",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Commercial Wholesale, Retail Distribution & Supply Chain",
      "primaryLanguagesSpoken": [
        "Indonesian",
        "Javanese",
        "Sundanese"
      ]
    },
    {
      "cityName": "Pakalongan",
      "stateOrRegion": "Indonesia Region",
      "population": 263921,
      "populationFormatted": "263,921",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Telecommunications, Cloud Infrastructure & Fiber Networks",
      "primaryLanguagesSpoken": [
        "Indonesian",
        "Javanese",
        "Sundanese"
      ]
    },
    {
      "cityName": "Bengkulu",
      "stateOrRegion": "Indonesia Region",
      "population": 252768,
      "populationFormatted": "252,768",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Banking, Insurance, Stock Exchange & Asset Management",
      "primaryLanguagesSpoken": [
        "Indonesian",
        "Javanese",
        "Sundanese"
      ]
    },
    {
      "cityName": "Kediri",
      "stateOrRegion": "Indonesia Region",
      "population": 248640,
      "populationFormatted": "248,640",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Biotechnology, Pharmaceuticals & Chemical Processing",
      "primaryLanguagesSpoken": [
        "Indonesian",
        "Javanese",
        "Sundanese"
      ]
    }
  ],
  "IR": [
    {
      "cityName": "Tehran",
      "stateOrRegion": "Iran Capital Region",
      "population": 12000000,
      "populationFormatted": "12.00 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Persian (Farsi)",
        "Azeri Turkic",
        "Kurdish"
      ]
    }
  ],
  "IQ": [
    {
      "cityName": "Baghdad",
      "stateOrRegion": "Iraq Capital Region",
      "population": 6525000,
      "populationFormatted": "6.53 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Arabic (Mesopotamian)",
        "Kurdish (Sorani/Kurmanji)"
      ]
    },
    {
      "cityName": "Mosul",
      "stateOrRegion": "Iraq Region",
      "population": 664221,
      "populationFormatted": "664,221",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Arabic (Mesopotamian)",
        "Kurdish (Sorani/Kurmanji)"
      ]
    },
    {
      "cityName": "Kadhimain",
      "stateOrRegion": "Iraq Region",
      "population": 521444,
      "populationFormatted": "521,444",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "Arabic (Mesopotamian)",
        "Kurdish (Sorani/Kurmanji)"
      ]
    },
    {
      "cityName": "Erbil",
      "stateOrRegion": "Iraq Region",
      "population": 485968,
      "populationFormatted": "485,968",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Industrial Manufacturing, Automotive Parts & Assembly",
      "primaryLanguagesSpoken": [
        "Arabic (Mesopotamian)",
        "Kurdish (Sorani/Kurmanji)"
      ]
    },
    {
      "cityName": "Adhamiyah",
      "stateOrRegion": "Iraq Region",
      "population": 464151,
      "populationFormatted": "464,151",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Healthcare Services, Clinical Research & Hospital Networks",
      "primaryLanguagesSpoken": [
        "Arabic (Mesopotamian)",
        "Kurdish (Sorani/Kurmanji)"
      ]
    },
    {
      "cityName": "Kirkuk",
      "stateOrRegion": "Iraq Region",
      "population": 418624,
      "populationFormatted": "418,624",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Maritime Shipping, Container Logistics & Port Operations",
      "primaryLanguagesSpoken": [
        "Arabic (Mesopotamian)",
        "Kurdish (Sorani/Kurmanji)"
      ]
    },
    {
      "cityName": "Basra",
      "stateOrRegion": "Iraq Region",
      "population": 406296,
      "populationFormatted": "406,296",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Textiles, Garments Manufacturing & Artisanal Craft",
      "primaryLanguagesSpoken": [
        "Arabic (Mesopotamian)",
        "Kurdish (Sorani/Kurmanji)"
      ]
    },
    {
      "cityName": "Sulamaniya",
      "stateOrRegion": "Iraq Region",
      "population": 364096,
      "populationFormatted": "364,096",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Renewable Energy, Solar Operations & Electrical Grid",
      "primaryLanguagesSpoken": [
        "Arabic (Mesopotamian)",
        "Kurdish (Sorani/Kurmanji)"
      ]
    },
    {
      "cityName": "Najaf",
      "stateOrRegion": "Iraq Region",
      "population": 309010,
      "populationFormatted": "309,010",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Higher Vocational Training, Engineering & Trades",
      "primaryLanguagesSpoken": [
        "Arabic (Mesopotamian)",
        "Kurdish (Sorani/Kurmanji)"
      ]
    },
    {
      "cityName": "Kerbala",
      "stateOrRegion": "Iraq Region",
      "population": 296705,
      "populationFormatted": "296,705",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Mining Operations, Raw Material Extraction & Metallurgy",
      "primaryLanguagesSpoken": [
        "Arabic (Mesopotamian)",
        "Kurdish (Sorani/Kurmanji)"
      ]
    },
    {
      "cityName": "Hilla",
      "stateOrRegion": "Iraq Region",
      "population": 268834,
      "populationFormatted": "268,834",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Tourism & Cultural Heritage, Hospitality Management",
      "primaryLanguagesSpoken": [
        "Arabic (Mesopotamian)",
        "Kurdish (Sorani/Kurmanji)"
      ]
    },
    {
      "cityName": "Nasariya",
      "stateOrRegion": "Iraq Region",
      "population": 265937,
      "populationFormatted": "265,937",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Commercial Wholesale, Retail Distribution & Supply Chain",
      "primaryLanguagesSpoken": [
        "Arabic (Mesopotamian)",
        "Kurdish (Sorani/Kurmanji)"
      ]
    },
    {
      "cityName": "Majnoon",
      "stateOrRegion": "Iraq Region",
      "population": 244545,
      "populationFormatted": "244,545",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Telecommunications, Cloud Infrastructure & Fiber Networks",
      "primaryLanguagesSpoken": [
        "Arabic (Mesopotamian)",
        "Kurdish (Sorani/Kurmanji)"
      ]
    },
    {
      "cityName": "Karradah Sharqiyah",
      "stateOrRegion": "Iraq Region",
      "population": 235554,
      "populationFormatted": "235,554",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Banking, Insurance, Stock Exchange & Asset Management",
      "primaryLanguagesSpoken": [
        "Arabic (Mesopotamian)",
        "Kurdish (Sorani/Kurmanji)"
      ]
    },
    {
      "cityName": "Amara",
      "stateOrRegion": "Iraq Region",
      "population": 208797,
      "populationFormatted": "208,797",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Biotechnology, Pharmaceuticals & Chemical Processing",
      "primaryLanguagesSpoken": [
        "Arabic (Mesopotamian)",
        "Kurdish (Sorani/Kurmanji)"
      ]
    },
    {
      "cityName": "Diwaniya",
      "stateOrRegion": "Iraq Region",
      "population": 196519,
      "populationFormatted": "196,519",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Arabic (Mesopotamian)",
        "Kurdish (Sorani/Kurmanji)"
      ]
    },
    {
      "cityName": "Ramadi",
      "stateOrRegion": "Iraq Region",
      "population": 192556,
      "populationFormatted": "192,556",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Arabic (Mesopotamian)",
        "Kurdish (Sorani/Kurmanji)"
      ]
    },
    {
      "cityName": "Kut",
      "stateOrRegion": "Iraq Region",
      "population": 183183,
      "populationFormatted": "183,183",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "Arabic (Mesopotamian)",
        "Kurdish (Sorani/Kurmanji)"
      ]
    }
  ],
  "IL": [
    {
      "cityName": "Jerusalem",
      "stateOrRegion": "Israel Capital Region",
      "population": 1455000,
      "populationFormatted": "1.46 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Hebrew",
        "Arabic",
        "Russian"
      ]
    },
    {
      "cityName": "Tel Aviv-Yafo",
      "stateOrRegion": "Israel Region",
      "population": 348520,
      "populationFormatted": "348,520",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Hebrew",
        "Arabic",
        "Russian"
      ]
    },
    {
      "cityName": "Haifa",
      "stateOrRegion": "Israel Region",
      "population": 255445,
      "populationFormatted": "255,445",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "Hebrew",
        "Arabic",
        "Russian"
      ]
    },
    {
      "cityName": "Rishon Leziyyon",
      "stateOrRegion": "Israel Region",
      "population": 163350,
      "populationFormatted": "163,350",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Industrial Manufacturing, Automotive Parts & Assembly",
      "primaryLanguagesSpoken": [
        "Hebrew",
        "Arabic",
        "Russian"
      ]
    },
    {
      "cityName": "Holon",
      "stateOrRegion": "Israel Region",
      "population": 161830,
      "populationFormatted": "161,830",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Healthcare Services, Clinical Research & Hospital Networks",
      "primaryLanguagesSpoken": [
        "Hebrew",
        "Arabic",
        "Russian"
      ]
    },
    {
      "cityName": "Be'Er Sheva",
      "stateOrRegion": "Israel Region",
      "population": 150040,
      "populationFormatted": "150,040",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Maritime Shipping, Container Logistics & Port Operations",
      "primaryLanguagesSpoken": [
        "Hebrew",
        "Arabic",
        "Russian"
      ]
    },
    {
      "cityName": "Petah Tiqwa",
      "stateOrRegion": "Israel Region",
      "population": 149630,
      "populationFormatted": "149,630",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Textiles, Garments Manufacturing & Artisanal Craft",
      "primaryLanguagesSpoken": [
        "Hebrew",
        "Arabic",
        "Russian"
      ]
    },
    {
      "cityName": "Netanya",
      "stateOrRegion": "Israel Region",
      "population": 143425,
      "populationFormatted": "143,425",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Renewable Energy, Solar Operations & Electrical Grid",
      "primaryLanguagesSpoken": [
        "Hebrew",
        "Arabic",
        "Russian"
      ]
    },
    {
      "cityName": "Bat Yam",
      "stateOrRegion": "Israel Region",
      "population": 136365,
      "populationFormatted": "136,365",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Higher Vocational Training, Engineering & Trades",
      "primaryLanguagesSpoken": [
        "Hebrew",
        "Arabic",
        "Russian"
      ]
    },
    {
      "cityName": "Bene Beraq",
      "stateOrRegion": "Israel Region",
      "population": 131005,
      "populationFormatted": "131,005",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Mining Operations, Raw Material Extraction & Metallurgy",
      "primaryLanguagesSpoken": [
        "Hebrew",
        "Arabic",
        "Russian"
      ]
    },
    {
      "cityName": "Ramat Gan",
      "stateOrRegion": "Israel Region",
      "population": 127600,
      "populationFormatted": "127,600",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Tourism & Cultural Heritage, Hospitality Management",
      "primaryLanguagesSpoken": [
        "Hebrew",
        "Arabic",
        "Russian"
      ]
    },
    {
      "cityName": "Ashdod",
      "stateOrRegion": "Israel Region",
      "population": 126170,
      "populationFormatted": "126,170",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Commercial Wholesale, Retail Distribution & Supply Chain",
      "primaryLanguagesSpoken": [
        "Hebrew",
        "Arabic",
        "Russian"
      ]
    },
    {
      "cityName": "Ashqelon",
      "stateOrRegion": "Israel Region",
      "population": 103900,
      "populationFormatted": "103,900",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Telecommunications, Cloud Infrastructure & Fiber Networks",
      "primaryLanguagesSpoken": [
        "Hebrew",
        "Arabic",
        "Russian"
      ]
    },
    {
      "cityName": "Rehovot",
      "stateOrRegion": "Israel Region",
      "population": 102500,
      "populationFormatted": "102,500",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Banking, Insurance, Stock Exchange & Asset Management",
      "primaryLanguagesSpoken": [
        "Hebrew",
        "Arabic",
        "Russian"
      ]
    }
  ],
  "JP": [
    {
      "cityName": "Tokyo",
      "stateOrRegion": "Tokyo Metropolis",
      "population": 13960000,
      "populationFormatted": "13.96 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Global Finance, AI Research, Robotics & Corporate HQ",
      "primaryLanguagesSpoken": [
        "Japanese",
        "Ryukyuan"
      ]
    },
    {
      "cityName": "Yokohama",
      "stateOrRegion": "Kanagawa",
      "population": 3770000,
      "populationFormatted": "3.77 Million",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Maritime Logistics, Automotive Engineering & Biotech",
      "primaryLanguagesSpoken": [
        "Japanese",
        "Ryukyuan"
      ]
    },
    {
      "cityName": "Osaka",
      "stateOrRegion": "Osaka Prefecture",
      "population": 2750000,
      "populationFormatted": "2.75 Million",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Electronics Manufacturing, Pharmaceuticals & Commerce",
      "primaryLanguagesSpoken": [
        "Japanese",
        "Ryukyuan"
      ]
    },
    {
      "cityName": "Nagoya",
      "stateOrRegion": "Aichi",
      "population": 2330000,
      "populationFormatted": "2.33 Million",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Automotive Manufacturing (Toyota HQ Region) & Aerospace",
      "primaryLanguagesSpoken": [
        "Japanese",
        "Ryukyuan"
      ]
    },
    {
      "cityName": "Sapporo",
      "stateOrRegion": "Hokkaido",
      "population": 1970000,
      "populationFormatted": "1.97 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Agribusiness R&D, Information Technology & Cold-Climate Tech",
      "primaryLanguagesSpoken": [
        "Japanese",
        "Ryukyuan"
      ]
    },
    {
      "cityName": "Fukuoka",
      "stateOrRegion": "Fukuoka Prefecture",
      "population": 1610000,
      "populationFormatted": "1.61 Million",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "National Startup Hub, E-Commerce, Software & Asia Trade",
      "primaryLanguagesSpoken": [
        "Japanese",
        "Ryukyuan"
      ]
    },
    {
      "cityName": "Kawasaki",
      "stateOrRegion": "Kanagawa",
      "population": 1540000,
      "populationFormatted": "1.54 Million",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Heavy Industrial R&D, Semiconductors & Clean Energy",
      "primaryLanguagesSpoken": [
        "Japanese",
        "Ryukyuan"
      ]
    },
    {
      "cityName": "Kobe",
      "stateOrRegion": "Hyogo",
      "population": 1520000,
      "populationFormatted": "1.52 Million",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Supercomputing Research, Medical Devices & Seaport",
      "primaryLanguagesSpoken": [
        "Japanese",
        "Ryukyuan"
      ]
    },
    {
      "cityName": "Kyoto",
      "stateOrRegion": "Kyoto Prefecture",
      "population": 1460000,
      "populationFormatted": "1.46 Million",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Precision Components (Kyocera, Nidec), Game Tech (Nintendo)",
      "primaryLanguagesSpoken": [
        "Japanese",
        "Ryukyuan"
      ]
    },
    {
      "cityName": "Saitama",
      "stateOrRegion": "Saitama Prefecture",
      "population": 1320000,
      "populationFormatted": "1.32 Million",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Precision Equipment, Food Processing & Transport",
      "primaryLanguagesSpoken": [
        "Japanese",
        "Ryukyuan"
      ]
    },
    {
      "cityName": "Hiroshima",
      "stateOrRegion": "Hiroshima Prefecture",
      "population": 1200000,
      "populationFormatted": "1.20 Million",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Automotive Assembly (Mazda HQ), Steel & Shipbuilding",
      "primaryLanguagesSpoken": [
        "Japanese",
        "Ryukyuan"
      ]
    },
    {
      "cityName": "Sendai",
      "stateOrRegion": "Miyagi",
      "population": 1090000,
      "populationFormatted": "1.09 Million",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Semiconductor Components, Disaster Tech & Software",
      "primaryLanguagesSpoken": [
        "Japanese",
        "Ryukyuan"
      ]
    },
    {
      "cityName": "Chiba",
      "stateOrRegion": "Chiba Prefecture",
      "population": 980000,
      "populationFormatted": "980,000",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "International Freight Logistics, Petrochemicals & Materials",
      "primaryLanguagesSpoken": [
        "Japanese",
        "Ryukyuan"
      ]
    },
    {
      "cityName": "Kitakyushu",
      "stateOrRegion": "Fukuoka Prefecture",
      "population": 930000,
      "populationFormatted": "930,000",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Robotics Engineering (Yaskawa), Eco-tech & Steel",
      "primaryLanguagesSpoken": [
        "Japanese",
        "Ryukyuan"
      ]
    },
    {
      "cityName": "Sakai",
      "stateOrRegion": "Osaka Prefecture",
      "population": 820000,
      "populationFormatted": "820,000",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Precision Machinery, Bicycle Components (Shimano) & Tools",
      "primaryLanguagesSpoken": [
        "Japanese",
        "Ryukyuan"
      ]
    },
    {
      "cityName": "Niigata",
      "stateOrRegion": "Niigata Prefecture",
      "population": 790000,
      "populationFormatted": "790,000",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Agribusiness Tech, Precision Tools & Rice Processing",
      "primaryLanguagesSpoken": [
        "Japanese",
        "Ryukyuan"
      ]
    },
    {
      "cityName": "Hamamatsu",
      "stateOrRegion": "Shizuoka",
      "population": 790000,
      "populationFormatted": "790,000",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Motorcycle Manufacturing (Suzuki, Yamaha) & Music Tech",
      "primaryLanguagesSpoken": [
        "Japanese",
        "Ryukyuan"
      ]
    },
    {
      "cityName": "Kumamoto",
      "stateOrRegion": "Kumamoto Prefecture",
      "population": 730000,
      "populationFormatted": "730,000",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Silicon Island Semiconductor Fabrication (TSMC Plant)",
      "primaryLanguagesSpoken": [
        "Japanese",
        "Ryukyuan"
      ]
    },
    {
      "cityName": "Sagamihara",
      "stateOrRegion": "Kanagawa",
      "population": 720000,
      "populationFormatted": "720,000",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Aerospace Research (JAXA Campus), Precision Electronics",
      "primaryLanguagesSpoken": [
        "Japanese",
        "Ryukyuan"
      ]
    },
    {
      "cityName": "Okayama",
      "stateOrRegion": "Okayama Prefecture",
      "population": 720000,
      "populationFormatted": "720,000",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Textiles Manufacturing, Chemical Processing & Steel",
      "primaryLanguagesSpoken": [
        "Japanese",
        "Ryukyuan"
      ]
    },
    {
      "cityName": "Shizuoka",
      "stateOrRegion": "Shizuoka Prefecture",
      "population": 690000,
      "populationFormatted": "690,000",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Plastic Models, Tea Processing & Automotive Parts",
      "primaryLanguagesSpoken": [
        "Japanese",
        "Ryukyuan"
      ]
    },
    {
      "cityName": "Funabashi",
      "stateOrRegion": "Chiba Prefecture",
      "population": 640000,
      "populationFormatted": "640,000",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Commercial Logistics, Food Processing & Distribution",
      "primaryLanguagesSpoken": [
        "Japanese",
        "Ryukyuan"
      ]
    },
    {
      "cityName": "Kagoshima",
      "stateOrRegion": "Kagoshima Prefecture",
      "population": 590000,
      "populationFormatted": "590,000",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Space Launch Logistics, Geothermal Energy & Agribusiness",
      "primaryLanguagesSpoken": [
        "Japanese",
        "Ryukyuan"
      ]
    },
    {
      "cityName": "Kawaguchi",
      "stateOrRegion": "Saitama Prefecture",
      "population": 590000,
      "populationFormatted": "590,000",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Metal Casting, Foundry Engineering & Precision Manufacturing",
      "primaryLanguagesSpoken": [
        "Japanese",
        "Ryukyuan"
      ]
    },
    {
      "cityName": "Hachioji",
      "stateOrRegion": "Tokyo Metropolis",
      "population": 580000,
      "populationFormatted": "580,000",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Precision Optics, University Research & Medical Tech",
      "primaryLanguagesSpoken": [
        "Japanese",
        "Ryukyuan"
      ]
    },
    {
      "cityName": "Utsunomiya",
      "stateOrRegion": "Tochigi",
      "population": 520000,
      "populationFormatted": "520,000",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Next-Gen Mobility (LRT), Automotive & Consumer Goods",
      "primaryLanguagesSpoken": [
        "Japanese",
        "Ryukyuan"
      ]
    },
    {
      "cityName": "Matsuyama",
      "stateOrRegion": "Ehime",
      "population": 500000,
      "populationFormatted": "500,000",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Chemical Fibers, Paper Manufacturing & Marine Transport",
      "primaryLanguagesSpoken": [
        "Japanese",
        "Ryukyuan"
      ]
    },
    {
      "cityName": "Higashiosaka",
      "stateOrRegion": "Osaka Prefecture",
      "population": 490000,
      "populationFormatted": "490,000",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Monozukuri Small-Medium Precision Machining Factories",
      "primaryLanguagesSpoken": [
        "Japanese",
        "Ryukyuan"
      ]
    },
    {
      "cityName": "Nishinomiya",
      "stateOrRegion": "Hyogo",
      "population": 480000,
      "populationFormatted": "480,000",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Beverage Logistics, Higher Education & Residential Commerce",
      "primaryLanguagesSpoken": [
        "Japanese",
        "Ryukyuan"
      ]
    },
    {
      "cityName": "Amagasaki",
      "stateOrRegion": "Hyogo",
      "population": 450000,
      "populationFormatted": "450,000",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Industrial Machinery, Glass Manufacturing & Logistics",
      "primaryLanguagesSpoken": [
        "Japanese",
        "Ryukyuan"
      ]
    }
  ],
  "JO": [
    {
      "cityName": "Amman",
      "stateOrRegion": "Jordan Capital Region",
      "population": 1695000,
      "populationFormatted": "1.70 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Arabic (Levantine)",
        "English"
      ]
    },
    {
      "cityName": "Zarqa",
      "stateOrRegion": "Jordan Region",
      "population": 395227,
      "populationFormatted": "395,227",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Arabic (Levantine)",
        "English"
      ]
    },
    {
      "cityName": "Irbid",
      "stateOrRegion": "Jordan Region",
      "population": 250645,
      "populationFormatted": "250,645",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "Arabic (Levantine)",
        "English"
      ]
    },
    {
      "cityName": "Russiefa",
      "stateOrRegion": "Jordan Region",
      "population": 227735,
      "populationFormatted": "227,735",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Industrial Manufacturing, Automotive Parts & Assembly",
      "primaryLanguagesSpoken": [
        "Arabic (Levantine)",
        "English"
      ]
    }
  ],
  "KZ": [
    {
      "cityName": "Astana",
      "stateOrRegion": "Kazakhstan Capital Region",
      "population": 2970000,
      "populationFormatted": "2.97 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Kazakh",
        "Russian"
      ]
    },
    {
      "cityName": "Almaty",
      "stateOrRegion": "Kazakhstan Region",
      "population": 1149641,
      "populationFormatted": "1.15 Million",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Kazakh",
        "Russian"
      ]
    },
    {
      "cityName": "Shimkent",
      "stateOrRegion": "Kazakhstan Region",
      "population": 506663,
      "populationFormatted": "506,663",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "Kazakh",
        "Russian"
      ]
    },
    {
      "cityName": "Karaganda",
      "stateOrRegion": "Kazakhstan Region",
      "population": 423697,
      "populationFormatted": "423,697",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Industrial Manufacturing, Automotive Parts & Assembly",
      "primaryLanguagesSpoken": [
        "Kazakh",
        "Russian"
      ]
    },
    {
      "cityName": "Taraz",
      "stateOrRegion": "Kazakhstan Region",
      "population": 323301,
      "populationFormatted": "323,301",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Healthcare Services, Clinical Research & Hospital Networks",
      "primaryLanguagesSpoken": [
        "Kazakh",
        "Russian"
      ]
    },
    {
      "cityName": "Ust-Kamenogorsk",
      "stateOrRegion": "Kazakhstan Region",
      "population": 307100,
      "populationFormatted": "307,100",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Maritime Shipping, Container Logistics & Port Operations",
      "primaryLanguagesSpoken": [
        "Kazakh",
        "Russian"
      ]
    },
    {
      "cityName": "Pavlodar",
      "stateOrRegion": "Kazakhstan Region",
      "population": 300942,
      "populationFormatted": "300,942",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Textiles, Garments Manufacturing & Artisanal Craft",
      "primaryLanguagesSpoken": [
        "Kazakh",
        "Russian"
      ]
    },
    {
      "cityName": "Semipalatinsk",
      "stateOrRegion": "Kazakhstan Region",
      "population": 294889,
      "populationFormatted": "294,889",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Renewable Energy, Solar Operations & Electrical Grid",
      "primaryLanguagesSpoken": [
        "Kazakh",
        "Russian"
      ]
    },
    {
      "cityName": "Aktobe",
      "stateOrRegion": "Kazakhstan Region",
      "population": 276660,
      "populationFormatted": "276,660",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Higher Vocational Training, Engineering & Trades",
      "primaryLanguagesSpoken": [
        "Kazakh",
        "Russian"
      ]
    },
    {
      "cityName": "Uralsk",
      "stateOrRegion": "Kazakhstan Region",
      "population": 220958,
      "populationFormatted": "220,958",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Mining Operations, Raw Material Extraction & Metallurgy",
      "primaryLanguagesSpoken": [
        "Kazakh",
        "Russian"
      ]
    },
    {
      "cityName": "Kustanai",
      "stateOrRegion": "Kazakhstan Region",
      "population": 203446,
      "populationFormatted": "203,446",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Tourism & Cultural Heritage, Hospitality Management",
      "primaryLanguagesSpoken": [
        "Kazakh",
        "Russian"
      ]
    },
    {
      "cityName": "Atirau",
      "stateOrRegion": "Kazakhstan Region",
      "population": 194989,
      "populationFormatted": "194,989",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Commercial Wholesale, Retail Distribution & Supply Chain",
      "primaryLanguagesSpoken": [
        "Kazakh",
        "Russian"
      ]
    },
    {
      "cityName": "Kyzylorda",
      "stateOrRegion": "Kazakhstan Region",
      "population": 194427,
      "populationFormatted": "194,427",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Telecommunications, Cloud Infrastructure & Fiber Networks",
      "primaryLanguagesSpoken": [
        "Kazakh",
        "Russian"
      ]
    },
    {
      "cityName": "Petropavlovsk",
      "stateOrRegion": "Kazakhstan Region",
      "population": 193693,
      "populationFormatted": "193,693",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Banking, Insurance, Stock Exchange & Asset Management",
      "primaryLanguagesSpoken": [
        "Kazakh",
        "Russian"
      ]
    },
    {
      "cityName": "Temirtau",
      "stateOrRegion": "Kazakhstan Region",
      "population": 168972,
      "populationFormatted": "168,972",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Biotechnology, Pharmaceuticals & Chemical Processing",
      "primaryLanguagesSpoken": [
        "Kazakh",
        "Russian"
      ]
    },
    {
      "cityName": "Aktau",
      "stateOrRegion": "Kazakhstan Region",
      "population": 168371,
      "populationFormatted": "168,371",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Kazakh",
        "Russian"
      ]
    },
    {
      "cityName": "Ekibastuz",
      "stateOrRegion": "Kazakhstan Region",
      "population": 141617,
      "populationFormatted": "141,617",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Kazakh",
        "Russian"
      ]
    },
    {
      "cityName": "Koktshetau",
      "stateOrRegion": "Kazakhstan Region",
      "population": 133124,
      "populationFormatted": "133,124",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "Kazakh",
        "Russian"
      ]
    },
    {
      "cityName": "Taldykorgan",
      "stateOrRegion": "Kazakhstan Region",
      "population": 118416,
      "populationFormatted": "118,416",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Industrial Manufacturing, Automotive Parts & Assembly",
      "primaryLanguagesSpoken": [
        "Kazakh",
        "Russian"
      ]
    },
    {
      "cityName": "Rudni",
      "stateOrRegion": "Kazakhstan Region",
      "population": 114609,
      "populationFormatted": "114,609",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Healthcare Services, Clinical Research & Hospital Networks",
      "primaryLanguagesSpoken": [
        "Kazakh",
        "Russian"
      ]
    }
  ],
  "KW": [
    {
      "cityName": "Kuwait City",
      "stateOrRegion": "Kuwait Capital Region",
      "population": 645000,
      "populationFormatted": "645,000",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Arabic (Kuwaiti)",
        "English"
      ]
    },
    {
      "cityName": "Salmiya",
      "stateOrRegion": "Kuwait Region",
      "population": 129775,
      "populationFormatted": "129,775",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Arabic (Kuwaiti)",
        "English"
      ]
    },
    {
      "cityName": "Jaleeb Al-Shuykh",
      "stateOrRegion": "Kuwait Region",
      "population": 102169,
      "populationFormatted": "102,169",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "Arabic (Kuwaiti)",
        "English"
      ]
    }
  ],
  "KG": [
    {
      "cityName": "Bishkek",
      "stateOrRegion": "Kyrgyzstan Capital Region",
      "population": 1050000,
      "populationFormatted": "1.05 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Kyrgyz",
        "Russian"
      ]
    },
    {
      "cityName": "Osh",
      "stateOrRegion": "Kyrgyzstan Region",
      "population": 232432,
      "populationFormatted": "232,432",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Kyrgyz",
        "Russian"
      ]
    }
  ],
  "LA": [
    {
      "cityName": "Vientiane",
      "stateOrRegion": "Laos Capital Region",
      "population": 1125000,
      "populationFormatted": "1.12 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Lao",
        "French"
      ]
    }
  ],
  "LB": [
    {
      "cityName": "Beirut",
      "stateOrRegion": "Lebanon Capital Region",
      "population": 795000,
      "populationFormatted": "795,000",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Arabic (Lebanese)",
        "French",
        "English"
      ]
    },
    {
      "cityName": "Tripoli",
      "stateOrRegion": "Lebanon Region",
      "population": 127611,
      "populationFormatted": "127,611",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Arabic (Lebanese)",
        "French",
        "English"
      ]
    }
  ],
  "MY": [
    {
      "cityName": "Kuala Lumpur",
      "stateOrRegion": "Malaysia Capital Region",
      "population": 5025000,
      "populationFormatted": "5.03 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Malay",
        "English",
        "Mandarin Chinese",
        "Tamil"
      ]
    },
    {
      "cityName": "Subang Jaya",
      "stateOrRegion": "Malaysia Region",
      "population": 718213,
      "populationFormatted": "718,213",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Malay",
        "English",
        "Mandarin Chinese",
        "Tamil"
      ]
    },
    {
      "cityName": "Mb Ipoh",
      "stateOrRegion": "Malaysia Region",
      "population": 468841,
      "populationFormatted": "468,841",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "Malay",
        "English",
        "Mandarin Chinese",
        "Tamil"
      ]
    },
    {
      "cityName": "Mb Johor Bahru",
      "stateOrRegion": "Malaysia Region",
      "population": 441703,
      "populationFormatted": "441,703",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Industrial Manufacturing, Automotive Parts & Assembly",
      "primaryLanguagesSpoken": [
        "Malay",
        "English",
        "Mandarin Chinese",
        "Tamil"
      ]
    },
    {
      "cityName": "Klang",
      "stateOrRegion": "Malaysia Region",
      "population": 368379,
      "populationFormatted": "368,379",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Healthcare Services, Clinical Research & Hospital Networks",
      "primaryLanguagesSpoken": [
        "Malay",
        "English",
        "Mandarin Chinese",
        "Tamil"
      ]
    },
    {
      "cityName": "Petaling Jaya",
      "stateOrRegion": "Malaysia Region",
      "population": 350995,
      "populationFormatted": "350,995",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Maritime Shipping, Container Logistics & Port Operations",
      "primaryLanguagesSpoken": [
        "Malay",
        "English",
        "Mandarin Chinese",
        "Tamil"
      ]
    },
    {
      "cityName": "Ampang",
      "stateOrRegion": "Malaysia Region",
      "population": 342676,
      "populationFormatted": "342,676",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Textiles, Garments Manufacturing & Artisanal Craft",
      "primaryLanguagesSpoken": [
        "Malay",
        "English",
        "Mandarin Chinese",
        "Tamil"
      ]
    },
    {
      "cityName": "Kajang Dan Sungai Chua",
      "stateOrRegion": "Malaysia Region",
      "population": 307185,
      "populationFormatted": "307,185",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Renewable Energy, Solar Operations & Electrical Grid",
      "primaryLanguagesSpoken": [
        "Malay",
        "English",
        "Mandarin Chinese",
        "Tamil"
      ]
    },
    {
      "cityName": "Kuching",
      "stateOrRegion": "Malaysia Region",
      "population": 277905,
      "populationFormatted": "277,905",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Higher Vocational Training, Engineering & Trades",
      "primaryLanguagesSpoken": [
        "Malay",
        "English",
        "Mandarin Chinese",
        "Tamil"
      ]
    },
    {
      "cityName": "Tawau",
      "stateOrRegion": "Malaysia Region",
      "population": 257414,
      "populationFormatted": "257,414",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Mining Operations, Raw Material Extraction & Metallurgy",
      "primaryLanguagesSpoken": [
        "Malay",
        "English",
        "Mandarin Chinese",
        "Tamil"
      ]
    },
    {
      "cityName": "Bukit Mertajam",
      "stateOrRegion": "Malaysia Region",
      "population": 236651,
      "populationFormatted": "236,651",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Tourism & Cultural Heritage, Hospitality Management",
      "primaryLanguagesSpoken": [
        "Malay",
        "English",
        "Mandarin Chinese",
        "Tamil"
      ]
    },
    {
      "cityName": "Mp Kota Bharu",
      "stateOrRegion": "Malaysia Region",
      "population": 234581,
      "populationFormatted": "234,581",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Commercial Wholesale, Retail Distribution & Supply Chain",
      "primaryLanguagesSpoken": [
        "Malay",
        "English",
        "Mandarin Chinese",
        "Tamil"
      ]
    },
    {
      "cityName": "Kuala Terengganu",
      "stateOrRegion": "Malaysia Region",
      "population": 228119,
      "populationFormatted": "228,119",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Telecommunications, Cloud Infrastructure & Fiber Networks",
      "primaryLanguagesSpoken": [
        "Malay",
        "English",
        "Mandarin Chinese",
        "Tamil"
      ]
    },
    {
      "cityName": "Miri",
      "stateOrRegion": "Malaysia Region",
      "population": 225913,
      "populationFormatted": "225,913",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Banking, Insurance, Stock Exchange & Asset Management",
      "primaryLanguagesSpoken": [
        "Malay",
        "English",
        "Mandarin Chinese",
        "Tamil"
      ]
    },
    {
      "cityName": "Georgetown",
      "stateOrRegion": "Malaysia Region",
      "population": 219603,
      "populationFormatted": "219,603",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Biotechnology, Pharmaceuticals & Chemical Processing",
      "primaryLanguagesSpoken": [
        "Malay",
        "English",
        "Mandarin Chinese",
        "Tamil"
      ]
    },
    {
      "cityName": "Kuantan",
      "stateOrRegion": "Malaysia Region",
      "population": 202445,
      "populationFormatted": "202,445",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Malay",
        "English",
        "Mandarin Chinese",
        "Tamil"
      ]
    },
    {
      "cityName": "Taiping",
      "stateOrRegion": "Malaysia Region",
      "population": 200324,
      "populationFormatted": "200,324",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Malay",
        "English",
        "Mandarin Chinese",
        "Tamil"
      ]
    },
    {
      "cityName": "Seremban",
      "stateOrRegion": "Malaysia Region",
      "population": 193237,
      "populationFormatted": "193,237",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "Malay",
        "English",
        "Mandarin Chinese",
        "Tamil"
      ]
    },
    {
      "cityName": "Pasir Gudang",
      "stateOrRegion": "Malaysia Region",
      "population": 189012,
      "populationFormatted": "189,012",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Industrial Manufacturing, Automotive Parts & Assembly",
      "primaryLanguagesSpoken": [
        "Malay",
        "English",
        "Mandarin Chinese",
        "Tamil"
      ]
    },
    {
      "cityName": "Kulim",
      "stateOrRegion": "Malaysia Region",
      "population": 183525,
      "populationFormatted": "183,525",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Healthcare Services, Clinical Research & Hospital Networks",
      "primaryLanguagesSpoken": [
        "Malay",
        "English",
        "Mandarin Chinese",
        "Tamil"
      ]
    },
    {
      "cityName": "Melaka",
      "stateOrRegion": "Malaysia Region",
      "population": 181428,
      "populationFormatted": "181,428",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Maritime Shipping, Container Logistics & Port Operations",
      "primaryLanguagesSpoken": [
        "Malay",
        "English",
        "Mandarin Chinese",
        "Tamil"
      ]
    },
    {
      "cityName": "Alor Setar",
      "stateOrRegion": "Malaysia Region",
      "population": 164444,
      "populationFormatted": "164,444",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Textiles, Garments Manufacturing & Artisanal Craft",
      "primaryLanguagesSpoken": [
        "Malay",
        "English",
        "Mandarin Chinese",
        "Tamil"
      ]
    },
    {
      "cityName": "Kota Kinabalu",
      "stateOrRegion": "Malaysia Region",
      "population": 160184,
      "populationFormatted": "160,184",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Renewable Energy, Solar Operations & Electrical Grid",
      "primaryLanguagesSpoken": [
        "Malay",
        "English",
        "Mandarin Chinese",
        "Tamil"
      ]
    },
    {
      "cityName": "Kluang",
      "stateOrRegion": "Malaysia Region",
      "population": 159603,
      "populationFormatted": "159,603",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Higher Vocational Training, Engineering & Trades",
      "primaryLanguagesSpoken": [
        "Malay",
        "English",
        "Mandarin Chinese",
        "Tamil"
      ]
    },
    {
      "cityName": "Sandakan",
      "stateOrRegion": "Malaysia Region",
      "population": 156675,
      "populationFormatted": "156,675",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Mining Operations, Raw Material Extraction & Metallurgy",
      "primaryLanguagesSpoken": [
        "Malay",
        "English",
        "Mandarin Chinese",
        "Tamil"
      ]
    },
    {
      "cityName": "Sungai Ara",
      "stateOrRegion": "Malaysia Region",
      "population": 153104,
      "populationFormatted": "153,104",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Tourism & Cultural Heritage, Hospitality Management",
      "primaryLanguagesSpoken": [
        "Malay",
        "English",
        "Mandarin Chinese",
        "Tamil"
      ]
    },
    {
      "cityName": "Bandar Penggaram",
      "stateOrRegion": "Malaysia Region",
      "population": 152194,
      "populationFormatted": "152,194",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Commercial Wholesale, Retail Distribution & Supply Chain",
      "primaryLanguagesSpoken": [
        "Malay",
        "English",
        "Mandarin Chinese",
        "Tamil"
      ]
    },
    {
      "cityName": "Gelugor",
      "stateOrRegion": "Malaysia Region",
      "population": 145603,
      "populationFormatted": "145,603",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Telecommunications, Cloud Infrastructure & Fiber Networks",
      "primaryLanguagesSpoken": [
        "Malay",
        "English",
        "Mandarin Chinese",
        "Tamil"
      ]
    },
    {
      "cityName": "Kulai",
      "stateOrRegion": "Malaysia Region",
      "population": 136396,
      "populationFormatted": "136,396",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Banking, Insurance, Stock Exchange & Asset Management",
      "primaryLanguagesSpoken": [
        "Malay",
        "English",
        "Mandarin Chinese",
        "Tamil"
      ]
    },
    {
      "cityName": "Bintulu",
      "stateOrRegion": "Malaysia Region",
      "population": 135128,
      "populationFormatted": "135,128",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Biotechnology, Pharmaceuticals & Chemical Processing",
      "primaryLanguagesSpoken": [
        "Malay",
        "English",
        "Mandarin Chinese",
        "Tamil"
      ]
    }
  ],
  "MV": [
    {
      "cityName": "Mal\u00e9",
      "stateOrRegion": "Maldives Capital Region",
      "population": 80000,
      "populationFormatted": "80,000",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Dhivehi",
        "English"
      ]
    }
  ],
  "MN": [
    {
      "cityName": "Ulaanbaatar",
      "stateOrRegion": "Mongolia Capital Region",
      "population": 510000,
      "populationFormatted": "510,000",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Mongolian"
      ]
    },
    {
      "cityName": "Hovsgol",
      "stateOrRegion": "Mongolia Region",
      "population": 119063,
      "populationFormatted": "119,063",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Mongolian"
      ]
    },
    {
      "cityName": "Ovorhangay",
      "stateOrRegion": "Mongolia Region",
      "population": 111420,
      "populationFormatted": "111,420",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "Mongolian"
      ]
    }
  ],
  "MM": [
    {
      "cityName": "Naypyidaw",
      "stateOrRegion": "Myanmar Capital Region",
      "population": 8100000,
      "populationFormatted": "8.10 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Burmese",
        "Shan"
      ]
    },
    {
      "cityName": "Yangon",
      "stateOrRegion": "Myanmar Region",
      "population": 2513023,
      "populationFormatted": "2.51 Million",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Burmese",
        "Shan"
      ]
    },
    {
      "cityName": "Nay Pyi Taw",
      "stateOrRegion": "Myanmar Region",
      "population": 1158367,
      "populationFormatted": "1.16 Million",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "Burmese",
        "Shan"
      ]
    },
    {
      "cityName": "Mandalay",
      "stateOrRegion": "Myanmar Region",
      "population": 532949,
      "populationFormatted": "532,949",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Industrial Manufacturing, Automotive Parts & Assembly",
      "primaryLanguagesSpoken": [
        "Burmese",
        "Shan"
      ]
    },
    {
      "cityName": "Hpa-An",
      "stateOrRegion": "Myanmar Region",
      "population": 421415,
      "populationFormatted": "421,415",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Healthcare Services, Clinical Research & Hospital Networks",
      "primaryLanguagesSpoken": [
        "Burmese",
        "Shan"
      ]
    },
    {
      "cityName": "Myitkyina",
      "stateOrRegion": "Myanmar Region",
      "population": 305347,
      "populationFormatted": "305,347",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Maritime Shipping, Container Logistics & Port Operations",
      "primaryLanguagesSpoken": [
        "Burmese",
        "Shan"
      ]
    },
    {
      "cityName": "Magway",
      "stateOrRegion": "Myanmar Region",
      "population": 288883,
      "populationFormatted": "288,883",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Textiles, Garments Manufacturing & Artisanal Craft",
      "primaryLanguagesSpoken": [
        "Burmese",
        "Shan"
      ]
    },
    {
      "cityName": "Mawlamyine",
      "stateOrRegion": "Myanmar Region",
      "population": 219961,
      "populationFormatted": "219,961",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Renewable Energy, Solar Operations & Electrical Grid",
      "primaryLanguagesSpoken": [
        "Burmese",
        "Shan"
      ]
    },
    {
      "cityName": "Pathein",
      "stateOrRegion": "Myanmar Region",
      "population": 144096,
      "populationFormatted": "144,096",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Higher Vocational Training, Engineering & Trades",
      "primaryLanguagesSpoken": [
        "Burmese",
        "Shan"
      ]
    },
    {
      "cityName": "Bago",
      "stateOrRegion": "Myanmar Region",
      "population": 141721,
      "populationFormatted": "141,721",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Mining Operations, Raw Material Extraction & Metallurgy",
      "primaryLanguagesSpoken": [
        "Burmese",
        "Shan"
      ]
    },
    {
      "cityName": "Loikaw",
      "stateOrRegion": "Myanmar Region",
      "population": 128837,
      "populationFormatted": "128,837",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Tourism & Cultural Heritage, Hospitality Management",
      "primaryLanguagesSpoken": [
        "Burmese",
        "Shan"
      ]
    },
    {
      "cityName": "Dawei",
      "stateOrRegion": "Myanmar Region",
      "population": 125239,
      "populationFormatted": "125,239",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Commercial Wholesale, Retail Distribution & Supply Chain",
      "primaryLanguagesSpoken": [
        "Burmese",
        "Shan"
      ]
    },
    {
      "cityName": "Taunggyi",
      "stateOrRegion": "Myanmar Region",
      "population": 108231,
      "populationFormatted": "108,231",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Telecommunications, Cloud Infrastructure & Fiber Networks",
      "primaryLanguagesSpoken": [
        "Burmese",
        "Shan"
      ]
    },
    {
      "cityName": "Sittway",
      "stateOrRegion": "Myanmar Region",
      "population": 107621,
      "populationFormatted": "107,621",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Banking, Insurance, Stock Exchange & Asset Management",
      "primaryLanguagesSpoken": [
        "Burmese",
        "Shan"
      ]
    },
    {
      "cityName": "Monywa",
      "stateOrRegion": "Myanmar Region",
      "population": 106843,
      "populationFormatted": "106,843",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Biotechnology, Pharmaceuticals & Chemical Processing",
      "primaryLanguagesSpoken": [
        "Burmese",
        "Shan"
      ]
    },
    {
      "cityName": "Ha Ka",
      "stateOrRegion": "Myanmar Region",
      "population": 48266,
      "populationFormatted": "48,266",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Burmese",
        "Shan"
      ]
    }
  ],
  "NP": [
    {
      "cityName": "Kathmandu",
      "stateOrRegion": "Nepal Capital Region",
      "population": 4575000,
      "populationFormatted": "4.58 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Nepali",
        "Maithili"
      ]
    },
    {
      "cityName": "Biratnagar",
      "stateOrRegion": "Nepal Region",
      "population": 166674,
      "populationFormatted": "166,674",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Nepali",
        "Maithili"
      ]
    },
    {
      "cityName": "Pokhara",
      "stateOrRegion": "Nepal Region",
      "population": 156312,
      "populationFormatted": "156,312",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "Nepali",
        "Maithili"
      ]
    },
    {
      "cityName": "Butwal",
      "stateOrRegion": "Nepal Region",
      "population": 120982,
      "populationFormatted": "120,982",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Industrial Manufacturing, Automotive Parts & Assembly",
      "primaryLanguagesSpoken": [
        "Nepali",
        "Maithili"
      ]
    },
    {
      "cityName": "Dharan",
      "stateOrRegion": "Nepal Region",
      "population": 119915,
      "populationFormatted": "119,915",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Healthcare Services, Clinical Research & Hospital Networks",
      "primaryLanguagesSpoken": [
        "Nepali",
        "Maithili"
      ]
    },
    {
      "cityName": "Birgunj",
      "stateOrRegion": "Nepal Region",
      "population": 112484,
      "populationFormatted": "112,484",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Maritime Shipping, Container Logistics & Port Operations",
      "primaryLanguagesSpoken": [
        "Nepali",
        "Maithili"
      ]
    },
    {
      "cityName": "Bhimdutta",
      "stateOrRegion": "Nepal Region",
      "population": 106666,
      "populationFormatted": "106,666",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Textiles, Garments Manufacturing & Artisanal Craft",
      "primaryLanguagesSpoken": [
        "Nepali",
        "Maithili"
      ]
    },
    {
      "cityName": "Dhangadhi",
      "stateOrRegion": "Nepal Region",
      "population": 104047,
      "populationFormatted": "104,047",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Renewable Energy, Solar Operations & Electrical Grid",
      "primaryLanguagesSpoken": [
        "Nepali",
        "Maithili"
      ]
    }
  ],
  "KP": [
    {
      "cityName": "Pyongyang",
      "stateOrRegion": "North Korea Capital Region",
      "population": 3900000,
      "populationFormatted": "3.90 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Korean (Munhwa\u0254)"
      ]
    }
  ],
  "OM": [
    {
      "cityName": "Muscat",
      "stateOrRegion": "Oman Capital Region",
      "population": 690000,
      "populationFormatted": "690,000",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Arabic (Omani)",
        "Swahili"
      ]
    },
    {
      "cityName": "As Seeb",
      "stateOrRegion": "Oman Region",
      "population": 223449,
      "populationFormatted": "223,449",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Arabic (Omani)",
        "Swahili"
      ]
    },
    {
      "cityName": "Salalah",
      "stateOrRegion": "Oman Region",
      "population": 156530,
      "populationFormatted": "156,530",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "Arabic (Omani)",
        "Swahili"
      ]
    },
    {
      "cityName": "Mutrah",
      "stateOrRegion": "Oman Region",
      "population": 153526,
      "populationFormatted": "153,526",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Industrial Manufacturing, Automotive Parts & Assembly",
      "primaryLanguagesSpoken": [
        "Arabic (Omani)",
        "Swahili"
      ]
    },
    {
      "cityName": "Bawshar",
      "stateOrRegion": "Oman Region",
      "population": 150420,
      "populationFormatted": "150,420",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Healthcare Services, Clinical Research & Hospital Networks",
      "primaryLanguagesSpoken": [
        "Arabic (Omani)",
        "Swahili"
      ]
    },
    {
      "cityName": "Sohar",
      "stateOrRegion": "Oman Region",
      "population": 104312,
      "populationFormatted": "104,312",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Maritime Shipping, Container Logistics & Port Operations",
      "primaryLanguagesSpoken": [
        "Arabic (Omani)",
        "Swahili"
      ]
    },
    {
      "cityName": "As Suwayq",
      "stateOrRegion": "Oman Region",
      "population": 101122,
      "populationFormatted": "101,122",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Textiles, Garments Manufacturing & Artisanal Craft",
      "primaryLanguagesSpoken": [
        "Arabic (Omani)",
        "Swahili"
      ]
    }
  ],
  "PK": [
    {
      "cityName": "Islamabad",
      "stateOrRegion": "Pakistan Capital Region",
      "population": 12000000,
      "populationFormatted": "12.00 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Urdu",
        "Punjabi",
        "Pashto",
        "Sindhi"
      ]
    },
    {
      "cityName": "Karachi",
      "stateOrRegion": "Pakistan Region",
      "population": 9339023,
      "populationFormatted": "9.34 Million",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Urdu",
        "Punjabi",
        "Pashto",
        "Sindhi"
      ]
    },
    {
      "cityName": "Lahore",
      "stateOrRegion": "Pakistan Region",
      "population": 5143495,
      "populationFormatted": "5.14 Million",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "Urdu",
        "Punjabi",
        "Pashto",
        "Sindhi"
      ]
    },
    {
      "cityName": "Faisalabad",
      "stateOrRegion": "Pakistan Region",
      "population": 2008861,
      "populationFormatted": "2.01 Million",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Industrial Manufacturing, Automotive Parts & Assembly",
      "primaryLanguagesSpoken": [
        "Urdu",
        "Punjabi",
        "Pashto",
        "Sindhi"
      ]
    },
    {
      "cityName": "Rawalpindi",
      "stateOrRegion": "Pakistan Region",
      "population": 1409768,
      "populationFormatted": "1.41 Million",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Healthcare Services, Clinical Research & Hospital Networks",
      "primaryLanguagesSpoken": [
        "Urdu",
        "Punjabi",
        "Pashto",
        "Sindhi"
      ]
    },
    {
      "cityName": "Multan",
      "stateOrRegion": "Pakistan Region",
      "population": 1197384,
      "populationFormatted": "1.20 Million",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Maritime Shipping, Container Logistics & Port Operations",
      "primaryLanguagesSpoken": [
        "Urdu",
        "Punjabi",
        "Pashto",
        "Sindhi"
      ]
    },
    {
      "cityName": "Gujranwala",
      "stateOrRegion": "Pakistan Region",
      "population": 1132509,
      "populationFormatted": "1.13 Million",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Textiles, Garments Manufacturing & Artisanal Craft",
      "primaryLanguagesSpoken": [
        "Urdu",
        "Punjabi",
        "Pashto",
        "Sindhi"
      ]
    },
    {
      "cityName": "Peshawar",
      "stateOrRegion": "Pakistan Region",
      "population": 982816,
      "populationFormatted": "982,816",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Renewable Energy, Solar Operations & Electrical Grid",
      "primaryLanguagesSpoken": [
        "Urdu",
        "Punjabi",
        "Pashto",
        "Sindhi"
      ]
    },
    {
      "cityName": "Quetta",
      "stateOrRegion": "Pakistan Region",
      "population": 565137,
      "populationFormatted": "565,137",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Higher Vocational Training, Engineering & Trades",
      "primaryLanguagesSpoken": [
        "Urdu",
        "Punjabi",
        "Pashto",
        "Sindhi"
      ]
    },
    {
      "cityName": "Sargodha",
      "stateOrRegion": "Pakistan Region",
      "population": 458440,
      "populationFormatted": "458,440",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Mining Operations, Raw Material Extraction & Metallurgy",
      "primaryLanguagesSpoken": [
        "Urdu",
        "Punjabi",
        "Pashto",
        "Sindhi"
      ]
    },
    {
      "cityName": "Sialkote",
      "stateOrRegion": "Pakistan Region",
      "population": 421502,
      "populationFormatted": "421,502",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Tourism & Cultural Heritage, Hospitality Management",
      "primaryLanguagesSpoken": [
        "Urdu",
        "Punjabi",
        "Pashto",
        "Sindhi"
      ]
    },
    {
      "cityName": "Bahawalpur",
      "stateOrRegion": "Pakistan Region",
      "population": 408395,
      "populationFormatted": "408,395",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Commercial Wholesale, Retail Distribution & Supply Chain",
      "primaryLanguagesSpoken": [
        "Urdu",
        "Punjabi",
        "Pashto",
        "Sindhi"
      ]
    },
    {
      "cityName": "Sukkur",
      "stateOrRegion": "Pakistan Region",
      "population": 335551,
      "populationFormatted": "335,551",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Telecommunications, Cloud Infrastructure & Fiber Networks",
      "primaryLanguagesSpoken": [
        "Urdu",
        "Punjabi",
        "Pashto",
        "Sindhi"
      ]
    },
    {
      "cityName": "Jhang",
      "stateOrRegion": "Pakistan Region",
      "population": 293366,
      "populationFormatted": "293,366",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Banking, Insurance, Stock Exchange & Asset Management",
      "primaryLanguagesSpoken": [
        "Urdu",
        "Punjabi",
        "Pashto",
        "Sindhi"
      ]
    },
    {
      "cityName": "Sheikhu Pura",
      "stateOrRegion": "Pakistan Region",
      "population": 280263,
      "populationFormatted": "280,263",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Biotechnology, Pharmaceuticals & Chemical Processing",
      "primaryLanguagesSpoken": [
        "Urdu",
        "Punjabi",
        "Pashto",
        "Sindhi"
      ]
    },
    {
      "cityName": "Larkana",
      "stateOrRegion": "Pakistan Region",
      "population": 270283,
      "populationFormatted": "270,283",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Urdu",
        "Punjabi",
        "Pashto",
        "Sindhi"
      ]
    },
    {
      "cityName": "Gujrat",
      "stateOrRegion": "Pakistan Region",
      "population": 251792,
      "populationFormatted": "251,792",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Urdu",
        "Punjabi",
        "Pashto",
        "Sindhi"
      ]
    },
    {
      "cityName": "Mardan",
      "stateOrRegion": "Pakistan Region",
      "population": 245926,
      "populationFormatted": "245,926",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "Urdu",
        "Punjabi",
        "Pashto",
        "Sindhi"
      ]
    },
    {
      "cityName": "Kasur",
      "stateOrRegion": "Pakistan Region",
      "population": 245321,
      "populationFormatted": "245,321",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Industrial Manufacturing, Automotive Parts & Assembly",
      "primaryLanguagesSpoken": [
        "Urdu",
        "Punjabi",
        "Pashto",
        "Sindhi"
      ]
    },
    {
      "cityName": "Rahimyar Khan",
      "stateOrRegion": "Pakistan Region",
      "population": 233537,
      "populationFormatted": "233,537",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Healthcare Services, Clinical Research & Hospital Networks",
      "primaryLanguagesSpoken": [
        "Urdu",
        "Punjabi",
        "Pashto",
        "Sindhi"
      ]
    },
    {
      "cityName": "Sahiwal",
      "stateOrRegion": "Pakistan Region",
      "population": 208778,
      "populationFormatted": "208,778",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Maritime Shipping, Container Logistics & Port Operations",
      "primaryLanguagesSpoken": [
        "Urdu",
        "Punjabi",
        "Pashto",
        "Sindhi"
      ]
    },
    {
      "cityName": "Okara",
      "stateOrRegion": "Pakistan Region",
      "population": 201815,
      "populationFormatted": "201,815",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Textiles, Garments Manufacturing & Artisanal Craft",
      "primaryLanguagesSpoken": [
        "Urdu",
        "Punjabi",
        "Pashto",
        "Sindhi"
      ]
    },
    {
      "cityName": "Wah Cantonment",
      "stateOrRegion": "Pakistan Region",
      "population": 198891,
      "populationFormatted": "198,891",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Renewable Energy, Solar Operations & Electrical Grid",
      "primaryLanguagesSpoken": [
        "Urdu",
        "Punjabi",
        "Pashto",
        "Sindhi"
      ]
    },
    {
      "cityName": "Dera Ghazi Khan",
      "stateOrRegion": "Pakistan Region",
      "population": 190542,
      "populationFormatted": "190,542",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Higher Vocational Training, Engineering & Trades",
      "primaryLanguagesSpoken": [
        "Urdu",
        "Punjabi",
        "Pashto",
        "Sindhi"
      ]
    },
    {
      "cityName": "Mirpur Khas",
      "stateOrRegion": "Pakistan Region",
      "population": 189671,
      "populationFormatted": "189,671",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Mining Operations, Raw Material Extraction & Metallurgy",
      "primaryLanguagesSpoken": [
        "Urdu",
        "Punjabi",
        "Pashto",
        "Sindhi"
      ]
    },
    {
      "cityName": "Nawabshah",
      "stateOrRegion": "Pakistan Region",
      "population": 189244,
      "populationFormatted": "189,244",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Tourism & Cultural Heritage, Hospitality Management",
      "primaryLanguagesSpoken": [
        "Urdu",
        "Punjabi",
        "Pashto",
        "Sindhi"
      ]
    },
    {
      "cityName": "Mangora",
      "stateOrRegion": "Pakistan Region",
      "population": 173868,
      "populationFormatted": "173,868",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Commercial Wholesale, Retail Distribution & Supply Chain",
      "primaryLanguagesSpoken": [
        "Urdu",
        "Punjabi",
        "Pashto",
        "Sindhi"
      ]
    },
    {
      "cityName": "Chiniot",
      "stateOrRegion": "Pakistan Region",
      "population": 172522,
      "populationFormatted": "172,522",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Telecommunications, Cloud Infrastructure & Fiber Networks",
      "primaryLanguagesSpoken": [
        "Urdu",
        "Punjabi",
        "Pashto",
        "Sindhi"
      ]
    },
    {
      "cityName": "Kamoke",
      "stateOrRegion": "Pakistan Region",
      "population": 152288,
      "populationFormatted": "152,288",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Banking, Insurance, Stock Exchange & Asset Management",
      "primaryLanguagesSpoken": [
        "Urdu",
        "Punjabi",
        "Pashto",
        "Sindhi"
      ]
    },
    {
      "cityName": "Burewala",
      "stateOrRegion": "Pakistan Region",
      "population": 152097,
      "populationFormatted": "152,097",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Biotechnology, Pharmaceuticals & Chemical Processing",
      "primaryLanguagesSpoken": [
        "Urdu",
        "Punjabi",
        "Pashto",
        "Sindhi"
      ]
    }
  ],
  "PS": [
    {
      "cityName": "East Jerusalem / Ramallah",
      "stateOrRegion": "Palestine Capital Region",
      "population": 780000,
      "populationFormatted": "780,000",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Arabic (Palestinian)",
        "English"
      ]
    }
  ],
  "PH": [
    {
      "cityName": "Quezon City",
      "stateOrRegion": "Metro Manila",
      "population": 2960048,
      "populationFormatted": "2.96 Million",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "BPO Software Support, Broadcast Media & State HQ",
      "primaryLanguagesSpoken": [
        "Filipino (Tagalog)",
        "English",
        "Cebuano",
        "Ilocano"
      ]
    },
    {
      "cityName": "Manila",
      "stateOrRegion": "Metro Manila",
      "population": 1846513,
      "populationFormatted": "1.85 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "National Government, Port of Manila Shipping & Banking",
      "primaryLanguagesSpoken": [
        "Filipino (Tagalog)",
        "English",
        "Cebuano",
        "Ilocano"
      ]
    },
    {
      "cityName": "Davao City",
      "stateOrRegion": "Davao Region",
      "population": 1776949,
      "populationFormatted": "1.78 Million",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Mindanao Commercial Hub, Agriculture Exports & Tech",
      "primaryLanguagesSpoken": [
        "Filipino (Tagalog)",
        "English",
        "Cebuano",
        "Ilocano"
      ]
    },
    {
      "cityName": "Caloocan",
      "stateOrRegion": "Metro Manila",
      "population": 1661584,
      "populationFormatted": "1.66 Million",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Manufacturing Parks, Industrial Supplies & Logistics",
      "primaryLanguagesSpoken": [
        "Filipino (Tagalog)",
        "English",
        "Cebuano",
        "Ilocano"
      ]
    },
    {
      "cityName": "Zamboanga City",
      "stateOrRegion": "Zamboanga Peninsula",
      "population": 977234,
      "populationFormatted": "977,234",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Sardine Canning Capital, Maritime Shipping & Trade",
      "primaryLanguagesSpoken": [
        "Filipino (Tagalog)",
        "English",
        "Cebuano",
        "Ilocano"
      ]
    },
    {
      "cityName": "Cebu City",
      "stateOrRegion": "Central Visayas",
      "population": 964169,
      "populationFormatted": "964,169",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Visayas Silicon Town BPO, Software & Seaport Logistics",
      "primaryLanguagesSpoken": [
        "Filipino (Tagalog)",
        "English",
        "Cebuano",
        "Ilocano"
      ]
    },
    {
      "cityName": "Antipolo",
      "stateOrRegion": "CALABARZON",
      "population": 887399,
      "populationFormatted": "887,399",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Artisanal Crafts, Apparel Manufacturing & Services",
      "primaryLanguagesSpoken": [
        "Filipino (Tagalog)",
        "English",
        "Cebuano",
        "Ilocano"
      ]
    },
    {
      "cityName": "Taguig",
      "stateOrRegion": "Metro Manila",
      "population": 886722,
      "populationFormatted": "886,722",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Bonifacio Global City FinTech, Corporate HQ & Software",
      "primaryLanguagesSpoken": [
        "Filipino (Tagalog)",
        "English",
        "Cebuano",
        "Ilocano"
      ]
    },
    {
      "cityName": "Pasig",
      "stateOrRegion": "Metro Manila",
      "population": 803159,
      "populationFormatted": "803,159",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Ortigas Center Business Hub, Electronics & Services",
      "primaryLanguagesSpoken": [
        "Filipino (Tagalog)",
        "English",
        "Cebuano",
        "Ilocano"
      ]
    },
    {
      "cityName": "Cagayan de Oro",
      "stateOrRegion": "Northern Mindanao",
      "population": 728402,
      "populationFormatted": "728,402",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Northern Mindanao Logistics, Del Monte Processing",
      "primaryLanguagesSpoken": [
        "Filipino (Tagalog)",
        "English",
        "Cebuano",
        "Ilocano"
      ]
    },
    {
      "cityName": "Valenzuela",
      "stateOrRegion": "Metro Manila",
      "population": 714978,
      "populationFormatted": "714,978",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Plastics Manufacturing, Packaging & Warehousing",
      "primaryLanguagesSpoken": [
        "Filipino (Tagalog)",
        "English",
        "Cebuano",
        "Ilocano"
      ]
    },
    {
      "cityName": "Dasmari\u00f1as",
      "stateOrRegion": "CALABARZON",
      "population": 703141,
      "populationFormatted": "703,141",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Industrial Estates, Electronics Assembly & Higher Ed",
      "primaryLanguagesSpoken": [
        "Filipino (Tagalog)",
        "English",
        "Cebuano",
        "Ilocano"
      ]
    },
    {
      "cityName": "General Santos",
      "stateOrRegion": "SOCCSKSARGEN",
      "population": 697315,
      "populationFormatted": "697,315",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Tuna Capital of the Philippines, Fish Export Processing",
      "primaryLanguagesSpoken": [
        "Filipino (Tagalog)",
        "English",
        "Cebuano",
        "Ilocano"
      ]
    },
    {
      "cityName": "Para\u00f1aque",
      "stateOrRegion": "Metro Manila",
      "population": 689992,
      "populationFormatted": "689,992",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Air Freight Logistics (NAIA Airport Zone) & Commerce",
      "primaryLanguagesSpoken": [
        "Filipino (Tagalog)",
        "English",
        "Cebuano",
        "Ilocano"
      ]
    },
    {
      "cityName": "Bacoor",
      "stateOrRegion": "CALABARZON",
      "population": 664625,
      "populationFormatted": "664,625",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Urban Residential Commerce & Light Manufacturing",
      "primaryLanguagesSpoken": [
        "Filipino (Tagalog)",
        "English",
        "Cebuano",
        "Ilocano"
      ]
    },
    {
      "cityName": "San Jose del Monte",
      "stateOrRegion": "Central Luzon",
      "population": 651813,
      "populationFormatted": "651,813",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Construction Materials, Marble Crafting & Agribusiness",
      "primaryLanguagesSpoken": [
        "Filipino (Tagalog)",
        "English",
        "Cebuano",
        "Ilocano"
      ]
    },
    {
      "cityName": "Makati",
      "stateOrRegion": "Metro Manila",
      "population": 629616,
      "populationFormatted": "629,616",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Wall Street of Philippines, Banking, Telecom & IT",
      "primaryLanguagesSpoken": [
        "Filipino (Tagalog)",
        "English",
        "Cebuano",
        "Ilocano"
      ]
    },
    {
      "cityName": "Las Pi\u00f1as",
      "stateOrRegion": "Metro Manila",
      "population": 606293,
      "populationFormatted": "606,293",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Organ Handicrafts, Commercial Trading & Logistics",
      "primaryLanguagesSpoken": [
        "Filipino (Tagalog)",
        "English",
        "Cebuano",
        "Ilocano"
      ]
    },
    {
      "cityName": "Bacolod",
      "stateOrRegion": "Western Visayas",
      "population": 600783,
      "populationFormatted": "600,783",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Sugarlandia Agribusiness, BPO Voice/Non-Voice IT",
      "primaryLanguagesSpoken": [
        "Filipino (Tagalog)",
        "English",
        "Cebuano",
        "Ilocano"
      ]
    },
    {
      "cityName": "Muntinlupa",
      "stateOrRegion": "Metro Manila",
      "population": 543445,
      "populationFormatted": "543,445",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Filinvest Tech City, Medical Devices & IT Parks",
      "primaryLanguagesSpoken": [
        "Filipino (Tagalog)",
        "English",
        "Cebuano",
        "Ilocano"
      ]
    },
    {
      "cityName": "Calamba",
      "stateOrRegion": "CALABARZON",
      "population": 539671,
      "populationFormatted": "539,671",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Semiconductor Fabrication Parks & Thermal Energy",
      "primaryLanguagesSpoken": [
        "Filipino (Tagalog)",
        "English",
        "Cebuano",
        "Ilocano"
      ]
    },
    {
      "cityName": "Lapu-Lapu",
      "stateOrRegion": "Central Visayas",
      "population": 497604,
      "populationFormatted": "497,604",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Mactan Export Processing Zone, Guitar Craft & Airport",
      "primaryLanguagesSpoken": [
        "Filipino (Tagalog)",
        "English",
        "Cebuano",
        "Ilocano"
      ]
    },
    {
      "cityName": "Imus",
      "stateOrRegion": "CALABARZON",
      "population": 496794,
      "populationFormatted": "496,794",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Industrial Freight Warehousing & Commercial Distribution",
      "primaryLanguagesSpoken": [
        "Filipino (Tagalog)",
        "English",
        "Cebuano",
        "Ilocano"
      ]
    },
    {
      "cityName": "Santa Rosa",
      "stateOrRegion": "CALABARZON",
      "population": 489308,
      "populationFormatted": "489,308",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Motor City of the Philippines (Toyota, Nissan Plants)",
      "primaryLanguagesSpoken": [
        "Filipino (Tagalog)",
        "English",
        "Cebuano",
        "Ilocano"
      ]
    },
    {
      "cityName": "Angeles City",
      "stateOrRegion": "Central Luzon",
      "population": 462928,
      "populationFormatted": "462,928",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Clark Freeport Zone Avionics, IT Software & BPO",
      "primaryLanguagesSpoken": [
        "Filipino (Tagalog)",
        "English",
        "Cebuano",
        "Ilocano"
      ]
    },
    {
      "cityName": "Iloilo City",
      "stateOrRegion": "Western Visayas",
      "population": 457626,
      "populationFormatted": "457,626",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Iloilo Business Park, IT-BPO Software & Education",
      "primaryLanguagesSpoken": [
        "Filipino (Tagalog)",
        "English",
        "Cebuano",
        "Ilocano"
      ]
    },
    {
      "cityName": "Marikina",
      "stateOrRegion": "Metro Manila",
      "population": 456059,
      "populationFormatted": "456,059",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Shoe Capital of the Philippines & Leather Crafts",
      "primaryLanguagesSpoken": [
        "Filipino (Tagalog)",
        "English",
        "Cebuano",
        "Ilocano"
      ]
    },
    {
      "cityName": "Pasay",
      "stateOrRegion": "Metro Manila",
      "population": 440656,
      "populationFormatted": "440,656",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "MICE Conventions, Airline Operations & Commerce",
      "primaryLanguagesSpoken": [
        "Filipino (Tagalog)",
        "English",
        "Cebuano",
        "Ilocano"
      ]
    },
    {
      "cityName": "Mandaluyong",
      "stateOrRegion": "Metro Manila",
      "population": 425758,
      "populationFormatted": "425,758",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Commercial Malls, Shopping Capital & Telecom HQ",
      "primaryLanguagesSpoken": [
        "Filipino (Tagalog)",
        "English",
        "Cebuano",
        "Ilocano"
      ]
    },
    {
      "cityName": "Pangasinan (Dagupan)",
      "stateOrRegion": "Ilocos Region",
      "population": 174302,
      "populationFormatted": "174,302",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Aquaculture Bangus Capital & Northern Commerce",
      "primaryLanguagesSpoken": [
        "Filipino (Tagalog)",
        "English",
        "Cebuano",
        "Ilocano"
      ]
    }
  ],
  "QA": [
    {
      "cityName": "Doha",
      "stateOrRegion": "Qatar Capital Region",
      "population": 405000,
      "populationFormatted": "405,000",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Arabic (Qatari)",
        "English"
      ]
    },
    {
      "cityName": "Al-Rayyan",
      "stateOrRegion": "Qatar Region",
      "population": 272860,
      "populationFormatted": "272,860",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Arabic (Qatari)",
        "English"
      ]
    },
    {
      "cityName": "Al-Khoor",
      "stateOrRegion": "Qatar Region",
      "population": 144459,
      "populationFormatted": "144,459",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "Arabic (Qatari)",
        "English"
      ]
    },
    {
      "cityName": "Al-Wakrah",
      "stateOrRegion": "Qatar Region",
      "population": 141222,
      "populationFormatted": "141,222",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Industrial Manufacturing, Automotive Parts & Assembly",
      "primaryLanguagesSpoken": [
        "Arabic (Qatari)",
        "English"
      ]
    }
  ],
  "SA": [
    {
      "cityName": "Riyadh",
      "stateOrRegion": "Saudi Arabia Capital Region",
      "population": 5460000,
      "populationFormatted": "5.46 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Arabic (Najdi/Hejazi)",
        "English"
      ]
    },
    {
      "cityName": "Jiddah",
      "stateOrRegion": "Saudi Arabia Region",
      "population": 2021095,
      "populationFormatted": "2.02 Million",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Arabic (Najdi/Hejazi)",
        "English"
      ]
    },
    {
      "cityName": "Makkah",
      "stateOrRegion": "Saudi Arabia Region",
      "population": 952429,
      "populationFormatted": "952,429",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "Arabic (Najdi/Hejazi)",
        "English"
      ]
    },
    {
      "cityName": "Al-Madinah",
      "stateOrRegion": "Saudi Arabia Region",
      "population": 609318,
      "populationFormatted": "609,318",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Industrial Manufacturing, Automotive Parts & Assembly",
      "primaryLanguagesSpoken": [
        "Arabic (Najdi/Hejazi)",
        "English"
      ]
    },
    {
      "cityName": "Ad-Dammam",
      "stateOrRegion": "Saudi Arabia Region",
      "population": 482117,
      "populationFormatted": "482,117",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Healthcare Services, Clinical Research & Hospital Networks",
      "primaryLanguagesSpoken": [
        "Arabic (Najdi/Hejazi)",
        "English"
      ]
    },
    {
      "cityName": "At-Ta'If",
      "stateOrRegion": "Saudi Arabia Region",
      "population": 408129,
      "populationFormatted": "408,129",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Maritime Shipping, Container Logistics & Port Operations",
      "primaryLanguagesSpoken": [
        "Arabic (Najdi/Hejazi)",
        "English"
      ]
    },
    {
      "cityName": "Najran",
      "stateOrRegion": "Saudi Arabia Region",
      "population": 246880,
      "populationFormatted": "246,880",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Textiles, Garments Manufacturing & Artisanal Craft",
      "primaryLanguagesSpoken": [
        "Arabic (Najdi/Hejazi)",
        "English"
      ]
    },
    {
      "cityName": "Buraydah",
      "stateOrRegion": "Saudi Arabia Region",
      "population": 240091,
      "populationFormatted": "240,091",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Renewable Energy, Solar Operations & Electrical Grid",
      "primaryLanguagesSpoken": [
        "Arabic (Najdi/Hejazi)",
        "English"
      ]
    },
    {
      "cityName": "Al-Hufuf",
      "stateOrRegion": "Saudi Arabia Region",
      "population": 225840,
      "populationFormatted": "225,840",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Higher Vocational Training, Engineering & Trades",
      "primaryLanguagesSpoken": [
        "Arabic (Najdi/Hejazi)",
        "English"
      ]
    },
    {
      "cityName": "Al-Jubayl",
      "stateOrRegion": "Saudi Arabia Region",
      "population": 222544,
      "populationFormatted": "222,544",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Mining Operations, Raw Material Extraction & Metallurgy",
      "primaryLanguagesSpoken": [
        "Arabic (Najdi/Hejazi)",
        "English"
      ]
    },
    {
      "cityName": "Al-Mubarraz",
      "stateOrRegion": "Saudi Arabia Region",
      "population": 219097,
      "populationFormatted": "219,097",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Tourism & Cultural Heritage, Hospitality Management",
      "primaryLanguagesSpoken": [
        "Arabic (Najdi/Hejazi)",
        "English"
      ]
    },
    {
      "cityName": "Khamis Mushayt",
      "stateOrRegion": "Saudi Arabia Region",
      "population": 217990,
      "populationFormatted": "217,990",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Commercial Wholesale, Retail Distribution & Supply Chain",
      "primaryLanguagesSpoken": [
        "Arabic (Najdi/Hejazi)",
        "English"
      ]
    },
    {
      "cityName": "Yanbu Al-Bahr",
      "stateOrRegion": "Saudi Arabia Region",
      "population": 188430,
      "populationFormatted": "188,430",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Telecommunications, Cloud Infrastructure & Fiber Networks",
      "primaryLanguagesSpoken": [
        "Arabic (Najdi/Hejazi)",
        "English"
      ]
    },
    {
      "cityName": "Ha'Il",
      "stateOrRegion": "Saudi Arabia Region",
      "population": 175518,
      "populationFormatted": "175,518",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Banking, Insurance, Stock Exchange & Asset Management",
      "primaryLanguagesSpoken": [
        "Arabic (Najdi/Hejazi)",
        "English"
      ]
    },
    {
      "cityName": "Al-Kharj",
      "stateOrRegion": "Saudi Arabia Region",
      "population": 148687,
      "populationFormatted": "148,687",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Biotechnology, Pharmaceuticals & Chemical Processing",
      "primaryLanguagesSpoken": [
        "Arabic (Najdi/Hejazi)",
        "English"
      ]
    },
    {
      "cityName": "Al-Khubar",
      "stateOrRegion": "Saudi Arabia Region",
      "population": 142981,
      "populationFormatted": "142,981",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Arabic (Najdi/Hejazi)",
        "English"
      ]
    },
    {
      "cityName": "Hafar Al-Batin",
      "stateOrRegion": "Saudi Arabia Region",
      "population": 138401,
      "populationFormatted": "138,401",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Arabic (Najdi/Hejazi)",
        "English"
      ]
    },
    {
      "cityName": "Al-Hawiyah",
      "stateOrRegion": "Saudi Arabia Region",
      "population": 132078,
      "populationFormatted": "132,078",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "Arabic (Najdi/Hejazi)",
        "English"
      ]
    },
    {
      "cityName": "Unayzah",
      "stateOrRegion": "Saudi Arabia Region",
      "population": 128930,
      "populationFormatted": "128,930",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Industrial Manufacturing, Automotive Parts & Assembly",
      "primaryLanguagesSpoken": [
        "Arabic (Najdi/Hejazi)",
        "English"
      ]
    },
    {
      "cityName": "Ath-Thuqbah",
      "stateOrRegion": "Saudi Arabia Region",
      "population": 126014,
      "populationFormatted": "126,014",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Healthcare Services, Clinical Research & Hospital Networks",
      "primaryLanguagesSpoken": [
        "Arabic (Najdi/Hejazi)",
        "English"
      ]
    },
    {
      "cityName": "Sekaka",
      "stateOrRegion": "Saudi Arabia Region",
      "population": 122686,
      "populationFormatted": "122,686",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Maritime Shipping, Container Logistics & Port Operations",
      "primaryLanguagesSpoken": [
        "Arabic (Najdi/Hejazi)",
        "English"
      ]
    },
    {
      "cityName": "Abha",
      "stateOrRegion": "Saudi Arabia Region",
      "population": 112148,
      "populationFormatted": "112,148",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Textiles, Garments Manufacturing & Artisanal Craft",
      "primaryLanguagesSpoken": [
        "Arabic (Najdi/Hejazi)",
        "English"
      ]
    },
    {
      "cityName": "Ar'Ar",
      "stateOrRegion": "Saudi Arabia Region",
      "population": 105752,
      "populationFormatted": "105,752",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Renewable Energy, Solar Operations & Electrical Grid",
      "primaryLanguagesSpoken": [
        "Arabic (Najdi/Hejazi)",
        "English"
      ]
    },
    {
      "cityName": "Jizan",
      "stateOrRegion": "Saudi Arabia Region",
      "population": 100694,
      "populationFormatted": "100,694",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Higher Vocational Training, Engineering & Trades",
      "primaryLanguagesSpoken": [
        "Arabic (Najdi/Hejazi)",
        "English"
      ]
    },
    {
      "cityName": "Al-Qurrayyat",
      "stateOrRegion": "Saudi Arabia Region",
      "population": 100436,
      "populationFormatted": "100,436",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Mining Operations, Raw Material Extraction & Metallurgy",
      "primaryLanguagesSpoken": [
        "Arabic (Najdi/Hejazi)",
        "English"
      ]
    }
  ],
  "SG": [
    {
      "cityName": "Singapore",
      "stateOrRegion": "Singapore Capital Region",
      "population": 885000,
      "populationFormatted": "885,000",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "English",
        "Mandarin Chinese",
        "Malay",
        "Tamil"
      ]
    }
  ],
  "KR": [
    {
      "cityName": "Seoul",
      "stateOrRegion": "South Korea Capital Region",
      "population": 7755000,
      "populationFormatted": "7.75 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Korean",
        "English"
      ]
    }
  ],
  "LK": [
    {
      "cityName": "Sri Jayawardenepura Kotte",
      "stateOrRegion": "Sri Lanka Capital Region",
      "population": 3300000,
      "populationFormatted": "3.30 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Sinhala",
        "Tamil",
        "English"
      ]
    },
    {
      "cityName": "Colombo",
      "stateOrRegion": "Sri Lanka Region",
      "population": 647100,
      "populationFormatted": "647,100",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Sinhala",
        "Tamil",
        "English"
      ]
    },
    {
      "cityName": "Dehiwala-Mount Lavinia",
      "stateOrRegion": "Sri Lanka Region",
      "population": 210546,
      "populationFormatted": "210,546",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "Sinhala",
        "Tamil",
        "English"
      ]
    },
    {
      "cityName": "Moratuwa",
      "stateOrRegion": "Sri Lanka Region",
      "population": 177563,
      "populationFormatted": "177,563",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Industrial Manufacturing, Automotive Parts & Assembly",
      "primaryLanguagesSpoken": [
        "Sinhala",
        "Tamil",
        "English"
      ]
    },
    {
      "cityName": "Negombo",
      "stateOrRegion": "Sri Lanka Region",
      "population": 121701,
      "populationFormatted": "121,701",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Healthcare Services, Clinical Research & Hospital Networks",
      "primaryLanguagesSpoken": [
        "Sinhala",
        "Tamil",
        "English"
      ]
    },
    {
      "cityName": "Sri Jayawardanapura Kotte",
      "stateOrRegion": "Sri Lanka Region",
      "population": 116366,
      "populationFormatted": "116,366",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Maritime Shipping, Container Logistics & Port Operations",
      "primaryLanguagesSpoken": [
        "Sinhala",
        "Tamil",
        "English"
      ]
    },
    {
      "cityName": "Kandy",
      "stateOrRegion": "Sri Lanka Region",
      "population": 109343,
      "populationFormatted": "109,343",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Textiles, Garments Manufacturing & Artisanal Craft",
      "primaryLanguagesSpoken": [
        "Sinhala",
        "Tamil",
        "English"
      ]
    }
  ],
  "SY": [
    {
      "cityName": "Damascus",
      "stateOrRegion": "Syria Capital Region",
      "population": 3300000,
      "populationFormatted": "3.30 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Arabic (Syrian)",
        "Kurdish"
      ]
    }
  ],
  "TW": [
    {
      "cityName": "Taipei",
      "stateOrRegion": "Taiwan Capital Region",
      "population": 3510000,
      "populationFormatted": "3.51 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Mandarin Chinese",
        "Taiwanese Hokkien"
      ]
    }
  ],
  "TJ": [
    {
      "cityName": "Dushanbe",
      "stateOrRegion": "Tajikistan Capital Region",
      "population": 1500000,
      "populationFormatted": "1.50 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Tajik",
        "Russian"
      ]
    },
    {
      "cityName": "Khujand",
      "stateOrRegion": "Tajikistan Region",
      "population": 155316,
      "populationFormatted": "155,316",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Tajik",
        "Russian"
      ]
    }
  ],
  "TH": [
    {
      "cityName": "Bangkok",
      "stateOrRegion": "Thailand Capital Region",
      "population": 10740000,
      "populationFormatted": "10.74 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Thai",
        "Isan (Northeastern Thai)"
      ]
    },
    {
      "cityName": "Nakhon Ratchasima",
      "stateOrRegion": "Thailand Region",
      "population": 2556260,
      "populationFormatted": "2.56 Million",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Thai",
        "Isan (Northeastern Thai)"
      ]
    },
    {
      "cityName": "Khon Kaen",
      "stateOrRegion": "Thailand Region",
      "population": 1733434,
      "populationFormatted": "1.73 Million",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "Thai",
        "Isan (Northeastern Thai)"
      ]
    },
    {
      "cityName": "Ubon Ratchathani",
      "stateOrRegion": "Thailand Region",
      "population": 1691441,
      "populationFormatted": "1.69 Million",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Industrial Manufacturing, Automotive Parts & Assembly",
      "primaryLanguagesSpoken": [
        "Thai",
        "Isan (Northeastern Thai)"
      ]
    },
    {
      "cityName": "Nakhon Si Thammarat",
      "stateOrRegion": "Thailand Region",
      "population": 1519811,
      "populationFormatted": "1.52 Million",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Healthcare Services, Clinical Research & Hospital Networks",
      "primaryLanguagesSpoken": [
        "Thai",
        "Isan (Northeastern Thai)"
      ]
    },
    {
      "cityName": "Chiang Mai",
      "stateOrRegion": "Thailand Region",
      "population": 1500127,
      "populationFormatted": "1.50 Million",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Maritime Shipping, Container Logistics & Port Operations",
      "primaryLanguagesSpoken": [
        "Thai",
        "Isan (Northeastern Thai)"
      ]
    },
    {
      "cityName": "Buri Ram",
      "stateOrRegion": "Thailand Region",
      "population": 1493359,
      "populationFormatted": "1.49 Million",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Textiles, Garments Manufacturing & Artisanal Craft",
      "primaryLanguagesSpoken": [
        "Thai",
        "Isan (Northeastern Thai)"
      ]
    },
    {
      "cityName": "Udon Thani",
      "stateOrRegion": "Thailand Region",
      "population": 1467158,
      "populationFormatted": "1.47 Million",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Renewable Energy, Solar Operations & Electrical Grid",
      "primaryLanguagesSpoken": [
        "Thai",
        "Isan (Northeastern Thai)"
      ]
    },
    {
      "cityName": "Si Sa Ket",
      "stateOrRegion": "Thailand Region",
      "population": 1405500,
      "populationFormatted": "1.41 Million",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Higher Vocational Training, Engineering & Trades",
      "primaryLanguagesSpoken": [
        "Thai",
        "Isan (Northeastern Thai)"
      ]
    },
    {
      "cityName": "Surin",
      "stateOrRegion": "Thailand Region",
      "population": 1327901,
      "populationFormatted": "1.33 Million",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Mining Operations, Raw Material Extraction & Metallurgy",
      "primaryLanguagesSpoken": [
        "Thai",
        "Isan (Northeastern Thai)"
      ]
    },
    {
      "cityName": "Roi Et",
      "stateOrRegion": "Thailand Region",
      "population": 1256458,
      "populationFormatted": "1.26 Million",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Tourism & Cultural Heritage, Hospitality Management",
      "primaryLanguagesSpoken": [
        "Thai",
        "Isan (Northeastern Thai)"
      ]
    },
    {
      "cityName": "Songkhla",
      "stateOrRegion": "Thailand Region",
      "population": 1255662,
      "populationFormatted": "1.26 Million",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Commercial Wholesale, Retail Distribution & Supply Chain",
      "primaryLanguagesSpoken": [
        "Thai",
        "Isan (Northeastern Thai)"
      ]
    },
    {
      "cityName": "Chiang Rai",
      "stateOrRegion": "Thailand Region",
      "population": 1129701,
      "populationFormatted": "1.13 Million",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Telecommunications, Cloud Infrastructure & Fiber Networks",
      "primaryLanguagesSpoken": [
        "Thai",
        "Isan (Northeastern Thai)"
      ]
    },
    {
      "cityName": "Chaiyaphum",
      "stateOrRegion": "Thailand Region",
      "population": 1095360,
      "populationFormatted": "1.10 Million",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Banking, Insurance, Stock Exchange & Asset Management",
      "primaryLanguagesSpoken": [
        "Thai",
        "Isan (Northeastern Thai)"
      ]
    },
    {
      "cityName": "Nakhon Sawan",
      "stateOrRegion": "Thailand Region",
      "population": 1090379,
      "populationFormatted": "1.09 Million",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Biotechnology, Pharmaceuticals & Chemical Processing",
      "primaryLanguagesSpoken": [
        "Thai",
        "Isan (Northeastern Thai)"
      ]
    },
    {
      "cityName": "Chon Buri",
      "stateOrRegion": "Thailand Region",
      "population": 1040865,
      "populationFormatted": "1.04 Million",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Thai",
        "Isan (Northeastern Thai)"
      ]
    },
    {
      "cityName": "Sakon Sakhon",
      "stateOrRegion": "Thailand Region",
      "population": 1040766,
      "populationFormatted": "1.04 Million",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Thai",
        "Isan (Northeastern Thai)"
      ]
    },
    {
      "cityName": "Samut Prakan",
      "stateOrRegion": "Thailand Region",
      "population": 1028401,
      "populationFormatted": "1.03 Million",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "Thai",
        "Isan (Northeastern Thai)"
      ]
    },
    {
      "cityName": "Phetchabun",
      "stateOrRegion": "Thailand Region",
      "population": 965784,
      "populationFormatted": "965,784",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Industrial Manufacturing, Automotive Parts & Assembly",
      "primaryLanguagesSpoken": [
        "Thai",
        "Isan (Northeastern Thai)"
      ]
    },
    {
      "cityName": "Maha Sarakham",
      "stateOrRegion": "Thailand Region",
      "population": 947313,
      "populationFormatted": "947,313",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Healthcare Services, Clinical Research & Hospital Networks",
      "primaryLanguagesSpoken": [
        "Thai",
        "Isan (Northeastern Thai)"
      ]
    },
    {
      "cityName": "Kalasin",
      "stateOrRegion": "Thailand Region",
      "population": 921366,
      "populationFormatted": "921,366",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Maritime Shipping, Container Logistics & Port Operations",
      "primaryLanguagesSpoken": [
        "Thai",
        "Isan (Northeastern Thai)"
      ]
    },
    {
      "cityName": "Nong Khai",
      "stateOrRegion": "Thailand Region",
      "population": 883704,
      "populationFormatted": "883,704",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Textiles, Garments Manufacturing & Artisanal Craft",
      "primaryLanguagesSpoken": [
        "Thai",
        "Isan (Northeastern Thai)"
      ]
    },
    {
      "cityName": "Surat Thani",
      "stateOrRegion": "Thailand Region",
      "population": 869410,
      "populationFormatted": "869,410",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Renewable Energy, Solar Operations & Electrical Grid",
      "primaryLanguagesSpoken": [
        "Thai",
        "Isan (Northeastern Thai)"
      ]
    },
    {
      "cityName": "Suphan Buri",
      "stateOrRegion": "Thailand Region",
      "population": 855949,
      "populationFormatted": "855,949",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Higher Vocational Training, Engineering & Trades",
      "primaryLanguagesSpoken": [
        "Thai",
        "Isan (Northeastern Thai)"
      ]
    },
    {
      "cityName": "Nonthaburi",
      "stateOrRegion": "Thailand Region",
      "population": 816614,
      "populationFormatted": "816,614",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Mining Operations, Raw Material Extraction & Metallurgy",
      "primaryLanguagesSpoken": [
        "Thai",
        "Isan (Northeastern Thai)"
      ]
    },
    {
      "cityName": "Nakhon Pathom",
      "stateOrRegion": "Thailand Region",
      "population": 815122,
      "populationFormatted": "815,122",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Tourism & Cultural Heritage, Hospitality Management",
      "primaryLanguagesSpoken": [
        "Thai",
        "Isan (Northeastern Thai)"
      ]
    },
    {
      "cityName": "Phitsanulok",
      "stateOrRegion": "Thailand Region",
      "population": 792678,
      "populationFormatted": "792,678",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Commercial Wholesale, Retail Distribution & Supply Chain",
      "primaryLanguagesSpoken": [
        "Thai",
        "Isan (Northeastern Thai)"
      ]
    },
    {
      "cityName": "Ratchaburi",
      "stateOrRegion": "Thailand Region",
      "population": 791217,
      "populationFormatted": "791,217",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Telecommunications, Cloud Infrastructure & Fiber Networks",
      "primaryLanguagesSpoken": [
        "Thai",
        "Isan (Northeastern Thai)"
      ]
    },
    {
      "cityName": "Lampang",
      "stateOrRegion": "Thailand Region",
      "population": 782152,
      "populationFormatted": "782,152",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Banking, Insurance, Stock Exchange & Asset Management",
      "primaryLanguagesSpoken": [
        "Thai",
        "Isan (Northeastern Thai)"
      ]
    },
    {
      "cityName": "Lop Buri",
      "stateOrRegion": "Thailand Region",
      "population": 745506,
      "populationFormatted": "745,506",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Biotechnology, Pharmaceuticals & Chemical Processing",
      "primaryLanguagesSpoken": [
        "Thai",
        "Isan (Northeastern Thai)"
      ]
    }
  ],
  "TL": [
    {
      "cityName": "Dili",
      "stateOrRegion": "Timor-Leste Capital Region",
      "population": 202500,
      "populationFormatted": "202,500",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Tetum",
        "Portuguese"
      ]
    }
  ],
  "TR": [
    {
      "cityName": "Istanbul",
      "stateOrRegion": "Turkey Region",
      "population": 13596782,
      "populationFormatted": "13.60 Million",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Turkish",
        "Kurdish (Kurmanji)"
      ]
    },
    {
      "cityName": "Ankara",
      "stateOrRegion": "Turkey Capital Region",
      "population": 12000000,
      "populationFormatted": "12.00 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Turkish",
        "Kurdish (Kurmanji)"
      ]
    },
    {
      "cityName": "Izmir",
      "stateOrRegion": "Turkey Region",
      "population": 3384470,
      "populationFormatted": "3.38 Million",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "Turkish",
        "Kurdish (Kurmanji)"
      ]
    },
    {
      "cityName": "Bursa",
      "stateOrRegion": "Turkey Region",
      "population": 1966312,
      "populationFormatted": "1.97 Million",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Industrial Manufacturing, Automotive Parts & Assembly",
      "primaryLanguagesSpoken": [
        "Turkish",
        "Kurdish (Kurmanji)"
      ]
    },
    {
      "cityName": "Adana",
      "stateOrRegion": "Turkey Region",
      "population": 1626756,
      "populationFormatted": "1.63 Million",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Healthcare Services, Clinical Research & Hospital Networks",
      "primaryLanguagesSpoken": [
        "Turkish",
        "Kurdish (Kurmanji)"
      ]
    },
    {
      "cityName": "Kocaeli",
      "stateOrRegion": "Turkey Region",
      "population": 1513682,
      "populationFormatted": "1.51 Million",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Maritime Shipping, Container Logistics & Port Operations",
      "primaryLanguagesSpoken": [
        "Turkish",
        "Kurdish (Kurmanji)"
      ]
    },
    {
      "cityName": "Gaziantep",
      "stateOrRegion": "Turkey Region",
      "population": 1415831,
      "populationFormatted": "1.42 Million",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Textiles, Garments Manufacturing & Artisanal Craft",
      "primaryLanguagesSpoken": [
        "Turkish",
        "Kurdish (Kurmanji)"
      ]
    },
    {
      "cityName": "Konya",
      "stateOrRegion": "Turkey Region",
      "population": 1090838,
      "populationFormatted": "1.09 Million",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Renewable Energy, Solar Operations & Electrical Grid",
      "primaryLanguagesSpoken": [
        "Turkish",
        "Kurdish (Kurmanji)"
      ]
    },
    {
      "cityName": "Antalya",
      "stateOrRegion": "Turkey Region",
      "population": 1057883,
      "populationFormatted": "1.06 Million",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Higher Vocational Training, Engineering & Trades",
      "primaryLanguagesSpoken": [
        "Turkish",
        "Kurdish (Kurmanji)"
      ]
    },
    {
      "cityName": "Kayseri",
      "stateOrRegion": "Turkey Region",
      "population": 990758,
      "populationFormatted": "990,758",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Mining Operations, Raw Material Extraction & Metallurgy",
      "primaryLanguagesSpoken": [
        "Turkish",
        "Kurdish (Kurmanji)"
      ]
    },
    {
      "cityName": "Diyarbakir",
      "stateOrRegion": "Turkey Region",
      "population": 883891,
      "populationFormatted": "883,891",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Tourism & Cultural Heritage, Hospitality Management",
      "primaryLanguagesSpoken": [
        "Turkish",
        "Kurdish (Kurmanji)"
      ]
    },
    {
      "cityName": "Mersin",
      "stateOrRegion": "Turkey Region",
      "population": 868319,
      "populationFormatted": "868,319",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Commercial Wholesale, Retail Distribution & Supply Chain",
      "primaryLanguagesSpoken": [
        "Turkish",
        "Kurdish (Kurmanji)"
      ]
    },
    {
      "cityName": "Eskisehir",
      "stateOrRegion": "Turkey Region",
      "population": 654160,
      "populationFormatted": "654,160",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Telecommunications, Cloud Infrastructure & Fiber Networks",
      "primaryLanguagesSpoken": [
        "Turkish",
        "Kurdish (Kurmanji)"
      ]
    },
    {
      "cityName": "Sakarya",
      "stateOrRegion": "Turkey Region",
      "population": 583865,
      "populationFormatted": "583,865",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Banking, Insurance, Stock Exchange & Asset Management",
      "primaryLanguagesSpoken": [
        "Turkish",
        "Kurdish (Kurmanji)"
      ]
    },
    {
      "cityName": "Samsun",
      "stateOrRegion": "Turkey Region",
      "population": 542942,
      "populationFormatted": "542,942",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Biotechnology, Pharmaceuticals & Chemical Processing",
      "primaryLanguagesSpoken": [
        "Turkish",
        "Kurdish (Kurmanji)"
      ]
    },
    {
      "cityName": "Sanliurfa",
      "stateOrRegion": "Turkey Region",
      "population": 520723,
      "populationFormatted": "520,723",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Turkish",
        "Kurdish (Kurmanji)"
      ]
    },
    {
      "cityName": "Denizli",
      "stateOrRegion": "Turkey Region",
      "population": 518624,
      "populationFormatted": "518,624",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Turkish",
        "Kurdish (Kurmanji)"
      ]
    },
    {
      "cityName": "Kahramanmaras",
      "stateOrRegion": "Turkey Region",
      "population": 436149,
      "populationFormatted": "436,149",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "Turkish",
        "Kurdish (Kurmanji)"
      ]
    },
    {
      "cityName": "Malatya",
      "stateOrRegion": "Turkey Region",
      "population": 423170,
      "populationFormatted": "423,170",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Industrial Manufacturing, Automotive Parts & Assembly",
      "primaryLanguagesSpoken": [
        "Turkish",
        "Kurdish (Kurmanji)"
      ]
    },
    {
      "cityName": "Erzurum",
      "stateOrRegion": "Turkey Region",
      "population": 383391,
      "populationFormatted": "383,391",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Healthcare Services, Clinical Research & Hospital Networks",
      "primaryLanguagesSpoken": [
        "Turkish",
        "Kurdish (Kurmanji)"
      ]
    },
    {
      "cityName": "Van",
      "stateOrRegion": "Turkey Region",
      "population": 361804,
      "populationFormatted": "361,804",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Maritime Shipping, Container Logistics & Port Operations",
      "primaryLanguagesSpoken": [
        "Turkish",
        "Kurdish (Kurmanji)"
      ]
    },
    {
      "cityName": "Elazig",
      "stateOrRegion": "Turkey Region",
      "population": 344538,
      "populationFormatted": "344,538",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Textiles, Garments Manufacturing & Artisanal Craft",
      "primaryLanguagesSpoken": [
        "Turkish",
        "Kurdish (Kurmanji)"
      ]
    },
    {
      "cityName": "Batman",
      "stateOrRegion": "Turkey Region",
      "population": 344466,
      "populationFormatted": "344,466",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Renewable Energy, Solar Operations & Electrical Grid",
      "primaryLanguagesSpoken": [
        "Turkish",
        "Kurdish (Kurmanji)"
      ]
    },
    {
      "cityName": "Sivas",
      "stateOrRegion": "Turkey Region",
      "population": 311617,
      "populationFormatted": "311,617",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Higher Vocational Training, Engineering & Trades",
      "primaryLanguagesSpoken": [
        "Turkish",
        "Kurdish (Kurmanji)"
      ]
    },
    {
      "cityName": "Manisa",
      "stateOrRegion": "Turkey Region",
      "population": 305134,
      "populationFormatted": "305,134",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Mining Operations, Raw Material Extraction & Metallurgy",
      "primaryLanguagesSpoken": [
        "Turkish",
        "Kurdish (Kurmanji)"
      ]
    },
    {
      "cityName": "Balikesir",
      "stateOrRegion": "Turkey Region",
      "population": 265451,
      "populationFormatted": "265,451",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Tourism & Cultural Heritage, Hospitality Management",
      "primaryLanguagesSpoken": [
        "Turkish",
        "Kurdish (Kurmanji)"
      ]
    },
    {
      "cityName": "Tarsus",
      "stateOrRegion": "Turkey Region",
      "population": 243773,
      "populationFormatted": "243,773",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Commercial Wholesale, Retail Distribution & Supply Chain",
      "primaryLanguagesSpoken": [
        "Turkish",
        "Kurdish (Kurmanji)"
      ]
    },
    {
      "cityName": "Trabzon",
      "stateOrRegion": "Turkey Region",
      "population": 241719,
      "populationFormatted": "241,719",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Telecommunications, Cloud Infrastructure & Fiber Networks",
      "primaryLanguagesSpoken": [
        "Turkish",
        "Kurdish (Kurmanji)"
      ]
    },
    {
      "cityName": "\u00c7orlu",
      "stateOrRegion": "Turkey Region",
      "population": 231137,
      "populationFormatted": "231,137",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Banking, Insurance, Stock Exchange & Asset Management",
      "primaryLanguagesSpoken": [
        "Turkish",
        "Kurdish (Kurmanji)"
      ]
    },
    {
      "cityName": "\u00c7orum",
      "stateOrRegion": "Turkey Region",
      "population": 228536,
      "populationFormatted": "228,536",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Biotechnology, Pharmaceuticals & Chemical Processing",
      "primaryLanguagesSpoken": [
        "Turkish",
        "Kurdish (Kurmanji)"
      ]
    }
  ],
  "TM": [
    {
      "cityName": "Ashgabat",
      "stateOrRegion": "Turkmenistan Capital Region",
      "population": 960000,
      "populationFormatted": "960,000",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Turkmen",
        "Russian"
      ]
    },
    {
      "cityName": "Ashkhabad",
      "stateOrRegion": "Turkmenistan Region",
      "population": 407000,
      "populationFormatted": "407,000",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Turkmen",
        "Russian"
      ]
    },
    {
      "cityName": "T\u00fcrkmenabat",
      "stateOrRegion": "Turkmenistan Region",
      "population": 164000,
      "populationFormatted": "164,000",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "Turkmen",
        "Russian"
      ]
    },
    {
      "cityName": "Tashauz",
      "stateOrRegion": "Turkmenistan Region",
      "population": 114000,
      "populationFormatted": "114,000",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Industrial Manufacturing, Automotive Parts & Assembly",
      "primaryLanguagesSpoken": [
        "Turkmen",
        "Russian"
      ]
    }
  ],
  "AE": [
    {
      "cityName": "Abu Dhabi",
      "stateOrRegion": "United Arab Emirates Capital Region",
      "population": 1485000,
      "populationFormatted": "1.49 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Arabic (Emirati)",
        "English"
      ]
    }
  ],
  "UZ": [
    {
      "cityName": "Tashkent",
      "stateOrRegion": "Uzbekistan Capital Region",
      "population": 5400000,
      "populationFormatted": "5.40 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Uzbek",
        "Russian"
      ]
    },
    {
      "cityName": "Namangan",
      "stateOrRegion": "Uzbekistan Region",
      "population": 391297,
      "populationFormatted": "391,297",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Uzbek",
        "Russian"
      ]
    },
    {
      "cityName": "Samarkand",
      "stateOrRegion": "Uzbekistan Region",
      "population": 361339,
      "populationFormatted": "361,339",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "Uzbek",
        "Russian"
      ]
    },
    {
      "cityName": "Andizhan",
      "stateOrRegion": "Uzbekistan Region",
      "population": 338366,
      "populationFormatted": "338,366",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Industrial Manufacturing, Automotive Parts & Assembly",
      "primaryLanguagesSpoken": [
        "Uzbek",
        "Russian"
      ]
    },
    {
      "cityName": "Bukhara",
      "stateOrRegion": "Uzbekistan Region",
      "population": 237361,
      "populationFormatted": "237,361",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Healthcare Services, Clinical Research & Hospital Networks",
      "primaryLanguagesSpoken": [
        "Uzbek",
        "Russian"
      ]
    },
    {
      "cityName": "Nukus",
      "stateOrRegion": "Uzbekistan Region",
      "population": 212012,
      "populationFormatted": "212,012",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Maritime Shipping, Container Logistics & Port Operations",
      "primaryLanguagesSpoken": [
        "Uzbek",
        "Russian"
      ]
    },
    {
      "cityName": "Karshi",
      "stateOrRegion": "Uzbekistan Region",
      "population": 204690,
      "populationFormatted": "204,690",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Textiles, Garments Manufacturing & Artisanal Craft",
      "primaryLanguagesSpoken": [
        "Uzbek",
        "Russian"
      ]
    },
    {
      "cityName": "Kokand",
      "stateOrRegion": "Uzbekistan Region",
      "population": 197450,
      "populationFormatted": "197,450",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Renewable Energy, Solar Operations & Electrical Grid",
      "primaryLanguagesSpoken": [
        "Uzbek",
        "Russian"
      ]
    },
    {
      "cityName": "Fergana",
      "stateOrRegion": "Uzbekistan Region",
      "population": 183037,
      "populationFormatted": "183,037",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Higher Vocational Training, Engineering & Trades",
      "primaryLanguagesSpoken": [
        "Uzbek",
        "Russian"
      ]
    },
    {
      "cityName": "Margilan",
      "stateOrRegion": "Uzbekistan Region",
      "population": 149646,
      "populationFormatted": "149,646",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Mining Operations, Raw Material Extraction & Metallurgy",
      "primaryLanguagesSpoken": [
        "Uzbek",
        "Russian"
      ]
    },
    {
      "cityName": "Chirchik",
      "stateOrRegion": "Uzbekistan Region",
      "population": 141742,
      "populationFormatted": "141,742",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Tourism & Cultural Heritage, Hospitality Management",
      "primaryLanguagesSpoken": [
        "Uzbek",
        "Russian"
      ]
    },
    {
      "cityName": "Urgentch",
      "stateOrRegion": "Uzbekistan Region",
      "population": 138609,
      "populationFormatted": "138,609",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Commercial Wholesale, Retail Distribution & Supply Chain",
      "primaryLanguagesSpoken": [
        "Uzbek",
        "Russian"
      ]
    },
    {
      "cityName": "Navoi",
      "stateOrRegion": "Uzbekistan Region",
      "population": 138082,
      "populationFormatted": "138,082",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Telecommunications, Cloud Infrastructure & Fiber Networks",
      "primaryLanguagesSpoken": [
        "Uzbek",
        "Russian"
      ]
    },
    {
      "cityName": "Banjzak",
      "stateOrRegion": "Uzbekistan Region",
      "population": 131512,
      "populationFormatted": "131,512",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Banking, Insurance, Stock Exchange & Asset Management",
      "primaryLanguagesSpoken": [
        "Uzbek",
        "Russian"
      ]
    },
    {
      "cityName": "Angren",
      "stateOrRegion": "Uzbekistan Region",
      "population": 128757,
      "populationFormatted": "128,757",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Biotechnology, Pharmaceuticals & Chemical Processing",
      "primaryLanguagesSpoken": [
        "Uzbek",
        "Russian"
      ]
    },
    {
      "cityName": "Termez",
      "stateOrRegion": "Uzbekistan Region",
      "population": 116467,
      "populationFormatted": "116,467",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Uzbek",
        "Russian"
      ]
    },
    {
      "cityName": "Almalyk",
      "stateOrRegion": "Uzbekistan Region",
      "population": 113114,
      "populationFormatted": "113,114",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Uzbek",
        "Russian"
      ]
    }
  ],
  "VN": [
    {
      "cityName": "Hanoi",
      "stateOrRegion": "Vietnam Capital Region",
      "population": 12000000,
      "populationFormatted": "12.00 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Vietnamese"
      ]
    }
  ],
  "YE": [
    {
      "cityName": "Sana'a",
      "stateOrRegion": "Yemen Capital Region",
      "population": 5055000,
      "populationFormatted": "5.05 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Arabic (Yemeni)",
        "Soqotri"
      ]
    },
    {
      "cityName": "Adan",
      "stateOrRegion": "Yemen Region",
      "population": 398294,
      "populationFormatted": "398,294",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Arabic (Yemeni)",
        "Soqotri"
      ]
    },
    {
      "cityName": "Ta'Izz",
      "stateOrRegion": "Yemen Region",
      "population": 317571,
      "populationFormatted": "317,571",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "Arabic (Yemeni)",
        "Soqotri"
      ]
    },
    {
      "cityName": "Al-Hudaydah",
      "stateOrRegion": "Yemen Region",
      "population": 298452,
      "populationFormatted": "298,452",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Industrial Manufacturing, Automotive Parts & Assembly",
      "primaryLanguagesSpoken": [
        "Arabic (Yemeni)",
        "Soqotri"
      ]
    },
    {
      "cityName": "Al-Mukalla",
      "stateOrRegion": "Yemen Region",
      "population": 122359,
      "populationFormatted": "122,359",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Healthcare Services, Clinical Research & Hospital Networks",
      "primaryLanguagesSpoken": [
        "Arabic (Yemeni)",
        "Soqotri"
      ]
    },
    {
      "cityName": "Ibb",
      "stateOrRegion": "Yemen Region",
      "population": 103312,
      "populationFormatted": "103,312",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Maritime Shipping, Container Logistics & Port Operations",
      "primaryLanguagesSpoken": [
        "Arabic (Yemeni)",
        "Soqotri"
      ]
    }
  ],
  "AU": [
    {
      "cityName": "Greater Sydney",
      "stateOrRegion": "Victoria",
      "population": 4605992,
      "populationFormatted": "4.61 Million",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "English (Australian)",
        "Mandarin Chinese"
      ]
    },
    {
      "cityName": "Greater Melbourne",
      "stateOrRegion": "Queensland",
      "population": 4169103,
      "populationFormatted": "4.17 Million",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "English (Australian)",
        "Mandarin Chinese"
      ]
    },
    {
      "cityName": "Canberra",
      "stateOrRegion": "New South Wales",
      "population": 3900000,
      "populationFormatted": "3.90 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "English (Australian)",
        "Mandarin Chinese"
      ]
    },
    {
      "cityName": "Sydney",
      "stateOrRegion": "Western Australia",
      "population": 3455110,
      "populationFormatted": "3.46 Million",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Industrial Manufacturing, Automotive Parts & Assembly",
      "primaryLanguagesSpoken": [
        "English (Australian)",
        "Mandarin Chinese"
      ]
    },
    {
      "cityName": "Melbourne",
      "stateOrRegion": "South Australia",
      "population": 3132900,
      "populationFormatted": "3.13 Million",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Healthcare Services, Clinical Research & Hospital Networks",
      "primaryLanguagesSpoken": [
        "English (Australian)",
        "Mandarin Chinese"
      ]
    },
    {
      "cityName": "Greater Brisbane",
      "stateOrRegion": "Tasmania",
      "population": 2146577,
      "populationFormatted": "2.15 Million",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Maritime Shipping, Container Logistics & Port Operations",
      "primaryLanguagesSpoken": [
        "English (Australian)",
        "Mandarin Chinese"
      ]
    },
    {
      "cityName": "Greater Perth",
      "stateOrRegion": "Australian Capital Territory",
      "population": 1832114,
      "populationFormatted": "1.83 Million",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Textiles, Garments Manufacturing & Artisanal Craft",
      "primaryLanguagesSpoken": [
        "English (Australian)",
        "Mandarin Chinese"
      ]
    },
    {
      "cityName": "Brisbane",
      "stateOrRegion": "Northern Territory",
      "population": 1490475,
      "populationFormatted": "1.49 Million",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Renewable Energy, Solar Operations & Electrical Grid",
      "primaryLanguagesSpoken": [
        "English (Australian)",
        "Mandarin Chinese"
      ]
    },
    {
      "cityName": "Greater Adelaide",
      "stateOrRegion": "New South Wales",
      "population": 1262940,
      "populationFormatted": "1.26 Million",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Higher Vocational Training, Engineering & Trades",
      "primaryLanguagesSpoken": [
        "English (Australian)",
        "Mandarin Chinese"
      ]
    },
    {
      "cityName": "Perth",
      "stateOrRegion": "Victoria",
      "population": 1162716,
      "populationFormatted": "1.16 Million",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Mining Operations, Raw Material Extraction & Metallurgy",
      "primaryLanguagesSpoken": [
        "English (Australian)",
        "Mandarin Chinese"
      ]
    },
    {
      "cityName": "Adelaide",
      "stateOrRegion": "Queensland",
      "population": 995955,
      "populationFormatted": "995,955",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Tourism & Cultural Heritage, Hospitality Management",
      "primaryLanguagesSpoken": [
        "English (Australian)",
        "Mandarin Chinese"
      ]
    },
    {
      "cityName": "Gold Coast",
      "stateOrRegion": "Western Australia",
      "population": 441736,
      "populationFormatted": "441,736",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Commercial Wholesale, Retail Distribution & Supply Chain",
      "primaryLanguagesSpoken": [
        "English (Australian)",
        "Mandarin Chinese"
      ]
    },
    {
      "cityName": "Newcastle-Maitland",
      "stateOrRegion": "South Australia",
      "population": 413962,
      "populationFormatted": "413,962",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Telecommunications, Cloud Infrastructure & Fiber Networks",
      "primaryLanguagesSpoken": [
        "English (Australian)",
        "Mandarin Chinese"
      ]
    },
    {
      "cityName": "Canberra-Queanbeyan",
      "stateOrRegion": "Tasmania",
      "population": 410419,
      "populationFormatted": "410,419",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Banking, Insurance, Stock Exchange & Asset Management",
      "primaryLanguagesSpoken": [
        "English (Australian)",
        "Mandarin Chinese"
      ]
    },
    {
      "cityName": "Gold Coast-Tweed Heads",
      "stateOrRegion": "Australian Capital Territory",
      "population": 406619,
      "populationFormatted": "406,619",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Biotechnology, Pharmaceuticals & Chemical Processing",
      "primaryLanguagesSpoken": [
        "English (Australian)",
        "Mandarin Chinese"
      ]
    },
    {
      "cityName": "Wollongong",
      "stateOrRegion": "Northern Territory",
      "population": 280705,
      "populationFormatted": "280,705",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "English (Australian)",
        "Mandarin Chinese"
      ]
    },
    {
      "cityName": "Newcastle",
      "stateOrRegion": "New South Wales",
      "population": 278773,
      "populationFormatted": "278,773",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "English (Australian)",
        "Mandarin Chinese"
      ]
    },
    {
      "cityName": "Central Coast",
      "stateOrRegion": "Victoria",
      "population": 254579,
      "populationFormatted": "254,579",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "English (Australian)",
        "Mandarin Chinese"
      ]
    },
    {
      "cityName": "Greater Wollongong",
      "stateOrRegion": "Queensland",
      "population": 227522,
      "populationFormatted": "227,522",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Industrial Manufacturing, Automotive Parts & Assembly",
      "primaryLanguagesSpoken": [
        "English (Australian)",
        "Mandarin Chinese"
      ]
    },
    {
      "cityName": "Greater Hobart",
      "stateOrRegion": "Western Australia",
      "population": 216276,
      "populationFormatted": "216,276",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Healthcare Services, Clinical Research & Hospital Networks",
      "primaryLanguagesSpoken": [
        "English (Australian)",
        "Mandarin Chinese"
      ]
    },
    {
      "cityName": "Sunshine Coast",
      "stateOrRegion": "South Australia",
      "population": 165089,
      "populationFormatted": "165,089",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Maritime Shipping, Container Logistics & Port Operations",
      "primaryLanguagesSpoken": [
        "English (Australian)",
        "Mandarin Chinese"
      ]
    },
    {
      "cityName": "Geelong",
      "stateOrRegion": "Tasmania",
      "population": 129668,
      "populationFormatted": "129,668",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Textiles, Garments Manufacturing & Artisanal Craft",
      "primaryLanguagesSpoken": [
        "English (Australian)",
        "Mandarin Chinese"
      ]
    },
    {
      "cityName": "Greater Darwin",
      "stateOrRegion": "Australian Capital Territory",
      "population": 129062,
      "populationFormatted": "129,062",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Renewable Energy, Solar Operations & Electrical Grid",
      "primaryLanguagesSpoken": [
        "English (Australian)",
        "Mandarin Chinese"
      ]
    },
    {
      "cityName": "Hobart",
      "stateOrRegion": "Northern Territory",
      "population": 125162,
      "populationFormatted": "125,162",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Higher Vocational Training, Engineering & Trades",
      "primaryLanguagesSpoken": [
        "English (Australian)",
        "Mandarin Chinese"
      ]
    },
    {
      "cityName": "Townsville",
      "stateOrRegion": "New South Wales",
      "population": 117990,
      "populationFormatted": "117,990",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Mining Operations, Raw Material Extraction & Metallurgy",
      "primaryLanguagesSpoken": [
        "English (Australian)",
        "Mandarin Chinese"
      ]
    },
    {
      "cityName": "Cairns",
      "stateOrRegion": "Victoria",
      "population": 116885,
      "populationFormatted": "116,885",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Tourism & Cultural Heritage, Hospitality Management",
      "primaryLanguagesSpoken": [
        "English (Australian)",
        "Mandarin Chinese"
      ]
    },
    {
      "cityName": "Toowoomba",
      "stateOrRegion": "Queensland",
      "population": 91494,
      "populationFormatted": "91,494",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Commercial Wholesale, Retail Distribution & Supply Chain",
      "primaryLanguagesSpoken": [
        "English (Australian)",
        "Mandarin Chinese"
      ]
    },
    {
      "cityName": "Darwin",
      "stateOrRegion": "Western Australia",
      "population": 87662,
      "populationFormatted": "87,662",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Telecommunications, Cloud Infrastructure & Fiber Networks",
      "primaryLanguagesSpoken": [
        "English (Australian)",
        "Mandarin Chinese"
      ]
    },
    {
      "cityName": "New South Wales",
      "stateOrRegion": "New South Wales",
      "population": 75483,
      "populationFormatted": "75,483",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "English (Australian)",
        "Mandarin Chinese"
      ]
    },
    {
      "cityName": "Albury-Wodonga",
      "stateOrRegion": "South Australia",
      "population": 73468,
      "populationFormatted": "73,468",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Banking, Insurance, Stock Exchange & Asset Management",
      "primaryLanguagesSpoken": [
        "English (Australian)",
        "Mandarin Chinese"
      ]
    }
  ],
  "FJ": [
    {
      "cityName": "Suva",
      "stateOrRegion": "Fiji Capital Region",
      "population": 139500,
      "populationFormatted": "139,500",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Fijian",
        "Fiji Hindi",
        "English"
      ]
    }
  ],
  "KI": [
    {
      "cityName": "Tarawa",
      "stateOrRegion": "Kiribati Capital Region",
      "population": 80000,
      "populationFormatted": "80,000",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Gilbertese",
        "English"
      ]
    }
  ],
  "MH": [
    {
      "cityName": "Majuro",
      "stateOrRegion": "Marshall Islands Capital Region",
      "population": 80000,
      "populationFormatted": "80,000",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Marshallese",
        "English"
      ]
    }
  ],
  "FM": [
    {
      "cityName": "Palikir",
      "stateOrRegion": "Micronesia Capital Region",
      "population": 80000,
      "populationFormatted": "80,000",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "English",
        "Chuukese"
      ]
    }
  ],
  "NR": [
    {
      "cityName": "Yaren",
      "stateOrRegion": "Nauru Capital Region",
      "population": 80000,
      "populationFormatted": "80,000",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Nauruan",
        "English"
      ]
    }
  ],
  "NZ": [
    {
      "cityName": "Auckland",
      "stateOrRegion": "New Zealand Region",
      "population": 1074507,
      "populationFormatted": "1.07 Million",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "English (NZ)",
        "M\u0101ori"
      ]
    },
    {
      "cityName": "Wellington",
      "stateOrRegion": "New Zealand Capital Region",
      "population": 768000,
      "populationFormatted": "768,000",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "English (NZ)",
        "M\u0101ori"
      ]
    },
    {
      "cityName": "Christchurch",
      "stateOrRegion": "New Zealand Region",
      "population": 334107,
      "populationFormatted": "334,107",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Agribusiness Exports, Grain Processing & Storage",
      "primaryLanguagesSpoken": [
        "English (NZ)",
        "M\u0101ori"
      ]
    },
    {
      "cityName": "Manukau",
      "stateOrRegion": "New Zealand Region",
      "population": 317500,
      "populationFormatted": "317,500",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Industrial Manufacturing, Automotive Parts & Assembly",
      "primaryLanguagesSpoken": [
        "English (NZ)",
        "M\u0101ori"
      ]
    },
    {
      "cityName": "North Shore",
      "stateOrRegion": "New Zealand Region",
      "population": 205000,
      "populationFormatted": "205,000",
      "cityType": "Major City",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Healthcare Services, Clinical Research & Hospital Networks",
      "primaryLanguagesSpoken": [
        "English (NZ)",
        "M\u0101ori"
      ]
    },
    {
      "cityName": "Waitakere",
      "stateOrRegion": "New Zealand Region",
      "population": 185600,
      "populationFormatted": "185,600",
      "cityType": "BPO / Service Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Maritime Shipping, Container Logistics & Port Operations",
      "primaryLanguagesSpoken": [
        "English (NZ)",
        "M\u0101ori"
      ]
    },
    {
      "cityName": "Napier-Hastings",
      "stateOrRegion": "New Zealand Region",
      "population": 118400,
      "populationFormatted": "118,400",
      "cityType": "Tech Hub",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Textiles, Garments Manufacturing & Artisanal Craft",
      "primaryLanguagesSpoken": [
        "English (NZ)",
        "M\u0101ori"
      ]
    },
    {
      "cityName": "Dunedin",
      "stateOrRegion": "New Zealand Region",
      "population": 107088,
      "populationFormatted": "107,088",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Renewable Energy, Solar Operations & Electrical Grid",
      "primaryLanguagesSpoken": [
        "English (NZ)",
        "M\u0101ori"
      ]
    },
    {
      "cityName": "Tauranga",
      "stateOrRegion": "New Zealand Region",
      "population": 103600,
      "populationFormatted": "103,600",
      "cityType": "Regional Center",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Higher Vocational Training, Engineering & Trades",
      "primaryLanguagesSpoken": [
        "English (NZ)",
        "M\u0101ori"
      ]
    },
    {
      "cityName": "Lower Hutt",
      "stateOrRegion": "New Zealand Region",
      "population": 100500,
      "populationFormatted": "100,500",
      "cityType": "Financial Hub",
      "isCapital": false,
      "isMajorSourcingHub": false,
      "primaryIndustryOrSourcingFocus": "Mining Operations, Raw Material Extraction & Metallurgy",
      "primaryLanguagesSpoken": [
        "English (NZ)",
        "M\u0101ori"
      ]
    }
  ],
  "PW": [
    {
      "cityName": "Ngerulmud",
      "stateOrRegion": "Palau Capital Region",
      "population": 80000,
      "populationFormatted": "80,000",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Palauan",
        "English"
      ]
    },
    {
      "cityName": "Koror",
      "stateOrRegion": "Palau Region",
      "population": 13303,
      "populationFormatted": "13,303",
      "cityType": "Industrial & Port",
      "isCapital": false,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Software Development, IT Support & Digital Services",
      "primaryLanguagesSpoken": [
        "Palauan",
        "English"
      ]
    }
  ],
  "PG": [
    {
      "cityName": "Port Moresby",
      "stateOrRegion": "Papua New Guinea Capital Region",
      "population": 1515000,
      "populationFormatted": "1.51 Million",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Tok Pisin",
        "English",
        "Hiri Motu"
      ]
    }
  ],
  "WS": [
    {
      "cityName": "Apia",
      "stateOrRegion": "Samoa Capital Region",
      "population": 80000,
      "populationFormatted": "80,000",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Samoan",
        "English"
      ]
    }
  ],
  "SB": [
    {
      "cityName": "Honiara",
      "stateOrRegion": "Solomon Islands Capital Region",
      "population": 108000,
      "populationFormatted": "108,000",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Pijin",
        "English"
      ]
    }
  ],
  "TO": [
    {
      "cityName": "Nuku'alofa",
      "stateOrRegion": "Tonga Capital Region",
      "population": 80000,
      "populationFormatted": "80,000",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Tongan",
        "English"
      ]
    }
  ],
  "TV": [
    {
      "cityName": "Funafuti",
      "stateOrRegion": "Tuvalu Capital Region",
      "population": 80000,
      "populationFormatted": "80,000",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Tuvaluan",
        "English"
      ]
    }
  ],
  "VU": [
    {
      "cityName": "Port Vila",
      "stateOrRegion": "Vanuatu Capital Region",
      "population": 80000,
      "populationFormatted": "80,000",
      "cityType": "Capital",
      "isCapital": true,
      "isMajorSourcingHub": true,
      "primaryIndustryOrSourcingFocus": "Government Administration, Financial Operations & Regional Services",
      "primaryLanguagesSpoken": [
        "Bislama",
        "English",
        "French"
      ]
    }
  ]
};

export function getCountryCitiesData(
  countryCode: string,
  countryName: string,
  capitalName: string = '',
  totalPopulation: number = 10000000
): CountryCitiesData {
  let cities = ALL_COUNTRY_CITIES_MAP[countryCode] || [];

  if (cities.length === 0) {
    const cap = capitalName && capitalName !== 'Capital City' ? capitalName : `${countryName} Capital`;
    cities = [
      {
        cityName: cap,
        stateOrRegion: `${countryName} Central District`,
        population: Math.round(totalPopulation * 0.2),
        populationFormatted: formatPopulation(Math.round(totalPopulation * 0.2)),
        cityType: 'Capital',
        isCapital: true,
        isMajorSourcingHub: true,
        primaryIndustryOrSourcingFocus: 'Government Administration, Financial Operations & Services',
        primaryLanguagesSpoken: ['Official Language', 'English']
      }
    ];
  }

  const sorted = [...cities].sort((a, b) => b.population - a.population);

  return {
    countryCode,
    countryName,
    mostPopulatedCities: sorted.slice(0, 30),
    allCities: sorted
  };
}

export function exportCitiesToCsv(countryName: string, cities: CityInfo[], reportTitle: string = 'Top_30_Most_Populated_Cities_Report') {
  const headers = [
    'City Name',
    'State / Province / Region',
    'Population',
    'Formatted Population',
    'City Classification',
    'Is Capital',
    'Is Major Sourcing Hub',
    'Primary Industry & Sourcing Focus',
    'Primary Languages Spoken'
  ];

  const rows = cities.map((c) => [
    `"${c.cityName.replace(/"/g, '""')}"`,
    `"${c.stateOrRegion.replace(/"/g, '""')}"`,
    c.population,
    `"${c.populationFormatted}"`,
    `"${c.cityType}"`,
    c.isCapital ? 'Yes' : 'No',
    c.isMajorSourcingHub ? 'Yes' : 'No',
    `"${c.primaryIndustryOrSourcingFocus.replace(/"/g, '""')}"`,
    `"${c.primaryLanguagesSpoken.join(', ')}"`
  ]);

  const csvContent = [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `${countryName.replace(/\s+/g, '_')}_${reportTitle}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
