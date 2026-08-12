import fs from 'fs';
import path from 'path';

// Complete master generator for 197 countries across Africa, Americas, Asia, Europe, and Oceania

const fileHead = `import { Country } from '../types';

export const COUNTRIES_DATA: Country[] = [
`;

const fileFoot = `];
`;

// Helper to escape strings
function cleanStr(s: string) {
  return s.replace(/'/g, "\\'");
}

// Let's create our full data array in pure JS object format inside the script
const worldData = [
  // ==================== AFRICA (54) ====================
  { code: 'DZ', name: 'Algeria', nativeName: 'الجزائر / Dzayer', flag: '🇩🇿', region: 'Africa', subregion: 'Northern Africa', capital: 'Algiers', population: 44900000, multilingualScore: 8.8, coordinates: { x: 48, y: 44 },
    description: 'Algeria uses Arabic and Tamazight (Berber) as official state languages, with widespread French.',
    languages: [
      { id: 'ar', name: 'Arabic (Algerian)', nativeName: 'العربية / الدارجة', script: 'Arabic', family: 'Afroasiatic (Semitic)', type: 'official', percentage: 73, speakerCount: '32 Million' },
      { id: 'zgh', name: 'Tamazight (Berber)', nativeName: 'ⵜⴰⵎⴰⵣⵉⵖⵜ', script: 'Tifinagh / Latin', family: 'Afroasiatic (Berber)', type: 'official', percentage: 27, speakerCount: '12 Million' },
      { id: 'fr', name: 'French', nativeName: 'Français', script: 'Latin', family: 'Indo-European (Romance)', type: 'widely_spoken', percentage: 70, speakerCount: '31 Million' }
    ],
    phrases: [{ english: 'Hello', native: 'مرحبا (Marhaban) / ⵯⴰⵛⵓ (Azul)', phonetic: 'mar-HA-ban / ah-ZOOL', category: 'greeting' }],
    facts: ['Tamazight was recognized as an official language in Algeria in 2016.', 'Tifinagh script has ancient roots dating back to Numidian inscriptions.']
  },
  { code: 'AO', name: 'Angola', nativeName: 'Angola', flag: '🇦🇴', region: 'Africa', subregion: 'Middle Africa', capital: 'Luanda', population: 35600000, multilingualScore: 8.5, coordinates: { x: 52, y: 68 },
    description: 'Angola uses Portuguese as official language alongside Umbundu, Kimbundu, and Kikongo.',
    languages: [
      { id: 'pt', name: 'Portuguese', nativeName: 'Português', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 71, speakerCount: '25 Million' },
      { id: 'umb', name: 'Umbundu', nativeName: 'Umbundu', script: 'Latin', family: 'Niger-Congo (Bantu)', type: 'national', percentage: 23, speakerCount: '8 Million' }
    ],
    phrases: [{ english: 'Hello', native: 'Olá / Olá ape', phonetic: 'oh-LAH', category: 'greeting' }],
    facts: ['Angola is the second largest Portuguese-speaking nation by area.']
  },
  { code: 'BJ', name: 'Benin', nativeName: 'Bénin', flag: '🇧🇯', region: 'Africa', subregion: 'Western Africa', capital: 'Porto-Novo', population: 13300000, multilingualScore: 9.1, coordinates: { x: 47, y: 55 },
    description: 'Benin uses French as official language alongside Fon, Yoruba, and Bariba.',
    languages: [
      { id: 'fr', name: 'French', nativeName: 'Français', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 35, speakerCount: '4.6 Million' },
      { id: 'fon', name: 'Fon', nativeName: 'Fongbe', script: 'Latin', family: 'Niger-Congo (Gbe)', type: 'national', percentage: 24, speakerCount: '3.2 Million' }
    ],
    phrases: [{ english: 'Hello', native: 'Bonjour / A ku abio', phonetic: 'bon-ZHOOR', category: 'greeting' }],
    facts: ['Fon is the most widely spoken national language in southern Benin.']
  },
  { code: 'BW', name: 'Botswana', nativeName: 'Botswana', flag: '🇧🇼', region: 'Africa', subregion: 'Southern Africa', capital: 'Gaborone', population: 2600000, multilingualScore: 8.2, coordinates: { x: 53, y: 77 },
    description: 'Botswana recognizes English as official language and Setswana as national language.',
    languages: [
      { id: 'tn', name: 'Setswana', nativeName: 'Setswana', script: 'Latin', family: 'Niger-Congo (Bantu)', type: 'official', percentage: 77, speakerCount: '2.0 Million' },
      { id: 'en', name: 'English', nativeName: 'English', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 80, speakerCount: '2.1 Million' }
    ],
    phrases: [{ english: 'Hello', native: 'Dumela', phonetic: 'doo-MEH-lah', category: 'greeting' }],
    facts: ['Setswana is spoken by over 77% of Botswana citizens natively.']
  },
  { code: 'BF', name: 'Burkina Faso', nativeName: 'Burkina Faso', flag: '🇧🇫', region: 'Africa', subregion: 'Western Africa', capital: 'Ouagadougou', population: 22600000, multilingualScore: 9.2, coordinates: { x: 44, y: 53 },
    description: 'Burkina Faso recognizes Mooré, Fula, and Dioula as national languages alongside French.',
    languages: [
      { id: 'mos', name: 'Mooré', nativeName: 'Mooré', script: 'Latin', family: 'Niger-Congo (Gurunsi)', type: 'national', percentage: 53, speakerCount: '12 Million' },
      { id: 'fr', name: 'French', nativeName: 'Français', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 25, speakerCount: '5.6 Million' }
    ],
    phrases: [{ english: 'Hello', native: 'Ne yibeogo / Bonjour', phonetic: 'neh yee-BEH-oh-go', category: 'greeting' }],
    facts: ['"Burkina Faso" combines Mooré and Dioula words meaning "Land of Incorruptible People".']
  },
  { code: 'BI', name: 'Burundi', nativeName: 'Uburundi', flag: '🇧🇮', region: 'Africa', subregion: 'Eastern Africa', capital: 'Gitega', population: 12800000, multilingualScore: 8.7, coordinates: { x: 57, y: 62 },
    description: 'Burundi is constitutionally trilingual in Kirundi, French, and English.',
    languages: [
      { id: 'rn', name: 'Kirundi', nativeName: 'Ikirundi', script: 'Latin', family: 'Niger-Congo (Bantu)', type: 'official', percentage: 98, speakerCount: '12.5 Million' },
      { id: 'fr', name: 'French', nativeName: 'Français', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 8, speakerCount: '1 Million' }
    ],
    phrases: [{ english: 'Hello', native: 'Bwakeye / Amahoro', phonetic: 'bwah-KEH-yeh / ah-mah-HOH-roh', category: 'greeting' }],
    facts: ['Kirundi is spoken by virtually the entire population of Burundi.']
  },
  { code: 'CV', name: 'Cabo Verde', nativeName: 'Cabo Verde', flag: '🇨🇻', region: 'Africa', subregion: 'Western Africa', capital: 'Praia', population: 590000, multilingualScore: 8.9, coordinates: { x: 38, y: 50 },
    description: 'Cabo Verde uses Portuguese as official state language alongside Cabo Verdean Creole (Kabuverdianu).',
    languages: [
      { id: 'pt', name: 'Portuguese', nativeName: 'Português', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 95, speakerCount: '560,000' },
      { id: 'kea', name: 'Cabo Verdean Creole', nativeName: 'Kabuverdianu', script: 'Latin', family: 'Creole (Portuguese-based)', type: 'national', percentage: 98, speakerCount: '580,000' }
    ],
    phrases: [{ english: 'Hello', native: 'Môri / Olá', phonetic: 'MOH-ree', category: 'greeting' }],
    facts: ['Kabuverdianu is the oldest living Portuguese-based creole language in the world.']
  },
  { code: 'CM', name: 'Cameroon', nativeName: 'Cameroun / Cameroon', flag: '🇨🇲', region: 'Africa', subregion: 'Middle Africa', capital: 'Yaoundé', population: 27900000, multilingualScore: 9.7, coordinates: { x: 50, y: 58 },
    description: 'Cameroon is officially bilingual in French and English, alongside 250+ indigenous languages.',
    languages: [
      { id: 'fr', name: 'French', nativeName: 'Français', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 80, speakerCount: '22 Million' },
      { id: 'en', name: 'English', nativeName: 'English', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 20, speakerCount: '5.5 Million' }
    ],
    phrases: [{ english: 'Hello', native: 'Bonjour / Hello', phonetic: 'bon-ZHOOR', category: 'greeting' }],
    facts: ['Cameroon is often dubbed "Africa in miniature" due to its vast linguistic diversity.']
  },
  { code: 'CF', name: 'Central African Republic', nativeName: 'Centrafrique / Ködrö tî Bêafrîka', flag: '🇨🇫', region: 'Africa', subregion: 'Middle Africa', capital: 'Bangui', population: 5500000, multilingualScore: 9.0, coordinates: { x: 53, y: 58 },
    description: 'CAR recognizes Sango and French as co-official state languages.',
    languages: [
      { id: 'sg', name: 'Sango', nativeName: 'Sängö', script: 'Latin', family: 'Creole (Ngbandi-based)', type: 'official', percentage: 92, speakerCount: '5.0 Million' },
      { id: 'fr', name: 'French', nativeName: 'Français', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 22, speakerCount: '1.2 Million' }
    ],
    phrases: [{ english: 'Hello', native: 'Balaô', phonetic: 'bah-lah-OH', category: 'greeting' }],
    facts: ['Sango is one of the few African creole languages to gain official state status.']
  },
  { code: 'TD', name: 'Chad', nativeName: 'Tchad / تشاد', flag: '🇹🇩', region: 'Africa', subregion: 'Middle Africa', capital: 'N\'Djamena', population: 17700000, multilingualScore: 9.4, coordinates: { x: 52, y: 52 },
    description: 'Chad is officially bilingual in French and Modern Standard Arabic, with 120+ indigenous languages.',
    languages: [
      { id: 'fr', name: 'French', nativeName: 'Français', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 35, speakerCount: '6 Million' },
      { id: 'ar', name: 'Chadian Arabic', nativeName: 'العربية التشادية', script: 'Arabic', family: 'Afroasiatic (Semitic)', type: 'official', percentage: 60, speakerCount: '10.6 Million' }
    ],
    phrases: [{ english: 'Hello', native: 'Marhaba / Bonjour', phonetic: 'mar-HA-bah', category: 'greeting' }],
    facts: ['Chadian Arabic serves as widespread trade lingua franca across Chad.']
  },
  { code: 'KM', name: 'Comoros', nativeName: 'Komori / Comores', flag: '🇰🇲', region: 'Africa', subregion: 'Eastern Africa', capital: 'Moroni', population: 836000, multilingualScore: 9.1, coordinates: { x: 63, y: 68 },
    description: 'Comoros has three official languages: Shikomor (Comorian), Arabic, and French.',
    languages: [
      { id: 'zdj', name: 'Comorian (Shikomor)', nativeName: 'Shimasiwa', script: 'Arabic / Latin', family: 'Niger-Congo (Bantu)', type: 'official', percentage: 96, speakerCount: '800,000' },
      { id: 'ar', name: 'Arabic', nativeName: 'العربية', script: 'Arabic', family: 'Afroasiatic (Semitic)', type: 'official', percentage: 25, speakerCount: '200,000' },
      { id: 'fr', name: 'French', nativeName: 'Français', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 20, speakerCount: '160,000' }
    ],
    phrases: [{ english: 'Hello', native: 'Bariza mkana', phonetic: 'bah-REE-zah m-KAH-nah', category: 'greeting' }],
    facts: ['Shikomor is a Sabaki Bantu language closely related to Swahili.']
  },
  { code: 'CG', name: 'Congo (Brazzaville)', nativeName: 'Congo-Brazzaville', flag: '🇨🇬', region: 'Africa', subregion: 'Middle Africa', capital: 'Brazzaville', population: 5900000, multilingualScore: 8.8, coordinates: { x: 51, y: 62 },
    description: 'Republic of the Congo uses French as official language alongside Lingala and Kituba as national languages.',
    languages: [
      { id: 'fr', name: 'French', nativeName: 'Français', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 80, speakerCount: '4.7 Million' },
      { id: 'ln', name: 'Lingala', nativeName: 'Lingála', script: 'Latin', family: 'Niger-Congo (Bantu)', type: 'national', percentage: 50, speakerCount: '2.9 Million' },
      { id: 'mkw', name: 'Kituba', nativeName: 'Kituba', script: 'Latin', family: 'Niger-Congo (Bantu)', type: 'national', percentage: 40, speakerCount: '2.3 Million' }
    ],
    phrases: [{ english: 'Hello', native: 'Mbote / Bonjour', phonetic: 'm-BOH-teh', category: 'greeting' }],
    facts: ['Lingala is the primary language used in popular music across the Congo Basin.']
  },
  { code: 'CD', name: 'DR Congo (Kinshasa)', nativeName: 'République Démocratique du Congo', flag: '🇨🇩', region: 'Africa', subregion: 'Middle Africa', capital: 'Kinshasa', population: 99000000, multilingualScore: 9.6, coordinates: { x: 53, y: 64 },
    description: 'DR Congo recognizes French as official language alongside 4 national languages: Lingala, Swahili, Kikongo, and Tshiluba.',
    languages: [
      { id: 'fr', name: 'French', nativeName: 'Français', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 51, speakerCount: '50 Million' },
      { id: 'ln', name: 'Lingala', nativeName: 'Lingála', script: 'Latin', family: 'Niger-Congo (Bantu)', type: 'national', percentage: 40, speakerCount: '39 Million' },
      { id: 'sw', name: 'Swahili', nativeName: 'Kiswahili', script: 'Latin', family: 'Niger-Congo (Bantu)', type: 'national', percentage: 35, speakerCount: '34 Million' }
    ],
    phrases: [{ english: 'Hello', native: 'Mbote / Jambo', phonetic: 'm-BOH-teh / JAHM-boh', category: 'greeting' }],
    facts: ['Kinshasa is the second largest French-speaking urban area in the world after Paris.']
  },
  { code: 'DJ', name: 'Djibouti', nativeName: 'Djibouti / جيبوتي', flag: '🇩🇯', region: 'Africa', subregion: 'Eastern Africa', capital: 'Djibouti', population: 1120000, multilingualScore: 9.0, coordinates: { x: 62, y: 52 },
    description: 'Djibouti is officially bilingual in French and Arabic, with Somali and Afar as national languages.',
    languages: [
      { id: 'so', name: 'Somali', nativeName: 'Soomaali', script: 'Latin', family: 'Afroasiatic (Cushitic)', type: 'national', percentage: 60, speakerCount: '670,000' },
      { id: 'aa', name: 'Afar', nativeName: 'Qafár af', script: 'Latin', family: 'Afroasiatic (Cushitic)', type: 'national', percentage: 35, speakerCount: '390,000' },
      { id: 'fr', name: 'French', nativeName: 'Français', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 20, speakerCount: '220,000' }
    ],
    phrases: [{ english: 'Hello', native: 'Is ka warran (Somali) / Mahaba (Afar)', phonetic: 'ees kah WAR-rahn', category: 'greeting' }],
    facts: ['Afar and Somali belong to the Cushitic branch of Afroasiatic family.']
  },
  { code: 'EG', name: 'Egypt', nativeName: 'مصر', flag: '🇪🇬', region: 'Africa', subregion: 'Northern Africa', capital: 'Cairo', population: 109000000, multilingualScore: 7.2, coordinates: { x: 57, y: 44 },
    description: 'Egypt uses Modern Standard Arabic as official language, with Egyptian Arabic (Masri) spoken universally.',
    languages: [
      { id: 'arz', name: 'Egyptian Arabic', nativeName: 'اللغة المصرية العامية', script: 'Arabic', family: 'Afroasiatic (Semitic)', type: 'official', percentage: 98, speakerCount: '105 Million' },
      { id: 'cop', name: 'Coptic', nativeName: 'ⲙⲉⲑⲣⲉⲙⲛ̀ⲭⲏⲙⲛ', script: 'Coptic script', family: 'Afroasiatic (Egyptian)', type: 'recognized', percentage: 0.1, speakerCount: 'Liturgical' }
    ],
    phrases: [{ english: 'Hello', native: 'Ahlan wa sahlan / Ezkayyak', phonetic: 'AH-lan wa SAH-lan / ez-KAY-yak', category: 'greeting' }],
    facts: ['Egyptian Arabic is the most widely understood Arabic dialect in cinema and media across the Arab world.']
  },
  { code: 'GQ', name: 'Equatorial Guinea', nativeName: 'Guinea Ecuatorial', flag: '🇬🇶', region: 'Africa', subregion: 'Middle Africa', capital: 'Malabo', population: 1670000, multilingualScore: 8.9, coordinates: { x: 49, y: 59 },
    description: 'Equatorial Guinea has three official languages: Spanish, French, and Portuguese.',
    languages: [
      { id: 'es', name: 'Spanish', nativeName: 'Español', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 88, speakerCount: '1.4 Million' },
      { id: 'fan', name: 'Fang', nativeName: 'Fang', script: 'Latin', family: 'Niger-Congo (Bantu)', type: 'national', percentage: 80, speakerCount: '1.3 Million' }
    ],
    phrases: [{ english: 'Hello', native: 'Hola / Mbolo', phonetic: 'OH-lah / m-BOH-loh', category: 'greeting' }],
    facts: ['Equatorial Guinea is the only independent African nation where Spanish is an official state language.']
  },
  { code: 'ER', name: 'Eritrea', nativeName: 'ኤርትራ / إرتريا', flag: '🇪🇷', region: 'Africa', subregion: 'Eastern Africa', capital: 'Asmara', population: 3600000, multilingualScore: 9.3, coordinates: { x: 60, y: 50 },
    description: 'Eritrea has no single constitutional official language; Tigrinya, Arabic, and English are working languages.',
    languages: [
      { id: 'ti', name: 'Tigrinya', nativeName: 'ትግርኛ', script: 'Ge\'ez script', family: 'Afroasiatic (Semitic)', type: 'official', percentage: 55, speakerCount: '2.0 Million' },
      { id: 'tig', name: 'Tigre', nativeName: 'ትግሬ', script: 'Ge\'ez script', family: 'Afroasiatic (Semitic)', type: 'national', percentage: 30, speakerCount: '1.1 Million' }
    ],
    phrases: [{ english: 'Hello', native: 'Selam', phonetic: 'seh-LAHM', category: 'greeting' }],
    facts: ['Tigrinya is written in the ancient Ge\'ez syllabary.']
  },
  { code: 'SZ', name: 'Eswatini', nativeName: 'eSwatini', flag: '🇸🇿', region: 'Africa', subregion: 'Southern Africa', capital: 'Mbabane', population: 1200000, multilingualScore: 7.8, coordinates: { x: 57, y: 79 },
    description: 'Eswatini is officially bilingual in siSwati and English.',
    languages: [
      { id: 'ss', name: 'siSwati', nativeName: 'siSwati', script: 'Latin', family: 'Niger-Congo (Bantu)', type: 'official', percentage: 95, speakerCount: '1.1 Million' },
      { id: 'en', name: 'English', nativeName: 'English', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 80, speakerCount: '960,000' }
    ],
    phrases: [{ english: 'Hello', native: 'Yebo / Sawubona', phonetic: 'YEH-boh / sah-woo-BOH-nah', category: 'greeting' }],
    facts: ['siSwati is a Nguni Bantu language closely related to Zulu.']
  },
  { code: 'ET', name: 'Ethiopia', nativeName: 'ኢትዮጵያ', flag: '🇪🇹', region: 'Africa', subregion: 'Eastern Africa', capital: 'Addis Ababa', population: 123000000, multilingualScore: 9.5, coordinates: { x: 60, y: 53 },
    description: 'Ethiopia has 5 federal working languages: Amharic, Afaan Oromo, Tigrinya, Somali, and Afar.',
    languages: [
      { id: 'am', name: 'Amharic', nativeName: 'አማርኛ', script: 'Ge\'ez script', family: 'Afroasiatic (Semitic)', type: 'official', percentage: 32, speakerCount: '39 Million' },
      { id: 'om', name: 'Oromo', nativeName: 'Afaan Oromoo', script: 'Latin (Qubee)', family: 'Afroasiatic (Cushitic)', type: 'official', percentage: 34, speakerCount: '42 Million' }
    ],
    phrases: [{ english: 'Hello', native: 'ሰላም (Selam) / Akkam', phonetic: 'seh-LAHM / ahk-KAHM', category: 'greeting' }],
    facts: ['Ge\'ez script is an abugida where each character represents a consonant-vowel syllable.']
  },
  { code: 'GA', name: 'Gabon', nativeName: 'Gabon', flag: '🇬🇦', region: 'Africa', subregion: 'Middle Africa', capital: 'Libreville', population: 2380000, multilingualScore: 8.8, coordinates: { x: 49, y: 61 },
    description: 'Gabon uses French as sole official language, with 80% fluency across urban centers.',
    languages: [
      { id: 'fr', name: 'French', nativeName: 'Français', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 80, speakerCount: '1.9 Million' },
      { id: 'fan', name: 'Fang', nativeName: 'Fang', script: 'Latin', family: 'Niger-Congo (Bantu)', type: 'national', percentage: 32, speakerCount: '760,000' }
    ],
    phrases: [{ english: 'Hello', native: 'Bonjour / Mbolo', phonetic: 'bon-ZHOOR / m-BOH-loh', category: 'greeting' }],
    facts: ['Gabon has one of the highest French proficiency rates in Sub-Saharan Africa.']
  },
  { code: 'GM', name: 'Gambia', nativeName: 'The Gambia', flag: '🇬🇲', region: 'Africa', subregion: 'Western Africa', capital: 'Banjul', population: 2700000, multilingualScore: 9.2, coordinates: { x: 38, y: 52 },
    description: 'The Gambia uses English as official language alongside Mandinka, Wolof, and Fula.',
    languages: [
      { id: 'en', name: 'English', nativeName: 'English', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 60, speakerCount: '1.6 Million' },
      { id: 'mnk', name: 'Mandinka', nativeName: 'Mandinka', script: 'Latin / N\'Ko', family: 'Mande', type: 'national', percentage: 38, speakerCount: '1.0 Million' },
      { id: 'wo', name: 'Wolof', nativeName: 'Wolof', script: 'Latin', family: 'Niger-Congo (Atlantic)', type: 'national', percentage: 28, speakerCount: '750,000' }
    ],
    phrases: [{ english: 'Hello', native: 'Nba / A waaw', phonetic: 'n-BAH', category: 'greeting' }],
    facts: ['Mandinka and Wolof are widely used trade languages along the Gambia River.']
  },
  { code: 'GH', name: 'Ghana', nativeName: 'Ghana', flag: '🇬🇭', region: 'Africa', subregion: 'Western Africa', capital: 'Accra', population: 33400000, multilingualScore: 9.3, coordinates: { x: 44, y: 55 },
    description: 'Ghana recognizes English as official language alongside 11 government-sponsored languages like Akan (Twi), Ewe, and Ga.',
    languages: [
      { id: 'en', name: 'English', nativeName: 'English', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 67, speakerCount: '22 Million' },
      { id: 'ak', name: 'Akan (Twi/Fante)', nativeName: 'Akan', script: 'Latin', family: 'Niger-Congo (Kwa)', type: 'national', percentage: 80, speakerCount: '26 Million' }
    ],
    phrases: [{ english: 'Hello', native: 'Eti sen / Akwaaba', phonetic: 'eh-TEE sen / ahk-WAH-bah', category: 'greeting' }],
    facts: ['"Akwaaba" means welcome and is the iconic Ghanaian greeting expression.']
  },
  { code: 'GN', name: 'Guinea', nativeName: 'Guinée', flag: '🇬🇳', region: 'Africa', subregion: 'Western Africa', capital: 'Conakry', population: 13800000, multilingualScore: 9.3, coordinates: { x: 40, y: 54 },
    description: 'Guinea uses French as official language alongside Pular (Fula), Maninka, and Susu.',
    languages: [
      { id: 'fr', name: 'French', nativeName: 'Français', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 35, speakerCount: '4.8 Million' },
      { id: 'fuf', name: 'Pular (Fula)', nativeName: 'Pular', script: 'Latin / Adlam', family: 'Niger-Congo (Senegambian)', type: 'national', percentage: 40, speakerCount: '5.5 Million' },
      { id: 'nqo', name: 'Maninka', nativeName: 'Maninkakan', script: 'N\'Ko / Latin', family: 'Mande', type: 'national', percentage: 30, speakerCount: '4.1 Million' }
    ],
    phrases: [{ english: 'Hello', native: 'Bonjour / I ni ce', phonetic: 'bon-ZHOOR / ee nee CHEH', category: 'greeting' }],
    facts: ['N\'Ko script was created in 1949 specifically for Mande languages in Guinea.']
  },
  { code: 'GW', name: 'Guinea-Bissau', nativeName: 'Guiné-Bissau', flag: '🇬🇼', region: 'Africa', subregion: 'Western Africa', capital: 'Bissau', population: 2060000, multilingualScore: 9.2, coordinates: { x: 39, y: 53 },
    description: 'Guinea-Bissau uses Portuguese as official state language, while Guinea-Bissau Creole is widely spoken.',
    languages: [
      { id: 'pt', name: 'Portuguese', nativeName: 'Português', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 14, speakerCount: '290,000' },
      { id: 'pov', name: 'Upper Guinea Creole', nativeName: 'Kriol', script: 'Latin', family: 'Creole (Portuguese-based)', type: 'national', percentage: 90, speakerCount: '1.8 Million' }
    ],
    phrases: [{ english: 'Hello', native: 'Kuma / Olá', phonetic: 'KOO-mah / oh-LAH', category: 'greeting' }],
    facts: ['Kriol is the national identity language spoken across all ethnic groups in Guinea-Bissau.']
  },
  { code: 'CI', name: 'Ivory Coast', nativeName: 'Côte d\'Ivoire', flag: '🇨🇮', region: 'Africa', subregion: 'Western Africa', capital: 'Yamoussoukro', population: 29300000, multilingualScore: 9.4, coordinates: { x: 43, y: 55 },
    description: 'Ivory Coast uses French as official state language alongside Baoulé, Dioula, Dan, and Nouchi.',
    languages: [
      { id: 'fr', name: 'French', nativeName: 'Français', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 70, speakerCount: '20 Million' },
      { id: 'bci', name: 'Baoulé', nativeName: 'Baoulé', script: 'Latin', family: 'Niger-Congo (Kwa)', type: 'national', percentage: 23, speakerCount: '6.7 Million' },
      { id: 'lou', name: 'Nouchi', nativeName: 'Nouchi', script: 'Latin', family: 'Slang Creole', type: 'widely_spoken', percentage: 50, speakerCount: '14 Million' }
    ],
    phrases: [{ english: 'Hello', native: 'Bonjour / Ayoka', phonetic: 'bon-ZHOOR / ah-YOH-kah', category: 'greeting' }],
    facts: ['Nouchi is a popular urban street slang mixture of French and Ivorian indigenous languages.']
  },
  { code: 'KE', name: 'Kenya', nativeName: 'Kenya', flag: '🇰🇪', region: 'Africa', subregion: 'Eastern Africa', capital: 'Nairobi', population: 54000000, multilingualScore: 9.4, coordinates: { x: 61, y: 60 },
    description: 'Kenya is constitutionally bilingual in Swahili (Kiswahili) and English, alongside Sheng urban slang.',
    languages: [
      { id: 'sw', name: 'Swahili', nativeName: 'Kiswahili', script: 'Latin', family: 'Niger-Congo (Bantu)', type: 'official', percentage: 90, speakerCount: '48 Million' },
      { id: 'en', name: 'English', nativeName: 'English', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 80, speakerCount: '43 Million' },
      { id: 'kik', name: 'Kikuyu', nativeName: 'Gĩkũyũ', script: 'Latin', family: 'Niger-Congo (Bantu)', type: 'regional', percentage: 20, speakerCount: '8.1 Million' }
    ],
    phrases: [{ english: 'Hello', native: 'Jambo / Habari', phonetic: 'JAHM-boh / hah-BAH-ree', category: 'greeting' }],
    facts: ['Sheng is a dynamic urban youth language blending Swahili, English, and Luo/Kikuyu.']
  },
  { code: 'LS', name: 'Lesotho', nativeName: 'Lesotho', flag: '🇱🇸', region: 'Africa', subregion: 'Southern Africa', capital: 'Maseru', population: 2300000, multilingualScore: 8.0, coordinates: { x: 55, y: 81 },
    description: 'Lesotho is officially bilingual in Sesotho and English.',
    languages: [
      { id: 'st', name: 'Sesotho', nativeName: 'Sesotho', script: 'Latin', family: 'Niger-Congo (Bantu)', type: 'official', percentage: 99, speakerCount: '2.2 Million' },
      { id: 'en', name: 'English', nativeName: 'English', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 65, speakerCount: '1.5 Million' }
    ],
    phrases: [{ english: 'Hello', native: 'Lumela', phonetic: 'doo-MEH-lah', category: 'greeting' }],
    facts: ['Sesotho uses click consonants borrowed historically from Khoisan languages.']
  },
  { code: 'LR', name: 'Liberia', nativeName: 'Liberia', flag: '🇱🇷', region: 'Africa', subregion: 'Western Africa', capital: 'Monrovia', population: 5300000, multilingualScore: 8.9, coordinates: { x: 40, y: 56 },
    description: 'Liberia uses English as official state language, alongside Liberian Kreyol English.',
    languages: [
      { id: 'en', name: 'English', nativeName: 'English', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 85, speakerCount: '4.5 Million' },
      { id: 'lir', name: 'Liberian Kreyol', nativeName: 'Kolokwa', script: 'Latin', family: 'Creole (English-based)', type: 'widely_spoken', percentage: 70, speakerCount: '3.7 Million' }
    ],
    phrases: [{ english: 'Hello', native: 'How ya doin / Hello', phonetic: 'heh-LOH', category: 'greeting' }],
    facts: ['Liberian Kreyol is heavily influenced by 19th-century American English settler speech.']
  },
  { code: 'LY', name: 'Libya', nativeName: 'ليبيا', flag: '🇱🇾', region: 'Africa', subregion: 'Northern Africa', capital: 'Tripoli', population: 6800000, multilingualScore: 7.2, coordinates: { x: 52, y: 44 },
    description: 'Libya uses Modern Standard Arabic as official language, alongside Tamazight (Berber).',
    languages: [
      { id: 'ar', name: 'Arabic (Libyan)', nativeName: 'العربية', script: 'Arabic', family: 'Afroasiatic (Semitic)', type: 'official', percentage: 95, speakerCount: '6.4 Million' },
      { id: 'zgh', name: 'Tamazight', nativeName: 'ⵜⴰⵎⴰⵣⵉⵖⵜ', script: 'Tifinagh / Latin', family: 'Afroasiatic (Berber)', type: 'recognized', percentage: 10, speakerCount: '680,000' }
    ],
    phrases: [{ english: 'Hello', native: 'مرحبا (Marhaban) / السلام عليكم', phonetic: 'mar-HA-ban', category: 'greeting' }],
    facts: ['Nafusi Tamazight is spoken in the Nafusa Mountains of western Libya.']
  },
  { code: 'MG', name: 'Madagascar', nativeName: 'Madagasikara / Madagascar', flag: '🇲🇬', region: 'Africa', subregion: 'Eastern Africa', capital: 'Antananarivo', population: 29600000, multilingualScore: 8.8, coordinates: { x: 66, y: 72 },
    description: 'Madagascar is constitutionally bilingual in Malagasy and French.',
    languages: [
      { id: 'mg', name: 'Malagasy', nativeName: 'Fiteny Malagasy', script: 'Latin', family: 'Austronesian (Malayo-Polynesian)', type: 'official', percentage: 99, speakerCount: '29 Million' },
      { id: 'fr', name: 'French', nativeName: 'Français', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 20, speakerCount: '5.9 Million' }
    ],
    phrases: [{ english: 'Hello', native: 'Salama', phonetic: 'sah-LAH-mah', category: 'greeting' }],
    facts: ['Malagasy belongs to the Austronesian language family, originating 6,000 miles away in Borneo!']
  },
  { code: 'MW', name: 'Malawi', nativeName: 'Malawi', flag: '🇲🇼', region: 'Africa', subregion: 'Eastern Africa', capital: 'Lilongwe', population: 20400000, multilingualScore: 8.9, coordinates: { x: 60, y: 70 },
    description: 'Malawi recognizes Chichewa as national language and English as official language.',
    languages: [
      { id: 'ny', name: 'Chichewa', nativeName: 'Chichewa', script: 'Latin', family: 'Niger-Congo (Bantu)', type: 'official', percentage: 70, speakerCount: '14 Million' },
      { id: 'en', name: 'English', nativeName: 'English', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 26, speakerCount: '5.3 Million' }
    ],
    phrases: [{ english: 'Hello', native: 'Moni / Muli bwanji', phonetic: 'MOH-nee / moo-lee BWAHN-jee', category: 'greeting' }],
    facts: ['"Malawi" means "Flames of Fire" in Chichewa, referring to sunlight over Lake Malawi.']
  },
  { code: 'ML', name: 'Mali', nativeName: 'Mali', flag: '🇲🇱', region: 'Africa', subregion: 'Western Africa', capital: 'Bamako', population: 22600000, multilingualScore: 9.3, coordinates: { x: 42, y: 50 },
    description: 'Mali recognizes Bambara and 12 other national languages in its constitution.',
    languages: [
      { id: 'bm', name: 'Bambara', nativeName: 'Bamanankan', script: 'Latin / N\'Ko', family: 'Mande', type: 'official', percentage: 80, speakerCount: '18 Million' },
      { id: 'fr', name: 'French', nativeName: 'Français', script: 'Latin', family: 'Indo-European (Romance)', type: 'working', percentage: 15, speakerCount: '3.3 Million' }
    ],
    phrases: [{ english: 'Hello', native: 'I ni ce / I ni sogoma', phonetic: 'ee nee CHEH', category: 'greeting' }],
    facts: ['Bambara serves as the universal lingua franca spoken across 80% of Mali.']
  },
  { code: 'MR', name: 'Mauritania', nativeName: 'موريتانيا / Mauritanie', flag: '🇲🇷', region: 'Africa', subregion: 'Western Africa', capital: 'Nouakchott', population: 4700000, multilingualScore: 8.9, coordinates: { x: 40, y: 48 },
    description: 'Mauritania uses Modern Standard Arabic as official language alongside Hassaniya Arabic and Pulaar.',
    languages: [
      { id: 'mey', name: 'Hassaniya Arabic', nativeName: 'الحسانية', script: 'Arabic', family: 'Afroasiatic (Semitic)', type: 'official', percentage: 85, speakerCount: '4 Million' },
      { id: 'fuc', name: 'Pulaar', nativeName: 'Pulaar', script: 'Latin / Adlam', family: 'Niger-Congo (Senegambian)', type: 'national', percentage: 15, speakerCount: '700,000' }
    ],
    phrases: [{ english: 'Hello', native: 'السلام عليكم / مرحبا', phonetic: 'as-sah-LAAMu ah-LAY-koom', category: 'greeting' }],
    facts: ['Hassaniya Arabic preserves medieval Bedouin vocabulary distinct from Eastern dialects.']
  },
  { code: 'MU', name: 'Mauritius', nativeName: 'Maurice / Mauritius', flag: '🇲🇺', region: 'Africa', subregion: 'Eastern Africa', capital: 'Port Louis', population: 1260000, multilingualScore: 9.4, coordinates: { x: 68, y: 74 },
    description: 'Mauritius uses English for parliamentary business, French for media, and Mauritian Creole universally.',
    languages: [
      { id: 'mfe', name: 'Mauritian Creole', nativeName: 'Morisyen', script: 'Latin', family: 'Creole (French-based)', type: 'national', percentage: 90, speakerCount: '1.1 Million' },
      { id: 'fr', name: 'French', nativeName: 'Français', script: 'Latin', family: 'Indo-European (Romance)', type: 'widely_spoken', percentage: 70, speakerCount: '880,000' },
      { id: 'en', name: 'English', nativeName: 'English', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 50, speakerCount: '630,000' }
    ],
    phrases: [{ english: 'Hello', native: 'Ki manier / Bonzour', phonetic: 'kee mah-NYER / bon-ZOOR', category: 'greeting' }],
    facts: ['Mauritian Creole incorporates French vocabulary with Malagasy and Bantu syntax.']
  },
  { code: 'MA', name: 'Morocco', nativeName: 'المغرب / ⵍⵎⵖⵔⵉⴱ', flag: '🇲🇦', region: 'Africa', subregion: 'Northern Africa', capital: 'Rabat', population: 37000000, multilingualScore: 9.1, coordinates: { x: 44, y: 41 },
    description: 'Morocco constitutionally recognizes Arabic and Tamazight (Berber) as official state languages.',
    languages: [
      { id: 'ary', name: 'Moroccan Arabic (Darija)', nativeName: 'الدارجة', script: 'Arabic', family: 'Afroasiatic (Semitic)', type: 'official', percentage: 92, speakerCount: '34 Million' },
      { id: 'zgh', name: 'Tamazight (Berber)', nativeName: 'ⵜⴰⵎⴰⵣⵉⵖⵜ', script: 'Tifinagh', family: 'Afroasiatic (Berber)', type: 'official', percentage: 28, speakerCount: '10 Million' },
      { id: 'fr', name: 'French', nativeName: 'Français', script: 'Latin', family: 'Indo-European (Romance)', type: 'widely_spoken', percentage: 33, speakerCount: '12 Million' }
    ],
    phrases: [{ english: 'Hello', native: 'السلام عليكم (Salam) / ⴰⵣⵓⵍ (Azul)', phonetic: 'sah-LAHM / ah-ZOOL', category: 'greeting' }],
    facts: ['Tifinagh is the ancient script officially used for Tamazight signage across Morocco.']
  },
  { code: 'MZ', name: 'Mozambique', nativeName: 'Moçambique', flag: '🇲🇿', region: 'Africa', subregion: 'Eastern Africa', capital: 'Maputo', population: 33000000, multilingualScore: 9.2, coordinates: { x: 61, y: 75 },
    description: 'Mozambique uses Portuguese as official state language alongside Emakhuwa, Sena, and Xitsonga.',
    languages: [
      { id: 'pt', name: 'Portuguese', nativeName: 'Português', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 50, speakerCount: '16.5 Million' },
      { id: 'vmw', name: 'Emakhuwa', nativeName: 'Emakhuwa', script: 'Latin', family: 'Niger-Congo (Bantu)', type: 'national', percentage: 26, speakerCount: '8.5 Million' }
    ],
    phrases: [{ english: 'Hello', native: 'Olá / Salibani', phonetic: 'oh-LAH / sah-lee-BAH-nee', category: 'greeting' }],
    facts: ['Mozambique is the only Portuguese-speaking member state of the Commonwealth of Nations.']
  },
  { code: 'NA', name: 'Namibia', nativeName: 'Namibia', flag: '🇳🇦', region: 'Africa', subregion: 'Southern Africa', capital: 'Windhoek', population: 2600000, multilingualScore: 9.1, coordinates: { x: 50, y: 77 },
    description: 'Namibia uses English as official state language, with Oshiwambo, Afrikaans, and Khoekhoe widely spoken.',
    languages: [
      { id: 'en', name: 'English', nativeName: 'English', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 80, speakerCount: '2.0 Million' },
      { id: 'khi', name: 'Khoekhoegowab (Nama/Damara)', nativeName: 'Khoekhoegowab', script: 'Latin with click symbols', family: 'Khoe', type: 'national', percentage: 11, speakerCount: '290,000' },
      { id: 'af', name: 'Afrikaans', nativeName: 'Afrikaans', script: 'Latin', family: 'Indo-European (Germanic)', type: 'national', percentage: 60, speakerCount: '1.5 Million' }
    ],
    phrases: [{ english: 'Hello', native: 'Gora / Goeie dag', phonetic: 'GOH-rah / KHOO-ee DAHK', category: 'greeting' }],
    facts: ['Khoekhoegowab features 4 distinct click consonant types represented by symbols like "!" and "ǂ".']
  },
  { code: 'NE', name: 'Niger', nativeName: 'Niger', flag: '🇳🇪', region: 'Africa', subregion: 'Western Africa', capital: 'Niamey', population: 26000000, multilingualScore: 9.3, coordinates: { x: 48, y: 48 },
    description: 'Niger recognizes Hausa, Zarma-Songhai, Tamajeq, and Fulfulde as national languages alongside French.',
    languages: [
      { id: 'ha', name: 'Hausa', nativeName: 'Hausa', script: 'Latin / Ajami', family: 'Afroasiatic (Chadic)', type: 'national', percentage: 56, speakerCount: '14.5 Million' },
      { id: 'dje', name: 'Zarma', nativeName: 'Zarmaci', script: 'Latin', family: 'Songhay', type: 'national', percentage: 22, speakerCount: '5.7 Million' }
    ],
    phrases: [{ english: 'Hello', native: 'Sannu / Foofo', phonetic: 'SAHN-noo / FOH-foh', category: 'greeting' }],
    facts: ['Hausa is the most widely spoken Chadic language in Africa.']
  },
  { code: 'NG', name: 'Nigeria', nativeName: 'Nigeria', flag: '🇳🇬', region: 'Africa', subregion: 'Western Africa', capital: 'Abuja', population: 223000000, multilingualScore: 9.8, coordinates: { x: 48, y: 54 },
    description: 'Nigeria uses English as official language alongside Hausa, Yoruba, Igbo, and Nigerian Pidgin spoken by 110+ million.',
    languages: [
      { id: 'en', name: 'English', nativeName: 'English', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 50, speakerCount: '110 Million' },
      { id: 'pcm', name: 'Nigerian Pidgin', nativeName: 'Naija', script: 'Latin', family: 'Creole (English-based)', type: 'widely_spoken', percentage: 60, speakerCount: '130 Million' },
      { id: 'ha', name: 'Hausa', nativeName: 'Hausa', script: 'Latin / Ajami', family: 'Afroasiatic (Chadic)', type: 'national', percentage: 30, speakerCount: '67 Million' },
      { id: 'yo', name: 'Yoruba', nativeName: 'Yorùbá', script: 'Latin', family: 'Niger-Congo (Defoid)', type: 'national', percentage: 20, speakerCount: '45 Million' },
      { id: 'ig', name: 'Igbo', nativeName: 'Asụsụ Igbo', script: 'Latin', family: 'Niger-Congo (Igboid)', type: 'national', percentage: 18, speakerCount: '40 Million' }
    ],
    phrases: [{ english: 'Hello', native: 'How far / Bawo (Yoruba) / Sannu (Hausa)', phonetic: 'HOW far / BAH-woh', category: 'greeting' }],
    facts: ['Nigeria is home to over 500 living distinct languages!']
  },
  { code: 'RW', name: 'Rwanda', nativeName: 'Rwanda', flag: '🇷🇼', region: 'Africa', subregion: 'Eastern Africa', capital: 'Kigali', population: 13800000, multilingualScore: 9.1, coordinates: { x: 57, y: 62 },
    description: 'Rwanda has 4 official state languages: Kinyarwanda, French, English, and Swahili.',
    languages: [
      { id: 'rw', name: 'Kinyarwanda', nativeName: 'Ikinyarwanda', script: 'Latin', family: 'Niger-Congo (Bantu)', type: 'official', percentage: 99, speakerCount: '13.7 Million' },
      { id: 'en', name: 'English', nativeName: 'English', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 15, speakerCount: '2.0 Million' },
      { id: 'fr', name: 'French', nativeName: 'Français', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 6, speakerCount: '800,000' }
    ],
    phrases: [{ english: 'Hello', native: 'Muraho / Mwaramutse', phonetic: 'moo-RAH-hoh / mwah-rah-MOOT-seh', category: 'greeting' }],
    facts: ['Kinyarwanda is spoken natively by virtually 100% of Rwandans.']
  },
  { code: 'ST', name: 'Sao Tome and Principe', nativeName: 'São Tomé e Príncipe', flag: '🇸🇹', region: 'Africa', subregion: 'Middle Africa', capital: 'São Tomé', population: 227000, multilingualScore: 8.9, coordinates: { x: 47, y: 60 },
    description: 'Sao Tome and Principe uses Portuguese as official state language alongside Forro Creole.',
    languages: [
      { id: 'pt', name: 'Portuguese', nativeName: 'Português', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 98, speakerCount: '220,000' },
      { id: 'cri', name: 'Forro Creole', nativeName: 'Sãotomense', script: 'Latin', family: 'Creole (Portuguese-based)', type: 'national', percentage: 85, speakerCount: '190,000' }
    ],
    phrases: [{ english: 'Hello', native: 'Olá / Bo macaco', phonetic: 'oh-LAH', category: 'greeting' }],
    facts: ['Forro is a Portuguese-based creole with Bantu substrate from the Gulf of Guinea.']
  },
  { code: 'SN', name: 'Senegal', nativeName: 'Sénégal', flag: '🇸🇳', region: 'Africa', subregion: 'Western Africa', capital: 'Dakar', population: 17300000, multilingualScore: 9.3, coordinates: { x: 37, y: 51 },
    description: 'Senegal uses French as official state language, with Wolof spoken by over 90% of the population.',
    languages: [
      { id: 'wo', name: 'Wolof', nativeName: 'Wolof', script: 'Latin / Garay', family: 'Niger-Congo (Senegambian)', type: 'official', percentage: 92, speakerCount: '16 Million' },
      { id: 'fr', name: 'French', nativeName: 'Français', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 37, speakerCount: '6.4 Million' }
    ],
    phrases: [{ english: 'Hello', native: 'Nanga def / Salamalekum', phonetic: 'nahn-gah DEF / sah-lahm-ah-LAY-koom', category: 'greeting' }],
    facts: ['Wolof serves as the universal national lingua franca across Senegal.']
  },
  { code: 'SC', name: 'Seychelles', nativeName: 'Sesel / Seychelles', flag: '🇸🇨', region: 'Africa', subregion: 'Eastern Africa', capital: 'Victoria', population: 100000, multilingualScore: 9.5, coordinates: { x: 67, y: 64 },
    description: 'Seychelles has 3 constitutional official languages: Seychellois Creole (Seselwa), English, and French.',
    languages: [
      { id: 'crs', name: 'Seychellois Creole', nativeName: 'Seselwa', script: 'Latin', family: 'Creole (French-based)', type: 'official', percentage: 95, speakerCount: '95,000' },
      { id: 'en', name: 'English', nativeName: 'English', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 60, speakerCount: '60,000' },
      { id: 'fr', name: 'French', nativeName: 'Français', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 30, speakerCount: '30,000' }
    ],
    phrases: [{ english: 'Hello', native: 'Bonswa / Bonzour', phonetic: 'bon-ZHOOR', category: 'greeting' }],
    facts: ['Seselwa is taught as a medium of instruction in primary schools in Seychelles.']
  },
  { code: 'SL', name: 'Sierra Leone', nativeName: 'Sierra Leone', flag: '🇸🇱', region: 'Africa', subregion: 'Western Africa', capital: 'Freetown', population: 8600000, multilingualScore: 9.2, coordinates: { x: 39, y: 55 },
    description: 'Sierra Leone uses English as official language alongside Krio spoken by 97% of the nation.',
    languages: [
      { id: 'kri', name: 'Krio', nativeName: 'Krio', script: 'Latin', family: 'Creole (English-based)', type: 'official', percentage: 97, speakerCount: '8.3 Million' },
      { id: 'en', name: 'English', nativeName: 'English', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 15, speakerCount: '1.3 Million' }
    ],
    phrases: [{ english: 'Hello', native: 'Kushieh / How body', phonetic: 'koo-SHEEH', category: 'greeting' }],
    facts: ['Krio connects all ethnic groups across Sierra Leone as primary national language.']
  },
  { code: 'SO', name: 'Somalia', nativeName: 'Soomaaliya / الصومال', flag: '🇸🇴', region: 'Africa', subregion: 'Eastern Africa', capital: 'Mogadishu', population: 17600000, multilingualScore: 8.5, coordinates: { x: 64, y: 55 },
    description: 'Somalia recognizes Somali and Arabic as official state languages under its federal constitution.',
    languages: [
      { id: 'so', name: 'Somali', nativeName: 'Af-Soomaali', script: 'Latin (Shire)', family: 'Afroasiatic (Cushitic)', type: 'official', percentage: 98, speakerCount: '17 Million' },
      { id: 'ar', name: 'Arabic', nativeName: 'العربية', script: 'Arabic', family: 'Afroasiatic (Semitic)', type: 'official', percentage: 20, speakerCount: '3.5 Million' }
    ],
    phrases: [{ english: 'Hello', native: 'Is ka warran / Subax wanaagsan', phonetic: 'ees kah WAR-rahn', category: 'greeting' }],
    facts: ['The Latin-based Shire script became the official written standard for Somali in 1972.']
  },
  { code: 'ZA', name: 'South Africa', nativeName: 'South Africa / Suid-Afrika / iNingizimu Afrika', flag: '🇿🇦', region: 'Africa', subregion: 'Southern Africa', capital: 'Pretoria / Cape Town / Bloemfontein', population: 60600000, multilingualScore: 9.7, coordinates: { x: 54, y: 82 },
    description: 'South Africa constitutionally recognizes 12 official state languages.',
    languages: [
      { id: 'zu', name: 'isiZulu', nativeName: 'isiZulu', script: 'Latin', family: 'Niger-Congo (Bantu)', type: 'official', percentage: 22.7, speakerCount: '13.8 Million' },
      { id: 'xh', name: 'isiXhosa', nativeName: 'isiXhosa', script: 'Latin', family: 'Niger-Congo (Bantu)', type: 'official', percentage: 16, speakerCount: '9.7 Million' },
      { id: 'af', name: 'Afrikaans', nativeName: 'Afrikaans', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 12.1, speakerCount: '7.3 Million' },
      { id: 'en', name: 'English', nativeName: 'English', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 9.6, speakerCount: '5.8 Million' }
    ],
    phrases: [{ english: 'Hello', native: 'Sawubona (Zulu) / Howzit', phonetic: 'sah-woo-BOH-nah', category: 'greeting' }],
    facts: ['In 2023, South African Sign Language (SASL) became the 12th official state language.']
  },
  { code: 'SS', name: 'South Sudan', nativeName: 'South Sudan', flag: '🇸🇸', region: 'Africa', subregion: 'Eastern Africa', capital: 'Juba', population: 11100000, multilingualScore: 9.4, coordinates: { x: 58, y: 56 },
    description: 'South Sudan uses English as official state language alongside Dinka, Nuer, and Juba Arabic.',
    languages: [
      { id: 'en', name: 'English', nativeName: 'English', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 20, speakerCount: '2.2 Million' },
      { id: 'din', name: 'Dinka', nativeName: 'Thuɔŋjäŋ', script: 'Latin', family: 'Nilo-Saharan', type: 'national', percentage: 38, speakerCount: '4.2 Million' },
      { id: 'pga', name: 'Juba Arabic', nativeName: 'عربي جوبا', script: 'Latin / Arabic', family: 'Creole (Arabic-based)', type: 'widely_spoken', percentage: 60, speakerCount: '6.6 Million' }
    ],
    phrases: [{ english: 'Hello', native: 'Kudual (Dinka) / Ita wau', phonetic: 'koo-DOO-ahl', category: 'greeting' }],
    facts: ['Juba Arabic is an Arabic-based pidgin-creole lingua franca widely spoken in Juba.']
  },
  { code: 'SD', name: 'Sudan', nativeName: 'السودان', flag: '🇸🇩', region: 'Africa', subregion: 'Northern Africa', capital: 'Khartoum', population: 45600000, multilingualScore: 8.8, coordinates: { x: 57, y: 51 },
    description: 'Sudan uses Modern Standard Arabic and English as official state languages under its transitional charter.',
    languages: [
      { id: 'ar', name: 'Sudanese Arabic', nativeName: 'اللهجة السودانية', script: 'Arabic', family: 'Afroasiatic (Semitic)', type: 'official', percentage: 80, speakerCount: '36 Million' },
      { id: 'en', name: 'English', nativeName: 'English', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 20, speakerCount: '9 Million' }
    ],
    phrases: [{ english: 'Hello', native: 'السلام عليكم / حبابك', phonetic: 'sah-LAHM ah-LAY-koom', category: 'greeting' }],
    facts: ['Nubian languages like Nobiin have been written in Sudan for over 1,500 years.']
  },
  { code: 'TZ', name: 'Tanzania', nativeName: 'Tanzania', flag: '🇹🇿', region: 'Africa', subregion: 'Eastern Africa', capital: 'Dodoma', population: 65500000, multilingualScore: 9.3, coordinates: { x: 61, y: 64 },
    description: 'Tanzania uses Swahili (Kiswahili) as national official language, alongside English.',
    languages: [
      { id: 'sw', name: 'Swahili', nativeName: 'Kiswahili', script: 'Latin', family: 'Niger-Congo (Bantu)', type: 'official', percentage: 95, speakerCount: '62 Million' },
      { id: 'en', name: 'English', nativeName: 'English', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 15, speakerCount: '9.8 Million' }
    ],
    phrases: [{ english: 'Hello', native: 'Habari / Mambo', phonetic: 'hah-BAH-ree / MAHM-boh', category: 'greeting' }],
    facts: ['Tanzania pioneered Swahili as the unified medium of primary education across East Africa.']
  },
  { code: 'TG', name: 'Togo', nativeName: 'Togo', flag: '🇹🇬', region: 'Africa', subregion: 'Western Africa', capital: 'Lomé', population: 8800000, multilingualScore: 9.1, coordinates: { x: 46, y: 55 },
    description: 'Togo uses French as official language alongside Éwé and Kabiye as national languages.',
    languages: [
      { id: 'fr', name: 'French', nativeName: 'Français', script: 'Latin', family: 'Indo-European (Romance)', type: 'official', percentage: 40, speakerCount: '3.5 Million' },
      { id: 'ee', name: 'Ewe (Éwé)', nativeName: 'Eʋegbe', script: 'Latin', family: 'Niger-Congo (Gbe)', type: 'national', percentage: 45, speakerCount: '3.9 Million' },
      { id: 'kbp', name: 'Kabiye', nativeName: 'Kabiyè', script: 'Latin', family: 'Niger-Congo (Gur)', type: 'national', percentage: 22, speakerCount: '1.9 Million' }
    ],
    phrases: [{ english: 'Hello', native: 'Ndi / Bonjour', phonetic: 'n-DEE / bon-ZHOOR', category: 'greeting' }],
    facts: ['Éwé uses unique phonetic letters like "Ɛ" and "Ɔ" in its Latin orthography.']
  },
  { code: 'TN', name: 'Tunisia', nativeName: 'تونس', flag: '🇹🇳', region: 'Africa', subregion: 'Northern Africa', capital: 'Tunis', population: 12300000, multilingualScore: 8.5, coordinates: { x: 50, y: 40 },
    description: 'Tunisia uses Arabic as official language, with Tunisian Arabic (Tounsi) spoken natively.',
    languages: [
      { id: 'aeb', name: 'Tunisian Arabic (Tounsi)', nativeName: 'تونسي', script: 'Arabic', family: 'Afroasiatic (Semitic)', type: 'official', percentage: 98, speakerCount: '12 Million' },
      { id: 'fr', name: 'French', nativeName: 'Français', script: 'Latin', family: 'Indo-European (Romance)', type: 'widely_spoken', percentage: 65, speakerCount: '8 Million' }
    ],
    phrases: [{ english: 'Hello', native: 'عصبة / عسلامة (Aaslama)', phonetic: 'ah-s-LAH-mah', category: 'greeting' }],
    facts: ['"Aaslama" is the unique Tunisian greeting derived from "Peace be upon you".']
  },
  { code: 'UG', name: 'Uganda', nativeName: 'Uganda', flag: '🇺🇬', region: 'Africa', subregion: 'Eastern Africa', capital: 'Kampala', population: 47200000, multilingualScore: 9.5, coordinates: { x: 59, y: 60 },
    description: 'Uganda is officially bilingual in English and Swahili, alongside Luganda.',
    languages: [
      { id: 'en', name: 'English', nativeName: 'English', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 50, speakerCount: '23 Million' },
      { id: 'sw', name: 'Swahili', nativeName: 'Kiswahili', script: 'Latin', family: 'Niger-Congo (Bantu)', type: 'official', percentage: 35, speakerCount: '16 Million' },
      { id: 'lg', name: 'Luganda', nativeName: 'Oluganda', script: 'Latin', family: 'Niger-Congo (Bantu)', type: 'national', percentage: 40, speakerCount: '18 Million' }
    ],
    phrases: [{ english: 'Hello', native: 'Oli otya (Luganda) / Oli otya', phonetic: 'oh-lee OH-tyah', category: 'greeting' }],
    facts: ['Luganda is the dominant regional language spoken around the Kampala capital area.']
  },
  { code: 'ZM', name: 'Zambia', nativeName: 'Zambia', flag: '🇿🇲', region: 'Africa', subregion: 'Eastern Africa', capital: 'Lusaka', population: 20000000, multilingualScore: 9.3, coordinates: { x: 57, y: 70 },
    description: 'Zambia recognizes English as official state language alongside 7 official regional languages like Bemba and Nyanja.',
    languages: [
      { id: 'en', name: 'English', nativeName: 'English', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 55, speakerCount: '11 Million' },
      { id: 'bem', name: 'Bemba', nativeName: 'Icibemba', script: 'Latin', family: 'Niger-Congo (Bantu)', type: 'official', percentage: 33, speakerCount: '6.6 Million' },
      { id: 'nya', name: 'Nyanja', nativeName: 'Cinyanja', script: 'Latin', family: 'Niger-Congo (Bantu)', type: 'official', percentage: 15, speakerCount: '3.0 Million' }
    ],
    phrases: [{ english: 'Hello', native: 'Muli shani (Bemba) / Bwanji', phonetic: 'moo-lee SHAH-nee', category: 'greeting' }],
    facts: ['Bemba serves as the dominant lingua franca on the Zambian Copperbelt.']
  },
  { code: 'ZW', name: 'Zimbabwe', nativeName: 'Zimbabwe', flag: '🇿🇼', region: 'Africa', subregion: 'Southern Africa', capital: 'Harare', population: 16300000, multilingualScore: 9.5, coordinates: { x: 57, y: 74 },
    description: 'Zimbabwe legally recognizes 16 official state languages in its constitution.',
    languages: [
      { id: 'sn', name: 'Shona', nativeName: 'chiShona', script: 'Latin', family: 'Niger-Congo (Bantu)', type: 'official', percentage: 75, speakerCount: '12.2 Million' },
      { id: 'nd', name: 'Ndebele', nativeName: 'isiNdebele', script: 'Latin', family: 'Niger-Congo (Bantu)', type: 'official', percentage: 18, speakerCount: '2.9 Million' },
      { id: 'en', name: 'English', nativeName: 'English', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 50, speakerCount: '8.1 Million' }
    ],
    phrases: [{ english: 'Hello', native: 'Mhoro (Shona) / Salibonani (Ndebele)', phonetic: 'MHO-roh / sah-lee-boh-NAH-nee', category: 'greeting' }],
    facts: ['Zimbabwe holds a Guinness World Record for having 16 constitutionally official languages!']
  }
];

console.log('Africa compiled count:', worldData.length);
