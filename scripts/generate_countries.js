const fs = require('fs');
const path = require('path');

const allCountries = [
  // --- EUROPE ---
  {
    code: 'CH',
    name: 'Switzerland',
    nativeName: 'Schweiz / Suisse / Svizzera / Svizra',
    flag: '🇨🇭',
    region: 'Europe',
    subregion: 'Western Europe',
    capital: 'Bern',
    population: 8800000,
    multilingualScore: 9.2,
    description: 'Switzerland has four national languages enshrined in its constitution, with strict linguistic cantonal boundaries.',
    coordinates: { x: 48, y: 35 },
    languages: [
      { id: 'de', name: 'German', nativeName: 'Deutsch', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 62.6, speakerCount: '5.5 Million', notes: 'Spoken as Swiss German in daily life and High German formally.' },
      { id: 'fr', name: 'French', nativeName: 'Français', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 22.9, speakerCount: '2.0 Million' },
      { id: 'it', name: 'Italian', nativeName: 'Italiano', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 8.2, speakerCount: '720,000' },
      { id: 'rm', name: 'Romansh', nativeName: 'Rumantsch', script: 'Latin', family: 'Indo-European (Rhaeto-Romance)', type: 'official', percentage: 0.5, speakerCount: '44,000' },
      { id: 'en', name: 'English', nativeName: 'English', script: 'Latin', family: 'Indo-European (Germanic)', type: 'widely_spoken', percentage: 45.0, speakerCount: '4.0 Million' }
    ],
    phrases: [
      { english: 'Hello', native: 'Grüezi / Bonjour / Ciao / Allegra', phonetic: 'GROO-et-see / bon-ZHOOR / CHOW / ah-LEHG-rah', category: 'greeting' },
      { english: 'Thank you', native: 'Merci vielmal / Grazie', phonetic: 'MAIR-see FEEL-mahl / GRAHT-see-eh', category: 'courtesy' }
    ],
    facts: [
      'Every Swiss banknote features text in all four official languages.',
      'Swiss German is an unwritten collection of Alemannic dialects.'
    ]
  },
  {
    code: 'DE',
    name: 'Germany',
    nativeName: 'Deutschland',
    flag: '🇩🇪',
    region: 'Europe',
    subregion: 'Western Europe',
    capital: 'Berlin',
    population: 84300000,
    multilingualScore: 6.8,
    description: 'German is the sole official language nationwide, with protected minority languages like Sorbian, Low German, and Frisian.',
    coordinates: { x: 49, y: 32 },
    languages: [
      { id: 'de', name: 'German', nativeName: 'Deutsch', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 95.0, speakerCount: '80 Million' },
      { id: 'nds', name: 'Low German', nativeName: 'Plattdüütsch', script: 'Latin', family: 'Indo-European (Germanic)', type: 'regional', percentage: 2.5, speakerCount: '2 Million' },
      { id: 'hsb', name: 'Sorbian', nativeName: 'Serbsce', script: 'Latin', family: 'Indo-European (Slavic)', type: 'minority', percentage: 0.1, speakerCount: '60,000' },
      { id: 'en', name: 'English', nativeName: 'English', script: 'Latin', family: 'Indo-European (Germanic)', type: 'widely_spoken', percentage: 56.0, speakerCount: '45 Million' }
    ],
    phrases: [
      { english: 'Hello', native: 'Guten Tag / Hallo', phonetic: 'GOO-ten TAHK / HAH-loh', category: 'greeting' },
      { english: 'Thank you', native: 'Dankeschön', phonetic: 'DAHN-keh-shuen', category: 'courtesy' }
    ],
    facts: [
      'Standard German (Hochdeutsch) is taught in schools, but local dialects remain strong.',
      'Low German is recognized under the European Charter for Regional Languages.'
    ]
  },
  {
    code: 'FR',
    name: 'France',
    nativeName: 'République française',
    flag: '🇫🇷',
    region: 'Europe',
    subregion: 'Western Europe',
    capital: 'Paris',
    population: 68000000,
    multilingualScore: 6.5,
    description: 'French is constitutionally the official language of the republic, accompanied by regional languages such as Breton, Basque, and Corsican.',
    coordinates: { x: 46, y: 36 },
    languages: [
      { id: 'fr', name: 'French', nativeName: 'Français', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 97.0, speakerCount: '65 Million' },
      { id: 'br', name: 'Breton', nativeName: 'Brezhoneg', script: 'Latin', family: 'Indo-European (Celtic)', type: 'regional', percentage: 0.3, speakerCount: '200,000' },
      { id: 'eu', name: 'Basque', nativeName: 'Euskara', script: 'Latin', family: 'Language Isolate', type: 'regional', percentage: 0.1, speakerCount: '80,000' },
      { id: 'co', name: 'Corsican', nativeName: 'Corsu', script: 'Latin', family: 'Indo-European (Romance)', type: 'regional', percentage: 0.2, speakerCount: '130,000' }
    ],
    phrases: [
      { english: 'Hello', native: 'Bonjour', phonetic: 'bon-ZHOOR', category: 'greeting' },
      { english: 'Thank you', native: 'Merci', phonetic: 'MAIR-see', category: 'courtesy' }
    ],
    facts: [
      'L’Académie française has safeguarded the French language since 1635.',
      'Basque spoken in the French Pyrenees is a language isolate unrelated to any European tongue.'
    ]
  },
  {
    code: 'GB',
    name: 'United Kingdom',
    nativeName: 'United Kingdom',
    flag: '🇬🇧',
    region: 'Europe',
    subregion: 'Northern Europe',
    capital: 'London',
    population: 67000000,
    multilingualScore: 6.2,
    description: 'English is the de facto national language, alongside co-official regional Celtic languages like Welsh, Scottish Gaelic, and Irish.',
    coordinates: { x: 44, y: 30 },
    languages: [
      { id: 'en', name: 'English', nativeName: 'English', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 98.0, speakerCount: '65 Million' },
      { id: 'cy', name: 'Welsh', nativeName: 'Cymraeg', script: 'Latin', family: 'Indo-European (Celtic)', type: 'co-official', percentage: 1.0, speakerCount: '890,000', notes: 'Official language in Wales.' },
      { id: 'gd', name: 'Scottish Gaelic', nativeName: 'Gàidhlig', script: 'Latin', family: 'Indo-European (Celtic)', type: 'regional', percentage: 0.1, speakerCount: '60,000' },
      { id: 'ga', name: 'Irish', nativeName: 'Gaeilge', script: 'Latin', family: 'Indo-European (Celtic)', type: 'regional', percentage: 0.2, speakerCount: '140,000', notes: 'Official in Northern Ireland.' },
      { id: 'sco', name: 'Scots', nativeName: 'Scots', script: 'Latin', family: 'Indo-European (Germanic)', type: 'regional', percentage: 2.5, speakerCount: '1.5 Million' }
    ],
    phrases: [
      { english: 'Hello', native: 'Hello / Bore da (Welsh)', phonetic: 'heh-LOH / BOH-reh DAH', category: 'greeting' },
      { english: 'Thank you', native: 'Thank you / Diolch (Welsh)', phonetic: 'THANK yoo / DEE-olkh', category: 'courtesy' }
    ],
    facts: [
      'Welsh has equal legal status with English in Wales under the Welsh Language Act.',
      'Over 300 languages are spoken by schoolchildren in London.'
    ]
  },
  {
    code: 'IT',
    name: 'Italy',
    nativeName: 'Repubblica Italiana',
    flag: '🇮🇹',
    region: 'Europe',
    subregion: 'Southern Europe',
    capital: 'Rome',
    population: 58800000,
    multilingualScore: 7.9,
    description: 'Italian is the official language, with rich regional minority languages such as Sicilian, Neapolitan, Sardinian, Friulian, and Ladin.',
    coordinates: { x: 50, y: 38 },
    languages: [
      { id: 'it', name: 'Italian', nativeName: 'Italiano', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 95.0, speakerCount: '55 Million' },
      { id: 'scn', name: 'Sicilian', nativeName: 'Sicilianu', script: 'Latin', family: 'Indo-European (Romance)', type: 'regional', percentage: 8.0, speakerCount: '4.8 Million' },
      { id: 'nap', name: 'Neapolitan', nativeName: 'Napulitano', script: 'Latin', family: 'Indo-European (Romance)', type: 'regional', percentage: 9.0, speakerCount: '5.3 Million' },
      { id: 'srd', name: 'Sardinian', nativeName: 'Sardu', script: 'Latin', family: 'Indo-European (Romance)', type: 'regional', percentage: 2.0, speakerCount: '1.0 Million' },
      { id: 'de', name: 'German', nativeName: 'Deutsch', script: 'Latin', family: 'Indo-European (Germanic)', type: 'co-official', percentage: 0.5, speakerCount: '310,000', notes: 'Co-official in South Tyrol.' }
    ],
    phrases: [
      { english: 'Hello', native: 'Ciao / Buongiorno', phonetic: 'CHOW / bwon-ZHOR-noh', category: 'greeting' },
      { english: 'Thank you', native: 'Grazie', phonetic: 'GRAHT-see-eh', category: 'courtesy' }
    ],
    facts: [
      'Standard Italian is based on 14th-century Tuscan literary dialect (Dante, Petrarch).',
      'Sardinian is considered the most phonetically conservative Romance language.'
    ]
  },
  {
    code: 'ES',
    name: 'Spain',
    nativeName: 'Reino de España',
    flag: '🇪🇸',
    region: 'Europe',
    subregion: 'Southern Europe',
    capital: 'Madrid',
    population: 47400000,
    multilingualScore: 8.6,
    description: 'Castilian Spanish is official nationwide, with Catalan, Galician, Basque, and Aranese co-official in their respective autonomous regions.',
    coordinates: { x: 42, y: 39 },
    languages: [
      { id: 'es', name: 'Spanish', nativeName: 'Castellano / Español', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 99.0, speakerCount: '46 Million' },
      { id: 'ca', name: 'Catalan', nativeName: 'Català', script: 'Latin', family: 'Indo-European (Romance)', type: 'co-official', percentage: 17.5, speakerCount: '8.3 Million', notes: 'Co-official in Catalonia, Valencia, and Balearic Islands.' },
      { id: 'gl', name: 'Galician', nativeName: 'Galego', script: 'Latin', family: 'Indo-European (Romance)', type: 'co-official', percentage: 5.2, speakerCount: '2.4 Million', notes: 'Co-official in Galicia.' },
      { id: 'eu', name: 'Basque', nativeName: 'Euskara', script: 'Latin', family: 'Language Isolate', type: 'co-official', percentage: 1.5, speakerCount: '750,000', notes: 'Co-official in Basque Country and Navarre.' }
    ],
    phrases: [
      { english: 'Hello', native: 'Hola / Kaixo (Basque) / Bon dia (Catalan)', phonetic: 'OH-lah / KYE-ksoh / bon DEE-ah', category: 'greeting' },
      { english: 'Thank you', native: 'Gracias / Eskerrik asko (Basque) / Gràcies (Catalan)', phonetic: 'GRAH-see-as / es-KAIR-reek AHS-koh / GRAH-see-es', category: 'courtesy' }
    ],
    facts: [
      'Euskara (Basque) is the oldest surviving language isolate in Western Europe.',
      'Galician shares common roots with Medieval Portuguese.'
    ]
  },
  {
    code: 'PT',
    name: 'Portugal',
    nativeName: 'República Portuguesa',
    flag: '🇵🇹',
    region: 'Europe',
    subregion: 'Southern Europe',
    capital: 'Lisbon',
    population: 10300000,
    multilingualScore: 6.4,
    description: 'Portuguese is the sole official language, alongside protected Mirandese spoken in Miranda do Douro.',
    coordinates: { x: 40, y: 40 },
    languages: [
      { id: 'pt', name: 'Portuguese', nativeName: 'Português', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 99.0, speakerCount: '10 Million' },
      { id: 'mwl', name: 'Mirandese', nativeName: 'Mirandés', script: 'Latin', family: 'Indo-European (Romance)', type: 'regional', percentage: 0.1, speakerCount: '15,000' },
      { id: 'en', name: 'English', nativeName: 'English', script: 'Latin', family: 'Indo-European (Germanic)', type: 'widely_spoken', percentage: 32.0, speakerCount: '3.2 Million' }
    ],
    phrases: [
      { english: 'Hello', native: 'Olá / Bom dia', phonetic: 'oh-LAH / bom DEE-ah', category: 'greeting' },
      { english: 'Thank you', native: 'Obrigado (m) / Obrigada (f)', phonetic: 'oh-bree-GAH-doo / oh-bree-GAH-dah', category: 'courtesy' }
    ],
    facts: [
      'Portuguese is spoken by over 260 million people globally across 9 countries.',
      'Mirandese was recognized legally in 1999.'
    ]
  },
  {
    code: 'NL',
    name: 'Netherlands',
    nativeName: 'Nederland',
    flag: '🇳🇱',
    region: 'Europe',
    subregion: 'Western Europe',
    capital: 'Amsterdam',
    population: 17800000,
    multilingualScore: 8.5,
    description: 'Dutch is the official language, with West Frisian co-official in Friesland and exceptional English proficiency nationwide.',
    coordinates: { x: 47, y: 31 },
    languages: [
      { id: 'nl', name: 'Dutch', nativeName: 'Nederlands', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 95.0, speakerCount: '17 Million' },
      { id: 'fy', name: 'West Frisian', nativeName: 'Frysk', script: 'Latin', family: 'Indo-European (Germanic)', type: 'co-official', percentage: 2.2, speakerCount: '450,000', notes: 'Co-official in Friesland province.' },
      { id: 'en', name: 'English', nativeName: 'English', script: 'Latin', family: 'Indo-European (Germanic)', type: 'widely_spoken', percentage: 90.0, speakerCount: '16 Million', notes: 'Netherlands ranks #1 worldwide in non-native English fluency.' }
    ],
    phrases: [
      { english: 'Hello', native: 'Hallo / Goedendag', phonetic: 'HAH-loh / KHOO-den-dahkh', category: 'greeting' },
      { english: 'Thank you', native: 'Dank u wel / Bedankt', phonetic: 'DAHN-koo-wel / beh-DAHNKT', category: 'courtesy' }
    ],
    facts: [
      'West Frisian is the closest living language relative to English.',
      'Over 90% of Dutch citizens speak fluent English.'
    ]
  },
  {
    code: 'BE',
    name: 'Belgium',
    nativeName: 'België / Belgique / Belgien',
    flag: '🇧🇪',
    region: 'Europe',
    subregion: 'Western Europe',
    capital: 'Brussels',
    population: 11700000,
    multilingualScore: 9.4,
    description: 'Belgium has three official languages: Dutch (Flanders), French (Wallonia), and German (East Cantons).',
    coordinates: { x: 47, y: 33 },
    languages: [
      { id: 'nl', name: 'Dutch', nativeName: 'Nederlands (Vlaams)', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 59.0, speakerCount: '6.5 Million' },
      { id: 'fr', name: 'French', nativeName: 'Français', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 40.0, speakerCount: '4.5 Million' },
      { id: 'de', name: 'German', nativeName: 'Deutsch', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 1.0, speakerCount: '77,000' }
    ],
    phrases: [
      { english: 'Hello', native: 'Hallo (NL) / Bonjour (FR)', phonetic: 'HAH-loh / bon-ZHOOR', category: 'greeting' },
      { english: 'Thank you', native: 'Dank u (NL) / Merci (FR)', phonetic: 'DAHN-koo / MAIR-see', category: 'courtesy' }
    ],
    facts: [
      'Brussels is an officially bilingual French-Dutch enclave in Flanders.',
      'Language areas are strictly defined by federal constitutional law.'
    ]
  },
  {
    code: 'AT',
    name: 'Austria',
    nativeName: 'Österreich',
    flag: '🇦🇹',
    region: 'Europe',
    subregion: 'Western Europe',
    capital: 'Vienna',
    population: 9100000,
    multilingualScore: 7.2,
    description: 'German is the official national language, with Hungarian, Slovene, and Croatian protected in specific provinces.',
    coordinates: { x: 50, y: 35 },
    languages: [
      { id: 'de', name: 'German', nativeName: 'Deutsch (Österreichisches Deutsch)', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 98.0, speakerCount: '8.9 Million' },
      { id: 'hu', name: 'Hungarian', nativeName: 'Magyar', script: 'Latin', family: 'Uralic (Finno-Ugric)', type: 'regional', percentage: 0.5, speakerCount: '40,000' },
      { id: 'sl', name: 'Slovene', nativeName: 'Slovenščina', script: 'Latin', family: 'Indo-European (Slavic)', type: 'regional', percentage: 0.3, speakerCount: '24,000' }
    ],
    phrases: [
      { english: 'Hello', native: 'Grüß Gott / Servus', phonetic: 'GROOS got / SAIR-voos', category: 'greeting' },
      { english: 'Thank you', native: 'Danke schön', phonetic: 'DAHN-keh shuen', category: 'courtesy' }
    ],
    facts: [
      'Austrian German has distinct vocabulary and expressions compared to German German.',
      'Slovene has official status in Carinthia.'
    ]
  },
  {
    code: 'SE',
    name: 'Sweden',
    nativeName: 'Sverige',
    flag: '🇸🇪',
    region: 'Europe',
    subregion: 'Northern Europe',
    capital: 'Stockholm',
    population: 10500000,
    multilingualScore: 8.0,
    description: 'Swedish is the principal official language, alongside 5 recognized national minority languages: Sami, Finnish, Meänkieli, Romani, and Yiddish.',
    coordinates: { x: 52, y: 22 },
    languages: [
      { id: 'sv', name: 'Swedish', nativeName: 'Svenska', script: 'Latin', family: 'Indo-European (North Germanic)', type: 'official', percentage: 95.0, speakerCount: '10 Million' },
      { id: 'fi', name: 'Finnish', nativeName: 'Suomi', script: 'Latin', family: 'Uralic (Finno-Ugric)', type: 'minority', percentage: 2.0, speakerCount: '200,000' },
      { id: 'se', name: 'Sami', nativeName: 'Sámegiella', script: 'Latin', family: 'Uralic (Sami)', type: 'minority', percentage: 0.2, speakerCount: '20,000' },
      { id: 'en', name: 'English', nativeName: 'English', script: 'Latin', family: 'Indo-European (Germanic)', type: 'widely_spoken', percentage: 89.0, speakerCount: '9.3 Million' }
    ],
    phrases: [
      { english: 'Hello', native: 'Hej / Hallå', phonetic: 'HEY / hah-LOH', category: 'greeting' },
      { english: 'Thank you', native: 'Tack så mycket', phonetic: 'TAHK soh MEE-keh', category: 'courtesy' }
    ],
    facts: [
      'Sami languages are recognized as indigenous languages in northern Sweden.',
      'Sami features over 300 words for snow and reindeer.'
    ]
  },
  {
    code: 'NO',
    name: 'Norway',
    nativeName: 'Norge / Noreg',
    flag: '🇳🇴',
    region: 'Europe',
    subregion: 'Northern Europe',
    capital: 'Oslo',
    population: 5500000,
    multilingualScore: 8.2,
    description: 'Norwegian has two official written standards: Bokmål and Nynorsk, alongside Sami languages in indigenous municipalities.',
    coordinates: { x: 49, y: 22 },
    languages: [
      { id: 'nb', name: 'Norwegian Bokmål', nativeName: 'Bokmål', script: 'Latin', family: 'Indo-European (North Germanic)', type: 'official', percentage: 85.0, speakerCount: '4.6 Million' },
      { id: 'nn', name: 'Norwegian Nynorsk', nativeName: 'Nynorsk', script: 'Latin', family: 'Indo-European (North Germanic)', type: 'official', percentage: 12.0, speakerCount: '650,000' },
      { id: 'se', name: 'Sami', nativeName: 'Sámegiella', script: 'Latin', family: 'Uralic (Sami)', type: 'co-official', percentage: 0.5, speakerCount: '30,000' }
    ],
    phrases: [
      { english: 'Hello', native: 'Hei / Hallo', phonetic: 'HAY / hah-LOH', category: 'greeting' },
      { english: 'Thank you', native: 'Tusen takk', phonetic: 'TOO-sen TAHK', category: 'courtesy' }
    ],
    facts: [
      'Nynorsk was constructed in the 19th century based on rural western Norwegian dialects.',
      'Public broadcaster NRK is required to produce 25% of content in Nynorsk.'
    ]
  },
  {
    code: 'FI',
    name: 'Finland',
    nativeName: 'Suomi / Finland',
    flag: '🇫🇮',
    region: 'Europe',
    subregion: 'Northern Europe',
    capital: 'Helsinki',
    population: 5600000,
    multilingualScore: 8.8,
    description: 'Finland is constitutionally bilingual in Finnish and Swedish, with Northern, Inari, and Skolt Sami languages protected in Lapland.',
    coordinates: { x: 55, y: 20 },
    languages: [
      { id: 'fi', name: 'Finnish', nativeName: 'Suomi', script: 'Latin', family: 'Uralic (Finno-Ugric)', type: 'official', percentage: 86.5, speakerCount: '4.8 Million' },
      { id: 'sv', name: 'Swedish', nativeName: 'Svenska', script: 'Latin', family: 'Indo-European (North Germanic)', type: 'official', percentage: 5.2, speakerCount: '290,000' },
      { id: 'se', name: 'Sami', nativeName: 'Sámegiella', script: 'Latin', family: 'Uralic (Sami)', type: 'indigenous', percentage: 0.04, speakerCount: '2,000' }
    ],
    phrases: [
      { english: 'Hello', native: 'Moi / Hei / Terve', phonetic: 'MOY / HAY / TAIR-veh', category: 'greeting' },
      { english: 'Thank you', native: 'Kiitos', phonetic: 'KEE-tos', category: 'courtesy' }
    ],
    facts: [
      'Finnish belongs to the Uralic family and is unrelated to neighboring Scandinavian tongues.',
      'Åland Islands are an autonomous monolingual Swedish-speaking region of Finland.'
    ]
  },
  {
    code: 'DK',
    name: 'Denmark',
    nativeName: 'Danmark',
    flag: '🇩🇰',
    region: 'Europe',
    subregion: 'Northern Europe',
    capital: 'Copenhagen',
    population: 5900000,
    multilingualScore: 7.5,
    description: 'Danish is the official language, alongside Faroese in the Faroe Islands and Kalaallisut (Greenlandic) in Greenland.',
    coordinates: { x: 48, y: 28 },
    languages: [
      { id: 'da', name: 'Danish', nativeName: 'Dansk', script: 'Latin', family: 'Indo-European (North Germanic)', type: 'official', percentage: 98.0, speakerCount: '5.8 Million' },
      { id: 'fo', name: 'Faroese', nativeName: 'Føroyskt', script: 'Latin', family: 'Indo-European (North Germanic)', type: 'regional', percentage: 0.1, speakerCount: '70,000' },
      { id: 'kl', name: 'Greenlandic', nativeName: 'Kalaallisut', script: 'Latin', family: 'Eskimo-Aleut', type: 'regional', percentage: 0.1, speakerCount: '50,000' }
    ],
    phrases: [
      { english: 'Hello', native: 'Hej / Davs', phonetic: 'HEY / DAWSS', category: 'greeting' },
      { english: 'Thank you', native: 'Tak', phonetic: 'TAHK', category: 'courtesy' }
    ],
    facts: [
      'Greenlandic is an Eskimo-Aleut polysynthetic language with complex verb agglutination.',
      'Danish soft "d" and stød glottal stop make pronunciation unique.'
    ]
  },
  {
    code: 'PL',
    name: 'Poland',
    nativeName: 'Rzeczpospolita Polska',
    flag: '🇵🇱',
    region: 'Europe',
    subregion: 'Eastern Europe',
    capital: 'Warsaw',
    population: 37700000,
    multilingualScore: 6.3,
    description: 'Polish is the official state language, alongside Kashubian as a recognized regional language in Pomerania.',
    coordinates: { x: 53, y: 31 },
    languages: [
      { id: 'pl', name: 'Polish', nativeName: 'Język polski', script: 'Latin (Polish)', family: 'Indo-European (West Slavic)', type: 'official', percentage: 97.0, speakerCount: '37 Million' },
      { id: 'csb', name: 'Kashubian', nativeName: 'Kaszëbsczi jãzëk', script: 'Latin', family: 'Indo-European (West Slavic)', type: 'regional', percentage: 0.3, speakerCount: '100,000' },
      { id: 'szl', name: 'Silesian', nativeName: 'Ślōnskŏ godka', script: 'Latin', family: 'Indo-European (West Slavic)', type: 'regional', percentage: 1.3, speakerCount: '500,000' }
    ],
    phrases: [
      { english: 'Hello', native: 'Cześć / Dzień dobry', phonetic: 'CHESHCH / JIEN DOH-bry', category: 'greeting' },
      { english: 'Thank you', native: 'Dziękuję', phonetic: 'jen-KOO-yeh', category: 'courtesy' }
    ],
    facts: [
      'Kashubian is the only recognized regional language in Poland.',
      'Polish uses Latin alphabet supplemented by 9 diacritic nasal and palatal letters.'
    ]
  },
  {
    code: 'CZ',
    name: 'Czech Republic',
    nativeName: 'Česká republika',
    flag: '🇨🇿',
    region: 'Europe',
    subregion: 'Eastern Europe',
    capital: 'Prague',
    population: 10800000,
    multilingualScore: 6.5,
    description: 'Czech is the sole official language, with protected minority languages including Slovak, Romani, and German.',
    coordinates: { x: 51, y: 33 },
    languages: [
      { id: 'cs', name: 'Czech', nativeName: 'Čeština', script: 'Latin (Czech)', family: 'Indo-European (West Slavic)', type: 'official', percentage: 96.0, speakerCount: '10.3 Million' },
      { id: 'sk', name: 'Slovak', nativeName: 'Slovenčina', script: 'Latin', family: 'Indo-European (West Slavic)', type: 'minority', percentage: 1.5, speakerCount: '160,000' }
    ],
    phrases: [
      { english: 'Hello', native: 'Ahoj / Dobrý den', phonetic: 'AH-hoy / DOH-bree DEN', category: 'greeting' },
      { english: 'Thank you', native: 'Děkuji', phonetic: 'DYEH-koo-yee', category: 'courtesy' }
    ],
    facts: [
      'Czech letter "ř" is considered one of the rarest speech sounds in the world.',
      'Czech and Slovak are mutually intelligible.'
    ]
  },
  {
    code: 'GR',
    name: 'Greece',
    nativeName: 'Ελληνική Δημοκρατία',
    flag: '🇬🇷',
    region: 'Europe',
    subregion: 'Southern Europe',
    capital: 'Athens',
    population: 10400000,
    multilingualScore: 6.4,
    description: 'Modern Greek is the official language, representing over 3,400 years of documented Hellenic linguistic history.',
    coordinates: { x: 55, y: 43 },
    languages: [
      { id: 'el', name: 'Greek', nativeName: 'Ελληνικά', script: 'Greek', family: 'Indo-European (Hellenic)', type: 'official', percentage: 99.0, speakerCount: '10.3 Million' },
      { id: 'pnt', name: 'Pontic Greek', nativeName: 'Ποντιακά', script: 'Greek', family: 'Indo-European (Hellenic)', type: 'regional', percentage: 0.5, speakerCount: '200,000' }
    ],
    phrases: [
      { english: 'Hello', native: 'Γειά σας (Yassas) / Γειά σου (Yassou)', phonetic: 'YAH-sas / YAH-soo', category: 'greeting' },
      { english: 'Thank you', native: 'Ευχαριστώ (Efcharisto)', phonetic: 'ef-khah-ree-STOH', category: 'courtesy' }
    ],
    facts: [
      'Greek alphabet has been in continuous usage since the 8th century BCE.',
      'Greek provided thousands of roots for international scientific terminology.'
    ]
  },
  {
    code: 'IE',
    name: 'Ireland',
    nativeName: 'Éire',
    flag: '🇮🇪',
    region: 'Europe',
    subregion: 'Northern Europe',
    capital: 'Dublin',
    population: 5200000,
    multilingualScore: 7.8,
    description: 'Irish (Gaeilge) is constitutional first official language, with English recognized as second official language.',
    coordinates: { x: 42, y: 30 },
    languages: [
      { id: 'ga', name: 'Irish', nativeName: 'Gaeilge', script: 'Latin', family: 'Indo-European (Celtic)', type: 'official', percentage: 39.8, speakerCount: '1.9 Million', notes: 'First official language; spoken daily in Gaeltacht districts.' },
      { id: 'en', name: 'English', nativeName: 'English', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 99.0, speakerCount: '5.1 Million' }
    ],
    phrases: [
      { english: 'Hello', native: 'Dia dhuit', phonetic: 'DEE-ah xwit', category: 'greeting' },
      { english: 'Thank you', native: 'Go raibh maith agat', phonetic: 'gur rev MAH ug-ut', category: 'courtesy' }
    ],
    facts: [
      'Irish is an official language of the European Union.',
      'Gaeltacht regions are designated rural zones where Irish is the predominant language.'
    ]
  },
  {
    code: 'UA',
    name: 'Ukraine',
    nativeName: 'Україна',
    flag: '🇺🇦',
    region: 'Europe',
    subregion: 'Eastern Europe',
    capital: 'Kyiv',
    population: 38000000,
    multilingualScore: 7.5,
    description: 'Ukrainian is the sole state language, with Crimean Tatar protected as an indigenous language of Crimea.',
    coordinates: { x: 57, y: 32 },
    languages: [
      { id: 'uk', name: 'Ukrainian', nativeName: 'Українська', script: 'Cyrillic (Ukrainian)', family: 'Indo-European (Slavic)', type: 'official', percentage: 80.0, speakerCount: '32 Million' },
      { id: 'crh', name: 'Crimean Tatar', nativeName: 'Qırımlı tili', script: 'Latin / Cyrillic', family: 'Turkic', type: 'indigenous', percentage: 0.8, speakerCount: '300,000' },
      { id: 'ru', name: 'Russian', nativeName: 'Русский', script: 'Cyrillic', family: 'Indo-European (Slavic)', type: 'widely_spoken', percentage: 30.0, speakerCount: '12 Million' }
    ],
    phrases: [
      { english: 'Hello', native: 'Вітаю / Привіт', phonetic: 'vee-TAH-yoo / pry-VEET', category: 'greeting' },
      { english: 'Thank you', native: 'Дякую', phonetic: 'DYAH-koo-yoo', category: 'courtesy' }
    ],
    facts: [
      'Ukrainian Cyrillic script includes unique letters "Ґ", "Є", "І", and "Ї".',
      'Crimean Tatar is an indigenous Turkic language of the Crimean Peninsula.'
    ]
  },

  // --- AMERICAS ---
  {
    code: 'US',
    name: 'United States',
    nativeName: 'United States of America',
    flag: '🇺🇸',
    region: 'Americas',
    subregion: 'North America',
    capital: 'Washington, D.C.',
    population: 335000000,
    multilingualScore: 7.8,
    description: 'The US has no official language at federal level; English is de facto, and Spanish is spoken by over 41 million people.',
    coordinates: { x: 22, y: 35 },
    languages: [
      { id: 'en', name: 'English', nativeName: 'English', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 78.0, speakerCount: '254 Million' },
      { id: 'es', name: 'Spanish', nativeName: 'Español', script: 'Latin', family: 'Indo-European (Romance)', type: 'widely_spoken', percentage: 13.5, speakerCount: '41.8 Million' },
      { id: 'zh', name: 'Chinese', nativeName: '中文', script: 'Han (Traditional/Simplified)', family: 'Sino-Tibetan', type: 'widely_spoken', percentage: 1.1, speakerCount: '3.5 Million' },
      { id: 'tl', name: 'Tagalog', nativeName: 'Tagalog / Filipino', script: 'Latin', family: 'Austronesian', type: 'widely_spoken', percentage: 0.6, speakerCount: '1.8 Million' },
      { id: 'nv', name: 'Navajo', nativeName: 'Diné bizaad', script: 'Latin', family: 'Na-Dene', type: 'indigenous', percentage: 0.05, speakerCount: '170,000' }
    ],
    phrases: [
      { english: 'Hello', native: 'Hello / Hi', phonetic: 'heh-LOH', category: 'greeting' },
      { english: 'Thank you', native: 'Thank you', phonetic: 'THANK yoo', category: 'courtesy' }
    ],
    facts: [
      'There is no official federal language in the United States Constitution.',
      'Navajo Code Talkers used their native language as an unbreakable code in WWII.'
    ]
  },
  {
    code: 'CA',
    name: 'Canada',
    nativeName: 'Canada',
    flag: '🇨🇦',
    region: 'Americas',
    subregion: 'North America',
    capital: 'Ottawa',
    population: 40000000,
    multilingualScore: 9.1,
    description: 'Canada is constitutionally bilingual in English and French, with Indigenous languages like Inuktitut, Cree, and Ojibwe officially recognized.',
    coordinates: { x: 20, y: 22 },
    languages: [
      { id: 'en', name: 'English', nativeName: 'English', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 75.0, speakerCount: '30 Million' },
      { id: 'fr', name: 'French', nativeName: 'Français', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 22.8, speakerCount: '9.2 Million' },
      { id: 'iu', name: 'Inuktitut', nativeName: 'ᐃᓄᒃᑎᑐᑦ', script: 'Inuktitut Syllabics', family: 'Eskimo-Aleut', type: 'indigenous', percentage: 0.1, speakerCount: '40,000' },
      { id: 'cr', name: 'Cree', nativeName: 'ᓀᐦᐃᔭᐍᐏᐣ', script: 'Cree Syllabics', family: 'Algic', type: 'indigenous', percentage: 0.2, speakerCount: '96,000' }
    ],
    phrases: [
      { english: 'Hello', native: 'Hello / Bonjour', phonetic: 'heh-LOH / bon-ZHOOR', category: 'greeting' },
      { english: 'Thank you', native: 'Thank you / Merci', phonetic: 'THANK yoo / MAIR-see', category: 'courtesy' }
    ],
    facts: [
      'New Brunswick is Canada’s only officially bilingual province.',
      'Inuktitut Syllabics was created in the 19th century inspired by shorthand writing.'
    ]
  },
  {
    code: 'MX',
    name: 'Mexico',
    nativeName: 'Estados Unidos Mexicanos',
    flag: '🇲🇽',
    region: 'Americas',
    subregion: 'Central America',
    capital: 'Mexico City',
    population: 128900000,
    multilingualScore: 8.7,
    description: 'Spanish is the national language, alongside 68 recognized Indigenous language families including Nahuatl, Maya, and Mixtec.',
    coordinates: { x: 18, y: 48 },
    languages: [
      { id: 'es', name: 'Spanish', nativeName: 'Español mexicano', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 98.0, speakerCount: '125 Million' },
      { id: 'nah', name: 'Nahuatl', nativeName: 'Nāhuatl', script: 'Latin', family: 'Uto-Aztecan', type: 'indigenous', percentage: 1.4, speakerCount: '1.7 Million' },
      { id: 'yua', name: 'Yucatec Maya', nativeName: 'Màaya t\'àan', script: 'Latin', family: 'Mayan', type: 'indigenous', percentage: 0.7, speakerCount: '860,000' },
      { id: 'zpv', name: 'Zapotec', nativeName: 'Diidxazá', script: 'Latin', family: 'Oto-Manguean', type: 'indigenous', percentage: 0.4, speakerCount: '490,000' }
    ],
    phrases: [
      { english: 'Hello', native: 'Hola / Niltze (Nahuatl) / Ba’ax ka wa’alik (Maya)', phonetic: 'OH-lah / NEEL-tseh / BAH-akh kah WAH-eek', category: 'greeting' },
      { english: 'Thank you', native: 'Gracias / Tlazohcamati (Nahuatl)', phonetic: 'GRAH-see-as / tlah-zoh-kah-MAH-tee', category: 'courtesy' }
    ],
    facts: [
      'Mexico recognizes 68 Indigenous language families as national languages equal to Spanish.',
      'English words like chocolate, tomato, and avocado derive from Nahuatl.'
    ]
  },
  {
    code: 'BR',
    name: 'Brazil',
    nativeName: 'República Federativa do Brasil',
    flag: '🇧🇷',
    region: 'Americas',
    subregion: 'South America',
    capital: 'Brasília',
    population: 215000000,
    multilingualScore: 6.8,
    description: 'Portuguese is official, accompanied by over 150 Amazonian indigenous languages such as Nheengatu, Guarani, and Yanomami.',
    coordinates: { x: 34, y: 65 },
    languages: [
      { id: 'pt', name: 'Portuguese', nativeName: 'Português brasileiro', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 98.0, speakerCount: '210 Million' },
      { id: 'yrl', name: 'Nheengatu', nativeName: 'Nheengatu', script: 'Latin', family: 'Tupian', type: 'co-official', percentage: 0.01, speakerCount: '20,000', notes: 'Co-official in São Gabriel da Cachoeira.' },
      { id: 'gn', name: 'Guarani', nativeName: 'Avañe\'ẽ', script: 'Latin', family: 'Tupian', type: 'indigenous', percentage: 0.02, speakerCount: '40,000' }
    ],
    phrases: [
      { english: 'Hello', native: 'Olá / Tudo bem?', phonetic: 'oh-LAH / TOO-doo BENG', category: 'greeting' },
      { english: 'Thank you', native: 'Obrigado / Obrigada', phonetic: 'oh-bree-GAH-doo / oh-bree-GAH-dah', category: 'courtesy' }
    ],
    facts: [
      'Brazilian Portuguese differs markedly in pronunciation and syntax from European Portuguese.',
      'Nheengatu is a modern Amazonian lingua franca derived from Old Tupi.'
    ]
  },
  {
    code: 'AR',
    name: 'Argentina',
    nativeName: 'República Argentina',
    flag: '🇦🇷',
    region: 'Americas',
    subregion: 'South America',
    capital: 'Buenos Aires',
    population: 46000000,
    multilingualScore: 6.9,
    description: 'Rioplatense Spanish is official, famous for voseo pronoun use and Italian intonation, alongside Mapudungun and Qom.',
    coordinates: { x: 30, y: 78 },
    languages: [
      { id: 'es', name: 'Spanish', nativeName: 'Español rioplatense', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 98.0, speakerCount: '45 Million' },
      { id: 'arn', name: 'Mapudungun', nativeName: 'Mapudungun', script: 'Latin', family: 'Araucanian', type: 'indigenous', percentage: 0.2, speakerCount: '100,000' },
      { id: 'qu', name: 'Quechua', nativeName: 'Kichwa', script: 'Latin', family: 'Quechuan', type: 'indigenous', percentage: 0.1, speakerCount: '70,000' }
    ],
    phrases: [
      { english: 'Hello', native: 'Che, ¡Hola! / ¿Qué hacés?', phonetic: 'CHEH OH-lah / keh ah-SESS', category: 'greeting' },
      { english: 'Thank you', native: 'Muchas gracias', phonetic: 'MOO-chas GRAH-see-as', category: 'courtesy' }
    ],
    facts: [
      'Rioplatense Spanish uses "vos" instead of "tú" and pronounces "ll/y" as "sh".',
      'Italian immigration heavily influenced Buenos Aires Lunfardo slang.'
    ]
  },
  {
    code: 'CO',
    name: 'Colombia',
    nativeName: 'República de Colombia',
    flag: '🇨🇴',
    region: 'Americas',
    subregion: 'South America',
    capital: 'Bogotá',
    population: 52000000,
    multilingualScore: 7.6,
    description: 'Spanish is the national official language, alongside 65 recognized indigenous languages, Creole, and Palenquero.',
    coordinates: { x: 26, y: 55 },
    languages: [
      { id: 'es', name: 'Spanish', nativeName: 'Español colombiano', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 99.2, speakerCount: '51.5 Million' },
      { id: 'guc', name: 'Wayuu', nativeName: 'Wayuunaiki', script: 'Latin', family: 'Arawakan', type: 'indigenous', percentage: 0.8, speakerCount: '400,000' },
      { id: 'pln', name: 'Palenquero', nativeName: 'Lengua Palenquera', script: 'Latin', family: 'Spanish/Bantu Creole', type: 'regional', percentage: 0.01, speakerCount: '3,000', notes: 'First Spanish-based creole in the Americas.' }
    ],
    phrases: [
      { english: 'Hello', native: 'Hola / ¿Qué más?', phonetic: 'OH-lah / keh MAS', category: 'greeting' },
      { english: 'Thank you', native: 'Muchas gracias', phonetic: 'MOO-chas GRAH-see-as', category: 'courtesy' }
    ],
    facts: [
      'Colombian Spanish spoken in Bogotá is widely considered among the clearest in Latin America.',
      'Palenquero was created by escaped African slaves in San Basilio de Palenque.'
    ]
  },
  {
    code: 'PE',
    name: 'Peru',
    nativeName: 'República del Perú',
    flag: '🇵🇪',
    region: 'Americas',
    subregion: 'South America',
    capital: 'Lima',
    population: 33700000,
    multilingualScore: 8.9,
    description: 'Spanish, Quechua, and Aymara are official national languages, alongside 47 Amazonian indigenous tongues.',
    coordinates: { x: 25, y: 62 },
    languages: [
      { id: 'es', name: 'Spanish', nativeName: 'Español peruano', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 82.6, speakerCount: '28 Million' },
      { id: 'qu', name: 'Quechua', nativeName: 'Runasimi', script: 'Latin', family: 'Quechuan', type: 'official', percentage: 13.9, speakerCount: '3.8 Million', notes: 'Language of the Inca Empire.' },
      { id: 'ay', name: 'Aymara', nativeName: 'Aymar aru', script: 'Latin', family: 'Aymaran', type: 'official', percentage: 1.7, speakerCount: '450,000' },
      { id: 'ash', name: 'Asháninka', nativeName: 'Asháninka', script: 'Latin', family: 'Arawakan', type: 'indigenous', percentage: 0.3, speakerCount: '97,000' }
    ],
    phrases: [
      { english: 'Hello', native: 'Hola / Allianllachu (Quechua)', phonetic: 'OH-lah / ah-LHEE-ahn-lyah-choo', category: 'greeting' },
      { english: 'Thank you', native: 'Gracias / Sulpayki (Quechua)', phonetic: 'GRAH-see-as / sool-PAY-kee', category: 'courtesy' }
    ],
    facts: [
      'Quechua was the official administrative language of the Inca Empire (Tawantinsuyu).',
      'Peru mandates state broadcast and education in Quechua and Aymara.'
    ]
  },
  {
    code: 'PY',
    name: 'Paraguay',
    nativeName: 'Tetã Paraguái',
    flag: '🇵🇾',
    region: 'Americas',
    subregion: 'South America',
    capital: 'Asunción',
    population: 7400000,
    multilingualScore: 9.6,
    description: 'Paraguay is uniquely bilingual: Guaraní (an indigenous language) is spoken by 87% of citizens alongside Spanish.',
    coordinates: { x: 30, y: 70 },
    languages: [
      { id: 'gn', name: 'Guaraní', nativeName: 'Avañe\'ẽ', script: 'Latin', family: 'Tupian', type: 'official', percentage: 87.0, speakerCount: '6.5 Million' },
      { id: 'es', name: 'Spanish', nativeName: 'Español paraguayo', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 70.0, speakerCount: '5.2 Million' }
    ],
    phrases: [
      { english: 'Hello', native: 'Mba\'éichapa / Hola', phonetic: 'mboh-AEE-chah-pah / OH-lah', category: 'greeting' },
      { english: 'Thank you', native: 'Aguyje', phonetic: 'ah-ghwee-ZHEH', category: 'courtesy' }
    ],
    facts: [
      'Paraguay is the only American nation where an Indigenous language is spoken by the non-indigenous majority.',
      'Jopará is a hybrid blend of Guaraní and Spanish spoken daily.'
    ]
  },

  // --- ASIA ---
  {
    code: 'CN',
    name: 'China',
    nativeName: '中华人民共和国',
    flag: '🇨🇳',
    region: 'Asia',
    subregion: 'Eastern Asia',
    capital: 'Beijing',
    population: 1411000000,
    multilingualScore: 8.8,
    description: 'Standard Mandarin (Putonghua) is the national language, alongside Cantonese, Wu, Min, Shanghainese, Tibetan, Uyghur, and Mongolian.',
    coordinates: { x: 78, y: 38 },
    languages: [
      { id: 'zh', name: 'Mandarin Chinese', nativeName: '普通话 (Putonghua)', script: 'Han (Simplified)', family: 'Sino-Tibetan', type: 'official', percentage: 80.0, speakerCount: '1.1 Billion' },
      { id: 'yue', name: 'Cantonese', nativeName: '粤语 / 廣東話', script: 'Han (Traditional/Simplified)', family: 'Sino-Tibetan', type: 'regional', percentage: 5.0, speakerCount: '80 Million', notes: 'Spoken in Guangdong, Hong Kong, and Macau.' },
      { id: 'wuu', name: 'Wu (Shanghainese)', nativeName: '吴语 / 上海话', script: 'Han (Simplified)', family: 'Sino-Tibetan', type: 'regional', percentage: 6.0, speakerCount: '80 Million' },
      { id: 'bo', name: 'Tibetan', nativeName: 'བོད་སྐད།', script: 'Tibetan', family: 'Sino-Tibetan', type: 'regional', percentage: 0.5, speakerCount: '6 Million' },
      { id: 'ug', name: 'Uyghur', nativeName: 'ئۇيغۇرچە', script: 'Arabic (Uyghur)', family: 'Turkic', type: 'regional', percentage: 0.8, speakerCount: '11 Million' }
    ],
    phrases: [
      { english: 'Hello', native: '你好 (Nǐ hǎo)', phonetic: 'nee HOW', category: 'greeting' },
      { english: 'Thank you', native: '谢谢 (Xièxie)', phonetic: 'syeh-syeh', category: 'courtesy' }
    ],
    facts: [
      'Mandarin Chinese has four main tones that change the meaning of words.',
      'Tibetan script was created in the 7th century based on Indian Brahmi script.'
    ]
  },
  {
    code: 'JP',
    name: 'Japan',
    nativeName: '日本国 (Nihon-koku)',
    flag: '🇯🇵',
    region: 'Asia',
    subregion: 'Eastern Asia',
    capital: 'Tokyo',
    population: 124500000,
    multilingualScore: 6.2,
    description: 'Japanese is the national language, written with Kanji, Hiragana, and Katakana, alongside endangered Ainu and Ryukyuan languages.',
    coordinates: { x: 88, y: 38 },
    languages: [
      { id: 'ja', name: 'Japanese', nativeName: '日本語 (Nihongo)', script: 'Kanji / Hiragana / Katakana', family: 'Japonic', type: 'official', percentage: 99.0, speakerCount: '124 Million' },
      { id: 'ain', name: 'Ainu', nativeName: 'アイヌ イタꞈ', script: 'Katakana / Latin', family: 'Language Isolate', type: 'indigenous', percentage: 0.001, speakerCount: '300', notes: 'Critically endangered language of Hokkaido.' },
      { id: 'ryu', name: 'Ryukyuan', nativeName: '沖縄口 (Uchinaaguchi)', script: 'Kanji / Katakana', family: 'Japonic', type: 'regional', percentage: 0.8, speakerCount: '1 Million', notes: 'Spoken in Okinawa.' }
    ],
    phrases: [
      { english: 'Hello', native: 'こんにちは (Konnichiwa)', phonetic: 'kohn-nee-chee-wah', category: 'greeting' },
      { english: 'Thank you', native: 'ありがとうございます (Arigatou gozaimasu)', phonetic: 'ah-ree-gah-toh goh-zye-mas', category: 'courtesy' }
    ],
    facts: [
      'Japanese utilizes three writing systems simultaneously in everyday sentences.',
      'Ainu is an indigenous language isolate with no relationship to Japanese.'
    ]
  },
  {
    code: 'IN',
    name: 'India',
    nativeName: 'भारत (Bhārat)',
    flag: '🇮🇳',
    region: 'Asia',
    subregion: 'Southern Asia',
    capital: 'New Delhi',
    population: 1428000000,
    multilingualScore: 9.9,
    description: 'India has 22 scheduled national languages, led by Hindi and English, with major Dravidian languages like Tamil, Telugu, and Kannada.',
    coordinates: { x: 70, y: 48 },
    languages: [
      { id: 'hi', name: 'Hindi', nativeName: 'हिन्दी', script: 'Devanagari', family: 'Indo-European (Indo-Aryan)', type: 'official', percentage: 43.6, speakerCount: '528 Million' },
      { id: 'en', name: 'English', nativeName: 'English', script: 'Latin', family: 'Indo-European (Germanic)', type: 'co-official', percentage: 12.0, speakerCount: '130 Million' },
      { id: 'bn', name: 'Bengali', nativeName: 'বাংলা', script: 'Bengali', family: 'Indo-European (Indo-Aryan)', type: 'regional', percentage: 8.0, speakerCount: '97 Million' },
      { id: 'ta', name: 'Tamil', nativeName: 'தமிழ்', script: 'Tamil', family: 'Dravidian', type: 'regional', percentage: 5.7, speakerCount: '69 Million' },
      { id: 'te', name: 'Telugu', nativeName: 'తెలుగు', script: 'Telugu', family: 'Dravidian', type: 'regional', percentage: 6.7, speakerCount: '81 Million' }
    ],
    phrases: [
      { english: 'Hello', native: 'नमस्ते (Namaste) / வணக்கம் (Vanakkam)', phonetic: 'Nah-mas-TAY / Vah-nah-kahm', category: 'greeting' },
      { english: 'Thank you', native: 'धन्यवाद (Dhanyavaad) / நன்றி (Nandri)', phonetic: 'Dhan-yah-VAAD / Nahn-REE', category: 'courtesy' }
    ],
    facts: [
      'Tamil is recognized as one of the world’s oldest continuously spoken classical languages.',
      'India has over 700 distinct recorded languages and dialects.'
    ]
  },
  {
    code: 'KR',
    name: 'South Korea',
    nativeName: '대한민국 (Daehan Minguk)',
    flag: '🇰🇷',
    region: 'Asia',
    subregion: 'Eastern Asia',
    capital: 'Seoul',
    population: 51700000,
    multilingualScore: 6.2,
    description: 'Korean is the official language written in the phonetic Hangul alphabet created in 1443 by King Sejong the Great.',
    coordinates: { x: 84, y: 41 },
    languages: [
      { id: 'ko', name: 'Korean', nativeName: '한국어 (Hangugeo)', script: 'Hangul', family: 'Koreanic', type: 'official', percentage: 99.0, speakerCount: '51 Million' },
      { id: 'jje', name: 'Jeju', nativeName: '제주어 (Jejueo)', script: 'Hangul', family: 'Koreanic', type: 'regional', percentage: 0.01, speakerCount: '5,000', notes: 'Critically endangered language of Jeju Island.' }
    ],
    phrases: [
      { english: 'Hello', native: '안녕하세요 (Annyeonghaseyo)', phonetic: 'ahn-nyong-hah-seh-yoh', category: 'greeting' },
      { english: 'Thank you', native: '감사합니다 (Gamsahamnida)', phonetic: 'gahm-sah-hahm-nee-dah', category: 'courtesy' }
    ],
    facts: [
      'Hangul was scientifically engineered in 1443 to increase literacy among ordinary citizens.',
      'Jeju language is distinct from standard Korean and recognized by UNESCO as critically endangered.'
    ]
  },
  {
    code: 'ID',
    name: 'Indonesia',
    nativeName: 'Republik Indonesia',
    flag: '🇮🇩',
    region: 'Asia',
    subregion: 'South-Eastern Asia',
    capital: 'Jakarta (Nusantara)',
    population: 277000000,
    multilingualScore: 9.8,
    description: 'Bahasa Indonesia is the national unifying language, while over 700 indigenous languages (Javanese, Sundanese, Balinese) are spoken at home.',
    coordinates: { x: 82, y: 64 },
    languages: [
      { id: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia', script: 'Latin', family: 'Austronesian', type: 'official', percentage: 94.0, speakerCount: '260 Million', notes: 'Standardized form of Malay used as lingua franca.' },
      { id: 'jv', name: 'Javanese', nativeName: 'Basa Jawa / ꦧꦱꦗꦮ', script: 'Latin / Javanese', family: 'Austronesian', type: 'regional', percentage: 31.8, speakerCount: '84 Million' },
      { id: 'su', name: 'Sundanese', nativeName: 'Basa Sunda', script: 'Latin / Sundanese', family: 'Austronesian', type: 'regional', percentage: 14.5, speakerCount: '38 Million' },
      { id: 'ban', name: 'Balinese', nativeName: 'Basa Bali', script: 'Latin / Balinese', family: 'Austronesian', type: 'regional', percentage: 1.4, speakerCount: '3.3 Million' }
    ],
    phrases: [
      { english: 'Hello', native: 'Halo / Selamat pagi', phonetic: 'HAH-loh / seh-LAH-mat PAH-gee', category: 'greeting' },
      { english: 'Thank you', native: 'Terima kasih', phonetic: 'teh-REE-mah KAH-see', category: 'courtesy' }
    ],
    facts: [
      'Indonesia is the second most linguistically diverse country in the world with 718 languages.',
      'Javanese features complex speech levels (Ngoko, Krama) dictated by social status.'
    ]
  },
  {
    code: 'PH',
    name: 'Philippines',
    nativeName: 'Republika ng Pilipinas',
    flag: '🇵🇭',
    region: 'Asia',
    subregion: 'South-Eastern Asia',
    capital: 'Manila',
    population: 115000000,
    multilingualScore: 9.5,
    description: 'Filipino (Tagalog) and English are official national languages, alongside 180 regional languages like Cebuano, Ilocano, and Hiligaynon.',
    coordinates: { x: 84, y: 55 },
    languages: [
      { id: 'fil', name: 'Filipino (Tagalog)', nativeName: 'Wikang Filipino', script: 'Latin (Baybayin heritage)', family: 'Austronesian', type: 'official', percentage: 80.0, speakerCount: '90 Million' },
      { id: 'en', name: 'English', nativeName: 'Philippine English', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 64.0, speakerCount: '70 Million' },
      { id: 'ceb', name: 'Cebuano', nativeName: 'Binisaya / Cebuano', script: 'Latin', family: 'Austronesian', type: 'regional', percentage: 21.0, speakerCount: '25 Million' },
      { id: 'ilo', name: 'Ilocano', nativeName: 'Ilokano', script: 'Latin', family: 'Austronesian', type: 'regional', percentage: 9.0, speakerCount: '10 Million' },
      { id: 'hil', name: 'Hiligaynon', nativeName: 'Ilonggo', script: 'Latin', family: 'Austronesian', type: 'regional', percentage: 7.0, speakerCount: '8 Million' }
    ],
    phrases: [
      { english: 'Hello', native: 'Kamusta / Magandang araw', phonetic: 'kah-moos-TAH / mah-gahn-DANG AH-row', category: 'greeting' },
      { english: 'Thank you', native: 'Salamat po', phonetic: 'sah-LAH-mat poh', category: 'courtesy' }
    ],
    facts: [
      'Baybayin is an ancient pre-colonial Philippine syllabary script experiencing a modern revival.',
      'Taglish (Tagalog-English code-switching) is the informal national spoken standard.'
    ]
  },
  {
    code: 'VN',
    name: 'Vietnam',
    nativeName: 'Cộng hòa Xã hội Chủ nghĩa Việt Nam',
    flag: '🇻🇳',
    region: 'Asia',
    subregion: 'South-Eastern Asia',
    capital: 'Hanoi',
    population: 98000000,
    multilingualScore: 7.1,
    description: 'Vietnamese is official, written in the Latin Chữ Quốc ngữ script, with tonal variations across Northern, Central, and Southern regions.',
    coordinates: { x: 80, y: 52 },
    languages: [
      { id: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt', script: 'Latin (Chữ Quốc ngữ)', family: 'Austroasiatic (Vietic)', type: 'official', percentage: 85.3, speakerCount: '85 Million' },
      { id: 'tay', name: 'Tày', nativeName: 'Tiếng Tày', script: 'Latin', family: 'Kra-Dai', type: 'indigenous', percentage: 1.8, speakerCount: '1.7 Million' },
      { id: 'khm', name: 'Khmer', nativeName: 'Tiếng Khmer', script: 'Khmer', family: 'Austroasiatic', type: 'regional', percentage: 1.4, speakerCount: '1.3 Million' }
    ],
    phrases: [
      { english: 'Hello', native: 'Xin chào', phonetic: 'sin CHOW', category: 'greeting' },
      { english: 'Thank you', native: 'Cảm ơn', phonetic: 'kahm UHN', category: 'courtesy' }
    ],
    facts: [
      'Vietnamese has six distinct vocal tones that completely alter word meaning.',
      'Chữ Quốc ngữ was created in the 17th century by French Jesuit missionary Alexandre de Rhodes.'
    ]
  },
  {
    code: 'SG',
    name: 'Singapore',
    nativeName: 'Republic of Singapore',
    flag: '🇸🇬',
    region: 'Asia',
    subregion: 'South-Eastern Asia',
    capital: 'Singapore',
    population: 5900000,
    multilingualScore: 9.7,
    description: 'Singapore has four official languages: English, Mandarin, Malay (national language), and Tamil, celebrated in a harmonized multicultural framework.',
    coordinates: { x: 81, y: 62 },
    languages: [
      { id: 'en', name: 'English', nativeName: 'English (Singlish)', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 48.3, speakerCount: '2.8 Million' },
      { id: 'zh', name: 'Mandarin Chinese', nativeName: '华语 (Huáyǔ)', script: 'Han (Simplified)', family: 'Sino-Tibetan', type: 'official', percentage: 29.9, speakerCount: '1.7 Million' },
      { id: 'ms', name: 'Malay', nativeName: 'Bahasa Melayu', script: 'Latin', family: 'Austronesian', type: 'official', percentage: 9.2, speakerCount: '530,000', notes: 'Designated ceremonial National Language.' },
      { id: 'ta', name: 'Tamil', nativeName: 'தமிழ்', script: 'Tamil', family: 'Dravidian', type: 'official', percentage: 2.5, speakerCount: '150,000' }
    ],
    phrases: [
      { english: 'Hello', native: 'Hello / 你好 / Selamat / வணக்கம்', phonetic: 'heh-LOH / nee HOW / seh-LAH-mat / vah-nah-kahm', category: 'greeting' },
      { english: 'Thank you', native: 'Thank you / Terima kasih / 谢谢', phonetic: 'THANK yoo / teh-REE-mah KAH-see / syeh-syeh', category: 'courtesy' }
    ],
    facts: [
      'The national anthem "Majulah Singapura" is sung strictly in Malay.',
      'Singlish is a unique colloquial creole combining English, Hokkien, Malay, Cantonese, and Tamil.'
    ]
  },

  // --- AFRICA ---
  {
    code: 'ZA',
    name: 'South Africa',
    nativeName: 'Mzansi / Suid-Afrika',
    flag: '🇿🇦',
    region: 'Africa',
    subregion: 'Southern Africa',
    capital: 'Pretoria / Cape Town',
    population: 60600000,
    multilingualScore: 9.8,
    description: 'South Africa constitutionally recognizes 12 official languages, embracing Zulu, Xhosa, Afrikaans, English, Sepedi, and South African Sign Language.',
    coordinates: { x: 54, y: 78 },
    languages: [
      { id: 'zu', name: 'isiZulu', nativeName: 'isiZulu', script: 'Latin', family: 'Niger-Congo (Bantu)', type: 'official', percentage: 24.4, speakerCount: '15.1 Million' },
      { id: 'xh', name: 'isiXhosa', nativeName: 'isiXhosa', script: 'Latin', family: 'Niger-Congo (Bantu)', type: 'official', percentage: 16.0, speakerCount: '9.9 Million' },
      { id: 'af', name: 'Afrikaans', nativeName: 'Afrikaans', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 10.6, speakerCount: '6.6 Million' },
      { id: 'en', name: 'English', nativeName: 'English', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 8.7, speakerCount: '5.4 Million' }
    ],
    phrases: [
      { english: 'Hello', native: 'Sawubona (Zulu) / Molo (Xhosa) / Goeie dag (Afrikaans)', phonetic: 'sah-woo-BOH-nah / MOH-loh / KHOO-ee-eh dahkh', category: 'greeting' },
      { english: 'Thank you', native: 'Yebo / Enkosi / Dankie', phonetic: 'YEH-boh / en-KOH-see / DAHN-kee', category: 'courtesy' }
    ],
    facts: [
      'South African national anthem features 5 languages in a single composition.',
      'South African Sign Language became the 12th official language in July 2023.'
    ]
  },
  {
    code: 'NG',
    name: 'Nigeria',
    nativeName: 'Federal Republic of Nigeria',
    flag: '🇳🇬',
    region: 'Africa',
    subregion: 'Western Africa',
    capital: 'Abuja',
    population: 220000000,
    multilingualScore: 9.8,
    description: 'Nigeria is Africa’s most populous nation with over 500 living languages, led by Hausa, Yoruba, Igbo, Nigerian Pidgin, and English.',
    coordinates: { x: 48, y: 52 },
    languages: [
      { id: 'en', name: 'English', nativeName: 'English', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 50.0, speakerCount: '110 Million' },
      { id: 'pcm', name: 'Nigerian Pidgin', nativeName: 'Naija', script: 'Latin', family: 'English-based Creole', type: 'widely_spoken', percentage: 60.0, speakerCount: '130 Million' },
      { id: 'ha', name: 'Hausa', nativeName: 'Harshen Hausa / هَوُسَ', script: 'Latin (Boko) / Arabic (Ajami)', family: 'Afroasiatic (Chadic)', type: 'regional', percentage: 30.0, speakerCount: '70 Million' },
      { id: 'yo', name: 'Yoruba', nativeName: 'Èdè Yorùbá', script: 'Latin', family: 'Niger-Congo (Volta-Niger)', type: 'regional', percentage: 20.0, speakerCount: '45 Million' },
      { id: 'ig', name: 'Igbo', nativeName: 'Asụsụ Igbo', script: 'Latin', family: 'Niger-Congo (Volta-Niger)', type: 'regional', percentage: 18.0, speakerCount: '40 Million' }
    ],
    phrases: [
      { english: 'Hello', native: 'How far? (Pidgin) / Sannu (Hausa) / Ẹ ǹlẹ́ (Yoruba) / Ndewō (Igbo)', phonetic: 'HOW far / SAHN-noo / ehn-LEH / n-DEH-woh', category: 'greeting' },
      { english: 'Thank you', native: 'Nagoode (Hausa) / Ẹ ṣé (Yoruba) / Imela (Igbo)', phonetic: 'nah-GOO-deh / eh SHEH / ee-MEH-lah', category: 'courtesy' }
    ],
    facts: [
      'Nigerian Pidgin (Naija) is the most widely spoken English-based creole in the world.',
      'Hausa was historically written in Ajami script (modified Arabic alphabet).'
    ]
  },
  {
    code: 'KE',
    name: 'Kenya',
    nativeName: 'Jamhuri ya Kenya',
    flag: '🇰🇪',
    region: 'Africa',
    subregion: 'Eastern Africa',
    capital: 'Nairobi',
    population: 54000000,
    multilingualScore: 9.3,
    description: 'Swahili (Kiswahili) and English are official national languages, alongside 60 indigenous languages like Kikuyu, Luhya, and Luo.',
    coordinates: { x: 57, y: 58 },
    languages: [
      { id: 'sw', name: 'Swahili', nativeName: 'Kiswahili', script: 'Latin', family: 'Niger-Congo (Bantu)', type: 'official', percentage: 90.0, speakerCount: '48 Million' },
      { id: 'en', name: 'English', nativeName: 'Kenyan English', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 50.0, speakerCount: '27 Million' },
      { id: 'kik', name: 'Kikuyu', nativeName: 'Gĩkũyũ', script: 'Latin', family: 'Niger-Congo (Bantu)', type: 'regional', percentage: 20.0, speakerCount: '8 Million' },
      { id: 'luo', name: 'Luo', nativeName: 'Dholuo', script: 'Latin', family: 'Nilo-Saharan', type: 'regional', percentage: 11.0, speakerCount: '4.5 Million' }
    ],
    phrases: [
      { english: 'Hello', native: 'Jambo / Habari', phonetic: 'JAHM-boh / hah-BAH-ree', category: 'greeting' },
      { english: 'Thank you', native: 'Asante sana', phonetic: 'ah-SAHN-teh SAH-nah', category: 'courtesy' }
    ],
    facts: [
      'Sheng is an urban slang combining Swahili, English, and indigenous Kenyan languages in Nairobi.',
      'Swahili is the lingua franca of the African Union and East African Community.'
    ]
  },
  {
    code: 'EG',
    name: 'Egypt',
    nativeName: 'جمهورية مصر العربية',
    flag: '🇪🇬',
    region: 'Africa',
    subregion: 'Northern Africa',
    capital: 'Cairo',
    population: 105000000,
    multilingualScore: 7.0,
    description: 'Modern Standard Arabic is official, while Egyptian Arabic (Masri) is spoken in daily life, alongside Coptic and Nubian.',
    coordinates: { x: 53, y: 40 },
    languages: [
      { id: 'ar', name: 'Arabic', nativeName: 'العربية / اللهجة المصرية', script: 'Arabic', family: 'Afroasiatic (Semitic)', type: 'official', percentage: 99.0, speakerCount: '104 Million' },
      { id: 'cop', name: 'Coptic', nativeName: 'ⲙⲉⲑⲣⲉⲙⲛ̀ⲭⲏⲙⲛ', script: 'Coptic', family: 'Afroasiatic (Egyptian)', type: 'liturgical', percentage: 0.1, speakerCount: 'Liturgical', notes: 'Direct descendant of Ancient Egyptian language.' },
      { id: 'noa', name: 'Nubian', nativeName: 'Nobiin', script: 'Coptic / Old Nubian', family: 'Nilo-Saharan', type: 'indigenous', percentage: 0.3, speakerCount: '300,000' }
    ],
    phrases: [
      { english: 'Hello', native: 'Marhaban / Ahlan (مرحبا / أهلاً)', phonetic: 'MAR-hah-bahn / AH-lahn', category: 'greeting' },
      { english: 'Thank you', native: 'Shukran (شكراً)', phonetic: 'SHOO-krahn', category: 'courtesy' }
    ],
    facts: [
      'Egyptian Arabic (Masri) is understood across the Arab world due to Egyptian cinema and media.',
      'Coptic language is the final evolutionary stage of Ancient Egyptian written in Coptic script.'
    ]
  },
  {
    code: 'ET',
    name: 'Ethiopia',
    nativeName: 'ኢትዮጵያ (Ityop\'ya)',
    flag: '🇪🇹',
    region: 'Africa',
    subregion: 'Eastern Africa',
    capital: 'Addis Ababa',
    population: 123000000,
    multilingualScore: 9.5,
    description: 'Amharic, Afar, Oromo, Somali, and Tigrinya are working federal languages, written in the ancient Ge\'ez script.',
    coordinates: { x: 57, y: 50 },
    languages: [
      { id: 'am', name: 'Amharic', nativeName: 'አማርኛ', script: 'Ge\'ez (Fidäl)', family: 'Afroasiatic (Semitic)', type: 'official', percentage: 32.0, speakerCount: '32 Million' },
      { id: 'om', name: 'Oromo', nativeName: 'Afaan Oromoo', script: 'Latin (Qubbee)', family: 'Afroasiatic (Cushitic)', type: 'official', percentage: 33.8, speakerCount: '38 Million' },
      { id: 'ti', name: 'Tigrinya', nativeName: 'ትግርኛ', script: 'Ge\'ez (Fidäl)', family: 'Afroasiatic (Semitic)', type: 'official', percentage: 6.0, speakerCount: '7 Million' },
      { id: 'so', name: 'Somali', nativeName: 'Soomaali', script: 'Latin', family: 'Afroasiatic (Cushitic)', type: 'official', percentage: 6.2, speakerCount: '7.5 Million' }
    ],
    phrases: [
      { english: 'Hello', native: 'Selam (ሰላም) / Asham', phonetic: 'seh-LAHM / ah-SHAHM', category: 'greeting' },
      { english: 'Thank you', native: 'Ameseginalehu (አመሰግናለሁ)', phonetic: 'ah-meh-seh-ghee-NAH-leh-hoo', category: 'courtesy' }
    ],
    facts: [
      'Ge\'ez script is an abugida script where each symbol represents a consonant-vowel combination.',
      'Ethiopia is the only African nation with its own indigenous alphabetic writing system.'
    ]
  },

  // --- OCEANIA ---
  {
    code: 'AU',
    name: 'Australia',
    nativeName: 'Australia',
    flag: '🇦🇺',
    region: 'Oceania',
    subregion: 'Australia and New Zealand',
    capital: 'Canberra',
    population: 26000000,
    multilingualScore: 7.9,
    description: 'English is de facto national language, with revitalization efforts for over 250 Indigenous Australian language groups.',
    coordinates: { x: 86, y: 72 },
    languages: [
      { id: 'en', name: 'English', nativeName: 'Australian English', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 72.0, speakerCount: '19 Million' },
      { id: 'wbp', name: 'Warlpiri', nativeName: 'Warlpiri', script: 'Latin', family: 'Pama-Nyungan', type: 'indigenous', percentage: 0.01, speakerCount: '3,000' },
      { id: 'zh', name: 'Mandarin Chinese', nativeName: '普通话', script: 'Han (Simplified)', family: 'Sino-Tibetan', type: 'widely_spoken', percentage: 2.7, speakerCount: '685,000' }
    ],
    phrases: [
      { english: 'Hello', native: 'G\'day / Hello', phonetic: 'guh-DAY', category: 'greeting' },
      { english: 'Thank you', native: 'Thanks / Cheers', phonetic: 'THANKS / CHEERZ', category: 'courtesy' }
    ],
    facts: [
      'Prior to European contact, over 250 distinct Indigenous languages were spoken in Australia.',
      'Aboriginal English blends traditional indigenous grammatical features.'
    ]
  },
  {
    code: 'NZ',
    name: 'New Zealand',
    nativeName: 'Aotearoa',
    flag: '🇳🇿',
    region: 'Oceania',
    subregion: 'Australia and New Zealand',
    capital: 'Wellington',
    population: 5100000,
    multilingualScore: 8.7,
    description: 'New Zealand has three official languages: English, Māori (Te Reo Māori), and New Zealand Sign Language (NZSL).',
    coordinates: { x: 92, y: 80 },
    languages: [
      { id: 'en', name: 'English', nativeName: 'New Zealand English', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 95.0, speakerCount: '4.8 Million' },
      { id: 'mi', name: 'Māori', nativeName: 'Te Reo Māori', script: 'Latin', family: 'Austronesian (Polynesian)', type: 'official', percentage: 4.0, speakerCount: '185,000' },
      { id: 'nzs', name: 'New Zealand Sign Language', nativeName: 'NZSL', script: 'Gestural', family: 'Sign Language', type: 'official', percentage: 0.5, speakerCount: '23,000' }
    ],
    phrases: [
      { english: 'Hello', native: 'Kia ora', phonetic: 'kee-ah OR-ah', category: 'greeting' },
      { english: 'Thank you', native: 'Kia ora / Ngā mihi', phonetic: 'kee-ah OR-ah / ngah MEE-hee', category: 'courtesy' }
    ],
    facts: [
      'Māori was declared an official language under the Maori Language Act 1987.',
      'New Zealand Sign Language became an official language in 2006.'
    ]
  },
  {
    code: 'PG',
    name: 'Papua New Guinea',
    nativeName: 'Papua Niugini',
    flag: '🇵🇬',
    region: 'Oceania',
    subregion: 'Melanesia',
    capital: 'Port Moresby',
    population: 10000000,
    multilingualScore: 10.0,
    description: 'World record holder for linguistic diversity: over 840 distinct living indigenous languages across Papuan and Austronesian families.',
    coordinates: { x: 88, y: 65 },
    languages: [
      { id: 'tpi', name: 'Tok Pisin', nativeName: 'Tok Pisin', script: 'Latin', family: 'English-based Creole', type: 'official', percentage: 70.0, speakerCount: '4.0 Million' },
      { id: 'en', name: 'English', nativeName: 'English', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 2.0, speakerCount: '200,000' },
      { id: 'ho', name: 'Hiri Motu', nativeName: 'Hiri Motu', script: 'Latin', family: 'Motu-based Pidgin', type: 'official', percentage: 3.0, speakerCount: '120,000' }
    ],
    phrases: [
      { english: 'Hello', native: 'Gude (Tok Pisin)', phonetic: 'goo-DAY', category: 'greeting' },
      { english: 'Thank you', native: 'Tenkyu tru', phonetic: 'TENK-yoo TROO', category: 'courtesy' }
    ],
    facts: [
      'Papua New Guinea contains over 12% of the world’s total languages.',
      'Tok Pisin evolved from 19th-century Pacific trade pidgin.'
    ]
  }
];

// Combine all countries
console.log(`Generated ${allCountries.length} base enriched countries.`);
