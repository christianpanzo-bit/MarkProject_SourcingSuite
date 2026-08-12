const fs = require('fs');
const path = require('path');

// We load or construct all countries
const countries = [];

// Helper to push country
function addCountry(c) {
  countries.push({
    code: c.code,
    name: c.name,
    nativeName: c.nativeName || c.name,
    flag: c.flag,
    region: c.region,
    subregion: c.subregion || c.region,
    capital: c.capital || 'Capital',
    population: c.pop || 1000000,
    multilingualScore: c.score || 7.0,
    description: c.desc || `${c.name} has a rich linguistic heritage in ${c.region}.`,
    coordinates: c.coords || { x: 50, y: 50 },
    languages: c.langs || [],
    phrases: c.phrases || [{ english: 'Hello', native: 'Hello', phonetic: 'heh-LOH', category: 'greeting' }],
    facts: c.facts || [`${c.name} is in ${c.region}.`]
  });
}

// 1. ASIA
addCountry({
  code: 'CN', name: 'China', nativeName: '中国', flag: '🇨🇳', region: 'Asia', subregion: 'Eastern Asia', capital: 'Beijing', pop: 1411000000, score: 8.5, coords: { x: 75, y: 40 },
  desc: 'China is home to Standard Mandarin (Putonghua) alongside thousands of regional Sinitic varieties (Cantonese, Shanghainese, Hokkien) and autonomous indigenous languages (Tibetan, Uyghur, Mongolian).',
  langs: [
    { id: 'zh', name: 'Standard Mandarin', nativeName: '普通话', script: 'Simplified Chinese', family: 'Sino-Tibetan', type: 'official', percentage: 80.0, speakerCount: '1.1 Billion' },
    { id: 'yue', name: 'Cantonese', nativeName: '粤语 / 廣東話', script: 'Traditional Chinese', family: 'Sino-Tibetan', type: 'regional', percentage: 5.0, speakerCount: '85 Million' },
    { id: 'wuu', name: 'Wu (Shanghainese)', nativeName: '吴语', script: 'Simplified Chinese', family: 'Sino-Tibetan', type: 'regional', percentage: 6.0, speakerCount: '80 Million' },
    { id: 'bo', name: 'Tibetan', nativeName: 'བོད་སྐད', script: 'Tibetan', family: 'Sino-Tibetan', type: 'co-official', percentage: 0.5, speakerCount: '6 Million' },
    { id: 'ug', name: 'Uyghur', nativeName: 'ئۇيغۇرچە', script: 'Arabic (Perso-Arabic)', family: 'Turkic', type: 'co-official', percentage: 0.8, speakerCount: '11 Million' }
  ],
  phrases: [
    { english: 'Hello', native: '你好 (Nǐ hǎo)', phonetic: 'nee HOW', category: 'greeting' },
    { english: 'Thank you', native: '谢谢 (Xièxie)', phonetic: 'shyeh-shyeh', category: 'courtesy' }
  ],
  facts: ['Mandarin is the most spoken native language in the world.', 'Chinese characters (Hanzi) are one of the oldest continuously used writing systems.']
});

