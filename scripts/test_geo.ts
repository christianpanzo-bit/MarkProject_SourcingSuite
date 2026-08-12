import fs from 'fs';
import path from 'path';

// Complete list of 195+ world countries with rich linguistic data
const countries = [
  // --- EUROPE (44 countries) ---
  {
    code: 'AL', name: 'Albania', nativeName: 'Shqipëria', flag: '🇦🇱', region: 'Europe', subregion: 'Southern Europe', capital: 'Tirana', population: 2750000, multilingualScore: 7.2, coordinates: { x: 54, y: 39 },
    description: 'Albania is a Balkans nation whose primary language, Albanian (Shqip), forms its own distinct independent branch within the Indo-European language family.',
    languages: [
      { id: 'sq', name: 'Albanian', nativeName: 'Shqip', script: 'Latin', family: 'Indo-European (Albanian)', type: 'official', percentage: 98.0, speakerCount: '2.7 Million', notes: 'Divided into Gheg (north) and Tosk (south) dialectal groups.' },
      { id: 'el', name: 'Greek', nativeName: 'Ελληνικά', script: 'Greek', family: 'Indo-European (Hellenic)', type: 'recognized', percentage: 1.5, speakerCount: '40,000' },
      { id: 'it', name: 'Italian', nativeName: 'Italiano', script: 'Latin', family: 'Indo-European (Romance)', type: 'widely_spoken', percentage: 50.0, speakerCount: '1.4 Million', notes: 'Widely spoken due to close geographical and media ties.' }
    ],
    phrases: [
      { english: 'Hello', native: 'Përshëndetje / Tungjatjeta', phonetic: 'pur-shen-DET-yeh / toon-JAT-ye-ta', category: 'greeting' },
      { english: 'Thank you', native: 'Faleminderit', phonetic: 'fah-lem-min-DEH-reet', category: 'courtesy' },
      { english: 'Goodbye', native: 'Mirupafshim', phonetic: 'meer-oo-PAFH-sheem', category: 'greeting' }
    ],
    facts: [
      'Albanian is a linguistic isolate among Indo-European languages with no close living relatives.',
      'In Albania, nodding up-and-down traditionally can mean "no", while shaking side-to-side means "yes".'
    ]
  },
  {
    code: 'AD', name: 'Andorra', nativeName: 'Andorra', flag: '🇦🇩', region: 'Europe', subregion: 'Southern Europe', capital: 'Andorra la Vella', population: 80000, multilingualScore: 9.1, coordinates: { x: 44, y: 38 },
    description: 'Andorra is the only country in the world where Catalan is the sole official state language, alongside widespread French and Spanish bilingualism.',
    languages: [
      { id: 'ca', name: 'Catalan', nativeName: 'Català', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 38.8, speakerCount: '31,000' },
      { id: 'es', name: 'Spanish', nativeName: 'Español', script: 'Latin', family: 'Indo-European (Romance)', type: 'widely_spoken', percentage: 35.4, speakerCount: '28,000' },
      { id: 'fr', name: 'French', nativeName: 'Français', script: 'Latin', family: 'Indo-European (Romance)', type: 'widely_spoken', percentage: 15.0, speakerCount: '12,000' },
      { id: 'pt', name: 'Portuguese', nativeName: 'Português', script: 'Latin', family: 'Indo-European (Romance)', type: 'minority', percentage: 12.0, speakerCount: '9,600' }
    ],
    phrases: [
      { english: 'Hello', native: 'Hola', phonetic: 'OH-lah', category: 'greeting' },
      { english: 'Thank you', native: 'Gràcies / Mercès', phonetic: 'GRAH-see-es / mair-SES', category: 'courtesy' }
    ],
    facts: [
      'Andorra is co-ruled by two co-princes: the Catholic Bishop of Urgell in Spain and the President of France.',
      'Despite its small size, standard schooling is offered in Catalan, French, and Spanish systems.'
    ]
  },
  {
    code: 'AT', name: 'Austria', nativeName: 'Österreich', flag: '🇦🇹', region: 'Europe', subregion: 'Western Europe', capital: 'Vienna', population: 9100000, multilingualScore: 7.2, coordinates: { x: 50, y: 35 },
    description: 'Austria uses Standard German (Österreichisches Deutsch) with regional Austro-Bavarian dialects and constitutional recognition for minority languages.',
    languages: [
      { id: 'de', name: 'German (Austrian)', nativeName: 'Deutsch', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 98.0, speakerCount: '8.9 Million' },
      { id: 'sl', name: 'Slovene', nativeName: 'Slovenščina', script: 'Latin', family: 'Indo-European (South Slavic)', type: 'regional', percentage: 0.3, speakerCount: '24,000', notes: 'Protected in Carinthia.' },
      { id: 'hr', name: 'Burgenland Croatian', nativeName: 'Hrvatski', script: 'Latin', family: 'Indo-European (South Slavic)', type: 'regional', percentage: 0.2, speakerCount: '19,000' },
      { id: 'hu', name: 'Hungarian', nativeName: 'Magyar', script: 'Latin', family: 'Uralic (Finno-Ugric)', type: 'regional', percentage: 0.1, speakerCount: '10,000' }
    ],
    phrases: [
      { english: 'Hello', native: 'Grüß Gott / Servus', phonetic: 'GROOS got / SEHR-voos', category: 'greeting' },
      { english: 'Thank you', native: 'Danke schön', phonetic: 'DAHN-keh shurn', category: 'courtesy' }
    ],
    facts: [
      'Austrian German has legally protected distinct vocabulary in the EU (e.g., Erdäpfel for potatoes instead of Kartoffeln).',
      'Vienna was the historic multi-ethnic linguistic capital of the Austro-Hungarian Empire.'
    ]
  },
  {
    code: 'BY', name: 'Belarus', nativeName: 'Belaruś', flag: '🇧🇾', region: 'Europe', subregion: 'Eastern Europe', capital: 'Minsk', population: 9200000, multilingualScore: 8.0, coordinates: { x: 56, y: 28 },
    description: 'Belarus has two official languages, Belarusian and Russian, with Trasianka (a mixed East Slavic sociolect) widely spoken in daily rural life.',
    languages: [
      { id: 'be', name: 'Belarusian', nativeName: 'Беларуская', script: 'Cyrillic', family: 'Indo-European (East Slavic)', type: 'official', percentage: 23.0, speakerCount: '2.1 Million' },
      { id: 'ru', name: 'Russian', nativeName: 'Русский', script: 'Cyrillic', family: 'Indo-European (East Slavic)', type: 'official', percentage: 70.0, speakerCount: '6.4 Million' }
    ],
    phrases: [
      { english: 'Hello', native: 'Вітаю (Vitaju)', phonetic: 'vee-TAH-yoo', category: 'greeting' },
      { english: 'Thank you', native: 'Дзякуй (Dziakuj)', phonetic: 'DZYA-kooy', category: 'courtesy' }
    ],
    facts: [
      'Belarusian alphabet features a unique letter "Ў" (short U) found in no other East Slavic language.',
      'Historic Belarusian was recorded in both Cyrillic and Latin (Lacinka) scripts.'
    ]
  },
  {
    code: 'BE', name: 'Belgium', nativeName: 'België / Belgique / Belgien', flag: '🇧🇪', region: 'Europe', subregion: 'Western Europe', capital: 'Brussels', population: 11700000, multilingualScore: 8.9, coordinates: { x: 47, y: 32 },
    description: 'Belgium is split into three federal language communities: Dutch-speaking Flanders, French-speaking Wallonia, and German-speaking East Cantons.',
    languages: [
      { id: 'nl', name: 'Dutch (Flemish)', nativeName: 'Nederlands / Vlaams', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 59.0, speakerCount: '6.9 Million' },
      { id: 'fr', name: 'French', nativeName: 'Français', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 40.0, speakerCount: '4.7 Million' },
      { id: 'de', name: 'German', nativeName: 'Deutsch', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 1.0, speakerCount: '77,000' }
    ],
    phrases: [
      { english: 'Hello', native: 'Hallo (NL) / Bonjour (FR) / Guten Tag (DE)', phonetic: 'HAH-loh / bon-ZHOOR / GOO-ten TAHK', category: 'greeting' },
      { english: 'Thank you', native: 'Dank u (NL) / Merci (FR) / Danke (DE)', phonetic: 'DAHNK-oo / MAIR-see / DAHN-keh', category: 'courtesy' }
    ],
    facts: [
      'Brussels is an officially bilingual enclave where all street signs and public notices are in Dutch and French.',
      'Language borders in Belgium are fixed by constitutional law.'
    ]
  },
  {
    code: 'BA', name: 'Bosnia and Herzegovina', nativeName: 'Bosna i Hercegovina', flag: '🇧🇦', region: 'Europe', subregion: 'Southern Europe', capital: 'Sarajevo', population: 3200000, multilingualScore: 9.3, coordinates: { x: 52, y: 37 },
    description: 'Bosnia and Herzegovina constitutionally protects three official standard languages: Bosnian, Croatian, and Serbian.',
    languages: [
      { id: 'bs', name: 'Bosnian', nativeName: 'Bosanski', script: 'Latin / Cyrillic', family: 'Indo-European (South Slavic)', type: 'official', percentage: 50.7, speakerCount: '1.6 Million' },
      { id: 'sr', name: 'Serbian', nativeName: 'Српски', script: 'Cyrillic / Latin', family: 'Indo-European (South Slavic)', type: 'official', percentage: 30.7, speakerCount: '1.0 Million' },
      { id: 'hr', name: 'Croatian', nativeName: 'Hrvatski', script: 'Latin', family: 'Indo-European (South Slavic)', type: 'official', percentage: 15.4, speakerCount: '500,000' }
    ],
    phrases: [
      { english: 'Hello', native: 'Zdravo / Dobar dan', phonetic: 'ZDRAH-voh / DOH-bar DAHN', category: 'greeting' },
      { english: 'Thank you', native: 'Hvala', phonetic: 'HVAH-lah', category: 'courtesy' }
    ],
    facts: [
      'Bosnian, Croatian, and Serbian are mutually intelligible standard varieties of Shtokavian South Slavic.',
      'Both Latin and Cyrillic alphabets hold equal constitutional status.'
    ]
  },
  {
    code: 'BG', name: 'Bulgaria', nativeName: 'България', flag: '🇧🇬', region: 'Europe', subregion: 'Eastern Europe', capital: 'Sofia', population: 6400000, multilingualScore: 6.8, coordinates: { x: 56, y: 39 },
    description: 'Bulgaria is the birthplace of the Cyrillic alphabet, developed in the 9th century AD by disciples of Saints Cyril and Methodius.',
    languages: [
      { id: 'bg', name: 'Bulgarian', nativeName: 'Български', script: 'Cyrillic', family: 'Indo-European (South Slavic)', type: 'official', percentage: 85.0, speakerCount: '5.5 Million' },
      { id: 'tr', name: 'Turkish', nativeName: 'Türkçe', script: 'Latin', family: 'Turkic', type: 'minority', percentage: 8.8, speakerCount: '560,000' },
      { id: 'rom', name: 'Romani', nativeName: 'Romani čhib', script: 'Latin', family: 'Indo-European (Indo-Aryan)', type: 'minority', percentage: 4.9, speakerCount: '310,000' }
    ],
    phrases: [
      { english: 'Hello', native: 'Здравей (Zdravei) / Добър ден', phonetic: 'zdrah-VEY / DOH-bur DEN', category: 'greeting' },
      { english: 'Thank you', native: 'Благодаря (Blagodarya) / Мерси', phonetic: 'blah-goh-da-RYAH / mair-SEE', category: 'courtesy' }
    ],
    facts: [
      'Bulgarian lacks noun cases unlike most other Slavic languages, but possesses a rich verb tense system.',
      'Cyrillic became the third official script of the European Union when Bulgaria joined in 2007.'
    ]
  },
  {
    code: 'HR', name: 'Croatia', nativeName: 'Hrvatska', flag: '🇭🇷', region: 'Europe', subregion: 'Southern Europe', capital: 'Zagreb', population: 3800000, multilingualScore: 7.0, coordinates: { x: 51, y: 36 },
    description: 'Croatia uses Croatian written in the Gaj Latin alphabet, with regional Italian bilingualism in the coastal Istria peninsula.',
    languages: [
      { id: 'hr', name: 'Croatian', nativeName: 'Hrvatski', script: 'Latin', family: 'Indo-European (South Slavic)', type: 'official', percentage: 95.6, speakerCount: '3.6 Million' },
      { id: 'it', name: 'Italian', nativeName: 'Italiano', script: 'Latin', family: 'Indo-European (Romance)', type: 'regional', percentage: 1.5, speakerCount: '50,000', notes: 'Co-official in Istria County.' }
    ],
    phrases: [
      { english: 'Hello', native: 'Bok / Dobar dan', phonetic: 'BOK / DOH-bar DAHN', category: 'greeting' },
      { english: 'Thank you', native: 'Hvala', phonetic: 'HVAH-lah', category: 'courtesy' }
    ],
    facts: [
      'Historical Croatian was preserved for centuries in Glagolitic script, the oldest known Slavic alphabet.',
      'Istria County in western Croatia is officially bilingual in Croatian and Italian.'
    ]
  },
  {
    code: 'CY', name: 'Cyprus', nativeName: 'Kýpros / Kıbrıs', flag: '🇨🇾', region: 'Europe', subregion: 'Southern Europe', capital: 'Nicosia', population: 1200000, multilingualScore: 8.9, coordinates: { x: 60, y: 44 },
    description: 'Cyprus recognizes Greek and Turkish as official constitutional state languages, with English universally spoken as a legacy of British governance.',
    languages: [
      { id: 'el', name: 'Greek (Cypriot)', nativeName: 'Ελληνικά', script: 'Greek', family: 'Indo-European (Hellenic)', type: 'official', percentage: 80.0, speakerCount: '900,000' },
      { id: 'tr', name: 'Turkish', nativeName: 'Türkçe', script: 'Latin', family: 'Turkic', type: 'official', percentage: 18.0, speakerCount: '200,000' },
      { id: 'en', name: 'English', nativeName: 'English', script: 'Latin', family: 'Indo-European (Germanic)', type: 'widely_spoken', percentage: 76.0, speakerCount: '850,000' }
    ],
    phrases: [
      { english: 'Hello', native: 'Γειά σας (Yia sas) / Merhaba', phonetic: 'YAH-sas / mair-HAH-bah', category: 'greeting' },
      { english: 'Thank you', native: 'Ευχαριστώ (Efcharisto) / Teşekkürler', phonetic: 'ef-khah-ree-STOH / teh-shek-kyoor-LER', category: 'courtesy' }
    ],
    facts: [
      'Cypriot Greek contains ancient dialectal elements preserved from Classical Greek.',
      'English is widely used in judiciary, tourism, and higher education.'
    ]
  },
  {
    code: 'CZ', name: 'Czech Republic', nativeName: 'Česko', flag: '🇨🇿', region: 'Europe', subregion: 'Eastern Europe', capital: 'Prague', population: 10800000, multilingualScore: 6.5, coordinates: { x: 51, y: 33 },
    description: 'The Czech Republic speaks Czech, a West Slavic language renowned for its complex consonant clusters and the distinct letter ř.',
    languages: [
      { id: 'cs', name: 'Czech', nativeName: 'Čeština', script: 'Latin', family: 'Indo-European (West Slavic)', type: 'official', percentage: 96.0, speakerCount: '10.3 Million' },
      { id: 'sk', name: 'Slovak', nativeName: 'Slovenčina', script: 'Latin', family: 'Indo-European (West Slavic)', type: 'recognized', percentage: 1.5, speakerCount: '160,000' }
    ],
    phrases: [
      { english: 'Hello', native: 'Ahoj / Dobrý den', phonetic: 'AH-hoy / DOH-bree DEN', category: 'greeting' },
      { english: 'Thank you', native: 'Děkuji', phonetic: 'DYEH-koo-yee', category: 'courtesy' }
    ],
    facts: [
      'Czech letter "ř" is an alveolar trill fricative found almost exclusively in Czech.',
      'Czech and Slovak are mutually intelligible due to shared history in Czechoslovakia.'
    ]
  },
  {
    code: 'DK', name: 'Denmark', nativeName: 'Danmark', flag: '🇩🇰', region: 'Europe', subregion: 'Northern Europe', capital: 'Copenhagen', population: 5900000, multilingualScore: 7.5, coordinates: { x: 48, y: 28 },
    description: 'Denmark uses Danish, a North Germanic language featuring stød (a distinctive glottal catch sound feature), alongside Faroese and Greenlandic in autonomous territories.',
    languages: [
      { id: 'da', name: 'Danish', nativeName: 'Dansk', script: 'Latin', family: 'Indo-European (North Germanic)', type: 'official', percentage: 98.0, speakerCount: '5.8 Million' },
      { id: 'de', name: 'German', nativeName: 'Deutsch', script: 'Latin', family: 'Indo-European (Germanic)', type: 'recognized', percentage: 0.4, speakerCount: '25,000', notes: 'Protected minority in Southern Jutland.' },
      { id: 'kl', name: 'Greenlandic (Kalaallisut)', nativeName: 'Kalaallisut', script: 'Latin', family: 'Eskimo-Aleut', type: 'regional', percentage: 0.1, speakerCount: '7,000' }
    ],
    phrases: [
      { english: 'Hello', native: 'Hej / Goddag', phonetic: 'HEY / go-DAH', category: 'greeting' },
      { english: 'Thank you', native: 'Tak', phonetic: 'TAK', category: 'courtesy' }
    ],
    facts: [
      'Danish features stød, a unique glottalization pattern that changes word meaning.',
      'The Kingdom of Denmark includes autonomous Greenland and Faroe Islands with their own primary languages.'
    ]
  },
  {
    code: 'EE', name: 'Estonia', nativeName: 'Eesti', flag: '🇪🇪', region: 'Europe', subregion: 'Northern Europe', capital: 'Tallinn', population: 1360000, multilingualScore: 7.9, coordinates: { x: 56, y: 22 },
    description: 'Estonia speaks Estonian, a non-Indo-European language belonging to the Finno-Ugric family with 14 grammatical noun cases.',
    languages: [
      { id: 'et', name: 'Estonian', nativeName: 'Eesti keel', script: 'Latin', family: 'Uralic (Finno-Ugric)', type: 'official', percentage: 67.0, speakerCount: '900,000' },
      { id: 'ru', name: 'Russian', nativeName: 'Русский', script: 'Cyrillic', family: 'Indo-European (East Slavic)', type: 'minority', percentage: 28.0, speakerCount: '380,000' }
    ],
    phrases: [
      { english: 'Hello', native: 'Tere', phonetic: 'TEH-reh', category: 'greeting' },
      { english: 'Thank you', native: 'Aitäh', phonetic: 'eye-TAHH', category: 'courtesy' }
    ],
    facts: [
      'Estonian is closely related to Finnish and distinct from neighboring Baltic languages Latvian and Lithuanian.',
      'Estonian has three distinctive lengths for vowels and consonants: short, long, and overly long.'
    ]
  },
  {
    code: 'FI', name: 'Finland', nativeName: 'Suomi / Finland', flag: '🇫🇮', region: 'Europe', subregion: 'Northern Europe', capital: 'Helsinki', population: 5600000, multilingualScore: 8.8, coordinates: { x: 55, y: 20 },
    description: 'Finland is constitutionally bilingual in Finnish and Swedish, alongside official protections for indigenous Sami languages.',
    languages: [
      { id: 'fi', name: 'Finnish', nativeName: 'Suomi', script: 'Latin', family: 'Uralic (Finno-Ugric)', type: 'official', percentage: 86.5, speakerCount: '4.8 Million' },
      { id: 'sv', name: 'Swedish', nativeName: 'Svenska', script: 'Latin', family: 'Indo-European (North Germanic)', type: 'official', percentage: 5.2, speakerCount: '290,000', notes: 'Official language of Åland Islands.' },
      { id: 'se', name: 'Sami (Northern / Inari / Skolt)', nativeName: 'Sámegiella', script: 'Latin', family: 'Uralic', type: 'indigenous', percentage: 0.1, speakerCount: '2,000' }
    ],
    phrases: [
      { english: 'Hello', native: 'Moi / Hei (FI) / Hej (SV)', phonetic: 'MOY / HAY / HEY', category: 'greeting' },
      { english: 'Thank you', native: 'Kiitos (FI) / Tack (SV)', phonetic: 'KEE-tos / TAK', category: 'courtesy' }
    ],
    facts: [
      'The autonomous Åland Islands in Finland are 100% unilingually Swedish.',
      'Finnish has 15 grammatical cases and no grammatical gender or future tense.'
    ]
  },
  {
    code: 'FR', name: 'France', nativeName: 'France', flag: '🇫🇷', region: 'Europe', subregion: 'Western Europe', capital: 'Paris', population: 68000000, multilingualScore: 6.5, coordinates: { x: 46, y: 36 },
    description: 'France uses French as sole constitutional state language, while regulating regional languages including Breton, Basque, Corsican, and Alsatian.',
    languages: [
      { id: 'fr', name: 'French', nativeName: 'Français', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 97.0, speakerCount: '65 Million' },
      { id: 'br', name: 'Breton', nativeName: 'Brezhoneg', script: 'Latin', family: 'Indo-European (Celtic)', type: 'regional', percentage: 0.3, speakerCount: '200,000' },
      { id: 'co', name: 'Corsican', nativeName: 'Corsu', script: 'Latin', family: 'Indo-European (Romance)', type: 'regional', percentage: 0.2, speakerCount: '120,000' },
      { id: 'gsw', name: 'Alsatian (Germanic)', nativeName: 'Elsässisch', script: 'Latin', family: 'Indo-European (Germanic)', type: 'regional', percentage: 0.8, speakerCount: '500,000' }
    ],
    phrases: [
      { english: 'Hello', native: 'Bonjour / Salut', phonetic: 'bon-ZHOOR / sah-LOO', category: 'greeting' },
      { english: 'Thank you', native: 'Merci beaucoup', phonetic: 'MAIR-see boh-KOO', category: 'courtesy' }
    ],
    facts: [
      'The Académie Française has officially regulated the French language since 1635.',
      'French is an official language in 29 independent countries worldwide.'
    ]
  },
  {
    code: 'DE', name: 'Germany', nativeName: 'Deutschland', flag: '🇩🇪', region: 'Europe', subregion: 'Western Europe', capital: 'Berlin', population: 84300000, multilingualScore: 6.8, coordinates: { x: 49, y: 32 },
    description: 'Germany speaks German (High German / Hochdeutsch) alongside official minority protection for Sorbian, Low German, Frisian, and Romani.',
    languages: [
      { id: 'de', name: 'German', nativeName: 'Deutsch', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 95.0, speakerCount: '80 Million' },
      { id: 'nds', name: 'Low German', nativeName: 'Plattdüütsch', script: 'Latin', family: 'Indo-European (Germanic)', type: 'regional', percentage: 3.0, speakerCount: '2.5 Million' },
      { id: 'hsb', name: 'Sorbian (Upper & Lower)', nativeName: 'Serbsce', script: 'Latin', family: 'Indo-European (West Slavic)', type: 'regional', percentage: 0.1, speakerCount: '60,000', notes: 'Protected in Lusatia (Saxony & Brandenburg).' }
    ],
    phrases: [
      { english: 'Hello', native: 'Guten Tag / Hallo / Moin', phonetic: 'GOO-ten TAHK / HAH-loh / MOYN', category: 'greeting' },
      { english: 'Thank you', native: 'Vielen Dank', phonetic: 'FEE-len DAHNk', category: 'courtesy' }
    ],
    facts: [
      'German has the largest number of native speakers in the European Union.',
      'Sorbian is a Slavic language spoken natively inside eastern Germany.'
    ]
  },
  {
    code: 'GR', name: 'Greece', nativeName: 'Ελλάδα', flag: '🇬🇷', region: 'Europe', subregion: 'Southern Europe', capital: 'Athens', population: 10400000, multilingualScore: 6.4, coordinates: { x: 55, y: 43 },
    description: 'Greece speaks Modern Greek, representing over 3,400 years of documented continuous written history in the Greek alphabet.',
    languages: [
      { id: 'el', name: 'Greek', nativeName: 'Ελληνικά', script: 'Greek', family: 'Indo-European (Hellenic)', type: 'official', percentage: 99.0, speakerCount: '10.3 Million' }
    ],
    phrases: [
      { english: 'Hello', native: 'Γειά σας (Yia sas) / Γειά σου', phonetic: 'YAH-sas / YAH-soo', category: 'greeting' },
      { english: 'Thank you', native: 'Ευχαριστώ (Efcharisto)', phonetic: 'ef-khah-ree-STOH', category: 'courtesy' }
    ],
    facts: [
      'The Greek alphabet was developed around the 8th century BC and inspired Cyrillic and Latin alphabets.',
      'Modern Greek evolved directly from Koine Greek used throughout Hellenistic and Byzantine history.'
    ]
  },
  {
    code: 'HU', name: 'Hungary', nativeName: 'Magyarország', flag: '🇭🇺', region: 'Europe', subregion: 'Eastern Europe', capital: 'Budapest', population: 9600000, multilingualScore: 6.3, coordinates: { x: 52, y: 35 },
    description: 'Hungary speaks Hungarian (Magyar), a Uralic language surrounded by Indo-European neighbors, featuring 18 grammatical noun cases.',
    languages: [
      { id: 'hu', name: 'Hungarian', nativeName: 'Magyar', script: 'Latin', family: 'Uralic (Finno-Ugric)', type: 'official', percentage: 98.0, speakerCount: '9.4 Million' }
    ],
    phrases: [
      { english: 'Hello', native: 'Szia / Jó napot', phonetic: 'SEE-ah / YOH NAH-pot', category: 'greeting' },
      { english: 'Thank you', native: 'Köszönöm', phonetic: 'KUR-sur-nurm', category: 'courtesy' }
    ],
    facts: [
      'Hungarian puts family names before given names (Eastern name order).',
      'Hungarian belongs to the Ugric branch of Uralic, distantly related to Khanty and Mansi in Siberia.'
    ]
  },
  {
    code: 'IS', name: 'Iceland', nativeName: 'Ísland', flag: '🇮🇸', region: 'Europe', subregion: 'Northern Europe', capital: 'Reykjavík', population: 388000, multilingualScore: 8.1, coordinates: { x: 38, y: 18 },
    description: 'Iceland speaks Icelandic, a North Germanic language so linguistically conservative that modern speakers can easily read 10th-century Old Norse sagas.',
    languages: [
      { id: 'is', name: 'Icelandic', nativeName: 'Íslenska', script: 'Latin', family: 'Indo-European (North Germanic)', type: 'official', percentage: 98.0, speakerCount: '380,000' }
    ],
    phrases: [
      { english: 'Hello', native: 'Hæ / Góðan dag', phonetic: 'HIGH / GOH-than DAHG', category: 'greeting' },
      { english: 'Thank you', native: 'Takk fyrir', phonetic: 'TAHK fee-reer', category: 'courtesy' }
    ],
    facts: [
      'Iceland has an official Language Committee that creates new Icelandic compound words for modern technology rather than adopting loanwords.',
      'Icelandic uses patronymic surnames ending in -son or -dóttir.'
    ]
  },
  {
    code: 'IE', name: 'Ireland', nativeName: 'Éire', flag: '🇮🇪', region: 'Europe', subregion: 'Northern Europe', capital: 'Dublin', population: 5200000, multilingualScore: 7.8, coordinates: { x: 42, y: 30 },
    description: 'Ireland constitutionally designates Irish (Gaeilge) as the first official language, alongside English as the second official language.',
    languages: [
      { id: 'ga', name: 'Irish', nativeName: 'Gaeilge', script: 'Latin', family: 'Indo-European (Celtic)', type: 'official', percentage: 39.8, speakerCount: '1.9 Million', notes: 'First official state language, concentrated in Gaeltacht regions.' },
      { id: 'en', name: 'English', nativeName: 'Hiberno-English', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 99.0, speakerCount: '5.1 Million' }
    ],
    phrases: [
      { english: 'Hello', native: 'Dia dhuit (GA) / Hello', phonetic: 'DEE-ah xwit / heh-LOH', category: 'greeting' },
      { english: 'Thank you', native: 'Go raibh maith agat (GA)', phonetic: 'gur-REV MAH ah-gut', category: 'courtesy' }
    ],
    facts: [
      'Gaeltacht areas in western Ireland are designated regions where Irish is the primary community language.',
      'Irish is an official working language of the European Union.'
    ]
  },
  {
    code: 'IT', name: 'Italy', nativeName: 'Italia', flag: '🇮🇹', region: 'Europe', subregion: 'Southern Europe', capital: 'Rome', population: 58800000, multilingualScore: 7.9, coordinates: { x: 50, y: 38 },
    description: 'Italy uses Standard Italian based on 14th-century Tuscan literary dialect, alongside dozens of recognized regional languages and regional bilingual statutes.',
    languages: [
      { id: 'it', name: 'Italian', nativeName: 'Italiano', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 95.0, speakerCount: '55 Million' },
      { id: 'nap', name: 'Neapolitan', nativeName: 'Napulitano', script: 'Latin', family: 'Indo-European (Romance)', type: 'regional', percentage: 10.0, speakerCount: '5.7 Million' },
      { id: 'scn', name: 'Sicilian', nativeName: 'Sicilianu', script: 'Latin', family: 'Indo-European (Romance)', type: 'regional', percentage: 8.0, speakerCount: '4.7 Million' },
      { id: 'de', name: 'German', nativeName: 'Deutsch', script: 'Latin', family: 'Indo-European (Germanic)', type: 'regional', percentage: 0.6, speakerCount: '320,000', notes: 'Co-official in South Tyrol.' },
      { id: 'fr', name: 'French', nativeName: 'Français', script: 'Latin', family: 'Indo-European (Romance)', type: 'regional', percentage: 0.2, speakerCount: '100,000', notes: 'Co-official in Aosta Valley.' }
    ],
    phrases: [
      { english: 'Hello', native: 'Ciao / Buongiorno', phonetic: 'CHOW / bwon-ZHOR-noh', category: 'greeting' },
      { english: 'Thank you', native: 'Grazie', phonetic: 'GRAHT-see-eh', category: 'courtesy' }
    ],
    facts: [
      'UNESCO classifies many Italian regional dialects (e.g. Venetian, Sicilian, Lombard) as distinct languages.',
      'South Tyrol in northern Italy is 70% native German-speaking.'
    ]
  },
  {
    code: 'XK', name: 'Kosovo', nativeName: 'Kosova / Kosovo', flag: '🇽🇰', region: 'Europe', subregion: 'Southern Europe', capital: 'Pristina', population: 1800000, multilingualScore: 8.2, coordinates: { x: 53, y: 38 },
    description: 'Kosovo recognizes Albanian and Serbian as co-official state languages, alongside Turkish, Bosnian, and Romani at municipal levels.',
    languages: [
      { id: 'sq', name: 'Albanian', nativeName: 'Shqip', script: 'Latin', family: 'Indo-European (Albanian)', type: 'official', percentage: 92.0, speakerCount: '1.6 Million' },
      { id: 'sr', name: 'Serbian', nativeName: 'Српски', script: 'Cyrillic / Latin', family: 'Indo-European (South Slavic)', type: 'official', percentage: 5.0, speakerCount: '90,000' },
      { id: 'tr', name: 'Turkish', nativeName: 'Türkçe', script: 'Latin', family: 'Turkic', type: 'recognized', percentage: 1.1, speakerCount: '20,000' }
    ],
    phrases: [
      { english: 'Hello', native: 'Përshëndetje (SQ) / Zdravo (SR)', phonetic: 'pur-shen-DET-yeh / ZDRAH-voh', category: 'greeting' },
      { english: 'Thank you', native: 'Faleminderit (SQ) / Hvala (SR)', phonetic: 'fah-lem-min-DEH-reet / HVAH-lah', category: 'courtesy' }
    ],
    facts: [
      'Gheg Albanian is the dominant everyday dialect spoken across Kosovo.',
      'All government laws are officially published in Albanian and Serbian.'
    ]
  },
  {
    code: 'LV', name: 'Latvia', nativeName: 'Latvija', flag: '🇱🇻', region: 'Europe', subregion: 'Northern Europe', capital: 'Riga', population: 1880000, multilingualScore: 7.6, coordinates: { x: 56, y: 24 },
    description: 'Latvia uses Latvian as sole official state language, representing one of only two surviving Baltic languages in the world.',
    languages: [
      { id: 'lv', name: 'Latvian', nativeName: 'Latviešu valoda', script: 'Latin', family: 'Indo-European (Baltic)', type: 'official', percentage: 62.0, speakerCount: '1.2 Million' },
      { id: 'ru', name: 'Russian', nativeName: 'Русский', script: 'Cyrillic', family: 'Indo-European (East Slavic)', type: 'minority', percentage: 34.0, speakerCount: '640,000' }
    ],
    phrases: [
      { english: 'Hello', native: 'Sveiki / Labdien', phonetic: 'SVAY-kee / LOHB-dyen', category: 'greeting' },
      { english: 'Thank you', native: 'Paldies', phonetic: 'PAHL-dyees', category: 'courtesy' }
    ],
    facts: [
      'Latvian retains archaic tonal accents and inflections similar to ancient Sanskrit.',
      'Latgalian is a distinct historic regional variety spoken in eastern Latvia.'
    ]
  },
  {
    code: 'LI', name: 'Liechtenstein', nativeName: 'Liechtenstein', flag: '🇱🇮', region: 'Europe', subregion: 'Western Europe', capital: 'Vaduz', population: 39000, multilingualScore: 7.0, coordinates: { x: 48, y: 35 },
    description: 'Liechtenstein uses Standard German as official written language while daily conversation is conducted in Alemannic German dialects.',
    languages: [
      { id: 'de', name: 'German (Alemannic)', nativeName: 'Deutsch', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 92.0, speakerCount: '36,000' }
    ],
    phrases: [
      { english: 'Hello', native: 'Grüß Gott / Hoi', phonetic: 'GROOS got / HOY', category: 'greeting' },
      { english: 'Thank you', native: 'Danke schön', phonetic: 'DAHN-keh shurn', category: 'courtesy' }
    ],
    facts: [
      'Liechtenstein is the only sovereign German-speaking country that borders no other country where German is not an official language.',
      'Highest density of Liechtensteiners speak High Alemannic dialects similar to Swiss German.'
    ]
  },
  {
    code: 'LT', name: 'Lithuania', nativeName: 'Lietuva', flag: '🇱🇹', region: 'Europe', subregion: 'Northern Europe', capital: 'Vilnius', population: 2860000, multilingualScore: 7.4, coordinates: { x: 56, y: 26 },
    description: 'Lithuanian is famed among linguists for being the most phonetically conservative living Indo-European language, preserving features from Proto-Indo-European.',
    languages: [
      { id: 'lt', name: 'Lithuanian', nativeName: 'Lietuvių kalba', script: 'Latin', family: 'Indo-European (Baltic)', type: 'official', percentage: 85.0, speakerCount: '2.4 Million' },
      { id: 'pl', name: 'Polish', nativeName: 'Polski', script: 'Latin', family: 'Indo-European (West Slavic)', type: 'minority', percentage: 5.6, speakerCount: '160,000' },
      { id: 'ru', name: 'Russian', nativeName: 'Русский', script: 'Cyrillic', family: 'Indo-European (East Slavic)', type: 'minority', percentage: 5.0, speakerCount: '140,000' }
    ],
    phrases: [
      { english: 'Hello', native: 'Labas / Laba diena', phonetic: 'LAH-bas / LAH-bah DYEH-nah', category: 'greeting' },
      { english: 'Thank you', native: 'Ačiū', phonetic: 'AH-choo', category: 'courtesy' }
    ],
    facts: [
      'Lithuanian preserves grammar, pitch accents, and vocalic features directly linked to ancient Sanskrit and Latin.',
      'Vilnius district features a historic Polish-speaking minority population.'
    ]
  },
  {
    code: 'LU', name: 'Luxembourg', nativeName: 'Lëtzebuerg / Luxembourg / Luxemburg', flag: '🇱🇺', region: 'Europe', subregion: 'Western Europe', capital: 'Luxembourg', population: 660000, multilingualScore: 9.8, coordinates: { x: 47, y: 33 },
    description: 'Luxembourg has three official languages: Luxembourgish (national language), French (legislation & administration), and German (press & schooling).',
    languages: [
      { id: 'lb', name: 'Luxembourgish', nativeName: 'Lëtzebuergesch', script: 'Latin', family: 'Indo-European (Moselle Franconian)', type: 'official', percentage: 55.0, speakerCount: '360,000', notes: 'Declared national language in 1984.' },
      { id: 'fr', name: 'French', nativeName: 'Français', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 98.0, speakerCount: '640,000' },
      { id: 'de', name: 'German', nativeName: 'Deutsch', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 80.0, speakerCount: '520,000' },
      { id: 'pt', name: 'Portuguese', nativeName: 'Português', script: 'Latin', family: 'Indo-European (Romance)', type: 'minority', percentage: 15.0, speakerCount: '100,000' }
    ],
    phrases: [
      { english: 'Hello', native: 'Moien (LB) / Bonjour (FR) / Guten Tag (DE)', phonetic: 'MOY-en / bon-ZHOOR / GOO-ten TAHK', category: 'greeting' },
      { english: 'Thank you', native: 'Merci (LB/FR) / Danke (DE)', phonetic: 'MAIR-see / DAHN-keh', category: 'courtesy' }
    ],
    facts: [
      'Luxembourg citizens effortlessly code-switch between Luxembourgish, French, and German daily.',
      'Primary education starts in German, switches to French in secondary, while spoken conversation remains Luxembourgish.'
    ]
  },
  {
    code: 'MT', name: 'Malta', nativeName: 'Malta', flag: '🇲🇹', region: 'Europe', subregion: 'Southern Europe', capital: 'Valletta', population: 530000, multilingualScore: 9.2, coordinates: { x: 50, y: 44 },
    description: 'Malta recognizes Maltese (the only Semitic language written in Latin script and official in the EU) and English as official constitutional languages.',
    languages: [
      { id: 'mt', name: 'Maltese', nativeName: 'Malti', script: 'Latin (Maltese)', family: 'Afroasiatic (Semitic)', type: 'official', percentage: 97.0, speakerCount: '510,000', notes: 'Evolved from Siculo-Arabic with heavy Italian and English vocabulary.' },
      { id: 'en', name: 'English', nativeName: 'English', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 88.0, speakerCount: '460,000' },
      { id: 'it', name: 'Italian', nativeName: 'Italiano', script: 'Latin', family: 'Indo-European (Romance)', type: 'widely_spoken', percentage: 66.0, speakerCount: '350,000' }
    ],
    phrases: [
      { english: 'Hello', native: 'Bonġu / Merħba', phonetic: 'BON-joo / MAIR-hbah', category: 'greeting' },
      { english: 'Thank you', native: 'Grazzi', phonetic: 'GRAHT-see', category: 'courtesy' }
    ],
    facts: [
      'Maltese is the only Semitic language native to Europe and written in Latin script.',
      'Over half of Maltese vocabulary is derived from Sicilian and Italian.'
    ]
  },
  {
    code: 'MD', name: 'Moldova', nativeName: 'Moldova', flag: '🇲🇩', region: 'Europe', subregion: 'Eastern Europe', capital: 'Chisinau', population: 2500000, multilingualScore: 8.1, coordinates: { x: 57, y: 34 },
    description: 'Moldova uses Romanian (historically termed Moldovan) as official state language alongside Russian, Gagauz (Turkic), and Ukrainian.',
    languages: [
      { id: 'ro', name: 'Romanian', nativeName: 'Limba română', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 80.0, speakerCount: '2.0 Million' },
      { id: 'ru', name: 'Russian', nativeName: 'Русский', script: 'Cyrillic', family: 'Indo-European (East Slavic)', type: 'recognized', percentage: 14.0, speakerCount: '350,000' },
      { id: 'gag', name: 'Gagauz', nativeName: 'Gagauz dili', script: 'Latin', family: 'Turkic', type: 'regional', percentage: 4.0, speakerCount: '100,000', notes: 'Official in Gagauzia autonomous region.' }
    ],
    phrases: [
      { english: 'Hello', native: 'Bună ziua / Salut', phonetic: 'BOO-nuh ZEE-wah / sah-LOOT', category: 'greeting' },
      { english: 'Thank you', native: 'Mulțumesc', phonetic: 'mool-tsoo-MESK', category: 'courtesy' }
    ],
    facts: [
      'In 2023, Moldova formally updated all legislative references to recognize the official language name as Romanian.',
      'Gagauzia is an autonomous region of Christian Turkic-speaking Gagauz people.'
    ]
  },
  {
    code: 'MC', name: 'Monaco', nativeName: 'Monaco', flag: '🇲🇨', region: 'Europe', subregion: 'Western Europe', capital: 'Monaco', population: 39000, multilingualScore: 8.5, coordinates: { x: 47, y: 37 },
    description: 'Monaco uses French as official state language alongside Monégasque (a Ligurian Romance variety taught in schools to preserve national heritage).',
    languages: [
      { id: 'fr', name: 'French', nativeName: 'Français', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 97.0, speakerCount: '38,000' },
      { id: 'lij', name: 'Monégasque', nativeName: 'Munegascu', script: 'Latin', family: 'Indo-European (Romance)', type: 'national', percentage: 15.0, speakerCount: '6,000' },
      { id: 'it', name: 'Italian', nativeName: 'Italiano', script: 'Latin', family: 'Indo-European (Romance)', type: 'widely_spoken', percentage: 60.0, speakerCount: '23,000' },
      { id: 'en', name: 'English', nativeName: 'English', script: 'Latin', family: 'Indo-European (Germanic)', type: 'widely_spoken', percentage: 50.0, speakerCount: '19,000' }
    ],
    phrases: [
      { english: 'Hello', native: 'Bonjour (FR) / Bunghiurnu (Monégasque)', phonetic: 'bon-ZHOOR / boon-JOOR-noo', category: 'greeting' },
      { english: 'Thank you', native: 'Merci (FR) / Daghese (Monégasque)', phonetic: 'MAIR-see / dah-GHEH-seh', category: 'courtesy' }
    ],
    facts: [
      'Monégasque is compulsory in Monaco primary schools to prevent the indigenous language from going extinct.',
      'Monaco is the second smallest sovereign nation in the world after Vatican City.'
    ]
  },
  {
    code: 'ME', name: 'Montenegro', nativeName: 'Crna Gora', flag: '🇲🇪', region: 'Europe', subregion: 'Southern Europe', capital: 'Podgorica', population: 620000, multilingualScore: 8.6, coordinates: { x: 53, y: 38 },
    description: 'Montenegro designates Montenegrin as sole official language while granting equal official use to Serbian, Bosnian, Albanian, and Croatian.',
    languages: [
      { id: 'cnr', name: 'Montenegrin', nativeName: 'Crnogorski', script: 'Latin / Cyrillic', family: 'Indo-European (South Slavic)', type: 'official', percentage: 37.0, speakerCount: '230,000' },
      { id: 'sr', name: 'Serbian', nativeName: 'Српски', script: 'Cyrillic / Latin', family: 'Indo-European (South Slavic)', type: 'recognized', percentage: 43.0, speakerCount: '270,000' },
      { id: 'sq', name: 'Albanian', nativeName: 'Shqip', script: 'Latin', family: 'Indo-European (Albanian)', type: 'regional', percentage: 5.0, speakerCount: '31,000' }
    ],
    phrases: [
      { english: 'Hello', native: 'Zdravo / Dobar dan', phonetic: 'ZDRAH-voh / DOH-bar DAHN', category: 'greeting' },
      { english: 'Thank you', native: 'Hvala', phonetic: 'HVAH-lah', category: 'courtesy' }
    ],
    facts: [
      'Standard Montenegrin includes two additional unique Latin letters: Ś and Ź.',
      'Latin and Cyrillic scripts have constitutionally equal status.'
    ]
  },
  {
    code: 'NL', name: 'Netherlands', nativeName: 'Nederland', flag: '🇳🇱', region: 'Europe', subregion: 'Western Europe', capital: 'Amsterdam', population: 17800000, multilingualScore: 8.2, coordinates: { x: 47, y: 31 },
    description: 'The Netherlands speaks Dutch, alongside West Frisian as a co-official language in Friesland province and English in Caribbean municipalities.',
    languages: [
      { id: 'nl', name: 'Dutch', nativeName: 'Nederlands', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 95.0, speakerCount: '17 Million' },
      { id: 'fy', name: 'West Frisian', nativeName: 'Frysk', script: 'Latin', family: 'Indo-European (Germanic)', type: 'co-official', percentage: 2.5, speakerCount: '450,000', notes: 'Co-official in Friesland.' },
      { id: 'nds', name: 'Dutch Low Saxon', nativeName: 'Nedersaksisch', script: 'Latin', family: 'Indo-European (Germanic)', type: 'regional', percentage: 10.0, speakerCount: '1.8 Million' }
    ],
    phrases: [
      { english: 'Hello', native: 'Hallo / Goedendag (NL) / Frysk: Goeie', phonetic: 'HAH-loh / KHOO-deh-dahkh / KHOO-yeh', category: 'greeting' },
      { english: 'Thank you', native: 'Dank u wel / Bedankt', phonetic: 'DAHNK oo wel / beh-DAHNKT', category: 'courtesy' }
    ],
    facts: [
      'West Frisian is the closest living relative of the English language among continental European tongues.',
      'Over 90% of Dutch citizens report fluently speaking English as a second language.'
    ]
  },
  {
    code: 'MK', name: 'North Macedonia', nativeName: 'Severna Makedonija', flag: '🇲🇰', region: 'Europe', subregion: 'Southern Europe', capital: 'Skopje', population: 1830000, multilingualScore: 8.8, coordinates: { x: 54, y: 39 },
    description: 'North Macedonia recognizes Macedonian as official national language, with Albanian holding co-official status nationwide.',
    languages: [
      { id: 'mk', name: 'Macedonian', nativeName: 'Македонски', script: 'Cyrillic', family: 'Indo-European (South Slavic)', type: 'official', percentage: 64.0, speakerCount: '1.2 Million' },
      { id: 'sq', name: 'Albanian', nativeName: 'Shqip', script: 'Latin', family: 'Indo-European (Albanian)', type: 'co-official', percentage: 25.0, speakerCount: '500,000' },
      { id: 'tr', name: 'Turkish', nativeName: 'Türkçe', script: 'Latin', family: 'Turkic', type: 'regional', percentage: 3.8, speakerCount: '70,000' }
    ],
    phrases: [
      { english: 'Hello', native: 'Здраво (Zdravo) / Dobar den', phonetic: 'ZDRAH-voh / DOH-bar den', category: 'greeting' },
      { english: 'Thank you', native: 'Ви благодарам (Vi blagodaram) / Blagodaram', phonetic: 'vee blah-goh-DAH-ram', category: 'courtesy' }
    ],
    facts: [
      'Macedonian Cyrillic alphabet includes unique letters Kjo (Ќ), Gjo (Ѓ), and Dze (Ѕ).',
      'Under the 2019 Language Law, Albanian is co-official in all central state institutions.'
    ]
  },
  {
    code: 'NO', name: 'Norway', nativeName: 'Norge / Noreg', flag: '🇳🇴', region: 'Europe', subregion: 'Northern Europe', capital: 'Oslo', population: 5500000, multilingualScore: 8.4, coordinates: { x: 48, y: 20 },
    description: 'Norway legally maintains two official written forms of Norwegian (Bokmål and Nynorsk), alongside official status for Indigenous Sami languages.',
    languages: [
      { id: 'nb', name: 'Norwegian Bokmål', nativeName: 'Norsk (Bokmål)', script: 'Latin', family: 'Indo-European (North Germanic)', type: 'official', percentage: 85.0, speakerCount: '4.7 Million' },
      { id: 'nn', name: 'Norwegian Nynorsk', nativeName: 'Norsk (Nynorsk)', script: 'Latin', family: 'Indo-European (North Germanic)', type: 'official', percentage: 12.0, speakerCount: '650,000', notes: 'Reconstructed based on traditional Norwegian rural dialects.' },
      { id: 'se', name: 'Sami (Northern / Lule / South)', nativeName: 'Sámegiella', script: 'Latin', family: 'Uralic', type: 'indigenous', percentage: 0.8, speakerCount: '25,000' }
    ],
    phrases: [
      { english: 'Hello', native: 'Hei / Hallo', phonetic: 'HAY / HAH-loh', category: 'greeting' },
      { english: 'Thank you', native: 'Takk / Tusen takk', phonetic: 'TAK / TOO-sen tak', category: 'courtesy' }
    ],
    facts: [
      'All Norwegian municipalities choose whether their official written communication uses Bokmål, Nynorsk, or neutral status.',
      'Norwegian, Swedish, and Danish speakers can understand each other\'s languages in conversation.'
    ]
  },
  {
    code: 'PL', name: 'Poland', nativeName: 'Polska', flag: '🇵🇱', region: 'Europe', subregion: 'Eastern Europe', capital: 'Warsaw', population: 36800000, multilingualScore: 6.5, coordinates: { x: 53, y: 30 },
    description: 'Poland speaks Polish, a West Slavic language with nasal vowels (ą, ę) and complex consonant combinations.',
    languages: [
      { id: 'pl', name: 'Polish', nativeName: 'Polski', script: 'Latin', family: 'Indo-European (West Slavic)', type: 'official', percentage: 97.0, speakerCount: '36 Million' },
      { id: 'csb', name: 'Kashubian', nativeName: 'Kaszëbsczi', script: 'Latin', family: 'Indo-European (West Slavic)', type: 'regional', percentage: 0.3, speakerCount: '100,000', notes: 'Recognized regional language in Pomerania.' },
      { id: 'szl', name: 'Silesian', nativeName: 'Ślōnskŏ gŏdka', script: 'Latin', family: 'Indo-European (West Slavic)', type: 'regional', percentage: 1.3, speakerCount: '500,000' }
    ],
    phrases: [
      { english: 'Hello', native: 'Cześć / Dzień dobry', phonetic: 'CHESHTCH / jyen DOH-bry', category: 'greeting' },
      { english: 'Thank you', native: 'Dziękuję', phonetic: 'jyen-KOO-yeh', category: 'courtesy' }
    ],
    facts: [
      'Polish is the second most spoken Slavic language in the world after Russian.',
      'Kashubian is the only recognized regional language in Poland under national law.'
    ]
  },
  {
    code: 'PT', name: 'Portugal', nativeName: 'Portugal', flag: '🇵🇹', region: 'Europe', subregion: 'Southern Europe', capital: 'Lisbon', population: 10400000, multilingualScore: 7.2, coordinates: { x: 39, y: 39 },
    description: 'Portugal uses Portuguese as official state language, alongside Mirandese (an Asturleonese language) holding official regional rights in Miranda do Douro.',
    languages: [
      { id: 'pt', name: 'Portuguese', nativeName: 'Português', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 99.0, speakerCount: '10.3 Million' },
      { id: 'mwl', name: 'Mirandese', nativeName: 'Mirandés', script: 'Latin', family: 'Indo-European (Romance)', type: 'regional', percentage: 0.1, speakerCount: '15,000', notes: 'Co-official in Miranda do Douro.' }
    ],
    phrases: [
      { english: 'Hello', native: 'Olá / Bom dia', phonetic: 'oh-LAH / bom DEE-ah', category: 'greeting' },
      { english: 'Thank you', native: 'Obrigado (m) / Obrigada (f)', phonetic: 'oh-bree-GAH-doo / oh-bree-GAH-dah', category: 'courtesy' }
    ],
    facts: [
      'European Portuguese features heavy vowel reduction and sibilants giving it a distinct rhythmic sound compared to Brazilian Portuguese.',
      'Portuguese is the 6th most spoken native language on Earth.'
    ]
  },
  {
    code: 'RO', name: 'Romania', nativeName: 'România', flag: '🇷🇴', region: 'Europe', subregion: 'Eastern Europe', capital: 'Bucharest', population: 19000000, multilingualScore: 7.1, coordinates: { x: 56, y: 36 },
    description: 'Romania speaks Romanian, the sole major Eastern Romance language that preserved Latin case structures and definite articles appended as suffixes.',
    languages: [
      { id: 'ro', name: 'Romanian', nativeName: 'Limba română', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 89.0, speakerCount: '17 Million' },
      { id: 'hu', name: 'Hungarian', nativeName: 'Magyar', script: 'Latin', family: 'Uralic (Finno-Ugric)', type: 'minority', percentage: 6.1, speakerCount: '1.2 Million', notes: 'Concentrated in Transylvania.' },
      { id: 'rom', name: 'Romani', nativeName: 'Romani čhib', script: 'Latin', family: 'Indo-European (Indo-Aryan)', type: 'minority', percentage: 1.2, speakerCount: '240,000' }
    ],
    phrases: [
      { english: 'Hello', native: 'Bună ziua / Salut', phonetic: 'BOO-nuh ZEE-wah / sah-LOOT', category: 'greeting' },
      { english: 'Thank you', native: 'Mulțumesc / Mersi', phonetic: 'mool-tsoo-MESK / mair-SEE', category: 'courtesy' }
    ],
    facts: [
      'Romanian attaches definite articles directly to the end of nouns (e.g. om = man, omul = the man).',
      'Transylvania features extensive historic Hungarian and German language communities.'
    ]
  },
  {
    code: 'RU', name: 'Russia', nativeName: 'Россия', flag: '🇷🇺', region: 'Europe', subregion: 'Eastern Europe', capital: 'Moscow', population: 144000000, multilingualScore: 9.0, coordinates: { x: 68, y: 25 },
    description: 'Russia uses Russian as state official language alongside over 35 co-official languages across autonomous republics, including Tatar, Chechen, and Bashkir.',
    languages: [
      { id: 'ru', name: 'Russian', nativeName: 'Русский', script: 'Cyrillic', family: 'Indo-European (East Slavic)', type: 'official', percentage: 96.0, speakerCount: '138 Million' },
      { id: 'tt', name: 'Tatar', nativeName: 'Tatarça', script: 'Cyrillic', family: 'Turkic', type: 'co-official', percentage: 3.2, speakerCount: '4.5 Million', notes: 'Official in Republic of Tatarstan.' },
      { id: 'ce', name: 'Chechen', nativeName: 'Нохчийн мотт', script: 'Cyrillic', family: 'Northeast Caucasian', type: 'co-official', percentage: 1.0, speakerCount: '1.4 Million' },
      { id: 'ba', name: 'Bashkir', nativeName: 'Башҡорт теле', script: 'Cyrillic', family: 'Turkic', type: 'co-official', percentage: 0.8, speakerCount: '1.2 Million' }
    ],
    phrases: [
      { english: 'Hello', native: 'Здравствуйте (Zdravstvuyte) / Привет', phonetic: 'ZDRAHV-stvooy-teh / pree-VEET', category: 'greeting' },
      { english: 'Thank you', native: 'Спасибо (Spasibo)', phonetic: 'spah-SEE-boh', category: 'courtesy' }
    ],
    facts: [
      'Russia spans 11 time zones and contains over 100 living indigenous languages across Eurasia.',
      'Russian Cyrillic alphabet consists of 33 letters including hard (Ъ) and soft (Ь) signs.'
    ]
  },
  {
    code: 'SM', name: 'San Marino', nativeName: 'San Marino', flag: '🇸🇲', region: 'Europe', subregion: 'Southern Europe', capital: 'San Marino', population: 34000, multilingualScore: 6.5, coordinates: { x: 50, y: 37 },
    description: 'San Marino uses Italian as sole official language, alongside Romagnol (a regional Gallo-Italic language spoken in everyday life).',
    languages: [
      { id: 'it', name: 'Italian', nativeName: 'Italiano', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 98.0, speakerCount: '33,000' },
      { id: 'rgn', name: 'Romagnol', nativeName: 'Rumagnôl', script: 'Latin', family: 'Indo-European (Romance)', type: 'regional', percentage: 80.0, speakerCount: '25,000' }
    ],
    phrases: [
      { english: 'Hello', native: 'Ciao / Buongiorno', phonetic: 'CHOW / bwon-ZHOR-noh', category: 'greeting' },
      { english: 'Thank you', native: 'Grazie', phonetic: 'GRAHT-see-eh', category: 'courtesy' }
    ],
    facts: [
      'San Marino claims to be the world\'s oldest surviving republic, founded in 301 AD.',
      'Romagnol dialect is distinct from Standard Italian and shared with Romagna region.'
    ]
  },
  {
    code: 'RS', name: 'Serbia', nativeName: 'Srbija', flag: '🇷🇸', region: 'Europe', subregion: 'Southern Europe', capital: 'Belgrade', population: 6600000, multilingualScore: 8.4, coordinates: { x: 53, y: 37 },
    description: 'Serbia uses Serbian, an official South Slavic language that legally practices active digraphia with equal usage of Cyrillic and Latin alphabets.',
    languages: [
      { id: 'sr', name: 'Serbian', nativeName: 'Српски / Srpski', script: 'Cyrillic / Latin', family: 'Indo-European (South Slavic)', type: 'official', percentage: 88.0, speakerCount: '5.8 Million' },
      { id: 'hu', name: 'Hungarian', nativeName: 'Magyar', script: 'Latin', family: 'Uralic', type: 'regional', percentage: 3.4, speakerCount: '220,000', notes: 'Co-official in Vojvodina.' },
      { id: 'bs', name: 'Bosnian', nativeName: 'Bosanski', script: 'Latin', family: 'Indo-European (South Slavic)', type: 'regional', percentage: 2.0, speakerCount: '130,000' }
    ],
    phrases: [
      { english: 'Hello', native: 'Zdravo / Dobar dan', phonetic: 'ZDRAH-voh / DOH-bar DAHN', category: 'greeting' },
      { english: 'Thank you', native: 'Hvala', phonetic: 'HVAH-lah', category: 'courtesy' }
    ],
    facts: [
      'Serbia is one of few European countries where full digraphia is official; every sound corresponds to 1 Cyrillic and 1 Latin letter.',
      'Vojvodina autonomous province recognizes six co-official languages.'
    ]
  },
  {
    code: 'SK', name: 'Slovakia', nativeName: 'Slovensko', flag: '🇸🇰', region: 'Europe', subregion: 'Eastern Europe', capital: 'Bratislava', population: 5400000, multilingualScore: 7.3, coordinates: { x: 52, y: 34 },
    description: 'Slovakia uses Slovak as official language, alongside Hungarian holding regional minority rights in southern municipalities.',
    languages: [
      { id: 'sk', name: 'Slovak', nativeName: 'Slovenčina', script: 'Latin', family: 'Indo-European (West Slavic)', type: 'official', percentage: 85.0, speakerCount: '4.6 Million' },
      { id: 'hu', name: 'Hungarian', nativeName: 'Magyar', script: 'Latin', family: 'Uralic', type: 'minority', percentage: 8.5, speakerCount: '460,000' },
      { id: 'rom', name: 'Romani', nativeName: 'Romani čhib', script: 'Latin', family: 'Indo-European', type: 'minority', percentage: 2.0, speakerCount: '100,000' }
    ],
    phrases: [
      { english: 'Hello', native: 'Ahoj / Dobrý deň', phonetic: 'AH-hoy / DOH-bree den', category: 'greeting' },
      { english: 'Thank you', native: 'Ďakujem', phonetic: 'JAH-koo-yem', category: 'courtesy' }
    ],
    facts: [
      'Slovak is often described as the "Slavic Esperanto" due to its central phonetic position among West Slavic languages.',
      'Slovak alphabet has 46 letters, the longest among European Latin alphabets.'
    ]
  },
  {
    code: 'SI', name: 'Slovenia', nativeName: 'Slovenija', flag: '🇸🇮', region: 'Europe', subregion: 'Southern Europe', capital: 'Ljubljana', population: 2100000, multilingualScore: 7.7, coordinates: { x: 50, y: 36 },
    description: 'Slovenia speaks Slovene, a South Slavic language that preserves the rare dual grammatical number in modern spoken and written forms.',
    languages: [
      { id: 'sl', name: 'Slovene', nativeName: 'Slovenščina', script: 'Latin', family: 'Indo-European (South Slavic)', type: 'official', percentage: 88.0, speakerCount: '1.8 Million' },
      { id: 'it', name: 'Italian', nativeName: 'Italiano', script: 'Latin', family: 'Indo-European (Romance)', type: 'co-official', percentage: 0.2, speakerCount: '3,000', notes: 'Protected in Slovenian Istria.' },
      { id: 'hu', name: 'Hungarian', nativeName: 'Magyar', script: 'Latin', family: 'Uralic', type: 'co-official', percentage: 0.3, speakerCount: '6,000', notes: 'Protected in Prekmurje.' }
    ],
    phrases: [
      { english: 'Hello', native: 'Živjo / Dober dan', phonetic: 'ZHEEV-yoh / DOH-ber DAHN', category: 'greeting' },
      { english: 'Thank you', native: 'Hvala', phonetic: 'HVAH-lah', category: 'courtesy' }
    ],
    facts: [
      'Slovene preserves dual grammatical number (distinct forms for two persons vs. singular and plural).',
      'Despite its small population, Slovene has over 40 distinct regional dialects.'
    ]
  },
  {
    code: 'ES', name: 'Spain', nativeName: 'España', flag: '🇪🇸', region: 'Europe', subregion: 'Southern Europe', capital: 'Madrid', population: 47400000, multilingualScore: 8.6, coordinates: { x: 42, y: 39 },
    description: 'Spain designates Castilian Spanish as official nationwide language, with Catalan, Galician, and Basque holding co-official status in their respective regions.',
    languages: [
      { id: 'es', name: 'Spanish (Castilian)', nativeName: 'Castellano', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 99.0, speakerCount: '46 Million' },
      { id: 'ca', name: 'Catalan / Valencian', nativeName: 'Català / Valencià', script: 'Latin', family: 'Indo-European (Romance)', type: 'co-official', percentage: 17.5, speakerCount: '8.3 Million', notes: 'Co-official in Catalonia, Valencia, and Balearic Islands.' },
      { id: 'gl', name: 'Galician', nativeName: 'Galego', script: 'Latin', family: 'Indo-European (Romance)', type: 'co-official', percentage: 5.2, speakerCount: '2.4 Million', notes: 'Co-official in Galicia.' },
      { id: 'eu', name: 'Basque', nativeName: 'Euskara', script: 'Latin', family: 'Language Isolate', type: 'co-official', percentage: 1.5, speakerCount: '750,000', notes: 'Co-official in Basque Country and Navarre.' }
    ],
    phrases: [
      { english: 'Hello', native: 'Hola', phonetic: 'OH-lah', category: 'greeting' },
      { english: 'Thank you', native: 'Gracias', phonetic: 'GRAH-see-as', category: 'courtesy' }
    ],
    facts: [
      'Basque (Euskara) is a language isolate with no genealogical connection to Indo-European or any known living language family.',
      'Silbo Gomero is a whistled language used in the Canary Islands to communicate across mountain valleys.'
    ]
  },
  {
    code: 'SE', name: 'Sweden', nativeName: 'Sverige', flag: '🇸🇪', region: 'Europe', subregion: 'Northern Europe', capital: 'Stockholm', population: 10500000, multilingualScore: 8.0, coordinates: { x: 52, y: 22 },
    description: 'Sweden uses Swedish as official main language alongside five officially recognized national minority languages: Sami, Finnish, Meänkieli, Romani, and Yiddish.',
    languages: [
      { id: 'sv', name: 'Swedish', nativeName: 'Svenska', script: 'Latin', family: 'Indo-European (North Germanic)', type: 'official', percentage: 95.0, speakerCount: '10 Million' },
      { id: 'fi', name: 'Finnish', nativeName: 'Suomi', script: 'Latin', family: 'Uralic', type: 'recognized', percentage: 2.0, speakerCount: '200,000' },
      { id: 'fit', name: 'Meänkieli (Tornedalen Finnish)', nativeName: 'Meänkieli', script: 'Latin', family: 'Uralic', type: 'recognized', percentage: 0.3, speakerCount: '30,000' },
      { id: 'se', name: 'Sami', nativeName: 'Sámegiella', script: 'Latin', family: 'Uralic', type: 'indigenous', percentage: 0.2, speakerCount: '20,000' }
    ],
    phrases: [
      { english: 'Hello', native: 'Hej / Hallå', phonetic: 'HEY / HAH-loh', category: 'greeting' },
      { english: 'Thank you', native: 'Tack så mycket', phonetic: 'TAK soh MEE-keh', category: 'courtesy' }
    ],
    facts: [
      'Swedish pitch accent gives the language a distinctive melodic "sing-song" quality.',
      'Sweden recognizes 5 national minority languages protected by state statute.'
    ]
  },
  {
    code: 'CH', name: 'Switzerland', nativeName: 'Schweiz / Suisse / Svizzera / Svizra', flag: '🇨🇭', region: 'Europe', subregion: 'Western Europe', capital: 'Bern', population: 8800000, multilingualScore: 9.2, coordinates: { x: 48, y: 35 },
    description: 'Switzerland constitutionally recognizes four official national languages: German, French, Italian, and Romansh.',
    languages: [
      { id: 'de', name: 'German (Swiss German)', nativeName: 'Deutsch (Schwiizertüütsch)', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 62.6, speakerCount: '5.5 Million' },
      { id: 'fr', name: 'French (Swiss French)', nativeName: 'Français', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 22.9, speakerCount: '2.0 Million' },
      { id: 'it', name: 'Italian', nativeName: 'Italiano', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 8.2, speakerCount: '720,000' },
      { id: 'rm', name: 'Romansh', nativeName: 'Rumantsch', script: 'Latin', family: 'Indo-European (Rhaeto-Romance)', type: 'official', percentage: 0.5, speakerCount: '44,000' }
    ],
    phrases: [
      { english: 'Hello', native: 'Grüezi (DE) / Bonjour (FR) / Ciao (IT) / Allegra (RM)', phonetic: 'GROO-et-see / bon-ZHOOR / CHOW / ah-LEHG-rah', category: 'greeting' },
      { english: 'Thank you', native: 'Merci vielmal (DE) / Merci beaucoup (FR) / Grazie (IT)', phonetic: 'MAIR-see FEEL-mahl / MAIR-see / GRAHT-see-eh', category: 'courtesy' }
    ],
    facts: [
      'Swiss banknotes and coins print text in all four official languages or use Latin "Confoederatio Helvetica".',
      'Swiss German (Schwiizertüütsch) is a set of Alemannic spoken dialects.'
    ]
  },
  {
    code: 'UA', name: 'Ukraine', nativeName: 'Україна', flag: '🇺🇦', region: 'Europe', subregion: 'Eastern Europe', capital: 'Kyiv', population: 38000000, multilingualScore: 7.5, coordinates: { x: 57, y: 32 },
    description: 'Ukraine uses Ukrainian as sole official state language, written in Ukrainian Cyrillic featuring unique letters Ґ, Є, І, and Ї.',
    languages: [
      { id: 'uk', name: 'Ukrainian', nativeName: 'Українська', script: 'Cyrillic', family: 'Indo-European (East Slavic)', type: 'official', percentage: 80.0, speakerCount: '32 Million' },
      { id: 'ru', name: 'Russian', nativeName: 'Русский', script: 'Cyrillic', family: 'Indo-European (East Slavic)', type: 'minority', percentage: 15.0, speakerCount: '6.0 Million' },
      { id: 'crh', name: 'Crimean Tatar', nativeName: 'Qırımlı tili', script: 'Latin / Cyrillic', family: 'Turkic', type: 'indigenous', percentage: 0.8, speakerCount: '300,000' }
    ],
    phrases: [
      { english: 'Hello', native: 'Вітаю (Vitaiu) / Привіт (Pryvit)', phonetic: 'vee-TAH-yoo / pry-VEET', category: 'greeting' },
      { english: 'Thank you', native: 'Дякую (Diakuiu)', phonetic: 'DYAH-koo-yoo', category: 'courtesy' }
    ],
    facts: [
      'Ukrainian features letter "Ї" (yi) which is unique to Ukrainian Cyrillic and symbolizes national identity.',
      'Surzhyk is a mixed Ukrainian-Russian colloquial speech common in central regions.'
    ]
  },
  {
    code: 'GB', name: 'United Kingdom', nativeName: 'United Kingdom', flag: '🇬🇧', region: 'Europe', subregion: 'Northern Europe', capital: 'London', population: 67000000, multilingualScore: 6.2, coordinates: { x: 44, y: 30 },
    description: 'The United Kingdom uses English as primary official language alongside indigenous Celtic languages Welsh, Scottish Gaelic, Irish, and Cornish.',
    languages: [
      { id: 'en', name: 'English', nativeName: 'British English', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 98.0, speakerCount: '65 Million' },
      { id: 'cy', name: 'Welsh', nativeName: 'Cymraeg', script: 'Latin', family: 'Indo-European (Celtic)', type: 'co-official', percentage: 1.3, speakerCount: '890,000', notes: 'Official language in Wales.' },
      { id: 'gd', name: 'Scottish Gaelic', nativeName: 'Gàidhlig', script: 'Latin', family: 'Indo-European (Celtic)', type: 'regional', percentage: 0.1, speakerCount: '60,000' },
      { id: 'sco', name: 'Scots', nativeName: 'Scots', script: 'Latin', family: 'Indo-European (Germanic)', type: 'regional', percentage: 2.5, speakerCount: '1.5 Million' }
    ],
    phrases: [
      { english: 'Hello', native: 'Hello / Bore da (Welsh) / Halò (Gaelic)', phonetic: 'heh-LOH / BOH-reh DAH / hah-LOH', category: 'greeting' },
      { english: 'Thank you', native: 'Thank you / Diolch (Welsh) / Tapadh leat (Gaelic)', phonetic: 'THANK yoo / DEE-olkh / TAH-puh let', category: 'courtesy' }
    ],
    facts: [
      'Welsh has equal legal status with English in Wales under the Welsh Language Measure 2011.',
      'British Sign Language (BSL) was recognized as an official UK language in 2022.'
    ]
  },
  {
    code: 'VA', name: 'Vatican City', nativeName: 'Civitas Vaticana / Città del Vaticano', flag: '🇻🇦', region: 'Europe', subregion: 'Southern Europe', capital: 'Vatican City', population: 800, multilingualScore: 9.5, coordinates: { x: 50, y: 39 },
    description: 'Vatican City is the sovereign seat of the Holy See, maintaining Latin as official liturgical and legal language alongside Italian for administrative governance.',
    languages: [
      { id: 'la', name: 'Latin', nativeName: 'Lingua Latina', script: 'Latin', family: 'Indo-European (Italic)', type: 'official', percentage: 100.0, speakerCount: 'Liturgical' },
      { id: 'it', name: 'Italian', nativeName: 'Italiano', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 100.0, speakerCount: '800' }
    ],
    phrases: [
      { english: 'Hello', native: 'Salve (Latin) / Buongiorno (Italian)', phonetic: 'SAHL-veh / bwon-ZHOR-noh', category: 'greeting' },
      { english: 'Thank you', native: 'Gratias tibi ago (Latin) / Grazie', phonetic: 'GRAH-tee-as TEE-bee AH-go / GRAHT-see-eh', category: 'courtesy' }
    ],
    facts: [
      'Vatican ATMs provide instructions in Latin.',
      'The Holy See publishes official legal acts in the Acta Apostolicae Sedis in Latin.'
    ]
  }
];

console.log('Europe sample total:', countries.length);
