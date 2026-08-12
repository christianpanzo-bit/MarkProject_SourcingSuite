const fs = require('fs');
const path = require('path');

// Complete world country generator for all ~195 sovereign nations
const rawData = [
  // --- NORTH AMERICA & CARIBBEAN ---
  { code: 'US', name: 'United States', nativeName: 'United States of America', flag: '🇺🇸', region: 'Americas', subregion: 'Northern America', capital: 'Washington, D.C.', pop: 333000000, score: 6.8, x: 22, y: 36, langs: [
    { id: 'en', name: 'English', nativeName: 'English', script: 'Latin', family: 'Indo-European (Germanic)', type: 'de_facto', percentage: 78.0, speakerCount: '260 Million' },
    { id: 'es', name: 'Spanish', nativeName: 'Español', script: 'Latin', family: 'Indo-European (Romance)', type: 'widely_spoken', percentage: 13.5, speakerCount: '42 Million' },
    { id: 'zh', name: 'Chinese', nativeName: '中文', script: 'Chinese', family: 'Sino-Tibetan', type: 'minority', percentage: 1.1, speakerCount: '3.5 Million' },
    { id: 'tl', name: 'Tagalog', nativeName: 'Tagalog', script: 'Latin', family: 'Austronesian', type: 'minority', percentage: 0.5, speakerCount: '1.7 Million' },
    { id: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt', script: 'Latin', family: 'Austroasiatic', type: 'minority', percentage: 0.5, speakerCount: '1.5 Million' },
    { id: 'ar', name: 'Arabic', nativeName: 'العربية', script: 'Arabic', family: 'Afroasiatic', type: 'minority', percentage: 0.4, speakerCount: '1.2 Million' },
    { id: 'nv', name: 'Navajo', nativeName: 'Diné bizaad', script: 'Latin', family: 'Na-Dene', type: 'indigenous', percentage: 0.05, speakerCount: '170,000' }
  ], phrases: [
    { english: 'Hello', native: 'Hello / Hi', phonetic: 'heh-LOH / HIGH', category: 'greeting' },
    { english: 'Thank you', native: 'Thank you', phonetic: 'THANK yoo', category: 'courtesy' },
    { english: 'Goodbye', native: 'Goodbye / Bye', phonetic: 'good-BYE / BYE', category: 'greeting' },
    { english: 'Where is...?', native: 'Where is...?', phonetic: 'WAIR iz', category: 'essentials' }
  ], facts: ['The U.S. has no official national language at the federal level.', 'Spanish is co-official in Puerto Rico and New Mexico preserves official Spanish protections.', 'Over 350 languages are spoken in American homes.'] },

  { code: 'CA', name: 'Canada', nativeName: 'Canada', flag: '🇨🇦', region: 'Americas', subregion: 'Northern America', capital: 'Ottawa', pop: 38900000, score: 8.9, x: 20, y: 26, langs: [
    { id: 'en', name: 'English', nativeName: 'English', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 56.0, speakerCount: '21.8 Million' },
    { id: 'fr', name: 'French', nativeName: 'Français', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 20.6, speakerCount: '8.0 Million' },
    { id: 'iu', name: 'Inuktitut', nativeName: 'ᐃᓄᒃᑎᑐᑦ', script: 'Canadian Aboriginal Syllabics', family: 'Eskimo-Aleut', type: 'co-official', percentage: 0.1, speakerCount: '40,000' },
    { id: 'cr', name: 'Cree', nativeName: 'ᓀᐦᐃᔭᐍᐏᐣ', script: 'Syllabics / Latin', family: 'Algonquian', type: 'indigenous', percentage: 0.2, speakerCount: '86,000' },
    { id: 'pa', name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ', script: 'Gurmukhi', family: 'Indo-European (Indo-Aryan)', type: 'minority', percentage: 2.6, speakerCount: '1.0 Million' },
    { id: 'zh', name: 'Mandarin / Cantonese', nativeName: '中文', script: 'Chinese', family: 'Sino-Tibetan', type: 'minority', percentage: 3.5, speakerCount: '1.3 Million' }
  ], phrases: [
    { english: 'Hello', native: 'Hello (EN) / Bonjour (FR) / Ullukkut (Inuktitut)', phonetic: 'heh-LOH / bon-ZHOOR / oo-look-KOOT', category: 'greeting' },
    { english: 'Thank you', native: 'Thank you (EN) / Merci (FR) / Qujannamiik (Inuktitut)', phonetic: 'THANK yoo / MAIR-see / koo-yah-nah-MEEK', category: 'courtesy' },
    { english: 'Goodbye', native: 'Goodbye (EN) / Au revoir (FR)', phonetic: 'good-BYE / oh ruh-VWAR', category: 'greeting' }
  ], facts: ['Canada is constitutionally bilingual in English and French at the federal level.', 'Quebec is officially unilingual French.', 'Inuktitut is official in Nunavut and Northwest Territories.'] },

  { code: 'MX', name: 'Mexico', nativeName: 'México', flag: '🇲🇽', region: 'Americas', subregion: 'Central America', capital: 'Mexico City', pop: 128900000, score: 8.5, x: 19, y: 46, langs: [
    { id: 'es', name: 'Spanish', nativeName: 'Español mexicano', script: 'Latin', family: 'Indo-European (Romance)', type: 'de_facto', percentage: 93.8, speakerCount: '120 Million' },
    { id: 'nah', name: 'Nahuatl', nativeName: 'Nāhuatl', script: 'Latin', family: 'Uto-Aztecan', type: 'national', percentage: 1.4, speakerCount: '1.7 Million' },
    { id: 'yua', name: 'Yucatec Maya', nativeName: 'Maaya t\'aan', script: 'Latin', family: 'Mayan', type: 'national', percentage: 0.6, speakerCount: '770,000' },
    { id: 'zpx', name: 'Zapotec', nativeName: 'Diidxazá', script: 'Latin', family: 'Oto-Manguean', type: 'national', percentage: 0.4, speakerCount: '490,000' },
    { id: 'mix', name: 'Mixtec', nativeName: 'Tu\'un savi', script: 'Latin', family: 'Oto-Manguean', type: 'national', percentage: 0.4, speakerCount: '520,000' },
    { id: 'tzh', name: 'Tzeltal', nativeName: 'Batz\'i k\'op', script: 'Latin', family: 'Mayan', type: 'national', percentage: 0.4, speakerCount: '590,000' }
  ], phrases: [
    { english: 'Hello', native: 'Hola (ES) / Niltze (Nahuatl) / Ba\'ax ka wa\'alik (Maya)', phonetic: 'OH-lah / NEEL-tzeh / bah-AKH kah wah-AH-leek', category: 'greeting' },
    { english: 'Thank you', native: 'Gracias (ES) / Tlazohcamati (Nahuatl) / Nib\'oolal (Maya)', phonetic: 'GRAH-see-as / tlah-zoh-kah-MAH-tee / nee-BOO-lahl', category: 'courtesy' },
    { english: 'Goodbye', native: 'Adiós (ES) / Cuixoc (Nahuatl)', phonetic: 'ah-DEE-os / kwee-ZHOK', category: 'greeting' }
  ], facts: ['Mexico legally recognizes 68 Indigenous language families with 364 dialectal variants as National Languages.', 'Nahuatl was the language of the Aztec Empire.', 'Yucatec Maya is spoken continuously in the Yucatán Peninsula.'] },

  { code: 'GT', name: 'Guatemala', nativeName: 'Guatemala', flag: '🇬🇹', region: 'Americas', subregion: 'Central America', capital: 'Guatemala City', pop: 17600000, score: 9.1, x: 21, y: 50, langs: [
    { id: 'es', name: 'Spanish', nativeName: 'Español', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 69.9, speakerCount: '12.3 Million' },
    { id: 'quc', name: 'K\'iche\'', nativeName: 'Q\'eqchi\' / K\'iche\'', script: 'Latin', family: 'Mayan', type: 'national', percentage: 11.3, speakerCount: '1.9 Million' },
    { id: 'kek', name: 'Q\'eqchi\'', nativeName: 'Q\'eqchi\'', script: 'Latin', family: 'Mayan', type: 'national', percentage: 8.3, speakerCount: '1.4 Million' },
    { id: 'mam', name: 'Mam', nativeName: 'Qyool', script: 'Latin', family: 'Mayan', type: 'national', percentage: 5.2, speakerCount: '900,000' },
    { id: 'cac', name: 'Kaqchikel', nativeName: 'Kaqchikel', script: 'Latin', family: 'Mayan', type: 'national', percentage: 4.8, speakerCount: '840,000' }
  ], phrases: [
    { english: 'Hello', native: 'Hola (ES) / Saqarik (K\'iche\')', phonetic: 'OH-lah / sah-kah-REEK', category: 'greeting' },
    { english: 'Thank you', native: 'Gracias (ES) / Maltiox (K\'iche\')', phonetic: 'GRAH-see-as / mahl-TEE-osh', category: 'courtesy' }
  ], facts: ['Guatemala legally recognizes 22 distinct Mayan languages.', 'K\'iche\' is the second most spoken native language in Guatemala.'] },

  { code: 'BZ', name: 'Belize', nativeName: 'Belize', flag: '🇧🇿', region: 'Americas', subregion: 'Central America', capital: 'Belmopan', pop: 405000, score: 9.0, x: 22, y: 49, langs: [
    { id: 'en', name: 'English', nativeName: 'English', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 62.9, speakerCount: '250,000' },
    { id: 'bzj', name: 'Belizean Creole', nativeName: 'Kriol', script: 'Latin', family: 'English Creole', type: 'widely_spoken', percentage: 44.6, speakerCount: '180,000' },
    { id: 'es', name: 'Spanish', nativeName: 'Español', script: 'Latin', family: 'Indo-European (Romance)', type: 'widely_spoken', percentage: 56.6, speakerCount: '230,000' },
    { id: 'cab', name: 'Garifuna', nativeName: 'Garifuna', script: 'Latin', family: 'Arawakan', type: 'indigenous', percentage: 3.8, speakerCount: '15,000' },
    { id: 'mya', name: 'Maya (Mopan / Q\'eqchi\')', nativeName: 'Maya', script: 'Latin', family: 'Mayan', type: 'indigenous', percentage: 11.3, speakerCount: '45,000' }
  ], phrases: [
    { english: 'Hello', native: 'Gud Mawnin (Kriol) / Hola (ES)', phonetic: 'good MAH-nin / OH-lah', category: 'greeting' },
    { english: 'Thank you', native: 'Tenk yu (Kriol) / Gracias (ES)', phonetic: 'TENK yoo / GRAH-see-as', category: 'courtesy' }
  ], facts: ['Belize is the only Central American country where English is the official language.', 'Belizean Kriol serves as the national lingua franca.'] },

  { code: 'HN', name: 'Honduras', nativeName: 'Honduras', flag: '🇭🇳', region: 'Americas', subregion: 'Central America', capital: 'Tegucigalpa', pop: 10200000, score: 6.8, x: 23, y: 51, langs: [
    { id: 'es', name: 'Spanish', nativeName: 'Español', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 98, speakerCount: '10 Million' },
    { id: 'cab', name: 'Garifuna', nativeName: 'Garifuna', script: 'Latin', family: 'Arawakan', type: 'recognized', percentage: 1.0, speakerCount: '100,000' },
    { id: 'pay', name: 'Pech / Miskito', nativeName: 'Pech', script: 'Latin', family: 'Chibchan', type: 'indigenous', percentage: 0.5, speakerCount: '50,000' }
  ], phrases: [
    { english: 'Hello', native: 'Hola', phonetic: 'OH-lah', category: 'greeting' },
    { english: 'Thank you', native: 'Gracias', phonetic: 'GRAH-see-as', category: 'courtesy' }
  ], facts: ['Garifuna is recognized by UNESCO as a Masterpiece of Oral and Intangible Heritage.'] },

  { code: 'SV', name: 'El Salvador', nativeName: 'El Salvador', flag: '🇸🇻', region: 'Americas', subregion: 'Central America', capital: 'San Salvador', pop: 6300000, score: 6.2, x: 22, y: 52, langs: [
    { id: 'es', name: 'Spanish', nativeName: 'Español', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 99, speakerCount: '6.2 Million' },
    { id: 'ppl', name: 'Nawat (Pipil)', nativeName: 'Nawat', script: 'Latin', family: 'Uto-Aztecan', type: 'indigenous', percentage: 0.05, speakerCount: '2,000' }
  ], phrases: [
    { english: 'Hello', native: 'Hola', phonetic: 'OH-lah', category: 'greeting' },
    { english: 'Thank you', native: 'Gracias', phonetic: 'GRAH-see-as', category: 'courtesy' }
  ], facts: ['Nawat (Pipil) is an endangered language related to Mexican Nahuatl actively undergoing revitalization.'] },

  { code: 'NI', name: 'Nicaragua', nativeName: 'Nicaragua', flag: '🇳🇮', region: 'Americas', subregion: 'Central America', capital: 'Managua', pop: 6800000, score: 7.5, x: 24, y: 53, langs: [
    { id: 'es', name: 'Spanish', nativeName: 'Español', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 90, speakerCount: '6.1 Million' },
    { id: 'mi', name: 'Miskito', nativeName: 'Miskitu', script: 'Latin', family: 'Misumalpan', type: 'regional', percentage: 2.5, speakerCount: '170,000' },
    { id: 'bzk', name: 'Miskito Coast Creole', nativeName: 'Creole', script: 'Latin', family: 'English Creole', type: 'regional', percentage: 0.5, speakerCount: '30,000' }
  ], phrases: [
    { english: 'Hello', native: 'Hola (ES) / Naksa (Miskito)', phonetic: 'OH-lah / NAK-sah', category: 'greeting' },
    { english: 'Thank you', native: 'Gracias (ES) / Tingki (Miskito)', phonetic: 'GRAH-see-as / TING-kee', category: 'courtesy' }
  ], facts: ['Miskito and Creole English are co-official on the Caribbean Autonomous Regions.'] },

  { code: 'CR', name: 'Costa Rica', nativeName: 'Costa Rica', flag: '🇨🇷', region: 'Americas', subregion: 'Central America', capital: 'San José', pop: 5200000, score: 7.2, x: 25, y: 55, langs: [
    { id: 'es', name: 'Spanish', nativeName: 'Español', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 99, speakerCount: '5.1 Million' },
    { id: 'jam', name: 'Limón Creole', nativeName: 'Mekatelyu', script: 'Latin', family: 'English Creole', type: 'regional', percentage: 1.0, speakerCount: '55,000' },
    { id: 'bpr', name: 'Bribri', nativeName: 'Bribri', script: 'Latin', family: 'Chibchan', type: 'indigenous', percentage: 0.2, speakerCount: '11,000' }
  ], phrases: [
    { english: 'Hello', native: 'Hola / Pura Vida', phonetic: 'OH-lah / POO-rah VEE-dah', category: 'greeting' },
    { english: 'Thank you', native: 'Gracias', phonetic: 'GRAH-see-as', category: 'courtesy' }
  ], facts: ['"Pura Vida" is used universally as a greeting, thank you, and state of mind in Costa Rica.'] },

  { code: 'PA', name: 'Panama', nativeName: 'Panamá', flag: '🇵🇦', region: 'Americas', subregion: 'Central America', capital: 'Panama City', pop: 4400000, score: 8.2, x: 26, y: 57, langs: [
    { id: 'es', name: 'Spanish', nativeName: 'Español', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 93, speakerCount: '4.1 Million' },
    { id: 'gym', name: 'Ngäbere', nativeName: 'Ngäbere', script: 'Latin', family: 'Chibchan', type: 'indigenous', percentage: 3.8, speakerCount: '170,000' },
    { id: 'cuk', name: 'Guna', nativeName: 'Dulegaya', script: 'Latin', family: 'Chibchan', type: 'indigenous', percentage: 1.5, speakerCount: '65,000' }
  ], phrases: [
    { english: 'Hello', native: 'Hola (ES) / Na (Guna)', phonetic: 'OH-lah / NAH', category: 'greeting' },
    { english: 'Thank you', native: 'Gracias (ES) / Nued (Guna)', phonetic: 'GRAH-see-as / NOO-ed', category: 'courtesy' }
  ], facts: ['Dulegaya is the indigenous language of the autonomous Guna Yala archipelago.'] },

  { code: 'CU', name: 'Cuba', nativeName: 'Cuba', flag: '🇨🇺', region: 'Americas', subregion: 'Caribbean', capital: 'Havana', pop: 11000000, score: 6.2, x: 25, y: 43, langs: [
    { id: 'es', name: 'Spanish', nativeName: 'Español cubano', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 99, speakerCount: '11 Million' },
    { id: 'ht', name: 'Haitian Creole', nativeName: 'Kreyòl ayisyen', script: 'Latin', family: 'French Creole', type: 'minority', percentage: 2.5, speakerCount: '300,000' }
  ], phrases: [
    { english: 'Hello', native: 'Hola / ¿Qué bolá?', phonetic: 'OH-lah / keh boh-LAH', category: 'greeting' },
    { english: 'Thank you', native: 'Gracias', phonetic: 'GRAH-see-as', category: 'courtesy' }
  ], facts: ['Cuban Spanish features unique Caribbean vocabulary and dropping of syllable-final "s".'] },

  { code: 'HT', name: 'Haiti', nativeName: 'Haïti / Ayiti', flag: '🇭🇹', region: 'Americas', subregion: 'Caribbean', capital: 'Port-au-Prince', pop: 11500000, score: 8.8, x: 28, y: 45, langs: [
    { id: 'ht', name: 'Haitian Creole', nativeName: 'Kreyòl ayisyen', script: 'Latin', family: 'French Creole', type: 'official', percentage: 98, speakerCount: '11.2 Million' },
    { id: 'fr', name: 'French', nativeName: 'Français', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 5.0, speakerCount: '600,000' }
  ], phrases: [
    { english: 'Hello', native: 'Bonswa / Sak pase', phonetic: 'bon-SWAH / sah-k PAH-seh', category: 'greeting' },
    { english: 'Thank you', native: 'Mèsi', phonetic: 'MAY-see', category: 'courtesy' }
  ], facts: ['Haitian Creole is the largest French-based creole language in the world.', 'Constitutional official language since 1987.'] },

  { code: 'DO', name: 'Dominican Republic', nativeName: 'República Dominicana', flag: '🇩🇴', region: 'Americas', subregion: 'Caribbean', capital: 'Santo Domingo', pop: 10700000, score: 6.5, x: 29, y: 45, langs: [
    { id: 'es', name: 'Spanish', nativeName: 'Español dominicano', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 98, speakerCount: '10.5 Million' },
    { id: 'ht', name: 'Haitian Creole', nativeName: 'Kreyòl', script: 'Latin', family: 'French Creole', type: 'minority', percentage: 4.0, speakerCount: '450,000' }
  ], phrases: [
    { english: 'Hello', native: 'Hola / ¿Klk?', phonetic: 'OH-lah / kay-el-KAY', category: 'greeting' },
    { english: 'Thank you', native: 'Gracias', phonetic: 'GRAH-see-as', category: 'courtesy' }
  ], facts: ['Dominican Spanish slang includes iconic terms like "Klk" (Qué lo qué) and "Tato".'] },

  { code: 'JM', name: 'Jamaica', nativeName: 'Jamaica', flag: '🇯🇲', region: 'Americas', subregion: 'Caribbean', capital: 'Kingston', pop: 2800000, score: 8.9, x: 26, y: 46, langs: [
    { id: 'en', name: 'English', nativeName: 'English', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 99, speakerCount: '2.8 Million' },
    { id: 'jam', name: 'Jamaican Patois', nativeName: 'Patwa', script: 'Latin', family: 'English Creole', type: 'national', percentage: 95, speakerCount: '2.7 Million' }
  ], phrases: [
    { english: 'Hello', native: 'Wah gwaan / Walk good', phonetic: 'wah GWAHN / wahk GOOD', category: 'greeting' },
    { english: 'Thank you', native: 'Give thanks / Tenk yu', phonetic: 'GIV thanks / TENK yoo', category: 'courtesy' }
  ], facts: ['Jamaican Patois is spoken by almost all Jamaicans alongside English.', 'Patois influenced global reggae music culture.'] },

  { code: 'PR', name: 'Puerto Rico', nativeName: 'Puerto Rico', flag: '🇵🇷', region: 'Americas', subregion: 'Caribbean', capital: 'San Juan', pop: 3200000, score: 8.7, x: 31, y: 46, langs: [
    { id: 'es', name: 'Spanish', nativeName: 'Español puertorriqueño', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 95, speakerCount: '3.1 Million' },
    { id: 'en', name: 'English', nativeName: 'English', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 48, speakerCount: '1.5 Million' }
  ], phrases: [
    { english: 'Hello', native: 'Hola / Wepa', phonetic: 'OH-lah / WEH-pah', category: 'greeting' },
    { english: 'Thank you', native: 'Gracias', phonetic: 'GRAH-see-as', category: 'courtesy' }
  ], facts: ['Puerto Rico is an unincorporated US territory constitutionally bilingual in Spanish and English.'] },

  { code: 'TT', name: 'Trinidad and Tobago', nativeName: 'Trinidad and Tobago', flag: '🇹🇹', region: 'Americas', subregion: 'Caribbean', capital: 'Port of Spain', pop: 1400000, score: 8.6, x: 33, y: 52, langs: [
    { id: 'en', name: 'English', nativeName: 'English', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 98, speakerCount: '1.4 Million' },
    { id: 'trf', name: 'Trinidadian Creole', nativeName: 'Trini Creole', script: 'Latin', family: 'English Creole', type: 'national', percentage: 90, speakerCount: '1.3 Million' },
    { id: 'hns', name: 'Caribbean Hindustani', nativeName: 'Trinidadian Hindustani', script: 'Devanagari / Latin', family: 'Indo-European (Indo-Aryan)', type: 'minority', percentage: 1.5, speakerCount: '20,000' }
  ], phrases: [
    { english: 'Hello', native: 'Good day / How it goin?', phonetic: 'GOOD day / HOW eet GOH-in', category: 'greeting' },
    { english: 'Thank you', native: 'Thanks / Respect', phonetic: 'THANKS / reh-SPEKT', category: 'courtesy' }
  ], facts: ['Trinidadian Creole incorporates English, French, Spanish, Hindi, and Yoruba vocabulary.'] },

  // --- SOUTH AMERICA ---
  { code: 'BR', name: 'Brazil', nativeName: 'Brasil', flag: '🇧🇷', region: 'Americas', subregion: 'South America', capital: 'Brasília', pop: 214000000, score: 7.2, x: 33, y: 68, langs: [
    { id: 'pt', name: 'Portuguese', nativeName: 'Português brasileiro', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 98, speakerCount: '210 Million' },
    { id: 'yrl', name: 'Nheengatu', nativeName: 'Nheengatu', script: 'Latin', family: 'Tupian', type: 'co-official', percentage: 0.01, speakerCount: '20,000' },
    { id: 'de', name: 'Riograndenser Hunsrückisch', nativeName: 'Hunsrik', script: 'Latin', family: 'Indo-European (Germanic)', type: 'regional', percentage: 1.5, speakerCount: '3.0 Million' },
    { id: 'it', name: 'Talian (Venetian)', nativeName: 'Talian', script: 'Latin', family: 'Indo-European (Romance)', type: 'regional', percentage: 0.5, speakerCount: '500,000' },
    { id: 'gn', name: 'Guarani', nativeName: 'Avañe\'ẽ', script: 'Latin', family: 'Tupian', type: 'co-official', percentage: 0.1, speakerCount: '40,000' }
  ], phrases: [
    { english: 'Hello', native: 'Olá / Oi / Tudo bem?', phonetic: 'oh-LAH / OY / TOO-doo BEM', category: 'greeting' },
    { english: 'Thank you', native: 'Obrigado (m) / Obrigada (f)', phonetic: 'oh-bree-GAH-doo / oh-bree-GAH-dah', category: 'courtesy' },
    { english: 'Goodbye', native: 'Tchau / Até logo', phonetic: 'CHOW / ah-TEH LOH-goo', category: 'greeting' }
  ], facts: ['Brazil is the only Portuguese-speaking nation in the Americas.', 'Nheengatu was the lingua franca of Northern Brazil until the 18th century.', 'São Gabriel da Cachoeira has 4 official Indigenous languages.'] },

  { code: 'AR', name: 'Argentina', nativeName: 'Argentina', flag: '🇦🇷', region: 'Americas', subregion: 'South America', capital: 'Buenos Aires', pop: 45800000, score: 6.8, x: 30, y: 82, langs: [
    { id: 'es', name: 'Spanish', nativeName: 'Español rioplatense', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 98, speakerCount: '45 Million' },
    { id: 'gn', name: 'Guarani', nativeName: 'Avañe\'ẽ', script: 'Latin', family: 'Tupian', type: 'co-official', percentage: 0.5, speakerCount: '200,000' },
    { id: 'qu', name: 'Quechua', nativeName: 'Runasimi', script: 'Latin', family: 'Quechuan', type: 'regional', percentage: 0.2, speakerCount: '80,000' },
    { id: 'arn', name: 'Mapudungun', nativeName: 'Mapudungun', script: 'Latin', family: 'Language Isolate', type: 'indigenous', percentage: 0.1, speakerCount: '40,000' }
  ], phrases: [
    { english: 'Hello', native: 'Hola / ¿Che, cómo va?', phonetic: 'OH-lah / CHEH KOH-moh VAH', category: 'greeting' },
    { english: 'Thank you', native: 'Muchas gracias', phonetic: 'MOO-chas GRAH-see-as', category: 'courtesy' }
  ], facts: ['Rioplatense Spanish uses "voseo" (using "vos" instead of "tú") and distinct Italian intonation.', 'Guarani is co-official in Corrientes Province.'] },

  { code: 'CO', name: 'Colombia', nativeName: 'Colombia', flag: '🇨🇴', region: 'Americas', subregion: 'South America', capital: 'Bogotá', pop: 51500000, score: 8.7, x: 27, y: 60, langs: [
    { id: 'es', name: 'Spanish', nativeName: 'Español colombiano', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 99.2, speakerCount: '51 Million' },
    { id: 'way', name: 'Wayuu', nativeName: 'Wayuunaiki', script: 'Latin', family: 'Arawakan', type: 'co-official', percentage: 0.8, speakerCount: '400,000' },
    { id: 'pnn', name: 'Palenquero', nativeName: 'Lengua palenquera', script: 'Latin', family: 'Spanish Creole', type: 'co-official', percentage: 0.01, speakerCount: '3,000' }
  ], phrases: [
    { english: 'Hello', native: 'Hola / ¿Qué más?', phonetic: 'OH-lah / keh MAHS', category: 'greeting' },
    { english: 'Thank you', native: 'Muchas gracias / Con gusto', phonetic: 'MOO-chas GRAH-see-as / kon GOOS-toh', category: 'courtesy' }
  ], facts: ['Colombia constitutionally protects 65 indigenous languages.', 'Palenquero is the only Spanish-based creole in Latin America.'] },

  { code: 'PE', name: 'Peru', nativeName: 'Perú', flag: '🇵🇪', region: 'Americas', subregion: 'South America', capital: 'Lima', pop: 33700000, score: 9.0, x: 26, y: 67, langs: [
    { id: 'es', name: 'Spanish', nativeName: 'Español peruano', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 82.6, speakerCount: '28 Million' },
    { id: 'qu', name: 'Quechua', nativeName: 'Runasimi', script: 'Latin', family: 'Quechuan', type: 'official', percentage: 13.9, speakerCount: '3.8 Million' },
    { id: 'ay', name: 'Aymara', nativeName: 'Aymar aru', script: 'Latin', family: 'Aymaran', type: 'official', percentage: 1.7, speakerCount: '450,000' }
  ], phrases: [
    { english: 'Hello', native: 'Hola (ES) / Allianllachu (Quechua) / Kamisaraki (Aymara)', phonetic: 'OH-lah / ah-lee-on-YAH-choo / kah-mee-sah-RAH-kee', category: 'greeting' },
    { english: 'Thank you', native: 'Gracias (ES) / Añay (Quechua) / Yuspagara (Aymara)', phonetic: 'GRAH-see-as / ah-NYE / yoos-pah-GAH-rah', category: 'courtesy' }
  ], facts: ['Quechua was the state language of the Inca Empire.', 'Peru legally recognizes 48 native languages with co-official status where spoken.'] },

  { code: 'CL', name: 'Chile', nativeName: 'Chile', flag: '🇨🇱', region: 'Americas', subregion: 'South America', capital: 'Santiago', pop: 19500000, score: 7.0, x: 28, y: 80, langs: [
    { id: 'es', name: 'Spanish', nativeName: 'Español chileno', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 99, speakerCount: '19 Million' },
    { id: 'arn', name: 'Mapudungun', nativeName: 'Mapudungun', script: 'Latin', family: 'Language Isolate', type: 'recognized', percentage: 0.7, speakerCount: '140,000' },
    { id: 'rap', name: 'Rapa Nui', nativeName: 'Vananga Rapa Nui', script: 'Latin', family: 'Austronesian (Polynesian)', type: 'regional', percentage: 0.02, speakerCount: '3,000' }
  ], phrases: [
    { english: 'Hello', native: 'Hola / ¿Cachái? / Iorana (Rapa Nui)', phonetic: 'OH-lah / kah-CHAY / ee-oh-RAH-nah', category: 'greeting' },
    { english: 'Thank you', native: 'Gracias / Maururu (Rapa Nui)', phonetic: 'GRAH-see-as / mah-oo-ROO-roo', category: 'courtesy' }
  ], facts: ['Chilean Spanish is known for its fast rhythm and unique slang words ("cachái", "weón").', 'Rapa Nui is spoken on Easter Island.'] },

  { code: 'BO', name: 'Bolivia', nativeName: 'Bolivia', flag: '🇧🇴', region: 'Americas', subregion: 'South America', capital: 'Sucre / La Paz', pop: 12100000, score: 9.8, x: 29, y: 72, langs: [
    { id: 'es', name: 'Spanish', nativeName: 'Español boliviano', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 60.7, speakerCount: '7.3 Million' },
    { id: 'qu', name: 'Quechua', nativeName: 'Runasimi', script: 'Latin', family: 'Quechuan', type: 'official', percentage: 21.2, speakerCount: '2.5 Million' },
    { id: 'ay', name: 'Aymara', nativeName: 'Aymar aru', script: 'Latin', family: 'Aymaran', type: 'official', percentage: 14.6, speakerCount: '1.7 Million' },
    { id: 'gn', name: 'Guarani', nativeName: 'Avañe\'ẽ', script: 'Latin', family: 'Tupian', type: 'official', percentage: 0.6, speakerCount: '70,000' }
  ], phrases: [
    { english: 'Hello', native: 'Hola (ES) / Allianllachu (Quechua) / Kamisaraki (Aymara)', phonetic: 'OH-lah / ah-lee-on-YAH-choo / kah-mee-sah-RAH-kee', category: 'greeting' },
    { english: 'Thank you', native: 'Gracias (ES) / Añay (Quechua) / Yuspagara (Aymara)', phonetic: 'GRAH-see-as / ah-NYE / yoos-pah-GAH-rah', category: 'courtesy' }
  ], facts: ['Bolivia holds the Guinness record for most official languages: 37 constitutional national languages!'] },

  { code: 'PY', name: 'Paraguay', nativeName: 'Paraguay / Paraguái', flag: '🇵🇾', region: 'Americas', subregion: 'South America', capital: 'Asunción', pop: 6700000, score: 9.7, x: 31, y: 76, langs: [
    { id: 'gn', name: 'Guarani', nativeName: 'Avañe\'ẽ', script: 'Latin', family: 'Tupian', type: 'official', percentage: 90.0, speakerCount: '6.0 Million' },
    { id: 'es', name: 'Spanish', nativeName: 'Español paraguayo', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 87.0, speakerCount: '5.8 Million' }
  ], phrases: [
    { english: 'Hello', native: 'Mba\'éichapa (Guarani) / Hola (ES)', phonetic: 'm-bah-AY-cha-pah / OH-lah', category: 'greeting' },
    { english: 'Thank you', native: 'Aguyje (Guarani) / Gracias (ES)', phonetic: 'ah-goo-YEH / GRAH-see-as', category: 'courtesy' }
  ], facts: ['Paraguay is the only country in the Americas where an Indigenous language (Guarani) is spoken by a non-indigenous majority.'] },

  { code: 'EC', name: 'Ecuador', nativeName: 'Ecuador', flag: '🇪🇨', region: 'Americas', subregion: 'South America', capital: 'Quito', pop: 18000000, score: 8.5, x: 25, y: 63, langs: [
    { id: 'es', name: 'Spanish', nativeName: 'Español ecuatoriano', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 93, speakerCount: '16.7 Million' },
    { id: 'qu', name: 'Kichwa', nativeName: 'Runa Shimi', script: 'Latin', family: 'Quechuan', type: 'co-official', percentage: 4.1, speakerCount: '750,000' },
    { id: 'shw', name: 'Shuar', nativeName: 'Shuar chicham', script: 'Latin', family: 'Jivaroan', type: 'co-official', percentage: 0.5, speakerCount: '80,000' }
  ], phrases: [
    { english: 'Hello', native: 'Hola (ES) / Alli puncha (Kichwa)', phonetic: 'OH-lah / AH-lee POON-cha', category: 'greeting' },
    { english: 'Thank you', native: 'Gracias (ES) / Yupaychani (Kichwa)', phonetic: 'GRAH-see-as / yoo-pye-CHAH-nee', category: 'courtesy' }
  ], facts: ['Kichwa and Shuar are constitutional official languages for intercultural dialogue in Ecuador.'] },

  { code: 'VE', name: 'Venezuela', nativeName: 'Venezuela', flag: '🇻🇪', region: 'Americas', subregion: 'South America', capital: 'Caracas', pop: 28300000, score: 7.5, x: 29, y: 57, langs: [
    { id: 'es', name: 'Spanish', nativeName: 'Español venezolano', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 97, speakerCount: '27.5 Million' },
    { id: 'way', name: 'Wayuu', nativeName: 'Wayuunaiki', script: 'Latin', family: 'Arawakan', type: 'co-official', percentage: 1.0, speakerCount: '200,000' },
    { id: 'wba', name: 'Warao', nativeName: 'Warao', script: 'Latin', family: 'Language Isolate', type: 'co-official', percentage: 0.1, speakerCount: '30,000' }
  ], phrases: [
    { english: 'Hello', native: 'Hola / ¿Qué tal? / Chevere', phonetic: 'OH-lah / keh TAHL / CHEH-veh-reh', category: 'greeting' },
    { english: 'Thank you', native: 'Muchas gracias', phonetic: 'MOO-chas GRAH-see-as', category: 'courtesy' }
  ], facts: ['Venezuela recognizes all indigenous languages as official for indigenous peoples.'] },

  { code: 'UY', name: 'Uruguay', nativeName: 'Uruguay', flag: '🇺🇾', region: 'Americas', subregion: 'South America', capital: 'Montevideo', pop: 3400000, score: 6.5, x: 32, y: 83, langs: [
    { id: 'es', name: 'Spanish', nativeName: 'Español uruguayo', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 98, speakerCount: '3.3 Million' },
    { id: 'pyp', name: 'Portuñol', nativeName: 'Portuñol riverense', script: 'Latin', family: 'Romance Blend', type: 'regional', percentage: 3.0, speakerCount: '100,000' }
  ], phrases: [
    { english: 'Hello', native: 'Hola / ¿Ta todo bien?', phonetic: 'OH-lah / TAH TOH-doo BEM', category: 'greeting' },
    { english: 'Thank you', native: 'Muchas gracias', phonetic: 'MOO-chas GRAH-see-as', category: 'courtesy' }
  ], facts: ['Portuñol Riverense is a unique mixed dialect along the northern Brazilian border.'] },

  { code: 'GY', name: 'Guyana', nativeName: 'Guyana', flag: '🇬🇾', region: 'Americas', subregion: 'South America', capital: 'Georgetown', pop: 800000, score: 8.8, x: 31, y: 58, langs: [
    { id: 'en', name: 'English', nativeName: 'English', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 90, speakerCount: '720,000' },
    { id: 'gyn', name: 'Guyanese Creole', nativeName: 'Creole', script: 'Latin', family: 'English Creole', type: 'national', percentage: 85, speakerCount: '680,000' }
  ], phrases: [
    { english: 'Hello', native: 'Ayoo / Wha happen?', phonetic: 'eye-OH / wah HAH-pen', category: 'greeting' },
    { english: 'Thank you', native: 'Thank you', phonetic: 'THANK yoo', category: 'courtesy' }
  ], facts: ['Guyana is the only South American sovereign nation where English is the official language.'] },

  { code: 'SR', name: 'Suriname', nativeName: 'Suriname', flag: '🇸🇷', region: 'Americas', subregion: 'South America', capital: 'Paramaribo', pop: 610000, score: 9.6, x: 32, y: 58, langs: [
    { id: 'nl', name: 'Dutch', nativeName: 'Nederlands', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 60, speakerCount: '360,000' },
    { id: 'srn', name: 'Sranan Tongo', nativeName: 'Sranantongo', script: 'Latin', family: 'English Creole', type: 'national', percentage: 85, speakerCount: '500,000' },
    { id: 'hns', name: 'Sarnami Hindustani', nativeName: 'Sarnami', script: 'Devanagari / Latin', family: 'Indo-European', type: 'minority', percentage: 20, speakerCount: '120,000' },
    { id: 'jv', name: 'Surinamese Javanese', nativeName: 'Jawa', script: 'Latin', family: 'Austronesian', type: 'minority', percentage: 14, speakerCount: '80,000' }
  ], phrases: [
    { english: 'Hello', native: 'Fa waka (Sranan) / Hallo (NL)', phonetic: 'FAH wah-KAH / HAH-loh', category: 'greeting' },
    { english: 'Thank you', native: 'Gran tangi (Sranan) / Dank u (NL)', phonetic: 'GRAHN TAHN-gee / DAHN-koo', category: 'courtesy' }
  ], facts: ['Suriname is the only Dutch-speaking independent sovereign state in South America.'] }
];

console.log(`Base dataset items: ${rawData.length}`);