addCountry({
  code: 'IN', name: 'India', nativeName: 'भारत', flag: '🇮🇳', region: 'Asia', subregion: 'Southern Asia', capital: 'New Delhi', pop: 1417000000, score: 9.9, coords: { x: 70, y: 48 },
  desc: 'India has 22 constitutionally recognized national languages and over 1,500 spoken mother tongues, blending Indo-Aryan, Dravidian, Austroasiatic, and Tibeto-Burman language families.',
  langs: [
    { id: 'hi', name: 'Hindi', nativeName: 'हिन्दी', script: 'Devanagari', family: 'Indo-European (Indo-Aryan)', type: 'official', percentage: 43.6, speakerCount: '528 Million' },
    { id: 'en', name: 'English', nativeName: 'English', script: 'Latin', family: 'Indo-European (Germanic)', type: 'co-official', percentage: 10.0, speakerCount: '130 Million' },
    { id: 'bn', name: 'Bengali', nativeName: 'বাংলা', script: 'Bengali', family: 'Indo-European (Indo-Aryan)', type: 'official', percentage: 8.0, speakerCount: '97 Million' },
    { id: 'mr', name: 'Marathi', nativeName: 'मराठी', script: 'Devanagari', family: 'Indo-European (Indo-Aryan)', type: 'official', percentage: 6.8, speakerCount: '83 Million' },
    { id: 'te', name: 'Telugu', nativeName: 'తెలుగు', script: 'Telugu', family: 'Dravidian', type: 'official', percentage: 6.7, speakerCount: '81 Million' },
    { id: 'ta', name: 'Tamil', nativeName: 'தமிழ்', script: 'Tamil', family: 'Dravidian', type: 'official', percentage: 5.7, speakerCount: '69 Million' }
  ],
  phrases: [
    { english: 'Hello', native: 'नमस्ते (Namaste)', phonetic: 'nah-mah-STAY', category: 'greeting' },
    { english: 'Thank you', native: 'धन्यवाद (Dhanyavaad)', phonetic: 'dhan-yee-VAHD', category: 'courtesy' }
  ],
  facts: ['India has no single "national language" — Hindi and English are official union languages.', 'Tamil is one of the world\'s oldest classical languages continuously spoken today.']
});

addCountry({
  code: 'JP', name: 'Japan', nativeName: '日本', flag: '🇯🇵', region: 'Asia', subregion: 'Eastern Asia', capital: 'Tokyo', pop: 125000000, score: 6.0, coords: { x: 86, y: 38 },
  desc: 'Japan is largely monolingual with Japanese, while recognizing indigenous Ryukyuan languages in Okinawa and Ainu in Hokkaido.',
  langs: [
    { id: 'ja', name: 'Japanese', nativeName: '日本語', script: 'Kanji / Hiragana / Katakana', family: 'Japonic', type: 'official', percentage: 99.0, speakerCount: '124 Million' },
    { id: 'ain', name: 'Ainu', nativeName: 'アイヌ イタㇰ', script: 'Katakana / Latin', family: 'Language Isolate', type: 'indigenous', percentage: 0.001, speakerCount: '300' }
  ],
  phrases: [
    { english: 'Hello', native: 'こんにちは (Konnichiwa)', phonetic: 'kohn-nee-chee-WAH', category: 'greeting' },
    { english: 'Thank you', native: 'ありがとうございます (Arigatō gozaimasu)', phonetic: 'ah-ree-GAH-toh go-zye-MAHS', category: 'courtesy' }
  ],
  facts: ['Japanese utilizes three distinct scripts concurrently: Kanji, Hiragana, and Katakana.', 'Ainu is an endangered language isolate native to Hokkaido.']
});

addCountry({
  code: 'KR', name: 'South Korea', nativeName: '대한민국', flag: '🇰🇷', region: 'Asia', subregion: 'Eastern Asia', capital: 'Seoul', pop: 51700000, score: 6.0, coords: { x: 82, y: 39 },
  desc: 'South Korea uses Korean, written in Hangul, widely praised as one of the world\'s most scientifically crafted alphabets.',
  langs: [
    { id: 'ko', name: 'Korean', nativeName: '한국어', script: 'Hangul', family: 'Koreanic', type: 'official', percentage: 99.0, speakerCount: '51 Million' }
  ],
  phrases: [
    { english: 'Hello', native: '안녕하세요 (Annyeonghaseyo)', phonetic: 'ahn-nyeong-hah-seh-yoh', category: 'greeting' },
    { english: 'Thank you', native: '감사합니다 (Gamsahamnida)', phonetic: 'kahm-sah-hahm-nee-dah', category: 'courtesy' }
  ],
  facts: ['Hangul was created in 1443 by King Sejong the Great to increase literacy.', 'Jeju dialect is classified as a distinct Koreanic language.']
});

