import fs from 'fs';
import path from 'path';

export interface Language {
  id: string;
  name: string;
  nativeName: string;
  script: string;
  family: string;
  type: 'official' | 'co-official' | 'regional' | 'recognized' | 'indigenous' | 'widely_spoken';
  percentage: number;
  speakerCount: string;
  description?: string;
}

export interface Phrase {
  english: string;
  native: string;
  phonetic: string;
  category: 'greeting' | 'courtesy' | 'essentials' | 'numbers';
}

export interface Country {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
  region: 'Africa' | 'Americas' | 'Asia' | 'Europe' | 'Oceania';
  subregion: string;
  capital: string;
  population: number;
  multilingualScore: number;
  coordinates: { x: number; y: number };
  description?: string;
  languages: Language[];
  phrases?: Phrase[];
  facts?: string[];
}

const rawCountries: Country[] = [
  // ==========================================
  // AMERICAS (35)
  // ==========================================
  {
    code: 'AG', name: 'Antigua and Barbuda', nativeName: 'Antigua and Barbuda', flag: '🇦🇬', region: 'Americas', subregion: 'Caribbean', capital: 'St. John\'s', population: 93000, multilingualScore: 6.8, coordinates: { x: 30, y: 52 },
    description: 'Antigua and Barbuda uses English as its official language alongside Antiguan Creole.',
    languages: [
      { id: 'en', name: 'English', nativeName: 'English', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 95, speakerCount: '88,000' },
      { id: 'aig', name: 'Antiguan Creole', nativeName: 'Creole', script: 'Latin', family: 'Creole (English-based)', type: 'widely_spoken', percentage: 80, speakerCount: '75,000' }
    ],
    phrases: [{ english: 'Hello', native: 'Hello / Whagwan', phonetic: 'heh-LOH / wah-GWAN', category: 'greeting' }],
    facts: ['Antiguan Creole incorporates West African grammatical features into English vocabulary.']
  },
  {
    code: 'AR', name: 'Argentina', nativeName: 'Argentina', flag: '🇦🇷', region: 'Americas', subregion: 'South America', capital: 'Buenos Aires', population: 45800000, multilingualScore: 6.5, coordinates: { x: 29, y: 83 },
    description: 'Argentina speaks Rioplatense Spanish, famous for its voseo pronoun and Italian-influenced intonation.',
    languages: [
      { id: 'es', name: 'Spanish (Rioplatense)', nativeName: 'Español', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 98, speakerCount: '44 Million' },
      { id: 'gn', name: 'Guarani', nativeName: 'Avañe\'ẽ', script: 'Latin', family: 'Tupian', type: 'regional', percentage: 0.5, speakerCount: '200,000' },
      { id: 'qu', name: 'Quechua', nativeName: 'Runa Simi', script: 'Latin', family: 'Quechuan', type: 'indigenous', percentage: 0.2, speakerCount: '70,000' }
    ],
    phrases: [{ english: 'Hello', native: 'Hola / Che', phonetic: 'OH-lah / CHEH', category: 'greeting' }],
    facts: ['Rioplatense Spanish pronounces "ll" and "y" as "sh".']
  },
  {
    code: 'BS', name: 'Bahamas', nativeName: 'The Bahamas', flag: '🇧🇸', region: 'Americas', subregion: 'Caribbean', capital: 'Nassau', population: 410000, multilingualScore: 6.2, coordinates: { x: 25, y: 48 },
    description: 'The Bahamas speaks English alongside Bahamian Creole.',
    languages: [
      { id: 'en', name: 'English', nativeName: 'English', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 98, speakerCount: '400,000' },
      { id: 'bah', name: 'Bahamian Creole', nativeName: 'Bahamian Creole', script: 'Latin', family: 'Creole (English-based)', type: 'widely_spoken', percentage: 85, speakerCount: '340,000' }
    ],
    phrases: [{ english: 'Hello', native: 'Hello', phonetic: 'heh-LOH', category: 'greeting' }],
    facts: ['Bahamian Creole contains vocabulary influences from Lucayan and African languages.']
  },
  {
    code: 'BB', name: 'Barbados', nativeName: 'Barbados', flag: '🇧🇧', region: 'Americas', subregion: 'Caribbean', capital: 'Bridgetown', population: 281000, multilingualScore: 6.5, coordinates: { x: 31, y: 53 },
    description: 'Barbados uses English as state language alongside Bajan Creole.',
    languages: [
      { id: 'en', name: 'English', nativeName: 'English', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 99, speakerCount: '280,000' },
      { id: 'bjs', name: 'Bajan', nativeName: 'Bajan Creole', script: 'Latin', family: 'Creole (English-based)', type: 'widely_spoken', percentage: 90, speakerCount: '250,000' }
    ],
    phrases: [{ english: 'Hello', native: 'Wuh loss / Hello', phonetic: 'woo LOSS', category: 'greeting' }],
    facts: ['Bajan Creole exhibits distinct pitch accent patterns from West African influences.']
  },
  {
    code: 'BZ', name: 'Belize', nativeName: 'Belize', flag: '🇧🇿', region: 'Americas', subregion: 'Central America', capital: 'Belmopan', population: 405000, multilingualScore: 8.9, coordinates: { x: 21, y: 49 },
    description: 'Belize is the only Central American country with English as official language, alongside Kriol, Spanish, and Maya.',
    languages: [
      { id: 'en', name: 'English', nativeName: 'English', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 62, speakerCount: '250,000' },
      { id: 'es', name: 'Spanish', nativeName: 'Español', script: 'Latin', family: 'Indo-European (Romance)', type: 'widely_spoken', percentage: 56, speakerCount: '220,000' },
      { id: 'bzj', name: 'Belizean Kriol', nativeName: 'Kriol', script: 'Latin', family: 'Creole (English-based)', type: 'widely_spoken', percentage: 45, speakerCount: '180,000' },
      { id: 'cab', name: 'Garifuna', nativeName: 'Garifuna', script: 'Latin', family: 'Arawakan', type: 'indigenous', percentage: 4, speakerCount: '16,000' }
    ],
    phrases: [{ english: 'Hello', native: 'Gud mohnin', phonetic: 'good MOHN-in', category: 'greeting' }],
    facts: ['Garifuna language contains both Arawak and Carib lexical layers.']
  },
  {
    code: 'BO', name: 'Bolivia', nativeName: 'Bolivia', flag: '🇧🇴', region: 'Americas', subregion: 'South America', capital: 'Sucre / La Paz', population: 12100000, multilingualScore: 9.4, coordinates: { x: 26, y: 72 },
    description: 'Bolivia recognizes Spanish and 36 indigenous languages in its constitution.',
    languages: [
      { id: 'es', name: 'Spanish', nativeName: 'Español', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 84, speakerCount: '10.1 Million' },
      { id: 'qu', name: 'Quechua', nativeName: 'Runa Simi', script: 'Latin', family: 'Quechuan', type: 'official', percentage: 28, speakerCount: '3.3 Million' },
      { id: 'ay', name: 'Aymara', nativeName: 'Aymar aru', script: 'Latin', family: 'Aymaran', type: 'official', percentage: 18, speakerCount: '2.1 Million' },
      { id: 'gn', name: 'Guarani', nativeName: 'Avañe\'ẽ', script: 'Latin', family: 'Tupian', type: 'official', percentage: 1, speakerCount: '120,000' }
    ],
    phrases: [{ english: 'Hello', native: 'Kamisaraki (Aymara) / Allianllachu (Quechua)', phonetic: 'kah-mee-sah-RAH-kee', category: 'greeting' }],
    facts: ['Bolivia constitutionally recognizes 37 official state languages.']
  },
  {
    code: 'BR', name: 'Brazil', nativeName: 'Brasil', flag: '🇧🇷', region: 'Americas', subregion: 'South America', capital: 'Brasília', population: 215000000, multilingualScore: 6.2, coordinates: { x: 32, y: 70 },
    description: 'Brazil is the largest Portuguese-speaking nation in the world.',
    languages: [
      { id: 'pt', name: 'Portuguese', nativeName: 'Português do Brasil', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 98, speakerCount: '210 Million' },
      { id: 'yrl', name: 'Nheengatu', nativeName: 'Nheengatu', script: 'Latin', family: 'Tupian', type: 'co-official', percentage: 0.1, speakerCount: '20,000' }
    ],
    phrases: [{ english: 'Hello', native: 'Olá / Tudo bem', phonetic: 'oh-LAH / TOO-doo BEM', category: 'greeting' }], facts: ['Brazilian Portuguese features distinct vowel reduction compared to European Portuguese.']
  },
  {
    code: 'CA', name: 'Canada', nativeName: 'Canada', flag: '🇨🇦', region: 'Americas', subregion: 'Northern America', capital: 'Ottawa', population: 39500000, multilingualScore: 8.8, coordinates: { x: 20, y: 25 },
    description: 'Canada is constitutionally bilingual in English and French.',
    languages: [
      { id: 'en', name: 'English', nativeName: 'English', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 75, speakerCount: '29.5 Million' },
      { id: 'fr', name: 'French', nativeName: 'Français', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 22.8, speakerCount: '8.9 Million' },
      { id: 'iu', name: 'Inuktitut', nativeName: 'ᐃᓄᒃᑎᑐᑦ', script: 'Inuktitut syllabics', family: 'Eskimo-Aleut', type: 'official', percentage: 0.1, speakerCount: '40,000' }
    ],
    phrases: [{ english: 'Hello', native: 'Hello / Bonjour', phonetic: 'heh-LOH / bon-ZHOOR', category: 'greeting' }], facts: ['Inuktitut is an official regional language in Nunavut written in syllabics.']
  },
  {
    code: 'CL', name: 'Chile', nativeName: 'Chile', flag: '🇨🇱', region: 'Americas', subregion: 'South America', capital: 'Santiago', population: 19600000, multilingualScore: 6.4, coordinates: { x: 26, y: 82 },
    description: 'Chile uses Chilean Spanish, famed for distinct slang (chilenismos).',
    languages: [
      { id: 'es', name: 'Spanish', nativeName: 'Español chileno', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 99, speakerCount: '19 Million' },
      { id: 'arn', name: 'Mapudungun', nativeName: 'Mapudungun', script: 'Latin', family: 'Araucanian', type: 'indigenous', percentage: 1, speakerCount: '200,000' },
      { id: 'rap', name: 'Rapa Nui', nativeName: 'Rapa Nui', script: 'Latin', family: 'Austronesian (Polynesian)', type: 'indigenous', percentage: 0.02, speakerCount: '3,000' }
    ],
    phrases: [{ english: 'Hello', native: 'Hola / Wena', phonetic: 'OH-lah / WEH-nah', category: 'greeting' }], facts: ['Mapudungun language of the Mapuche has no proven relation to any other family.']
  },
  {
    code: 'CO', name: 'Colombia', nativeName: 'Colombia', flag: '🇨🇴', region: 'Americas', subregion: 'South America', capital: 'Bogotá', population: 51800000, multilingualScore: 7.0, coordinates: { x: 25, y: 58 },
    description: 'Colombia recognizes Spanish alongside 68 indigenous and Creole languages.',
    languages: [
      { id: 'es', name: 'Spanish', nativeName: 'Español', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 99, speakerCount: '51 Million' },
      { id: 'way', name: 'Wayuunaiki', nativeName: 'Wayuunaiki', script: 'Latin', family: 'Arawakan', type: 'indigenous', percentage: 0.8, speakerCount: '400,000' }
    ],
    phrases: [{ english: 'Hello', native: 'Hola / Quiubo', phonetic: 'OH-lah / KEE-oo-boh', category: 'greeting' }], facts: ['Colombia constitutionally protects 68 indigenous languages.']
  },
  {
    code: 'CR', name: 'Costa Rica', nativeName: 'Costa Rica', flag: '🇨🇷', region: 'Americas', subregion: 'Central America', capital: 'San José', population: 5200000, multilingualScore: 6.8, coordinates: { x: 22, y: 54 },
    description: 'Costa Rica speaks Spanish alongside Limón Creole and indigenous Mekatelyu.',
    languages: [
      { id: 'es', name: 'Spanish', nativeName: 'Español', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 99, speakerCount: '5.1 Million' },
      { id: 'jam', name: 'Limón Creole (Mekatelyu)', nativeName: 'Mekatelyu', script: 'Latin', family: 'Creole (English-based)', type: 'regional', percentage: 2, speakerCount: '100,000' }
    ],
    phrases: [{ english: 'Hello', native: 'Pura Vida / Hola', phonetic: 'POO-rah VEE-dah', category: 'greeting' }], facts: ['"Pura Vida" functions as a universal greeting and expression in Costa Rica.']
  },
  {
    code: 'CU', name: 'Cuba', nativeName: 'Cuba', flag: '🇨🇺', region: 'Americas', subregion: 'Caribbean', capital: 'Havana', population: 11000000, multilingualScore: 6.1, coordinates: { x: 23, y: 47 },
    description: 'Cuba speaks Cuban Spanish, characterized by weak syllable-final consonants.',
    languages: [
      { id: 'es', name: 'Spanish', nativeName: 'Español cubano', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 99, speakerCount: '11 Million' }
    ],
    phrases: [{ english: 'Hello', native: 'Hola / ¿Qué bolá?', phonetic: 'OH-lah / keh boh-LAH', category: 'greeting' }], facts: ['Cuban Spanish retains vocabulary terms from Lucumí (Yoruba).']
  },
  {
    code: 'DM', name: 'Dominica', nativeName: 'Dominica', flag: '🇩🇲', region: 'Americas', subregion: 'Caribbean', capital: 'Roseau', population: 72000, multilingualScore: 8.5, coordinates: { x: 31, y: 52 },
    description: 'Dominica speaks English as official language alongside Dominican French Creole (Kweyol).',
    languages: [
      { id: 'en', name: 'English', nativeName: 'English', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 95, speakerCount: '68,000' },
      { id: 'acf', name: 'Dominican Creole French', nativeName: 'Kwéyòl', script: 'Latin', family: 'Creole (French-based)', type: 'widely_spoken', percentage: 80, speakerCount: '58,000' }
    ],
    phrases: [{ english: 'Hello', native: 'Sa ka fêt', phonetic: 'sah kah FET', category: 'greeting' }], facts: ['Kwéyòl is celebrated annually during Creole Heritage Month.']
  },
  {
    code: 'DO', name: 'Dominican Republic', nativeName: 'República Dominicana', flag: '🇩🇴', region: 'Americas', subregion: 'Caribbean', capital: 'Santo Domingo', population: 11200000, multilingualScore: 6.3, coordinates: { x: 27, y: 49 },
    description: 'Dominican Republic speaks Dominican Spanish.',
    languages: [
      { id: 'es', name: 'Spanish', nativeName: 'Español dominicano', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 98, speakerCount: '11 Million' }
    ],
    phrases: [{ english: 'Hello', native: 'Dímelo / Hola', phonetic: 'DEE-meh-loh', category: 'greeting' }], facts: ['Dominican Spanish preserves Taíno words like hamaca, canoa, and huracán.']
  },
  {
    code: 'EC', name: 'Ecuador', nativeName: 'Ecuador', flag: '🇪🇨', region: 'Americas', subregion: 'South America', capital: 'Quito', population: 18000000, multilingualScore: 8.2, coordinates: { x: 22, y: 62 },
    description: 'Ecuador recognizes Spanish and Kichwa as official languages of intercultural relation.',
    languages: [
      { id: 'es', name: 'Spanish', nativeName: 'Español', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 93, speakerCount: '16.7 Million' },
      { id: 'qvi', name: 'Kichwa', nativeName: 'Kichwa shimi', script: 'Latin', family: 'Quechuan', type: 'co-official', percentage: 7, speakerCount: '1.2 Million' },
      { id: 'shw', name: 'Shuar', nativeName: 'Shuar chicham', script: 'Latin', family: 'Jivaroan', type: 'co-official', percentage: 0.5, speakerCount: '80,000' }
    ],
    phrases: [{ english: 'Hello', native: 'Allianllachu / Hola', phonetic: 'ah-lee-AHN-yah-choo', category: 'greeting' }], facts: ['Kichwa and Shuar are protected by constitutional status.']
  },
  {
    code: 'SV', name: 'El Salvador', nativeName: 'El Salvador', flag: '🇸🇻', region: 'Americas', subregion: 'Central America', capital: 'San Salvador', population: 6300000, multilingualScore: 6.1, coordinates: { x: 20, y: 52 },
    description: 'El Salvador speaks Spanish, with Nawat (Pipil) preserved as indigenous language.',
    languages: [
      { id: 'es', name: 'Spanish', nativeName: 'Español', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 99, speakerCount: '6.2 Million' },
      { id: 'ppl', name: 'Nawat (Pipil)', nativeName: 'Nawat', script: 'Latin', family: 'Uto-Aztecan', type: 'indigenous', percentage: 0.01, speakerCount: '200' }
    ],
    phrases: [{ english: 'Hello', native: 'Hola / ¿Qué ondas?', phonetic: 'OH-lah / keh ON-dahs', category: 'greeting' }], facts: ['Nawat is the last surviving indigenous language of El Salvador.']
  },
  {
    code: 'GD', name: 'Grenada', nativeName: 'Grenada', flag: '🇬🇩', region: 'Americas', subregion: 'Caribbean', capital: 'St. George\'s', population: 125000, multilingualScore: 6.8, coordinates: { x: 31, y: 54 },
    description: 'Grenada uses English as official language alongside Grenadian Creole.',
    languages: [
      { id: 'en', name: 'English', nativeName: 'English', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 98, speakerCount: '120,000' },
      { id: 'gcl', name: 'Grenadian Creole English', nativeName: 'Grenadian Creole', script: 'Latin', family: 'Creole (English-based)', type: 'widely_spoken', percentage: 85, speakerCount: '100,000' }
    ],
    phrases: [{ english: 'Hello', native: 'Hello / Whagwan', phonetic: 'heh-LOH', category: 'greeting' }], facts: ['Grenadian Creole exhibits historical French and African influence.']
  },
  {
    code: 'GT', name: 'Guatemala', nativeName: 'Guatemala', flag: '🇬🇹', region: 'Americas', subregion: 'Central America', capital: 'Guatemala City', population: 17800000, multilingualScore: 9.3, coordinates: { x: 20, y: 51 },
    description: 'Guatemala recognizes Spanish alongside 22 distinct Mayan languages.',
    languages: [
      { id: 'es', name: 'Spanish', nativeName: 'Español', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 69, speakerCount: '12.3 Million' },
      { id: 'quc', name: 'K\'iche\'', nativeName: 'K\'iche\'', script: 'Latin', family: 'Mayan', type: 'official', percentage: 11, speakerCount: '2.0 Million' },
      { id: 'cak', name: 'Kaqchikel', nativeName: 'Kaqchikel', script: 'Latin', family: 'Mayan', type: 'official', percentage: 8, speakerCount: '1.4 Million' },
      { id: 'kek', name: 'Q\'eqchi\'', nativeName: 'Q\'eqchi\'', script: 'Latin', family: 'Mayan', type: 'official', percentage: 7, speakerCount: '1.2 Million' }
    ],
    phrases: [{ english: 'Hello', native: 'Saqarik (K\'iche\') / Hola', phonetic: 'sah-kah-REEK', category: 'greeting' }], facts: ['Guatemala legally protects 22 distinct Mayan languages.']
  },
  {
    code: 'GY', name: 'Guyana', nativeName: 'Guyana', flag: '🇬🇾', region: 'Americas', subregion: 'South America', capital: 'Georgetown', population: 800000, multilingualScore: 8.4, coordinates: { x: 31, y: 56 },
    description: 'Guyana is the only South American nation where English is sole official language.',
    languages: [
      { id: 'en', name: 'English', nativeName: 'English', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 90, speakerCount: '720,000' },
      { id: 'gyn', name: 'Guyanese Creole', nativeName: 'Creole', script: 'Latin', family: 'Creole (English-based)', type: 'widely_spoken', percentage: 85, speakerCount: '680,000' }
    ],
    phrases: [{ english: 'Hello', native: 'Ayyuh / Hello', phonetic: 'EYE-yoo', category: 'greeting' }], facts: ['Guyanese Creole retains vocabulary from Hindi, Dutch, and Carib.']
  },
  {
    code: 'HT', name: 'Haiti', nativeName: 'Haïti / Ayiti', flag: '🇭🇹', region: 'Americas', subregion: 'Caribbean', capital: 'Port-au-Prince', population: 11700000, multilingualScore: 8.9, coordinates: { x: 26, y: 49 },
    description: 'Haiti is constitutionally bilingual in Haitian Creole (Ayisyen) and French.',
    languages: [
      { id: 'ht', name: 'Haitian Creole', nativeName: 'Kreyòl ayisyen', script: 'Latin', family: 'Creole (French-based)', type: 'official', percentage: 100, speakerCount: '11.7 Million' },
      { id: 'fr', name: 'French', nativeName: 'Français', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 10, speakerCount: '1.2 Million' }
    ],
    phrases: [{ english: 'Hello', native: 'Bonswa / Sakapfet', phonetic: 'bon-SWAH / sah-kah-FET', category: 'greeting' }], facts: ['Haitian Creole is the largest French-based creole in the world.']
  },
  {
    code: 'HN', name: 'Honduras', nativeName: 'Honduras', flag: '🇭🇳', region: 'Americas', subregion: 'Central America', capital: 'Tegucigalpa', population: 10400000, multilingualScore: 6.5, coordinates: { x: 21, y: 51 },
    description: 'Honduras speaks Spanish alongside Garifuna and Miskito on the Bay Islands and coast.',
    languages: [
      { id: 'es', name: 'Spanish', nativeName: 'Español', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 98, speakerCount: '10.2 Million' },
      { id: 'cab', name: 'Garifuna', nativeName: 'Garifuna', script: 'Latin', family: 'Arawakan', type: 'indigenous', percentage: 1, speakerCount: '100,000' }
    ],
    phrases: [{ english: 'Hello', native: 'Hola / ¿Qué tal?', phonetic: 'OH-lah', category: 'greeting' }], facts: ['Bay Islands speak Bay Islands English Creole natively.']
  },
  {
    code: 'JM', name: 'Jamaica', nativeName: 'Jamaica', flag: '🇯🇲', region: 'Americas', subregion: 'Caribbean', capital: 'Kingston', population: 2800000, multilingualScore: 8.5, coordinates: { x: 24, y: 49 },
    description: 'Jamaica speaks English as official language alongside Jamaican Patois (Patwa).',
    languages: [
      { id: 'en', name: 'English', nativeName: 'English', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 95, speakerCount: '2.6 Million' },
      { id: 'jam', name: 'Jamaican Patois', nativeName: 'Patois', script: 'Latin', family: 'Creole (English-based)', type: 'recognized', percentage: 90, speakerCount: '2.5 Million' }
    ],
    phrases: [{ english: 'Hello', native: 'Wha gwaan / Yow', phonetic: 'wah GWAN', category: 'greeting' }], facts: ['Jamaican Patois incorporates Akan (Twi) loanwords like "obeah" and "nyam".']
  },
  {
    code: 'MX', name: 'Mexico', nativeName: 'México', flag: '🇲🇽', region: 'Americas', subregion: 'Central America', capital: 'Mexico City', population: 128900000, multilingualScore: 8.6, coordinates: { x: 16, y: 45 },
    description: 'Mexico recognizes Spanish alongside 68 national indigenous languages.',
    languages: [
      { id: 'es', name: 'Spanish', nativeName: 'Español mexicano', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 98, speakerCount: '125 Million' },
      { id: 'nah', name: 'Nahuatl', nativeName: 'Nāhuatl', script: 'Latin', family: 'Uto-Aztecan', type: 'indigenous', percentage: 1.5, speakerCount: '1.7 Million' },
      { id: 'yua', name: 'Yucatec Maya', nativeName: 'Maaya t\'aan', script: 'Latin', family: 'Mayan', type: 'indigenous', percentage: 0.8, speakerCount: '800,000' }
    ],
    phrases: [{ english: 'Hello', native: 'Hola / ¿Qué onda?', phonetic: 'OH-lah / keh ON-dah', category: 'greeting' }], facts: ['Words like chocolate, avocado, and tomato come from Nahuatl.']
  },
  {
    code: 'NI', name: 'Nicaragua', nativeName: 'Nicaragua', flag: '🇳🇮', region: 'Americas', subregion: 'Central America', capital: 'Managua', population: 6900000, multilingualScore: 7.2, coordinates: { x: 22, y: 52 },
    description: 'Nicaragua speaks Spanish alongside Miskito and Creole on the Caribbean coast.',
    languages: [
      { id: 'es', name: 'Spanish', nativeName: 'Español', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 95, speakerCount: '6.5 Million' },
      { id: 'miq', name: 'Miskito', nativeName: 'Miskito', script: 'Latin', family: 'Misumalpan', type: 'regional', percentage: 2.5, speakerCount: '180,000' }
    ],
    phrases: [{ english: 'Hello', native: 'Hola / ¿Qué onda?', phonetic: 'OH-lah', category: 'greeting' }], facts: ['Miskito is widely spoken in the North Caribbean Coast Autonomous Region.']
  },
  {
    code: 'PA', name: 'Panama', nativeName: 'Panamá', flag: '🇵🇦', region: 'Americas', subregion: 'Central America', capital: 'Panama City', population: 4400000, multilingualScore: 7.8, coordinates: { x: 23, y: 55 },
    description: 'Panama speaks Spanish alongside Ngäbere, Kuna, and Embera indigenous languages.',
    languages: [
      { id: 'es', name: 'Spanish', nativeName: 'Español', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 93, speakerCount: '4.1 Million' },
      { id: 'gym', name: 'Ngäbere', nativeName: 'Ngäbere', script: 'Latin', family: 'Chibchan', type: 'indigenous', percentage: 4, speakerCount: '170,000' },
      { id: 'cuk', name: 'Kuna', nativeName: 'Gulegaya', script: 'Latin', family: 'Chibchan', type: 'indigenous', percentage: 1.5, speakerCount: '60,000' }
    ],
    phrases: [{ english: 'Hello', native: 'Hola / ¿Qué sopa?', phonetic: 'OH-lah / keh soh-PAH', category: 'greeting' }], facts: ['"¿Qué sopa?" is iconic Panamanian slang formed by reversing "pasó".']
  },
  {
    code: 'PY', name: 'Paraguay', nativeName: 'Paraguay', flag: '🇵🇾', region: 'Americas', subregion: 'South America', capital: 'Asunción', population: 7400000, multilingualScore: 9.6, coordinates: { x: 30, y: 77 },
    description: 'Paraguay is uniquely bilingual with Guarani spoken by over 77% of the population.',
    languages: [
      { id: 'gn', name: 'Guarani', nativeName: 'Avañe\'ẽ', script: 'Latin', family: 'Tupian', type: 'official', percentage: 77, speakerCount: '5.7 Million' },
      { id: 'es', name: 'Spanish', nativeName: 'Español', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 67, speakerCount: '5.0 Million' }
    ],
    phrases: [{ english: 'Hello', native: 'Mba\'éichapa', phonetic: 'mbah-ay-EE-chah-pah', category: 'greeting' }], facts: ['Paraguay is the only Americas nation where an indigenous language is spoken by the non-indigenous majority.']
  },
  {
    code: 'PE', name: 'Peru', nativeName: 'Perú', flag: '🇵🇪', region: 'Americas', subregion: 'South America', capital: 'Lima', population: 33700000, multilingualScore: 8.9, coordinates: { x: 23, y: 68 },
    description: 'Peru recognizes Spanish, Quechua, and Aymara as co-official languages.',
    languages: [
      { id: 'es', name: 'Spanish', nativeName: 'Español', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 82.6, speakerCount: '27.8 Million' },
      { id: 'qu', name: 'Quechua', nativeName: 'Runa Simi', script: 'Latin', family: 'Quechuan', type: 'official', percentage: 13.9, speakerCount: '4.7 Million' },
      { id: 'ay', name: 'Aymara', nativeName: 'Aymar aru', script: 'Latin', family: 'Aymaran', type: 'official', percentage: 1.7, speakerCount: '570,000' }
    ],
    phrases: [{ english: 'Hello', native: 'Allianllachu / Hola', phonetic: 'ah-lee-AHN-yah-choo', category: 'greeting' }], facts: ['Quechua was the primary language of the Inca Empire.']
  },
  {
    code: 'KN', name: 'Saint Kitts and Nevis', nativeName: 'Saint Kitts and Nevis', flag: '🇰🇳', region: 'Americas', subregion: 'Caribbean', capital: 'Basseterre', population: 48000, multilingualScore: 6.5, coordinates: { x: 30, y: 52 },
    description: 'Saint Kitts and Nevis speaks English alongside Saint Kitts Creole.',
    languages: [
      { id: 'en', name: 'English', nativeName: 'English', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 98, speakerCount: '47,000' }
    ],
    phrases: [{ english: 'Hello', native: 'Hello', phonetic: 'heh-LOH', category: 'greeting' }], facts: ['Kittitian Creole is spoken informally across both islands.']
  },
  {
    code: 'LC', name: 'Saint Lucia', nativeName: 'Saint Lucia', flag: '🇱🇨', region: 'Americas', subregion: 'Caribbean', capital: 'Castries', population: 180000, multilingualScore: 8.6, coordinates: { x: 31, y: 53 },
    description: 'Saint Lucia uses English as official language alongside Saint Lucian French Creole (Kwéyòl).',
    languages: [
      { id: 'en', name: 'English', nativeName: 'English', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 95, speakerCount: '170,000' },
      { id: 'acf', name: 'Saint Lucian Creole French', nativeName: 'Kwéyòl', script: 'Latin', family: 'Creole (French-based)', type: 'widely_spoken', percentage: 80, speakerCount: '144,000' }
    ],
    phrases: [{ english: 'Hello', native: 'Sa ka fêt', phonetic: 'sah kah FET', category: 'greeting' }], facts: ['Kwéyòl is widely used in national radio and television broadcasts.']
  },
  {
    code: 'VC', name: 'Saint Vincent and the Grenadines', nativeName: 'Saint Vincent and the Grenadines', flag: '🇻🇨', region: 'Americas', subregion: 'Caribbean', capital: 'Kingstown', population: 104000, multilingualScore: 6.8, coordinates: { x: 31, y: 53 },
    description: 'Saint Vincent speaks English alongside Vincentian Creole.',
    languages: [
      { id: 'en', name: 'English', nativeName: 'English', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 98, speakerCount: '102,000' },
      { id: 'svc', name: 'Vincentian Creole', nativeName: 'Vincy Creole', script: 'Latin', family: 'Creole (English-based)', type: 'widely_spoken', percentage: 85, speakerCount: '88,000' }
    ],
    phrases: [{ english: 'Hello', native: 'Hello / Whagwan', phonetic: 'heh-LOH', category: 'greeting' }], facts: ['Vincentian Creole is derived from English, French, and Carib influences.']
  },
  {
    code: 'SR', name: 'Suriname', nativeName: 'Suriname', flag: '🇸🇷', region: 'Americas', subregion: 'South America', capital: 'Paramaribo', population: 618000, multilingualScore: 9.5, coordinates: { x: 32, y: 56 },
    description: 'Suriname is the only Dutch-speaking nation in South America, alongside Sranan Tongo, Javanese, and Hindustani.',
    languages: [
      { id: 'nl', name: 'Dutch', nativeName: 'Nederlands', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 60, speakerCount: '370,000' },
      { id: 'srn', name: 'Sranan Tongo', nativeName: 'Sranan Tongo', script: 'Latin', family: 'Creole (English-based)', type: 'widely_spoken', percentage: 85, speakerCount: '520,000' },
      { id: 'hns', name: 'Caribbean Hindustani', nativeName: 'Sarnami Hindustani', script: 'Latin', family: 'Indo-European (Indo-Aryan)', type: 'recognized', percentage: 20, speakerCount: '120,000' }
    ], "phrases": [{ english: 'Hello', native: 'Fa waka / Hallo', phonetic: 'fah WAH-kah', category: 'greeting' }], facts: ['Sranan Tongo serves as universal lingua franca across all ethnic groups.']
  },
  {
    code: 'TT', name: 'Trinidad and Tobago', nativeName: 'Trinidad and Tobago', flag: '🇹🇹', region: 'Americas', subregion: 'Caribbean', capital: 'Port of Spain', population: 1530000, multilingualScore: 7.2, coordinates: { x: 31, y: 55 },
    description: 'Trinidad and Tobago speaks English alongside Trinidadian and Tobagonian Creoles.',
    languages: [
      { id: 'en', name: 'English', nativeName: 'English', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 98, speakerCount: '1.5 Million' },
      { id: 'trf', name: 'Trinidadian Creole', nativeName: 'Trini Creole', script: 'Latin', family: 'Creole (English-based)', type: 'widely_spoken', percentage: 90, speakerCount: '1.3 Million' }
    ], phrases: [{ english: 'Hello', native: 'How ya doin / Hello', phonetic: 'HOW yah DOO-in', category: 'greeting' }], facts: ['Trinidadian Creole incorporates French, Spanish, Hindi, and Yoruba vocabulary.']
  },
  {
    code: 'US', name: 'United States', nativeName: 'United States', flag: '🇺🇸', region: 'Americas', subregion: 'Northern America', capital: 'Washington, D.C.', population: 335000000, multilingualScore: 7.8, coordinates: { x: 18, y: 32 },
    description: 'The United States has no federal official language; English is dominant alongside Spanish.',
    languages: [
      { id: 'en', name: 'English', nativeName: 'English', script: 'Latin', family: 'Indo-European (Germanic)', type: 'widely_spoken', percentage: 78, speakerCount: '260 Million' },
      { id: 'es', name: 'Spanish', nativeName: 'Español', script: 'Latin', family: 'Indo-European (Romance)', type: 'widely_spoken', percentage: 13.5, speakerCount: '42 Million' },
      { id: 'zh', name: 'Chinese (Mandarin/Cantonese)', nativeName: '中文', script: 'Chinese characters', family: 'Sino-Tibetan', type: 'widely_spoken', percentage: 1.1, speakerCount: '3.5 Million' }
    ], phrases: [{ english: 'Hello', native: 'Hello / Hi', phonetic: 'heh-LOH', category: 'greeting' }], facts: ['The United States has no constitutional federal official language.']
  },
  {
    code: 'UY', name: 'Uruguay', nativeName: 'Uruguay', flag: '🇺🇾', region: 'Americas', subregion: 'South America', capital: 'Montevideo', population: 3420000, multilingualScore: 6.5, coordinates: { x: 30, y: 81 },
    description: 'Uruguay speaks Rioplatense Spanish alongside Portuñol on the northern border.',
    languages: [
      { id: 'es', name: 'Spanish', nativeName: 'Español uruguayo', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 98, speakerCount: '3.3 Million' },
      { id: 'pob', name: 'Portuñol', nativeName: 'Portuñol riverense', script: 'Latin', family: 'Hybrid (Romance)', type: 'regional', percentage: 3, speakerCount: '100,000' }
    ], phrases: [{ english: 'Hello', native: 'Hola / Bo', phonetic: 'OH-lah / BOH', category: 'greeting' }], facts: ['Portuñol riverense is a stable hybrid language spoken along the Brazilian border.']
  },
  {
    code: 'VE', name: 'Venezuela', nativeName: 'Venezuela', flag: '🇻🇪', region: 'Americas', subregion: 'South America', capital: 'Caracas', population: 28800000, multilingualScore: 6.8, coordinates: { x: 27, y: 57 },
    description: 'Venezuela speaks Spanish alongside 40 indigenous languages including Wayuu and Warao.',
    languages: [
      { id: 'es', name: 'Spanish', nativeName: 'Español venezolano', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 97, speakerCount: '28 Million' },
      { id: 'way', name: 'Wayuu', nativeName: 'Wayuunaiki', script: 'Latin', family: 'Arawakan', type: 'official', percentage: 1.5, speakerCount: '400,000' }
    ], phrases: [{ english: 'Hello', native: 'Hola / Épale', phonetic: 'OH-lah / EH-pah-leh', category: 'greeting' }], facts: ['Indigenous languages are constitutionally official for indigenous peoples in Venezuela.']
  }
];

console.log('Total Americas compiled:', rawCountries.length);
