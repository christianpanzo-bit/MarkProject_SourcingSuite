const fs = require('fs');
const path = require('path');

const countries = [
  // --- EUROPE (44) ---
  { code: 'AL', name: 'Albania', nativeName: 'Shqipëria', flag: '🇦🇱', region: 'Europe', subregion: 'Southern Europe', capital: 'Tirana', population: 2750000, score: 7.2, x: 54, y: 39, langs: [
    { id: 'sq', name: 'Albanian', nativeName: 'Shqip', script: 'Latin', family: 'Indo-European (Albanian)', type: 'official', percentage: 98, speakerCount: '2.7 Million' }
  ], phrases: [{ english: 'Hello', native: 'Përshëndetje', phonetic: 'pur-shen-DET-yeh', category: 'greeting' }], facts: ['Albanian forms its own independent branch of Indo-European.'] },
  
  { code: 'AD', name: 'Andorra', nativeName: 'Andorra', flag: '🇦🇩', region: 'Europe', subregion: 'Southern Europe', capital: 'Andorra la Vella', population: 80000, score: 9.1, x: 44, y: 38, langs: [
    { id: 'ca', name: 'Catalan', nativeName: 'Català', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 38.8, speakerCount: '31,000' },
    { id: 'es', name: 'Spanish', nativeName: 'Español', script: 'Latin', family: 'Indo-European (Romance)', type: 'widely_spoken', percentage: 35.4, speakerCount: '28,000' }
  ], phrases: [{ english: 'Hello', native: 'Hola', phonetic: 'OH-lah', category: 'greeting' }], facts: ['Andorra is the only country where Catalan is sole official language.'] },

  { code: 'AT', name: 'Austria', nativeName: 'Österreich', flag: '🇦🇹', region: 'Europe', subregion: 'Western Europe', capital: 'Vienna', population: 9100000, score: 7.2, x: 50, y: 35, langs: [
    { id: 'de', name: 'German', nativeName: 'Deutsch', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 98, speakerCount: '8.9 Million' }
  ], phrases: [{ english: 'Hello', native: 'Grüß Gott', phonetic: 'GROOS got', category: 'greeting' }], facts: ['Austrian German has unique vocabulary in legal and culinary domains.'] },

  { code: 'BY', name: 'Belarus', nativeName: 'Belaruś', flag: '🇧🇾', region: 'Europe', subregion: 'Eastern Europe', capital: 'Minsk', population: 9200000, score: 8.0, x: 56, y: 28, langs: [
    { id: 'be', name: 'Belarusian', nativeName: 'Беларуская', script: 'Cyrillic', family: 'Indo-European (East Slavic)', type: 'official', percentage: 23, speakerCount: '2.1 Million' },
    { id: 'ru', name: 'Russian', nativeName: 'Русский', script: 'Cyrillic', family: 'Indo-European (East Slavic)', type: 'official', percentage: 70, speakerCount: '6.4 Million' }
  ], phrases: [{ english: 'Hello', native: 'Вітаю', phonetic: 'vee-TAH-yoo', category: 'greeting' }], facts: ['Belarusian alphabet uses short U letter "Ў".'] },

  { code: 'BE', name: 'Belgium', nativeName: 'België / Belgique', flag: '🇧🇪', region: 'Europe', subregion: 'Western Europe', capital: 'Brussels', population: 11700000, score: 9.4, x: 47, y: 33, langs: [
    { id: 'nl', name: 'Dutch', nativeName: 'Nederlands', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 59, speakerCount: '6.5 Million' },
    { id: 'fr', name: 'French', nativeName: 'Français', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 40, speakerCount: '4.5 Million' },
    { id: 'de', name: 'German', nativeName: 'Deutsch', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 1, speakerCount: '77,000' }
  ], phrases: [{ english: 'Hello', native: 'Hallo / Bonjour', phonetic: 'HAH-loh / bon-ZHOOR', category: 'greeting' }], facts: ['Belgium is divided into three official linguistic communities.'] },

  { code: 'BA', name: 'Bosnia and Herzegovina', nativeName: 'Bosna i Hercegovina', flag: '🇧🇦', region: 'Europe', subregion: 'Southern Europe', capital: 'Sarajevo', population: 3200000, score: 9.3, x: 52, y: 37, langs: [
    { id: 'bs', name: 'Bosnian', nativeName: 'Bosanski', script: 'Latin / Cyrillic', family: 'Indo-European (South Slavic)', type: 'official', percentage: 50.7, speakerCount: '1.6 Million' },
    { id: 'hr', name: 'Croatian', nativeName: 'Hrvatski', script: 'Latin', family: 'Indo-European (South Slavic)', type: 'official', percentage: 15.4, speakerCount: '500,000' },
    { id: 'sr', name: 'Serbian', nativeName: 'Српски', script: 'Cyrillic / Latin', family: 'Indo-European (South Slavic)', type: 'official', percentage: 30.7, speakerCount: '1.0 Million' }
  ], phrases: [{ english: 'Hello', native: 'Zdravo', phonetic: 'ZDRAH-voh', category: 'greeting' }], facts: ['Bosnian, Croatian, and Serbian are mutually intelligible.'] },

  { code: 'BG', name: 'Bulgaria', nativeName: 'България', flag: '🇧🇬', region: 'Europe', subregion: 'Eastern Europe', capital: 'Sofia', population: 6400000, score: 6.8, x: 56, y: 39, langs: [
    { id: 'bg', name: 'Bulgarian', nativeName: 'Български', script: 'Cyrillic', family: 'Indo-European (South Slavic)', type: 'official', percentage: 85, speakerCount: '5.5 Million' }
  ], phrases: [{ english: 'Hello', native: 'Здравей', phonetic: 'zdrah-VEY', category: 'greeting' }], facts: ['Bulgarian was the first Slavic language written using Cyrillic script.'] },

  { code: 'HR', name: 'Croatia', nativeName: 'Hrvatska', flag: '🇭🇷', region: 'Europe', subregion: 'Southern Europe', capital: 'Zagreb', population: 3800000, score: 7.0, x: 51, y: 36, langs: [
    { id: 'hr', name: 'Croatian', nativeName: 'Hrvatski', script: 'Latin', family: 'Indo-European (South Slavic)', type: 'official', percentage: 95.6, speakerCount: '3.6 Million' }
  ], phrases: [{ english: 'Hello', native: 'Bok', phonetic: 'BOK', category: 'greeting' }], facts: ['Croatian Istria is officially bilingual Croatian and Italian.'] },

  { code: 'CY', name: 'Cyprus', nativeName: 'Kýpros / Kıbrıs', flag: '🇨🇾', region: 'Europe', subregion: 'Southern Europe', capital: 'Nicosia', population: 1200000, score: 8.9, x: 60, y: 44, langs: [
    { id: 'el', name: 'Greek', nativeName: 'Ελληνικά', script: 'Greek', family: 'Indo-European (Hellenic)', type: 'official', percentage: 80, speakerCount: '900,000' },
    { id: 'tr', name: 'Turkish', nativeName: 'Türkçe', script: 'Latin', family: 'Turkic', type: 'official', percentage: 18, speakerCount: '200,000' }
  ], phrases: [{ english: 'Hello', native: 'Γειά σας / Merhaba', phonetic: 'YAH-sas / mair-HAH-bah', category: 'greeting' }], facts: ['Greek and Turkish are both constitutional official languages.'] },

  { code: 'CZ', name: 'Czech Republic', nativeName: 'Česko', flag: '🇨🇿', region: 'Europe', subregion: 'Eastern Europe', capital: 'Prague', population: 10800000, score: 6.5, x: 51, y: 33, langs: [
    { id: 'cs', name: 'Czech', nativeName: 'Čeština', script: 'Latin', family: 'Indo-European (West Slavic)', type: 'official', percentage: 96, speakerCount: '10.3 Million' }
  ], phrases: [{ english: 'Hello', native: 'Dobrý den', phonetic: 'DOH-bree DEN', category: 'greeting' }], facts: ['Czech letter "ř" is an alveolar trill fricative rare in world languages.'] },

  { code: 'DK', name: 'Denmark', nativeName: 'Danmark', flag: '🇩🇰', region: 'Europe', subregion: 'Northern Europe', capital: 'Copenhagen', population: 5900000, score: 7.5, x: 48, y: 28, langs: [
    { id: 'da', name: 'Danish', nativeName: 'Dansk', script: 'Latin', family: 'Indo-European (North Germanic)', type: 'official', percentage: 98, speakerCount: '5.8 Million' }
  ], phrases: [{ english: 'Hello', native: 'Hej', phonetic: 'HEY', category: 'greeting' }], facts: ['Danish features stød, a unique glottalization sound feature.'] },

  { code: 'EE', name: 'Estonia', nativeName: 'Eesti', flag: '🇪🇪', region: 'Europe', subregion: 'Northern Europe', capital: 'Tallinn', population: 1360000, score: 7.9, x: 56, y: 22, langs: [
    { id: 'et', name: 'Estonian', nativeName: 'Eesti keel', script: 'Latin', family: 'Uralic (Finno-Ugric)', type: 'official', percentage: 67, speakerCount: '900,000' }
  ], phrases: [{ english: 'Hello', native: 'Tere', phonetic: 'TEH-reh', category: 'greeting' }], facts: ['Estonian belongs to Finno-Ugric family and features 14 noun cases.'] },

  { code: 'FI', name: 'Finland', nativeName: 'Suomi', flag: '🇫🇮', region: 'Europe', subregion: 'Northern Europe', capital: 'Helsinki', population: 5600000, score: 8.8, x: 55, y: 20, langs: [
    { id: 'fi', name: 'Finnish', nativeName: 'Suomi', script: 'Latin', family: 'Uralic (Finno-Ugric)', type: 'official', percentage: 86.5, speakerCount: '4.8 Million' },
    { id: 'sv', name: 'Swedish', nativeName: 'Svenska', script: 'Latin', family: 'Indo-European (North Germanic)', type: 'official', percentage: 5.2, speakerCount: '290,000' }
  ], phrases: [{ english: 'Hello', native: 'Moi / Hei', phonetic: 'MOY / HAY', category: 'greeting' }], facts: ['Finland is constitutionally bilingual in Finnish and Swedish.'] },

  { code: 'FR', name: 'France', nativeName: 'France', flag: '🇫🇷', region: 'Europe', subregion: 'Western Europe', capital: 'Paris', population: 68000000, score: 6.5, x: 46, y: 36, langs: [
    { id: 'fr', name: 'French', nativeName: 'Français', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 97, speakerCount: '65 Million' }
  ], phrases: [{ english: 'Hello', native: 'Bonjour', phonetic: 'bon-ZHOOR', category: 'greeting' }], facts: ['French is official language in 29 independent countries.'] },

  { code: 'DE', name: 'Germany', nativeName: 'Deutschland', flag: '🇩🇪', region: 'Europe', subregion: 'Western Europe', capital: 'Berlin', population: 84300000, score: 6.8, x: 49, y: 32, langs: [
    { id: 'de', name: 'German', nativeName: 'Deutsch', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 95, speakerCount: '80 Million' }
  ], phrases: [{ english: 'Hello', native: 'Guten Tag', phonetic: 'GOO-ten TAHK', category: 'greeting' }], facts: ['German has the most native speakers in the European Union.'] },

  { code: 'GR', name: 'Greece', nativeName: 'Ελλάδα', flag: '🇬🇷', region: 'Europe', subregion: 'Southern Europe', capital: 'Athens', population: 10400000, score: 6.4, x: 55, y: 43, langs: [
    { id: 'el', name: 'Greek', nativeName: 'Ελληνικά', script: 'Greek', family: 'Indo-European (Hellenic)', type: 'official', percentage: 99, speakerCount: '10.3 Million' }
  ], phrases: [{ english: 'Hello', native: 'Γειά σας', phonetic: 'YAH-sas', category: 'greeting' }], facts: ['Greek script has been used continuously for over 2,800 years.'] },

  { code: 'HU', name: 'Hungary', nativeName: 'Magyarország', flag: '🇭🇺', region: 'Europe', subregion: 'Eastern Europe', capital: 'Budapest', population: 9600000, score: 6.3, x: 52, y: 35, langs: [
    { id: 'hu', name: 'Hungarian', nativeName: 'Magyar', script: 'Latin', family: 'Uralic (Finno-Ugric)', type: 'official', percentage: 98, speakerCount: '9.4 Million' }
  ], phrases: [{ english: 'Hello', native: 'Szia', phonetic: 'SEE-ah', category: 'greeting' }], facts: ['Hungarian has 18 grammatical noun cases.'] },

  { code: 'IS', name: 'Iceland', nativeName: 'Ísland', flag: '🇮🇸', region: 'Europe', subregion: 'Northern Europe', capital: 'Reykjavík', population: 388000, score: 8.1, x: 38, y: 18, langs: [
    { id: 'is', name: 'Icelandic', nativeName: 'Íslenska', script: 'Latin', family: 'Indo-European (North Germanic)', type: 'official', percentage: 98, speakerCount: '380,000' }
  ], phrases: [{ english: 'Hello', native: 'Hæ', phonetic: 'HIGH', category: 'greeting' }], facts: ['Icelandic language purism creates new native terms for modern tech.'] },

  { code: 'IE', name: 'Ireland', nativeName: 'Éire', flag: '🇮🇪', region: 'Europe', subregion: 'Northern Europe', capital: 'Dublin', population: 5200000, score: 7.8, x: 42, y: 30, langs: [
    { id: 'ga', name: 'Irish', nativeName: 'Gaeilge', script: 'Latin', family: 'Indo-European (Celtic)', type: 'official', percentage: 39.8, speakerCount: '1.9 Million' },
    { id: 'en', name: 'English', nativeName: 'English', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 99, speakerCount: '5.1 Million' }
  ], phrases: [{ english: 'Hello', native: 'Dia dhuit', phonetic: 'DEE-ah xwit', category: 'greeting' }], facts: ['Irish is the first official language of Ireland.'] },

  { code: 'IT', name: 'Italy', nativeName: 'Italia', flag: '🇮🇹', region: 'Europe', subregion: 'Southern Europe', capital: 'Rome', population: 58800000, score: 7.9, x: 50, y: 38, langs: [
    { id: 'it', name: 'Italian', nativeName: 'Italiano', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 95, speakerCount: '55 Million' }
  ], phrases: [{ english: 'Hello', native: 'Ciao / Buongiorno', phonetic: 'CHOW / bwon-ZHOR-noh', category: 'greeting' }], facts: ['Standard Italian evolved from 14th-century Tuscan literary dialect.'] },

  { code: 'LV', name: 'Latvia', nativeName: 'Latvija', flag: '🇱🇻', region: 'Europe', subregion: 'Northern Europe', capital: 'Riga', population: 1880000, score: 7.6, x: 56, y: 24, langs: [
    { id: 'lv', name: 'Latvian', nativeName: 'Latviešu valoda', script: 'Latin', family: 'Indo-European (Baltic)', type: 'official', percentage: 62, speakerCount: '1.2 Million' }
  ], phrases: [{ english: 'Hello', native: 'Sveiki', phonetic: 'SVAY-kee', category: 'greeting' }], facts: ['Latvian and Lithuanian are the two surviving Baltic languages.'] },

  { code: 'LT', name: 'Lithuania', nativeName: 'Lietuva', flag: '🇱🇹', region: 'Europe', subregion: 'Northern Europe', capital: 'Vilnius', population: 2860000, score: 7.4, x: 56, y: 26, langs: [
    { id: 'lt', name: 'Lithuanian', nativeName: 'Lietuvių kalba', script: 'Latin', family: 'Indo-European (Baltic)', type: 'official', percentage: 85, speakerCount: '2.4 Million' }
  ], phrases: [{ english: 'Hello', native: 'Labas', phonetic: 'LAH-bas', category: 'greeting' }], facts: ['Lithuanian retains archaic Proto-Indo-European traits.'] },

  { code: 'LU', name: 'Luxembourg', nativeName: 'Lëtzebuerg', flag: '🇱🇺', region: 'Europe', subregion: 'Western Europe', capital: 'Luxembourg City', population: 660000, score: 9.9, x: 47, y: 34, langs: [
    { id: 'lb', name: 'Luxembourgish', nativeName: 'Lëtzebuergesch', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 55, speakerCount: '360,000' },
    { id: 'fr', name: 'French', nativeName: 'Français', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 86, speakerCount: '550,000' },
    { id: 'de', name: 'German', nativeName: 'Deutsch', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 70, speakerCount: '450,000' }
  ], phrases: [{ english: 'Hello', native: 'Moien', phonetic: 'MOY-en', category: 'greeting' }], facts: ['Trilingual education is mandatory in Luxembourg.'] },

  { code: 'MT', name: 'Malta', nativeName: 'Malta', flag: '🇲🇹', region: 'Europe', subregion: 'Southern Europe', capital: 'Valletta', population: 530000, score: 9.2, x: 51, y: 45, langs: [
    { id: 'mt', name: 'Maltese', nativeName: 'Malti', script: 'Latin', family: 'Afroasiatic (Semitic)', type: 'official', percentage: 97, speakerCount: '500,000' },
    { id: 'en', name: 'English', nativeName: 'English', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 88, speakerCount: '460,000' }
  ], phrases: [{ english: 'Hello', native: 'Merħba', phonetic: 'MAIR-hbah', category: 'greeting' }], facts: ['Maltese is the only Semitic official language of the EU written in Latin.'] },

  { code: 'MD', name: 'Moldova', nativeName: 'Moldova', flag: '🇲🇩', region: 'Europe', subregion: 'Eastern Europe', capital: 'Chisinau', population: 2500000, score: 8.2, x: 58, y: 34, langs: [
    { id: 'ro', name: 'Romanian', nativeName: 'Limba română', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 80, speakerCount: '2.0 Million' }
  ], phrases: [{ english: 'Hello', native: 'Bună ziua', phonetic: 'BOO-nuh ZEE-wah', category: 'greeting' }], facts: ['Romanian is the official state language.'] },

  { code: 'MC', name: 'Monaco', nativeName: 'Monaco', flag: '🇲🇨', region: 'Europe', subregion: 'Western Europe', capital: 'Monaco', population: 39000, score: 8.5, x: 47, y: 37, langs: [
    { id: 'fr', name: 'French', nativeName: 'Français', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 99, speakerCount: '38,000' },
    { id: 'lij', name: 'Monégasque', nativeName: 'Munegascu', script: 'Latin', family: 'Indo-European (Romance)', type: 'indigenous', percentage: 15, speakerCount: '5,000' }
  ], phrases: [{ english: 'Hello', native: 'Bonjour / Daghè', phonetic: 'bon-ZHOOR / dah-GHEH', category: 'greeting' }], facts: ['Monégasque is taught in all primary schools in the principality.'] },

  { code: 'ME', name: 'Montenegro', nativeName: 'Crna Gora', flag: '🇲🇪', region: 'Europe', subregion: 'Southern Europe', capital: 'Podgorica', population: 620000, score: 8.7, x: 53, y: 38, langs: [
    { id: 'cnr', name: 'Montenegrin', nativeName: 'Crnogorski', script: 'Latin / Cyrillic', family: 'Indo-European (South Slavic)', type: 'official', percentage: 37, speakerCount: '230,000' },
    { id: 'sr', name: 'Serbian', nativeName: 'Српски', script: 'Cyrillic / Latin', family: 'Indo-European (South Slavic)', type: 'widely_spoken', percentage: 43, speakerCount: '260,000' }
  ], phrases: [{ english: 'Hello', native: 'Zdravo', phonetic: 'ZDRAH-voh', category: 'greeting' }], facts: ['Montenegrin alphabet includes unique letters Ś and Ź.'] },

  { code: 'NL', name: 'Netherlands', nativeName: 'Nederland', flag: '🇳🇱', region: 'Europe', subregion: 'Western Europe', capital: 'Amsterdam', population: 17800000, score: 8.5, x: 47, y: 31, langs: [
    { id: 'nl', name: 'Dutch', nativeName: 'Nederlands', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 95, speakerCount: '17 Million' },
    { id: 'fy', name: 'West Frisian', nativeName: 'Frysk', script: 'Latin', family: 'Indo-European (Germanic)', type: 'co-official', percentage: 2.2, speakerCount: '450,000' }
  ], phrases: [{ english: 'Hello', native: 'Hallo', phonetic: 'HAH-loh', category: 'greeting' }], facts: ['West Frisian is the closest living language relative to English.'] },

  { code: 'MK', name: 'North Macedonia', nativeName: 'Severna Makedonija', flag: '🇲🇰', region: 'Europe', subregion: 'Southern Europe', capital: 'Skopje', population: 1800000, score: 8.5, x: 55, y: 40, langs: [
    { id: 'mk', name: 'Macedonian', nativeName: 'Македонски', script: 'Cyrillic', family: 'Indo-European (South Slavic)', type: 'official', percentage: 65, speakerCount: '1.2 Million' },
    { id: 'sq', name: 'Albanian', nativeName: 'Shqip', script: 'Latin', family: 'Indo-European (Albanian)', type: 'co-official', percentage: 25, speakerCount: '450,000' }
  ], phrases: [{ english: 'Hello', native: 'Здраво', phonetic: 'ZDRAH-voh', category: 'greeting' }], facts: ['Albanian is a co-official language at state level since 2019.'] },

  { code: 'NO', name: 'Norway', nativeName: 'Norge / Noreg', flag: '🇳🇴', region: 'Europe', subregion: 'Northern Europe', capital: 'Oslo', population: 5500000, score: 8.2, x: 49, y: 22, langs: [
    { id: 'nb', name: 'Norwegian Bokmål', nativeName: 'Bokmål', script: 'Latin', family: 'Indo-European (North Germanic)', type: 'official', percentage: 85, speakerCount: '4.6 Million' },
    { id: 'nn', name: 'Norwegian Nynorsk', nativeName: 'Nynorsk', script: 'Latin', family: 'Indo-European (North Germanic)', type: 'official', percentage: 12, speakerCount: '650,000' }
  ], phrases: [{ english: 'Hello', native: 'Hei', phonetic: 'HAY', category: 'greeting' }], facts: ['Norwegian has two official written standards: Bokmål and Nynorsk.'] },

  { code: 'PL', name: 'Poland', nativeName: 'Polska', flag: '🇵🇱', region: 'Europe', subregion: 'Eastern Europe', capital: 'Warsaw', population: 37700000, score: 6.3, x: 53, y: 31, langs: [
    { id: 'pl', name: 'Polish', nativeName: 'Język polski', script: 'Latin', family: 'Indo-European (West Slavic)', type: 'official', percentage: 97, speakerCount: '37 Million' }
  ], phrases: [{ english: 'Hello', native: 'Cześć / Dzień dobry', phonetic: 'CHESHCH / JIEN DOH-bry', category: 'greeting' }], facts: ['Kashubian is recognized as a regional language in Pomerania.'] },

  { code: 'PT', name: 'Portugal', nativeName: 'Portugal', flag: '🇵🇹', region: 'Europe', subregion: 'Southern Europe', capital: 'Lisbon', population: 10300000, score: 6.4, x: 40, y: 40, langs: [
    { id: 'pt', name: 'Portuguese', nativeName: 'Português', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 99, speakerCount: '10 Million' }
  ], phrases: [{ english: 'Hello', native: 'Olá', phonetic: 'oh-LAH', category: 'greeting' }], facts: ['Portuguese is spoken by over 260 million people worldwide.'] },

  { code: 'RO', name: 'Romania', nativeName: 'România', flag: '🇷🇴', region: 'Europe', subregion: 'Eastern Europe', capital: 'Bucharest', population: 19000000, score: 7.1, x: 56, y: 36, langs: [
    { id: 'ro', name: 'Romanian', nativeName: 'Limba română', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 89, speakerCount: '17 Million' }
  ], phrases: [{ english: 'Hello', native: 'Bună ziua', phonetic: 'BOO-nuh ZEE-wah', category: 'greeting' }], facts: ['Romanian is the sole Romance language spoken in Eastern Europe.'] },

  { code: 'RU', name: 'Russia', nativeName: 'Россия', flag: '🇷🇺', region: 'Europe', subregion: 'Eastern Europe', capital: 'Moscow', population: 144000000, score: 9.0, x: 68, y: 25, langs: [
    { id: 'ru', name: 'Russian', nativeName: 'Русский', script: 'Cyrillic', family: 'Indo-European (East Slavic)', type: 'official', percentage: 96, speakerCount: '138 Million' }
  ], phrases: [{ english: 'Hello', native: 'Здравствуйте / Привет', phonetic: 'ZDRAHV-stvooy-teh / pree-VEET', category: 'greeting' }], facts: ['Russia has over 35 official co-languages in autonomous republics.'] },

  { code: 'SM', name: 'San Marino', nativeName: 'San Marino', flag: '🇸🇲', region: 'Europe', subregion: 'Southern Europe', capital: 'San Marino', population: 34000, score: 6.5, x: 50, y: 37, langs: [
    { id: 'it', name: 'Italian', nativeName: 'Italiano', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 98, speakerCount: '33,000' },
    { id: 'rgn', name: 'Romagnol', nativeName: 'Rumagnôl', script: 'Latin', family: 'Indo-European (Romance)', type: 'regional', percentage: 80, speakerCount: '25,000' }
  ], phrases: [{ english: 'Hello', native: 'Ciao / Buongiorno', phonetic: 'CHOW / bwon-ZHOR-noh', category: 'greeting' }], facts: ['Romagnol is the traditional dialect spoken alongside Italian.'] },

  { code: 'RS', name: 'Serbia', nativeName: 'Srbija', flag: '🇷🇸', region: 'Europe', subregion: 'Southern Europe', capital: 'Belgrade', population: 6600000, score: 8.4, x: 53, y: 37, langs: [
    { id: 'sr', name: 'Serbian', nativeName: 'Српски', script: 'Cyrillic / Latin', family: 'Indo-European (South Slavic)', type: 'official', percentage: 88, speakerCount: '5.8 Million' }
  ], phrases: [{ english: 'Hello', native: 'Zdravo', phonetic: 'ZDRAH-voh', category: 'greeting' }], facts: ['Serbian legally recognizes both Cyrillic and Latin alphabets.'] },

  { code: 'SK', name: 'Slovakia', nativeName: 'Slovensko', flag: '🇸🇰', region: 'Europe', subregion: 'Eastern Europe', capital: 'Bratislava', population: 5400000, score: 7.3, x: 52, y: 34, langs: [
    { id: 'sk', name: 'Slovak', nativeName: 'Slovenčina', script: 'Latin', family: 'Indo-European (West Slavic)', type: 'official', percentage: 85, speakerCount: '4.6 Million' }
  ], phrases: [{ english: 'Hello', native: 'Ahoj / Dobrý deň', phonetic: 'AH-hoy / DOH-bree den', category: 'greeting' }], facts: ['Slovak and Czech are mutually intelligible.'] },

  { code: 'SI', name: 'Slovenia', nativeName: 'Slovenija', flag: '🇸🇮', region: 'Europe', subregion: 'Southern Europe', capital: 'Ljubljana', population: 2100000, score: 7.7, x: 50, y: 36, langs: [
    { id: 'sl', name: 'Slovene', nativeName: 'Slovenščina', script: 'Latin', family: 'Indo-European (South Slavic)', type: 'official', percentage: 88, speakerCount: '1.8 Million' }
  ], phrases: [{ english: 'Hello', native: 'Živjo', phonetic: 'ZHEEV-yoh', category: 'greeting' }], facts: ['Slovene preserves dual grammatical number in modern usage.'] },

  { code: 'ES', name: 'Spain', nativeName: 'España', flag: '🇪🇸', region: 'Europe', subregion: 'Southern Europe', capital: 'Madrid', population: 47400000, score: 8.6, x: 42, y: 39, langs: [
    { id: 'es', name: 'Spanish', nativeName: 'Castellano', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 99, speakerCount: '46 Million' },
    { id: 'ca', name: 'Catalan', nativeName: 'Català', script: 'Latin', family: 'Indo-European (Romance)', type: 'co-official', percentage: 17.5, speakerCount: '8.3 Million' },
    { id: 'gl', name: 'Galician', nativeName: 'Galego', script: 'Latin', family: 'Indo-European (Romance)', type: 'co-official', percentage: 5.2, speakerCount: '2.4 Million' },
    { id: 'eu', name: 'Basque', nativeName: 'Euskara', script: 'Latin', family: 'Language Isolate', type: 'co-official', percentage: 1.5, speakerCount: '750,000' }
  ], phrases: [{ english: 'Hello', native: 'Hola', phonetic: 'OH-lah', category: 'greeting' }], facts: ['Basque (Euskara) is a language isolate unrelated to Indo-European.'] },

  { code: 'SE', name: 'Sweden', nativeName: 'Sverige', flag: '🇸🇪', region: 'Europe', subregion: 'Northern Europe', capital: 'Stockholm', population: 10500000, score: 8.0, x: 52, y: 22, langs: [
    { id: 'sv', name: 'Swedish', nativeName: 'Svenska', script: 'Latin', family: 'Indo-European (North Germanic)', type: 'official', percentage: 95, speakerCount: '10 Million' }
  ], phrases: [{ english: 'Hello', native: 'Hej', phonetic: 'HEY', category: 'greeting' }], facts: ['Sweden recognizes 5 official national minority languages.'] },

  { code: 'CH', name: 'Switzerland', nativeName: 'Schweiz', flag: '🇨🇭', region: 'Europe', subregion: 'Western Europe', capital: 'Bern', population: 8800000, score: 9.2, x: 48, y: 35, langs: [
    { id: 'de', name: 'German', nativeName: 'Deutsch', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 62.6, speakerCount: '5.5 Million' },
    { id: 'fr', name: 'French', nativeName: 'Français', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 22.9, speakerCount: '2.0 Million' },
    { id: 'it', name: 'Italian', nativeName: 'Italiano', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 8.2, speakerCount: '720,000' },
    { id: 'rm', name: 'Romansh', nativeName: 'Rumantsch', script: 'Latin', family: 'Indo-European (Rhaeto-Romance)', type: 'official', percentage: 0.5, speakerCount: '44,000' }
  ], phrases: [{ english: 'Hello', native: 'Grüezi / Bonjour / Ciao', phonetic: 'GROO-et-see / bon-ZHOOR / CHOW', category: 'greeting' }], facts: ['Switzerland has four national official languages in its constitution.'] },

  { code: 'UA', name: 'Ukraine', nativeName: 'Україна', flag: '🇺🇦', region: 'Europe', subregion: 'Eastern Europe', capital: 'Kyiv', population: 38000000, score: 7.5, x: 57, y: 32, langs: [
    { id: 'uk', name: 'Ukrainian', nativeName: 'Українська', script: 'Cyrillic', family: 'Indo-European (East Slavic)', type: 'official', percentage: 80, speakerCount: '32 Million' }
  ], phrases: [{ english: 'Hello', native: 'Вітаю / Привіт', phonetic: 'vee-TAH-yoo / pry-VEET', category: 'greeting' }], facts: ['Ukrainian Cyrillic contains letters "Ґ", "Є", "І", "Ї".'] },

  { code: 'GB', name: 'United Kingdom', nativeName: 'United Kingdom', flag: '🇬🇧', region: 'Europe', subregion: 'Northern Europe', capital: 'London', population: 67000000, score: 6.2, x: 44, y: 30, langs: [
    { id: 'en', name: 'English', nativeName: 'English', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 98, speakerCount: '65 Million' },
    { id: 'cy', name: 'Welsh', nativeName: 'Cymraeg', script: 'Latin', family: 'Indo-European (Celtic)', type: 'co-official', percentage: 1, speakerCount: '890,000' }
  ], phrases: [{ english: 'Hello', native: 'Hello / Bore da', phonetic: 'heh-LOH / BOH-reh DAH', category: 'greeting' }], facts: ['Welsh has equal official status with English in Wales.'] },

  { code: 'VA', name: 'Vatican City', nativeName: 'Civitas Vaticana', flag: '🇻🇦', region: 'Europe', subregion: 'Southern Europe', capital: 'Vatican City', population: 800, score: 9.5, x: 50, y: 39, langs: [
    { id: 'la', name: 'Latin', nativeName: 'Lingua Latina', script: 'Latin', family: 'Indo-European (Italic)', type: 'official', percentage: 100, speakerCount: 'Liturgical' },
    { id: 'it', name: 'Italian', nativeName: 'Italiano', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 100, speakerCount: '800' }
  ], phrases: [{ english: 'Hello', native: 'Salve', phonetic: 'SAHL-veh', category: 'greeting' }], facts: ['Vatican City is the only nation where Latin is an official state language.'] }
];

console.log(`Parsed total count: ${countries.length}`);
