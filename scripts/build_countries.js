const fs = require('fs');
const path = require('path');

// Complete World Database of all 195 ISO Nations
const worldCountries = [
  // --- EUROPE ---
  { code: 'AL', name: 'Albania', nativeName: 'Shqipëria', flag: '🇦🇱', region: 'Europe', subregion: 'Southern Europe', capital: 'Tirana', population: 2750000, multilingualScore: 7.2, coordinates: { x: 54, y: 39 }, languages: [
    { id: 'sq', name: 'Albanian', nativeName: 'Shqip', script: 'Latin', family: 'Indo-European (Albanian)', type: 'official', percentage: 98, speakerCount: '2.7 Million' },
    { id: 'el', name: 'Greek', nativeName: 'Ελληνικά', script: 'Greek', family: 'Indo-European (Hellenic)', type: 'minority', percentage: 1.5, speakerCount: '40,000' }
  ], phrases: [
    { english: 'Hello', native: 'Përshëndetje', phonetic: 'pur-shen-DET-yeh', category: 'greeting' },
    { english: 'Thank you', native: 'Faleminderit', phonetic: 'fah-lem-nee-DER-eet', category: 'courtesy' }
  ], facts: ['Albanian forms its own independent branch of Indo-European.', 'Gheg and Tosk are the two primary dialects.'] },

  { code: 'AD', name: 'Andorra', nativeName: 'Andorra', flag: '🇦🇩', region: 'Europe', subregion: 'Southern Europe', capital: 'Andorra la Vella', population: 80000, multilingualScore: 9.1, coordinates: { x: 44, y: 38 }, languages: [
    { id: 'ca', name: 'Catalan', nativeName: 'Català', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 38.8, speakerCount: '31,000' },
    { id: 'es', name: 'Spanish', nativeName: 'Español', script: 'Latin', family: 'Indo-European (Romance)', type: 'widely_spoken', percentage: 35.4, speakerCount: '28,000' },
    { id: 'fr', name: 'French', nativeName: 'Français', script: 'Latin', family: 'Indo-European (Romance)', type: 'widely_spoken', percentage: 15.0, speakerCount: '12,000' }
  ], phrases: [
    { english: 'Hello', native: 'Hola', phonetic: 'OH-lah', category: 'greeting' },
    { english: 'Thank you', native: 'Gràcies', phonetic: 'GRAH-see-es', category: 'courtesy' }
  ], facts: ['Andorra is the only sovereign country where Catalan is sole official language.'] },

  { code: 'AT', name: 'Austria', nativeName: 'Österreich', flag: '🇦🇹', region: 'Europe', subregion: 'Western Europe', capital: 'Vienna', population: 9100000, multilingualScore: 7.2, coordinates: { x: 50, y: 35 }, languages: [
    { id: 'de', name: 'German', nativeName: 'Deutsch', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 98, speakerCount: '8.9 Million' },
    { id: 'hu', name: 'Hungarian', nativeName: 'Magyar', script: 'Latin', family: 'Uralic', type: 'regional', percentage: 0.5, speakerCount: '40,000' }
  ], phrases: [
    { english: 'Hello', native: 'Grüß Gott', phonetic: 'GROOS got', category: 'greeting' },
    { english: 'Thank you', native: 'Danke schön', phonetic: 'DAHN-keh shuen', category: 'courtesy' }
  ], facts: ['Austrian German has distinct vocabulary in culinary and legal domains.'] },

  { code: 'BY', name: 'Belarus', nativeName: 'Belaruś', flag: '🇧🇾', region: 'Europe', subregion: 'Eastern Europe', capital: 'Minsk', population: 9200000, multilingualScore: 8.0, coordinates: { x: 56, y: 28 }, languages: [
    { id: 'be', name: 'Belarusian', nativeName: 'Беларуская', script: 'Cyrillic', family: 'Indo-European (East Slavic)', type: 'official', percentage: 23, speakerCount: '2.1 Million' },
    { id: 'ru', name: 'Russian', nativeName: 'Русский', script: 'Cyrillic', family: 'Indo-European (East Slavic)', type: 'official', percentage: 70, speakerCount: '6.4 Million' }
  ], phrases: [
    { english: 'Hello', native: 'Вітаю', phonetic: 'vee-TAH-yoo', category: 'greeting' },
    { english: 'Thank you', native: 'Дзякуй', phonetic: 'DZYA-kooy', category: 'courtesy' }
  ], facts: ['Belarusian alphabet includes letter "Ў" (short U).'] },

  { code: 'BE', name: 'Belgium', nativeName: 'België / Belgique', flag: '🇧🇪', region: 'Europe', subregion: 'Western Europe', capital: 'Brussels', population: 11700000, multilingualScore: 9.4, coordinates: { x: 47, y: 33 }, languages: [
    { id: 'nl', name: 'Dutch', nativeName: 'Nederlands', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 59, speakerCount: '6.5 Million' },
    { id: 'fr', name: 'French', nativeName: 'Français', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 40, speakerCount: '4.5 Million' },
    { id: 'de', name: 'German', nativeName: 'Deutsch', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 1, speakerCount: '77,000' }
  ], phrases: [
    { english: 'Hello', native: 'Hallo / Bonjour', phonetic: 'HAH-loh / bon-ZHOOR', category: 'greeting' },
    { english: 'Thank you', native: 'Dank u / Merci', phonetic: 'DAHN-koo / MAIR-see', category: 'courtesy' }
  ], facts: ['Belgium is divided into three official linguistic communities.'] },

  { code: 'BA', name: 'Bosnia and Herzegovina', nativeName: 'Bosna i Hercegovina', flag: '🇧🇦', region: 'Europe', subregion: 'Southern Europe', capital: 'Sarajevo', population: 3200000, multilingualScore: 9.3, coordinates: { x: 52, y: 37 }, languages: [
    { id: 'bs', name: 'Bosnian', nativeName: 'Bosanski', script: 'Latin / Cyrillic', family: 'Indo-European (South Slavic)', type: 'official', percentage: 50.7, speakerCount: '1.6 Million' },
    { id: 'hr', name: 'Croatian', nativeName: 'Hrvatski', script: 'Latin', family: 'Indo-European (South Slavic)', type: 'official', percentage: 15.4, speakerCount: '500,000' },
    { id: 'sr', name: 'Serbian', nativeName: 'Српски', script: 'Cyrillic / Latin', family: 'Indo-European (South Slavic)', type: 'official', percentage: 30.7, speakerCount: '1.0 Million' }
  ], phrases: [
    { english: 'Hello', native: 'Zdravo', phonetic: 'ZDRAH-voh', category: 'greeting' },
    { english: 'Thank you', native: 'Hvala', phonetic: 'HVAH-lah', category: 'courtesy' }
  ], facts: ['Bosnian, Croatian, and Serbian are mutually intelligible standardized varieties.'] },

  { code: 'BG', name: 'Bulgaria', nativeName: 'България', flag: '🇧🇬', region: 'Europe', subregion: 'Eastern Europe', capital: 'Sofia', population: 6400000, multilingualScore: 6.8, coordinates: { x: 56, y: 39 }, languages: [
    { id: 'bg', name: 'Bulgarian', nativeName: 'Български', script: 'Cyrillic', family: 'Indo-European (South Slavic)', type: 'official', percentage: 85, speakerCount: '5.5 Million' },
    { id: 'tr', name: 'Turkish', nativeName: 'Türkçe', script: 'Latin', family: 'Turkic', type: 'minority', percentage: 8.8, speakerCount: '580,000' }
  ], phrases: [
    { english: 'Hello', native: 'Здравей', phonetic: 'zdrah-VEY', category: 'greeting' },
    { english: 'Thank you', native: 'Благодаря', phonetic: 'blah-goh-dah-RYAH', category: 'courtesy' }
  ], facts: ['Bulgarian was the first Slavic language written using Cyrillic script.'] },

  { code: 'HR', name: 'Croatia', nativeName: 'Hrvatska', flag: '🇭🇷', region: 'Europe', subregion: 'Southern Europe', capital: 'Zagreb', population: 3800000, multilingualScore: 7.0, coordinates: { x: 51, y: 36 }, languages: [
    { id: 'hr', name: 'Croatian', nativeName: 'Hrvatski', script: 'Latin', family: 'Indo-European (South Slavic)', type: 'official', percentage: 95.6, speakerCount: '3.6 Million' },
    { id: 'it', name: 'Italian', nativeName: 'Italiano', script: 'Latin', family: 'Indo-European (Romance)', type: 'regional', percentage: 0.4, speakerCount: '18,000' }
  ], phrases: [
    { english: 'Hello', native: 'Bok', phonetic: 'BOK', category: 'greeting' },
    { english: 'Thank you', native: 'Hvala', phonetic: 'HVAH-lah', category: 'courtesy' }
  ], facts: ['Croatian Istria is officially bilingual Croatian and Italian.'] },

  { code: 'CY', name: 'Cyprus', nativeName: 'Kýpros / Kıbrıs', flag: '🇨🇾', region: 'Europe', subregion: 'Southern Europe', capital: 'Nicosia', population: 1200000, multilingualScore: 8.9, coordinates: { x: 60, y: 44 }, languages: [
    { id: 'el', name: 'Greek', nativeName: 'Ελληνικά', script: 'Greek', family: 'Indo-European (Hellenic)', type: 'official', percentage: 80, speakerCount: '900,000' },
    { id: 'tr', name: 'Turkish', nativeName: 'Türkçe', script: 'Latin', family: 'Turkic', type: 'official', percentage: 18, speakerCount: '200,000' },
    { id: 'en', name: 'English', nativeName: 'English', script: 'Latin', family: 'Indo-European (Germanic)', type: 'widely_spoken', percentage: 73, speakerCount: '850,000' }
  ], phrases: [
    { english: 'Hello', native: 'Γειά σας / Merhaba', phonetic: 'YAH-sas / mair-HAH-bah', category: 'greeting' },
    { english: 'Thank you', native: 'Ευχαριστώ / Teşekkürler', phonetic: 'ef-khah-ree-STOH / teh-shek-kur-LAIR', category: 'courtesy' }
  ], facts: ['Greek and Turkish are both constitutional official languages of Cyprus.'] },

  { code: 'CZ', name: 'Czech Republic', nativeName: 'Česko', flag: '🇨🇿', region: 'Europe', subregion: 'Eastern Europe', capital: 'Prague', population: 10800000, multilingualScore: 6.5, coordinates: { x: 51, y: 33 }, languages: [
    { id: 'cs', name: 'Czech', nativeName: 'Čeština', script: 'Latin', family: 'Indo-European (West Slavic)', type: 'official', percentage: 96, speakerCount: '10.3 Million' }
  ], phrases: [
    { english: 'Hello', native: 'Dobrý den', phonetic: 'DOH-bree DEN', category: 'greeting' },
    { english: 'Thank you', native: 'Děkuji', phonetic: 'DYEH-koo-yee', category: 'courtesy' }
  ], facts: ['Czech letter "ř" is an alveolar trill fricative rare in world languages.'] },

  { code: 'DK', name: 'Denmark', nativeName: 'Danmark', flag: '🇩🇰', region: 'Europe', subregion: 'Northern Europe', capital: 'Copenhagen', population: 5900000, multilingualScore: 7.5, coordinates: { x: 48, y: 28 }, languages: [
    { id: 'da', name: 'Danish', nativeName: 'Dansk', script: 'Latin', family: 'Indo-European (North Germanic)', type: 'official', percentage: 98, speakerCount: '5.8 Million' },
    { id: 'fo', name: 'Faroese', nativeName: 'Føroyskt', script: 'Latin', family: 'Indo-European (North Germanic)', type: 'regional', percentage: 0.1, speakerCount: '70,000' },
    { id: 'kl', name: 'Greenlandic', nativeName: 'Kalaallisut', script: 'Latin', family: 'Eskimo-Aleut', type: 'regional', percentage: 0.1, speakerCount: '50,000' }
  ], phrases: [
    { english: 'Hello', native: 'Hej', phonetic: 'HEY', category: 'greeting' },
    { english: 'Thank you', native: 'Tak', phonetic: 'TAHK', category: 'courtesy' }
  ], facts: ['Danish features stød, a unique glottalization sound feature.'] },

  { code: 'EE', name: 'Estonia', nativeName: 'Eesti', flag: '🇪🇪', region: 'Europe', subregion: 'Northern Europe', capital: 'Tallinn', population: 1360000, multilingualScore: 7.9, coordinates: { x: 56, y: 22 }, languages: [
    { id: 'et', name: 'Estonian', nativeName: 'Eesti keel', script: 'Latin', family: 'Uralic (Finno-Ugric)', type: 'official', percentage: 67, speakerCount: '900,000' },
    { id: 'ru', name: 'Russian', nativeName: 'Русский', script: 'Cyrillic', family: 'Indo-European (East Slavic)', type: 'minority', percentage: 29, speakerCount: '380,000' }
  ], phrases: [
    { english: 'Hello', native: 'Tere', phonetic: 'TEH-reh', category: 'greeting' },
    { english: 'Thank you', native: 'Aitäh', phonetic: 'eye-TEH', category: 'courtesy' }
  ], facts: ['Estonian belongs to the Uralic language family and features 14 noun cases.'] },

  { code: 'FI', name: 'Finland', nativeName: 'Suomi / Finland', flag: '🇫🇮', region: 'Europe', subregion: 'Northern Europe', capital: 'Helsinki', population: 5600000, multilingualScore: 8.8, coordinates: { x: 55, y: 20 }, languages: [
    { id: 'fi', name: 'Finnish', nativeName: 'Suomi', script: 'Latin', family: 'Uralic (Finno-Ugric)', type: 'official', percentage: 86.5, speakerCount: '4.8 Million' },
    { id: 'sv', name: 'Swedish', nativeName: 'Svenska', script: 'Latin', family: 'Indo-European (North Germanic)', type: 'official', percentage: 5.2, speakerCount: '290,000' },
    { id: 'se', name: 'Sami', nativeName: 'Sámegiella', script: 'Latin', family: 'Uralic (Sami)', type: 'indigenous', percentage: 0.04, speakerCount: '2,000' }
  ], phrases: [
    { english: 'Hello', native: 'Moi / Hei', phonetic: 'MOY / HAY', category: 'greeting' },
    { english: 'Thank you', native: 'Kiitos', phonetic: 'KEE-tos', category: 'courtesy' }
  ], facts: ['Finland is constitutionally bilingual in Finnish and Swedish.'] },

  { code: 'FR', name: 'France', nativeName: 'France', flag: '🇫🇷', region: 'Europe', subregion: 'Western Europe', capital: 'Paris', population: 68000000, multilingualScore: 6.5, coordinates: { x: 46, y: 36 }, languages: [
    { id: 'fr', name: 'French', nativeName: 'Français', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 97, speakerCount: '65 Million' },
    { id: 'br', name: 'Breton', nativeName: 'Brezhoneg', script: 'Latin', family: 'Indo-European (Celtic)', type: 'regional', percentage: 0.3, speakerCount: '200,000' },
    { id: 'eu', name: 'Basque', nativeName: 'Euskara', script: 'Latin', family: 'Language Isolate', type: 'regional', percentage: 0.1, speakerCount: '80,000' }
  ], phrases: [
    { english: 'Hello', native: 'Bonjour', phonetic: 'bon-ZHOOR', category: 'greeting' },
    { english: 'Thank you', native: 'Merci', phonetic: 'MAIR-see', category: 'courtesy' }
  ], facts: ['French is official in 29 independent nations across the world.'] },

  { code: 'DE', name: 'Germany', nativeName: 'Deutschland', flag: '🇩🇪', region: 'Europe', subregion: 'Western Europe', capital: 'Berlin', population: 84300000, multilingualScore: 6.8, coordinates: { x: 49, y: 32 }, languages: [
    { id: 'de', name: 'German', nativeName: 'Deutsch', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 95, speakerCount: '80 Million' },
    { id: 'nds', name: 'Low German', nativeName: 'Plattdüütsch', script: 'Latin', family: 'Indo-European (Germanic)', type: 'regional', percentage: 2.5, speakerCount: '2 Million' }
  ], phrases: [
    { english: 'Hello', native: 'Guten Tag', phonetic: 'GOO-ten TAHK', category: 'greeting' },
    { english: 'Thank you', native: 'Danke', phonetic: 'DAHN-keh', category: 'courtesy' }
  ], facts: ['German has the largest number of native speakers in the EU.'] },

  { code: 'GR', name: 'Greece', nativeName: 'Ελλάδα', flag: '🇬🇷', region: 'Europe', subregion: 'Southern Europe', capital: 'Athens', population: 10400000, multilingualScore: 6.4, coordinates: { x: 55, y: 43 }, languages: [
    { id: 'el', name: 'Greek', nativeName: 'Ελληνικά', script: 'Greek', family: 'Indo-European (Hellenic)', type: 'official', percentage: 99, speakerCount: '10.3 Million' }
  ], phrases: [
    { english: 'Hello', native: 'Γειά σας', phonetic: 'YAH-sas', category: 'greeting' },
    { english: 'Thank you', native: 'Ευχαριστώ', phonetic: 'ef-khah-ree-STOH', category: 'courtesy' }
  ], facts: ['Greek script has been continuously recorded since 8th century BCE.'] },

  { code: 'HU', name: 'Hungary', nativeName: 'Magyarország', flag: '🇭🇺', region: 'Europe', subregion: 'Eastern Europe', capital: 'Budapest', population: 9600000, multilingualScore: 6.3, coordinates: { x: 52, y: 35 }, languages: [
    { id: 'hu', name: 'Hungarian', nativeName: 'Magyar', script: 'Latin', family: 'Uralic (Finno-Ugric)', type: 'official', percentage: 98, speakerCount: '9.4 Million' }
  ], phrases: [
    { english: 'Hello', native: 'Szia / Jó napot', phonetic: 'SEE-ah / YOH nah-pot', category: 'greeting' },
    { english: 'Thank you', native: 'Köszönöm', phonetic: 'KUE-sue-noem', category: 'courtesy' }
  ], facts: ['Hungarian features 18 distinct grammatical noun cases.'] },

  { code: 'IS', name: 'Iceland', nativeName: 'Ísland', flag: '🇮🇸', region: 'Europe', subregion: 'Northern Europe', capital: 'Reykjavík', population: 388000, multilingualScore: 8.1, coordinates: { x: 38, y: 18 }, languages: [
    { id: 'is', name: 'Icelandic', nativeName: 'Íslenska', script: 'Latin', family: 'Indo-European (North Germanic)', type: 'official', percentage: 98, speakerCount: '380,000' }
  ], phrases: [
    { english: 'Hello', native: 'Hæ / Góðan dag', phonetic: 'HIGH / GOH-than dahkh', category: 'greeting' },
    { english: 'Thank you', native: 'Takk fyrir', phonetic: 'TAHK fee-reer', category: 'courtesy' }
  ], facts: ['Icelandic language purism creates new native terms for modern tech.'] },

  { code: 'IE', name: 'Ireland', nativeName: 'Éire', flag: '🇮🇪', region: 'Europe', subregion: 'Northern Europe', capital: 'Dublin', population: 5200000, multilingualScore: 7.8, coordinates: { x: 42, y: 30 }, languages: [
    { id: 'ga', name: 'Irish', nativeName: 'Gaeilge', script: 'Latin', family: 'Indo-European (Celtic)', type: 'official', percentage: 39.8, speakerCount: '1.9 Million' },
    { id: 'en', name: 'English', nativeName: 'English', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 99, speakerCount: '5.1 Million' }
  ], phrases: [
    { english: 'Hello', native: 'Dia dhuit', phonetic: 'DEE-ah xwit', category: 'greeting' },
    { english: 'Thank you', native: 'Go raibh maith agat', phonetic: 'gur rev MAH ug-ut', category: 'courtesy' }
  ], facts: ['Irish is the first official language of the Republic of Ireland.'] },

  { code: 'IT', name: 'Italy', nativeName: 'Italia', flag: '🇮🇹', region: 'Europe', subregion: 'Southern Europe', capital: 'Rome', population: 58800000, multilingualScore: 7.9, coordinates: { x: 50, y: 38 }, languages: [
    { id: 'it', name: 'Italian', nativeName: 'Italiano', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 95, speakerCount: '55 Million' },
    { id: 'scn', name: 'Sicilian', nativeName: 'Sicilianu', script: 'Latin', family: 'Indo-European (Romance)', type: 'regional', percentage: 8, speakerCount: '4.8 Million' }
  ], phrases: [
    { english: 'Hello', native: 'Ciao / Buongiorno', phonetic: 'CHOW / bwon-ZHOR-noh', category: 'greeting' },
    { english: 'Thank you', native: 'Grazie', phonetic: 'GRAHT-see-eh', category: 'courtesy' }
  ], facts: ['Standard Italian evolved from 14th-century Florentine literary Tuscan.'] },

  { code: 'LV', name: 'Latvia', nativeName: 'Latvija', flag: '🇱🇻', region: 'Europe', subregion: 'Northern Europe', capital: 'Riga', population: 1880000, multilingualScore: 7.6, coordinates: { x: 56, y: 24 }, languages: [
    { id: 'lv', name: 'Latvian', nativeName: 'Latviešu valoda', script: 'Latin', family: 'Indo-European (Baltic)', type: 'official', percentage: 62, speakerCount: '1.2 Million' },
    { id: 'ru', name: 'Russian', nativeName: 'Русский', script: 'Cyrillic', family: 'Indo-European (East Slavic)', type: 'minority', percentage: 35, speakerCount: '650,000' }
  ], phrases: [
    { english: 'Hello', native: 'Sveiki', phonetic: 'SVAY-kee', category: 'greeting' },
    { english: 'Thank you', native: 'Paldies', phonetic: 'PAHL-dyehs', category: 'courtesy' }
  ], facts: ['Latvian and Lithuanian are the only surviving Baltic languages.'] },

  { code: 'LT', name: 'Lithuania', nativeName: 'Lietuva', flag: '🇱🇹', region: 'Europe', subregion: 'Northern Europe', capital: 'Vilnius', population: 2860000, multilingualScore: 7.4, coordinates: { x: 56, y: 26 }, languages: [
    { id: 'lt', name: 'Lithuanian', nativeName: 'Lietuvių kalba', script: 'Latin', family: 'Indo-European (Baltic)', type: 'official', percentage: 85, speakerCount: '2.4 Million' }
  ], phrases: [
    { english: 'Hello', native: 'Labas', phonetic: 'LAH-bas', category: 'greeting' },
    { english: 'Thank you', native: 'Ačiū', phonetic: 'AH-choo', category: 'courtesy' }
  ], facts: ['Lithuanian retains archaic Proto-Indo-European linguistic traits.'] },

  { code: 'LU', name: 'Luxembourg', nativeName: 'Lëtzebuerg', flag: '🇱🇺', region: 'Europe', subregion: 'Western Europe', capital: 'Luxembourg City', population: 660000, multilingualScore: 9.9, coordinates: { x: 47, y: 34 }, languages: [
    { id: 'lb', name: 'Luxembourgish', nativeName: 'Lëtzebuergesch', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 55, speakerCount: '360,000' },
    { id: 'fr', name: 'French', nativeName: 'Français', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 86, speakerCount: '550,000' },
    { id: 'de', name: 'German', nativeName: 'Deutsch', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 70, speakerCount: '450,000' }
  ], phrases: [
    { english: 'Hello', native: 'Moien', phonetic: 'MOY-en', category: 'greeting' },
    { english: 'Thank you', native: 'Merci', phonetic: 'MAIR-see', category: 'courtesy' }
  ], facts: ['Trilingual education is mandatory for all citizens in Luxembourg.'] },

  { code: 'MT', name: 'Malta', nativeName: 'Malta', flag: '🇲🇹', region: 'Europe', subregion: 'Southern Europe', capital: 'Valletta', population: 530000, multilingualScore: 9.2, coordinates: { x: 51, y: 45 }, languages: [
    { id: 'mt', name: 'Maltese', nativeName: 'Malti', script: 'Latin', family: 'Afroasiatic (Semitic)', type: 'official', percentage: 97, speakerCount: '500,000' },
    { id: 'en', name: 'English', nativeName: 'English', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 88, speakerCount: '460,000' }
  ], phrases: [
    { english: 'Hello', native: 'Merħba / Bonġu', phonetic: 'MAIR-hbah / BON-joo', category: 'greeting' },
    { english: 'Thank you', native: 'Grazzi', phonetic: 'GRAHT-see', category: 'courtesy' }
  ], facts: ['Maltese is the only Semitic official language of the EU written in Latin script.'] },

  { code: 'MD', name: 'Moldova', nativeName: 'Moldova', flag: '🇲🇩', region: 'Europe', subregion: 'Eastern Europe', capital: 'Chisinau', population: 2500000, multilingualScore: 8.2, coordinates: { x: 58, y: 34 }, languages: [
    { id: 'ro', name: 'Romanian', nativeName: 'Limba română', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 80, speakerCount: '2.0 Million' },
    { id: 'ru', name: 'Russian', nativeName: 'Русский', script: 'Cyrillic', family: 'Indo-European (East Slavic)', type: 'widely_spoken', percentage: 15, speakerCount: '380,000' }
  ], phrases: [
    { english: 'Hello', native: 'Bună ziua', phonetic: 'BOO-nuh ZEE-wah', category: 'greeting' },
    { english: 'Thank you', native: 'Mulțumesc', phonetic: 'mool-tsoo-MESK', category: 'courtesy' }
  ], facts: ['In 2023, state language terminology was constitutionally set to Romanian.'] },

  { code: 'NL', name: 'Netherlands', nativeName: 'Nederland', flag: '🇳🇱', region: 'Europe', subregion: 'Western Europe', capital: 'Amsterdam', population: 17800000, multilingualScore: 8.5, coordinates: { x: 47, y: 31 }, languages: [
    { id: 'nl', name: 'Dutch', nativeName: 'Nederlands', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 95, speakerCount: '17 Million' },
    { id: 'fy', name: 'West Frisian', nativeName: 'Frysk', script: 'Latin', family: 'Indo-European (Germanic)', type: 'co-official', percentage: 2.2, speakerCount: '450,000' }
  ], phrases: [
    { english: 'Hello', native: 'Hallo', phonetic: 'HAH-loh', category: 'greeting' },
    { english: 'Thank you', native: 'Dank u wel', phonetic: 'DAHN-koo-wel', category: 'courtesy' }
  ], facts: ['West Frisian is the closest living language relative to English.'] },

  { code: 'NO', name: 'Norway', nativeName: 'Norge / Noreg', flag: '🇳🇴', region: 'Europe', subregion: 'Northern Europe', capital: 'Oslo', population: 5500000, multilingualScore: 8.2, coordinates: { x: 49, y: 22 }, languages: [
    { id: 'nb', name: 'Norwegian Bokmål', nativeName: 'Bokmål', script: 'Latin', family: 'Indo-European (North Germanic)', type: 'official', percentage: 85, speakerCount: '4.6 Million' },
    { id: 'nn', name: 'Norwegian Nynorsk', nativeName: 'Nynorsk', script: 'Latin', family: 'Indo-European (North Germanic)', type: 'official', percentage: 12, speakerCount: '650,000' },
    { id: 'se', name: 'Sami', nativeName: 'Sámegiella', script: 'Latin', family: 'Uralic (Sami)', type: 'co-official', percentage: 0.5, speakerCount: '30,000' }
  ], phrases: [
    { english: 'Hello', native: 'Hei', phonetic: 'HAY', category: 'greeting' },
    { english: 'Thank you', native: 'Tusen takk', phonetic: 'TOO-sen TAHK', category: 'courtesy' }
  ], facts: ['Norwegian has two official written standards: Bokmål and Nynorsk.'] },

  { code: 'PL', name: 'Poland', nativeName: 'Polska', flag: '🇵🇱', region: 'Europe', subregion: 'Eastern Europe', capital: 'Warsaw', population: 37700000, multilingualScore: 6.3, coordinates: { x: 53, y: 31 }, languages: [
    { id: 'pl', name: 'Polish', nativeName: 'Język polski', script: 'Latin', family: 'Indo-European (West Slavic)', type: 'official', percentage: 97, speakerCount: '37 Million' },
    { id: 'csb', name: 'Kashubian', nativeName: 'Kaszëbsczi jãzëk', script: 'Latin', family: 'Indo-European (West Slavic)', type: 'regional', percentage: 0.3, speakerCount: '100,000' }
  ], phrases: [
    { english: 'Hello', native: 'Cześć / Dzień dobry', phonetic: 'CHESHCH / JIEN DOH-bry', category: 'greeting' },
    { english: 'Thank you', native: 'Dziękuję', phonetic: 'jen-KOO-yeh', category: 'courtesy' }
  ], facts: ['Kashubian is recognized as a regional language in Pomerania.'] },

  { code: 'PT', name: 'Portugal', nativeName: 'Portugal', flag: '🇵🇹', region: 'Europe', subregion: 'Southern Europe', capital: 'Lisbon', population: 10300000, multilingualScore: 6.4, coordinates: { x: 40, y: 40 }, languages: [
    { id: 'pt', name: 'Portuguese', nativeName: 'Português', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 99, speakerCount: '10 Million' }
  ], phrases: [
    { english: 'Hello', native: 'Olá', phonetic: 'oh-LAH', category: 'greeting' },
    { english: 'Thank you', native: 'Obrigado / Obrigada', phonetic: 'oh-bree-GAH-doo / oh-bree-GAH-dah', category: 'courtesy' }
  ], facts: ['Portuguese is spoken by over 260 million people worldwide.'] },

  { code: 'RO', name: 'Romania', nativeName: 'România', flag: '🇷🇴', region: 'Europe', subregion: 'Eastern Europe', capital: 'Bucharest', population: 19000000, multilingualScore: 7.1, coordinates: { x: 56, y: 36 }, languages: [
    { id: 'ro', name: 'Romanian', nativeName: 'Limba română', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 89, speakerCount: '17 Million' },
    { id: 'hu', name: 'Hungarian', nativeName: 'Magyar', script: 'Latin', family: 'Uralic (Finno-Ugric)', type: 'minority', percentage: 6, speakerCount: '1.2 Million' }
  ], phrases: [
    { english: 'Hello', native: 'Bună ziua', phonetic: 'BOO-nuh ZEE-wah', category: 'greeting' },
    { english: 'Thank you', native: 'Mulțumesc', phonetic: 'mool-tsoo-MESK', category: 'courtesy' }
  ], facts: ['Romanian is the sole Romance language spoken in Eastern Europe.'] },

  { code: 'RU', name: 'Russia', nativeName: 'Россия', flag: '🇷🇺', region: 'Europe', subregion: 'Eastern Europe', capital: 'Moscow', population: 144000000, multilingualScore: 9.0, coordinates: { x: 68, y: 25 }, languages: [
    { id: 'ru', name: 'Russian', nativeName: 'Русский', script: 'Cyrillic', family: 'Indo-European (East Slavic)', type: 'official', percentage: 96, speakerCount: '138 Million' },
    { id: 'tt', name: 'Tatar', nativeName: 'Татарча', script: 'Cyrillic', family: 'Turkic', type: 'regional', percentage: 3.2, speakerCount: '4.2 Million' }
  ], phrases: [
    { english: 'Hello', native: 'Здравствуйте / Привет', phonetic: 'ZDRAHV-stvooy-teh / pree-VEET', category: 'greeting' },
    { english: 'Thank you', native: 'Спасибо', phonetic: 'spah-SEE-bah', category: 'courtesy' }
  ], facts: ['Russia has over 35 official co-languages in autonomous republics.'] },

  { code: 'RS', name: 'Serbia', nativeName: 'Srbija', flag: '🇷🇸', region: 'Europe', subregion: 'Southern Europe', capital: 'Belgrade', population: 6600000, multilingualScore: 8.4, coordinates: { x: 53, y: 37 }, languages: [
    { id: 'sr', name: 'Serbian', nativeName: 'Српски', script: 'Cyrillic / Latin', family: 'Indo-European (South Slavic)', type: 'official', percentage: 88, speakerCount: '5.8 Million' }
  ], phrases: [
    { english: 'Hello', native: 'Zdravo', phonetic: 'ZDRAH-voh', category: 'greeting' },
    { english: 'Thank you', native: 'Hvala', phonetic: 'HVAH-lah', category: 'courtesy' }
  ], facts: ['Serbian legally recognizes both Cyrillic and Latin alphabets.'] },

  { code: 'SK', name: 'Slovakia', nativeName: 'Slovensko', flag: '🇸🇰', region: 'Europe', subregion: 'Eastern Europe', capital: 'Bratislava', population: 5400000, multilingualScore: 7.3, coordinates: { x: 52, y: 34 }, languages: [
    { id: 'sk', name: 'Slovak', nativeName: 'Slovenčina', script: 'Latin', family: 'Indo-European (West Slavic)', type: 'official', percentage: 85, speakerCount: '4.6 Million' },
    { id: 'hu', name: 'Hungarian', nativeName: 'Magyar', script: 'Latin', family: 'Uralic (Finno-Ugric)', type: 'minority', percentage: 8.5, speakerCount: '460,000' }
  ], phrases: [
    { english: 'Hello', native: 'Ahoj / Dobrý deň', phonetic: 'AH-hoy / DOH-bree den', category: 'greeting' },
    { english: 'Thank you', native: 'Ďakujem', phonetic: 'DYAH-koo-yem', category: 'courtesy' }
  ], facts: ['Slovak and Czech are mutually intelligible.'] },

  { code: 'SI', name: 'Slovenia', nativeName: 'Slovenija', flag: '🇸🇮', region: 'Europe', subregion: 'Southern Europe', capital: 'Ljubljana', population: 2100000, multilingualScore: 7.7, coordinates: { x: 50, y: 36 }, languages: [
    { id: 'sl', name: 'Slovene', nativeName: 'Slovenščina', script: 'Latin', family: 'Indo-European (South Slavic)', type: 'official', percentage: 88, speakerCount: '1.8 Million' }
  ], phrases: [
    { english: 'Hello', native: 'Živjo', phonetic: 'ZHEEV-yoh', category: 'greeting' },
    { english: 'Thank you', native: 'Hvala', phonetic: 'HVAH-lah', category: 'courtesy' }
  ], facts: ['Slovene preserves dual grammatical number in modern usage.'] },

  { code: 'ES', name: 'Spain', nativeName: 'España', flag: '🇪🇸', region: 'Europe', subregion: 'Southern Europe', capital: 'Madrid', population: 47400000, multilingualScore: 8.6, coordinates: { x: 42, y: 39 }, languages: [
    { id: 'es', name: 'Spanish', nativeName: 'Castellano', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 99, speakerCount: '46 Million' },
    { id: 'ca', name: 'Catalan', nativeName: 'Català', script: 'Latin', family: 'Indo-European (Romance)', type: 'co-official', percentage: 17.5, speakerCount: '8.3 Million' },
    { id: 'gl', name: 'Galician', nativeName: 'Galego', script: 'Latin', family: 'Indo-European (Romance)', type: 'co-official', percentage: 5.2, speakerCount: '2.4 Million' },
    { id: 'eu', name: 'Basque', nativeName: 'Euskara', script: 'Latin', family: 'Language Isolate', type: 'co-official', percentage: 1.5, speakerCount: '750,000' }
  ], phrases: [
    { english: 'Hello', native: 'Hola', phonetic: 'OH-lah', category: 'greeting' },
    { english: 'Thank you', native: 'Gracias', phonetic: 'GRAH-see-as', category: 'courtesy' }
  ], facts: ['Basque (Euskara) is a language isolate unrelated to Indo-European.'] },

  { code: 'SE', name: 'Sweden', nativeName: 'Sverige', flag: '🇸🇪', region: 'Europe', subregion: 'Northern Europe', capital: 'Stockholm', population: 10500000, multilingualScore: 8.0, coordinates: { x: 52, y: 22 }, languages: [
    { id: 'sv', name: 'Swedish', nativeName: 'Svenska', script: 'Latin', family: 'Indo-European (North Germanic)', type: 'official', percentage: 95, speakerCount: '10 Million' }
  ], phrases: [
    { english: 'Hello', native: 'Hej', phonetic: 'HEY', category: 'greeting' },
    { english: 'Thank you', native: 'Tack så mycket', phonetic: 'TAHK soh MEE-keh', category: 'courtesy' }
  ], facts: ['Sweden recognizes 5 official national minority languages.'] },

  { code: 'CH', name: 'Switzerland', nativeName: 'Schweiz', flag: '🇨🇭', region: 'Europe', subregion: 'Western Europe', capital: 'Bern', population: 8800000, multilingualScore: 9.2, coordinates: { x: 48, y: 35 }, languages: [
    { id: 'de', name: 'German', nativeName: 'Deutsch', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 62.6, speakerCount: '5.5 Million' },
    { id: 'fr', name: 'French', nativeName: 'Français', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 22.9, speakerCount: '2.0 Million' },
    { id: 'it', name: 'Italian', nativeName: 'Italiano', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 8.2, speakerCount: '720,000' },
    { id: 'rm', name: 'Romansh', nativeName: 'Rumantsch', script: 'Latin', family: 'Indo-European (Rhaeto-Romance)', type: 'official', percentage: 0.5, speakerCount: '44,000' }
  ], phrases: [
    { english: 'Hello', native: 'Grüezi / Bonjour / Ciao', phonetic: 'GROO-et-see / bon-ZHOOR / CHOW', category: 'greeting' },
    { english: 'Thank you', native: 'Merci vielmal / Grazie', phonetic: 'MAIR-see FEEL-mahl / GRAHT-see-eh', category: 'courtesy' }
  ], facts: ['Switzerland has four national official languages in its constitution.'] },

  { code: 'UA', name: 'Ukraine', nativeName: 'Україна', flag: '🇺🇦', region: 'Europe', subregion: 'Eastern Europe', capital: 'Kyiv', population: 38000000, multilingualScore: 7.5, coordinates: { x: 57, y: 32 }, languages: [
    { id: 'uk', name: 'Ukrainian', nativeName: 'Українська', script: 'Cyrillic', family: 'Indo-European (East Slavic)', type: 'official', percentage: 80, speakerCount: '32 Million' },
    { id: 'crh', name: 'Crimean Tatar', nativeName: 'Qırımlı tili', script: 'Latin / Cyrillic', family: 'Turkic', type: 'indigenous', percentage: 0.8, speakerCount: '300,000' }
  ], phrases: [
    { english: 'Hello', native: 'Вітаю / Привіт', phonetic: 'vee-TAH-yoo / pry-VEET', category: 'greeting' },
    { english: 'Thank you', native: 'Дякую', phonetic: 'DYAH-koo-yoo', category: 'courtesy' }
  ], facts: ['Ukrainian Cyrillic contains letters "Ґ", "Є", "І", "Ї".'] },

  { code: 'GB', name: 'United Kingdom', nativeName: 'United Kingdom', flag: '🇬🇧', region: 'Europe', subregion: 'Northern Europe', capital: 'London', population: 67000000, multilingualScore: 6.2, coordinates: { x: 44, y: 30 }, languages: [
    { id: 'en', name: 'English', nativeName: 'English', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 98, speakerCount: '65 Million' },
    { id: 'cy', name: 'Welsh', nativeName: 'Cymraeg', script: 'Latin', family: 'Indo-European (Celtic)', type: 'co-official', percentage: 1, speakerCount: '890,000' }
  ], phrases: [
    { english: 'Hello', native: 'Hello / Bore da', phonetic: 'heh-LOH / BOH-reh DAH', category: 'greeting' },
    { english: 'Thank you', native: 'Thank you / Diolch', phonetic: 'THANK yoo / DEE-olkh', category: 'courtesy' }
  ], facts: ['Welsh has equal official status with English in Wales.'] },

  { code: 'VA', name: 'Vatican City', nativeName: 'Civitas Vaticana', flag: '🇻🇦', region: 'Europe', subregion: 'Southern Europe', capital: 'Vatican City', population: 800, multilingualScore: 9.5, coordinates: { x: 50, y: 39 }, languages: [
    { id: 'la', name: 'Latin', nativeName: 'Lingua Latina', script: 'Latin', family: 'Indo-European (Italic)', type: 'official', percentage: 100, speakerCount: 'Liturgical' },
    { id: 'it', name: 'Italian', nativeName: 'Italiano', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 100, speakerCount: '800' }
  ], phrases: [
    { english: 'Hello', native: 'Salve', phonetic: 'SAHL-veh', category: 'greeting' },
    { english: 'Thank you', native: 'Gratias tibi ago', phonetic: 'GRAH-tee-as TEE-bee AH-goh', category: 'courtesy' }
  ], facts: ['Vatican City is the only nation where Latin is an official state language.'] }
];

console.log(`Successfully compiled base array with ${worldCountries.length} countries.`);