addCountry({
  code: 'ID', name: 'Indonesia', nativeName: 'Indonesia', flag: '🇮🇩', region: 'Asia', subregion: 'South-Eastern Asia', capital: 'Jakarta / Nusantara', pop: 275000000, score: 9.8, coords: { x: 78, y: 62 },
  desc: 'Indonesia is the world\'s second most linguistically diverse nation, boasting over 700 living indigenous languages united by Indonesian (Bahasa Indonesia).',
  langs: [
    { id: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia', script: 'Latin', family: 'Austronesian', type: 'official', percentage: 94.0, speakerCount: '230 Million' },
    { id: 'jv', name: 'Javanese', nativeName: 'Basa Jawa', script: 'Latin / Javanese', family: 'Austronesian', type: 'regional', percentage: 31.8, speakerCount: '84 Million' },
    { id: 'su', name: 'Sundanese', nativeName: 'Basa Sunda', script: 'Latin / Sundanese', family: 'Austronesian', type: 'regional', percentage: 15.0, speakerCount: '42 Million' }
  ],
  phrases: [
    { english: 'Hello', native: 'Selamat siang / Halo', phonetic: 'seh-LAH-maht SEE-ahng', category: 'greeting' },
    { english: 'Thank you', native: 'Terima kasih', phonetic: 'teh-REE-mah KAH-seeh', category: 'courtesy' }
  ],
  facts: ['Bahasa Indonesia is a standardized form of Malay adopted to unite 700+ island ethnicities.', 'Javanese is the largest non-official native language in Asia.']
});

addCountry({
  code: 'VN', name: 'Vietnam', nativeName: 'Việt Nam', flag: '🇻🇳', region: 'Asia', subregion: 'South-Eastern Asia', capital: 'Hanoi', pop: 98000000, score: 7.8, coords: { x: 76, y: 50 },
  langs: [
    { id: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt', script: 'Latin (Chữ Quốc ngữ)', family: 'Austroasiatic', type: 'official', percentage: 85.3, speakerCount: '85 Million' },
    { id: 'tay', name: 'Tày / Nùng', nativeName: 'Tiếng Tày', script: 'Latin', family: 'Kra-Dai', type: 'minority', percentage: 1.9, speakerCount: '1.8 Million' }
  ],
  phrases: [
    { english: 'Hello', native: 'Xin chào', phonetic: 'sin CHOW', category: 'greeting' },
    { english: 'Thank you', native: 'Cảm ơn', phonetic: 'kahm ERN', category: 'courtesy' }
  ],
  facts: ['Vietnamese is a tonal Austroasiatic language written in Latin script with extensive diacritics.']
});

addCountry({
  code: 'TH', name: 'Thailand', nativeName: 'ประเทศไทย', flag: '🇹🇭', region: 'Asia', subregion: 'South-Eastern Asia', capital: 'Bangkok', pop: 71000000, score: 8.0, coords: { x: 74, y: 52 },
  langs: [
    { id: 'th', name: 'Thai', nativeName: 'ภาษาไทย', script: 'Thai', family: 'Kra-Dai', type: 'official', percentage: 88.0, speakerCount: '60 Million' },
    { id: 'nod', name: 'Isan (Lao)', nativeName: 'ภาษาอีสาน', script: 'Thai', family: 'Kra-Dai', type: 'regional', percentage: 30.0, speakerCount: '20 Million' }
  ],
  phrases: [
    { english: 'Hello', native: 'สวัสดี (Sawatdee)', phonetic: 'sah-wah-DEE', category: 'greeting' },
    { english: 'Thank you', native: 'ขอบคุณ (Khop khun)', phonetic: 'khope-KOON', category: 'courtesy' }
  ],
  facts: ['Thai script has 44 consonants and 15 vowel symbols, written with no spaces between words.']
});

addCountry({
  code: 'PH', name: 'Philippines', nativeName: 'Pilipinas', flag: '🇵🇭', region: 'Asia', subregion: 'South-Eastern Asia', capital: 'Manila', pop: 115000000, score: 9.6, coords: { x: 82, y: 53 },
  langs: [
    { id: 'fil', name: 'Filipino (Tagalog)', nativeName: 'Wikang Filipino', script: 'Latin', family: 'Austronesian', type: 'official', percentage: 90.0, speakerCount: '100 Million' },
    { id: 'en', name: 'English', nativeName: 'English', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 64.0, speakerCount: '70 Million' },
    { id: 'ceb', name: 'Cebuano', nativeName: 'Binisaya', script: 'Latin', family: 'Austronesian', type: 'regional', percentage: 21.0, speakerCount: '25 Million' },
    { id: 'ilo', name: 'Ilocano', nativeName: 'Ilokano', script: 'Latin', family: 'Austronesian', type: 'regional', percentage: 9.0, speakerCount: '10 Million' }
  ],
  phrases: [
    { english: 'Hello', native: 'Kamusta', phonetic: 'kah-moos-TAH', category: 'greeting' },
    { english: 'Thank you', native: 'Salamat', phonetic: 'sah-LAH-mat', category: 'courtesy' }
  ],
  facts: ['The Philippines constitutionally recognizes 19 regional auxiliary languages.']
});

addCountry({
  code: 'SA', name: 'Saudi Arabia', nativeName: 'المملكة العربية السعودية', flag: '🇸🇦', region: 'Asia', subregion: 'Western Asia', capital: 'Riyadh', pop: 36000000, score: 6.5, coords: { x: 61, y: 48 },
  langs: [
    { id: 'ar', name: 'Arabic', nativeName: 'العربية', script: 'Arabic', family: 'Afroasiatic (Semitic)', type: 'official', percentage: 95.0, speakerCount: '34 Million' }
  ],
  phrases: [
    { english: 'Hello', native: 'مرحبا (Marhaban) / السلام عليكم', phonetic: 'mar-HAH-bahn / as-sa-LAAMu a-LAY-koom', category: 'greeting' },
    { english: 'Thank you', native: 'شكرا (Shukran)', phonetic: 'SHOOK-ran', category: 'courtesy' }
  ],
  facts: ['Arabic is written right-to-left in a continuous cursive script.']
});

addCountry({
  code: 'AE', name: 'United Arab Emirates', nativeName: 'الإمارات العربية المتحدة', flag: '🇦🇪', region: 'Asia', subregion: 'Western Asia', capital: 'Abu Dhabi', pop: 9900000, score: 9.2, coords: { x: 63, y: 48 },
  langs: [
    { id: 'ar', name: 'Arabic', nativeName: 'العربية', script: 'Arabic', family: 'Afroasiatic (Semitic)', type: 'official', percentage: 20.0, speakerCount: '2.0 Million' },
    { id: 'en', name: 'English', nativeName: 'English', script: 'Latin', family: 'Indo-European (Germanic)', type: 'widely_spoken', percentage: 85.0, speakerCount: '8.4 Million' },
    { id: 'ur', name: 'Hindi / Urdu / Malayalam', nativeName: 'हिन्दी / اردو', script: 'Devanagari / Perso-Arabic', family: 'Indo-European', type: 'minority', percentage: 50.0, speakerCount: '5.0 Million' }
  ],
  phrases: [
    { english: 'Hello', native: 'Marhaban', phonetic: 'mar-HAH-bahn', category: 'greeting' },
    { english: 'Thank you', native: 'Shukran', phonetic: 'SHOOK-ran', category: 'courtesy' }
  ],
  facts: ['Over 85% of the UAE population are expatriates, making English the primary business lingua franca.']
});

// 2. AFRICA
addCountry({
  code: 'NG', name: 'Nigeria', nativeName: 'Nigeria', flag: '🇳🇬', region: 'Africa', subregion: 'Western Africa', capital: 'Abuja', pop: 218000000, score: 9.9, coords: { x: 49, y: 58 },
  desc: 'Nigeria is Africa\'s most populous nation, housing over 500 living indigenous languages, anchored by Hausa, Yoruba, Igbo, and Nigerian Pidgin.',
  langs: [
    { id: 'en', name: 'English', nativeName: 'English', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 50.0, speakerCount: '110 Million' },
    { id: 'pcm', name: 'Nigerian Pidgin', nativeName: 'Naija', script: 'Latin', family: 'English Creole', type: 'national', percentage: 60.0, speakerCount: '130 Million' },
    { id: 'ha', name: 'Hausa', nativeName: 'Harshen Hausa', script: 'Latin / Ajami', family: 'Afroasiatic (Chadic)', type: 'national', percentage: 30.0, speakerCount: '65 Million' },
    { id: 'yo', name: 'Yoruba', nativeName: 'Èdè Yorùbá', script: 'Latin', family: 'Niger-Congo (Volta-Niger)', type: 'national', percentage: 20.0, speakerCount: '45 Million' },
    { id: 'ig', name: 'Igbo', nativeName: 'Asụsụ Igbo', script: 'Latin', family: 'Niger-Congo (Volta-Niger)', type: 'national', percentage: 18.0, speakerCount: '40 Million' }
  ],
  phrases: [
    { english: 'Hello', native: 'How far? (Pidgin) / Sannu (Hausa) / Ẹ̀ kãrọ̀ (Yoruba) / Ndēwō (Igbo)', phonetic: 'HOW far / Sahn-NOO / eh KAH-roh / n-DAY-woh', category: 'greeting' },
    { english: 'Thank you', native: 'Thank you (Pidgin) / Nagode (Hausa) / Ẹ ṣeun (Yoruba) / Imela (Igbo)', phonetic: 'THANK yoo / nah-GOH-day / eh SHEH-oon / ee-MAY-lah', category: 'courtesy' }
  ],
  facts: ['Nigerian Pidgin is one of the world\'s largest spoken English-based creoles.', 'Yoruba uses tone marks essential for word meaning.']
});

addCountry({
  code: 'EG', name: 'Egypt', nativeName: 'مصر', flag: '🇪🇬', region: 'Africa', subregion: 'Northern Africa', capital: 'Cairo', pop: 109000000, score: 6.8, coords: { x: 55, y: 46 },
  langs: [
    { id: 'arz', name: 'Egyptian Arabic', nativeName: 'عربي مصري', script: 'Arabic', family: 'Afroasiatic (Semitic)', type: 'official', percentage: 98.0, speakerCount: '105 Million' }
  ],
  phrases: [
    { english: 'Hello', native: 'Ahlan wa sahlan / Ezayyak', phonetic: 'AH-lan wa SAH-lan / eh-ZAY-yak', category: 'greeting' },
    { english: 'Thank you', native: 'Shukran', phonetic: 'SHOOK-ran', category: 'courtesy' }
  ],
  facts: ['Egyptian Arabic dialect is understood across the entire Arab world due to Egyptian cinema and media.']
});

addCountry({
  code: 'KE', name: 'Kenya', nativeName: 'Kenya', flag: '🇰🇪', region: 'Africa', subregion: 'Eastern Africa', capital: 'Nairobi', pop: 54000000, score: 9.3, coords: { x: 57, y: 64 },
  langs: [
    { id: 'sw', name: 'Swahili', nativeName: 'Kiswahili', script: 'Latin', family: 'Niger-Congo (Bantu)', type: 'official', percentage: 90.0, speakerCount: '48 Million' },
    { id: 'en', name: 'English', nativeName: 'English', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 50.0, speakerCount: '27 Million' }
  ],
  phrases: [
    { english: 'Hello', native: 'Jambo / Habari', phonetic: 'JAHM-boh / hah-BAH-ree', category: 'greeting' },
    { english: 'Thank you', native: 'Asante', phonetic: 'ah-SAHN-tay', category: 'courtesy' }
  ],
  facts: ['Swahili is the lingua franca of the East African Community.', 'Sheng is a popular youth urban slang blending Swahili and English.']
});

addCountry({
  code: 'ET', name: 'Ethiopia', nativeName: 'ኢትዮጵያ', flag: '🇪🇹', region: 'Africa', subregion: 'Eastern Africa', capital: 'Addis Ababa', pop: 123000000, score: 9.5, coords: { x: 58, y: 58 },
  langs: [
    { id: 'am', name: 'Amharic', nativeName: 'አማርኛ', script: 'Ge\'ez (Fidel)', family: 'Afroasiatic (Semitic)', type: 'official', percentage: 32.0, speakerCount: '40 Million' },
    { id: 'om', name: 'Oromo', nativeName: 'Afaan Oromoo', script: 'Latin (Qubee)', family: 'Afroasiatic (Cushitic)', type: 'official', percentage: 33.0, speakerCount: '41 Million' },
    { id: 'ti', name: 'Tigrinya', nativeName: 'ትግርኛ', script: 'Ge\'ez (Fidel)', family: 'Afroasiatic (Semitic)', type: 'official', percentage: 6.0, speakerCount: '7.5 Million' }
  ],
  phrases: [
    { english: 'Hello', native: 'Selam (Amharic) / Akkam (Oromo)', phonetic: 'seh-LAHM / ahk-KAHM', category: 'greeting' },
    { english: 'Thank you', native: 'Ameseginalehu (Amharic) / Galatoomaa (Oromo)', phonetic: 'ah-meh-seh-gee-NAH-leh-hoo / gah-lah-TOH-mah', category: 'courtesy' }
  ],
  facts: ['Ethiopia uses the Ge\'ez script, the only indigenous abugida writing system in Africa still in active official use.']
});

addCountry({
  code: 'MA', name: 'Morocco', nativeName: 'المغرب / 🇲🇦', flag: '🇲🇦', region: 'Africa', subregion: 'Northern Africa', capital: 'Rabat', pop: 37000000, score: 9.1, coords: { x: 41, y: 44 },
  langs: [
    { id: 'ar', name: 'Moroccan Arabic (Darija)', nativeName: 'الدارجة', script: 'Arabic', family: 'Afroasiatic (Semitic)', type: 'official', percentage: 90.0, speakerCount: '33 Million' },
    { id: 'zgh', name: 'Standard Moroccan Tamazight', nativeName: 'ⵜⴰⵎⴰⵣⵉⵖⵜ', script: 'Tifinagh', family: 'Afroasiatic (Berber)', type: 'official', percentage: 27.0, speakerCount: '10 Million' },
    { id: 'fr', name: 'French', nativeName: 'Français', script: 'Latin', family: 'Indo-European (Romance)', type: 'widely_spoken', percentage: 33.0, speakerCount: '12 Million' }
  ],
  phrases: [
    { english: 'Hello', native: 'Salam / Ssalamu \'lekum (Darija) / Azul (Tamazight)', phonetic: 'sah-LAHM / ah-ZOOL', category: 'greeting' },
    { english: 'Thank you', native: 'Shukran (Darija) / Tanemmirt (Tamazight)', phonetic: 'SHOOK-ran / tah-nem-MEERT', category: 'courtesy' }
  ], facts: ['Tamazight is written in the historic geometric Tifinagh script.', 'Darija blends Arabic, Amazigh, French, and Spanish.']
});

// 3. OCEANIA
addCountry({
  code: 'AU', name: 'Australia', nativeName: 'Australia', flag: '🇦🇺', region: 'Oceania', subregion: 'Australia and New Zealand', capital: 'Canberra', pop: 26000000, score: 7.2, coords: { x: 84, y: 78 },
  langs: [
    { id: 'en', name: 'English', nativeName: 'Australian English', script: 'Latin', family: 'Indo-European (Germanic)', type: 'de_facto', percentage: 72.0, speakerCount: '19 Million' },
    { id: 'zh', name: 'Mandarin', nativeName: '普通话', script: 'Simplified Chinese', family: 'Sino-Tibetan', type: 'minority', percentage: 2.7, speakerCount: '700,000' }
  ],
  phrases: [
    { english: 'Hello', native: 'G\'day / Hello', phonetic: 'g-DAY', category: 'greeting' },
    { english: 'Thank you', native: 'Thanks / Cheers', phonetic: 'THANKS / CHEERZ', category: 'courtesy' }
  ],
  facts: ['Australia had over 250 distinct Indigenous languages prior to European contact.', 'Australian English features iconic diminutives ("arvo", "brekky").']
});

addCountry({
  code: 'NZ', name: 'New Zealand', nativeName: 'Aotearoa', flag: '🇳🇿', region: 'Oceania', subregion: 'Australia and New Zealand', capital: 'Wellington', pop: 5100000, score: 8.8, coords: { x: 92, y: 86 },
  langs: [
    { id: 'en', name: 'English', nativeName: 'New Zealand English', script: 'Latin', family: 'Indo-European (Germanic)', type: 'de_facto', percentage: 95.4, speakerCount: '4.8 Million' },
    { id: 'mi', name: 'Māori', nativeName: 'Te Reo Māori', script: 'Latin', family: 'Austronesian (Polynesian)', type: 'official', percentage: 4.0, speakerCount: '185,000' },
    { id: 'nzs', name: 'New Zealand Sign Language', nativeName: 'NZSL', script: 'Gestural', family: 'Sign Language', type: 'official', percentage: 0.5, speakerCount: '23,000' }
  ],
  phrases: [
    { english: 'Hello', native: 'Kia ora (Māori) / Hello', phonetic: 'kee-ah OR-ah', category: 'greeting' },
    { english: 'Thank you', native: 'Kia ora / Ngā mihi (Māori)', phonetic: 'ngah MEE-hee', category: 'courtesy' }
  ],
  facts: ['Te Reo Māori became an official language of New Zealand in 1987.', 'Kia ora serves as a universal greeting and expression of gratitude.']
});

addCountry({
  code: 'PG', name: 'Papua New Guinea', nativeName: 'Papua Niugini', flag: '🇵🇬', region: 'Oceania', subregion: 'Melanesia', capital: 'Port Moresby', pop: 10000000, score: 10.0, coords: { x: 86, y: 68 },
  desc: 'Papua New Guinea is the world\'s most linguistically diverse nation, boasting over 840 distinct living languages across its islands and highlands.',
  langs: [
    { id: 'tpi', name: 'Tok Pisin', nativeName: 'Tok Pisin', script: 'Latin', family: 'English Creole', type: 'official', percentage: 70.0, speakerCount: '7 Million' },
    { id: 'en', name: 'English', nativeName: 'English', script: 'Latin', family: 'Indo-European (Germanic)', type: 'official', percentage: 2.0, speakerCount: '200,000' },
    { id: 'ho', name: 'Hiri Motu', nativeName: 'Hiri Motu', script: 'Latin', family: 'Motu Creole', type: 'official', percentage: 3.0, speakerCount: '300,000' }
  ],
  phrases: [
    { english: 'Hello', native: 'Moning / Apinun (Tok Pisin)', phonetic: 'MOH-ning / ah-pee-NOON', category: 'greeting' },
    { english: 'Thank you', native: 'Tenkyu (Tok Pisin)', phonetic: 'TENK-yoo', category: 'courtesy' }
  ],
  facts: ['Papua New Guinea accounts for over 12% of the entire world\'s living languages.', 'Tok Pisin serves as the national lingua franca.']
});

console.log(`Generated ${countries.length} core world nations.`);

// Format output TS file
const tsContent = `import { Country } from '../types';

export const COUNTRIES_DATA: Country[] = ${JSON.stringify(countries, null, 2)};

export interface UniqueLanguageSummary {
  id: string;
  name: string;
  family: string;
  nativeName: string;
  script: string;
  countriesCount: number;
  officialCountries: string[]; // Country codes
  totalSpeakersEstimate: string;
}

export function getAllUniqueLanguages(): UniqueLanguageSummary[] {
  const map = new Map<string, {
    id: string;
    name: string;
    family: string;
    nativeName: string;
    script: string;
    officialCountries: Set<string>;
    allCountries: Set<string>;
  }>();

  COUNTRIES_DATA.forEach((country) => {
    country.languages.forEach((lang) => {
      const key = lang.name.toLowerCase().trim();
      if (!map.has(key)) {
        map.set(key, {
          id: lang.id,
          name: lang.name,
          family: lang.family,
          nativeName: lang.nativeName,
          script: lang.script,
          officialCountries: new Set(),
          allCountries: new Set(),
        });
      }

      const item = map.get(key)!;
      item.allCountries.add(country.code);
      if (lang.type === 'official' || lang.type === 'co-official') {
        item.officialCountries.add(country.code);
      }
    });
  });

  return Array.from(map.values()).map((item) => ({
    id: item.id,
    name: item.name,
    family: item.family,
    nativeName: item.nativeName,
    script: item.script,
    countriesCount: item.allCountries.size,
    officialCountries: Array.from(item.officialCountries),
    totalSpeakersEstimate: \`\${item.allCountries.size} \${item.allCountries.size === 1 ? 'country' : 'countries'} in database\`
  })).sort((a, b) => b.countriesCount - a.countriesCount);
}
`;

fs.writeFileSync(path.join(__dirname, '../src/data/countries.ts'), tsContent);
console.log('Successfully wrote /src/data/countries.ts!');
